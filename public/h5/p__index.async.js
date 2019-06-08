(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{QeBL:function(e,t,a){"use strict";a.r(t);var n=a("p0pE"),i=a.n(n),c=a("mrSG"),o=a("q1tI"),l=a.n(o),r=(a("0mAl"),a("Ng4X")),s=a("qIgq"),d=a.n(s),p=a("usdK"),m=a("vOnD"),u=m["a"].div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 15px;

  .scroll {
    background-color: rgba(0, 0, 0, 0.1);
  }
`,f=e=>{var t=e.scroll,a=void 0===t?[]:t,n=e.type,i=void 0===n?"animate":n,c=Object(o["useState"])(200),s=d()(c,2),m=s[0],f=s[1],h=Object(o["useRef"])(null),g=e=>{p["a"].push(`/${i}/${e}`)};return Object(o["useEffect"])(()=>{f(.5625*h.current.clientWidth)}),l.a.createElement(u,{ref:h},l.a.createElement(r["a"],{autoplay:!0,infinite:!0},a.map(e=>l.a.createElement("div",{className:"scroll",onClick:()=>g(e.slug),style:{backgroundImage:`url(${e.cover.horizontal})`,height:m}}))))},h=f,g=a("/88p"),v=a("LLXN"),y=m["a"].div`
  width: 100%;

  .head {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    .left {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      span {
        font-size: 18px;
        color: ${e=>e.color};
      }
    }

    .btn {
      padding: 7px 15px 5px 15px;
      border-radius: 4px;
      color: white;
      background-color: ${e=>e.color};
    }
  }
`,b=e=>{if("custom"===e.status){var t="animate"===e.type?"allAnimate":"allComic";p["a"].push(`/${t}`)}else p["a"].push(`/cate/${e.type}/${e._id}`)},E=e=>{var t="animate"===e.type?"newAnimate":"newComic";p["a"].push(`/${t}`)},w=e=>{var t=e.value,a=t.list,n=void 0===a?[]:a,i=t.info,c=void 0===i?{}:i,o=t.color,r=void 0===o?"black":o,s=!(!c||!/newIndexNew/.test(c._id)),d=!!/newIndexRandom/.test(c._id),p=(new Date).getDay();return l.a.createElement(y,{color:r},l.a.createElement("div",{className:"head"},l.a.createElement("div",{className:"left"},l.a.createElement("span",null,c.slug)),l.a.createElement("div",{className:"btn",onClick:()=>{s?E(c):b(c)}},Object(v["formatMessage"])({id:"index.loadMore"}))),d?l.a.createElement(g["a"],{type:c.type,list:n}):s?l.a.createElement(g["b"],{type:c.type,list:n.filter(e=>e.information.updateDay===p),update:s}):l.a.createElement(g["b"],{type:c.type,list:n.slice(0,6)}))},x=w,j=a("bdvc"),O=a("MuoO"),$=a("faBS"),k=a("nLTe"),D=class extends o["Component"]{constructor(){super(...arguments),this.state={config:{color:"",name:"",slogan:"",information:"",headimg:"",pcMenu:[],pcIndex:[]}},this.initData=(e=>{var t=this.props.dispatch,a=Object(j["d"])(e);a.forEach(e=>{var a=Object($["c"])(e);t({type:`${e.type}/queryList`,payload:{query:a,addon:{type:e._id}}})})})}componentDidMount(){this.setState({config:window.config}),this.initData(window.config.pcIndex)}render(){var e=this.state.config.pcIndex,t=this.props,a=t.animate,n=t.comic,c=i()({},a,n),o=["#7B72E9","#FF4351","#FEAE18","#A5DE37","#33CC99","#1B9AF7","#117a65"],r=Object(j["d"])(e);return l.a.createElement("div",null,l.a.createElement(k["a"],{active:"index"}),r.length>1&&l.a.createElement("div",{className:"container"},l.a.createElement(h,{scroll:c[r[0]._id],type:r[0].type}),l.a.createElement(g["b"],{type:r[1].type,list:c[r[1]._id]?c[r[1]._id].slice(0,6):[]}),r.slice(2,r.length).map((e,t)=>l.a.createElement(x,{value:{info:e,list:c[e._id],color:o[t%6]}}))))}};D=c["a"]([Object(O["connect"])(e=>{var t=e.animate,a=e.comic,n=e.loading;return{animate:t,comic:a,loading:n.models.animate}})],D);t["default"]=D}}]);