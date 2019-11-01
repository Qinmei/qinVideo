import { Service } from 'egg';
import * as crypto from 'crypto';
import * as fs from 'fs';

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

	async sendMail({ to, subject, text, html }) {
		let content = {
			from: '',
			to,
			subject,
			text,
			html
		};

		const data = await this.ctx.model.Config.findOne({});

		if (data) {
			const { emailType, emailName, emailSender, smtpHost, smtpPort, smtpSecure, smtpUser, smtpPass, sendgrid } = data;
			const smtp = {
				host: smtpHost,
				port: smtpPort,
				secure: smtpSecure,
				user: smtpUser,
				pass: smtpPass
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
				pass: smtp.pass
			}
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
}

export default UtilsService;
