(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{PZnI:function(e,t,a){"use strict";a.r(t);a("R9oj");var n=a("ECub"),r=a("mrSG"),l=a("q1tI"),s=a.n(l),i=a("MuoO"),o=a("vOnD"),c=a("XEok"),m=a("8KYf"),p=a("mNhR"),u=a("TSYQ"),d=a.n(u),g=a("eNRF"),h=a("rmP6"),E=a.n(h),f=(a("91UR"),e=>{var t=e.value,a={toolbar:!1};return s.a.createElement(E.a,{value:t,theme:"snow",readOnly:!0,modules:a})}),v=f,y=a("l61h"),b=a("wd/R"),x=a.n(b),w=o["a"].div`
  margin-top: 40px;

  .author {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.1);
      margin-right: 15px;
    }

    .info {
      .name {
        span:nth-child(1) {
          font-size: 1.2em;
          margin-right: 10px;
        }

        span:nth-child(2) {
          opacity: 0.7;
        }
      }

      .time {
        span {
          margin-right: 15px;
          opacity: 0.8;

          i {
            margin-right: 5px;
          }
        }
      }
    }
  }

  .markdown {
    background-color: white;
    margin-bottom: 20px;
    user-select: text;

    img {
      width: 100%;
      margin-bottom: 20px;
    }

    .ql-container.ql-snow {
      border: none;
      padding: 0;
    }

    .ql-editor {
      font-size: 1.1em;
      padding: 0;
    }
  }

  .option {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.05);
    height: 60px;

    .list {
      padding: 0 40px;
      color: white;
      background-color: ${e=>e.color};
      height: 40px;
      line-height: 40px;
      border-radius: 4px;
      font-size: 1.3em;

      &.active {
        color: #ffa726;
      }
    }
  }
`,k=(e,t)=>{return e.like.filter(e=>e.slug===t).length>0},N=e=>{var t=e.info,a=e.userAction,n=e.user,r=t.slug,i=Object(l["useContext"])(c["a"]),o=Object(l["useMemo"])(()=>i,[i]);return Object(l["useEffect"])(()=>{}),s.a.createElement(w,{color:o},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"author"},s.a.createElement("div",{className:"avatar",style:{backgroundImage:`url(${t.author.avatar})`}}),s.a.createElement("div",{className:"info"},s.a.createElement("div",{className:"name"},s.a.createElement("span",null,t.author.name),s.a.createElement("span",null,"Lv:",t.author.level)),s.a.createElement("div",{className:"time"},s.a.createElement("span",null," ",x()(t.createdAt).format("YYYY-MM-DD")),s.a.createElement("span",null,s.a.createElement(p["a"],{type:"icon-youtube"}),t.play),s.a.createElement("span",null,s.a.createElement(p["a"],{type:"icon-comment"}),t.comment),s.a.createElement("span",null,s.a.createElement(p["a"],{type:"icon-yizhuifan"}),s.a.createElement("span",null,t.like))))),s.a.createElement("div",{className:"markdown"},s.a.createElement("h2",null,t.title),s.a.createElement("img",{src:t.cover,alt:""}),s.a.createElement(v,{value:t.content}))),s.a.createElement("div",{className:"option"},s.a.createElement(y["a"],null,s.a.createElement("div",{className:d()("list",{active:k(n,t.slug)}),onClick:a},s.a.createElement(p["a"],{type:"icon-yizhuifan"}))),s.a.createElement(y["a"],null,s.a.createElement(g["a"],{type:"post",target:t._id,addon:r},s.a.createElement("div",{className:"list"},s.a.createElement(p["a"],{type:"icon-guanyuwomen"}))))),s.a.createElement(m["a"],{type:"post",belong:r}))},D=N,j=a("Y8ry"),O=a("LLXN"),Y=a("Dp36"),A=class extends l["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.slug,t=this.props.dispatch;t({type:"post/getInfo",payload:{params:{slug:e}}})}),this.userAction=(()=>{var e=this.state.slug,t=this.props.dispatch;Y["a"].postUserAction({data:{type:"post",kind:"like",slug:e}}).then(e=>{e&&t({type:"user/refreshInfo",payload:{}})})}),this.state={slug:e.match.params.slug}}static getDerivedStateFromProps(e,t){return e.match.params.slug!==t.slug?{slug:e.match.params.slug}:null}componentDidMount(){this.initData()}componentDidUpdate(e,t){t.slug!==this.state.slug&&this.initData()}render(){var e=this.props,t=e.user.info.post,a=e.post.info,r=e.loading,l=this.state.slug;return s.a.createElement(s.a.Fragment,null,r?s.a.createElement(j["a"],null):a.slug===l?s.a.createElement(D,{info:a,userAction:this.userAction,user:t}):s.a.createElement(n["a"],{description:s.a.createElement("span",null,Object(O["formatMessage"])({id:"common.nodata.tips"})),style:{transform:"translateY(calc(40vh - 50%))"}}))}};A=r["a"]([Object(i["connect"])(e=>{var t=e.user,a=e.post,n=e.loading;return{user:t,post:a,loading:n.effects["post/getInfo"]}})],A);t["default"]=A}}]);