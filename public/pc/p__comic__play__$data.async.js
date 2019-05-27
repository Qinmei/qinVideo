(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{dFRu:function(e,a,t){"use strict";t.r(a);t("R9oj");var n=t("ECub"),i=(t("miYZ"),t("tsqr")),r=t("mrSG"),o=t("q1tI"),c=t.n(o),l=t("MuoO"),s=(t("IzEo"),t("bx4M")),m=(t("+L6B"),t("2/Rp")),p=(t("5Dmo"),t("3S7+")),d=(t("1YHl"),t("VNzZ")),u=t("vOnD"),g=t("XEok"),f=t("LLXN"),h=t("S+Af"),E=t("8KYf"),b=t("bdvc"),v=t("mNhR"),y=t("usdK"),x=t("eNRF"),w=u["a"].div`
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
`,N=e=>{var a=e.play,t=`${a.slug}E${a.playInfo.eposide}`,i=Object(o["useContext"])(g["a"]),r=Object(o["useMemo"])(()=>i,[i]);return c.a.createElement(w,{color:r},c.a.createElement("div",{className:"container"},c.a.createElement(d["a"],{offsetTop:60},c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"report"},c.a.createElement("div",{className:"title"},c.a.createElement("span",null,a.season[parseInt(a.playInfo.eposide)].title,":"),c.a.createElement(p["a"],{placement:"top",title:Object(f["formatMessage"])({id:"animate.info.play"})},c.a.createElement("span",null,c.a.createElement(v["a"],{type:"icon-youtube"}),a.count.play)),c.a.createElement(p["a"],{placement:"top",title:Object(f["formatMessage"])({id:"animate.info.comment"})},c.a.createElement("span",null,c.a.createElement(v["a"],{type:"icon-comment1"}),a.count.comment))),c.a.createElement("div",{className:"btn"},c.a.createElement(x["a"],{type:"comic",target:a._id,addon:t},c.a.createElement(m["a"],{type:"primary",shape:"round"},Object(f["formatMessage"])({id:"report.question"}))))),c.a.createElement(s["a"],{bordered:!1,className:"info-main"},c.a.createElement("div",{className:"cover",style:{backgroundImage:`url(${a.cover.vertical})`},onClick:()=>{y["a"].push(`/comic/${a.slug}`)}}),c.a.createElement("div",{className:"title"},a.title),c.a.createElement("div",{className:"introduce"},a.information.introduce)))),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"comic"},a.playInfo.list.map((e,a)=>c.a.createElement("div",{className:"img"},c.a.createElement("span",null,Object(b["a"])(a)),c.a.createElement("img",{src:e,alt:"comic"}))),0===a.playInfo.list.length&&c.a.createElement(n["a"],{style:{padding:"30px"}})),c.a.createElement("div",{className:"comment"},c.a.createElement(E["a"],{type:"comic",belong:t}))),c.a.createElement(d["a"],{offsetTop:60},c.a.createElement("div",{className:"sidebar"},c.a.createElement(h["a"],{slug:a.slug,cover:a.cover.vertical,eposide:a.season,select:parseInt(a.playInfo.eposide)})))))},I=N,j=t("Y8ry"),k=e=>{var a,t,n=e.split("E");return 2===n.length&&(a=n[0],t=Object(b["a"])(parseInt(n[1])-1)),{slug:a,eposide:t}},O=class extends o["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.data,a=this.props.dispatch,t=k(e),n=t.slug,r=t.eposide;null!==e&&null!==n&&null!==r?a({type:"comic/getPlayInfo",payload:{data:{slug:n,eposide:r}}}):i["a"].error(Object(f["formatMessage"])({id:"error.data.few"}))}),this.state={data:e.match.params.data}}static getDerivedStateFromProps(e,a){return e.match.params.data!==a.data?{data:e.match.params.data}:null}componentDidMount(){this.initData()}componentDidUpdate(e,a){a.data!==this.state.data&&this.initData()}render(){var e=this.props,a=e.comic.play,t=e.loading;return c.a.createElement(c.a.Fragment,null,t?c.a.createElement(j["a"],null):a.slug?c.a.createElement(I,{play:a}):c.a.createElement(n["a"],{description:c.a.createElement("span",null,Object(f["formatMessage"])({id:"common.empty.tips"})),style:{transform:"translateY(calc(40vh - 50%))"}}))}};O=r["a"]([Object(l["connect"])(e=>{var a=e.comic,t=e.loading;return{comic:a,loading:t.effects["comic/getPlayInfo"]}})],O);a["default"]=O}}]);