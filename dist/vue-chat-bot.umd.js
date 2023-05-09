(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-chat-bot"] = factory(require("vue"));
	else
		root["vue-chat-bot"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "4647":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_app_scss_vue_type_style_index_0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a740");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_app_scss_vue_type_style_index_0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_app_scss_vue_type_style_index_0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "a740":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b676");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("28740afc", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b676":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".qkb-bot-ui{position:fixed;z-index:1000;bottom:1.5rem;right:1.5rem;display:flex;flex-direction:column;font-size:1rem}.qkb-bot-ui *{box-sizing:border-box}@media screen and (max-width:600px){.qkb-bot-ui{right:0;left:0}}.qkb-preload-image{position:absolute;top:0;left:0;width:0;height:0;overflow:hidden}.qkb-bot-ui--animate .qkb-fadeUp-enter-active,.qkb-bot-ui--animate .qkb-fadeUp-leave-active{opacity:1;transform:translate(0);transition:opacity .15s linear,transform .2s ease-out}.qkb-bot-ui--animate .qkb-fadeUp-enter,.qkb-bot-ui--animate .qkb-fadeUp-leave-to{transform:translateY(20px);opacity:0}.qkb-bot-ui--animate .qkb-scaleUp-enter-active,.qkb-bot-ui--animate .qkb-scaleUp-leave-active{opacity:1;transform:scale(1);transition:opacity .1s linear,transform .2s ease-out}.qkb-bot-ui--animate .qkb-scaleUp-enter,.qkb-bot-ui--animate .qkb-scaleUp-leave-to{transform:scale(0);opacity:0}@keyframes qkbJump{0%{transform:translateY(2px)}to{transform:translateY(-1px)}}.qkb-msg-bubble__typing-indicator:after,.qkb-msg-bubble__typing-indicator:before,.qkb-msg-bubble__typing-indicator span{transform:translateY(2px);animation:qkbJump .35s ease infinite alternate}.qkb-msg-bubble__typing-indicator span{animation-delay:.175s}.qkb-msg-bubble__typing-indicator:after{animation-delay:.35s}.qkb-bot-bubble{align-self:flex-end;padding-right:16px}.qkb-bubble-btn{position:relative;display:block;padding:0;outline:0;border:0;box-shadow:none;border-radius:50%;color:#fff;fill:#fff;cursor:pointer;box-shadow:0 3px 5px 0 rgba(0,0,0,.15);transition:opacity .2s linear}.qkb-bubble-btn:hover{opacity:.85}.qkb-bubble-btn-icon{display:block;position:absolute;top:50%;left:50%;width:27px;height:auto;margin:-11px 0 0 -13px;line-height:1em}.qkb-bubble-btn-icon.qkb-bubble-btn-icon--close{width:15px;margin:-7px 0 0 -7px}.qkb-board{display:flex;flex-direction:column;position:absolute;right:16px;overflow:hidden;width:376px;height:80vh;margin-bottom:10px;border-radius:8px;background-color:#fff;box-shadow:0 3px 30px 0 rgba(0,0,0,.15)}@media screen and (max-width:600px){.qkb-board{width:100%}}.qkb-board-full-screen{width:96vw}.apply-transition{transition:all .5s linear}.qkb-board-header{display:flex;flex:none;align-items:center;justify-content:space-between;height:50px;padding:5px 15px}.qkb-board-header__title{font-weight:700;font-size:.875rem}.qkb-board-header__full-screen-icon{cursor:pointer;font-size:1rem}.qkb-board-content{flex-grow:1;overflow:hidden scroll}.qkb-board-content__bubbles{min-height:100%;padding:1.5rem 1.25rem 1rem}.qkb-msg-bubble{display:flex;position:relative}.qkb-msg-avatar{flex-grow:1;flex:none;position:relative;overflow:hidden;border-radius:50%}.qkb-msg-avatar__img{position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;background-size:cover;background-repeat:no-repeat}.qkb-msg-bubble__time{display:none;position:absolute;right:0;top:0;padding:2px 5px;margin-top:-5px;border-radius:5px;font-size:.625rem;color:#fff;background-color:#222;transform:translateY(-100%);opacity:0;transition:opacity .1s linear 1s}.qkb-msg-bubble--user .qkb-msg-bubble__time{display:block}.qkb-msg-bubble-component{font-size:.875rem}.qkb-msg-bubble-component:hover~.qkb-msg-bubble__time{opacity:.8}.qkb-msg-bubble{padding-bottom:1rem}.qkb-msg-bubble.qkb-msg-bubble--bot .qkb-msg-bubble-component{margin-right:2.5rem;margin-left:.5rem}.qkb-msg-bubble.qkb-msg-bubble--user{justify-content:flex-end}.qkb-msg-bubble.qkb-msg-bubble--user .qkb-msg-bubble-component{margin-left:5rem}.qkb-msg-bubble-component__text{position:relative;padding:.75rem 1rem;border-radius:6px}.qkb-msg-bubble-component__options-wrapper{display:flex;flex-wrap:wrap}.qkb-mb-button-options__item{flex:0 0 auto}.qkb-mb-button-options__btn{display:block;overflow:hidden;position:relative;margin:.5rem .375rem 0 0;padding:.25rem 1rem;cursor:pointer;outline:0;border:1px solid transparent;border-radius:13px;color:inherit;font-size:.875rem;font-family:inherit;text-decoration:none;background-color:transparent;transition:background-color .15s linear,color .1s linear}.qkb-mb-button-options__btn span{position:relative;z-index:10}.qkb-msg-bubble__typing-indicator{position:relative;min-width:29px;opacity:.3}.qkb-msg-bubble__typing-indicator span{display:block;width:7px;height:7px;margin:0 auto;border-radius:50%}.qkb-msg-bubble__typing-indicator:after,.qkb-msg-bubble__typing-indicator:before{content:\"\";display:block;position:absolute;top:0;width:7px;height:7px;border-radius:50%}.qkb-msg-bubble__typing-indicator:before{left:0}.qkb-msg-bubble__typing-indicator:after{right:0}.qkb-board-action{position:relative;display:flex;flex:none;height:46px;padding:.45rem 1.25rem .5rem;border-top:1px solid #e6e6e6}.qkb-board-action--disabled:before{content:\"\";display:block;position:absolute;z-index:10;top:0;left:0;width:100%;height:100%;opacity:.2;cursor:not-allowed}.qkb-board-action__wrapper{display:flex;width:100%;background-color:#fff}.qkb-board-action__msg-box{position:relative;flex-grow:1;padding:0 1rem 0 0}.qkb-board-action__input{height:100%;width:100%;padding:0;font-size:.875rem;border:0;background-color:transparent;box-shadow:none;outline:0;color:#000}.qkb-board-action__input[disabled=disabled]{pointer-events:none}.qkb-board-action__disable-text{display:flex;align-items:center;position:absolute;top:0;left:0;height:100%;width:100%;background-color:#fff;font-size:.875rem}.qkb-board-action__extra{display:flex;flex:none;justify-content:center}.qkb-action-item{display:block;padding:0;outline:0;border:0;line-height:1;box-shadow:none;background-color:transparent;cursor:pointer;opacity:.6;transition:opacity .1s linear}.qkb-action-item:hover{opacity:1}.qkb-action-icon{width:16px;height:16px;line-height:1;fill:#666;color:#666;vertical-align:middle}.qkb-board-aciton--typing .qkb-action-item--send{opacity:1}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "VueChatBot", function() { return /* reexport */ BotUI; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b25048be-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BotUI.vue?vue&type=template&id=475a5b0d&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "qkb-bot-ui",
    class: _vm.uiClasses
  }, [_c('transition', {
    attrs: {
      "name": "qkb-fadeUp"
    }
  }, [_vm.botActive ? _c('div', {
    ref: "board",
    staticClass: "qkb-board",
    class: _vm.fullScreenMode ? 'qkb-board-full-screen apply-transition' : 'apply-transition'
  }, [_c('BoardHeader', {
    attrs: {
      "bot-title": _vm.optionsMain.botTitle,
      "full-screen-applied": _vm.fullScreenMode
    },
    on: {
      "close-bot": _vm.botToggle,
      "apply-full-screen-mode": _vm.applyFullScreenMode
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function () {
        return [_vm._t("header")];
      },
      proxy: true
    }], null, true)
  }), _c('BoardContent', {
    attrs: {
      "bot-typing": _vm.botTyping,
      "main-data": _vm.messages
    }
  }), _c('BoardAction', {
    attrs: {
      "input-disable": _vm.inputDisable,
      "input-placeholder": _vm.optionsMain.inputPlaceholder,
      "input-disable-placeholder": _vm.optionsMain.inputDisablePlaceholder
    },
    on: {
      "msg-send": _vm.sendMessage
    }
  })], 1) : _vm._e()]), _c('div', {
    staticClass: "qkb-bot-bubble"
  }, [_c('button', {
    staticClass: "qkb-bubble-btn",
    on: {
      "click": _vm.botToggle
    }
  }, [_vm._t("bubbleButton", function () {
    return [_c('transition', {
      attrs: {
        "name": "qkb-scaleUp"
      }
    }, [!_vm.botActive ? _c('BubbleIcon', {
      key: "1",
      staticClass: "qkb-bubble-btn-icon"
    }) : _c('CloseIcon', {
      key: "2",
      staticClass: "qkb-bubble-btn-icon qkb-bubble-btn-icon--close"
    })], 1)];
  })], 2)]), _c('AppStyle', {
    attrs: {
      "options": _vm.optionsMain
    }
  }), _c('div', {
    staticClass: "qkb-preload-image"
  }, [_vm.optionsMain.botAvatarImg ? _c('div', {
    staticClass: "qkb-msg-avatar__img"
  }) : _vm._e()])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/BotUI.vue?vue&type=template&id=475a5b0d&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/helpers/event-bus.js

const EventBus = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a();
/* harmony default export */ var event_bus = (EventBus);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b25048be-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board/Header.vue?vue&type=template&id=0488b77c&
var Headervue_type_template_id_0488b77c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "qkb-board-header"
  }, [_vm._t("header", function () {
    return [_c('div', {
      staticClass: "qkb-board-header__title"
    }, [_vm._v(_vm._s(_vm.botTitle))]), _c('div', {
      staticClass: "qkb-board-header__full-screen-icon",
      on: {
        "click": _vm.applyFullScreenMode
      }
    }, [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.fullScreenApplied,
        expression: "fullScreenApplied"
      }]
    }, [_c('i', {
      staticClass: "fa-solid fa-minimize"
    })]), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.fullScreenApplied,
        expression: "!fullScreenApplied"
      }]
    }, [_c('i', {
      staticClass: "fa-solid fa-maximize"
    })])])];
  })], 2);
};
var Headervue_type_template_id_0488b77c_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Board/Header.vue?vue&type=template&id=0488b77c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board/Header.vue?vue&type=script&lang=js&
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  data() {
    return {
      isFullScreen: false
    };
  },
  props: {
    botTitle: {
      type: String,
      default: "Chatbot"
    },
    fullScreenApplied: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    applyFullScreenMode: function () {
      this.$emit("apply-full-screen-mode", !this.fullScreenApplied);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Board/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var Board_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Board/Header.vue





/* normalize component */

var component = normalizeComponent(
  Board_Headervue_type_script_lang_js_,
  Headervue_type_template_id_0488b77c_render,
  Headervue_type_template_id_0488b77c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Header = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b25048be-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board/Content.vue?vue&type=template&id=298f3bd2&
var Contentvue_type_template_id_298f3bd2_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "boardContent",
    staticClass: "qkb-board-content"
  }, [_c('div', {
    ref: "boardBubbles",
    staticClass: "qkb-board-content__bubbles"
  }, [_vm._l(_vm.mainData, function (item, index) {
    return _c('message-bubble', {
      key: index,
      attrs: {
        "message": item
      }
    });
  }), _vm.botTyping ? _c('div', {
    staticClass: "qkb-board-content__bot-typing"
  }, [_vm._t("botTyping", function () {
    return [_c('message-typing')];
  })], 2) : _vm._e()], 2)]);
};
var Contentvue_type_template_id_298f3bd2_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Board/Content.vue?vue&type=template&id=298f3bd2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b25048be-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/Main.vue?vue&type=template&id=deaf5d2c&
var Mainvue_type_template_id_deaf5d2c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "qkb-msg-bubble",
    class: _vm.bubbleClass
  }, [_vm.message.agent === 'bot' ? _c('div', {
    staticClass: "qkb-msg-avatar"
  }, [_c('div', {
    staticClass: "qkb-msg-avatar__img"
  }, [_vm._v(" ")])]) : _vm._e(), _vm.componentType ? _c(_vm.componentType, {
    tag: "component",
    attrs: {
      "main-data": _vm.message
    }
  }) : _vm._e(), _vm.message.createdAt ? _c('div', {
    staticClass: "qkb-msg-bubble__time"
  }, [_vm._v(" " + _vm._s(_vm.message.createdAt) + " ")]) : _vm._e()], 1);
};
var Mainvue_type_template_id_deaf5d2c_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/MessageBubble/Main.vue?vue&type=template&id=deaf5d2c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b25048be-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/SingleText.vue?vue&type=template&id=e45a05ee&
var SingleTextvue_type_template_id_e45a05ee_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "qkb-msg-bubble-component qkb-msg-bubble-component--single-text"
  }, [_vm.mainData.type === 'text' ? _c('div', {
    staticClass: "qkb-msg-bubble-component__text"
  }, [_vm._v(" " + _vm._s(_vm.mainData.text) + " ")]) : _vm._e(), ['html', 'button'].includes(_vm.mainData.type) ? _c('div', {
    staticClass: "qkb-msg-bubble-component__text",
    domProps: {
      "innerHTML": _vm._s(_vm.mainData.text)
    }
  }) : _vm._e()]);
};
var SingleTextvue_type_template_id_e45a05ee_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/MessageBubble/SingleText.vue?vue&type=template&id=e45a05ee&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/SingleText.vue?vue&type=script&lang=js&
/* harmony default export */ var SingleTextvue_type_script_lang_js_ = ({
  props: {
    mainData: {
      type: Object
    }
  }
});
// CONCATENATED MODULE: ./src/components/MessageBubble/SingleText.vue?vue&type=script&lang=js&
 /* harmony default export */ var MessageBubble_SingleTextvue_type_script_lang_js_ = (SingleTextvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MessageBubble/SingleText.vue





/* normalize component */

var SingleText_component = normalizeComponent(
  MessageBubble_SingleTextvue_type_script_lang_js_,
  SingleTextvue_type_template_id_e45a05ee_render,
  SingleTextvue_type_template_id_e45a05ee_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SingleText = (SingleText_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b25048be-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/ButtonOptions.vue?vue&type=template&id=9b0aa996&
var ButtonOptionsvue_type_template_id_9b0aa996_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "qkb-msg-bubble-component qkb-msg-bubble-component--button-options"
  }, [_vm.mainData.type === 'text' ? _c('div', {
    staticClass: "qkb-msg-bubble-component__text"
  }, [_vm._v(" " + _vm._s(_vm.mainData.text) + " ")]) : _vm._e(), ['html', 'button'].includes(_vm.mainData.type) ? _c('div', {
    staticClass: "qkb-msg-bubble-component__text",
    domProps: {
      "innerHTML": _vm._s(_vm.mainData.text)
    }
  }) : _vm._e(), _c('div', {
    staticClass: "qkb-msg-bubble-component__options-wrapper"
  }, _vm._l(_vm.mainData.options, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "qkb-mb-button-options__item",
      class: {
        active: _vm.selectedItem === item.value
      }
    }, [item.action === 'postback' ? _c('button', {
      staticClass: "qkb-mb-button-options__btn",
      on: {
        "click": function ($event) {
          return _vm.selectOption(item);
        }
      }
    }, [_c('span', [_vm._v(_vm._s(item.text))])]) : _c('a', {
      staticClass: "qkb-mb-button-options__btn qkb-mb-button-options__url",
      attrs: {
        "target": "_blank",
        "href": item.value
      }
    }, [_c('span', [_vm._v(_vm._s(item.text))])])]);
  }), 0)]);
};
var ButtonOptionsvue_type_template_id_9b0aa996_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/MessageBubble/ButtonOptions.vue?vue&type=template&id=9b0aa996&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/ButtonOptions.vue?vue&type=script&lang=js&

/* harmony default export */ var ButtonOptionsvue_type_script_lang_js_ = ({
  props: {
    mainData: {
      type: Object
    }
  },
  data() {
    return {
      selectedItem: null
    };
  },
  methods: {
    selectOption(value) {
      this.selectedItem = value;
      event_bus.$emit("select-button-option", value);
    }
  }
});
// CONCATENATED MODULE: ./src/components/MessageBubble/ButtonOptions.vue?vue&type=script&lang=js&
 /* harmony default export */ var MessageBubble_ButtonOptionsvue_type_script_lang_js_ = (ButtonOptionsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MessageBubble/ButtonOptions.vue





/* normalize component */

var ButtonOptions_component = normalizeComponent(
  MessageBubble_ButtonOptionsvue_type_script_lang_js_,
  ButtonOptionsvue_type_template_id_9b0aa996_render,
  ButtonOptionsvue_type_template_id_9b0aa996_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ButtonOptions = (ButtonOptions_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/Main.vue?vue&type=script&lang=js&


/* harmony default export */ var Mainvue_type_script_lang_js_ = ({
  components: {
    SingleText: SingleText,
    ButtonOptions: ButtonOptions
  },
  props: {
    message: {
      type: Object
    }
  },
  computed: {
    bubbleClass() {
      return this.message.agent === "bot" ? "qkb-msg-bubble--bot" : "qkb-msg-bubble--user";
    },
    // Define the message type and return the specific component
    componentType() {
      let type = "";
      switch (this.message.type) {
        case "button":
          type = "ButtonOptions";
          break;
        default:
          type = "SingleText";
      }
      return type;
    }
  }
});
// CONCATENATED MODULE: ./src/components/MessageBubble/Main.vue?vue&type=script&lang=js&
 /* harmony default export */ var MessageBubble_Mainvue_type_script_lang_js_ = (Mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MessageBubble/Main.vue





/* normalize component */

var Main_component = normalizeComponent(
  MessageBubble_Mainvue_type_script_lang_js_,
  Mainvue_type_template_id_deaf5d2c_render,
  Mainvue_type_template_id_deaf5d2c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Main = (Main_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b25048be-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/Typing.vue?vue&type=template&id=3450fe14&
var Typingvue_type_template_id_3450fe14_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var Typingvue_type_template_id_3450fe14_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "qkb-msg-bubble qkb-msg-bubble--bot"
  }, [_c('div', {
    staticClass: "qkb-msg-avatar"
  }, [_c('div', {
    staticClass: "qkb-msg-avatar__img"
  }, [_vm._v(" ")])]), _c('div', {
    staticClass: "qkb-msg-bubble-component qkb-msg-bubble-component--typing"
  }, [_c('div', {
    staticClass: "qkb-msg-bubble-component__text"
  }, [_c('div', {
    staticClass: "qkb-msg-bubble__typing-indicator"
  }, [_c('span')])])])]);
}];

// CONCATENATED MODULE: ./src/components/MessageBubble/Typing.vue?vue&type=template&id=3450fe14&

// CONCATENATED MODULE: ./src/components/MessageBubble/Typing.vue

var script = {}


/* normalize component */

var Typing_component = normalizeComponent(
  script,
  Typingvue_type_template_id_3450fe14_render,
  Typingvue_type_template_id_3450fe14_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Typing = (Typing_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board/Content.vue?vue&type=script&lang=js&


/* harmony default export */ var Contentvue_type_script_lang_js_ = ({
  components: {
    MessageBubble: Main,
    MessageTyping: Typing
  },
  props: {
    mainData: {
      type: Array,
      required: true
    },
    botTyping: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.updateScroll();
  },
  watch: {
    mainData: function () {
      this.$nextTick(() => {
        this.updateScroll();
      });
    }
  },
  methods: {
    updateScroll() {
      const contentElm = this.$refs.boardContent;
      const offsetHeight = this.$refs.boardBubbles.offsetHeight;
      contentElm.scrollTop = offsetHeight;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Board/Content.vue?vue&type=script&lang=js&
 /* harmony default export */ var Board_Contentvue_type_script_lang_js_ = (Contentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Board/Content.vue





/* normalize component */

var Content_component = normalizeComponent(
  Board_Contentvue_type_script_lang_js_,
  Contentvue_type_template_id_298f3bd2_render,
  Contentvue_type_template_id_298f3bd2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Content = (Content_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b25048be-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board/Action.vue?vue&type=template&id=17b518b4&
var Actionvue_type_template_id_17b518b4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "qkb-board-action",
    class: _vm.actionClass
  }, [_c('div', {
    staticClass: "qkb-board-action__wrapper"
  }, [_c('div', {
    staticClass: "qkb-board-action__msg-box"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.messageText,
      expression: "messageText"
    }],
    ref: "qkbMessageInput",
    staticClass: "qkb-board-action__input",
    attrs: {
      "type": "text",
      "disabled": _vm.inputDisable,
      "placeholder": _vm.inputPlaceholder
    },
    domProps: {
      "value": _vm.messageText
    },
    on: {
      "keydown": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.sendMessage.apply(null, arguments);
      },
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.messageText = $event.target.value;
      }
    }
  }), _vm.inputDisablePlaceholder && _vm.inputDisable ? _c('div', {
    staticClass: "qkb-board-action__disable-text"
  }, [_c('span', [_vm._v(_vm._s(_vm.inputDisablePlaceholder))])]) : _vm._e()]), _c('div', {
    staticClass: "qkb-board-action__extra"
  }, [_vm._t("actions"), _c('button', {
    staticClass: "qkb-action-item qkb-action-item--send",
    on: {
      "click": _vm.sendMessage
    }
  }, [_vm._t("sendButton", function () {
    return [_c('IconSend', {
      staticClass: "qkb-action-icon qkb-action-icon--send"
    })];
  })], 2)], 2)])]);
};
var Actionvue_type_template_id_17b518b4_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Board/Action.vue?vue&type=template&id=17b518b4&

// CONCATENATED MODULE: ./src/assets/icons/send.svg
/* harmony default export */ var send = ({
  functional: true,
  render(_h, _vm) {
    const {
      _c,
      _v,
      data,
      children = []
    } = _vm;
    const {
      class: classNames,
      staticClass,
      style,
      staticStyle,
      attrs = {},
      ...rest
    } = data;
    return _c('svg', {
      class: [classNames, staticClass],
      style: [style, staticStyle],
      attrs: Object.assign({
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 488.721 488.721"
      }, attrs),
      ...rest
    }, children.concat([_c('path', {
      attrs: {
        "d": "M483.589 222.024a51.197 51.197 0 00-23.762-23.762L73.522 11.331C48.074-.998 17.451 9.638 5.122 35.086A51.2 51.2 0 003.669 76.44l67.174 167.902L3.669 412.261c-10.463 26.341 2.409 56.177 28.75 66.639a51.314 51.314 0 0018.712 3.624c7.754 0 15.408-1.75 22.391-5.12l386.304-186.982c25.45-12.326 36.089-42.949 23.763-68.398zM58.657 446.633c-8.484 4.107-18.691.559-22.798-7.925a17.065 17.065 0 01-.481-13.784l65.399-163.516h340.668L58.657 446.633zm42.121-219.358L35.379 63.759a16.64 16.64 0 014.215-18.773 16.537 16.537 0 0119.063-2.884l382.788 185.173H100.778z"
      }
    })]));
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board/Action.vue?vue&type=script&lang=js&

/* harmony default export */ var Actionvue_type_script_lang_js_ = ({
  components: {
    IconSend: send
  },
  props: {
    inputPlaceholder: {
      type: String
    },
    inputDisablePlaceholder: {
      type: String
    },
    inputDisable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      messageText: null
    };
  },
  computed: {
    actionClass() {
      const actionClasses = [];
      if (this.inputDisable) {
        actionClasses.push("qkb-board-action--disabled");
      }
      if (this.messageText) {
        actionClasses.push("qkb-board-aciton--typing");
      }

      // TODO: sending

      return actionClasses;
    }
  },
  mounted() {
    this.$refs.qkbMessageInput.focus();
  },
  methods: {
    sendMessage() {
      if (this.messageText) {
        this.$emit("msg-send", {
          text: this.messageText
        });
        this.messageText = null;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Board/Action.vue?vue&type=script&lang=js&
 /* harmony default export */ var Board_Actionvue_type_script_lang_js_ = (Actionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Board/Action.vue





/* normalize component */

var Action_component = normalizeComponent(
  Board_Actionvue_type_script_lang_js_,
  Actionvue_type_template_id_17b518b4_render,
  Actionvue_type_template_id_17b518b4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Action = (Action_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b25048be-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppStyle.vue?vue&type=template&id=0e94b5c2&
var AppStylevue_type_template_id_0e94b5c2_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "qkb-bot-style",
    staticStyle: {
      "display": "none"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.style)
    }
  });
};
var AppStylevue_type_template_id_0e94b5c2_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/AppStyle.vue?vue&type=template&id=0e94b5c2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppStyle.vue?vue&type=script&lang=js&
/* harmony default export */ var AppStylevue_type_script_lang_js_ = ({
  props: ["options"],
  computed: {
    style() {
      if (!this.options) {
        return "";
      }
      const {
        colorScheme,
        textColor,
        boardContentBg,
        bubbleBtnSize,
        botAvatarImg,
        botAvatarSize,
        inputDisableBg,
        msgBubbleBgBot,
        msgBubbleColorBot,
        msgBubbleBgUser,
        msgBubbleColorUser
      } = this.options;
      const styles = `
<style type="text/css" id="qkb-bot-style">
.qkb-bubble-btn {
  background-color: ${colorScheme};
  width: ${bubbleBtnSize}px;
  height: ${bubbleBtnSize}px;
}
.qkb-bubble-btn-icon {
  fill: ${textColor};
  color: ${textColor};
}
.qkb-board {
  bottom: ${bubbleBtnSize}px;
}
.qkb-board-header {
  background-color: ${colorScheme};
}
.qkb-board-header__title {
  color: ${textColor};
}
.qkb-board-header__full-screen-icon {
  color: ${textColor}
}
.qkb-board-content {
  background-color: ${boardContentBg};
}
${botAvatarImg ? `.qkb-msg-avatar {
      width: ${botAvatarSize}px;
      height: ${botAvatarSize}px;
    }
    .qkb-msg-avatar__img {
      background-image: url(${botAvatarImg});
    }` : ""}
.qkb-msg-bubble--bot .qkb-msg-bubble-component__text {
  color: ${msgBubbleColorBot};
  background-color: ${msgBubbleBgBot};
}
.qkb-msg-bubble__typing-indicator span,
.qkb-msg-bubble__typing-indicator::before,
.qkb-msg-bubble__typing-indicator::after {
  background-color: ${msgBubbleColorBot};
}
.qkb-mb-button-options__btn::before {
  background-color: ${msgBubbleBgUser};
}
.qkb-msg-bubble--user .qkb-msg-bubble-component__text {
  color: ${msgBubbleColorUser};
  background-color: ${msgBubbleBgUser};
}
.qkb-mb-button-options__btn {
  color: ${msgBubbleBgUser};
  border-color: ${msgBubbleBgUser};
}
.qkb-mb-button-options__btn:hover {
  color: ${msgBubbleColorUser};
  background-color: ${msgBubbleBgUser};
}
.qkb-board-action--disabled::before {
  background-color: ${inputDisableBg};
}
</style>
      `;
      return styles;
    }
  }
});
// CONCATENATED MODULE: ./src/components/AppStyle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppStylevue_type_script_lang_js_ = (AppStylevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/AppStyle.vue





/* normalize component */

var AppStyle_component = normalizeComponent(
  components_AppStylevue_type_script_lang_js_,
  AppStylevue_type_template_id_0e94b5c2_render,
  AppStylevue_type_template_id_0e94b5c2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AppStyle = (AppStyle_component.exports);
// CONCATENATED MODULE: ./src/assets/icons/bubble.svg
/* harmony default export */ var bubble = ({
  functional: true,
  render(_h, _vm) {
    const {
      _c,
      _v,
      data,
      children = []
    } = _vm;
    const {
      class: classNames,
      staticClass,
      style,
      staticStyle,
      attrs = {},
      ...rest
    } = data;
    return _c('svg', {
      class: [classNames, staticClass],
      style: [style, staticStyle],
      attrs: Object.assign({
        "height": "511pt",
        "viewBox": "1 -31 512 511",
        "width": "511pt",
        "xmlns": "http://www.w3.org/2000/svg"
      }, attrs),
      ...rest
    }, children.concat([_c('path', {
      attrs: {
        "d": "M128 448.5c-8.836 0-16-7.164-16-16v-80H48c-26.512 0-48-21.492-48-48v-256C0 21.988 21.488.5 48 .5h416c26.512 0 48 21.488 48 48v256c0 26.508-21.488 48-48 48H230.625l-91.313 91.313c-3 3-7.07 4.687-11.312 4.687zm-80-416c-8.836 0-16 7.164-16 16v256c0 8.836 7.164 16 16 16h80c8.836 0 16 7.164 16 16v57.375l68.688-68.688c3-3 7.07-4.687 11.312-4.687h240c8.836 0 16-7.164 16-16v-256c0-8.836-7.164-16-16-16zm0 0"
      }
    }), _c('path', {
      attrs: {
        "d": "M160 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32zm0 0M352 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32zm0 0M256 288.5c-52.996-.05-95.945-43.004-96-96 0-8.836 7.164-16 16-16s16 7.164 16 16c0 35.348 28.652 64 64 64s64-28.652 64-64c0-8.836 7.164-16 16-16s16 7.164 16 16c-.055 52.996-43.004 95.945-96 96zm0 0"
      }
    })]));
  }
});
// CONCATENATED MODULE: ./src/assets/icons/close.svg
/* harmony default export */ var icons_close = ({
  functional: true,
  render(_h, _vm) {
    const {
      _c,
      _v,
      data,
      children = []
    } = _vm;
    const {
      class: classNames,
      staticClass,
      style,
      staticStyle,
      attrs = {},
      ...rest
    } = data;
    return _c('svg', {
      class: [classNames, staticClass],
      style: [style, staticStyle],
      attrs: Object.assign({
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 512.001 512.001"
      }, attrs),
      ...rest
    }, children.concat([_c('path', {
      attrs: {
        "d": "M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z"
      }
    })]));
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BotUI.vue?vue&type=script&lang=js&







/* harmony default export */ var BotUIvue_type_script_lang_js_ = ({
  name: "VueBotUI",
  components: {
    BoardHeader: Header,
    BoardContent: Content,
    BoardAction: Action,
    BubbleIcon: bubble,
    CloseIcon: icons_close,
    AppStyle: AppStyle
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {};
      }
    },
    messages: {
      type: Array
    },
    botTyping: {
      type: Boolean,
      default: false
    },
    inputDisable: {
      type: Boolean,
      default: false
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      botActive: false,
      fullScreenMode: false,
      defaultOptions: {
        botTitle: "Chatbot",
        colorScheme: "#1b53d0",
        textColor: "#fff",
        bubbleBtnSize: 56,
        animation: true,
        boardContentBg: "#fff",
        botAvatarSize: 32,
        botAvatarImg: "http://placehold.it/200x200",
        msgBubbleBgBot: "#f0f0f0",
        msgBubbleColorBot: "#000",
        msgBubbleBgUser: "#4356e0",
        msgBubbleColorUser: "#fff",
        inputPlaceholder: "Message",
        inputDisableBg: "#fff",
        inputDisablePlaceholder: null
      }
    };
  },
  computed: {
    optionsMain() {
      return {
        ...this.defaultOptions,
        ...this.options
      };
    },
    // Add class to bot ui wrapper
    uiClasses() {
      let classes = [];
      if (this.optionsMain.animation) {
        classes.push("qkb-bot-ui--animate");
      }
      return classes;
    }
  },
  created() {
    this.initBot();
  },
  mounted() {
    event_bus.$on("select-button-option", this.selectOption);
  },
  beforeDestroy() {
    event_bus.$off("select-button-option");
  },
  methods: {
    initBot() {
      if (this.isOpen) {
        this.botActive = true;
      }
      this.$emit("init");
    },
    botToggle() {
      this.botActive = !this.botActive;
      if (this.botActive) {
        this.$emit("open");
        setTimeout(() => {
          this.$refs.board.classList.remove("apply-transition");
        }, 500);
      } else {
        // EventBus.$off('select-button-option')
        this.$emit("destroy");
      }
    },
    sendMessage(value) {
      this.$emit("msg-send", value);
    },
    applyFullScreenMode(value) {
      this.fullScreenMode = value;
      setTimeout(() => {
        this.$refs.board.classList.remove("apply-transition");
      }, 500);
    },
    selectOption(value) {
      this.$emit("msg-send", value);
    }
  }
});
// CONCATENATED MODULE: ./src/components/BotUI.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BotUIvue_type_script_lang_js_ = (BotUIvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/assets/scss/_app.scss?vue&type=style&index=0&prod&lang=scss&
var _appvue_type_style_index_0_prod_lang_scss_ = __webpack_require__("4647");

// CONCATENATED MODULE: ./src/components/BotUI.vue






/* normalize component */

var BotUI_component = normalizeComponent(
  components_BotUIvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BotUI = (BotUI_component.exports);
// CONCATENATED MODULE: ./src/vue-chat-bot.js

const Plugin = {
  install(Vue) {
    Vue.component("VueChatBot", BotUI);
    if (typeof window !== "undefined" && window.Vue) {
      window.Vue.use(Plugin);
    }
  }
};
/* harmony default export */ var vue_chat_bot = (Plugin);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vue_chat_bot);



/***/ })

/******/ });
});