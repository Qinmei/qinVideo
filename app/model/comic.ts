export default (app) => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const ComicSchema = new Schema(
		{
			title: {
				// 标题
				type: String,
				required: true,
				index: true
			},
			slug: {
				// 别名, 唯一标识符
				type: String,
				required: true,
				index: true,
				unique: true,
				trim: true
			},
			author: {
				type: Schema.Types.ObjectId,
				ref: 'User'
			},
			status: {
				type: String,
				enum: ['draft', 'publish', 'reject'],
				default: 'draft'
			},
			// 动漫详情
			introduce: { type: String, default: '' }, // 简介
			staff: { type: String, default: '' }, // 工作人员
			actor: { type: String, default: '' }, // 声优
			firstPlay: { type: String, default: '20160606' }, // 首播
			isUpdate: { type: Boolean, default: false }, // 是否连载
			updateDay: { type: Number, default: 0 }, // 周几播放
			rateStar: { type: Number, default: 8 }, // 评分星级
			rateCount: { type: Number, default: 1000 }, // 评分人数
			impression: { type: String, default: '' }, // 印象
			eposideCount: { type: Number, default: 0 }, // 总集数
			playType: {
				type: String,
				enum: ['local', 'image', 'api'],
				default: 'local'
			}, // 显示类型, local:本地文件夹, image:图片外链, api:图片接口
			noPrefix: { type: Boolean, default: false }, // 不使用设置的等级前缀
			level: { type: Number, default: 0, index: true }, // 等级限定
			linkPrefix: { type: String, default: '' }, // 链接前缀
			downTitle: { type: String, default: '' }, // 下载标题
			downLink: { type: String, default: '' }, // 下载链接
			season: String,
			relative: Schema.Types.ObjectId,
			coverVertical: { type: String, default: '' }, // 竖向大图
			coverHorizontal: { type: String, default: '' }, // 横向大图
			area: [{ type: Schema.Types.ObjectId, ref: 'Category' }], // 地区
			kind: [{ type: Schema.Types.ObjectId, ref: 'Category' }], // 类型
			year: [{ type: Schema.Types.ObjectId, ref: 'Category' }], // 年份
			tag: [{ type: Schema.Types.ObjectId, ref: 'Category' }], // 标签
			addons: Schema.Types.Mixed
		},
		{
			timestamps: true,
			toJSON: { virtuals: true }
		}
	);

	ComicSchema.virtual('coutPlay', {
		ref: 'History',
		localField: '_id',
		foreignField: 'target',
		count: true
	});

	ComicSchema.virtual('coutLike', {
		ref: 'Relation',
		localField: '_id',
		foreignField: 'target',
		count: true
	});

	ComicSchema.virtual('coutComment', {
		ref: 'Comment',
		localField: '_id',
		foreignField: 'target',
		count: true
	});

	ComicSchema.virtual('eposide', {
		ref: 'Eposide',
		localField: '_id',
		foreignField: 'target',
		count: true
	});

	return mongoose.model('Comic', ComicSchema);
};
