# 介绍

由于 `1.0`版本存在较多的不足, 所以开始提前准备 `2.0` 的架构, 有比较大的改动, 1.0可能无法无缝迁移, 另外将去除所有的付费功能, 时间精力有限, 不想去维护太多的东西

## 状态

数据库重新设计与验证

## 服务端:

1. 重新设计数据库结构, 考虑性能问题, 提高查询效率, 减少资源占用
2. 接口规范化, 内外接口分离, 权限控制
3. 删除云端付费功能, 数据改为本地维护, 使用苹果CMS接口
4. 基于 egg.js 开发

## web端:

1. 视频, 漫画 文章的站点分离, 通过统一的登录中心来实现多个站点互通, 考虑前端模块化
2. 强化漫画的功能

## APP端:

采用 flutter 开发
