(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{QeBL:function(e,t,a){"use strict";a.r(t);var n=a("p0pE"),i=a.n(n),o=a("mrSG"),l=a("q1tI"),c=a.n(l),r=(a("0mAl"),a("Ng4X")),s=a("qIgq"),d=a.n(s),m=a("usdK"),p=a("vOnD"),u=p["a"].div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 15px;

  .scroll {
    background-color: rgba(0, 0, 0, 0.1);
    background-size: cover;
    background-position: center;
  }
`,g=e=>{var t=e.scroll,a=void 0===t?[]:t,n=e.type,i=void 0===n?"animate":n,o=Object(l["useState"])(200),s=d()(o,2),p=s[0],g=s[1],h=Object(l["useRef"])(null),v=e=>{m["a"].push(`/${i}/${e}`)};return Object(l["useEffect"])(()=>{g(.5625*h.current.clientWidth)}),c.a.createElement(u,{ref:h},c.a.createElement(r["a"],{autoplay:!0,infinite:!0},a.map(e=>c.a.createElement("div",{className:"scroll",onClick:()=>v(e.slug),style:{backgroundImage:`url(${e.cover.horizontal})`,height:p}}))))},h=g,v=a("/88p"),f=a("LLXN"),b=p["a"].div`
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
`,E=e=>{if("custom"===e.status){var t="animate"===e.type?"allAnimate":"allComic";m["a"].push(`/${t}`)}else m["a"].push(`/cate/${e.type}/${e._id}`)},y=e=>{var t="animate"===e.type?"newAnimate":"newComic";m["a"].push(`/${t}`)},w=e=>{var t=e.value,a=t.list,n=void 0===a?[]:a,i=t.info,o=void 0===i?{}:i,l=t.color,r=void 0===l?"black":l,s=!(!o||!/newIndexNew/.test(o._id)),d=!!/newIndexRandom/.test(o._id),m=(new Date).getDay();return c.a.createElement(b,{color:r},c.a.createElement("div",{className:"head"},c.a.createElement("div",{className:"left"},c.a.createElement("span",null,o.slug)),c.a.createElement("div",{className:"btn",onClick:()=>{s?y(o):E(o)}},Object(f["formatMessage"])({id:"index.loadMore"}))),d?c.a.createElement(v["a"],{type:o.type,list:n}):s?c.a.createElement(v["b"],{type:o.type,list:n.filter(e=>e.information.updateDay===m),update:s}):c.a.createElement(v["b"],{type:o.type,list:n.slice(0,6)}))},x=w,k=a("bdvc"),$=a("MuoO"),j=a("nLTe"),N=class extends l["Component"]{constructor(){super(...arguments),this.state={config:{color:"",name:"",slogan:"",information:"",headimg:"",h5Menu:[],h5Index:[]}}}componentDidMount(){this.setState({config:window.config})}render(){var e=this.state.config.h5Index,t=this.props,a=t.animate,n=t.comic,o=i()({},a,n),l=["#7B72E9","#FF4351","#FEAE18","#A5DE37","#33CC99","#1B9AF7","#117a65"],r=Object(k["d"])(e);return c.a.createElement("div",null,c.a.createElement(j["a"],{active:"index"}),r.length>1&&c.a.createElement("div",{className:"container"},c.a.createElement(h,{scroll:o[r[0]._id],type:r[0].type}),c.a.createElement(v["b"],{type:r[1].type,list:o[r[1]._id]?o[r[1]._id].slice(0,6):[]}),r.slice(2,r.length).map((e,t)=>c.a.createElement(x,{value:{info:e,list:o[e._id],color:l[t%6]}}))))}};N=o["a"]([Object($["connect"])(e=>{var t=e.animate,a=e.comic,n=e.loading;return{animate:t,comic:a,loading:n.models.animate}})],N);t["default"]=N}}]);