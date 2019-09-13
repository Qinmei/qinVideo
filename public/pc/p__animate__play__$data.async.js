(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"8S6H":function(e,a,t){"use strict";t.r(a);t("R9oj");var n=t("ECub"),r=(t("miYZ"),t("tsqr")),l=t("mrSG"),i=t("q1tI"),s=t.n(i),o=t("MuoO"),c=(t("IzEo"),t("bx4M")),m=(t("+L6B"),t("2/Rp")),p=(t("5Dmo"),t("3S7+")),d=t("qIgq"),u=t.n(d),g=t("vOnD"),h=t("XEok"),b=t("LLXN"),E=t("yDSA"),f=(t("T2oS"),t("W9HT")),v=t("Dp36"),y=t("wd/R"),x=t.n(y),j=t("bdvc"),O=e=>{var a=Math.floor(e/60),t=Math.floor(e%60);return`${Object(j["a"])(a)}:${Object(j["a"])(t)}`},w=g["a"].div`
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
`,k=e=>{var a=e.id,t=Object(i["useContext"])(h["a"]),n=Object(i["useMemo"])(()=>t,[t]),r=Object(i["useState"])([]),l=u()(r,2),o=l[0],c=l[1],m=Object(i["useState"])(!0),p=u()(m,2),d=p[0],g=p[1];return Object(i["useEffect"])(()=>{v["a"].queryDanmu({query:{id:a}}).then(e=>{c(e.data),g(!1)})},[e.id]),s.a.createElement(w,{color:n},s.a.createElement("div",{className:"head"},s.a.createElement("span",null,Object(b["formatMessage"])({id:"danmu.time"})),s.a.createElement("span",null,Object(b["formatMessage"])({id:"danmu.content"})),s.a.createElement("span",null,Object(b["formatMessage"])({id:"danmu.created"}))),s.a.createElement(f["a"],{spinning:d},s.a.createElement("div",{className:"main"},o.map(e=>s.a.createElement("div",{className:"list"},s.a.createElement("span",null,O(e.time)),s.a.createElement("span",null,e.text),s.a.createElement("span",null,x()(e.createdAt).format("MM-DD")))))))},N=k,M=t("8KYf"),$=t("mNhR"),D=t("usdK"),S=t("eNRF"),I=(t("Quhn"),t("NUga")),q=t.n(I),z=t("ulZh"),C=t.n(z),R=e=>{var a=e.target,t=e.info,n=e.type,r=Object(i["useContext"])(h["a"]),l=Object(i["useMemo"])(()=>r,[r]);window.Hls=C.a;var o=e=>{var a=e.color,t=e.id,n=e.link,r=e.type,l="http://api.btstu.cn/sjbz/?lx=dongman",i={container:document.getElementById("dplayer"),autoplay:!0,theme:a,screenshot:!1,hotkey:!0,preload:"auto",volume:.7,mutex:!0,video:{url:n,pic:l,type:"mp4"===r?"auto":"hls"},danmaku:{id:t,api:"/api/v1/danmu/list/",maximum:1e3,bottom:"15%",unlimited:!0}};new q.a(i)};return Object(i["useEffect"])(()=>{"php"!==n&&o({color:l,id:a,link:t.link,type:n})},[e.target]),s.a.createElement(s.a.Fragment,null,"php"===n?s.a.createElement("iframe",{style:{width:"100%",height:"100%",border:"none"},src:t.link}):s.a.createElement("div",{id:"dplayer"}))},F=R,Y=t("l61h"),H=g["a"].div`
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
`,L=e=>{var a=e.play,t=`${a.slug}S${a.season.season}E${a.season.eposide}`,n=`S${a.season.season}E${a.season.eposide}`,r=Object(i["useContext"])(h["a"]),l=Object(i["useMemo"])(()=>r,[r]),o=Object(i["useState"])(0),d=u()(o,2),g=d[0],f=d[1],v=Object(i["useState"])(200),y=u()(v,2),x=y[0],O=y[1],w=Object(i["useRef"])(null),k=Object(i["useRef"])(null);return Object(i["useEffect"])(()=>{O(.5625*w.current.clientWidth),k.current.scrollTop=80*a.season.eposide}),s.a.createElement(H,{color:l},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"player",ref:w,style:{height:x}},s.a.createElement(F,{target:t,info:a.playInfo,type:a.play.kind})),s.a.createElement("div",{className:"sidebar",style:{height:x}},s.a.createElement("div",{className:"header"},["eposide","danmu"].map((e,a)=>s.a.createElement("span",{className:g===a?"active":"",onClick:()=>{f(a)}},Object(b["formatMessage"])({id:`animate.play.tabs.${e}`})))),s.a.createElement("div",{className:"content",ref:k},s.a.createElement("div",{className:0===g?"eposide active":"eposide"},s.a.createElement(E["a"],{slug:a.slug,cover:a.cover.vertical,eposide:a.season})),s.a.createElement("div",{className:1===g?"danmu active":"danmu"},s.a.createElement(N,{id:t})))),s.a.createElement("div",{className:"comment"},s.a.createElement("div",{className:"report"},s.a.createElement("div",{className:"title"},s.a.createElement("span",null,a.title," - ",Object(j["a"])(parseInt(a.season.eposide+1))," :"," ",a.playInfo.title),s.a.createElement(p["a"],{placement:"top",title:Object(b["formatMessage"])({id:"animate.info.play"})},s.a.createElement("span",null,s.a.createElement($["a"],{type:"icon-youtube"}),a.count.play)),s.a.createElement(p["a"],{placement:"top",title:Object(b["formatMessage"])({id:"animate.info.comment"})},s.a.createElement("span",null,s.a.createElement($["a"],{type:"icon-comment1"}),a.count.comment)),s.a.createElement(p["a"],{placement:"top",title:Object(b["formatMessage"])({id:"animate.info.danmu"})},s.a.createElement("span",null,s.a.createElement($["a"],{type:"icon-pinglun"}),a.count.danmu))),s.a.createElement("div",{className:"btn"},s.a.createElement(Y["a"],null,s.a.createElement(S["a"],{type:"animate",target:a._id,addon:`\u7b2c${a.season.season+1}\u5b63\u7b2c${a.season.eposide+1}\u96c6`},s.a.createElement(m["a"],{type:"primary",shape:"round"},Object(b["formatMessage"])({id:"report.question"})))))),s.a.createElement(M["a"],{type:"animate",belong:a.slug,target:n})),s.a.createElement("div",{className:"info"},s.a.createElement(c["a"],{bordered:!1,className:"info-main"},s.a.createElement("div",{className:"cover",style:{backgroundImage:`url(${a.cover.vertical})`},onClick:()=>{D["a"].push(`/animate/${a.slug}`)}}),s.a.createElement("div",{className:"title"},a.title),s.a.createElement("div",{className:"introduce"},a.information.introduce)))))},P=L,T=t("Y8ry"),A=e=>{var a,t,n,r=e.split("S");if(2===r.length){a=r[0];var l=r[1].split("E");2===l.length&&(t=Object(j["a"])(parseInt(l[0])-1),n=Object(j["a"])(parseInt(l[1])-1))}return{slug:a,season:t,eposide:n}},B=class extends i["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.data,a=this.props.dispatch,t=A(e),n=t.slug,l=t.season,i=t.eposide;null!==e&&null!==n&&null!==l&&null!==i?a({type:"animate/getPlayInfo",payload:{data:{slug:n,season:l,eposide:i}}}):r["a"].error(Object(b["formatMessage"])({id:"error.data.few"}))}),this.state={data:e.match.params.data}}static getDerivedStateFromProps(e,a){return e.match.params.data!==a.data?{data:e.match.params.data}:null}componentDidMount(){this.initData()}componentDidUpdate(e,a){a.data!==this.state.data&&this.initData()}render(){var e=this.props,a=e.animate.play,t=e.loading;return s.a.createElement(s.a.Fragment,null,t?s.a.createElement(T["a"],null):a.slug?s.a.createElement(P,{play:a}):s.a.createElement(n["a"],{description:s.a.createElement("span",null,Object(b["formatMessage"])({id:"common.empty.tips"})),style:{transform:"translateY(calc(40vh - 50%))"}}))}};B=l["a"]([Object(o["connect"])(e=>{var a=e.animate,t=e.loading;return{animate:a,loading:t.effects["animate/getPlayInfo"]}})],B);a["default"]=B}}]);