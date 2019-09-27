(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"+ego":function(e,t,n){"use strict";n.r(t);var i=n("d6i3"),a=n.n(i),o=n("1l/V"),r=n.n(o),s=n("mrSG"),c=n("q1tI"),l=n.n(c),p=n("qIgq"),d=n.n(p),h=n("TJpk"),m=n("vOnD"),u=n("usdK"),g=n("mNhR"),f=m["a"].nav`
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
`,w=e=>()=>{u["a"].push(`/${e}`)},v=e=>{var t=e.config,n=t.name,i=t.information,a=Object(c["useState"])(null),o=d()(a,2),r=o[0],s=o[1],p=()=>{var e=JSON.parse(localStorage.getItem("userInfo"));e?e.avatar&&s(e.avatar):s(null)};return Object(c["useEffect"])(()=>{p()}),l.a.createElement(f,null,l.a.createElement(h["Helmet"],{title:n,meta:[{name:"description",content:i}]},l.a.createElement("link",{rel:"icon",href:t.logo}),l.a.createElement("meta",{name:"description",content:t.information})),l.a.createElement("div",{className:"logo",onClick:w("")},"Qinmei"===n?l.a.createElement(g["a"],{type:"icon-qinmei"}):l.a.createElement("span",null,n)),l.a.createElement("div",{className:"icon"},l.a.createElement("span",{onClick:w("search")},l.a.createElement(g["a"],{type:"icon-sousuo"})),l.a.createElement("span",{onClick:w("user")},r?l.a.createElement("div",{className:"avatar",style:{backgroundImage:`url(${r})`}}):l.a.createElement(g["a"],{type:"icon-yonghu"}))))},y=v,b=n("LLXN"),x=m["a"].footer`
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
`,E=e=>{var t=e.config,n=t.color,i=(t.name,t.slogan,t.aboutus),a=t.qq,o=t.app;return l.a.createElement(x,{color:n},l.a.createElement("div",{className:"list"},l.a.createElement("span",{onClick:()=>{a&&window.open(a)}},Object(b["formatMessage"])({id:"footer.qq"})),l.a.createElement("span",{onClick:()=>{i&&u["a"].push(`/post/${i}`)}},Object(b["formatMessage"])({id:"footer.aboutus"})),l.a.createElement("span",{onClick:()=>{o&&window.open(o)}},Object(b["formatMessage"])({id:"footer.apk"}))),l.a.createElement("span",{className:"copyright"},Object(b["formatMessage"])({id:"footer.right"}),l.a.createElement("a",{href:"https://qinvideo.org"},"Qinvideo")))},k=E,j=n("Dp36"),C=n("XEok"),O=n("MuoO"),I=n("bdvc"),N=class extends c["Component"]{constructor(){var e;super(...arguments),e=this,this.state={config:{color:"#ffad14",name:"Qinmei",slogan:"May Change The World",information:"\u4f60\u597d\u5927\u5b8b\u5927",h5Menu:[],h5Index:[],mobleimg:null},pic:!0},this.initVisit=r()(a.a.mark(function t(){var n;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j["a"].postData({type:"visit"});case 2:n=t.sent,n||setTimeout(e.initVisit,3e3);case 4:case"end":return t.stop()}},t)})),this.initRead=function(){var t=r()(a.a.mark(function t(n){var i;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j["a"].postData({type:"read",target:n});case 2:i=t.sent,i||setTimeout(e.initRead,3e3);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),this.initCategory=function(){var t=r()(a.a.mark(function t(n){var i;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:i=e.props.dispatch,i({type:"category/queryList",payload:{query:{type:n}}});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),this.initConfig=(e=>{var t=this.props.dispatch;t({type:"category/initList",payload:{menu:e}})}),this.initUser=(()=>{var e=localStorage.getItem("userInfo");if(e){e=JSON.parse(e);var t=this.props.dispatch;t({type:"auth/changeLoginStatus",payload:{status:!0}}),t({type:"user/refreshInfo",payload:{}})}}),this.initTongji=(()=>{if(window.config.tongji){var e=document.createElement("script");e.innerHTML=`\n              var _hmt = _hmt || [];\n              (function() {\n                var hm = document.createElement("script");\n                hm.src = "${window.config.tongji}";\n                var s = document.getElementsByTagName("script")[0];\n                s.parentNode.insertBefore(hm, s);\n              })();\n              `,document.body.appendChild(e)}})}componentDidMount(){this.setState({config:window.config}),this.initCategory("all"),this.initConfig(Object(I["e"])(window.config.h5Menu)),this.initConfig(Object(I["e"])(window.config.h5Index)),this.initConfig(Object(I["e"])(window.config.postMenu)),this.initConfig(Object(I["e"])(window.config.message)),this.initConfig(Object(I["e"])(window.config.postTop)),this.initUser(),setTimeout(()=>{this.setState({pic:!1})},3e3),this.initVisit(),this.initRead(this.props.location.pathname),this.initTongji()}componentDidUpdate(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0),this.initRead(this.props.location.pathname)}render(){var e=this.state,t=e.config,n=e.pic,i=this.props.children;return l.a.createElement(C["a"].Provider,{value:t.color},n?l.a.createElement("div",{style:{width:"100vw",height:"100vh",position:"fixed",top:"0",left:"0",zIndex:999,backgroundImage:`url(${t.mobleimg})`,backgroundSize:"cover",backgroundPosition:"center"}}):l.a.createElement("div",{className:"layout"},l.a.createElement(y,{config:t}),l.a.createElement("div",null,i),l.a.createElement(k,{config:t})))}};N=s["a"]([Object(O["connect"])(e=>{var t=e.category;return{category:t}})],N);t["default"]=N}}]);