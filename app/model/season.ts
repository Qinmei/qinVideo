export default (app) => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const SeasonSchema = new Schema(
		{
			name: {
				type: String,
				required: true,
				index: true,
				trim: true
			},
			cover: {
				type: String,
				default: ''
			},
			introduce: {
				type: String,
				default: ''
			},
			impress: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				enum: ['animate', 'comic', 'post'],
				required: true
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
