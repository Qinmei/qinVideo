export default (app) => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const RelationSchema = new Schema(
		{
			target: { type: Schema.Types.ObjectId, required: true, refPath: 'onModel' },
			onModel: {
				type: String,
				required: true,
				enum: ['Comic', 'Animate', 'User', 'Post']
			},
			author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
			addons: Schema.Types.Mixed
		},
		{
			timestamps: true
		}
	);

	return mongoose.model('Relation', RelationSchema);
};
