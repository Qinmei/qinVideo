# 介绍

基于 nodejs 的视频播放系统

演示地址: https://qinmei.video

使用文档: https://qinvideo.org

视频安装教程:https://qinvideo.org/course/videos/install

## 交流

使用上的问题以及产品设计方面的想法可以提 issue, 这样才会进入到后续的开发计划中, QQ 群只提供一个相互交流的地方, QQ 群:1007111688

## 功能

-   视频: 可通过采集苹果 CMS 的资源站点批量导入, 也可手动添加;
-   漫画: 手动添加;
-   文章: 以专栏的形式给用户显示所有文章;
-   博客: 只支持在 APP 上显示, 可以发送图文视频等;
-   评论: 支持一级嵌套的评论;
-   弹幕: 视频可支持;
-   商品: 激活码以及订单还有商品等配套;
-   评分: 支持手动给视频等打分;

## 设计

-   后台: egg.js + mongodb + redis, 主要从查询速度以及并发等重新考虑;
-   PC 前端: 模块化设计, 保证各部分的独一更新;
-   移动 Web 端: 专为移动端优化设计;
-   安卓 APP: 基于 React Native, 从设计交互以及页面调整做了较多的改动;

## 更新记录

-   2020.08.29: v2.2.3, 后台文章无法删除的 BUG, 用户中心图片不显示;
-   2020.07.15: v2.2.2, 注册的一些 BUG 修复, 前端的样式调整;
-   2020.06.25: v2.2.1, 修复资源池导入的一些 BUG, 此外修复了一些显示的 BUG;
-   2020.06.05: v2.2.0, 采用中间表结构, 评论数等在夜间用定时任务去统计, 减少查询的负担;
-   2020.05.05: v2.1.0, 对缓存进行优化, 减少资源占用, 新增弹幕审核等功能;
-   2020.04.05: v2.0.8, 采集的番剧在保存时会自动创建分类, 提高某些耗时接口的缓存为 1 天;
-   2020.03.08: v2.0.7, 一些使用 BUG 的修复;
-   2020.02.28: v2.0.6, 批量新增剧集, 支持苹果 CMS 的格式;
-   2020.02.20: v2.0.5, 字幕以及清晰度的切换;
-   2020.02.04: v2.0.4, 用户删除之后的处理;
-   2020.02.04: v2.0.3, 首页渲染等 BUG 修复;
-   2020.02.02: v2.0.2, 关于我们, 播放等 BUG 修复;
-   2020.01.29: v2.0.1, 新增前端用户评分的功能;
-   2020.01.01: v2.0.0, 基本功能 OK;
