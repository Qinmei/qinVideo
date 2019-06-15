(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{QeBL:function(e,t,a){"use strict";a.r(t);var n=a("p0pE"),i=a.n(n),o=a("mrSG"),c=a("q1tI"),l=a.n(c),r=(a("0mAl"),a("Ng4X")),s=a("qIgq"),d=a.n(s),p=a("usdK"),m=a("vOnD"),u=m["a"].div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 15px;

  .scroll {
    background-color: rgba(0, 0, 0, 0.1);
    background-size: cover;
    background-position: center;
  }
`,h=e=>{var t=e.scroll,a=void 0===t?[]:t,n=e.type,i=void 0===n?"animate":n,o=Object(c["useState"])(200),s=d()(o,2),m=s[0],h=s[1],g=Object(c["useRef"])(null),f=e=>{p["a"].push(`/${i}/${e}`)};return Object(c["useEffect"])(()=>{h(.5625*g.current.clientWidth)}),l.a.createElement(u,{ref:g},l.a.createElement(r["a"],{autoplay:!0,infinite:!0},a.map(e=>l.a.createElement("div",{className:"scroll",onClick:()=>f(e.slug),style:{backgroundImage:`url(${e.cover.horizontal})`,height:m}}))))},g=h,f=a("/88p"),v=a("LLXN"),y=m["a"].div`
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
`,b=e=>{if("custom"===e.status){var t="animate"===e.type?"allAnimate":"allComic";p["a"].push(`/${t}`)}else p["a"].push(`/cate/${e.type}/${e._id}`)},E=e=>{var t="animate"===e.type?"newAnimate":"newComic";p["a"].push(`/${t}`)},w=e=>{var t=e.value,a=t.list,n=void 0===a?[]:a,i=t.info,o=void 0===i?{}:i,c=t.color,r=void 0===c?"black":c,s=!(!o||!/newIndexNew/.test(o._id)),d=!!/newIndexRandom/.test(o._id),p=(new Date).getDay();return l.a.createElement(y,{color:r},l.a.createElement("div",{className:"head"},l.a.createElement("div",{className:"left"},l.a.createElement("span",null,o.slug)),l.a.createElement("div",{className:"btn",onClick:()=>{s?E(o):b(o)}},Object(v["formatMessage"])({id:"index.loadMore"}))),d?l.a.createElement(f["a"],{type:o.type,list:n}):s?l.a.createElement(f["b"],{type:o.type,list:n.filter(e=>e.information.updateDay===p),update:s}):l.a.createElement(f["b"],{type:o.type,list:n.slice(0,6)}))},x=w,j=a("bdvc"),k=a("MuoO"),O=a("faBS"),$=a("nLTe"),D=class extends c["Component"]{constructor(){super(...arguments),this.state={config:{color:"",name:"",slogan:"",information:"",headimg:"",h5Menu:[],h5Index:[]}},this.initData=(e=>{var t=this.props.dispatch,a=Object(j["d"])(e);a.forEach(e=>{var a=Object(O["c"])(e);t({type:`${e.type}/queryList`,payload:{query:a,addon:{type:e._id}}})})})}componentDidMount(){this.setState({config:window.config}),this.initData(window.config.h5Index)}render(){var e=this.state.config.h5Index,t=this.props,a=t.animate,n=t.comic,o=i()({},a,n),c=["#7B72E9","#FF4351","#FEAE18","#A5DE37","#33CC99","#1B9AF7","#117a65"],r=Object(j["d"])(e);return l.a.createElement("div",null,l.a.createElement($["a"],{active:"index"}),r.length>1&&l.a.createElement("div",{className:"container"},l.a.createElement(g,{scroll:o[r[0]._id],type:r[0].type}),l.a.createElement(f["b"],{type:r[1].type,list:o[r[1]._id]?o[r[1]._id].slice(0,6):[]}),r.slice(2,r.length).map((e,t)=>l.a.createElement(x,{value:{info:e,list:o[e._id],color:c[t%6]}}))))}};D=o["a"]([Object(k["connect"])(e=>{var t=e.animate,a=e.comic,n=e.loading;return{animate:t,comic:a,loading:n.models.animate}})],D);t["default"]=D}}]);