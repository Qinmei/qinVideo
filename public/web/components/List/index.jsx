import React, { useContext, useMemo } from "react";
import Router from "next/router";
import { fixedZero, inThisWeek } from "../../utils/util";
import { ColorContext } from "../Context";
import IconFont from "../IconFont";
import moment from "moment";
import { Empty } from "antd";
import styles from "./index.less";

const goAnimate = (type, slug) => {
  Router.push(`/${type}/slug/${slug}`);
};

const reactComponent = props => {
  const { list, type, update = false, status = false } = props;

  return (
    <>
      {list.length === 0 ? (
        <Empty style={{ margin: "30px 0" }} description={false} />
      ) : (
        <div className={styles.wrapper}>
          {list.map(item => (
            <div
              className={styles.top}
              style={{ backgroundImage: `url(${item.coverVertical})` }}
              onClick={() => {
                goAnimate(type, item.slug);
              }}
              key={item._id}
            >
              <span>{item.title}</span>
              {update && (
                <div
                  className={`${styles.update} ${
                    inThisWeek(item.updatedAt) ? styles.update : ""
                  }`}
                >
                  {fixedZero(item.lastEposide ? item.lastEposide.sort : 0)}
                </div>
              )}

              <div className={styles.rate}>{item.countStar}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default reactComponent;
