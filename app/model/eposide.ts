export default (app) => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const EposideSchema = new Schema(
		{
			title: {
				type: String,
				required: true,
				index: true
			},
			cover: {
				type: String
			},
			target: { type: Schema.Types.ObjectId, required: true, refPath: 'onModel' },
			onModel: {
				type: String,
				required: true,
				enum: ['Comic', 'Animate']
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
			noParentPrefix: { type: Boolean, default: false },
			addons: Schema.Types.Mixed
		},
		{
			timestamps: true,
			toJSON: { virtuals: true }
		}
	);

	EposideSchema.virtual('coutPlay', {
		ref: 'History',
		localField: '_id',
		foreignField: 'target',
		count: true
	});

	EposideSchema.virtual('coutComment', {
		ref: 'Comment',
		localField: '_id',
		foreignField: 'target',
		count: true
	});

	EposideSchema.virtual('coutDanmu', {
		ref: 'Danmu',
		localField: '_id',
		foreignField: 'target',
		count: true
	});

	return mongoose.model('Eposide', EposideSchema);
};
