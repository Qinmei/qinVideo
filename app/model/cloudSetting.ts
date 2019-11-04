export default (app) => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const CloudSettingSchema = new Schema(
		{
			source: [
				{
					source: { type: String },
					api: { type: String },
					cat: { type: Number }
				}
			],
			update: { type: Boolean, default: false },
			slugPrefix: { type: String, default: 'av000' },
			process: { type: String, default: '' },
			history: [{ type: String }],
			addons: Schema.Types.Mixed
		},
		{
			timestamps: true,
			toJSON: { virtuals: true }
		}
	);

	return mongoose.model('CloudSetting', CloudSettingSchema);
};
