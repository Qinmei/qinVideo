import { memo } from 'react';

import { Iconfont } from '@/common/components/Icon';
import { useIntl } from '@yuanjs/plugins';

import styles from './index.less';

interface PropsType {
  title: string;
  arrow?: boolean;
  docLink?: string;
}
export const ContentLayout: React.FC<PropsType> = memo(props => {
  const { title, arrow, docLink, children } = props;

  const { getLang } = useIntl();

  return (
    <div className={styles.contentLayout}>
      <div className={styles.header}>
        <div className={styles.info}>
          {arrow && (
            <div className={styles.arrow}>
              <Iconfont type="icon-return" />
            </div>
          )}
          <div className={title}>{title}</div>
        </div>
        <div className={styles.tips}>
          <a className={styles.doc} href={docLink} target="_blank" rel="noreferrer">
            <span className={styles.link}>{getLang('common.header.doc.link')}</span>
            <Iconfont type="icon-link" />
          </a>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
});
