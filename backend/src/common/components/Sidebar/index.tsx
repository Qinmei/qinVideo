import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { useIntl } from '@yuanjs/plugins';

import styles from './index.less';

export interface MenuItem {
  icon: ReactNode;
  title: string;
  path: string;
}

interface PropsType {
  menu: MenuItem[];
  title: string;
}
export const Sidebar: React.FC<PropsType> = props => {
  const { menu, title } = props;

  const { getLang } = useIntl();

  return (
    <div className={styles.menu}>
      <div className={styles.title}>{title}</div>
      {menu.map(item => (
        <NavLink
          key={item.path}
          className={({ isActive }) => `${styles.list} ${isActive && styles.active}`}
          to={item.path}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.name}> {getLang(item.title)}</span>
        </NavLink>
      ))}
    </div>
  );
};
