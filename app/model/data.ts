export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const DataSchema = new mongoose.Schema(
        {
            target: {
                type: String,
                index: true,
            },
            type: {
                type: String,
                enum: [
                    'register',
                    'login',
                    'blog',
                    'comment',
                    'post',
                    'animate',
                    'comic',
                    'danmu',
                    'order',
                    'report',
                    'key',
                    'search',
                    'other',
                ],
                default: 'other',
                required: true,
                index: true,
            },
            author: String,
            ip: String,
            referer: String,
            addons: Schema.Types.Mixed,
        },
        {
            timestamps: true,
        }
    );

    return mongoose.model('Data', DataSchema);
};
