(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{dFRu:function(e,t,a){"use strict";a.r(t);a("R9oj");var n=a("ECub"),l=(a("miYZ"),a("tsqr")),i=a("mrSG"),c=a("q1tI"),o=a.n(c),r=a("MuoO"),s=(a("Znn+"),a("ZTPi")),m=a("vOnD"),p=a("XEok"),d=a("LLXN"),u=a("S+Af"),g=a("8KYf"),h=a("bdvc"),b=a("mNhR"),f=a("usdK"),E=a("eNRF"),v=a("l61h"),y=s["a"].TabPane,x=m["a"].div`
  .comic {
    margin-top: 40px;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .eposide {
    border-top: solid 6px #ebebeb;
  }

  .info {
    border-top: solid 6px #ebebeb;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 15px;

    .cover {
      width: 90px;
      height: 120px;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.05);
      box-shadow: 0 3px 14px 0 hsla(22, 4%, 52%, 0.4);
      background-size: cover;
      background-position: center;
      cursor: pointer;
    }

    .main {
      width: calc(100% - 105px);
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      .title {
        height: 30px;
        line-height: 30px;
        font-weight: bold;
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: keep-all;
      }
      .count {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 1.5rem;

        span {
          margin-right: 20px;
          line-height: 1.1em;
          i {
            margin-right: 5px;
          }
        }
      }
      .introduce {
        color: #515a6e;
        height: 4rem;
        font-size: 12px;
        line-height: 1rem;
        overflow: hidden;
      }
    }
  }

  .comment {
    border-top: solid 6px #ebebeb;
    padding: 0 15px;
  }
`,w=e=>{var t=e.play,a=`${t.slug}E${t.playInfo.eposide}`,l=`E${t.playInfo.eposide}`,i=Object(c["useContext"])(p["a"]),r=Object(c["useMemo"])(()=>i,[i]);return o.a.createElement(x,{color:r},o.a.createElement("div",{className:"comic"},t.playInfo.list.map((e,t)=>o.a.createElement("div",{className:"img"},o.a.createElement("span",null,Object(h["a"])(t)),o.a.createElement("img",{src:e,alt:"comic"}))),0===t.playInfo.list.length&&o.a.createElement(n["a"],{style:{padding:"30px"}})),o.a.createElement("div",{className:"eposide"},o.a.createElement(u["a"],{slug:t.slug,cover:t.cover.vertical,eposide:t.season,select:parseInt(t.playInfo.eposide)})),o.a.createElement("div",{className:"info"},o.a.createElement("div",{className:"cover",style:{backgroundImage:`url(${t.cover.vertical})`},onClick:()=>{f["a"].push(`/comic/${t.slug}`)}}),o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"title"},t.title),o.a.createElement("div",{className:"count"},o.a.createElement("span",null,o.a.createElement(b["a"],{type:"icon-youtube"}),t.count.play),o.a.createElement("span",null,o.a.createElement(b["a"],{type:"icon-comment1"}),t.count.comment),o.a.createElement("span",null,o.a.createElement(v["a"],null,o.a.createElement(E["a"],{type:"comic",target:t._id,addon:a},o.a.createElement(b["a"],{type:"icon-icon_report_fill"}),Object(d["formatMessage"])({id:"report.question"}))))),o.a.createElement("div",{className:"introduce"},t.information.introduce.slice(0,120)))),o.a.createElement("div",{className:"comment"},o.a.createElement(s["a"],{defaultActiveKey:"1"},o.a.createElement(y,{tab:`${Object(d["formatMessage"])({id:"animate.tabs.comment"})}(${t.count.comment})`,key:"1"},o.a.createElement(g["a"],{type:"comic",belong:t.slug,target:l})))))},j=w,N=a("Y8ry"),k=e=>{var t,a,n=e.split("E");return 2===n.length&&(t=n[0],a=Object(h["a"])(parseInt(n[1])-1)),{slug:t,eposide:a}},I=class extends c["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.data,t=this.props.dispatch,a=k(e),n=a.slug,i=a.eposide;null!==e&&null!==n&&null!==i?t({type:"comic/getPlayInfo",payload:{data:{slug:n,eposide:i}}}):l["a"].error(Object(d["formatMessage"])({id:"error.data.few"}))}),this.state={data:e.match.params.data}}static getDerivedStateFromProps(e,t){return e.match.params.data!==t.data?{data:e.match.params.data}:null}componentDidMount(){this.initData()}componentDidUpdate(e,t){t.data!==this.state.data&&this.initData()}render(){var e=this.props,t=e.comic.play,a=e.loading;return o.a.createElement(o.a.Fragment,null,a?o.a.createElement(N["a"],null):t.slug?o.a.createElement(j,{play:t}):o.a.createElement(n["a"],{description:o.a.createElement("span",null,Object(d["formatMessage"])({id:"common.empty.tips"})),style:{transform:"translateY(calc(40vh - 50%))"}}))}};I=i["a"]([Object(r["connect"])(e=>{var t=e.comic,a=e.loading;return{comic:t,loading:a.effects["comic/getPlayInfo"]}})],I);t["default"]=I}}]);