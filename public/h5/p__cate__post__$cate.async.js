(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{WmM1:function(t,e,a){"use strict";a.r(e);a("IzEo");var s=a("bx4M"),r=a("p0pE"),i=a.n(r),n=a("mrSG"),o=a("q1tI"),p=a.n(o),c=a("MuoO"),l=a("vOnD"),d=a("WqWh"),h=a("faBS"),m=a("gmfD"),u=l["a"].div`
  margin-top: 40px;

  .header {
    display: inline-block;
    padding: 0 10px;
    margin: 0 15px;
    height: 40px;
    line-height: 40px;
    border-bottom: solid 2px black;
    font-size: 15px;
  }

  .content {
    padding: 15px;
  }
`,y=class extends o["Component"]{constructor(){super(...arguments),this.state={query:{size:3,page:1}},this.initData=(t=>{var e=t.cate,a=void 0===e?this.state.cate:e,s=t.query,r=void 0===s?this.state.query:s,n=this.props.dispatch,o=Object(h["b"])({cate:a,query:r,type:"post"});n({type:"post/queryList",payload:{query:i()({},o),addon:{type:a}}})}),this.listQuery=(t=>{var e=this.state.query,a=i()({},e,t);this.setState({query:a}),this.initData({query:a})})}static getDerivedStateFromProps(t,e){var a=t.match.params.cate;return a!==e.cate?i()({},e,{cate:a}):null}componentDidMount(){var t=this.props.match,e=t.params.cate;this.initData({cate:e})}componentDidUpdate(t,e){var a=this.props.match.params.cate,s=t.match.params.cate;s!==a&&this.initData({cate:a})}render(){var t=this.state,e=t.cate,a=t.query,r=this.props,n=r.post,o=r.category,c=r.loadingPost,l=n[e]||[],h=n.total[e]||0,y=o[e]||{};return p.a.createElement(u,null,p.a.createElement("div",{className:"header"},p.a.createElement("span",null,y.slug)),p.a.createElement("div",{className:"content"},p.a.createElement(s["a"],{bordered:!1,style:{margin:"15px 0"},loading:c},p.a.createElement(m["b"],{list:l}),p.a.createElement(d["a"],{value:i()({},a,{total:h}),onChange:this.listQuery}))))}};y=n["a"]([Object(c["connect"])(t=>{var e=t.post,a=t.category,s=t.loading;return{post:e,category:a,loadingPost:s.models.post,loadingCategory:s.models.category}})],y),e["default"]=y}}]);