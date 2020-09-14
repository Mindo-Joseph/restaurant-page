/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\n  box-sizing: border-box;\\n}\\n\\nnav {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\nbody {\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  padding: 0 1em;\\n}\\n\\n.main {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.introduction-section {\\n  display: flex;\\n  justify-content: space-evenly;\\n  padding-top: 3em;\\n}\\n\\n.intro-text {\\n  padding-top: 3em;\\n}\\n\\n.about {\\n  display: flex;\\n  margin-top: 3em;\\n  padding-left: 3em;\\n  justify-content: space-evenly;\\n}\\n\\n.about-text {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 30%;\\n}\\n\\n.contact {\\n  text-align: center;\\n  color: #ffc300;\\n}\\n\\n.form {\\n  max-width: 30rem;\\n  margin: 0 auto;\\n  padding: 1.5rem 2rem;\\n  border-radius: 8px;\\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\\n}\\n\\n.row {\\n  display: flex;\\n}\\n\\n.column {\\n  flex: 50%;\\n}\\n\\n.menu-group {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.item {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 3em;\\n}\\n\\n.tab-links {\\n  text-decoration: none;\\n  color: black;\\n}\\n\\ninput {\\n  background-repeat: no-repeat;\\n  background-position: right 1rem center;\\n  background-size: 0.75rem;\\n  margin-bottom: 0.75em;\\n}\\n\\nfooter {\\n  text-align: center;\\n}\\n\\n[type=text],\\n[type=email],\\nselect,\\ntextarea {\\n  display: block;\\n  padding: 0.5rem;\\n  background: transparent;\\n  width: 100%;\\n  max-width: 100%;\\n  border: 1px solid #cdcdcd;\\n  border-radius: 4px;\\n  font-size: 0.95rem;\\n}\\n\\n/* button */\\n.submit-btn {\\n  display: inline-block;\\n  vertical-align: middle;\\n  white-space: nowrap;\\n  cursor: pointer;\\n  margin: 0.25rem 0;\\n  padding: 0.5rem 1rem;\\n  border: 1px solid #1e6bd6;\\n  border-radius: 5px;\\n  background: #1e6bd6;\\n  color: white;\\n  font-weight: 600;\\n  text-decoration: none;\\n  font-family: sans-serif;\\n  font-size: 0.95rem;\\n}\\n\\n.about img {\\n  max-width: 20%;\\n  margin-right: 3em;\\n  max-height: 20%;\\n}\\n\\n.intro-text > * {\\n  margin: 0;\\n}\\n\\nnav h4 {\\n  color: #ffc300;\\n  font-weight: bold;\\n  align-self: flex-start;\\n  margin: 0;\\n  padding-top: 0.5em;\\n  font-size: 1.5em;\\n}\\n\\n.links ul {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.links ul li {\\n  list-style-type: none;\\n  padding-right: 1em;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contactPage = () => {\n  const contactdiv = document.createElement('div');\n  contactdiv.className = 'contact';\n  const headTag = document.createElement('h1');\n  headTag.textContent = 'Contact Us';\n  contactdiv.appendChild(headTag);\n  const content = document.getElementById('content');\n  content.appendChild(contactdiv);\n\n  const messageForm = document.createElement('form');\n  messageForm.className = 'form';\n  const name = document.createElement('input');\n  name.setAttribute('type', 'text');\n  name.setAttribute('placeholder', 'full name');\n  const email = document.createElement('input');\n  email.setAttribute('type', 'email');\n  email.setAttribute('placeholder', 'Your email address');\n  const text = document.createElement('input');\n  text.setAttribute('type', 'text');\n  text.setAttribute('placeholder', 'Your message');\n  const submit = document.createElement('button');\n  submit.className = 'submit-btn';\n  submit.textContent = 'Submit';\n  messageForm.appendChild(name);\n  messageForm.appendChild(email);\n  messageForm.appendChild(text);\n  messageForm.appendChild(submit);\n\n  const footer = document.createElement('footer');\n  footer.textContent = 'Eatery Restaurant. All rights reserved';\n\n  content.appendChild(messageForm);\n  content.appendChild(footer);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (contactPage);\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/img/framedfood.jpg":
/*!********************************!*\
  !*** ./src/img/framedfood.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"dfd3fa5f566fdea61580abe00d70d9bc.jpg\");\n\n//# sourceURL=webpack:///./src/img/framedfood.jpg?");

/***/ }),

/***/ "./src/img/plate.jpeg":
/*!****************************!*\
  !*** ./src/img/plate.jpeg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2fddeb0645ee463ba694260f27d952de.jpeg\");\n\n//# sourceURL=webpack:///./src/img/plate.jpeg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nObject(_pageload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst renderContent = (event) => {\n  const content = document.querySelector('#content');\n  while (content.hasChildNodes()) {\n    content.removeChild(content.lastChild);\n  }\n  switch (event.target.innerHTML) {\n    case 'Home':\n      Object(_pageload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      break;\n    case 'Menu':\n      Object(_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      break;\n    case 'Contact':\n      Object(_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n      break;\n    default:\n      Object(_pageload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  }\n};\nconst tabs = document.querySelectorAll('.tab-links');\ntabs.forEach((tab) => {\n  tab.addEventListener('click', (event) => {\n    renderContent(event);\n  });\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createmenudishes = (arr, prices, parent) => {\n  for (let i = 0; i < arr.length; i += 1) {\n    const item = document.createElement('div');\n    item.className = 'item';\n    const foodname = document.createElement('p');\n    foodname.textContent = arr[i];\n    item.appendChild(foodname);\n    const foodprice = document.createElement('p');\n    foodprice.textContent = `USD: ${prices[i]}`;\n    item.appendChild(foodprice);\n    parent.appendChild(item);\n  }\n};\n\nconst menuPage = () => {\n  const restaurantName = document.createElement('h1');\n  restaurantName.textContent = 'Eatery Menu';\n\n  const menuItems = document.createElement('div');\n  menuItems.className = 'row';\n  const leftSide = document.createElement('div');\n  leftSide.className = 'column';\n\n  const foods = [\n    ['Expresso', 'Americano', 'Machiato', 'Cappuccino'],\n    ['French Fries', 'Italian Pizza', 'Spaghetti', 'Burger'],\n    ['Olong', 'English BreakFast', 'Jasmine Green', 'Emerald Spring', 'King Crimson', 'Blue Crane'],\n    ['Soft Drink', 'Banana Berry', 'Tropical Passion', 'Hawaian Breeze', 'Sunset', 'Apple Crush'],\n  ];\n  const prices = [\n    [3.00, 4.00, 3.50, 5.00],\n    [5.00, 17.00, 12.00, 8.00],\n    [3.00, 4.00, 3.00, 3.00, 5.00, 5.50],\n    [3.00, 2.00, 4.00, 2.00, 3.00, 3.00],\n  ];\n\n  const menugroup1 = document.createElement('div');\n  menugroup1.className = 'menu-group';\n  menugroup1.textContent = 'Coffee';\n\n  createmenudishes(foods[0], prices[0], menugroup1);\n\n  const menugroup2 = document.createElement('div');\n  menugroup2.className = 'menu-group';\n  menugroup2.textContent = 'Food';\n\n  createmenudishes(foods[1], prices[1], menugroup2);\n  leftSide.appendChild(menugroup1);\n  leftSide.appendChild(menugroup2);\n\n  const rightSide = document.createElement('div');\n  rightSide.className = 'column';\n  const menugroup3 = document.createElement('div');\n  menugroup3.className = 'menu-group';\n  menugroup3.textContent = 'Tea';\n\n  createmenudishes(foods[2], prices[2], menugroup3);\n  const menugroup4 = document.createElement('div');\n  menugroup4.className = 'menu-group';\n  menugroup4.textContent = 'Drinks';\n\n  createmenudishes(foods[3], prices[3], menugroup4);\n  rightSide.appendChild(menugroup3);\n  rightSide.appendChild(menugroup4);\n  menuItems.appendChild(leftSide);\n  menuItems.appendChild(rightSide);\n  const content = document.getElementById('content');\n  content.appendChild(restaurantName);\n  content.appendChild(menuItems);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (menuPage);\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_plate_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/plate.jpeg */ \"./src/img/plate.jpeg\");\n/* harmony import */ var _img_framedfood_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/framedfood.jpg */ \"./src/img/framedfood.jpg\");\n\n\n\nconst addcontents = () => {\n  // main section\n  const main = document.createElement('main');\n  main.className = 'main';\n\n  const introSection = document.createElement('div');\n  introSection.className = 'introduction-section';\n  const introText = document.createElement('div');\n  introText.className = 'intro-text';\n  const tagline = document.createElement('h1');\n  tagline.textContent = 'ENJOY DELICIOUS FOOD';\n  const supportText = document.createElement('p');\n  supportText.textContent = 'Voted the best restaurant in town';\n  introText.appendChild(tagline);\n  introText.appendChild(supportText);\n  introSection.appendChild(introText);\n  // Introduction image\n\n  const introImage = document.createElement('div');\n  introImage.className = 'intro-image';\n  const plate = new Image();\n  plate.src = _img_plate_jpeg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  introImage.appendChild(plate);\n  introSection.appendChild(introImage);\n  // About section\n  const about = document.createElement('div');\n  about.className = 'about';\n  const framedImage = new Image();\n  framedImage.src = _img_framedfood_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  about.appendChild(framedImage);\n  const aboutText = document.createElement('div');\n  aboutText.className = 'about-text';\n  const paragraph = document.createElement('p');\n  paragraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla\n  lobortis, lacus eu ultrices ultrices, nisi leo pretium risus, eu\n  elementum velit erat et metus. Nunc nec placerat erat. Vestibulum\n  interdum eleifend quam, ut pulvinar leo dictum in. Praesent\n  placerat porta mi vel suscipit. Fusce iaculis vulputate sapien id\n  tincidunt. Maecenas lobortis sollicitudin mi ut`;\n  aboutText.appendChild(paragraph);\n  about.appendChild(aboutText);\n  const content = document.getElementById('content');\n  main.appendChild(introSection);\n  main.appendChild(about);\n  content.appendChild(main);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (addcontents);\n\n\n//# sourceURL=webpack:///./src/pageload.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });