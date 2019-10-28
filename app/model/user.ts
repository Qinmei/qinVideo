export default (app) => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const UserSchema = new Schema(
		{
			name: {
				type: String,
				required: true,
				unique: true,
				index: true,
				trim: true
			}, // 用户名
			password: { type: String, required: true }, // 密码
			refreshToken: { type: String, required: true }, // refresh token
			email: { type: String, required: true, unique: true }, // 邮箱
			level: { type: Number, default: 1 }, // 等级
			score: { type: Number, default: 0 }, // 积分
			avatar: { type: String, default: '' }, // 头像
			background: { type: String, default: '' }, // 背景图
			introduce: { type: String, default: '' }, // 简介
			status: {
				type: String,
				enum: ['draft', 'publish', 'reject'],
				default: 'draft'
			},
			money: { type: Number, default: 0 }, // 金钱
			expired: { type: Number, default: 0 }, // 会员过期时间
			addons: Schema.Types.Mixed
		},
		{
			timestamps: true,
			toJSON: { virtuals: true }
		}
	);

	UserSchema.virtual('countAnimate', {
		ref: 'History',
		localField: '_id',
		foreignField: 'author',
		count: true
	});

	UserSchema.virtual('countComic', {
		ref: 'Relation',
		localField: '_id',
		foreignField: 'author',
		count: true
	});

	UserSchema.virtual('countPost', {
		ref: 'Comment',
		localField: '_id',
		foreignField: 'author',
		count: true
	});

	UserSchema.virtual('countComment', {
		ref: 'Comment',
		localField: '_id',
		foreignField: 'author',
		count: true
	});

	return mongoose.model('User', UserSchema);
};
