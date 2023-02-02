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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\n\nnav,\n.projects-bar,\nform,\n.project,\n.todo-bar,\nbody,\n.todo-content,\n.project-empty-dialog,\n.todo-list,\n.todo-div {\n  border: 1px solid black;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-rows: 1fr 4fr 15fr;\n  height: 100vh;\n}\n\nnav {\n  grid-column: 1/3;\n}\n\n.projects-bar {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 0.11fr));\n  gap: 1vw;\n  overflow: auto;\n  padding-left: 0.1vw;\n  grid-column: 1/3;\n  grid-row: 2/3;\n}\n\n.todo-bar {\n  grid-column: 1/2;\n  grid-row: 3/4;\n}\n\n.project {\n  height: 10vh;\n  align-self: center;\n}\n\n.invisible {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;AACxB;;AAEA;;;;;;;;;;EAUE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gCAAgC;EAChC,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8DAA8D;EAC9D,QAAQ;EACR,cAAc;EACd,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf","sourcesContent":["* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\n\nnav,\n.projects-bar,\nform,\n.project,\n.todo-bar,\nbody,\n.todo-content,\n.project-empty-dialog,\n.todo-list,\n.todo-div {\n  border: 1px solid black;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-rows: 1fr 4fr 15fr;\n  height: 100vh;\n}\n\nnav {\n  grid-column: 1/3;\n}\n\n.projects-bar {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 0.11fr));\n  gap: 1vw;\n  overflow: auto;\n  padding-left: 0.1vw;\n  grid-column: 1/3;\n  grid-row: 2/3;\n}\n\n.todo-bar {\n  grid-column: 1/2;\n  grid-row: 3/4;\n}\n\n.project {\n  height: 10vh;\n  align-self: center;\n}\n\n.invisible {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
    let project = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])(name, deadline, id);
    this.projects.push(project);
  },
  changeProjectName(id, name) {
    let projectArray = this.projects.filter((p) => p.id == id);
    let project = projectArray[0];
    project.name = name;
  },
  changeProjectDeadline(id, deadline) {
    let projectArray = this.projects.filter((p) => p.id == id);
    let project = projectArray[0];
    project.deadline = deadline;
  },
  deleteProject(id) {
    let newProjects = this.projects.filter((p) => p.id !== id);
    this.projects = newProjects;
  },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


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



const Project = (name, deadline, id) => {
  const proto = {
    createTodo(name, deadline) {
      if (!name) {
        let count = 1;
        let regex = /(?<=^Todo\s)\d+/;
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
    },
    getTodo(id) {
      return this.todos.filter((t) => t.id == id)[0];
    },
    changeTodoName(name, id) {
      let todo = this.getTodo(id);
      todo.name = name;
    },
    deleteTodo(id) {
      let filteredTodos = this.todos.filter((t) => t.id !== id);
      this.todos = filteredTodos;
    },
  };
  return Object.assign(
    Object.create(proto),
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "projectsBarControl": () => (/* binding */ projectsBarControl)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _formNewProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formNewProject */ "./src/formNewProject.js");




let btnNewProject = document.createElement("button");
btnNewProject.innerText = "New Project";
btnNewProject.addEventListener("click", () => toggleProjectForm());

function toggleProjectForm() {
  _formNewProject__WEBPACK_IMPORTED_MODULE_2__["default"].classList.toggle("invisible");
}

const projectsBarControl = {
  refreshProjectsBar() {
    let projectsBar = document.querySelector(".projects-bar");
    while (projectsBar.firstChild) {
      projectsBar.removeChild(projectsBar.firstChild);
    }
    let projects = _app__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
    projects.forEach((p) => {
      let projectDiv = document.createElement("div");
      projectDiv.classList.add("project");
      let projectName = document.createElement("p");
      projectName.innerText = p.name;
      let projectDeadline = document.createElement("p");
      projectDeadline.innerText = p.deadline;
      let projectInfo = document.createElement("div");
      projectInfo.appendChild(projectName);
      projectInfo.appendChild(projectDeadline);
      projectDiv.appendChild(projectInfo);
      let projectActions = document.createElement("div");
      let btnDelete = document.createElement("button");
      btnDelete.setAttribute("data-id", `${p.id}`);
      btnDelete.addEventListener("click", (event) => {
        event.stopImmediatePropagation();
        let todoBar = document.querySelector(".todo-bar");
        while (todoBar.firstChild) {
          todoBar.removeChild(todoBar.firstChild);
        }
        _app__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(+btnDelete.dataset.id);
        this.refreshProjectsBar();
      });
      btnDelete.innerText = "Delete Project";
      projectActions.appendChild(btnDelete);
      projectDiv.appendChild(projectActions);
      projectDiv.setAttribute("data-id", `${p.id}`);
      projectDiv.addEventListener("click", (event) => {
        event.stopPropagation();
        renderTodoContent(+projectDiv.dataset.id);
      });
      projectsBar.appendChild(projectDiv);
    });
  },
};

function renderTodoContent(id) {
  let todoContent = document.querySelector(".todo-content");
  while (todoContent.firstChild) {
    todoContent.removeChild(todoContent.firstChild);
  }

  let project = _app__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(id);
  renderTodoBar(id);
  let title = document.createElement("p");
  title.classList.add("todo-title");
  title.innerText = project.name;
  todoContent.appendChild(title);
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
      _app__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(+btnDelete.dataset.id);
      projectsBarControl.refreshProjectsBar();
      while (todoContent.firstChild) {
        todoContent.removeChild(todoContent.firstChild);
      }
      let todoBar = document.querySelector(".todo-bar");
      while (todoBar.firstChild) {
        todoBar.removeChild(todoBar.firstChild);
      }
    });
    emptyDialog.appendChild(newTodo);
    emptyDialog.appendChild(btnDelete);
    todoContent.appendChild(emptyDialog);
  }
}

function addToDo(id) {
  let project = _app__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(id);
  project.createTodo();
  renderTodoContent(id);
  renderTodoBar(id);
}

function renderTodoBar(id) {
  let todoBar = document.querySelector(".todo-bar");
  while (todoBar.firstChild) {
    todoBar.removeChild(todoBar.firstChild);
  }
  let btnAddTodo = document.createElement("button");
  btnAddTodo.innerText = "New Todo";
  btnAddTodo.addEventListener("click", () => addToDo(id));
  let todoList = document.createElement("div");
  todoList.classList.add("todo-list");
  let todos = _app__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(id).todos;
  for (let i = 0; i < todos.length; i++) {
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");
    todoDiv.addEventListener("click", (event) => {
      event.stopPropagation();
      let todoContent = document.querySelector(".todo-content");
      while (todoContent.firstChild) {
        todoContent.removeChild(todoContent.firstChild);
      }
      let title = document.createElement("p");
      title.innerText = _app__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(id).name;
      todoContent.appendChild(title);
      let todoTitle = document.createElement("p");
      todoTitle.innerText = todos[i].name;
      todoContent.appendChild(todoTitle);
      manageTodoContent(id, todos[i].id);
    });
    let todoInfo = document.createElement("div");
    let todoActions = document.createElement("div");
    let todoName = document.createElement("p");
    todoName.innerText = todos[i].name;
    let todoDeadline = document.createElement("p");
    todoDeadline.innerText = todos[i].deadline;
    let todoTasks = document.createElement("p");
    todoTasks.innerText = todos[i].tasks.length;
    let btnDelete = document.createElement("button");
    btnDelete.innerText = "Delete";
    btnDelete.setAttribute("data-id", `${todos[i].id}`);
    btnDelete.addEventListener("click", () => {
      _app__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(id).deleteTodo(+btnDelete.dataset.id);
      renderTodoBar(id);
    });
    let btnEdit = document.createElement("button");
    btnEdit.innerText = "Edit";
    todoInfo.appendChild(todoName);
    todoInfo.appendChild(todoDeadline);
    todoInfo.appendChild(todoTasks);
    todoActions.appendChild(btnEdit);
    todoActions.appendChild(btnDelete);
    todoDiv.appendChild(todoInfo);
    todoDiv.appendChild(todoActions);
    todoList.appendChild(todoDiv);
  }
  todoBar.appendChild(btnAddTodo);
  todoBar.appendChild(todoList);
}

function manageTodoContent(pId, tId) {
  let todoContent = document.querySelector(".todo-content");
  let project = _app__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(pId);
  let todo = project.getTodo(tId);
  let todoContentInfo = document.createElement("div");
  if (todo.tasks.length < 1) {
    let emptyOptions = document.createElement("div");
    let emptyDialog = document.createElement("p");
    emptyDialog.innerText =
      "This Todo list is empty. Do you want to add a new task?";
    let btnYes = document.createElement("button");
    btnYes.innerText = "Yes";
    let btnDeleteTodo = document.createElement("button");
    btnDeleteTodo.innerText = "Delete Todo";
    emptyOptions.appendChild(emptyDialog);
    emptyOptions.appendChild(btnYes);
    emptyOptions.appendChild(btnDeleteTodo);
    todoContentInfo.appendChild(emptyOptions);
  }
  todoContent.appendChild(todoContentInfo);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (btnNewProject);



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
    },
    getTasks() {
      return this.tasks;
    },
    getTask(id) {
      let task = this.tasks.filter((t) => t.id == id)[0];
      return task;
    },
    changeTaskDescription(description, id) {
      let task = this.getTask(id);
      task.description = description;
    },
    changeTaskPriority(priority, id) {
      let task = this.getTask(id);
      task.priority = priority;
    },
    checkTask(id) {
      let task = this.getTask(id);
      task.checked = true;
    },
    uncheckTask(id) {
      let task = this.getTask(id);
      task.checked = false;
    },
    deleteTask(id) {
      let newTasks = this.tasks.filter((t) => t.id !== id);
      this.tasks = newTasks;
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
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _screenController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screenController */ "./src/screenController.js");
/* harmony import */ var _formNewProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formNewProject */ "./src/formNewProject.js");





const body = document.querySelector("body");

const navBar = document.createElement("nav");
navBar.appendChild(_screenController__WEBPACK_IMPORTED_MODULE_2__["default"]);
navBar.appendChild(_formNewProject__WEBPACK_IMPORTED_MODULE_3__["default"]);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mb3JtTmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JlZW5Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5uYXYsXFxuLnByb2plY3RzLWJhcixcXG5mb3JtLFxcbi5wcm9qZWN0LFxcbi50b2RvLWJhcixcXG5ib2R5LFxcbi50b2RvLWNvbnRlbnQsXFxuLnByb2plY3QtZW1wdHktZGlhbG9nLFxcbi50b2RvLWxpc3QsXFxuLnRvZG8tZGl2IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMTVmcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbm5hdiB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG4ucHJvamVjdHMtYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEyMHB4LCAwLjExZnIpKTtcXG4gIGdhcDogMXZ3O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nLWxlZnQ6IDAuMXZ3O1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50b2RvLWJhciB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Ozs7Ozs7OztFQVVFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4REFBOEQ7RUFDOUQsUUFBUTtFQUNSLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5uYXYsXFxuLnByb2plY3RzLWJhcixcXG5mb3JtLFxcbi5wcm9qZWN0LFxcbi50b2RvLWJhcixcXG5ib2R5LFxcbi50b2RvLWNvbnRlbnQsXFxuLnByb2plY3QtZW1wdHktZGlhbG9nLFxcbi50b2RvLWxpc3QsXFxuLnRvZG8tZGl2IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMTVmcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbm5hdiB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG4ucHJvamVjdHMtYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEyMHB4LCAwLjExZnIpKTtcXG4gIGdhcDogMXZ3O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nLWxlZnQ6IDAuMXZ3O1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi50b2RvLWJhciB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IEFwcCA9IHtcbiAgcHJvamVjdHM6IFtdLFxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgfSxcbiAgZ2V0UHJvamVjdChpZCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbHRlcigocCkgPT4gcC5pZCA9PSBpZClbMF07XG4gIH0sXG4gIGNyZWF0ZVByb2plY3QobmFtZSwgZGVhZGxpbmUpIHtcbiAgICBsZXQgaWQgPSB0aGlzLnByb2plY3RzLmxlbmd0aDtcbiAgICBsZXQgcHJvamVjdHNTb3J0ZWQgPSB0aGlzLnByb2plY3RzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzU29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaWQgPT0gcHJvamVjdHNTb3J0ZWRbaV0uaWQpIHtcbiAgICAgICAgaWQrKztcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHByb2plY3QgPSBQcm9qZWN0KG5hbWUsIGRlYWRsaW5lLCBpZCk7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9LFxuICBjaGFuZ2VQcm9qZWN0TmFtZShpZCwgbmFtZSkge1xuICAgIGxldCBwcm9qZWN0QXJyYXkgPSB0aGlzLnByb2plY3RzLmZpbHRlcigocCkgPT4gcC5pZCA9PSBpZCk7XG4gICAgbGV0IHByb2plY3QgPSBwcm9qZWN0QXJyYXlbMF07XG4gICAgcHJvamVjdC5uYW1lID0gbmFtZTtcbiAgfSxcbiAgY2hhbmdlUHJvamVjdERlYWRsaW5lKGlkLCBkZWFkbGluZSkge1xuICAgIGxldCBwcm9qZWN0QXJyYXkgPSB0aGlzLnByb2plY3RzLmZpbHRlcigocCkgPT4gcC5pZCA9PSBpZCk7XG4gICAgbGV0IHByb2plY3QgPSBwcm9qZWN0QXJyYXlbMF07XG4gICAgcHJvamVjdC5kZWFkbGluZSA9IGRlYWRsaW5lO1xuICB9LFxuICBkZWxldGVQcm9qZWN0KGlkKSB7XG4gICAgbGV0IG5ld1Byb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHApID0+IHAuaWQgIT09IGlkKTtcbiAgICB0aGlzLnByb2plY3RzID0gbmV3UHJvamVjdHM7XG4gIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0JhckNvbnRyb2wgfSBmcm9tIFwiLi9zY3JlZW5Db250cm9sbGVyXCI7XG5cbmxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xucHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZm9ybVwiKTtcbnByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG5sZXQgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xubmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5hbWUtaW5wdXRcIik7XG5uYW1lTGFiZWwuaW5uZXJUZXh0ID0gXCJQcm9qZWN0J3MgbmFtZTpcIjtcbmxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5uYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYW1lLWlucHV0XCIpO1xubmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgcHJvamVjdCdzIG5hbWVcIik7XG5sZXQgZGVhZGxpbmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmRlYWRsaW5lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVhZGxpbmUtaW5wdXRcIik7XG5kZWFkbGluZUxhYmVsLmlubmVyVGV4dCA9IFwiUHJvamVjdCdzIGRlYWRsaW5lOlwiO1xubGV0IGRlYWRsaW5lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5kZWFkbGluZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xubGV0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5idG5TdWJtaXQuaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcbmJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUHJvamVjdFN1Ym1pdCk7XG5sZXQgYnRuQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmJ0bkNhbmNlbC5pbm5lclRleHQgPSBcIkNhbmNlbFwiO1xuYnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0Q2FuY2VsKTtcbnByb2plY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG5wcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xucHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZGVhZGxpbmVMYWJlbCk7XG5wcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChkZWFkbGluZUlucHV0KTtcbnByb2plY3RGb3JtLmFwcGVuZENoaWxkKGJ0blN1Ym1pdCk7XG5wcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChidG5DYW5jZWwpO1xuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0U3VibWl0KGV2ZW50KSB7XG4gIGxldCBwcm9qZWN0TmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcbiAgbGV0IHByb2plY3REZWFkbGluZSA9IGRlYWRsaW5lSW5wdXQudmFsdWU7XG4gIEFwcC5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLCBwcm9qZWN0RGVhZGxpbmUpO1xuICBwcm9qZWN0c0JhckNvbnRyb2wucmVmcmVzaFByb2plY3RzQmFyKCk7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RDYW5jZWwoZXZlbnQpIHtcbiAgbmFtZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgZGVhZGxpbmVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHByb2plY3RGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJpbnZpc2libGVcIik7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RGb3JtO1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG8uanNcIjtcblxuY29uc3QgUHJvamVjdCA9IChuYW1lLCBkZWFkbGluZSwgaWQpID0+IHtcbiAgY29uc3QgcHJvdG8gPSB7XG4gICAgY3JlYXRlVG9kbyhuYW1lLCBkZWFkbGluZSkge1xuICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDE7XG4gICAgICAgIGxldCByZWdleCA9IC8oPzw9XlRvZG9cXHMpXFxkKy87XG4gICAgICAgIGxldCBtYXRjaGVkQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG1hdGNoZWQgPSB0aGlzLnRvZG9zW2ldLm5hbWUubWF0Y2gocmVnZXgpO1xuICAgICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICBtYXRjaGVkQXJyYXkucHVzaCgrbWF0Y2hlZFswXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1hdGNoZWRBcnJheS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG1hdGNoZWRBcnJheVtpXSA9PSBjb3VudCkge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmFtZSA9IGBUb2RvICR7Y291bnR9YDtcbiAgICAgIH1cbiAgICAgIGxldCBpZCA9IHRoaXMudG9kb3MubGVuZ3RoO1xuICAgICAgbGV0IHRvZG9zU29ydGVkID0gdGhpcy50b2Rvcy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zU29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpZCA9PSB0b2Rvc1NvcnRlZFtpXS5pZCkge1xuICAgICAgICAgIGlkKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCB0b2RvID0gVG9kbyhuYW1lLCBkZWFkbGluZSwgaWQpO1xuICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICAgIH0sXG4gICAgZ2V0VG9kbyhpZCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9kb3MuZmlsdGVyKCh0KSA9PiB0LmlkID09IGlkKVswXTtcbiAgICB9LFxuICAgIGNoYW5nZVRvZG9OYW1lKG5hbWUsIGlkKSB7XG4gICAgICBsZXQgdG9kbyA9IHRoaXMuZ2V0VG9kbyhpZCk7XG4gICAgICB0b2RvLm5hbWUgPSBuYW1lO1xuICAgIH0sXG4gICAgZGVsZXRlVG9kbyhpZCkge1xuICAgICAgbGV0IGZpbHRlcmVkVG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcigodCkgPT4gdC5pZCAhPT0gaWQpO1xuICAgICAgdGhpcy50b2RvcyA9IGZpbHRlcmVkVG9kb3M7XG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgT2JqZWN0LmNyZWF0ZShwcm90byksXG4gICAgeyBuYW1lIH0sXG4gICAgeyBkZWFkbGluZSB9LFxuICAgIHsgaWQgfSxcbiAgICB7IHRvZG9zOiBbXSB9XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgcHJvamVjdEZvcm0gZnJvbSBcIi4vZm9ybU5ld1Byb2plY3RcIjtcblxubGV0IGJ0bk5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuYnRuTmV3UHJvamVjdC5pbm5lclRleHQgPSBcIk5ldyBQcm9qZWN0XCI7XG5idG5OZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0b2dnbGVQcm9qZWN0Rm9ybSgpKTtcblxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdEZvcm0oKSB7XG4gIHByb2plY3RGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJpbnZpc2libGVcIik7XG59XG5cbmNvbnN0IHByb2plY3RzQmFyQ29udHJvbCA9IHtcbiAgcmVmcmVzaFByb2plY3RzQmFyKCkge1xuICAgIGxldCBwcm9qZWN0c0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtYmFyXCIpO1xuICAgIHdoaWxlIChwcm9qZWN0c0Jhci5maXJzdENoaWxkKSB7XG4gICAgICBwcm9qZWN0c0Jhci5yZW1vdmVDaGlsZChwcm9qZWN0c0Jhci5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgbGV0IHByb2plY3RzID0gQXBwLmdldFByb2plY3RzKCk7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgcHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gcC5uYW1lO1xuICAgICAgbGV0IHByb2plY3REZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgcHJvamVjdERlYWRsaW5lLmlubmVyVGV4dCA9IHAuZGVhZGxpbmU7XG4gICAgICBsZXQgcHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQocHJvamVjdERlYWRsaW5lKTtcbiAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdEluZm8pO1xuICAgICAgbGV0IHByb2plY3RBY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBidG5EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnRuRGVsZXRlLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgYCR7cC5pZH1gKTtcbiAgICAgIGJ0bkRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBsZXQgdG9kb0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1iYXJcIik7XG4gICAgICAgIHdoaWxlICh0b2RvQmFyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICB0b2RvQmFyLnJlbW92ZUNoaWxkKHRvZG9CYXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgQXBwLmRlbGV0ZVByb2plY3QoK2J0bkRlbGV0ZS5kYXRhc2V0LmlkKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoUHJvamVjdHNCYXIoKTtcbiAgICAgIH0pO1xuICAgICAgYnRuRGVsZXRlLmlubmVyVGV4dCA9IFwiRGVsZXRlIFByb2plY3RcIjtcbiAgICAgIHByb2plY3RBY3Rpb25zLmFwcGVuZENoaWxkKGJ0bkRlbGV0ZSk7XG4gICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RBY3Rpb25zKTtcbiAgICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBgJHtwLmlkfWApO1xuICAgICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICByZW5kZXJUb2RvQ29udGVudCgrcHJvamVjdERpdi5kYXRhc2V0LmlkKTtcbiAgICAgIH0pO1xuICAgICAgcHJvamVjdHNCYXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgfSk7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiByZW5kZXJUb2RvQ29udGVudChpZCkge1xuICBsZXQgdG9kb0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY29udGVudFwiKTtcbiAgd2hpbGUgKHRvZG9Db250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICB0b2RvQ29udGVudC5yZW1vdmVDaGlsZCh0b2RvQ29udGVudC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGxldCBwcm9qZWN0ID0gQXBwLmdldFByb2plY3QoaWQpO1xuICByZW5kZXJUb2RvQmFyKGlkKTtcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XG4gIHRvZG9Db250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgaWYgKHByb2plY3QudG9kb3MubGVuZ3RoIDwgMSkge1xuICAgIGxldCBlbXB0eURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW1wdHlEaWFsb2cuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZW1wdHktZGlhbG9nXCIpO1xuICAgIGxldCBlbXB0eUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBlbXB0eUNvbnRlbnQuaW5uZXJUZXh0ID1cbiAgICAgIFwiVGhpcyBwcm9qZWN0IGlzIGVtcHR5LiBEbyB5b3Ugd2FudCB0byBhZGQgYSBuZXcgVG8tZG8gbGlzdD9cIjtcbiAgICBlbXB0eURpYWxvZy5hcHBlbmRDaGlsZChlbXB0eUNvbnRlbnQpO1xuICAgIGxldCBuZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBuZXdUb2RvLmlubmVyVGV4dCA9IFwiWWVzXCI7XG4gICAgbmV3VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWRkVG9EbyhpZCkpO1xuICAgIGxldCBidG5EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bkRlbGV0ZS5pbm5lclRleHQgPSBcIkRlbGV0ZSBQcm9qZWN0XCI7XG4gICAgYnRuRGVsZXRlLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgYCR7aWR9YCk7XG4gICAgYnRuRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBBcHAuZGVsZXRlUHJvamVjdCgrYnRuRGVsZXRlLmRhdGFzZXQuaWQpO1xuICAgICAgcHJvamVjdHNCYXJDb250cm9sLnJlZnJlc2hQcm9qZWN0c0JhcigpO1xuICAgICAgd2hpbGUgKHRvZG9Db250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdG9kb0NvbnRlbnQucmVtb3ZlQ2hpbGQodG9kb0NvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBsZXQgdG9kb0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1iYXJcIik7XG4gICAgICB3aGlsZSAodG9kb0Jhci5maXJzdENoaWxkKSB7XG4gICAgICAgIHRvZG9CYXIucmVtb3ZlQ2hpbGQodG9kb0Jhci5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlbXB0eURpYWxvZy5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgICBlbXB0eURpYWxvZy5hcHBlbmRDaGlsZChidG5EZWxldGUpO1xuICAgIHRvZG9Db250ZW50LmFwcGVuZENoaWxkKGVtcHR5RGlhbG9nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRUb0RvKGlkKSB7XG4gIGxldCBwcm9qZWN0ID0gQXBwLmdldFByb2plY3QoaWQpO1xuICBwcm9qZWN0LmNyZWF0ZVRvZG8oKTtcbiAgcmVuZGVyVG9kb0NvbnRlbnQoaWQpO1xuICByZW5kZXJUb2RvQmFyKGlkKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9kb0JhcihpZCkge1xuICBsZXQgdG9kb0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1iYXJcIik7XG4gIHdoaWxlICh0b2RvQmFyLmZpcnN0Q2hpbGQpIHtcbiAgICB0b2RvQmFyLnJlbW92ZUNoaWxkKHRvZG9CYXIuZmlyc3RDaGlsZCk7XG4gIH1cbiAgbGV0IGJ0bkFkZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG5BZGRUb2RvLmlubmVyVGV4dCA9IFwiTmV3IFRvZG9cIjtcbiAgYnRuQWRkVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWRkVG9EbyhpZCkpO1xuICBsZXQgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvTGlzdC5jbGFzc0xpc3QuYWRkKFwidG9kby1saXN0XCIpO1xuICBsZXQgdG9kb3MgPSBBcHAuZ2V0UHJvamVjdChpZCkudG9kb3M7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kby1kaXZcIik7XG4gICAgdG9kb0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGxldCB0b2RvQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250ZW50XCIpO1xuICAgICAgd2hpbGUgKHRvZG9Db250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdG9kb0NvbnRlbnQucmVtb3ZlQ2hpbGQodG9kb0NvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHRpdGxlLmlubmVyVGV4dCA9IEFwcC5nZXRQcm9qZWN0KGlkKS5uYW1lO1xuICAgICAgdG9kb0NvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgbGV0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgdG9kb1RpdGxlLmlubmVyVGV4dCA9IHRvZG9zW2ldLm5hbWU7XG4gICAgICB0b2RvQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgICAgbWFuYWdlVG9kb0NvbnRlbnQoaWQsIHRvZG9zW2ldLmlkKTtcbiAgICB9KTtcbiAgICBsZXQgdG9kb0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCB0b2RvQWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdG9kb05hbWUuaW5uZXJUZXh0ID0gdG9kb3NbaV0ubmFtZTtcbiAgICBsZXQgdG9kb0RlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdG9kb0RlYWRsaW5lLmlubmVyVGV4dCA9IHRvZG9zW2ldLmRlYWRsaW5lO1xuICAgIGxldCB0b2RvVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvVGFza3MuaW5uZXJUZXh0ID0gdG9kb3NbaV0udGFza3MubGVuZ3RoO1xuICAgIGxldCBidG5EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bkRlbGV0ZS5pbm5lclRleHQgPSBcIkRlbGV0ZVwiO1xuICAgIGJ0bkRlbGV0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGAke3RvZG9zW2ldLmlkfWApO1xuICAgIGJ0bkRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgQXBwLmdldFByb2plY3QoaWQpLmRlbGV0ZVRvZG8oK2J0bkRlbGV0ZS5kYXRhc2V0LmlkKTtcbiAgICAgIHJlbmRlclRvZG9CYXIoaWQpO1xuICAgIH0pO1xuICAgIGxldCBidG5FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG5FZGl0LmlubmVyVGV4dCA9IFwiRWRpdFwiO1xuICAgIHRvZG9JbmZvLmFwcGVuZENoaWxkKHRvZG9OYW1lKTtcbiAgICB0b2RvSW5mby5hcHBlbmRDaGlsZCh0b2RvRGVhZGxpbmUpO1xuICAgIHRvZG9JbmZvLmFwcGVuZENoaWxkKHRvZG9UYXNrcyk7XG4gICAgdG9kb0FjdGlvbnMuYXBwZW5kQ2hpbGQoYnRuRWRpdCk7XG4gICAgdG9kb0FjdGlvbnMuYXBwZW5kQ2hpbGQoYnRuRGVsZXRlKTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9JbmZvKTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9BY3Rpb25zKTtcbiAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcbiAgfVxuICB0b2RvQmFyLmFwcGVuZENoaWxkKGJ0bkFkZFRvZG8pO1xuICB0b2RvQmFyLmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcbn1cblxuZnVuY3Rpb24gbWFuYWdlVG9kb0NvbnRlbnQocElkLCB0SWQpIHtcbiAgbGV0IHRvZG9Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWNvbnRlbnRcIik7XG4gIGxldCBwcm9qZWN0ID0gQXBwLmdldFByb2plY3QocElkKTtcbiAgbGV0IHRvZG8gPSBwcm9qZWN0LmdldFRvZG8odElkKTtcbiAgbGV0IHRvZG9Db250ZW50SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlmICh0b2RvLnRhc2tzLmxlbmd0aCA8IDEpIHtcbiAgICBsZXQgZW1wdHlPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgZW1wdHlEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBlbXB0eURpYWxvZy5pbm5lclRleHQgPVxuICAgICAgXCJUaGlzIFRvZG8gbGlzdCBpcyBlbXB0eS4gRG8geW91IHdhbnQgdG8gYWRkIGEgbmV3IHRhc2s/XCI7XG4gICAgbGV0IGJ0blllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuWWVzLmlubmVyVGV4dCA9IFwiWWVzXCI7XG4gICAgbGV0IGJ0bkRlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bkRlbGV0ZVRvZG8uaW5uZXJUZXh0ID0gXCJEZWxldGUgVG9kb1wiO1xuICAgIGVtcHR5T3B0aW9ucy5hcHBlbmRDaGlsZChlbXB0eURpYWxvZyk7XG4gICAgZW1wdHlPcHRpb25zLmFwcGVuZENoaWxkKGJ0blllcyk7XG4gICAgZW1wdHlPcHRpb25zLmFwcGVuZENoaWxkKGJ0bkRlbGV0ZVRvZG8pO1xuICAgIHRvZG9Db250ZW50SW5mby5hcHBlbmRDaGlsZChlbXB0eU9wdGlvbnMpO1xuICB9XG4gIHRvZG9Db250ZW50LmFwcGVuZENoaWxkKHRvZG9Db250ZW50SW5mbyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ0bk5ld1Byb2plY3Q7XG5leHBvcnQgeyBwcm9qZWN0c0JhckNvbnRyb2wgfTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IFRhc2sgPSAoZGVzY3JpcHRpb24sIHByaW9yaXR5LCBpZCkgPT4ge1xuICBjb25zdCBwcm90byA9IHtcbiAgICBjaGVjaygpIHt9LFxuICAgIHVuY2hlY2soKSB7fSxcbiAgfTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgT2JqZWN0LmNyZWF0ZShwcm90byksXG4gICAgeyBkZXNjcmlwdGlvbiB9LFxuICAgIHsgcHJpb3JpdHkgfSxcbiAgICB7IGlkIH0sXG4gICAgeyBjaGVja2VkOiBmYWxzZSB9XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcblxuY29uc3QgVG9kbyA9IChuYW1lLCBkZWFkbGluZSwgaWQpID0+IHtcbiAgY29uc3QgcHJvdG8gPSB7XG4gICAgY3JlYXRlVGFzayhkZXNjcmlwdGlvbiwgcHJpb3JpdHkpIHtcbiAgICAgIGxldCBpZCA9IHRoaXMudGFza3MubGVuZ3RoO1xuICAgICAgbGV0IHRhc2tzU29ydGVkID0gdGhpcy50YXNrcy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzU29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpZCA9PSB0YXNrc1NvcnRlZFtpXS5pZCkge1xuICAgICAgICAgIGlkKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCB0YXNrID0gVGFzayhkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGlkKTtcbiAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICB9LFxuICAgIGdldFRhc2tzKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza3M7XG4gICAgfSxcbiAgICBnZXRUYXNrKGlkKSB7XG4gICAgICBsZXQgdGFzayA9IHRoaXMudGFza3MuZmlsdGVyKCh0KSA9PiB0LmlkID09IGlkKVswXTtcbiAgICAgIHJldHVybiB0YXNrO1xuICAgIH0sXG4gICAgY2hhbmdlVGFza0Rlc2NyaXB0aW9uKGRlc2NyaXB0aW9uLCBpZCkge1xuICAgICAgbGV0IHRhc2sgPSB0aGlzLmdldFRhc2soaWQpO1xuICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH0sXG4gICAgY2hhbmdlVGFza1ByaW9yaXR5KHByaW9yaXR5LCBpZCkge1xuICAgICAgbGV0IHRhc2sgPSB0aGlzLmdldFRhc2soaWQpO1xuICAgICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH0sXG4gICAgY2hlY2tUYXNrKGlkKSB7XG4gICAgICBsZXQgdGFzayA9IHRoaXMuZ2V0VGFzayhpZCk7XG4gICAgICB0YXNrLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgdW5jaGVja1Rhc2soaWQpIHtcbiAgICAgIGxldCB0YXNrID0gdGhpcy5nZXRUYXNrKGlkKTtcbiAgICAgIHRhc2suY2hlY2tlZCA9IGZhbHNlO1xuICAgIH0sXG4gICAgZGVsZXRlVGFzayhpZCkge1xuICAgICAgbGV0IG5ld1Rhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHQpID0+IHQuaWQgIT09IGlkKTtcbiAgICAgIHRoaXMudGFza3MgPSBuZXdUYXNrcztcbiAgICB9LFxuICB9O1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICBPYmplY3QuY3JlYXRlKHByb3RvKSxcbiAgICB7IHRhc2tzOiBbXSB9LFxuICAgIHsgbmFtZSB9LFxuICAgIHsgZGVhZGxpbmUgfSxcbiAgICB7IGlkIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHAuanNcIjtcbmltcG9ydCBidG5OZXdQcm9qZWN0IGZyb20gXCIuL3NjcmVlbkNvbnRyb2xsZXJcIjtcbmltcG9ydCBwcm9qZWN0Rm9ybSBmcm9tIFwiLi9mb3JtTmV3UHJvamVjdFwiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5uYXZCYXIuYXBwZW5kQ2hpbGQoYnRuTmV3UHJvamVjdCk7XG5uYXZCYXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuYm9keS5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG5jb25zdCBwcm9qZWN0c0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcm9qZWN0c0Jhci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtYmFyXCIpO1xuYm9keS5hcHBlbmRDaGlsZChwcm9qZWN0c0Jhcik7XG5cbmNvbnN0IHRvZG9CYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudG9kb0Jhci5jbGFzc0xpc3QuYWRkKFwidG9kby1iYXJcIik7XG5ib2R5LmFwcGVuZENoaWxkKHRvZG9CYXIpO1xuXG5jb25zdCB0b2RvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50b2RvQ29udGVudC5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250ZW50XCIpO1xuYm9keS5hcHBlbmRDaGlsZCh0b2RvQ29udGVudCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=