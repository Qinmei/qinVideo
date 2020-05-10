import React, { useState } from "react";
import Router from "next/router";
import IconFont from "../IconFont";
import { hexToRgb } from "../../utils/util";
import styles from "./index.less";

const goToPath = path => {
  Router.push(path);
};

const Header = props => {
  const { config } = props;
  const { color, pcMenu = [] } = config;

  const headerMenu = pcMenu.map(item => (
    <span
      onClick={() => {
        goToPath(item.link);
      }}
      key={item.link}
    >
      {item.title}
    </span>
  ));

  return (
    <div className={styles.nav} style={{ background: hexToRgb(color, 0.9) }}>
      <div className="container">
        <div className={styles.menu}>
          <IconFont type="icon-zhuye" />

          <div className={styles.main}>{headerMenu} </div>
          <IconFont type="icon-sousuo" onClick={() => goToPath("/search")} />
          <IconFont type="icon-modx" onClick={() => goToPath("/user")} />
        </div>
      </div>
    </div>
  );
};

export default Header;
