import React from "react";
import { Tooltip } from "antd";
import IconFont from "../IconFont";
import styles from "./index.less";
import Router from "next/router";

const goToPath = path => {
  window.open(path);
};

const Footer = props => {
  const { config } = props;
  const { color, name, information, qq, email, app, aboutus } = config;
  return (
    <div
      color={color}
      className={styles.footer}
      style={{ backgroundColor: color }}
    >
      <div className={`${styles.con} container`}>
        <div className={styles.left}>
          <span>{name}</span>
          <p>{information}</p>
          <p>
            本程序为开源项目, 个人可免费使用, 项目地址:
            <a href="https://qinvideo.org">点此查看</a>
            <br />
            本站不提供任何视听上传服务，所有内容均来自视频分享站点所提供的公开引用资源。
          </p>
        </div>
        <div className={styles.right}>
          <span>官方</span>
          <p
            onClick={() => {
              aboutus && Router.push(aboutus);
            }}
          >
            关于我们
          </p>
          <div className={styles.circle}>
            <Tooltip title="点击加入QQ群">
              <div
                className={styles.list}
                onClick={() => {
                  goToPath(qq);
                }}
              >
                <IconFont type="icon-qq" />
              </div>
            </Tooltip>
            <Tooltip title="app下载">
              <div
                className={styles.list}
                onClick={() => {
                  goToPath(app);
                }}
              >
                <IconFont type="icon-anzhuo" />
              </div>
            </Tooltip>
            <Tooltip title="邮箱联系">
              <div
                className={styles.list}
                onClick={() => {
                  goToPath(email);
                }}
              >
                <IconFont type="icon-ziyuan" />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
