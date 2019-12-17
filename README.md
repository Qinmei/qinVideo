# 注意事项

V1.0版本有一些BUG, 有些是设计之初没有考虑到的, 有些则是在大流量的情况下会出现的性能问题;

V2.0版本则重新设计数据库结构, 再加上底层的诸多变动, 基本上是完全不同的东西了;

所以建议等2.0版本出来后再尝试安装, 目前的版本不再维护, 主要精力都在2.0版本的开发上;


# 开发进度

2.0目前后台已经完成大部分,现在正在开发前端的页面

# 介绍

采用 nodejs + koa2 + mongodb, 主要的功能包括以下:

1. 首页的数据展示, 包括用户的登录注册等等皆有记录, 更加直观化.
2. 番剧的上架与分类, 播放链接支持直链,m3u8与解析.
3. 漫画的上架与分类, 暂时只支持本地图片, 图库后续再考虑.
4. 文章的上架与分类, 内置 markdown 编辑器.
5. 用户的登录与注册, 采用的是 token + refreshToken 的方案.
6. 评论发布与删除.
7. 弹幕列表, 采用的是 dplayer 的弹幕格式, 这样自带弹幕接口, 防止第三方 GG.
8. 商品与充值码系统, 能够满足一些支付的需求.
9. 云端信息一键导入, 即可批量也可搜索导入单个信息.
10.基于 React Native 制作的安卓APP.

# 安装注意

教程里面的是developer分支, 但是由于正式版已经完成, 所以请下载master分支, develope主要用于新特性的开发, 极不稳定, 请勿随意下载

# 目前进度

目前 `1.0` 版本已经完成, 使用没有太大的问题, 具体的请参考使用文档;

# 开发计划

为了满足服务端渲染以及优化代码结构等需求, 2.0版本将会对现有的代码进行大的调整与变动, 开发周期也比较长, 所以1.0将以维护为主

# 使用须知

可用于个人非营利性的使用.

# 安装方法

### 安装 mongodb

1. 使用宝塔面板可直接安装 mongodb, 然后配置数据库以及用户名密码即可
2. 对于使用 appnode 或者 lnmp 的用户请自行搜索安装 mongodb 的方法， 另外最好不要用 root 用户直连数据库， 创建个单独用户用于管理

### 安装 nodejs

1. 宝塔一键安装 node， appnode 在软件管家搜索 nodejs 即可， 安装完之后 node -v 看看版本信息， 没有提示的话可能安装有问题
2. 下载 zip 压缩包到服务器， 然后找个文件夹解压即可
3. 在文件目录里使用 npm install 命令， 安装依赖
4. 修改根目录里面的 config.js 文件， mongodb 的 uri 填写你自己的数据库地址， 格式为'mongodb://账号:密码@地址:端口/数据库'，salt 是用户密码的盐值， 填写个别人不知道的就行， tokenSecret 是验证的加密码， 也填写个唯一的

### 安装 nginx

1. 安装 nginx, 然后创建静态网站 网站的程序目录填写上面的 nodejs 的 public 文件夹。
2. 给与 public 文件夹 777 权限 然后将用户组分配给 WWW。
3. 在 nginx 的配置文件添加以下内容：

```
    client_max_body_size 20M;
    location /api/ {
            proxy_pass      http://localhost:9000/;
            proxy_redirect  off;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    location /qinmei {
        alias      /home/qinvideo-node/public;
        index      /backend/index.html;
        try_files  $uri $uri/ /backend/index.html?$args;
    }

    location /web {
        alias      /home/qinvideo-node/public;
        index      /pc/index.html;
        try_files  $uri $uri/ /pc/index.html?$args;
    }

    location /m {
        alias      /home/qinvideo-node/public;
        index      /h5/index.html;
        try_files  $uri $uri/ /h5/index.html?$args;
    }

    location =/ {
        if ($http_user_agent ~* (mobile|nokia|iphone|ipad|android|samsung|htc|blackberry)) {
             rewrite  ^(.*) $scheme://$host/m/ permanent;
        }
        if ($http_user_agent !~* (mobile|nokia|iphone|ipad|android|samsung|htc|blackberry)){
           rewrite  ^(.*) $scheme://$host/web/ permanent;
        }
    }

```

4. 最后我们重启 nginx 即可

### 运行

在 node 的根目录运行 node app.js 即可测试链接情况， 后台运行的话可以使用 PM2 进行进程守护。
网址/qinmei 则是后台管理面板的地址，
/web 则是 PC 端的前端地址，
/m 则是移动端的前端地址
