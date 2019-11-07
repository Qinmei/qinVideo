export default (app) => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const SeasonSchema = new Schema(
		{
			title: {
				type: String,
				required: true,
				index: true
			},
			addons: Schema.Types.Mixed
		},
		{
			timestamps: true,
			toJSON: { virtuals: true }
		}
	);

	return mongoose.model('Season', SeasonSchema);
};
