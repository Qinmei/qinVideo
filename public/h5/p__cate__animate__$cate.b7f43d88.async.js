(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"0k6R":function(t,e,a){"use strict";a.r(e);a("IzEo");var r=a("bx4M"),i=a("p0pE"),n=a.n(i),s=a("mrSG"),o=a("q1tI"),p=a.n(o),c=a("MuoO"),l=a("mOtZ"),m=a("WqWh"),u=a("faBS"),d=a("/88p"),h=a("vOnD"),y=a("usdK"),g=h["a"].div`
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
`,v=class extends o["Component"]{constructor(t){var e;super(t),e=this,this.initData=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.state.query,r=e.props,i=r.dispatch,s=r.location.pathname,o=Object(u["b"])({cate:t,query:a,type:"kind"});i({type:"animate/queryList",payload:{query:o,addon:{type:t}}}),e.setState({cate:t}),y["a"].push({pathname:s,query:n()({},a)})},this.listQuery=(t=>{var e=this.state,a=e.query,r=e.cate,i=n()({},a,t);this.setState({query:i}),this.initData(r,i)});var a=t.location.query;this.state={cate:"",query:{key:a.key||"time",sort:!!a.sort&&"true"===a.sort,list:!a.list||"true"===a.list,size:21,page:a.page?parseInt(a.page):1}}}static getDerivedStateFromProps(t,e){var a=t.match.params.cate;return a!==e.cate?n()({},e,{cate:a}):null}componentDidMount(){var t=this.props.match,e=t.params.cate;this.initData(e)}componentDidUpdate(t,e){var a=this.props.match.params.cate,r=t.match.params.cate;r!==a&&this.initData(a)}render(){var t=this.state,e=t.cate,a=t.query,i=this.props,s=i.animate,o=i.category,c=i.loading,u=a.list,h=o[e]||{},y=s[e]||[],v=s.total[e]||0;return p.a.createElement(g,null,p.a.createElement("div",{className:"header"},p.a.createElement("span",null,h.slug)),p.a.createElement("div",{className:"container"},p.a.createElement(r["a"],{bordered:!1,style:{marginBottom:"20px"},loading:c},p.a.createElement(l["a"],{value:a,onChange:this.listQuery}),u?p.a.createElement(d["b"],{type:"animate",list:y}):p.a.createElement(d["a"],{type:"animate",list:y}),p.a.createElement(m["a"],{value:n()({},a,{total:v}),onChange:this.listQuery}))))}};v=s["a"]([Object(c["connect"])(t=>{var e=t.animate,a=t.category,r=t.loading;return{animate:e,category:a,loading:r.models.animate||r.models.category}})],v),e["default"]=v}}]);