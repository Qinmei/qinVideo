(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{baBF:function(e,a,t){"use strict";t.r(a);t("+L6B");var r=t("2/Rp"),s=(t("Pwec"),t("CtXQ")),o=(t("5NDa"),t("5rEg")),i=(t("y8nQ"),t("Vl3Y")),l=(t("miYZ"),t("tsqr")),m=t("mrSG"),n=t("q1tI"),c=t.n(n),p=t("MuoO"),d=t("mOP9"),g=t.n(d),u=t("aCH8"),h=t.n(u),f=t("vOnD"),b=t("LLXN"),w=t("mNhR"),y=t("XEok"),E=f["a"].div`
  width: 100%;
  padding: 20px 40px;
  margin-top: 60px;

  .logo {
    text-align: center;
    font-size: 5em;
    margin-bottom: 60px;

    i {
      animation: rotate infinite 6s linear;
      color: ${e=>e.color};
    }

    @keyframes rotate {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }

  .bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,O=class extends n["Component"]{constructor(){super(...arguments),this.compareToFirstPassword=((e,a,t)=>{var r=this.props.form;a&&a!==r.getFieldValue("password")?t(Object(b["formatMessage"])({id:"auth.password.confirm.tips"})):t()}),this.validateToNextPassword=((e,a,t)=>{var r=this.props.form;a&&r.validateFields(["confirm"],{force:!0}),t()}),this.register=(e=>{e.preventDefault(),this.props.form.validateFields((e,a)=>{if(e)return l["a"].error(Object(b["formatMessage"])({id:"common.form.error"}));var t=this.props.dispatch,r=a.name,s=a.password,o=a.email,i=h()(s);t({type:"auth/register",payload:{data:{name:r,password:i,email:o}}})})})}componentDidMount(){}render(){var e=this.props.loading,a=this.props.form.getFieldDecorator;return c.a.createElement(E,{color:this.context},c.a.createElement("div",{className:"logo"},c.a.createElement(w["a"],{type:"icon-zhinengyouhua"})),c.a.createElement("div",{className:"form"},c.a.createElement(i["a"],{onSubmit:this.register,className:"login-form"},c.a.createElement(i["a"].Item,null,a("name",{rules:[{required:!0,message:Object(b["formatMessage"])({id:"auth.username.tips"})},{min:3,message:Object(b["formatMessage"])({id:"auth.username.register.tips"})}]})(c.a.createElement(o["a"],{size:"large",prefix:c.a.createElement(s["a"],{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:Object(b["formatMessage"])({id:"auth.username"})}))),c.a.createElement(i["a"].Item,null,a("email",{rules:[{required:!0,message:Object(b["formatMessage"])({id:"auth.email.tips"})},{type:"email",message:Object(b["formatMessage"])({id:"auth.email.register.tips"})}]})(c.a.createElement(o["a"],{size:"large",prefix:c.a.createElement(s["a"],{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:Object(b["formatMessage"])({id:"auth.email"})}))),c.a.createElement(i["a"].Item,null,a("password",{rules:[{required:!0,message:Object(b["formatMessage"])({id:"auth.password.tips"})},{validator:this.validateToNextPassword},{min:8,message:Object(b["formatMessage"])({id:"auth.password.length.tips"})}]})(c.a.createElement(o["a"],{size:"large",prefix:c.a.createElement(s["a"],{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:Object(b["formatMessage"])({id:"auth.password"})}))),c.a.createElement(i["a"].Item,null,a("confirm",{rules:[{required:!0,message:Object(b["formatMessage"])({id:"auth.password.tips"})},{validator:this.compareToFirstPassword}]})(c.a.createElement(o["a"],{size:"large",prefix:c.a.createElement(s["a"],{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:Object(b["formatMessage"])({id:"auth.password.confirm"})}))),c.a.createElement(i["a"].Item,null,c.a.createElement(r["a"],{type:"primary",htmlType:"submit",className:"login-form-button",size:"large",style:{width:"100%"},loading:e},Object(b["formatMessage"])({id:"auth.register"}))))),c.a.createElement("div",{className:"bottom"},c.a.createElement(g.a,{to:"/auth/login"},Object(b["formatMessage"])({id:"auth.login"})),c.a.createElement(g.a,{to:"/auth/reset"},Object(b["formatMessage"])({id:"auth.reset"}))))}};O.contextType=y["a"],O=m["a"]([Object(p["connect"])(e=>{var a=e.auth,t=e.loading;return{auth:a,loading:t.effects["auth/register"]}})],O),a["default"]=i["a"].create()(O)}}]);