# 功能简介

采用 nodejs + koa2 + mongodb, 主要的功能包括以下:

1. 首页的数据展示, 包括用户的登录注册等等皆有记录, 更加直观化.
2. 番剧的上架与分类, 播放链接支持直链与解析.
3. 漫画的上架与分类, 暂时只支持本地图片, 图库后续再考虑.
4. 文章的上架与分类, 内置markdown编辑器.
5. 用户的登录与注册, 采用的是token + refreshToken的方案.
6. 评论发布与删除.
7. 弹幕列表, 采用的是dplayer的弹幕格式, 这样自带弹幕接口, 防止第三方GG.
8. 商品与充值码系统, 能够满足一些支付的需求, 至于第三方支付系统正在考虑中.

# 待完成功能

高级功能的授权以及订阅等等, 主要针对的是一些小商业用户, 相关功能正在考虑中.

# 目前进度

master分支为发布分支, 功能开发则在developer分支, 由于目前还在测试阶段, 建议使用developer, 移动端正在调整, web以及后台有BUG可以提出

# 使用须知

可用于个人非营利性的使用.

# 安装方法
### 安装mongodb
1. 使用宝塔面板可直接安装mongodb, 然后配置数据库以及用户名密码即可
2. 对于使用appnode或者lnmp的用户请自行搜索安装mongodb的方法， 另外最好不要用root用户直连数据库， 创建个单独用户用于管理

### 安装nodejs
1. 宝塔一键安装node， appnode在软件管家搜索nodejs即可， 安装完之后node -v看看版本信息， 没有提示的话可能安装有问题
2. 下载zip压缩包到服务器， 然后找个文件夹解压即可
3. 在文件目录里使用 npm install 命令， 安装依赖
4. 修改根目录里面的config.js文件， mongodb的uri填写你自己的数据库地址， 格式为'mongodb://账号:密码@地址:端口/数据库'，salt是用户密码的盐值， 填写个别人不知道的就行， tokenSecret是验证的加密码， 也填写个唯一的

### 安装nginx
1. 安装nginx, 然后创建静态网站 网站的程序目录填写上面的nodejs的public文件夹。
2. 给与public文件夹777权限 然后将用户组分配给WWW。
3. 在nginx的配置文件添加以下内容：
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
4. 最后我们重启nginx即可

### 运行
在node的根目录运行 node app.js 即可测试链接情况， 后台运行的话可以使用PM2进行进程守护。
网址/qinmei则是后台管理面板的地址，
/web则是PC端的前端地址，
/m则是移动端的前端地址
