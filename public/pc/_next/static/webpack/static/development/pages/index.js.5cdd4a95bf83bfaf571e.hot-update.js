webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/List/index.jsx":
/*!***********************************!*\
  !*** ./components/List/index.jsx ***!
  \***********************************/
/*! exports provided: ListInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListInfo", function() { return ListInfo; });
/* harmony import */ var antd_lib_empty_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/empty/style/css */ "./node_modules/antd/lib/empty/style/css.js");
/* harmony import */ var antd_lib_empty_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_empty_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/empty */ "./node_modules/antd/lib/empty/index.js");
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_empty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/util */ "./utils/util.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Context */ "./components/Context/index.jsx");
/* harmony import */ var _IconFont__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../IconFont */ "./components/IconFont/index.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "F:\\code\\qinvideo-next\\components\\List\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "List__Wrapper",
  componentId: "jw0y48-0"
})(["margin-bottom:40px;display:grid;grid-gap:40px 20px;grid-template-columns:repeat(4,calc((100% - 60px) / 4));@media (min-width:768px){grid-template-columns:repeat(4,calc((100% - 60px) / 4));}@media (min-width:992px){grid-template-columns:repeat(5,calc((100% - 80px) / 5));}@media (min-width:1200px){grid-template-columns:repeat(6,calc((100% - 100px) / 6));}@media (min-width:1600px){grid-template-columns:repeat(8,calc((100% - 140px) / 8));}.top{height:0;padding-top:140%;background-color:rgba(0,0,0,0.1);background-size:cover;background-position:center;border-radius:6px;vertical-align:bottom;position:relative;cursor:pointer;span{display:block;width:100%;height:30px;line-height:30px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;}.update{position:absolute;right:0;top:0;padding:3px 10px;color:white;background-color:rgba(0,0,0,0.5);border-radius:0 4px 0 4px;&.active{background-color:rgb(242,93,142);}}.rate{position:absolute;left:-5px;top:5px;padding:1px 15px;min-width:30px;color:white;background-color:rgba(0,0,0,0.7);border-radius:0 2px 2px 0;}}"]);

var goAnimate = function goAnimate(type, slug) {
  next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/".concat(type, "/slug/").concat(slug));
};

var reactComponent = function reactComponent(props) {
  var list = props.list,
      type = props.type,
      _props$update = props.update,
      update = _props$update === void 0 ? false : _props$update,
      _props$status = props.status,
      status = _props$status === void 0 ? false : _props$status;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, list.length === 0 ? __jsx(antd_lib_empty__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "30px 0"
    },
    description: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }) : __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, list.map(function (item) {
    return __jsx("div", {
      className: "top",
      style: {
        backgroundImage: "url(".concat(item.coverVertical, ")")
      },
      onClick: function onClick() {
        goAnimate(type, item.slug);
      },
      key: item._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, item.title), update && __jsx("div", {
      className: Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__["inThisWeek"])(item.updatedAt) ? "update active" : "update",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__["fixedZero"])(item.countEposide)), __jsx("div", {
      className: "rate",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, item.countStar));
  })));
};

var Wrapper2 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "List__Wrapper2",
  componentId: "jw0y48-1"
})([".list{margin-top:20px;height:260px;border-radius:5px;box-shadow:0 0 16px rgba(0,0,0,0.2);display:grid;grid-template-columns:190px 1fr 190px;overflow:hidden;.img{background-color:rgba(0,0,0,0.1);background-size:cover;border-radius:5px;}.content{padding:15px;.title{line-height:40px;font-size:26px;color:black;cursor:pointer;&:hover{color:", ";}}.info{line-height:25px;display:flex;justify-content:flex-start;align-items:center;span{display:flex;justify-content:flex-start;align-items:center;margin-right:30px;i{font-size:12px;opacity:0.6;margin-right:5px;}&:nth-child(2) i,&:nth-child(3) i,&:nth-child(4) i{font-size:15px;}}}.tags{height:25px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:14px;color:rgba(0,0,0,0.6);span{margin-right:8px;}}.introduce{height:140px;line-height:20px;opacity:0.8;}}.rate{background-color:rgba(0,0,0,0.2);display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:15px;.title{width:100%;height:40px;display:flex;justify-content:space-between;span:nth-child(1){font-size:1.2em;color:white;}}.star{font-size:80px;font-weight:solid;height:160px;line-height:160px;}}}"], function (props) {
  return props.color;
});
var ListInfo = function ListInfo(props) {
  var list = props.list,
      type = props.type;
  var value = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_6__["ColorContext"]);
  var color = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return value;
  }, [value]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, list.length === 0 ? __jsx(antd_lib_empty__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "15px 0 "
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }) : __jsx(Wrapper2, {
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, list.map(function (item) {
    return __jsx("div", {
      className: "list",
      key: item._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, __jsx("div", {
      className: "img",
      style: {
        backgroundImage: "url(".concat(item.coverVertical, ")")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }), __jsx("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, __jsx("div", {
      className: "title",
      onClick: function onClick() {
        goAnimate(type, item.slug);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, item.title), __jsx("div", {
      className: "info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, __jsx(_IconFont__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "icon-icon-time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }), moment__WEBPACK_IMPORTED_MODULE_8___default()(item.information.firstPlay).format("YYYY-MM-DD")), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    }, __jsx(_IconFont__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "icon-dianshiyouxiandianshishuzidianshimianxing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }), item.information.eposideCount), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, __jsx(_IconFont__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "icon-youtube",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }), item.count.play), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }, __jsx(_IconFont__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "icon-yizhuifan",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }), item.count.like), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    }, __jsx(_IconFont__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "icon-comment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    }), item.count.comment)), __jsx("div", {
      className: "tags",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    }, formatMessage({
      id: "list.information.tags"
    }), ":"), item.category.tag.map(function (ele) {
      return __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, ele);
    })), __jsx("div", {
      className: "introduce",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285
      },
      __self: this
    }, formatMessage({
      id: "list.information.introduce"
    }), ":", " ", item.information.introduce))), __jsx("div", {
      className: "rate",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }, __jsx("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293
      },
      __self: this
    }, formatMessage({
      id: "list.information.rateStar"
    }), ":"), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296
      },
      __self: this
    }, formatMessage({
      id: "list.information.rateCount"
    }), ":", item.information.rateCount)), __jsx("div", {
      className: "star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      },
      __self: this
    }, item.information.rateStar))));
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (reactComponent);

/***/ })

})
//# sourceMappingURL=index.js.5cdd4a95bf83bfaf571e.hot-update.js.map