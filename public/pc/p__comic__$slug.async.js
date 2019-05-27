(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"1cV2":function(e,t,a){"use strict";a.r(t);a("R9oj");var n=a("ECub"),i=a("mrSG"),l=a("q1tI"),r=a.n(l),o=a("MuoO"),s=(a("pC0b"),a("GzdX")),c=(a("/zsF"),a("PArb")),m=a("qIgq"),d=a.n(m),p=a("vOnD"),f=a("LLXN"),g=a("wd/R"),u=a.n(g),h=a("mNhR"),b=a("XEok"),v=a("S+Af"),E=a("8KYf"),x=a("7rZP"),y=p["a"].div`
  min-height: calc(100vh - 280px);

  .head {
    width: 100%;
    height: 440px;
    position: relative;
    overflow: hidden;

    .bg {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      filter: blur(15px);
      transform: scale(1.2);
      background-size: cover;
      background-position: center;
      z-index: -1;

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }

    .info {
      height: 320px;
      margin-top: 80px;
      display: grid;
      grid-template-columns: 224px 1fr;
      grid-gap: 30px;

      .cover {
        background-size: cover;
        border: 3px solid #fff;
        border-radius: 5px;
        background-position: center;
      }

      .main {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 40px 50px 20px 1fr 50px;
        grid-gap: 15px;
        overflow: hidden;

        .title {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          overflow: hidden;
          white-space: pre;

          span:nth-child(1) {
            color: #fff;
            font-weight: bold;
            font-size: 1.6rem;
            margin-right: 30px;
          }

          span.tags {
            color: white;
            padding: 0.1rem 0.5rem;
            border: 1px solid #fff;
            border-radius: 3px;
            margin-right: 1rem;
            font-size: 0.8em;
            opacity: 0.8;
          }
        }

        .count {
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .number {
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .list {
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: flex-start;
              color: white;
              font-weight: 200;
              padding: 0 10px;
            }

            .ant-divider.ant-divider-vertical {
              height: 100%;
            }
          }

          .star {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-weight: 300;

            .rate {
              font-size: 48px;
              color: #ffa726;
              margin-right: 16px;
            }

            .rateStar {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-start;
              color: white;

              .ant-rate-star-full svg {
                color: #ffa726;
              }

              span {
                font-size: 0.9em;
                opacity: 0.8;
              }
            }
          }
        }

        .information {
          color: rgba(255, 255, 255, 0.8);

          span {
            margin-right: 30px;
          }
        }

        .introduce {
          font-weight: 200;
          color: rgba(255, 255, 255, 0.9);
          overflow: hidden;
          line-height: 20px;
        }

        .button {
          display: flex;
          justify-content: flex-start;
          align-items: flex-end;

          div {
            height: 46px;
            padding: 0 25px;
            color: #fff;
            font-size: 1.1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            font-weight: 300;
            border-radius: 5px;

            &:hover {
              opacity: 0.8;
            }

            i {
              font-size: 1.5em;
              margin-right: 10px;
            }
          }

          .like {
            background-color: #f36392;

            &.active i {
              color: #ffa726;
            }
          }

          .download {
            margin-left: 30px;
            background-color: rgb(24, 144, 255);
          }
        }
      }
    }
  }

  .tabs {
    background-color: white;
    height: 50px;

    span {
      display: inline-block;
      line-height: 47px;
      border-bottom: solid 3px transparent;
      padding: 0 5px;
      margin-right: 25px;
      font-size: 1.1em;
      cursor: pointer;

      &.active {
        border-bottom-color: ${e=>e.color};
      }
    }
  }

  .content {
    margin: 20px 0;

    .sec {
      display: none;

      &.active {
        display: block;
      }
    }
  }
`,w=e=>{window.open(e)},N=e=>{var t=e.info,a=Object(l["useContext"])(b["a"]),n=Object(l["useMemo"])(()=>a,[a]),i=Object(l["useState"])(0),o=d()(i,2),m=o[0],p=o[1];return r.a.createElement(y,{color:n},r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"bg",style:{backgroundImage:`url(${t.cover.vertical})`}}),r.a.createElement("div",{className:"container info"},r.a.createElement("div",{className:"cover",style:{backgroundImage:`url(${t.cover.vertical})`}}),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"title"},r.a.createElement("span",null,t.title),t.category.tag.map(e=>r.a.createElement("span",{className:"tags"},e))),r.a.createElement("div",{className:"count"},r.a.createElement("div",{className:"number"},r.a.createElement("div",{className:"list"},r.a.createElement("span",null,Object(f["formatMessage"])({id:"comic.info.play"}),":"),r.a.createElement("span",null,t.count.play)),r.a.createElement(c["a"],{type:"vertical"}),r.a.createElement("div",{className:"list"},r.a.createElement("span",null,Object(f["formatMessage"])({id:"comic.info.like"}),":"),r.a.createElement("span",null,t.count.like)),r.a.createElement(c["a"],{type:"vertical"}),r.a.createElement("div",{className:"list"},r.a.createElement("span",null,Object(f["formatMessage"])({id:"animate.info.comment"}),":"),r.a.createElement("span",null,t.count.comment))),r.a.createElement("div",{className:"star"},r.a.createElement("span",{className:"rate"},t.information.rateStar),r.a.createElement("div",{className:"rateStar"},r.a.createElement(s["a"],{disabled:!0,allowHalf:!0,defaultValue:t.information.rateStar}),r.a.createElement("span",null,t.information.rateCount,Object(f["formatMessage"])({id:"animate.info.rate.count"}))))),r.a.createElement("div",{className:"information"},r.a.createElement("span",null,u()(t.information.firstPlay).format("YYYY-MM-DD")," ",Object(f["formatMessage"])({id:"animate.info.firstPlay"})),r.a.createElement("span",null,t.information.eposideCount," ",Object(f["formatMessage"])({id:"animate.info.eposideCount"})),r.a.createElement("span",null,Object(f["formatMessage"])({id:t.information.isUpdate?"animate.info.isUpdate.true":"animate.info.isUpdate.false"}))),r.a.createElement("div",{className:"introduce"},r.a.createElement("span",null,Object(f["formatMessage"])({id:"animate.info.introduce"}),": ",t.information.introduce)),r.a.createElement("div",{className:"button"},r.a.createElement("div",{className:"like"},r.a.createElement(h["a"],{type:"icon-yizhuifan"}),r.a.createElement("span",null,Object(f["formatMessage"])({id:"comic.info.btn.like"}))),t.play.downTitle&&r.a.createElement("div",{className:"download",onClick:()=>{w(t.play.downLink)}},r.a.createElement(h["a"],{type:"icon-ic_cloud_download_"}),r.a.createElement("span",null,t.play.downTitle)))))),r.a.createElement("div",{className:"tabs"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:0===m?"active":"",onClick:()=>{p(0)}},Object(f["formatMessage"])({id:"animate.tabs.eposide"})),r.a.createElement("span",{className:1===m?"active":"",onClick:()=>{p(1)}},Object(f["formatMessage"])({id:"animate.tabs.comment"}),"(",t.count.comment,")"),r.a.createElement("span",{className:2===m?"active":"",onClick:()=>{p(2)}},Object(f["formatMessage"])({id:"animate.tabs.relative"})))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:0===m?"sec active":"sec"},r.a.createElement(v["b"],{eposide:t.season,slug:t.slug})),r.a.createElement("div",{className:1===m?"sec active":"sec"},r.a.createElement(E["a"],{type:"comic",belong:t.slug})),r.a.createElement("div",{className:2===m?"sec active":"sec"},r.a.createElement(x["a"],{type:"comic",title:t.title})))))},j=N,k=a("Y8ry"),O=class extends l["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.slug,t=this.props.dispatch;t({type:"comic/getInfo",payload:{params:{slug:e}}})}),this.state={slug:e.match.params.slug}}static getDerivedStateFromProps(e,t){return e.match.params.slug!==t.slug?{slug:e.match.params.slug}:null}componentDidMount(){this.initData()}componentDidUpdate(e,t){t.slug!==this.state.slug&&this.initData()}render(){var e=this.props,t=e.comic.info,a=e.loading;return r.a.createElement(r.a.Fragment,null,a?k["a"]:t.slug?r.a.createElement(j,{info:t}):r.a.createElement(n["a"],{description:r.a.createElement("span",null,Object(f["formatMessage"])({id:"common.nodata.tips"})),style:{transform:"translateY(calc(40vh - 50%))"}}))}};O=i["a"]([Object(o["connect"])(e=>{var t=e.comic,a=e.loading;return{comic:t,loading:a.effects["comic/getInfo"]}})],O);t["default"]=O}}]);