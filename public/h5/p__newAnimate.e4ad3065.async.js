(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{v0fz:function(e,t,a){"use strict";a.r(t);var i=a("mrSG"),n=a("q1tI"),s=a.n(n),r=a("MuoO"),o=a("LLXN"),c=a("XEok"),l=a("nLTe"),p=a("TSYQ"),d=a.n(p),m=a("vOnD"),h=a("zqYd"),u=a("/88p"),g=m["a"].div`
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
`,v=class extends n["Component"]{constructor(){super(...arguments),this.state={cate:"newAnimate",type:!0},this.initData=(e=>{var t=this.props.dispatch;t({type:"animate/queryList",payload:{query:{isUpdate:!0,size:1e3},addon:{type:e}}})}),this.typeToggle=(e=>()=>{this.setState({type:e})})}componentDidMount(){var e=this.state.cate;this.initData(e)}render(){var e=this.state,t=e.cate,a=e.type,i=this.props,n=i.animate,r=i.category,c=i.user.info,p={info:r[t]||{},list:n[t]||[]};return s.a.createElement(g,{color:this.context},s.a.createElement(l["a"],{active:"newAnimate"}),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"tabs"},s.a.createElement("div",{className:d()("tab",{active:a}),onClick:this.typeToggle(!0)},s.a.createElement("span",null,Object(o["formatMessage"])({id:"new.show.animate"}))),s.a.createElement("div",{className:d()("tab",{active:!a}),onClick:this.typeToggle(!1)},s.a.createElement("span",null,Object(o["formatMessage"])({id:"new.like.animate"})))),a&&s.a.createElement(h["a"],{value:p}),!a&&s.a.createElement(u["b"],{list:c.animate.like,type:"animate"})))}};v.contextType=c["a"],v=i["a"]([Object(r["connect"])(e=>{var t=e.user,a=e.animate,i=e.category,n=e.loading;return{user:t,animate:a,category:i,loading:n.models.animate}})],v),t["default"]=v}}]);