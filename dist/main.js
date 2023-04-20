/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Dongle:wght@700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\n#navbar {\\n  list-style: none;\\n  max-width: 800px;\\n  margin: 0 auto;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n\\n#navbar img {\\n  height: 100px;\\n  width: auto;\\n}\\n\\n#navbar a {\\n  text-decoration: none;\\n  font-weight: 600;\\n  color: black;\\n  transition: all 0.3s linear;\\n}\\n\\n#navbar a:hover {\\n  color: #e06d06;\\n}\\n\\n#navbar a.active {\\n  font-weight: 700;\\n  color: #e06d06;\\n  border-bottom: 2px solid #e06d06;\\n}\\n\\n#meals-count {\\n  color: #e06d06;\\n}\\n\\n#navbar a > #meals-count {\\n  color: black;\\n}\\n\\n#popup {\\n  width: 90vw;\\n  max-width: 1000px;\\n  margin: 0 auto;\\n  border: 5px solid black;\\n  padding: 10px;\\n  display: none;\\n  flex-direction: column;\\n  gap: 20px;\\n}\\n\\n#close-popup {\\n  width: fit-content;\\n  font-family: 'Dongle', sans-serif;\\n  margin-left: auto;\\n  margin-right: 40px;\\n  font-weight: 600;\\n  font-size: 3rem;\\n  cursor: pointer;\\n}\\n\\n#close-popup:hover {\\n  color: red;\\n}\\n\\n#popup img {\\n  max-height: 300px;\\n}\\n\\n#meal-name {\\n  font-size: 1.4rem;\\n  color: #e06d06;\\n  text-decoration: underline;\\n}\\n\\n.bold {\\n  font-weight: 600;\\n  font-style: italic;\\n}\\n\\n#preparation-instructions p {\\n  max-width: 60ch;\\n  margin: 0 auto;\\n  text-align: center;\\n}\\n\\n#preparation-heading {\\n  text-align: center;\\n  margin-bottom: 10px;\\n}\\n\\nform {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n  width: 100%;\\n}\\n\\nform label {\\n  display: none;\\n}\\n\\nform input,\\ntextarea {\\n  border: 3px solid black;\\n  padding: 5px 10px;\\n}\\n\\nform button {\\n  width: fit-content;\\n  padding: 10px;\\n  font-weight: 600;\\n  cursor: pointer;\\n  box-shadow: 5px 4px 3px black;\\n  transition: all 0.1s ease;\\n}\\n\\nform button:hover {\\n  background-color: #e06d06;\\n  outline: none;\\n  border: none;\\n  padding: 12px;\\n  border-radius: 6px;\\n}\\n\\n#previous-comments {\\n  margin-top: 10px;\\n  list-style: none;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n}\\n\\n#items {\\n  display: flex;\\n  flex-wrap: wrap;\\n  margin: 50px 10%;\\n  gap: 10%;\\n  justify-content: center;\\n  flex-direction: row;\\n}\\n\\n.item {\\n  width: 20%;\\n  margin-bottom: 50px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n  height: 400px;\\n}\\n\\n.images {\\n  width: 100%;\\n  height: auto;\\n}\\n\\n.images:hover {\\n  cursor: pointer;\\n}\\n\\n.details {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.likes {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.comments {\\n  padding-block: 5px;\\n  transition: all 0.3s ease-in-out;\\n  transition-delay: 250ms;\\n}\\n\\n.btn-likes:hover,\\n.comments:hover {\\n  cursor: pointer;\\n}\\n\\n.comments:hover {\\n  background: #e06d06;\\n  border-radius: 5px;\\n  font-weight: bold;\\n  box-shadow: 1px 2px 4px olive;\\n}\\n\\nfooter {\\n  border-top: 2px solid black;\\n  margin: 10px 10%;\\n  padding: 30px;\\n}\\n\\n@media only screen and (min-width: 768px) {\\n  #popup {\\n    align-items: center;\\n  }\\n\\n  #data {\\n    display: flex;\\n    flex-wrap: wrap;\\n    width: 500px;\\n    gap: 20px;\\n    margin: 0 auto;\\n    justify-content: center;\\n  }\\n\\n  form {\\n    max-width: 500px;\\n  }\\n\\n  textarea {\\n    min-height: 100px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/modules/functions.js\");\n/* harmony import */ var _modules_callApi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/callApi.js */ \"./src/modules/callApi.js\");\n\n\n\n\n\nconst logoContainer = document.querySelector('#logoContainer');\nlogoContainer.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__;\nconst itemsContainer = document.querySelector('#items');\n\n(async () => {\n  await (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_2__.items)(itemsContainer);\n  const commentsButtons = document.querySelectorAll('.comments');\n  commentsButtons.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      const mealContainer = btn.parentNode;\n      const id = mealContainer.querySelector('.images').dataset.mealId;\n      (0,_modules_callApi_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(id);\n    });\n  });\n})();\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/callApi.js":
/*!********************************!*\
  !*** ./src/modules/callApi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayMealData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayMealData.js */ \"./src/modules/displayMealData.js\");\n\n\nconst callApi = async (id) => {\n  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);\n  const json = await res.json();\n  const { meals } = json;\n  const meal = meals[0];\n  (0,_displayMealData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(meal);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callApi);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/callApi.js?");

/***/ }),

/***/ "./src/modules/countComments.js":
/*!**************************************!*\
  !*** ./src/modules/countComments.js ***!
  \**************************************/
/***/ ((module) => {

eval("const countComments = (container) => {\n  const comments = container.querySelectorAll('li');\n  const noOfComments = Array.from(comments).length;\n  return noOfComments;\n};\n\nmodule.exports = countComments;\n\n//# sourceURL=webpack://webpack-demo/./src/modules/countComments.js?");

/***/ }),

/***/ "./src/modules/displayMealData.js":
/*!****************************************!*\
  !*** ./src/modules/displayMealData.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popupFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popupFunctions.js */ \"./src/modules/popupFunctions.js\");\n/* harmony import */ var _showComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showComments.js */ \"./src/modules/showComments.js\");\n\n\n\nconst popup = document.querySelector('#popup');\nconst mealsContainer = document.querySelector('#items');\n\nconst displayMealData = ({\n  idMeal, strMeal, strCategory, strArea, strInstructions, strYoutube, strMealThumb,\n}) => {\n  const instructions = strInstructions.split('\\r\\n')\n    .filter((each) => each !== '');\n\n  const data = `\n        <div id=\"close-popup\">X</div>\n        <img src=${strMealThumb} alt=${strMeal}>\n        <h3 id=\"meal-name\">${strMeal}</h3>\n        <div id=\"data\">\n          <p><span class=\"bold\">Id:</span> ${idMeal}</p>\n          <p><span class=\"bold\">Category:</span> ${strCategory}</p>\n          <p><span class=\"bold\">Origin:</span> ${strArea}</p>\n          <p><span class=\"bold\">Youtube:</span> <a href=${strYoutube}>Link</a></p>\n        </div>\n        <div id=\"preparation-instructions\">\n          <div>\n            <h2 id=\"preparation-heading\">Preparation Instructions</h2>\n            ${instructions.map((instruction) => `<p>${instruction}</p>`)}\n          </div>\n        </div>\n        <div>\n          <h3>Comments (<span id=\"comments-count\"></span>)</h3>\n          <ul id=\"previous-comments\">\n          </ul>\n        </div>\n        <form data-id=${idMeal}>\n          <h3 id=\"form-heading\">Add a comment</h3>\n          <label for=\"name\">Your name</label>\n          <input type=\"text\" id=\"name\" minlength=\"3\" placeholder=\"Your name\" required> \n          <label for=\"insights\">Your Insights</label>\n          <textarea id=\"insights\" minlength=\"3\" placeholder=\"Your insights\" minlength=\"3\" required></textarea>\n          <button type=\"Submit\">Comment</button>\n        </form>\n  `;\n  popup.innerHTML = data;\n  mealsContainer.style.display = 'none';\n  popup.style.display = 'flex';\n  (0,_popupFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_showComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(idMeal);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMealData);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/displayMealData.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"items\": () => (/* binding */ items)\n/* harmony export */ });\n/* harmony import */ var _images_heart_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/heart.svg */ \"./src/images/heart.svg\");\n\n\nconst addLike = async () => {\n  const LikedArr = JSON.parse(localStorage.getItem('liked')) || [];\n\n  document.querySelectorAll('.btn-likes').forEach((element) => {\n    element.addEventListener('click', async () => {\n      const liked = await element.dataset.liked;\n      // adding like\n      if (liked === 'true' || LikedArr.includes(element.dataset.btnLike)) {\n        return;\n      }\n      const data = await fetch(\n        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q8H2szMFEsTpJoVpaCnr/likes',\n        {\n          method: 'POST',\n          body: JSON.stringify({\n            item_id: element.dataset.btnLike,\n          }),\n          headers: {\n            'Content-type': 'application/json; charset=UTF-8',\n          },\n        },\n      );\n      const messageJson = await data.text();\n      if (messageJson === 'Created') {\n        const idFormat = `#d-${element.dataset.btnLike}`;\n        const lDisplay = document.querySelector(idFormat);\n        const totalLikes = parseInt(lDisplay.dataset.mealLikes, 10) + 1;\n        lDisplay.innerHTML = `${totalLikes}Likes`;\n        lDisplay.dataset.mealLikes = totalLikes;\n      }\n      element.dataset.liked = true;\n      LikedArr.push(element.dataset.btnLike);\n      localStorage.setItem('liked', JSON.stringify(LikedArr));\n    });\n  });\n};\n\nconst likess = async () => {\n  const data = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q8H2szMFEsTpJoVpaCnr/likes',\n    {\n      method: 'GET',\n      redirect: 'follow',\n    },\n  );\n  const messageJson = await data.text();\n  const message = await JSON.parse(messageJson);\n  return message;\n};\n\nconst countHomeItems = (where) => {\n  const items = where.querySelectorAll('.item');\n  return items.length;\n};\n\nconst items = async (where) => {\n  const allLike = await likess();\n  let innerHtml = '';\n  const data = await fetch(\n    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood',\n    {\n      method: 'GET',\n      redirect: 'follow',\n    },\n  );\n  const messageJson = await data.text();\n  const message = await JSON.parse(messageJson);\n  message.meals.forEach((element) => {\n    const { strMeal, strMealThumb, idMeal } = element;\n    const like = allLike.filter((lik) => lik.item_id === idMeal);\n    let tLike = 0;\n    if (like[0] !== undefined) {\n      tLike = like[0].likes;\n    }\n    innerHtml += `<div class =\"item\">\n    <img class=\"images\" data-meal-id=\"${idMeal}\" src=\"${strMealThumb}\" />\n        <div class=\"details\">\n            <h3>${strMeal}</h3>\n            <div class=\"likes\">\n                <img class=\"btn-likes\" data-btn-like=\"${idMeal}\" data-liked=\"false\" src=\"${_images_heart_svg__WEBPACK_IMPORTED_MODULE_0__}\">\n                <p class=\"d-likes\" data-meal-likes=\"${tLike}\" id=\"d-${idMeal}\">${tLike}Likes</p>\n            </div>\n        </div>\n        <button class=\"comments\">Comments</button>\n    </div>`;\n  });\n\n  where.innerHTML = innerHtml;\n  document.querySelector('#meals-count').innerHTML = countHomeItems(where);\n  await addLike();\n};\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/functions.js?");

/***/ }),

/***/ "./src/modules/popupFunctions.js":
/*!***************************************!*\
  !*** ./src/modules/popupFunctions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _postComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postComment.js */ \"./src/modules/postComment.js\");\n\n\nconst popupFunctions = () => {\n  const form = document.querySelector('form');\n  const close = document.querySelector('#close-popup');\n\n  const closepopup = (e) => {\n    const popup = e.target.parentNode;\n    const mealsContainer = document.querySelector('#items');\n\n    popup.style.display = 'none';\n    mealsContainer.style.display = 'flex';\n  };\n\n  form.addEventListener('submit', _postComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  close.addEventListener('click', closepopup);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupFunctions);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/popupFunctions.js?");

/***/ }),

/***/ "./src/modules/postComment.js":
/*!************************************!*\
  !*** ./src/modules/postComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showComments.js */ \"./src/modules/showComments.js\");\n\n\nconst postComment = async (e) => {\n  e.preventDefault();\n  const form = e.target;\n  const name = form.querySelector('#name')\n    .value\n    .split(' ')\n    .map((each) => each.split('').map((char, i) => {\n      if (i === 0) {\n        return char.toUpperCase();\n      }\n      return char.toLowerCase();\n    }).join(''))\n    .join(' ');\n  const message = form.querySelector('#insights').value;\n  const { id } = form.dataset;\n\n  try {\n    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q8H2szMFEsTpJoVpaCnr/comments', {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n        username: name,\n        comment: message,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    (0,_showComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\n  } catch (err) {\n    throw new Error(err);\n  }\n  form.reset();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/postComment.js?");

/***/ }),

/***/ "./src/modules/showComments.js":
/*!*************************************!*\
  !*** ./src/modules/showComments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _countComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countComments.js */ \"./src/modules/countComments.js\");\n/* harmony import */ var _countComments_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_countComments_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* eslint camelcase: [\"error\", {ignoreDestructuring: true}] */\nconst showComments = async (id) => {\n  const commentsContainer = document.querySelector('#previous-comments');\n  const noOfComments = document.querySelector('#comments-count');\n\n  try {\n    const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q8H2szMFEsTpJoVpaCnr/comments?item_id=${id}`);\n    const comments = await res.json();\n    commentsContainer.innerHTML = '';\n    commentsContainer.style.color = 'black';\n    comments.forEach(({\n      comment, creation_date, username,\n    }) => {\n      const li = document.createElement('li');\n      li.textContent = `${(new Date(creation_date)).toLocaleDateString()} ${username}: ${comment}`;\n      commentsContainer.appendChild(li);\n    });\n  } catch (err) {\n    commentsContainer.textContent = 'Add a comment!';\n    commentsContainer.style.color = 'grey';\n  }\n\n  noOfComments.innerHTML = _countComments_js__WEBPACK_IMPORTED_MODULE_0___default()(commentsContainer);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showComments);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/showComments.js?");

/***/ }),

/***/ "./src/images/heart.svg":
/*!******************************!*\
  !*** ./src/images/heart.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/27cf625b15dd614828ad.svg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/heart.svg?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c329fbb1cf48ffc885a1.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;