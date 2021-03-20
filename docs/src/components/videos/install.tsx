import React from 'react';
import config from '../../../config';
import styles from './index.less';

const ReactComponent = () => {
  return (
    <div className={styles.videoCon}>
      <video
        src={config.video.install}
        poster={config.videobg}
        controls
        className={styles.video}
      ></video>
    </div>
  );
};

export default ReactComponent;
