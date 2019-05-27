(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{i1J9:function(e,a,t){"use strict";t.r(a);t("+BJd");var r=t("mr32"),n=(t("Znn+"),t("ZTPi")),s=t("mrSG"),l=t("q1tI"),o=t.n(l),c=t("MuoO"),i=t("LLXN"),m=t("vOnD"),d=t("wd/R"),u=t.n(d),g=n["a"].TabPane,p=m["a"].div`
  padding: 60px 0px 20px 0;

  .header {
    background-color: rgba(0, 0, 0, 0.3);
    height: 200px;
    border-radius: 4px;
    background-size: cover;
    display: grid;
    grid-template-columns: 200px 1fr;

    .avatar {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
      }
    }

    .content {
      height: 200px;

      .info {
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        height: 100%;
        width: 500px;

        .list {
          width: 250px;
          line-height: 40px;

          div:nth-child(2) {
            margin-right: 10px;
            margin-left: 20px;
          }
        }
      }
    }
  }

  .main-info {
    margin-top: 20px;
    background-color: white;
    border-radius: 4px;
    padding: 5px 20px 20px 20px;
  }
`,b=class extends l["Component"]{constructor(){super(...arguments),this.state={},this.initData=(()=>{var e=this.props.dispatch,a=JSON.parse(localStorage.getItem("userInfo"));e({type:"user/getInfo",payload:{params:{slug:a.name}}})}),this.logout=(()=>{var e=this.props.dispatch;e({type:"auth/logout",payload:{}})})}componentDidMount(){this.initData()}render(){var e=this.props,a=e.user.info;e.loading;return o.a.createElement(p,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"header",style:{backgroundImage:`url(${a.background})`}},o.a.createElement("div",{className:"avatar"},o.a.createElement("img",{src:a.avatar,alt:""})),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"info"},o.a.createElement("div",{className:"list"},o.a.createElement(r["a"],null,Object(i["formatMessage"])({id:"auth.username"})),o.a.createElement(r["a"],{color:"magenta"},a.name),o.a.createElement(r["a"],{color:"#f50",onClick:this.logout},Object(i["formatMessage"])({id:"user.logout"}))),o.a.createElement("div",{className:"list"},o.a.createElement(r["a"],null,Object(i["formatMessage"])({id:"user.email"})),o.a.createElement(r["a"],{color:"volcano"},a.email)),o.a.createElement("div",{className:"list"},o.a.createElement(r["a"],null,Object(i["formatMessage"])({id:"user.score"})),o.a.createElement(r["a"],{color:"green"},a.score)),o.a.createElement("div",{className:"list"},o.a.createElement(r["a"],null,Object(i["formatMessage"])({id:"user.money"})),o.a.createElement(r["a"],{color:"cyan"},a.money),o.a.createElement(r["a"],{color:"#108ee9"},Object(i["formatMessage"])({id:"user.pay"}))),o.a.createElement("div",{className:"list"},o.a.createElement(r["a"],null,Object(i["formatMessage"])({id:"user.level"})),o.a.createElement(r["a"],{color:"blue"},"LV ",a.level),o.a.createElement(r["a"],{color:"#6600ff"},Object(i["formatMessage"])({id:"user.buy"}))),a.level>1&&o.a.createElement("div",{className:"list"},o.a.createElement(r["a"],null,Object(i["formatMessage"])({id:"user.expired"})),o.a.createElement(r["a"],{color:"purple"},u()((new Date).getTime()+1e3*a.expired).format("YYYY-MM-DD")))))),o.a.createElement("div",{className:"main-info"},o.a.createElement(n["a"],{defaultActiveKey:"1"},o.a.createElement(g,{tab:Object(i["formatMessage"])({id:"user.animate"}),key:"1"},o.a.createElement(n["a"],{tabPosition:"left"},o.a.createElement(g,{tab:Object(i["formatMessage"])({id:"user.animate.like"}),key:"1"},"Content of Tab 1"),o.a.createElement(g,{tab:Object(i["formatMessage"])({id:"user.animate.history"}),key:"2"},"Content of Tab 2"))),o.a.createElement(g,{tab:Object(i["formatMessage"])({id:"user.comic"}),key:"2"},"Content of Tab Pane 2"),o.a.createElement(g,{tab:Object(i["formatMessage"])({id:"user.post"}),key:"3"},"Content of Tab Pane 3"),o.a.createElement(g,{tab:Object(i["formatMessage"])({id:"user.comment"}),key:"4"},"Content of Tab Pane 3"),o.a.createElement(g,{tab:Object(i["formatMessage"])({id:"user.report"}),key:"5"},"Content of Tab Pane 3"),o.a.createElement(g,{tab:Object(i["formatMessage"])({id:"user.setting"}),key:"6"},"Content of Tab Pane 3"),o.a.createElement(g,{tab:Object(i["formatMessage"])({id:"user.message"}),key:"7"},"Content of Tab Pane 3")))))}};b=s["a"]([Object(c["connect"])(e=>{var a=e.user,t=e.loading;return{user:a,loading:t.models.user}})],b),a["default"]=b}}]);