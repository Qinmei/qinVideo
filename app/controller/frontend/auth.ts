import { Controller } from 'egg';
import * as jwt from 'jsonwebtoken';
import * as uuidv4 from 'uuid/v4';

class AuthController extends Controller {
    async info() {
        const { ctx, service } = this;
        const userId = ctx.state.user.id;

        if (!userId) return ctx.helper.status(403);

        const result = await service.user.info(userId).catch(() => 11000);
        ctx.helper.send(result);
    }

    async existByName(name: string) {
        const { ctx, service } = this;
        const nameResult = await service.user.exist({ name });

        if (!nameResult) {
            ctx.helper.error(10006);
        }
        return nameResult;
    }

    async existByEmail(email: string) {
        const { ctx, service } = this;
        const emailResult = await service.user.exist({ email });

        if (!emailResult) {
            ctx.helper.error(10012);
        }
        return emailResult;
    }

    async noExistByName(oldName: string) {
        const { ctx, service } = this;
        const name = oldName.replace(/\s/g, '');

        if (name.replace(/[\u4e00-\u9fa5]/g, 'aa').length < 6) {
            ctx.helper.error(11020);
        }

        if (name.replace(/[\u4e00-\u9fa5]/g, 'aa').length > 30) {
            ctx.helper.error(11021);
        }

        const nameResult = await service.user.exist({ name });

        if (nameResult) {
            ctx.helper.error(10005);
        }

        const sensitive = await service.utils.isSensitiveWord(name);

        if (sensitive) {
            ctx.helper.error(10019);
        }
        return true;
    }

    async noExistByEmail(email: string) {
        const { ctx, service } = this;

        if (email.length > 30) {
            ctx.helper.error(10022);
        }

        if (!ctx.helper.validateEmail(email)) {
            ctx.helper.error(10023);
        }

        const emailResult = await service.user.exist({ email });

        if (emailResult) {
            ctx.helper.error(10007);
        }
        return emailResult;
    }

    async generateToken(userInfo: any) {
        const { ctx } = this;
        const { _id, email, name, level, score, avatar, background, introduce } = userInfo;
        const token = jwt.sign(
            { id: _id, name, email, level, score, avatar, background, introduce },
            ctx.app.config.tokenSecret,
            { expiresIn: '1d' }
        );
        return token;
    }

    async login() {
        const { ctx, service } = this;
        const data = ctx.request.body;

        ctx.helper.validate('login', data);

        const { name, password } = data;
        await this.existByName(name);
        data.password = ctx.helper.MD5(ctx.app.config.salt + password);

        const result = await service.user.exist(data).catch(() => 10008);

        if (!result) ctx.helper.error(10008);

        const { refreshToken } = result;

        const token = await this.generateToken(result);

        ctx.helper.success({ token, refreshToken });
    }

    async register() {
        const { ctx, service } = this;
        const data = ctx.request.body;

        ctx.helper.validate('register', data);

        const { name, email, password } = data;
        await this.noExistByName(name);
        await this.noExistByEmail(email);
        data.password = ctx.helper.MD5(ctx.app.config.salt + password);

        const config = await service.config.cacheInfo();
        data.avatar = config.avatar;
        data.background = config.background;

        const result = await service.user.create(data).catch(() => 10009);

        ctx.helper.send(result);
    }

    async refreshtoken() {
        const { ctx, service } = this;
        const { refreshToken } = ctx.request.body;
        const userInfo = await service.user.exist({ refreshToken });

        if (userInfo) {
            const token = await this.generateToken(userInfo);

            ctx.helper.success({ token });
        } else {
            ctx.helper.status(403);
        }
    }

    async resetPasswordMail() {
        const { ctx, service } = this;
        const { email } = ctx.request.body;

        await this.existByEmail(email);

        const userInfo = await service.user.exist({ email });

        const { _id, name } = userInfo;

        const token = await service.utils.generateCode(_id, 7200);

        service.utils.sendMail({
            to: email,
            subject: '重置密码',
            text: '正文如下:',
            html: `<h3>亲爱的${name}:<h3><p>您正在进行重置密码的操作,如果不是您本人所为请忽略此邮件,确认重置密码请复制点击下方验证码, 有效期两小时:</p><p style='margin-left:30px;font-size:20px'>${token}</p>`,
        });

        ctx.helper.success('send success');
    }

    async resetPasswordAuth() {
        const { ctx, service } = this;
        const { password, token } = ctx.request.body;

        let result = 10011;
        try {
            const id = await service.utils.authCode(token);
            if (!id) return ctx.helper.error(10016);

            const newPass = ctx.helper.MD5(ctx.app.config.salt + password);
            const refreshToken = uuidv4();
            result = await service.user.update([id], { password: newPass, refreshToken }).catch(() => 10011);
        } catch (err) {}

        ctx.helper.send(result);
    }

    async sendVerifyCode() {
        const { ctx, service } = this;
        const { id, email, status, name } = ctx.state.user;

        if (status === 'publish') return ctx.helper.error(10018);

        const token = await service.utils.generateCode(id, 7200, 12);
        const link = `${this.app.config.authUrl}?token=${token}`;

        service.utils.sendMail({
            to: email,
            subject: '账户验证',
            text: '正文如下:',
            html: `<h3>亲爱的${name}:<h3><p>请点击下方链接进行账户验证, 有效期两小时:</p><p style='margin-left:30px;font-size:20px'>${link}</p>`,
        });

        ctx.helper.success('send success');
    }

    async authVerifyCode() {
        const { ctx, service } = this;
        const { token } = ctx.request.body;

        const id = await service.utils.authCode(token);
        if (!id) return ctx.helper.error(10016);

        service.user.update([id], { status: 'publish' });

        ctx.helper.success('auth success');
    }
}

export default AuthController;
