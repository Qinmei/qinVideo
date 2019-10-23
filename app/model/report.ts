export default (app) => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const ReportSchema = new Schema(
		{
			author: Schema.Types.ObjectId, // 用户名
			content: { type: String, required: true }, // 内容
			image: [{ type: String }],
			reply: String,
			animate: { type: Schema.Types.ObjectId, ref: 'Animate' },
			comic: { type: Schema.Types.ObjectId, ref: 'Comic' },
			post: { type: Schema.Types.ObjectId, ref: 'Post' },
			comment: { type: Schema.Types.ObjectId, ref: 'Comment' },
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

	return mongoose.model('Report', ReportSchema);
};
