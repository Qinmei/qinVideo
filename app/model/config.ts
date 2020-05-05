export default (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const ConfigSchema = new Schema({
        favcion: { type: String, default: '' }, // ico
        name: { type: String, default: '' }, // 网站名
        slogan: { type: String, default: '' }, // 标语
        information: { type: String, default: '' }, // 简介
        tongji: { type: String, default: '' }, // 百度统计代码
        color: { type: String, default: '' }, // 主题色
        qq: { type: String, default: '' }, // qq群链接
        email: { type: String, default: '' }, // 邮箱
        app: { type: String, default: '' }, // app
        logo: { type: String, default: '' }, // 网站logo
        headimg: { type: String, default: '' }, // 首页头图
        mobleimg: { type: String, default: '' }, // 手机头图
        loginimg: { type: String, default: '' }, // 登陆大图
        avatar: { type: String, default: '' }, // 默认头像图
        background: { type: String, default: '' }, // 默认背景图
        dplayer: { type: String, default: '' }, // 默认dplayer的背景图
        newAnimate: { type: String, default: '' }, // 新番
        newComic: { type: String, default: '' }, // 新漫
        newShop: { type: String, default: '' }, // 商品
        allAnimate: { type: String, default: '' }, // 所有番剧
        allComic: { type: String, default: '' }, // 所有漫画
        allPost: { type: String, default: '' }, // 所有文章
        pcMenu: [{ title: String, link: String }], // web菜单
        pcIndex: [{ type: String }], // web首页
        animateMenu: [{ title: String, link: String }], // 动漫菜单
        animateIndex: [{ type: String }], // 动漫首页
        usePicInterface: { type: Boolean, default: false }, // 使用壁纸接口
        picInterface: { type: String, default: '' }, // 壁纸接口地址
        comicMenu: [{ title: String, link: String }], // 漫画菜单
        comicIndex: [{ type: String }], // 漫画首页
        postMenu: [{ title: String, link: String }], // 文章菜单
        postIndex: [{ type: Schema.Types.ObjectId, ref: 'Category' }], // 文章菜单
        h5Menu: [{ title: String, link: String }], // mobile菜单
        h5Index: [{ type: String }], // mobile首页
        aboutus: { type: String, default: '' },
        message: { type: Schema.Types.ObjectId, ref: 'Category' }, // 消息通知
        playLimit: [
            {
                // 播放等级限制
                level: Number,
                prefix: String,
                key: String,
                expired: Number,
            },
        ],
        jiexi: [
            {
                // 解析
                pattern: String,
                prefix: String,
            },
        ],
        comicLimit: [
            {
                // 漫画等级限制
                level: Number,
                prefix: String,
                key: String,
                expired: Number,
            },
        ],
        emailType: {
            type: String,
            enum: ['smtp', 'sendgrid'],
            default: 'smtp',
        },
        emailName: { type: String, default: '' },
        emailSender: { type: String, default: '' },
        smtpHost: { type: String, default: '' },
        smtpPort: { type: Number, default: 465 },
        smtpSecure: { type: String, default: '' },
        smtpUser: { type: String, default: '' },
        smtpPass: { type: String, default: '' },
        sendgrid: { type: String, default: '' },
        commentVerify: { type: Boolean, default: false },
        autoUpdate: { type: Boolean, default: false },
        danmuAuth: { type: Boolean, default: false },
        danmuVerify: { type: Boolean, default: false },
        userVerify: { type: Boolean, default: false },
        appversion: { type: String, default: '' },
        updateLogs: { type: String, default: '' },
        downLink: { type: String, default: '' },
        qqAppLink: { type: String, default: '' },
        qqWebLink: { type: String, default: '' },
        qqNumber: { type: String, default: '' },
        addons: Schema.Types.Mixed,
    });

    return mongoose.model('Config', ConfigSchema);
};
