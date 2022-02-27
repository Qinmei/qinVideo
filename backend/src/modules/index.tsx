import '@/themes/global.less';

import { memo, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomeLayout } from '@/common/layouts';
import { Module } from '@yuanjs/core';

import { CommonModule } from '../common';
import { AnimateModule } from './animate';

interface PropsType {
  modules?: Module[];
}

const ModuleRender: React.FC<PropsType> = memo(props => {
  const { modules = [] } = props;

  const modulesList = useMemo(() => {
    return modules
      .filter(item => item.data)
      .map(item => ({
        path: item.options?.namespace as string,
        title: item.data?.title as string,
      }));
  }, [modules]);

  return (
    <HomeLayout modules={modulesList}>
      <Routes>
        {modules.map(item => (
          <Route
            index={item.options?.namespace === 'animate'}
            path={item.options?.namespace + '/*'}
            element={item.render}
            key={item.options?.namespace}
          />
        ))}
      </Routes>
    </HomeLayout>
  );
});

export const AppModule: Module = {
  imports: [CommonModule, AnimateModule],
  render: <ModuleRender />,
};
