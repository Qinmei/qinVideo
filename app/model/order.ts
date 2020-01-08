export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const OrderSchema = new Schema(
        {
            shop: {
                type: Schema.Types.ObjectId,
                ref: 'Shop',
                required: true,
            },
            user: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
            addons: Schema.Types.Mixed,
        },
        {
            timestamps: true,
        }
    );

    return mongoose.model('Order', OrderSchema);
};
