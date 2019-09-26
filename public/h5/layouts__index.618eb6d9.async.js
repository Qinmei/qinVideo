(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"+ego":function(e,t,n){"use strict";n.r(t);var a=n("d6i3"),i=n.n(a),o=n("1l/V"),r=n.n(o),c=n("mrSG"),s=n("q1tI"),l=n.n(s),p=n("qIgq"),d=n.n(p),g=n("TJpk"),m=n("vOnD"),h=n("usdK"),u=n("mNhR"),f=m["a"].nav`
  height: 41px;
  width: 100%;
  background-color: white;
  z-index: 990;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 1px 10px 0 10px;
  box-sizing: border-box;
  position: fixed;
  top: -1px;
  left: 0;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  font-size: 26px;

  .logo {
    i {
      font-size: 110px;
    }
  }

  .icon {
    span {
      display: inline-block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }

    .avatar {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background-size: cover;
      background-color: rgba(0, 0, 0, 0.1);
      display: inline-block;
      color: inherit;
      font-style: normal;
      line-height: 0;
      text-align: center;
      text-transform: none;
      vertical-align: -0.125em;
    }
  }
`,b=e=>()=>{h["a"].push(`/${e}`)},w=e=>{var t=e.config,n=t.name,a=t.information,i=Object(s["useState"])(null),o=d()(i,2),r=o[0],c=o[1],p=()=>{var e=JSON.parse(localStorage.getItem("userInfo"));e?e.avatar&&c(e.avatar):c(null)};return Object(s["useEffect"])(()=>{p()}),l.a.createElement(f,null,l.a.createElement(g["Helmet"],{title:n,meta:[{name:"description",content:a}]},l.a.createElement("link",{rel:"icon",href:t.logo}),l.a.createElement("meta",{name:"description",content:t.information})),l.a.createElement("div",{className:"logo",onClick:b("")},"Qinmei"===n?l.a.createElement(u["a"],{type:"icon-qinmei"}):l.a.createElement("span",null,n)),l.a.createElement("div",{className:"icon"},l.a.createElement("span",{onClick:b("search")},l.a.createElement(u["a"],{type:"icon-sousuo"})),l.a.createElement("span",{onClick:b("user")},r?l.a.createElement("div",{className:"avatar",style:{backgroundImage:`url(${r})`}}):l.a.createElement(u["a"],{type:"icon-yonghu"}))))},y=w,v=n("LLXN"),x=m["a"].footer`
  border-top: solid 6px #ebebeb;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  opacity: 0.8;

  .list {
    width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
  }

  .copyright {
    font-size: 12px;
    opacity: 0.6;
  }
`,E=e=>{var t=e.config,n=t.color,a=(t.name,t.slogan,t.aboutus),i=t.qq,o=t.app;return l.a.createElement(x,{color:n},l.a.createElement("div",{className:"list"},l.a.createElement("span",{onClick:()=>{i&&window.open(i)}},Object(v["formatMessage"])({id:"footer.qq"})),l.a.createElement("span",{onClick:()=>{a&&h["a"].push(`/post/${a}`)}},Object(v["formatMessage"])({id:"footer.aboutus"})),l.a.createElement("span",{onClick:()=>{o&&window.open(o)}},Object(v["formatMessage"])({id:"footer.apk"}))),l.a.createElement("span",{className:"copyright"},Object(v["formatMessage"])({id:"footer.right"}),l.a.createElement("a",{href:"https://qinvideo.org"},"Qinvideo")))},k=E,C=n("XEok"),O=n("MuoO"),j=n("bdvc"),I=class extends s["Component"]{constructor(){var e;super(...arguments),e=this,this.state={config:{color:"#ffad14",name:"Qinmei",slogan:"May Change The World",information:"\u4f60\u597d\u5927\u5b8b\u5927",h5Menu:[],h5Index:[],mobleimg:null},pic:!0},this.initCategory=function(){var t=r()(i.a.mark(function t(n){var a;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a=e.props.dispatch,a({type:"category/queryList",payload:{query:{type:n}}});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),this.initConfig=(e=>{var t=this.props.dispatch;t({type:"category/initList",payload:{menu:e}})}),this.initUser=(()=>{var e=localStorage.getItem("userInfo");if(e){e=JSON.parse(e);var t=this.props.dispatch;t({type:"auth/changeLoginStatus",payload:{status:!0}}),t({type:"user/refreshInfo",payload:{}})}})}componentDidMount(){this.setState({config:window.config}),this.initCategory("all"),this.initConfig(Object(j["e"])(window.config.h5Menu)),this.initConfig(Object(j["e"])(window.config.h5Index)),this.initConfig(Object(j["e"])(window.config.postMenu)),this.initConfig(Object(j["e"])(window.config.message)),this.initConfig(Object(j["e"])(window.config.postTop)),this.initUser(),setTimeout(()=>{this.setState({pic:!1})},3e3)}componentDidUpdate(e){this.props.location!==e.location&&window.scrollTo(0,0)}render(){var e=this.state,t=e.config,n=e.pic,a=this.props.children;return l.a.createElement(C["a"].Provider,{value:t.color},n?l.a.createElement("div",{style:{width:"100vw",height:"100vh",position:"fixed",top:"0",left:"0",zIndex:999,backgroundImage:`url(${t.mobleimg})`,backgroundSize:"cover",backgroundPosition:"center"}}):l.a.createElement("div",{className:"layout"},l.a.createElement(y,{config:t}),l.a.createElement("div",null,a),l.a.createElement(k,{config:t})))}};I=c["a"]([Object(O["connect"])(e=>{var t=e.category;return{category:t}})],I);t["default"]=I}}]);