import React, { Component } from "react";
import Head from "next/head";
import api from "../utils/api";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollTop from "../components/IndexScroll";
import IndexList from "../components/IndexList";
import { IndexNew } from "../components/NewList";
import { indexInit } from "../utils/util";
import request from "../utils/request";
import styles from "./index.less";
import { ColorContext } from "../components/Context";

class Index extends Component {
  static async initData() {
    const res = await request(api.config, {}, "GET");
    return res || {};
  }

  static async initHome() {
    const res = await request(api.home, {}, "GET");
    return res || {};
  }

  static async getInitialProps({ req }) {
    const config = await this.initData();
    const { pcIndex = [] } = config;
    const indexModule = indexInit(pcIndex);
    const indexAll = await this.initHome();

    return {
      config,
      indexAll: Object.values(indexAll),
      indexModule
    };
  }

  render() {
    const {
      config: { name, slogan, headimg },
      config,
      indexAll,
      indexModule
    } = this.props;

    return (
      <ColorContext.Provider value={config.color}>
        <Head>
          <title>{config.name}</title>
          <link rel="shortcut icon" href={config.favcion} key="favcion"></link>
        </Head>

        <Nav config={config} />
        <div className={styles.index}>
          <div
            className={styles.header}
            style={{ backgroundImage: `url(${headimg})` }}
          >
            <div className={styles.title}>
              <span>{name}</span>
              <p>{slogan}</p>
            </div>
          </div>
          {indexModule.length > 2 && (
            <div className="container">
              <ScrollTop
                value={{
                  scroll: indexAll[0] ? indexAll[0].list : [],
                  top: indexAll[1] ? indexAll[1].list : [],
                  type: "animate"
                }}
              />
              {indexModule.slice(2, indexModule.length).map((item, index) => {
                return /newIndexNew/.test(item._id) ? (
                  <IndexNew
                    value={{
                      info: item,
                      list: indexAll[index + 2] ? indexAll[index + 2].list : []
                    }}
                    key={item._id}
                  />
                ) : (
                  <IndexList
                    value={{
                      info: item,
                      list: indexAll[index + 2] ? indexAll[index + 2].list : []
                    }}
                    key={item._id}
                  />
                );
              })}
            </div>
          )}
        </div>
        <Footer config={config}></Footer>
      </ColorContext.Provider>
    );
  }
}

export default Index;
