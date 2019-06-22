(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"8S6H":function(e,t,a){"use strict";a.r(t);a("R9oj");var n=a("ECub"),l=(a("miYZ"),a("tsqr")),r=a("mrSG"),i=a("q1tI"),o=a.n(i),s=a("MuoO"),c=a("qIgq"),m=a.n(c),p=(a("Znn+"),a("ZTPi")),d=a("vOnD"),u=a("XEok"),h=a("LLXN"),g=a("yDSA"),b=(a("T2oS"),a("W9HT")),f=a("Dp36"),E=a("wd/R"),y=a.n(E),v=a("bdvc"),x=e=>{var t=Math.floor(e/60),a=e%60;return`${Object(v["a"])(t)}:${Object(v["a"])(a)}`},j=d["a"].div`
  margin: 0 20px;

  .head {
    height: 30px;
    line-height: 30px;
    display: grid;
    grid-template-columns: 50px 1fr 60px;
    font-size: 0.9em;
    opacity: 0.6;
    font-weight: 700;
  }

  .main {
    .list {
      line-height: 24px;
      display: grid;
      grid-template-columns: 50px 170px 60px;
      font-size: 0.8em;
      opacity: 0.6;
      cursor: pointer;

      span:nth-child(2) {
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre;
        word-break: keep-all;
      }

      span:nth-child(3) {
        text-align: center;
      }

      &:hover {
        color: ${e=>e.color};
      }
    }
  }
`,w=e=>{var t=e.id,a=Object(i["useContext"])(u["a"]),n=Object(i["useMemo"])(()=>a,[a]),l=Object(i["useState"])([]),r=m()(l,2),s=r[0],c=r[1],p=Object(i["useState"])(!0),d=m()(p,2),g=d[0],E=d[1];return Object(i["useEffect"])(()=>{f["a"].queryDanmu({query:{id:t}}).then(e=>{c(e.data),E(!1)})},[e.id]),o.a.createElement(j,{color:n},o.a.createElement("div",{className:"head"},o.a.createElement("span",null,Object(h["formatMessage"])({id:"danmu.time"})),o.a.createElement("span",null,Object(h["formatMessage"])({id:"danmu.content"})),o.a.createElement("span",null,Object(h["formatMessage"])({id:"danmu.created"}))),o.a.createElement(b["a"],{spinning:g},o.a.createElement("div",{className:"main"},s.map(e=>o.a.createElement("div",{className:"list"},o.a.createElement("span",null,x(e.time)),o.a.createElement("span",null,e.text),o.a.createElement("span",null,y()(e.createdAt).format("MM-DD")))))))},O=w,k=a("8KYf"),M=a("mNhR"),N=a("usdK"),D=a("eNRF"),S=(a("Quhn"),a("NUga")),$=a.n(S),I=a("ulZh"),q=a.n(I),z=e=>{var t=e.target,a=e.info,n=e.type,l=Object(i["useContext"])(u["a"]),r=Object(i["useMemo"])(()=>l,[l]);window.Hls=q.a;var s=e=>{var t=e.color,a=e.id,n=e.link,l=e.type,r="http://api.btstu.cn/sjbz/?lx=dongman",i={container:document.getElementById("dplayer"),autoplay:!0,theme:t,screenshot:!1,hotkey:!0,preload:"auto",volume:.7,mutex:!0,video:{url:n,pic:r,type:"mp4"===l?"auto":"hls"},danmaku:{id:a,api:"/api/danmu/list/",maximum:1e3,bottom:"15%",unlimited:!0}};new $.a(i)};return Object(i["useEffect"])(()=>{"php"!==n&&s({color:r,id:t,link:a.link,type:n})},[e.target]),o.a.createElement(o.a.Fragment,null,"php"===n?o.a.createElement("iframe",{style:{width:"100%",height:"100%",border:"none"},src:a.link}):o.a.createElement("div",{id:"dplayer"}))},C=z,P=a("l61h"),R=p["a"].TabPane,F=d["a"].div`
  .player {
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
`,T=e=>{var t=e.play,a=`${t.slug}S${t.season.season}E${t.season.eposide}`,n=Object(i["useContext"])(u["a"]),l=Object(i["useMemo"])(()=>n,[n]),r=Object(i["useState"])(200),s=m()(r,2),c=s[0],d=s[1],b=Object(i["useRef"])(null);return Object(i["useEffect"])(()=>{d(.5625*b.current.clientWidth)}),o.a.createElement(F,{color:l},o.a.createElement("div",{className:"player",ref:b,style:{height:c}},o.a.createElement(C,{target:a,info:t.playInfo,type:t.play.kind})),o.a.createElement("div",{className:"eposide"},o.a.createElement(g["a"],{slug:t.slug,cover:t.cover.vertical,eposide:t.season})),o.a.createElement("div",{className:"info"},o.a.createElement("div",{className:"cover",style:{backgroundImage:`url(${t.cover.vertical})`},onClick:()=>{N["a"].push(`/animate/${t.slug}`)}}),o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"title"},t.title),o.a.createElement("div",{className:"count"},o.a.createElement("span",null,o.a.createElement(M["a"],{type:"icon-youtube"}),t.count.play),o.a.createElement("span",null,o.a.createElement(M["a"],{type:"icon-comment1"}),t.count.comment),o.a.createElement("span",null,o.a.createElement(M["a"],{type:"icon-pinglun"}),t.count.danmu),o.a.createElement("span",null,o.a.createElement(P["a"],null,o.a.createElement(D["a"],{type:"animate",target:t._id,addon:a},o.a.createElement(M["a"],{type:"icon-icon_report_fill"}),Object(h["formatMessage"])({id:"report.question"}))))),o.a.createElement("div",{className:"introduce"},t.information.introduce.slice(0,120)))),o.a.createElement("div",{className:"comment"},o.a.createElement(p["a"],{defaultActiveKey:"1"},o.a.createElement(R,{tab:Object(h["formatMessage"])({id:"animate.play.tabs.danmu"}),key:"1"},o.a.createElement(O,{id:a})),o.a.createElement(R,{tab:`${Object(h["formatMessage"])({id:"animate.tabs.comment"})}(${t.count.comment})`,key:"2"},o.a.createElement(k["a"],{type:"animate",belong:a})))))},Y=T,Z=a("Y8ry"),A=e=>{var t,a,n,l=e.split("S");if(2===l.length){t=l[0];var r=l[1].split("E");2===r.length&&(a=Object(v["a"])(parseInt(r[0])-1),n=Object(v["a"])(parseInt(r[1])-1))}return{slug:t,season:a,eposide:n}},H=class extends i["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.data,t=this.props.dispatch,a=A(e),n=a.slug,r=a.season,i=a.eposide;null!==e&&null!==n&&null!==r&&null!==i?t({type:"animate/getPlayInfo",payload:{data:{slug:n,season:r,eposide:i}}}):l["a"].error(Object(h["formatMessage"])({id:"error.data.few"}))}),this.state={data:e.match.params.data}}static getDerivedStateFromProps(e,t){return e.match.params.data!==t.data?{data:e.match.params.data}:null}componentDidMount(){this.initData()}componentDidUpdate(e,t){t.data!==this.state.data&&this.initData()}render(){var e=this.props,t=e.animate.play,a=e.loading;return o.a.createElement(o.a.Fragment,null,a?o.a.createElement(Z["a"],null):t.slug?o.a.createElement(Y,{play:t}):o.a.createElement(n["a"],{description:o.a.createElement("span",null,Object(h["formatMessage"])({id:"common.empty.tips"})),style:{transform:"translateY(calc(40vh - 50%))"}}))}};H=r["a"]([Object(s["connect"])(e=>{var t=e.animate,a=e.loading;return{animate:t,loading:a.effects["animate/getPlayInfo"]}})],H);t["default"]=H}}]);