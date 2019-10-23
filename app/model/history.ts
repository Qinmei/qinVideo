export default (app) => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const HistorySchema = new mongoose.Schema(
		{
			animate: {
				type: Schema.Types.ObjectId,
				index: true,
				ref: 'Animate'
			},
			comic: {
				type: Schema.Types.ObjectId,
				index: true,
				ref: 'Comic'
			},
			post: {
				type: Schema.Types.ObjectId,
				index: true,
				ref: 'Post'
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
