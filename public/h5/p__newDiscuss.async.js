(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{GKCt:function(e,t,o){"use strict";o.r(t);var n=o("mrSG"),a=o("q1tI"),i=o.n(a),s=o("MuoO"),c=o("8KYf"),l=o("nLTe"),r=o("vOnD"),p=(o("0mAl"),o("Ng4X")),u=o("qIgq"),d=o.n(u),m=o("usdK"),g=o("mNhR"),h=r["a"].div`
  width: 100%;

  .scroll {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    overflow: hidden;
  }

  .menu {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: 'center';

    .list {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      i {
        font-size: 28px;
        margin-bottom: 6px;
      }
    }
  }
`,f=e=>{var t=e.scroll,o=void 0===t?[]:t,n=e.menu,s=void 0===n?[]:n,c=Object(a["useState"])(100),l=d()(c,2),r=l[0],u=l[1],f=Object(a["useRef"])(null),b=e=>{m["a"].push(`/post/${e}`)},v=e=>{m["a"].push(`/cate/post/${e}`)},w=[{icon:"icon-special-copy",color:"#f44236"},{icon:"icon-NEWSIGN",color:"#337ab7"},{icon:"icon-gonggao",color:"#ff9700"},{icon:"icon-wenzhangjiankong",color:"#a671ff"},{icon:"icon-gouwu",color:"#00bcd5"}];return Object(a["useEffect"])(()=>{u(.27*f.current.clientWidth)}),i.a.createElement(h,null,i.a.createElement("div",{className:"scroll",ref:f},i.a.createElement(p["a"],{autoplay:!0,infinite:!0},o.map(e=>i.a.createElement("div",{onClick:()=>b(e.slug),style:{backgroundImage:`url(${e.cover})`,height:r}})))),i.a.createElement("div",{className:"menu"},s.map((e,t)=>i.a.createElement("div",{className:"list",onClick:()=>v(e._id)},i.a.createElement(g["a"],{type:w[t].icon,style:{color:w[t].color}}),i.a.createElement("span",{style:{color:w[t].color}},e.slug)))))},b=f,v=r["a"].div`
  margin-top: 40px;
  .line {
    height: 6px;
    background-color: #ebebeb;
    margin: 0 -15px 15px -15px;
  }
`,w=class extends a["Component"]{constructor(e){super(e),this.state={},this.initData=(()=>{var e=this.state.postTop,t=this.props.dispatch;t({type:"post/queryList",payload:{query:{size:1e4,page:1,sort:"-updatedAt",post:e._id},addon:{type:e.slug}}})}),this.state={postMenu:window.config.postMenu,postTop:window.config.postTop[0]}}componentDidMount(){this.initData()}render(){var e=this.props.post,t=this.state,o=t.postMenu,n=t.postTop,a=e[n.slug]||[];return i.a.createElement(v,null,i.a.createElement(l["a"],{active:"newDiscuss"}),i.a.createElement("div",{className:"container"},a.length>0&&i.a.createElement(b,{scroll:a,menu:o}),i.a.createElement("div",{className:"line"}),i.a.createElement(c["a"],{type:"discuss",belong:"all"})))}};w=n["a"]([Object(s["connect"])(e=>{var t=e.post,o=e.loading;return{post:t,loading:o.effects["post/queryList"]}})],w);t["default"]=w}}]);