export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const KeySchema = new Schema(
        {
            key: {
                // 密钥
                type: String,
                required: true,
                unique: true,
            },
            status: {
                type: String,
                enum: ['draft', 'publish', 'reject'],
                default: 'draft',
            },
            price: { type: Number, required: true },
            expired: { type: Number, required: true },
            author: {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
            addons: Schema.Types.Mixed,
        },
        {
            timestamps: true,
            toJSON: { virtuals: true },
        }
    );

    return mongoose.model('Key', KeySchema);
};
