(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{j8Ne:function(e,t,a){"use strict";a.r(t);a("+L6B");var s=a("2/Rp"),r=(a("Pwec"),a("CtXQ")),i=(a("5NDa"),a("5rEg")),o=(a("y8nQ"),a("Vl3Y")),l=(a("miYZ"),a("tsqr")),n=a("mrSG"),m=a("q1tI"),c=a.n(m),d=a("MuoO"),p=a("mOP9"),h=a("aCH8"),u=a.n(h),g=a("vOnD"),f=a("LLXN"),w=a("mNhR"),E=a("XEok"),b=g["a"].div`
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

  .form {
    .email {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .input {
        width: calc(100% - 120px);
      }
      .sendEmail {
        float: right;
      }
    }
  }
`,y=class extends m["Component"]{constructor(){super(...arguments),this.state={loading:!1,count:60},this.t=null,this.compareToFirstPassword=((e,t,a)=>{var s=this.props.form;t&&t!==s.getFieldValue("password")?a(Object(f["formatMessage"])({id:"auth.password.confirm.tips"})):a()}),this.validateToNextPassword=((e,t,a)=>{var s=this.props.form;t&&s.validateFields(["confirm"],{force:!0}),a()}),this.reset=(e=>{e.preventDefault(),this.props.form.validateFields((e,t)=>{if(e)return l["a"].error(Object(f["formatMessage"])({id:"common.form.error"}));var a=this.props.dispatch,s=t.password,r=t.token,i=u()(s);a({type:"auth/resetPasswordAuth",payload:{data:{password:i,token:r}}})})}),this.sendEmail=(()=>{if(!this.state.loading){var e=this.props.dispatch,t=this.props.form.getFieldValue,a=t("email");if(!a)return l["a"].error(Object(f["formatMessage"])({id:"auth.email.tips"}));e({type:"auth/resetPasswordMail",payload:{data:{email:a}}}),this.countTime()}}),this.countTime=(()=>{this.t&&clearInterval(this.t),this.setState({loading:!0,count:60});var e=60;this.t=setInterval(()=>{e--,0===e&&(this.setState({loading:!1}),this.t&&clearInterval(this.t)),this.setState({count:e})},1e3)})}componentDidMount(){}render(){var e=this.state,t=e.loading,a=e.count,l=this.props,n=l.loadingSendEmail,m=l.loadingReset,d=this.props.form.getFieldDecorator;return c.a.createElement(b,{color:this.context},c.a.createElement("div",{className:"logo"},c.a.createElement(w["a"],{type:"icon-zhinengyouhua"})),c.a.createElement("div",{className:"form"},c.a.createElement(o["a"],{onSubmit:this.reset},c.a.createElement(o["a"].Item,null,c.a.createElement("div",{className:"email"},c.a.createElement("div",{className:"input"},d("email",{rules:[{type:"email",message:Object(f["formatMessage"])({id:"auth.email.register.tips"})}],validateFirst:!0})(c.a.createElement(i["a"],{size:"large",prefix:c.a.createElement(r["a"],{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:Object(f["formatMessage"])({id:"auth.email"})}))),c.a.createElement("div",{className:"sendEmail"},c.a.createElement(s["a"],{type:"primary",size:"large",onClick:this.sendEmail,loading:n||t,style:{height:"38px"}},t?a:Object(f["formatMessage"])({id:"auth.email.send"}))))),c.a.createElement(o["a"].Item,null,d("token",{rules:[{required:!0,message:Object(f["formatMessage"])({id:"auth.token.tips"})}]})(c.a.createElement(i["a"],{size:"large",prefix:c.a.createElement(r["a"],{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:Object(f["formatMessage"])({id:"auth.token.tips"})}))),c.a.createElement(o["a"].Item,null,d("password",{rules:[{required:!0,message:Object(f["formatMessage"])({id:"auth.password.tips"})},{validator:this.validateToNextPassword},{min:8,message:Object(f["formatMessage"])({id:"auth.password.length.tips"})}]})(c.a.createElement(i["a"],{size:"large",prefix:c.a.createElement(r["a"],{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:Object(f["formatMessage"])({id:"auth.password.new"})}))),c.a.createElement(o["a"].Item,null,d("confirm",{rules:[{required:!0,message:Object(f["formatMessage"])({id:"auth.password.tips"})},{validator:this.compareToFirstPassword}]})(c.a.createElement(i["a"],{size:"large",prefix:c.a.createElement(r["a"],{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:Object(f["formatMessage"])({id:"auth.password.new.confirm"})}))),c.a.createElement(o["a"].Item,null,c.a.createElement(s["a"],{type:"primary",htmlType:"submit",className:"login-form-button",size:"large",style:{width:"100%"},loading:m},Object(f["formatMessage"])({id:"auth.reset"}))))),c.a.createElement("div",{className:"bottom"},c.a.createElement(p["a"],{to:"/auth/login"},Object(f["formatMessage"])({id:"auth.login"})),c.a.createElement(p["a"],{to:"/auth/register"},Object(f["formatMessage"])({id:"auth.register"}))))}};y.contextType=E["a"],y=n["a"]([Object(d["connect"])(e=>{var t=e.auth,a=e.loading;return{auth:t,loadingSendEmail:a.effects["auth/resetPasswordMail"],loadingReset:a.effects["auth/resetPasswordAuth"]}})],y),t["default"]=o["a"].create()(y)}}]);