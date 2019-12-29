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
            addons: Schema.Types.Mixed,
        },
        {
            timestamps: true,
        }
    );

    return mongoose.model('Key', KeySchema);
};
