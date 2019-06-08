(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{zmJQ:function(e,t,a){"use strict";a.r(t);var c=a("mrSG"),i=a("q1tI"),o=a.n(i),n=a("MuoO"),s=a("LLXN"),r=a("XEok"),l=a("nLTe"),p=a("TSYQ"),d=a.n(p),m=a("vOnD"),h=a("zqYd"),u=a("/88p"),g=m["a"].div`
  .tabs {
    display: flex;

    .tab {
      height: 36px;
      width: 50%;
      border: solid 1px ${e=>e.color};
      text-align: center;
      line-height: 35px;

      &:nth-child(1) {
        border-radius: 100px 0 0 100px;
      }

      &:nth-child(2) {
        border-radius: 0 100px 100px 0;
      }

      &.active {
        color: white;
        background-color: ${e=>e.color};
      }
    }
  }
`,y=class extends i["Component"]{constructor(){super(...arguments),this.state={cate:"newComic",type:!0},this.initData=(e=>{var t=this.props.dispatch;t({type:"comic/queryList",payload:{query:{isUpdate:!0,size:1e3},addon:{type:e}}})}),this.typeToggle=(e=>()=>{this.setState({type:e})})}componentDidMount(){var e=this.state.cate;this.initData(e)}render(){var e=this.state,t=e.cate,a=e.type,c=this.props,i=c.comic,n=c.category,r=c.user.info,p={info:n[t]||{},list:i[t]||[]};return o.a.createElement(g,{color:this.context},o.a.createElement(l["a"],{active:"newComic"}),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"tabs"},o.a.createElement("div",{className:d()("tab",{active:a}),onClick:this.typeToggle(!0)},o.a.createElement("span",null,Object(s["formatMessage"])({id:"new.show.comic"}))),o.a.createElement("div",{className:d()("tab",{active:!a}),onClick:this.typeToggle(!1)},o.a.createElement("span",null,Object(s["formatMessage"])({id:"new.like.comic"})))),a&&o.a.createElement(h["a"],{value:p}),!a&&o.a.createElement(u["b"],{list:r.comic.like,type:"comic"})))}};y.contextType=r["a"],y=c["a"]([Object(n["connect"])(e=>{var t=e.user,a=e.comic,c=e.category,i=e.loading;return{user:t,comic:a,category:c,loading:i.models.comic}})],y),t["default"]=y}}]);