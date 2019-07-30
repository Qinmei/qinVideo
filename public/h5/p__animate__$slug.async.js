(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{IIFU:function(e,t,a){"use strict";a.r(t);a("R9oj");var n=a("ECub"),i=a("mrSG"),o=a("q1tI"),s=a.n(o),l=a("MuoO"),r=(a("pC0b"),a("GzdX")),c=(a("Znn+"),a("ZTPi")),m=a("vOnD"),d=a("LLXN"),p=a("wd/R"),f=a.n(p),u=a("TSYQ"),g=a.n(u),h=a("mNhR"),b=a("XEok"),x=a("yDSA"),v=a("8KYf"),y=a("7rZP"),E=a("l61h"),w=c["a"].TabPane,k=m["a"].div`
  .head {
    width: 100%;
    height: 160px;
    position: relative;
    padding: 55px 15px 15px 15px;
    margin-bottom: 25px;

    .bg-cover {
      width: 100%;
      height: 160px;
      left: 0;
      top: 0;
      position: absolute;
      overflow: hidden;

      .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        filter: blur(15px);
        transform: scale(1.2);
        background-size: cover;
        background-position: center;
        z-index: -1;

        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
    }

    .info {
      height: 120px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .cover {
        background-size: cover;
        border: 3px solid #fff;
        border-radius: 5px;
        background-position: center;
        width: 90px;
        height: 120px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
      }

      .main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 95px;
        width: calc(100% - 105px);

        .left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          color: white;
          height: 100%;

          span:nth-child(1) {
            font-size: 16px;
            font-weight: bold;
          }

          span:nth-child(2),
          span:nth-child(3) {
            font-size: 13px;
          }
        }

        .star {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          color: white;
          font-size: 12px;
          height: 100%;

          .rate {
            color: #ffa726;
            font-size: 24px;
          }
        }
      }
    }
  }

  .information {
    padding: 0 15px;

    .introduce {
      font-weight: 200;
      font-size: 13px;
      overflow: hidden;
      line-height: 20px;
      margin-bottom: 10px;
      text-align: justify;
    }

    .button {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;

      div {
        height: 46px;
        padding: 0 25px;
        color: #fff;
        font-size: 1.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-weight: 300;
        border-radius: 5px;

        &:hover {
          opacity: 0.8;
        }

        i {
          font-size: 1.5em;
          margin-right: 10px;
        }
      }

      .like {
        background-color: #f36392;

        &.active i {
          color: #ffa726;
        }
      }

      .download {
        margin-left: 30px;
        background-color: rgb(24, 144, 255);
      }
    }
  }

  .content.container {
    margin: 15px 0;
    border-top: solid 6px #ebebeb;

    .sec {
      display: none;

      &.active {
        display: block;
      }
    }
  }
`,j=e=>{window.open(e)},N=(e,t)=>{return e.like.filter(e=>e.slug===t).length>0},M=e=>{var t=e.info,a=e.userAction,n=e.user,i=Object(o["useContext"])(b["a"]),l=Object(o["useMemo"])(()=>i,[i]);return s.a.createElement(k,{color:l},s.a.createElement("div",{className:"head"},s.a.createElement("div",{className:"bg-cover"},s.a.createElement("div",{className:"bg",style:{backgroundImage:`url(${t.cover.vertical})`}})),s.a.createElement("div",{className:"info"},s.a.createElement("div",{className:"cover",style:{backgroundImage:`url(${t.cover.vertical})`}}),s.a.createElement("div",{className:"main"},s.a.createElement("div",{className:"left"},s.a.createElement("span",null,t.title),s.a.createElement("span",null,t.information.eposideCount," ",Object(d["formatMessage"])({id:"animate.info.eposideCount"})," ",Object(d["formatMessage"])({id:t.information.isUpdate?"animate.info.isUpdate.true":"animate.info.isUpdate.false"})),s.a.createElement("span",null,f()(t.information.firstPlay).format("YYYY-MM-DD")," ",Object(d["formatMessage"])({id:"animate.info.firstPlay"}))),s.a.createElement("div",{className:"star"},s.a.createElement("span",{className:"rate"},t.information.rateStar),s.a.createElement(r["a"],{disabled:!0,allowHalf:!0,defaultValue:t.information.rateStar/2,style:{fontSize:"10px"}}),s.a.createElement("span",null,t.information.rateCount,Object(d["formatMessage"])({id:"animate.info.rate.count"})))))),s.a.createElement("div",{className:"information"},s.a.createElement("div",{className:"introduce"},s.a.createElement("span",null,t.information.introduce)),s.a.createElement("div",{className:"button"},s.a.createElement(E["a"],null,s.a.createElement("div",{className:g()("like",{active:N(n,t.slug)}),onClick:a},s.a.createElement(h["a"],{type:"icon-yizhuifan"}),s.a.createElement("span",null,Object(d["formatMessage"])({id:"animate.info.btn.like"})))),t.play.downTitle&&s.a.createElement("div",{className:"download",onClick:()=>{j(t.play.downLink)}},s.a.createElement(h["a"],{type:"icon-ic_cloud_download_"}),s.a.createElement("span",null,t.play.downTitle)))),s.a.createElement("div",{className:"content container"},s.a.createElement(c["a"],{defaultActiveKey:"1"},s.a.createElement(w,{tab:Object(d["formatMessage"])({id:"animate.tabs.eposide"}),key:"1"},s.a.createElement(x["b"],{eposide:t.season,cover:t.cover.vertical,slug:t.slug})),s.a.createElement(w,{tab:`${Object(d["formatMessage"])({id:"animate.tabs.comment"})}(${t.count.comment})`,key:"2"},s.a.createElement(v["a"],{type:"animate",belong:t.slug,target:"P00"})),s.a.createElement(w,{tab:Object(d["formatMessage"])({id:"animate.tabs.relative"}),key:"3"},s.a.createElement(y["a"],{type:"animate",title:t.title})))))},O=M,z=a("Y8ry"),D=a("Dp36"),C=class extends o["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.slug,t=this.props.dispatch;t({type:"animate/getInfo",payload:{params:{slug:e}}})}),this.userAction=(()=>{var e=this.state.slug,t=this.props.dispatch;D["a"].postUserAction({data:{type:"animate",kind:"like",slug:e}}).then(e=>{e&&t({type:"user/refreshInfo",payload:{}})})}),this.state={slug:e.match.params.slug}}static getDerivedStateFromProps(e,t){return e.match.params.slug!==t.slug?{slug:e.match.params.slug}:null}componentDidMount(){this.initData()}componentDidUpdate(e,t){t.slug!==this.state.slug&&this.initData()}render(){var e=this.props,t=e.user.info.animate,a=e.animate.info,i=e.loading;return s.a.createElement(s.a.Fragment,null,i?s.a.createElement(z["a"],null):a.slug?s.a.createElement(O,{info:a,userAction:this.userAction,user:t}):s.a.createElement(n["a"],{description:s.a.createElement("span",null,Object(d["formatMessage"])({id:"common.nodata.tips"})),style:{transform:"translateY(calc(40vh - 50%))"}}))}};C=i["a"]([Object(l["connect"])(e=>{var t=e.user,a=e.animate,n=e.loading;return{user:t,animate:a,loading:n.effects["animate/getInfo"]}})],C);t["default"]=C}}]);