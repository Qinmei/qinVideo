## 安装

基础环境需要安装 nodejs + mongodb + nginx + redis, 然后下载文件解压, 修改配置文件, 启动即可;

### 1. 安装 mongodb

直接安装 mongodb, 然后新建个数据库命名为 qinvideo 或者其他啥的,最好新建个单独的用户来管理该数据库;

宝塔面板安装的没有单独的用户与密码, appnode 软件商店没有 mongodb, 自行搜索教程安装即可, 推荐还是使用宝塔吧;

如果不需要使用数据库工具链接的话, 可以直接禁止外部访问该端口;

### 2. 安装 redis

宝塔跟 appnode 在软件商店都有 redis, 直接安装即可, 密码啥的看情况设置;

### 3. 安装 nodejs

以下的输入都是在终端输入

- 宝塔一键安装 node， appnode 在软件管家搜索 nodejs 即可;
- 安装完之后输入`node -v`, 如果看版本信息代表安装成功;
- 输入`npm -v`, 一般来说上面的 OK 了, 这步也会有版本信息, 主要是确认下;
- 输入`npm i -g yarn`, 安装`yarn`包管理工具;
- 下载 [程序压缩包](https://github.com/Qinmei/qinVideo/archive/2.0.zip) 到服务器, 然后找个文件夹解压;
- 进入解压后的目录, 也就是里面有 package.json 这一层的目录, 输入`yarn`, 等待安装完成;
- 打开并编辑`config/config.default.js`, 我们需要修改里面带有标注的几项:

```js
    redis: {
        client: {
            port: 6379,
            host: '127.0.0.1',
            password: '', // 如果没有设置密码就不用管, 改了密码直接填写进去就行
            db: 0,
        },
    },
    mongoose: {
        client: {
            url: 'mongodb://qinvideo:Op6bg0PzQnVuTSjGuK0TkHJyUtGkTtQK@localhost:27017/qinvideo',
            //  数据库连接地址, 格式是'mongodb://账号:密码@地址:端口/数据库'
            options: {},
        },
    },
        authUrl: 'https://m.qinmei.video/auth/verify', // 邮件验证账户的地址, 为了防止相互跳转, 建议将移动端跳转到web的代码去掉
        salt: 'qinmei', // 密码盐值
        tokenSecret: 'qinmei', // 登录密钥
        expired: 600, // redis缓存有效期, 是个随机数, 如果是3600, 那么会在3600~7200之间, 即一到两倍之间, 从V2.2.0版本开始,数值不用太大
        expiredCount: 100, // 接口缓存写入数据库的数量, 主要是为了避免频繁写入数据库, 影响性能
        caculateCount: 100, // 评论播放等统计接口的计算缓存量, 也是为了性能, 不过会造成计数延迟, 如果需要实时计数, 改成1即可
```

- 填写 OK 之后, 确认 mongodb 跟 redis 都启动了;<br />
  然后输入`yarn dev`, 看到能够成功启动没有报错就表示没啥问题了, 继续下面的安装;

### 3. 安装 nginx

以下只是参考, 如果有其他的需求自行配置即可

- 安装 nginx;
- 然后创建 web 端静态网站, 网站的程序目录需要指向上面文件目录 的 public 文件夹;
- 在网站的配置文件里面加上以下的代码, 注意不要冲突了,注意第二行的重定向地址需要改成自己的移动端, 然后重启 nginx 即可;

```apacheconf
    if ($http_user_agent ~* (mobile|nokia|iphone|ipad|android|samsung|htc|blackberry)) {
        rewrite  ^(.*) $scheme://m.demo.qinvideo.org permanent;
    }

    location / {
        index  /default/index.html;
        try_files  $uri $uri/ /default/index.html;
    }

    client_max_body_size  20M;

    location /api/ {
        proxy_pass        http://localhost:7001/api/;
        proxy_redirect    off;
        proxy_set_header  Host $host;
        proxy_set_header  X-Real-IP $remote_addr;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location /animate {
        try_files  $uri $uri/ /animate/index.html?$args;
    }

    location /comic {
        try_files  $uri $uri/ /comic/index.html?$args;
    }

    location /post {
        try_files  $uri $uri/ /post/index.html?$args;
    }

    location /search {
        try_files  $uri $uri/ /search/index.html?$args;
    }

    location /user {
        try_files  $uri $uri/ /user/index.html;
    }

    location /backend {
        try_files  $uri $uri/ /backend/index.html?$args;
    }
```

- 然后创建 移动端 静态网站, 网站的程序目录需要指向上面后台文件目录 的 public 文件夹;
- 在网站的配置文件里面加上以下的代码, 注意不要冲突了, 注意第三行的重定向地址需要改成自己的 web 端, 然后重启 nginx 即可, 当然如果不想要手动端网站跳转的话删除第 2,3,4 行

```apacheconf {3}
   location / {
        if ($http_user_agent !~* (mobile|nokia|iphone|ipad|android|samsung|htc|blackberry)) {
            rewrite  ^(.*) $scheme://demo.qinvideo.org permanent;
        }
        index      /mobile/index.html;
        try_files  $uri $uri/ /mobile/index.html?$args;
    }

    location /api/ {
        proxy_pass        http://localhost:7001/api/;
        proxy_redirect    off;
        proxy_set_header  Host $host;
        proxy_set_header  X-Real-IP $remote_addr;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
    }
```

### 4. 运行

- 进入后台文件的根目录, 输入`yarn tsc`, 后台会开始构建;
- 等待构建完成后, 再输入`yarn start`启动即可, 如果报错, 可以尝试`yarn start --ignore-stderr`;
- 如果需要关闭进程, 输入 `yarn stop` 即可;
