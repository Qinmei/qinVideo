import { Controller } from 'egg';
import * as jwt from 'jsonwebtoken';
import * as uuidv4 from 'uuid/v4';

class UserController extends Controller {
	async info() {
		const { ctx, service } = this;
		const { query } = ctx;

		ctx.helper.validate('query', query);

		const result = await service.user.query(query).catch(() => 11000);
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

	async noExistByName(name: string) {
		const { ctx, service } = this;
		const nameResult = await service.user.exist({ name });

		if (nameResult) {
			ctx.helper.error(10005);
		}
		return nameResult;
	}

	async noExistByEmail(email: string) {
		const { ctx, service } = this;
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
			{ expiresIn: '100d' },
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

		const result = await service.user.create(data).catch(() => 10009);

		if (typeof result !== 'number') {
			const token = await this.generateToken(result);
			result._doc.token = token;
		}

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
			ctx.helper.send(10010);
		}
	}

	async resetPasswordMail() {
		const { ctx, service } = this;
		const { email } = ctx.request.body;

		await this.existByEmail(email);

		const userInfo = await service.user.exist({ email });

		const { _id, name } = userInfo;
		const token = jwt.sign({ id: _id }, ctx.app.config.tokenSecret, {
			expiresIn: '2h',
		});

		service.utils.sendMail({
			to: email,
			subject: '重置密码',
			text: '',
			html: `<h3>亲爱的${name}:<h3><p>您正在进行重置密码的操作,如果不是您本人所为请忽略此邮件,确认重置密码请复制点击下方验证码:</p><p style='margin-left:30px;font-size:20px'>${token}</p>`,
		});

		ctx.helper.success('send success');
	}

	async resetPasswordAuth() {
		const { ctx, service } = this;
		const { password, token } = ctx.request.body;

		let result = 10011;
		try {
			const { id } = await jwt.verify(token, ctx.app.config.tokenSecret);
			const newPass = ctx.helper.MD5(ctx.app.config.salt + password);
			const refreshToken = uuidv4();
			result = await service.user.update([ id ], { password: newPass, refreshToken }).catch(() => 10011);
		} catch (err) {}

		ctx.helper.send(result);
	}
}

export default UserController;
