(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{QeBL:function(e,t,a){"use strict";a.r(t);var n=a("p0pE"),i=a.n(n),r=a("mrSG"),o=a("q1tI"),l=a.n(o),c=a("XfOM"),s=a.n(c),d=(a("fV52"),a("3I+P")),p=a("qIgq"),m=a.n(p),u=a("usdK"),g=a.n(u),h=a("vOnD"),v=h["a"].div`
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
`,b=h["a"].div`
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
`,f=e=>{var t=e.value,a=t.scroll,n=void 0===a?[]:a,i=t.top,r=void 0===i?[]:i,c=t.type,s=void 0===c?"animate":c,p=Object(o["useState"])(200),u=m()(p,2),h=u[0],f=u[1],x=Object(o["useRef"])(null),w=e=>{g.a.push(`/${s}/${e}`)};return Object(o["useEffect"])(()=>{f(x.current.clientHeight)}),l.a.createElement(v,null,l.a.createElement("div",{className:"scroll",ref:x},l.a.createElement(d["a"],{autoplay:!0,autoplaySpeed:5e3,adaptiveHeight:!0},n.slice(0,6).map(e=>l.a.createElement(b,{height:h,onClick:()=>{w(e.slug)}},l.a.createElement("span",null,e.title))))),r.slice(0,6).map(e=>l.a.createElement("div",{className:"top",style:{backgroundImage:`url(${e.cover})`},onClick:()=>{w(e.slug)}},l.a.createElement("span",null,e.title))))},x=f,w=a("mNhR"),E=a("bdvc"),y=a("XEok"),k=h["a"].div`
  background-color: ${e=>e.color};
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);

  &:hover {
    background-color: ${e=>Object(E["b"])(e.color,.8)};
  }
`,_=e=>{var t=e.onChange,a=Object(o["useContext"])(y["a"]),n=Object(o["useMemo"])(()=>a,[a]);return l.a.createElement(k,{color:n,onClick:t},e.children)},O=_,j=a("/88p"),N=a("LLXN"),$=h["a"].div`
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
`,I=e=>{if("custom"===e.status){var t="animate"===e.type?"allAnimate":"allComic";g.a.push(`/${t}`)}else g.a.push(`/cate/${e.type}/${e._id}`)},C=e=>{var t=e.value,a=t.list,n=void 0===a?[]:a,i=t.info,r=void 0===i?{}:i,o=window.outerWidth,c=o>=1600?16:12;return l.a.createElement($,null,l.a.createElement("div",{className:"head"},l.a.createElement("div",{className:"left"},l.a.createElement(w["a"],{type:r.icon}),l.a.createElement("span",null,r.slug)),l.a.createElement(O,{onClick:()=>{I(r)}},Object(N["formatMessage"])({id:"index.loadMore"}))),l.a.createElement(j["b"],{type:r.type,list:n.slice(0,c)}))},M=C,q=a("zqYd"),L=a("MuoO"),S=a("faBS"),z=class extends o["Component"]{constructor(){super(...arguments),this.state={config:{color:"",name:"",slogan:"",information:"",headimg:"",pcMenu:[],pcIndex:[]}},this.initData=(e=>{var t=this.props.dispatch,a=Object(E["d"])(e);a.forEach(e=>{var a=Object(S["c"])(e);t({type:`${e.type}/queryList`,payload:{query:a,addon:{type:e._id}}})})})}componentDidMount(){this.setState({config:window.config}),this.initData(window.config.pcIndex)}render(){var e=this.state.config,t=e.name,a=e.slogan,n=e.headimg,r=e.pcIndex,o=this.props,c=o.animate,d=o.comic,p=i()({},c,d),m=Object(E["d"])(r);return l.a.createElement("div",{className:s.a.index},l.a.createElement("div",{className:s.a.header,style:{backgroundImage:`url(${n})`}},l.a.createElement("div",{className:s.a.title},l.a.createElement("span",null,t),l.a.createElement("p",null,a))),m.length>2&&l.a.createElement("div",{className:"container"},l.a.createElement(x,{value:{scroll:p[m[0]._id],top:p[m[1]._id],type:"animate"}}),m.slice(2,m.length).map(e=>{return/newIndexNew/.test(e._id)?l.a.createElement(q["a"],{value:{info:e,list:p[e._id]}}):l.a.createElement(M,{value:{info:e,list:p[e._id]}})})))}};z=r["a"]([Object(L["connect"])(e=>{var t=e.animate,a=e.comic,n=e.loading;return{animate:t,comic:a,loading:n.models.animate}})],z);t["default"]=z},XfOM:function(e,t,a){e.exports={index:"index___3vhrs",header:"header___1xHhn",title:"title___1AsLW"}}}]);