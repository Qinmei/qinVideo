import { Module } from '@yuanjs/core';
import '@/themes/global.less';

interface PropsType {
  modules?: Module[];
}

const ModuleRender: React.FC<PropsType> = props => {
  const { modules = [] } = props;
  return <div>hello</div>;
};

export const AppModule: Module = {
  imports: [],
  render: <ModuleRender />,
};
