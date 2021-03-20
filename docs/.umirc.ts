import { defineConfig } from 'dumi';
import config from './config';

export default defineConfig({
  title: 'Qinvideo',
  favicon: config.favicon,
  logo: config.logo,
  outputPath: 'dist',
  mode: 'site',
  navs: [
    {
      title: '文档',
      path: '/docs',
    },
    {
      title: '教程',
      path: '/course',
    },
    {
      title: 'Github',
      path: config.github,
    },
  ],
  menus: {
    '/docs': [
      {
        title: '基本信息',
        children: ['docs/info/introduce.md', 'docs/info/preview.md'],
      },
      {
        title: '安装部署',
        children: ['docs/deploy/install.md', 'docs/deploy/update.md', 'docs/deploy/ssr.md'],
      },
      {
        title: '模块说明',
        children: [
          'docs/module/video.md',
          'docs/module/comic.md',
          'docs/module/post.md',
          'docs/module/blog.md',
          'docs/module/user.md',
          'docs/module/shop.md',
          'docs/module/cloud.md',
          'docs/module/setting.md',
        ],
      },
      {
        title: '系统测试',
        children: ['docs/test/performance.md'],
      },
    ],
    '/course': [
      {
        title: '视频教程',
        children: ['course/videos/install.md'],
      },
    ],
  },
  hash: true,
  ssr: {},
  exportStatic: {},
  styles: [`*{box-sizing: border-box;color:#2c3e50} strong{color:#4569d4} img{width:100%}`],
});
