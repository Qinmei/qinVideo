(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{QeBL:function(e,t,a){"use strict";a.r(t);var n=a("p0pE"),i=a.n(n),o=a("mrSG"),l=a("q1tI"),c=a.n(l),r=(a("0mAl"),a("Ng4X")),s=a("qIgq"),d=a.n(s),p=a("usdK"),m=a.n(p),u=a("vOnD"),h=u["a"].div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 15px;

  .scroll {
    background-color: rgba(0, 0, 0, 0.1);
  }
`,f=e=>{var t=e.scroll,a=void 0===t?[]:t,n=e.type,i=void 0===n?"animate":n,o=Object(l["useState"])(200),s=d()(o,2),p=s[0],u=s[1],f=Object(l["useRef"])(null),g=e=>{m.a.push(`/${i}/${e}`)};return Object(l["useEffect"])(()=>{u(.5625*f.current.clientWidth)}),c.a.createElement(h,{ref:f},c.a.createElement(r["a"],{autoplay:!0,infinite:!0},a.map(e=>c.a.createElement("div",{className:"scroll",onClick:()=>g(e.slug),style:{backgroundImage:`url(${e.cover.horizontal})`,height:p}}))))},g=f,v=a("/88p"),y=a("LLXN"),b=u["a"].div`
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
`,E=e=>{if("custom"===e.status){var t="animate"===e.type?"allAnimate":"allComic";m.a.push(`/${t}`)}else m.a.push(`/cate/${e.type}/${e._id}`)},w=e=>{var t="animate"===e.type?"newAnimate":"newComic";m.a.push(`/${t}`)},x=e=>{var t=e.value,a=t.list,n=void 0===a?[]:a,i=t.info,o=void 0===i?{}:i,l=t.color,r=void 0===l?"black":l,s=!(!o||!/newIndexNew/.test(o._id)),d=!!/newIndexRandom/.test(o._id),p=(new Date).getDay();return c.a.createElement(b,{color:r},c.a.createElement("div",{className:"head"},c.a.createElement("div",{className:"left"},c.a.createElement("span",null,o.slug)),c.a.createElement("div",{className:"btn",onClick:()=>{s?w(o):E(o)}},Object(y["formatMessage"])({id:"index.loadMore"}))),d?c.a.createElement(v["a"],{type:o.type,list:n}):s?c.a.createElement(v["b"],{type:o.type,list:n.filter(e=>e.information.updateDay===p),update:s}):c.a.createElement(v["b"],{type:o.type,list:n.slice(0,6)}))},j=x,O=a("bdvc"),$=a("MuoO"),k=a("faBS"),D=a("nLTe"),I=class extends l["Component"]{constructor(){super(...arguments),this.state={config:{color:"",name:"",slogan:"",information:"",headimg:"",h5Menu:[],h5Index:[]}},this.initData=(e=>{var t=this.props.dispatch,a=Object(O["d"])(e);a.forEach(e=>{var a=Object(k["c"])(e);t({type:`${e.type}/queryList`,payload:{query:a,addon:{type:e._id}}})})})}componentDidMount(){this.setState({config:window.config}),this.initData(window.config.h5Index)}render(){var e=this.state.config.h5Index,t=this.props,a=t.animate,n=t.comic,o=i()({},a,n),l=["#7B72E9","#FF4351","#FEAE18","#A5DE37","#33CC99","#1B9AF7","#117a65"],r=Object(O["d"])(e);return c.a.createElement("div",null,c.a.createElement(D["a"],{active:"index"}),r.length>1&&c.a.createElement("div",{className:"container"},c.a.createElement(g,{scroll:o[r[0]._id],type:r[0].type}),c.a.createElement(v["b"],{type:r[1].type,list:o[r[1]._id]?o[r[1]._id].slice(0,6):[]}),r.slice(2,r.length).map((e,t)=>c.a.createElement(j,{value:{info:e,list:o[e._id],color:l[t%6]}}))))}};I=o["a"]([Object($["connect"])(e=>{var t=e.animate,a=e.comic,n=e.loading;return{animate:t,comic:a,loading:n.models.animate}})],I);t["default"]=I}}]);