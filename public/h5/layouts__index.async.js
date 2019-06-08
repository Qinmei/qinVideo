(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"+ego":function(e,t,a){"use strict";a.r(t);var n=a("d6i3"),i=a.n(n),o=a("1l/V"),r=a.n(o),c=a("mrSG"),s=a("q1tI"),l=a.n(s),p=a("qIgq"),d=a.n(p),g=a("TJpk"),m=a("vOnD"),h=a("usdK"),u=a("mNhR"),f=m["a"].nav`
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
`,b=e=>()=>{h["a"].push(`/${e}`)},y=e=>{var t=e.config,a=t.name,n=t.information,i=Object(s["useState"])(null),o=d()(i,2),r=o[0],c=o[1],p=()=>{var e=JSON.parse(localStorage.getItem("userInfo"));e?e.avatar&&c(e.avatar):c(null)};return Object(s["useEffect"])(()=>{p()}),l.a.createElement(f,null,l.a.createElement(g["Helmet"],{title:a,meta:[{name:"description",content:n}]}),l.a.createElement("div",{className:"logo",onClick:b("")},"Qinmei"===a?l.a.createElement(u["a"],{type:"icon-qinmei"}):l.a.createElement("span",null,a)),l.a.createElement("div",{className:"icon"},l.a.createElement("span",{onClick:b("search")},l.a.createElement(u["a"],{type:"icon-sousuo"})),l.a.createElement("span",{onClick:b("user")},r?l.a.createElement("div",{className:"avatar",style:{backgroundImage:"url(avatar)"}}):l.a.createElement(u["a"],{type:"icon-yonghu"}))))},v=y,x=a("LLXN"),w=m["a"].footer`
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
`,E=e=>{var t=e.config,a=t.color,n=(t.name,t.slogan,t.aboutus),i=t.qq,o=t.app;return l.a.createElement(w,{color:a},l.a.createElement("div",{className:"list"},l.a.createElement("span",{onClick:()=>{i&&window.open(i)}},Object(x["formatMessage"])({id:"footer.qq"})),l.a.createElement("span",{onClick:()=>{n&&h["a"].push(`/post/${n}`)}},Object(x["formatMessage"])({id:"footer.aboutus"})),l.a.createElement("span",{onClick:()=>{o&&window.open(o)}},Object(x["formatMessage"])({id:"footer.apk"}))),l.a.createElement("span",{className:"copyright"},Object(x["formatMessage"])({id:"footer.right"}),l.a.createElement("a",{href:"https://qinvideo.org"},"Qinvideo")))},k=E,C=a("XEok"),O=a("MuoO"),j=a("bdvc"),I=class extends s["Component"]{constructor(){var e;super(...arguments),e=this,this.state={config:{color:"#ffad14",name:"Qinmei",slogan:"May Change The World",information:"\u4f60\u597d\u5927\u5b8b\u5927",h5Menu:[],h5Index:[],mobleimg:null},pic:!0},this.initCategory=function(){var t=r()(i.a.mark(function t(a){var n;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=e.props.dispatch,n({type:"category/queryList",payload:{query:{type:a}}});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),this.initConfig=(e=>{var t=this.props.dispatch;t({type:"category/initList",payload:{menu:e}})}),this.initUser=(()=>{var e=localStorage.getItem("userInfo");if(e){e=JSON.parse(e);var t=this.props.dispatch;t({type:"auth/changeLoginStatus",payload:{status:!0}}),t({type:"user/refreshInfo",payload:{}})}})}componentDidMount(){this.setState({config:window.config}),this.initCategory("all"),this.initConfig(Object(j["e"])(window.config.h5Menu)),this.initConfig(Object(j["e"])(window.config.h5Index)),this.initUser(),setTimeout(()=>{this.setState({pic:!1})},3e3)}componentDidUpdate(e){this.props.location!==e.location&&window.scrollTo(0,0)}render(){var e=this.state,t=e.config,a=e.pic,n=this.props.children;return l.a.createElement(C["a"].Provider,{value:t.color},a?l.a.createElement("div",{style:{width:"100vw",height:"100vh",position:"fixed",top:"0",left:"0",zIndex:999,backgroundImage:`url(${t.mobleimg})`,backgroundSize:"cover",backgroundPosition:"center"}}):l.a.createElement("div",{className:"layout"},l.a.createElement(v,{config:t}),l.a.createElement("div",null,n),l.a.createElement(k,{config:t})))}};I=c["a"]([Object(O["connect"])(e=>{var t=e.category;return{category:t}})],I);t["default"]=I}}]);