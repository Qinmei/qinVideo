(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"1cV2":function(e,t,a){"use strict";a.r(t);a("R9oj");var n=a("ECub"),i=a("mrSG"),r=a("q1tI"),l=a.n(r),s=a("MuoO"),o=(a("pC0b"),a("GzdX")),c=(a("/zsF"),a("PArb")),m=a("qIgq"),d=a.n(m),p=a("vOnD"),f=a("LLXN"),g=a("wd/R"),u=a.n(g),h=a("TSYQ"),b=a.n(h),v=a("mNhR"),E=a("XEok"),x=a("S+Af"),y=a("8KYf"),w=a("7rZP"),N=a("l61h"),k=p["a"].div`
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
`,j=e=>{window.open(e)},O=(e,t)=>{return e.like.filter(e=>e.slug===t).length>0},M=e=>{var t=e.info,a=e.userAction,n=e.user,i=Object(r["useContext"])(E["a"]),s=Object(r["useMemo"])(()=>i,[i]),m=Object(r["useState"])(0),p=d()(m,2),g=p[0],h=p[1];return l.a.createElement(k,{color:s},l.a.createElement("div",{className:"head"},l.a.createElement("div",{className:"bg",style:{backgroundImage:`url(${t.cover.vertical})`}}),l.a.createElement("div",{className:"container info"},l.a.createElement("div",{className:"cover",style:{backgroundImage:`url(${t.cover.vertical})`}}),l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,t.title),t.category.tag.map(e=>l.a.createElement("span",{className:"tags"},e))),l.a.createElement("div",{className:"count"},l.a.createElement("div",{className:"number"},l.a.createElement("div",{className:"list"},l.a.createElement("span",null,Object(f["formatMessage"])({id:"comic.info.play"}),":"),l.a.createElement("span",null,t.count.play)),l.a.createElement(c["a"],{type:"vertical"}),l.a.createElement("div",{className:"list"},l.a.createElement("span",null,Object(f["formatMessage"])({id:"comic.info.like"}),":"),l.a.createElement("span",null,t.count.like)),l.a.createElement(c["a"],{type:"vertical"}),l.a.createElement("div",{className:"list"},l.a.createElement("span",null,Object(f["formatMessage"])({id:"animate.info.comment"}),":"),l.a.createElement("span",null,t.count.comment))),l.a.createElement("div",{className:"star"},l.a.createElement("span",{className:"rate"},t.information.rateStar),l.a.createElement("div",{className:"rateStar"},l.a.createElement(o["a"],{disabled:!0,allowHalf:!0,defaultValue:t.information.rateStar/2}),l.a.createElement("span",null,t.information.rateCount,Object(f["formatMessage"])({id:"animate.info.rate.count"}))))),l.a.createElement("div",{className:"information"},l.a.createElement("span",null,u()(t.information.firstPlay).format("YYYY-MM-DD")," ",Object(f["formatMessage"])({id:"animate.info.firstPlay"})),l.a.createElement("span",null,t.information.eposideCount," ",Object(f["formatMessage"])({id:"animate.info.eposideCount"})),l.a.createElement("span",null,Object(f["formatMessage"])({id:t.information.isUpdate?"animate.info.isUpdate.true":"animate.info.isUpdate.false"}))),l.a.createElement("div",{className:"introduce"},l.a.createElement("span",null,Object(f["formatMessage"])({id:"animate.info.introduce"}),": ",t.information.introduce)),l.a.createElement("div",{className:"button"},l.a.createElement(N["a"],null,l.a.createElement("div",{className:b()("like",{active:O(n,t.slug)}),onClick:a},l.a.createElement(v["a"],{type:"icon-yizhuifan"}),l.a.createElement("span",null,Object(f["formatMessage"])({id:"comic.info.btn.like"})))),t.play.downTitle&&l.a.createElement("div",{className:"download",onClick:()=>{j(t.play.downLink)}},l.a.createElement(v["a"],{type:"icon-ic_cloud_download_"}),l.a.createElement("span",null,t.play.downTitle)))))),l.a.createElement("div",{className:"tabs"},l.a.createElement("div",{className:"container"},l.a.createElement("span",{className:0===g?"active":"",onClick:()=>{h(0)}},Object(f["formatMessage"])({id:"animate.tabs.eposide"})),l.a.createElement("span",{className:1===g?"active":"",onClick:()=>{h(1)}},Object(f["formatMessage"])({id:"animate.tabs.comment"}),"(",t.count.comment,")"),l.a.createElement("span",{className:2===g?"active":"",onClick:()=>{h(2)}},Object(f["formatMessage"])({id:"animate.tabs.relative"})))),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:0===g?"sec active":"sec"},l.a.createElement(x["b"],{eposide:t.season,slug:t.slug})),l.a.createElement("div",{className:1===g?"sec active":"sec"},l.a.createElement(y["a"],{type:"comic",belong:t.slug,target:"P00"})),l.a.createElement("div",{className:2===g?"sec active":"sec"},l.a.createElement(w["a"],{type:"comic",title:t.title})))))},z=M,C=a("Y8ry"),D=a("Dp36"),S=class extends r["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.slug,t=this.props.dispatch;t({type:"comic/getInfo",payload:{params:{slug:e}}})}),this.userAction=(()=>{var e=this.state.slug,t=this.props.dispatch;D["a"].postUserAction({data:{type:"comic",kind:"like",slug:e}}).then(e=>{e&&t({type:"user/refreshInfo",payload:{}})})}),this.state={slug:e.match.params.slug}}static getDerivedStateFromProps(e,t){return e.match.params.slug!==t.slug?{slug:e.match.params.slug}:null}componentDidMount(){this.initData()}componentDidUpdate(e,t){t.slug!==this.state.slug&&this.initData()}render(){var e=this.props,t=e.user.info.comic,a=e.comic.info,i=e.loading;return l.a.createElement(l.a.Fragment,null,i?C["a"]:a.slug?l.a.createElement(z,{info:a,userAction:this.userAction,user:t}):l.a.createElement(n["a"],{description:l.a.createElement("span",null,Object(f["formatMessage"])({id:"common.nodata.tips"})),style:{transform:"translateY(calc(40vh - 50%))"}}))}};S=i["a"]([Object(s["connect"])(e=>{var t=e.user,a=e.comic,n=e.loading;return{user:t,comic:a,loading:n.effects["comic/getInfo"]}})],S);t["default"]=S}}]);