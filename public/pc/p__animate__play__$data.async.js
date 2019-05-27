(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"8S6H":function(e,a,t){"use strict";t.r(a);t("R9oj");var n=t("ECub"),r=(t("miYZ"),t("tsqr")),i=t("mrSG"),l=t("q1tI"),o=t.n(l),s=t("MuoO"),c=(t("IzEo"),t("bx4M")),m=(t("+L6B"),t("2/Rp")),p=(t("5Dmo"),t("3S7+")),d=t("qIgq"),u=t.n(d),g=t("vOnD"),h=t("XEok"),b=t("LLXN"),E=t("yDSA"),f=(t("T2oS"),t("W9HT")),v=t("Dp36"),y=t("wd/R"),x=t.n(y),j=t("bdvc"),O=e=>{var a=Math.floor(e/60),t=e%60;return`${Object(j["a"])(a)}:${Object(j["a"])(t)}`},w=g["a"].div`
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
`,k=e=>{var a=e.id,t=Object(l["useContext"])(h["a"]),n=Object(l["useMemo"])(()=>t,[t]),r=Object(l["useState"])([]),i=u()(r,2),s=i[0],c=i[1],m=Object(l["useState"])(!0),p=u()(m,2),d=p[0],g=p[1];return Object(l["useEffect"])(()=>{v["a"].queryDanmu({query:{id:a}}).then(e=>{c(e.data),g(!1)})},[e.id]),o.a.createElement(w,{color:n},o.a.createElement("div",{className:"head"},o.a.createElement("span",null,Object(b["formatMessage"])({id:"danmu.time"})),o.a.createElement("span",null,Object(b["formatMessage"])({id:"danmu.content"})),o.a.createElement("span",null,Object(b["formatMessage"])({id:"danmu.created"}))),o.a.createElement(f["a"],{spinning:d},o.a.createElement("div",{className:"main"},s.map(e=>o.a.createElement("div",{className:"list"},o.a.createElement("span",null,O(e.time)),o.a.createElement("span",null,e.text),o.a.createElement("span",null,x()(e.createdAt).format("MM-DD")))))))},N=k,M=t("8KYf"),D=t("mNhR"),I=t("usdK"),S=t("eNRF"),$=(t("Quhn"),t("NUga")),q=t.n($),z=(t("F4PH"),e=>{var a=e.color,t=e.id,n=e.link,r=e.type,i="http://api.btstu.cn/sjbz/?lx=dongman",l={container:document.getElementById("dplayer"),autoplay:!0,theme:a,screenshot:!1,hotkey:!0,preload:"auto",volume:.7,mutex:!0,video:{url:n,pic:i,type:"mp4"===r?"auto":r},danmaku:{id:t,api:"/api/danmu/list",maximum:1e3,bottom:"15%",unlimited:!0}};new q.a(l)}),C=e=>{var a=e.target,t=e.info,n=e.type,r=Object(l["useContext"])(h["a"]),i=Object(l["useMemo"])(()=>r,[r]);return Object(l["useEffect"])(()=>{"php"!==n&&z({color:i,id:a,link:t.link,type:n})},[e.target]),o.a.createElement(o.a.Fragment,null,"php"===n?o.a.createElement("iframe",{style:{width:"100%",height:"100%",border:"none"},src:t.link}):o.a.createElement("div",{id:"dplayer"}))},R=C,F=g["a"].div`
  padding: 60px;
  .container {
    display: grid;
    grid-template-columns: 1fr 320px;
    grid-gap: 20px;

    .player {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .sidebar {
      background-color: white;
      padding: 5px 20px 0px 20px;

      .header {
        height: 40px;

        span {
          display: inline-block;
          width: 50%;
          height: 40px;
          line-height: 40px;
          cursor: pointer;
          text-align: center;
          border-bottom: solid 2px transparent;

          &.active {
            border-bottom-color: ${e=>e.color};
          }
        }
      }

      .content {
        height: calc(100% - 50px);
        overflow-y: scroll;
        margin: 5px -20px;

        .eposide,
        .danmu {
          display: none;
        }

        .eposide.active,
        .danmu.active {
          display: block;
        }
      }
    }

    .comment {
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
            margin-right: 30px;

            i {
              margin-right: 5px;
            }
          }
        }

        .btn .ant-btn.ant-btn-primary {
          font-size: 12px;
        }
      }
    }

    .info {
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
  }
`,P=e=>{var a=e.play,t=`${a.slug}S${a.season.season}E${a.season.eposide}`,n=Object(l["useContext"])(h["a"]),r=Object(l["useMemo"])(()=>n,[n]),i=Object(l["useState"])(0),s=u()(i,2),d=s[0],g=s[1],f=Object(l["useState"])(200),v=u()(f,2),y=v[0],x=v[1],O=Object(l["useRef"])(null);return Object(l["useEffect"])(()=>{x(.5625*O.current.clientWidth)}),o.a.createElement(F,{color:r},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"player",ref:O,style:{height:y}},o.a.createElement(R,{target:t,info:a.playInfo,type:a.play.kind})),o.a.createElement("div",{className:"sidebar",style:{height:y}},o.a.createElement("div",{className:"header"},["eposide","danmu"].map((e,a)=>o.a.createElement("span",{className:d===a?"active":"",onClick:()=>{g(a)}},Object(b["formatMessage"])({id:`animate.play.tabs.${e}`})))),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:0===d?"eposide active":"eposide"},o.a.createElement(E["a"],{slug:a.slug,cover:a.cover.vertical,eposide:a.season})),o.a.createElement("div",{className:1===d?"danmu active":"danmu"},o.a.createElement(N,{id:t})))),o.a.createElement("div",{className:"comment"},o.a.createElement("div",{className:"report"},o.a.createElement("div",{className:"title"},o.a.createElement("span",null,a.title," - ",Object(j["a"])(parseInt(a.season.eposide+1))," :"," ",a.playInfo.title),o.a.createElement(p["a"],{placement:"top",title:Object(b["formatMessage"])({id:"animate.info.play"})},o.a.createElement("span",null,o.a.createElement(D["a"],{type:"icon-youtube"}),a.count.play)),o.a.createElement(p["a"],{placement:"top",title:Object(b["formatMessage"])({id:"animate.info.comment"})},o.a.createElement("span",null,o.a.createElement(D["a"],{type:"icon-comment1"}),a.count.comment)),o.a.createElement(p["a"],{placement:"top",title:Object(b["formatMessage"])({id:"animate.info.danmu"})},o.a.createElement("span",null,o.a.createElement(D["a"],{type:"icon-pinglun"}),a.count.danmu))),o.a.createElement("div",{className:"btn"},o.a.createElement(S["a"],{type:"animate",target:a._id,addon:t},o.a.createElement(m["a"],{type:"primary",shape:"round"},Object(b["formatMessage"])({id:"report.question"}))))),o.a.createElement(M["a"],{type:"animate",belong:t})),o.a.createElement("div",{className:"info"},o.a.createElement(c["a"],{bordered:!1,className:"info-main"},o.a.createElement("div",{className:"cover",style:{backgroundImage:`url(${a.cover.vertical})`},onClick:()=>{I["a"].push(`/animate/${a.slug}`)}}),o.a.createElement("div",{className:"title"},a.title),o.a.createElement("div",{className:"introduce"},a.information.introduce)))))},Y=P,H=t("Y8ry"),L=e=>{var a,t,n,r=e.split("S");if(2===r.length){a=r[0];var i=r[1].split("E");2===i.length&&(t=Object(j["a"])(parseInt(i[0])-1),n=Object(j["a"])(parseInt(i[1])-1))}return{slug:a,season:t,eposide:n}},A=class extends l["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.data,a=this.props.dispatch,t=L(e),n=t.slug,i=t.season,l=t.eposide;null!==e&&null!==n&&null!==i&&null!==l?a({type:"animate/getPlayInfo",payload:{data:{slug:n,season:i,eposide:l}}}):r["a"].error(Object(b["formatMessage"])({id:"error.data.few"}))}),this.state={data:e.match.params.data}}static getDerivedStateFromProps(e,a){return e.match.params.data!==a.data?{data:e.match.params.data}:null}componentDidMount(){this.initData()}componentDidUpdate(e,a){a.data!==this.state.data&&this.initData()}render(){var e=this.props,a=e.animate.play,t=e.loading;return o.a.createElement(o.a.Fragment,null,t?o.a.createElement(H["a"],null):a.slug?o.a.createElement(Y,{play:a}):o.a.createElement(n["a"],{description:o.a.createElement("span",null,Object(b["formatMessage"])({id:"common.empty.tips"})),style:{transform:"translateY(calc(40vh - 50%))"}}))}};A=i["a"]([Object(s["connect"])(e=>{var a=e.animate,t=e.loading;return{animate:a,loading:t.effects["animate/getPlayInfo"]}})],A);a["default"]=A}}]);