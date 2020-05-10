import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "antd";
import Router from "next/router";
import styles from "./index.less";
import styled from "styled-components";

const List = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: ${props => props.height}px;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.cover});

  span {
    display: block;
    padding: 0 15px;
    height: 30px;
    line-height: 30px;
    color: white;
    font-size: 18px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    );
  }
`;

const reactComponent = props => {
  const {
    value: { scroll = [], top = [], type = "animate" }
  } = props;

  const [height, setHeight] = useState(200);

  let scrollRef = useRef(null);

  const goAnimate = slug => {
    Router.push(`/${type}/slug/${slug}`);
  };

  useEffect(() => {
    setHeight(scrollRef.current.clientHeight);
  });

  return (
    <div className={styles.indexScroll}>
      <div className={styles.scroll} ref={scrollRef}>
        <Carousel autoplay={true} autoplaySpeed={5000} adaptiveHeight={true}>
          {scroll.slice(0, 6).map(item => (
            <List
              height={height}
              cover={item.coverHorizontal}
              onClick={() => {
                goAnimate(item.slug);
              }}
              key={item._id}
            >
              <span>{item.title}</span>
            </List>
          ))}
        </Carousel>
      </div>
      {top.slice(0, 6).map(item => (
        <div
          className={styles.top}
          style={{ backgroundImage: `url(${item.coverHorizontal})` }}
          onClick={() => {
            goAnimate(item.slug);
          }}
          key={item._id}
        >
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default reactComponent;
