import React from "react";
import Router from "next/router";
import { fixedZero } from "../../utils/util";
import { Empty } from "antd";
import styles from "./index.less";
import moment from "moment";

const inThisWeek = time => {
  const update = moment(time);
  const now = new Date();
  let day = now.getDay();
  now.setHours(0);
  now.setMinutes(0);
  now.setSeconds(0);

  if (day === 0) {
    day = 6;
  } else {
    day -= 1;
  }

  const beginTime = now.getTime() - day * 1000 * 3600 * 24;

  return update.valueOf() > beginTime;
};

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
                    inThisWeek(item.updateTime) ? styles.updateActive : ""
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
