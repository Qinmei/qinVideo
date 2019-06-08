(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{O5Ex:function(t,e,a){"use strict";a.r(e);a("IzEo");var i=a("bx4M"),n=a("p0pE"),r=a.n(n),s=a("mrSG"),c=a("q1tI"),o=a.n(c),l=a("MuoO"),p=a("mOtZ"),m=a("WqWh"),d=a("faBS"),h=a("/88p"),u=a("vOnD"),y=u["a"].div`
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
`,g=class extends c["Component"]{constructor(){var t;super(...arguments),t=this,this.state={cate:"",query:{key:"time",sort:!1,list:!0,size:20,page:1}},this.initData=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.state.query,i=t.props.dispatch,n=Object(d["b"])({cate:e,query:a,type:"kind"});i({type:"comic/queryList",payload:{query:n,addon:{type:e}}}),t.setState({cate:e})},this.listQuery=(t=>{var e=this.state,a=e.query,i=e.cate,n=r()({},a,t);this.setState({query:n}),this.initData(i,n)})}componentDidMount(){var t=this.props.match,e=t.params.cate;this.initData(e)}componentDidUpdate(t,e){var a=this.props.match.params.cate,i=t.match.params.cate;i!==a&&this.initData(a)}render(){var t=this.state,e=t.cate,a=t.query,n=this.props,s=n.comic,c=n.category,l=n.loading,d=a.list,u=c[e]||{},g=s[e]||[],v=s.total[e]||0;return o.a.createElement(y,null,o.a.createElement("div",{className:"header"},o.a.createElement("span",null,u.slug)),o.a.createElement("div",{className:"container"},o.a.createElement(i["a"],{bordered:!1,style:{marginBottom:"20px"},loading:l},o.a.createElement(p["a"],{value:a,onChange:this.listQuery}),d?o.a.createElement(h["b"],{type:"comic",list:g}):o.a.createElement(h["a"],{type:"comic",list:g}),o.a.createElement(m["a"],{value:r()({},a,{total:v}),onChange:this.listQuery}))))}};g=s["a"]([Object(l["connect"])(t=>{var e=t.comic,a=t.category,i=t.loading;return{comic:e,category:a,loading:i.models.comic||i.models.category}})],g),e["default"]=g}}]);