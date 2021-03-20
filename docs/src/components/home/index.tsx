import React from 'react';
import { Link } from 'dumi';
import styles from './index.less';
import config from '../../../config';

const ReactComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperbg} style={{ backgroundImage: `url(${config.bg})` }}></div>
      <div className={styles.content}>
        <h1>Qin Video</h1>
        <p>一款基于nodejs的动漫CMS系统</p>
        <div className={styles.btnGroup}>
          <Link to="/docs" className={styles.action}>
            查看文档
          </Link>
          <a href={config.demo} className={styles.link} target="_blank">
            演示网站
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReactComponent;
