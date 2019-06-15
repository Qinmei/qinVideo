(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{dFRu:function(e,a,t){"use strict";t.r(a);t("R9oj");var n=t("ECub"),i=(t("miYZ"),t("tsqr")),r=t("mrSG"),o=t("q1tI"),l=t.n(o),c=t("MuoO"),s=(t("IzEo"),t("bx4M")),m=(t("+L6B"),t("2/Rp")),p=(t("5Dmo"),t("3S7+")),d=(t("1YHl"),t("VNzZ")),u=t("vOnD"),g=t("XEok"),h=t("LLXN"),E=t("S+Af"),f=t("8KYf"),b=t("bdvc"),v=t("mNhR"),y=t("usdK"),x=t("eNRF"),w=t("l61h"),N=u["a"].div`
  padding: 60px;
  .container {
    display: grid;
    grid-template-columns: 320px 1fr 320px;
    grid-gap: 20px;

    .sidebar {
    }

    .info {
      .report {
        padding: 24px;
        background-color: white;
        border-radius: 2px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
          span {
            margin-right: 20px;

            i {
              margin-right: 5px;
            }
          }
        }

        .btn .ant-btn.ant-btn-primary {
          font-size: 12px;
        }
      }

      .info-main {
        .cover {
          width: 112px;
          height: 144px;
          border-radius: 2px;
          background-color: rgba(0, 0, 0, 0.05);
          margin: 0 auto;
          box-shadow: 0 3px 14px 0 hsla(22, 4%, 52%, 0.4);
          background-size: cover;
          background-position: center;
          cursor: pointer;
        }
        .title {
          font-size: 1.2em;
          height: 50px;
          line-height: 60px;
          width: 100%;
          text-align: center;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: keep-all;
        }
        .introduce {
          color: #515a6e;
        }
      }
    }

    .main {
      .comic {
        background-color: white;

        .img {
          width: 100%;
          min-height: 200px;
          text-align: center;
          line-height: 1;
          position: relative;

          span {
            position: absolute;
            color: black;
            font-size: 60px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0.6;
            z-index: -1;
          }

          img {
            width: 100%;
          }
        }
      }
      .comment {
        margin-top: 20px;
      }
    }
  }
`,I=e=>{var a=e.play,t=`${a.slug}E${a.playInfo.eposide}`,i=Object(o["useContext"])(g["a"]),r=Object(o["useMemo"])(()=>i,[i]);return l.a.createElement(N,{color:r},l.a.createElement("div",{className:"container"},l.a.createElement(d["a"],{offsetTop:60},l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"report"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,a.season[parseInt(a.playInfo.eposide)].title,":"),l.a.createElement(p["a"],{placement:"top",title:Object(h["formatMessage"])({id:"animate.info.play"})},l.a.createElement("span",null,l.a.createElement(v["a"],{type:"icon-youtube"}),a.count.play)),l.a.createElement(p["a"],{placement:"top",title:Object(h["formatMessage"])({id:"animate.info.comment"})},l.a.createElement("span",null,l.a.createElement(v["a"],{type:"icon-comment1"}),a.count.comment))),l.a.createElement("div",{className:"btn"},l.a.createElement(w["a"],null,l.a.createElement(x["a"],{type:"comic",target:a._id,addon:t},l.a.createElement(m["a"],{type:"primary",shape:"round"},Object(h["formatMessage"])({id:"report.question"})))))),l.a.createElement(s["a"],{bordered:!1,className:"info-main"},l.a.createElement("div",{className:"cover",style:{backgroundImage:`url(${a.cover.vertical})`},onClick:()=>{y["a"].push(`/comic/${a.slug}`)}}),l.a.createElement("div",{className:"title"},a.title),l.a.createElement("div",{className:"introduce"},a.information.introduce)))),l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"comic"},a.playInfo.list.map((e,a)=>l.a.createElement("div",{className:"img"},l.a.createElement("span",null,Object(b["a"])(a)),l.a.createElement("img",{src:e,alt:"comic"}))),0===a.playInfo.list.length&&l.a.createElement(n["a"],{style:{padding:"30px"}})),l.a.createElement("div",{className:"comment"},l.a.createElement(f["a"],{type:"comic",belong:t}))),l.a.createElement(d["a"],{offsetTop:60},l.a.createElement("div",{className:"sidebar"},l.a.createElement(E["a"],{slug:a.slug,cover:a.cover.vertical,eposide:a.season,select:parseInt(a.playInfo.eposide)})))))},j=I,k=t("Y8ry"),O=e=>{var a,t,n=e.split("E");return 2===n.length&&(a=n[0],t=Object(b["a"])(parseInt(n[1])-1)),{slug:a,eposide:t}},M=class extends o["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.data,a=this.props.dispatch,t=O(e),n=t.slug,r=t.eposide;null!==e&&null!==n&&null!==r?a({type:"comic/getPlayInfo",payload:{data:{slug:n,eposide:r}}}):i["a"].error(Object(h["formatMessage"])({id:"error.data.few"}))}),this.state={data:e.match.params.data}}static getDerivedStateFromProps(e,a){return e.match.params.data!==a.data?{data:e.match.params.data}:null}componentDidMount(){this.initData()}componentDidUpdate(e,a){a.data!==this.state.data&&this.initData()}render(){var e=this.props,a=e.comic.play,t=e.loading;return l.a.createElement(l.a.Fragment,null,t?l.a.createElement(k["a"],null):a.slug?l.a.createElement(j,{play:a}):l.a.createElement(n["a"],{description:l.a.createElement("span",null,Object(h["formatMessage"])({id:"common.empty.tips"})),style:{transform:"translateY(calc(40vh - 50%))"}}))}};M=r["a"]([Object(c["connect"])(e=>{var a=e.comic,t=e.loading;return{comic:a,loading:t.effects["comic/getPlayInfo"]}})],M);a["default"]=M}}]);