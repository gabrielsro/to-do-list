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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\n\nnav,\n.projects-bar,\nform,\n.project,\n.todo-bar,\nbody,\n.todo-content,\n.todo-div,\n.task-row {\n  border: 1px solid black;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-rows: 1fr 4fr 15fr;\n  height: 100vh;\n}\n\nnav {\n  grid-column: 1/3;\n}\n\n.projects-bar {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 0.14fr));\n  gap: 1vw;\n  overflow: auto;\n  padding-left: 0.8vw;\n  grid-column: 1/3;\n  grid-row: 2/3;\n}\n\n.project-header {\n  margin-bottom: 1vh;\n}\n\n.project-empty-dialog {\n  padding-top: 2vh;\n}\n\n.project-empty-dialog > p {\n  margin-bottom: 1vh;\n}\n\n.project-empty-dialog > button {\n  margin-right: 1vw;\n  width: 5rem;\n}\n\n.project-empty-dialog button:last-child {\n  width: 12rem;\n}\n\n.todo-bar {\n  grid-column: 1/2;\n  grid-row: 3/4;\n}\n\n.selected-project {\n  border: 2px solid rgb(44, 125, 239);\n}\n\n.project {\n  height: 15vh;\n  align-self: center;\n  border-radius: 4px;\n  display: grid;\n  grid-template-rows: 4fr 1fr;\n  overflow: hidden;\n  padding: 3%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.project:hover {\n  cursor: pointer;\n  animation-name: border-hover;\n  animation-duration: 170ms;\n  animation-fill-mode: forwards;\n}\n\n@keyframes border-hover {\n  100% {\n    border: 2px solid rgb(44, 125, 239);\n    scale: 1.06;\n  }\n}\n\n.project-info {\n  display: grid;\n  grid-template-columns: 2fr 5fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  column-gap: 0.2vw;\n}\n\n.project-info > p:first-child {\n  font-weight: bold;\n  justify-self: center;\n  grid-column: 1/3;\n}\n\n.project-info > p:nth-child(2),\n.project-info > p:nth-child(4) {\n  font-size: 0.9rem;\n}\n\n.project-info > p:nth-child(3),\n.project-info > p:nth-child(5) {\n  font-size: 0.9rem;\n}\n\n.project-actions {\n  display: grid;\n}\n\n.todo-div:hover {\n  cursor: pointer;\n  border: 2px solid rgba(238, 159, 23, 0.983);\n  scale: 1.03;\n}\n\n.selected-todo {\n  border: 2px solid rgba(238, 159, 23, 0.983);\n}\n\n.todo-list {\n  height: 73vh;\n  overflow: auto;\n  padding-left: 0.5vw;\n  padding-right: 0.5vw;\n}\n\n.todo-div {\n  border-radius: 4px;\n  margin-top: 0.7vw;\n}\n\n.todo-div > div {\n  display: grid;\n  padding: 2%;\n}\n\n.todo-div > div > p:first-child {\n  font-weight: bold;\n}\n\n.todo-div > div > div,\n.todo-div > div > div:nth-child(2) {\n  display: flex;\n  flex-direction: row;\n}\n\n.todo-div > div > p:nth-child(2),\n.todo-div > div > div > p,\n.todo-div > div > div:nth-child(2) > p {\n  margin-right: 0.1vw;\n  margin-left: 0.7vw;\n}\n\n.todo-div > div p:nth-child(3) {\n  display: inline;\n}\n\n.invisible {\n  display: none;\n}\n\n.todo-header > p {\n  font-size: 1.3rem;\n  font-weight: bold;\n  margin-bottom: 1vh;\n}\n\n.todo-header > div > p {\n  margin-bottom: 1vh;\n}\n\n.todo-header > div button {\n  margin-right: 1vw;\n  margin-bottom: 1vh;\n}\n\n.todo-header > button {\n  margin-right: 1vw;\n}\n\n.tasklist {\n  padding-left: 1vw;\n  padding-right: 2vw;\n  padding-top: 0.7vw;\n  height: 60vh;\n}\n\n.task-row {\n  height: 9vh;\n  margin-bottom: 0.7vw;\n  border-radius: 4px;\n  display: grid;\n  grid-template-columns: 3fr 2fr 15fr 2fr;\n}\n\n.task-row:hover {\n  cursor: pointer;\n}\n\n.icon-container,\n.task-row-actions,\n.task-row-text,\n.task-row-actions,\n.task-row-info {\n  display: grid;\n  height: 7vh;\n  align-self: center;\n}\n\n.task-row-text > p {\n  font-size: 1.5rem;\n}\n\n.task-row-info > p:first-child {\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n\n.task-row-info > p:nth-child(2) {\n  font-size: 0.9rem;\n}\n\n.task-row-info > p:nth-child(3) {\n  margin-top: 0.7vh;\n  font-weight: bold;\n}\n\n.task-row-info {\n  padding-left: 1vw;\n}\n\n.task-row-text > p {\n  align-self: center;\n}\n\n.task-row-actions > button {\n  align-self: center;\n  justify-self: center;\n}\n\n.task-icon {\n  width: 64%;\n  height: 64%;\n  align-self: center;\n}\n\n.todo-content {\n  padding-top: 1vh;\n  padding-left: 1vw;\n  padding-right: 1vw;\n}\n\n.todo-content-info {\n  overflow: auto;\n}\n\n.todo-title {\n  font-size: 2rem;\n  font-weight: bold;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;AACxB;;AAEA;;;;;;;;;EASE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gCAAgC;EAChC,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8DAA8D;EAC9D,QAAQ;EACR,cAAc;EACd,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,2BAA2B;EAC3B,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,4BAA4B;EAC5B,yBAAyB;EACzB,6BAA6B;AAC/B;;AAEA;EACE;IACE,mCAAmC;IACnC,WAAW;EACb;AACF;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,+BAA+B;EAC/B,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,2CAA2C;EAC3C,WAAW;AACb;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;AACrB;;AAEA;;;EAGE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;EACb,uCAAuC;AACzC;;AAEA;EACE,eAAe;AACjB;;AAEA;;;;;EAKE,aAAa;EACb,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB","sourcesContent":["* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\n\nnav,\n.projects-bar,\nform,\n.project,\n.todo-bar,\nbody,\n.todo-content,\n.todo-div,\n.task-row {\n  border: 1px solid black;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-rows: 1fr 4fr 15fr;\n  height: 100vh;\n}\n\nnav {\n  grid-column: 1/3;\n}\n\n.projects-bar {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 0.14fr));\n  gap: 1vw;\n  overflow: auto;\n  padding-left: 0.8vw;\n  grid-column: 1/3;\n  grid-row: 2/3;\n}\n\n.project-header {\n  margin-bottom: 1vh;\n}\n\n.project-empty-dialog {\n  padding-top: 2vh;\n}\n\n.project-empty-dialog > p {\n  margin-bottom: 1vh;\n}\n\n.project-empty-dialog > button {\n  margin-right: 1vw;\n  width: 5rem;\n}\n\n.project-empty-dialog button:last-child {\n  width: 12rem;\n}\n\n.todo-bar {\n  grid-column: 1/2;\n  grid-row: 3/4;\n}\n\n.selected-project {\n  border: 2px solid rgb(44, 125, 239);\n}\n\n.project {\n  height: 15vh;\n  align-self: center;\n  border-radius: 4px;\n  display: grid;\n  grid-template-rows: 4fr 1fr;\n  overflow: hidden;\n  padding: 3%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.project:hover {\n  cursor: pointer;\n  animation-name: border-hover;\n  animation-duration: 170ms;\n  animation-fill-mode: forwards;\n}\n\n@keyframes border-hover {\n  100% {\n    border: 2px solid rgb(44, 125, 239);\n    scale: 1.06;\n  }\n}\n\n.project-info {\n  display: grid;\n  grid-template-columns: 2fr 5fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  column-gap: 0.2vw;\n}\n\n.project-info > p:first-child {\n  font-weight: bold;\n  justify-self: center;\n  grid-column: 1/3;\n}\n\n.project-info > p:nth-child(2),\n.project-info > p:nth-child(4) {\n  font-size: 0.9rem;\n}\n\n.project-info > p:nth-child(3),\n.project-info > p:nth-child(5) {\n  font-size: 0.9rem;\n}\n\n.project-actions {\n  display: grid;\n}\n\n.todo-div:hover {\n  cursor: pointer;\n  border: 2px solid rgba(238, 159, 23, 0.983);\n  scale: 1.03;\n}\n\n.selected-todo {\n  border: 2px solid rgba(238, 159, 23, 0.983);\n}\n\n.todo-list {\n  height: 73vh;\n  overflow: auto;\n  padding-left: 0.5vw;\n  padding-right: 0.5vw;\n}\n\n.todo-div {\n  border-radius: 4px;\n  margin-top: 0.7vw;\n}\n\n.todo-div > div {\n  display: grid;\n  padding: 2%;\n}\n\n.todo-div > div > p:first-child {\n  font-weight: bold;\n}\n\n.todo-div > div > div,\n.todo-div > div > div:nth-child(2) {\n  display: flex;\n  flex-direction: row;\n}\n\n.todo-div > div > p:nth-child(2),\n.todo-div > div > div > p,\n.todo-div > div > div:nth-child(2) > p {\n  margin-right: 0.1vw;\n  margin-left: 0.7vw;\n}\n\n.todo-div > div p:nth-child(3) {\n  display: inline;\n}\n\n.invisible {\n  display: none;\n}\n\n.todo-header > p {\n  font-size: 1.3rem;\n  font-weight: bold;\n  margin-bottom: 1vh;\n}\n\n.todo-header > div > p {\n  margin-bottom: 1vh;\n}\n\n.todo-header > div button {\n  margin-right: 1vw;\n  margin-bottom: 1vh;\n}\n\n.todo-header > button {\n  margin-right: 1vw;\n}\n\n.tasklist {\n  padding-left: 1vw;\n  padding-right: 2vw;\n  padding-top: 0.7vw;\n  height: 60vh;\n}\n\n.task-row {\n  height: 9vh;\n  margin-bottom: 0.7vw;\n  border-radius: 4px;\n  display: grid;\n  grid-template-columns: 3fr 2fr 15fr 2fr;\n}\n\n.task-row:hover {\n  cursor: pointer;\n}\n\n.icon-container,\n.task-row-actions,\n.task-row-text,\n.task-row-actions,\n.task-row-info {\n  display: grid;\n  height: 7vh;\n  align-self: center;\n}\n\n.task-row-text > p {\n  font-size: 1.5rem;\n}\n\n.task-row-info > p:first-child {\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n\n.task-row-info > p:nth-child(2) {\n  font-size: 0.9rem;\n}\n\n.task-row-info > p:nth-child(3) {\n  margin-top: 0.7vh;\n  font-weight: bold;\n}\n\n.task-row-info {\n  padding-left: 1vw;\n}\n\n.task-row-text > p {\n  align-self: center;\n}\n\n.task-row-actions > button {\n  align-self: center;\n  justify-self: center;\n}\n\n.task-icon {\n  width: 64%;\n  height: 64%;\n  align-self: center;\n}\n\n.todo-content {\n  padding-top: 1vh;\n  padding-left: 1vw;\n  padding-right: 1vw;\n}\n\n.todo-content-info {\n  overflow: auto;\n}\n\n.todo-title {\n  font-size: 2rem;\n  font-weight: bold;\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _storageManagement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageManagement */ "./src/storageManagement.js");




const App = {
  projects: [],
  getProjects() {
    return this.projects;
  },
  getProject(id) {
    return this.projects.filter((p) => p.id == id)[0];
  },
  createProject(name, deadline) {
    let id = this.projects.length;
    let projectsSorted = this.projects.sort((a, b) => a - b);
    for (let i = 0; i < projectsSorted.length; i++) {
      if (id == projectsSorted[i].id) {
        id++;
      }
    }
    if (!name) {
      let count = 1;
      let regex = /(?<=^Project\s)\d+$/;
      let matchedArray = [];
      for (let i = 0; i < this.projects.length; i++) {
        let matched = this.projects[i].name.match(regex);
        if (matched) {
          matchedArray.push(+matched[0]);
        }
      }
      matchedArray.sort((a, b) => a - b);
      for (let i = 0; i < matchedArray.length; i++) {
        if (matchedArray[i] == count) {
          count++;
        }
      }
      name = `Project ${count}`;
      if (!deadline) {
        deadline = "Unknown";
      }
    }
    let project = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])(name, deadline, id);
    this.projects.push(project);
    _storageManagement__WEBPACK_IMPORTED_MODULE_2__["default"].save();
  },
  changeProjectName(id, name) {
    let projectArray = this.projects.filter((p) => p.id == id);
    let project = projectArray[0];
    project.name = name;
    _storageManagement__WEBPACK_IMPORTED_MODULE_2__["default"].save();
  },
  changeProjectDeadline(id, deadline) {
    let projectArray = this.projects.filter((p) => p.id == id);
    let project = projectArray[0];
    project.deadline = deadline;
    _storageManagement__WEBPACK_IMPORTED_MODULE_2__["default"].save();
  },
  deleteProject(id) {
    let newProjects = this.projects.filter((p) => p.id !== id);
    this.projects = newProjects;
    _storageManagement__WEBPACK_IMPORTED_MODULE_2__["default"].save();
  },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/formEditTodo.js":
/*!*****************************!*\
  !*** ./src/formEditTodo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoEdit": () => (/* binding */ todoEdit)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _screenController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screenController */ "./src/screenController.js");



function todoEdit(projectId, todoId) {
  let todoEditForm = document.createElement("form");
  let nameLabel = document.createElement("label");
  nameLabel.innerText = "Todo name: ";
  nameLabel.setAttribute("for", "todo-name-input");
  let nameInput = document.createElement("input");
  nameInput.setAttribute("id", "todo-name-input");
  nameInput.setAttribute("placeholder", "Enter a name for this Todo list");
  let btnSave = document.createElement("button");
  btnSave.innerText = "Save Changes";
  btnSave.addEventListener("click", (event) => {
    event.preventDefault();
    let todoName = nameInput.value;
    handleFormSubmit(projectId, todoId, todoName);
  });
  todoEditForm.appendChild(nameLabel);
  todoEditForm.appendChild(nameInput);
  todoEditForm.appendChild(btnSave);

  return todoEditForm;
}

function handleFormSubmit(projectId, todoId, todoName) {
  (0,_screenController__WEBPACK_IMPORTED_MODULE_1__.changeTodoName)(projectId, todoId, todoName);
}




/***/ }),

/***/ "./src/formNewProject.js":
/*!*******************************!*\
  !*** ./src/formNewProject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _screenController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screenController */ "./src/screenController.js");




let projectForm = document.createElement("form");
projectForm.classList.add("project-form");
projectForm.classList.add("invisible");
let nameLabel = document.createElement("label");
nameLabel.setAttribute("for", "name-input");
nameLabel.innerText = "Project's name:";
let nameInput = document.createElement("input");
nameInput.setAttribute("id", "name-input");
nameInput.setAttribute("placeholder", "Enter project's name");
let deadlineLabel = document.createElement("label");
deadlineLabel.setAttribute("for", "deadline-input");
deadlineLabel.innerText = "Project's deadline:";
let deadlineInput = document.createElement("input");
deadlineInput.setAttribute("type", "date");
let btnSubmit = document.createElement("button");
btnSubmit.innerText = "Submit";
btnSubmit.addEventListener("click", handleProjectSubmit);
let btnCancel = document.createElement("button");
btnCancel.innerText = "Cancel";
btnCancel.addEventListener("click", handleProjectCancel);
projectForm.appendChild(nameLabel);
projectForm.appendChild(nameInput);
projectForm.appendChild(deadlineLabel);
projectForm.appendChild(deadlineInput);
projectForm.appendChild(btnSubmit);
projectForm.appendChild(btnCancel);

function handleProjectSubmit(event) {
  let projectName = nameInput.value;
  let projectDeadline = deadlineInput.value;
  _app_js__WEBPACK_IMPORTED_MODULE_1__["default"].createProject(projectName, projectDeadline);
  _screenController__WEBPACK_IMPORTED_MODULE_2__.projectsBarControl.refreshProjectsBar();
  event.preventDefault();
}

function handleProjectCancel(event) {
  nameInput.value = "";
  deadlineInput.value = "";
  projectForm.classList.toggle("invisible");
  event.preventDefault();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectForm);


/***/ }),

/***/ "./src/formNewTask.js":
/*!****************************!*\
  !*** ./src/formNewTask.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskForm": () => (/* binding */ taskForm)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _screenController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screenController */ "./src/screenController.js");



function taskForm(projectId, todoId) {
  let newTaskForm = document.createElement("form");
  let descriptionLabel = document.createElement("label");
  descriptionLabel.innerText = "Task: ";
  descriptionLabel.setAttribute("for", "description");
  let descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("id", "description");
  descriptionInput.setAttribute("placeholder", "Enter task to be done");
  let priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.innerText = "Task priority: ";
  let priorityScroll = document.createElement("select");
  priorityScroll.setAttribute("name", "priority");
  priorityScroll.setAttribute("id", "priority");
  let priorityVeryHigh = document.createElement("option");
  priorityVeryHigh.setAttribute("value", "Very High");
  priorityVeryHigh.innerText = "Very High";
  let priorityHigh = document.createElement("option");
  priorityHigh.setAttribute("value", "High");
  priorityHigh.innerText = "High";
  let priorityMedium = document.createElement("option");
  priorityMedium.setAttribute("selected", true);
  priorityMedium.setAttribute("value", "Medium");
  priorityMedium.innerText = "Medium";
  let priorityLow = document.createElement("option");
  priorityLow.setAttribute("value", "Low");
  priorityLow.innerText = "Low";
  priorityScroll.appendChild(priorityVeryHigh);
  priorityScroll.appendChild(priorityHigh);
  priorityScroll.appendChild(priorityMedium);
  priorityScroll.appendChild(priorityLow);
  let btnSubmit = document.createElement("button");
  btnSubmit.innerText = "Add Task";
  btnSubmit.addEventListener("click", (event) => {
    let description = descriptionInput.value;
    let priority = priorityScroll.value;
    handleTaskSubmit(event, projectId, todoId, description, priority);
  });
  let btnCancel = document.createElement("button");
  btnCancel.innerText = "Cancel";
  btnCancel.addEventListener("click", (event) => handleFormCancel(event));
  newTaskForm.appendChild(descriptionLabel);
  newTaskForm.appendChild(descriptionInput);
  newTaskForm.appendChild(priorityLabel);
  newTaskForm.appendChild(priorityScroll);
  newTaskForm.appendChild(btnSubmit);
  newTaskForm.appendChild(btnCancel);

  return newTaskForm;
}

function handleTaskSubmit(event, projectId, todoId, description, priority) {
  (0,_screenController__WEBPACK_IMPORTED_MODULE_1__.addTask)(projectId, todoId, description, priority);
  event.preventDefault();
}

function handleFormCancel(event) {
  console.log("form cancel");
  event.preventDefault();
}




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _storageManagement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageManagement */ "./src/storageManagement.js");




const Project = (name, deadline, id) => {
  const protoProject = {
    createTodo(name, deadline) {
      if (!name) {
        let count = 1;
        let regex = /(?<=^Todo\s)\d+$/;
        let matchedArray = [];
        for (let i = 0; i < this.todos.length; i++) {
          let matched = this.todos[i].name.match(regex);
          if (matched) {
            matchedArray.push(+matched[0]);
          }
        }
        matchedArray.sort((a, b) => a - b);
        for (let i = 0; i < matchedArray.length; i++) {
          if (matchedArray[i] == count) {
            count++;
          }
        }
        name = `Todo ${count}`;
      }
      let id = this.todos.length;
      let todosSorted = this.todos.sort((a, b) => a - b);
      for (let i = 0; i < todosSorted.length; i++) {
        if (id == todosSorted[i].id) {
          id++;
        }
      }
      let todo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(name, deadline, id);
      this.todos.push(todo);
      _storageManagement__WEBPACK_IMPORTED_MODULE_2__["default"].save();
    },
    getTodo(id) {
      return this.todos.filter((t) => t.id == id)[0];
    },
    changeTodoName(name, id) {
      let todo = this.getTodo(id);
      todo.name = name;
      _storageManagement__WEBPACK_IMPORTED_MODULE_2__["default"].save();
    },
    deleteTodo(id) {
      let filteredTodos = this.todos.filter((t) => t.id !== id);
      this.todos = filteredTodos;
      _storageManagement__WEBPACK_IMPORTED_MODULE_2__["default"].save();
    },
  };
  return Object.assign(
    Object.create(protoProject),
    { name },
    { deadline },
    { id },
    { todos: [] }
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/screenController.js":
/*!*********************************!*\
  !*** ./src/screenController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "changeTodoName": () => (/* binding */ changeTodoName),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "projectsBarControl": () => (/* binding */ projectsBarControl),
/* harmony export */   "screenCleanUp": () => (/* binding */ screenCleanUp),
/* harmony export */   "todoBarControl": () => (/* binding */ todoBarControl),
/* harmony export */   "todoContentControl": () => (/* binding */ todoContentControl)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _formNewProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formNewProject */ "./src/formNewProject.js");
/* harmony import */ var _screenProjectCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screenProjectCard */ "./src/screenProjectCard.js");
/* harmony import */ var _screenTodoCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screenTodoCard */ "./src/screenTodoCard.js");
/* harmony import */ var _formNewTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formNewTask */ "./src/formNewTask.js");
/* harmony import */ var _formEditTodo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formEditTodo */ "./src/formEditTodo.js");
/* harmony import */ var _icon_unchecked_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon-unchecked.svg */ "./src/icon-unchecked.svg");
/* harmony import */ var _icon_checked_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon-checked.svg */ "./src/icon-checked.svg");










let btnNewProject = document.createElement("button");
btnNewProject.innerText = "New Project";
btnNewProject.addEventListener("click", () => toggleProjectForm());

function toggleProjectForm() {
  _formNewProject__WEBPACK_IMPORTED_MODULE_2__["default"].classList.toggle("invisible");
}

const projectsBarControl = {
  refreshProjectsBar() {
    let projectsBar = document.querySelector(".projects-bar");
    screenCleanUp(".projects-bar");
    let projects = _app__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
    projects.forEach((project) => {
      let projectCard = (0,_screenProjectCard__WEBPACK_IMPORTED_MODULE_3__.makeProjectCard)(project);
      projectsBar.appendChild(projectCard);
    });
  },

  deselectPreviousProject() {
    let previous = todoBarControl.currentProject;
    let projectsBar = document.querySelector(".projects-bar");
    let projectArray = projectsBar.children;
    for (let i = 0; i < projectArray.length; i++) {
      if (+projectArray[i].dataset.id == previous) {
        projectArray[i].classList.remove("selected-project");
      }
    }
  },
};

const todoBarControl = {
  currentProject: "none",
  renderTodoBar(id, newTodo) {
    let todoBar = document.querySelector(".todo-bar");
    screenCleanUp(".todo-bar");
    let btnAddTodo = document.createElement("button");
    btnAddTodo.innerText = "New Todo";
    btnAddTodo.addEventListener("click", () => addToDo(id));
    let todoList = document.createElement("div");
    todoList.classList.add("todo-list");
    let todos = _app__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(id).todos;
    for (let i = 0; i < todos.length; i++) {
      let todoCard = (0,_screenTodoCard__WEBPACK_IMPORTED_MODULE_4__.makeTodoCard)(id, todos[i]);
      if (todoContentControl.currentTodo == +todoCard.dataset.id && !newTodo) {
        todoCard.classList.add("selected-todo");
      }
      todoList.appendChild(todoCard);
    }
    todoBar.appendChild(btnAddTodo);
    todoBar.appendChild(todoList);
    this.currentProject = id;
  },
  refreshTodoBar(id) {
    if (id == this.currentProject) {
      screenCleanUp(".todo-bar");
    }
  },
  deleteTodo(todoId) {
    _app__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(this.currentProject).deleteTodo(todoId);
    this.renderTodoBar(this.currentProject);
    todoContentControl.refreshTodoContentInfo(todoId);
  },
};

const todoContentControl = {
  currentProject: "",
  currentTodo: "none",
  showingTaskForm: false,
  showingTodoEditForm: false,

  renderTodoContentProject(id) {
    screenCleanUp(".todo-content");
    let todoContent = document.querySelector(".todo-content");
    let projectHeader = document.createElement("div");
    let projectBody = document.createElement("div");
    projectHeader.classList.add("project-header");
    projectBody.classList.add("project-body");
    let project = _app__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(id);
    let todoTitle = document.createElement("p");
    todoTitle.innerText = project.name;
    todoTitle.classList.add("todo-title");
    projectHeader.appendChild(todoTitle);
    todoContent.appendChild(projectHeader);
    if (this.currentProject !== id) {
      this.currentTodo = "none";
      this.currentProject = id;
    }
    todoContent.appendChild(projectBody);
    if (project.todos.length < 1) {
      let emptyDialog = document.createElement("div");
      emptyDialog.classList.add("project-empty-dialog");
      let emptyContent = document.createElement("p");
      emptyContent.innerText =
        "This project is empty. Do you want to add a new To-do list?";
      emptyDialog.appendChild(emptyContent);
      let newTodo = document.createElement("button");
      newTodo.innerText = "Yes";
      newTodo.addEventListener("click", () => addToDo(id));
      let btnDelete = document.createElement("button");
      btnDelete.innerText = "Delete Project";
      btnDelete.setAttribute("data-id", `${id}`);
      btnDelete.addEventListener("click", () => {
        deleteProject(+btnDelete.dataset.id);
      });
      emptyDialog.appendChild(newTodo);
      emptyDialog.appendChild(btnDelete);
      projectBody.appendChild(emptyDialog);
      todoContent.appendChild(projectBody);
    }
  },
  renderTodoContentTodo(pId, tId) {
    let projectBody = document.querySelector(".project-body");
    let todoHeader = document.createElement("div");
    todoHeader.classList.add("todo-header");
    let todoTitle = document.createElement("p");
    let project = _app__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(pId);
    let todo = project.getTodo(tId);
    todoTitle.innerText = todo.name;
    todoHeader.appendChild(todoTitle);
    let btnEditTodo = document.createElement("button");
    btnEditTodo.innerText = "Edit";
    btnEditTodo.addEventListener("click", () => {
      if (!this.showingTodoEditForm) {
        this.showTodoEditForm(pId, tId);
      } else {
        screenCleanUp(".project-body");
        this.renderTodoContentTodo(pId, tId);
        this.showingTodoEditForm = false;
      }
    });
    todoHeader.appendChild(btnEditTodo);
    projectBody.appendChild(todoHeader);
    let todoContentInfo = document.createElement("div");
    todoContentInfo.classList.add("todo-content-info");
    projectBody.appendChild(todoContentInfo);
    if (todo.tasks.length < 1) {
      let emptyOptions = document.createElement("div");
      let emptyDialog = document.createElement("p");
      emptyDialog.innerText =
        "This Todo list is empty. Do you want to add a new task?";
      let btnYes = document.createElement("button");
      btnYes.innerText = "Yes";
      btnYes.addEventListener("click", () => {
        if (!this.showingTaskForm) {
          this.showNewTaskForm(pId, tId);
        } else {
          screenCleanUp(".project-body");
          this.renderTodoContentTodo(pId, tId);
          this.showingTaskForm = false;
        }
      });
      let btnDeleteTodo = document.createElement("button");
      btnDeleteTodo.innerText = "Delete Todo";
      btnDeleteTodo.addEventListener("click", () => deleteTodo(tId));
      emptyOptions.appendChild(emptyDialog);
      emptyOptions.appendChild(btnYes);
      emptyOptions.appendChild(btnDeleteTodo);
      todoHeader.appendChild(emptyOptions);
    } else {
      let tasks = todo.tasks;
      let newTask = document.createElement("button");
      newTask.innerText = "New Task";
      newTask.addEventListener("click", () => {
        if (!this.showingTaskForm) {
          this.showNewTaskForm(pId, tId);
        } else {
          screenCleanUp(".project-body");
          this.renderTodoContentTodo(pId, tId);
          this.showingTaskForm = false;
        }
      });
      let taskList = document.createElement("div");
      taskList.classList.add("tasklist");
      for (let i = 0; i < tasks.length; i++) {
        let taskRow = document.createElement("div");
        taskRow.classList.add("task-row");
        taskRow.setAttribute("data-id", `${tasks[i].id}`);
        let taskDescription = document.createElement("p");
        taskDescription.innerText = tasks[i].description;
        let priorityLabel = document.createElement("p");
        priorityLabel.innerText = "Priority:";
        let taskPriority = document.createElement("p");
        taskPriority.innerText = tasks[i].priority;
        let taskStatus = document.createElement("p");
        taskStatus.classList.add("task-status");
        tasks[i].checked
          ? (taskStatus.innerText = "Done!")
          : (taskStatus.innerText = "To be done");
        let btnDeleteTask = document.createElement("button");
        btnDeleteTask.innerText = "Delete";
        btnDeleteTask.setAttribute("data-id", `${tasks[i].id}`);
        btnDeleteTask.addEventListener("click", (event) => {
          todo.deleteTask(+btnDeleteTask.dataset.id);
          screenCleanUp(".project-body");
          this.renderTodoContentTodo(pId, tId);
          event.stopPropagation();
        });
        let taskIcon = document.createElement("img");
        taskIcon.classList.add("task-icon");
        if (tasks[i].checked) {
          taskIcon.setAttribute("alt", "Icon for checked task");
          taskIcon.setAttribute("src", _icon_checked_svg__WEBPACK_IMPORTED_MODULE_8__);
        } else {
          taskIcon.setAttribute("alt", "Icon for unchecked task");
          taskIcon.setAttribute("src", _icon_unchecked_svg__WEBPACK_IMPORTED_MODULE_7__);
        }
        let taskRowInfo = document.createElement("div");
        taskRowInfo.classList.add("task-row-info");
        let taskRowImg = document.createElement("div");
        taskRowImg.classList.add("icon-container");
        let taskRowText = document.createElement("div");
        taskRowText.classList.add("task-row-text");
        let taskRowActions = document.createElement("div");
        taskRowActions.classList.add("task-row-actions");
        taskRowActions.classList.add("task-row-actions");
        taskRowInfo.appendChild(priorityLabel);
        taskRowInfo.appendChild(taskPriority);
        taskRowInfo.appendChild(taskStatus);
        taskRowImg.appendChild(taskIcon);
        taskRowText.appendChild(taskDescription);
        taskRowActions.appendChild(btnDeleteTask);
        taskRow.appendChild(taskRowInfo);
        taskRow.appendChild(taskRowImg);
        taskRow.appendChild(taskRowText);
        taskRow.appendChild(taskRowActions);
        taskRow.addEventListener("click", (event) => {
          todo.getTask(+taskRow.dataset.id).checked
            ? todo.uncheckTask(+taskRow.dataset.id)
            : todo.checkTask(+taskRow.dataset.id);
          screenCleanUp(".project-body");
          this.renderTodoContentTodo(pId, tId);
          todoBarControl.renderTodoBar(pId);
          event.stopPropagation();
        });
        taskList.appendChild(taskRow);
      }
      todoHeader.appendChild(newTask);
      todoContentInfo.appendChild(taskList);
    }
    projectBody.appendChild(todoContentInfo);
    this.currentProject = pId;
    this.currentTodo = tId;
  },
  refreshTodoContent(id) {
    if (this.currentProject == id) {
      screenCleanUp(".todo-content");
    }
  },
  refreshTodoContentInfo(id) {
    if (this.currentTodo == id) {
      screenCleanUp(".project-body");
      this.currentTodo == "none";
    }
  },
  showNewTaskForm(pId, tId) {
    let todoHeader = document.querySelector(".todo-header");
    todoHeader.appendChild((0,_formNewTask__WEBPACK_IMPORTED_MODULE_5__.taskForm)(pId, tId));
    this.showingTaskForm = true;
  },

  showTodoEditForm(pId, tId) {
    let todoHeader = document.querySelector(".todo-header");
    todoHeader.appendChild((0,_formEditTodo__WEBPACK_IMPORTED_MODULE_6__.todoEdit)(pId, tId));
    this.showingTodoEditForm = true;
  },

  deselectPreviousTodo() {
    let previous = this.currentTodo;
    let todoList = document.querySelector(".todo-list");
    let todoArray = todoList.children;
    for (let i = 0; i < todoArray.length; i++) {
      if (+todoArray[i].dataset.id == previous) {
        todoArray[i].classList.remove("selected-todo");
      }
    }
  },
};

function addToDo(id) {
  let project = _app__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(id);
  project.createTodo();
  todoContentControl.renderTodoContentProject(id);
  todoBarControl.renderTodoBar(id, true);
}

function deleteProject(id) {
  _app__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(id);
  projectsBarControl.refreshProjectsBar();
  todoBarControl.refreshTodoBar(id);
  todoContentControl.refreshTodoContent(id);
  if (_app__WEBPACK_IMPORTED_MODULE_1__["default"].projects.length < 1) {
    todoBarControl.currentProject = "none";
  }
}

function deleteTodo(todoId) {
  _app__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(todoBarControl.currentProject).deleteTodo(todoId);
  todoBarControl.renderTodoBar(todoBarControl.currentProject);
  todoContentControl.refreshTodoContentInfo(todoId);
}

function addTask(projectId, todoId, description, priority) {
  _app__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(projectId).getTodo(todoId).createTask(description, priority);
  screenCleanUp(".project-body");
  todoContentControl.renderTodoContentTodo(projectId, todoId);
  todoBarControl.renderTodoBar(projectId);
  todoContentControl.showingTaskForm = false;
}

function changeTodoName(pId, tId, todoName) {
  _app__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(pId).getTodo(tId).changeName(todoName);
  screenCleanUp(".project-body");
  todoContentControl.renderTodoContentTodo(pId, tId);
  todoBarControl.renderTodoBar(pId);
  todoContentControl.showingTodoEditForm = false;
}

function screenCleanUp(selector) {
  let screen = document.querySelector(selector);
  if (screen) {
    while (screen.firstChild) {
      screen.removeChild(screen.firstChild);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (btnNewProject);



/***/ }),

/***/ "./src/screenProjectCard.js":
/*!**********************************!*\
  !*** ./src/screenProjectCard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeProjectCard": () => (/* binding */ makeProjectCard)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _screenController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screenController */ "./src/screenController.js");



function makeProjectCard(project) {
  let projectDiv = document.createElement("div");
  projectDiv.setAttribute("data-id", `${project.id}`);
  projectDiv.classList.add("project");
  if (_screenController__WEBPACK_IMPORTED_MODULE_1__.todoBarControl.currentProject == project.id) {
    projectDiv.classList.add("selected-project");
  }
  let projectName = document.createElement("p");
  projectName.innerText = project.name;
  let deadlineLabel = document.createElement("p");
  deadlineLabel.innerText = "Deadline: ";
  let projectDeadline = document.createElement("p");
  projectDeadline.innerText = project.deadline;
  let dueLabel = document.createElement("p");
  dueLabel.innerText = "Due in: ";
  let projectInfo = document.createElement("div");
  projectInfo.classList.add("project-info");
  projectInfo.appendChild(projectName);
  projectInfo.appendChild(deadlineLabel);
  projectInfo.appendChild(projectDeadline);
  projectInfo.appendChild(dueLabel);
  projectDiv.appendChild(projectInfo);
  let projectActions = document.createElement("div");
  projectActions.classList.add("project-actions");
  let btnDelete = document.createElement("button");
  btnDelete.setAttribute("data-id", `${project.id}`);
  btnDelete.innerText = "Delete";
  btnDelete.addEventListener("click", (event) => {
    event.stopPropagation();
    (0,_screenController__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(+btnDelete.dataset.id);
  });
  projectActions.appendChild(btnDelete);
  projectDiv.appendChild(projectActions);
  projectDiv.setAttribute("data-id", `${project.id}`);
  projectDiv.addEventListener("click", (event) => {
    event.stopPropagation();
    if (_screenController__WEBPACK_IMPORTED_MODULE_1__.todoBarControl.currentProject == "none") {
      projectDiv.classList.add("selected-project");
    }
    if (_screenController__WEBPACK_IMPORTED_MODULE_1__.todoBarControl.currentProject !== +projectDiv.dataset.id) {
      _screenController__WEBPACK_IMPORTED_MODULE_1__.projectsBarControl.deselectPreviousProject();
      projectDiv.classList.add("selected-project");
    }
    _screenController__WEBPACK_IMPORTED_MODULE_1__.todoBarControl.renderTodoBar(project.id);
    _screenController__WEBPACK_IMPORTED_MODULE_1__.todoContentControl.renderTodoContentProject(+projectDiv.dataset.id);
  });
  return projectDiv;
}




/***/ }),

/***/ "./src/screenTodoCard.js":
/*!*******************************!*\
  !*** ./src/screenTodoCard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTodoCard": () => (/* binding */ makeTodoCard)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _screenController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screenController */ "./src/screenController.js");



function makeTodoCard(projectId, todo) {
  let todoDiv = document.createElement("div");
  todoDiv.setAttribute("data-id", `${todo.id}`);
  todoDiv.classList.add("todo-div");
  todoDiv.addEventListener("click", (event) => {
    event.stopPropagation();
    (0,_screenController__WEBPACK_IMPORTED_MODULE_1__.screenCleanUp)(".project-body");
    if (_screenController__WEBPACK_IMPORTED_MODULE_1__.todoContentControl.currentTodo !== todo.id) {
      _screenController__WEBPACK_IMPORTED_MODULE_1__.todoContentControl.deselectPreviousTodo();
      todoDiv.classList.add("selected-todo");
    } else {
      todoDiv.classList.add("selected-todo");
    }
    _screenController__WEBPACK_IMPORTED_MODULE_1__.todoContentControl.renderTodoContentTodo(projectId, todo.id);
  });
  let todoInfo = document.createElement("div");
  let todoActions = document.createElement("div");
  let todoName = document.createElement("p");
  todoName.innerText = todo.name;
  let todoDeadline = document.createElement("p");
  todoDeadline.innerText = todo.deadline;
  let taskNumberRow = document.createElement("div");
  let tasksLabel = document.createElement("p");
  tasksLabel.innerText = "Tasks: ";
  let todoTasks = document.createElement("p");
  todoTasks.innerText = todo.tasks.length;
  taskNumberRow.appendChild(tasksLabel);
  taskNumberRow.appendChild(todoTasks);
  let completionRow = document.createElement("div");
  let completionLabel = document.createElement("p");
  let completion = document.createElement("p");
  completionRow.appendChild(completionLabel);
  completionRow.appendChild(completion);
  let completed = todo.tasks.filter((t) => t.checked);
  let completedTotal = completed.length;
  if (todo.tasks.length > 0) {
    let completedPercentage =
      Math.round((completedTotal / todo.tasks.length) * 10000) / 100;
    completion.innerText = `${completedPercentage} %`;
    completionLabel.innerText = "Completion: ";
  }
  let btnDelete = document.createElement("button");
  btnDelete.innerText = "Delete";
  btnDelete.setAttribute("data-id", `${todo.id}`);
  btnDelete.addEventListener("click", (event) => {
    event.stopPropagation();
    _screenController__WEBPACK_IMPORTED_MODULE_1__.todoBarControl.deleteTodo(+btnDelete.dataset.id);
  });
  todoInfo.appendChild(todoName);
  todoInfo.appendChild(todoDeadline);
  todoInfo.appendChild(taskNumberRow);
  if (todo.tasks.length > 0) {
    todoInfo.appendChild(completionRow);
  }
  todoActions.appendChild(btnDelete);
  todoDiv.appendChild(todoInfo);
  todoDiv.appendChild(todoActions);
  return todoDiv;
}




/***/ }),

/***/ "./src/storageManagement.js":
/*!**********************************!*\
  !*** ./src/storageManagement.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");





const storageManagement = {
  storageProjects: [],
  initialLoad() {
    this.storageProjects = JSON.parse(localStorage.getItem("projects"));
    let project = (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])();
    let projectPrototype = Object.getPrototypeOf(project);
    let todo = (0,_todo__WEBPACK_IMPORTED_MODULE_2__["default"])();
    let todoPrototype = Object.getPrototypeOf(todo);
    let task = (0,_task__WEBPACK_IMPORTED_MODULE_3__["default"])();
    let taskPrototype = Object.getPrototypeOf(task);

    this.storageProjects.forEach((project) => {
      Object.setPrototypeOf(project, projectPrototype);
      project.todos.forEach((todo) => {
        Object.setPrototypeOf(todo, todoPrototype);
        todo.tasks.forEach((task) => {
          Object.setPrototypeOf(task, taskPrototype);
        });
      });
    });
    return this.storageProjects;
  },
  save() {
    localStorage.setItem("projects", JSON.stringify(_app__WEBPACK_IMPORTED_MODULE_1__["default"].projects));
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageManagement);


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const Task = (description, priority, id) => {
  const proto = {
    check() {},
    uncheck() {},
  };
  return Object.assign(
    Object.create(proto),
    { description },
    { priority },
    { id },
    { checked: false }
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _storageManagement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageManagement */ "./src/storageManagement.js");




const Todo = (name, deadline, id) => {
  const proto = {
    createTask(description, priority) {
      let id = this.tasks.length;
      let tasksSorted = this.tasks.sort((a, b) => a - b);
      for (let i = 0; i < tasksSorted.length; i++) {
        if (id == tasksSorted[i].id) {
          id++;
        }
      }
      let task = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__["default"])(description, priority, id);
      this.tasks.push(task);
      _storageManagement__WEBPACK_IMPORTED_MODULE_2__["default"].save();
    },
    getTasks() {
      return this.tasks;
    },
    getTask(id) {
      let task = this.tasks.filter((t) => t.id == id)[0];
      return task;
    },
    changeName(newName) {
      this.name = newName;
      _storageManagement__WEBPACK_IMPORTED_MODULE_2__["default"].save();
    },
    changeTaskDescription(description, id) {
      let task = this.getTask(id);
      task.description = description;
      _storageManagement__WEBPACK_IMPORTED_MODULE_2__["default"].save();
    },
    changeTaskPriority(priority, id) {
      let task = this.getTask(id);
      task.priority = priority;
      _storageManagement__WEBPACK_IMPORTED_MODULE_2__["default"].save();
    },
    checkTask(id) {
      let task = this.getTask(id);
      task.checked = true;
      _storageManagement__WEBPACK_IMPORTED_MODULE_2__["default"].save();
    },
    uncheckTask(id) {
      let task = this.getTask(id);
      task.checked = false;
      _storageManagement__WEBPACK_IMPORTED_MODULE_2__["default"].save();
    },
    deleteTask(id) {
      let newTasks = this.tasks.filter((t) => t.id !== id);
      this.tasks = newTasks;
      _storageManagement__WEBPACK_IMPORTED_MODULE_2__["default"].save();
    },
  };
  return Object.assign(
    Object.create(proto),
    { tasks: [] },
    { name },
    { deadline },
    { id }
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./src/icon-checked.svg":
/*!******************************!*\
  !*** ./src/icon-checked.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8e04c405b5bd3680a3b.svg";

/***/ }),

/***/ "./src/icon-unchecked.svg":
/*!********************************!*\
  !*** ./src/icon-unchecked.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "072c9ab04fe78db11ea0.svg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _screenController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screenController */ "./src/screenController.js");
/* harmony import */ var _formNewProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formNewProject */ "./src/formNewProject.js");
/* harmony import */ var _storageManagement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storageManagement */ "./src/storageManagement.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ "./src/app.js");







const body = document.querySelector("body");

const navBar = document.createElement("nav");
navBar.appendChild(_screenController__WEBPACK_IMPORTED_MODULE_1__["default"]);
navBar.appendChild(_formNewProject__WEBPACK_IMPORTED_MODULE_2__["default"]);
body.appendChild(navBar);

const projectsBar = document.createElement("div");
projectsBar.classList.add("projects-bar");
body.appendChild(projectsBar);

const todoBar = document.createElement("div");
todoBar.classList.add("todo-bar");
body.appendChild(todoBar);

const todoContent = document.createElement("div");
todoContent.classList.add("todo-content");
body.appendChild(todoContent);

if (!localStorage.getItem("projects")) {
  console.log("testing localstorage: nothing");
  localStorage.setItem("projects");
} else {
  console.log("testing localstorage: something");
  _app__WEBPACK_IMPORTED_MODULE_4__["default"].projects = _storageManagement__WEBPACK_IMPORTED_MODULE_3__["default"].initialLoad();
  _screenController__WEBPACK_IMPORTED_MODULE_1__.projectsBarControl.refreshProjectsBar();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGdCQUFnQixpQkFBaUIsMkJBQTJCLEdBQUcsc0dBQXNHLDRCQUE0QixHQUFHLFVBQVUsa0JBQWtCLG1DQUFtQyxxQ0FBcUMsa0JBQWtCLEdBQUcsU0FBUyxxQkFBcUIsR0FBRyxtQkFBbUIsa0JBQWtCLG1FQUFtRSxhQUFhLG1CQUFtQix3QkFBd0IscUJBQXFCLGtCQUFrQixHQUFHLHFCQUFxQix1QkFBdUIsR0FBRywyQkFBMkIscUJBQXFCLEdBQUcsK0JBQStCLHVCQUF1QixHQUFHLG9DQUFvQyxzQkFBc0IsZ0JBQWdCLEdBQUcsNkNBQTZDLGlCQUFpQixHQUFHLGVBQWUscUJBQXFCLGtCQUFrQixHQUFHLHVCQUF1Qix3Q0FBd0MsR0FBRyxjQUFjLGlCQUFpQix1QkFBdUIsdUJBQXVCLGtCQUFrQixnQ0FBZ0MscUJBQXFCLGdCQUFnQixxQkFBcUIsc0JBQXNCLEdBQUcsb0JBQW9CLG9CQUFvQixpQ0FBaUMsOEJBQThCLGtDQUFrQyxHQUFHLDZCQUE2QixVQUFVLDBDQUEwQyxrQkFBa0IsS0FBSyxHQUFHLG1CQUFtQixrQkFBa0IsbUNBQW1DLG9DQUFvQyxzQkFBc0IsR0FBRyxtQ0FBbUMsc0JBQXNCLHlCQUF5QixxQkFBcUIsR0FBRyxxRUFBcUUsc0JBQXNCLEdBQUcscUVBQXFFLHNCQUFzQixHQUFHLHNCQUFzQixrQkFBa0IsR0FBRyxxQkFBcUIsb0JBQW9CLGdEQUFnRCxnQkFBZ0IsR0FBRyxvQkFBb0IsZ0RBQWdELEdBQUcsZ0JBQWdCLGlCQUFpQixtQkFBbUIsd0JBQXdCLHlCQUF5QixHQUFHLGVBQWUsdUJBQXVCLHNCQUFzQixHQUFHLHFCQUFxQixrQkFBa0IsZ0JBQWdCLEdBQUcscUNBQXFDLHNCQUFzQixHQUFHLGdFQUFnRSxrQkFBa0Isd0JBQXdCLEdBQUcsMkdBQTJHLHdCQUF3Qix1QkFBdUIsR0FBRyxvQ0FBb0Msb0JBQW9CLEdBQUcsZ0JBQWdCLGtCQUFrQixHQUFHLHNCQUFzQixzQkFBc0Isc0JBQXNCLHVCQUF1QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRywrQkFBK0Isc0JBQXNCLHVCQUF1QixHQUFHLDJCQUEyQixzQkFBc0IsR0FBRyxlQUFlLHNCQUFzQix1QkFBdUIsdUJBQXVCLGlCQUFpQixHQUFHLGVBQWUsZ0JBQWdCLHlCQUF5Qix1QkFBdUIsa0JBQWtCLDRDQUE0QyxHQUFHLHFCQUFxQixvQkFBb0IsR0FBRywrRkFBK0Ysa0JBQWtCLGdCQUFnQix1QkFBdUIsR0FBRyx3QkFBd0Isc0JBQXNCLEdBQUcsb0NBQW9DLHNCQUFzQixzQkFBc0IsR0FBRyxxQ0FBcUMsc0JBQXNCLEdBQUcscUNBQXFDLHNCQUFzQixzQkFBc0IsR0FBRyxvQkFBb0Isc0JBQXNCLEdBQUcsd0JBQXdCLHVCQUF1QixHQUFHLGdDQUFnQyx1QkFBdUIseUJBQXlCLEdBQUcsZ0JBQWdCLGVBQWUsZ0JBQWdCLHVCQUF1QixHQUFHLG1CQUFtQixxQkFBcUIsc0JBQXNCLHVCQUF1QixHQUFHLHdCQUF3QixtQkFBbUIsR0FBRyxpQkFBaUIsb0JBQW9CLHNCQUFzQixHQUFHLFNBQVMsZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE9BQU8sYUFBYSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxTQUFTLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSw2QkFBNkIsZ0JBQWdCLGlCQUFpQiwyQkFBMkIsR0FBRyxzR0FBc0csNEJBQTRCLEdBQUcsVUFBVSxrQkFBa0IsbUNBQW1DLHFDQUFxQyxrQkFBa0IsR0FBRyxTQUFTLHFCQUFxQixHQUFHLG1CQUFtQixrQkFBa0IsbUVBQW1FLGFBQWEsbUJBQW1CLHdCQUF3QixxQkFBcUIsa0JBQWtCLEdBQUcscUJBQXFCLHVCQUF1QixHQUFHLDJCQUEyQixxQkFBcUIsR0FBRywrQkFBK0IsdUJBQXVCLEdBQUcsb0NBQW9DLHNCQUFzQixnQkFBZ0IsR0FBRyw2Q0FBNkMsaUJBQWlCLEdBQUcsZUFBZSxxQkFBcUIsa0JBQWtCLEdBQUcsdUJBQXVCLHdDQUF3QyxHQUFHLGNBQWMsaUJBQWlCLHVCQUF1Qix1QkFBdUIsa0JBQWtCLGdDQUFnQyxxQkFBcUIsZ0JBQWdCLHFCQUFxQixzQkFBc0IsR0FBRyxvQkFBb0Isb0JBQW9CLGlDQUFpQyw4QkFBOEIsa0NBQWtDLEdBQUcsNkJBQTZCLFVBQVUsMENBQTBDLGtCQUFrQixLQUFLLEdBQUcsbUJBQW1CLGtCQUFrQixtQ0FBbUMsb0NBQW9DLHNCQUFzQixHQUFHLG1DQUFtQyxzQkFBc0IseUJBQXlCLHFCQUFxQixHQUFHLHFFQUFxRSxzQkFBc0IsR0FBRyxxRUFBcUUsc0JBQXNCLEdBQUcsc0JBQXNCLGtCQUFrQixHQUFHLHFCQUFxQixvQkFBb0IsZ0RBQWdELGdCQUFnQixHQUFHLG9CQUFvQixnREFBZ0QsR0FBRyxnQkFBZ0IsaUJBQWlCLG1CQUFtQix3QkFBd0IseUJBQXlCLEdBQUcsZUFBZSx1QkFBdUIsc0JBQXNCLEdBQUcscUJBQXFCLGtCQUFrQixnQkFBZ0IsR0FBRyxxQ0FBcUMsc0JBQXNCLEdBQUcsZ0VBQWdFLGtCQUFrQix3QkFBd0IsR0FBRywyR0FBMkcsd0JBQXdCLHVCQUF1QixHQUFHLG9DQUFvQyxvQkFBb0IsR0FBRyxnQkFBZ0Isa0JBQWtCLEdBQUcsc0JBQXNCLHNCQUFzQixzQkFBc0IsdUJBQXVCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLCtCQUErQixzQkFBc0IsdUJBQXVCLEdBQUcsMkJBQTJCLHNCQUFzQixHQUFHLGVBQWUsc0JBQXNCLHVCQUF1Qix1QkFBdUIsaUJBQWlCLEdBQUcsZUFBZSxnQkFBZ0IseUJBQXlCLHVCQUF1QixrQkFBa0IsNENBQTRDLEdBQUcscUJBQXFCLG9CQUFvQixHQUFHLCtGQUErRixrQkFBa0IsZ0JBQWdCLHVCQUF1QixHQUFHLHdCQUF3QixzQkFBc0IsR0FBRyxvQ0FBb0Msc0JBQXNCLHNCQUFzQixHQUFHLHFDQUFxQyxzQkFBc0IsR0FBRyxxQ0FBcUMsc0JBQXNCLHNCQUFzQixHQUFHLG9CQUFvQixzQkFBc0IsR0FBRyx3QkFBd0IsdUJBQXVCLEdBQUcsZ0NBQWdDLHVCQUF1Qix5QkFBeUIsR0FBRyxnQkFBZ0IsZUFBZSxnQkFBZ0IsdUJBQXVCLEdBQUcsbUJBQW1CLHFCQUFxQixzQkFBc0IsdUJBQXVCLEdBQUcsd0JBQXdCLG1CQUFtQixHQUFHLGlCQUFpQixvQkFBb0Isc0JBQXNCLEdBQUcscUJBQXFCO0FBQ2hwVTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ1c7QUFDb0I7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBCQUEwQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseUJBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE1BQU07QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0RBQU87QUFDekI7QUFDQSxJQUFJLCtEQUFzQjtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFzQjtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFzQjtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBc0I7QUFDMUIsR0FBRztBQUNIO0FBQ0EsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9ERTtBQUMrQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEVBQUUsaUVBQWM7QUFDaEI7O0FBRW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkM7QUFDTTtBQUM2Qjs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFpQjtBQUNuQixFQUFFLG9GQUFxQztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNOO0FBQ3dCOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEVBQUUsMERBQU87QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVDO0FBQ1E7QUFDdUI7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE1BQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdCQUF3QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvREFBSTtBQUNyQjtBQUNBLE1BQU0sK0RBQXNCO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0RBQXNCO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtEQUFzQjtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTSxNQUFNO0FBQ1osTUFBTSxVQUFVO0FBQ2hCLE1BQU0sSUFBSTtBQUNWLE1BQU07QUFDTjtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNERjtBQUNHO0FBQ21CO0FBQ1c7QUFDTjtBQUNQO0FBQ0M7QUFDTztBQUNKOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHdFQUE0QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3REFBZTtBQUNsQztBQUNBLHdCQUF3QixtRUFBZTtBQUN2QztBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix1REFBYztBQUM5QixvQkFBb0Isa0JBQWtCO0FBQ3RDLHFCQUFxQiw2REFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsSUFBSSx1REFBYztBQUNsQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdURBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsR0FBRztBQUM5QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1REFBYztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHNCQUFzQixrQkFBa0I7QUFDeEM7QUFDQTtBQUNBLDJDQUEyQyxZQUFZO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFlBQVk7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyw4Q0FBVztBQUNsRCxVQUFVO0FBQ1Y7QUFDQSx1Q0FBdUMsZ0RBQWE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwyQkFBMkIsc0RBQVE7QUFDbkM7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSwyQkFBMkIsdURBQVE7QUFDbkM7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGdCQUFnQix1REFBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsMERBQWlCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsdURBQWM7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSx1REFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSx1REFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSxFQUFDO0FBUzNCOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFWbUI7QUFNTzs7QUFFNUI7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0EsTUFBTSw0RUFBNkI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQWE7QUFDakIsR0FBRztBQUNIO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0EsUUFBUSw0RUFBNkI7QUFDckM7QUFDQTtBQUNBLFFBQVEsNEVBQTZCO0FBQ3JDLE1BQU0seUZBQTBDO0FBQ2hEO0FBQ0E7QUFDQSxJQUFJLDJFQUE0QjtBQUNoQyxJQUFJLDBGQUEyQztBQUMvQyxHQUFHO0FBQ0g7QUFDQTs7QUFFMkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekROO0FBS087O0FBRTVCO0FBQ0E7QUFDQSxxQ0FBcUMsUUFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFhO0FBQ2pCLFFBQVEsNkVBQThCO0FBQ3RDLE1BQU0sc0ZBQXVDO0FBQzdDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJLHVGQUF3QztBQUM1QyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxQkFBcUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0EsSUFBSSx3RUFBeUI7QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVRO0FBQ1I7QUFDRTtBQUNBOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvREFBTztBQUN6QjtBQUNBLGVBQWUsaURBQUk7QUFDbkI7QUFDQSxlQUFlLGlEQUFJO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0Esb0RBQW9ELHFEQUFZO0FBQ2hFLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDWjs7QUFFckI7QUFDQTtBQUNBLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsTUFBTSxhQUFhO0FBQ25CLE1BQU0sVUFBVTtBQUNoQixNQUFNLElBQUk7QUFDVixNQUFNO0FBQ047QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQztBQUNRO0FBQ3VCOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdCQUF3QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvREFBSTtBQUNyQjtBQUNBLE1BQU0sK0RBQXNCO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTSwrREFBc0I7QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0RBQXNCO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtEQUFzQjtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrREFBc0I7QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0RBQXNCO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtEQUFzQjtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTSxXQUFXO0FBQ2pCLE1BQU0sTUFBTTtBQUNaLE1BQU0sVUFBVTtBQUNoQixNQUFNO0FBQ047QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hFcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDMEI7QUFDSjtBQUNTO0FBQzVCO0FBQ2dDOztBQUV4RDs7QUFFQTtBQUNBLG1CQUFtQix5REFBYTtBQUNoQyxtQkFBbUIsdURBQVc7QUFDOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRSxxREFBWSxHQUFHLHNFQUE2QjtBQUM5QyxFQUFFLG9GQUFxQztBQUN2QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mb3JtRWRpdFRvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mb3JtTmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Zvcm1OZXdUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmVlbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JlZW5Qcm9qZWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmVlblRvZG9DYXJkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3RvcmFnZU1hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbm5hdixcXG4ucHJvamVjdHMtYmFyLFxcbmZvcm0sXFxuLnByb2plY3QsXFxuLnRvZG8tYmFyLFxcbmJvZHksXFxuLnRvZG8tY29udGVudCxcXG4udG9kby1kaXYsXFxuLnRhc2stcm93IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMTVmcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbm5hdiB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG4ucHJvamVjdHMtYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEzMHB4LCAwLjE0ZnIpKTtcXG4gIGdhcDogMXZ3O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nLWxlZnQ6IDAuOHZ3O1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbi5wcm9qZWN0LWVtcHR5LWRpYWxvZyB7XFxuICBwYWRkaW5nLXRvcDogMnZoO1xcbn1cXG5cXG4ucHJvamVjdC1lbXB0eS1kaWFsb2cgPiBwIHtcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG59XFxuXFxuLnByb2plY3QtZW1wdHktZGlhbG9nID4gYnV0dG9uIHtcXG4gIG1hcmdpbi1yaWdodDogMXZ3O1xcbiAgd2lkdGg6IDVyZW07XFxufVxcblxcbi5wcm9qZWN0LWVtcHR5LWRpYWxvZyBidXR0b246bGFzdC1jaGlsZCB7XFxuICB3aWR0aDogMTJyZW07XFxufVxcblxcbi50b2RvLWJhciB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuXFxuLnNlbGVjdGVkLXByb2plY3Qge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDQ0LCAxMjUsIDIzOSk7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGhlaWdodDogMTV2aDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDRmciAxZnI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMyU7XFxuICBwYWRkaW5nLWxlZnQ6IDUlO1xcbiAgcGFkZGluZy1yaWdodDogNSU7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGFuaW1hdGlvbi1uYW1lOiBib3JkZXItaG92ZXI7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDE3MG1zO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgYm9yZGVyLWhvdmVyIHtcXG4gIDEwMCUge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNDQsIDEyNSwgMjM5KTtcXG4gICAgc2NhbGU6IDEuMDY7XFxuICB9XFxufVxcblxcbi5wcm9qZWN0LWluZm8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiAwLjJ2dztcXG59XFxuXFxuLnByb2plY3QtaW5mbyA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbi5wcm9qZWN0LWluZm8gPiBwOm50aC1jaGlsZCgyKSxcXG4ucHJvamVjdC1pbmZvID4gcDpudGgtY2hpbGQoNCkge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5wcm9qZWN0LWluZm8gPiBwOm50aC1jaGlsZCgzKSxcXG4ucHJvamVjdC1pbmZvID4gcDpudGgtY2hpbGQoNSkge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5wcm9qZWN0LWFjdGlvbnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnRvZG8tZGl2OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjM4LCAxNTksIDIzLCAwLjk4Myk7XFxuICBzY2FsZTogMS4wMztcXG59XFxuXFxuLnNlbGVjdGVkLXRvZG8ge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyMzgsIDE1OSwgMjMsIDAuOTgzKTtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICBoZWlnaHQ6IDczdmg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBhZGRpbmctbGVmdDogMC41dnc7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjV2dztcXG59XFxuXFxuLnRvZG8tZGl2IHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbi10b3A6IDAuN3Z3O1xcbn1cXG5cXG4udG9kby1kaXYgPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDIlO1xcbn1cXG5cXG4udG9kby1kaXYgPiBkaXYgPiBwOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udG9kby1kaXYgPiBkaXYgPiBkaXYsXFxuLnRvZG8tZGl2ID4gZGl2ID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnRvZG8tZGl2ID4gZGl2ID4gcDpudGgtY2hpbGQoMiksXFxuLnRvZG8tZGl2ID4gZGl2ID4gZGl2ID4gcCxcXG4udG9kby1kaXYgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDIpID4gcCB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMXZ3O1xcbiAgbWFyZ2luLWxlZnQ6IDAuN3Z3O1xcbn1cXG5cXG4udG9kby1kaXYgPiBkaXYgcDpudGgtY2hpbGQoMykge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWhlYWRlciA+IHAge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG59XFxuXFxuLnRvZG8taGVhZGVyID4gZGl2ID4gcCB7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbi50b2RvLWhlYWRlciA+IGRpdiBidXR0b24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxdnc7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbi50b2RvLWhlYWRlciA+IGJ1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDF2dztcXG59XFxuXFxuLnRhc2tsaXN0IHtcXG4gIHBhZGRpbmctbGVmdDogMXZ3O1xcbiAgcGFkZGluZy1yaWdodDogMnZ3O1xcbiAgcGFkZGluZy10b3A6IDAuN3Z3O1xcbiAgaGVpZ2h0OiA2MHZoO1xcbn1cXG5cXG4udGFzay1yb3cge1xcbiAgaGVpZ2h0OiA5dmg7XFxuICBtYXJnaW4tYm90dG9tOiAwLjd2dztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnIgMTVmciAyZnI7XFxufVxcblxcbi50YXNrLXJvdzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pY29uLWNvbnRhaW5lcixcXG4udGFzay1yb3ctYWN0aW9ucyxcXG4udGFzay1yb3ctdGV4dCxcXG4udGFzay1yb3ctYWN0aW9ucyxcXG4udGFzay1yb3ctaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLXJvdy10ZXh0ID4gcCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRhc2stcm93LWluZm8gPiBwOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi50YXNrLXJvdy1pbmZvID4gcDpudGgtY2hpbGQoMikge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi50YXNrLXJvdy1pbmZvID4gcDpudGgtY2hpbGQoMykge1xcbiAgbWFyZ2luLXRvcDogMC43dmg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhc2stcm93LWluZm8ge1xcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XFxufVxcblxcbi50YXNrLXJvdy10ZXh0ID4gcCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLXJvdy1hY3Rpb25zID4gYnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1pY29uIHtcXG4gIHdpZHRoOiA2NCU7XFxuICBoZWlnaHQ6IDY0JTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tY29udGVudCB7XFxuICBwYWRkaW5nLXRvcDogMXZoO1xcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XFxuICBwYWRkaW5nLXJpZ2h0OiAxdnc7XFxufVxcblxcbi50b2RvLWNvbnRlbnQtaW5mbyB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Ozs7Ozs7O0VBU0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQ0FBZ0M7RUFDaEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhEQUE4RDtFQUM5RCxRQUFRO0VBQ1IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0UsbUNBQW1DO0lBQ25DLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQ0FBMkM7RUFDM0MsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7Ozs7RUFLRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxubmF2LFxcbi5wcm9qZWN0cy1iYXIsXFxuZm9ybSxcXG4ucHJvamVjdCxcXG4udG9kby1iYXIsXFxuYm9keSxcXG4udG9kby1jb250ZW50LFxcbi50b2RvLWRpdixcXG4udGFzay1yb3cge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmciAxNWZyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubmF2IHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbi5wcm9qZWN0cy1iYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTMwcHgsIDAuMTRmcikpO1xcbiAgZ2FwOiAxdnc7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBhZGRpbmctbGVmdDogMC44dnc7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG59XFxuXFxuLnByb2plY3QtZW1wdHktZGlhbG9nIHtcXG4gIHBhZGRpbmctdG9wOiAydmg7XFxufVxcblxcbi5wcm9qZWN0LWVtcHR5LWRpYWxvZyA+IHAge1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4ucHJvamVjdC1lbXB0eS1kaWFsb2cgPiBidXR0b24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxdnc7XFxuICB3aWR0aDogNXJlbTtcXG59XFxuXFxuLnByb2plY3QtZW1wdHktZGlhbG9nIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIHdpZHRoOiAxMnJlbTtcXG59XFxuXFxuLnRvZG8tYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMy80O1xcbn1cXG5cXG4uc2VsZWN0ZWQtcHJvamVjdCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNDQsIDEyNSwgMjM5KTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNGZyIDFmcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAzJTtcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvcmRlci1ob3ZlcjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTcwbXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBib3JkZXItaG92ZXIge1xcbiAgMTAwJSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig0NCwgMTI1LCAyMzkpO1xcbiAgICBzY2FsZTogMS4wNjtcXG4gIH1cXG59XFxuXFxuLnByb2plY3QtaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDAuMnZ3O1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvID4gcDpmaXJzdC1jaGlsZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuLnByb2plY3QtaW5mbyA+IHA6bnRoLWNoaWxkKDIpLFxcbi5wcm9qZWN0LWluZm8gPiBwOm50aC1jaGlsZCg0KSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLnByb2plY3QtaW5mbyA+IHA6bnRoLWNoaWxkKDMpLFxcbi5wcm9qZWN0LWluZm8gPiBwOm50aC1jaGlsZCg1KSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLnByb2plY3QtYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4udG9kby1kaXY6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyMzgsIDE1OSwgMjMsIDAuOTgzKTtcXG4gIHNjYWxlOiAxLjAzO1xcbn1cXG5cXG4uc2VsZWN0ZWQtdG9kbyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIzOCwgMTU5LCAyMywgMC45ODMpO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gIGhlaWdodDogNzN2aDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjV2dztcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXZ3O1xcbn1cXG5cXG4udG9kby1kaXYge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXRvcDogMC43dnc7XFxufVxcblxcbi50b2RvLWRpdiA+IGRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMiU7XFxufVxcblxcbi50b2RvLWRpdiA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50b2RvLWRpdiA+IGRpdiA+IGRpdixcXG4udG9kby1kaXYgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4udG9kby1kaXYgPiBkaXYgPiBwOm50aC1jaGlsZCgyKSxcXG4udG9kby1kaXYgPiBkaXYgPiBkaXYgPiBwLFxcbi50b2RvLWRpdiA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMikgPiBwIHtcXG4gIG1hcmdpbi1yaWdodDogMC4xdnc7XFxuICBtYXJnaW4tbGVmdDogMC43dnc7XFxufVxcblxcbi50b2RvLWRpdiA+IGRpdiBwOm50aC1jaGlsZCgzKSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5pbnZpc2libGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8taGVhZGVyID4gcCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4udG9kby1oZWFkZXIgPiBkaXYgPiBwIHtcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG59XFxuXFxuLnRvZG8taGVhZGVyID4gZGl2IGJ1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDF2dztcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG59XFxuXFxuLnRvZG8taGVhZGVyID4gYnV0dG9uIHtcXG4gIG1hcmdpbi1yaWdodDogMXZ3O1xcbn1cXG5cXG4udGFza2xpc3Qge1xcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XFxuICBwYWRkaW5nLXJpZ2h0OiAydnc7XFxuICBwYWRkaW5nLXRvcDogMC43dnc7XFxuICBoZWlnaHQ6IDYwdmg7XFxufVxcblxcbi50YXNrLXJvdyB7XFxuICBoZWlnaHQ6IDl2aDtcXG4gIG1hcmdpbi1ib3R0b206IDAuN3Z3O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmciAxNWZyIDJmcjtcXG59XFxuXFxuLnRhc2stcm93OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmljb24tY29udGFpbmVyLFxcbi50YXNrLXJvdy1hY3Rpb25zLFxcbi50YXNrLXJvdy10ZXh0LFxcbi50YXNrLXJvdy1hY3Rpb25zLFxcbi50YXNrLXJvdy1pbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stcm93LXRleHQgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFzay1yb3ctaW5mbyA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLnRhc2stcm93LWluZm8gPiBwOm50aC1jaGlsZCgyKSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLnRhc2stcm93LWluZm8gPiBwOm50aC1jaGlsZCgzKSB7XFxuICBtYXJnaW4tdG9wOiAwLjd2aDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGFzay1yb3ctaW5mbyB7XFxuICBwYWRkaW5nLWxlZnQ6IDF2dztcXG59XFxuXFxuLnRhc2stcm93LXRleHQgPiBwIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stcm93LWFjdGlvbnMgPiBidXR0b24ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWljb24ge1xcbiAgd2lkdGg6IDY0JTtcXG4gIGhlaWdodDogNjQlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udG9kby1jb250ZW50IHtcXG4gIHBhZGRpbmctdG9wOiAxdmg7XFxuICBwYWRkaW5nLWxlZnQ6IDF2dztcXG4gIHBhZGRpbmctcmlnaHQ6IDF2dztcXG59XFxuXFxuLnRvZG8tY29udGVudC1pbmZvIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBzdG9yYWdlTWFuYWdlbWVudCBmcm9tIFwiLi9zdG9yYWdlTWFuYWdlbWVudFwiO1xuXG5jb25zdCBBcHAgPSB7XG4gIHByb2plY3RzOiBbXSxcbiAgZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gIH0sXG4gIGdldFByb2plY3QoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHApID0+IHAuaWQgPT0gaWQpWzBdO1xuICB9LFxuICBjcmVhdGVQcm9qZWN0KG5hbWUsIGRlYWRsaW5lKSB7XG4gICAgbGV0IGlkID0gdGhpcy5wcm9qZWN0cy5sZW5ndGg7XG4gICAgbGV0IHByb2plY3RzU29ydGVkID0gdGhpcy5wcm9qZWN0cy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c1NvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlkID09IHByb2plY3RzU29ydGVkW2ldLmlkKSB7XG4gICAgICAgIGlkKys7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbmFtZSkge1xuICAgICAgbGV0IGNvdW50ID0gMTtcbiAgICAgIGxldCByZWdleCA9IC8oPzw9XlByb2plY3RcXHMpXFxkKyQvO1xuICAgICAgbGV0IG1hdGNoZWRBcnJheSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBtYXRjaGVkID0gdGhpcy5wcm9qZWN0c1tpXS5uYW1lLm1hdGNoKHJlZ2V4KTtcbiAgICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgICBtYXRjaGVkQXJyYXkucHVzaCgrbWF0Y2hlZFswXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG1hdGNoZWRBcnJheS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoZWRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobWF0Y2hlZEFycmF5W2ldID09IGNvdW50KSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbmFtZSA9IGBQcm9qZWN0ICR7Y291bnR9YDtcbiAgICAgIGlmICghZGVhZGxpbmUpIHtcbiAgICAgICAgZGVhZGxpbmUgPSBcIlVua25vd25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHByb2plY3QgPSBQcm9qZWN0KG5hbWUsIGRlYWRsaW5lLCBpZCk7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHN0b3JhZ2VNYW5hZ2VtZW50LnNhdmUoKTtcbiAgfSxcbiAgY2hhbmdlUHJvamVjdE5hbWUoaWQsIG5hbWUpIHtcbiAgICBsZXQgcHJvamVjdEFycmF5ID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHApID0+IHAuaWQgPT0gaWQpO1xuICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdEFycmF5WzBdO1xuICAgIHByb2plY3QubmFtZSA9IG5hbWU7XG4gICAgc3RvcmFnZU1hbmFnZW1lbnQuc2F2ZSgpO1xuICB9LFxuICBjaGFuZ2VQcm9qZWN0RGVhZGxpbmUoaWQsIGRlYWRsaW5lKSB7XG4gICAgbGV0IHByb2plY3RBcnJheSA9IHRoaXMucHJvamVjdHMuZmlsdGVyKChwKSA9PiBwLmlkID09IGlkKTtcbiAgICBsZXQgcHJvamVjdCA9IHByb2plY3RBcnJheVswXTtcbiAgICBwcm9qZWN0LmRlYWRsaW5lID0gZGVhZGxpbmU7XG4gICAgc3RvcmFnZU1hbmFnZW1lbnQuc2F2ZSgpO1xuICB9LFxuICBkZWxldGVQcm9qZWN0KGlkKSB7XG4gICAgbGV0IG5ld1Byb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHApID0+IHAuaWQgIT09IGlkKTtcbiAgICB0aGlzLnByb2plY3RzID0gbmV3UHJvamVjdHM7XG4gICAgc3RvcmFnZU1hbmFnZW1lbnQuc2F2ZSgpO1xuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBjaGFuZ2VUb2RvTmFtZSB9IGZyb20gXCIuL3NjcmVlbkNvbnRyb2xsZXJcIjtcblxuZnVuY3Rpb24gdG9kb0VkaXQocHJvamVjdElkLCB0b2RvSWQpIHtcbiAgbGV0IHRvZG9FZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBsZXQgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBuYW1lTGFiZWwuaW5uZXJUZXh0ID0gXCJUb2RvIG5hbWU6IFwiO1xuICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kby1uYW1lLWlucHV0XCIpO1xuICBsZXQgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLW5hbWUtaW5wdXRcIik7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIGEgbmFtZSBmb3IgdGhpcyBUb2RvIGxpc3RcIik7XG4gIGxldCBidG5TYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuU2F2ZS5pbm5lclRleHQgPSBcIlNhdmUgQ2hhbmdlc1wiO1xuICBidG5TYXZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB0b2RvTmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcbiAgICBoYW5kbGVGb3JtU3VibWl0KHByb2plY3RJZCwgdG9kb0lkLCB0b2RvTmFtZSk7XG4gIH0pO1xuICB0b2RvRWRpdEZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgdG9kb0VkaXRGb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gIHRvZG9FZGl0Rm9ybS5hcHBlbmRDaGlsZChidG5TYXZlKTtcblxuICByZXR1cm4gdG9kb0VkaXRGb3JtO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVGb3JtU3VibWl0KHByb2plY3RJZCwgdG9kb0lkLCB0b2RvTmFtZSkge1xuICBjaGFuZ2VUb2RvTmFtZShwcm9qZWN0SWQsIHRvZG9JZCwgdG9kb05hbWUpO1xufVxuXG5leHBvcnQgeyB0b2RvRWRpdCB9O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0JhckNvbnRyb2wgfSBmcm9tIFwiLi9zY3JlZW5Db250cm9sbGVyXCI7XG5cbmxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xucHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZm9ybVwiKTtcbnByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG5sZXQgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xubmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5hbWUtaW5wdXRcIik7XG5uYW1lTGFiZWwuaW5uZXJUZXh0ID0gXCJQcm9qZWN0J3MgbmFtZTpcIjtcbmxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5uYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYW1lLWlucHV0XCIpO1xubmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgcHJvamVjdCdzIG5hbWVcIik7XG5sZXQgZGVhZGxpbmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmRlYWRsaW5lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVhZGxpbmUtaW5wdXRcIik7XG5kZWFkbGluZUxhYmVsLmlubmVyVGV4dCA9IFwiUHJvamVjdCdzIGRlYWRsaW5lOlwiO1xubGV0IGRlYWRsaW5lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5kZWFkbGluZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xubGV0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5idG5TdWJtaXQuaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcbmJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUHJvamVjdFN1Ym1pdCk7XG5sZXQgYnRuQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmJ0bkNhbmNlbC5pbm5lclRleHQgPSBcIkNhbmNlbFwiO1xuYnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0Q2FuY2VsKTtcbnByb2plY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG5wcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xucHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZGVhZGxpbmVMYWJlbCk7XG5wcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChkZWFkbGluZUlucHV0KTtcbnByb2plY3RGb3JtLmFwcGVuZENoaWxkKGJ0blN1Ym1pdCk7XG5wcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChidG5DYW5jZWwpO1xuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0U3VibWl0KGV2ZW50KSB7XG4gIGxldCBwcm9qZWN0TmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcbiAgbGV0IHByb2plY3REZWFkbGluZSA9IGRlYWRsaW5lSW5wdXQudmFsdWU7XG4gIEFwcC5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLCBwcm9qZWN0RGVhZGxpbmUpO1xuICBwcm9qZWN0c0JhckNvbnRyb2wucmVmcmVzaFByb2plY3RzQmFyKCk7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RDYW5jZWwoZXZlbnQpIHtcbiAgbmFtZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgZGVhZGxpbmVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHByb2plY3RGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJpbnZpc2libGVcIik7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RGb3JtO1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGFkZFRhc2sgfSBmcm9tIFwiLi9zY3JlZW5Db250cm9sbGVyXCI7XG5cbmZ1bmN0aW9uIHRhc2tGb3JtKHByb2plY3RJZCwgdG9kb0lkKSB7XG4gIGxldCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBsZXQgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZGVzY3JpcHRpb25MYWJlbC5pbm5lclRleHQgPSBcIlRhc2s6IFwiO1xuICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgdGFzayB0byBiZSBkb25lXCIpO1xuICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcbiAgcHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSBcIlRhc2sgcHJpb3JpdHk6IFwiO1xuICBsZXQgcHJpb3JpdHlTY3JvbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcmlvcml0eVNjcm9sbC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gIHByaW9yaXR5U2Nyb2xsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlcIik7XG4gIGxldCBwcmlvcml0eVZlcnlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgcHJpb3JpdHlWZXJ5SGlnaC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlZlcnkgSGlnaFwiKTtcbiAgcHJpb3JpdHlWZXJ5SGlnaC5pbm5lclRleHQgPSBcIlZlcnkgSGlnaFwiO1xuICBsZXQgcHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgcHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSGlnaFwiKTtcbiAgcHJpb3JpdHlIaWdoLmlubmVyVGV4dCA9IFwiSGlnaFwiO1xuICBsZXQgcHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBwcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgcHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJNZWRpdW1cIik7XG4gIHByaW9yaXR5TWVkaXVtLmlubmVyVGV4dCA9IFwiTWVkaXVtXCI7XG4gIGxldCBwcmlvcml0eUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTG93XCIpO1xuICBwcmlvcml0eUxvdy5pbm5lclRleHQgPSBcIkxvd1wiO1xuICBwcmlvcml0eVNjcm9sbC5hcHBlbmRDaGlsZChwcmlvcml0eVZlcnlIaWdoKTtcbiAgcHJpb3JpdHlTY3JvbGwuYXBwZW5kQ2hpbGQocHJpb3JpdHlIaWdoKTtcbiAgcHJpb3JpdHlTY3JvbGwuYXBwZW5kQ2hpbGQocHJpb3JpdHlNZWRpdW0pO1xuICBwcmlvcml0eVNjcm9sbC5hcHBlbmRDaGlsZChwcmlvcml0eUxvdyk7XG4gIGxldCBidG5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG5TdWJtaXQuaW5uZXJUZXh0ID0gXCJBZGQgVGFza1wiO1xuICBidG5TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5ID0gcHJpb3JpdHlTY3JvbGwudmFsdWU7XG4gICAgaGFuZGxlVGFza1N1Ym1pdChldmVudCwgcHJvamVjdElkLCB0b2RvSWQsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSk7XG4gIH0pO1xuICBsZXQgYnRuQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuQ2FuY2VsLmlubmVyVGV4dCA9IFwiQ2FuY2VsXCI7XG4gIGJ0bkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiBoYW5kbGVGb3JtQ2FuY2VsKGV2ZW50KSk7XG4gIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5U2Nyb2xsKTtcbiAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoYnRuU3VibWl0KTtcbiAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoYnRuQ2FuY2VsKTtcblxuICByZXR1cm4gbmV3VGFza0Zvcm07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRhc2tTdWJtaXQoZXZlbnQsIHByb2plY3RJZCwgdG9kb0lkLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpIHtcbiAgYWRkVGFzayhwcm9qZWN0SWQsIHRvZG9JZCwgZGVzY3JpcHRpb24sIHByaW9yaXR5KTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRm9ybUNhbmNlbChldmVudCkge1xuICBjb25zb2xlLmxvZyhcImZvcm0gY2FuY2VsXCIpO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5leHBvcnQgeyB0YXNrRm9ybSB9O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG8uanNcIjtcbmltcG9ydCBzdG9yYWdlTWFuYWdlbWVudCBmcm9tIFwiLi9zdG9yYWdlTWFuYWdlbWVudFwiO1xuXG5jb25zdCBQcm9qZWN0ID0gKG5hbWUsIGRlYWRsaW5lLCBpZCkgPT4ge1xuICBjb25zdCBwcm90b1Byb2plY3QgPSB7XG4gICAgY3JlYXRlVG9kbyhuYW1lLCBkZWFkbGluZSkge1xuICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDE7XG4gICAgICAgIGxldCByZWdleCA9IC8oPzw9XlRvZG9cXHMpXFxkKyQvO1xuICAgICAgICBsZXQgbWF0Y2hlZEFycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBtYXRjaGVkID0gdGhpcy50b2Rvc1tpXS5uYW1lLm1hdGNoKHJlZ2V4KTtcbiAgICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgICAgbWF0Y2hlZEFycmF5LnB1c2goK21hdGNoZWRbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtYXRjaGVkQXJyYXkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoZWRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChtYXRjaGVkQXJyYXlbaV0gPT0gY291bnQpIHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG5hbWUgPSBgVG9kbyAke2NvdW50fWA7XG4gICAgICB9XG4gICAgICBsZXQgaWQgPSB0aGlzLnRvZG9zLmxlbmd0aDtcbiAgICAgIGxldCB0b2Rvc1NvcnRlZCA9IHRoaXMudG9kb3Muc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvc1NvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaWQgPT0gdG9kb3NTb3J0ZWRbaV0uaWQpIHtcbiAgICAgICAgICBpZCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgdG9kbyA9IFRvZG8obmFtZSwgZGVhZGxpbmUsIGlkKTtcbiAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICAgIHN0b3JhZ2VNYW5hZ2VtZW50LnNhdmUoKTtcbiAgICB9LFxuICAgIGdldFRvZG8oaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvZG9zLmZpbHRlcigodCkgPT4gdC5pZCA9PSBpZClbMF07XG4gICAgfSxcbiAgICBjaGFuZ2VUb2RvTmFtZShuYW1lLCBpZCkge1xuICAgICAgbGV0IHRvZG8gPSB0aGlzLmdldFRvZG8oaWQpO1xuICAgICAgdG9kby5uYW1lID0gbmFtZTtcbiAgICAgIHN0b3JhZ2VNYW5hZ2VtZW50LnNhdmUoKTtcbiAgICB9LFxuICAgIGRlbGV0ZVRvZG8oaWQpIHtcbiAgICAgIGxldCBmaWx0ZXJlZFRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKHQpID0+IHQuaWQgIT09IGlkKTtcbiAgICAgIHRoaXMudG9kb3MgPSBmaWx0ZXJlZFRvZG9zO1xuICAgICAgc3RvcmFnZU1hbmFnZW1lbnQuc2F2ZSgpO1xuICAgIH0sXG4gIH07XG4gIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgIE9iamVjdC5jcmVhdGUocHJvdG9Qcm9qZWN0KSxcbiAgICB7IG5hbWUgfSxcbiAgICB7IGRlYWRsaW5lIH0sXG4gICAgeyBpZCB9LFxuICAgIHsgdG9kb3M6IFtdIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCBwcm9qZWN0Rm9ybSBmcm9tIFwiLi9mb3JtTmV3UHJvamVjdFwiO1xuaW1wb3J0IHsgbWFrZVByb2plY3RDYXJkIH0gZnJvbSBcIi4vc2NyZWVuUHJvamVjdENhcmRcIjtcbmltcG9ydCB7IG1ha2VUb2RvQ2FyZCB9IGZyb20gXCIuL3NjcmVlblRvZG9DYXJkXCI7XG5pbXBvcnQgeyB0YXNrRm9ybSB9IGZyb20gXCIuL2Zvcm1OZXdUYXNrXCI7XG5pbXBvcnQgeyB0b2RvRWRpdCB9IGZyb20gXCIuL2Zvcm1FZGl0VG9kb1wiO1xuaW1wb3J0IFVuY2hlY2tlZEljb24gZnJvbSBcIi4vaWNvbi11bmNoZWNrZWQuc3ZnXCI7XG5pbXBvcnQgQ2hlY2tlZEljb24gZnJvbSBcIi4vaWNvbi1jaGVja2VkLnN2Z1wiO1xuXG5sZXQgYnRuTmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5idG5OZXdQcm9qZWN0LmlubmVyVGV4dCA9IFwiTmV3IFByb2plY3RcIjtcbmJ0bk5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRvZ2dsZVByb2plY3RGb3JtKCkpO1xuXG5mdW5jdGlvbiB0b2dnbGVQcm9qZWN0Rm9ybSgpIHtcbiAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImludmlzaWJsZVwiKTtcbn1cblxuY29uc3QgcHJvamVjdHNCYXJDb250cm9sID0ge1xuICByZWZyZXNoUHJvamVjdHNCYXIoKSB7XG4gICAgbGV0IHByb2plY3RzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1iYXJcIik7XG4gICAgc2NyZWVuQ2xlYW5VcChcIi5wcm9qZWN0cy1iYXJcIik7XG4gICAgbGV0IHByb2plY3RzID0gQXBwLmdldFByb2plY3RzKCk7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgbGV0IHByb2plY3RDYXJkID0gbWFrZVByb2plY3RDYXJkKHByb2plY3QpO1xuICAgICAgcHJvamVjdHNCYXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuICAgIH0pO1xuICB9LFxuXG4gIGRlc2VsZWN0UHJldmlvdXNQcm9qZWN0KCkge1xuICAgIGxldCBwcmV2aW91cyA9IHRvZG9CYXJDb250cm9sLmN1cnJlbnRQcm9qZWN0O1xuICAgIGxldCBwcm9qZWN0c0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtYmFyXCIpO1xuICAgIGxldCBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0c0Jhci5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCtwcm9qZWN0QXJyYXlbaV0uZGF0YXNldC5pZCA9PSBwcmV2aW91cykge1xuICAgICAgICBwcm9qZWN0QXJyYXlbaV0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLXByb2plY3RcIik7XG4gICAgICB9XG4gICAgfVxuICB9LFxufTtcblxuY29uc3QgdG9kb0JhckNvbnRyb2wgPSB7XG4gIGN1cnJlbnRQcm9qZWN0OiBcIm5vbmVcIixcbiAgcmVuZGVyVG9kb0JhcihpZCwgbmV3VG9kbykge1xuICAgIGxldCB0b2RvQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWJhclwiKTtcbiAgICBzY3JlZW5DbGVhblVwKFwiLnRvZG8tYmFyXCIpO1xuICAgIGxldCBidG5BZGRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG5BZGRUb2RvLmlubmVyVGV4dCA9IFwiTmV3IFRvZG9cIjtcbiAgICBidG5BZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhZGRUb0RvKGlkKSk7XG4gICAgbGV0IHRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvTGlzdC5jbGFzc0xpc3QuYWRkKFwidG9kby1saXN0XCIpO1xuICAgIGxldCB0b2RvcyA9IEFwcC5nZXRQcm9qZWN0KGlkKS50b2RvcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdG9kb0NhcmQgPSBtYWtlVG9kb0NhcmQoaWQsIHRvZG9zW2ldKTtcbiAgICAgIGlmICh0b2RvQ29udGVudENvbnRyb2wuY3VycmVudFRvZG8gPT0gK3RvZG9DYXJkLmRhdGFzZXQuaWQgJiYgIW5ld1RvZG8pIHtcbiAgICAgICAgdG9kb0NhcmQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLXRvZG9cIik7XG4gICAgICB9XG4gICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvQ2FyZCk7XG4gICAgfVxuICAgIHRvZG9CYXIuYXBwZW5kQ2hpbGQoYnRuQWRkVG9kbyk7XG4gICAgdG9kb0Jhci5hcHBlbmRDaGlsZCh0b2RvTGlzdCk7XG4gICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IGlkO1xuICB9LFxuICByZWZyZXNoVG9kb0JhcihpZCkge1xuICAgIGlmIChpZCA9PSB0aGlzLmN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICBzY3JlZW5DbGVhblVwKFwiLnRvZG8tYmFyXCIpO1xuICAgIH1cbiAgfSxcbiAgZGVsZXRlVG9kbyh0b2RvSWQpIHtcbiAgICBBcHAuZ2V0UHJvamVjdCh0aGlzLmN1cnJlbnRQcm9qZWN0KS5kZWxldGVUb2RvKHRvZG9JZCk7XG4gICAgdGhpcy5yZW5kZXJUb2RvQmFyKHRoaXMuY3VycmVudFByb2plY3QpO1xuICAgIHRvZG9Db250ZW50Q29udHJvbC5yZWZyZXNoVG9kb0NvbnRlbnRJbmZvKHRvZG9JZCk7XG4gIH0sXG59O1xuXG5jb25zdCB0b2RvQ29udGVudENvbnRyb2wgPSB7XG4gIGN1cnJlbnRQcm9qZWN0OiBcIlwiLFxuICBjdXJyZW50VG9kbzogXCJub25lXCIsXG4gIHNob3dpbmdUYXNrRm9ybTogZmFsc2UsXG4gIHNob3dpbmdUb2RvRWRpdEZvcm06IGZhbHNlLFxuXG4gIHJlbmRlclRvZG9Db250ZW50UHJvamVjdChpZCkge1xuICAgIHNjcmVlbkNsZWFuVXAoXCIudG9kby1jb250ZW50XCIpO1xuICAgIGxldCB0b2RvQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250ZW50XCIpO1xuICAgIGxldCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgcHJvamVjdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyXCIpO1xuICAgIHByb2plY3RCb2R5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJvZHlcIik7XG4gICAgbGV0IHByb2plY3QgPSBBcHAuZ2V0UHJvamVjdChpZCk7XG4gICAgbGV0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvZG9UaXRsZS5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpO1xuICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgICB0b2RvQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcbiAgICBpZiAodGhpcy5jdXJyZW50UHJvamVjdCAhPT0gaWQpIHtcbiAgICAgIHRoaXMuY3VycmVudFRvZG8gPSBcIm5vbmVcIjtcbiAgICAgIHRoaXMuY3VycmVudFByb2plY3QgPSBpZDtcbiAgICB9XG4gICAgdG9kb0NvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdEJvZHkpO1xuICAgIGlmIChwcm9qZWN0LnRvZG9zLmxlbmd0aCA8IDEpIHtcbiAgICAgIGxldCBlbXB0eURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBlbXB0eURpYWxvZy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1lbXB0eS1kaWFsb2dcIik7XG4gICAgICBsZXQgZW1wdHlDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBlbXB0eUNvbnRlbnQuaW5uZXJUZXh0ID1cbiAgICAgICAgXCJUaGlzIHByb2plY3QgaXMgZW1wdHkuIERvIHlvdSB3YW50IHRvIGFkZCBhIG5ldyBUby1kbyBsaXN0P1wiO1xuICAgICAgZW1wdHlEaWFsb2cuYXBwZW5kQ2hpbGQoZW1wdHlDb250ZW50KTtcbiAgICAgIGxldCBuZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIG5ld1RvZG8uaW5uZXJUZXh0ID0gXCJZZXNcIjtcbiAgICAgIG5ld1RvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFkZFRvRG8oaWQpKTtcbiAgICAgIGxldCBidG5EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnRuRGVsZXRlLmlubmVyVGV4dCA9IFwiRGVsZXRlIFByb2plY3RcIjtcbiAgICAgIGJ0bkRlbGV0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGAke2lkfWApO1xuICAgICAgYnRuRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZVByb2plY3QoK2J0bkRlbGV0ZS5kYXRhc2V0LmlkKTtcbiAgICAgIH0pO1xuICAgICAgZW1wdHlEaWFsb2cuYXBwZW5kQ2hpbGQobmV3VG9kbyk7XG4gICAgICBlbXB0eURpYWxvZy5hcHBlbmRDaGlsZChidG5EZWxldGUpO1xuICAgICAgcHJvamVjdEJvZHkuYXBwZW5kQ2hpbGQoZW1wdHlEaWFsb2cpO1xuICAgICAgdG9kb0NvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdEJvZHkpO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyVG9kb0NvbnRlbnRUb2RvKHBJZCwgdElkKSB7XG4gICAgbGV0IHByb2plY3RCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWJvZHlcIik7XG4gICAgbGV0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9IZWFkZXIuY2xhc3NMaXN0LmFkZChcInRvZG8taGVhZGVyXCIpO1xuICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgcHJvamVjdCA9IEFwcC5nZXRQcm9qZWN0KHBJZCk7XG4gICAgbGV0IHRvZG8gPSBwcm9qZWN0LmdldFRvZG8odElkKTtcbiAgICB0b2RvVGl0bGUuaW5uZXJUZXh0ID0gdG9kby5uYW1lO1xuICAgIHRvZG9IZWFkZXIuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgICBsZXQgYnRuRWRpdFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bkVkaXRUb2RvLmlubmVyVGV4dCA9IFwiRWRpdFwiO1xuICAgIGJ0bkVkaXRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc2hvd2luZ1RvZG9FZGl0Rm9ybSkge1xuICAgICAgICB0aGlzLnNob3dUb2RvRWRpdEZvcm0ocElkLCB0SWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NyZWVuQ2xlYW5VcChcIi5wcm9qZWN0LWJvZHlcIik7XG4gICAgICAgIHRoaXMucmVuZGVyVG9kb0NvbnRlbnRUb2RvKHBJZCwgdElkKTtcbiAgICAgICAgdGhpcy5zaG93aW5nVG9kb0VkaXRGb3JtID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdG9kb0hlYWRlci5hcHBlbmRDaGlsZChidG5FZGl0VG9kbyk7XG4gICAgcHJvamVjdEJvZHkuYXBwZW5kQ2hpbGQodG9kb0hlYWRlcik7XG4gICAgbGV0IHRvZG9Db250ZW50SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0NvbnRlbnRJbmZvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbnRlbnQtaW5mb1wiKTtcbiAgICBwcm9qZWN0Qm9keS5hcHBlbmRDaGlsZCh0b2RvQ29udGVudEluZm8pO1xuICAgIGlmICh0b2RvLnRhc2tzLmxlbmd0aCA8IDEpIHtcbiAgICAgIGxldCBlbXB0eU9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGVtcHR5RGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBlbXB0eURpYWxvZy5pbm5lclRleHQgPVxuICAgICAgICBcIlRoaXMgVG9kbyBsaXN0IGlzIGVtcHR5LiBEbyB5b3Ugd2FudCB0byBhZGQgYSBuZXcgdGFzaz9cIjtcbiAgICAgIGxldCBidG5ZZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnRuWWVzLmlubmVyVGV4dCA9IFwiWWVzXCI7XG4gICAgICBidG5ZZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnNob3dpbmdUYXNrRm9ybSkge1xuICAgICAgICAgIHRoaXMuc2hvd05ld1Rhc2tGb3JtKHBJZCwgdElkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY3JlZW5DbGVhblVwKFwiLnByb2plY3QtYm9keVwiKTtcbiAgICAgICAgICB0aGlzLnJlbmRlclRvZG9Db250ZW50VG9kbyhwSWQsIHRJZCk7XG4gICAgICAgICAgdGhpcy5zaG93aW5nVGFza0Zvcm0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBsZXQgYnRuRGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidG5EZWxldGVUb2RvLmlubmVyVGV4dCA9IFwiRGVsZXRlIFRvZG9cIjtcbiAgICAgIGJ0bkRlbGV0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRlbGV0ZVRvZG8odElkKSk7XG4gICAgICBlbXB0eU9wdGlvbnMuYXBwZW5kQ2hpbGQoZW1wdHlEaWFsb2cpO1xuICAgICAgZW1wdHlPcHRpb25zLmFwcGVuZENoaWxkKGJ0blllcyk7XG4gICAgICBlbXB0eU9wdGlvbnMuYXBwZW5kQ2hpbGQoYnRuRGVsZXRlVG9kbyk7XG4gICAgICB0b2RvSGVhZGVyLmFwcGVuZENoaWxkKGVtcHR5T3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0YXNrcyA9IHRvZG8udGFza3M7XG4gICAgICBsZXQgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBuZXdUYXNrLmlubmVyVGV4dCA9IFwiTmV3IFRhc2tcIjtcbiAgICAgIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnNob3dpbmdUYXNrRm9ybSkge1xuICAgICAgICAgIHRoaXMuc2hvd05ld1Rhc2tGb3JtKHBJZCwgdElkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY3JlZW5DbGVhblVwKFwiLnByb2plY3QtYm9keVwiKTtcbiAgICAgICAgICB0aGlzLnJlbmRlclRvZG9Db250ZW50VG9kbyhwSWQsIHRJZCk7XG4gICAgICAgICAgdGhpcy5zaG93aW5nVGFza0Zvcm0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBsZXQgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZChcInRhc2tsaXN0XCIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGFza1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tSb3cuY2xhc3NMaXN0LmFkZChcInRhc2stcm93XCIpO1xuICAgICAgICB0YXNrUm93LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgYCR7dGFza3NbaV0uaWR9YCk7XG4gICAgICAgIGxldCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRhc2tzW2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9IFwiUHJpb3JpdHk6XCI7XG4gICAgICAgIGxldCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LmlubmVyVGV4dCA9IHRhc2tzW2ldLnByaW9yaXR5O1xuICAgICAgICBsZXQgdGFza1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0YXNrU3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXN0YXR1c1wiKTtcbiAgICAgICAgdGFza3NbaV0uY2hlY2tlZFxuICAgICAgICAgID8gKHRhc2tTdGF0dXMuaW5uZXJUZXh0ID0gXCJEb25lIVwiKVxuICAgICAgICAgIDogKHRhc2tTdGF0dXMuaW5uZXJUZXh0ID0gXCJUbyBiZSBkb25lXCIpO1xuICAgICAgICBsZXQgYnRuRGVsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ0bkRlbGV0ZVRhc2suaW5uZXJUZXh0ID0gXCJEZWxldGVcIjtcbiAgICAgICAgYnRuRGVsZXRlVGFzay5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGAke3Rhc2tzW2ldLmlkfWApO1xuICAgICAgICBidG5EZWxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICB0b2RvLmRlbGV0ZVRhc2soK2J0bkRlbGV0ZVRhc2suZGF0YXNldC5pZCk7XG4gICAgICAgICAgc2NyZWVuQ2xlYW5VcChcIi5wcm9qZWN0LWJvZHlcIik7XG4gICAgICAgICAgdGhpcy5yZW5kZXJUb2RvQ29udGVudFRvZG8ocElkLCB0SWQpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHRhc2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgdGFza0ljb24uY2xhc3NMaXN0LmFkZChcInRhc2staWNvblwiKTtcbiAgICAgICAgaWYgKHRhc2tzW2ldLmNoZWNrZWQpIHtcbiAgICAgICAgICB0YXNrSWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJJY29uIGZvciBjaGVja2VkIHRhc2tcIik7XG4gICAgICAgICAgdGFza0ljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIENoZWNrZWRJY29uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXNrSWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJJY29uIGZvciB1bmNoZWNrZWQgdGFza1wiKTtcbiAgICAgICAgICB0YXNrSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgVW5jaGVja2VkSWNvbik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRhc2tSb3dJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza1Jvd0luZm8uY2xhc3NMaXN0LmFkZChcInRhc2stcm93LWluZm9cIik7XG4gICAgICAgIGxldCB0YXNrUm93SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza1Jvd0ltZy5jbGFzc0xpc3QuYWRkKFwiaWNvbi1jb250YWluZXJcIik7XG4gICAgICAgIGxldCB0YXNrUm93VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tSb3dUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXJvdy10ZXh0XCIpO1xuICAgICAgICBsZXQgdGFza1Jvd0FjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrUm93QWN0aW9ucy5jbGFzc0xpc3QuYWRkKFwidGFzay1yb3ctYWN0aW9uc1wiKTtcbiAgICAgICAgdGFza1Jvd0FjdGlvbnMuY2xhc3NMaXN0LmFkZChcInRhc2stcm93LWFjdGlvbnNcIik7XG4gICAgICAgIHRhc2tSb3dJbmZvLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgICAgICB0YXNrUm93SW5mby5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgICAgICB0YXNrUm93SW5mby5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzKTtcbiAgICAgICAgdGFza1Jvd0ltZy5hcHBlbmRDaGlsZCh0YXNrSWNvbik7XG4gICAgICAgIHRhc2tSb3dUZXh0LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gICAgICAgIHRhc2tSb3dBY3Rpb25zLmFwcGVuZENoaWxkKGJ0bkRlbGV0ZVRhc2spO1xuICAgICAgICB0YXNrUm93LmFwcGVuZENoaWxkKHRhc2tSb3dJbmZvKTtcbiAgICAgICAgdGFza1Jvdy5hcHBlbmRDaGlsZCh0YXNrUm93SW1nKTtcbiAgICAgICAgdGFza1Jvdy5hcHBlbmRDaGlsZCh0YXNrUm93VGV4dCk7XG4gICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQodGFza1Jvd0FjdGlvbnMpO1xuICAgICAgICB0YXNrUm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICB0b2RvLmdldFRhc2soK3Rhc2tSb3cuZGF0YXNldC5pZCkuY2hlY2tlZFxuICAgICAgICAgICAgPyB0b2RvLnVuY2hlY2tUYXNrKCt0YXNrUm93LmRhdGFzZXQuaWQpXG4gICAgICAgICAgICA6IHRvZG8uY2hlY2tUYXNrKCt0YXNrUm93LmRhdGFzZXQuaWQpO1xuICAgICAgICAgIHNjcmVlbkNsZWFuVXAoXCIucHJvamVjdC1ib2R5XCIpO1xuICAgICAgICAgIHRoaXMucmVuZGVyVG9kb0NvbnRlbnRUb2RvKHBJZCwgdElkKTtcbiAgICAgICAgICB0b2RvQmFyQ29udHJvbC5yZW5kZXJUb2RvQmFyKHBJZCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrUm93KTtcbiAgICAgIH1cbiAgICAgIHRvZG9IZWFkZXIuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG4gICAgICB0b2RvQ29udGVudEluZm8uYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xuICAgIH1cbiAgICBwcm9qZWN0Qm9keS5hcHBlbmRDaGlsZCh0b2RvQ29udGVudEluZm8pO1xuICAgIHRoaXMuY3VycmVudFByb2plY3QgPSBwSWQ7XG4gICAgdGhpcy5jdXJyZW50VG9kbyA9IHRJZDtcbiAgfSxcbiAgcmVmcmVzaFRvZG9Db250ZW50KGlkKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFByb2plY3QgPT0gaWQpIHtcbiAgICAgIHNjcmVlbkNsZWFuVXAoXCIudG9kby1jb250ZW50XCIpO1xuICAgIH1cbiAgfSxcbiAgcmVmcmVzaFRvZG9Db250ZW50SW5mbyhpZCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRUb2RvID09IGlkKSB7XG4gICAgICBzY3JlZW5DbGVhblVwKFwiLnByb2plY3QtYm9keVwiKTtcbiAgICAgIHRoaXMuY3VycmVudFRvZG8gPT0gXCJub25lXCI7XG4gICAgfVxuICB9LFxuICBzaG93TmV3VGFza0Zvcm0ocElkLCB0SWQpIHtcbiAgICBsZXQgdG9kb0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1oZWFkZXJcIik7XG4gICAgdG9kb0hlYWRlci5hcHBlbmRDaGlsZCh0YXNrRm9ybShwSWQsIHRJZCkpO1xuICAgIHRoaXMuc2hvd2luZ1Rhc2tGb3JtID0gdHJ1ZTtcbiAgfSxcblxuICBzaG93VG9kb0VkaXRGb3JtKHBJZCwgdElkKSB7XG4gICAgbGV0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8taGVhZGVyXCIpO1xuICAgIHRvZG9IZWFkZXIuYXBwZW5kQ2hpbGQodG9kb0VkaXQocElkLCB0SWQpKTtcbiAgICB0aGlzLnNob3dpbmdUb2RvRWRpdEZvcm0gPSB0cnVlO1xuICB9LFxuXG4gIGRlc2VsZWN0UHJldmlvdXNUb2RvKCkge1xuICAgIGxldCBwcmV2aW91cyA9IHRoaXMuY3VycmVudFRvZG87XG4gICAgbGV0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWxpc3RcIik7XG4gICAgbGV0IHRvZG9BcnJheSA9IHRvZG9MaXN0LmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoK3RvZG9BcnJheVtpXS5kYXRhc2V0LmlkID09IHByZXZpb3VzKSB7XG4gICAgICAgIHRvZG9BcnJheVtpXS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtdG9kb1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBhZGRUb0RvKGlkKSB7XG4gIGxldCBwcm9qZWN0ID0gQXBwLmdldFByb2plY3QoaWQpO1xuICBwcm9qZWN0LmNyZWF0ZVRvZG8oKTtcbiAgdG9kb0NvbnRlbnRDb250cm9sLnJlbmRlclRvZG9Db250ZW50UHJvamVjdChpZCk7XG4gIHRvZG9CYXJDb250cm9sLnJlbmRlclRvZG9CYXIoaWQsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KGlkKSB7XG4gIEFwcC5kZWxldGVQcm9qZWN0KGlkKTtcbiAgcHJvamVjdHNCYXJDb250cm9sLnJlZnJlc2hQcm9qZWN0c0JhcigpO1xuICB0b2RvQmFyQ29udHJvbC5yZWZyZXNoVG9kb0JhcihpZCk7XG4gIHRvZG9Db250ZW50Q29udHJvbC5yZWZyZXNoVG9kb0NvbnRlbnQoaWQpO1xuICBpZiAoQXBwLnByb2plY3RzLmxlbmd0aCA8IDEpIHtcbiAgICB0b2RvQmFyQ29udHJvbC5jdXJyZW50UHJvamVjdCA9IFwibm9uZVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG8odG9kb0lkKSB7XG4gIEFwcC5nZXRQcm9qZWN0KHRvZG9CYXJDb250cm9sLmN1cnJlbnRQcm9qZWN0KS5kZWxldGVUb2RvKHRvZG9JZCk7XG4gIHRvZG9CYXJDb250cm9sLnJlbmRlclRvZG9CYXIodG9kb0JhckNvbnRyb2wuY3VycmVudFByb2plY3QpO1xuICB0b2RvQ29udGVudENvbnRyb2wucmVmcmVzaFRvZG9Db250ZW50SW5mbyh0b2RvSWQpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKHByb2plY3RJZCwgdG9kb0lkLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpIHtcbiAgQXBwLmdldFByb2plY3QocHJvamVjdElkKS5nZXRUb2RvKHRvZG9JZCkuY3JlYXRlVGFzayhkZXNjcmlwdGlvbiwgcHJpb3JpdHkpO1xuICBzY3JlZW5DbGVhblVwKFwiLnByb2plY3QtYm9keVwiKTtcbiAgdG9kb0NvbnRlbnRDb250cm9sLnJlbmRlclRvZG9Db250ZW50VG9kbyhwcm9qZWN0SWQsIHRvZG9JZCk7XG4gIHRvZG9CYXJDb250cm9sLnJlbmRlclRvZG9CYXIocHJvamVjdElkKTtcbiAgdG9kb0NvbnRlbnRDb250cm9sLnNob3dpbmdUYXNrRm9ybSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUb2RvTmFtZShwSWQsIHRJZCwgdG9kb05hbWUpIHtcbiAgQXBwLmdldFByb2plY3QocElkKS5nZXRUb2RvKHRJZCkuY2hhbmdlTmFtZSh0b2RvTmFtZSk7XG4gIHNjcmVlbkNsZWFuVXAoXCIucHJvamVjdC1ib2R5XCIpO1xuICB0b2RvQ29udGVudENvbnRyb2wucmVuZGVyVG9kb0NvbnRlbnRUb2RvKHBJZCwgdElkKTtcbiAgdG9kb0JhckNvbnRyb2wucmVuZGVyVG9kb0JhcihwSWQpO1xuICB0b2RvQ29udGVudENvbnRyb2wuc2hvd2luZ1RvZG9FZGl0Rm9ybSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzY3JlZW5DbGVhblVwKHNlbGVjdG9yKSB7XG4gIGxldCBzY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgaWYgKHNjcmVlbikge1xuICAgIHdoaWxlIChzY3JlZW4uZmlyc3RDaGlsZCkge1xuICAgICAgc2NyZWVuLnJlbW92ZUNoaWxkKHNjcmVlbi5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYnRuTmV3UHJvamVjdDtcbmV4cG9ydCB7XG4gIHNjcmVlbkNsZWFuVXAsXG4gIGRlbGV0ZVByb2plY3QsXG4gIGFkZFRhc2ssXG4gIGNoYW5nZVRvZG9OYW1lLFxuICBwcm9qZWN0c0JhckNvbnRyb2wsXG4gIHRvZG9CYXJDb250cm9sLFxuICB0b2RvQ29udGVudENvbnRyb2wsXG59O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7XG4gIHRvZG9Db250ZW50Q29udHJvbCxcbiAgdG9kb0JhckNvbnRyb2wsXG4gIGRlbGV0ZVByb2plY3QsXG4gIHByb2plY3RzQmFyQ29udHJvbCxcbn0gZnJvbSBcIi4vc2NyZWVuQ29udHJvbGxlclwiO1xuXG5mdW5jdGlvbiBtYWtlUHJvamVjdENhcmQocHJvamVjdCkge1xuICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBgJHtwcm9qZWN0LmlkfWApO1xuICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICBpZiAodG9kb0JhckNvbnRyb2wuY3VycmVudFByb2plY3QgPT0gcHJvamVjdC5pZCkge1xuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLXByb2plY3RcIik7XG4gIH1cbiAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3ROYW1lLmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcbiAgbGV0IGRlYWRsaW5lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGVhZGxpbmVMYWJlbC5pbm5lclRleHQgPSBcIkRlYWRsaW5lOiBcIjtcbiAgbGV0IHByb2plY3REZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcm9qZWN0RGVhZGxpbmUuaW5uZXJUZXh0ID0gcHJvamVjdC5kZWFkbGluZTtcbiAgbGV0IGR1ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGR1ZUxhYmVsLmlubmVyVGV4dCA9IFwiRHVlIGluOiBcIjtcbiAgbGV0IHByb2plY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdEluZm8uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW5mb1wiKTtcbiAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChkZWFkbGluZUxhYmVsKTtcbiAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQocHJvamVjdERlYWRsaW5lKTtcbiAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQoZHVlTGFiZWwpO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbmZvKTtcbiAgbGV0IHByb2plY3RBY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdEFjdGlvbnMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtYWN0aW9uc1wiKTtcbiAgbGV0IGJ0bkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bkRlbGV0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGAke3Byb2plY3QuaWR9YCk7XG4gIGJ0bkRlbGV0ZS5pbm5lclRleHQgPSBcIkRlbGV0ZVwiO1xuICBidG5EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGRlbGV0ZVByb2plY3QoK2J0bkRlbGV0ZS5kYXRhc2V0LmlkKTtcbiAgfSk7XG4gIHByb2plY3RBY3Rpb25zLmFwcGVuZENoaWxkKGJ0bkRlbGV0ZSk7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdEFjdGlvbnMpO1xuICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgYCR7cHJvamVjdC5pZH1gKTtcbiAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRvZG9CYXJDb250cm9sLmN1cnJlbnRQcm9qZWN0ID09IFwibm9uZVwiKSB7XG4gICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1wcm9qZWN0XCIpO1xuICAgIH1cbiAgICBpZiAodG9kb0JhckNvbnRyb2wuY3VycmVudFByb2plY3QgIT09ICtwcm9qZWN0RGl2LmRhdGFzZXQuaWQpIHtcbiAgICAgIHByb2plY3RzQmFyQ29udHJvbC5kZXNlbGVjdFByZXZpb3VzUHJvamVjdCgpO1xuICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtcHJvamVjdFwiKTtcbiAgICB9XG4gICAgdG9kb0JhckNvbnRyb2wucmVuZGVyVG9kb0Jhcihwcm9qZWN0LmlkKTtcbiAgICB0b2RvQ29udGVudENvbnRyb2wucmVuZGVyVG9kb0NvbnRlbnRQcm9qZWN0KCtwcm9qZWN0RGl2LmRhdGFzZXQuaWQpO1xuICB9KTtcbiAgcmV0dXJuIHByb2plY3REaXY7XG59XG5cbmV4cG9ydCB7IG1ha2VQcm9qZWN0Q2FyZCB9O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7XG4gIHNjcmVlbkNsZWFuVXAsXG4gIHRvZG9Db250ZW50Q29udHJvbCxcbiAgdG9kb0JhckNvbnRyb2wsXG59IGZyb20gXCIuL3NjcmVlbkNvbnRyb2xsZXJcIjtcblxuZnVuY3Rpb24gbWFrZVRvZG9DYXJkKHByb2plY3RJZCwgdG9kbykge1xuICBsZXQgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9EaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBgJHt0b2RvLmlkfWApO1xuICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRpdlwiKTtcbiAgdG9kb0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgc2NyZWVuQ2xlYW5VcChcIi5wcm9qZWN0LWJvZHlcIik7XG4gICAgaWYgKHRvZG9Db250ZW50Q29udHJvbC5jdXJyZW50VG9kbyAhPT0gdG9kby5pZCkge1xuICAgICAgdG9kb0NvbnRlbnRDb250cm9sLmRlc2VsZWN0UHJldmlvdXNUb2RvKCk7XG4gICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC10b2RvXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC10b2RvXCIpO1xuICAgIH1cbiAgICB0b2RvQ29udGVudENvbnRyb2wucmVuZGVyVG9kb0NvbnRlbnRUb2RvKHByb2plY3RJZCwgdG9kby5pZCk7XG4gIH0pO1xuICBsZXQgdG9kb0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdG9kb0FjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdG9kb05hbWUuaW5uZXJUZXh0ID0gdG9kby5uYW1lO1xuICBsZXQgdG9kb0RlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRvZG9EZWFkbGluZS5pbm5lclRleHQgPSB0b2RvLmRlYWRsaW5lO1xuICBsZXQgdGFza051bWJlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0YXNrc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRhc2tzTGFiZWwuaW5uZXJUZXh0ID0gXCJUYXNrczogXCI7XG4gIGxldCB0b2RvVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdG9kb1Rhc2tzLmlubmVyVGV4dCA9IHRvZG8udGFza3MubGVuZ3RoO1xuICB0YXNrTnVtYmVyUm93LmFwcGVuZENoaWxkKHRhc2tzTGFiZWwpO1xuICB0YXNrTnVtYmVyUm93LmFwcGVuZENoaWxkKHRvZG9UYXNrcyk7XG4gIGxldCBjb21wbGV0aW9uUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGNvbXBsZXRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsZXQgY29tcGxldGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb21wbGV0aW9uUm93LmFwcGVuZENoaWxkKGNvbXBsZXRpb25MYWJlbCk7XG4gIGNvbXBsZXRpb25Sb3cuYXBwZW5kQ2hpbGQoY29tcGxldGlvbik7XG4gIGxldCBjb21wbGV0ZWQgPSB0b2RvLnRhc2tzLmZpbHRlcigodCkgPT4gdC5jaGVja2VkKTtcbiAgbGV0IGNvbXBsZXRlZFRvdGFsID0gY29tcGxldGVkLmxlbmd0aDtcbiAgaWYgKHRvZG8udGFza3MubGVuZ3RoID4gMCkge1xuICAgIGxldCBjb21wbGV0ZWRQZXJjZW50YWdlID1cbiAgICAgIE1hdGgucm91bmQoKGNvbXBsZXRlZFRvdGFsIC8gdG9kby50YXNrcy5sZW5ndGgpICogMTAwMDApIC8gMTAwO1xuICAgIGNvbXBsZXRpb24uaW5uZXJUZXh0ID0gYCR7Y29tcGxldGVkUGVyY2VudGFnZX0gJWA7XG4gICAgY29tcGxldGlvbkxhYmVsLmlubmVyVGV4dCA9IFwiQ29tcGxldGlvbjogXCI7XG4gIH1cbiAgbGV0IGJ0bkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bkRlbGV0ZS5pbm5lclRleHQgPSBcIkRlbGV0ZVwiO1xuICBidG5EZWxldGUuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBgJHt0b2RvLmlkfWApO1xuICBidG5EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRvZG9CYXJDb250cm9sLmRlbGV0ZVRvZG8oK2J0bkRlbGV0ZS5kYXRhc2V0LmlkKTtcbiAgfSk7XG4gIHRvZG9JbmZvLmFwcGVuZENoaWxkKHRvZG9OYW1lKTtcbiAgdG9kb0luZm8uYXBwZW5kQ2hpbGQodG9kb0RlYWRsaW5lKTtcbiAgdG9kb0luZm8uYXBwZW5kQ2hpbGQodGFza051bWJlclJvdyk7XG4gIGlmICh0b2RvLnRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICB0b2RvSW5mby5hcHBlbmRDaGlsZChjb21wbGV0aW9uUm93KTtcbiAgfVxuICB0b2RvQWN0aW9ucy5hcHBlbmRDaGlsZChidG5EZWxldGUpO1xuICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9JbmZvKTtcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvQWN0aW9ucyk7XG4gIHJldHVybiB0b2RvRGl2O1xufVxuXG5leHBvcnQgeyBtYWtlVG9kb0NhcmQgfTtcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5cbmNvbnN0IHN0b3JhZ2VNYW5hZ2VtZW50ID0ge1xuICBzdG9yYWdlUHJvamVjdHM6IFtdLFxuICBpbml0aWFsTG9hZCgpIHtcbiAgICB0aGlzLnN0b3JhZ2VQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgbGV0IHByb2plY3QgPSBQcm9qZWN0KCk7XG4gICAgbGV0IHByb2plY3RQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvamVjdCk7XG4gICAgbGV0IHRvZG8gPSBUb2RvKCk7XG4gICAgbGV0IHRvZG9Qcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodG9kbyk7XG4gICAgbGV0IHRhc2sgPSBUYXNrKCk7XG4gICAgbGV0IHRhc2tQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFzayk7XG5cbiAgICB0aGlzLnN0b3JhZ2VQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YocHJvamVjdCwgcHJvamVjdFByb3RvdHlwZSk7XG4gICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRvZG8sIHRvZG9Qcm90b3R5cGUpO1xuICAgICAgICB0b2RvLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGFzaywgdGFza1Byb3RvdHlwZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZVByb2plY3RzO1xuICB9LFxuICBzYXZlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoQXBwLnByb2plY3RzKSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlTWFuYWdlbWVudDtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IFRhc2sgPSAoZGVzY3JpcHRpb24sIHByaW9yaXR5LCBpZCkgPT4ge1xuICBjb25zdCBwcm90byA9IHtcbiAgICBjaGVjaygpIHt9LFxuICAgIHVuY2hlY2soKSB7fSxcbiAgfTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgT2JqZWN0LmNyZWF0ZShwcm90byksXG4gICAgeyBkZXNjcmlwdGlvbiB9LFxuICAgIHsgcHJpb3JpdHkgfSxcbiAgICB7IGlkIH0sXG4gICAgeyBjaGVja2VkOiBmYWxzZSB9XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcbmltcG9ydCBzdG9yYWdlTWFuYWdlbWVudCBmcm9tIFwiLi9zdG9yYWdlTWFuYWdlbWVudFwiO1xuXG5jb25zdCBUb2RvID0gKG5hbWUsIGRlYWRsaW5lLCBpZCkgPT4ge1xuICBjb25zdCBwcm90byA9IHtcbiAgICBjcmVhdGVUYXNrKGRlc2NyaXB0aW9uLCBwcmlvcml0eSkge1xuICAgICAgbGV0IGlkID0gdGhpcy50YXNrcy5sZW5ndGg7XG4gICAgICBsZXQgdGFza3NTb3J0ZWQgPSB0aGlzLnRhc2tzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NTb3J0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlkID09IHRhc2tzU29ydGVkW2ldLmlkKSB7XG4gICAgICAgICAgaWQrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IHRhc2sgPSBUYXNrKGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgaWQpO1xuICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgICAgc3RvcmFnZU1hbmFnZW1lbnQuc2F2ZSgpO1xuICAgIH0sXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgICB9LFxuICAgIGdldFRhc2soaWQpIHtcbiAgICAgIGxldCB0YXNrID0gdGhpcy50YXNrcy5maWx0ZXIoKHQpID0+IHQuaWQgPT0gaWQpWzBdO1xuICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfSxcbiAgICBjaGFuZ2VOYW1lKG5ld05hbWUpIHtcbiAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgICBzdG9yYWdlTWFuYWdlbWVudC5zYXZlKCk7XG4gICAgfSxcbiAgICBjaGFuZ2VUYXNrRGVzY3JpcHRpb24oZGVzY3JpcHRpb24sIGlkKSB7XG4gICAgICBsZXQgdGFzayA9IHRoaXMuZ2V0VGFzayhpZCk7XG4gICAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICBzdG9yYWdlTWFuYWdlbWVudC5zYXZlKCk7XG4gICAgfSxcbiAgICBjaGFuZ2VUYXNrUHJpb3JpdHkocHJpb3JpdHksIGlkKSB7XG4gICAgICBsZXQgdGFzayA9IHRoaXMuZ2V0VGFzayhpZCk7XG4gICAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICBzdG9yYWdlTWFuYWdlbWVudC5zYXZlKCk7XG4gICAgfSxcbiAgICBjaGVja1Rhc2soaWQpIHtcbiAgICAgIGxldCB0YXNrID0gdGhpcy5nZXRUYXNrKGlkKTtcbiAgICAgIHRhc2suY2hlY2tlZCA9IHRydWU7XG4gICAgICBzdG9yYWdlTWFuYWdlbWVudC5zYXZlKCk7XG4gICAgfSxcbiAgICB1bmNoZWNrVGFzayhpZCkge1xuICAgICAgbGV0IHRhc2sgPSB0aGlzLmdldFRhc2soaWQpO1xuICAgICAgdGFzay5jaGVja2VkID0gZmFsc2U7XG4gICAgICBzdG9yYWdlTWFuYWdlbWVudC5zYXZlKCk7XG4gICAgfSxcbiAgICBkZWxldGVUYXNrKGlkKSB7XG4gICAgICBsZXQgbmV3VGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodCkgPT4gdC5pZCAhPT0gaWQpO1xuICAgICAgdGhpcy50YXNrcyA9IG5ld1Rhc2tzO1xuICAgICAgc3RvcmFnZU1hbmFnZW1lbnQuc2F2ZSgpO1xuICAgIH0sXG4gIH07XG4gIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgIE9iamVjdC5jcmVhdGUocHJvdG8pLFxuICAgIHsgdGFza3M6IFtdIH0sXG4gICAgeyBuYW1lIH0sXG4gICAgeyBkZWFkbGluZSB9LFxuICAgIHsgaWQgfVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGJ0bk5ld1Byb2plY3QgZnJvbSBcIi4vc2NyZWVuQ29udHJvbGxlclwiO1xuaW1wb3J0IHByb2plY3RGb3JtIGZyb20gXCIuL2Zvcm1OZXdQcm9qZWN0XCI7XG5pbXBvcnQgc3RvcmFnZU1hbmFnZW1lbnQgZnJvbSBcIi4vc3RvcmFnZU1hbmFnZW1lbnRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0JhckNvbnRyb2wgfSBmcm9tIFwiLi9zY3JlZW5Db250cm9sbGVyXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbm5hdkJhci5hcHBlbmRDaGlsZChidG5OZXdQcm9qZWN0KTtcbm5hdkJhci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG5ib2R5LmFwcGVuZENoaWxkKG5hdkJhcik7XG5cbmNvbnN0IHByb2plY3RzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnByb2plY3RzQmFyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1iYXJcIik7XG5ib2R5LmFwcGVuZENoaWxkKHByb2plY3RzQmFyKTtcblxuY29uc3QgdG9kb0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50b2RvQmFyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWJhclwiKTtcbmJvZHkuYXBwZW5kQ2hpbGQodG9kb0Jhcik7XG5cbmNvbnN0IHRvZG9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRvZG9Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbnRlbnRcIik7XG5ib2R5LmFwcGVuZENoaWxkKHRvZG9Db250ZW50KTtcblxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB7XG4gIGNvbnNvbGUubG9nKFwidGVzdGluZyBsb2NhbHN0b3JhZ2U6IG5vdGhpbmdcIik7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIik7XG59IGVsc2Uge1xuICBjb25zb2xlLmxvZyhcInRlc3RpbmcgbG9jYWxzdG9yYWdlOiBzb21ldGhpbmdcIik7XG4gIEFwcC5wcm9qZWN0cyA9IHN0b3JhZ2VNYW5hZ2VtZW50LmluaXRpYWxMb2FkKCk7XG4gIHByb2plY3RzQmFyQ29udHJvbC5yZWZyZXNoUHJvamVjdHNCYXIoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==