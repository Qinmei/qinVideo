export default (app) => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const RelationSchema = new Schema(
		{
			user: { type: Schema.Types.ObjectId, ref: 'User' },
			animate: { type: Schema.Types.ObjectId, ref: 'Animate' },
			comic: { type: Schema.Types.ObjectId, ref: 'Comic' },
			post: { type: Schema.Types.ObjectId, ref: 'Post' },
			author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
			addons: Schema.Types.Mixed
		},
		{
			timestamps: true
		}
	);

	return mongoose.model('Relation', RelationSchema);
};
