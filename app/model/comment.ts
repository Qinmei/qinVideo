export default (app) => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const CommentSchema = new Schema(
		{
			author: { type: Schema.Types.ObjectId, ref: 'User' }, // 用户名
			animate: { type: Schema.Types.ObjectId, ref: 'Animate' },
			comic: { type: Schema.Types.ObjectId, ref: 'Comic' },
			eposide: { type: Schema.Types.ObjectId, ref: 'Eposide' },
			post: { type: Schema.Types.ObjectId, ref: 'Post' },
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
			timestamps: true
		}
	);

	return mongoose.model('Comment', CommentSchema);
};
