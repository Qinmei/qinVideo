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
			animate: {
				type: Schema.Types.ObjectId,
				ref: 'Animate'
			},
			comic: {
				type: Schema.Types.ObjectId,
				ref: 'Comic'
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
