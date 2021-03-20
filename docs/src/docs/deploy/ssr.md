## 服务端渲染

- 服务端渲染是后台直出页面, 访问速度上会快上一点, 目前也只有首页, 如果需要可以按照下面的步骤使用;
- 进入后台文件的`/public/web`, 输入`yarn`安装;
- 安装完成之后, 输入`yarn build`, 开始构建, 后续重新构建前需要先删除\_next 文件夹;
- 然后输入`yarn start`启动, 可以访问`域名:3000`测试是否成功启动, 这个时候样式是错乱的;
- 安装 PM2(宝塔之前已经安装了), 然后使用命令:`pm2 start npm --name "next" -- start`, 后台常驻进程
- 修改 nginx 的配置文件, 将找到下面第一个的内容替换成第二个;

```apacheconf
    location / {
        index  /default/index.html;
        try_files  $uri $uri/ /default/index.html;
    }
```

```apacheconf
    location / {
        proxy_pass        http://localhost:3000/;
        proxy_redirect    off;
        proxy_set_header  Host $host;
        proxy_set_header  X-Real-IP $remote_addr;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
    }
```
