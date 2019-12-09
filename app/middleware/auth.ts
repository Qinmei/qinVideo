import * as jwt from 'jsonwebtoken';

export default level => {
	return async (ctx, next) => {
		const token = ctx.header.authorization;

		const level0 = {
			name: null,
			level: 0,
		};

		if (token) {
			try {
				const { id } = await jwt.verify(token, ctx.app.config.tokenSecret);
				const userInfo = await ctx.service.user.info(id);

				if (userInfo) {
					userInfo.id = userInfo._id.toString();
					ctx.state.user = userInfo;
				} else {
					ctx.state.user = level0;
				}
			} catch (error) {
				ctx.state.user = level0;
			}
		} else {
			ctx.state.user = level0;
		}

		if (ctx.state.user.level >= level) {
			await next();
		} else {
			return ctx.helper.error(10003);
		}
	};
};
