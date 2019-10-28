export default (app) => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const CommentSchema = new Schema(
		{
			author: { type: Schema.Types.ObjectId, ref: 'User' }, // 用户名
			target: { type: Schema.Types.ObjectId, required: true, refPath: 'onModel' },
			onModel: {
				type: String,
				required: true,
				enum: ['Comic', 'Animate', 'Eposide', 'Post']
			},
			replyTo: { type: Schema.Types.ObjectId, ref: 'User' }, // 回复人
			parent: { type: Schema.Types.ObjectId, ref: 'Comment' }, // 父级
			content: { type: String, required: true }, // 内容
			image: [{ type: String }], // 图片
			video: String, // 视频
			status: {
				type: String,
				enum: ['draft', 'publish', 'reject'],
				default: 'draft'
			},
			addons: Schema.Types.Mixed
		},
		{
			timestamps: true,
			toJSON: { virtuals: true }
		}
	);

	CommentSchema.virtual('coutLike', {
		ref: 'Relation',
		localField: '_id',
		foreignField: 'target',
		count: true
	});

	CommentSchema.virtual('children', {
		ref: 'Comment',
		localField: '_id',
		foreignField: 'parent'
	});

	return mongoose.model('Comment', CommentSchema);
};
