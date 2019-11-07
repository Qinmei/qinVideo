export default (app) => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const ComicSchema = new Schema(
		{
			title: {
				type: String,
				required: true,
				index: true
			},
			slug: {
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
			introduce: { type: String, default: '' },
			staff: { type: String, default: '' },
			actor: { type: String, default: '' },
			firstPlay: { type: String, default: '20160606' },
			isUpdate: { type: Boolean, default: false },
			updateDay: { type: Number, default: 0 },
			rateStar: { type: Number, default: 8 },
			rateCount: { type: Number, default: 1000 },
			impression: { type: String, default: '' },
			playType: {
				type: String,
				enum: ['local', 'image', 'api'],
				default: 'local'
			}, // 显示类型, local:本地文件夹, image:图片外链, api:图片接口
			noPrefix: { type: Boolean, default: false },
			level: { type: Number, default: 0, index: true },
			linkPrefix: { type: String, default: '' },
			downTitle: { type: String, default: '' },
			downLink: { type: String, default: '' },
			season: { type: String, default: '' },
			seasonRelate: { type: Schema.Types.ObjectId, ref: 'Season' },
			coverVertical: { type: String, default: '' },
			coverHorizontal: { type: String, default: '' },
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

	ComicSchema.virtual('countPlay', {
		ref: 'History',
		localField: '_id',
		foreignField: 'target',
		count: true
	});

	ComicSchema.virtual('countLike', {
		ref: 'Relation',
		localField: '_id',
		foreignField: 'target',
		count: true
	});

	ComicSchema.virtual('countComment', {
		ref: 'Comment',
		localField: '_id',
		foreignField: 'target',
		count: true
	});

	ComicSchema.virtual('countEposide', {
		ref: 'Eposide',
		localField: '_id',
		foreignField: 'target',
		count: true
	});

	ComicSchema.virtual('eposide', {
		ref: 'Eposide',
		localField: '_id',
		foreignField: 'target',
		options: { sort: { sort: -1 } }
	});

	ComicSchema.virtual('seasons', {
		ref: 'Comic',
		localField: 'seasonRelate',
		foreignField: 'seasonRelate'
	});

	return mongoose.model('Comic', ComicSchema);
};
