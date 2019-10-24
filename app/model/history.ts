export default (app) => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const HistorySchema = new mongoose.Schema(
		{
			target: { type: Schema.Types.ObjectId, required: true, refPath: 'onModel' },
			onModel: {
				type: String,
				required: true,
				enum: ['Comic', 'Animate', 'Eposide', 'Post', 'User']
			},
			author: { type: Schema.Types.ObjectId, ref: 'User' },
			ip: String,
			referer: String,
			addons: Schema.Types.Mixed
		},
		{
			timestamps: true
		}
	);

	return mongoose.model('History', HistorySchema);
};
