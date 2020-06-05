import { Service } from 'egg';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';
import * as request from 'request-promise';
import * as nodemailer from 'nodemailer';
import * as sendgridgMail from '@sendgrid/mail';

class UtilsService extends Service {
    async md5(filepath) {
        const buffer = fs.readFileSync(filepath);
        const fsHash = crypto.createHash('md5');
        fsHash.update(buffer);
        const md5 = fsHash.digest('hex');
        return md5;
    }

    async download(url, name) {
        const exif = url.split('.').reverse()[0];
        const newname = name + '.' + exif;
        const savePath = path.join(__dirname, '../../public/img/download/');

        if (!fs.existsSync(savePath)) {
            await fs.mkdirSync(savePath);
        }

        try {
            await fs.accessSync(savePath + newname);
        } catch (error) {
            await request(url).pipe(fs.createWriteStream(savePath + newname));
        }

        if (fs.statSync(savePath + newname).size === 0) {
            await fs.unlinkSync(savePath + newname);
            return null;
        }

        return `/img/download/${newname}`;
    }

    async sendMail({ to, subject, text, html }) {
        let content = {
            from: '',
            to,
            subject,
            text,
            html,
        };

        const data = await this.ctx.model.Config.findOne({});

        if (data) {
            const {
                emailType,
                emailName,
                emailSender,
                smtpHost,
                smtpPort,
                smtpSecure,
                smtpUser,
                smtpPass,
                sendgrid,
            } = data;
            const smtp = {
                host: smtpHost,
                port: smtpPort,
                secure: smtpSecure,
                user: smtpUser,
                pass: smtpPass,
            };

            content.from = `${emailName}<${emailSender}>`;

            switch (emailType) {
                case 'smtp':
                    this.smtpSend(smtp, content);
                    break;
                case 'sendgrid':
                    this.sendgridSend(sendgrid, content);
                    break;
                default:
                    break;
            }
        }
    }

    async smtpSend(smtp, mailContent) {
        const transporter = nodemailer.createTransport({
            host: smtp.host,
            port: smtp.port,
            secure: smtp.secure,
            auth: {
                user: smtp.user,
                pass: smtp.pass,
            },
        });

        transporter.sendMail(mailContent, (error, info) => {
            if (error) {
                return error;
            }
        });
    }

    async sendgridSend(sendgrid, mailContent) {
        sendgridgMail.setApiKey(sendgrid);
        sendgridgMail.send(mailContent);
    }

    async cacheSet(key, value, time = this.app.config.expired) {
        const { app } = this;
        const expired = time + Math.floor(Math.random() * time);
        await app.redis.set(key, JSON.stringify(value), 'EX', expired);
    }

    async cacheGet(key) {
        const { app } = this;
        const data = await app.redis.get(key);
        return data && JSON.parse(data);
    }

    async cacheInit(key, fn, time = this.app.config.expired) {
        const { ctx } = this;
        const cache = await this.cacheGet(key);
        if (cache) {
            ctx.helper.send(cache);
        } else {
            const result = await fn();
            if (typeof result !== 'number') {
                await this.cacheSet(key, result, time);
            }
            ctx.helper.send(result);
        }
    }

    async generateCode(id, time, length=6) {
        const code = Math.random().toString().slice(-length);
        const cache = await this.app.redis.get(code);

        if (cache) {
            return this.generateCode(id, time);
        } else {
            await this.app.redis.set(code, id, 'EX', time);
            return code;
        }
    }

    async authCode(code) {
        const cache = await this.app.redis.get(code);
        if (cache) {
            await this.app.redis.del(code);
        }
        return cache;
    }

    async isSensitiveWord(word) {
        let cache = await this.app.redis.get('sensitiveWord');
        if (!cache) {
            cache = await this.ctx.helper.getWordFilter();
            cache && this.app.redis.set('sensitiveWord', cache, 'EX', 3600 * 24);
        }

        if (!cache) return false;

        const wordArr = cache.split('\n').filter((item) => item);
        const result = wordArr.some((item) => {
            const regexp = new RegExp(item);
            return regexp.test(word);
        });
        return result;
    }
}

export default UtilsService;
