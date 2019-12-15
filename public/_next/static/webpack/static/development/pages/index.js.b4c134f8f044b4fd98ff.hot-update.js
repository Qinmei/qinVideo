webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav/index.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.jsx");
/* harmony import */ var _components_IndexScroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/IndexScroll */ "./components/IndexScroll/index.jsx");
/* harmony import */ var _components_IndexList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/IndexList */ "./components/IndexList/index.jsx");
/* harmony import */ var _components_NewList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/NewList */ "./components/NewList/index.jsx");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/util */ "./utils/util.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./index.less */ "./pages/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Context */ "./components/Context/index.jsx");








var _jsxFileName = "F:\\code\\qinvideo-next\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;













var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$config = _this$props.config,
          name = _this$props$config.name,
          slogan = _this$props$config.slogan,
          headimg = _this$props$config.headimg,
          config = _this$props.config,
          indexAll = _this$props.indexAll,
          indexModule = _this$props.indexModule;
      return __jsx(_components_Context__WEBPACK_IMPORTED_MODULE_19__["ColorContext"].Provider, {
        value: config.color,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, config.name), __jsx("link", {
        rel: "shortcut icon",
        href: config.favcion,
        key: "favcion",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], {
        config: config,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), __jsx("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_18___default.a.index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_18___default.a.header,
        style: {
          backgroundImage: "url(".concat(headimg, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_18___default.a.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, name), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, slogan))), indexModule.length > 2 && __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(_components_IndexScroll__WEBPACK_IMPORTED_MODULE_13__["default"], {
        value: {
          scroll: indexAll[0] ? indexAll[0].list : [],
          top: indexAll[1] ? indexAll[1].list : [],
          type: "animate"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), indexModule.slice(2, indexModule.length).map(function (item, index) {
        return /newIndexNew/.test(item._id) ? __jsx(_components_NewList__WEBPACK_IMPORTED_MODULE_15__["IndexNew"], {
          value: {
            info: item,
            list: indexAll[index + 2] ? indexAll[index + 2].list : []
          },
          key: item._id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }) : __jsx(_components_IndexList__WEBPACK_IMPORTED_MODULE_14__["default"], {
          value: {
            info: item,
            list: indexAll[index + 2] ? indexAll[index + 2].list : []
          },
          key: item._id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        });
      }))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        config: config,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }));
    }
  }], [{
    key: "initData",
    value: function () {
      var _initData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_request__WEBPACK_IMPORTED_MODULE_17__["default"])(_utils_api__WEBPACK_IMPORTED_MODULE_10__["default"].config, {}, "GET");

              case 2:
                res = _context.sent;
                return _context.abrupt("return", res || {});

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function initData() {
        return _initData.apply(this, arguments);
      }

      return initData;
    }()
  }, {
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref) {
        var req, config, _config$pcIndex, pcIndex, indexModule, indexAll;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                req = _ref.req;
                _context2.next = 3;
                return this.initData();

              case 3:
                config = _context2.sent;
                _config$pcIndex = config.pcIndex, pcIndex = _config$pcIndex === void 0 ? [] : _config$pcIndex;
                indexModule = Object(_utils_util__WEBPACK_IMPORTED_MODULE_16__["indexInit"])(pcIndex);
                _context2.next = 8;
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all(indexModule.map(function (item) {
                  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_17__["default"])(_utils_api__WEBPACK_IMPORTED_MODULE_10__["default"][item.type], {
                    query: Object(_utils_util__WEBPACK_IMPORTED_MODULE_16__["indexTrans"])(item)
                  }, "GET");
                }));

              case 8:
                indexAll = _context2.sent;
                return _context2.abrupt("return", {
                  config: config,
                  indexAll: indexAll,
                  indexModule: indexModule
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.b4c134f8f044b4fd98ff.hot-update.js.map