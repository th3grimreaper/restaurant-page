/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/clear.js":
/*!*********************************!*\
  !*** ./src/components/clear.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearContent": () => (/* binding */ clearContent),
/* harmony export */   "content": () => (/* binding */ content)
/* harmony export */ });
const content = document.querySelector('.content');
function clearContent() {
  content.innerHTML = '';
}


/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear */ "./src/components/clear.js");

function contactPage() {
  (0,_clear__WEBPACK_IMPORTED_MODULE_0__.clearContent)();
  const frag = document.createDocumentFragment();
  const cardContainer = document.createElement('section');
  cardContainer.classList.add('card-container', 'home-content');
  const textWrapper = document.createElement('div');
  textWrapper.classList.add('text-wrapper');
  const contArr = ['Kitty Poha Hub', '123 Main Street', 'Mumbai, Maharashtra 400001', 'India', '+91 98765 43210', 'admin@kittyhub.co'];
  const ul = document.createElement('ul');
  contArr.forEach(value => {
    const li = document.createElement('li');
    li.textContent = value;
    ul.appendChild(li);
  });
  textWrapper.appendChild(ul);
  cardContainer.appendChild(textWrapper);
  frag.appendChild(cardContainer);
  _clear__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(frag);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createFooter() {
  const container = document.querySelector('.container');
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const footDiv = document.createElement('div');
  footDiv.innerHTML = '&#169 th3grimreaper | The Odin Project (2023)';
  footer.appendChild(footDiv);
  container.appendChild(footer);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear */ "./src/components/clear.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");


function homePage() {
  (0,_clear__WEBPACK_IMPORTED_MODULE_0__.clearContent)();
  const frag = document.createDocumentFragment();
  const cardContainer = document.createElement('section');
  cardContainer.classList.add('card-container', 'home-content');
  const textWrapper = document.createElement('div');
  textWrapper.classList.add('text-wrapper');
  const newparaZero = document.createElement('p');
  const newparaOne = document.createElement('p');
  const newparaTwo = document.createElement('p');
  newparaZero.textContent = "Welcome to Kitty Poha Hub! At Kitty Poha Hub, we take pride in serving the best poha in town. Our legendary poha is made with high-quality ingredients, and it's the perfect meal to start your day or satisfy your midday cravings.";
  newparaOne.textContent = 'Our dedication to using only the freshest and most delicious ingredients has earned us a reputation for being the go-to spot for poha lovers. We take great care to ensure that every dish that leaves our kitchen meets the highest standards of quality and flavor.';
  newparaTwo.textContent = "We also offer a range of flavorful toppings and sides to personalize your poha experience. From the delicious Indori Poha to Maharashtrian Kanda Poha, we have everything you would ever need. At Kitty Poha Hub, we strive to create a warm and inviting environment for our diners. We believe that great food is best enjoyed in a friendly and welcoming atmosphere, and we make sure to create an experience that is just as enjoyable as our food. If you're looking for a quick breakfast, a midday snack, Kitty Poha Hub has got you covered. Come visit us and taste the best poha in town!";
  newparaZero.classList.add('info');
  newparaOne.classList.add('info');
  newparaTwo.classList.add('info');
  textWrapper.appendChild(newparaZero);
  textWrapper.appendChild(newparaOne);
  textWrapper.appendChild(newparaTwo);
  cardContainer.appendChild(textWrapper);
  frag.append(cardContainer);
  _clear__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(frag);
  if (!document.querySelector('.footer')) {
    (0,_footer__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear */ "./src/components/clear.js");
/* harmony import */ var _assets_indoripoha_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/indoripoha.jpg */ "./src/assets/indoripoha.jpg");


function menuPage() {
  (0,_clear__WEBPACK_IMPORTED_MODULE_0__.clearContent)();
  const frag = document.createDocumentFragment();
  const cardContainer = document.createElement('section');
  cardContainer.classList.add('card-container');
  const textWrapper = document.createElement('div');
  textWrapper.classList.add('text-wrapper');
  const title = document.createElement('div');
  title.classList.add('menu-title');
  title.textContent = 'Indori Poha';
  const desc = document.createElement('div');
  desc.textContent = 'One of the popular street food snacks from Indore is poha with Jalebi. the poha which is made in Indore is very different than the Maharashtrian onion Poha recipe. In Indori poha onions are not sautéed but added as a topping on the poha. Along with onions some more ingredients are added as toppings. The taste of Indori poha is khatta meetha meaning sweet and sour. Fennel seeds are also added which give the poha a floral aroma and sweetish tones.';
  const imgWrap = document.createElement('div');
  imgWrap.classList.add('img-wrapper');
  const img = document.createElement('img');
  img.src = _assets_indoripoha_jpg__WEBPACK_IMPORTED_MODULE_1__;
  imgWrap.appendChild(img);
  textWrapper.appendChild(title);
  textWrapper.appendChild(desc);
  cardContainer.appendChild(textWrapper);
  cardContainer.appendChild(imgWrap);
  frag.appendChild(cardContainer);
  _clear__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(frag);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".content {\n  flex: 1;\n  background-color: #fdfdff;\n}\n.content ul {\n  margin-top: 2em;\n}\n.content ul li {\n  list-style-type: none;\n}\n.content .card-container {\n  padding: 2em;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  color: #63a46c;\n}\n.content .card-container .img-wrapper {\n  margin-top: 1em;\n}\n.content .card-container .text-wrapper div:nth-of-type(1) {\n  margin-bottom: 0.5em;\n  font-size: clamp(1.5rem, 3vw, 2rem);\n}\n.content .card-container .menu-title {\n  color: #417b5a;\n}\n\n.navigation {\n  display: none;\n  gap: 2em;\n}\n\na {\n  color: #fdfdff;\n  text-decoration: none;\n  font-size: clamp(1em, 3vw, 1.5em);\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\n\n@media (min-width: 768px) {\n  .navigation {\n    display: flex;\n  }\n  .content .card-container {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .content .card-container .text-wrapper {\n    width: 50%;\n  }\n  .content .card-container .img-wrapper {\n    width: 45%;\n  }\n  .content .card-container .img-wrapper {\n    margin-top: 0;\n    align-self: flex-start;\n  }\n  .content .home-content .text-wrapper {\n    width: 100%;\n  }\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n}\n\nimg {\n  width: 100%;\n}\n\n.container {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.cont {\n  padding: 0 2em;\n}\n\n.heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 1;\n  color: #fdfdff;\n  background-color: #417b5a;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\n}\n\n.header {\n  font-size: clamp(1.5em, 5vw, 2.5em);\n  font-weight: 700;\n  padding: 1rem 0;\n}\n\n.info:nth-of-type(1) {\n  text-indent: 2em;\n}\n\n.info {\n  margin: 1em 0;\n}\n\n.footer {\n  z-index: 1;\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  padding: 1rem 0;\n  color: #fdfdff;\n  background-color: #417b5a;\n  box-shadow: 8px 0 10px rgba(0, 0, 0, 0.4);\n}", "",{"version":3,"sources":["webpack://./src/styles/_content.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/main.scss","webpack://./src/styles/_nav.scss","webpack://./src/styles/_media.scss"],"names":[],"mappings":"AAEA;EACE,OAAA;EACA,yBCEU;ACHZ;AFEE;EACE,eAAA;AEAJ;AFCI;EACE,qBAAA;AECN;AFGE;EACE,YAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,cCVW;ACSf;AFGI;EACE,eAAA;AEDN;AFII;EACE,oBAAA;EACA,mCAAA;AEFN;AFKI;EACE,cCxBQ;ACqBd;;ACxBA;EACE,aAAA;EACA,QAAA;AD2BF;;ACxBA;EACE,cFFU;EEGV,qBAAA;EACA,iCAAA;EACA,mBAAA;EACA,yBAAA;AD2BF;;AEvCA;EACE;IACE,aAAA;EF0CF;EEvCE;IACE,mBAAA;IACA,8BAAA;EFyCJ;EExCI;IACE,UAAA;EF0CN;EExCI;IACE,UAAA;EF0CN;EEvCI;IACE,aAAA;IACA,sBAAA;EFyCN;EEpCI;IACE,WAAA;EFsCN;AACF;AAzDA;EACE,sBAAA;EACA,SAAA;EACA,UAAA;AA2DF;;AAxDA;EACE,iCDVU;ACqEZ;;AAxDA;EACE,WAAA;AA2DF;;AAxDA;EACE,aAAA;EACA,aAAA;EACA,sBAAA;AA2DF;;AAxDA;EACE,cAAA;AA2DF;;AAxDA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,UAAA;EACA,cD5BU;EC6BV,yBD9BY;EC+BZ,yCAAA;AA2DF;;AAxDA;EACE,mCAAA;EACA,gBAAA;EACA,eAAA;AA2DF;;AAxDA;EACE,gBAAA;AA2DF;;AAxDA;EACE,aAAA;AA2DF;;AAxDA;EACE,UAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,eAAA;EACA,cDrDU;ECsDV,yBDvDY;ECwDZ,yCAAA;AA2DF","sourcesContent":["@use 'variables' as v;\n\n.content {\n  flex: 1;\n  background-color: v.$white-col;\n  ul {\n    margin-top: 2em;\n    li {\n      list-style-type: none;\n    }\n  }\n\n  .card-container {\n    padding: 2em;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    color: v.$content-grey;\n\n    .img-wrapper {\n      margin-top: 1em;\n    }\n\n    .text-wrapper div:nth-of-type(1) {\n      margin-bottom: 0.5em;\n      font-size: clamp(1.5rem, 3vw, 2rem);\n    }\n\n    .menu-title {\n      color: v.$heading-col;\n    }\n  }\n}\n","//font\n\n$main-font: 'Roboto', sans-serif;\n\n//colors\n$heading-col: #417b5a;\n$white-col: #fdfdff;\n$content-grey: #63a46c;\n$content-font: #c6c5b9;\n","@use 'variables' as v;\n@use 'content';\n@use 'nav';\n@use 'media';\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: v.$main-font;\n}\n\nimg {\n  width: 100%;\n}\n\n.container {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.cont {\n  padding: 0 2em;\n}\n\n.heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 1;\n  color: v.$white-col;\n  background-color: v.$heading-col;\n  box-shadow: 0 4px 10px rgb(0, 0, 0, 0.3);\n}\n\n.header {\n  font-size: clamp(1.5em, 5vw, 2.5em);\n  font-weight: 700;\n  padding: 1rem 0;\n}\n\n.info:nth-of-type(1) {\n  text-indent: 2em;\n}\n\n.info {\n  margin: 1em 0;\n}\n\n.footer {\n  z-index: 1;\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  padding: 1rem 0;\n  color: v.$white-col;\n  background-color: v.$heading-col;\n  box-shadow: 8px 0 10px rgb(0, 0, 0, 0.4);\n}\n","@use 'variables' as v;\n\n.navigation {\n  display: none;\n  gap: 2em;\n}\n\na {\n  color: v.$white-col;\n  text-decoration: none;\n  font-size: clamp(1em, 3vw, 1.5em);\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\n","@media (min-width: 768px) {\n  .navigation {\n    display: flex;\n  }\n  .content {\n    .card-container {\n      flex-direction: row;\n      justify-content: space-between;\n      .text-wrapper {\n        width: 50%;\n      }\n      .img-wrapper {\n        width: 45%;\n      }\n\n      .img-wrapper {\n        margin-top: 0;\n        align-self: flex-start;\n      }\n    }\n\n    .home-content {\n      .text-wrapper {\n        width: 100%;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/indoripoha.jpg":
/*!***********************************!*\
  !*** ./src/assets/indoripoha.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "indoripoha.jpg";

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
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home */ "./src/components/home.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contact */ "./src/components/contact.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");




const navArray = document.querySelectorAll('a');
function switchPage(e) {
  if (e.target.id === 'menu') {
    (0,_components_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  } else if (e.target.id === 'about') {
    (0,_components_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
  } else {
    (0,_components_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
}
window.addEventListener('onload', (0,_components_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
navArray.forEach(value => {
  value.addEventListener('click', switchPage);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7QUNBd0M7QUFDQTtBQUNNO0FBQ25CO0FBRTNCLE1BQU1NLFFBQVEsR0FBR25DLFFBQVEsQ0FBQ29DLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztBQUUvQyxTQUFTQyxVQUFVQSxDQUFDQyxDQUFDLEVBQUU7RUFDckIsSUFBSUEsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEVBQUUsS0FBSyxNQUFNLEVBQUU7SUFDMUJYLDREQUFRLEVBQUU7RUFDWixDQUFDLE1BQU0sSUFBSVMsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEVBQUUsS0FBSyxPQUFPLEVBQUU7SUFDbENwQywrREFBVyxFQUFFO0VBQ2YsQ0FBQyxNQUFNO0lBQ0xtQiw0REFBUSxFQUFFO0VBQ1o7QUFDRjtBQUVBa0IsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVuQiw0REFBUSxFQUFFLENBQUM7QUFFN0NZLFFBQVEsQ0FBQ3JCLE9BQU8sQ0FBRUMsS0FBSyxJQUFLO0VBQzFCQSxLQUFLLENBQUMyQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVMLFVBQVUsQ0FBQztBQUM3QyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jb21wb25lbnRzL2NsZWFyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jb21wb25lbnRzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgY29udGVudC5pbm5lckhUTUwgPSAnJ1xufVxuXG5leHBvcnQgeyBjb250ZW50LCBjbGVhckNvbnRlbnQgfVxuIiwiaW1wb3J0IHsgY29udGVudCwgY2xlYXJDb250ZW50IH0gZnJvbSAnLi9jbGVhcidcblxuZnVuY3Rpb24gY29udGFjdFBhZ2UoKSB7XG4gIGNsZWFyQ29udGVudCgpXG4gIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblxuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250YWluZXInLCAnaG9tZS1jb250ZW50JylcblxuICBjb25zdCB0ZXh0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRleHRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtd3JhcHBlcicpXG5cbiAgY29uc3QgY29udEFyciA9IFtcbiAgICAnS2l0dHkgUG9oYSBIdWInLFxuICAgICcxMjMgTWFpbiBTdHJlZXQnLFxuICAgICdNdW1iYWksIE1haGFyYXNodHJhIDQwMDAwMScsXG4gICAgJ0luZGlhJyxcbiAgICAnKzkxIDk4NzY1IDQzMjEwJyxcbiAgICAnYWRtaW5Aa2l0dHlodWIuY28nLFxuICBdXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuXG4gIGNvbnRBcnIuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsaS50ZXh0Q29udGVudCA9IHZhbHVlXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpXG4gIH0pXG4gIHRleHRXcmFwcGVyLmFwcGVuZENoaWxkKHVsKVxuICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRXcmFwcGVyKVxuICBmcmFnLmFwcGVuZENoaWxkKGNhcmRDb250YWluZXIpXG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChmcmFnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0UGFnZVxuIiwiZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJylcbiAgY29uc3QgZm9vdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGZvb3REaXYuaW5uZXJIVE1MID0gJyYjMTY5IHRoM2dyaW1yZWFwZXIgfCBUaGUgT2RpbiBQcm9qZWN0ICgyMDIzKSdcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3REaXYpXG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcilcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyXG4iLCJpbXBvcnQgeyBjb250ZW50LCBjbGVhckNvbnRlbnQgfSBmcm9tICcuL2NsZWFyJ1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tICcuL2Zvb3RlcidcblxuZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG4gIGNsZWFyQ29udGVudCgpXG4gIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblxuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250YWluZXInLCAnaG9tZS1jb250ZW50JylcblxuICBjb25zdCB0ZXh0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRleHRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtd3JhcHBlcicpXG5cbiAgY29uc3QgbmV3cGFyYVplcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgY29uc3QgbmV3cGFyYU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBjb25zdCBuZXdwYXJhVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cbiAgbmV3cGFyYVplcm8udGV4dENvbnRlbnQgPVxuICAgIFwiV2VsY29tZSB0byBLaXR0eSBQb2hhIEh1YiEgQXQgS2l0dHkgUG9oYSBIdWIsIHdlIHRha2UgcHJpZGUgaW4gc2VydmluZyB0aGUgYmVzdCBwb2hhIGluIHRvd24uIE91ciBsZWdlbmRhcnkgcG9oYSBpcyBtYWRlIHdpdGggaGlnaC1xdWFsaXR5IGluZ3JlZGllbnRzLCBhbmQgaXQncyB0aGUgcGVyZmVjdCBtZWFsIHRvIHN0YXJ0IHlvdXIgZGF5IG9yIHNhdGlzZnkgeW91ciBtaWRkYXkgY3JhdmluZ3MuXCJcbiAgbmV3cGFyYU9uZS50ZXh0Q29udGVudCA9XG4gICAgJ091ciBkZWRpY2F0aW9uIHRvIHVzaW5nIG9ubHkgdGhlIGZyZXNoZXN0IGFuZCBtb3N0IGRlbGljaW91cyBpbmdyZWRpZW50cyBoYXMgZWFybmVkIHVzIGEgcmVwdXRhdGlvbiBmb3IgYmVpbmcgdGhlIGdvLXRvIHNwb3QgZm9yIHBvaGEgbG92ZXJzLiBXZSB0YWtlIGdyZWF0IGNhcmUgdG8gZW5zdXJlIHRoYXQgZXZlcnkgZGlzaCB0aGF0IGxlYXZlcyBvdXIga2l0Y2hlbiBtZWV0cyB0aGUgaGlnaGVzdCBzdGFuZGFyZHMgb2YgcXVhbGl0eSBhbmQgZmxhdm9yLidcbiAgbmV3cGFyYVR3by50ZXh0Q29udGVudCA9XG4gICAgXCJXZSBhbHNvIG9mZmVyIGEgcmFuZ2Ugb2YgZmxhdm9yZnVsIHRvcHBpbmdzIGFuZCBzaWRlcyB0byBwZXJzb25hbGl6ZSB5b3VyIHBvaGEgZXhwZXJpZW5jZS4gRnJvbSB0aGUgZGVsaWNpb3VzIEluZG9yaSBQb2hhIHRvIE1haGFyYXNodHJpYW4gS2FuZGEgUG9oYSwgd2UgaGF2ZSBldmVyeXRoaW5nIHlvdSB3b3VsZCBldmVyIG5lZWQuIEF0IEtpdHR5IFBvaGEgSHViLCB3ZSBzdHJpdmUgdG8gY3JlYXRlIGEgd2FybSBhbmQgaW52aXRpbmcgZW52aXJvbm1lbnQgZm9yIG91ciBkaW5lcnMuIFdlIGJlbGlldmUgdGhhdCBncmVhdCBmb29kIGlzIGJlc3QgZW5qb3llZCBpbiBhIGZyaWVuZGx5IGFuZCB3ZWxjb21pbmcgYXRtb3NwaGVyZSwgYW5kIHdlIG1ha2Ugc3VyZSB0byBjcmVhdGUgYW4gZXhwZXJpZW5jZSB0aGF0IGlzIGp1c3QgYXMgZW5qb3lhYmxlIGFzIG91ciBmb29kLiBJZiB5b3UncmUgbG9va2luZyBmb3IgYSBxdWljayBicmVha2Zhc3QsIGEgbWlkZGF5IHNuYWNrLCBLaXR0eSBQb2hhIEh1YiBoYXMgZ290IHlvdSBjb3ZlcmVkLiBDb21lIHZpc2l0IHVzIGFuZCB0YXN0ZSB0aGUgYmVzdCBwb2hhIGluIHRvd24hXCJcblxuICBuZXdwYXJhWmVyby5jbGFzc0xpc3QuYWRkKCdpbmZvJylcbiAgbmV3cGFyYU9uZS5jbGFzc0xpc3QuYWRkKCdpbmZvJylcbiAgbmV3cGFyYVR3by5jbGFzc0xpc3QuYWRkKCdpbmZvJylcblxuICB0ZXh0V3JhcHBlci5hcHBlbmRDaGlsZChuZXdwYXJhWmVybylcbiAgdGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQobmV3cGFyYU9uZSlcbiAgdGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQobmV3cGFyYVR3bylcblxuICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRXcmFwcGVyKVxuXG4gIGZyYWcuYXBwZW5kKGNhcmRDb250YWluZXIpXG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChmcmFnKVxuXG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpKSB7XG4gICAgY3JlYXRlRm9vdGVyKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBob21lUGFnZVxuIiwiaW1wb3J0IHsgY29udGVudCwgY2xlYXJDb250ZW50IH0gZnJvbSAnLi9jbGVhcidcbmltcG9ydCBpbmRvcmlwb2hhIGZyb20gJy4uL2Fzc2V0cy9pbmRvcmlwb2hhLmpwZydcblxuZnVuY3Rpb24gbWVudVBhZ2UoKSB7XG4gIGNsZWFyQ29udGVudCgpXG4gIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblxuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250YWluZXInKVxuXG4gIGNvbnN0IHRleHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGV4dFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGV4dC13cmFwcGVyJylcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LXRpdGxlJylcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnSW5kb3JpIFBvaGEnXG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBkZXNjLnRleHRDb250ZW50ID1cbiAgICAnT25lIG9mIHRoZSBwb3B1bGFyIHN0cmVldCBmb29kIHNuYWNrcyBmcm9tIEluZG9yZSBpcyBwb2hhIHdpdGggSmFsZWJpLiB0aGUgcG9oYSB3aGljaCBpcyBtYWRlIGluIEluZG9yZSBpcyB2ZXJ5IGRpZmZlcmVudCB0aGFuIHRoZSBNYWhhcmFzaHRyaWFuIG9uaW9uIFBvaGEgcmVjaXBlLiBJbiBJbmRvcmkgcG9oYSBvbmlvbnMgYXJlIG5vdCBzYXV0w6llZCBidXQgYWRkZWQgYXMgYSB0b3BwaW5nIG9uIHRoZSBwb2hhLiBBbG9uZyB3aXRoIG9uaW9ucyBzb21lIG1vcmUgaW5ncmVkaWVudHMgYXJlIGFkZGVkIGFzIHRvcHBpbmdzLiBUaGUgdGFzdGUgb2YgSW5kb3JpIHBvaGEgaXMga2hhdHRhIG1lZXRoYSBtZWFuaW5nIHN3ZWV0IGFuZCBzb3VyLiBGZW5uZWwgc2VlZHMgYXJlIGFsc28gYWRkZWQgd2hpY2ggZ2l2ZSB0aGUgcG9oYSBhIGZsb3JhbCBhcm9tYSBhbmQgc3dlZXRpc2ggdG9uZXMuJ1xuICBjb25zdCBpbWdXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaW1nV3JhcC5jbGFzc0xpc3QuYWRkKCdpbWctd3JhcHBlcicpXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIGltZy5zcmMgPSBpbmRvcmlwb2hhXG4gIGltZ1dyYXAuYXBwZW5kQ2hpbGQoaW1nKVxuICB0ZXh0V3JhcHBlci5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgdGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzYylcbiAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0V3JhcHBlcilcbiAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdXcmFwKVxuICBmcmFnLmFwcGVuZENoaWxkKGNhcmRDb250YWluZXIpXG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChmcmFnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51UGFnZVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGVudCB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZjtcXG59XFxuLmNvbnRlbnQgdWwge1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbn1cXG4uY29udGVudCB1bCBsaSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcbi5jb250ZW50IC5jYXJkLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiAjNjNhNDZjO1xcbn1cXG4uY29udGVudCAuY2FyZC1jb250YWluZXIgLmltZy13cmFwcGVyIHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuLmNvbnRlbnQgLmNhcmQtY29udGFpbmVyIC50ZXh0LXdyYXBwZXIgZGl2Om50aC1vZi10eXBlKDEpIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDN2dywgMnJlbSk7XFxufVxcbi5jb250ZW50IC5jYXJkLWNvbnRhaW5lciAubWVudS10aXRsZSB7XFxuICBjb2xvcjogIzQxN2I1YTtcXG59XFxuXFxuLm5hdmlnYXRpb24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGdhcDogMmVtO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiAjZmRmZGZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxZW0sIDN2dywgMS41ZW0pO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLm5hdmlnYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLmNvbnRlbnQgLmNhcmQtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcbiAgLmNvbnRlbnQgLmNhcmQtY29udGFpbmVyIC50ZXh0LXdyYXBwZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbiAgLmNvbnRlbnQgLmNhcmQtY29udGFpbmVyIC5pbWctd3JhcHBlciB7XFxuICAgIHdpZHRoOiA0NSU7XFxuICB9XFxuICAuY29udGVudCAuY2FyZC1jb250YWluZXIgLmltZy13cmFwcGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIH1cXG4gIC5jb250ZW50IC5ob21lLWNvbnRlbnQgLnRleHQtd3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnQge1xcbiAgcGFkZGluZzogMCAyZW07XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTtcXG4gIGNvbG9yOiAjZmRmZGZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxN2I1YTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS41ZW0sIDV2dywgMi41ZW0pO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLmluZm86bnRoLW9mLXR5cGUoMSkge1xcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcXG59XFxuXFxuLmluZm8ge1xcbiAgbWFyZ2luOiAxZW0gMDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICB6LWluZGV4OiAxO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgY29sb3I6ICNmZGZkZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE3YjVhO1xcbiAgYm94LXNoYWRvdzogOHB4IDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX2NvbnRlbnQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19uYXYuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fbWVkaWEuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLE9BQUE7RUFDQSx5QkNFVTtBQ0haO0FGRUU7RUFDRSxlQUFBO0FFQUo7QUZDSTtFQUNFLHFCQUFBO0FFQ047QUZHRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNDVlc7QUNTZjtBRkdJO0VBQ0UsZUFBQTtBRUROO0FGSUk7RUFDRSxvQkFBQTtFQUNBLG1DQUFBO0FFRk47QUZLSTtFQUNFLGNDeEJRO0FDcUJkOztBQ3hCQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FEMkJGOztBQ3hCQTtFQUNFLGNGRlU7RUVHVixxQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBRDJCRjs7QUV2Q0E7RUFDRTtJQUNFLGFBQUE7RUYwQ0Y7RUV2Q0U7SUFDRSxtQkFBQTtJQUNBLDhCQUFBO0VGeUNKO0VFeENJO0lBQ0UsVUFBQTtFRjBDTjtFRXhDSTtJQUNFLFVBQUE7RUYwQ047RUV2Q0k7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7RUZ5Q047RUVwQ0k7SUFDRSxXQUFBO0VGc0NOO0FBQ0Y7QUF6REE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlDRFZVO0FDcUVaOztBQXhEQTtFQUNFLFdBQUE7QUEyREY7O0FBeERBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQTJERjs7QUF4REE7RUFDRSxjQUFBO0FBMkRGOztBQXhEQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNENUJVO0VDNkJWLHlCRDlCWTtFQytCWix5Q0FBQTtBQTJERjs7QUF4REE7RUFDRSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQTJERjs7QUF4REE7RUFDRSxnQkFBQTtBQTJERjs7QUF4REE7RUFDRSxhQUFBO0FBMkRGOztBQXhEQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNEckRVO0VDc0RWLHlCRHZEWTtFQ3dEWix5Q0FBQTtBQTJERlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICd2YXJpYWJsZXMnIGFzIHY7XFxuXFxuLmNvbnRlbnQge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHYuJHdoaXRlLWNvbDtcXG4gIHVsIHtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICBsaSB7XFxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB9XFxuICB9XFxuXFxuICAuY2FyZC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29sb3I6IHYuJGNvbnRlbnQtZ3JleTtcXG5cXG4gICAgLmltZy13cmFwcGVyIHtcXG4gICAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgIH1cXG5cXG4gICAgLnRleHQtd3JhcHBlciBkaXY6bnRoLW9mLXR5cGUoMSkge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAzdncsIDJyZW0pO1xcbiAgICB9XFxuXFxuICAgIC5tZW51LXRpdGxlIHtcXG4gICAgICBjb2xvcjogdi4kaGVhZGluZy1jb2w7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIvL2ZvbnRcXG5cXG4kbWFpbi1mb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXG4vL2NvbG9yc1xcbiRoZWFkaW5nLWNvbDogIzQxN2I1YTtcXG4kd2hpdGUtY29sOiAjZmRmZGZmO1xcbiRjb250ZW50LWdyZXk6ICM2M2E0NmM7XFxuJGNvbnRlbnQtZm9udDogI2M2YzViOTtcXG5cIixcIkB1c2UgJ3ZhcmlhYmxlcycgYXMgdjtcXG5AdXNlICdjb250ZW50JztcXG5AdXNlICduYXYnO1xcbkB1c2UgJ21lZGlhJztcXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiB2LiRtYWluLWZvbnQ7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250IHtcXG4gIHBhZGRpbmc6IDAgMmVtO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxuICBjb2xvcjogdi4kd2hpdGUtY29sO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdi4kaGVhZGluZy1jb2w7XFxuICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYigwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS41ZW0sIDV2dywgMi41ZW0pO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLmluZm86bnRoLW9mLXR5cGUoMSkge1xcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcXG59XFxuXFxuLmluZm8ge1xcbiAgbWFyZ2luOiAxZW0gMDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICB6LWluZGV4OiAxO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgY29sb3I6IHYuJHdoaXRlLWNvbDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHYuJGhlYWRpbmctY29sO1xcbiAgYm94LXNoYWRvdzogOHB4IDAgMTBweCByZ2IoMCwgMCwgMCwgMC40KTtcXG59XFxuXCIsXCJAdXNlICd2YXJpYWJsZXMnIGFzIHY7XFxuXFxuLm5hdmlnYXRpb24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGdhcDogMmVtO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB2LiR3aGl0ZS1jb2w7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IGNsYW1wKDFlbSwgM3Z3LCAxLjVlbSk7XFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXCIsXCJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5uYXZpZ2F0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIC5jb250ZW50IHtcXG4gICAgLmNhcmQtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAudGV4dC13cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgfVxcbiAgICAgIC5pbWctd3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogNDUlO1xcbiAgICAgIH1cXG5cXG4gICAgICAuaW1nLXdyYXBwZXIge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5ob21lLWNvbnRlbnQge1xcbiAgICAgIC50ZXh0LXdyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBob21lUGFnZSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZSdcbmltcG9ydCBtZW51UGFnZSBmcm9tICcuL2NvbXBvbmVudHMvbWVudSdcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFjdCdcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJ1xuXG5jb25zdCBuYXZBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuXG5mdW5jdGlvbiBzd2l0Y2hQYWdlKGUpIHtcbiAgaWYgKGUudGFyZ2V0LmlkID09PSAnbWVudScpIHtcbiAgICBtZW51UGFnZSgpXG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09ICdhYm91dCcpIHtcbiAgICBjb250YWN0UGFnZSgpXG4gIH0gZWxzZSB7XG4gICAgaG9tZVBhZ2UoKVxuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvbmxvYWQnLCBob21lUGFnZSgpKVxuXG5uYXZBcnJheS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICB2YWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFBhZ2UpXG59KVxuIl0sIm5hbWVzIjpbImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGVhckNvbnRlbnQiLCJpbm5lckhUTUwiLCJjb250YWN0UGFnZSIsImZyYWciLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY2FyZENvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0V3JhcHBlciIsImNvbnRBcnIiLCJ1bCIsImZvckVhY2giLCJ2YWx1ZSIsImxpIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUZvb3RlciIsImNvbnRhaW5lciIsImZvb3RlciIsImZvb3REaXYiLCJob21lUGFnZSIsIm5ld3BhcmFaZXJvIiwibmV3cGFyYU9uZSIsIm5ld3BhcmFUd28iLCJhcHBlbmQiLCJpbmRvcmlwb2hhIiwibWVudVBhZ2UiLCJ0aXRsZSIsImRlc2MiLCJpbWdXcmFwIiwiaW1nIiwic3JjIiwibmF2QXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3dpdGNoUGFnZSIsImUiLCJ0YXJnZXQiLCJpZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9