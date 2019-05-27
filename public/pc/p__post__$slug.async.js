(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{PZnI:function(e,t,a){"use strict";a.r(t);a("R9oj");var n=a("ECub"),o=a("mrSG"),r=a("q1tI"),l=a.n(r),i=a("MuoO"),s=(a("1YHl"),a("VNzZ")),c=a("vOnD"),p=a("XEok"),m=a("8KYf"),d=a("mNhR"),u=a("eNRF"),g=a("rmP6"),h=a.n(g),v=(a("91UR"),e=>{var t=e.value,a={toolbar:!1};return l.a.createElement(h.a,{value:t,theme:"snow",readOnly:!0,modules:a})}),E=v,b=c["a"].div`
  padding: 60px;

  .post {
    display: grid;
    grid-template-columns: 120px 1fr 320px;

    .content {
      padding: 0 20px;

      .markdown {
        background-color: white;
        margin-bottom: 20px;

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
`,f=e=>{var t=e.info;console.log(t);var a=t.slug,n=Object(r["useContext"])(p["a"]),o=Object(r["useMemo"])(()=>n,[n]);return Object(r["useEffect"])(()=>{}),l.a.createElement(b,{color:o},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"post"},l.a.createElement("div",{className:"left"},l.a.createElement(s["a"],{offsetTop:100},l.a.createElement("div",{className:"list"},l.a.createElement(d["a"],{type:"icon-yizhuifan"}),l.a.createElement("span",null,t.like)),l.a.createElement("div",{className:"list"},l.a.createElement(d["a"],{type:"icon-comment1"}),l.a.createElement("span",null,t.comment)),l.a.createElement(u["a"],{type:"post",target:t._id,addon:a},l.a.createElement("div",{className:"list"},l.a.createElement(d["a"],{type:"icon-guanyuwomen"}))))),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"markdown"},l.a.createElement("img",{src:t.cover,alt:""}),l.a.createElement(E,{value:t.content})),l.a.createElement(m["a"],{type:"post",belong:a})),l.a.createElement("div",{className:"right"},l.a.createElement("div",{className:"author"},l.a.createElement("div",{className:"author-avatar"}),l.a.createElement("span",null,t.author.name),l.a.createElement("p",null,"LV:",t.author.level),l.a.createElement("p",null,t.author.introduce))))))},x=f,w=a("Y8ry"),y=a("LLXN"),N=class extends r["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.slug,t=this.props.dispatch;t({type:"post/getInfo",payload:{params:{slug:e}}})}),this.state={slug:e.match.params.slug}}static getDerivedStateFromProps(e,t){return e.match.params.slug!==t.slug?{slug:e.match.params.slug}:null}componentDidMount(){this.initData()}componentDidUpdate(e,t){t.slug!==this.state.slug&&this.initData()}render(){var e=this.props,t=e.post.info,a=e.loading;return l.a.createElement(l.a.Fragment,null,a?l.a.createElement(w["a"],null):t.slug?l.a.createElement(x,{info:t}):l.a.createElement(n["a"],{description:l.a.createElement("span",null,Object(y["formatMessage"])({id:"common.nodata.tips"})),style:{transform:"translateY(calc(40vh - 50%))"}}))}};N=o["a"]([Object(i["connect"])(e=>{var t=e.post,a=e.loading;return{post:t,loading:a.effects["post/getInfo"]}})],N);t["default"]=N}}]);