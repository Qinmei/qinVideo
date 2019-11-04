export default (app) => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const CloudSchema = new Schema(
		{
			title: {
				type: String,
				required: true,
				index: true
			},
			slug: {
				type: String,
				required: true,
				index: true,
				unique: true,
				trim: true
			},
			type: { type: String, enum: ['Animate', 'Comic'] },
			introduce: { type: String, default: '' },
			staff: { type: String, default: '' },
			actor: { type: String, default: '' },
			firstPlay: { type: String },
			isUpdate: { type: Boolean, default: false },
			updateDay: { type: Number, default: 0 },
			rateStar: { type: Number, default: 0 },
			rateCount: { type: Number, default: 0 },
			impression: { type: String, default: '' },
			playType: {
				type: String,
				enum: ['mp4', 'm3u8', 'php', 'local', 'image', 'api']
			},
			eposide: [
				{
					title: {
						type: String,
						required: true
					},
					cover: {
						type: String
					},
					link: [
						{
							name: String,
							value: String
						}
					],
					subtitle: [
						{
							name: String,
							value: String
						}
					],
					preview: [{ type: String }],
					bilibili: {
						type: String
					},
					noSetPrefix: { type: Boolean, default: false },
					noParentPrefix: { type: Boolean, default: false }
				}
			],
			noPrefix: { type: Boolean, default: false },
			level: { type: Number, default: 0, index: true },
			linkPrefix: { type: String, default: '' },
			downTitle: { type: String, default: '' },
			downLink: { type: String, default: '' },
			season: String,
			relative: Schema.Types.ObjectId,
			coverVertical: { type: String, default: '' },
			coverHorizontal: { type: String, default: '' },
			area: [{ type: String }],
			kind: [{ type: String }],
			year: [{ type: String }],
			tag: [{ type: String }],
			source: String,
			sourceId: String,
			addons: Schema.Types.Mixed
		},
		{
			timestamps: true,
			toJSON: { virtuals: true }
		}
	);

	return mongoose.model('Cloud', CloudSchema);
};
