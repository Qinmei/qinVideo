(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"OB+6":function(e,t,a){"use strict";a.r(t);a("IzEo");var r=a("bx4M"),s=(a("miYZ"),a("tsqr")),l=(a("2qtc"),a("kLXV")),n=a("mrSG"),i=a("q1tI"),o=a.n(i),c=a("MuoO"),d=a("L6Kr"),m=(a("+L6B"),a("2/Rp")),p=(a("R9oj"),a("ECub")),u=a("vOnD"),h=a("XEok"),g=a("LLXN"),b=a("l61h"),f=u["a"].div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;

  .list {
    min-height: 160px;
    border: solid 1px #d8e1f0;
    border-radius: 5px;
    box-shadow: 0 2px 4px #dddddd;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 1fr;

    .cover {
      width: 100%;
      height: 100%;
      background-size: cover;
    }

    .left,
    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .lm {
      .label {
        margin: 0 10px;
        font-weight: bold;
        color: ${e=>e.color};
        font-size: 1.2em;
      }
    }
  }

  h2 {
    color: ${e=>e.color};
  }
`,y=e=>{var t=e.list,a=e.submit,r=Object(i["useContext"])(h["a"]),s=Object(i["useMemo"])(()=>r,[r]);return o.a.createElement(o.a.Fragment,null,0===t.length?o.a.createElement(p["a"],{style:{margin:"15px 0 "}}):o.a.createElement(f,{color:s},t.map((e,t)=>o.a.createElement("div",{className:"list"},o.a.createElement("div",{className:"cover",style:{backgroundImage:`url(${e.cover})`}}),o.a.createElement("div",{className:"left"},o.a.createElement("h2",null,e.title),o.a.createElement("div",null,o.a.createElement("span",null,Object(g["formatMessage"])({id:"shop.price"}),":"),o.a.createElement("span",{className:"label"},e.price),o.a.createElement("span",null,Object(g["formatMessage"])({id:"shop.rmb"})))),o.a.createElement("div",{className:"rm"},o.a.createElement("h3",null,Object(g["formatMessage"])({id:"shop.introduce"})),o.a.createElement("p",null,e.introduce)),o.a.createElement("div",{className:"right"},o.a.createElement(b["a"],null,o.a.createElement(m["a"],{type:"primary",size:"large",style:{width:"160px"},onClick:()=>{a(e._id)}},Object(g["formatMessage"])({id:"shop.buy"}))))))))},E=y,v=a("Dp36"),x=a("usdK"),O=class extends i["Component"]{constructor(){super(...arguments),this.state={cate:"newShop",query:{size:1e4,page:1}},this.initData=(()=>{var e=this.state.query,t=this.props.dispatch;t({type:"shop/queryList",payload:{query:e}})}),this.buy=(e=>{l["a"].confirm({title:Object(g["formatMessage"])({id:"shop.tips"}),content:Object(g["formatMessage"])({id:"shop.tips.text"}),onOk(){return v["a"].order({data:{shop:e}}).then(e=>{e&&(s["a"].success(Object(g["formatMessage"])({id:"shop.buy.success"})),x["a"].push("/user"))})},onCancel(){}})})}componentDidMount(){this.initData()}render(){var e=this.state,t=e.cate,a=(e.query,this.props),s=a.shop.list,l=a.loading,n=a.category,i=n[t];return o.a.createElement("div",null,o.a.createElement("div",{className:"container"},o.a.createElement(d["a"],{img:i.cover,span:i.slug}),o.a.createElement(r["a"],{bordered:!1,style:{marginBottom:"20px"},loading:l},o.a.createElement(E,{list:s,submit:this.buy}))))}};O=n["a"]([Object(c["connect"])(e=>{var t=e.shop,a=e.category,r=e.loading;return{shop:t.shop,category:a,loading:r.effects["shop/queryList"]}})],O);t["default"]=O}}]);