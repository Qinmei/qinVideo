module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "2wwy":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Loka");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "7GvT":
/***/ (function(module, exports) {

module.exports = require("antd/lib/empty");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "BWRB":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "DoBI":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "wrapper___3Np4U",
	"top": "top___13-5J",
	"update": "update___2q4O_",
	"active": "active___1h2BC",
	"rate": "rate___15JdY"
};

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "G8Er":
/***/ (function(module, exports) {

module.exports = {
	"footer": "footer___2CIpb",
	"con": "con___1O7CN",
	"left": "left___1oieR",
	"right": "right___1m4mR",
	"circle": "circle___1_nUO",
	"list": "list___XZAkd"
};

/***/ }),

/***/ "Gg41":
/***/ (function(module, exports) {

module.exports = {
	"nav": "nav___1J5O2",
	"bg": "bg___G9Etz",
	"menu": "menu___IKcA7",
	"main": "main___1ObRz"
};

/***/ }),

/***/ "Ii8p":
/***/ (function(module, exports) {

module.exports = {
	"indexList": "indexList___1vDmK",
	"head": "head___ZcOj3",
	"left": "left___2_5tr"
};

/***/ }),

/***/ "JRgm":
/***/ (function(module, exports) {

module.exports = {
	"indexScroll": "indexScroll___ZaLMq",
	"scroll": "scroll___16twS",
	"top": "top___7WrbD",
	"list": "list___EzHoZ"
};

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "Loka":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "OvTR":
/***/ (function(module, exports) {



/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "QU2i":
/***/ (function(module, exports) {



/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/values.js
var values = __webpack_require__("2wwy");
var values_default = /*#__PURE__*/__webpack_require__.n(values);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./utils/api.js
const prefix = "http://localhost:7001";
const api = {
  config: `${prefix}/api/v2/config`,
  home: `${prefix}/api/v2/home`
};
/* harmony default export */ var utils_api = (api);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./node_modules/antd/lib/icon/style/css.js
var css = __webpack_require__("OvTR");

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__("BWRB");
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// CONCATENATED MODULE: ./components/IconFont/index.jsx



const IconFont = icon_default.a.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_825484_vf682mobb.js'
});

/* harmony default export */ var components_IconFont = (IconFont);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("6BQ9");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./utils/util.js









function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }


const hexToRgb = (hex, opacity) => {
  const rgb = [];
  hex = hex.substr(1);

  if (hex.length === 3) {
    hex = hex.replace(/(.)/g, "$1$1");
  }

  hex.replace(/../g, function (color) {
    rgb.push(parse_int_default()(color, 0x10));
  });
  return `rgba(${rgb.join(",")},${opacity})`;
};
function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}
const indexLabel = {
  newIndexPlayAnimate: "播放最高",
  newIndexRateAnimate: "评分最高",
  newIndexNewAnimate: "新番连载",
  newIndexRandomAnimate: "随机推荐",
  newIndexPlayComic: "播放最高",
  newIndexRateComic: "评分最高",
  newIndexNewComic: "新漫连载",
  newIndexRandomComic: "随机推荐"
};
const indexInit = arr => {
  return arr.map((item, key) => {
    if (/new/.test(item)) {
      const type = /Animate/.test(item) ? "animate" : "comic";
      let icon;

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
        type,
        icon
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

      const iconArr = ["icon-zhandouzuozhan", "icon-kafeibei", "icon-zhinengyouhua", "icon-yule", "icon-youxian", "icon-mudedi", "icon-kongdiao"];
      const icon = iconArr[key % 6];
      return _objectSpread({}, item, {
        status: "normal",
        icon
      });
    }
  });
};
const indexTrans = element => {
  const id = element._id;
  let query = {
    size: 20,
    page: 1,
    sortBy: "updatedAt",
    sortOrder: -1
  };

  if (element.status === "normal") {
    const type = element.type === "animate" ? "kind" : element.type;
    query[type] = id;
  } else if (element.status === "custom") {
    let newQuery = {};

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
const weekGroup = list => {
  const week = {
    day0: [],
    day1: [],
    day2: [],
    day3: [],
    day4: [],
    day5: [],
    day6: []
  };
  list.map(item => {
    const day = item.updateDay;
    week[`day${day}`].push(item);
  });
  return week;
};
const inThisWeek = time => {
  const update = external_moment_default()(time);
  const now = new Date();
  let day = now.getDay();
  now.setHours(0);
  now.setMinutes(0);
  now.setSeconds(0);

  if (day === 0) {
    day = 6;
  } else {
    day -= 1;
  }

  const beginTime = now.getTime() - day * 1000 * 3600 * 24;
  return update.valueOf() > beginTime;
};
// EXTERNAL MODULE: ./components/Nav/index.less
var Nav = __webpack_require__("Gg41");
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav);

// CONCATENATED MODULE: ./components/Nav/index.jsx
var __jsx = external_react_default.a.createElement;






const goToPath = path => {
  router_default.a.push(path);
};

const Header = props => {
  const {
    config
  } = props;
  const {
    color,
    pcMenu = []
  } = config;
  const headerMenu = pcMenu.map(item => __jsx("span", {
    onClick: () => {
      goToPath(item.link);
    },
    key: item.link
  }, item.title));
  return __jsx("div", {
    className: Nav_default.a.nav,
    style: {
      background: hexToRgb(color, 0.9)
    }
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: Nav_default.a.menu
  }, __jsx(components_IconFont, {
    type: "icon-zhuye",
    onClick: () => goToPath("/")
  }), __jsx("div", {
    className: Nav_default.a.main
  }, headerMenu, " "), __jsx(components_IconFont, {
    type: "icon-sousuo",
    onClick: () => goToPath("/search")
  }), __jsx(components_IconFont, {
    type: "icon-modx",
    onClick: () => goToPath("/user")
  }))));
};

/* harmony default export */ var components_Nav = (Header);
// EXTERNAL MODULE: ./node_modules/antd/lib/tooltip/style/css.js
var style_css = __webpack_require__("QU2i");

// EXTERNAL MODULE: external "antd/lib/tooltip"
var tooltip_ = __webpack_require__("z6+L");
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// EXTERNAL MODULE: ./components/Footer/index.less
var Footer = __webpack_require__("G8Er");
var Footer_default = /*#__PURE__*/__webpack_require__.n(Footer);

// CONCATENATED MODULE: ./components/Footer/index.jsx


var Footer_jsx = external_react_default.a.createElement;





const Footer_goToPath = path => {
  window.open(path);
};

const Footer_Footer = props => {
  const {
    config
  } = props;
  const {
    color,
    name,
    information,
    qq,
    email,
    app,
    aboutus
  } = config;
  return Footer_jsx("div", {
    color: color,
    className: Footer_default.a.footer,
    style: {
      backgroundColor: color
    }
  }, Footer_jsx("div", {
    className: `${Footer_default.a.con} container`
  }, Footer_jsx("div", {
    className: Footer_default.a.left
  }, Footer_jsx("span", null, name), Footer_jsx("p", null, information), Footer_jsx("p", null, "\u672C\u7A0B\u5E8F\u4E3A\u5F00\u6E90\u9879\u76EE, \u4E2A\u4EBA\u53EF\u514D\u8D39\u4F7F\u7528, \u9879\u76EE\u5730\u5740:", Footer_jsx("a", {
    href: "https://qinvideo.org"
  }, "\u70B9\u6B64\u67E5\u770B"), Footer_jsx("br", null), "\u672C\u7AD9\u4E0D\u63D0\u4F9B\u4EFB\u4F55\u89C6\u542C\u4E0A\u4F20\u670D\u52A1\uFF0C\u6240\u6709\u5185\u5BB9\u5747\u6765\u81EA\u89C6\u9891\u5206\u4EAB\u7AD9\u70B9\u6240\u63D0\u4F9B\u7684\u516C\u5F00\u5F15\u7528\u8D44\u6E90\u3002")), Footer_jsx("div", {
    className: Footer_default.a.right
  }, Footer_jsx("span", null, "\u5B98\u65B9"), Footer_jsx("p", {
    onClick: () => {
      aboutus && router_default.a.push(aboutus);
    }
  }, "\u5173\u4E8E\u6211\u4EEC"), Footer_jsx("div", {
    className: Footer_default.a.circle
  }, Footer_jsx(tooltip_default.a, {
    title: "\u70B9\u51FB\u52A0\u5165QQ\u7FA4"
  }, Footer_jsx("div", {
    className: Footer_default.a.list,
    onClick: () => {
      Footer_goToPath(qq);
    }
  }, Footer_jsx(components_IconFont, {
    type: "icon-qq"
  }))), Footer_jsx(tooltip_default.a, {
    title: "app\u4E0B\u8F7D"
  }, Footer_jsx("div", {
    className: Footer_default.a.list,
    onClick: () => {
      Footer_goToPath(app);
    }
  }, Footer_jsx(components_IconFont, {
    type: "icon-anzhuo"
  }))), Footer_jsx(tooltip_default.a, {
    title: "\u90AE\u7BB1\u8054\u7CFB"
  }, Footer_jsx("div", {
    className: Footer_default.a.list,
    onClick: () => {
      Footer_goToPath(email);
    }
  }, Footer_jsx(components_IconFont, {
    type: "icon-ziyuan"
  })))))));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: ./node_modules/antd/lib/carousel/style/css.js
var carousel_style_css = __webpack_require__("lfUj");

// EXTERNAL MODULE: external "antd/lib/carousel"
var carousel_ = __webpack_require__("i0nf");
var carousel_default = /*#__PURE__*/__webpack_require__.n(carousel_);

// EXTERNAL MODULE: ./components/IndexScroll/index.less
var IndexScroll = __webpack_require__("JRgm");
var IndexScroll_default = /*#__PURE__*/__webpack_require__.n(IndexScroll);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/IndexScroll/index.jsx


var IndexScroll_jsx = external_react_default.a.createElement;




const List = external_styled_components_default.a.div.withConfig({
  displayName: "IndexScroll__List",
  componentId: "v61391-0"
})(["background-color:rgba(0,0,0,0.1);height:", "px;cursor:pointer;background-size:cover;background-position:center;background-image:url(", ");span{display:block;padding:0 15px;height:30px;line-height:30px;color:white;font-size:18px;background:linear-gradient( to bottom,rgba(0,0,0,0.2),rgba(0,0,0,0) );}"], props => props.height, props => props.cover);

const reactComponent = props => {
  const {
    value: {
      scroll = [],
      top = [],
      type = "animate"
    }
  } = props;
  const {
    0: height,
    1: setHeight
  } = Object(external_react_["useState"])(200);
  let scrollRef = Object(external_react_["useRef"])(null);

  const goAnimate = slug => {
    router_default.a.push(`/${type}/slug/${slug}`);
  };

  Object(external_react_["useEffect"])(() => {
    setHeight(scrollRef.current.clientHeight);
  });
  return IndexScroll_jsx("div", {
    className: IndexScroll_default.a.indexScroll
  }, IndexScroll_jsx("div", {
    className: IndexScroll_default.a.scroll,
    ref: scrollRef
  }, IndexScroll_jsx(carousel_default.a, {
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true
  }, scroll.slice(0, 6).map(item => IndexScroll_jsx(List, {
    height: height,
    cover: item.coverHorizontal,
    onClick: () => {
      goAnimate(item.slug);
    },
    key: item._id
  }, IndexScroll_jsx("span", null, item.title))))), top.slice(0, 6).map(item => IndexScroll_jsx("div", {
    className: IndexScroll_default.a.top,
    style: {
      backgroundImage: `url(${item.coverHorizontal})`
    },
    onClick: () => {
      goAnimate(item.slug);
    },
    key: item._id
  }, IndexScroll_jsx("span", null, item.title))));
};

/* harmony default export */ var components_IndexScroll = (reactComponent);
// CONCATENATED MODULE: ./components/Context/index.jsx

const ColorContext = external_react_default.a.createContext('');
// CONCATENATED MODULE: ./components/Button/index.jsx
var Button_jsx = external_react_default.a.createElement;




const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Button__Wrapper",
  componentId: "sc-175255x-0"
})(["background-color:", ";padding:6px 16px;border-radius:4px;cursor:pointer;color:rgba(255,255,255,0.8);&:hover{background-color:", ";}"], props => props.color, props => hexToRgb(props.color, 0.8));

const Button_reactComponent = props => {
  const {
    onChange
  } = props;
  const value = Object(external_react_["useContext"])(ColorContext);
  const color = Object(external_react_["useMemo"])(() => value, [value]);
  return Button_jsx(Wrapper, {
    color: color,
    onClick: onChange
  }, props.children);
};

/* harmony default export */ var Button = (Button_reactComponent);
// EXTERNAL MODULE: ./node_modules/antd/lib/empty/style/css.js
var empty_style_css = __webpack_require__("pOks");

// EXTERNAL MODULE: external "antd/lib/empty"
var empty_ = __webpack_require__("7GvT");
var empty_default = /*#__PURE__*/__webpack_require__.n(empty_);

// EXTERNAL MODULE: ./components/List/index.less
var components_List = __webpack_require__("DoBI");
var List_default = /*#__PURE__*/__webpack_require__.n(components_List);

// CONCATENATED MODULE: ./components/List/index.jsx


var List_jsx = external_react_default.a.createElement;








const List_goAnimate = (type, slug) => {
  router_default.a.push(`/${type}/slug/${slug}`);
};

const List_reactComponent = props => {
  const {
    list,
    type,
    update = false,
    status = false
  } = props;
  return List_jsx(external_react_default.a.Fragment, null, list.length === 0 ? List_jsx(empty_default.a, {
    style: {
      margin: "30px 0"
    },
    description: false
  }) : List_jsx("div", {
    className: List_default.a.wrapper
  }, list.map(item => List_jsx("div", {
    className: List_default.a.top,
    style: {
      backgroundImage: `url(${item.coverVertical})`
    },
    onClick: () => {
      List_goAnimate(type, item.slug);
    },
    key: item._id
  }, List_jsx("span", null, item.title), update && List_jsx("div", {
    className: `${List_default.a.update} ${inThisWeek(item.updatedAt) ? List_default.a.update : ""}`
  }, fixedZero(item.countEposide)), List_jsx("div", {
    className: List_default.a.rate
  }, item.countStar)))));
};

/* harmony default export */ var components_List_0 = (List_reactComponent);
// EXTERNAL MODULE: ./components/IndexList/index.less
var IndexList = __webpack_require__("Ii8p");
var IndexList_default = /*#__PURE__*/__webpack_require__.n(IndexList);

// CONCATENATED MODULE: ./components/IndexList/index.jsx
var IndexList_jsx = external_react_default.a.createElement;







const IndexList_reactComponent = props => {
  const {
    value: {
      list = [],
      info = {}
    }
  } = props;
  const {
    0: number,
    1: setNumber
  } = Object(external_react_["useState"])(12);

  const goCategory = ele => {
    if (ele.status === "custom") {
      if (ele._id === "newIndexNewAnimate") {
        router_default.a.push(`/${ele.type}/new`);
      } else {
        let sortBy = "createdAt";

        if (/newIndexRandom/.test(ele._id)) {
          sortBy = "title";
        } else if (/newIndexPlay/.test(ele._id)) {
          sortBy = "countPlay";
        } else if (/newIndexRate/.test(ele._id)) {
          sortBy = "countStar";
        }

        router_default.a.push(`/${ele.type}/all?sortBy=${sortBy}&sortOrder=-1`);
      }
    } else {
      router_default.a.push(`/${ele.type}/${ele.kind.slice(1)}/${ele._id}`);
    }
  };

  Object(external_react_["useEffect"])(() => {
    const width = window.outerWidth;
    const number = width >= 1600 ? 16 : 12;
    setNumber(number);
  });
  return IndexList_jsx("div", {
    className: IndexList_default.a.indexList
  }, IndexList_jsx("div", {
    className: IndexList_default.a.head
  }, IndexList_jsx("div", {
    className: IndexList_default.a.left
  }, IndexList_jsx(components_IconFont, {
    type: info.icon
  }), IndexList_jsx("span", null, info.name)), IndexList_jsx(Button, {
    onChange: () => {
      goCategory(info);
    }
  }, "\u52A0\u8F7D\u66F4\u591A")), IndexList_jsx(components_List_0, {
    type: info.type,
    list: list.slice(0, number)
  }));
};

/* harmony default export */ var components_IndexList = (IndexList_reactComponent);
// EXTERNAL MODULE: ./components/NewList/index.less
var NewList = __webpack_require__("oBLd");
var NewList_default = /*#__PURE__*/__webpack_require__.n(NewList);

// CONCATENATED MODULE: ./components/NewList/index.jsx
var NewList_jsx = external_react_default.a.createElement;







const NewList_Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "NewList__Wrapper",
  componentId: "liz62k-0"
})(["width:calc(80% / 7);display:flex;justify-content:center;align-items:center;border-bottom:solid 1px transparent;margin-bottom:-1px;position:relative;cursor:pointer;&.active{border-bottom:solid 1px ", ";color:", ";&:after{content:\"\";position:absolute;bottom:0;width:0;height:0;border:solid 5px transparent;border-bottom:solid 5px ", ";}}"], props => props.color, props => props.color, props => props.color);
const IndexNew = props => {
  const {
    value: {
      info = {},
      list = []
    }
  } = props;
  const {
    0: key,
    1: setKey
  } = Object(external_react_["useState"])(new Date().getDay());
  const value = Object(external_react_["useContext"])(ColorContext);
  const color = Object(external_react_["useMemo"])(() => value, [value]);
  const weekDay = ["day0", "day1", "day2", "day3", "day4", "day5", "day6"];
  const dayTitle = {
    day0: "周日",
    day1: "周一",
    day2: "周二",
    day3: "周三",
    day4: "周四",
    day5: "周五",
    day6: "周六"
  };
  const showList = weekGroup(list);
  return NewList_jsx("div", {
    className: NewList_default.a.wrapper
  }, NewList_jsx("div", {
    className: NewList_default.a.header
  }, NewList_jsx("div", {
    className: NewList_default.a.left
  }, NewList_jsx(components_IconFont, {
    type: info.icon
  }), NewList_jsx("span", null, info.name)), NewList_jsx("div", {
    className: NewList_default.a.right
  }, weekDay.map((item, index) => NewList_jsx(NewList_Wrapper, {
    color: color,
    className: index === key ? "list active" : "list",
    onClick: () => setKey(index),
    key: index
  }, NewList_jsx("span", null, dayTitle[item]))))), NewList_jsx("div", {
    className: NewList_default.a.content
  }, weekDay.map((item, index) => NewList_jsx("div", {
    className: `${NewList_default.a.section} ${index === key && NewList_default.a.active}`,
    key: index
  }, NewList_jsx(components_List_0, {
    list: showList[item],
    type: info.type,
    update: true
  })))));
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: external "qs"
var external_qs_ = __webpack_require__("eW3l");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./utils/request.js









function request_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function request_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { request_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { request_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }



/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [option] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

const codeStatus = res => {
  if (res.code === 10000) {
    return res.data;
  }

  return false;
};

const urlInit = (url, options, method) => {
  let link = url;
  const result = {
    method
  };
  let defaultHeader = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8"
  };
  const {
    params,
    query,
    data,
    formData,
    headers
  } = options;
  /* eslint-disable*/

  if (params) {
    keys_default()(params).map(item => {
      if (!params[item] && params[item] !== 0) delete params[item];
    });

    link = link.replace(/\/:(\w+)/gm, index => `/${params[`${index.replace(/\/:/g, "")}`]}`);
  }

  if (query) {
    keys_default()(query).map(item => {
      if (!query[item] && query[item] !== 0) delete query[item];
    });

    link += `?${Object(external_qs_["stringify"])(query)}`;
  }

  if (data) {
    const newData = data;

    keys_default()(newData).map(item => {
      if (!newData[item] && newData[item] !== 0) delete newData[item];
    });

    result.body = stringify_default()(newData);
  }

  if (formData) {
    defaultHeader = null;
    result.body = formData;
  }

  result.headers = request_objectSpread({}, defaultHeader, {}, headers);
  return {
    url: link,
    body: request_objectSpread({}, result)
  };
};

const fetchPromise = async ({
  url,
  body
}) => {
  return external_isomorphic_unfetch_default()(url, body).then(res => res.json()).then(codeStatus);
};

const request = async (url, option, method) => {
  const result = urlInit(url, option, method);
  return fetchPromise(result);
};

/* harmony default export */ var utils_request = (request);
// EXTERNAL MODULE: ./pages/index.less
var pages = __webpack_require__("hdxh");
var pages_default = /*#__PURE__*/__webpack_require__.n(pages);

// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;













class pages_Index extends external_react_["Component"] {
  static async initData() {
    const res = await utils_request(utils_api.config, {}, "GET");
    return res || {};
  }

  static async initHome() {
    const res = await utils_request(utils_api.home, {}, "GET");
    return res || {};
  }

  static async getInitialProps({
    req
  }) {
    const config = await this.initData();
    const {
      pcIndex = []
    } = config;
    const indexModule = indexInit(pcIndex);
    const indexAll = await this.initHome();
    return {
      config,
      indexAll: values_default()(indexAll),
      indexModule
    };
  }

  render() {
    const {
      config: {
        name,
        slogan,
        headimg
      },
      config,
      indexAll,
      indexModule
    } = this.props;
    return pages_jsx(ColorContext.Provider, {
      value: config.color
    }, pages_jsx(head_default.a, null, pages_jsx("title", null, config.name), pages_jsx("link", {
      rel: "shortcut icon",
      href: config.favcion,
      key: "favcion"
    })), pages_jsx(components_Nav, {
      config: config
    }), pages_jsx("div", {
      className: pages_default.a.index
    }, pages_jsx("div", {
      className: pages_default.a.header,
      style: {
        backgroundImage: `url(${headimg})`
      }
    }, pages_jsx("div", {
      className: pages_default.a.title
    }, pages_jsx("span", null, name), pages_jsx("p", null, slogan))), indexModule.length > 2 && pages_jsx("div", {
      className: "container"
    }, pages_jsx(components_IndexScroll, {
      value: {
        scroll: indexAll[0] ? indexAll[0].list : [],
        top: indexAll[1] ? indexAll[1].list : [],
        type: "animate"
      }
    }), indexModule.slice(2, indexModule.length).map((item, index) => {
      return /newIndexNew/.test(item._id) ? pages_jsx(IndexNew, {
        value: {
          info: item,
          list: indexAll[index + 2] ? indexAll[index + 2].list : []
        },
        key: item._id
      }) : pages_jsx(components_IndexList, {
        value: {
          info: item,
          list: indexAll[index + 2] ? indexAll[index + 2].list : []
        },
        key: item._id
      });
    }))), pages_jsx(components_Footer, {
      config: config
    }));
  }

}

/* harmony default export */ var pages_0 = __webpack_exports__["default"] = (pages_Index);

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eW3l":
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "hdxh":
/***/ (function(module, exports) {

module.exports = {
	"index": "index___2Me0F",
	"header": "header___20Xgx",
	"title": "title___2TiIj"
};

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "i0nf":
/***/ (function(module, exports) {

module.exports = require("antd/lib/carousel");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "lfUj":
/***/ (function(module, exports) {



/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "oBLd":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "wrapper___2U88w",
	"header": "header___2EGK_",
	"left": "left___3w19p",
	"right": "right___3jE3i",
	"list": "list___2-UWR",
	"active": "active___1h-lF",
	"content": "content___23b8f",
	"section": "section___UoZDJ"
};

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pOks":
/***/ (function(module, exports) {



/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z6+L":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ })

/******/ });