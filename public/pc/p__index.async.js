(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{QeBL:function(e,t,a){"use strict";a.r(t);var n=a("p0pE"),i=a.n(n),o=a("mrSG"),r=a("q1tI"),l=a.n(r),c=a("XfOM"),d=a.n(c),s=(a("fV52"),a("3I+P")),p=a("qIgq"),u=a.n(p),m=a("usdK"),g=a("vOnD"),h=g["a"].div`
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
`,v=g["a"].div`
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
`,b=e=>{var t=e.value,a=t.scroll,n=void 0===a?[]:a,i=t.top,o=void 0===i?[]:i,c=t.type,d=void 0===c?"animate":c,p=Object(r["useState"])(200),g=u()(p,2),b=g[0],f=g[1],x=Object(r["useRef"])(null),w=e=>{m["a"].push(`/${d}/${e}`)};return Object(r["useEffect"])(()=>{f(x.current.clientHeight)}),l.a.createElement(h,null,l.a.createElement("div",{className:"scroll",ref:x},l.a.createElement(s["a"],{autoplay:!0,autoplaySpeed:5e3,adaptiveHeight:!0},n.slice(0,6).map(e=>l.a.createElement(v,{height:b,cover:e.cover.horizontal,onClick:()=>{w(e.slug)}},l.a.createElement("span",null,e.title))))),o.slice(0,6).map(e=>l.a.createElement("div",{className:"top",style:{backgroundImage:`url(${e.cover.horizontal})`},onClick:()=>{w(e.slug)}},l.a.createElement("span",null,e.title))))},f=b,x=a("mNhR"),w=a("bdvc"),E=a("XEok"),y=g["a"].div`
  background-color: ${e=>e.color};
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);

  &:hover {
    background-color: ${e=>Object(w["b"])(e.color,.8)};
  }
`,k=e=>{var t=e.onChange,a=Object(r["useContext"])(E["a"]),n=Object(r["useMemo"])(()=>a,[a]);return l.a.createElement(y,{color:n,onClick:t},e.children)},_=k,O=a("/88p"),j=a("LLXN"),$=g["a"].div`
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
`,N=e=>{if("custom"===e.status){var t="animate"===e.type?"allAnimate":"allComic";m["a"].push(`/${t}`)}else m["a"].push(`/cate/${e.type}/${e._id}`)},I=e=>{var t=e.value,a=t.list,n=void 0===a?[]:a,i=t.info,o=void 0===i?{}:i,r=window.outerWidth,c=r>=1600?16:12;return l.a.createElement($,null,l.a.createElement("div",{className:"head"},l.a.createElement("div",{className:"left"},l.a.createElement(x["a"],{type:o.icon}),l.a.createElement("span",null,o.slug)),l.a.createElement(_,{onClick:()=>{N(o)}},Object(j["formatMessage"])({id:"index.loadMore"}))),l.a.createElement(O["b"],{type:o.type,list:n.slice(0,c)}))},z=I,C=a("zqYd"),M=a("MuoO"),q=a("faBS"),S=class extends r["Component"]{constructor(){super(...arguments),this.state={config:{color:"",name:"",slogan:"",information:"",headimg:"",pcMenu:[],pcIndex:[]}},this.initData=(e=>{var t=this.props.dispatch,a=Object(w["d"])(e);a.forEach(e=>{var a=Object(q["c"])(e);t({type:`${e.type}/queryList`,payload:{query:a,addon:{type:e._id}}})})})}componentDidMount(){this.setState({config:window.config}),this.initData(window.config.pcIndex)}render(){var e=this.state.config,t=e.name,a=e.slogan,n=e.headimg,o=e.pcIndex,r=this.props,c=r.animate,s=r.comic,p=i()({},c,s),u=Object(w["d"])(o);return l.a.createElement("div",{className:d.a.index},l.a.createElement("div",{className:d.a.header,style:{backgroundImage:`url(${n})`}},l.a.createElement("div",{className:d.a.title},l.a.createElement("span",null,t),l.a.createElement("p",null,a))),u.length>2&&l.a.createElement("div",{className:"container"},l.a.createElement(f,{value:{scroll:p[u[0]._id],top:p[u[1]._id],type:"animate"}}),u.slice(2,u.length).map(e=>{return/newIndexNew/.test(e._id)?l.a.createElement(C["a"],{value:{info:e,list:p[e._id]}}):l.a.createElement(z,{value:{info:e,list:p[e._id]}})})))}};S=o["a"]([Object(M["connect"])(e=>{var t=e.animate,a=e.comic,n=e.loading;return{animate:t,comic:a,loading:n.models.animate}})],S);t["default"]=S},XfOM:function(e,t,a){e.exports={index:"index___28nWn",header:"header___2ZAQi",title:"title___2cyli"}}}]);