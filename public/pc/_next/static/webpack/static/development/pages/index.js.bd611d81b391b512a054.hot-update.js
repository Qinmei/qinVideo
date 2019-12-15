webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/IndexList/index.jsx":
/*!****************************************!*\
  !*** ./components/IndexList/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IconFont__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../IconFont */ "./components/IconFont/index.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./components/Button/index.jsx");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../List */ "./components/List/index.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ "./components/IndexList/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "F:\\code\\qinvideo-next\\components\\IndexList\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var reactComponent = function reactComponent(props) {
  var _props$value = props.value,
      _props$value$list = _props$value.list,
      list = _props$value$list === void 0 ? [] : _props$value$list,
      _props$value$info = _props$value.info,
      info = _props$value$info === void 0 ? {} : _props$value$info;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(12),
      number = _useState[0],
      setNumber = _useState[1];

  var goCategory = function goCategory(ele) {
    if (ele.status === "custom") {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/".concat(ele.type, "/all"));
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/cate/".concat(ele.type, "/").concat(ele._id));
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var width = window.outerWidth;
    var number = width >= 1600 ? 16 : 12;
    setNumber(number);
  });
  return __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_5___default.a.indexList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_5___default.a.head,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_5___default.a.left,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_IconFont__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: info.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, info.name)), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onChange: function onChange() {
      goCategory(info);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "\u52A0\u8F7D\u66F4\u591A")), __jsx(_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: info.type,
    list: list.slice(0, number),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (reactComponent);

/***/ })

})
//# sourceMappingURL=index.js.bd611d81b391b512a054.hot-update.js.map