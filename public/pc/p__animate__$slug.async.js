(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{IIFU:function(e,a,t){"use strict";t.r(a);t("R9oj");var n=t("ECub"),i=t("mrSG"),l=t("q1tI"),r=t.n(l),s=t("MuoO"),o=(t("pC0b"),t("GzdX")),c=(t("/zsF"),t("PArb")),m=t("qIgq"),d=t.n(m),p=t("vOnD"),f=t("LLXN"),u=t("wd/R"),g=t.n(u),h=t("TSYQ"),v=t.n(h),b=t("mNhR"),E=t("XEok"),x=t("yDSA"),y=t("8KYf"),w=t("7rZP"),N=t("l61h"),k=p["a"].div`
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
`,j=e=>{window.open(e)},O=(e,a)=>{return e.like.filter(e=>e.slug===a).length>0},M=e=>{var a=e.info,t=e.userAction,n=e.user,i=Object(l["useContext"])(E["a"]),s=Object(l["useMemo"])(()=>i,[i]),m=Object(l["useState"])(0),p=d()(m,2),u=p[0],h=p[1];return r.a.createElement(k,{color:s},r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"bg",style:{backgroundImage:`url(${a.cover.vertical})`}}),r.a.createElement("div",{className:"container info"},r.a.createElement("div",{className:"cover",style:{backgroundImage:`url(${a.cover.vertical})`}}),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"title"},r.a.createElement("span",null,a.title),a.category.tag.map(e=>r.a.createElement("span",{className:"tags"},e))),r.a.createElement("div",{className:"count"},r.a.createElement("div",{className:"number"},r.a.createElement("div",{className:"list"},r.a.createElement("span",null,Object(f["formatMessage"])({id:"animate.info.play"}),":"),r.a.createElement("span",null,a.count.play)),r.a.createElement(c["a"],{type:"vertical"}),r.a.createElement("div",{className:"list"},r.a.createElement("span",null,Object(f["formatMessage"])({id:"animate.info.like"}),":"),r.a.createElement("span",null,a.count.like)),r.a.createElement(c["a"],{type:"vertical"}),r.a.createElement("div",{className:"list"},r.a.createElement("span",null,Object(f["formatMessage"])({id:"animate.info.comment"}),":"),r.a.createElement("span",null,a.count.comment)),r.a.createElement(c["a"],{type:"vertical"}),r.a.createElement("div",{className:"list"},r.a.createElement("span",null,Object(f["formatMessage"])({id:"animate.info.danmu"}),":"),r.a.createElement("span",null,a.count.danmu))),r.a.createElement("div",{className:"star"},r.a.createElement("span",{className:"rate"},a.information.rateStar),r.a.createElement("div",{className:"rateStar"},r.a.createElement(o["a"],{disabled:!0,allowHalf:!0,defaultValue:a.information.rateStar}),r.a.createElement("span",null,a.information.rateCount,Object(f["formatMessage"])({id:"animate.info.rate.count"}))))),r.a.createElement("div",{className:"information"},r.a.createElement("span",null,g()(a.information.firstPlay).format("YYYY-MM-DD")," ",Object(f["formatMessage"])({id:"animate.info.firstPlay"})),r.a.createElement("span",null,a.information.eposideCount," ",Object(f["formatMessage"])({id:"animate.info.eposideCount"})),r.a.createElement("span",null,Object(f["formatMessage"])({id:a.information.isUpdate?"animate.info.isUpdate.true":"animate.info.isUpdate.false"}))),r.a.createElement("div",{className:"introduce"},r.a.createElement("span",null,Object(f["formatMessage"])({id:"animate.info.introduce"}),": ",a.information.introduce)),r.a.createElement("div",{className:"button"},r.a.createElement(N["a"],null,r.a.createElement("div",{className:v()("like",{active:O(n,a.slug)}),onClick:t},r.a.createElement(b["a"],{type:"icon-yizhuifan"}),r.a.createElement("span",null,Object(f["formatMessage"])({id:"animate.info.btn.like"})))),a.play.downTitle&&r.a.createElement("div",{className:"download",onClick:()=>{j(a.play.downLink)}},r.a.createElement(b["a"],{type:"icon-ic_cloud_download_"}),r.a.createElement("span",null,a.play.downTitle)))))),r.a.createElement("div",{className:"tabs"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:0===u?"active":"",onClick:()=>{h(0)}},Object(f["formatMessage"])({id:"animate.tabs.eposide"})),r.a.createElement("span",{className:1===u?"active":"",onClick:()=>{h(1)}},Object(f["formatMessage"])({id:"animate.tabs.comment"}),"(",a.count.comment,")"),r.a.createElement("span",{className:2===u?"active":"",onClick:()=>{h(2)}},Object(f["formatMessage"])({id:"animate.tabs.relative"})))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:0===u?"sec active":"sec"},r.a.createElement(x["b"],{eposide:a.season,cover:a.cover.vertical,slug:a.slug})),r.a.createElement("div",{className:1===u?"sec active":"sec"},r.a.createElement(y["a"],{type:"animate",belong:a.slug,target:"P00"})),r.a.createElement("div",{className:2===u?"sec active":"sec"},r.a.createElement(w["a"],{type:"animate",title:a.title})))))},z=M,C=t("Y8ry"),D=t("Dp36"),I=class extends l["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.slug,a=this.props.dispatch;a({type:"animate/getInfo",payload:{params:{slug:e}}})}),this.userAction=(()=>{var e=this.state.slug,a=this.props.dispatch;D["a"].postUserAction({data:{type:"animate",kind:"like",slug:e}}).then(e=>{e&&a({type:"user/refreshInfo",payload:{}})})}),this.state={slug:e.match.params.slug}}static getDerivedStateFromProps(e,a){return e.match.params.slug!==a.slug?{slug:e.match.params.slug}:null}componentDidMount(){this.initData()}componentDidUpdate(e,a){a.slug!==this.state.slug&&this.initData()}render(){var e=this.props,a=e.user.info.animate,t=e.animate.info,i=e.loading;return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(C["a"],null):t.slug?r.a.createElement(z,{info:t,userAction:this.userAction,user:a}):r.a.createElement(n["a"],{description:r.a.createElement("span",null,Object(f["formatMessage"])({id:"common.nodata.tips"})),style:{transform:"translateY(calc(40vh - 50%))"}}))}};I=i["a"]([Object(s["connect"])(e=>{var a=e.user,t=e.animate,n=e.loading;return{user:a,animate:t,loading:n.effects["animate/getInfo"]}})],I);a["default"]=I}}]);