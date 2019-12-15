webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Footer/index.jsx":
/*!*************************************!*\
  !*** ./components/Footer/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tooltip/style/css */ "./node_modules/antd/lib/tooltip/style/css.js");
/* harmony import */ var antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tooltip */ "./node_modules/antd/lib/tooltip/index.js");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _IconFont__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../IconFont */ "./components/IconFont/index.jsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "./components/Footer/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "F:\\code\\qinvideo-next\\components\\Footer\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var goToPath = function goToPath(path) {
  window.open(path);
};

var Footer = function Footer(props) {
  var config = props.config;
  var color = config.color,
      name = config.name,
      information = config.information,
      qq = config.qq,
      email = config.email,
      app = config.app,
      aboutus = config.aboutus;
  return __jsx("div", {
    color: color,
    className: _index_less__WEBPACK_IMPORTED_MODULE_4___default.a.footer,
    style: {
      backgroundColor: color
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(_index_less__WEBPACK_IMPORTED_MODULE_4___default.a.con, " container"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_4___default.a.left,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, name), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, information), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "\u672C\u7A0B\u5E8F\u4E3A\u5F00\u6E90\u9879\u76EE, \u4E2A\u4EBA\u53EF\u514D\u8D39\u4F7F\u7528, \u9879\u76EE\u5730\u5740:", __jsx("a", {
    href: "https://qinvideo.org",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "\u70B9\u6B64\u67E5\u770B"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), "\u672C\u7AD9\u4E0D\u63D0\u4F9B\u4EFB\u4F55\u89C6\u542C\u4E0A\u4F20\u670D\u52A1\uFF0C\u6240\u6709\u5185\u5BB9\u5747\u6765\u81EA\u89C6\u9891\u5206\u4EAB\u7AD9\u70B9\u6240\u63D0\u4F9B\u7684\u516C\u5F00\u5F15\u7528\u8D44\u6E90\u3002")), __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_4___default.a.right,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "\u5B98\u65B9"), __jsx("p", {
    onClick: function onClick() {
      aboutus && next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/post/".concat(aboutus));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\u5173\u4E8E\u6211\u4EEC"), __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_4___default.a.circle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: "\u70B9\u51FB\u52A0\u5165QQ\u7FA4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_4___default.a.list,
    onClick: function onClick() {
      goToPath(qq);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_IconFont__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "icon-qq",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))), __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: "app\u4E0B\u8F7D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_4___default.a.list,
    onClick: function onClick() {
      goToPath(app);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_IconFont__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "icon-anzhuo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }))), __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: "\u90AE\u7BB1\u8054\u7CFB",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_4___default.a.list,
    onClick: function onClick() {
      goToPath(email);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_IconFont__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "icon-ziyuan",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.bf86a770c3837978f809.hot-update.js.map