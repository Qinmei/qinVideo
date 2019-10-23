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
			link: {
				type: String
			},
			bilibili: {
				type: String
			},
			noSetPrefix: { type: Boolean, default: false },
			noParentPrefix: { type: Boolean, default: false },
			addons: Schema.Types.Mixed
		},
		{
			timestamps: true
		}
	);

	return mongoose.model('Eposide', EposideSchema);
};
