export default app => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const BlogSchema = new Schema(
		{
			author: {
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
			status: {
				type: String,
				enum: [ 'draft', 'publish', 'reject' ],
				default: 'draft',
			},
			level: { type: Number, default: 0, index: true },
			target: { type: Schema.Types.ObjectId, refPath: 'onModel' },
			onModel: {
				type: String,
				enum: [ 'Comic', 'Animate', 'Eposide', 'Post', 'Blog' ],
			},
			content: {
				type: String,
			},
			image: [{ type: String }],
			video: { type: String },
			pin: {
				type: Boolean,
				default: false,
			},
			hot: {
				type: Boolean,
				default: false,
			},
			tag: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
			addons: Schema.Types.Mixed,
		},
		{
			timestamps: true,
			toJSON: { virtuals: true },
		},
	);

	BlogSchema.virtual('countPlay', {
		ref: 'History',
		localField: '_id',
		foreignField: 'target',
		count: true,
	});

	BlogSchema.virtual('countLike', {
		ref: 'Relation',
		localField: '_id',
		foreignField: 'target',
		count: true,
	});

	BlogSchema.virtual('countComment', {
		ref: 'Comment',
		localField: '_id',
		foreignField: 'target',
		count: true,
	});

	return mongoose.model('Blog', BlogSchema);
};
