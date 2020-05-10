import React, { useState, useContext, useMemo, useEffect } from "react";
import List from "../List";
import IconFont from "../IconFont";
import { ColorContext } from "../Context";
import { weekGroup } from "../../utils/util";
import styles from "./index.less";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(80% / 7);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px transparent;
  margin-bottom: -1px;
  position: relative;
  cursor: pointer;
  &.active {
    border-bottom: solid 1px ${props => props.color};
    color: ${props => props.color};
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
      border: solid 5px transparent;
      border-bottom: solid 5px ${props => props.color};
    }
  }
`;

export const IndexNew = props => {
  const {
    value: { info = {}, list = [] }
  } = props;

  const [key, setKey] = useState(new Date().getDay());
  const value = useContext(ColorContext);
  const color = useMemo(() => value, [value]);

  const weekDay = ["day0", "day1", "day2", "day3", "day4", "day5", "day6"];
  const dayTitle = {
    day0: "周日",
    day1: "周一",
    day2: "周二",
    day3: "周三",
    day4: "周四",
    day5: "周五",
    day6: "周六"
  };
  const showList = weekGroup(list);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.left}>
          <IconFont type={info.icon} />
          <span>{info.name}</span>
        </div>
        <div className={styles.right}>
          {weekDay.map((item, index) => (
            <Wrapper
              color={color}
              className={index === key ? "list active" : "list"}
              onClick={() => setKey(index)}
              key={index}
            >
              <span>{dayTitle[item]}</span>
            </Wrapper>
          ))}
        </div>
      </div>
      <div className={styles.content}>
        {weekDay.map((item, index) => (
          <div
            className={`${styles.section} ${index === key && styles.active}`}
            key={index}
          >
            <List list={showList[item]} type={info.type} update={true} />
          </div>
        ))}
      </div>
    </div>
  );
};
