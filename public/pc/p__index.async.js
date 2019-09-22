(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{QeBL:function(e,t,a){"use strict";a.r(t);a("T2oS");var n=a("W9HT"),i=a("p0pE"),o=a.n(i),r=a("mrSG"),l=a("q1tI"),c=a.n(l),d=a("XfOM"),s=a.n(d),p=(a("fV52"),a("3I+P")),u=a("qIgq"),g=a.n(u),m=a("usdK"),h=a("vOnD"),v=h["a"].div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;

  .scroll {
    grid-area: 1 / 1 / 3 / 3;
    border-radius: 4px;
    overflow: hidden;
  }

  .top {
    width: 100%;
    height: 0;
    padding-bottom: 56.75%;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.1);
    background-size: cover;
    background-position: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;

    span {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      line-height: 30px;
      padding: 0 15px;
      text-align: center;
      color: white;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
    }
  }
`,b=h["a"].div`
  background-color: rgba(0, 0, 0, 0.1);
  height: ${e=>e.height}px;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  background-image: url(${e=>e.cover});

  span {
    display: block;
    padding: 0 15px;
    height: 30px;
    line-height: 30px;
    color: white;
    font-size: 18px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
  }
`,f=e=>{var t=e.value,a=t.scroll,n=void 0===a?[]:a,i=t.top,o=void 0===i?[]:i,r=t.type,d=void 0===r?"animate":r,s=Object(l["useState"])(200),u=g()(s,2),h=u[0],f=u[1],x=Object(l["useRef"])(null),E=e=>{m["a"].push(`/${d}/${e}`)};return Object(l["useEffect"])(()=>{f(x.current.clientHeight)}),c.a.createElement(v,null,c.a.createElement("div",{className:"scroll",ref:x},c.a.createElement(p["a"],{autoplay:!0,autoplaySpeed:5e3,adaptiveHeight:!0},n.slice(0,6).map(e=>c.a.createElement(b,{height:h,cover:e.cover.horizontal,onClick:()=>{E(e.slug)}},c.a.createElement("span",null,e.title))))),o.slice(0,6).map(e=>c.a.createElement("div",{className:"top",style:{backgroundImage:`url(${e.cover.horizontal})`},onClick:()=>{E(e.slug)}},c.a.createElement("span",null,e.title))))},x=f,E=a("mNhR"),w=a("bdvc"),y=a("XEok"),k=h["a"].div`
  background-color: ${e=>e.color};
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);

  &:hover {
    background-color: ${e=>Object(w["b"])(e.color,.8)};
  }
`,_=e=>{var t=e.onChange,a=Object(l["useContext"])(y["a"]),n=Object(l["useMemo"])(()=>a,[a]);return c.a.createElement(k,{color:n,onClick:t},e.children)},O=_,j=a("/88p"),$=a("LLXN"),N=h["a"].div`
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

      i {
        font-size: 26px;
        margin-right: 15px;
      }

      span {
        font-size: 18px;
      }
    }
  }
`,z=e=>{var t=e.value,a=t.list,n=void 0===a?[]:a,i=t.info,o=void 0===i?{}:i,r=window.outerWidth,l=r>=1600?16:12,d=e=>{if("custom"===e.status){var t="animate"===e.type?"allAnimate":"allComic";m["a"].push(`/${t}`)}else m["a"].push(`/cate/${e.type}/${e._id}`)};return c.a.createElement(N,null,c.a.createElement("div",{className:"head"},c.a.createElement("div",{className:"left"},c.a.createElement(E["a"],{type:o.icon}),c.a.createElement("span",null,o.slug)),c.a.createElement(O,{onChange:()=>{d(o)}},Object($["formatMessage"])({id:"index.loadMore"}))),c.a.createElement(j["b"],{type:o.type,list:n.slice(0,l)}))},I=z,C=a("zqYd"),M=a("MuoO"),q=a("faBS"),S=class extends l["Component"]{constructor(){super(...arguments),this.state={config:{color:"",name:"",slogan:"",information:"",headimg:"",pcMenu:[],pcIndex:[]}},this.initData=(e=>{var t=this.props.dispatch,a=Object(w["d"])(e);a.forEach(e=>{var a=Object(q["c"])(e);t({type:`${e.type}/queryList`,payload:{query:a,addon:{type:e._id}}})})})}componentDidMount(){this.setState({config:window.config}),this.initData(window.config.pcIndex)}render(){var e=this.state.config,t=e.name,a=e.slogan,i=e.headimg,r=e.pcIndex,l=this.props,d=l.animate,p=l.comic,u=l.loading,g=o()({},d,p),m=Object(w["d"])(r);return c.a.createElement(n["a"],{spinning:u,size:"large"},c.a.createElement("div",{className:s.a.index},c.a.createElement("div",{className:s.a.header,style:{backgroundImage:`url(${i})`}},c.a.createElement("div",{className:s.a.title},c.a.createElement("span",null,t),c.a.createElement("p",null,a))),m.length>2&&c.a.createElement("div",{className:"container"},c.a.createElement(x,{value:{scroll:g[m[0]._id],top:g[m[1]._id],type:"animate"}}),m.slice(2,m.length).map(e=>{return/newIndexNew/.test(e._id)?c.a.createElement(C["a"],{value:{info:e,list:g[e._id]},key:e._id}):c.a.createElement(I,{value:{info:e,list:g[e._id]},key:e._id})}))))}};S=r["a"]([Object(M["connect"])(e=>{var t=e.animate,a=e.comic,n=e.loading;return{animate:t,comic:a,loading:n.models.animate}})],S);t["default"]=S},XfOM:function(e,t,a){e.exports={index:"index___28nWn",header:"header___2ZAQi",title:"title___2cyli"}}}]);