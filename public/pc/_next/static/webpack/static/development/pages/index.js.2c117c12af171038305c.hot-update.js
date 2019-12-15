webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/util.js":
/*!***********************!*\
  !*** ./utils/util.js ***!
  \***********************/
/*! exports provided: hexToRgb, fixedZero, indexInit, indexTrans, weekGroup, inThisWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixedZero", function() { return fixedZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexInit", function() { return indexInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexTrans", function() { return indexTrans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekGroup", function() { return weekGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inThisWeek", function() { return inThisWeek; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


var hexToRgb = function hexToRgb(hex, opacity) {
  var rgb = [];
  hex = hex.substr(1);

  if (hex.length === 3) {
    hex = hex.replace(/(.)/g, "$1$1");
  }

  hex.replace(/../g, function (color) {
    rgb.push(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(color, 0x10));
  });
  return "rgba(".concat(rgb.join(","), ",").concat(opacity, ")");
};
function fixedZero(val) {
  return val * 1 < 10 ? "0".concat(val) : val;
}
var indexLabel = {
  newIndexPlayAnimate: "播放最高",
  newIndexRateAnimate: "评分最高",
  newIndexNewAnimate: "新番连载",
  newIndexRandomAnimate: "随机推荐",
  newIndexPlayComic: "播放最高",
  newIndexRateComic: "评分最高",
  newIndexNewComic: "新漫连载",
  newIndexRandomComic: "随机推荐"
};
var indexInit = function indexInit(arr) {
  return arr.map(function (item, key) {
    if (/new/.test(item)) {
      var type = /Animate/.test(item) ? "animate" : "comic";
      var icon;

      if (/newIndexNew/.test(item)) {
        icon = "icon-xinpin";
      } else if (/newIndexRandom/.test(item)) {
        icon = "icon-three";
      } else if (/newIndexPlay/.test(item)) {
        icon = "icon-ic_movie_filter";
      } else if (/newIndexRate/.test(item)) {
        icon = "icon-huiyuan";
      }

      return {
        _id: item,
        name: indexLabel[item],
        status: "custom",
        type: type,
        icon: icon
      };
    } else {
      item = JSON.parse(item);
      item.kind = item.type;

      switch (item.type) {
        case "akind":
          item.type = "animate";
          break;

        case "ckind":
          item.type = "comic";
          break;

        case "pkind":
          item.type = "post";
          break;

        default:
          break;
      }

      var iconArr = ["icon-zhandouzuozhan", "icon-kafeibei", "icon-zhinengyouhua", "icon-yule", "icon-youxian", "icon-mudedi", "icon-kongdiao"];
      var _icon = iconArr[key % 6];
      return _objectSpread({}, item, {
        status: "normal",
        icon: _icon
      });
    }
  });
};
var indexTrans = function indexTrans(element) {
  var id = element._id;
  var query = {
    size: 20,
    page: 1,
    sortBy: "updatedAt",
    sortOrder: -1
  };

  if (element.status === "normal") {
    var type = element.type === "animate" ? "kind" : element.type;
    query[type] = id;
  } else if (element.status === "custom") {
    var newQuery = {};

    if (/newIndexNew/.test(id)) {
      newQuery = {
        update: true,
        size: 100
      };
    } else if (/newIndexRandom/.test(id)) {
      newQuery = {
        sortBy: "introduce"
      };
    } else if (/newIndexPlay/.test(id)) {
      newQuery = {
        sortBy: "countPlay"
      };
    } else if (/newIndexRate/.test(id)) {
      newQuery = {
        sortBy: "countStar"
      };
    }

    query = _objectSpread({}, query, {}, newQuery);
  }

  return query;
};
var weekGroup = function weekGroup(list) {
  var week = {
    day0: [],
    day1: [],
    day2: [],
    day3: [],
    day4: [],
    day5: [],
    day6: []
  };
  list.map(function (item) {
    var day = item.updateDay;
    week["day".concat(day)].push(item);
  });
  return week;
};
var inThisWeek = function inThisWeek(time) {
  var update = moment__WEBPACK_IMPORTED_MODULE_8___default()(time);
  var now = new Date();
  var day = now.getDay();
  now.setHours(0);
  now.setMinutes(0);
  now.setSeconds(0);

  if (day === 0) {
    day = 6;
  } else {
    day -= 1;
  }

  var beginTime = now.getTime() - day * 1000 * 3600 * 24;
  return update.valueOf() > beginTime;
};

/***/ })

})
//# sourceMappingURL=index.js.2c117c12af171038305c.hot-update.js.map