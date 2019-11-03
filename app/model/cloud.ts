export default (app) => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const CloudSchema = new Schema(
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
			type: { type: String, enum: ['animate', 'comic'] },
			introduce: { type: String, default: '' }, // 简介
			staff: { type: String, default: '' }, // 工作人员
			actor: { type: String, default: '' }, // 声优
			firstPlay: { type: String }, // 首播
			isUpdate: { type: Boolean, default: false }, // 是否连载
			updateDay: { type: Number, default: 0 }, // 周几播放
			rateStar: { type: Number, default: 0 }, // 评分星级
			rateCount: { type: Number, default: 0 }, // 评分人数
			impression: { type: String, default: '' }, // 印象
			playType: {
				type: String,
				enum: ['mp4', 'm3u8', 'php', 'local', 'image', 'api']
			}, // 播放类型
			eposide: [
				{
					title: {
						type: String,
						required: true
					},
					cover: {
						type: String
					},
					link: [
						{
							name: String,
							value: String
						}
					],
					subtitle: [
						{
							name: String,
							value: String
						}
					],
					preview: [{ type: String }],
					bilibili: {
						type: String
					},
					noSetPrefix: { type: Boolean, default: false },
					noParentPrefix: { type: Boolean, default: false }
				}
			],
			noPrefix: { type: Boolean, default: false }, // 不使用设置的等级前缀
			level: { type: Number, default: 0, index: true }, // 等级限定
			linkPrefix: { type: String, default: '' }, // 链接前缀
			downTitle: { type: String, default: '' }, // 下载标题
			downLink: { type: String, default: '' }, // 下载链接
			season: String,
			relative: Schema.Types.ObjectId,
			coverVertical: { type: String, default: '' }, // 竖向大图
			coverHorizontal: { type: String, default: '' }, // 横向大图
			area: [{ type: String }], // 地区
			kind: [{ type: String }], // 类型
			year: [{ type: String }], // 年份
			tag: [{ type: String }], // 标签
			sourceId: String,
			addons: Schema.Types.Mixed
		},
		{
			timestamps: true,
			toJSON: { virtuals: true }
		}
	);

	return mongoose.model('Cloud', CloudSchema);
};
