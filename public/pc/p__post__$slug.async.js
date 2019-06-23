(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{PZnI:function(e,t,a){"use strict";a.r(t);a("R9oj");var n=a("ECub"),r=a("mrSG"),o=a("q1tI"),s=a.n(o),l=a("MuoO"),i=(a("1YHl"),a("VNzZ")),c=a("vOnD"),p=a("XEok"),m=a("8KYf"),u=a("mNhR"),d=a("TSYQ"),g=a.n(d),h=a("eNRF"),f=a("rmP6"),v=a.n(f),E=(a("91UR"),e=>{var t=e.value,a={toolbar:!1};return s.a.createElement(v.a,{value:t,theme:"snow",readOnly:!0,modules:a})}),b=E,x=a("l61h"),w=c["a"].div`
  padding: 60px;

  .post {
    display: grid;
    grid-template-columns: 120px 1fr 320px;

    .content {
      padding: 0 20px;

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
        }

        .ql-editor {
          font-size: 1.2em;
        }
      }
    }

    .right {
      .author {
        background-color: white;
        border-radius: 4px;
        width: 100%;
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .author-avatar {
          height: 80px;
          width: 80px;
          background-size: cover;
          background-position: center;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.05);
        }

        span {
          line-height: 40px;
          font-size: 20px;
          display: block;
          overflow: hidden;
          width: 100%;
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        p {
          opacity: 0.6;
          margin-bottom: 0;
        }
      }
    }

    .left {
      padding-left: 30px;
      .list {
        width: 50px;
        height: 50px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04);
        cursor: pointer;
        margin-bottom: 30px;

        i {
          font-size: 1.7em;
          opacity: 0.8;
        }

        &:hover {
          i {
            opacity: 0.6;
          }
        }

        &.active {
          i {
            color: #ffa726;
          }
        }

        span {
          position: absolute;
          font-size: 12px;
          background-color: #b2bac2;
          color: white;
          padding: 0 5px;
          top: 0;
          left: 40px;
          border-radius: 10px;
        }
      }
    }
  }
`,y=(e,t)=>{return e.like.filter(e=>e.slug===t).length>0},k=e=>{var t=e.info,a=e.userAction,n=e.user;!t.author&&(t.author={avatar:"",name:"\u8d26\u53f7\u4e0d\u5b58\u5728",introduce:"\u7528\u6237\u5df2\u5220\u9664",level:0});var r=t.slug,l=Object(o["useContext"])(p["a"]),c=Object(o["useMemo"])(()=>l,[l]);return Object(o["useEffect"])(()=>{}),s.a.createElement(w,{color:c},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"post"},s.a.createElement("div",{className:"left"},s.a.createElement(i["a"],{offsetTop:100},s.a.createElement(x["a"],null,s.a.createElement("div",{className:g()("list",{active:y(n,t.slug)}),onClick:a},s.a.createElement(u["a"],{type:"icon-yizhuifan"}),s.a.createElement("span",null,t.like))),s.a.createElement("div",{className:"list"},s.a.createElement(u["a"],{type:"icon-comment1"}),s.a.createElement("span",null,t.comment)),s.a.createElement(x["a"],null,s.a.createElement(h["a"],{type:"post",target:t._id,addon:r},s.a.createElement("div",{className:"list"},s.a.createElement(u["a"],{type:"icon-guanyuwomen"})))))),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"markdown"},s.a.createElement("img",{src:t.cover,alt:""}),s.a.createElement(b,{value:t.content})),s.a.createElement(m["a"],{type:"post",belong:r})),s.a.createElement("div",{className:"right"},s.a.createElement("div",{className:"author"},s.a.createElement("div",{className:"author-avatar"}),s.a.createElement("span",null,t.author.name),s.a.createElement("p",null,"LV:",t.author.level),s.a.createElement("p",null,t.author.introduce))))))},N=k,j=a("Y8ry"),D=a("LLXN"),O=a("Dp36"),z=class extends o["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.slug,t=this.props.dispatch;t({type:"post/getInfo",payload:{params:{slug:e}}})}),this.userAction=(()=>{var e=this.state.slug,t=this.props.dispatch;O["a"].postUserAction({data:{type:"post",kind:"like",slug:e}}).then(e=>{e&&t({type:"user/refreshInfo",payload:{}})})}),this.state={slug:e.match.params.slug}}static getDerivedStateFromProps(e,t){return e.match.params.slug!==t.slug?{slug:e.match.params.slug}:null}componentDidMount(){this.initData()}componentDidUpdate(e,t){t.slug!==this.state.slug&&this.initData()}render(){var e=this.props,t=e.user.info.post,a=e.post.info,r=e.loading,o=this.state.slug;return s.a.createElement(s.a.Fragment,null,r?s.a.createElement(j["a"],null):a.slug===o?s.a.createElement(N,{info:a,userAction:this.userAction,user:t}):s.a.createElement(n["a"],{description:s.a.createElement("span",null,Object(D["formatMessage"])({id:"common.nodata.tips"})),style:{transform:"translateY(calc(40vh - 50%))"}}))}};z=r["a"]([Object(l["connect"])(e=>{var t=e.user,a=e.post,n=e.loading;return{user:t,post:a,loading:n.effects["post/getInfo"]}})],z);t["default"]=z}}]);