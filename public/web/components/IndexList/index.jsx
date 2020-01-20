import React, { useEffect, useState } from "react";
import IconFont from "../IconFont";
import Button from "../Button";
import List from "../List";
import Router from "next/router";
import styles from "./index.less";

const reactComponent = props => {
  const {
    value: { list = [], info = {} }
  } = props;

  const [number, setNumber] = useState(12);

  const goCategory = ele => {
    if (ele.status === "custom") {
      if (ele._id === "newIndexNewAnimate") {
        Router.push(`/${ele.type}/new`);
      } else {
        let sortBy = "createdAt";
        if (/newIndexRandom/.test(ele._id)) {
          sortBy = "title";
        } else if (/newIndexPlay/.test(ele._id)) {
          sortBy = "countPlay";
        } else if (/newIndexRate/.test(ele._id)) {
          sortBy = "countStar";
        }
        Router.push(`/${ele.type}/all?sortBy=${sortBy}&sortOrder=-1`);
      }
    } else {
      Router.push(`/${ele.type}/${ele.kind.slice(1)}/${ele._id}`);
    }
  };

  useEffect(() => {
    const width = window.outerWidth;
    const number = width >= 1600 ? 16 : 12;
    setNumber(number);
  });

  return (
    <div className={styles.indexList}>
      <div className={styles.head}>
        <div className={styles.left}>
          <IconFont type={info.icon} />
          <span>{info.name}</span>
        </div>
        <Button
          onChange={() => {
            goCategory(info);
          }}
        >
          加载更多
        </Button>
      </div>
      <List type={info.type} list={list.slice(0, number)} />
    </div>
  );
};

export default reactComponent;
