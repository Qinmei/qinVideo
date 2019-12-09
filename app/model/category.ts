export default app => {
	const mongoose = app.mongoose;
	const Schema = mongoose.Schema;

	const CategorySchema = new Schema({
		name: {
			// 别名, 唯一标识符
			type: String,
			required: true,
			index: true,
			trim: true,
		},
		type: {
			type: String,
			enum: [ 'aarea', 'ayear', 'akind', 'atag', 'carea', 'cyear', 'ckind', 'ctag', 'pkind', 'ptag', 'blog' ],
			required: true,
		},
		cover: {
			type: String,
			default: '',
		},
		introduce: {
			type: String,
			default: '',
		},
	},{
		timestamps: true,
		toJSON: { virtuals: true },
	});

	return mongoose.model('Category', CategorySchema);
};
