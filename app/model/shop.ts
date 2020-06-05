export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const ShopSchema = new Schema(
        {
            title: {
                // 标题
                type: String,
                required: true,
            },
            status: {
                type: String,
                enum: ['draft', 'publish', 'reject'],
                default: 'draft',
            },
            price: { type: Number, required: true }, // 价格
            upLevel: { type: Number }, // 提升至等级
            addScore: { type: Number }, // 添加积分
            addExpired: { type: Number },
            introduce: String,
            cover: String,
            addons: Schema.Types.Mixed,
        },
        {
            timestamps: true,
            toJSON: { virtuals: true },
        }
    );

    return mongoose.model('Shop', ShopSchema);
};
