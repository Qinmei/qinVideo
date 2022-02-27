import { memo } from 'react';

import { Sidebar, MenuItem } from '../../components';
import styles from './index.less';

interface PropsType {
  menu: MenuItem[];
  title: string;
}
export const ModuleLayout: React.FC<PropsType> = memo(props => {
  const { menu, title, children } = props;

  return (
    <div className={styles.moduleLayout}>
      <div className={styles.sidebar}>
        <Sidebar menu={menu} title={title} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
});
