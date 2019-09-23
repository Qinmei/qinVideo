(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{GKCt:function(e,t,o){"use strict";o.r(t);var n=o("mrSG"),a=o("q1tI"),s=o.n(a),c=o("MuoO"),i=o("8KYf"),l=o("nLTe"),r=o("vOnD"),p=(o("0mAl"),o("Ng4X")),u=o("qIgq"),d=o.n(u),m=o("usdK"),g=o("mNhR"),h=r["a"].div`
  width: 100%;

  .scroll {
    background-color: rgba(0, 0, 0, 0.1);
    background-size: cover;
    background-position: center;
    border-radius: 5px;
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
`,f=e=>{var t=e.scroll,o=void 0===t?[]:t,n=e.menu,c=void 0===n?[]:n,i=Object(a["useState"])(100),l=d()(i,2),r=l[0],u=l[1],f=Object(a["useRef"])(null),b=e=>{m["a"].push(`/post/${e}`)},v=e=>{m["a"].push(`/cate/post/${e}`)},y=[{icon:"icon-special-copy",color:"#f44236"},{icon:"icon-NEWSIGN",color:"#337ab7"},{icon:"icon-gonggao",color:"#ff9700"},{icon:"icon-wenzhangjiankong",color:"#a671ff"},{icon:"icon-gouwu",color:"#00bcd5"}];return Object(a["useEffect"])(()=>{u(.27*f.current.clientWidth)}),s.a.createElement(h,null,s.a.createElement("div",{className:"scroll",ref:f},s.a.createElement(p["a"],{autoplay:!0,infinite:!0},o.map(e=>s.a.createElement("div",{className:"scroll",onClick:()=>b(e.slug),style:{backgroundImage:`url(${e.cover})`,height:r}})))),s.a.createElement("div",{className:"menu"},c.map((e,t)=>s.a.createElement("div",{className:"list",onClick:()=>v(e._id)},s.a.createElement(g["a"],{type:y[t].icon,style:{color:y[t].color}}),s.a.createElement("span",{style:{color:y[t].color}},e.slug)))))},b=f,v=r["a"].div`
  margin-top: 40px;
  .line {
    height: 6px;
    background-color: #ebebeb;
    margin: 0 -15px 15px -15px;
  }
`,y=class extends a["Component"]{constructor(e){super(e),this.state={},this.initData=(()=>{var e=this.state.postTop,t=this.props.dispatch;t({type:"post/queryList",payload:{query:{size:1e4,page:1,sort:"-updatedAt",post:e._id},addon:{type:e.slug}}})}),this.state={postMenu:window.config.postMenu,postTop:window.config.postTop[0]}}componentDidMount(){this.initData()}render(){var e=this.props.post,t=this.state,o=t.postMenu,n=t.postTop,a=e[n.slug]||[];return s.a.createElement(v,null,s.a.createElement(l["a"],{active:"newDiscuss"}),s.a.createElement("div",{className:"container"},a.length>0&&s.a.createElement(b,{scroll:a,menu:o}),s.a.createElement("div",{className:"line"}),s.a.createElement(i["a"],{type:"discuss",belong:"all"})))}};y=n["a"]([Object(c["connect"])(e=>{var t=e.post,o=e.loading;return{post:t,loading:o.effects["post/queryList"]}})],y);t["default"]=y}}]);