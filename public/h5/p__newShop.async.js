(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"OB+6":function(e,t,a){"use strict";a.r(t);a("miYZ");var s=a("tsqr"),r=(a("2qtc"),a("kLXV")),i=a("mrSG"),n=a("q1tI"),l=a.n(n),o=a("MuoO"),c=(a("+L6B"),a("2/Rp")),p=(a("R9oj"),a("ECub")),d=a("vOnD"),m=a("XEok"),u=a("LLXN"),h=a("l61h"),g=d["a"].div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;

  .list {
    min-height: 160px;
    border: solid 1px #d8e1f0;
    border-radius: 5px;
    box-shadow: 0 2px 4px #dddddd;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    p {
      width: 100%;
      text-align: center;
      text-justify: auto;
    }

    .lm {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      .label {
        margin: 0 10px;
        font-weight: bold;
        color: ${e=>e.color};
        font-size: 1.2em;
      }
    }
  }
`,b=e=>{var t=e.list,a=e.submit,s=Object(n["useContext"])(m["a"]),r=Object(n["useMemo"])(()=>s,[s]);return l.a.createElement(l.a.Fragment,null,0===t.length?l.a.createElement(p["a"],null):l.a.createElement(g,{color:r},t.map((e,t)=>l.a.createElement("div",{className:"list"},l.a.createElement("h2",null,e.title),l.a.createElement("p",null,e.introduce),l.a.createElement("div",{className:"lm"},l.a.createElement("span",null,Object(u["formatMessage"])({id:"shop.price"}),":"),l.a.createElement("span",{className:"label"},e.price),l.a.createElement("span",null,Object(u["formatMessage"])({id:"shop.rmb"}))),l.a.createElement("div",{className:"right"},l.a.createElement(h["a"],null,l.a.createElement(c["a"],{type:"primary",size:"large",style:{width:"160px"},onClick:()=>{a(e._id)}},Object(u["formatMessage"])({id:"shop.buy"}))))))))},x=b,y=a("Dp36"),f=a("nLTe"),E=a("usdK"),w=d["a"].div`
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
`,v=class extends n["Component"]{constructor(){super(...arguments),this.state={cate:"newShop",query:{size:1e4,page:1}},this.initData=(()=>{var e=this.state.query,t=this.props.dispatch;t({type:"shop/queryList",payload:{query:e}})}),this.buy=(e=>{r["a"].confirm({title:Object(u["formatMessage"])({id:"shop.tips"}),content:Object(u["formatMessage"])({id:"shop.tips.text"}),onOk(){return y["a"].order({data:{shop:e}}).then(e=>{e&&(s["a"].success(Object(u["formatMessage"])({id:"shop.buy.success"})),E["a"].push("/user"))})},onCancel(){}})})}componentDidMount(){this.initData()}render(){var e=this.state,t=e.cate,a=(e.query,this.props),s=a.shop.list,r=(a.loading,a.category);r[t];return l.a.createElement(w,null,l.a.createElement(f["a"],{active:"newShop"}),l.a.createElement("div",{className:"container"},l.a.createElement(x,{list:s,submit:this.buy})))}};v=i["a"]([Object(o["connect"])(e=>{var t=e.shop,a=e.category,s=e.loading;return{shop:t.shop,category:a,loading:s.effects["shop/queryList"]}})],v);t["default"]=v}}]);