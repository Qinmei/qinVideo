export default (app) => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const PostSchema = new Schema(
		{
			title: {
				// 标题
				type: String,
				required: true
			},
			slug: {
				// 别名, 唯一标识符
				type: String,
				required: true,
				index: true,
				unique: true,
				trim: true
			},
			status: {
				type: String,
				enum: ['draft', 'publish', 'trash'],
				default: 'draft'
			},
			level: { type: Number, default: 0 }, // 等级限定
			author: { type: Schema.Types.ObjectId, ref: 'User' }, // 用户名
			category: [{ type: Schema.Types.ObjectId, ref: 'Category' }], // 分类
			tag: [{ type: Schema.Types.ObjectId, ref: 'Category' }], // 标签
			cover: { type: String, default: '' }, // 封面图
			introduce: { type: String, default: '' },
			content: { type: String, default: '' }, // 内容
			addons: Schema.Types.Mixed
		},
		{
			timestamps: true
		}
	);

	return mongoose.model('Post', PostSchema);
};
