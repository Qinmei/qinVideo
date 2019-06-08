(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{QeBL:function(e,t,a){"use strict";a.r(t);var i=a("p0pE"),n=a.n(i),r=a("mrSG"),l=a("q1tI"),o=a.n(l),c=a("XfOM"),s=a.n(c),d=(a("fV52"),a("3I+P")),p=a("qIgq"),m=a.n(p),u=a("usdK"),g=a("vOnD"),h=g["a"].div`
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

  span {
    display: block;
    padding: 0 15px;
    height: 30px;
    line-height: 30px;
    color: white;
    font-size: 18px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
  }
`,b=e=>{var t=e.value,a=t.scroll,i=void 0===a?[]:a,n=t.top,r=void 0===n?[]:n,c=t.type,s=void 0===c?"animate":c,p=Object(l["useState"])(200),g=m()(p,2),b=g[0],f=g[1],x=Object(l["useRef"])(null),w=e=>{u["a"].push(`/${s}/${e}`)};return Object(l["useEffect"])(()=>{f(x.current.clientHeight)}),o.a.createElement(h,null,o.a.createElement("div",{className:"scroll",ref:x},o.a.createElement(d["a"],{autoplay:!0,autoplaySpeed:5e3,adaptiveHeight:!0},i.slice(0,6).map(e=>o.a.createElement(v,{height:b,onClick:()=>{w(e.slug)}},o.a.createElement("span",null,e.title))))),r.slice(0,6).map(e=>o.a.createElement("div",{className:"top",style:{backgroundImage:`url(${e.cover})`},onClick:()=>{w(e.slug)}},o.a.createElement("span",null,e.title))))},f=b,x=a("mNhR"),w=a("bdvc"),E=a("XEok"),y=g["a"].div`
  background-color: ${e=>e.color};
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);

  &:hover {
    background-color: ${e=>Object(w["b"])(e.color,.8)};
  }
`,k=e=>{var t=e.onChange,a=Object(l["useContext"])(E["a"]),i=Object(l["useMemo"])(()=>a,[a]);return o.a.createElement(y,{color:i,onClick:t},e.children)},_=k,O=a("/88p"),j=a("LLXN"),N=g["a"].div`
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
`,$=e=>{if("custom"===e.status){var t="animate"===e.type?"allAnimate":"allComic";u["a"].push(`/${t}`)}else u["a"].push(`/cate/${e.type}/${e._id}`)},I=e=>{var t=e.value,a=t.list,i=void 0===a?[]:a,n=t.info,r=void 0===n?{}:n,l=window.outerWidth,c=l>=1600?16:12;return o.a.createElement(N,null,o.a.createElement("div",{className:"head"},o.a.createElement("div",{className:"left"},o.a.createElement(x["a"],{type:r.icon}),o.a.createElement("span",null,r.slug)),o.a.createElement(_,{onClick:()=>{$(r)}},Object(j["formatMessage"])({id:"index.loadMore"}))),o.a.createElement(O["b"],{type:r.type,list:i.slice(0,c)}))},C=I,M=a("zqYd"),q=a("MuoO"),S=a("faBS"),z=class extends l["Component"]{constructor(){super(...arguments),this.state={config:{color:"",name:"",slogan:"",information:"",headimg:"",pcMenu:[],pcIndex:[]}},this.initData=(e=>{var t=this.props.dispatch,a=Object(w["d"])(e);a.forEach(e=>{var a=Object(S["c"])(e);t({type:`${e.type}/queryList`,payload:{query:a,addon:{type:e._id}}})})})}componentDidMount(){this.setState({config:window.config}),this.initData(window.config.pcIndex)}render(){var e=this.state.config,t=e.name,a=e.slogan,i=e.headimg,r=e.pcIndex,l=this.props,c=l.animate,d=l.comic,p=n()({},c,d),m=Object(w["d"])(r);return o.a.createElement("div",{className:s.a.index},o.a.createElement("div",{className:s.a.header,style:{backgroundImage:`url(${i})`}},o.a.createElement("div",{className:s.a.title},o.a.createElement("span",null,t),o.a.createElement("p",null,a))),m.length>2&&o.a.createElement("div",{className:"container"},o.a.createElement(f,{value:{scroll:p[m[0]._id],top:p[m[1]._id],type:"animate"}}),m.slice(2,m.length).map(e=>{return/newIndexNew/.test(e._id)?o.a.createElement(M["a"],{value:{info:e,list:p[e._id]}}):o.a.createElement(C,{value:{info:e,list:p[e._id]}})})))}};z=r["a"]([Object(q["connect"])(e=>{var t=e.animate,a=e.comic,i=e.loading;return{animate:t,comic:a,loading:i.models.animate}})],z);t["default"]=z},XfOM:function(e,t,a){e.exports={index:"index___28nWn",header:"header___2ZAQi",title:"title___2cyli"}}}]);