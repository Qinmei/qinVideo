import React, { useEffect, useCallback } from "react";
import { Popover, Empty } from "antd";
import { BellOutlined } from "@ant-design/icons";
import moment from "moment";
import { useModel } from "@/action";
import { GlobalType } from "@/types";
import { intl } from "@/locales";

import styles from "./index.less";

export const Message: React.FC = props => {
  const [actions, reducers] = useModel(["global"]);

  const { messageList } = reducers.global;
  const initData = useCallback(() => actions.global.getMessage({}), [actions.global]);

  useEffect(() => {
    initData();
  }, []);

  return (
    <Popover
      placement="bottom"
      title={intl.get("common.header.message.title")}
      content={<MessageContent list={messageList} />}
      trigger="hover"
    >
      <div className={`${styles.list} ${styles.small}`}>
        <BellOutlined />
      </div>
    </Popover>
  );
};

interface ContentPropsType {
  list: GlobalType.MessageData[];
}

const MessageContent: React.FC<ContentPropsType> = props => {
  const { list = [] } = props;

  const goToLink = (value: string | undefined) => {
    if (!value) return;
    window.open(value, "newwindow");
  };
  return (
    <div className={styles.message}>
      {list.length ? (
        <>
          {list.map(item => (
            <div className={styles.list} onClick={() => goToLink(item.link)} key={item.time}>
              <div className={styles.header}>
                <h3>{item.title}</h3>
                <span>{moment(item.time).format("YYYY-MM-DD")}</span>
              </div>

              <p>{item.introduce}</p>
            </div>
          ))}
        </>
      ) : (
        <Empty />
      )}
    </div>
  );
};
