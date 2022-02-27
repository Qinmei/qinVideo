import { Module } from '@yuanjs/core';
import { App } from './content';
import { en, zh } from './locale';
import { DashboardOutlined } from '@ant-design/icons';
import { ModuleLayout } from '@/common/layouts';
import { memo } from 'react';
import { useIntl } from '@yuanjs/plugins';

const menu = [
  {
    icon: <DashboardOutlined />,
    title: 'home.animate.video',
    path: 'video',
  },
  {
    icon: <DashboardOutlined />,
    title: 'home.animate.series',
    path: 'series',
  },
  {
    icon: <DashboardOutlined />,
    title: 'home.animate.eposide',
    path: 'eposide',
  },
  {
    icon: <DashboardOutlined />,
    title: 'home.animate.danmu',
    path: 'danmu',
  },
];

const ModuleRender: React.FC = memo(props => {
  const { getLang } = useIntl();

  return (
    <ModuleLayout menu={menu} title={getLang('home.animate')}>
      <App />
    </ModuleLayout>
  );
});

export const AnimateModule: Module = {
  options: { namespace: 'animate' },
  locale: [
    { type: 'zh', content: zh },
    { type: 'en', content: en },
  ],
  render: <ModuleRender />,
  data: {
    title: 'home.animate',
    menu,
  },
};
