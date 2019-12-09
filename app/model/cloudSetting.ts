export default app => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const CloudSettingSchema = new Schema(
		{
			source: [
				{
					source: { type: String },
					api: { type: String },
					cat: { type: Number },
					type: { type: String, enum: [ 'Animate', 'Comic' ] },
				},
			],
			update: { type: Boolean, default: false },
			slugPrefix: { type: String, default: 'av' },
			process: { type: String, default: '' },
			history: [{ type: String }],
			addons: Schema.Types.Mixed,
		},
		{
			timestamps: true,
			toJSON: { virtuals: true },
		},
	);

	return mongoose.model('CloudSetting', CloudSettingSchema);
};
