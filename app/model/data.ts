export default (app) => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const DataSchema = new mongoose.Schema(
		{
			target: {
				type: String,
				index: true
			},
			type: {
				type: String,
				enum: [
					'register',
					'login',
					'visit',
					'read',
					'comment',
					'postLike',
					'postRead',
					'postSend',
					'animateSend',
					'animateLike',
					'animateRead',
					'comicSend',
					'comicLike',
					'comicRead',
					'danmu',
					'order',
					'report',
					'key',
					'search',
					'other'
				],
				default: 'other',
				required: true
			},
			time: Number,
			author: String,
			ip: String,
			referer: String,
			addons: Schema.Types.Mixed
		},
		{
			timestamps: true
		}
	);

	return mongoose.model('Data', DataSchema);
};
