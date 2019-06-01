(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"+ego":function(e,t,a){"use strict";a.r(t);var n=a("d6i3"),i=a.n(n),o=a("1l/V"),r=a.n(o),c=a("mrSG"),s=a("q1tI"),l=a.n(s),p=(a("5NDa"),a("5rEg")),d=a("qIgq"),h=a.n(d),m=a("TJpk"),g=a("vOnD"),u=a("usdK"),f=a("LLXN"),x=a("mNhR"),b=a("bdvc"),y=g["a"].nav`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: ${e=>Object(b["b"])(e.color,.9)};
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 999;

  .bg {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 40px);
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.3);
  }
`,E=g["a"].div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  i {
    height: 40px;
    width: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:nth-child(1) {
      justify-content: flex-start;
      font-size: 20px;
    }
    &:nth-child(3) {
      justify-content: center;
      margin-right: 20px;
      font-weight: bold;
      font-size: 18px;
    }
    &:nth-child(4) {
      justify-content: flex-end;
      font-size: 18px;
    }
  }
`,v=g["a"].div`
  width: calc(100% - 100px);
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  user-select: none;

  span {
    padding: 0 15px;
    cursor: pointer;
  }
`,w=g["a"].div`
  width: 50%;
  height: 100%;
  position: relative;

  input {
    background-color: rgba(255, 255, 255, 0.3);
    color: white;
    border: none;
    outline: none;
    height: 36px;
    box-shadow: none;

    &::placeholder {
      color: white;
    }

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  .searchTab {
    position: absolute;
    left: 0;
    top: 40px;
    width: 100%;
    min-height: 80px;
    background-color: ${e=>Object(b["b"])(e.color,.8)};
    border-radius: 0 0 4px 4px;
    padding: 0 15px 15px 15px;

    .first {
      font-size: 18px;
      cursor: auto;
    }

    p {
      line-height: 40px;
      padding-left: 45px;
      margin-bottom: 0;
      cursor: pointer;

      &:hover {
        background-color: rgba(255, 255, 255, 0.4);
      }
    }
  }
`,k=e=>{"custom"===e.status?u["a"].push(`/${e._id}`):u["a"].push(`/cate/${e.type}/${e._id}`)},j=e=>{u["a"].push(`/${e}`)},C=e=>{var t=e.config,a=e.searchList,n=t.color,i=t.name,o=t.pcMenu,r=t.information,c=Object(s["useState"])(!0),d=h()(c,2),g=d[0],u=d[1],C=Object(b["e"])(o).map(e=>l.a.createElement("span",{onClick:()=>{k(e),u(!0)}},"string"===typeof e?e:e.slug)),O=l.a.createElement(w,{color:n},l.a.createElement(p["a"],{placeholder:Object(f["formatMessage"])({id:"header.search"})}),l.a.createElement("div",{className:"searchTab"},l.a.createElement("span",{className:"first"},Object(f["formatMessage"])({id:"header.hot"})),a.map(e=>l.a.createElement("p",{onClick:()=>{j(`search/${e._id}`),u(!0)}},e._id))));return l.a.createElement(y,{color:n},l.a.createElement(m["Helmet"],{title:i,meta:[{name:"description",content:r}]}),!g&&l.a.createElement("div",{className:"bg",onClick:()=>u(!0)}),l.a.createElement("div",{className:"container"},l.a.createElement(E,null,l.a.createElement(x["a"],{type:"icon-zhuye",onClick:()=>j("")}),l.a.createElement(v,null,g?C:O," "),g?l.a.createElement(x["a"],{type:"icon-sousuo",onClick:()=>u(!1)}):l.a.createElement(x["a"],{type:"icon-guanbi1",onClick:()=>u(!0)}),l.a.createElement(x["a"],{type:"icon-modx",onClick:()=>j("user")}))))},O=C,N=(a("5Dmo"),a("3S7+")),M=g["a"].footer`
  width: 100%;
  background-color: ${e=>e.color};
  height: 260px;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  .con {
    width: 100%;
    display: grid;
    grid-template-areas: 'left right';

    .left {
      grid-area: left;

      span {
        display: block;
        font-size: 32px;
        margin-bottom: 20px;
      }

      p {
        margin-bottom: 0;

        &:nth-child(2) {
          margin-bottom: 20px;
        }
      }
    }

    .right {
      grid-area: right;

      span {
        font-size: 24px;
        display: block;
        margin-bottom: 20px;
      }

      p {
        cursor: pointer;
      }

      .circle {
        margin-top: 20px;
        display: flex;

        .list {
          display: inline-block;
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid hsla(0, 0%, 100%, 0.5);
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 20px;
        }
      }
    }
  }
`,q=e=>{window.open(e)},z=e=>{var t=e.config,a=t.color,n=t.name,i=t.slogan,o=t.information,r=t.qq,c=t.email,s=t.app;t.headimg;return l.a.createElement(M,{color:a},l.a.createElement("div",{className:"container con"},l.a.createElement("div",{className:"left"},l.a.createElement("span",null,n),l.a.createElement("p",null,i),l.a.createElement("p",null,o,l.a.createElement("br",null),Object(f["formatMessage"])({id:"footer.desc"}))),l.a.createElement("div",{className:"right"},l.a.createElement("span",null,Object(f["formatMessage"])({id:"footer.offical"})),l.a.createElement("p",{onClick:()=>{q("https://qinvideo.org")}},Object(f["formatMessage"])({id:"footer.aboutus"})),l.a.createElement("div",{className:"circle"},l.a.createElement(N["a"],{title:Object(f["formatMessage"])({id:"footer.qq.tooltip"})},l.a.createElement("div",{className:"list",onClick:()=>{q(r)}},l.a.createElement(x["a"],{type:"icon-qq"}))),l.a.createElement(N["a"],{title:Object(f["formatMessage"])({id:"footer.app.tooltip"})},l.a.createElement("div",{className:"list",onClick:()=>{q(s)}},l.a.createElement(x["a"],{type:"icon-anzhuo"}))),l.a.createElement(N["a"],{title:Object(f["formatMessage"])({id:"footer.email.tooltip"})},l.a.createElement("div",{className:"list",onClick:()=>{q(c)}},l.a.createElement(x["a"],{type:"icon-ziyuan"})))))))},L=z,S=a("Dp36"),$=a("XEok"),D=a("MuoO"),I=class extends s["Component"]{constructor(){var e;super(...arguments),e=this,this.state={config:{color:"#ffad14",name:"Qinmei",slogan:"May Change The World",information:"\u4f60\u597d\u5927\u5b8b\u5927",pcMenu:[],pcIndex:[]},searchList:[]},this.initSearch=r()(i.a.mark(function t(){var a;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S["a"].search({});case 2:a=t.sent,e.setState({searchList:a.data});case 4:case"end":return t.stop()}},t)})),this.initCategory=function(){var t=r()(i.a.mark(function t(a){var n;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=e.props.dispatch,n({type:"category/queryList",payload:{query:{type:a}}});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),this.initConfig=(e=>{var t=this.props.dispatch;t({type:"category/initList",payload:{menu:e}})}),this.initUser=(()=>{var e=localStorage.getItem("userInfo");if(e){e=JSON.parse(e);var t=this.props.dispatch;t({type:"auth/changeLoginStatus",payload:{status:!0}}),t({type:"user/refreshInfo",payload:{}})}})}componentDidMount(){this.setState({config:window.config}),this.initSearch(),this.initCategory("all"),this.initConfig(Object(b["e"])(window.config.pcMenu)),this.initUser()}componentDidUpdate(e){this.props.location!==e.location&&window.scrollTo(0,0)}render(){var e=this.state,t=e.config,a=e.searchList,n=this.props.children;return l.a.createElement($["a"].Provider,{value:t.color},l.a.createElement("div",{className:"layout"},l.a.createElement(O,{config:t,searchList:a}),l.a.createElement("div",{style:{minHeight:"calc(100vh - 260px)"}},n),l.a.createElement(L,{config:t})))}};I=c["a"]([Object(D["connect"])(e=>{var t=e.category;return{category:t}})],I);t["default"]=I}}]);