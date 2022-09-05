/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/DynaPuff/DynaPuff-Regular.ttf */ "./src/assets/fonts/DynaPuff/DynaPuff-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Comfortaa/Comfortaa-Regular.ttf */ "./src/assets/fonts/Comfortaa/Comfortaa-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --color: #181f4a;\r\n  --ligth-color: #af8bd0;\r\n  --filter: invert(14%) sepia(9%) saturate(7252%) hue-rotate(205deg) brightness(85%) contrast(101%);\r\n  --filter-light: invert(87%) sepia(27%) saturate(6724%) hue-rotate(206deg) brightness(88%) contrast(83%);\r\n  --font-primary: 'DynaPuff';\r\n  --font-secondary: 'Comfortaa';\r\n  --diff1: #f06969;\r\n  --diff2: #ec7d3d;\r\n  --diff3: #e4e713;\r\n  --diff4: #50a150;\r\n  --diff5: #69d0f0;\r\n  --diff6: #4183c0;\r\n  --diff7: #906bb3;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'DynaPuff';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Comfortaa';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: var(--font-primary);\r\n  min-height: 100vh;\r\n  background: linear-gradient(90deg, rgba(240, 218, 255, 1) 0%, rgba(246, 240, 153, 1) 50%, rgba(69, 239, 252, 1) 100%);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  color: var(--color);\r\n}\r\n\r\nbody.no-scroll {\r\n  overflow: hidden;\r\n}\r\n\r\nheader,\r\nmain,\r\nfooter {\r\n  max-width: 1200px;\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\nheader,\r\nfooter {\r\n  padding: 20px 40px;\r\n}\r\n\r\nmain {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  padding: 0 40px;\r\n}\r\n\r\na {\r\n  user-select: none;\r\n  text-decoration: none;\r\n  color: inherit;\r\n  transition: 0.1s;\r\n}\r\n\r\na:hover,\r\nbutton:hover {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton,\r\ninput {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.header-container {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.logo {\r\n  font-family: var(--font-primary), cursive;\r\n  font-size: 2rem;\r\n  color: var(--color);\r\n}\r\n\r\n.logo:hover {\r\n  cursor: pointer;\r\n  text-shadow: 1px 1px 3px var(--ligth-color);\r\n}\r\n\r\n.logo:active {\r\n  transform: scale(0.99);\r\n}\r\n\r\n.authorization-link {\r\n  position: relative;\r\n  text-align: end;\r\n  margin-right: 10px;\r\n  border: none;\r\n  background: transparent;\r\n}\r\n\r\n.authorization-icon {\r\n  width: 40px;\r\n  /* filter: var(--filter); */\r\n  transition: 0.1s;\r\n}\r\n\r\n.authorization-icon:hover {\r\n  filter: drop-shadow(1px 1px 2px var(--ligth-color));\r\n}\r\n\r\n.authorization-icon:active {\r\n  transform: scale(0.97);\r\n}\r\n\r\n.tooltiptext {\r\n  visibility: hidden;\r\n  position: absolute;\r\n  left: -95px;\r\n  top: 6px;\r\n  font-family: var(--font-secondary);\r\n  font-size: 1rem;\r\n  color: var(--ligth-color);\r\n  padding: 6px 10px;\r\n  border: 1px solid var(--ligth-color);\r\n  border-radius: 5px;\r\n}\r\n\r\n.authorization-link:hover .tooltiptext {\r\n  visibility: visible;\r\n}\r\n\r\n.burger,\r\n.burger-line {\r\n  z-index: 2;\r\n}\r\n\r\n.burger {\r\n  z-index: 10;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  vertical-align: super;\r\n  position: relative;\r\n  width: 30px;\r\n  height: 22px;\r\n  transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.burger-line,\r\n.burger:before,\r\n.burger:after {\r\n  display: inline-block;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 3px;\r\n  content: \"\";\r\n  background-color: var(--color);\r\n}\r\n\r\n.burger-line {\r\n  top: calc(50% - 1px);\r\n}\r\n\r\n.burger:before {\r\n  top: 0;\r\n}\r\n\r\n.burger:after {\r\n  bottom: 0;\r\n}\r\n\r\n.burger.open {\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.nav-bar {\r\n  z-index: 10;\r\n  opacity: 0%;\r\n  position: absolute;\r\n  top: 30px;\r\n  right: 0;\r\n  margin: 30px 0;\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.nav-bar.open {\r\n  opacity: 100%;\r\n}\r\n\r\n.nav-bar li {\r\n  margin: 15px 0;\r\n  transition: 0.2s;\r\n}\r\n\r\n.nav-bar.open li:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.06);\r\n}\r\n\r\n.nav-bar.open li:active {\r\n  cursor: pointer;\r\n  transform: scale(0.95);\r\n}\r\n\r\n.home-icon {\r\n  filter: var(--filter);\r\n  margin-bottom: 20px !important;\r\n}\r\n\r\n.footer-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.github-names {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 15px;\r\n}\r\n\r\n.github-names a:hover {\r\n  text-shadow: 1px 1px 2px var(--ligth-color);\r\n}\r\n\r\n.github-names a:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.rs-logo {\r\n  width: 80px;\r\n  filter: var(--filter);\r\n  transition: 0.1s;\r\n}\r\n\r\n.github-logo {\r\n  filter: var(--filter);\r\n}\r\n\r\n.rs-logo:hover {\r\n  filter: var(--filter) drop-shadow(1px 1px 2px var(--ligth-color));\r\n}\r\n\r\n.btn-like-link {\r\n  display: inline-block;\r\n  width: 100px;\r\n  padding: 10px;\r\n  margin: 0 10px;\r\n  border: 2px solid var(--color);\r\n  border-radius: 10px;\r\n  font-size: 0.8rem;\r\n  transition: 0.2s;\r\n}\r\n\r\n.btn-like-link:hover {\r\n  cursor: pointer;\r\n  background: var(--color);\r\n  color: var(--ligth-color);\r\n}\r\n\r\n.btn-like-link:active {\r\n  transform: scale(0.98);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --color: #181f4a;\r\n  --ligth-color: #af8bd0;\r\n  --filter: invert(14%) sepia(9%) saturate(7252%) hue-rotate(205deg) brightness(85%) contrast(101%);\r\n  --filter-light: invert(87%) sepia(27%) saturate(6724%) hue-rotate(206deg) brightness(88%) contrast(83%);\r\n  --font-primary: 'DynaPuff';\r\n  --font-secondary: 'Comfortaa';\r\n  --diff1: #f06969;\r\n  --diff2: #ec7d3d;\r\n  --diff3: #e4e713;\r\n  --diff4: #50a150;\r\n  --diff5: #69d0f0;\r\n  --diff6: #4183c0;\r\n  --diff7: #906bb3;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'DynaPuff';\r\n  src: url(./assets/fonts/DynaPuff/DynaPuff-Regular.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Comfortaa';\r\n  src: url(./assets/fonts/Comfortaa/Comfortaa-Regular.ttf);\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: var(--font-primary);\r\n  min-height: 100vh;\r\n  background: linear-gradient(90deg, rgba(240, 218, 255, 1) 0%, rgba(246, 240, 153, 1) 50%, rgba(69, 239, 252, 1) 100%);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  color: var(--color);\r\n}\r\n\r\nbody.no-scroll {\r\n  overflow: hidden;\r\n}\r\n\r\nheader,\r\nmain,\r\nfooter {\r\n  max-width: 1200px;\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\nheader,\r\nfooter {\r\n  padding: 20px 40px;\r\n}\r\n\r\nmain {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  padding: 0 40px;\r\n}\r\n\r\na {\r\n  user-select: none;\r\n  text-decoration: none;\r\n  color: inherit;\r\n  transition: 0.1s;\r\n}\r\n\r\na:hover,\r\nbutton:hover {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton,\r\ninput {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.header-container {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.logo {\r\n  font-family: var(--font-primary), cursive;\r\n  font-size: 2rem;\r\n  color: var(--color);\r\n}\r\n\r\n.logo:hover {\r\n  cursor: pointer;\r\n  text-shadow: 1px 1px 3px var(--ligth-color);\r\n}\r\n\r\n.logo:active {\r\n  transform: scale(0.99);\r\n}\r\n\r\n.authorization-link {\r\n  position: relative;\r\n  text-align: end;\r\n  margin-right: 10px;\r\n  border: none;\r\n  background: transparent;\r\n}\r\n\r\n.authorization-icon {\r\n  width: 40px;\r\n  /* filter: var(--filter); */\r\n  transition: 0.1s;\r\n}\r\n\r\n.authorization-icon:hover {\r\n  filter: drop-shadow(1px 1px 2px var(--ligth-color));\r\n}\r\n\r\n.authorization-icon:active {\r\n  transform: scale(0.97);\r\n}\r\n\r\n.tooltiptext {\r\n  visibility: hidden;\r\n  position: absolute;\r\n  left: -95px;\r\n  top: 6px;\r\n  font-family: var(--font-secondary);\r\n  font-size: 1rem;\r\n  color: var(--ligth-color);\r\n  padding: 6px 10px;\r\n  border: 1px solid var(--ligth-color);\r\n  border-radius: 5px;\r\n}\r\n\r\n.authorization-link:hover .tooltiptext {\r\n  visibility: visible;\r\n}\r\n\r\n.burger,\r\n.burger-line {\r\n  z-index: 2;\r\n}\r\n\r\n.burger {\r\n  z-index: 10;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  vertical-align: super;\r\n  position: relative;\r\n  width: 30px;\r\n  height: 22px;\r\n  transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.burger-line,\r\n.burger:before,\r\n.burger:after {\r\n  display: inline-block;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 3px;\r\n  content: \"\";\r\n  background-color: var(--color);\r\n}\r\n\r\n.burger-line {\r\n  top: calc(50% - 1px);\r\n}\r\n\r\n.burger:before {\r\n  top: 0;\r\n}\r\n\r\n.burger:after {\r\n  bottom: 0;\r\n}\r\n\r\n.burger.open {\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.nav-bar {\r\n  z-index: 10;\r\n  opacity: 0%;\r\n  position: absolute;\r\n  top: 30px;\r\n  right: 0;\r\n  margin: 30px 0;\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.nav-bar.open {\r\n  opacity: 100%;\r\n}\r\n\r\n.nav-bar li {\r\n  margin: 15px 0;\r\n  transition: 0.2s;\r\n}\r\n\r\n.nav-bar.open li:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.06);\r\n}\r\n\r\n.nav-bar.open li:active {\r\n  cursor: pointer;\r\n  transform: scale(0.95);\r\n}\r\n\r\n.home-icon {\r\n  filter: var(--filter);\r\n  margin-bottom: 20px !important;\r\n}\r\n\r\n.footer-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.github-names {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 15px;\r\n}\r\n\r\n.github-names a:hover {\r\n  text-shadow: 1px 1px 2px var(--ligth-color);\r\n}\r\n\r\n.github-names a:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.rs-logo {\r\n  width: 80px;\r\n  filter: var(--filter);\r\n  transition: 0.1s;\r\n}\r\n\r\n.github-logo {\r\n  filter: var(--filter);\r\n}\r\n\r\n.rs-logo:hover {\r\n  filter: var(--filter) drop-shadow(1px 1px 2px var(--ligth-color));\r\n}\r\n\r\n.btn-like-link {\r\n  display: inline-block;\r\n  width: 100px;\r\n  padding: 10px;\r\n  margin: 0 10px;\r\n  border: 2px solid var(--color);\r\n  border-radius: 10px;\r\n  font-size: 0.8rem;\r\n  transition: 0.2s;\r\n}\r\n\r\n.btn-like-link:hover {\r\n  cursor: pointer;\r\n  background: var(--color);\r\n  color: var(--ligth-color);\r\n}\r\n\r\n.btn-like-link:active {\r\n  transform: scale(0.98);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/components/authorization/authorization.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/components/authorization/authorization.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".authorization-block {\r\n  position: fixed;\r\n  width: 450px;\r\n  height: 330px;\r\n  top: calc(50% - 160px);\r\n  left: calc(50% - 225px);\r\n  z-index: 20;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 30px;\r\n  border: 2px solid var(--color);\r\n  border-radius: 30px;\r\n  background: rgba(246, 240, 153, 1);\r\n  font-family: var(--font-secondary);\r\n  transition: 0.1s;\r\n}\r\n\r\n.blur {\r\n  position: absolute;\r\n  z-index: 15;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #000;\r\n  opacity: 50%;\r\n}\r\n\r\n.close-icon {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 20px;\r\n  filter: var(--filter);\r\n  transition: 0.1s;\r\n}\r\n\r\n.close-icon:hover {\r\n  cursor: pointer;\r\n  filter: var(--filter) drop-shadow(2px 2px 2px var(--ligth-color));\r\n  transform: scale(1.05);\r\n}\r\n\r\n.close-icon:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.auth-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  width: 80%;\r\n}\r\n\r\n.auth-input {\r\n  height: 40px;\r\n  display: block;\r\n  padding: 5px 15px;\r\n  font-family: var(--font-secondary);\r\n  font-size: 1rem;\r\n  border: 1px solid var(--color);\r\n  border-radius: 10px;\r\n  color: var(--color);\r\n}\r\n\r\n.authorization-btns {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  align-items: center;\r\n}\r\n\r\n.login-btn, .registration-btn {\r\n  font-family: var(--font-secondary);\r\n  font-size: 1rem;\r\n  padding: 10px 15px;\r\n  width: fit-content;\r\n  background: transparent;\r\n}\r\n\r\n.login-btn:active, .registration-btn:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.registration-link-btn, .login-link-btn {\r\n  background: transparent;\r\n  border: none;\r\n  color: var(--color);\r\n  font-family: var(--font-secondary);\r\n  font-weight: 600;\r\n  transition: 0.1s;\r\n}\r\n\r\n.registration-link-btn:hover, .login-link-btn:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.02);\r\n  text-shadow: 2px 2px 3px var(--ligth-color);\r\n}\r\n\r\n.registration-link-btn:active, .login-link-btn:active {\r\n  transform: scale(0.98);\r\n}\r\n\r\n.error-msg {\r\n  color: red;\r\n  display: none;\r\n  text-align: center;\r\n}\r\n\r\n.success-msg {\r\n  color: green;\r\n  display: none;\r\n  text-align: center;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/views/components/authorization/authorization.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,8BAA8B;EAC9B,mBAAmB;EACnB,kCAAkC;EAClC,kCAAkC;EAClC,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,iEAAiE;EACjE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,iBAAiB;EACjB,kCAAkC;EAClC,eAAe;EACf,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,kCAAkC;EAClC,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,2CAA2C;AAC7C;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB","sourcesContent":[".authorization-block {\r\n  position: fixed;\r\n  width: 450px;\r\n  height: 330px;\r\n  top: calc(50% - 160px);\r\n  left: calc(50% - 225px);\r\n  z-index: 20;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 30px;\r\n  border: 2px solid var(--color);\r\n  border-radius: 30px;\r\n  background: rgba(246, 240, 153, 1);\r\n  font-family: var(--font-secondary);\r\n  transition: 0.1s;\r\n}\r\n\r\n.blur {\r\n  position: absolute;\r\n  z-index: 15;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #000;\r\n  opacity: 50%;\r\n}\r\n\r\n.close-icon {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 20px;\r\n  filter: var(--filter);\r\n  transition: 0.1s;\r\n}\r\n\r\n.close-icon:hover {\r\n  cursor: pointer;\r\n  filter: var(--filter) drop-shadow(2px 2px 2px var(--ligth-color));\r\n  transform: scale(1.05);\r\n}\r\n\r\n.close-icon:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.auth-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  width: 80%;\r\n}\r\n\r\n.auth-input {\r\n  height: 40px;\r\n  display: block;\r\n  padding: 5px 15px;\r\n  font-family: var(--font-secondary);\r\n  font-size: 1rem;\r\n  border: 1px solid var(--color);\r\n  border-radius: 10px;\r\n  color: var(--color);\r\n}\r\n\r\n.authorization-btns {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  align-items: center;\r\n}\r\n\r\n.login-btn, .registration-btn {\r\n  font-family: var(--font-secondary);\r\n  font-size: 1rem;\r\n  padding: 10px 15px;\r\n  width: fit-content;\r\n  background: transparent;\r\n}\r\n\r\n.login-btn:active, .registration-btn:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.registration-link-btn, .login-link-btn {\r\n  background: transparent;\r\n  border: none;\r\n  color: var(--color);\r\n  font-family: var(--font-secondary);\r\n  font-weight: 600;\r\n  transition: 0.1s;\r\n}\r\n\r\n.registration-link-btn:hover, .login-link-btn:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.02);\r\n  text-shadow: 2px 2px 3px var(--ligth-color);\r\n}\r\n\r\n.registration-link-btn:active, .login-link-btn:active {\r\n  transform: scale(0.98);\r\n}\r\n\r\n.error-msg {\r\n  color: red;\r\n  display: none;\r\n  text-align: center;\r\n}\r\n\r\n.success-msg {\r\n  color: green;\r\n  display: none;\r\n  text-align: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/components/difficulty-bar/difficulty-bar.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/components/difficulty-bar/difficulty-bar.css ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".difficulty-container {\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n\r\n.difficulty-btn {\r\n  user-select: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: var(--font-primary);\r\n  font-size: 1.8rem; \r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 25px;\r\n  border: 2px solid var(--color);\r\n  opacity: 70%;\r\n  transition: 0.2s;\r\n}\r\n\r\n.level1 {\r\n  background: var(--diff1);\r\n}\r\n\r\n.level2 {\r\n  background: var(--diff2);\r\n}\r\n\r\n.level3 {\r\n  background: var(--diff3);\r\n}\r\n\r\n.level4 {\r\n  background: var(--diff4);\r\n}\r\n\r\n.level5 {\r\n  background: var(--diff5);\r\n}\r\n\r\n.level6 {\r\n  background: var(--diff6);\r\n}\r\n\r\n.level7 {\r\n  background: var(--diff7)\r\n}\r\n\r\n.difficulty-btn:hover {\r\n  cursor: pointer;\r\n  opacity: 100%;\r\n  box-shadow: 0 0 5px var(--color);\r\n}\r\n\r\n.difficulty-btn:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.difficulty-btn.active {\r\n  transform: scale(1.15);\r\n  opacity: 100%;\r\n  box-shadow: 0 0 10px var(--color);\r\n}", "",{"version":3,"sources":["webpack://./src/views/components/difficulty-bar/difficulty-bar.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gCAAgC;EAChC,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE;AACF;;AAEA;EACE,eAAe;EACf,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,iCAAiC;AACnC","sourcesContent":[".difficulty-container {\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n\r\n.difficulty-btn {\r\n  user-select: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: var(--font-primary);\r\n  font-size: 1.8rem; \r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 25px;\r\n  border: 2px solid var(--color);\r\n  opacity: 70%;\r\n  transition: 0.2s;\r\n}\r\n\r\n.level1 {\r\n  background: var(--diff1);\r\n}\r\n\r\n.level2 {\r\n  background: var(--diff2);\r\n}\r\n\r\n.level3 {\r\n  background: var(--diff3);\r\n}\r\n\r\n.level4 {\r\n  background: var(--diff4);\r\n}\r\n\r\n.level5 {\r\n  background: var(--diff5);\r\n}\r\n\r\n.level6 {\r\n  background: var(--diff6);\r\n}\r\n\r\n.level7 {\r\n  background: var(--diff7)\r\n}\r\n\r\n.difficulty-btn:hover {\r\n  cursor: pointer;\r\n  opacity: 100%;\r\n  box-shadow: 0 0 5px var(--color);\r\n}\r\n\r\n.difficulty-btn:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.difficulty-btn.active {\r\n  transform: scale(1.15);\r\n  opacity: 100%;\r\n  box-shadow: 0 0 10px var(--color);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/components/pagination/pagination.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/components/pagination/pagination.css ***!
  \**********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".pagination-container {\r\n  font-family: var(--font-primary);\r\n  font-size: 2rem;\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n\r\n.pagination-container p {\r\n  user-select: none;\r\n  transition: 0.1s;\r\n}\r\n\r\n.pagination-container p:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.05);\r\n  text-shadow: 0 0 3px var(--ligth-color);\r\n}\r\n\r\n.pagination-container p:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.pagination-container p.disabled {\r\n  color: #8a8b8b;\r\n}\r\n\r\n.pagination-container p.disabled {\r\n  cursor: auto;\r\n  color: #8a8b8b;\r\n  text-shadow: none;\r\n  transform: scale(1);\r\n}", "",{"version":3,"sources":["webpack://./src/views/components/pagination/pagination.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;EAChC,eAAe;EACf,aAAa;EACb,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,uCAAuC;AACzC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,iBAAiB;EACjB,mBAAmB;AACrB","sourcesContent":[".pagination-container {\r\n  font-family: var(--font-primary);\r\n  font-size: 2rem;\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n\r\n.pagination-container p {\r\n  user-select: none;\r\n  transition: 0.1s;\r\n}\r\n\r\n.pagination-container p:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.05);\r\n  text-shadow: 0 0 3px var(--ligth-color);\r\n}\r\n\r\n.pagination-container p:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.pagination-container p.disabled {\r\n  color: #8a8b8b;\r\n}\r\n\r\n.pagination-container p.disabled {\r\n  cursor: auto;\r\n  color: #8a8b8b;\r\n  text-shadow: none;\r\n  transform: scale(1);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/components/word-card/word-card.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/components/word-card/word-card.css ***!
  \********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".word-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 350px;\r\n  border: 2px solid var(--color);\r\n  box-shadow: 0 0 20px var(--diff1);\r\n  border-radius: 20px;\r\n  color: var(--color);\r\n  opacity: 90%;\r\n  overflow: hidden;\r\n}\r\n\r\n.textbook-word-img {\r\n  height: fit-content;\r\n  opacity: 80%;\r\n  border-radius: 0 0 150px 150px;\r\n}\r\n\r\n.word-description {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  padding: 20px;\r\n}\r\n\r\n.word-properties {\r\n  width: 306px;\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -30px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-self: center;\r\n  align-items: center;\r\n}\r\n\r\n.word-properties img {\r\n  transition: 0.1s;\r\n  opacity: 40%;\r\n}\r\n\r\n.word-properties img.active {\r\n  transition: 0.1s;\r\n  opacity: 100%;\r\n}\r\n\r\n.word-properties img:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.05);\r\n  filter: drop-shadow(1px 1px 3px var(--ligth-color));\r\n}\r\n\r\n.word-properties img:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.word-container h2 {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.word {\r\n  position: relative;\r\n}\r\n\r\n.audio-icon {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 0;\r\n  right: -20px;\r\n  filter: var(--filter);\r\n  transition: 0.1s;\r\n}\r\n\r\n.word .audio-icon {\r\n  top: 5px;\r\n  right: 5px;\r\n}\r\n\r\n.audio-icon:hover {\r\n  filter: var(--filter) drop-shadow(1px 1px 3px var(--ligth-color));\r\n  transform: scale(1.05);\r\n}\r\n\r\n.audio-icon:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.word-transcription {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.word-translation {\r\n  margin-top: 5px;\r\n}\r\n\r\n.word-meaning,\r\n.word-example {\r\n  padding-top: 10px;\r\n  border-top: 2px solid var(--color);\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.word-meaning p,\r\n.word-example p {\r\n  position: relative;\r\n  width: 91%;\r\n  margin: 10px 0;\r\n  padding-right: 20px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/views/components/word-card/word-card.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,8BAA8B;EAC9B,iCAAiC;EACjC,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,mDAAmD;AACrD;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,MAAM;EACN,YAAY;EACZ,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,QAAQ;EACR,UAAU;AACZ;;AAEA;EACE,iEAAiE;EACjE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,iBAAiB;EACjB,kCAAkC;EAClC,iBAAiB;AACnB;;AAEA;;EAEE,kBAAkB;EAClB,UAAU;EACV,cAAc;EACd,mBAAmB;AACrB","sourcesContent":[".word-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 350px;\r\n  border: 2px solid var(--color);\r\n  box-shadow: 0 0 20px var(--diff1);\r\n  border-radius: 20px;\r\n  color: var(--color);\r\n  opacity: 90%;\r\n  overflow: hidden;\r\n}\r\n\r\n.textbook-word-img {\r\n  height: fit-content;\r\n  opacity: 80%;\r\n  border-radius: 0 0 150px 150px;\r\n}\r\n\r\n.word-description {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  padding: 20px;\r\n}\r\n\r\n.word-properties {\r\n  width: 306px;\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: -30px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-self: center;\r\n  align-items: center;\r\n}\r\n\r\n.word-properties img {\r\n  transition: 0.1s;\r\n  opacity: 40%;\r\n}\r\n\r\n.word-properties img.active {\r\n  transition: 0.1s;\r\n  opacity: 100%;\r\n}\r\n\r\n.word-properties img:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.05);\r\n  filter: drop-shadow(1px 1px 3px var(--ligth-color));\r\n}\r\n\r\n.word-properties img:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.word-container h2 {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.word {\r\n  position: relative;\r\n}\r\n\r\n.audio-icon {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 0;\r\n  right: -20px;\r\n  filter: var(--filter);\r\n  transition: 0.1s;\r\n}\r\n\r\n.word .audio-icon {\r\n  top: 5px;\r\n  right: 5px;\r\n}\r\n\r\n.audio-icon:hover {\r\n  filter: var(--filter) drop-shadow(1px 1px 3px var(--ligth-color));\r\n  transform: scale(1.05);\r\n}\r\n\r\n.audio-icon:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.word-transcription {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.word-translation {\r\n  margin-top: 5px;\r\n}\r\n\r\n.word-meaning,\r\n.word-example {\r\n  padding-top: 10px;\r\n  border-top: 2px solid var(--color);\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.word-meaning p,\r\n.word-example p {\r\n  position: relative;\r\n  width: 91%;\r\n  margin: 10px 0;\r\n  padding-right: 20px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/error/error.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/pages/error/error.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main-container-error {\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 30px;\r\n  font-family: var(--font-primary);\r\n}\r\n\r\n.main-container-error h1 {\r\n  font-size: 5rem;\r\n}\r\n\r\n.main-container-error p {\r\n  font-size: 2rem;\r\n}", "",{"version":3,"sources":["webpack://./src/views/pages/error/error.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,gCAAgC;AAClC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB","sourcesContent":[".main-container-error {\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 30px;\r\n  font-family: var(--font-primary);\r\n}\r\n\r\n.main-container-error h1 {\r\n  font-size: 5rem;\r\n}\r\n\r\n.main-container-error p {\r\n  font-size: 2rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/index/index.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/pages/index/index.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-container {\r\n  justify-content: space-between;\r\n}\r\n\r\n.authorization-link {\r\n  display: inline-block;\r\n  flex-grow: 0;\r\n}\r\n\r\n.main-container-index {\r\n  font-family: 'Comfortaa';\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  gap: 50px;\r\n}\r\n\r\n.description {\r\n  max-width: 60%;\r\n  min-width: 375px;\r\n  padding: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\n.description-img {\r\n  max-width: 500px;\r\n  border-radius: 30px;\r\n  align-self: center;\r\n}\r\n\r\n.description-text {\r\n  max-width: 500px;\r\n  text-align: center;\r\n  line-height: 1.5rem;\r\n}\r\n\r\n.description-text p {\r\n  margin: 20px;\r\n}\r\n\r\n.description-text ul li {\r\n  width: 80%;\r\n  margin: 10px 20px;\r\n  text-align: left;\r\n}\r\n\r\n.description-btns {\r\n  text-align: center;\r\n}\r\n\r\n.start-menu {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 30px;\r\n  padding: 100px 40px;\r\n}\r\n\r\n.menu-item {\r\n  font-weight: 600;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  gap: 20px;\r\n  padding: 25px 20px;\r\n  border: 2px solid var(--color);\r\n  border-radius: 30px;\r\n  transition: 0.1s;\r\n}\r\n\r\n.menu-item:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.01);\r\n  box-shadow: 2px 2px 4px var(--color);\r\n}\r\n\r\n.menu-item:active {\r\n  transform: scale(1);\r\n}\r\n\r\n\r\n@media screen and (max-width: 640px) {\r\n\r\n  .main-container {\r\n    max-width: 80%;\r\n  }\r\n\r\n}", "",{"version":3,"sources":["webpack://./src/views/pages/index/index.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,SAAS;EACT,kBAAkB;EAClB,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,oCAAoC;AACtC;;AAEA;EACE,mBAAmB;AACrB;;;AAGA;;EAEE;IACE,cAAc;EAChB;;AAEF","sourcesContent":[".header-container {\r\n  justify-content: space-between;\r\n}\r\n\r\n.authorization-link {\r\n  display: inline-block;\r\n  flex-grow: 0;\r\n}\r\n\r\n.main-container-index {\r\n  font-family: 'Comfortaa';\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  gap: 50px;\r\n}\r\n\r\n.description {\r\n  max-width: 60%;\r\n  min-width: 375px;\r\n  padding: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\n.description-img {\r\n  max-width: 500px;\r\n  border-radius: 30px;\r\n  align-self: center;\r\n}\r\n\r\n.description-text {\r\n  max-width: 500px;\r\n  text-align: center;\r\n  line-height: 1.5rem;\r\n}\r\n\r\n.description-text p {\r\n  margin: 20px;\r\n}\r\n\r\n.description-text ul li {\r\n  width: 80%;\r\n  margin: 10px 20px;\r\n  text-align: left;\r\n}\r\n\r\n.description-btns {\r\n  text-align: center;\r\n}\r\n\r\n.start-menu {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 30px;\r\n  padding: 100px 40px;\r\n}\r\n\r\n.menu-item {\r\n  font-weight: 600;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  gap: 20px;\r\n  padding: 25px 20px;\r\n  border: 2px solid var(--color);\r\n  border-radius: 30px;\r\n  transition: 0.1s;\r\n}\r\n\r\n.menu-item:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.01);\r\n  box-shadow: 2px 2px 4px var(--color);\r\n}\r\n\r\n.menu-item:active {\r\n  transform: scale(1);\r\n}\r\n\r\n\r\n@media screen and (max-width: 640px) {\r\n\r\n  .main-container {\r\n    max-width: 80%;\r\n  }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/sprint/sprint.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/pages/sprint/sprint.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main-container-sprint {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-family: 'Comfortaa';\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.game-container {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 50px;\r\n}\r\n\r\n.sprint-timer {\r\n  position: absolute;\r\n  right: 100px;\r\n}\r\n\r\n.game-field {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 30px;\r\n}\r\n\r\n.current-score {\r\n  font-family: var(--font-primary);\r\n  font-size: 2.5rem;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.answers {\r\n  text-align: center;\r\n}\r\n\r\n.correct-answers p {\r\n  display: inline-block;\r\n  width: 12px;\r\n  height: 12px;\r\n  border-radius: 6px;\r\n  background: var(--color);\r\n  opacity: 20%;\r\n  margin: 3px;\r\n}\r\n\r\n.points-per-answer {\r\n  font-size: 1.1rem;\r\n  margin-top: 5px;\r\n}\r\n\r\n.progress {\r\n  margin-bottom: 10px;\r\n  border-bottom: 2px solid var(--color);\r\n}\r\n\r\n.word-props {\r\n  text-align: center;\r\n  margin: 20px;\r\n}\r\n\r\n.sprint-word {\r\n  font-family: var(--font-primary);\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.sprint-translation {\r\n  font-size: 1.3rem;\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.btns-container {\r\n  display: flex;\r\n  gap: 30px;\r\n}\r\n\r\n.btns-container div {\r\n  user-select: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: var(--font-primary);\r\n  font-size: 5rem;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 35px;\r\n  border: 2px solid var(--color);\r\n  opacity: 80%;\r\n  transition: 0.2s;\r\n}\r\n\r\n.btn-true {\r\n  background: #50a150;\r\n}\r\n\r\n.btn-false {\r\n  background: #f06969;\r\n}\r\n\r\n.btns-container div:hover {\r\n  cursor: pointer;\r\n  opacity: 100%;\r\n  box-shadow: 0 0 5px var(--color);\r\n}\r\n\r\n.btns-container div:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.result-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-top: 80px;\r\n  gap: 30px;\r\n}\r\n\r\n.result-container .sprint-audio-icon {\r\n  filter: var(--filter);\r\n}\r\n\r\n.result-container .sprint-audio-icon:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.05);\r\n}\r\n\r\n.result-container .sprint-audio-icon:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.results-header {\r\n  align-self: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.results {\r\n  display: flex;\r\n  gap: 50px;\r\n}\r\n\r\n.results-description p {\r\n  margin: 5px;\r\n}\r\n\r\n.results-accuracy {\r\n  align-self: center;\r\n}\r\n\r\n.word-list h3 {\r\n  margin: 10px 0;\r\n}\r\n\r\n.word-list li {\r\n  height: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.word-list li span {\r\n  font-family: var(--font-primary);\r\n  font-weight: 500;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/views/pages/sprint/sprint.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,gCAAgC;EAChC,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,wBAAwB;EACxB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,gCAAgC;EAChC,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gCAAgC;EAChC,eAAe;EACf,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,gCAAgC;EAChC,gBAAgB;EAChB,iBAAiB;AACnB","sourcesContent":[".main-container-sprint {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-family: 'Comfortaa';\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.game-container {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 50px;\r\n}\r\n\r\n.sprint-timer {\r\n  position: absolute;\r\n  right: 100px;\r\n}\r\n\r\n.game-field {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 30px;\r\n}\r\n\r\n.current-score {\r\n  font-family: var(--font-primary);\r\n  font-size: 2.5rem;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.answers {\r\n  text-align: center;\r\n}\r\n\r\n.correct-answers p {\r\n  display: inline-block;\r\n  width: 12px;\r\n  height: 12px;\r\n  border-radius: 6px;\r\n  background: var(--color);\r\n  opacity: 20%;\r\n  margin: 3px;\r\n}\r\n\r\n.points-per-answer {\r\n  font-size: 1.1rem;\r\n  margin-top: 5px;\r\n}\r\n\r\n.progress {\r\n  margin-bottom: 10px;\r\n  border-bottom: 2px solid var(--color);\r\n}\r\n\r\n.word-props {\r\n  text-align: center;\r\n  margin: 20px;\r\n}\r\n\r\n.sprint-word {\r\n  font-family: var(--font-primary);\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.sprint-translation {\r\n  font-size: 1.3rem;\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.btns-container {\r\n  display: flex;\r\n  gap: 30px;\r\n}\r\n\r\n.btns-container div {\r\n  user-select: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: var(--font-primary);\r\n  font-size: 5rem;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 35px;\r\n  border: 2px solid var(--color);\r\n  opacity: 80%;\r\n  transition: 0.2s;\r\n}\r\n\r\n.btn-true {\r\n  background: #50a150;\r\n}\r\n\r\n.btn-false {\r\n  background: #f06969;\r\n}\r\n\r\n.btns-container div:hover {\r\n  cursor: pointer;\r\n  opacity: 100%;\r\n  box-shadow: 0 0 5px var(--color);\r\n}\r\n\r\n.btns-container div:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.result-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-top: 80px;\r\n  gap: 30px;\r\n}\r\n\r\n.result-container .sprint-audio-icon {\r\n  filter: var(--filter);\r\n}\r\n\r\n.result-container .sprint-audio-icon:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.05);\r\n}\r\n\r\n.result-container .sprint-audio-icon:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.results-header {\r\n  align-self: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.results {\r\n  display: flex;\r\n  gap: 50px;\r\n}\r\n\r\n.results-description p {\r\n  margin: 5px;\r\n}\r\n\r\n.results-accuracy {\r\n  align-self: center;\r\n}\r\n\r\n.word-list h3 {\r\n  margin: 10px 0;\r\n}\r\n\r\n.word-list li {\r\n  height: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.word-list li span {\r\n  font-family: var(--font-primary);\r\n  font-weight: 500;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/statistics/statistics.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/pages/statistics/statistics.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main-container-statistics {\r\n  \r\n}", "",{"version":3,"sources":["webpack://./src/views/pages/statistics/statistics.css"],"names":[],"mappings":"AAAA;;AAEA","sourcesContent":[".main-container-statistics {\r\n  \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/team/team.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/pages/team/team.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main-container-team {\r\n  font-family: 'Comfortaa';\r\n  margin: auto;\r\n  display: flex;\r\n  height: 100%;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 0 50px;\r\n}\r\n\r\n.team-container {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n  flex-wrap: wrap;\r\n  margin: 50px 0;\r\n}\r\n\r\n.card-container {\r\n  height: fit-content;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 300px;\r\n  padding: 20px;\r\n  border: 2px solid var(--color);\r\n  box-shadow: 0 0 10px var(--color);\r\n  border-radius: 20px;\r\n  color: var(--color);\r\n  opacity: 90%;\r\n  overflow: hidden;\r\n}\r\n\r\n.card-img {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.card-description {\r\n  text-align: center;\r\n}\r\n\r\n.card-name {\r\n  font-family: var(--font-primary);\r\n  font-size: 1.2rem;\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.card-contribution {\r\n  margin: 20px 0;\r\n  text-align: justify;\r\n}\r\n\r\n.card-link {\r\n  display: inline-block;\r\n  font-weight: 600;\r\n}\r\n\r\n.card-link:hover {\r\n  text-shadow: 1px 1px 2px var(--ligth-color);\r\n}\r\n\r\n.card-link:active {\r\n  transform: scale(0.98);\r\n}", "",{"version":3,"sources":["webpack://./src/views/pages/team/team.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,8BAA8B;EAC9B,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,iCAAiC;EACjC,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gCAAgC;EAChC,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":[".main-container-team {\r\n  font-family: 'Comfortaa';\r\n  margin: auto;\r\n  display: flex;\r\n  height: 100%;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 0 50px;\r\n}\r\n\r\n.team-container {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n  flex-wrap: wrap;\r\n  margin: 50px 0;\r\n}\r\n\r\n.card-container {\r\n  height: fit-content;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 300px;\r\n  padding: 20px;\r\n  border: 2px solid var(--color);\r\n  box-shadow: 0 0 10px var(--color);\r\n  border-radius: 20px;\r\n  color: var(--color);\r\n  opacity: 90%;\r\n  overflow: hidden;\r\n}\r\n\r\n.card-img {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.card-description {\r\n  text-align: center;\r\n}\r\n\r\n.card-name {\r\n  font-family: var(--font-primary);\r\n  font-size: 1.2rem;\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.card-contribution {\r\n  margin: 20px 0;\r\n  text-align: justify;\r\n}\r\n\r\n.card-link {\r\n  display: inline-block;\r\n  font-weight: 600;\r\n}\r\n\r\n.card-link:hover {\r\n  text-shadow: 1px 1px 2px var(--ligth-color);\r\n}\r\n\r\n.card-link:active {\r\n  transform: scale(0.98);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/textbook/textbook.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/pages/textbook/textbook.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main-container-textbook {\r\n  font-family: 'Comfortaa';\r\n  margin: auto;\r\n  display: flex;\r\n  height: 100%; \r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 40px;\r\n}\r\n\r\n.words-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 50px;\r\n  flex-wrap: wrap;\r\n  flex-grow: 1;\r\n}\r\n\r\n.textbook-game-btns {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 50px;\r\n}\r\n\r\n.textbook-game-btns button {\r\n  border: none;\r\n  background: transparent;\r\n  font-family: var(--font-secondary);\r\n  font-weight: 600;\r\n  transition: 0.1s;\r\n}\r\n\r\n.textbook-game-btns button img {\r\n  vertical-align: middle;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.textbook-game-btns button p {\r\n  opacity: 80%;\r\n}\r\n\r\n.textbook-game-btns button:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.textbook-game-btns button:active {\r\n  transform: scale(0.98);\r\n}", "",{"version":3,"sources":["webpack://./src/views/pages/textbook/textbook.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,8BAA8B;EAC9B,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,kCAAkC;EAClC,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":[".main-container-textbook {\r\n  font-family: 'Comfortaa';\r\n  margin: auto;\r\n  display: flex;\r\n  height: 100%; \r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 40px;\r\n}\r\n\r\n.words-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 50px;\r\n  flex-wrap: wrap;\r\n  flex-grow: 1;\r\n}\r\n\r\n.textbook-game-btns {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 50px;\r\n}\r\n\r\n.textbook-game-btns button {\r\n  border: none;\r\n  background: transparent;\r\n  font-family: var(--font-secondary);\r\n  font-weight: 600;\r\n  transition: 0.1s;\r\n}\r\n\r\n.textbook-game-btns button img {\r\n  vertical-align: middle;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.textbook-game-btns button p {\r\n  opacity: 80%;\r\n}\r\n\r\n.textbook-game-btns button:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.textbook-game-btns button:active {\r\n  transform: scale(0.98);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/jwt-decode/build/jwt-decode.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/jwt-decode/build/jwt-decode.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvalidTokenError": () => (/* binding */ n),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function e(e){this.message=e}e.prototype=new Error,e.prototype.name="InvalidCharacterError";var r="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(r){var t=String(r).replace(/=+$/,"");if(t.length%4==1)throw new e("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,a=0,i=0,c="";o=t.charAt(i++);~o&&(n=a%4?64*n+o:o,a++%4)?c+=String.fromCharCode(255&n>>(-2*a&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return c};function t(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(t)}catch(e){return r(t)}}function n(e){this.message=e}function o(e,r){if("string"!=typeof e)throw new n("Invalid token specified");var o=!0===(r=r||{}).header?0:1;try{return JSON.parse(t(e.split(".")[o]))}catch(e){throw new n("Invalid token specified: "+e.message)}}n.prototype=new Error,n.prototype.name="InvalidTokenError";/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (o);
//# sourceMappingURL=jwt-decode.esm.js.map


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/views/components/authorization/authorization.css":
/*!**************************************************************!*\
  !*** ./src/views/components/authorization/authorization.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_authorization_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./authorization.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/components/authorization/authorization.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_authorization_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_authorization_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_authorization_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_authorization_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_authorization_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!./authorization.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/components/authorization/authorization.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_authorization_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./authorization.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/components/authorization/authorization.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_authorization_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_authorization_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_authorization_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_authorization_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_authorization_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_authorization_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_authorization_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_authorization_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/views/components/difficulty-bar/difficulty-bar.css":
/*!****************************************************************!*\
  !*** ./src/views/components/difficulty-bar/difficulty-bar.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_difficulty_bar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./difficulty-bar.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/components/difficulty-bar/difficulty-bar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_difficulty_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_difficulty_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_difficulty_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_difficulty_bar_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_difficulty_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!./difficulty-bar.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/components/difficulty-bar/difficulty-bar.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_difficulty_bar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./difficulty-bar.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/components/difficulty-bar/difficulty-bar.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_difficulty_bar_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_difficulty_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_difficulty_bar_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_difficulty_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_difficulty_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_difficulty_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_difficulty_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_difficulty_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/views/components/pagination/pagination.css":
/*!********************************************************!*\
  !*** ./src/views/components/pagination/pagination.css ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./pagination.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/components/pagination/pagination.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!./pagination.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/components/pagination/pagination.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./pagination.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/components/pagination/pagination.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/views/components/word-card/word-card.css":
/*!******************************************************!*\
  !*** ./src/views/components/word-card/word-card.css ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_word_card_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./word-card.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/components/word-card/word-card.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_word_card_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_word_card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_word_card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_word_card_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_word_card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!./word-card.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/components/word-card/word-card.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_word_card_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./word-card.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/components/word-card/word-card.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_word_card_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_word_card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_word_card_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_word_card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_word_card_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_word_card_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_word_card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_word_card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/views/pages/error/error.css":
/*!*****************************************!*\
  !*** ./src/views/pages/error/error.css ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_error_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./error.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/error/error.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_error_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_error_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_error_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_error_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_error_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!./error.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/error/error.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_error_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./error.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/error/error.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_error_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_error_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_error_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_error_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_error_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_error_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_error_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_error_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/views/pages/index/index.css":
/*!*****************************************!*\
  !*** ./src/views/pages/index/index.css ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/index/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/index/index.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/index/index.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/views/pages/sprint/sprint.css":
/*!*******************************************!*\
  !*** ./src/views/pages/sprint/sprint.css ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./sprint.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/sprint/sprint.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!./sprint.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/sprint/sprint.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./sprint.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/sprint/sprint.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sprint_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/views/pages/statistics/statistics.css":
/*!***************************************************!*\
  !*** ./src/views/pages/statistics/statistics.css ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_statistics_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./statistics.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/statistics/statistics.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_statistics_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_statistics_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_statistics_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_statistics_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_statistics_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!./statistics.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/statistics/statistics.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_statistics_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./statistics.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/statistics/statistics.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_statistics_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_statistics_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_statistics_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_statistics_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_statistics_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_statistics_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_statistics_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_statistics_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/views/pages/team/team.css":
/*!***************************************!*\
  !*** ./src/views/pages/team/team.css ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_team_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./team.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/team/team.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_team_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_team_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_team_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_team_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_team_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!./team.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/team/team.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_team_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./team.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/team/team.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_team_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_team_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_team_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_team_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_team_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_team_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_team_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_team_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/views/pages/textbook/textbook.css":
/*!***********************************************!*\
  !*** ./src/views/pages/textbook/textbook.css ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_textbook_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./textbook.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/textbook/textbook.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_textbook_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_textbook_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_textbook_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_textbook_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_textbook_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!./textbook.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/textbook/textbook.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_textbook_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./textbook.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/pages/textbook/textbook.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_textbook_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_textbook_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_textbook_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_textbook_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_textbook_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_textbook_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_textbook_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_textbook_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/common/utils/utils.ts":
/*!***********************************!*\
  !*** ./src/common/utils/utils.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.closeBurgerMenu = exports.showBurgerMenu = exports.hideBurgerMenu = exports.toggleBurgerMenu = exports.findHtmlElement = void 0;
function findHtmlElement(fragment, selector) {
    const el = fragment.querySelector(selector);
    if (!el)
        throw new Error(`No element was found: ${selector}`);
    return el;
}
exports.findHtmlElement = findHtmlElement;
function toggleBurgerMenu() {
    const burgerIcon = findHtmlElement(document, '.burger');
    const navBar = findHtmlElement(document, '.nav-bar');
    burgerIcon.classList.toggle('open');
    navBar.classList.toggle('open');
}
exports.toggleBurgerMenu = toggleBurgerMenu;
function hideBurgerMenu() {
    const burger = findHtmlElement(document, '.burger');
    const navBar = findHtmlElement(document, '.nav-bar');
    burger.style.display = 'none';
    navBar.style.display = 'none';
}
exports.hideBurgerMenu = hideBurgerMenu;
function showBurgerMenu() {
    const burger = findHtmlElement(document, '.burger');
    const navBar = findHtmlElement(document, '.nav-bar');
    burger.style.display = 'inline-block';
    navBar.style.display = 'block';
}
exports.showBurgerMenu = showBurgerMenu;
function closeBurgerMenu() {
    const burger = findHtmlElement(document, '.burger');
    const navBar = findHtmlElement(document, '.nav-bar');
    burger.classList.remove('open');
    navBar.classList.remove('open');
}
exports.closeBurgerMenu = closeBurgerMenu;


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config = {
    // sitePath: '', // для npm run start
    sitePath: '/rslang',
    // sitePath: '/ann-makovskaya-JSFE2022Q1/syllabus', // для дэплоя на гитхаб
    api: {
        url: 'http://localhost:4000/', // https://<your-app-name>.herokuapp.com/
    },
};
exports["default"] = config;


/***/ }),

/***/ "./src/controllers/AudiocallController.ts":
/*!************************************************!*\
  !*** ./src/controllers/AudiocallController.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


// import { findHtmlElement } from '../common/utils/utils';
// import { IWord, IWords } from '../common/interfaces/IWord';
// import { IDataAudio } from '../common/interfaces/IDataAudio';
// import config from '../config';
// import Word from '../models/Word';
// import AudiocallView from '../views/pages/audiocall/audiocall';
// import { renderDifficultyBar } from '../views/components/difficulty-bar/difficulty-bar';
Object.defineProperty(exports, "__esModule", ({ value: true }));
class AudiocallController {
    actionIndex(page, difficulty, textBookClick) {
        console.log(page, difficulty, textBookClick);
        // const data: IDataAudio = {
        //   currentDifficulty: 0,
        //   data2: 'audiocall',
        //   wordsArr: [],
        //   currentWord: null,
        //   currentAnswers: [],
        //   answerMap: new Map(),
        // };
        // const mainContainer = findHtmlElement(document, 'main');
        // mainContainer.innerHTML = '';
        // mainContainer.append(renderDifficultyBar());
        // mainContainer.insertAdjacentHTML('beforeend', AudiocallView.renderStartBtn());
        // const startBtn = <HTMLButtonElement>document.querySelector('.start-btn');
        // const difficultyContainer = document.querySelector('.difficulty-container');
        // function activateProp(el: HTMLElement, selector: string) {
        //   if (el) {
        //     const elements = document.querySelectorAll(selector);
        //     elements?.forEach((element) => element.classList.remove('active'));
        //     el.classList.add('active');
        //     startBtn.disabled = false;
        //     data.currentDifficulty = Number(el.innerText) - 1;
        //   }
        // }
        // difficultyContainer?.addEventListener('click', (e) => {
        //   activateProp(e.target as HTMLElement, '.difficulty-btn');
        // });
        // function buttonPress() {
        //   document.addEventListener('keypress', (event: KeyboardEvent) => {
        //     if (event.key === 'Enter') {
        //       (<HTMLButtonElement>document.getElementById('btn-next')).click();
        //     } else {
        //       (<HTMLButtonElement>(
        //         document.querySelector(`.answer${event.key}`)
        //       )).click();
        //     }
        //   });
        // }
        // async function generateWords() {
        //   const temporaryResult: IWords[] = [];
        //   for (let i = 0; i < 30; i += 1) {
        //     const midRes: IWord[] = await Word.getWords(i, data.currentDifficulty)
        //       .then((words) => words)
        //       .catch((e) => console.log(e));
        //     temporaryResult.push(midRes.flat());
        //   }
        //   data.wordsArr = temporaryResult.flat();
        // }
        // function playAudio(btn: HTMLElement) {
        //   if (btn) {
        //     const id = btn.id.split('-').reverse()[0];
        //     (<HTMLAudioElement>document.getElementById(`audio-word-${id}`)).play();
        //   }
        // }
        // function wordsRandomizer() {
        //   data.currentWord = data.wordsArr[Math.floor(Math.random() * 601)];
        //   const randomWord = () => data.wordsArr[Math.floor(Math.random() * 601)];
        //   const randomArray: () => string[] = () => {
        //     const arr = [];
        //     for (let i = 0; i < 5; i += 1) {
        //       arr.push(randomWord().wordTranslate);
        //     }
        //     return arr;
        //   };
        //   data.currentAnswers = randomArray();
        //   data.currentAnswers.splice(
        //     Math.floor(Math.random() * 5),
        //     1,
        //     data.currentWord.wordTranslate,
        //   );
        // }
        // startBtn.onclick = async () => {
        //   startBtn.disabled = true;
        //   await generateWords();
        //   wordsRandomizer();
        //   mainContainer.innerHTML = AudiocallView.renderQuestion(
        //     data.currentAnswers,
        //     data.currentWord,
        //   );
        //   (<HTMLAudioElement>(
        //     document.getElementById(`audio-word-${(<IWord>data.currentWord).word}`)
        //   )).play();
        //   checkAnswer();
        //   nextQuestion();
        //   buttonPress();
        //   (<HTMLImageElement>(
        //     document.querySelector('.audio-btn-img')
        //   )).addEventListener('click', (e) => playAudio(e.target as HTMLImageElement));
        // };
        // function checkAnswer() {
        //   (<HTMLDivElement>document.querySelector('.btns-container')).onclick = (
        //     e: Event,
        //   ) => {
        //     nextQuestion();
        //     buttonPress();
        //     const answerItems = [
        //       ...document.getElementsByClassName('answer-item'),
        //     ];
        //     if ((<HTMLElement>e.target).classList.contains('answer-item')) {
        //       const answerImage = document.querySelector('.sound-icon');
        //       (<HTMLImageElement>answerImage).src = `${config.api.url}${
        //         (<IWord>data.currentWord).image
        //       }`;
        //       (<HTMLParagraphElement>(
        //         document.querySelector('.current-word-answer')
        //       )).innerHTML = (<IWord>data.currentWord).word;
        //       if ((<HTMLElement>e.target).innerText.slice(3) ===
        // (<IWord>data.currentWord).wordTranslate) {
        //         (<HTMLButtonElement[]>answerItems).forEach((el) =>
        // el.setAttribute('disabled', 'true'));
        //         (<HTMLElement>e.target).insertAdjacentHTML(
        //           'beforebegin',
        //           AudiocallView.rightIcon(),
        //         );
        //         (<HTMLButtonElement>document.getElementById('btn-next')).disabled = false;
        //         data.answerMap.set(<IWord>data.currentWord, 'correct');
        //       } else {
        //         (<HTMLButtonElement[]>answerItems).forEach(
        //           (el) => el.setAttribute('disabled', 'true'),
        //         );
        //         (<HTMLButtonElement[]>answerItems).forEach((el) => {
        //           if (
        //             el.innerHTML.slice(3) === (<IWord>data.currentWord).wordTranslate
        //           ) {
        //             el.insertAdjacentHTML('beforebegin', AudiocallView.rightIcon());
        //           }
        //         });
        //         (<HTMLElement>e.target).insertAdjacentHTML(
        //           'beforebegin',
        //           AudiocallView.wrongIcon(),
        //         );
        //         (<HTMLButtonElement>document.getElementById('btn-next')).disabled = false;
        //         data.answerMap.set(<IWord>data.currentWord, 'incorrect');
        //       }
        //     }
        //   };
        // }
        // function nextQuestion() {
        //   (<HTMLButtonElement>document.getElementById('btn-next')).onclick = () => {
        //     if (data.answerMap.size < 4) {
        //       wordsRandomizer();
        //       mainContainer.innerHTML = AudiocallView.renderQuestion(
        //         data.currentAnswers,
        //         data.currentWord,
        //       );
        //       (<HTMLAudioElement>(
        //         document.getElementById(`audio-word-${(<IWord>data.currentWord).word}`)
        //       )).play();
        //       (<HTMLImageElement>(
        //         document.querySelector('.audio-btn-img')
        //       )).addEventListener('click', (e) => playAudio(e.target as HTMLImageElement));
        //       checkAnswer();
        //       buttonPress();
        //     } else {
        //       mainContainer.innerHTML = '';
        //       const mapSort = new Map([...data.answerMap.entries()].sort());
        //       const mapCorrect = new Map(
        //         [...mapSort].filter(([_, v]) => v === 'correct'),
        //       );
        //       const mapIncorrect = new Map(
        //         [...mapSort].filter(([_, v]) => v === 'incorrect'),
        //       );
        //       mainContainer.insertAdjacentHTML(
        //         'afterbegin',
        //         AudiocallView.renderResults(
        //           mapCorrect.size,
        //           mapIncorrect.size,
        //           mapIncorrect.size === 0 ? 100 : (mapCorrect.size / mapSort.size) * 100,
        //         ),
        //       );
        //       mapCorrect.forEach((_, k) => {
        //         (<HTMLDivElement>(
        //           document.querySelector('.correct-results')
        //         )).insertAdjacentHTML(
        //           'beforeend',
        //           AudiocallView.renderCorrectResults(k),
        //         );
        //       });
        //       mapIncorrect.forEach((_, k) => {
        //         (<HTMLDivElement>(
        //           document.querySelector('.incorrect-results')
        //         )).insertAdjacentHTML(
        //           'beforeend',
        //           AudiocallView.renderIncorrectResults(k),
        //         );
        //       });
        //       document.querySelectorAll('.audio-icon').forEach((icon) => {
        //         icon.addEventListener('click', (e) => playAudio(e.target as HTMLElement));
        //       });
        //     }
        //   };
        // }
    }
}
exports["default"] = AudiocallController;


/***/ }),

/***/ "./src/controllers/ErrorController.ts":
/*!********************************************!*\
  !*** ./src/controllers/ErrorController.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(/*! ../common/utils/utils */ "./src/common/utils/utils.ts");
const error_1 = __importDefault(__webpack_require__(/*! ../views/pages/error/error */ "./src/views/pages/error/error.ts"));
class ErrorController {
    actionIndex() {
        const main = (0, utils_1.findHtmlElement)(document, 'main');
        main.innerHTML = error_1.default.draw();
    }
}
exports["default"] = ErrorController;


/***/ }),

/***/ "./src/controllers/IndexController.ts":
/*!********************************************!*\
  !*** ./src/controllers/IndexController.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(/*! ../common/utils/utils */ "./src/common/utils/utils.ts");
const index_1 = __importDefault(__webpack_require__(/*! ../views/pages/index/index */ "./src/views/pages/index/index.ts"));
class IndexController {
    constructor(app) {
        this.app = app;
    }
    actionIndex() {
        const main = (0, utils_1.findHtmlElement)(document, 'main');
        main.innerHTML = index_1.default.draw();
        this.app.setRouterToElements('.start-menu li');
        this.app.setRouterToElements('.btn-like-link');
    }
}
exports["default"] = IndexController;


/***/ }),

/***/ "./src/controllers/SprintController.ts":
/*!*********************************************!*\
  !*** ./src/controllers/SprintController.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(/*! ../common/utils/utils */ "./src/common/utils/utils.ts");
const sprint_1 = __importDefault(__webpack_require__(/*! ../views/pages/sprint/sprint */ "./src/views/pages/sprint/sprint.ts"));
class SprintController {
    actionIndex(page, difficulty, textBookClick) {
        console.log(page, difficulty, textBookClick);
        // const data = {
        //   data1: '3',
        //   data2: 'sprint',
        // };
        const main = (0, utils_1.findHtmlElement)(document, 'main');
        main.innerHTML = sprint_1.default.draw();
    }
}
exports["default"] = SprintController;


/***/ }),

/***/ "./src/controllers/StatisticsController.ts":
/*!*************************************************!*\
  !*** ./src/controllers/StatisticsController.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(/*! ../common/utils/utils */ "./src/common/utils/utils.ts");
const statistics_1 = __importDefault(__webpack_require__(/*! ../views/pages/statistics/statistics */ "./src/views/pages/statistics/statistics.ts"));
class StatisticsController {
    actionIndex() {
        // const data = {
        //   data1: '2',
        //   data2: 'statistics',
        // };
        const main = (0, utils_1.findHtmlElement)(document, 'main');
        main.innerHTML = statistics_1.default.draw();
    }
}
exports["default"] = StatisticsController;


/***/ }),

/***/ "./src/controllers/TeamController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/TeamController.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(/*! ../common/utils/utils */ "./src/common/utils/utils.ts");
const team_1 = __importDefault(__webpack_require__(/*! ../views/pages/team/team */ "./src/views/pages/team/team.ts"));
class TeamController {
    actionIndex() {
        const main = (0, utils_1.findHtmlElement)(document, 'main');
        main.innerHTML = team_1.default.draw();
    }
}
exports["default"] = TeamController;


/***/ }),

/***/ "./src/controllers/TextbookController.ts":
/*!***********************************************!*\
  !*** ./src/controllers/TextbookController.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Word_1 = __importDefault(__webpack_require__(/*! ../models/Word */ "./src/models/Word.ts"));
const utils_1 = __webpack_require__(/*! ../common/utils/utils */ "./src/common/utils/utils.ts");
const difficulty_bar_1 = __webpack_require__(/*! ../views/components/difficulty-bar/difficulty-bar */ "./src/views/components/difficulty-bar/difficulty-bar.ts");
const pagination_1 = __webpack_require__(/*! ../views/components/pagination/pagination */ "./src/views/components/pagination/pagination.ts");
const word_card_1 = __webpack_require__(/*! ../views/components/word-card/word-card */ "./src/views/components/word-card/word-card.ts");
const textbook_1 = __webpack_require__(/*! ../views/pages/textbook/textbook */ "./src/views/pages/textbook/textbook.ts");
const User_1 = __importDefault(__webpack_require__(/*! ../models/User */ "./src/models/User.ts"));
class TextbookController {
    constructor(app) {
        this.app = app;
        this.app.subscribeOnAuthChange(() => {
            (0, difficulty_bar_1.setHardWordsVisible)(this.app.isAuth);
            (0, word_card_1.setWordPropsVisible)(this.app.isAuth);
        });
        this.data = this.getFromLS() || { difficulty: 0, pageNum: 0 };
    }
    actionIndex() {
        const main = (0, utils_1.findHtmlElement)(document, 'main');
        main.innerHTML = (0, textbook_1.renderTextbookPage)();
        const header = (0, utils_1.findHtmlElement)(document, 'h1');
        header.after((0, difficulty_bar_1.renderDifficultyBar)());
        this.addListenersToDiffBar();
        (0, difficulty_bar_1.setHardWordsVisible)(this.app.isAuth);
        this.generateWordCards(this.data.pageNum, this.data.difficulty, this.app.isAuth);
        (0, difficulty_bar_1.activateCurrentDifficulty)(this.data.difficulty + 1);
        const mainContainer = (0, utils_1.findHtmlElement)(document, '.main-container-textbook');
        mainContainer.append((0, pagination_1.renderPagination)());
        this.addListenersToPagination();
        this.addListenersToGameBtns();
    }
    generateWordCards(page, difficulty, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const wordsContainer = (0, utils_1.findHtmlElement)(document, '.words-container');
            wordsContainer.innerHTML = '';
            let words = difficulty !== 6
                ? yield Word_1.default.getWords(page, difficulty)
                : yield User_1.default.getUserWords();
            if (difficulty === 6) {
                const wordsPromises = words
                    .filter((word) => word.difficulty === 'hard')
                    .map((word) => Word_1.default.convertIUserWordToIWord(word));
                const results = yield Promise.allSettled(wordsPromises);
                const successfullWords = results
                    .filter((res) => res.status === 'fulfilled')
                    .map((res) => res.value)
                    .filter((val) => val);
                words = successfullWords;
            }
            words.forEach((word) => {
                const card = (0, word_card_1.renderWordCard)(word);
                wordsContainer.append(card);
            });
            (0, word_card_1.changeCardBoxshadow)(difficulty + 1);
            (0, word_card_1.setWordPropsVisible)(auth);
            this.addListenersToCards();
            (0, pagination_1.setPageNum)(page + 1);
            (0, pagination_1.disableBtns)(page);
            this.setToLS({ pageNum: page, difficulty });
            const pagination = (0, utils_1.findHtmlElement)(document, '.pagination-container');
            pagination.style.display = this.data.difficulty === 6 ? 'none' : 'flex';
            const hardBtn = document.querySelectorAll('.word-hard');
            hardBtn.forEach((btn) => {
                btn.style.display = this.data.difficulty === 6 ? 'none' : 'block';
            });
            this.markUserWords();
        });
    }
    addListenersToDiffBar() {
        const difficultyContainer = (0, utils_1.findHtmlElement)(document, '.difficulty-container');
        difficultyContainer.addEventListener('click', (e) => {
            const btn = e.target;
            (0, difficulty_bar_1.activateProp)(btn);
            if (!btn.classList.contains('difficulty-btn'))
                return;
            const diff = btn.dataset.group;
            this.data.difficulty = Number(diff) - 1 || 0;
            this.data.pageNum = 0;
            this.generateWordCards(this.data.pageNum, this.data.difficulty, this.app.isAuth)
                .then(() => (0, word_card_1.changeCardBoxshadow)(this.data.difficulty + 1));
        });
    }
    addListenersToCards() {
        const wordProps = document.querySelectorAll('.word-properties');
        wordProps.forEach((container) => {
            container.addEventListener('click', (e) => {
                (0, word_card_1.chooseWordProp)(e.target);
                this.onPropsBtnsClick(e.target);
            });
        });
        document.querySelectorAll('.audio-icon').forEach((icon) => {
            icon.addEventListener('click', (e) => (0, word_card_1.playAudio)(e.target));
        });
    }
    addListenersToGameBtns() {
        const audiocallGame = (0, utils_1.findHtmlElement)(document, '.start-audiocall');
        const sprintGame = (0, utils_1.findHtmlElement)(document, '.start-sprint');
        audiocallGame.addEventListener('click', () => this.callGame('audiocall'));
        sprintGame.addEventListener('click', () => this.callGame('sprint'));
    }
    addListenersToPagination() {
        const pagination = (0, utils_1.findHtmlElement)(document, '.pagination-container');
        pagination.addEventListener('click', (e) => {
            const btn = e.target;
            if (btn.classList.contains('disabled'))
                return;
            const nextPage = (0, utils_1.findHtmlElement)(document, '.pagination-next');
            const lastPage = (0, utils_1.findHtmlElement)(document, '.pagination-last');
            const prevPage = (0, utils_1.findHtmlElement)(document, '.pagination-prev');
            const firstPage = (0, utils_1.findHtmlElement)(document, '.pagination-first');
            if (btn === nextPage) {
                this.data.pageNum += 1;
                this.data.pageNum = this.data.pageNum <= 29 ? this.data.pageNum : 29;
            }
            if (btn === lastPage) {
                this.data.pageNum = 29;
            }
            if (btn === prevPage) {
                this.data.pageNum -= 1;
                this.data.pageNum = this.data.pageNum >= 0 ? this.data.pageNum : 0;
            }
            if (btn === firstPage) {
                this.data.pageNum = 0;
            }
            this.generateWordCards(this.data.pageNum, this.data.difficulty, this.app.isAuth);
        });
    }
    callGame(game) {
        const params = {
            page: this.data.pageNum,
            difficulty: this.data.difficulty,
            textBookClick: true,
        };
        this.app.openGamePage(game, params);
    }
    setToLS(data) {
        localStorage.setItem('textbookData', JSON.stringify(data));
    }
    getFromLS() {
        const textbookData = localStorage.getItem('textbookData');
        let res = { difficulty: 0, pageNum: 0 };
        if (textbookData) {
            try {
                res = JSON.parse(textbookData);
            }
            catch (err) {
                console.log(err);
            }
        }
        return res;
    }
    createUserWord(difficulty) {
        const word = {
            difficulty,
            optional: {
                streak: 0,
                newWord: false,
                totalCountAudiocall: 0,
                totalCorrectAudiocall: 0,
                totalCountSprint: 0,
                totalCorrectSprint: 0,
            },
        };
        return word;
    }
    putWordToServer(id, difficulty) {
        return __awaiter(this, void 0, void 0, function* () {
            let userWord = yield User_1.default.getUserWord(id);
            if (userWord) {
                userWord.difficulty = difficulty;
                // to match PUT IUserWord interface (fails with them)
                delete userWord.wordId;
                delete userWord.id;
                yield User_1.default.updateUserWord(id, userWord);
            }
            else {
                userWord = this.createUserWord(difficulty);
                User_1.default.createUserWord(id, userWord);
            }
        });
    }
    onPropsBtnsClick(eventTarget) {
        return __awaiter(this, void 0, void 0, function* () {
            const word = eventTarget.closest('.word-container');
            if (!word)
                return;
            const activeProp = word.querySelector('.word-properties .active');
            let currentDifficulty = '';
            if (activeProp) {
                currentDifficulty = activeProp.dataset.difficulty || '';
                yield this.putWordToServer(word.id, currentDifficulty);
                if (this.data.difficulty === 6) {
                    word.remove();
                }
            }
            else {
                yield User_1.default.deleteUserWord(word.id);
            }
            // await this.generateWordCards(this.data.pageNum, this.data.difficulty, this.app.isAuth);
        });
    }
    markUserWords() {
        return __awaiter(this, void 0, void 0, function* () {
            const userWords = yield User_1.default.getUserWords();
            const wordsOnPage = document.querySelectorAll('.word-container');
            wordsOnPage.forEach((word) => {
                const userWord = userWords.find((el) => el.wordId === word.id);
                if (userWord) {
                    const prop = word.querySelector(`.word-${userWord.difficulty}`);
                    if (prop) {
                        prop.classList.add('active');
                    }
                }
            });
        });
    }
}
exports["default"] = TextbookController;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const App_1 = __importDefault(__webpack_require__(/*! ./models/App */ "./src/models/App.ts"));
__webpack_require__(/*! ./style.css */ "./src/style.css");
const app = new App_1.default();
app.start();


/***/ }),

/***/ "./src/models/App.ts":
/*!***************************!*\
  !*** ./src/models/App.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(/*! ../common/utils/utils */ "./src/common/utils/utils.ts");
const config_1 = __importDefault(__webpack_require__(/*! ../config */ "./src/config.ts"));
const AudiocallController_1 = __importDefault(__webpack_require__(/*! ../controllers/AudiocallController */ "./src/controllers/AudiocallController.ts"));
const ErrorController_1 = __importDefault(__webpack_require__(/*! ../controllers/ErrorController */ "./src/controllers/ErrorController.ts"));
// eslint-disable-next-line import/no-cycle
const IndexController_1 = __importDefault(__webpack_require__(/*! ../controllers/IndexController */ "./src/controllers/IndexController.ts"));
const SprintController_1 = __importDefault(__webpack_require__(/*! ../controllers/SprintController */ "./src/controllers/SprintController.ts"));
const StatisticsController_1 = __importDefault(__webpack_require__(/*! ../controllers/StatisticsController */ "./src/controllers/StatisticsController.ts"));
const TeamController_1 = __importDefault(__webpack_require__(/*! ../controllers/TeamController */ "./src/controllers/TeamController.ts"));
const TextbookController_1 = __importDefault(__webpack_require__(/*! ../controllers/TextbookController */ "./src/controllers/TextbookController.ts"));
const authorization_1 = __importDefault(__webpack_require__(/*! ../views/components/authorization/authorization */ "./src/views/components/authorization/authorization.ts"));
const EventObserver_1 = __importDefault(__webpack_require__(/*! ./EventObserver */ "./src/models/EventObserver.ts"));
const User_1 = __importDefault(__webpack_require__(/*! ./User */ "./src/models/User.ts"));
class App {
    constructor() {
        this._url = window.location.pathname;
        this.page = '';
        const pattern = '/[a-zA-Z.]*$';
        const match = this._url.match(pattern);
        if (match)
            this.page = match[0].slice(1).split('.')[0] || 'index';
        this._isAuth = !!localStorage.getItem('token');
        this.authObserver = new EventObserver_1.default();
        this.pages = {
            index: new IndexController_1.default(this),
            team: new TeamController_1.default(),
            textbook: new TextbookController_1.default(this),
            sprint: new SprintController_1.default(),
            audiocall: new AudiocallController_1.default(),
            statistics: new StatisticsController_1.default(),
            error: new ErrorController_1.default(),
        };
        this.urlObserver = new EventObserver_1.default();
        this.htmlElemets = {
            body: (0, utils_1.findHtmlElement)(document, 'body'),
            authContainer: (0, utils_1.findHtmlElement)(document, '.authorization-container'),
            authIcon: (0, utils_1.findHtmlElement)(document, '.authorization-icon'),
            tooltipText: (0, utils_1.findHtmlElement)(document, '.tooltiptext'),
        };
        // add content into main according to link
        this.getContent();
    }
    get url() {
        return this._url;
    }
    set url(value) {
        this._url = value;
        const pattern = '/[a-zA-Z.]*$';
        const match = this._url.match(pattern);
        if (match)
            this.page = match[0].slice(1).split('.')[0] || 'index';
        if (this.page === 'index') {
            (0, utils_1.hideBurgerMenu)();
        }
        else {
            (0, utils_1.showBurgerMenu)();
        }
    }
    get isAuth() {
        return this._isAuth;
    }
    set isAuth(value) {
        this._isAuth = value;
        const imgUrl = `./assets/images/${value ? '' : 'un'}verified.png`;
        this.htmlElemets.authIcon.src = imgUrl;
        this.htmlElemets.tooltipText.innerHTML = value ? 'Выйти' : 'Войти?';
        this.authObserver.broadcast(this.isAuth);
    }
    subscribeOnAuthChange(callback) {
        this.authObserver.subscribe(callback);
    }
    start() {
        this.router();
        this.authorization();
    }
    router() {
        this.urlObserver.subscribe(() => {
            this.getContent();
        });
        // add event listener and observer to NavBar links
        this.setRouterToElements('.nav-bar li');
        this.setRouterToElements('.logo');
        const burgerIcon = (0, utils_1.findHtmlElement)(document, '.burger');
        burgerIcon.addEventListener('click', () => App.toggleBurgerMenu());
        // add event listener to browser history buttons
        window.addEventListener('popstate', () => {
            this.url = window.location.pathname;
            this.urlObserver.broadcast(this.url);
        });
    }
    setRouterToElements(selector) {
        const menuLinks = document.querySelectorAll(selector);
        menuLinks.forEach((link) => {
            let { path } = link.dataset;
            if (path)
                path = `${config_1.default.sitePath}${path}`;
            link.addEventListener('click', () => {
                if (path) {
                    window.history.pushState({ state: path }, 'SyllaBus', path);
                    this.url = path;
                    this.urlObserver.broadcast(this.url);
                }
            });
        });
    }
    getContent() {
        (0, utils_1.closeBurgerMenu)();
        const controller = this.pages[this.page];
        if (controller) {
            controller.actionIndex();
        }
        else {
            this.pages.error.actionIndex();
        }
    }
    static toggleBurgerMenu() {
        const burgerIcon = (0, utils_1.findHtmlElement)(document, '.burger');
        const navBar = (0, utils_1.findHtmlElement)(document, '.nav-bar');
        burgerIcon.classList.toggle('open');
        navBar.classList.toggle('open');
    }
    openAuthorizationBlock() {
        this.htmlElemets.body.style.height = '100%';
        this.htmlElemets.body.style.position = 'sticky';
        this.htmlElemets.authContainer.style.display = 'block';
    }
    closeAuthorizationBlock() {
        this.htmlElemets.body.style.height = '';
        this.htmlElemets.body.style.position = '';
        this.htmlElemets.authContainer.style.display = 'none';
    }
    setLoginForm() {
        this.htmlElemets.authBlockHeader.innerHTML = 'Авторизация';
        this.htmlElemets.registrationForm.style.display = 'none';
        this.htmlElemets.loginForm.style.display = 'flex';
        this.htmlElemets.authBlock.style.height = '330px';
        this.htmlElemets.loginBtn.style.display = 'inline-block';
        this.htmlElemets.loginLinkBtn.style.display = 'none';
        this.htmlElemets.registrationBtn.style.display = 'none';
        this.htmlElemets.registrationLinkBtn.style.display = 'inline-block';
    }
    setRegistrationForm() {
        this.htmlElemets.authBlockHeader.innerHTML = 'Регистрация';
        this.htmlElemets.registrationForm.style.display = 'flex';
        this.htmlElemets.loginForm.style.display = 'none';
        this.htmlElemets.authBlock.style.height = '390px';
        this.htmlElemets.loginBtn.style.display = 'none';
        this.htmlElemets.registrationLinkBtn.style.display = 'none';
        this.htmlElemets.registrationBtn.style.display = 'inline-block';
        this.htmlElemets.loginLinkBtn.style.display = 'inline-block';
    }
    clearLoginForm() {
        this.htmlElemets.loginEmail.value = '';
        this.htmlElemets.loginPassword.value = '';
        this.htmlElemets.loginError.style.display = 'none';
    }
    clearRegistrationForm() {
        this.htmlElemets.registrationName.value = '';
        this.htmlElemets.registrationEmail.value = '';
        this.htmlElemets.registrationPassword.value = '';
        this.htmlElemets.registrationSuccess.style.display = 'none';
        this.htmlElemets.registrationError.style.display = 'none';
    }
    addAuthorizationToHtml() {
        this.htmlElemets.authContainer.innerHTML = (0, authorization_1.default)();
        Object.assign(this.htmlElemets, {
            authBtn: (0, utils_1.findHtmlElement)(document, '.authorization-link'),
            blur: (0, utils_1.findHtmlElement)(document, '.blur'),
            closeAuthContainerBtn: (0, utils_1.findHtmlElement)(document, '.close-icon'),
            authBlockHeader: (0, utils_1.findHtmlElement)(document, '.authorization-block h2'),
            registrationForm: (0, utils_1.findHtmlElement)(document, '.registration-form'),
            loginForm: (0, utils_1.findHtmlElement)(document, '.login-form'),
            authBlock: (0, utils_1.findHtmlElement)(document, '.authorization-block'),
            loginBtn: (0, utils_1.findHtmlElement)(document, '.login-btn'),
            loginLinkBtn: (0, utils_1.findHtmlElement)(document, '.login-link-btn'),
            registrationBtn: (0, utils_1.findHtmlElement)(document, '.registration-btn'),
            registrationLinkBtn: (0, utils_1.findHtmlElement)(document, '.registration-link-btn'),
            loginEmail: (0, utils_1.findHtmlElement)(document, '.authorization-email'),
            loginPassword: (0, utils_1.findHtmlElement)(document, '.authorization-password'),
            registrationName: (0, utils_1.findHtmlElement)(document, '.registration-name'),
            registrationEmail: (0, utils_1.findHtmlElement)(document, '.registration-email'),
            registrationPassword: (0, utils_1.findHtmlElement)(document, '.registration-password'),
            loginError: (0, utils_1.findHtmlElement)(document, '.authorization-error'),
            registrationError: (0, utils_1.findHtmlElement)(document, '.registration-error'),
            registrationSuccess: (0, utils_1.findHtmlElement)(document, '.registration-success'),
        });
    }
    addAuthBtnClickListener() {
        this.htmlElemets.authBtn.addEventListener('click', () => {
            const token = localStorage.getItem('token');
            if (token) {
                localStorage.clear();
                this.isAuth = false;
            }
            else {
                this.openAuthorizationBlock();
            }
        });
    }
    addBlurClickListener() {
        this.htmlElemets.blur.addEventListener('click', () => {
            this.closeAuthorizationBlock();
            this.clearLoginForm();
            this.clearRegistrationForm();
            this.setLoginForm();
        });
    }
    addCloseAuthContainerBtnListener() {
        this.htmlElemets.closeAuthContainerBtn.addEventListener('click', () => {
            this.closeAuthorizationBlock();
            this.clearLoginForm();
            this.clearRegistrationForm();
            this.setLoginForm();
        });
    }
    addRegistrationLinkBtnListener() {
        this.htmlElemets.registrationLinkBtn.addEventListener('click', () => {
            this.setRegistrationForm();
        });
    }
    addLoginLinkBtnListener() {
        this.htmlElemets.loginLinkBtn.addEventListener('click', () => {
            this.setLoginForm();
        });
    }
    addLoginBtnListener() {
        this.htmlElemets.loginBtn.addEventListener('click', () => {
            const formData = new FormData(this.htmlElemets.loginForm);
            const userData = {};
            formData.forEach((value, key) => {
                userData[key] = value;
            });
            (() => __awaiter(this, void 0, void 0, function* () {
                const auth = yield User_1.default.signin(userData);
                if (auth) {
                    this.clearLoginForm();
                    this.clearRegistrationForm();
                    this.closeAuthorizationBlock();
                    this.htmlElemets.authIcon.src = './assets/images/verified.png';
                    this.isAuth = true;
                }
                else {
                    this.htmlElemets.loginError.style.display = 'block';
                    this.htmlElemets.loginPassword.value = '';
                }
            }))();
        });
    }
    addRegistrationBtnListener() {
        this.htmlElemets.registrationBtn.addEventListener('click', () => {
            const formData = new FormData(this.htmlElemets.registrationForm);
            const userData = {};
            formData.forEach((value, key) => {
                userData[key] = value;
            });
            (() => __awaiter(this, void 0, void 0, function* () {
                const auth = yield User_1.default.createUser(userData);
                if (auth) {
                    if ('error' in auth) {
                        this.htmlElemets.registrationError.style.display = 'block';
                        this.htmlElemets.registrationSuccess.style.display = 'none';
                        this.htmlElemets.registrationError.innerHTML = 'Невозможно зарегистрировать пользователя с такими данными';
                    }
                    else {
                        this.htmlElemets.registrationError.style.display = 'none';
                        this.htmlElemets.registrationSuccess.style.display = 'block';
                    }
                }
                else {
                    this.htmlElemets.registrationError.style.display = 'block';
                    this.htmlElemets.registrationSuccess.style.display = 'none';
                    this.htmlElemets.registrationError.innerHTML = 'Пользователь уже зарегистрирован в системе';
                }
            }))();
        });
    }
    authorization() {
        this.isAuth = !!localStorage.getItem('token');
        this.addAuthorizationToHtml();
        this.addAuthBtnClickListener();
        this.addBlurClickListener();
        this.addCloseAuthContainerBtnListener();
        this.addRegistrationLinkBtnListener();
        this.addLoginLinkBtnListener();
        this.addLoginBtnListener();
        this.addRegistrationBtnListener();
    }
    openGamePage(page, params) {
        console.log(page);
        this.pages[page].actionIndex(params.page, params.difficulty, true);
    }
}
exports["default"] = App;


/***/ }),

/***/ "./src/models/EventObserver.ts":
/*!*************************************!*\
  !*** ./src/models/EventObserver.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class EventObserver {
    constructor() {
        this.observers = [];
    }
    subscribe(func) {
        this.observers.push(func);
    }
    unsubscribe(func) {
        this.observers = this.observers.filter((subs) => subs !== func);
    }
    broadcast(data) {
        this.observers.forEach((subs) => subs(data));
    }
}
exports["default"] = EventObserver;


/***/ }),

/***/ "./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jwt_decode_1 = __importDefault(__webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js"));
const config_1 = __importDefault(__webpack_require__(/*! ../config */ "./src/config.ts"));
class User {
    // private readonly id: string;
    // private readonly name: string;
    // private readonly token: string;
    // private readonly refreshToken: string;
    // constructor(private readonly auth: IAuth) {
    //   this.id = auth.userId;
    //   this.name = auth.name;
    //   this.token = auth.token;
    //   this.refreshToken = auth.refreshToken;
    // }
    static createUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${config_1.default.api.url}users`;
            const user = fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            })
                .then((data) => data.json())
                .then((data) => data)
                .catch((err) => {
                console.log('Error text:', err);
                return null;
            });
            return user;
        });
    }
    static signin(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${config_1.default.api.url}signin`;
            const authData = fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
                .then((data) => data.json())
                .then((data) => {
                localStorage.setItem('name', data.name);
                localStorage.setItem('id', data.userId);
                localStorage.setItem('token', data.token);
                localStorage.setItem('refreshToken', data.refreshToken);
                return data;
            })
                .catch((err) => {
                console.log('Error text:', err);
                return null;
            });
            return authData;
        });
    }
    static getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, token } = User.getIdAndTokenFromLocalStorage();
            if (!id || !token)
                return null;
            const url = `${config_1.default.api.url}users/${id}`;
            const user = fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then((data) => data.json())
                .catch((err) => {
                console.log('Error text:', err);
                return null;
            });
            return user;
        });
    }
    static getNewToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, token } = User.getIdAndTokenFromLocalStorage();
            const refreshToken = localStorage.getItem('refreshToken');
            if (!id || !token || !refreshToken)
                return null;
            const url = `${config_1.default.api.url}users/${id}/tokens`;
            const user = fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${refreshToken}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then((data) => data.json())
                .then((data) => {
                localStorage.setItem('name', data.name);
                localStorage.setItem('id', data.userId);
                localStorage.setItem('token', data.token);
                localStorage.setItem('refreshToken', data.refreshToken);
                return data;
            })
                .catch((err) => {
                console.log('Error text:', err);
                return null;
            });
            return user;
        });
    }
    static getUserWords() {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, token } = User.getIdAndTokenFromLocalStorage();
            if (!id || !token)
                return null;
            const url = `${config_1.default.api.url}users/${id}/words`;
            const words = fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then((data) => data.json())
                .catch((err) => {
                console.log('Error text:', err);
                return null;
            });
            return words;
        });
    }
    static getUserWord(wordId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, token } = User.getIdAndTokenFromLocalStorage();
            if (!id || !token)
                return null;
            const url = `${config_1.default.api.url}users/${id}/words/${wordId}`;
            const word = fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then((data) => data.json())
                .catch((err) => {
                console.log('Error text:', err);
                return null;
            });
            return word;
        });
    }
    static createUserWord(wordId, userWord) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, token } = User.getIdAndTokenFromLocalStorage();
            if (!id || !token)
                return null;
            const url = `${config_1.default.api.url}users/${id}/words/${wordId}`;
            const word = fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userWord),
            })
                .then((data) => data.json())
                .catch((err) => {
                console.log('Error text:', err);
                return null;
            });
            return word;
        });
    }
    static updateUserWord(wordId, userWord) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, token } = User.getIdAndTokenFromLocalStorage();
            if (!id || !token)
                return null;
            const url = `${config_1.default.api.url}users/${id}/words/${wordId}`;
            const word = fetch(url, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userWord),
            })
                .then((data) => data.json())
                .catch((err) => {
                console.log('Error text:', err);
                return null;
            });
            return word;
        });
    }
    static deleteUserWord(wordId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, token } = User.getIdAndTokenFromLocalStorage();
            if (!id || !token)
                return null;
            const url = `${config_1.default.api.url}users/${id}/words/${wordId}`;
            const word = fetch(url, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then((data) => data.json())
                .catch((err) => {
                console.log('Error text:', err);
                return null;
            });
            return word;
        });
    }
    static getUserAggregatedWords() {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, token } = User.getIdAndTokenFromLocalStorage();
            if (!id || !token)
                return null;
            const url = `${config_1.default.api.url}users/${id}/words`;
            const word = fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then((data) => data.json())
                .catch((err) => {
                console.log('Error text:', err);
                return null;
            });
            return word;
        });
    }
    static getUserAggregatedWord(wordId, page = 0, group = 0, wordsPerPage = 20) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, token } = User.getIdAndTokenFromLocalStorage();
            if (!id || !token)
                return null;
            const url = `${config_1.default.api.url}users/${id}/words/${wordId}`;
            const wordData = [{ page }, { group }, { wordsPerPage }];
            const bodyData = {
                filter: {
                    // eslint-disable-next-line quotes, quote-props
                    "$and": wordData,
                },
            };
            const word = fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bodyData),
            })
                .then((data) => data.json())
                .catch((err) => {
                console.log('Error text:', err);
                return null;
            });
            return word;
        });
    }
    static getUserStatistic() {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, token } = User.getIdAndTokenFromLocalStorage();
            if (!id || !token)
                return null;
            const url = `${config_1.default.api.url}users/${id}/statistics`;
            const words = fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then((data) => data.json())
                .catch((err) => {
                console.log('Error text:', err);
                return null;
            });
            return words;
        });
    }
    static upsertUserStatistic(statistic) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, token } = User.getIdAndTokenFromLocalStorage();
            if (!id || !token)
                return null;
            const url = `${config_1.default.api.url}users/${id}/statistics`;
            const words = fetch(url, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(statistic),
            })
                .then((data) => data.json())
                .catch((err) => {
                console.log('Error text:', err);
                return null;
            });
            return words;
        });
    }
    static getUserSetting() {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, token } = User.getIdAndTokenFromLocalStorage();
            if (!id || !token)
                return null;
            const url = `${config_1.default.api.url}users/${id}/settings`;
            const words = fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then((data) => data.json())
                .catch((err) => {
                console.log('Error text:', err);
                return null;
            });
            return words;
        });
    }
    static upsertUserSetting(settings) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, token } = User.getIdAndTokenFromLocalStorage();
            if (!id || !token)
                return null;
            const url = `${config_1.default.api.url}users/${id}/statistics`;
            const words = fetch(url, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(settings),
            })
                .then((data) => data.json())
                .catch((err) => {
                console.log('Error text:', err);
                return null;
            });
            return words;
        });
    }
    static getIdAndTokenFromLocalStorage() {
        const id = localStorage.getItem('id');
        let token = localStorage.getItem('token');
        if (token) {
            const parseToken = (0, jwt_decode_1.default)(token);
            const currentTime = new Date().getTime();
            if (!(currentTime >= parseToken.iat * 1000 && currentTime <= parseToken.exp * 1000)) {
                (() => __awaiter(this, void 0, void 0, function* () {
                    yield User.getNewToken();
                    token = localStorage.getItem('token');
                }))();
            }
        }
        return { id, token };
    }
}
exports["default"] = User;


/***/ }),

/***/ "./src/models/Word.ts":
/*!****************************!*\
  !*** ./src/models/Word.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __importDefault(__webpack_require__(/*! ../config */ "./src/config.ts"));
class Word {
    constructor(params = null) {
        if (params) {
            Object.assign(this, params);
        }
        else {
            throw new Error('Can not create new word!');
        }
    }
    static init(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = (yield Word.getWord(id)) || null;
            return new Word(params);
        });
    }
    static getWords(page = 0, group = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${config_1.default.api.url}words?page=${page}&group=${group}`;
            const words = fetch(url).then((data) => data.json());
            return words;
        });
    }
    static getWord(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${config_1.default.api.url}words/${id}`;
            const word = fetch(url)
                .then((data) => data.json())
                .then((data) => data)
                .catch((err) => console.log(err));
            return word;
        });
    }
    static convertIUserWordToIWord(userWord) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = userWord.wordId || '';
            let res;
            if (id) {
                res = (yield Word.getWord(id));
                return res;
            }
            return undefined;
        });
    }
}
exports["default"] = Word;


/***/ }),

/***/ "./src/views/components/authorization/authorization.ts":
/*!*************************************************************!*\
  !*** ./src/views/components/authorization/authorization.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./authorization.css */ "./src/views/components/authorization/authorization.css");
function renderAuthorization() {
    return `<div class="blur"></div>
  <div class="authorization-block">
    <img class="close-icon" src="./assets/svg/cross.svg" alt="Close Icon" width="20">
    <h2>Авторизация</h2>
    <form class="login-form auth-form" id="login-form">
      <p class="authorization-error error-msg">Неверный логин или пароль</p>
      <input class="authorization-email auth-input" name="email" type="email" placeholder="E-mail" autofocus>
      <input class="authorization-password auth-input" name="password" type="password" placeholder="Пароль" minlength="8">
    </form>
    <form class="registration-form auth-form" id="registration-form" style="display:none">
      <p class="registration-error error-msg"></p>
      <p class="registration-success success-msg">Пользователь успешно зарегистрирован!</p>
      <input class="registration-name auth-input" name="name" type="text" placeholder="Имя" autofocus>
      <input class="registration-email auth-input" name="email" type="email" placeholder="E-mail">
      <input class="registration-password auth-input" name="password" type="password" placeholder="Пароль" minlength="8">
    </form>
    <div class="authorization-btns">
        <button class="login-btn btn-like-link">Войти</button>
        <button class="registration-link-btn">Зарегистрироваться</button>
        <button class="registration-btn btn-like-link" style="display:none">Регистрация</button>
        <button class="login-link-btn" style="display:none">Уже есть аккаунт?</button>
      </div>
  </div>`;
}
exports["default"] = renderAuthorization;


/***/ }),

/***/ "./src/views/components/difficulty-bar/difficulty-bar.ts":
/*!***************************************************************!*\
  !*** ./src/views/components/difficulty-bar/difficulty-bar.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setHardWordsVisible = exports.activateCurrentDifficulty = exports.activateProp = exports.renderDifficultyBar = void 0;
const utils_1 = __webpack_require__(/*! ../../../common/utils/utils */ "./src/common/utils/utils.ts");
__webpack_require__(/*! ./difficulty-bar.css */ "./src/views/components/difficulty-bar/difficulty-bar.css");
function renderDifficultyBar() {
    const diffBar = document.createElement('div');
    diffBar.classList.add('difficulty-container');
    diffBar.innerHTML = `<div class="difficulty-btn level1 active" data-group="1">1</div>
    <div class="difficulty-btn level2" data-group="2">2</div>
    <div class="difficulty-btn level3" data-group="3">3</div>
    <div class="difficulty-btn level4" data-group="4">4</div>
    <div class="difficulty-btn level5" data-group="5">5</div>
    <div class="difficulty-btn level6" data-group="6">6</div>
    <div class="difficulty-btn level7" data-group="7">7</div>`;
    return diffBar;
}
exports.renderDifficultyBar = renderDifficultyBar;
function activateProp(el, selector = '.difficulty-btn') {
    if (!el.classList.contains('difficulty-btn'))
        return;
    if (el) {
        const elements = document.querySelectorAll(selector);
        elements === null || elements === void 0 ? void 0 : elements.forEach((element) => element.classList.remove('active'));
        el.classList.add('active');
    }
}
exports.activateProp = activateProp;
function activateCurrentDifficulty(category) {
    const currentDiff = (0, utils_1.findHtmlElement)(document, `[data-group="${category}"]`);
    activateProp(currentDiff);
}
exports.activateCurrentDifficulty = activateCurrentDifficulty;
function setHardWordsVisible(auth) {
    const hardWords = document.querySelector('.level7');
    if (hardWords)
        hardWords.style.display = auth ? '' : 'none';
}
exports.setHardWordsVisible = setHardWordsVisible;


/***/ }),

/***/ "./src/views/components/pagination/pagination.ts":
/*!*******************************************************!*\
  !*** ./src/views/components/pagination/pagination.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setPageNum = exports.disableBtns = exports.renderPagination = void 0;
const utils_1 = __webpack_require__(/*! ../../../common/utils/utils */ "./src/common/utils/utils.ts");
__webpack_require__(/*! ./pagination.css */ "./src/views/components/pagination/pagination.css");
function renderPagination() {
    const pagination = document.createElement('div');
    pagination.classList.add('pagination-container');
    pagination.innerHTML = `<p class="pagination-first disabled"><<</p>
  <p class="pagination-prev disabled"><</p>
  <div class="pagination-current"><span id="textbook-page-number">1</span> / 30</div>
  <p class="pagination-next">></p>
  <p class="pagination-last">>></p>`;
    return pagination;
}
exports.renderPagination = renderPagination;
function disableBtns(page) {
    const nextPage = (0, utils_1.findHtmlElement)(document, '.pagination-next');
    const lastPage = (0, utils_1.findHtmlElement)(document, '.pagination-last');
    const prevPage = (0, utils_1.findHtmlElement)(document, '.pagination-prev');
    const firstPage = (0, utils_1.findHtmlElement)(document, '.pagination-first');
    if (page === 0) {
        prevPage.classList.add('disabled');
        firstPage.classList.add('disabled');
    }
    if (page > 0) {
        prevPage.classList.remove('disabled');
        firstPage.classList.remove('disabled');
    }
    if (page === 29) {
        nextPage.classList.add('disabled');
        lastPage.classList.add('disabled');
    }
    if (page < 29) {
        nextPage.classList.remove('disabled');
        lastPage.classList.remove('disabled');
    }
}
exports.disableBtns = disableBtns;
function setPageNum(num) {
    const currentPage = (0, utils_1.findHtmlElement)(document, '#textbook-page-number');
    currentPage.innerText = num.toString();
}
exports.setPageNum = setPageNum;


/***/ }),

/***/ "./src/views/components/word-card/word-card.ts":
/*!*****************************************************!*\
  !*** ./src/views/components/word-card/word-card.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setWordPropsVisible = exports.changeCardBoxshadow = exports.playAudio = exports.chooseWordProp = exports.renderWordCard = void 0;
const config_1 = __importDefault(__webpack_require__(/*! ../../../config */ "./src/config.ts"));
__webpack_require__(/*! ./word-card.css */ "./src/views/components/word-card/word-card.css");
function renderWordCard(word) {
    const wordContainer = document.createElement('div');
    wordContainer.classList.add('word-container');
    wordContainer.id = word.id;
    wordContainer.innerHTML = `<img class="textbook-word-img" src="${config_1.default.api.url}${word.image}" alt="${word.word} image">
  <div class="word-description">
    <div class="word-properties">
      <img class="word-learned" data-difficulty="learned" src="../../../assets/images/textbook/tick-filled.png" alt="Learned" width="40">
      <img class="word-hard" data-difficulty="hard" src="../../../assets/images/textbook/star-filled.png" alt="Hard" width="40">
        </div>
      <div class="word">
      <h2>${word.word}</h2>
      <p class="word-transcription">${word.transcription}</p>
      <img id="btn-${word.id}-word" src="../../../assets/svg/audio-speaker.svg" alt="Audio" class="audio-icon" width="20">
      <audio id="audio-${word.id}-word" src="${config_1.default.api.url}${word.audio}"></audio>
      <p class="word-translation">${word.wordTranslate}</p>
    </div>
    <div class="word-meaning">
      <p>
      ${word.textMeaning}
      <img id="btn-${word.id}-meaning" class="audio-icon" src="../../../assets/svg/audio-speaker.svg" alt="Audio" width="20">
        <audio id="audio-${word.id}-meaning" src="${config_1.default.api.url}${word.audioMeaning}"></audio>
      </p>
      <p class="meaning-translation">${word.textMeaningTranslate}</p>
    </div>
    <div class="word-example">
      <p>
      ${word.textExample}
      <img id="btn-${word.id}-example" class="audio-icon" src="../../../assets/svg/audio-speaker.svg" alt="Audio" width="20">
        <audio id="audio-${word.id}-example" src="${config_1.default.api.url}${word.audioExample}"></audio>
      </p>
      <p class="example-translation">${word.textExampleTranslate}</p>
    </div>
  </div>`;
    return wordContainer;
}
exports.renderWordCard = renderWordCard;
function chooseWordProp(img) {
    const card = img.closest('.word-container');
    const learned = card === null || card === void 0 ? void 0 : card.querySelector('.word-learned');
    const hard = card === null || card === void 0 ? void 0 : card.querySelector('.word-hard');
    img.classList.toggle('active');
    if (img === learned) {
        if (img.classList.contains('active')) {
            if (hard)
                hard.classList.remove('active');
        }
    }
    if (img === hard) {
        if (img.classList.contains('active')) {
            if (learned)
                learned.classList.remove('active');
        }
    }
}
exports.chooseWordProp = chooseWordProp;
function playAudio(btn) {
    var _a;
    if (btn) {
        const id = btn.id.split('-');
        (_a = document.querySelector(`#audio-${id[1]}-${id[2]}`)) === null || _a === void 0 ? void 0 : _a.play().then((res) => res).catch((e) => e);
    }
}
exports.playAudio = playAudio;
function changeCardBoxshadow(difficulty) {
    if (!difficulty)
        return;
    const cards = document.querySelectorAll('.word-container');
    cards.forEach((card) => {
        const card2 = card;
        card2.style.boxShadow = `0 0 20px var(--diff${difficulty})`;
    });
}
exports.changeCardBoxshadow = changeCardBoxshadow;
function setWordPropsVisible(auth) {
    const props = document.querySelectorAll('.word-properties');
    props.forEach((prop) => {
        const prop2 = prop;
        prop2.style.display = auth ? 'flex' : 'none';
    });
}
exports.setWordPropsVisible = setWordPropsVisible;


/***/ }),

/***/ "./src/views/pages/error/error.ts":
/*!****************************************!*\
  !*** ./src/views/pages/error/error.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./error.css */ "./src/views/pages/error/error.css");
class ErrorView {
    static draw() {
        return `<div class="main-container-error">
    <h1>404</h1>
    <p>Page not found</p>
    </div>`;
    }
}
exports["default"] = ErrorView;


/***/ }),

/***/ "./src/views/pages/index/index.ts":
/*!****************************************!*\
  !*** ./src/views/pages/index/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./index.css */ "./src/views/pages/index/index.css");
// import { IObject } from './../common/interfaces/IObject';
class IndexView {
    // static draw(data: IObject<string>)
    static draw() {
        return `<div class="main-container-index">
    <div class="description">
        <img class="description-img" src="./assets/images/main/bus.png" alt="Bus">
        <div class="description-text">
            <p><b>SyllaBus</b> - интерактивное приложение для изучения английского языка.
            <p>Здесь ты найдешь:</p>
            <ul>
                <li>Электронный учебник, который поможет узнать новые слова.</li>
                <li>Мини-игры для повторения изученного материала.</li>
                <li>Краткосрочная и долгосрочная статистика твоего прогресса.</li>
            </ul>
        </div>
        <div class="description-btns">
            <span data-path="/team" class="btn-like-link">Команда</span>
        </div>
    </div>
    <ul class="start-menu">
        <li data-path="/textbook">
            <div class="menu-item">
                <img src="./assets/images/textbook.png" alt="Textbook image" class="menu-item-img"
                    width="80">
                <span class="menu-item-name">Учебник</span>
            </div>
        </li>
        <li data-path="/sprint">
            <div class="menu-item">
                <img src="./assets/images/sprint.png" alt="Sprint image" class="menu-item-img" width="70">
                <span class="menu-item-name">Игра "Спринт"</span>
            </div>
        </li>
        <li data-path="/audiocall">
            <div class="menu-item">
                <img src="./assets/images/audiocall.png" alt="Audiogame image" class="menu-item-img"
                    width="70">
                <span class="menu-item-name">Игра "Аудиовызов"</span>
            </div>
        </li>
        <li data-path="/statistics">
            <div class="menu-item">
                <img src="./assets/images/statistics.png" alt="Statistics image" class="menu-item-img"
                    width="70">
                <span class="menu-item-name">Статистика</span>
            </div>
        </li>
    </ul>
</div>`;
    }
}
exports["default"] = IndexView;


/***/ }),

/***/ "./src/views/pages/sprint/sprint.ts":
/*!******************************************!*\
  !*** ./src/views/pages/sprint/sprint.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./sprint.css */ "./src/views/pages/sprint/sprint.css");
// import { IObject } from '../../common/interfaces/IObject';
class SprintView {
    // static draw(data: IObject<string>)
    static draw() {
        return `<div class="main-container-sprint">
    <h1>Игра "Спринт"</h1>
    <div class="game-container">
      <p>timer 3 2 1 start</p>

      <div class="game-field">
        <div class="answers">
          <p class="current-score">350</p>
          <div class="correct-answers">
            <p id="1-correct-answer"></p>
            <p id="2-correct-answer"></p>
            <p id="3-correct-answer"></p>
          </div>
          <p class="points-per-answer">+10 очков за слово</p>
        </div>
        <div class="progress">
          <img src="./assets/images/sprint/baby.png" alt="Level 1" width="25">
          <img src="./assets/images/sprint/toddler.png" alt="Level 2" width="35">
          <img src="./assets/images/sprint/teen.png" alt="Level 3" width="45">
          <img src="./assets/images/sprint/prof.png" alt="Level 4" width="55">
        </div>
        <div class="word-props">
          <p class="sprint-word">word</p>
          <p class="sprint-translation">перевод</p>
          <img class="answer-correct" src="./assets/images/right-icon.png" alt="Correct icon" width="30">
          <img class="answer-wrong" src="./assets/images/wrong-icon.png" alt="Correct icon" width="30">
        </div>
        <div class="btns-container">
          <div class="btn-true">+</div>
          <div class="btn-false">-</div>
        </div>
      </div>

      <div class="sprint-timer">timer for 1 min</div>

    </div>

    <div class="result-container">
      <h2 class="results-header">Ваш результат:</h2>
      <div class="results">
        <div class="results-description">
          <p>Правильных ответов: 0</p>
          <p>Ошибок: 0</p>
          <p>Правильных ответов подряд: 0</p>
        </div>
        <p class="results-accuracy">100%</p>
      </div>
      <ul class="word-list">
        <h3>Список слов:</h3>
        <li>
          <img class="sprint-audio-icon" src="./assets/svg/audio-speaker.svg" alt="Audio Icon" width="20">
          <img src="./assets/images/right-icon.png" alt="Correct Icon" width="20">
          <p><span>Word</span> - перевод</p>
        </li>
        <li>
          <img class="sprint-audio-icon" src="./assets/svg/audio-speaker.svg" alt="Audio Icon" width="20">
          <img src="./assets/images/wrong-icon.png" alt="Correct Icon" width="20">
          <p><span>Word</span> - перевод</p>
        </li>
      </ul>
    </div>
  </div>`;
    }
}
exports["default"] = SprintView;


/***/ }),

/***/ "./src/views/pages/statistics/statistics.ts":
/*!**************************************************!*\
  !*** ./src/views/pages/statistics/statistics.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./statistics.css */ "./src/views/pages/statistics/statistics.css");
// import { IObject } from '../../../common/interfaces/IObject';
class StatisticsView {
    // static draw(data: IObject<string>)
    static draw() {
        return `<div class="main-container-statistics">
    <h1>Статистика</h1>
  </div>`;
    }
}
exports["default"] = StatisticsView;


/***/ }),

/***/ "./src/views/pages/team/team.ts":
/*!**************************************!*\
  !*** ./src/views/pages/team/team.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./team.css */ "./src/views/pages/team/team.css");
class TeamView {
    // static draw(data: IObject<string>)
    static draw() {
        return `<div class="main-container-team">
    <h1>Наша команда</h1>
    <div class="team-container">
      <div class="card-container">
        <img class="card-img" src="./assets/images/team/anonymous.png" alt="Team member picture 1" width="200">
        <div class="card-description">
          <p class="card-name">Name</p>
          <p>Frontend developer</p>
          <p class="card-contribution">Because Firefox saves state objects to the user's disk so they can be restored after the user restarts the browser, we impose a size limit of 16 MiB on the serialized representation of a state object.</p>
          <a class="card-link" href="">github</a>
        </div>
      </div>
    </div>
  </div>`;
    }
}
exports["default"] = TeamView;


/***/ }),

/***/ "./src/views/pages/textbook/textbook.ts":
/*!**********************************************!*\
  !*** ./src/views/pages/textbook/textbook.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderTextbookPage = void 0;
__webpack_require__(/*! ./textbook.css */ "./src/views/pages/textbook/textbook.css");
function renderTextbookPage() {
    return `<div class="main-container-textbook">
    <h1>Учебник</h1>

    <div class="textbook-game-btns">
      <button class="start-audiocall">
        <img src="../../../assets/images/audiocall.png" alt="Audiocall" width="40">
        <p>Аудиовызов</p>
      </button>
      <button class="start-sprint">
        <img src="../../../assets/images/sprint.png" alt="Sprint" width="40">
        <p>Спринт</p>
      </button>
    </div>

    <div class="words-container"></div>

  </div>`;
}
exports.renderTextbookPage = renderTextbookPage;


/***/ }),

/***/ "./src/assets/fonts/Comfortaa/Comfortaa-Regular.ttf":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/Comfortaa/Comfortaa-Regular.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "051d690872878482e7e7.ttf";

/***/ }),

/***/ "./src/assets/fonts/DynaPuff/DynaPuff-Regular.ttf":
/*!********************************************************!*\
  !*** ./src/assets/fonts/DynaPuff/DynaPuff-Regular.ttf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56fde79e6a4cd9651e99.ttf";

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
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
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("947f06c4286106915ab2")
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "rslang:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdaterslang"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
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
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwyQkFBMkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsb0JBQW9CO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDdE9GO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsOEJBQThCLG1CQUFPLENBQUMseUNBQWM7QUFDcEQsbUJBQU8sQ0FBQyxvQ0FBYTtBQUNyQjtBQUNBOzs7Ozs7Ozs7OztBQ1JhO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQixtQkFBTyxDQUFDLDBEQUF1QjtBQUMvQyxpQ0FBaUMsbUJBQU8sQ0FBQyxrQ0FBVztBQUNwRCw4Q0FBOEMsbUJBQU8sQ0FBQyxvRkFBb0M7QUFDMUYsMENBQTBDLG1CQUFPLENBQUMsNEVBQWdDO0FBQ2xGO0FBQ0EsMENBQTBDLG1CQUFPLENBQUMsNEVBQWdDO0FBQ2xGLDJDQUEyQyxtQkFBTyxDQUFDLDhFQUFpQztBQUNwRiwrQ0FBK0MsbUJBQU8sQ0FBQyxzRkFBcUM7QUFDNUYseUNBQXlDLG1CQUFPLENBQUMsMEVBQStCO0FBQ2hGLDZDQUE2QyxtQkFBTyxDQUFDLGtGQUFtQztBQUN4Rix3Q0FBd0MsbUJBQU8sQ0FBQyw4R0FBaUQ7QUFDakcsd0NBQXdDLG1CQUFPLENBQUMsc0RBQWlCO0FBQ2pFLCtCQUErQixtQkFBTyxDQUFDLG9DQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsa0JBQWtCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQSwwQkFBMEIsMEJBQTBCLEVBQUUsS0FBSztBQUMzRDtBQUNBO0FBQ0EsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNB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OztXQzlmQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JzbGFuZy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL3ZpZXdzL2NvbXBvbmVudHMvYXV0aG9yaXphdGlvbi9hdXRob3JpemF0aW9uLmNzcyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvdmlld3MvY29tcG9uZW50cy9kaWZmaWN1bHR5LWJhci9kaWZmaWN1bHR5LWJhci5jc3MiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL3ZpZXdzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNzcyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvdmlld3MvY29tcG9uZW50cy93b3JkLWNhcmQvd29yZC1jYXJkLmNzcyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvdmlld3MvcGFnZXMvZXJyb3IvZXJyb3IuY3NzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy92aWV3cy9wYWdlcy9pbmRleC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL3ZpZXdzL3BhZ2VzL3NwcmludC9zcHJpbnQuY3NzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy92aWV3cy9wYWdlcy9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY3NzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy92aWV3cy9wYWdlcy90ZWFtL3RlYW0uY3NzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy92aWV3cy9wYWdlcy90ZXh0Ym9vay90ZXh0Ym9vay5jc3MiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3JzbGFuZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JzbGFuZy8uL25vZGVfbW9kdWxlcy9qd3QtZGVjb2RlL2J1aWxkL2p3dC1kZWNvZGUuZXNtLmpzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvdmlld3MvY29tcG9uZW50cy9hdXRob3JpemF0aW9uL2F1dGhvcml6YXRpb24uY3NzPzA3NWMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL3ZpZXdzL2NvbXBvbmVudHMvZGlmZmljdWx0eS1iYXIvZGlmZmljdWx0eS1iYXIuY3NzPzU5MWUiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL3ZpZXdzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNzcz9lNDRmIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy92aWV3cy9jb21wb25lbnRzL3dvcmQtY2FyZC93b3JkLWNhcmQuY3NzPzI0OTQiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL3ZpZXdzL3BhZ2VzL2Vycm9yL2Vycm9yLmNzcz80MTU2Iiwid2VicGFjazovL3JzbGFuZy8uL3NyYy92aWV3cy9wYWdlcy9pbmRleC9pbmRleC5jc3M/MmFkNSIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvdmlld3MvcGFnZXMvc3ByaW50L3NwcmludC5jc3M/ZTJhMyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvdmlld3MvcGFnZXMvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNzcz8xNGQ0Iiwid2VicGFjazovL3JzbGFuZy8uL3NyYy92aWV3cy9wYWdlcy90ZWFtL3RlYW0uY3NzPzRhOWEiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL3ZpZXdzL3BhZ2VzL3RleHRib29rL3RleHRib29rLmNzcz84NWQ5Iiwid2VicGFjazovL3JzbGFuZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JzbGFuZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2NvbW1vbi91dGlscy91dGlscy50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9jb250cm9sbGVycy9BdWRpb2NhbGxDb250cm9sbGVyLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9jb250cm9sbGVycy9FcnJvckNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvY29udHJvbGxlcnMvU3ByaW50Q29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvY29udHJvbGxlcnMvU3RhdGlzdGljc0NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2NvbnRyb2xsZXJzL1RlYW1Db250cm9sbGVyLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9jb250cm9sbGVycy9UZXh0Ym9va0NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9tb2RlbHMvQXBwLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy9tb2RlbHMvRXZlbnRPYnNlcnZlci50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvbW9kZWxzL1VzZXIudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL21vZGVscy9Xb3JkLnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy92aWV3cy9jb21wb25lbnRzL2F1dGhvcml6YXRpb24vYXV0aG9yaXphdGlvbi50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvdmlld3MvY29tcG9uZW50cy9kaWZmaWN1bHR5LWJhci9kaWZmaWN1bHR5LWJhci50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvdmlld3MvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24udHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL3ZpZXdzL2NvbXBvbmVudHMvd29yZC1jYXJkL3dvcmQtY2FyZC50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvdmlld3MvcGFnZXMvZXJyb3IvZXJyb3IudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL3ZpZXdzL3BhZ2VzL2luZGV4L2luZGV4LnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy92aWV3cy9wYWdlcy9zcHJpbnQvc3ByaW50LnRzIiwid2VicGFjazovL3JzbGFuZy8uL3NyYy92aWV3cy9wYWdlcy9zdGF0aXN0aWNzL3N0YXRpc3RpY3MudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nLy4vc3JjL3ZpZXdzL3BhZ2VzL3RlYW0vdGVhbS50cyIsIndlYnBhY2s6Ly9yc2xhbmcvLi9zcmMvdmlld3MvcGFnZXMvdGV4dGJvb2svdGV4dGJvb2sudHMiLCJ3ZWJwYWNrOi8vcnNsYW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzbGFuZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yc2xhbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JzbGFuZy93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgdXBkYXRlIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3JzbGFuZy93ZWJwYWNrL3J1bnRpbWUvZ2V0IHVwZGF0ZSBtYW5pZmVzdCBmaWxlbmFtZSIsIndlYnBhY2s6Ly9yc2xhbmcvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL3JzbGFuZy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3JzbGFuZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JzbGFuZy93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vcnNsYW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNsYW5nL3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL3JzbGFuZy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yc2xhbmcvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcnNsYW5nL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yc2xhbmcvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yc2xhbmcvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3JzbGFuZy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0R5bmFQdWZmL0R5bmFQdWZmLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvQ29tZm9ydGFhL0NvbWZvcnRhYS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWNvbG9yOiAjMTgxZjRhO1xcclxcbiAgLS1saWd0aC1jb2xvcjogI2FmOGJkMDtcXHJcXG4gIC0tZmlsdGVyOiBpbnZlcnQoMTQlKSBzZXBpYSg5JSkgc2F0dXJhdGUoNzI1MiUpIGh1ZS1yb3RhdGUoMjA1ZGVnKSBicmlnaHRuZXNzKDg1JSkgY29udHJhc3QoMTAxJSk7XFxyXFxuICAtLWZpbHRlci1saWdodDogaW52ZXJ0KDg3JSkgc2VwaWEoMjclKSBzYXR1cmF0ZSg2NzI0JSkgaHVlLXJvdGF0ZSgyMDZkZWcpIGJyaWdodG5lc3MoODglKSBjb250cmFzdCg4MyUpO1xcclxcbiAgLS1mb250LXByaW1hcnk6ICdEeW5hUHVmZic7XFxyXFxuICAtLWZvbnQtc2Vjb25kYXJ5OiAnQ29tZm9ydGFhJztcXHJcXG4gIC0tZGlmZjE6ICNmMDY5Njk7XFxyXFxuICAtLWRpZmYyOiAjZWM3ZDNkO1xcclxcbiAgLS1kaWZmMzogI2U0ZTcxMztcXHJcXG4gIC0tZGlmZjQ6ICM1MGExNTA7XFxyXFxuICAtLWRpZmY1OiAjNjlkMGYwO1xcclxcbiAgLS1kaWZmNjogIzQxODNjMDtcXHJcXG4gIC0tZGlmZjc6ICM5MDZiYjM7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdEeW5hUHVmZic7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXByaW1hcnkpO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjQwLCAyMTgsIDI1NSwgMSkgMCUsIHJnYmEoMjQ2LCAyNDAsIDE1MywgMSkgNTAlLCByZ2JhKDY5LCAyMzksIDI1MiwgMSkgMTAwJSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmJvZHkubm8tc2Nyb2xsIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmhlYWRlcixcXHJcXG5tYWluLFxcclxcbmZvb3RlciB7XFxyXFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIsXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggNDBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMCA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyLFxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcmltYXJ5KSwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5sb2dvOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCB2YXIoLS1saWd0aC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5sb2dvOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXV0aG9yaXphdGlvbi1saW5rIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRleHQtYWxpZ246IGVuZDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYXV0aG9yaXphdGlvbi1pY29uIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgLyogZmlsdGVyOiB2YXIoLS1maWx0ZXIpOyAqL1xcclxcbiAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGhvcml6YXRpb24taWNvbjpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggMnB4IHZhcigtLWxpZ3RoLWNvbG9yKSk7XFxyXFxufVxcclxcblxcclxcbi5hdXRob3JpemF0aW9uLWljb246YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XFxyXFxufVxcclxcblxcclxcbi50b29sdGlwdGV4dCB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAtOTVweDtcXHJcXG4gIHRvcDogNnB4O1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWd0aC1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiA2cHggMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ3RoLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGhvcml6YXRpb24tbGluazpob3ZlciAudG9vbHRpcHRleHQge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlcixcXHJcXG4uYnVyZ2VyLWxpbmUge1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlciB7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAyMnB4O1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5idXJnZXItbGluZSxcXHJcXG4uYnVyZ2VyOmJlZm9yZSxcXHJcXG4uYnVyZ2VyOmFmdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzcHg7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlci1saW5lIHtcXHJcXG4gIHRvcDogY2FsYyg1MCUgLSAxcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnVyZ2VyOmJlZm9yZSB7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5idXJnZXI6YWZ0ZXIge1xcclxcbiAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnVyZ2VyLm9wZW4ge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJhciB7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIG9wYWNpdHk6IDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAzMHB4O1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW46IDMwcHggMDtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYmFyLm9wZW4ge1xcclxcbiAgb3BhY2l0eTogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1iYXIgbGkge1xcclxcbiAgbWFyZ2luOiAxNXB4IDA7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJhci5vcGVuIGxpOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYmFyLm9wZW4gbGk6YWN0aXZlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWljb24ge1xcclxcbiAgZmlsdGVyOiB2YXIoLS1maWx0ZXIpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmdpdGh1Yi1uYW1lcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpdGh1Yi1uYW1lcyBhOmhvdmVyIHtcXHJcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCB2YXIoLS1saWd0aC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5naXRodWItbmFtZXMgYTphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnJzLWxvZ28ge1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBmaWx0ZXI6IHZhcigtLWZpbHRlcik7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0aHViLWxvZ28ge1xcclxcbiAgZmlsdGVyOiB2YXIoLS1maWx0ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucnMtbG9nbzpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IHZhcigtLWZpbHRlcikgZHJvcC1zaGFkb3coMXB4IDFweCAycHggdmFyKC0tbGlndGgtY29sb3IpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1saWtlLWxpbmsge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1saWtlLWxpbms6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLWxpZ3RoLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1saWtlLWxpbms6YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlHQUFpRztFQUNqRyx1R0FBdUc7RUFDdkcsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsNENBQXNEO0FBQ3hEOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUF3RDtBQUMxRDs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixxSEFBcUg7RUFDckgsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixzQ0FBc0M7QUFDeEM7O0FBRUE7OztFQUdFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsTUFBTTtBQUNSOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixjQUFjO0VBQ2QsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlFQUFpRTtBQUNuRTs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWNvbG9yOiAjMTgxZjRhO1xcclxcbiAgLS1saWd0aC1jb2xvcjogI2FmOGJkMDtcXHJcXG4gIC0tZmlsdGVyOiBpbnZlcnQoMTQlKSBzZXBpYSg5JSkgc2F0dXJhdGUoNzI1MiUpIGh1ZS1yb3RhdGUoMjA1ZGVnKSBicmlnaHRuZXNzKDg1JSkgY29udHJhc3QoMTAxJSk7XFxyXFxuICAtLWZpbHRlci1saWdodDogaW52ZXJ0KDg3JSkgc2VwaWEoMjclKSBzYXR1cmF0ZSg2NzI0JSkgaHVlLXJvdGF0ZSgyMDZkZWcpIGJyaWdodG5lc3MoODglKSBjb250cmFzdCg4MyUpO1xcclxcbiAgLS1mb250LXByaW1hcnk6ICdEeW5hUHVmZic7XFxyXFxuICAtLWZvbnQtc2Vjb25kYXJ5OiAnQ29tZm9ydGFhJztcXHJcXG4gIC0tZGlmZjE6ICNmMDY5Njk7XFxyXFxuICAtLWRpZmYyOiAjZWM3ZDNkO1xcclxcbiAgLS1kaWZmMzogI2U0ZTcxMztcXHJcXG4gIC0tZGlmZjQ6ICM1MGExNTA7XFxyXFxuICAtLWRpZmY1OiAjNjlkMGYwO1xcclxcbiAgLS1kaWZmNjogIzQxODNjMDtcXHJcXG4gIC0tZGlmZjc6ICM5MDZiYjM7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdEeW5hUHVmZic7XFxyXFxuICBzcmM6IHVybCguL2Fzc2V0cy9mb250cy9EeW5hUHVmZi9EeW5hUHVmZi1SZWd1bGFyLnR0Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnO1xcclxcbiAgc3JjOiB1cmwoLi9hc3NldHMvZm9udHMvQ29tZm9ydGFhL0NvbWZvcnRhYS1SZWd1bGFyLnR0Zik7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcHJpbWFyeSk7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNDAsIDIxOCwgMjU1LCAxKSAwJSwgcmdiYSgyNDYsIDI0MCwgMTUzLCAxKSA1MCUsIHJnYmEoNjksIDIzOSwgMjUyLCAxKSAxMDAlKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5uby1zY3JvbGwge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyLFxcclxcbm1haW4sXFxyXFxuZm9vdGVyIHtcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbmhlYWRlcixcXHJcXG5mb290ZXIge1xcclxcbiAgcGFkZGluZzogMjBweCA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAwIDQwcHg7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxyXFxufVxcclxcblxcclxcbmE6aG92ZXIsXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0IHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXByaW1hcnkpLCBjdXJzaXZlO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ286aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4IHZhcigtLWxpZ3RoLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ286YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OSk7XFxyXFxufVxcclxcblxcclxcbi5hdXRob3JpemF0aW9uLWxpbmsge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdGV4dC1hbGlnbjogZW5kO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5hdXRob3JpemF0aW9uLWljb24ge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICAvKiBmaWx0ZXI6IHZhcigtLWZpbHRlcik7ICovXFxyXFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uYXV0aG9yaXphdGlvbi1pY29uOmhvdmVyIHtcXHJcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAycHggdmFyKC0tbGlndGgtY29sb3IpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGhvcml6YXRpb24taWNvbjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2x0aXB0ZXh0IHtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IC05NXB4O1xcclxcbiAgdG9wOiA2cHg7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWxpZ3RoLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlndGgtY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXV0aG9yaXphdGlvbi1saW5rOmhvdmVyIC50b29sdGlwdGV4dCB7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnVyZ2VyLFxcclxcbi5idXJnZXItbGluZSB7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnVyZ2VyIHtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDIycHg7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlci1saW5lLFxcclxcbi5idXJnZXI6YmVmb3JlLFxcclxcbi5idXJnZXI6YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDNweDtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnVyZ2VyLWxpbmUge1xcclxcbiAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XFxyXFxufVxcclxcblxcclxcbi5idXJnZXI6YmVmb3JlIHtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlcjphZnRlciB7XFxyXFxuICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5idXJnZXIub3BlbiB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYmFyIHtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgb3BhY2l0eTogMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDMwcHg7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIG1hcmdpbjogMzBweCAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1iYXIub3BlbiB7XFxyXFxuICBvcGFjaXR5OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJhciBsaSB7XFxyXFxuICBtYXJnaW46IDE1cHggMDtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYmFyLm9wZW4gbGk6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1iYXIub3BlbiBsaTphY3RpdmUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtaWNvbiB7XFxyXFxuICBmaWx0ZXI6IHZhcigtLWZpbHRlcik7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0aHViLW5hbWVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0aHViLW5hbWVzIGE6aG92ZXIge1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHZhcigtLWxpZ3RoLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpdGh1Yi1uYW1lcyBhOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucnMtbG9nbyB7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIGZpbHRlcjogdmFyKC0tZmlsdGVyKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5naXRodWItbG9nbyB7XFxyXFxuICBmaWx0ZXI6IHZhcigtLWZpbHRlcik7XFxyXFxufVxcclxcblxcclxcbi5ycy1sb2dvOmhvdmVyIHtcXHJcXG4gIGZpbHRlcjogdmFyKC0tZmlsdGVyKSBkcm9wLXNoYWRvdygxcHggMXB4IDJweCB2YXIoLS1saWd0aC1jb2xvcikpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWxpa2UtbGluayB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWxpa2UtbGluazpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tbGlndGgtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWxpa2UtbGluazphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmF1dGhvcml6YXRpb24tYmxvY2sge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDQ1MHB4O1xcclxcbiAgaGVpZ2h0OiAzMzBweDtcXHJcXG4gIHRvcDogY2FsYyg1MCUgLSAxNjBweCk7XFxyXFxuICBsZWZ0OiBjYWxjKDUwJSAtIDIyNXB4KTtcXHJcXG4gIHotaW5kZXg6IDIwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNDYsIDI0MCwgMTUzLCAxKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNlY29uZGFyeSk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uYmx1ciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxNTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxuICBvcGFjaXR5OiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjBweDtcXHJcXG4gIHJpZ2h0OiAyMHB4O1xcclxcbiAgZmlsdGVyOiB2YXIoLS1maWx0ZXIpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZmlsdGVyOiB2YXIoLS1maWx0ZXIpIGRyb3Atc2hhZG93KDJweCAycHggMnB4IHZhcigtLWxpZ3RoLWNvbG9yKSk7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtaWNvbjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGgtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5hdXRoLWlucHV0IHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5hdXRob3JpemF0aW9uLWJ0bnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tYnRuLCAucmVnaXN0cmF0aW9uLWJ0biB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1idG46YWN0aXZlLCAucmVnaXN0cmF0aW9uLWJ0bjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZ2lzdHJhdGlvbi1saW5rLWJ0biwgLmxvZ2luLWxpbmstYnRuIHtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNlY29uZGFyeSk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLnJlZ2lzdHJhdGlvbi1saW5rLWJ0bjpob3ZlciwgLmxvZ2luLWxpbmstYnRuOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggdmFyKC0tbGlndGgtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVnaXN0cmF0aW9uLWxpbmstYnRuOmFjdGl2ZSwgLmxvZ2luLWxpbmstYnRuOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3ItbXNnIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VjY2Vzcy1tc2cge1xcclxcbiAgY29sb3I6IGdyZWVuO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXdzL2NvbXBvbmVudHMvYXV0aG9yaXphdGlvbi9hdXRob3JpemF0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsa0NBQWtDO0VBQ2xDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlFQUFpRTtFQUNqRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5hdXRob3JpemF0aW9uLWJsb2NrIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiA0NTBweDtcXHJcXG4gIGhlaWdodDogMzMwcHg7XFxyXFxuICB0b3A6IGNhbGMoNTAlIC0gMTYwcHgpO1xcclxcbiAgbGVmdDogY2FsYyg1MCUgLSAyMjVweCk7XFxyXFxuICB6LWluZGV4OiAyMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ2LCAyNDAsIDE1MywgMSk7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLmJsdXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcclxcbiAgb3BhY2l0eTogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtaWNvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDIwcHg7XFxyXFxuICByaWdodDogMjBweDtcXHJcXG4gIGZpbHRlcjogdmFyKC0tZmlsdGVyKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZpbHRlcjogdmFyKC0tZmlsdGVyKSBkcm9wLXNoYWRvdygycHggMnB4IDJweCB2YXIoLS1saWd0aC1jb2xvcikpO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb246YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxyXFxufVxcclxcblxcclxcbi5hdXRoLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXV0aC1pbnB1dCB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXV0aG9yaXphdGlvbi1idG5zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWJ0biwgLnJlZ2lzdHJhdGlvbi1idG4ge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tYnRuOmFjdGl2ZSwgLnJlZ2lzdHJhdGlvbi1idG46YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxyXFxufVxcclxcblxcclxcbi5yZWdpc3RyYXRpb24tbGluay1idG4sIC5sb2dpbi1saW5rLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5yZWdpc3RyYXRpb24tbGluay1idG46aG92ZXIsIC5sb2dpbi1saW5rLWJ0bjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4IHZhcigtLWxpZ3RoLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZ2lzdHJhdGlvbi1saW5rLWJ0bjphY3RpdmUsIC5sb2dpbi1saW5rLWJ0bjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLW1zZyB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Y2Nlc3MtbXNnIHtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5kaWZmaWN1bHR5LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlmZmljdWx0eS1idG4ge1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcHJpbWFyeSk7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTsgXFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxyXFxuICBvcGFjaXR5OiA3MCU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwxIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRpZmYxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsMiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kaWZmMik7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbDMge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZGlmZjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWw0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRpZmY0KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsNSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kaWZmNSk7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbDYge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZGlmZjYpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWw3IHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRpZmY3KVxcclxcbn1cXHJcXG5cXHJcXG4uZGlmZmljdWx0eS1idG46aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3BhY2l0eTogMTAwJTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlmZmljdWx0eS1idG46YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxyXFxufVxcclxcblxcclxcbi5kaWZmaWN1bHR5LWJ0bi5hY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXHJcXG4gIG9wYWNpdHk6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1jb2xvcik7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9jb21wb25lbnRzL2RpZmZpY3VsdHktYmFyL2RpZmZpY3VsdHktYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kaWZmaWN1bHR5LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlmZmljdWx0eS1idG4ge1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcHJpbWFyeSk7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTsgXFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxyXFxuICBvcGFjaXR5OiA3MCU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWwxIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRpZmYxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsMiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kaWZmMik7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbDMge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZGlmZjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWw0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRpZmY0KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldmVsNSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kaWZmNSk7XFxyXFxufVxcclxcblxcclxcbi5sZXZlbDYge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZGlmZjYpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV2ZWw3IHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRpZmY3KVxcclxcbn1cXHJcXG5cXHJcXG4uZGlmZmljdWx0eS1idG46aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3BhY2l0eTogMTAwJTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlmZmljdWx0eS1idG46YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxyXFxufVxcclxcblxcclxcbi5kaWZmaWN1bHR5LWJ0bi5hY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXHJcXG4gIG9wYWNpdHk6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1jb2xvcik7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdpbmF0aW9uLWNvbnRhaW5lciB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcmltYXJ5KTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdpbmF0aW9uLWNvbnRhaW5lciBwIHtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2luYXRpb24tY29udGFpbmVyIHA6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gIHRleHQtc2hhZG93OiAwIDAgM3B4IHZhcigtLWxpZ3RoLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2luYXRpb24tY29udGFpbmVyIHA6YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxyXFxufVxcclxcblxcclxcbi5wYWdpbmF0aW9uLWNvbnRhaW5lciBwLmRpc2FibGVkIHtcXHJcXG4gIGNvbG9yOiAjOGE4YjhiO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnaW5hdGlvbi1jb250YWluZXIgcC5kaXNhYmxlZCB7XFxyXFxuICBjdXJzb3I6IGF1dG87XFxyXFxuICBjb2xvcjogIzhhOGI4YjtcXHJcXG4gIHRleHQtc2hhZG93OiBub25lO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXdzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBhZ2luYXRpb24tY29udGFpbmVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXByaW1hcnkpO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2luYXRpb24tY29udGFpbmVyIHAge1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnaW5hdGlvbi1jb250YWluZXIgcDpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgMCAzcHggdmFyKC0tbGlndGgtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnaW5hdGlvbi1jb250YWluZXIgcDphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2luYXRpb24tY29udGFpbmVyIHAuZGlzYWJsZWQge1xcclxcbiAgY29sb3I6ICM4YThiOGI7XFxyXFxufVxcclxcblxcclxcbi5wYWdpbmF0aW9uLWNvbnRhaW5lciBwLmRpc2FibGVkIHtcXHJcXG4gIGN1cnNvcjogYXV0bztcXHJcXG4gIGNvbG9yOiAjOGE4YjhiO1xcclxcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIud29yZC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMzUwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCB2YXIoLS1kaWZmMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG4gIG9wYWNpdHk6IDkwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50ZXh0Ym9vay13b3JkLWltZyB7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgb3BhY2l0eTogODAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1MHB4IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud29yZC1kZXNjcmlwdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi53b3JkLXByb3BlcnRpZXMge1xcclxcbiAgd2lkdGg6IDMwNnB4O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTMwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmQtcHJvcGVydGllcyBpbWcge1xcclxcbiAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG4gIG9wYWNpdHk6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmQtcHJvcGVydGllcyBpbWcuYWN0aXZlIHtcXHJcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxyXFxuICBvcGFjaXR5OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yZC1wcm9wZXJ0aWVzIGltZzpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDNweCB2YXIoLS1saWd0aC1jb2xvcikpO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yZC1wcm9wZXJ0aWVzIGltZzphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmQtY29udGFpbmVyIGgyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXVkaW8taWNvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogLTIwcHg7XFxyXFxuICBmaWx0ZXI6IHZhcigtLWZpbHRlcik7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yZCAuYXVkaW8taWNvbiB7XFxyXFxuICB0b3A6IDVweDtcXHJcXG4gIHJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hdWRpby1pY29uOmhvdmVyIHtcXHJcXG4gIGZpbHRlcjogdmFyKC0tZmlsdGVyKSBkcm9wLXNoYWRvdygxcHggMXB4IDNweCB2YXIoLS1saWd0aC1jb2xvcikpO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmF1ZGlvLWljb246YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxyXFxufVxcclxcblxcclxcbi53b3JkLXRyYW5zY3JpcHRpb24ge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi53b3JkLXRyYW5zbGF0aW9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmQtbWVhbmluZyxcXHJcXG4ud29yZC1leGFtcGxlIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yZC1tZWFuaW5nIHAsXFxyXFxuLndvcmQtZXhhbXBsZSBwIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA5MSU7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9jb21wb25lbnRzL3dvcmQtY2FyZC93b3JkLWNhcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlFQUFpRTtFQUNqRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud29yZC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMzUwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCB2YXIoLS1kaWZmMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG4gIG9wYWNpdHk6IDkwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50ZXh0Ym9vay13b3JkLWltZyB7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgb3BhY2l0eTogODAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1MHB4IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud29yZC1kZXNjcmlwdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi53b3JkLXByb3BlcnRpZXMge1xcclxcbiAgd2lkdGg6IDMwNnB4O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTMwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmQtcHJvcGVydGllcyBpbWcge1xcclxcbiAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG4gIG9wYWNpdHk6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmQtcHJvcGVydGllcyBpbWcuYWN0aXZlIHtcXHJcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxyXFxuICBvcGFjaXR5OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yZC1wcm9wZXJ0aWVzIGltZzpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDNweCB2YXIoLS1saWd0aC1jb2xvcikpO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yZC1wcm9wZXJ0aWVzIGltZzphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmQtY29udGFpbmVyIGgyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXVkaW8taWNvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogLTIwcHg7XFxyXFxuICBmaWx0ZXI6IHZhcigtLWZpbHRlcik7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yZCAuYXVkaW8taWNvbiB7XFxyXFxuICB0b3A6IDVweDtcXHJcXG4gIHJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hdWRpby1pY29uOmhvdmVyIHtcXHJcXG4gIGZpbHRlcjogdmFyKC0tZmlsdGVyKSBkcm9wLXNoYWRvdygxcHggMXB4IDNweCB2YXIoLS1saWd0aC1jb2xvcikpO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmF1ZGlvLWljb246YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxyXFxufVxcclxcblxcclxcbi53b3JkLXRyYW5zY3JpcHRpb24ge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi53b3JkLXRyYW5zbGF0aW9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmQtbWVhbmluZyxcXHJcXG4ud29yZC1leGFtcGxlIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yZC1tZWFuaW5nIHAsXFxyXFxuLndvcmQtZXhhbXBsZSBwIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA5MSU7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tYWluLWNvbnRhaW5lci1lcnJvciB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXItZXJyb3IgaDEge1xcclxcbiAgZm9udC1zaXplOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXItZXJyb3IgcCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9wYWdlcy9lcnJvci9lcnJvci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbi1jb250YWluZXItZXJyb3Ige1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyLWVycm9yIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyLWVycm9yIHAge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5hdXRob3JpemF0aW9uLWxpbmsge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZmxleC1ncm93OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXItaW5kZXgge1xcclxcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgbWF4LXdpZHRoOiA2MCU7XFxyXFxuICBtaW4td2lkdGg6IDM3NXB4O1xcclxcbiAgcGFkZGluZzogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24taW1nIHtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24tdGV4dCB7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLXRleHQgcCB7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi10ZXh0IHVsIGxpIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDEwcHggMjBweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi1idG5zIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LW1lbnUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBwYWRkaW5nOiAxMDBweCA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMjVweCAyMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW06aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHZhcigtLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbTphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcXHJcXG5cXHJcXG4gIC5tYWluLWNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogODAlO1xcclxcbiAgfVxcclxcblxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3MvcGFnZXMvaW5kZXgvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7O0FBR0E7O0VBRUU7SUFDRSxjQUFjO0VBQ2hCOztBQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGhvcml6YXRpb24tbGluayB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmbGV4LWdyb3c6IDA7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lci1pbmRleCB7XFxyXFxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYSc7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICBtYXgtd2lkdGg6IDYwJTtcXHJcXG4gIG1pbi13aWR0aDogMzc1cHg7XFxyXFxuICBwYWRkaW5nOiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi1pbWcge1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi10ZXh0IHtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24tdGV4dCBwIHtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLXRleHQgdWwgbGkge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogMTBweCAyMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLWJ0bnMge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtbWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG4gIHBhZGRpbmc6IDEwMHB4IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAyNXB4IDIwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggdmFyKC0tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xcclxcblxcclxcbiAgLm1haW4tY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tYWluLWNvbnRhaW5lci1zcHJpbnQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYSc7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwcmludC10aW1lciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWZpZWxkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtc2NvcmUge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcHJpbWFyeSk7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hbnN3ZXJzIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcnJlY3QtYW5zd2VycyBwIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAxMnB4O1xcclxcbiAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3IpO1xcclxcbiAgb3BhY2l0eTogMjAlO1xcclxcbiAgbWFyZ2luOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5wb2ludHMtcGVyLWFuc3dlciB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2dyZXNzIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yZC1wcm9wcyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zcHJpbnQtd29yZCB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcmltYXJ5KTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ByaW50LXRyYW5zbGF0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bnMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG5zLWNvbnRhaW5lciBkaXYge1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcHJpbWFyeSk7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICB3aWR0aDogNzBweDtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxyXFxuICBvcGFjaXR5OiA4MCU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXRydWUge1xcclxcbiAgYmFja2dyb3VuZDogIzUwYTE1MDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1mYWxzZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjA2OTY5O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRucy1jb250YWluZXIgZGl2OmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG9wYWNpdHk6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgNXB4IHZhcigtLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bnMtY29udGFpbmVyIGRpdjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nLXRvcDogODBweDtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdC1jb250YWluZXIgLnNwcmludC1hdWRpby1pY29uIHtcXHJcXG4gIGZpbHRlcjogdmFyKC0tZmlsdGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdC1jb250YWluZXIgLnNwcmludC1hdWRpby1pY29uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxufVxcclxcblxcclxcbi5yZXN1bHQtY29udGFpbmVyIC5zcHJpbnQtYXVkaW8taWNvbjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdHMtaGVhZGVyIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0cy1kZXNjcmlwdGlvbiBwIHtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0cy1hY2N1cmFjeSB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53b3JkLWxpc3QgaDMge1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi53b3JkLWxpc3QgbGkge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi53b3JkLWxpc3QgbGkgc3BhbiB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcmltYXJ5KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXdzL3BhZ2VzL3NwcmludC9zcHJpbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluLWNvbnRhaW5lci1zcHJpbnQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYSc7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwcmludC10aW1lciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWZpZWxkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtc2NvcmUge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcHJpbWFyeSk7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hbnN3ZXJzIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcnJlY3QtYW5zd2VycyBwIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAxMnB4O1xcclxcbiAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3IpO1xcclxcbiAgb3BhY2l0eTogMjAlO1xcclxcbiAgbWFyZ2luOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5wb2ludHMtcGVyLWFuc3dlciB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2dyZXNzIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yZC1wcm9wcyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zcHJpbnQtd29yZCB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcmltYXJ5KTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ByaW50LXRyYW5zbGF0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bnMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG5zLWNvbnRhaW5lciBkaXYge1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcHJpbWFyeSk7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICB3aWR0aDogNzBweDtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxyXFxuICBvcGFjaXR5OiA4MCU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXRydWUge1xcclxcbiAgYmFja2dyb3VuZDogIzUwYTE1MDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1mYWxzZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjA2OTY5O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRucy1jb250YWluZXIgZGl2OmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG9wYWNpdHk6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgNXB4IHZhcigtLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bnMtY29udGFpbmVyIGRpdjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nLXRvcDogODBweDtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdC1jb250YWluZXIgLnNwcmludC1hdWRpby1pY29uIHtcXHJcXG4gIGZpbHRlcjogdmFyKC0tZmlsdGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdC1jb250YWluZXIgLnNwcmludC1hdWRpby1pY29uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxufVxcclxcblxcclxcbi5yZXN1bHQtY29udGFpbmVyIC5zcHJpbnQtYXVkaW8taWNvbjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdHMtaGVhZGVyIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0cy1kZXNjcmlwdGlvbiBwIHtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0cy1hY2N1cmFjeSB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53b3JkLWxpc3QgaDMge1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi53b3JkLWxpc3QgbGkge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi53b3JkLWxpc3QgbGkgc3BhbiB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcmltYXJ5KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1haW4tY29udGFpbmVyLXN0YXRpc3RpY3Mge1xcclxcbiAgXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9wYWdlcy9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztBQUVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluLWNvbnRhaW5lci1zdGF0aXN0aWNzIHtcXHJcXG4gIFxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbi1jb250YWluZXItdGVhbSB7XFxyXFxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYSc7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDUwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZWFtLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgbWFyZ2luOiA1MHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3IpO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XFxyXFxuICBvcGFjaXR5OiA5MCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWcge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtZGVzY3JpcHRpb24ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1uYW1lIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXByaW1hcnkpO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWNvbnRyaWJ1dGlvbiB7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWxpbmsge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtbGluazpob3ZlciB7XFxyXFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggdmFyKC0tbGlndGgtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1saW5rOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3MvcGFnZXMvdGVhbS90ZWFtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4tY29udGFpbmVyLXRlYW0ge1xcclxcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGVhbS1jb250YWluZXIge1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIG1hcmdpbjogNTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3IpO1xcclxcbiAgb3BhY2l0eTogOTAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1nIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWRlc2NyaXB0aW9uIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtbmFtZSB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcmltYXJ5KTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1jb250cmlidXRpb24ge1xcclxcbiAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1saW5rIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWxpbms6aG92ZXIge1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHZhcigtLWxpZ3RoLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtbGluazphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1haW4tY29udGFpbmVyLXRleHRib29rIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJztcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7IFxcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi53b3Jkcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dGJvb2stZ2FtZS1idG5zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dGJvb2stZ2FtZS1idG5zIGJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNlY29uZGFyeSk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRib29rLWdhbWUtYnRucyBidXR0b24gaW1nIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dGJvb2stZ2FtZS1idG5zIGJ1dHRvbiBwIHtcXHJcXG4gIG9wYWNpdHk6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRib29rLWdhbWUtYnRucyBidXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRib29rLWdhbWUtYnRucyBidXR0b246YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9wYWdlcy90ZXh0Ym9vay90ZXh0Ym9vay5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4tY29udGFpbmVyLXRleHRib29rIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJztcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7IFxcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi53b3Jkcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dGJvb2stZ2FtZS1idG5zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dGJvb2stZ2FtZS1idG5zIGJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNlY29uZGFyeSk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRib29rLWdhbWUtYnRucyBidXR0b24gaW1nIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dGJvb2stZ2FtZS1idG5zIGJ1dHRvbiBwIHtcXHJcXG4gIG9wYWNpdHk6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRib29rLWdhbWUtYnRucyBidXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRib29rLWdhbWUtYnRucyBidXR0b246YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImZ1bmN0aW9uIGUoZSl7dGhpcy5tZXNzYWdlPWV9ZS5wcm90b3R5cGU9bmV3IEVycm9yLGUucHJvdG90eXBlLm5hbWU9XCJJbnZhbGlkQ2hhcmFjdGVyRXJyb3JcIjt2YXIgcj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuYXRvYiYmd2luZG93LmF0b2IuYmluZCh3aW5kb3cpfHxmdW5jdGlvbihyKXt2YXIgdD1TdHJpbmcocikucmVwbGFjZSgvPSskLyxcIlwiKTtpZih0Lmxlbmd0aCU0PT0xKXRocm93IG5ldyBlKFwiJ2F0b2InIGZhaWxlZDogVGhlIHN0cmluZyB0byBiZSBkZWNvZGVkIGlzIG5vdCBjb3JyZWN0bHkgZW5jb2RlZC5cIik7Zm9yKHZhciBuLG8sYT0wLGk9MCxjPVwiXCI7bz10LmNoYXJBdChpKyspO35vJiYobj1hJTQ/NjQqbitvOm8sYSsrJTQpP2MrPVN0cmluZy5mcm9tQ2hhckNvZGUoMjU1Jm4+PigtMiphJjYpKTowKW89XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiLmluZGV4T2Yobyk7cmV0dXJuIGN9O2Z1bmN0aW9uIHQoZSl7dmFyIHQ9ZS5yZXBsYWNlKC8tL2csXCIrXCIpLnJlcGxhY2UoL18vZyxcIi9cIik7c3dpdGNoKHQubGVuZ3RoJTQpe2Nhc2UgMDpicmVhaztjYXNlIDI6dCs9XCI9PVwiO2JyZWFrO2Nhc2UgMzp0Kz1cIj1cIjticmVhaztkZWZhdWx0OnRocm93XCJJbGxlZ2FsIGJhc2U2NHVybCBzdHJpbmchXCJ9dHJ5e3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHIoZSkucmVwbGFjZSgvKC4pL2csKGZ1bmN0aW9uKGUscil7dmFyIHQ9ci5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO3JldHVybiB0Lmxlbmd0aDwyJiYodD1cIjBcIit0KSxcIiVcIit0fSkpKX0odCl9Y2F0Y2goZSl7cmV0dXJuIHIodCl9fWZ1bmN0aW9uIG4oZSl7dGhpcy5tZXNzYWdlPWV9ZnVuY3Rpb24gbyhlLHIpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXRocm93IG5ldyBuKFwiSW52YWxpZCB0b2tlbiBzcGVjaWZpZWRcIik7dmFyIG89ITA9PT0ocj1yfHx7fSkuaGVhZGVyPzA6MTt0cnl7cmV0dXJuIEpTT04ucGFyc2UodChlLnNwbGl0KFwiLlwiKVtvXSkpfWNhdGNoKGUpe3Rocm93IG5ldyBuKFwiSW52YWxpZCB0b2tlbiBzcGVjaWZpZWQ6IFwiK2UubWVzc2FnZSl9fW4ucHJvdG90eXBlPW5ldyBFcnJvcixuLnByb3RvdHlwZS5uYW1lPVwiSW52YWxpZFRva2VuRXJyb3JcIjtleHBvcnQgZGVmYXVsdCBvO2V4cG9ydHtuIGFzIEludmFsaWRUb2tlbkVycm9yfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWp3dC1kZWNvZGUuZXNtLmpzLm1hcFxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hdXRob3JpemF0aW9uLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hdXRob3JpemF0aW9uLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXV0aG9yaXphdGlvbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlmZmljdWx0eS1iYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RpZmZpY3VsdHktYmFyLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlmZmljdWx0eS1iYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhZ2luYXRpb24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhZ2luYXRpb24uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdpbmF0aW9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93b3JkLWNhcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dvcmQtY2FyZC5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dvcmQtY2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZXJyb3IuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Vycm9yLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZXJyb3IuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcHJpbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NwcmludC5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NwcmludC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3RhdGlzdGljcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3RhdGlzdGljcy5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0YXRpc3RpY3MuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RlYW0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RlYW0uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90ZWFtLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90ZXh0Ym9vay5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGV4dGJvb2suY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90ZXh0Ym9vay5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5jbG9zZUJ1cmdlck1lbnUgPSBleHBvcnRzLnNob3dCdXJnZXJNZW51ID0gZXhwb3J0cy5oaWRlQnVyZ2VyTWVudSA9IGV4cG9ydHMudG9nZ2xlQnVyZ2VyTWVudSA9IGV4cG9ydHMuZmluZEh0bWxFbGVtZW50ID0gdm9pZCAwO1xyXG5mdW5jdGlvbiBmaW5kSHRtbEVsZW1lbnQoZnJhZ21lbnQsIHNlbGVjdG9yKSB7XHJcbiAgICBjb25zdCBlbCA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgaWYgKCFlbClcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGVsZW1lbnQgd2FzIGZvdW5kOiAke3NlbGVjdG9yfWApO1xyXG4gICAgcmV0dXJuIGVsO1xyXG59XHJcbmV4cG9ydHMuZmluZEh0bWxFbGVtZW50ID0gZmluZEh0bWxFbGVtZW50O1xyXG5mdW5jdGlvbiB0b2dnbGVCdXJnZXJNZW51KCkge1xyXG4gICAgY29uc3QgYnVyZ2VySWNvbiA9IGZpbmRIdG1sRWxlbWVudChkb2N1bWVudCwgJy5idXJnZXInKTtcclxuICAgIGNvbnN0IG5hdkJhciA9IGZpbmRIdG1sRWxlbWVudChkb2N1bWVudCwgJy5uYXYtYmFyJyk7XHJcbiAgICBidXJnZXJJY29uLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICAgIG5hdkJhci5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbn1cclxuZXhwb3J0cy50b2dnbGVCdXJnZXJNZW51ID0gdG9nZ2xlQnVyZ2VyTWVudTtcclxuZnVuY3Rpb24gaGlkZUJ1cmdlck1lbnUoKSB7XHJcbiAgICBjb25zdCBidXJnZXIgPSBmaW5kSHRtbEVsZW1lbnQoZG9jdW1lbnQsICcuYnVyZ2VyJyk7XHJcbiAgICBjb25zdCBuYXZCYXIgPSBmaW5kSHRtbEVsZW1lbnQoZG9jdW1lbnQsICcubmF2LWJhcicpO1xyXG4gICAgYnVyZ2VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBuYXZCYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG5leHBvcnRzLmhpZGVCdXJnZXJNZW51ID0gaGlkZUJ1cmdlck1lbnU7XHJcbmZ1bmN0aW9uIHNob3dCdXJnZXJNZW51KCkge1xyXG4gICAgY29uc3QgYnVyZ2VyID0gZmluZEh0bWxFbGVtZW50KGRvY3VtZW50LCAnLmJ1cmdlcicpO1xyXG4gICAgY29uc3QgbmF2QmFyID0gZmluZEh0bWxFbGVtZW50KGRvY3VtZW50LCAnLm5hdi1iYXInKTtcclxuICAgIGJ1cmdlci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XHJcbiAgICBuYXZCYXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbn1cclxuZXhwb3J0cy5zaG93QnVyZ2VyTWVudSA9IHNob3dCdXJnZXJNZW51O1xyXG5mdW5jdGlvbiBjbG9zZUJ1cmdlck1lbnUoKSB7XHJcbiAgICBjb25zdCBidXJnZXIgPSBmaW5kSHRtbEVsZW1lbnQoZG9jdW1lbnQsICcuYnVyZ2VyJyk7XHJcbiAgICBjb25zdCBuYXZCYXIgPSBmaW5kSHRtbEVsZW1lbnQoZG9jdW1lbnQsICcubmF2LWJhcicpO1xyXG4gICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgIG5hdkJhci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbn1cclxuZXhwb3J0cy5jbG9zZUJ1cmdlck1lbnUgPSBjbG9zZUJ1cmdlck1lbnU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICAgIC8vIHNpdGVQYXRoOiAnJywgLy8g0LTQu9GPIG5wbSBydW4gc3RhcnRcclxuICAgIHNpdGVQYXRoOiAnL3JzbGFuZycsXHJcbiAgICAvLyBzaXRlUGF0aDogJy9hbm4tbWFrb3Zza2F5YS1KU0ZFMjAyMlExL3N5bGxhYnVzJywgLy8g0LTQu9GPINC00Y3Qv9C70L7RjyDQvdCwINCz0LjRgtGF0LDQsVxyXG4gICAgYXBpOiB7XHJcbiAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo0MDAwLycsIC8vIGh0dHBzOi8vPHlvdXItYXBwLW5hbWU+Lmhlcm9rdWFwcC5jb20vXHJcbiAgICB9LFxyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBjb25maWc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vLyBpbXBvcnQgeyBmaW5kSHRtbEVsZW1lbnQgfSBmcm9tICcuLi9jb21tb24vdXRpbHMvdXRpbHMnO1xyXG4vLyBpbXBvcnQgeyBJV29yZCwgSVdvcmRzIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvSVdvcmQnO1xyXG4vLyBpbXBvcnQgeyBJRGF0YUF1ZGlvIH0gZnJvbSAnLi4vY29tbW9uL2ludGVyZmFjZXMvSURhdGFBdWRpbyc7XHJcbi8vIGltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcclxuLy8gaW1wb3J0IFdvcmQgZnJvbSAnLi4vbW9kZWxzL1dvcmQnO1xyXG4vLyBpbXBvcnQgQXVkaW9jYWxsVmlldyBmcm9tICcuLi92aWV3cy9wYWdlcy9hdWRpb2NhbGwvYXVkaW9jYWxsJztcclxuLy8gaW1wb3J0IHsgcmVuZGVyRGlmZmljdWx0eUJhciB9IGZyb20gJy4uL3ZpZXdzL2NvbXBvbmVudHMvZGlmZmljdWx0eS1iYXIvZGlmZmljdWx0eS1iYXInO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIEF1ZGlvY2FsbENvbnRyb2xsZXIge1xyXG4gICAgYWN0aW9uSW5kZXgocGFnZSwgZGlmZmljdWx0eSwgdGV4dEJvb2tDbGljaykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2UsIGRpZmZpY3VsdHksIHRleHRCb29rQ2xpY2spO1xyXG4gICAgICAgIC8vIGNvbnN0IGRhdGE6IElEYXRhQXVkaW8gPSB7XHJcbiAgICAgICAgLy8gICBjdXJyZW50RGlmZmljdWx0eTogMCxcclxuICAgICAgICAvLyAgIGRhdGEyOiAnYXVkaW9jYWxsJyxcclxuICAgICAgICAvLyAgIHdvcmRzQXJyOiBbXSxcclxuICAgICAgICAvLyAgIGN1cnJlbnRXb3JkOiBudWxsLFxyXG4gICAgICAgIC8vICAgY3VycmVudEFuc3dlcnM6IFtdLFxyXG4gICAgICAgIC8vICAgYW5zd2VyTWFwOiBuZXcgTWFwKCksXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAvLyBjb25zdCBtYWluQ29udGFpbmVyID0gZmluZEh0bWxFbGVtZW50KGRvY3VtZW50LCAnbWFpbicpO1xyXG4gICAgICAgIC8vIG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgLy8gbWFpbkNvbnRhaW5lci5hcHBlbmQocmVuZGVyRGlmZmljdWx0eUJhcigpKTtcclxuICAgICAgICAvLyBtYWluQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgQXVkaW9jYWxsVmlldy5yZW5kZXJTdGFydEJ0bigpKTtcclxuICAgICAgICAvLyBjb25zdCBzdGFydEJ0biA9IDxIVE1MQnV0dG9uRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtYnRuJyk7XHJcbiAgICAgICAgLy8gY29uc3QgZGlmZmljdWx0eUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWZmaWN1bHR5LWNvbnRhaW5lcicpO1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIGFjdGl2YXRlUHJvcChlbDogSFRNTEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyAgIGlmIChlbCkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgICAgIC8vICAgICBlbGVtZW50cz8uZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgICAgICAgLy8gICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIC8vICAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICBkYXRhLmN1cnJlbnREaWZmaWN1bHR5ID0gTnVtYmVyKGVsLmlubmVyVGV4dCkgLSAxO1xyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBkaWZmaWN1bHR5Q29udGFpbmVyPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgLy8gICBhY3RpdmF0ZVByb3AoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQsICcuZGlmZmljdWx0eS1idG4nKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyBmdW5jdGlvbiBidXR0b25QcmVzcygpIHtcclxuICAgICAgICAvLyAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAvLyAgICAgICAoPEhUTUxCdXR0b25FbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbmV4dCcpKS5jbGljaygpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICg8SFRNTEJ1dHRvbkVsZW1lbnQ+KFxyXG4gICAgICAgIC8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFuc3dlciR7ZXZlbnQua2V5fWApXHJcbiAgICAgICAgLy8gICAgICAgKSkuY2xpY2soKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlV29yZHMoKSB7XHJcbiAgICAgICAgLy8gICBjb25zdCB0ZW1wb3JhcnlSZXN1bHQ6IElXb3Jkc1tdID0gW107XHJcbiAgICAgICAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpICs9IDEpIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgbWlkUmVzOiBJV29yZFtdID0gYXdhaXQgV29yZC5nZXRXb3JkcyhpLCBkYXRhLmN1cnJlbnREaWZmaWN1bHR5KVxyXG4gICAgICAgIC8vICAgICAgIC50aGVuKCh3b3JkcykgPT4gd29yZHMpXHJcbiAgICAgICAgLy8gICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICAgICAgLy8gICAgIHRlbXBvcmFyeVJlc3VsdC5wdXNoKG1pZFJlcy5mbGF0KCkpO1xyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vICAgZGF0YS53b3Jkc0FyciA9IHRlbXBvcmFyeVJlc3VsdC5mbGF0KCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHBsYXlBdWRpbyhidG46IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgLy8gICBpZiAoYnRuKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGlkID0gYnRuLmlkLnNwbGl0KCctJykucmV2ZXJzZSgpWzBdO1xyXG4gICAgICAgIC8vICAgICAoPEhUTUxBdWRpb0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGF1ZGlvLXdvcmQtJHtpZH1gKSkucGxheSgpO1xyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBmdW5jdGlvbiB3b3Jkc1JhbmRvbWl6ZXIoKSB7XHJcbiAgICAgICAgLy8gICBkYXRhLmN1cnJlbnRXb3JkID0gZGF0YS53b3Jkc0FycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2MDEpXTtcclxuICAgICAgICAvLyAgIGNvbnN0IHJhbmRvbVdvcmQgPSAoKSA9PiBkYXRhLndvcmRzQXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYwMSldO1xyXG4gICAgICAgIC8vICAgY29uc3QgcmFuZG9tQXJyYXk6ICgpID0+IHN0cmluZ1tdID0gKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcclxuICAgICAgICAvLyAgICAgICBhcnIucHVzaChyYW5kb21Xb3JkKCkud29yZFRyYW5zbGF0ZSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgcmV0dXJuIGFycjtcclxuICAgICAgICAvLyAgIH07XHJcbiAgICAgICAgLy8gICBkYXRhLmN1cnJlbnRBbnN3ZXJzID0gcmFuZG9tQXJyYXkoKTtcclxuICAgICAgICAvLyAgIGRhdGEuY3VycmVudEFuc3dlcnMuc3BsaWNlKFxyXG4gICAgICAgIC8vICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KSxcclxuICAgICAgICAvLyAgICAgMSxcclxuICAgICAgICAvLyAgICAgZGF0YS5jdXJyZW50V29yZC53b3JkVHJhbnNsYXRlLFxyXG4gICAgICAgIC8vICAgKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gc3RhcnRCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyAgIHN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyAgIGF3YWl0IGdlbmVyYXRlV29yZHMoKTtcclxuICAgICAgICAvLyAgIHdvcmRzUmFuZG9taXplcigpO1xyXG4gICAgICAgIC8vICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBBdWRpb2NhbGxWaWV3LnJlbmRlclF1ZXN0aW9uKFxyXG4gICAgICAgIC8vICAgICBkYXRhLmN1cnJlbnRBbnN3ZXJzLFxyXG4gICAgICAgIC8vICAgICBkYXRhLmN1cnJlbnRXb3JkLFxyXG4gICAgICAgIC8vICAgKTtcclxuICAgICAgICAvLyAgICg8SFRNTEF1ZGlvRWxlbWVudD4oXHJcbiAgICAgICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhdWRpby13b3JkLSR7KDxJV29yZD5kYXRhLmN1cnJlbnRXb3JkKS53b3JkfWApXHJcbiAgICAgICAgLy8gICApKS5wbGF5KCk7XHJcbiAgICAgICAgLy8gICBjaGVja0Fuc3dlcigpO1xyXG4gICAgICAgIC8vICAgbmV4dFF1ZXN0aW9uKCk7XHJcbiAgICAgICAgLy8gICBidXR0b25QcmVzcygpO1xyXG4gICAgICAgIC8vICAgKDxIVE1MSW1hZ2VFbGVtZW50PihcclxuICAgICAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLWJ0bi1pbWcnKVxyXG4gICAgICAgIC8vICAgKSkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gcGxheUF1ZGlvKGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQpKTtcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIGNoZWNrQW5zd2VyKCkge1xyXG4gICAgICAgIC8vICAgKDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRucy1jb250YWluZXInKSkub25jbGljayA9IChcclxuICAgICAgICAvLyAgICAgZTogRXZlbnQsXHJcbiAgICAgICAgLy8gICApID0+IHtcclxuICAgICAgICAvLyAgICAgbmV4dFF1ZXN0aW9uKCk7XHJcbiAgICAgICAgLy8gICAgIGJ1dHRvblByZXNzKCk7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGFuc3dlckl0ZW1zID0gW1xyXG4gICAgICAgIC8vICAgICAgIC4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Fuc3dlci1pdGVtJyksXHJcbiAgICAgICAgLy8gICAgIF07XHJcbiAgICAgICAgLy8gICAgIGlmICgoPEhUTUxFbGVtZW50PmUudGFyZ2V0KS5jbGFzc0xpc3QuY29udGFpbnMoJ2Fuc3dlci1pdGVtJykpIHtcclxuICAgICAgICAvLyAgICAgICBjb25zdCBhbnN3ZXJJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3VuZC1pY29uJyk7XHJcbiAgICAgICAgLy8gICAgICAgKDxIVE1MSW1hZ2VFbGVtZW50PmFuc3dlckltYWdlKS5zcmMgPSBgJHtjb25maWcuYXBpLnVybH0ke1xyXG4gICAgICAgIC8vICAgICAgICAgKDxJV29yZD5kYXRhLmN1cnJlbnRXb3JkKS5pbWFnZVxyXG4gICAgICAgIC8vICAgICAgIH1gO1xyXG4gICAgICAgIC8vICAgICAgICg8SFRNTFBhcmFncmFwaEVsZW1lbnQ+KFxyXG4gICAgICAgIC8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtd29yZC1hbnN3ZXInKVxyXG4gICAgICAgIC8vICAgICAgICkpLmlubmVySFRNTCA9ICg8SVdvcmQ+ZGF0YS5jdXJyZW50V29yZCkud29yZDtcclxuICAgICAgICAvLyAgICAgICBpZiAoKDxIVE1MRWxlbWVudD5lLnRhcmdldCkuaW5uZXJUZXh0LnNsaWNlKDMpID09PVxyXG4gICAgICAgIC8vICg8SVdvcmQ+ZGF0YS5jdXJyZW50V29yZCkud29yZFRyYW5zbGF0ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgKDxIVE1MQnV0dG9uRWxlbWVudFtdPmFuc3dlckl0ZW1zKS5mb3JFYWNoKChlbCkgPT5cclxuICAgICAgICAvLyBlbC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ3RydWUnKSk7XHJcbiAgICAgICAgLy8gICAgICAgICAoPEhUTUxFbGVtZW50PmUudGFyZ2V0KS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgLy8gICAgICAgICAgICdiZWZvcmViZWdpbicsXHJcbiAgICAgICAgLy8gICAgICAgICAgIEF1ZGlvY2FsbFZpZXcucmlnaHRJY29uKCksXHJcbiAgICAgICAgLy8gICAgICAgICApO1xyXG4gICAgICAgIC8vICAgICAgICAgKDxIVE1MQnV0dG9uRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLW5leHQnKSkuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgICAgIGRhdGEuYW5zd2VyTWFwLnNldCg8SVdvcmQ+ZGF0YS5jdXJyZW50V29yZCwgJ2NvcnJlY3QnKTtcclxuICAgICAgICAvLyAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgKDxIVE1MQnV0dG9uRWxlbWVudFtdPmFuc3dlckl0ZW1zKS5mb3JFYWNoKFxyXG4gICAgICAgIC8vICAgICAgICAgICAoZWwpID0+IGVsLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpLFxyXG4gICAgICAgIC8vICAgICAgICAgKTtcclxuICAgICAgICAvLyAgICAgICAgICg8SFRNTEJ1dHRvbkVsZW1lbnRbXT5hbnN3ZXJJdGVtcykuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgaWYgKFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVsLmlubmVySFRNTC5zbGljZSgzKSA9PT0gKDxJV29yZD5kYXRhLmN1cnJlbnRXb3JkKS53b3JkVHJhbnNsYXRlXHJcbiAgICAgICAgLy8gICAgICAgICAgICkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVsLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCBBdWRpb2NhbGxWaWV3LnJpZ2h0SWNvbigpKTtcclxuICAgICAgICAvLyAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgICAgICAoPEhUTUxFbGVtZW50PmUudGFyZ2V0KS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgLy8gICAgICAgICAgICdiZWZvcmViZWdpbicsXHJcbiAgICAgICAgLy8gICAgICAgICAgIEF1ZGlvY2FsbFZpZXcud3JvbmdJY29uKCksXHJcbiAgICAgICAgLy8gICAgICAgICApO1xyXG4gICAgICAgIC8vICAgICAgICAgKDxIVE1MQnV0dG9uRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLW5leHQnKSkuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgICAgIGRhdGEuYW5zd2VyTWFwLnNldCg8SVdvcmQ+ZGF0YS5jdXJyZW50V29yZCwgJ2luY29ycmVjdCcpO1xyXG4gICAgICAgIC8vICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgfTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZnVuY3Rpb24gbmV4dFF1ZXN0aW9uKCkge1xyXG4gICAgICAgIC8vICAgKDxIVE1MQnV0dG9uRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLW5leHQnKSkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKGRhdGEuYW5zd2VyTWFwLnNpemUgPCA0KSB7XHJcbiAgICAgICAgLy8gICAgICAgd29yZHNSYW5kb21pemVyKCk7XHJcbiAgICAgICAgLy8gICAgICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBBdWRpb2NhbGxWaWV3LnJlbmRlclF1ZXN0aW9uKFxyXG4gICAgICAgIC8vICAgICAgICAgZGF0YS5jdXJyZW50QW5zd2VycyxcclxuICAgICAgICAvLyAgICAgICAgIGRhdGEuY3VycmVudFdvcmQsXHJcbiAgICAgICAgLy8gICAgICAgKTtcclxuICAgICAgICAvLyAgICAgICAoPEhUTUxBdWRpb0VsZW1lbnQ+KFxyXG4gICAgICAgIC8vICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGF1ZGlvLXdvcmQtJHsoPElXb3JkPmRhdGEuY3VycmVudFdvcmQpLndvcmR9YClcclxuICAgICAgICAvLyAgICAgICApKS5wbGF5KCk7XHJcbiAgICAgICAgLy8gICAgICAgKDxIVE1MSW1hZ2VFbGVtZW50PihcclxuICAgICAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1idG4taW1nJylcclxuICAgICAgICAvLyAgICAgICApKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBwbGF5QXVkaW8oZS50YXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudCkpO1xyXG4gICAgICAgIC8vICAgICAgIGNoZWNrQW5zd2VyKCk7XHJcbiAgICAgICAgLy8gICAgICAgYnV0dG9uUHJlc3MoKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIC8vICAgICAgIGNvbnN0IG1hcFNvcnQgPSBuZXcgTWFwKFsuLi5kYXRhLmFuc3dlck1hcC5lbnRyaWVzKCldLnNvcnQoKSk7XHJcbiAgICAgICAgLy8gICAgICAgY29uc3QgbWFwQ29ycmVjdCA9IG5ldyBNYXAoXHJcbiAgICAgICAgLy8gICAgICAgICBbLi4ubWFwU29ydF0uZmlsdGVyKChbXywgdl0pID0+IHYgPT09ICdjb3JyZWN0JyksXHJcbiAgICAgICAgLy8gICAgICAgKTtcclxuICAgICAgICAvLyAgICAgICBjb25zdCBtYXBJbmNvcnJlY3QgPSBuZXcgTWFwKFxyXG4gICAgICAgIC8vICAgICAgICAgWy4uLm1hcFNvcnRdLmZpbHRlcigoW18sIHZdKSA9PiB2ID09PSAnaW5jb3JyZWN0JyksXHJcbiAgICAgICAgLy8gICAgICAgKTtcclxuICAgICAgICAvLyAgICAgICBtYWluQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAvLyAgICAgICAgICdhZnRlcmJlZ2luJyxcclxuICAgICAgICAvLyAgICAgICAgIEF1ZGlvY2FsbFZpZXcucmVuZGVyUmVzdWx0cyhcclxuICAgICAgICAvLyAgICAgICAgICAgbWFwQ29ycmVjdC5zaXplLFxyXG4gICAgICAgIC8vICAgICAgICAgICBtYXBJbmNvcnJlY3Quc2l6ZSxcclxuICAgICAgICAvLyAgICAgICAgICAgbWFwSW5jb3JyZWN0LnNpemUgPT09IDAgPyAxMDAgOiAobWFwQ29ycmVjdC5zaXplIC8gbWFwU29ydC5zaXplKSAqIDEwMCxcclxuICAgICAgICAvLyAgICAgICAgICksXHJcbiAgICAgICAgLy8gICAgICAgKTtcclxuICAgICAgICAvLyAgICAgICBtYXBDb3JyZWN0LmZvckVhY2goKF8sIGspID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICg8SFRNTERpdkVsZW1lbnQ+KFxyXG4gICAgICAgIC8vICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycmVjdC1yZXN1bHRzJylcclxuICAgICAgICAvLyAgICAgICAgICkpLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAvLyAgICAgICAgICAgJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgLy8gICAgICAgICAgIEF1ZGlvY2FsbFZpZXcucmVuZGVyQ29ycmVjdFJlc3VsdHMoayksXHJcbiAgICAgICAgLy8gICAgICAgICApO1xyXG4gICAgICAgIC8vICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICAgIG1hcEluY29ycmVjdC5mb3JFYWNoKChfLCBrKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAoPEhUTUxEaXZFbGVtZW50PihcclxuICAgICAgICAvLyAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluY29ycmVjdC1yZXN1bHRzJylcclxuICAgICAgICAvLyAgICAgICAgICkpLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAvLyAgICAgICAgICAgJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgLy8gICAgICAgICAgIEF1ZGlvY2FsbFZpZXcucmVuZGVySW5jb3JyZWN0UmVzdWx0cyhrKSxcclxuICAgICAgICAvLyAgICAgICAgICk7XHJcbiAgICAgICAgLy8gICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1ZGlvLWljb24nKS5mb3JFYWNoKChpY29uKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHBsYXlBdWRpbyhlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkpO1xyXG4gICAgICAgIC8vICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICB9O1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBBdWRpb2NhbGxDb250cm9sbGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL2NvbW1vbi91dGlscy91dGlsc1wiKTtcclxuY29uc3QgZXJyb3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vdmlld3MvcGFnZXMvZXJyb3IvZXJyb3JcIikpO1xyXG5jbGFzcyBFcnJvckNvbnRyb2xsZXIge1xyXG4gICAgYWN0aW9uSW5kZXgoKSB7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICdtYWluJyk7XHJcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBlcnJvcl8xLmRlZmF1bHQuZHJhdygpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEVycm9yQ29udHJvbGxlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdXRpbHMvdXRpbHNcIik7XHJcbmNvbnN0IGluZGV4XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3ZpZXdzL3BhZ2VzL2luZGV4L2luZGV4XCIpKTtcclxuY2xhc3MgSW5kZXhDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcCkge1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgfVxyXG4gICAgYWN0aW9uSW5kZXgoKSB7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICdtYWluJyk7XHJcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBpbmRleF8xLmRlZmF1bHQuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuYXBwLnNldFJvdXRlclRvRWxlbWVudHMoJy5zdGFydC1tZW51IGxpJyk7XHJcbiAgICAgICAgdGhpcy5hcHAuc2V0Um91dGVyVG9FbGVtZW50cygnLmJ0bi1saWtlLWxpbmsnKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBJbmRleENvbnRyb2xsZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3V0aWxzL3V0aWxzXCIpO1xyXG5jb25zdCBzcHJpbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vdmlld3MvcGFnZXMvc3ByaW50L3NwcmludFwiKSk7XHJcbmNsYXNzIFNwcmludENvbnRyb2xsZXIge1xyXG4gICAgYWN0aW9uSW5kZXgocGFnZSwgZGlmZmljdWx0eSwgdGV4dEJvb2tDbGljaykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2UsIGRpZmZpY3VsdHksIHRleHRCb29rQ2xpY2spO1xyXG4gICAgICAgIC8vIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgLy8gICBkYXRhMTogJzMnLFxyXG4gICAgICAgIC8vICAgZGF0YTI6ICdzcHJpbnQnLFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgY29uc3QgbWFpbiA9ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICdtYWluJyk7XHJcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBzcHJpbnRfMS5kZWZhdWx0LmRyYXcoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBTcHJpbnRDb250cm9sbGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL2NvbW1vbi91dGlscy91dGlsc1wiKTtcclxuY29uc3Qgc3RhdGlzdGljc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi92aWV3cy9wYWdlcy9zdGF0aXN0aWNzL3N0YXRpc3RpY3NcIikpO1xyXG5jbGFzcyBTdGF0aXN0aWNzQ29udHJvbGxlciB7XHJcbiAgICBhY3Rpb25JbmRleCgpIHtcclxuICAgICAgICAvLyBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIC8vICAgZGF0YTE6ICcyJyxcclxuICAgICAgICAvLyAgIGRhdGEyOiAnc3RhdGlzdGljcycsXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICBjb25zdCBtYWluID0gKDAsIHV0aWxzXzEuZmluZEh0bWxFbGVtZW50KShkb2N1bWVudCwgJ21haW4nKTtcclxuICAgICAgICBtYWluLmlubmVySFRNTCA9IHN0YXRpc3RpY3NfMS5kZWZhdWx0LmRyYXcoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBTdGF0aXN0aWNzQ29udHJvbGxlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdXRpbHMvdXRpbHNcIik7XHJcbmNvbnN0IHRlYW1fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vdmlld3MvcGFnZXMvdGVhbS90ZWFtXCIpKTtcclxuY2xhc3MgVGVhbUNvbnRyb2xsZXIge1xyXG4gICAgYWN0aW9uSW5kZXgoKSB7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICdtYWluJyk7XHJcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSB0ZWFtXzEuZGVmYXVsdC5kcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gVGVhbUNvbnRyb2xsZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgV29yZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9tb2RlbHMvV29yZFwiKSk7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3V0aWxzL3V0aWxzXCIpO1xyXG5jb25zdCBkaWZmaWN1bHR5X2Jhcl8xID0gcmVxdWlyZShcIi4uL3ZpZXdzL2NvbXBvbmVudHMvZGlmZmljdWx0eS1iYXIvZGlmZmljdWx0eS1iYXJcIik7XHJcbmNvbnN0IHBhZ2luYXRpb25fMSA9IHJlcXVpcmUoXCIuLi92aWV3cy9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvblwiKTtcclxuY29uc3Qgd29yZF9jYXJkXzEgPSByZXF1aXJlKFwiLi4vdmlld3MvY29tcG9uZW50cy93b3JkLWNhcmQvd29yZC1jYXJkXCIpO1xyXG5jb25zdCB0ZXh0Ym9va18xID0gcmVxdWlyZShcIi4uL3ZpZXdzL3BhZ2VzL3RleHRib29rL3RleHRib29rXCIpO1xyXG5jb25zdCBVc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21vZGVscy9Vc2VyXCIpKTtcclxuY2xhc3MgVGV4dGJvb2tDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcCkge1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgICAgIHRoaXMuYXBwLnN1YnNjcmliZU9uQXV0aENoYW5nZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICgwLCBkaWZmaWN1bHR5X2Jhcl8xLnNldEhhcmRXb3Jkc1Zpc2libGUpKHRoaXMuYXBwLmlzQXV0aCk7XHJcbiAgICAgICAgICAgICgwLCB3b3JkX2NhcmRfMS5zZXRXb3JkUHJvcHNWaXNpYmxlKSh0aGlzLmFwcC5pc0F1dGgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZ2V0RnJvbUxTKCkgfHwgeyBkaWZmaWN1bHR5OiAwLCBwYWdlTnVtOiAwIH07XHJcbiAgICB9XHJcbiAgICBhY3Rpb25JbmRleCgpIHtcclxuICAgICAgICBjb25zdCBtYWluID0gKDAsIHV0aWxzXzEuZmluZEh0bWxFbGVtZW50KShkb2N1bWVudCwgJ21haW4nKTtcclxuICAgICAgICBtYWluLmlubmVySFRNTCA9ICgwLCB0ZXh0Ym9va18xLnJlbmRlclRleHRib29rUGFnZSkoKTtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSAoMCwgdXRpbHNfMS5maW5kSHRtbEVsZW1lbnQpKGRvY3VtZW50LCAnaDEnKTtcclxuICAgICAgICBoZWFkZXIuYWZ0ZXIoKDAsIGRpZmZpY3VsdHlfYmFyXzEucmVuZGVyRGlmZmljdWx0eUJhcikoKSk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnNUb0RpZmZCYXIoKTtcclxuICAgICAgICAoMCwgZGlmZmljdWx0eV9iYXJfMS5zZXRIYXJkV29yZHNWaXNpYmxlKSh0aGlzLmFwcC5pc0F1dGgpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVXb3JkQ2FyZHModGhpcy5kYXRhLnBhZ2VOdW0sIHRoaXMuZGF0YS5kaWZmaWN1bHR5LCB0aGlzLmFwcC5pc0F1dGgpO1xyXG4gICAgICAgICgwLCBkaWZmaWN1bHR5X2Jhcl8xLmFjdGl2YXRlQ3VycmVudERpZmZpY3VsdHkpKHRoaXMuZGF0YS5kaWZmaWN1bHR5ICsgMSk7XHJcbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICcubWFpbi1jb250YWluZXItdGV4dGJvb2snKTtcclxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZCgoMCwgcGFnaW5hdGlvbl8xLnJlbmRlclBhZ2luYXRpb24pKCkpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzVG9QYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnNUb0dhbWVCdG5zKCk7XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZVdvcmRDYXJkcyhwYWdlLCBkaWZmaWN1bHR5LCBhdXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3Qgd29yZHNDb250YWluZXIgPSAoMCwgdXRpbHNfMS5maW5kSHRtbEVsZW1lbnQpKGRvY3VtZW50LCAnLndvcmRzLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICB3b3Jkc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgbGV0IHdvcmRzID0gZGlmZmljdWx0eSAhPT0gNlxyXG4gICAgICAgICAgICAgICAgPyB5aWVsZCBXb3JkXzEuZGVmYXVsdC5nZXRXb3JkcyhwYWdlLCBkaWZmaWN1bHR5KVxyXG4gICAgICAgICAgICAgICAgOiB5aWVsZCBVc2VyXzEuZGVmYXVsdC5nZXRVc2VyV29yZHMoKTtcclxuICAgICAgICAgICAgaWYgKGRpZmZpY3VsdHkgPT09IDYpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdvcmRzUHJvbWlzZXMgPSB3b3Jkc1xyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHdvcmQpID0+IHdvcmQuZGlmZmljdWx0eSA9PT0gJ2hhcmQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHdvcmQpID0+IFdvcmRfMS5kZWZhdWx0LmNvbnZlcnRJVXNlcldvcmRUb0lXb3JkKHdvcmQpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSB5aWVsZCBQcm9taXNlLmFsbFNldHRsZWQod29yZHNQcm9taXNlcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWNjZXNzZnVsbFdvcmRzID0gcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHJlcykgPT4gcmVzLnN0YXR1cyA9PT0gJ2Z1bGZpbGxlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVzKSA9PiByZXMudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigodmFsKSA9PiB2YWwpO1xyXG4gICAgICAgICAgICAgICAgd29yZHMgPSBzdWNjZXNzZnVsbFdvcmRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdvcmRzLmZvckVhY2goKHdvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSAoMCwgd29yZF9jYXJkXzEucmVuZGVyV29yZENhcmQpKHdvcmQpO1xyXG4gICAgICAgICAgICAgICAgd29yZHNDb250YWluZXIuYXBwZW5kKGNhcmQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgKDAsIHdvcmRfY2FyZF8xLmNoYW5nZUNhcmRCb3hzaGFkb3cpKGRpZmZpY3VsdHkgKyAxKTtcclxuICAgICAgICAgICAgKDAsIHdvcmRfY2FyZF8xLnNldFdvcmRQcm9wc1Zpc2libGUpKGF1dGgpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZExpc3RlbmVyc1RvQ2FyZHMoKTtcclxuICAgICAgICAgICAgKDAsIHBhZ2luYXRpb25fMS5zZXRQYWdlTnVtKShwYWdlICsgMSk7XHJcbiAgICAgICAgICAgICgwLCBwYWdpbmF0aW9uXzEuZGlzYWJsZUJ0bnMpKHBhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFRvTFMoeyBwYWdlTnVtOiBwYWdlLCBkaWZmaWN1bHR5IH0pO1xyXG4gICAgICAgICAgICBjb25zdCBwYWdpbmF0aW9uID0gKDAsIHV0aWxzXzEuZmluZEh0bWxFbGVtZW50KShkb2N1bWVudCwgJy5wYWdpbmF0aW9uLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmRhdGEuZGlmZmljdWx0eSA9PT0gNiA/ICdub25lJyA6ICdmbGV4JztcclxuICAgICAgICAgICAgY29uc3QgaGFyZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53b3JkLWhhcmQnKTtcclxuICAgICAgICAgICAgaGFyZEJ0bi5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgICAgICAgICAgIGJ0bi5zdHlsZS5kaXNwbGF5ID0gdGhpcy5kYXRhLmRpZmZpY3VsdHkgPT09IDYgPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5tYXJrVXNlcldvcmRzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhZGRMaXN0ZW5lcnNUb0RpZmZCYXIoKSB7XHJcbiAgICAgICAgY29uc3QgZGlmZmljdWx0eUNvbnRhaW5lciA9ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICcuZGlmZmljdWx0eS1jb250YWluZXInKTtcclxuICAgICAgICBkaWZmaWN1bHR5Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnRuID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgICgwLCBkaWZmaWN1bHR5X2Jhcl8xLmFjdGl2YXRlUHJvcCkoYnRuKTtcclxuICAgICAgICAgICAgaWYgKCFidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdkaWZmaWN1bHR5LWJ0bicpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gYnRuLmRhdGFzZXQuZ3JvdXA7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5kaWZmaWN1bHR5ID0gTnVtYmVyKGRpZmYpIC0gMSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEucGFnZU51bSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVXb3JkQ2FyZHModGhpcy5kYXRhLnBhZ2VOdW0sIHRoaXMuZGF0YS5kaWZmaWN1bHR5LCB0aGlzLmFwcC5pc0F1dGgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiAoMCwgd29yZF9jYXJkXzEuY2hhbmdlQ2FyZEJveHNoYWRvdykodGhpcy5kYXRhLmRpZmZpY3VsdHkgKyAxKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhZGRMaXN0ZW5lcnNUb0NhcmRzKCkge1xyXG4gICAgICAgIGNvbnN0IHdvcmRQcm9wcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53b3JkLXByb3BlcnRpZXMnKTtcclxuICAgICAgICB3b3JkUHJvcHMuZm9yRWFjaCgoY29udGFpbmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAoMCwgd29yZF9jYXJkXzEuY2hvb3NlV29yZFByb3ApKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Qcm9wc0J0bnNDbGljayhlLnRhcmdldCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hdWRpby1pY29uJykuZm9yRWFjaCgoaWNvbikgPT4ge1xyXG4gICAgICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+ICgwLCB3b3JkX2NhcmRfMS5wbGF5QXVkaW8pKGUudGFyZ2V0KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhZGRMaXN0ZW5lcnNUb0dhbWVCdG5zKCkge1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvY2FsbEdhbWUgPSAoMCwgdXRpbHNfMS5maW5kSHRtbEVsZW1lbnQpKGRvY3VtZW50LCAnLnN0YXJ0LWF1ZGlvY2FsbCcpO1xyXG4gICAgICAgIGNvbnN0IHNwcmludEdhbWUgPSAoMCwgdXRpbHNfMS5maW5kSHRtbEVsZW1lbnQpKGRvY3VtZW50LCAnLnN0YXJ0LXNwcmludCcpO1xyXG4gICAgICAgIGF1ZGlvY2FsbEdhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNhbGxHYW1lKCdhdWRpb2NhbGwnKSk7XHJcbiAgICAgICAgc3ByaW50R2FtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2FsbEdhbWUoJ3NwcmludCcpKTtcclxuICAgIH1cclxuICAgIGFkZExpc3RlbmVyc1RvUGFnaW5hdGlvbigpIHtcclxuICAgICAgICBjb25zdCBwYWdpbmF0aW9uID0gKDAsIHV0aWxzXzEuZmluZEh0bWxFbGVtZW50KShkb2N1bWVudCwgJy5wYWdpbmF0aW9uLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHBhZ2luYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidG4gPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRQYWdlID0gKDAsIHV0aWxzXzEuZmluZEh0bWxFbGVtZW50KShkb2N1bWVudCwgJy5wYWdpbmF0aW9uLW5leHQnKTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdFBhZ2UgPSAoMCwgdXRpbHNfMS5maW5kSHRtbEVsZW1lbnQpKGRvY3VtZW50LCAnLnBhZ2luYXRpb24tbGFzdCcpO1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2UGFnZSA9ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICcucGFnaW5hdGlvbi1wcmV2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0UGFnZSA9ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICcucGFnaW5hdGlvbi1maXJzdCcpO1xyXG4gICAgICAgICAgICBpZiAoYnRuID09PSBuZXh0UGFnZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnBhZ2VOdW0gKz0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5wYWdlTnVtID0gdGhpcy5kYXRhLnBhZ2VOdW0gPD0gMjkgPyB0aGlzLmRhdGEucGFnZU51bSA6IDI5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChidG4gPT09IGxhc3RQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEucGFnZU51bSA9IDI5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChidG4gPT09IHByZXZQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEucGFnZU51bSAtPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnBhZ2VOdW0gPSB0aGlzLmRhdGEucGFnZU51bSA+PSAwID8gdGhpcy5kYXRhLnBhZ2VOdW0gOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChidG4gPT09IGZpcnN0UGFnZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnBhZ2VOdW0gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVXb3JkQ2FyZHModGhpcy5kYXRhLnBhZ2VOdW0sIHRoaXMuZGF0YS5kaWZmaWN1bHR5LCB0aGlzLmFwcC5pc0F1dGgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2FsbEdhbWUoZ2FtZSkge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgcGFnZTogdGhpcy5kYXRhLnBhZ2VOdW0sXHJcbiAgICAgICAgICAgIGRpZmZpY3VsdHk6IHRoaXMuZGF0YS5kaWZmaWN1bHR5LFxyXG4gICAgICAgICAgICB0ZXh0Qm9va0NsaWNrOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hcHAub3BlbkdhbWVQYWdlKGdhbWUsIHBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICBzZXRUb0xTKGRhdGEpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGV4dGJvb2tEYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0RnJvbUxTKCkge1xyXG4gICAgICAgIGNvbnN0IHRleHRib29rRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXh0Ym9va0RhdGEnKTtcclxuICAgICAgICBsZXQgcmVzID0geyBkaWZmaWN1bHR5OiAwLCBwYWdlTnVtOiAwIH07XHJcbiAgICAgICAgaWYgKHRleHRib29rRGF0YSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gSlNPTi5wYXJzZSh0ZXh0Ym9va0RhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuICAgIGNyZWF0ZVVzZXJXb3JkKGRpZmZpY3VsdHkpIHtcclxuICAgICAgICBjb25zdCB3b3JkID0ge1xyXG4gICAgICAgICAgICBkaWZmaWN1bHR5LFxyXG4gICAgICAgICAgICBvcHRpb25hbDoge1xyXG4gICAgICAgICAgICAgICAgc3RyZWFrOiAwLFxyXG4gICAgICAgICAgICAgICAgbmV3V29yZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0b3RhbENvdW50QXVkaW9jYWxsOiAwLFxyXG4gICAgICAgICAgICAgICAgdG90YWxDb3JyZWN0QXVkaW9jYWxsOiAwLFxyXG4gICAgICAgICAgICAgICAgdG90YWxDb3VudFNwcmludDogMCxcclxuICAgICAgICAgICAgICAgIHRvdGFsQ29ycmVjdFNwcmludDogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB3b3JkO1xyXG4gICAgfVxyXG4gICAgcHV0V29yZFRvU2VydmVyKGlkLCBkaWZmaWN1bHR5KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgbGV0IHVzZXJXb3JkID0geWllbGQgVXNlcl8xLmRlZmF1bHQuZ2V0VXNlcldvcmQoaWQpO1xyXG4gICAgICAgICAgICBpZiAodXNlcldvcmQpIHtcclxuICAgICAgICAgICAgICAgIHVzZXJXb3JkLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xyXG4gICAgICAgICAgICAgICAgLy8gdG8gbWF0Y2ggUFVUIElVc2VyV29yZCBpbnRlcmZhY2UgKGZhaWxzIHdpdGggdGhlbSlcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB1c2VyV29yZC53b3JkSWQ7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdXNlcldvcmQuaWQ7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBVc2VyXzEuZGVmYXVsdC51cGRhdGVVc2VyV29yZChpZCwgdXNlcldvcmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXNlcldvcmQgPSB0aGlzLmNyZWF0ZVVzZXJXb3JkKGRpZmZpY3VsdHkpO1xyXG4gICAgICAgICAgICAgICAgVXNlcl8xLmRlZmF1bHQuY3JlYXRlVXNlcldvcmQoaWQsIHVzZXJXb3JkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25Qcm9wc0J0bnNDbGljayhldmVudFRhcmdldCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmQgPSBldmVudFRhcmdldC5jbG9zZXN0KCcud29yZC1jb250YWluZXInKTtcclxuICAgICAgICAgICAgaWYgKCF3b3JkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVQcm9wID0gd29yZC5xdWVyeVNlbGVjdG9yKCcud29yZC1wcm9wZXJ0aWVzIC5hY3RpdmUnKTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnREaWZmaWN1bHR5ID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChhY3RpdmVQcm9wKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RGlmZmljdWx0eSA9IGFjdGl2ZVByb3AuZGF0YXNldC5kaWZmaWN1bHR5IHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5wdXRXb3JkVG9TZXJ2ZXIod29yZC5pZCwgY3VycmVudERpZmZpY3VsdHkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5kaWZmaWN1bHR5ID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd29yZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHlpZWxkIFVzZXJfMS5kZWZhdWx0LmRlbGV0ZVVzZXJXb3JkKHdvcmQuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGF3YWl0IHRoaXMuZ2VuZXJhdGVXb3JkQ2FyZHModGhpcy5kYXRhLnBhZ2VOdW0sIHRoaXMuZGF0YS5kaWZmaWN1bHR5LCB0aGlzLmFwcC5pc0F1dGgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbWFya1VzZXJXb3JkcygpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyV29yZHMgPSB5aWVsZCBVc2VyXzEuZGVmYXVsdC5nZXRVc2VyV29yZHMoKTtcclxuICAgICAgICAgICAgY29uc3Qgd29yZHNPblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud29yZC1jb250YWluZXInKTtcclxuICAgICAgICAgICAgd29yZHNPblBhZ2UuZm9yRWFjaCgod29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcldvcmQgPSB1c2VyV29yZHMuZmluZCgoZWwpID0+IGVsLndvcmRJZCA9PT0gd29yZC5pZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlcldvcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gd29yZC5xdWVyeVNlbGVjdG9yKGAud29yZC0ke3VzZXJXb3JkLmRpZmZpY3VsdHl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRib29rQ29udHJvbGxlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgQXBwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbW9kZWxzL0FwcFwiKSk7XHJcbnJlcXVpcmUoXCIuL3N0eWxlLmNzc1wiKTtcclxuY29uc3QgYXBwID0gbmV3IEFwcF8xLmRlZmF1bHQoKTtcclxuYXBwLnN0YXJ0KCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdXRpbHMvdXRpbHNcIik7XHJcbmNvbnN0IGNvbmZpZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb25maWdcIikpO1xyXG5jb25zdCBBdWRpb2NhbGxDb250cm9sbGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbnRyb2xsZXJzL0F1ZGlvY2FsbENvbnRyb2xsZXJcIikpO1xyXG5jb25zdCBFcnJvckNvbnRyb2xsZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29udHJvbGxlcnMvRXJyb3JDb250cm9sbGVyXCIpKTtcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5jb25zdCBJbmRleENvbnRyb2xsZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyXCIpKTtcclxuY29uc3QgU3ByaW50Q29udHJvbGxlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb250cm9sbGVycy9TcHJpbnRDb250cm9sbGVyXCIpKTtcclxuY29uc3QgU3RhdGlzdGljc0NvbnRyb2xsZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29udHJvbGxlcnMvU3RhdGlzdGljc0NvbnRyb2xsZXJcIikpO1xyXG5jb25zdCBUZWFtQ29udHJvbGxlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb250cm9sbGVycy9UZWFtQ29udHJvbGxlclwiKSk7XHJcbmNvbnN0IFRleHRib29rQ29udHJvbGxlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb250cm9sbGVycy9UZXh0Ym9va0NvbnRyb2xsZXJcIikpO1xyXG5jb25zdCBhdXRob3JpemF0aW9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3ZpZXdzL2NvbXBvbmVudHMvYXV0aG9yaXphdGlvbi9hdXRob3JpemF0aW9uXCIpKTtcclxuY29uc3QgRXZlbnRPYnNlcnZlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50T2JzZXJ2ZXJcIikpO1xyXG5jb25zdCBVc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVXNlclwiKSk7XHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl91cmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gJyc7XHJcbiAgICAgICAgY29uc3QgcGF0dGVybiA9ICcvW2EtekEtWi5dKiQnO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5fdXJsLm1hdGNoKHBhdHRlcm4pO1xyXG4gICAgICAgIGlmIChtYXRjaClcclxuICAgICAgICAgICAgdGhpcy5wYWdlID0gbWF0Y2hbMF0uc2xpY2UoMSkuc3BsaXQoJy4nKVswXSB8fCAnaW5kZXgnO1xyXG4gICAgICAgIHRoaXMuX2lzQXV0aCA9ICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgdGhpcy5hdXRoT2JzZXJ2ZXIgPSBuZXcgRXZlbnRPYnNlcnZlcl8xLmRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnBhZ2VzID0ge1xyXG4gICAgICAgICAgICBpbmRleDogbmV3IEluZGV4Q29udHJvbGxlcl8xLmRlZmF1bHQodGhpcyksXHJcbiAgICAgICAgICAgIHRlYW06IG5ldyBUZWFtQ29udHJvbGxlcl8xLmRlZmF1bHQoKSxcclxuICAgICAgICAgICAgdGV4dGJvb2s6IG5ldyBUZXh0Ym9va0NvbnRyb2xsZXJfMS5kZWZhdWx0KHRoaXMpLFxyXG4gICAgICAgICAgICBzcHJpbnQ6IG5ldyBTcHJpbnRDb250cm9sbGVyXzEuZGVmYXVsdCgpLFxyXG4gICAgICAgICAgICBhdWRpb2NhbGw6IG5ldyBBdWRpb2NhbGxDb250cm9sbGVyXzEuZGVmYXVsdCgpLFxyXG4gICAgICAgICAgICBzdGF0aXN0aWNzOiBuZXcgU3RhdGlzdGljc0NvbnRyb2xsZXJfMS5kZWZhdWx0KCksXHJcbiAgICAgICAgICAgIGVycm9yOiBuZXcgRXJyb3JDb250cm9sbGVyXzEuZGVmYXVsdCgpLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy51cmxPYnNlcnZlciA9IG5ldyBFdmVudE9ic2VydmVyXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1ldHMgPSB7XHJcbiAgICAgICAgICAgIGJvZHk6ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICdib2R5JyksXHJcbiAgICAgICAgICAgIGF1dGhDb250YWluZXI6ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICcuYXV0aG9yaXphdGlvbi1jb250YWluZXInKSxcclxuICAgICAgICAgICAgYXV0aEljb246ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICcuYXV0aG9yaXphdGlvbi1pY29uJyksXHJcbiAgICAgICAgICAgIHRvb2x0aXBUZXh0OiAoMCwgdXRpbHNfMS5maW5kSHRtbEVsZW1lbnQpKGRvY3VtZW50LCAnLnRvb2x0aXB0ZXh0JyksXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBhZGQgY29udGVudCBpbnRvIG1haW4gYWNjb3JkaW5nIHRvIGxpbmtcclxuICAgICAgICB0aGlzLmdldENvbnRlbnQoKTtcclxuICAgIH1cclxuICAgIGdldCB1cmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VybDtcclxuICAgIH1cclxuICAgIHNldCB1cmwodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl91cmwgPSB2YWx1ZTtcclxuICAgICAgICBjb25zdCBwYXR0ZXJuID0gJy9bYS16QS1aLl0qJCc7XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLl91cmwubWF0Y2gocGF0dGVybik7XHJcbiAgICAgICAgaWYgKG1hdGNoKVxyXG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSBtYXRjaFswXS5zbGljZSgxKS5zcGxpdCgnLicpWzBdIHx8ICdpbmRleCc7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZSA9PT0gJ2luZGV4Jykge1xyXG4gICAgICAgICAgICAoMCwgdXRpbHNfMS5oaWRlQnVyZ2VyTWVudSkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICgwLCB1dGlsc18xLnNob3dCdXJnZXJNZW51KSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBpc0F1dGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQXV0aDtcclxuICAgIH1cclxuICAgIHNldCBpc0F1dGgodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9pc0F1dGggPSB2YWx1ZTtcclxuICAgICAgICBjb25zdCBpbWdVcmwgPSBgLi9hc3NldHMvaW1hZ2VzLyR7dmFsdWUgPyAnJyA6ICd1bid9dmVyaWZpZWQucG5nYDtcclxuICAgICAgICB0aGlzLmh0bWxFbGVtZXRzLmF1dGhJY29uLnNyYyA9IGltZ1VybDtcclxuICAgICAgICB0aGlzLmh0bWxFbGVtZXRzLnRvb2x0aXBUZXh0LmlubmVySFRNTCA9IHZhbHVlID8gJ9CS0YvQudGC0LgnIDogJ9CS0L7QudGC0Lg/JztcclxuICAgICAgICB0aGlzLmF1dGhPYnNlcnZlci5icm9hZGNhc3QodGhpcy5pc0F1dGgpO1xyXG4gICAgfVxyXG4gICAgc3Vic2NyaWJlT25BdXRoQ2hhbmdlKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoT2JzZXJ2ZXIuc3Vic2NyaWJlKGNhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyKCk7XHJcbiAgICAgICAgdGhpcy5hdXRob3JpemF0aW9uKCk7XHJcbiAgICB9XHJcbiAgICByb3V0ZXIoKSB7XHJcbiAgICAgICAgdGhpcy51cmxPYnNlcnZlci5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdldENvbnRlbnQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgYW5kIG9ic2VydmVyIHRvIE5hdkJhciBsaW5rc1xyXG4gICAgICAgIHRoaXMuc2V0Um91dGVyVG9FbGVtZW50cygnLm5hdi1iYXIgbGknKTtcclxuICAgICAgICB0aGlzLnNldFJvdXRlclRvRWxlbWVudHMoJy5sb2dvJyk7XHJcbiAgICAgICAgY29uc3QgYnVyZ2VySWNvbiA9ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICcuYnVyZ2VyJyk7XHJcbiAgICAgICAgYnVyZ2VySWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFwcC50b2dnbGVCdXJnZXJNZW51KCkpO1xyXG4gICAgICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byBicm93c2VyIGhpc3RvcnkgYnV0dG9uc1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMudXJsT2JzZXJ2ZXIuYnJvYWRjYXN0KHRoaXMudXJsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNldFJvdXRlclRvRWxlbWVudHMoc2VsZWN0b3IpIHtcclxuICAgICAgICBjb25zdCBtZW51TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgICAgICBtZW51TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgeyBwYXRoIH0gPSBsaW5rLmRhdGFzZXQ7XHJcbiAgICAgICAgICAgIGlmIChwYXRoKVxyXG4gICAgICAgICAgICAgICAgcGF0aCA9IGAke2NvbmZpZ18xLmRlZmF1bHQuc2l0ZVBhdGh9JHtwYXRofWA7XHJcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7IHN0YXRlOiBwYXRoIH0sICdTeWxsYUJ1cycsIHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXJsID0gcGF0aDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVybE9ic2VydmVyLmJyb2FkY2FzdCh0aGlzLnVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0Q29udGVudCgpIHtcclxuICAgICAgICAoMCwgdXRpbHNfMS5jbG9zZUJ1cmdlck1lbnUpKCk7XHJcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IHRoaXMucGFnZXNbdGhpcy5wYWdlXTtcclxuICAgICAgICBpZiAoY29udHJvbGxlcikge1xyXG4gICAgICAgICAgICBjb250cm9sbGVyLmFjdGlvbkluZGV4KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VzLmVycm9yLmFjdGlvbkluZGV4KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIHRvZ2dsZUJ1cmdlck1lbnUoKSB7XHJcbiAgICAgICAgY29uc3QgYnVyZ2VySWNvbiA9ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICcuYnVyZ2VyJyk7XHJcbiAgICAgICAgY29uc3QgbmF2QmFyID0gKDAsIHV0aWxzXzEuZmluZEh0bWxFbGVtZW50KShkb2N1bWVudCwgJy5uYXYtYmFyJyk7XHJcbiAgICAgICAgYnVyZ2VySWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbiAgICAgICAgbmF2QmFyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICAgIH1cclxuICAgIG9wZW5BdXRob3JpemF0aW9uQmxvY2soKSB7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5ib2R5LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICB0aGlzLmh0bWxFbGVtZXRzLmJvZHkuc3R5bGUucG9zaXRpb24gPSAnc3RpY2t5JztcclxuICAgICAgICB0aGlzLmh0bWxFbGVtZXRzLmF1dGhDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcbiAgICBjbG9zZUF1dGhvcml6YXRpb25CbG9jaygpIHtcclxuICAgICAgICB0aGlzLmh0bWxFbGVtZXRzLmJvZHkuc3R5bGUuaGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJyc7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5hdXRoQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICBzZXRMb2dpbkZvcm0oKSB7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5hdXRoQmxvY2tIZWFkZXIuaW5uZXJIVE1MID0gJ9CQ0LLRgtC+0YDQuNC30LDRhtC40Y8nO1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1ldHMucmVnaXN0cmF0aW9uRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1ldHMubG9naW5Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5hdXRoQmxvY2suc3R5bGUuaGVpZ2h0ID0gJzMzMHB4JztcclxuICAgICAgICB0aGlzLmh0bWxFbGVtZXRzLmxvZ2luQnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuICAgICAgICB0aGlzLmh0bWxFbGVtZXRzLmxvZ2luTGlua0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1ldHMucmVnaXN0cmF0aW9uQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5yZWdpc3RyYXRpb25MaW5rQnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuICAgIH1cclxuICAgIHNldFJlZ2lzdHJhdGlvbkZvcm0oKSB7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5hdXRoQmxvY2tIZWFkZXIuaW5uZXJIVE1MID0gJ9Cg0LXQs9C40YHRgtGA0LDRhtC40Y8nO1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1ldHMucmVnaXN0cmF0aW9uRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1ldHMubG9naW5Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5hdXRoQmxvY2suc3R5bGUuaGVpZ2h0ID0gJzM5MHB4JztcclxuICAgICAgICB0aGlzLmh0bWxFbGVtZXRzLmxvZ2luQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5yZWdpc3RyYXRpb25MaW5rQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5yZWdpc3RyYXRpb25CdG4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1ldHMubG9naW5MaW5rQnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuICAgIH1cclxuICAgIGNsZWFyTG9naW5Gb3JtKCkge1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1ldHMubG9naW5FbWFpbC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1ldHMubG9naW5QYXNzd29yZC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1ldHMubG9naW5FcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gICAgY2xlYXJSZWdpc3RyYXRpb25Gb3JtKCkge1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1ldHMucmVnaXN0cmF0aW9uTmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1ldHMucmVnaXN0cmF0aW9uRW1haWwudmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLmh0bWxFbGVtZXRzLnJlZ2lzdHJhdGlvblBhc3N3b3JkLnZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5yZWdpc3RyYXRpb25TdWNjZXNzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5yZWdpc3RyYXRpb25FcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gICAgYWRkQXV0aG9yaXphdGlvblRvSHRtbCgpIHtcclxuICAgICAgICB0aGlzLmh0bWxFbGVtZXRzLmF1dGhDb250YWluZXIuaW5uZXJIVE1MID0gKDAsIGF1dGhvcml6YXRpb25fMS5kZWZhdWx0KSgpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5odG1sRWxlbWV0cywge1xyXG4gICAgICAgICAgICBhdXRoQnRuOiAoMCwgdXRpbHNfMS5maW5kSHRtbEVsZW1lbnQpKGRvY3VtZW50LCAnLmF1dGhvcml6YXRpb24tbGluaycpLFxyXG4gICAgICAgICAgICBibHVyOiAoMCwgdXRpbHNfMS5maW5kSHRtbEVsZW1lbnQpKGRvY3VtZW50LCAnLmJsdXInKSxcclxuICAgICAgICAgICAgY2xvc2VBdXRoQ29udGFpbmVyQnRuOiAoMCwgdXRpbHNfMS5maW5kSHRtbEVsZW1lbnQpKGRvY3VtZW50LCAnLmNsb3NlLWljb24nKSxcclxuICAgICAgICAgICAgYXV0aEJsb2NrSGVhZGVyOiAoMCwgdXRpbHNfMS5maW5kSHRtbEVsZW1lbnQpKGRvY3VtZW50LCAnLmF1dGhvcml6YXRpb24tYmxvY2sgaDInKSxcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uRm9ybTogKDAsIHV0aWxzXzEuZmluZEh0bWxFbGVtZW50KShkb2N1bWVudCwgJy5yZWdpc3RyYXRpb24tZm9ybScpLFxyXG4gICAgICAgICAgICBsb2dpbkZvcm06ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICcubG9naW4tZm9ybScpLFxyXG4gICAgICAgICAgICBhdXRoQmxvY2s6ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICcuYXV0aG9yaXphdGlvbi1ibG9jaycpLFxyXG4gICAgICAgICAgICBsb2dpbkJ0bjogKDAsIHV0aWxzXzEuZmluZEh0bWxFbGVtZW50KShkb2N1bWVudCwgJy5sb2dpbi1idG4nKSxcclxuICAgICAgICAgICAgbG9naW5MaW5rQnRuOiAoMCwgdXRpbHNfMS5maW5kSHRtbEVsZW1lbnQpKGRvY3VtZW50LCAnLmxvZ2luLWxpbmstYnRuJyksXHJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvbkJ0bjogKDAsIHV0aWxzXzEuZmluZEh0bWxFbGVtZW50KShkb2N1bWVudCwgJy5yZWdpc3RyYXRpb24tYnRuJyksXHJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvbkxpbmtCdG46ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICcucmVnaXN0cmF0aW9uLWxpbmstYnRuJyksXHJcbiAgICAgICAgICAgIGxvZ2luRW1haWw6ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICcuYXV0aG9yaXphdGlvbi1lbWFpbCcpLFxyXG4gICAgICAgICAgICBsb2dpblBhc3N3b3JkOiAoMCwgdXRpbHNfMS5maW5kSHRtbEVsZW1lbnQpKGRvY3VtZW50LCAnLmF1dGhvcml6YXRpb24tcGFzc3dvcmQnKSxcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uTmFtZTogKDAsIHV0aWxzXzEuZmluZEh0bWxFbGVtZW50KShkb2N1bWVudCwgJy5yZWdpc3RyYXRpb24tbmFtZScpLFxyXG4gICAgICAgICAgICByZWdpc3RyYXRpb25FbWFpbDogKDAsIHV0aWxzXzEuZmluZEh0bWxFbGVtZW50KShkb2N1bWVudCwgJy5yZWdpc3RyYXRpb24tZW1haWwnKSxcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uUGFzc3dvcmQ6ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICcucmVnaXN0cmF0aW9uLXBhc3N3b3JkJyksXHJcbiAgICAgICAgICAgIGxvZ2luRXJyb3I6ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICcuYXV0aG9yaXphdGlvbi1lcnJvcicpLFxyXG4gICAgICAgICAgICByZWdpc3RyYXRpb25FcnJvcjogKDAsIHV0aWxzXzEuZmluZEh0bWxFbGVtZW50KShkb2N1bWVudCwgJy5yZWdpc3RyYXRpb24tZXJyb3InKSxcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uU3VjY2VzczogKDAsIHV0aWxzXzEuZmluZEh0bWxFbGVtZW50KShkb2N1bWVudCwgJy5yZWdpc3RyYXRpb24tc3VjY2VzcycpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWRkQXV0aEJ0bkNsaWNrTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5hdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0F1dGggPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbkF1dGhvcml6YXRpb25CbG9jaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhZGRCbHVyQ2xpY2tMaXN0ZW5lcigpIHtcclxuICAgICAgICB0aGlzLmh0bWxFbGVtZXRzLmJsdXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VBdXRob3JpemF0aW9uQmxvY2soKTtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckxvZ2luRm9ybSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyUmVnaXN0cmF0aW9uRm9ybSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldExvZ2luRm9ybSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWRkQ2xvc2VBdXRoQ29udGFpbmVyQnRuTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5jbG9zZUF1dGhDb250YWluZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VBdXRob3JpemF0aW9uQmxvY2soKTtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckxvZ2luRm9ybSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyUmVnaXN0cmF0aW9uRm9ybSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldExvZ2luRm9ybSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWRkUmVnaXN0cmF0aW9uTGlua0J0bkxpc3RlbmVyKCkge1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1ldHMucmVnaXN0cmF0aW9uTGlua0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRSZWdpc3RyYXRpb25Gb3JtKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhZGRMb2dpbkxpbmtCdG5MaXN0ZW5lcigpIHtcclxuICAgICAgICB0aGlzLmh0bWxFbGVtZXRzLmxvZ2luTGlua0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRMb2dpbkZvcm0oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFkZExvZ2luQnRuTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5sb2dpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5odG1sRWxlbWV0cy5sb2dpbkZvcm0pO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyRGF0YVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAoKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aCA9IHlpZWxkIFVzZXJfMS5kZWZhdWx0LnNpZ25pbih1c2VyRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXV0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJMb2dpbkZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyUmVnaXN0cmF0aW9uRm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VBdXRob3JpemF0aW9uQmxvY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWxFbGVtZXRzLmF1dGhJY29uLnNyYyA9ICcuL2Fzc2V0cy9pbWFnZXMvdmVyaWZpZWQucG5nJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQXV0aCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWxFbGVtZXRzLmxvZ2luRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5sb2dpblBhc3N3b3JkLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWRkUmVnaXN0cmF0aW9uQnRuTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5yZWdpc3RyYXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuaHRtbEVsZW1ldHMucmVnaXN0cmF0aW9uRm9ybSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0ge307XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHVzZXJEYXRhW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdXRoID0geWllbGQgVXNlcl8xLmRlZmF1bHQuY3JlYXRlVXNlcih1c2VyRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXV0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgnZXJyb3InIGluIGF1dGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5yZWdpc3RyYXRpb25FcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5yZWdpc3RyYXRpb25TdWNjZXNzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHRtbEVsZW1ldHMucmVnaXN0cmF0aW9uRXJyb3IuaW5uZXJIVE1MID0gJ9Cd0LXQstC+0LfQvNC+0LbQvdC+INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDRgSDRgtCw0LrQuNC80Lgg0LTQsNC90L3Ri9C80LgnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5yZWdpc3RyYXRpb25FcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWxFbGVtZXRzLnJlZ2lzdHJhdGlvblN1Y2Nlc3Muc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odG1sRWxlbWV0cy5yZWdpc3RyYXRpb25FcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWxFbGVtZXRzLnJlZ2lzdHJhdGlvblN1Y2Nlc3Muc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWxFbGVtZXRzLnJlZ2lzdHJhdGlvbkVycm9yLmlubmVySFRNTCA9ICfQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0YPQttC1INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvSDQsiDRgdC40YHRgtC10LzQtSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXV0aG9yaXphdGlvbigpIHtcclxuICAgICAgICB0aGlzLmlzQXV0aCA9ICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgdGhpcy5hZGRBdXRob3JpemF0aW9uVG9IdG1sKCk7XHJcbiAgICAgICAgdGhpcy5hZGRBdXRoQnRuQ2xpY2tMaXN0ZW5lcigpO1xyXG4gICAgICAgIHRoaXMuYWRkQmx1ckNsaWNrTGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLmFkZENsb3NlQXV0aENvbnRhaW5lckJ0bkxpc3RlbmVyKCk7XHJcbiAgICAgICAgdGhpcy5hZGRSZWdpc3RyYXRpb25MaW5rQnRuTGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLmFkZExvZ2luTGlua0J0bkxpc3RlbmVyKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMb2dpbkJ0bkxpc3RlbmVyKCk7XHJcbiAgICAgICAgdGhpcy5hZGRSZWdpc3RyYXRpb25CdG5MaXN0ZW5lcigpO1xyXG4gICAgfVxyXG4gICAgb3BlbkdhbWVQYWdlKHBhZ2UsIHBhcmFtcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xyXG4gICAgICAgIHRoaXMucGFnZXNbcGFnZV0uYWN0aW9uSW5kZXgocGFyYW1zLnBhZ2UsIHBhcmFtcy5kaWZmaWN1bHR5LCB0cnVlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIEV2ZW50T2JzZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcclxuICAgIH1cclxuICAgIHN1YnNjcmliZShmdW5jKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChmdW5jKTtcclxuICAgIH1cclxuICAgIHVuc3Vic2NyaWJlKGZ1bmMpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzLmZpbHRlcigoc3VicykgPT4gc3VicyAhPT0gZnVuYyk7XHJcbiAgICB9XHJcbiAgICBicm9hZGNhc3QoZGF0YSkge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2goKHN1YnMpID0+IHN1YnMoZGF0YSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEV2ZW50T2JzZXJ2ZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgand0X2RlY29kZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJqd3QtZGVjb2RlXCIpKTtcclxuY29uc3QgY29uZmlnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbmZpZ1wiKSk7XHJcbmNsYXNzIFVzZXIge1xyXG4gICAgLy8gcHJpdmF0ZSByZWFkb25seSBpZDogc3RyaW5nO1xyXG4gICAgLy8gcHJpdmF0ZSByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgICAvLyBwcml2YXRlIHJlYWRvbmx5IHRva2VuOiBzdHJpbmc7XHJcbiAgICAvLyBwcml2YXRlIHJlYWRvbmx5IHJlZnJlc2hUb2tlbjogc3RyaW5nO1xyXG4gICAgLy8gY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhdXRoOiBJQXV0aCkge1xyXG4gICAgLy8gICB0aGlzLmlkID0gYXV0aC51c2VySWQ7XHJcbiAgICAvLyAgIHRoaXMubmFtZSA9IGF1dGgubmFtZTtcclxuICAgIC8vICAgdGhpcy50b2tlbiA9IGF1dGgudG9rZW47XHJcbiAgICAvLyAgIHRoaXMucmVmcmVzaFRva2VuID0gYXV0aC5yZWZyZXNoVG9rZW47XHJcbiAgICAvLyB9XHJcbiAgICBzdGF0aWMgY3JlYXRlVXNlcihuZXdVc2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7Y29uZmlnXzEuZGVmYXVsdC5hcGkudXJsfXVzZXJzYDtcclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdVc2VyKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB0ZXh0OicsIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNpZ25pbih1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7Y29uZmlnXzEuZGVmYXVsdC5hcGkudXJsfXNpZ25pbmA7XHJcbiAgICAgICAgICAgIGNvbnN0IGF1dGhEYXRhID0gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduYW1lJywgZGF0YS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcsIGRhdGEudXNlcklkKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlZnJlc2hUb2tlbicsIGRhdGEucmVmcmVzaFRva2VuKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB0ZXh0OicsIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhdXRoRGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRVc2VyKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIHRva2VuIH0gPSBVc2VyLmdldElkQW5kVG9rZW5Gcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgIGlmICghaWQgfHwgIXRva2VuKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke2NvbmZpZ18xLmRlZmF1bHQuYXBpLnVybH11c2Vycy8ke2lkfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHRleHQ6JywgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0TmV3VG9rZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBpZCwgdG9rZW4gfSA9IFVzZXIuZ2V0SWRBbmRUb2tlbkZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVmcmVzaFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hUb2tlbicpO1xyXG4gICAgICAgICAgICBpZiAoIWlkIHx8ICF0b2tlbiB8fCAhcmVmcmVzaFRva2VuKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke2NvbmZpZ18xLmRlZmF1bHQuYXBpLnVybH11c2Vycy8ke2lkfS90b2tlbnNgO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtyZWZyZXNoVG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbmFtZScsIGRhdGEubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLCBkYXRhLnVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWZyZXNoVG9rZW4nLCBkYXRhLnJlZnJlc2hUb2tlbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgdGV4dDonLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRVc2VyV29yZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBpZCwgdG9rZW4gfSA9IFVzZXIuZ2V0SWRBbmRUb2tlbkZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgaWYgKCFpZCB8fCAhdG9rZW4pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7Y29uZmlnXzEuZGVmYXVsdC5hcGkudXJsfXVzZXJzLyR7aWR9L3dvcmRzYDtcclxuICAgICAgICAgICAgY29uc3Qgd29yZHMgPSBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHRleHQ6JywgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHdvcmRzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldFVzZXJXb3JkKHdvcmRJZCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIHRva2VuIH0gPSBVc2VyLmdldElkQW5kVG9rZW5Gcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgIGlmICghaWQgfHwgIXRva2VuKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke2NvbmZpZ18xLmRlZmF1bHQuYXBpLnVybH11c2Vycy8ke2lkfS93b3Jkcy8ke3dvcmRJZH1gO1xyXG4gICAgICAgICAgICBjb25zdCB3b3JkID0gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB0ZXh0OicsIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB3b3JkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNyZWF0ZVVzZXJXb3JkKHdvcmRJZCwgdXNlcldvcmQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGlkLCB0b2tlbiB9ID0gVXNlci5nZXRJZEFuZFRva2VuRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICBpZiAoIWlkIHx8ICF0b2tlbilcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtjb25maWdfMS5kZWZhdWx0LmFwaS51cmx9dXNlcnMvJHtpZH0vd29yZHMvJHt3b3JkSWR9YDtcclxuICAgICAgICAgICAgY29uc3Qgd29yZCA9IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyV29yZCksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHRleHQ6JywgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHdvcmQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgdXBkYXRlVXNlcldvcmQod29yZElkLCB1c2VyV29yZCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIHRva2VuIH0gPSBVc2VyLmdldElkQW5kVG9rZW5Gcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgIGlmICghaWQgfHwgIXRva2VuKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke2NvbmZpZ18xLmRlZmF1bHQuYXBpLnVybH11c2Vycy8ke2lkfS93b3Jkcy8ke3dvcmRJZH1gO1xyXG4gICAgICAgICAgICBjb25zdCB3b3JkID0gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcldvcmQpLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB0ZXh0OicsIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB3b3JkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGRlbGV0ZVVzZXJXb3JkKHdvcmRJZCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIHRva2VuIH0gPSBVc2VyLmdldElkQW5kVG9rZW5Gcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgIGlmICghaWQgfHwgIXRva2VuKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke2NvbmZpZ18xLmRlZmF1bHQuYXBpLnVybH11c2Vycy8ke2lkfS93b3Jkcy8ke3dvcmRJZH1gO1xyXG4gICAgICAgICAgICBjb25zdCB3b3JkID0gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB0ZXh0OicsIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB3b3JkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldFVzZXJBZ2dyZWdhdGVkV29yZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBpZCwgdG9rZW4gfSA9IFVzZXIuZ2V0SWRBbmRUb2tlbkZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgaWYgKCFpZCB8fCAhdG9rZW4pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7Y29uZmlnXzEuZGVmYXVsdC5hcGkudXJsfXVzZXJzLyR7aWR9L3dvcmRzYDtcclxuICAgICAgICAgICAgY29uc3Qgd29yZCA9IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgdGV4dDonLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gd29yZDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRVc2VyQWdncmVnYXRlZFdvcmQod29yZElkLCBwYWdlID0gMCwgZ3JvdXAgPSAwLCB3b3Jkc1BlclBhZ2UgPSAyMCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIHRva2VuIH0gPSBVc2VyLmdldElkQW5kVG9rZW5Gcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgIGlmICghaWQgfHwgIXRva2VuKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke2NvbmZpZ18xLmRlZmF1bHQuYXBpLnVybH11c2Vycy8ke2lkfS93b3Jkcy8ke3dvcmRJZH1gO1xyXG4gICAgICAgICAgICBjb25zdCB3b3JkRGF0YSA9IFt7IHBhZ2UgfSwgeyBncm91cCB9LCB7IHdvcmRzUGVyUGFnZSB9XTtcclxuICAgICAgICAgICAgY29uc3QgYm9keURhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcXVvdGVzLCBxdW90ZS1wcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgIFwiJGFuZFwiOiB3b3JkRGF0YSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmQgPSBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5RGF0YSksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHRleHQ6JywgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHdvcmQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0VXNlclN0YXRpc3RpYygpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGlkLCB0b2tlbiB9ID0gVXNlci5nZXRJZEFuZFRva2VuRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICBpZiAoIWlkIHx8ICF0b2tlbilcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtjb25maWdfMS5kZWZhdWx0LmFwaS51cmx9dXNlcnMvJHtpZH0vc3RhdGlzdGljc2A7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmRzID0gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB0ZXh0OicsIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB3b3JkcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyB1cHNlcnRVc2VyU3RhdGlzdGljKHN0YXRpc3RpYykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIHRva2VuIH0gPSBVc2VyLmdldElkQW5kVG9rZW5Gcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgIGlmICghaWQgfHwgIXRva2VuKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke2NvbmZpZ18xLmRlZmF1bHQuYXBpLnVybH11c2Vycy8ke2lkfS9zdGF0aXN0aWNzYDtcclxuICAgICAgICAgICAgY29uc3Qgd29yZHMgPSBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzdGF0aXN0aWMpLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB0ZXh0OicsIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB3b3JkcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRVc2VyU2V0dGluZygpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGlkLCB0b2tlbiB9ID0gVXNlci5nZXRJZEFuZFRva2VuRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICBpZiAoIWlkIHx8ICF0b2tlbilcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtjb25maWdfMS5kZWZhdWx0LmFwaS51cmx9dXNlcnMvJHtpZH0vc2V0dGluZ3NgO1xyXG4gICAgICAgICAgICBjb25zdCB3b3JkcyA9IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgdGV4dDonLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gd29yZHM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgdXBzZXJ0VXNlclNldHRpbmcoc2V0dGluZ3MpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGlkLCB0b2tlbiB9ID0gVXNlci5nZXRJZEFuZFRva2VuRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICBpZiAoIWlkIHx8ICF0b2tlbilcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtjb25maWdfMS5kZWZhdWx0LmFwaS51cmx9dXNlcnMvJHtpZH0vc3RhdGlzdGljc2A7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmRzID0gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB0ZXh0OicsIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB3b3JkcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRJZEFuZFRva2VuRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgICAgICBjb25zdCBpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpO1xyXG4gICAgICAgIGxldCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZVRva2VuID0gKDAsIGp3dF9kZWNvZGVfMS5kZWZhdWx0KSh0b2tlbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGlmICghKGN1cnJlbnRUaW1lID49IHBhcnNlVG9rZW4uaWF0ICogMTAwMCAmJiBjdXJyZW50VGltZSA8PSBwYXJzZVRva2VuLmV4cCAqIDEwMDApKSB7XHJcbiAgICAgICAgICAgICAgICAoKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIFVzZXIuZ2V0TmV3VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgICAgICAgICAgfSkpKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgaWQsIHRva2VuIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gVXNlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb25maWdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29uZmlnXCIpKTtcclxuY2xhc3MgV29yZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgY3JlYXRlIG5ldyB3b3JkIScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBpbml0KGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gKHlpZWxkIFdvcmQuZ2V0V29yZChpZCkpIHx8IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgV29yZChwYXJhbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldFdvcmRzKHBhZ2UgPSAwLCBncm91cCA9IDApIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtjb25maWdfMS5kZWZhdWx0LmFwaS51cmx9d29yZHM/cGFnZT0ke3BhZ2V9Jmdyb3VwPSR7Z3JvdXB9YDtcclxuICAgICAgICAgICAgY29uc3Qgd29yZHMgPSBmZXRjaCh1cmwpLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHdvcmRzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldFdvcmQoaWQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtjb25maWdfMS5kZWZhdWx0LmFwaS51cmx9d29yZHMvJHtpZH1gO1xyXG4gICAgICAgICAgICBjb25zdCB3b3JkID0gZmV0Y2godXJsKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB3b3JkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNvbnZlcnRJVXNlcldvcmRUb0lXb3JkKHVzZXJXb3JkKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSB1c2VyV29yZC53b3JkSWQgfHwgJyc7XHJcbiAgICAgICAgICAgIGxldCByZXM7XHJcbiAgICAgICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gKHlpZWxkIFdvcmQuZ2V0V29yZChpZCkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFdvcmQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2F1dGhvcml6YXRpb24uY3NzXCIpO1xyXG5mdW5jdGlvbiByZW5kZXJBdXRob3JpemF0aW9uKCkge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiYmx1clwiPjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhdXRob3JpemF0aW9uLWJsb2NrXCI+XHJcbiAgICA8aW1nIGNsYXNzPVwiY2xvc2UtaWNvblwiIHNyYz1cIi4vYXNzZXRzL3N2Zy9jcm9zcy5zdmdcIiBhbHQ9XCJDbG9zZSBJY29uXCIgd2lkdGg9XCIyMFwiPlxyXG4gICAgPGgyPtCQ0LLRgtC+0YDQuNC30LDRhtC40Y88L2gyPlxyXG4gICAgPGZvcm0gY2xhc3M9XCJsb2dpbi1mb3JtIGF1dGgtZm9ybVwiIGlkPVwibG9naW4tZm9ybVwiPlxyXG4gICAgICA8cCBjbGFzcz1cImF1dGhvcml6YXRpb24tZXJyb3IgZXJyb3ItbXNnXCI+0J3QtdCy0LXRgNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70Yw8L3A+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cImF1dGhvcml6YXRpb24tZW1haWwgYXV0aC1pbnB1dFwiIG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIgYXV0b2ZvY3VzPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJhdXRob3JpemF0aW9uLXBhc3N3b3JkIGF1dGgtaW5wdXRcIiBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjFwiIG1pbmxlbmd0aD1cIjhcIj5cclxuICAgIDwvZm9ybT5cclxuICAgIDxmb3JtIGNsYXNzPVwicmVnaXN0cmF0aW9uLWZvcm0gYXV0aC1mb3JtXCIgaWQ9XCJyZWdpc3RyYXRpb24tZm9ybVwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwicmVnaXN0cmF0aW9uLWVycm9yIGVycm9yLW1zZ1wiPjwvcD5cclxuICAgICAgPHAgY2xhc3M9XCJyZWdpc3RyYXRpb24tc3VjY2VzcyBzdWNjZXNzLW1zZ1wiPtCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRg9GB0L/QtdGI0L3QviDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L0hPC9wPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb24tbmFtZSBhdXRoLWlucHV0XCIgbmFtZT1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JjQvNGPXCIgYXV0b2ZvY3VzPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJyZWdpc3RyYXRpb24tZW1haWwgYXV0aC1pbnB1dFwiIG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCI+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInJlZ2lzdHJhdGlvbi1wYXNzd29yZCBhdXRoLWlucHV0XCIgbmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIiBtaW5sZW5ndGg9XCI4XCI+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yaXphdGlvbi1idG5zXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxvZ2luLWJ0biBidG4tbGlrZS1saW5rXCI+0JLQvtC50YLQuDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJyZWdpc3RyYXRpb24tbGluay1idG5cIj7Ql9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y88L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVnaXN0cmF0aW9uLWJ0biBidG4tbGlrZS1saW5rXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxvZ2luLWxpbmstYnRuXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj7Qo9C20LUg0LXRgdGC0Ywg0LDQutC60LDRg9C90YI/PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PmA7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gcmVuZGVyQXV0aG9yaXphdGlvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zZXRIYXJkV29yZHNWaXNpYmxlID0gZXhwb3J0cy5hY3RpdmF0ZUN1cnJlbnREaWZmaWN1bHR5ID0gZXhwb3J0cy5hY3RpdmF0ZVByb3AgPSBleHBvcnRzLnJlbmRlckRpZmZpY3VsdHlCYXIgPSB2b2lkIDA7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL3V0aWxzL3V0aWxzXCIpO1xyXG5yZXF1aXJlKFwiLi9kaWZmaWN1bHR5LWJhci5jc3NcIik7XHJcbmZ1bmN0aW9uIHJlbmRlckRpZmZpY3VsdHlCYXIoKSB7XHJcbiAgICBjb25zdCBkaWZmQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaWZmQmFyLmNsYXNzTGlzdC5hZGQoJ2RpZmZpY3VsdHktY29udGFpbmVyJyk7XHJcbiAgICBkaWZmQmFyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZGlmZmljdWx0eS1idG4gbGV2ZWwxIGFjdGl2ZVwiIGRhdGEtZ3JvdXA9XCIxXCI+MTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImRpZmZpY3VsdHktYnRuIGxldmVsMlwiIGRhdGEtZ3JvdXA9XCIyXCI+MjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImRpZmZpY3VsdHktYnRuIGxldmVsM1wiIGRhdGEtZ3JvdXA9XCIzXCI+MzwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImRpZmZpY3VsdHktYnRuIGxldmVsNFwiIGRhdGEtZ3JvdXA9XCI0XCI+NDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImRpZmZpY3VsdHktYnRuIGxldmVsNVwiIGRhdGEtZ3JvdXA9XCI1XCI+NTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImRpZmZpY3VsdHktYnRuIGxldmVsNlwiIGRhdGEtZ3JvdXA9XCI2XCI+NjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImRpZmZpY3VsdHktYnRuIGxldmVsN1wiIGRhdGEtZ3JvdXA9XCI3XCI+NzwvZGl2PmA7XHJcbiAgICByZXR1cm4gZGlmZkJhcjtcclxufVxyXG5leHBvcnRzLnJlbmRlckRpZmZpY3VsdHlCYXIgPSByZW5kZXJEaWZmaWN1bHR5QmFyO1xyXG5mdW5jdGlvbiBhY3RpdmF0ZVByb3AoZWwsIHNlbGVjdG9yID0gJy5kaWZmaWN1bHR5LWJ0bicpIHtcclxuICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaWZmaWN1bHR5LWJ0bicpKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICAgICAgZWxlbWVudHMgPT09IG51bGwgfHwgZWxlbWVudHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuYWN0aXZhdGVQcm9wID0gYWN0aXZhdGVQcm9wO1xyXG5mdW5jdGlvbiBhY3RpdmF0ZUN1cnJlbnREaWZmaWN1bHR5KGNhdGVnb3J5KSB7XHJcbiAgICBjb25zdCBjdXJyZW50RGlmZiA9ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsIGBbZGF0YS1ncm91cD1cIiR7Y2F0ZWdvcnl9XCJdYCk7XHJcbiAgICBhY3RpdmF0ZVByb3AoY3VycmVudERpZmYpO1xyXG59XHJcbmV4cG9ydHMuYWN0aXZhdGVDdXJyZW50RGlmZmljdWx0eSA9IGFjdGl2YXRlQ3VycmVudERpZmZpY3VsdHk7XHJcbmZ1bmN0aW9uIHNldEhhcmRXb3Jkc1Zpc2libGUoYXV0aCkge1xyXG4gICAgY29uc3QgaGFyZFdvcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxldmVsNycpO1xyXG4gICAgaWYgKGhhcmRXb3JkcylcclxuICAgICAgICBoYXJkV29yZHMuc3R5bGUuZGlzcGxheSA9IGF1dGggPyAnJyA6ICdub25lJztcclxufVxyXG5leHBvcnRzLnNldEhhcmRXb3Jkc1Zpc2libGUgPSBzZXRIYXJkV29yZHNWaXNpYmxlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnNldFBhZ2VOdW0gPSBleHBvcnRzLmRpc2FibGVCdG5zID0gZXhwb3J0cy5yZW5kZXJQYWdpbmF0aW9uID0gdm9pZCAwO1xyXG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbW1vbi91dGlscy91dGlsc1wiKTtcclxucmVxdWlyZShcIi4vcGFnaW5hdGlvbi5jc3NcIik7XHJcbmZ1bmN0aW9uIHJlbmRlclBhZ2luYXRpb24oKSB7XHJcbiAgICBjb25zdCBwYWdpbmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwYWdpbmF0aW9uLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb24tY29udGFpbmVyJyk7XHJcbiAgICBwYWdpbmF0aW9uLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cInBhZ2luYXRpb24tZmlyc3QgZGlzYWJsZWRcIj48PDwvcD5cclxuICA8cCBjbGFzcz1cInBhZ2luYXRpb24tcHJldiBkaXNhYmxlZFwiPjw8L3A+XHJcbiAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tY3VycmVudFwiPjxzcGFuIGlkPVwidGV4dGJvb2stcGFnZS1udW1iZXJcIj4xPC9zcGFuPiAvIDMwPC9kaXY+XHJcbiAgPHAgY2xhc3M9XCJwYWdpbmF0aW9uLW5leHRcIj4+PC9wPlxyXG4gIDxwIGNsYXNzPVwicGFnaW5hdGlvbi1sYXN0XCI+Pj48L3A+YDtcclxuICAgIHJldHVybiBwYWdpbmF0aW9uO1xyXG59XHJcbmV4cG9ydHMucmVuZGVyUGFnaW5hdGlvbiA9IHJlbmRlclBhZ2luYXRpb247XHJcbmZ1bmN0aW9uIGRpc2FibGVCdG5zKHBhZ2UpIHtcclxuICAgIGNvbnN0IG5leHRQYWdlID0gKDAsIHV0aWxzXzEuZmluZEh0bWxFbGVtZW50KShkb2N1bWVudCwgJy5wYWdpbmF0aW9uLW5leHQnKTtcclxuICAgIGNvbnN0IGxhc3RQYWdlID0gKDAsIHV0aWxzXzEuZmluZEh0bWxFbGVtZW50KShkb2N1bWVudCwgJy5wYWdpbmF0aW9uLWxhc3QnKTtcclxuICAgIGNvbnN0IHByZXZQYWdlID0gKDAsIHV0aWxzXzEuZmluZEh0bWxFbGVtZW50KShkb2N1bWVudCwgJy5wYWdpbmF0aW9uLXByZXYnKTtcclxuICAgIGNvbnN0IGZpcnN0UGFnZSA9ICgwLCB1dGlsc18xLmZpbmRIdG1sRWxlbWVudCkoZG9jdW1lbnQsICcucGFnaW5hdGlvbi1maXJzdCcpO1xyXG4gICAgaWYgKHBhZ2UgPT09IDApIHtcclxuICAgICAgICBwcmV2UGFnZS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIGZpcnN0UGFnZS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhZ2UgPiAwKSB7XHJcbiAgICAgICAgcHJldlBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICBmaXJzdFBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIGlmIChwYWdlID09PSAyOSkge1xyXG4gICAgICAgIG5leHRQYWdlLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgbGFzdFBhZ2UuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIGlmIChwYWdlIDwgMjkpIHtcclxuICAgICAgICBuZXh0UGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIGxhc3RQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kaXNhYmxlQnRucyA9IGRpc2FibGVCdG5zO1xyXG5mdW5jdGlvbiBzZXRQYWdlTnVtKG51bSkge1xyXG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSAoMCwgdXRpbHNfMS5maW5kSHRtbEVsZW1lbnQpKGRvY3VtZW50LCAnI3RleHRib29rLXBhZ2UtbnVtYmVyJyk7XHJcbiAgICBjdXJyZW50UGFnZS5pbm5lclRleHQgPSBudW0udG9TdHJpbmcoKTtcclxufVxyXG5leHBvcnRzLnNldFBhZ2VOdW0gPSBzZXRQYWdlTnVtO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnNldFdvcmRQcm9wc1Zpc2libGUgPSBleHBvcnRzLmNoYW5nZUNhcmRCb3hzaGFkb3cgPSBleHBvcnRzLnBsYXlBdWRpbyA9IGV4cG9ydHMuY2hvb3NlV29yZFByb3AgPSBleHBvcnRzLnJlbmRlcldvcmRDYXJkID0gdm9pZCAwO1xyXG5jb25zdCBjb25maWdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vY29uZmlnXCIpKTtcclxucmVxdWlyZShcIi4vd29yZC1jYXJkLmNzc1wiKTtcclxuZnVuY3Rpb24gcmVuZGVyV29yZENhcmQod29yZCkge1xyXG4gICAgY29uc3Qgd29yZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgd29yZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3b3JkLWNvbnRhaW5lcicpO1xyXG4gICAgd29yZENvbnRhaW5lci5pZCA9IHdvcmQuaWQ7XHJcbiAgICB3b3JkQ29udGFpbmVyLmlubmVySFRNTCA9IGA8aW1nIGNsYXNzPVwidGV4dGJvb2std29yZC1pbWdcIiBzcmM9XCIke2NvbmZpZ18xLmRlZmF1bHQuYXBpLnVybH0ke3dvcmQuaW1hZ2V9XCIgYWx0PVwiJHt3b3JkLndvcmR9IGltYWdlXCI+XHJcbiAgPGRpdiBjbGFzcz1cIndvcmQtZGVzY3JpcHRpb25cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3b3JkLXByb3BlcnRpZXNcIj5cclxuICAgICAgPGltZyBjbGFzcz1cIndvcmQtbGVhcm5lZFwiIGRhdGEtZGlmZmljdWx0eT1cImxlYXJuZWRcIiBzcmM9XCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RleHRib29rL3RpY2stZmlsbGVkLnBuZ1wiIGFsdD1cIkxlYXJuZWRcIiB3aWR0aD1cIjQwXCI+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJ3b3JkLWhhcmRcIiBkYXRhLWRpZmZpY3VsdHk9XCJoYXJkXCIgc3JjPVwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90ZXh0Ym9vay9zdGFyLWZpbGxlZC5wbmdcIiBhbHQ9XCJIYXJkXCIgd2lkdGg9XCI0MFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwid29yZFwiPlxyXG4gICAgICA8aDI+JHt3b3JkLndvcmR9PC9oMj5cclxuICAgICAgPHAgY2xhc3M9XCJ3b3JkLXRyYW5zY3JpcHRpb25cIj4ke3dvcmQudHJhbnNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxpbWcgaWQ9XCJidG4tJHt3b3JkLmlkfS13b3JkXCIgc3JjPVwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9hdWRpby1zcGVha2VyLnN2Z1wiIGFsdD1cIkF1ZGlvXCIgY2xhc3M9XCJhdWRpby1pY29uXCIgd2lkdGg9XCIyMFwiPlxyXG4gICAgICA8YXVkaW8gaWQ9XCJhdWRpby0ke3dvcmQuaWR9LXdvcmRcIiBzcmM9XCIke2NvbmZpZ18xLmRlZmF1bHQuYXBpLnVybH0ke3dvcmQuYXVkaW99XCI+PC9hdWRpbz5cclxuICAgICAgPHAgY2xhc3M9XCJ3b3JkLXRyYW5zbGF0aW9uXCI+JHt3b3JkLndvcmRUcmFuc2xhdGV9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwid29yZC1tZWFuaW5nXCI+XHJcbiAgICAgIDxwPlxyXG4gICAgICAke3dvcmQudGV4dE1lYW5pbmd9XHJcbiAgICAgIDxpbWcgaWQ9XCJidG4tJHt3b3JkLmlkfS1tZWFuaW5nXCIgY2xhc3M9XCJhdWRpby1pY29uXCIgc3JjPVwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9hdWRpby1zcGVha2VyLnN2Z1wiIGFsdD1cIkF1ZGlvXCIgd2lkdGg9XCIyMFwiPlxyXG4gICAgICAgIDxhdWRpbyBpZD1cImF1ZGlvLSR7d29yZC5pZH0tbWVhbmluZ1wiIHNyYz1cIiR7Y29uZmlnXzEuZGVmYXVsdC5hcGkudXJsfSR7d29yZC5hdWRpb01lYW5pbmd9XCI+PC9hdWRpbz5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cCBjbGFzcz1cIm1lYW5pbmctdHJhbnNsYXRpb25cIj4ke3dvcmQudGV4dE1lYW5pbmdUcmFuc2xhdGV9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwid29yZC1leGFtcGxlXCI+XHJcbiAgICAgIDxwPlxyXG4gICAgICAke3dvcmQudGV4dEV4YW1wbGV9XHJcbiAgICAgIDxpbWcgaWQ9XCJidG4tJHt3b3JkLmlkfS1leGFtcGxlXCIgY2xhc3M9XCJhdWRpby1pY29uXCIgc3JjPVwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9hdWRpby1zcGVha2VyLnN2Z1wiIGFsdD1cIkF1ZGlvXCIgd2lkdGg9XCIyMFwiPlxyXG4gICAgICAgIDxhdWRpbyBpZD1cImF1ZGlvLSR7d29yZC5pZH0tZXhhbXBsZVwiIHNyYz1cIiR7Y29uZmlnXzEuZGVmYXVsdC5hcGkudXJsfSR7d29yZC5hdWRpb0V4YW1wbGV9XCI+PC9hdWRpbz5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cCBjbGFzcz1cImV4YW1wbGUtdHJhbnNsYXRpb25cIj4ke3dvcmQudGV4dEV4YW1wbGVUcmFuc2xhdGV9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YDtcclxuICAgIHJldHVybiB3b3JkQ29udGFpbmVyO1xyXG59XHJcbmV4cG9ydHMucmVuZGVyV29yZENhcmQgPSByZW5kZXJXb3JkQ2FyZDtcclxuZnVuY3Rpb24gY2hvb3NlV29yZFByb3AoaW1nKSB7XHJcbiAgICBjb25zdCBjYXJkID0gaW1nLmNsb3Nlc3QoJy53b3JkLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgbGVhcm5lZCA9IGNhcmQgPT09IG51bGwgfHwgY2FyZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FyZC5xdWVyeVNlbGVjdG9yKCcud29yZC1sZWFybmVkJyk7XHJcbiAgICBjb25zdCBoYXJkID0gY2FyZCA9PT0gbnVsbCB8fCBjYXJkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy53b3JkLWhhcmQnKTtcclxuICAgIGltZy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIGlmIChpbWcgPT09IGxlYXJuZWQpIHtcclxuICAgICAgICBpZiAoaW1nLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgaWYgKGhhcmQpXHJcbiAgICAgICAgICAgICAgICBoYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpbWcgPT09IGhhcmQpIHtcclxuICAgICAgICBpZiAoaW1nLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgaWYgKGxlYXJuZWQpXHJcbiAgICAgICAgICAgICAgICBsZWFybmVkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmNob29zZVdvcmRQcm9wID0gY2hvb3NlV29yZFByb3A7XHJcbmZ1bmN0aW9uIHBsYXlBdWRpbyhidG4pIHtcclxuICAgIHZhciBfYTtcclxuICAgIGlmIChidG4pIHtcclxuICAgICAgICBjb25zdCBpZCA9IGJ0bi5pZC5zcGxpdCgnLScpO1xyXG4gICAgICAgIChfYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhdWRpby0ke2lkWzFdfS0ke2lkWzJdfWApKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGxheSgpLnRoZW4oKHJlcykgPT4gcmVzKS5jYXRjaCgoZSkgPT4gZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5wbGF5QXVkaW8gPSBwbGF5QXVkaW87XHJcbmZ1bmN0aW9uIGNoYW5nZUNhcmRCb3hzaGFkb3coZGlmZmljdWx0eSkge1xyXG4gICAgaWYgKCFkaWZmaWN1bHR5KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndvcmQtY29udGFpbmVyJyk7XHJcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FyZDIgPSBjYXJkO1xyXG4gICAgICAgIGNhcmQyLnN0eWxlLmJveFNoYWRvdyA9IGAwIDAgMjBweCB2YXIoLS1kaWZmJHtkaWZmaWN1bHR5fSlgO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5jaGFuZ2VDYXJkQm94c2hhZG93ID0gY2hhbmdlQ2FyZEJveHNoYWRvdztcclxuZnVuY3Rpb24gc2V0V29yZFByb3BzVmlzaWJsZShhdXRoKSB7XHJcbiAgICBjb25zdCBwcm9wcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53b3JkLXByb3BlcnRpZXMnKTtcclxuICAgIHByb3BzLmZvckVhY2goKHByb3ApID0+IHtcclxuICAgICAgICBjb25zdCBwcm9wMiA9IHByb3A7XHJcbiAgICAgICAgcHJvcDIuc3R5bGUuZGlzcGxheSA9IGF1dGggPyAnZmxleCcgOiAnbm9uZSc7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnNldFdvcmRQcm9wc1Zpc2libGUgPSBzZXRXb3JkUHJvcHNWaXNpYmxlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9lcnJvci5jc3NcIik7XHJcbmNsYXNzIEVycm9yVmlldyB7XHJcbiAgICBzdGF0aWMgZHJhdygpIHtcclxuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtYWluLWNvbnRhaW5lci1lcnJvclwiPlxyXG4gICAgPGgxPjQwNDwvaDE+XHJcbiAgICA8cD5QYWdlIG5vdCBmb3VuZDwvcD5cclxuICAgIDwvZGl2PmA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gRXJyb3JWaWV3O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9pbmRleC5jc3NcIik7XHJcbi8vIGltcG9ydCB7IElPYmplY3QgfSBmcm9tICcuLy4uL2NvbW1vbi9pbnRlcmZhY2VzL0lPYmplY3QnO1xyXG5jbGFzcyBJbmRleFZpZXcge1xyXG4gICAgLy8gc3RhdGljIGRyYXcoZGF0YTogSU9iamVjdDxzdHJpbmc+KVxyXG4gICAgc3RhdGljIGRyYXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibWFpbi1jb250YWluZXItaW5kZXhcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3M9XCJkZXNjcmlwdGlvbi1pbWdcIiBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvbWFpbi9idXMucG5nXCIgYWx0PVwiQnVzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLXRleHRcIj5cclxuICAgICAgICAgICAgPHA+PGI+U3lsbGFCdXM8L2I+IC0g0LjQvdGC0LXRgNCw0LrRgtC40LLQvdC+0LUg0L/RgNC40LvQvtC20LXQvdC40LUg0LTQu9GPINC40LfRg9GH0LXQvdC40Y8g0LDQvdCz0LvQuNC50YHQutC+0LPQviDRj9C30YvQutCwLlxyXG4gICAgICAgICAgICA8cD7Ql9C00LXRgdGMINGC0Ysg0L3QsNC50LTQtdGI0Yw6PC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+0K3Qu9C10LrRgtGA0L7QvdC90YvQuSDRg9GH0LXQsdC90LjQuiwg0LrQvtGC0L7RgNGL0Lkg0L/QvtC80L7QttC10YIg0YPQt9C90LDRgtGMINC90L7QstGL0LUg0YHQu9C+0LLQsC48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPtCc0LjQvdC4LdC40LPRgNGLINC00LvRjyDQv9C+0LLRgtC+0YDQtdC90LjRjyDQuNC30YPRh9C10L3QvdC+0LPQviDQvNCw0YLQtdGA0LjQsNC70LAuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT7QmtGA0LDRgtC60L7RgdGA0L7Rh9C90LDRjyDQuCDQtNC+0LvQs9C+0YHRgNC+0YfQvdCw0Y8g0YHRgtCw0YLQuNGB0YLQuNC60LAg0YLQstC+0LXQs9C+INC/0YDQvtCz0YDQtdGB0YHQsC48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbi1idG5zXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGRhdGEtcGF0aD1cIi90ZWFtXCIgY2xhc3M9XCJidG4tbGlrZS1saW5rXCI+0JrQvtC80LDQvdC00LA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDx1bCBjbGFzcz1cInN0YXJ0LW1lbnVcIj5cclxuICAgICAgICA8bGkgZGF0YS1wYXRoPVwiL3RleHRib29rXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL3RleHRib29rLnBuZ1wiIGFsdD1cIlRleHRib29rIGltYWdlXCIgY2xhc3M9XCJtZW51LWl0ZW0taW1nXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjgwXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1lbnUtaXRlbS1uYW1lXCI+0KPRh9C10LHQvdC40Lo8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGRhdGEtcGF0aD1cIi9zcHJpbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvc3ByaW50LnBuZ1wiIGFsdD1cIlNwcmludCBpbWFnZVwiIGNsYXNzPVwibWVudS1pdGVtLWltZ1wiIHdpZHRoPVwiNzBcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWVudS1pdGVtLW5hbWVcIj7QmNCz0YDQsCBcItCh0L/RgNC40L3RglwiPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBkYXRhLXBhdGg9XCIvYXVkaW9jYWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL2F1ZGlvY2FsbC5wbmdcIiBhbHQ9XCJBdWRpb2dhbWUgaW1hZ2VcIiBjbGFzcz1cIm1lbnUtaXRlbS1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNzBcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWVudS1pdGVtLW5hbWVcIj7QmNCz0YDQsCBcItCQ0YPQtNC40L7QstGL0LfQvtCyXCI8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGRhdGEtcGF0aD1cIi9zdGF0aXN0aWNzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL3N0YXRpc3RpY3MucG5nXCIgYWx0PVwiU3RhdGlzdGljcyBpbWFnZVwiIGNsYXNzPVwibWVudS1pdGVtLWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI3MFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZW51LWl0ZW0tbmFtZVwiPtCh0YLQsNGC0LjRgdGC0LjQutCwPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuPC9kaXY+YDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBJbmRleFZpZXc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL3NwcmludC5jc3NcIik7XHJcbi8vIGltcG9ydCB7IElPYmplY3QgfSBmcm9tICcuLi8uLi9jb21tb24vaW50ZXJmYWNlcy9JT2JqZWN0JztcclxuY2xhc3MgU3ByaW50VmlldyB7XHJcbiAgICAvLyBzdGF0aWMgZHJhdyhkYXRhOiBJT2JqZWN0PHN0cmluZz4pXHJcbiAgICBzdGF0aWMgZHJhdygpIHtcclxuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtYWluLWNvbnRhaW5lci1zcHJpbnRcIj5cclxuICAgIDxoMT7QmNCz0YDQsCBcItCh0L/RgNC40L3RglwiPC9oMT5cclxuICAgIDxkaXYgY2xhc3M9XCJnYW1lLWNvbnRhaW5lclwiPlxyXG4gICAgICA8cD50aW1lciAzIDIgMSBzdGFydDwvcD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJnYW1lLWZpZWxkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlcnNcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY3VycmVudC1zY29yZVwiPjM1MDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3JyZWN0LWFuc3dlcnNcIj5cclxuICAgICAgICAgICAgPHAgaWQ9XCIxLWNvcnJlY3QtYW5zd2VyXCI+PC9wPlxyXG4gICAgICAgICAgICA8cCBpZD1cIjItY29ycmVjdC1hbnN3ZXJcIj48L3A+XHJcbiAgICAgICAgICAgIDxwIGlkPVwiMy1jb3JyZWN0LWFuc3dlclwiPjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJwb2ludHMtcGVyLWFuc3dlclwiPisxMCDQvtGH0LrQvtCyINC30LAg0YHQu9C+0LLQvjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL3NwcmludC9iYWJ5LnBuZ1wiIGFsdD1cIkxldmVsIDFcIiB3aWR0aD1cIjI1XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9zcHJpbnQvdG9kZGxlci5wbmdcIiBhbHQ9XCJMZXZlbCAyXCIgd2lkdGg9XCIzNVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvc3ByaW50L3RlZW4ucG5nXCIgYWx0PVwiTGV2ZWwgM1wiIHdpZHRoPVwiNDVcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL3NwcmludC9wcm9mLnBuZ1wiIGFsdD1cIkxldmVsIDRcIiB3aWR0aD1cIjU1XCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndvcmQtcHJvcHNcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwic3ByaW50LXdvcmRcIj53b3JkPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJzcHJpbnQtdHJhbnNsYXRpb25cIj7Qv9C10YDQtdCy0L7QtDwvcD5cclxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJhbnN3ZXItY29ycmVjdFwiIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9yaWdodC1pY29uLnBuZ1wiIGFsdD1cIkNvcnJlY3QgaWNvblwiIHdpZHRoPVwiMzBcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJhbnN3ZXItd3JvbmdcIiBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvd3JvbmctaWNvbi5wbmdcIiBhbHQ9XCJDb3JyZWN0IGljb25cIiB3aWR0aD1cIjMwXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLXRydWVcIj4rPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWZhbHNlXCI+LTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzcHJpbnQtdGltZXJcIj50aW1lciBmb3IgMSBtaW48L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWNvbnRhaW5lclwiPlxyXG4gICAgICA8aDIgY2xhc3M9XCJyZXN1bHRzLWhlYWRlclwiPtCS0LDRiCDRgNC10LfRg9C70YzRgtCw0YI6PC9oMj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0cy1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgPHA+0J/RgNCw0LLQuNC70YzQvdGL0YUg0L7RgtCy0LXRgtC+0LI6IDA8L3A+XHJcbiAgICAgICAgICA8cD7QntGI0LjQsdC+0Lo6IDA8L3A+XHJcbiAgICAgICAgICA8cD7Qn9GA0LDQstC40LvRjNC90YvRhSDQvtGC0LLQtdGC0L7QsiDQv9C+0LTRgNGP0LQ6IDA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJyZXN1bHRzLWFjY3VyYWN5XCI+MTAwJTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bCBjbGFzcz1cIndvcmQtbGlzdFwiPlxyXG4gICAgICAgIDxoMz7QodC/0LjRgdC+0Log0YHQu9C+0LI6PC9oMz5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPVwic3ByaW50LWF1ZGlvLWljb25cIiBzcmM9XCIuL2Fzc2V0cy9zdmcvYXVkaW8tc3BlYWtlci5zdmdcIiBhbHQ9XCJBdWRpbyBJY29uXCIgd2lkdGg9XCIyMFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvcmlnaHQtaWNvbi5wbmdcIiBhbHQ9XCJDb3JyZWN0IEljb25cIiB3aWR0aD1cIjIwXCI+XHJcbiAgICAgICAgICA8cD48c3Bhbj5Xb3JkPC9zcGFuPiAtINC/0LXRgNC10LLQvtC0PC9wPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGltZyBjbGFzcz1cInNwcmludC1hdWRpby1pY29uXCIgc3JjPVwiLi9hc3NldHMvc3ZnL2F1ZGlvLXNwZWFrZXIuc3ZnXCIgYWx0PVwiQXVkaW8gSWNvblwiIHdpZHRoPVwiMjBcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1hZ2VzL3dyb25nLWljb24ucG5nXCIgYWx0PVwiQ29ycmVjdCBJY29uXCIgd2lkdGg9XCIyMFwiPlxyXG4gICAgICAgICAgPHA+PHNwYW4+V29yZDwvc3Bhbj4gLSDQv9C10YDQtdCy0L7QtDwvcD5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBTcHJpbnRWaWV3O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9zdGF0aXN0aWNzLmNzc1wiKTtcclxuLy8gaW1wb3J0IHsgSU9iamVjdCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9pbnRlcmZhY2VzL0lPYmplY3QnO1xyXG5jbGFzcyBTdGF0aXN0aWNzVmlldyB7XHJcbiAgICAvLyBzdGF0aWMgZHJhdyhkYXRhOiBJT2JqZWN0PHN0cmluZz4pXHJcbiAgICBzdGF0aWMgZHJhdygpIHtcclxuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtYWluLWNvbnRhaW5lci1zdGF0aXN0aWNzXCI+XHJcbiAgICA8aDE+0KHRgtCw0YLQuNGB0YLQuNC60LA8L2gxPlxyXG4gIDwvZGl2PmA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gU3RhdGlzdGljc1ZpZXc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL3RlYW0uY3NzXCIpO1xyXG5jbGFzcyBUZWFtVmlldyB7XHJcbiAgICAvLyBzdGF0aWMgZHJhdyhkYXRhOiBJT2JqZWN0PHN0cmluZz4pXHJcbiAgICBzdGF0aWMgZHJhdygpIHtcclxuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtYWluLWNvbnRhaW5lci10ZWFtXCI+XHJcbiAgICA8aDE+0J3QsNGI0LAg0LrQvtC80LDQvdC00LA8L2gxPlxyXG4gICAgPGRpdiBjbGFzcz1cInRlYW0tY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWltZ1wiIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy90ZWFtL2Fub255bW91cy5wbmdcIiBhbHQ9XCJUZWFtIG1lbWJlciBwaWN0dXJlIDFcIiB3aWR0aD1cIjIwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtbmFtZVwiPk5hbWU8L3A+XHJcbiAgICAgICAgICA8cD5Gcm9udGVuZCBkZXZlbG9wZXI8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtY29udHJpYnV0aW9uXCI+QmVjYXVzZSBGaXJlZm94IHNhdmVzIHN0YXRlIG9iamVjdHMgdG8gdGhlIHVzZXIncyBkaXNrIHNvIHRoZXkgY2FuIGJlIHJlc3RvcmVkIGFmdGVyIHRoZSB1c2VyIHJlc3RhcnRzIHRoZSBicm93c2VyLCB3ZSBpbXBvc2UgYSBzaXplIGxpbWl0IG9mIDE2IE1pQiBvbiB0aGUgc2VyaWFsaXplZCByZXByZXNlbnRhdGlvbiBvZiBhIHN0YXRlIG9iamVjdC48L3A+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cImNhcmQtbGlua1wiIGhyZWY9XCJcIj5naXRodWI8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBUZWFtVmlldztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5yZW5kZXJUZXh0Ym9va1BhZ2UgPSB2b2lkIDA7XHJcbnJlcXVpcmUoXCIuL3RleHRib29rLmNzc1wiKTtcclxuZnVuY3Rpb24gcmVuZGVyVGV4dGJvb2tQYWdlKCkge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibWFpbi1jb250YWluZXItdGV4dGJvb2tcIj5cclxuICAgIDxoMT7Qo9GH0LXQsdC90LjQujwvaDE+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInRleHRib29rLWdhbWUtYnRuc1wiPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwic3RhcnQtYXVkaW9jYWxsXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2F1ZGlvY2FsbC5wbmdcIiBhbHQ9XCJBdWRpb2NhbGxcIiB3aWR0aD1cIjQwXCI+XHJcbiAgICAgICAgPHA+0JDRg9C00LjQvtCy0YvQt9C+0LI8L3A+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwic3RhcnQtc3ByaW50XCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NwcmludC5wbmdcIiBhbHQ9XCJTcHJpbnRcIiB3aWR0aD1cIjQwXCI+XHJcbiAgICAgICAgPHA+0KHQv9GA0LjQvdGCPC9wPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ3b3Jkcy1jb250YWluZXJcIj48L2Rpdj5cclxuXHJcbiAgPC9kaXY+YDtcclxufVxyXG5leHBvcnRzLnJlbmRlclRleHRib29rUGFnZSA9IHJlbmRlclRleHRib29rUGFnZTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChjYWNoZWRNb2R1bGUuZXJyb3IgIT09IHVuZGVmaW5lZCkgdGhyb3cgY2FjaGVkTW9kdWxlLmVycm9yO1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHR0cnkge1xuXHRcdHZhciBleGVjT3B0aW9ucyA9IHsgaWQ6IG1vZHVsZUlkLCBtb2R1bGU6IG1vZHVsZSwgZmFjdG9yeTogX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0sIHJlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18gfTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7IGhhbmRsZXIoZXhlY09wdGlvbnMpOyB9KTtcblx0XHRtb2R1bGUgPSBleGVjT3B0aW9ucy5tb2R1bGU7XG5cdFx0ZXhlY09wdGlvbnMuZmFjdG9yeS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBleGVjT3B0aW9ucy5yZXF1aXJlKTtcblx0fSBjYXRjaChlKSB7XG5cdFx0bW9kdWxlLmVycm9yID0gZTtcblx0XHR0aHJvdyBlO1xuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgZXhlY3V0aW9uIGludGVyY2VwdG9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBbXTtcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmh1ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1yRiA9ICgpID0+IChcIm1haW4uXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNvblwiKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5NDdmMDZjNDI4NjEwNjkxNWFiMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInJzbGFuZzpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHQ7XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBjdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xudmFyIGluc3RhbGxlZE1vZHVsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmM7XG5cbi8vIG1vZHVsZSBhbmQgcmVxdWlyZSBjcmVhdGlvblxudmFyIGN1cnJlbnRDaGlsZE1vZHVsZTtcbnZhciBjdXJyZW50UGFyZW50cyA9IFtdO1xuXG4vLyBzdGF0dXNcbnZhciByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMgPSBbXTtcbnZhciBjdXJyZW50U3RhdHVzID0gXCJpZGxlXCI7XG5cbi8vIHdoaWxlIGRvd25sb2FkaW5nXG52YXIgYmxvY2tpbmdQcm9taXNlcyA9IDA7XG52YXIgYmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblxuLy8gVGhlIHVwZGF0ZSBpbmZvXG52YXIgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnM7XG52YXIgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbl9fd2VicGFja19yZXF1aXJlX18uaG1yRCA9IGN1cnJlbnRNb2R1bGVEYXRhO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaChmdW5jdGlvbiAob3B0aW9ucykge1xuXHR2YXIgbW9kdWxlID0gb3B0aW9ucy5tb2R1bGU7XG5cdHZhciByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShvcHRpb25zLnJlcXVpcmUsIG9wdGlvbnMuaWQpO1xuXHRtb2R1bGUuaG90ID0gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG9wdGlvbnMuaWQsIG1vZHVsZSk7XG5cdG1vZHVsZS5wYXJlbnRzID0gY3VycmVudFBhcmVudHM7XG5cdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRvcHRpb25zLnJlcXVpcmUgPSByZXF1aXJlO1xufSk7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yQyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJID0ge307XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcXVpcmUocmVxdWlyZSwgbW9kdWxlSWQpIHtcblx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cdGlmICghbWUpIHJldHVybiByZXF1aXJlO1xuXHR2YXIgZm4gPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuXHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG5cdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuXHRcdFx0XHR2YXIgcGFyZW50cyA9IGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cztcblx0XHRcdFx0aWYgKHBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG5cdFx0XHRcdFx0cGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuXHRcdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG5cdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuXHRcdFx0XHRcdHJlcXVlc3QgK1xuXHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG5cdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdCk7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVxdWlyZShyZXF1ZXN0KTtcblx0fTtcblx0dmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHJlcXVpcmVbbmFtZV07XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmVxdWlyZVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdGZvciAodmFyIG5hbWUgaW4gcmVxdWlyZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVxdWlyZSwgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKG5hbWUpKTtcblx0XHR9XG5cdH1cblx0Zm4uZSA9IGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0cmV0dXJuIHRyYWNrQmxvY2tpbmdQcm9taXNlKHJlcXVpcmUuZShjaHVua0lkKSk7XG5cdH07XG5cdHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG1vZHVsZUlkLCBtZSkge1xuXHR2YXIgX21haW4gPSBjdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkO1xuXHR2YXIgaG90ID0ge1xuXHRcdC8vIHByaXZhdGUgc3R1ZmZcblx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9hY2NlcHRlZEVycm9ySGFuZGxlcnM6IHt9LFxuXHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG5cdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG5cdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG5cdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG5cdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG5cdFx0X21haW46IF9tYWluLFxuXHRcdF9yZXF1aXJlU2VsZjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBtZS5wYXJlbnRzLnNsaWNlKCk7XG5cdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSBfbWFpbiA/IHVuZGVmaW5lZCA6IG1vZHVsZUlkO1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG5cdFx0fSxcblxuXHRcdC8vIE1vZHVsZSBBUElcblx0XHRhY3RpdmU6IHRydWUsXG5cdFx0YWNjZXB0OiBmdW5jdGlvbiAoZGVwLCBjYWxsYmFjaywgZXJyb3JIYW5kbGVyKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcFtpXV0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBdID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGVjbGluZTogZnVuY3Rpb24gKGRlcCkge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcblx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuXHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcblx0XHRcdFx0XHQocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKFxuXHRcdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gTWFuYWdlbWVudCBBUElcblx0XHRjaGVjazogaG90Q2hlY2ssXG5cdFx0YXBwbHk6IGhvdEFwcGx5LFxuXHRcdHN0YXR1czogZnVuY3Rpb24gKGwpIHtcblx0XHRcdGlmICghbCkgcmV0dXJuIGN1cnJlbnRTdGF0dXM7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHR2YXIgaWR4ID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG5cdFx0XHRpZiAoaWR4ID49IDApIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXG5cdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG5cdFx0ZGF0YTogY3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG5cdH07XG5cdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcblx0cmV0dXJuIGhvdDtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xuXHRjdXJyZW50U3RhdHVzID0gbmV3U3RhdHVzO1xuXHR2YXIgcmVzdWx0cyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuXHRcdHJlc3VsdHNbaV0gPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzKTtcbn1cblxuZnVuY3Rpb24gdW5ibG9jaygpIHtcblx0aWYgKC0tYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuXHRcdHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGJsb2NraW5nUHJvbWlzZXMgPT09IDApIHtcblx0XHRcdFx0dmFyIGxpc3QgPSBibG9ja2luZ1Byb21pc2VzV2FpdGluZztcblx0XHRcdFx0YmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0bGlzdFtpXSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhY2tCbG9ja2luZ1Byb21pc2UocHJvbWlzZSkge1xuXHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdHNldFN0YXR1cyhcInByZXBhcmVcIik7XG5cdFx0LyogZmFsbHRocm91Z2ggKi9cblx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0YmxvY2tpbmdQcm9taXNlcysrO1xuXHRcdFx0cHJvbWlzZS50aGVuKHVuYmxvY2ssIHVuYmxvY2spO1xuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKSB7XG5cdGlmIChibG9ja2luZ1Byb21pc2VzID09PSAwKSByZXR1cm4gZm4oKTtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdFx0YmxvY2tpbmdQcm9taXNlc1dhaXRpbmcucHVzaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXNvbHZlKGZuKCkpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaG90Q2hlY2soYXBwbHlPblVwZGF0ZSkge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcblx0fVxuXHRyZXR1cm4gc2V0U3RhdHVzKFwiY2hlY2tcIilcblx0XHQudGhlbihfX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0pXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHVwZGF0ZSkge1xuXHRcdFx0aWYgKCF1cGRhdGUpIHtcblx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhhcHBseUludmFsaWRhdGVkTW9kdWxlcygpID8gXCJyZWFkeVwiIDogXCJpZGxlXCIpLnRoZW4oXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicHJlcGFyZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIHVwZGF0ZWRNb2R1bGVzID0gW107XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cblx0XHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1yQykucmVkdWNlKGZ1bmN0aW9uIChcblx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0a2V5XG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckNba2V5XShcblx0XHRcdFx0XHRcdFx0dXBkYXRlLmMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5yLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUubSxcblx0XHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGVkTW9kdWxlc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFtdKVxuXHRcdFx0XHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHJldHVybiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRpZiAoYXBwbHlPblVwZGF0ZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShhcHBseU9uVXBkYXRlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZE1vZHVsZXM7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xufVxuXG5mdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcInJlYWR5XCIpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzIChzdGF0ZTogXCIgK1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0dXMgK1xuXHRcdFx0XHRcdFwiKVwiXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0YXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcblxuXHR2YXIgcmVzdWx0cyA9IGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLm1hcChmdW5jdGlvbiAoaGFuZGxlcikge1xuXHRcdHJldHVybiBoYW5kbGVyKG9wdGlvbnMpO1xuXHR9KTtcblx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSB1bmRlZmluZWQ7XG5cblx0dmFyIGVycm9ycyA9IHJlc3VsdHNcblx0XHQubWFwKGZ1bmN0aW9uIChyKSB7XG5cdFx0XHRyZXR1cm4gci5lcnJvcjtcblx0XHR9KVxuXHRcdC5maWx0ZXIoQm9vbGVhbik7XG5cblx0aWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG5cdFx0cmV0dXJuIHNldFN0YXR1cyhcImFib3J0XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgZXJyb3JzWzBdO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG5cdHZhciBkaXNwb3NlUHJvbWlzZSA9IHNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG5cblx0cmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0LmRpc3Bvc2UpIHJlc3VsdC5kaXNwb3NlKCk7XG5cdH0pO1xuXG5cdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2Vcblx0dmFyIGFwcGx5UHJvbWlzZSA9IHNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG5cdHZhciBlcnJvcjtcblx0dmFyIHJlcG9ydEVycm9yID0gZnVuY3Rpb24gKGVycikge1xuXHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuXHR9O1xuXG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0cmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0LmFwcGx5KSB7XG5cdFx0XHR2YXIgbW9kdWxlcyA9IHJlc3VsdC5hcHBseShyZXBvcnRFcnJvcik7XG5cdFx0XHRpZiAobW9kdWxlcykge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChtb2R1bGVzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKFtkaXNwb3NlUHJvbWlzZSwgYXBwbHlQcm9taXNlXSkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcblx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJmYWlsXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGxpc3QpIHtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdFx0aWYgKGxpc3QuaW5kZXhPZihtb2R1bGVJZCkgPCAwKSBsaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiaWRsZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhcHBseUludmFsaWRhdGVkTW9kdWxlcygpIHtcblx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdGlmICghY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMpIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wIHx8IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG52YXIgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdDtcbnZhciB3YWl0aW5nVXBkYXRlUmVzb2x2ZXMgPSB7fTtcbmZ1bmN0aW9uIGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpIHtcblx0Y3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCA9IHVwZGF0ZWRNb2R1bGVzTGlzdDtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSByZXNvbHZlO1xuXHRcdC8vIHN0YXJ0IHVwZGF0ZSBjaHVuayBsb2FkaW5nXG5cdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaHUoY2h1bmtJZCk7XG5cdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcblx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuXHR9KTtcbn1cblxuc2VsZltcIndlYnBhY2tIb3RVcGRhdGVyc2xhbmdcIl0gPSAoY2h1bmtJZCwgbW9yZU1vZHVsZXMsIHJ1bnRpbWUpID0+IHtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdGlmKGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QpIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIGN1cnJlbnRVcGRhdGVSdW50aW1lLnB1c2gocnVudGltZSk7XG5cdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSgpO1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0fVxufTtcblxudmFyIGN1cnJlbnRVcGRhdGVDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZTtcbnZhciBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcztcbnZhciBjdXJyZW50VXBkYXRlUnVudGltZTtcbmZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXI7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB1bmRlZmluZWQ7XG5cdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG5cdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoYWluOiBbaWRdLFxuXHRcdFx0XHRpZDogaWRcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcblx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcblx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhbW9kdWxlIHx8XG5cdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcblx0XHRcdClcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcblx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcblx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuXHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG5cdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG5cdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0aWQ6IHBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG5cdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG5cdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcblx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGJbaV07XG5cdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG5cdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cblx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuXHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKG1vZHVsZSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgbW9kdWxlLmlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG5cdFx0KTtcblx0fTtcblxuXHRmb3IgKHZhciBtb2R1bGVJZCBpbiBjdXJyZW50VXBkYXRlKSB7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRcdHZhciBuZXdNb2R1bGVGYWN0b3J5ID0gY3VycmVudFVwZGF0ZVttb2R1bGVJZF07XG5cdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aWYgKG5ld01vZHVsZUZhY3RvcnkpIHtcblx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdCA9IHtcblx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuXHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcblx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG5cdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcblx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcblx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuXHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRlcnJvcjogYWJvcnRFcnJvclxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvQXBwbHkpIHtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuXHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcblx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y3VycmVudFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuXHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG5cdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBqKyspIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tqXTtcblx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdGlmIChcblx0XHRcdG1vZHVsZSAmJlxuXHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCB8fCBtb2R1bGUuaG90Ll9tYWluKSAmJlxuXHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuXHRcdFx0YXBwbGllZFVwZGF0ZVtvdXRkYXRlZE1vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG5cdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuXHRcdFx0IW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuXHRcdCkge1xuXHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuXHRcdFx0XHRtb2R1bGU6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdHJlcXVpcmU6IG1vZHVsZS5ob3QuX3JlcXVpcmVTZWxmLFxuXHRcdFx0XHRlcnJvckhhbmRsZXI6IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuXG5cdHJldHVybiB7XG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0fSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dmFyIGlkeDtcblx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG5cdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cblx0XHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuXHRcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcblx0XHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGRpc3Bvc2VIYW5kbGVyc1tqXS5jYWxsKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRFttb2R1bGVJZF0gPSBkYXRhO1xuXG5cdFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG5cdFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG5cdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZS5jaGlsZHJlbltqXV07XG5cdFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG5cdFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcblx0XHRcdFx0XHRpZiAoaWR4ID49IDApIHtcblx0XHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG5cdFx0XHR2YXIgZGVwZW5kZW5jeTtcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGFwcGx5OiBmdW5jdGlvbiAocmVwb3J0RXJyb3IpIHtcblx0XHRcdC8vIGluc2VydCBuZXcgY29kZVxuXHRcdFx0Zm9yICh2YXIgdXBkYXRlTW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGFwcGxpZWRVcGRhdGUsIHVwZGF0ZU1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVt1cGRhdGVNb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBydW4gbmV3IHJ1bnRpbWUgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50VXBkYXRlUnVudGltZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlUnVudGltZVtpXShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHR2YXIgYWNjZXB0Q2FsbGJhY2sgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVyID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdGlmIChhY2NlcHRDYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihhY2NlcHRDYWxsYmFjaykgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChhY2NlcHRDYWxsYmFjayk7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVycy5wdXNoKGVycm9ySGFuZGxlcik7XG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzLnB1c2goZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgY2FsbGJhY2tzLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzW2tdLmNhbGwobnVsbCwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIGVycm9ySGFuZGxlcnNba10gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyc1trXShlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBvID0gMDsgbyA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IG8rKykge1xuXHRcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tvXTtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aXRlbS5yZXF1aXJlKG1vZHVsZUlkKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fVxuXHR9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJLmpzb25wID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBhcHBseUhhbmRsZXJzKSB7XG5cdGlmICghY3VycmVudFVwZGF0ZSkge1xuXHRcdGN1cnJlbnRVcGRhdGUgPSB7fTtcblx0XHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gW107XG5cdFx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdH1cblx0aWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdO1xuXHR9XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLmpzb25wID0gZnVuY3Rpb24gKFxuXHRjaHVua0lkcyxcblx0cmVtb3ZlZENodW5rcyxcblx0cmVtb3ZlZE1vZHVsZXMsXG5cdHByb21pc2VzLFxuXHRhcHBseUhhbmRsZXJzLFxuXHR1cGRhdGVkTW9kdWxlc0xpc3Rcbikge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHt9O1xuXHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHJlbW92ZWRDaHVua3M7XG5cdGN1cnJlbnRVcGRhdGUgPSByZW1vdmVkTW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG5cdFx0b2JqW2tleV0gPSBmYWxzZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9LCB7fSk7XG5cdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdGNodW5rSWRzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRpZiAoXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHQpIHtcblx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkpO1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSBmYWxzZTtcblx0XHR9XG5cdH0pO1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yID0gZnVuY3Rpb24gKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3MgJiZcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGVDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRcdCFjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdXG5cdFx0XHQpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkpO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0gPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZmV0Y2ggPT09IFwidW5kZWZpbmVkXCIpIHRocm93IG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydDogbmVlZCBmZXRjaCBBUElcIik7XG5cdHJldHVybiBmZXRjaChfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYoKSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRpZihyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkgcmV0dXJuOyAvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG5cdFx0aWYoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXBkYXRlIG1hbmlmZXN0IFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=