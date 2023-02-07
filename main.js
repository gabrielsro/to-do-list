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
  localStorage.setItem("projects", JSON.stringify(storageProjects));
} else {
  _app__WEBPACK_IMPORTED_MODULE_4__["default"].projects = _storageManagement__WEBPACK_IMPORTED_MODULE_3__["default"].initialLoad();
  _screenController__WEBPACK_IMPORTED_MODULE_1__.projectsBarControl.refreshProjectsBar();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGdCQUFnQixpQkFBaUIsMkJBQTJCLEdBQUcsc0dBQXNHLDRCQUE0QixHQUFHLFVBQVUsa0JBQWtCLG1DQUFtQyxxQ0FBcUMsa0JBQWtCLEdBQUcsU0FBUyxxQkFBcUIsR0FBRyxtQkFBbUIsa0JBQWtCLG1FQUFtRSxhQUFhLG1CQUFtQix3QkFBd0IscUJBQXFCLGtCQUFrQixHQUFHLHFCQUFxQix1QkFBdUIsR0FBRywyQkFBMkIscUJBQXFCLEdBQUcsK0JBQStCLHVCQUF1QixHQUFHLG9DQUFvQyxzQkFBc0IsZ0JBQWdCLEdBQUcsNkNBQTZDLGlCQUFpQixHQUFHLGVBQWUscUJBQXFCLGtCQUFrQixHQUFHLHVCQUF1Qix3Q0FBd0MsR0FBRyxjQUFjLGlCQUFpQix1QkFBdUIsdUJBQXVCLGtCQUFrQixnQ0FBZ0MscUJBQXFCLGdCQUFnQixxQkFBcUIsc0JBQXNCLEdBQUcsb0JBQW9CLG9CQUFvQixpQ0FBaUMsOEJBQThCLGtDQUFrQyxHQUFHLDZCQUE2QixVQUFVLDBDQUEwQyxrQkFBa0IsS0FBSyxHQUFHLG1CQUFtQixrQkFBa0IsbUNBQW1DLG9DQUFvQyxzQkFBc0IsR0FBRyxtQ0FBbUMsc0JBQXNCLHlCQUF5QixxQkFBcUIsR0FBRyxxRUFBcUUsc0JBQXNCLEdBQUcscUVBQXFFLHNCQUFzQixHQUFHLHNCQUFzQixrQkFBa0IsR0FBRyxxQkFBcUIsb0JBQW9CLGdEQUFnRCxnQkFBZ0IsR0FBRyxvQkFBb0IsZ0RBQWdELEdBQUcsZ0JBQWdCLGlCQUFpQixtQkFBbUIsd0JBQXdCLHlCQUF5QixHQUFHLGVBQWUsdUJBQXVCLHNCQUFzQixHQUFHLHFCQUFxQixrQkFBa0IsZ0JBQWdCLEdBQUcscUNBQXFDLHNCQUFzQixHQUFHLGdFQUFnRSxrQkFBa0Isd0JBQXdCLEdBQUcsMkdBQTJHLHdCQUF3Qix1QkFBdUIsR0FBRyxvQ0FBb0Msb0JBQW9CLEdBQUcsZ0JBQWdCLGtCQUFrQixHQUFHLHNCQUFzQixzQkFBc0Isc0JBQXNCLHVCQUF1QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRywrQkFBK0Isc0JBQXNCLHVCQUF1QixHQUFHLDJCQUEyQixzQkFBc0IsR0FBRyxlQUFlLHNCQUFzQix1QkFBdUIsdUJBQXVCLGlCQUFpQixHQUFHLGVBQWUsZ0JBQWdCLHlCQUF5Qix1QkFBdUIsa0JBQWtCLDRDQUE0QyxHQUFHLHFCQUFxQixvQkFBb0IsR0FBRywrRkFBK0Ysa0JBQWtCLGdCQUFnQix1QkFBdUIsR0FBRyx3QkFBd0Isc0JBQXNCLEdBQUcsb0NBQW9DLHNCQUFzQixzQkFBc0IsR0FBRyxxQ0FBcUMsc0JBQXNCLEdBQUcscUNBQXFDLHNCQUFzQixzQkFBc0IsR0FBRyxvQkFBb0Isc0JBQXNCLEdBQUcsd0JBQXdCLHVCQUF1QixHQUFHLGdDQUFnQyx1QkFBdUIseUJBQXlCLEdBQUcsZ0JBQWdCLGVBQWUsZ0JBQWdCLHVCQUF1QixHQUFHLG1CQUFtQixxQkFBcUIsc0JBQXNCLHVCQUF1QixHQUFHLHdCQUF3QixtQkFBbUIsR0FBRyxpQkFBaUIsb0JBQW9CLHNCQUFzQixHQUFHLFNBQVMsZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE9BQU8sYUFBYSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxTQUFTLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSw2QkFBNkIsZ0JBQWdCLGlCQUFpQiwyQkFBMkIsR0FBRyxzR0FBc0csNEJBQTRCLEdBQUcsVUFBVSxrQkFBa0IsbUNBQW1DLHFDQUFxQyxrQkFBa0IsR0FBRyxTQUFTLHFCQUFxQixHQUFHLG1CQUFtQixrQkFBa0IsbUVBQW1FLGFBQWEsbUJBQW1CLHdCQUF3QixxQkFBcUIsa0JBQWtCLEdBQUcscUJBQXFCLHVCQUF1QixHQUFHLDJCQUEyQixxQkFBcUIsR0FBRywrQkFBK0IsdUJBQXVCLEdBQUcsb0NBQW9DLHNCQUFzQixnQkFBZ0IsR0FBRyw2Q0FBNkMsaUJBQWlCLEdBQUcsZUFBZSxxQkFBcUIsa0JBQWtCLEdBQUcsdUJBQXVCLHdDQUF3QyxHQUFHLGNBQWMsaUJBQWlCLHVCQUF1Qix1QkFBdUIsa0JBQWtCLGdDQUFnQyxxQkFBcUIsZ0JBQWdCLHFCQUFxQixzQkFBc0IsR0FBRyxvQkFBb0Isb0JBQW9CLGlDQUFpQyw4QkFBOEIsa0NBQWtDLEdBQUcsNkJBQTZCLFVBQVUsMENBQTBDLGtCQUFrQixLQUFLLEdBQUcsbUJBQW1CLGtCQUFrQixtQ0FBbUMsb0NBQW9DLHNCQUFzQixHQUFHLG1DQUFtQyxzQkFBc0IseUJBQXlCLHFCQUFxQixHQUFHLHFFQUFxRSxzQkFBc0IsR0FBRyxxRUFBcUUsc0JBQXNCLEdBQUcsc0JBQXNCLGtCQUFrQixHQUFHLHFCQUFxQixvQkFBb0IsZ0RBQWdELGdCQUFnQixHQUFHLG9CQUFvQixnREFBZ0QsR0FBRyxnQkFBZ0IsaUJBQWlCLG1CQUFtQix3QkFBd0IseUJBQXlCLEdBQUcsZUFBZSx1QkFBdUIsc0JBQXNCLEdBQUcscUJBQXFCLGtCQUFrQixnQkFBZ0IsR0FBRyxxQ0FBcUMsc0JBQXNCLEdBQUcsZ0VBQWdFLGtCQUFrQix3QkFBd0IsR0FBRywyR0FBMkcsd0JBQXdCLHVCQUF1QixHQUFHLG9DQUFvQyxvQkFBb0IsR0FBRyxnQkFBZ0Isa0JBQWtCLEdBQUcsc0JBQXNCLHNCQUFzQixzQkFBc0IsdUJBQXVCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLCtCQUErQixzQkFBc0IsdUJBQXVCLEdBQUcsMkJBQTJCLHNCQUFzQixHQUFHLGVBQWUsc0JBQXNCLHVCQUF1Qix1QkFBdUIsaUJBQWlCLEdBQUcsZUFBZSxnQkFBZ0IseUJBQXlCLHVCQUF1QixrQkFBa0IsNENBQTRDLEdBQUcscUJBQXFCLG9CQUFvQixHQUFHLCtGQUErRixrQkFBa0IsZ0JBQWdCLHVCQUF1QixHQUFHLHdCQUF3QixzQkFBc0IsR0FBRyxvQ0FBb0Msc0JBQXNCLHNCQUFzQixHQUFHLHFDQUFxQyxzQkFBc0IsR0FBRyxxQ0FBcUMsc0JBQXNCLHNCQUFzQixHQUFHLG9CQUFvQixzQkFBc0IsR0FBRyx3QkFBd0IsdUJBQXVCLEdBQUcsZ0NBQWdDLHVCQUF1Qix5QkFBeUIsR0FBRyxnQkFBZ0IsZUFBZSxnQkFBZ0IsdUJBQXVCLEdBQUcsbUJBQW1CLHFCQUFxQixzQkFBc0IsdUJBQXVCLEdBQUcsd0JBQXdCLG1CQUFtQixHQUFHLGlCQUFpQixvQkFBb0Isc0JBQXNCLEdBQUcscUJBQXFCO0FBQ2hwVTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ1c7QUFDb0I7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBCQUEwQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseUJBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE1BQU07QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0RBQU87QUFDekI7QUFDQSxJQUFJLCtEQUFzQjtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFzQjtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFzQjtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBc0I7QUFDMUIsR0FBRztBQUNIO0FBQ0EsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9ERTtBQUMrQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEVBQUUsaUVBQWM7QUFDaEI7O0FBRW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkM7QUFDTTtBQUM2Qjs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFpQjtBQUNuQixFQUFFLG9GQUFxQztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNOO0FBQ3dCOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEVBQUUsMERBQU87QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVDO0FBQ1E7QUFDdUI7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE1BQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdCQUF3QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvREFBSTtBQUNyQjtBQUNBLE1BQU0sK0RBQXNCO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0RBQXNCO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtEQUFzQjtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTSxNQUFNO0FBQ1osTUFBTSxVQUFVO0FBQ2hCLE1BQU0sSUFBSTtBQUNWLE1BQU07QUFDTjtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNERjtBQUNHO0FBQ21CO0FBQ1c7QUFDTjtBQUNQO0FBQ0M7QUFDTztBQUNKOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHdFQUE0QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3REFBZTtBQUNsQztBQUNBLHdCQUF3QixtRUFBZTtBQUN2QztBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix1REFBYztBQUM5QixvQkFBb0Isa0JBQWtCO0FBQ3RDLHFCQUFxQiw2REFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsSUFBSSx1REFBYztBQUNsQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdURBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsR0FBRztBQUM5QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1REFBYztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHNCQUFzQixrQkFBa0I7QUFDeEM7QUFDQTtBQUNBLDJDQUEyQyxZQUFZO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFlBQVk7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyw4Q0FBVztBQUNsRCxVQUFVO0FBQ1Y7QUFDQSx1Q0FBdUMsZ0RBQWE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwyQkFBMkIsc0RBQVE7QUFDbkM7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSwyQkFBMkIsdURBQVE7QUFDbkM7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGdCQUFnQix1REFBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsMERBQWlCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQW1CO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsdURBQWM7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSx1REFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSx1REFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSxFQUFDO0FBUzNCOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFWbUI7QUFNTzs7QUFFNUI7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0EsTUFBTSw0RUFBNkI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQWE7QUFDakIsR0FBRztBQUNIO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0EsUUFBUSw0RUFBNkI7QUFDckM7QUFDQTtBQUNBLFFBQVEsNEVBQTZCO0FBQ3JDLE1BQU0seUZBQTBDO0FBQ2hEO0FBQ0E7QUFDQSxJQUFJLDJFQUE0QjtBQUNoQyxJQUFJLDBGQUEyQztBQUMvQyxHQUFHO0FBQ0g7QUFDQTs7QUFFMkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekROO0FBS087O0FBRTVCO0FBQ0E7QUFDQSxxQ0FBcUMsUUFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFhO0FBQ2pCLFFBQVEsNkVBQThCO0FBQ3RDLE1BQU0sc0ZBQXVDO0FBQzdDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJLHVGQUF3QztBQUM1QyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxQkFBcUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0EsSUFBSSx3RUFBeUI7QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVRO0FBQ1I7QUFDRTtBQUNBOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvREFBTztBQUN6QjtBQUNBLGVBQWUsaURBQUk7QUFDbkI7QUFDQSxlQUFlLGlEQUFJO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0Esb0RBQW9ELHFEQUFZO0FBQ2hFLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDWjs7QUFFckI7QUFDQTtBQUNBLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsTUFBTSxhQUFhO0FBQ25CLE1BQU0sVUFBVTtBQUNoQixNQUFNLElBQUk7QUFDVixNQUFNO0FBQ047QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQztBQUNRO0FBQ3VCOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdCQUF3QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvREFBSTtBQUNyQjtBQUNBLE1BQU0sK0RBQXNCO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTSwrREFBc0I7QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0RBQXNCO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtEQUFzQjtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrREFBc0I7QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0RBQXNCO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtEQUFzQjtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTSxXQUFXO0FBQ2pCLE1BQU0sTUFBTTtBQUNaLE1BQU0sVUFBVTtBQUNoQixNQUFNO0FBQ047QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hFcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDMEI7QUFDSjtBQUNTO0FBQzVCO0FBQ2dDOztBQUV4RDs7QUFFQTtBQUNBLG1CQUFtQix5REFBYTtBQUNoQyxtQkFBbUIsdURBQVc7QUFDOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRixFQUFFLHFEQUFZLEdBQUcsc0VBQTZCO0FBQzlDLEVBQUUsb0ZBQXFDO0FBQ3ZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Zvcm1FZGl0VG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Zvcm1OZXdQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZm9ybU5ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyZWVuQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmVlblByb2plY3RDYXJkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyZWVuVG9kb0NhcmQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdG9yYWdlTWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxubmF2LFxcbi5wcm9qZWN0cy1iYXIsXFxuZm9ybSxcXG4ucHJvamVjdCxcXG4udG9kby1iYXIsXFxuYm9keSxcXG4udG9kby1jb250ZW50LFxcbi50b2RvLWRpdixcXG4udGFzay1yb3cge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmciAxNWZyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubmF2IHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbi5wcm9qZWN0cy1iYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTMwcHgsIDAuMTRmcikpO1xcbiAgZ2FwOiAxdnc7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBhZGRpbmctbGVmdDogMC44dnc7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG59XFxuXFxuLnByb2plY3QtZW1wdHktZGlhbG9nIHtcXG4gIHBhZGRpbmctdG9wOiAydmg7XFxufVxcblxcbi5wcm9qZWN0LWVtcHR5LWRpYWxvZyA+IHAge1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4ucHJvamVjdC1lbXB0eS1kaWFsb2cgPiBidXR0b24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxdnc7XFxuICB3aWR0aDogNXJlbTtcXG59XFxuXFxuLnByb2plY3QtZW1wdHktZGlhbG9nIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIHdpZHRoOiAxMnJlbTtcXG59XFxuXFxuLnRvZG8tYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMy80O1xcbn1cXG5cXG4uc2VsZWN0ZWQtcHJvamVjdCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNDQsIDEyNSwgMjM5KTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNGZyIDFmcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAzJTtcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvcmRlci1ob3ZlcjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTcwbXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBib3JkZXItaG92ZXIge1xcbiAgMTAwJSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig0NCwgMTI1LCAyMzkpO1xcbiAgICBzY2FsZTogMS4wNjtcXG4gIH1cXG59XFxuXFxuLnByb2plY3QtaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDAuMnZ3O1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvID4gcDpmaXJzdC1jaGlsZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuLnByb2plY3QtaW5mbyA+IHA6bnRoLWNoaWxkKDIpLFxcbi5wcm9qZWN0LWluZm8gPiBwOm50aC1jaGlsZCg0KSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLnByb2plY3QtaW5mbyA+IHA6bnRoLWNoaWxkKDMpLFxcbi5wcm9qZWN0LWluZm8gPiBwOm50aC1jaGlsZCg1KSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLnByb2plY3QtYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4udG9kby1kaXY6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyMzgsIDE1OSwgMjMsIDAuOTgzKTtcXG4gIHNjYWxlOiAxLjAzO1xcbn1cXG5cXG4uc2VsZWN0ZWQtdG9kbyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIzOCwgMTU5LCAyMywgMC45ODMpO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gIGhlaWdodDogNzN2aDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjV2dztcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXZ3O1xcbn1cXG5cXG4udG9kby1kaXYge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXRvcDogMC43dnc7XFxufVxcblxcbi50b2RvLWRpdiA+IGRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMiU7XFxufVxcblxcbi50b2RvLWRpdiA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50b2RvLWRpdiA+IGRpdiA+IGRpdixcXG4udG9kby1kaXYgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4udG9kby1kaXYgPiBkaXYgPiBwOm50aC1jaGlsZCgyKSxcXG4udG9kby1kaXYgPiBkaXYgPiBkaXYgPiBwLFxcbi50b2RvLWRpdiA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMikgPiBwIHtcXG4gIG1hcmdpbi1yaWdodDogMC4xdnc7XFxuICBtYXJnaW4tbGVmdDogMC43dnc7XFxufVxcblxcbi50b2RvLWRpdiA+IGRpdiBwOm50aC1jaGlsZCgzKSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5pbnZpc2libGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8taGVhZGVyID4gcCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4udG9kby1oZWFkZXIgPiBkaXYgPiBwIHtcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG59XFxuXFxuLnRvZG8taGVhZGVyID4gZGl2IGJ1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDF2dztcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG59XFxuXFxuLnRvZG8taGVhZGVyID4gYnV0dG9uIHtcXG4gIG1hcmdpbi1yaWdodDogMXZ3O1xcbn1cXG5cXG4udGFza2xpc3Qge1xcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XFxuICBwYWRkaW5nLXJpZ2h0OiAydnc7XFxuICBwYWRkaW5nLXRvcDogMC43dnc7XFxuICBoZWlnaHQ6IDYwdmg7XFxufVxcblxcbi50YXNrLXJvdyB7XFxuICBoZWlnaHQ6IDl2aDtcXG4gIG1hcmdpbi1ib3R0b206IDAuN3Z3O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmciAxNWZyIDJmcjtcXG59XFxuXFxuLnRhc2stcm93OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmljb24tY29udGFpbmVyLFxcbi50YXNrLXJvdy1hY3Rpb25zLFxcbi50YXNrLXJvdy10ZXh0LFxcbi50YXNrLXJvdy1hY3Rpb25zLFxcbi50YXNrLXJvdy1pbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stcm93LXRleHQgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFzay1yb3ctaW5mbyA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLnRhc2stcm93LWluZm8gPiBwOm50aC1jaGlsZCgyKSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLnRhc2stcm93LWluZm8gPiBwOm50aC1jaGlsZCgzKSB7XFxuICBtYXJnaW4tdG9wOiAwLjd2aDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGFzay1yb3ctaW5mbyB7XFxuICBwYWRkaW5nLWxlZnQ6IDF2dztcXG59XFxuXFxuLnRhc2stcm93LXRleHQgPiBwIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stcm93LWFjdGlvbnMgPiBidXR0b24ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWljb24ge1xcbiAgd2lkdGg6IDY0JTtcXG4gIGhlaWdodDogNjQlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udG9kby1jb250ZW50IHtcXG4gIHBhZGRpbmctdG9wOiAxdmg7XFxuICBwYWRkaW5nLWxlZnQ6IDF2dztcXG4gIHBhZGRpbmctcmlnaHQ6IDF2dztcXG59XFxuXFxuLnRvZG8tY29udGVudC1pbmZvIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBOzs7Ozs7Ozs7RUFTRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOERBQThEO0VBQzlELFFBQVE7RUFDUixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7SUFDRSxtQ0FBbUM7SUFDbkMsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDJDQUEyQztFQUMzQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOzs7OztFQUtFLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5uYXYsXFxuLnByb2plY3RzLWJhcixcXG5mb3JtLFxcbi5wcm9qZWN0LFxcbi50b2RvLWJhcixcXG5ib2R5LFxcbi50b2RvLWNvbnRlbnQsXFxuLnRvZG8tZGl2LFxcbi50YXNrLXJvdyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIDE1ZnI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5uYXYge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuLnByb2plY3RzLWJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMzBweCwgMC4xNGZyKSk7XFxuICBnYXA6IDF2dztcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjh2dztcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4ucHJvamVjdC1lbXB0eS1kaWFsb2cge1xcbiAgcGFkZGluZy10b3A6IDJ2aDtcXG59XFxuXFxuLnByb2plY3QtZW1wdHktZGlhbG9nID4gcCB7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbi5wcm9qZWN0LWVtcHR5LWRpYWxvZyA+IGJ1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDF2dztcXG4gIHdpZHRoOiA1cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1lbXB0eS1kaWFsb2cgYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgd2lkdGg6IDEycmVtO1xcbn1cXG5cXG4udG9kby1iYXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAzLzQ7XFxufVxcblxcbi5zZWxlY3RlZC1wcm9qZWN0IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYig0NCwgMTI1LCAyMzkpO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBoZWlnaHQ6IDE1dmg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0ZnIgMWZyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDMlO1xcbiAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBhbmltYXRpb24tbmFtZTogYm9yZGVyLWhvdmVyO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNzBtcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvcmRlci1ob3ZlciB7XFxuICAxMDAlIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDQ0LCAxMjUsIDIzOSk7XFxuICAgIHNjYWxlOiAxLjA2O1xcbiAgfVxcbn1cXG5cXG4ucHJvamVjdC1pbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA1ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgY29sdW1uLWdhcDogMC4ydnc7XFxufVxcblxcbi5wcm9qZWN0LWluZm8gPiBwOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvID4gcDpudGgtY2hpbGQoMiksXFxuLnByb2plY3QtaW5mbyA+IHA6bnRoLWNoaWxkKDQpIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvID4gcDpudGgtY2hpbGQoMyksXFxuLnByb2plY3QtaW5mbyA+IHA6bnRoLWNoaWxkKDUpIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1hY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi50b2RvLWRpdjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIzOCwgMTU5LCAyMywgMC45ODMpO1xcbiAgc2NhbGU6IDEuMDM7XFxufVxcblxcbi5zZWxlY3RlZC10b2RvIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjM4LCAxNTksIDIzLCAwLjk4Myk7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgaGVpZ2h0OiA3M3ZoO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXZ3O1xcbiAgcGFkZGluZy1yaWdodDogMC41dnc7XFxufVxcblxcbi50b2RvLWRpdiB7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW4tdG9wOiAwLjd2dztcXG59XFxuXFxuLnRvZG8tZGl2ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAyJTtcXG59XFxuXFxuLnRvZG8tZGl2ID4gZGl2ID4gcDpmaXJzdC1jaGlsZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRvZG8tZGl2ID4gZGl2ID4gZGl2LFxcbi50b2RvLWRpdiA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi50b2RvLWRpdiA+IGRpdiA+IHA6bnRoLWNoaWxkKDIpLFxcbi50b2RvLWRpdiA+IGRpdiA+IGRpdiA+IHAsXFxuLnRvZG8tZGl2ID4gZGl2ID4gZGl2Om50aC1jaGlsZCgyKSA+IHAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjF2dztcXG4gIG1hcmdpbi1sZWZ0OiAwLjd2dztcXG59XFxuXFxuLnRvZG8tZGl2ID4gZGl2IHA6bnRoLWNoaWxkKDMpIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmludmlzaWJsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1oZWFkZXIgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbi50b2RvLWhlYWRlciA+IGRpdiA+IHAge1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4udG9kby1oZWFkZXIgPiBkaXYgYnV0dG9uIHtcXG4gIG1hcmdpbi1yaWdodDogMXZ3O1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4udG9kby1oZWFkZXIgPiBidXR0b24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxdnc7XFxufVxcblxcbi50YXNrbGlzdCB7XFxuICBwYWRkaW5nLWxlZnQ6IDF2dztcXG4gIHBhZGRpbmctcmlnaHQ6IDJ2dztcXG4gIHBhZGRpbmctdG9wOiAwLjd2dztcXG4gIGhlaWdodDogNjB2aDtcXG59XFxuXFxuLnRhc2stcm93IHtcXG4gIGhlaWdodDogOXZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMC43dnc7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMmZyIDE1ZnIgMmZyO1xcbn1cXG5cXG4udGFzay1yb3c6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaWNvbi1jb250YWluZXIsXFxuLnRhc2stcm93LWFjdGlvbnMsXFxuLnRhc2stcm93LXRleHQsXFxuLnRhc2stcm93LWFjdGlvbnMsXFxuLnRhc2stcm93LWluZm8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogN3ZoO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1yb3ctdGV4dCA+IHAge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50YXNrLXJvdy1pbmZvID4gcDpmaXJzdC1jaGlsZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4udGFzay1yb3ctaW5mbyA+IHA6bnRoLWNoaWxkKDIpIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4udGFzay1yb3ctaW5mbyA+IHA6bnRoLWNoaWxkKDMpIHtcXG4gIG1hcmdpbi10b3A6IDAuN3ZoO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YXNrLXJvdy1pbmZvIHtcXG4gIHBhZGRpbmctbGVmdDogMXZ3O1xcbn1cXG5cXG4udGFzay1yb3ctdGV4dCA+IHAge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1yb3ctYWN0aW9ucyA+IGJ1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2staWNvbiB7XFxuICB3aWR0aDogNjQlO1xcbiAgaGVpZ2h0OiA2NCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWNvbnRlbnQge1xcbiAgcGFkZGluZy10b3A6IDF2aDtcXG4gIHBhZGRpbmctbGVmdDogMXZ3O1xcbiAgcGFkZGluZy1yaWdodDogMXZ3O1xcbn1cXG5cXG4udG9kby1jb250ZW50LWluZm8ge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHN0b3JhZ2VNYW5hZ2VtZW50IGZyb20gXCIuL3N0b3JhZ2VNYW5hZ2VtZW50XCI7XG5cbmNvbnN0IEFwcCA9IHtcbiAgcHJvamVjdHM6IFtdLFxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgfSxcbiAgZ2V0UHJvamVjdChpZCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbHRlcigocCkgPT4gcC5pZCA9PSBpZClbMF07XG4gIH0sXG4gIGNyZWF0ZVByb2plY3QobmFtZSwgZGVhZGxpbmUpIHtcbiAgICBsZXQgaWQgPSB0aGlzLnByb2plY3RzLmxlbmd0aDtcbiAgICBsZXQgcHJvamVjdHNTb3J0ZWQgPSB0aGlzLnByb2plY3RzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzU29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaWQgPT0gcHJvamVjdHNTb3J0ZWRbaV0uaWQpIHtcbiAgICAgICAgaWQrKztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICBsZXQgY291bnQgPSAxO1xuICAgICAgbGV0IHJlZ2V4ID0gLyg/PD1eUHJvamVjdFxccylcXGQrJC87XG4gICAgICBsZXQgbWF0Y2hlZEFycmF5ID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG1hdGNoZWQgPSB0aGlzLnByb2plY3RzW2ldLm5hbWUubWF0Y2gocmVnZXgpO1xuICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgIG1hdGNoZWRBcnJheS5wdXNoKCttYXRjaGVkWzBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbWF0Y2hlZEFycmF5LnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChtYXRjaGVkQXJyYXlbaV0gPT0gY291bnQpIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBuYW1lID0gYFByb2plY3QgJHtjb3VudH1gO1xuICAgICAgaWYgKCFkZWFkbGluZSkge1xuICAgICAgICBkZWFkbGluZSA9IFwiVW5rbm93blwiO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgcHJvamVjdCA9IFByb2plY3QobmFtZSwgZGVhZGxpbmUsIGlkKTtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgc3RvcmFnZU1hbmFnZW1lbnQuc2F2ZSgpO1xuICB9LFxuICBjaGFuZ2VQcm9qZWN0TmFtZShpZCwgbmFtZSkge1xuICAgIGxldCBwcm9qZWN0QXJyYXkgPSB0aGlzLnByb2plY3RzLmZpbHRlcigocCkgPT4gcC5pZCA9PSBpZCk7XG4gICAgbGV0IHByb2plY3QgPSBwcm9qZWN0QXJyYXlbMF07XG4gICAgcHJvamVjdC5uYW1lID0gbmFtZTtcbiAgICBzdG9yYWdlTWFuYWdlbWVudC5zYXZlKCk7XG4gIH0sXG4gIGNoYW5nZVByb2plY3REZWFkbGluZShpZCwgZGVhZGxpbmUpIHtcbiAgICBsZXQgcHJvamVjdEFycmF5ID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHApID0+IHAuaWQgPT0gaWQpO1xuICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdEFycmF5WzBdO1xuICAgIHByb2plY3QuZGVhZGxpbmUgPSBkZWFkbGluZTtcbiAgICBzdG9yYWdlTWFuYWdlbWVudC5zYXZlKCk7XG4gIH0sXG4gIGRlbGV0ZVByb2plY3QoaWQpIHtcbiAgICBsZXQgbmV3UHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcigocCkgPT4gcC5pZCAhPT0gaWQpO1xuICAgIHRoaXMucHJvamVjdHMgPSBuZXdQcm9qZWN0cztcbiAgICBzdG9yYWdlTWFuYWdlbWVudC5zYXZlKCk7XG4gIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGNoYW5nZVRvZG9OYW1lIH0gZnJvbSBcIi4vc2NyZWVuQ29udHJvbGxlclwiO1xuXG5mdW5jdGlvbiB0b2RvRWRpdChwcm9qZWN0SWQsIHRvZG9JZCkge1xuICBsZXQgdG9kb0VkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGxldCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG5hbWVMYWJlbC5pbm5lclRleHQgPSBcIlRvZG8gbmFtZTogXCI7XG4gIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvLW5hbWUtaW5wdXRcIik7XG4gIGxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tbmFtZS1pbnB1dFwiKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgYSBuYW1lIGZvciB0aGlzIFRvZG8gbGlzdFwiKTtcbiAgbGV0IGJ0blNhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG5TYXZlLmlubmVyVGV4dCA9IFwiU2F2ZSBDaGFuZ2VzXCI7XG4gIGJ0blNhdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHRvZG9OYW1lID0gbmFtZUlucHV0LnZhbHVlO1xuICAgIGhhbmRsZUZvcm1TdWJtaXQocHJvamVjdElkLCB0b2RvSWQsIHRvZG9OYW1lKTtcbiAgfSk7XG4gIHRvZG9FZGl0Rm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICB0b2RvRWRpdEZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgdG9kb0VkaXRGb3JtLmFwcGVuZENoaWxkKGJ0blNhdmUpO1xuXG4gIHJldHVybiB0b2RvRWRpdEZvcm07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQocHJvamVjdElkLCB0b2RvSWQsIHRvZG9OYW1lKSB7XG4gIGNoYW5nZVRvZG9OYW1lKHByb2plY3RJZCwgdG9kb0lkLCB0b2RvTmFtZSk7XG59XG5cbmV4cG9ydCB7IHRvZG9FZGl0IH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHAuanNcIjtcbmltcG9ydCB7IHByb2plY3RzQmFyQ29udHJvbCB9IGZyb20gXCIuL3NjcmVlbkNvbnRyb2xsZXJcIjtcblxubGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5wcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1mb3JtXCIpO1xucHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbmxldCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5uYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmFtZS1pbnB1dFwiKTtcbm5hbWVMYWJlbC5pbm5lclRleHQgPSBcIlByb2plY3QncyBuYW1lOlwiO1xubGV0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbm5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hbWUtaW5wdXRcIik7XG5uYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBwcm9qZWN0J3MgbmFtZVwiKTtcbmxldCBkZWFkbGluZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuZGVhZGxpbmVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZWFkbGluZS1pbnB1dFwiKTtcbmRlYWRsaW5lTGFiZWwuaW5uZXJUZXh0ID0gXCJQcm9qZWN0J3MgZGVhZGxpbmU6XCI7XG5sZXQgZGVhZGxpbmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmRlYWRsaW5lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG5sZXQgYnRuU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmJ0blN1Ym1pdC5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xuYnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0U3VibWl0KTtcbmxldCBidG5DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuYnRuQ2FuY2VsLmlubmVyVGV4dCA9IFwiQ2FuY2VsXCI7XG5idG5DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVByb2plY3RDYW5jZWwpO1xucHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbnByb2plY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5wcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChkZWFkbGluZUxhYmVsKTtcbnByb2plY3RGb3JtLmFwcGVuZENoaWxkKGRlYWRsaW5lSW5wdXQpO1xucHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYnRuU3VibWl0KTtcbnByb2plY3RGb3JtLmFwcGVuZENoaWxkKGJ0bkNhbmNlbCk7XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RTdWJtaXQoZXZlbnQpIHtcbiAgbGV0IHByb2plY3ROYW1lID0gbmFtZUlucHV0LnZhbHVlO1xuICBsZXQgcHJvamVjdERlYWRsaW5lID0gZGVhZGxpbmVJbnB1dC52YWx1ZTtcbiAgQXBwLmNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3REZWFkbGluZSk7XG4gIHByb2plY3RzQmFyQ29udHJvbC5yZWZyZXNoUHJvamVjdHNCYXIoKTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdENhbmNlbChldmVudCkge1xuICBuYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICBkZWFkbGluZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImludmlzaWJsZVwiKTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdEZvcm07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgYWRkVGFzayB9IGZyb20gXCIuL3NjcmVlbkNvbnRyb2xsZXJcIjtcblxuZnVuY3Rpb24gdGFza0Zvcm0ocHJvamVjdElkLCB0b2RvSWQpIHtcbiAgbGV0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGxldCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkZXNjcmlwdGlvbkxhYmVsLmlubmVyVGV4dCA9IFwiVGFzazogXCI7XG4gIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciB0YXNrIHRvIGJlIGRvbmVcIik7XG4gIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpO1xuICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9IFwiVGFzayBwcmlvcml0eTogXCI7XG4gIGxldCBwcmlvcml0eVNjcm9sbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByaW9yaXR5U2Nyb2xsLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgcHJpb3JpdHlTY3JvbGwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eVwiKTtcbiAgbGV0IHByaW9yaXR5VmVyeUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBwcmlvcml0eVZlcnlIaWdoLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiVmVyeSBIaWdoXCIpO1xuICBwcmlvcml0eVZlcnlIaWdoLmlubmVyVGV4dCA9IFwiVmVyeSBIaWdoXCI7XG4gIGxldCBwcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBwcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJIaWdoXCIpO1xuICBwcmlvcml0eUhpZ2guaW5uZXJUZXh0ID0gXCJIaWdoXCI7XG4gIGxldCBwcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpO1xuICBwcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk1lZGl1bVwiKTtcbiAgcHJpb3JpdHlNZWRpdW0uaW5uZXJUZXh0ID0gXCJNZWRpdW1cIjtcbiAgbGV0IHByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgcHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJMb3dcIik7XG4gIHByaW9yaXR5TG93LmlubmVyVGV4dCA9IFwiTG93XCI7XG4gIHByaW9yaXR5U2Nyb2xsLmFwcGVuZENoaWxkKHByaW9yaXR5VmVyeUhpZ2gpO1xuICBwcmlvcml0eVNjcm9sbC5hcHBlbmRDaGlsZChwcmlvcml0eUhpZ2gpO1xuICBwcmlvcml0eVNjcm9sbC5hcHBlbmRDaGlsZChwcmlvcml0eU1lZGl1bSk7XG4gIHByaW9yaXR5U2Nyb2xsLmFwcGVuZENoaWxkKHByaW9yaXR5TG93KTtcbiAgbGV0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0blN1Ym1pdC5pbm5lclRleHQgPSBcIkFkZCBUYXNrXCI7XG4gIGJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBwcmlvcml0eVNjcm9sbC52YWx1ZTtcbiAgICBoYW5kbGVUYXNrU3VibWl0KGV2ZW50LCBwcm9qZWN0SWQsIHRvZG9JZCwgZGVzY3JpcHRpb24sIHByaW9yaXR5KTtcbiAgfSk7XG4gIGxldCBidG5DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG5DYW5jZWwuaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcbiAgYnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IGhhbmRsZUZvcm1DYW5jZWwoZXZlbnQpKTtcbiAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlTY3JvbGwpO1xuICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChidG5TdWJtaXQpO1xuICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChidG5DYW5jZWwpO1xuXG4gIHJldHVybiBuZXdUYXNrRm9ybTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza1N1Ym1pdChldmVudCwgcHJvamVjdElkLCB0b2RvSWQsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSkge1xuICBhZGRUYXNrKHByb2plY3RJZCwgdG9kb0lkLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVGb3JtQ2FuY2VsKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKFwiZm9ybSBjYW5jZWxcIik7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmV4cG9ydCB7IHRhc2tGb3JtIH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kby5qc1wiO1xuaW1wb3J0IHN0b3JhZ2VNYW5hZ2VtZW50IGZyb20gXCIuL3N0b3JhZ2VNYW5hZ2VtZW50XCI7XG5cbmNvbnN0IFByb2plY3QgPSAobmFtZSwgZGVhZGxpbmUsIGlkKSA9PiB7XG4gIGNvbnN0IHByb3RvUHJvamVjdCA9IHtcbiAgICBjcmVhdGVUb2RvKG5hbWUsIGRlYWRsaW5lKSB7XG4gICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMTtcbiAgICAgICAgbGV0IHJlZ2V4ID0gLyg/PD1eVG9kb1xccylcXGQrJC87XG4gICAgICAgIGxldCBtYXRjaGVkQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG1hdGNoZWQgPSB0aGlzLnRvZG9zW2ldLm5hbWUubWF0Y2gocmVnZXgpO1xuICAgICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICBtYXRjaGVkQXJyYXkucHVzaCgrbWF0Y2hlZFswXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1hdGNoZWRBcnJheS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG1hdGNoZWRBcnJheVtpXSA9PSBjb3VudCkge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmFtZSA9IGBUb2RvICR7Y291bnR9YDtcbiAgICAgIH1cbiAgICAgIGxldCBpZCA9IHRoaXMudG9kb3MubGVuZ3RoO1xuICAgICAgbGV0IHRvZG9zU29ydGVkID0gdGhpcy50b2Rvcy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zU29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpZCA9PSB0b2Rvc1NvcnRlZFtpXS5pZCkge1xuICAgICAgICAgIGlkKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCB0b2RvID0gVG9kbyhuYW1lLCBkZWFkbGluZSwgaWQpO1xuICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgc3RvcmFnZU1hbmFnZW1lbnQuc2F2ZSgpO1xuICAgIH0sXG4gICAgZ2V0VG9kbyhpZCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9kb3MuZmlsdGVyKCh0KSA9PiB0LmlkID09IGlkKVswXTtcbiAgICB9LFxuICAgIGNoYW5nZVRvZG9OYW1lKG5hbWUsIGlkKSB7XG4gICAgICBsZXQgdG9kbyA9IHRoaXMuZ2V0VG9kbyhpZCk7XG4gICAgICB0b2RvLm5hbWUgPSBuYW1lO1xuICAgICAgc3RvcmFnZU1hbmFnZW1lbnQuc2F2ZSgpO1xuICAgIH0sXG4gICAgZGVsZXRlVG9kbyhpZCkge1xuICAgICAgbGV0IGZpbHRlcmVkVG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcigodCkgPT4gdC5pZCAhPT0gaWQpO1xuICAgICAgdGhpcy50b2RvcyA9IGZpbHRlcmVkVG9kb3M7XG4gICAgICBzdG9yYWdlTWFuYWdlbWVudC5zYXZlKCk7XG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgT2JqZWN0LmNyZWF0ZShwcm90b1Byb2plY3QpLFxuICAgIHsgbmFtZSB9LFxuICAgIHsgZGVhZGxpbmUgfSxcbiAgICB7IGlkIH0sXG4gICAgeyB0b2RvczogW10gfVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHByb2plY3RGb3JtIGZyb20gXCIuL2Zvcm1OZXdQcm9qZWN0XCI7XG5pbXBvcnQgeyBtYWtlUHJvamVjdENhcmQgfSBmcm9tIFwiLi9zY3JlZW5Qcm9qZWN0Q2FyZFwiO1xuaW1wb3J0IHsgbWFrZVRvZG9DYXJkIH0gZnJvbSBcIi4vc2NyZWVuVG9kb0NhcmRcIjtcbmltcG9ydCB7IHRhc2tGb3JtIH0gZnJvbSBcIi4vZm9ybU5ld1Rhc2tcIjtcbmltcG9ydCB7IHRvZG9FZGl0IH0gZnJvbSBcIi4vZm9ybUVkaXRUb2RvXCI7XG5pbXBvcnQgVW5jaGVja2VkSWNvbiBmcm9tIFwiLi9pY29uLXVuY2hlY2tlZC5zdmdcIjtcbmltcG9ydCBDaGVja2VkSWNvbiBmcm9tIFwiLi9pY29uLWNoZWNrZWQuc3ZnXCI7XG5cbmxldCBidG5OZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmJ0bk5ld1Byb2plY3QuaW5uZXJUZXh0ID0gXCJOZXcgUHJvamVjdFwiO1xuYnRuTmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdG9nZ2xlUHJvamVjdEZvcm0oKSk7XG5cbmZ1bmN0aW9uIHRvZ2dsZVByb2plY3RGb3JtKCkge1xuICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiaW52aXNpYmxlXCIpO1xufVxuXG5jb25zdCBwcm9qZWN0c0JhckNvbnRyb2wgPSB7XG4gIHJlZnJlc2hQcm9qZWN0c0JhcigpIHtcbiAgICBsZXQgcHJvamVjdHNCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWJhclwiKTtcbiAgICBzY3JlZW5DbGVhblVwKFwiLnByb2plY3RzLWJhclwiKTtcbiAgICBsZXQgcHJvamVjdHMgPSBBcHAuZ2V0UHJvamVjdHMoKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBsZXQgcHJvamVjdENhcmQgPSBtYWtlUHJvamVjdENhcmQocHJvamVjdCk7XG4gICAgICBwcm9qZWN0c0Jhci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZGVzZWxlY3RQcmV2aW91c1Byb2plY3QoKSB7XG4gICAgbGV0IHByZXZpb3VzID0gdG9kb0JhckNvbnRyb2wuY3VycmVudFByb2plY3Q7XG4gICAgbGV0IHByb2plY3RzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1iYXJcIik7XG4gICAgbGV0IHByb2plY3RBcnJheSA9IHByb2plY3RzQmFyLmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoK3Byb2plY3RBcnJheVtpXS5kYXRhc2V0LmlkID09IHByZXZpb3VzKSB7XG4gICAgICAgIHByb2plY3RBcnJheVtpXS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtcHJvamVjdFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59O1xuXG5jb25zdCB0b2RvQmFyQ29udHJvbCA9IHtcbiAgY3VycmVudFByb2plY3Q6IFwibm9uZVwiLFxuICByZW5kZXJUb2RvQmFyKGlkLCBuZXdUb2RvKSB7XG4gICAgbGV0IHRvZG9CYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tYmFyXCIpO1xuICAgIHNjcmVlbkNsZWFuVXAoXCIudG9kby1iYXJcIik7XG4gICAgbGV0IGJ0bkFkZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bkFkZFRvZG8uaW5uZXJUZXh0ID0gXCJOZXcgVG9kb1wiO1xuICAgIGJ0bkFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFkZFRvRG8oaWQpKTtcbiAgICBsZXQgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9MaXN0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3RcIik7XG4gICAgbGV0IHRvZG9zID0gQXBwLmdldFByb2plY3QoaWQpLnRvZG9zO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0b2RvQ2FyZCA9IG1ha2VUb2RvQ2FyZChpZCwgdG9kb3NbaV0pO1xuICAgICAgaWYgKHRvZG9Db250ZW50Q29udHJvbC5jdXJyZW50VG9kbyA9PSArdG9kb0NhcmQuZGF0YXNldC5pZCAmJiAhbmV3VG9kbykge1xuICAgICAgICB0b2RvQ2FyZC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtdG9kb1wiKTtcbiAgICAgIH1cbiAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9DYXJkKTtcbiAgICB9XG4gICAgdG9kb0Jhci5hcHBlbmRDaGlsZChidG5BZGRUb2RvKTtcbiAgICB0b2RvQmFyLmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcbiAgICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gaWQ7XG4gIH0sXG4gIHJlZnJlc2hUb2RvQmFyKGlkKSB7XG4gICAgaWYgKGlkID09IHRoaXMuY3VycmVudFByb2plY3QpIHtcbiAgICAgIHNjcmVlbkNsZWFuVXAoXCIudG9kby1iYXJcIik7XG4gICAgfVxuICB9LFxuICBkZWxldGVUb2RvKHRvZG9JZCkge1xuICAgIEFwcC5nZXRQcm9qZWN0KHRoaXMuY3VycmVudFByb2plY3QpLmRlbGV0ZVRvZG8odG9kb0lkKTtcbiAgICB0aGlzLnJlbmRlclRvZG9CYXIodGhpcy5jdXJyZW50UHJvamVjdCk7XG4gICAgdG9kb0NvbnRlbnRDb250cm9sLnJlZnJlc2hUb2RvQ29udGVudEluZm8odG9kb0lkKTtcbiAgfSxcbn07XG5cbmNvbnN0IHRvZG9Db250ZW50Q29udHJvbCA9IHtcbiAgY3VycmVudFByb2plY3Q6IFwiXCIsXG4gIGN1cnJlbnRUb2RvOiBcIm5vbmVcIixcbiAgc2hvd2luZ1Rhc2tGb3JtOiBmYWxzZSxcbiAgc2hvd2luZ1RvZG9FZGl0Rm9ybTogZmFsc2UsXG5cbiAgcmVuZGVyVG9kb0NvbnRlbnRQcm9qZWN0KGlkKSB7XG4gICAgc2NyZWVuQ2xlYW5VcChcIi50b2RvLWNvbnRlbnRcIik7XG4gICAgbGV0IHRvZG9Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWNvbnRlbnRcIik7XG4gICAgbGV0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBwcm9qZWN0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXJcIik7XG4gICAgcHJvamVjdEJvZHkuY2xhc3NMaXN0LmFkZChcInByb2plY3QtYm9keVwiKTtcbiAgICBsZXQgcHJvamVjdCA9IEFwcC5nZXRQcm9qZWN0KGlkKTtcbiAgICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdG9kb1RpdGxlLmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcbiAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgIHRvZG9Db250ZW50LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuICAgIGlmICh0aGlzLmN1cnJlbnRQcm9qZWN0ICE9PSBpZCkge1xuICAgICAgdGhpcy5jdXJyZW50VG9kbyA9IFwibm9uZVwiO1xuICAgICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IGlkO1xuICAgIH1cbiAgICB0b2RvQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Qm9keSk7XG4gICAgaWYgKHByb2plY3QudG9kb3MubGVuZ3RoIDwgMSkge1xuICAgICAgbGV0IGVtcHR5RGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGVtcHR5RGlhbG9nLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWVtcHR5LWRpYWxvZ1wiKTtcbiAgICAgIGxldCBlbXB0eUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGVtcHR5Q29udGVudC5pbm5lclRleHQgPVxuICAgICAgICBcIlRoaXMgcHJvamVjdCBpcyBlbXB0eS4gRG8geW91IHdhbnQgdG8gYWRkIGEgbmV3IFRvLWRvIGxpc3Q/XCI7XG4gICAgICBlbXB0eURpYWxvZy5hcHBlbmRDaGlsZChlbXB0eUNvbnRlbnQpO1xuICAgICAgbGV0IG5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgbmV3VG9kby5pbm5lclRleHQgPSBcIlllc1wiO1xuICAgICAgbmV3VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWRkVG9EbyhpZCkpO1xuICAgICAgbGV0IGJ0bkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidG5EZWxldGUuaW5uZXJUZXh0ID0gXCJEZWxldGUgUHJvamVjdFwiO1xuICAgICAgYnRuRGVsZXRlLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgYCR7aWR9YCk7XG4gICAgICBidG5EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGVsZXRlUHJvamVjdCgrYnRuRGVsZXRlLmRhdGFzZXQuaWQpO1xuICAgICAgfSk7XG4gICAgICBlbXB0eURpYWxvZy5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgICAgIGVtcHR5RGlhbG9nLmFwcGVuZENoaWxkKGJ0bkRlbGV0ZSk7XG4gICAgICBwcm9qZWN0Qm9keS5hcHBlbmRDaGlsZChlbXB0eURpYWxvZyk7XG4gICAgICB0b2RvQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Qm9keSk7XG4gICAgfVxuICB9LFxuICByZW5kZXJUb2RvQ29udGVudFRvZG8ocElkLCB0SWQpIHtcbiAgICBsZXQgcHJvamVjdEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtYm9keVwiKTtcbiAgICBsZXQgdG9kb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0hlYWRlci5jbGFzc0xpc3QuYWRkKFwidG9kby1oZWFkZXJcIik7XG4gICAgbGV0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBwcm9qZWN0ID0gQXBwLmdldFByb2plY3QocElkKTtcbiAgICBsZXQgdG9kbyA9IHByb2plY3QuZ2V0VG9kbyh0SWQpO1xuICAgIHRvZG9UaXRsZS5pbm5lclRleHQgPSB0b2RvLm5hbWU7XG4gICAgdG9kb0hlYWRlci5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgIGxldCBidG5FZGl0VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuRWRpdFRvZG8uaW5uZXJUZXh0ID0gXCJFZGl0XCI7XG4gICAgYnRuRWRpdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5zaG93aW5nVG9kb0VkaXRGb3JtKSB7XG4gICAgICAgIHRoaXMuc2hvd1RvZG9FZGl0Rm9ybShwSWQsIHRJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3JlZW5DbGVhblVwKFwiLnByb2plY3QtYm9keVwiKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2RvQ29udGVudFRvZG8ocElkLCB0SWQpO1xuICAgICAgICB0aGlzLnNob3dpbmdUb2RvRWRpdEZvcm0gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0b2RvSGVhZGVyLmFwcGVuZENoaWxkKGJ0bkVkaXRUb2RvKTtcbiAgICBwcm9qZWN0Qm9keS5hcHBlbmRDaGlsZCh0b2RvSGVhZGVyKTtcbiAgICBsZXQgdG9kb0NvbnRlbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvQ29udGVudEluZm8uY2xhc3NMaXN0LmFkZChcInRvZG8tY29udGVudC1pbmZvXCIpO1xuICAgIHByb2plY3RCb2R5LmFwcGVuZENoaWxkKHRvZG9Db250ZW50SW5mbyk7XG4gICAgaWYgKHRvZG8udGFza3MubGVuZ3RoIDwgMSkge1xuICAgICAgbGV0IGVtcHR5T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgZW1wdHlEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGVtcHR5RGlhbG9nLmlubmVyVGV4dCA9XG4gICAgICAgIFwiVGhpcyBUb2RvIGxpc3QgaXMgZW1wdHkuIERvIHlvdSB3YW50IHRvIGFkZCBhIG5ldyB0YXNrP1wiO1xuICAgICAgbGV0IGJ0blllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidG5ZZXMuaW5uZXJUZXh0ID0gXCJZZXNcIjtcbiAgICAgIGJ0blllcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc2hvd2luZ1Rhc2tGb3JtKSB7XG4gICAgICAgICAgdGhpcy5zaG93TmV3VGFza0Zvcm0ocElkLCB0SWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjcmVlbkNsZWFuVXAoXCIucHJvamVjdC1ib2R5XCIpO1xuICAgICAgICAgIHRoaXMucmVuZGVyVG9kb0NvbnRlbnRUb2RvKHBJZCwgdElkKTtcbiAgICAgICAgICB0aGlzLnNob3dpbmdUYXNrRm9ybSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxldCBidG5EZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGJ0bkRlbGV0ZVRvZG8uaW5uZXJUZXh0ID0gXCJEZWxldGUgVG9kb1wiO1xuICAgICAgYnRuRGVsZXRlVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGVsZXRlVG9kbyh0SWQpKTtcbiAgICAgIGVtcHR5T3B0aW9ucy5hcHBlbmRDaGlsZChlbXB0eURpYWxvZyk7XG4gICAgICBlbXB0eU9wdGlvbnMuYXBwZW5kQ2hpbGQoYnRuWWVzKTtcbiAgICAgIGVtcHR5T3B0aW9ucy5hcHBlbmRDaGlsZChidG5EZWxldGVUb2RvKTtcbiAgICAgIHRvZG9IZWFkZXIuYXBwZW5kQ2hpbGQoZW1wdHlPcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRhc2tzID0gdG9kby50YXNrcztcbiAgICAgIGxldCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIG5ld1Rhc2suaW5uZXJUZXh0ID0gXCJOZXcgVGFza1wiO1xuICAgICAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc2hvd2luZ1Rhc2tGb3JtKSB7XG4gICAgICAgICAgdGhpcy5zaG93TmV3VGFza0Zvcm0ocElkLCB0SWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjcmVlbkNsZWFuVXAoXCIucHJvamVjdC1ib2R5XCIpO1xuICAgICAgICAgIHRoaXMucmVuZGVyVG9kb0NvbnRlbnRUb2RvKHBJZCwgdElkKTtcbiAgICAgICAgICB0aGlzLnNob3dpbmdUYXNrRm9ybSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKFwidGFza2xpc3RcIik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YXNrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza1Jvdy5jbGFzc0xpc3QuYWRkKFwidGFzay1yb3dcIik7XG4gICAgICAgIHRhc2tSb3cuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBgJHt0YXNrc1tpXS5pZH1gKTtcbiAgICAgICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdGFza3NbaV0uZGVzY3JpcHRpb247XG4gICAgICAgIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTpcIjtcbiAgICAgICAgbGV0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0YXNrUHJpb3JpdHkuaW5uZXJUZXh0ID0gdGFza3NbaV0ucHJpb3JpdHk7XG4gICAgICAgIGxldCB0YXNrU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRhc2tTdGF0dXMuY2xhc3NMaXN0LmFkZChcInRhc2stc3RhdHVzXCIpO1xuICAgICAgICB0YXNrc1tpXS5jaGVja2VkXG4gICAgICAgICAgPyAodGFza1N0YXR1cy5pbm5lclRleHQgPSBcIkRvbmUhXCIpXG4gICAgICAgICAgOiAodGFza1N0YXR1cy5pbm5lclRleHQgPSBcIlRvIGJlIGRvbmVcIik7XG4gICAgICAgIGxldCBidG5EZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnRuRGVsZXRlVGFzay5pbm5lclRleHQgPSBcIkRlbGV0ZVwiO1xuICAgICAgICBidG5EZWxldGVUYXNrLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgYCR7dGFza3NbaV0uaWR9YCk7XG4gICAgICAgIGJ0bkRlbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgIHRvZG8uZGVsZXRlVGFzaygrYnRuRGVsZXRlVGFzay5kYXRhc2V0LmlkKTtcbiAgICAgICAgICBzY3JlZW5DbGVhblVwKFwiLnByb2plY3QtYm9keVwiKTtcbiAgICAgICAgICB0aGlzLnJlbmRlclRvZG9Db250ZW50VG9kbyhwSWQsIHRJZCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgdGFza0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICB0YXNrSWNvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1pY29uXCIpO1xuICAgICAgICBpZiAodGFza3NbaV0uY2hlY2tlZCkge1xuICAgICAgICAgIHRhc2tJY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkljb24gZm9yIGNoZWNrZWQgdGFza1wiKTtcbiAgICAgICAgICB0YXNrSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgQ2hlY2tlZEljb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhc2tJY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkljb24gZm9yIHVuY2hlY2tlZCB0YXNrXCIpO1xuICAgICAgICAgIHRhc2tJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBVbmNoZWNrZWRJY29uKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGFza1Jvd0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrUm93SW5mby5jbGFzc0xpc3QuYWRkKFwidGFzay1yb3ctaW5mb1wiKTtcbiAgICAgICAgbGV0IHRhc2tSb3dJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrUm93SW1nLmNsYXNzTGlzdC5hZGQoXCJpY29uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgbGV0IHRhc2tSb3dUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza1Jvd1RleHQuY2xhc3NMaXN0LmFkZChcInRhc2stcm93LXRleHRcIik7XG4gICAgICAgIGxldCB0YXNrUm93QWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tSb3dBY3Rpb25zLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXJvdy1hY3Rpb25zXCIpO1xuICAgICAgICB0YXNrUm93QWN0aW9ucy5jbGFzc0xpc3QuYWRkKFwidGFzay1yb3ctYWN0aW9uc1wiKTtcbiAgICAgICAgdGFza1Jvd0luZm8uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgICAgIHRhc2tSb3dJbmZvLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gICAgICAgIHRhc2tSb3dJbmZvLmFwcGVuZENoaWxkKHRhc2tTdGF0dXMpO1xuICAgICAgICB0YXNrUm93SW1nLmFwcGVuZENoaWxkKHRhc2tJY29uKTtcbiAgICAgICAgdGFza1Jvd1RleHQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgdGFza1Jvd0FjdGlvbnMuYXBwZW5kQ2hpbGQoYnRuRGVsZXRlVGFzayk7XG4gICAgICAgIHRhc2tSb3cuYXBwZW5kQ2hpbGQodGFza1Jvd0luZm8pO1xuICAgICAgICB0YXNrUm93LmFwcGVuZENoaWxkKHRhc2tSb3dJbWcpO1xuICAgICAgICB0YXNrUm93LmFwcGVuZENoaWxkKHRhc2tSb3dUZXh0KTtcbiAgICAgICAgdGFza1Jvdy5hcHBlbmRDaGlsZCh0YXNrUm93QWN0aW9ucyk7XG4gICAgICAgIHRhc2tSb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgIHRvZG8uZ2V0VGFzaygrdGFza1Jvdy5kYXRhc2V0LmlkKS5jaGVja2VkXG4gICAgICAgICAgICA/IHRvZG8udW5jaGVja1Rhc2soK3Rhc2tSb3cuZGF0YXNldC5pZClcbiAgICAgICAgICAgIDogdG9kby5jaGVja1Rhc2soK3Rhc2tSb3cuZGF0YXNldC5pZCk7XG4gICAgICAgICAgc2NyZWVuQ2xlYW5VcChcIi5wcm9qZWN0LWJvZHlcIik7XG4gICAgICAgICAgdGhpcy5yZW5kZXJUb2RvQ29udGVudFRvZG8ocElkLCB0SWQpO1xuICAgICAgICAgIHRvZG9CYXJDb250cm9sLnJlbmRlclRvZG9CYXIocElkKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tSb3cpO1xuICAgICAgfVxuICAgICAgdG9kb0hlYWRlci5hcHBlbmRDaGlsZChuZXdUYXNrKTtcbiAgICAgIHRvZG9Db250ZW50SW5mby5hcHBlbmRDaGlsZCh0YXNrTGlzdCk7XG4gICAgfVxuICAgIHByb2plY3RCb2R5LmFwcGVuZENoaWxkKHRvZG9Db250ZW50SW5mbyk7XG4gICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IHBJZDtcbiAgICB0aGlzLmN1cnJlbnRUb2RvID0gdElkO1xuICB9LFxuICByZWZyZXNoVG9kb0NvbnRlbnQoaWQpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50UHJvamVjdCA9PSBpZCkge1xuICAgICAgc2NyZWVuQ2xlYW5VcChcIi50b2RvLWNvbnRlbnRcIik7XG4gICAgfVxuICB9LFxuICByZWZyZXNoVG9kb0NvbnRlbnRJbmZvKGlkKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFRvZG8gPT0gaWQpIHtcbiAgICAgIHNjcmVlbkNsZWFuVXAoXCIucHJvamVjdC1ib2R5XCIpO1xuICAgICAgdGhpcy5jdXJyZW50VG9kbyA9PSBcIm5vbmVcIjtcbiAgICB9XG4gIH0sXG4gIHNob3dOZXdUYXNrRm9ybShwSWQsIHRJZCkge1xuICAgIGxldCB0b2RvSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWhlYWRlclwiKTtcbiAgICB0b2RvSGVhZGVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKHBJZCwgdElkKSk7XG4gICAgdGhpcy5zaG93aW5nVGFza0Zvcm0gPSB0cnVlO1xuICB9LFxuXG4gIHNob3dUb2RvRWRpdEZvcm0ocElkLCB0SWQpIHtcbiAgICBsZXQgdG9kb0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1oZWFkZXJcIik7XG4gICAgdG9kb0hlYWRlci5hcHBlbmRDaGlsZCh0b2RvRWRpdChwSWQsIHRJZCkpO1xuICAgIHRoaXMuc2hvd2luZ1RvZG9FZGl0Rm9ybSA9IHRydWU7XG4gIH0sXG5cbiAgZGVzZWxlY3RQcmV2aW91c1RvZG8oKSB7XG4gICAgbGV0IHByZXZpb3VzID0gdGhpcy5jdXJyZW50VG9kbztcbiAgICBsZXQgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdFwiKTtcbiAgICBsZXQgdG9kb0FycmF5ID0gdG9kb0xpc3QuY2hpbGRyZW47XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICgrdG9kb0FycmF5W2ldLmRhdGFzZXQuaWQgPT0gcHJldmlvdXMpIHtcbiAgICAgICAgdG9kb0FycmF5W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC10b2RvXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGFkZFRvRG8oaWQpIHtcbiAgbGV0IHByb2plY3QgPSBBcHAuZ2V0UHJvamVjdChpZCk7XG4gIHByb2plY3QuY3JlYXRlVG9kbygpO1xuICB0b2RvQ29udGVudENvbnRyb2wucmVuZGVyVG9kb0NvbnRlbnRQcm9qZWN0KGlkKTtcbiAgdG9kb0JhckNvbnRyb2wucmVuZGVyVG9kb0JhcihpZCwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaWQpIHtcbiAgQXBwLmRlbGV0ZVByb2plY3QoaWQpO1xuICBwcm9qZWN0c0JhckNvbnRyb2wucmVmcmVzaFByb2plY3RzQmFyKCk7XG4gIHRvZG9CYXJDb250cm9sLnJlZnJlc2hUb2RvQmFyKGlkKTtcbiAgdG9kb0NvbnRlbnRDb250cm9sLnJlZnJlc2hUb2RvQ29udGVudChpZCk7XG4gIGlmIChBcHAucHJvamVjdHMubGVuZ3RoIDwgMSkge1xuICAgIHRvZG9CYXJDb250cm9sLmN1cnJlbnRQcm9qZWN0ID0gXCJub25lXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlVG9kbyh0b2RvSWQpIHtcbiAgQXBwLmdldFByb2plY3QodG9kb0JhckNvbnRyb2wuY3VycmVudFByb2plY3QpLmRlbGV0ZVRvZG8odG9kb0lkKTtcbiAgdG9kb0JhckNvbnRyb2wucmVuZGVyVG9kb0Jhcih0b2RvQmFyQ29udHJvbC5jdXJyZW50UHJvamVjdCk7XG4gIHRvZG9Db250ZW50Q29udHJvbC5yZWZyZXNoVG9kb0NvbnRlbnRJbmZvKHRvZG9JZCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2socHJvamVjdElkLCB0b2RvSWQsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSkge1xuICBBcHAuZ2V0UHJvamVjdChwcm9qZWN0SWQpLmdldFRvZG8odG9kb0lkKS5jcmVhdGVUYXNrKGRlc2NyaXB0aW9uLCBwcmlvcml0eSk7XG4gIHNjcmVlbkNsZWFuVXAoXCIucHJvamVjdC1ib2R5XCIpO1xuICB0b2RvQ29udGVudENvbnRyb2wucmVuZGVyVG9kb0NvbnRlbnRUb2RvKHByb2plY3RJZCwgdG9kb0lkKTtcbiAgdG9kb0JhckNvbnRyb2wucmVuZGVyVG9kb0Jhcihwcm9qZWN0SWQpO1xuICB0b2RvQ29udGVudENvbnRyb2wuc2hvd2luZ1Rhc2tGb3JtID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRvZG9OYW1lKHBJZCwgdElkLCB0b2RvTmFtZSkge1xuICBBcHAuZ2V0UHJvamVjdChwSWQpLmdldFRvZG8odElkKS5jaGFuZ2VOYW1lKHRvZG9OYW1lKTtcbiAgc2NyZWVuQ2xlYW5VcChcIi5wcm9qZWN0LWJvZHlcIik7XG4gIHRvZG9Db250ZW50Q29udHJvbC5yZW5kZXJUb2RvQ29udGVudFRvZG8ocElkLCB0SWQpO1xuICB0b2RvQmFyQ29udHJvbC5yZW5kZXJUb2RvQmFyKHBJZCk7XG4gIHRvZG9Db250ZW50Q29udHJvbC5zaG93aW5nVG9kb0VkaXRGb3JtID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNjcmVlbkNsZWFuVXAoc2VsZWN0b3IpIHtcbiAgbGV0IHNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICBpZiAoc2NyZWVuKSB7XG4gICAgd2hpbGUgKHNjcmVlbi5maXJzdENoaWxkKSB7XG4gICAgICBzY3JlZW4ucmVtb3ZlQ2hpbGQoc2NyZWVuLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBidG5OZXdQcm9qZWN0O1xuZXhwb3J0IHtcbiAgc2NyZWVuQ2xlYW5VcCxcbiAgZGVsZXRlUHJvamVjdCxcbiAgYWRkVGFzayxcbiAgY2hhbmdlVG9kb05hbWUsXG4gIHByb2plY3RzQmFyQ29udHJvbCxcbiAgdG9kb0JhckNvbnRyb2wsXG4gIHRvZG9Db250ZW50Q29udHJvbCxcbn07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHtcbiAgdG9kb0NvbnRlbnRDb250cm9sLFxuICB0b2RvQmFyQ29udHJvbCxcbiAgZGVsZXRlUHJvamVjdCxcbiAgcHJvamVjdHNCYXJDb250cm9sLFxufSBmcm9tIFwiLi9zY3JlZW5Db250cm9sbGVyXCI7XG5cbmZ1bmN0aW9uIG1ha2VQcm9qZWN0Q2FyZChwcm9qZWN0KSB7XG4gIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGAke3Byb2plY3QuaWR9YCk7XG4gIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gIGlmICh0b2RvQmFyQ29udHJvbC5jdXJyZW50UHJvamVjdCA9PSBwcm9qZWN0LmlkKSB7XG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtcHJvamVjdFwiKTtcbiAgfVxuICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xuICBsZXQgZGVhZGxpbmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZWFkbGluZUxhYmVsLmlubmVyVGV4dCA9IFwiRGVhZGxpbmU6IFwiO1xuICBsZXQgcHJvamVjdERlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3REZWFkbGluZS5pbm5lclRleHQgPSBwcm9qZWN0LmRlYWRsaW5lO1xuICBsZXQgZHVlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZHVlTGFiZWwuaW5uZXJUZXh0ID0gXCJEdWUgaW46IFwiO1xuICBsZXQgcHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0SW5mby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pbmZvXCIpO1xuICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKGRlYWRsaW5lTGFiZWwpO1xuICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChwcm9qZWN0RGVhZGxpbmUpO1xuICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChkdWVMYWJlbCk7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdEluZm8pO1xuICBsZXQgcHJvamVjdEFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0QWN0aW9ucy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1hY3Rpb25zXCIpO1xuICBsZXQgYnRuRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuRGVsZXRlLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgYCR7cHJvamVjdC5pZH1gKTtcbiAgYnRuRGVsZXRlLmlubmVyVGV4dCA9IFwiRGVsZXRlXCI7XG4gIGJ0bkRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZGVsZXRlUHJvamVjdCgrYnRuRGVsZXRlLmRhdGFzZXQuaWQpO1xuICB9KTtcbiAgcHJvamVjdEFjdGlvbnMuYXBwZW5kQ2hpbGQoYnRuRGVsZXRlKTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0QWN0aW9ucyk7XG4gIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBgJHtwcm9qZWN0LmlkfWApO1xuICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodG9kb0JhckNvbnRyb2wuY3VycmVudFByb2plY3QgPT0gXCJub25lXCIpIHtcbiAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLXByb2plY3RcIik7XG4gICAgfVxuICAgIGlmICh0b2RvQmFyQ29udHJvbC5jdXJyZW50UHJvamVjdCAhPT0gK3Byb2plY3REaXYuZGF0YXNldC5pZCkge1xuICAgICAgcHJvamVjdHNCYXJDb250cm9sLmRlc2VsZWN0UHJldmlvdXNQcm9qZWN0KCk7XG4gICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1wcm9qZWN0XCIpO1xuICAgIH1cbiAgICB0b2RvQmFyQ29udHJvbC5yZW5kZXJUb2RvQmFyKHByb2plY3QuaWQpO1xuICAgIHRvZG9Db250ZW50Q29udHJvbC5yZW5kZXJUb2RvQ29udGVudFByb2plY3QoK3Byb2plY3REaXYuZGF0YXNldC5pZCk7XG4gIH0pO1xuICByZXR1cm4gcHJvamVjdERpdjtcbn1cblxuZXhwb3J0IHsgbWFrZVByb2plY3RDYXJkIH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHtcbiAgc2NyZWVuQ2xlYW5VcCxcbiAgdG9kb0NvbnRlbnRDb250cm9sLFxuICB0b2RvQmFyQ29udHJvbCxcbn0gZnJvbSBcIi4vc2NyZWVuQ29udHJvbGxlclwiO1xuXG5mdW5jdGlvbiBtYWtlVG9kb0NhcmQocHJvamVjdElkLCB0b2RvKSB7XG4gIGxldCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0Rpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGAke3RvZG8uaWR9YCk7XG4gIHRvZG9EaXYuY2xhc3NMaXN0LmFkZChcInRvZG8tZGl2XCIpO1xuICB0b2RvRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBzY3JlZW5DbGVhblVwKFwiLnByb2plY3QtYm9keVwiKTtcbiAgICBpZiAodG9kb0NvbnRlbnRDb250cm9sLmN1cnJlbnRUb2RvICE9PSB0b2RvLmlkKSB7XG4gICAgICB0b2RvQ29udGVudENvbnRyb2wuZGVzZWxlY3RQcmV2aW91c1RvZG8oKTtcbiAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLXRvZG9cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLXRvZG9cIik7XG4gICAgfVxuICAgIHRvZG9Db250ZW50Q29udHJvbC5yZW5kZXJUb2RvQ29udGVudFRvZG8ocHJvamVjdElkLCB0b2RvLmlkKTtcbiAgfSk7XG4gIGxldCB0b2RvSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0b2RvQWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0b2RvTmFtZS5pbm5lclRleHQgPSB0b2RvLm5hbWU7XG4gIGxldCB0b2RvRGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdG9kb0RlYWRsaW5lLmlubmVyVGV4dCA9IHRvZG8uZGVhZGxpbmU7XG4gIGxldCB0YXNrTnVtYmVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHRhc2tzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza3NMYWJlbC5pbm5lclRleHQgPSBcIlRhc2tzOiBcIjtcbiAgbGV0IHRvZG9UYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0b2RvVGFza3MuaW5uZXJUZXh0ID0gdG9kby50YXNrcy5sZW5ndGg7XG4gIHRhc2tOdW1iZXJSb3cuYXBwZW5kQ2hpbGQodGFza3NMYWJlbCk7XG4gIHRhc2tOdW1iZXJSb3cuYXBwZW5kQ2hpbGQodG9kb1Rhc2tzKTtcbiAgbGV0IGNvbXBsZXRpb25Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgY29tcGxldGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCBjb21wbGV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbXBsZXRpb25Sb3cuYXBwZW5kQ2hpbGQoY29tcGxldGlvbkxhYmVsKTtcbiAgY29tcGxldGlvblJvdy5hcHBlbmRDaGlsZChjb21wbGV0aW9uKTtcbiAgbGV0IGNvbXBsZXRlZCA9IHRvZG8udGFza3MuZmlsdGVyKCh0KSA9PiB0LmNoZWNrZWQpO1xuICBsZXQgY29tcGxldGVkVG90YWwgPSBjb21wbGV0ZWQubGVuZ3RoO1xuICBpZiAodG9kby50YXNrcy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IGNvbXBsZXRlZFBlcmNlbnRhZ2UgPVxuICAgICAgTWF0aC5yb3VuZCgoY29tcGxldGVkVG90YWwgLyB0b2RvLnRhc2tzLmxlbmd0aCkgKiAxMDAwMCkgLyAxMDA7XG4gICAgY29tcGxldGlvbi5pbm5lclRleHQgPSBgJHtjb21wbGV0ZWRQZXJjZW50YWdlfSAlYDtcbiAgICBjb21wbGV0aW9uTGFiZWwuaW5uZXJUZXh0ID0gXCJDb21wbGV0aW9uOiBcIjtcbiAgfVxuICBsZXQgYnRuRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuRGVsZXRlLmlubmVyVGV4dCA9IFwiRGVsZXRlXCI7XG4gIGJ0bkRlbGV0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGAke3RvZG8uaWR9YCk7XG4gIGJ0bkRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdG9kb0JhckNvbnRyb2wuZGVsZXRlVG9kbygrYnRuRGVsZXRlLmRhdGFzZXQuaWQpO1xuICB9KTtcbiAgdG9kb0luZm8uYXBwZW5kQ2hpbGQodG9kb05hbWUpO1xuICB0b2RvSW5mby5hcHBlbmRDaGlsZCh0b2RvRGVhZGxpbmUpO1xuICB0b2RvSW5mby5hcHBlbmRDaGlsZCh0YXNrTnVtYmVyUm93KTtcbiAgaWYgKHRvZG8udGFza3MubGVuZ3RoID4gMCkge1xuICAgIHRvZG9JbmZvLmFwcGVuZENoaWxkKGNvbXBsZXRpb25Sb3cpO1xuICB9XG4gIHRvZG9BY3Rpb25zLmFwcGVuZENoaWxkKGJ0bkRlbGV0ZSk7XG4gIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0luZm8pO1xuICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9BY3Rpb25zKTtcbiAgcmV0dXJuIHRvZG9EaXY7XG59XG5cbmV4cG9ydCB7IG1ha2VUb2RvQ2FyZCB9O1xuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuY29uc3Qgc3RvcmFnZU1hbmFnZW1lbnQgPSB7XG4gIHN0b3JhZ2VQcm9qZWN0czogW10sXG4gIGluaXRpYWxMb2FkKCkge1xuICAgIHRoaXMuc3RvcmFnZVByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICBsZXQgcHJvamVjdCA9IFByb2plY3QoKTtcbiAgICBsZXQgcHJvamVjdFByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm9qZWN0KTtcbiAgICBsZXQgdG9kbyA9IFRvZG8oKTtcbiAgICBsZXQgdG9kb1Byb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0b2RvKTtcbiAgICBsZXQgdGFzayA9IFRhc2soKTtcbiAgICBsZXQgdGFza1Byb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXNrKTtcblxuICAgIHRoaXMuc3RvcmFnZVByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihwcm9qZWN0LCBwcm9qZWN0UHJvdG90eXBlKTtcbiAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodG9kbywgdG9kb1Byb3RvdHlwZSk7XG4gICAgICAgIHRvZG8udGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0YXNrLCB0YXNrUHJvdG90eXBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlUHJvamVjdHM7XG4gIH0sXG4gIHNhdmUoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShBcHAucHJvamVjdHMpKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2VNYW5hZ2VtZW50O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgVGFzayA9IChkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGlkKSA9PiB7XG4gIGNvbnN0IHByb3RvID0ge1xuICAgIGNoZWNrKCkge30sXG4gICAgdW5jaGVjaygpIHt9LFxuICB9O1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICBPYmplY3QuY3JlYXRlKHByb3RvKSxcbiAgICB7IGRlc2NyaXB0aW9uIH0sXG4gICAgeyBwcmlvcml0eSB9LFxuICAgIHsgaWQgfSxcbiAgICB7IGNoZWNrZWQ6IGZhbHNlIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHN0b3JhZ2VNYW5hZ2VtZW50IGZyb20gXCIuL3N0b3JhZ2VNYW5hZ2VtZW50XCI7XG5cbmNvbnN0IFRvZG8gPSAobmFtZSwgZGVhZGxpbmUsIGlkKSA9PiB7XG4gIGNvbnN0IHByb3RvID0ge1xuICAgIGNyZWF0ZVRhc2soZGVzY3JpcHRpb24sIHByaW9yaXR5KSB7XG4gICAgICBsZXQgaWQgPSB0aGlzLnRhc2tzLmxlbmd0aDtcbiAgICAgIGxldCB0YXNrc1NvcnRlZCA9IHRoaXMudGFza3Muc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc1NvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaWQgPT0gdGFza3NTb3J0ZWRbaV0uaWQpIHtcbiAgICAgICAgICBpZCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgdGFzayA9IFRhc2soZGVzY3JpcHRpb24sIHByaW9yaXR5LCBpZCk7XG4gICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgICBzdG9yYWdlTWFuYWdlbWVudC5zYXZlKCk7XG4gICAgfSxcbiAgICBnZXRUYXNrcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICAgIH0sXG4gICAgZ2V0VGFzayhpZCkge1xuICAgICAgbGV0IHRhc2sgPSB0aGlzLnRhc2tzLmZpbHRlcigodCkgPT4gdC5pZCA9PSBpZClbMF07XG4gICAgICByZXR1cm4gdGFzaztcbiAgICB9LFxuICAgIGNoYW5nZU5hbWUobmV3TmFtZSkge1xuICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICAgIHN0b3JhZ2VNYW5hZ2VtZW50LnNhdmUoKTtcbiAgICB9LFxuICAgIGNoYW5nZVRhc2tEZXNjcmlwdGlvbihkZXNjcmlwdGlvbiwgaWQpIHtcbiAgICAgIGxldCB0YXNrID0gdGhpcy5nZXRUYXNrKGlkKTtcbiAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgIHN0b3JhZ2VNYW5hZ2VtZW50LnNhdmUoKTtcbiAgICB9LFxuICAgIGNoYW5nZVRhc2tQcmlvcml0eShwcmlvcml0eSwgaWQpIHtcbiAgICAgIGxldCB0YXNrID0gdGhpcy5nZXRUYXNrKGlkKTtcbiAgICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgIHN0b3JhZ2VNYW5hZ2VtZW50LnNhdmUoKTtcbiAgICB9LFxuICAgIGNoZWNrVGFzayhpZCkge1xuICAgICAgbGV0IHRhc2sgPSB0aGlzLmdldFRhc2soaWQpO1xuICAgICAgdGFzay5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHN0b3JhZ2VNYW5hZ2VtZW50LnNhdmUoKTtcbiAgICB9LFxuICAgIHVuY2hlY2tUYXNrKGlkKSB7XG4gICAgICBsZXQgdGFzayA9IHRoaXMuZ2V0VGFzayhpZCk7XG4gICAgICB0YXNrLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHN0b3JhZ2VNYW5hZ2VtZW50LnNhdmUoKTtcbiAgICB9LFxuICAgIGRlbGV0ZVRhc2soaWQpIHtcbiAgICAgIGxldCBuZXdUYXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0KSA9PiB0LmlkICE9PSBpZCk7XG4gICAgICB0aGlzLnRhc2tzID0gbmV3VGFza3M7XG4gICAgICBzdG9yYWdlTWFuYWdlbWVudC5zYXZlKCk7XG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgT2JqZWN0LmNyZWF0ZShwcm90byksXG4gICAgeyB0YXNrczogW10gfSxcbiAgICB7IG5hbWUgfSxcbiAgICB7IGRlYWRsaW5lIH0sXG4gICAgeyBpZCB9XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgYnRuTmV3UHJvamVjdCBmcm9tIFwiLi9zY3JlZW5Db250cm9sbGVyXCI7XG5pbXBvcnQgcHJvamVjdEZvcm0gZnJvbSBcIi4vZm9ybU5ld1Byb2plY3RcIjtcbmltcG9ydCBzdG9yYWdlTWFuYWdlbWVudCBmcm9tIFwiLi9zdG9yYWdlTWFuYWdlbWVudFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IHByb2plY3RzQmFyQ29udHJvbCB9IGZyb20gXCIuL3NjcmVlbkNvbnRyb2xsZXJcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xubmF2QmFyLmFwcGVuZENoaWxkKGJ0bk5ld1Byb2plY3QpO1xubmF2QmFyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbmJvZHkuYXBwZW5kQ2hpbGQobmF2QmFyKTtcblxuY29uc3QgcHJvamVjdHNCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdHNCYXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWJhclwiKTtcbmJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdHNCYXIpO1xuXG5jb25zdCB0b2RvQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRvZG9CYXIuY2xhc3NMaXN0LmFkZChcInRvZG8tYmFyXCIpO1xuYm9keS5hcHBlbmRDaGlsZCh0b2RvQmFyKTtcblxuY29uc3QgdG9kb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudG9kb0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udGVudFwiKTtcbmJvZHkuYXBwZW5kQ2hpbGQodG9kb0NvbnRlbnQpO1xuXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlUHJvamVjdHMpKTtcbn0gZWxzZSB7XG4gIEFwcC5wcm9qZWN0cyA9IHN0b3JhZ2VNYW5hZ2VtZW50LmluaXRpYWxMb2FkKCk7XG4gIHByb2plY3RzQmFyQ29udHJvbC5yZWZyZXNoUHJvamVjdHNCYXIoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==