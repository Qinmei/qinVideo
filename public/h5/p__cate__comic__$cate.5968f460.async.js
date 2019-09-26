(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{O5Ex:function(t,e,a){"use strict";a.r(e);a("IzEo");var r=a("bx4M"),i=a("p0pE"),s=a.n(i),n=a("mrSG"),o=a("q1tI"),c=a.n(o),p=a("MuoO"),l=a("mOtZ"),m=a("WqWh"),u=a("faBS"),d=a("/88p"),h=a("vOnD"),y=a("usdK"),g=h["a"].div`
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
`,v=class extends o["Component"]{constructor(t){var e;super(t),e=this,this.initData=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.state.query,r=e.props,i=r.dispatch,n=r.location.pathname,o=Object(u["b"])({cate:t,query:a,type:"kind"});i({type:"comic/queryList",payload:{query:o,addon:{type:t}}}),y["a"].push({pathname:n,query:s()({},a)}),e.setState({cate:t})},this.listQuery=(t=>{var e=this.state,a=e.query,r=e.cate,i=s()({},a,t);this.setState({query:i}),this.initData(r,i)});var a=t.location.query;this.state={cate:"",query:{key:a.key||"time",sort:!!a.sort&&"true"===a.sort,list:!a.list||"true"===a.list,size:21,page:a.page?parseInt(a.page):1}}}static getDerivedStateFromProps(t,e){var a=t.match.params.cate;return a!==e.cate?s()({},e,{cate:a}):null}componentDidMount(){var t=this.props.match,e=t.params.cate;this.initData(e)}componentDidUpdate(t,e){var a=this.props.match.params.cate,r=t.match.params.cate;r!==a&&this.initData(a)}render(){var t=this.state,e=t.cate,a=t.query,i=this.props,n=i.comic,o=i.category,p=i.loading,u=a.list,h=o[e]||{},y=n[e]||[],v=n.total[e]||0;return c.a.createElement(g,null,c.a.createElement("div",{className:"header"},c.a.createElement("span",null,h.slug)),c.a.createElement("div",{className:"container"},c.a.createElement(r["a"],{bordered:!1,style:{marginBottom:"20px"},loading:p},c.a.createElement(l["a"],{value:a,onChange:this.listQuery}),u?c.a.createElement(d["b"],{type:"comic",list:y}):c.a.createElement(d["a"],{type:"comic",list:y}),c.a.createElement(m["a"],{value:s()({},a,{total:v}),onChange:this.listQuery}))))}};v=n["a"]([Object(p["connect"])(t=>{var e=t.comic,a=t.category,r=t.loading;return{comic:e,category:a,loading:r.models.comic||r.models.category}})],v),e["default"]=v}}]);