import { useIntl } from '@yuanjs/plugins';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './index.less';
import logo from './logo.svg';

export interface ModuleItem {
  title: string;
  path: string;
}

interface PropsType {
  modules?: ModuleItem[];
}
export const HomeLayout: React.FC<PropsType> = memo(props => {
  const { modules = [], children } = props;

  const { getLang } = useIntl();

  return (
    <div className={styles.homeLayout}>
      <div className={styles.topbar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <span>QinVideo</span>
        </div>
        <div className={styles.header}>
          <div className={styles.modules}>
            {modules.map(item => (
              <NavLink
                className={({ isActive }) => `${styles.list} ${isActive && styles.active}`}
                to={item.path}
                key={item.path}
              >
                {getLang(item.title)}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
});
