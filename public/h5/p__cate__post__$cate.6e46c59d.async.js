(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{WmM1:function(t,e,a){"use strict";a.r(e);a("IzEo");var r=a("bx4M"),s=a("p0pE"),n=a.n(s),i=a("mrSG"),o=a("q1tI"),p=a.n(o),c=a("MuoO"),l=a("vOnD"),d=a("WqWh"),h=a("faBS"),m=a("gmfD"),u=a("usdK"),g=l["a"].div`
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

    .ant-divider-horizontal {
      margin: 15px 0;
    }
  }
`,y=class extends o["Component"]{constructor(t){super(t),this.initData=(t=>{var e=t.cate,a=void 0===e?this.state.cate:e,r=t.query,s=void 0===r?this.state.query:r,i=this.props,o=i.dispatch,p=i.location.pathname,c=Object(h["b"])({cate:a,query:s,type:"post"});o({type:"post/queryList",payload:{query:n()({},c),addon:{type:a}}}),u["a"].push({pathname:p,query:n()({},s)})}),this.listQuery=(t=>{var e=this.state.query,a=n()({},e,t);this.setState({query:a}),this.initData({query:a})});var e=t.location.query;this.state={cate:"",query:{size:10,page:e.page?parseInt(e.page):1}}}static getDerivedStateFromProps(t,e){var a=t.match.params.cate;return a!==e.cate?n()({},e,{cate:a}):null}componentDidMount(){var t=this.props.match,e=t.params.cate;this.initData({cate:e})}componentDidUpdate(t,e){var a=this.props.match.params.cate,r=t.match.params.cate;r!==a&&this.initData({cate:a})}render(){var t=this.state,e=t.cate,a=t.query,s=this.props,i=s.post,o=s.category,c=s.loadingPost,l=i[e]||[],h=i.total[e]||0,u=o[e]||{};return p.a.createElement(g,null,p.a.createElement("div",{className:"header"},p.a.createElement("span",null,u.slug)),p.a.createElement("div",{className:"content"},p.a.createElement(r["a"],{bordered:!1,style:{margin:"15px 0"},loading:c},p.a.createElement(m["b"],{list:l}),p.a.createElement(d["a"],{value:n()({},a,{total:h}),onChange:this.listQuery}))))}};y=i["a"]([Object(c["connect"])(t=>{var e=t.post,a=t.category,r=t.loading;return{post:e,category:a,loadingPost:r.models.post,loadingCategory:r.models.category}})],y),e["default"]=y}}]);