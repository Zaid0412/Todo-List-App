/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/warning-icon.png */ \"./src/imgs/warning-icon.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\r\n    transition: all .2s ease-out;\r\n}\r\n\r\nbody{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'DM Sans', sans-serif;\r\n    background-image: linear-gradient( 102.7deg, rgba(253,218,255,1) 8.2%, rgba(223,173,252,1) 19.6%, rgba(173,205,252,1) 36.8%, rgba(173,252,244,1) 73.2%, rgba(202,248,208,1) 90.9% );\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    color: #455963;\r\n\r\n    display: grid;\r\n    justify-content: center;\r\n    align-content: center;\r\n}\r\n\r\n#container{\r\n    background-color: white;\r\n    box-shadow: 0 20px 80px rgba(0, 0, 0, 0.3);\r\n    border-radius: 15px;\r\n    width: 40vw;\r\n    margin-top: 15vh;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-self: center;\r\n}\r\n\r\n.header{\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr;\r\n}\r\n\r\n.date{\r\n    font-weight: 700;\r\n    font-size: 1.8em;\r\n    padding: 32px 32px 0 32px;\r\n}\r\n\r\n.task-types{\r\n    display: flex;\r\n    /* gap: 1em; */\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    padding-right: 32px;\r\n    padding-left: 32px;\r\n    margin-top: -20px;\r\n}\r\n\r\n.task-num{\r\n    opacity: 75%;\r\n    font-size: 1em;\r\n    padding: 10px;\r\n    padding-top: 0.4em;\r\n    padding-left: 0;\r\n    margin-right: auto;\r\n\r\n}\r\n\r\n.task-types button{\r\n    color: #455963;\r\n    background-color: transparent;\r\n    border-radius: 75px;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    opacity: 75%;\r\n    font-size: 1em;\r\n    padding: 2px 15px;\r\n    margin-left: 0.6em;\r\n    transition: all .2s ease-out;\r\n}\r\n\r\n.task-types button.active{\r\n    color: white;\r\n    background-color: #455963;\r\n}\r\n\r\n.todo-input{\r\n    border: none;\r\n    outline: none;\r\n    box-shadow: 0 -1px 0 #C1C5D2 inset;\r\n    color: #455963;\r\n    padding: 10px 20px;\r\n    /* margin-bottom: 20px; */\r\n    font-size: 1.2em;\r\n}\r\n\r\n.todo-input::placeholder{\r\n    color: #455963;\r\n    opacity: 60%;\r\n    /* font-weight: 700; */\r\n}\r\n\r\n /* Todos Display */\r\n\r\n.todos-display{\r\n    min-height: 120px;\r\n    max-height: 30vh;\r\n    /* padding: 10px 20px 0 20px; */\r\n    overflow: hidden auto;\r\n}\r\n\r\n.todos-display.isEmpty{\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 80px;\r\n    text-align: center;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.todos-display.isEmpty h2{\r\n    opacity: 75%;\r\n}\r\n\r\n.todos-display:last-child{\r\n    box-shadow: none;\r\n}\r\n\r\n /* Checkbox Styles */\r\n\r\n \r\n.icon{\r\n    width: 15px;\r\n    height: auto;\r\n    justify-self: end;\r\n    align-self: flex-end;\r\n    margin-left: auto;\r\n    display: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.icon:hover{\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n  .checkbox-wrapper-11 {\r\n    --text: #414856;\r\n    --check: #4F29F0;\r\n    --disabled: #C3C8DE;\r\n    --border-radius: 10px;\r\n    /* border-radius: var(--border-radius); */\r\n    position: relative;\r\n    padding: 5px;\r\n    display: flex;\r\n    grid-template-columns: 30px auto;\r\n    align-items: center;\r\n    padding: 10px 20px 10px 20px;\r\n    /* border-top: 1px solid #455963; */\r\n    box-shadow: 0 -1px 0 #e2e4ea inset;\r\n  }\r\n\r\n  .checkbox-wrapper-11:hover{\r\n    background-color: #f6fbff;\r\n  }\r\n\r\n  .checkbox-wrapper-11:hover .icon{\r\n    display: block;\r\n  }\r\n\r\n  .checkbox-wrapper-11 label {\r\n    color: var(--text);\r\n    position: relative;\r\n    cursor: pointer;\r\n    display: grid;\r\n    align-items: center;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    transition: color 0.3s ease;\r\n  }\r\n  .checkbox-wrapper-11 label::before,\r\n  .checkbox-wrapper-11 label::after {\r\n    content: \"\";\r\n    position: absolute;\r\n  }\r\n  .checkbox-wrapper-11 label::before {\r\n    height: 2px;\r\n    width: 8px;\r\n    left: -27px;\r\n    background: var(--check);\r\n    border-radius: 2px;\r\n    transition: background 0.3s ease;\r\n  }\r\n  .checkbox-wrapper-11 label:after {\r\n    height: 4px;\r\n    width: 4px;\r\n    top: 8px;\r\n    left: -25px;\r\n    border-radius: 50%;\r\n  }\r\n  .checkbox-wrapper-11 input[type=checkbox] {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    -moz-appearance: none;\r\n    position: relative;\r\n    height: 15px;\r\n    width: 15px;\r\n    outline: none;\r\n    border: 0;\r\n    margin: 0 15px 0 0;\r\n    cursor: pointer;\r\n    background: var(--background);\r\n    display: grid;\r\n    align-items: center;\r\n  }\r\n  .checkbox-wrapper-11 input[type=checkbox]::before, .checkbox-wrapper-11 input[type=checkbox]::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 2px;\r\n    top: auto;\r\n    background: var(--check);\r\n    border-radius: 2px;\r\n  }\r\n  .checkbox-wrapper-11 input[type=checkbox]::before {\r\n    width: 0px;\r\n    right: 60%;\r\n    transform-origin: right bottom;\r\n  }\r\n  .checkbox-wrapper-11 input[type=checkbox]::after {\r\n    width: 0px;\r\n    left: 40%;\r\n    transform-origin: left bottom;\r\n  }\r\n  .checkbox-wrapper-11 input[type=checkbox]:checked::before {\r\n    -webkit-animation: check-01-11 0.4s ease forwards;\r\n            animation: check-01-11 0.4s ease forwards;\r\n  }\r\n  .checkbox-wrapper-11 input[type=checkbox]:checked::after {\r\n    -webkit-animation: check-02-11 0.4s ease forwards;\r\n            animation: check-02-11 0.4s ease forwards;\r\n  }\r\n  .checkbox-wrapper-11 input[type=checkbox]:checked + label {\r\n    color: var(--disabled);\r\n    -webkit-animation: move-11 0.3s ease 0.1s forwards;\r\n            animation: move-11 0.3s ease 0.1s forwards;\r\n  }\r\n  .checkbox-wrapper-11 input[type=checkbox]:checked + label::before {\r\n    background: var(--disabled);\r\n    -webkit-animation: slice-11 0.4s ease forwards;\r\n            animation: slice-11 0.4s ease forwards;\r\n  }\r\n  .checkbox-wrapper-11 input[type=checkbox]:checked + label::after {\r\n    -webkit-animation: firework-11 0.5s ease forwards 0.1s;\r\n            animation: firework-11 0.5s ease forwards 0.1s;\r\n  }\r\n\r\n  @-webkit-keyframes move-11 {\r\n    50% {\r\n      padding-left: 8px;\r\n      padding-right: 0px;\r\n    }\r\n    100% {\r\n      padding-right: 4px;\r\n    }\r\n  }\r\n\r\n  @keyframes move-11 {\r\n    50% {\r\n      padding-left: 8px;\r\n      padding-right: 0px;\r\n    }\r\n    100% {\r\n      padding-right: 4px;\r\n    }\r\n  }\r\n  @-webkit-keyframes slice-11 {\r\n    60% {\r\n      width: 100%;\r\n      left: 4px;\r\n    }\r\n    100% {\r\n      width: 100%;\r\n      left: -2px;\r\n      padding-left: 0;\r\n    }\r\n  }\r\n  @keyframes slice-11 {\r\n    60% {\r\n      width: 100%;\r\n      left: 4px;\r\n    }\r\n    100% {\r\n      width: 100%;\r\n      left: -2px;\r\n      padding-left: 0;\r\n    }\r\n  }\r\n  @-webkit-keyframes check-01-11 {\r\n    0% {\r\n      width: 4px;\r\n      top: auto;\r\n      transform: rotate(0);\r\n    }\r\n    50% {\r\n      width: 0px;\r\n      top: auto;\r\n      transform: rotate(0);\r\n    }\r\n    51% {\r\n      width: 0px;\r\n      top: 8px;\r\n      transform: rotate(45deg);\r\n    }\r\n    100% {\r\n      width: 5px;\r\n      top: 8px;\r\n      transform: rotate(45deg);\r\n    }\r\n  }\r\n  @keyframes check-01-11 {\r\n    0% {\r\n      width: 4px;\r\n      top: auto;\r\n      transform: rotate(0);\r\n    }\r\n    50% {\r\n      width: 0px;\r\n      top: auto;\r\n      transform: rotate(0);\r\n    }\r\n    51% {\r\n      width: 0px;\r\n      top: 8px;\r\n      transform: rotate(45deg);\r\n    }\r\n    100% {\r\n      width: 5px;\r\n      top: 8px;\r\n      transform: rotate(45deg);\r\n    }\r\n  }\r\n  @-webkit-keyframes check-02-11 {\r\n    0% {\r\n      width: 4px;\r\n      top: auto;\r\n      transform: rotate(0);\r\n    }\r\n    50% {\r\n      width: 0px;\r\n      top: auto;\r\n      transform: rotate(0);\r\n    }\r\n    51% {\r\n      width: 0px;\r\n      top: 8px;\r\n      transform: rotate(-45deg);\r\n    }\r\n    100% {\r\n      width: 10px;\r\n      top: 8px;\r\n      transform: rotate(-45deg);\r\n    }\r\n  }\r\n  @keyframes check-02-11 {\r\n    0% {\r\n      width: 4px;\r\n      top: auto;\r\n      transform: rotate(0);\r\n    }\r\n    50% {\r\n      width: 0px;\r\n      top: auto;\r\n      transform: rotate(0);\r\n    }\r\n    51% {\r\n      width: 0px;\r\n      top: 8px;\r\n      transform: rotate(-45deg);\r\n    }\r\n    100% {\r\n      width: 10px;\r\n      top: 8px;\r\n      transform: rotate(-45deg);\r\n    }\r\n  }\r\n  @-webkit-keyframes firework-11 {\r\n    0% {\r\n      opacity: 1;\r\n      box-shadow: 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0;\r\n    }\r\n    30% {\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      box-shadow: 0 -15px 0 0px #4F29F0, 14px -8px 0 0px #4F29F0, 14px 8px 0 0px #4F29F0, 0 15px 0 0px #4F29F0, -14px 8px 0 0px #4F29F0, -14px -8px 0 0px #4F29F0;\r\n    }\r\n  }\r\n  @keyframes firework-11 {\r\n    0% {\r\n      opacity: 1;\r\n      box-shadow: 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0;\r\n    }\r\n    30% {\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      box-shadow: 0 -15px 0 0px #4F29F0, 14px -8px 0 0px #4F29F0, 14px 8px 0 0px #4F29F0, 0 15px 0 0px #4F29F0, -14px 8px 0 0px #4F29F0, -14px -8px 0 0px #4F29F0;\r\n    }\r\n  }\r\n\r\n\r\n  /* Scrollbal Styles  */\r\n\r\n/* Firefox (uncomment to work in Firefox, although other properties will not work!)  */\r\n/** {\r\n  scrollbar-width: thin;\r\n  scrollbar-color: #C0C0C0 #DFE9EB;\r\n}*/\r\n\r\n/* Chrome, Edge and Safari */\r\n/* *::-webkit-scrollbar {\r\n    height: 5px;\r\n    width: 5px;\r\n  }\r\n  *::-webkit-scrollbar-track {\r\n    border-radius: 0px;\r\n    background-color: #DFE9EB;\r\n  }\r\n  \r\n  *::-webkit-scrollbar-track:hover {\r\n    background-color: #B8C0C2;\r\n  }\r\n  \r\n  *::-webkit-scrollbar-track:active {\r\n    background-color: #B8C0C2;\r\n  }\r\n  \r\n  *::-webkit-scrollbar-thumb {\r\n    border-radius: 18px;\r\n    background-color: #C0C0C0;\r\n  }\r\n  \r\n  *::-webkit-scrollbar-thumb:hover {\r\n    background-color: #A8A8A8;\r\n  }\r\n  \r\n  *::-webkit-scrollbar-thumb:active {\r\n    background-color: #A8A8A8;\r\n  }\r\n   */`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\n\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  //\n  // Note to future-self: No, you can't remove the `toLowerCase()` call.\n  // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\nfunction stringify(arr, offset = 0) {\n  var uuid = unsafeStringify(arr, offset);\n  // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n  return uuid;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80;\n\n  // Copy bytes to buffer, if provided\n  if (buf) {\n    offset = offset || 0;\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n    return buf;\n  }\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\r\n\r\nclass Todo {\r\n    constructor(title) {\r\n        this.title = title\r\n        this.isChecked = false\r\n        this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/Todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _imgs_delete_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/delete-icon.png */ \"./src/imgs/delete-icon.png\");\n/* harmony import */ var date_and_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-and-time */ \"./node_modules/date-and-time/esm/date-and-time.mjs\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst todoInput = document.querySelector('.todo-input')\r\nconst todosDisplay = document.querySelector('.todos-display')\r\nconst taskCountDisplay = document.querySelector('.task-num')\r\n\r\nlet delBtns\r\nconst allBtn = document.querySelector('.allTasks-btn')\r\nconst activeBtn = document.querySelector('.activeTasks-btn')\r\nconst compBtn = document.querySelector('.compTasks-btn')\r\nconst btns = [allBtn, activeBtn, compBtn]\r\n\r\nlet allTodos = JSON.parse(localStorage.getItem(\"todoStorage\"))\r\n  ? JSON.parse(localStorage.getItem(\"todoStorage\"))\r\n  : [];\r\n\r\nconst findTodo = (id) => {\r\n    const [todo] = allTodos.filter(todo => todo.id == id)\r\n    return todo\r\n}\r\n\r\nconst checkTodo = (todo) => {\r\n    if (!todo.isChecked) {\r\n        todo.isChecked = true\r\n    }else if (todo.isChecked) {\r\n        todo.isChecked = false\r\n    }\r\n}\r\n\r\nconst saveSolvesToStorage = () => {\r\n    localStorage.setItem(\"todoStorage\", JSON.stringify(allTodos)); // Saving allTodos to localStorage\r\n}\r\n\r\n\r\nconst displayDate = () => {\r\n    const now = new Date()\r\n    const curDate = date_and_time__WEBPACK_IMPORTED_MODULE_2__[\"default\"].format(now, 'ddd MMM DD YYYY')\r\n    \r\n    const dateTxt = document.querySelector('.date')\r\n    dateTxt.textContent = curDate\r\n    return curDate\r\n}\r\n\r\nconst displayTodos = (todos) => {\r\n    if (todos.length !== 0) {\r\n        todosDisplay.innerHTML = ''\r\n        todosDisplay.classList.remove('isEmpty')\r\n                \r\n        for (const todo of todos) {\r\n            const html = `\r\n            <div class=\"checkbox-wrapper-11\">\r\n            <input id=${todo.id} type=\"checkbox\" name=\"r\" value=\"2\" ${todo.isChecked ? 'checked' : ''}>\r\n            <label for=${todo.id}>${todo.title}</label>\r\n            <img class=\"icon\" src=${_imgs_delete_icon_png__WEBPACK_IMPORTED_MODULE_1__}>\r\n            </div>\r\n            `\r\n            todosDisplay.insertAdjacentHTML('beforeend', html)\r\n            const cb = document.getElementById(todo.id)\r\n            cb.addEventListener('click', () => {\r\n                const clickedTodo = findTodo(todo.id)\r\n                checkTodo(clickedTodo)\r\n                saveSolvesToStorage()\r\n            })\r\n            \r\n        }\r\n        delBtns = document.querySelectorAll('.icon')\r\n        for (const di of delBtns) {\r\n            di.addEventListener('click', (e) => {\r\n                const todoId = di.parentElement.children[0].getAttribute('id')\r\n                deleteTodo(todoId)\r\n                \r\n            })\r\n        }\r\n    }else{\r\n        todosDisplay.classList.add('isEmpty')\r\n        todosDisplay.innerHTML = '<h2>No Tasks Found</h2>'\r\n    }\r\n}\r\n\r\nconst addTodo = (e) => {\r\n    if(e.keyCode == 13){\r\n        const todoTitle = todoInput.value \r\n        todoInput.value = '' // Clearing he input field\r\n\r\n        if (todoTitle !== '') {   \r\n            allTodos.push(new _Todo__WEBPACK_IMPORTED_MODULE_3__.Todo(todoTitle)) // Making a new todo and pushing it to allTodos\r\n            saveSolvesToStorage()\r\n            displayTodos(allTodos)\r\n            updateTaskCount()\r\n        }\r\n      }\r\n}\r\n\r\nconst deleteTodo = (id) => {\r\n    const filteredArray = allTodos.filter(todo => todo.id != id)\r\n    console.log(filteredArray);\r\n    allTodos = filteredArray\r\n    saveSolvesToStorage()\r\n    displayTodos(allTodos)\r\n    updateTaskCount()\r\n}\r\n\r\nconst updateTaskCount = () => {\r\n    taskCountDisplay.textContent = `${allTodos.length} Tasks`\r\n}\r\n\r\nconst filterCompletedTodos = () => {\r\n    const checkedTodos = allTodos.filter(todo => todo.isChecked)\r\n    return checkedTodos\r\n}\r\n\r\nconst filterActiveTodos = () => {\r\n    const uncheckedTodos = allTodos.filter(todo => !todo.isChecked)\r\n    return uncheckedTodos\r\n}\r\n\r\nconst activateBtn = (btn) => {\r\n    for (const b of btns) {\r\n        b.classList.remove('active')\r\n    }\r\n    btn.classList.add('active')\r\n}\r\n\r\nallBtn.addEventListener('click', () => {\r\n    activateBtn(allBtn)\r\n    displayTodos(allTodos)\r\n})\r\n\r\nactiveBtn.addEventListener('click', () => {\r\n    activateBtn(activeBtn)\r\n    displayTodos(filterActiveTodos())\r\n})\r\n\r\ncompBtn.addEventListener('click', () => {\r\n    activateBtn(compBtn)\r\n    displayTodos(filterCompletedTodos())\r\n})\r\n\r\ntodoInput.onkeydown = addTodo\r\n\r\ndisplayDate()\r\ndisplayTodos(allTodos)\r\nupdateTaskCount()\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/imgs/delete-icon.png":
/*!**********************************!*\
  !*** ./src/imgs/delete-icon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"53734dc55fa70b0c4028.png\";\n\n//# sourceURL=webpack:///./src/imgs/delete-icon.png?");

/***/ }),

/***/ "./src/imgs/warning-icon.png":
/*!***********************************!*\
  !*** ./src/imgs/warning-icon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"878d16c81537b9b72954.png\";\n\n//# sourceURL=webpack:///./src/imgs/warning-icon.png?");

/***/ }),

/***/ "./node_modules/date-and-time/esm/date-and-time.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-and-time/esm/date-and-time.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ date$1)\n/* harmony export */ });\n/**\n * @preserve date-and-time (c) KNOWLEDGECODE | MIT\n */\n\nvar locales = {},\n    plugins = {},\n    lang = 'en',\n    _res = {\n        MMMM: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],\n        MMM: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],\n        dddd: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],\n        ddd: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],\n        dd: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],\n        A: ['AM', 'PM']\n    },\n    _formatter = {\n        YYYY: function (d/*, formatString*/) { return ('000' + d.getFullYear()).slice(-4); },\n        YY: function (d/*, formatString*/) { return ('0' + d.getFullYear()).slice(-2); },\n        Y: function (d/*, formatString*/) { return '' + d.getFullYear(); },\n        MMMM: function (d/*, formatString*/) { return this.res.MMMM[d.getMonth()]; },\n        MMM: function (d/*, formatString*/) { return this.res.MMM[d.getMonth()]; },\n        MM: function (d/*, formatString*/) { return ('0' + (d.getMonth() + 1)).slice(-2); },\n        M: function (d/*, formatString*/) { return '' + (d.getMonth() + 1); },\n        DD: function (d/*, formatString*/) { return ('0' + d.getDate()).slice(-2); },\n        D: function (d/*, formatString*/) { return '' + d.getDate(); },\n        HH: function (d/*, formatString*/) { return ('0' + d.getHours()).slice(-2); },\n        H: function (d/*, formatString*/) { return '' + d.getHours(); },\n        A: function (d/*, formatString*/) { return this.res.A[d.getHours() > 11 | 0]; },\n        hh: function (d/*, formatString*/) { return ('0' + (d.getHours() % 12 || 12)).slice(-2); },\n        h: function (d/*, formatString*/) { return '' + (d.getHours() % 12 || 12); },\n        mm: function (d/*, formatString*/) { return ('0' + d.getMinutes()).slice(-2); },\n        m: function (d/*, formatString*/) { return '' + d.getMinutes(); },\n        ss: function (d/*, formatString*/) { return ('0' + d.getSeconds()).slice(-2); },\n        s: function (d/*, formatString*/) { return '' + d.getSeconds(); },\n        SSS: function (d/*, formatString*/) { return ('00' + d.getMilliseconds()).slice(-3); },\n        SS: function (d/*, formatString*/) { return ('0' + (d.getMilliseconds() / 10 | 0)).slice(-2); },\n        S: function (d/*, formatString*/) { return '' + (d.getMilliseconds() / 100 | 0); },\n        dddd: function (d/*, formatString*/) { return this.res.dddd[d.getDay()]; },\n        ddd: function (d/*, formatString*/) { return this.res.ddd[d.getDay()]; },\n        dd: function (d/*, formatString*/) { return this.res.dd[d.getDay()]; },\n        Z: function (d/*, formatString*/) {\n            var offset = d.getTimezoneOffset() / 0.6 | 0;\n            return (offset > 0 ? '-' : '+') + ('000' + Math.abs(offset - (offset % 100 * 0.4 | 0))).slice(-4);\n        },\n        ZZ: function (d/*, formatString*/) {\n            var offset = d.getTimezoneOffset();\n            var mod = Math.abs(offset);\n            return (offset > 0 ? '-' : '+') + ('0' + (mod / 60 | 0)).slice(-2) + ':' + ('0' + mod % 60).slice(-2);\n        },\n        post: function (str) { return str; },\n        res: _res\n    },\n    _parser = {\n        YYYY: function (str/*, formatString */) { return this.exec(/^\\d{4}/, str); },\n        Y: function (str/*, formatString */) { return this.exec(/^\\d{1,4}/, str); },\n        MMMM: function (str/*, formatString */) {\n            var result = this.find(this.res.MMMM, str);\n            result.value++;\n            return result;\n        },\n        MMM: function (str/*, formatString */) {\n            var result = this.find(this.res.MMM, str);\n            result.value++;\n            return result;\n        },\n        MM: function (str/*, formatString */) { return this.exec(/^\\d\\d/, str); },\n        M: function (str/*, formatString */) { return this.exec(/^\\d\\d?/, str); },\n        DD: function (str/*, formatString */) { return this.exec(/^\\d\\d/, str); },\n        D: function (str/*, formatString */) { return this.exec(/^\\d\\d?/, str); },\n        HH: function (str/*, formatString */) { return this.exec(/^\\d\\d/, str); },\n        H: function (str/*, formatString */) { return this.exec(/^\\d\\d?/, str); },\n        A: function (str/*, formatString */) { return this.find(this.res.A, str); },\n        hh: function (str/*, formatString */) { return this.exec(/^\\d\\d/, str); },\n        h: function (str/*, formatString */) { return this.exec(/^\\d\\d?/, str); },\n        mm: function (str/*, formatString */) { return this.exec(/^\\d\\d/, str); },\n        m: function (str/*, formatString */) { return this.exec(/^\\d\\d?/, str); },\n        ss: function (str/*, formatString */) { return this.exec(/^\\d\\d/, str); },\n        s: function (str/*, formatString */) { return this.exec(/^\\d\\d?/, str); },\n        SSS: function (str/*, formatString */) { return this.exec(/^\\d{1,3}/, str); },\n        SS: function (str/*, formatString */) {\n            var result = this.exec(/^\\d\\d?/, str);\n            result.value *= 10;\n            return result;\n        },\n        S: function (str/*, formatString */) {\n            var result = this.exec(/^\\d/, str);\n            result.value *= 100;\n            return result;\n        },\n        Z: function (str/*, formatString */) {\n            var result = this.exec(/^[+-]\\d{2}[0-5]\\d/, str);\n            result.value = (result.value / 100 | 0) * -60 - result.value % 100;\n            return result;\n        },\n        ZZ: function (str/*, formatString */) {\n            var arr = /^([+-])(\\d{2}):([0-5]\\d)/.exec(str) || ['', '', '', ''];\n            return { value: 0 - ((arr[1] + arr[2] | 0) * 60 + (arr[1] + arr[3] | 0)), length: arr[0].length };\n        },\n        h12: function (h, a) { return (h === 12 ? 0 : h) + a * 12; },\n        exec: function (re, str) {\n            var result = (re.exec(str) || [''])[0];\n            return { value: result | 0, length: result.length };\n        },\n        find: function (array, str) {\n            var index = -1, length = 0;\n\n            for (var i = 0, len = array.length, item; i < len; i++) {\n                item = array[i];\n                if (!str.indexOf(item) && item.length > length) {\n                    index = i;\n                    length = item.length;\n                }\n            }\n            return { value: index, length: length };\n        },\n        pre: function (str) { return str; },\n        res: _res\n    },\n    extend = function (base, props, override, res) {\n        var obj = {}, key;\n\n        for (key in base) {\n            obj[key] = base[key];\n        }\n        for (key in props || {}) {\n            if (!(!!override ^ !!obj[key])) {\n                obj[key] = props[key];\n            }\n        }\n        if (res) {\n            obj.res = res;\n        }\n        return obj;\n    },\n    proto = {\n        _formatter: _formatter,\n        _parser: _parser\n    },\n    date;\n\n/**\n * Compiling format strings\n * @param {string} formatString - A format string\n * @returns {Array.<string>} A compiled object\n */\nproto.compile = function (formatString) {\n    return [formatString].concat(formatString.match(/\\[(?:[^[\\]]|\\[[^[\\]]*])*]|([A-Za-z])\\1*|\\.{3}|./g) || []);\n};\n\n/**\n * Formatting date and time objects (Date -> String)\n * @param {Date} dateObj - A Date object\n * @param {string|Array.<string>} arg - A format string or its compiled object\n * @param {boolean} [utc] - Output as UTC\n * @returns {string} A formatted string\n */\nproto.format = function (dateObj, arg, utc) {\n    var ctx = this || date, pattern = typeof arg === 'string' ? ctx.compile(arg) : arg,\n        formatter = ctx._formatter,\n        d = (function () {\n            if (utc) {\n                var u = new Date(dateObj.getTime());\n\n                u.getFullYear = u.getUTCFullYear;\n                u.getMonth = u.getUTCMonth;\n                u.getDate = u.getUTCDate;\n                u.getHours = u.getUTCHours;\n                u.getMinutes = u.getUTCMinutes;\n                u.getSeconds = u.getUTCSeconds;\n                u.getMilliseconds = u.getUTCMilliseconds;\n                u.getDay = u.getUTCDay;\n                u.getTimezoneOffset = function () { return 0; };\n                u.getTimezoneName = function () { return 'UTC'; };\n                return u;\n            }\n            return dateObj;\n        }()),\n        comment = /^\\[(.*)\\]$/, str = '';\n\n    for (var i = 1, len = pattern.length, token; i < len; i++) {\n        token = pattern[i];\n        str += formatter[token]\n            ? formatter.post(formatter[token](d, pattern[0]))\n            : comment.test(token) ? token.replace(comment, '$1') : token;\n    }\n    return str;\n};\n\n/**\n * Pre-parsing date and time strings\n * @param {string} dateString - A date and time string\n * @param {string|Array.<string>} arg - A format string or its compiled object\n * @param {boolean} [utc] - Input as UTC\n * @returns {Object} A pre-parsed result object\n */\nproto.preparse = function (dateString, arg) {\n    var ctx = this || date, pattern = typeof arg === 'string' ? ctx.compile(arg) : arg,\n        parser = ctx._parser,\n        dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 0, _length: 0, _match: 0 },\n        wildcard = ' ', comment = /^\\[(.*)\\]$/, ellipsis = '...';\n\n    dateString = parser.pre(dateString);\n    for (var i = 1, len = pattern.length, token, str, result; i < len; i++) {\n        token = pattern[i];\n        str = dateString.substring(dt._index);\n\n        if (parser[token]) {\n            result = parser[token](str, pattern[0]);\n            if (!result.length) {\n              break;\n            }\n            dt[result.token || token.charAt(0)] = result.value;\n            dt._index += result.length;\n            dt._match++;\n        } else if (token === str.charAt(0) || token === wildcard) {\n            dt._index++;\n        } else if (comment.test(token) && !str.indexOf(token.replace(comment, '$1'))) {\n            dt._index += token.length - 2;\n        } else if (token === ellipsis) {\n            dt._index = dateString.length;\n            break;\n        } else {\n            break;\n        }\n    }\n    dt.H = dt.H || parser.h12(dt.h, dt.A);\n    dt._length = dateString.length;\n    return dt;\n};\n\n/**\n * Parsing of date and time string (String -> Date)\n * @param {string} dateString - A date-time string\n * @param {string|Array.<string>} arg - A format string or its compiled object\n * @param {boolean} [utc] - Input as UTC\n * @returns {Date} A Date object\n */\nproto.parse = function (dateString, arg, utc) {\n    var ctx = this || date, pattern = typeof arg === 'string' ? ctx.compile(arg) : arg,\n        dt = ctx.preparse(dateString, pattern);\n\n    if (ctx.isValid(dt)) {\n        dt.M -= dt.Y < 100 ? 22801 : 1; // 22801 = 1900 * 12 + 1\n        if (utc || ~ctx._parser.find(pattern, 'ZZ').value) {\n            return new Date(Date.UTC(dt.Y, dt.M, dt.D, dt.H, dt.m + dt.Z, dt.s, dt.S));\n        }\n        return new Date(dt.Y, dt.M, dt.D, dt.H, dt.m, dt.s, dt.S);\n    }\n    return new Date(NaN);\n};\n\n/**\n * Date and time string validation\n * @param {Object|string} arg1 - A pre-parsed result object or a date and time string\n * @param {string|Array.<string>} [arg2] - A format string or its compiled object\n * @returns {boolean} Whether the date and time string is a valid date and time\n */\nproto.isValid = function (arg1, arg2) {\n    var ctx = this || date, dt = typeof arg1 === 'string' ? ctx.preparse(arg1, arg2) : arg1;\n\n    return !(\n        dt._index < 1 || dt._length < 1 || dt._index - dt._length || dt._match < 1\n        || dt.Y < 1 || dt.Y > 9999 || dt.M < 1 || dt.M > 12 || dt.D < 1 || dt.D >  new Date(dt.Y, dt.M, 0).getDate()\n        || dt.H < 0 || dt.H > 23 || dt.m < 0 || dt.m > 59 || dt.s < 0 || dt.s > 59 || dt.S < 0 || dt.S > 999\n        || dt.Z < -840 || dt.Z > 720\n    );\n};\n\n/**\n * Format transformation of date and time string (String -> String)\n * @param {string} dateString - A date and time string\n * @param {string|Array.<string>} arg1 - A format string or its compiled object before transformation\n * @param {string|Array.<string>} arg2 - A format string or its compiled object after transformation\n * @param {boolean} [utc] - Output as UTC\n * @returns {string} A formatted string\n */\nproto.transform = function (dateString, arg1, arg2, utc) {\n    const ctx = this || date;\n    return ctx.format(ctx.parse(dateString, arg1), arg2, utc);\n};\n\n/**\n * Adding years\n * @param {Date} dateObj - A Date object\n * @param {number} years - Number of years to add\n * @param {boolean} [utc] - Calculates as UTC\n * @returns {Date} The Date object after adding the value\n */\nproto.addYears = function (dateObj, years, utc) {\n    return (this || date).addMonths(dateObj, years * 12, utc);\n};\n\n/**\n * Adding months\n * @param {Date} dateObj - A Date object\n * @param {number} months - Number of months to add\n * @param {boolean} [utc] - Calculates as UTC\n * @returns {Date} The Date object after adding the value\n */\nproto.addMonths = function (dateObj, months, utc) {\n    var d = new Date(dateObj.getTime());\n\n    if (utc) {\n        d.setUTCMonth(d.getUTCMonth() + months);\n        if (d.getUTCDate() < dateObj.getUTCDate()) {\n            d.setUTCDate(0);\n            return d;\n        }\n    } else {\n        d.setMonth(d.getMonth() + months);\n        if (d.getDate() < dateObj.getDate()) {\n            d.setDate(0);\n            return d;\n        }\n    }\n    return d;\n};\n\n/**\n * Adding days\n * @param {Date} dateObj - A Date object\n * @param {number} days - Number of days to add\n * @param {boolean} [utc] - Calculates as UTC\n * @returns {Date} The Date object after adding the value\n */\nproto.addDays = function (dateObj, days, utc) {\n    var d = new Date(dateObj.getTime());\n\n    if (utc) {\n        d.setUTCDate(d.getUTCDate() + days);\n    } else {\n        d.setDate(d.getDate() + days);\n    }\n    return d;\n};\n\n/**\n * Adding hours\n * @param {Date} dateObj - A Date object\n * @param {number} hours - Number of hours to add\n * @returns {Date} The Date object after adding the value\n */\nproto.addHours = function (dateObj, hours) {\n    return new Date(dateObj.getTime() + hours * 60 * 60 * 1000);\n};\n\n/**\n * Adding minutes\n * @param {Date} dateObj - A Date object\n * @param {number} minutes - Number of minutes to add\n * @returns {Date} The Date object after adding the value\n */\nproto.addMinutes = function (dateObj, minutes) {\n    return new Date(dateObj.getTime() + minutes * 60 * 1000);\n};\n\n/**\n * Adding seconds\n * @param {Date} dateObj - A Date object\n * @param {number} seconds - Number of seconds to add\n * @returns {Date} The Date object after adding the value\n */\nproto.addSeconds = function (dateObj, seconds) {\n    return new Date(dateObj.getTime() + seconds * 1000);\n};\n\n/**\n * Adding milliseconds\n * @param {Date} dateObj - A Date object\n * @param {number} milliseconds - Number of milliseconds to add\n * @returns {Date} The Date object after adding the value\n */\nproto.addMilliseconds = function (dateObj, milliseconds) {\n    return new Date(dateObj.getTime() + milliseconds);\n};\n\n/**\n * Subtracting two dates (date1 - date2)\n * @param {Date} date1 - A Date object\n * @param {Date} date2 - A Date object\n * @returns {Object} The result object of subtracting date2 from date1\n */\nproto.subtract = function (date1, date2) {\n    var delta = date1.getTime() - date2.getTime();\n\n    return {\n        toMilliseconds: function () {\n            return delta;\n        },\n        toSeconds: function () {\n            return delta / 1000;\n        },\n        toMinutes: function () {\n            return delta / 60000;\n        },\n        toHours: function () {\n            return delta / 3600000;\n        },\n        toDays: function () {\n            return delta / 86400000;\n        }\n    };\n};\n\n/**\n * Whether a year is a leap year\n * @param {number} y - A year to check\n * @returns {boolean} Whether the year is a leap year\n */\nproto.isLeapYear = function (y) {\n    return (!(y % 4) && !!(y % 100)) || !(y % 400);\n};\n\n/**\n * Comparison of two dates\n * @param {Date} date1 - A Date object\n * @param {Date} date2 - A Date object\n * @returns {boolean} Whether the two dates are the same day (time is ignored)\n */\nproto.isSameDay = function (date1, date2) {\n    return date1.toDateString() === date2.toDateString();\n};\n\n/**\n * Definition of new locale\n * @param {string} code - A language code\n * @param {Function} locale - A locale installer\n * @returns {void}\n */\nproto.locale = function (code, locale) {\n    if (!locales[code]) {\n        locales[code] = locale;\n    }\n};\n\n/**\n * Definition of new plugin\n * @param {string} name - A plugin name\n * @param {Function} plugin - A plugin installer\n * @returns {void}\n */\nproto.plugin = function (name, plugin) {\n    if (!plugins[name]) {\n        plugins[name] = plugin;\n    }\n};\n\ndate = extend(proto);\n\n/**\n * Changing locales\n * @param {Function|string} [locale] - A locale installer or language code\n * @returns {string} The current language code\n */\ndate.locale = function (locale) {\n    var install = typeof locale === 'function' ? locale : date.locale[locale];\n\n    if (!install) {\n        return lang;\n    }\n    lang = install(proto);\n\n    var extension = locales[lang] || {};\n    var res = extend(_res, extension.res, true);\n    var formatter = extend(_formatter, extension.formatter, true, res);\n    var parser = extend(_parser, extension.parser, true, res);\n\n    date._formatter = formatter;\n    date._parser = parser;\n\n    for (var plugin in plugins) {\n        date.extend(plugins[plugin]);\n    }\n\n    return lang;\n};\n\n/**\n * Functional extension\n * @param {Object} extension - An extension object\n * @returns {void}\n */\ndate.extend = function (extension) {\n    var res = extend(date._parser.res, extension.res);\n    var extender = extension.extender || {};\n\n    date._formatter = extend(date._formatter, extension.formatter, false, res);\n    date._parser = extend(date._parser, extension.parser, false, res);\n\n    for (var key in extender) {\n        if (!date[key]) {\n            date[key] = extender[key];\n        }\n    }\n};\n\n/**\n * Importing plugins\n * @param {Function|string} plugin - A plugin installer or plugin name\n * @returns {void}\n */\ndate.plugin = function (plugin) {\n    var install = typeof plugin === 'function' ? plugin : date.plugin[plugin];\n\n    if (install) {\n        date.extend(plugins[install(proto, date)] || {});\n    }\n};\n\nvar date$1 = date;\n\n\n\n\n//# sourceURL=webpack:///./node_modules/date-and-time/esm/date-and-time.mjs?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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