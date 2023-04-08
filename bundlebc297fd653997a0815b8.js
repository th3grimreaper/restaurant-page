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
___CSS_LOADER_EXPORT___.push([module.id, ".content {\n  background-color: #63a46c;\n}\n.content ul {\n  margin-top: 2em;\n}\n.content ul li {\n  list-style-type: none;\n}\n.content .card-container {\n  padding: 2em;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  color: #fdfdff;\n}\n.content .card-container .img-wrapper {\n  margin-top: 1em;\n}\n.content .card-container .text-wrapper div:nth-of-type(1) {\n  margin-bottom: 0.5em;\n  font-size: clamp(1.5rem, 3vw, 2rem);\n}\n\n.navigation {\n  display: none;\n  gap: 2em;\n}\n\na {\n  color: #fdfdff;\n  text-decoration: none;\n  font-size: clamp(1em, 3vw, 1.5em);\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\n\n@media (min-width: 768px) {\n  .container {\n    grid-template-columns: 1fr;\n    grid-template-rows: 2fr 10fr 1fr;\n  }\n  .navigation {\n    display: flex;\n  }\n  .content .card-container {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .content .card-container .text-wrapper {\n    width: 50%;\n  }\n  .content .card-container .img-wrapper {\n    width: 45%;\n  }\n  .content .card-container .img-wrapper {\n    margin-top: 0;\n    align-self: flex-start;\n  }\n  .content .home-content .text-wrapper {\n    width: 100%;\n  }\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n}\n\nimg {\n  width: 100%;\n}\n\n.container {\n  display: grid;\n}\n\n.cont {\n  padding: 0 2em;\n}\n\n.heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #fdfdff;\n  background-color: #417b5a;\n}\n\n.header {\n  font-size: clamp(1.5em, 5vw, 2.5em);\n  font-weight: 700;\n  padding: 1rem 0;\n}\n\n.info:nth-of-type(1) {\n  text-indent: 2em;\n}\n\n.info {\n  margin: 1em 0;\n}\n\n.footer {\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  padding: 1rem 0;\n  color: #fdfdff;\n  background-color: #417b5a;\n}", "",{"version":3,"sources":["webpack://./src/styles/_content.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/main.scss","webpack://./src/styles/_nav.scss","webpack://./src/styles/_media.scss"],"names":[],"mappings":"AAEA;EACE,yBCIa;ACLf;AFEE;EACE,eAAA;AEAJ;AFCI;EACE,qBAAA;AECN;AFGE;EACE,YAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,cCVQ;ACSZ;AFGI;EACE,eAAA;AEDN;AFII;EACE,oBAAA;EACA,mCAAA;AEFN;;ACpBA;EACE,aAAA;EACA,QAAA;ADuBF;;ACpBA;EACE,cFFU;EEGV,qBAAA;EACA,iCAAA;EACA,mBAAA;EACA,yBAAA;ADuBF;;AEnCA;EACE;IACE,0BAAA;IACA,gCAAA;EFsCF;EEnCA;IACE,aAAA;EFqCF;EElCE;IACE,mBAAA;IACA,8BAAA;EFoCJ;EEnCI;IACE,UAAA;EFqCN;EEnCI;IACE,UAAA;EFqCN;EElCI;IACE,aAAA;IACA,sBAAA;EFoCN;EE/BI;IACE,WAAA;EFiCN;AACF;AAzDA;EACE,sBAAA;EACA,SAAA;EACA,UAAA;AA2DF;;AAxDA;EACE,iCDVU;ACqEZ;;AAxDA;EACE,WAAA;AA2DF;;AAxDA;EACE,aAAA;AA2DF;;AAxDA;EACE,cAAA;AA2DF;;AAxDA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,cDzBU;EC0BV,yBD3BY;ACsFd;;AAxDA;EACE,mCAAA;EACA,gBAAA;EACA,eAAA;AA2DF;;AAxDA;EACE,gBAAA;AA2DF;;AAxDA;EACE,aAAA;AA2DF;;AAxDA;EACE,eAAA;EACA,aAAA;EACA,uBAAA;EACA,eAAA;EACA,cDhDU;ECiDV,yBDlDY;AC6Gd","sourcesContent":["@use 'variables' as v;\n\n.content {\n  background-color: v.$content-grey;\n  ul {\n    margin-top: 2em;\n    li {\n      list-style-type: none;\n    }\n  }\n\n  .card-container {\n    padding: 2em;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    color: v.$white-col;\n\n    .img-wrapper {\n      margin-top: 1em;\n    }\n\n    .text-wrapper div:nth-of-type(1) {\n      margin-bottom: 0.5em;\n      font-size: clamp(1.5rem, 3vw, 2rem);\n    }\n  }\n}\n","//font\n\n$main-font: 'Roboto', sans-serif;\n\n//colors\n$heading-col: #417b5a;\n$white-col: #fdfdff;\n$content-grey: #63a46c;\n$content-font: #c6c5b9;\n","@use 'variables' as v;\n@use 'content';\n@use 'nav';\n@use 'media';\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: v.$main-font;\n}\n\nimg {\n  width: 100%;\n}\n\n.container {\n  display: grid;\n}\n\n.cont {\n  padding: 0 2em;\n}\n\n.heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: v.$white-col;\n  background-color: v.$heading-col;\n}\n\n.header {\n  font-size: clamp(1.5em, 5vw, 2.5em);\n  font-weight: 700;\n  padding: 1rem 0;\n}\n\n.info:nth-of-type(1) {\n  text-indent: 2em;\n}\n\n.info {\n  margin: 1em 0;\n}\n\n.footer {\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  padding: 1rem 0;\n  color: v.$white-col;\n  background-color: v.$heading-col;\n}\n","@use 'variables' as v;\n\n.navigation {\n  display: none;\n  gap: 2em;\n}\n\na {\n  color: v.$white-col;\n  text-decoration: none;\n  font-size: clamp(1em, 3vw, 1.5em);\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\n","@media (min-width: 768px) {\n  .container {\n    grid-template-columns: 1fr;\n    grid-template-rows: 2fr 10fr 1fr;\n  }\n\n  .navigation {\n    display: flex;\n  }\n  .content {\n    .card-container {\n      flex-direction: row;\n      justify-content: space-between;\n      .text-wrapper {\n        width: 50%;\n      }\n      .img-wrapper {\n        width: 45%;\n      }\n\n      .img-wrapper {\n        margin-top: 0;\n        align-self: flex-start;\n      }\n    }\n\n    .home-content {\n      .text-wrapper {\n        width: 100%;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7QUNBd0M7QUFDQTtBQUNNO0FBQ25CO0FBRTNCLE1BQU1NLFFBQVEsR0FBR25DLFFBQVEsQ0FBQ29DLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztBQUUvQyxTQUFTQyxVQUFVQSxDQUFDQyxDQUFDLEVBQUU7RUFDckIsSUFBSUEsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEVBQUUsS0FBSyxNQUFNLEVBQUU7SUFDMUJYLDREQUFRLEVBQUU7RUFDWixDQUFDLE1BQU0sSUFBSVMsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEVBQUUsS0FBSyxPQUFPLEVBQUU7SUFDbENwQywrREFBVyxFQUFFO0VBQ2YsQ0FBQyxNQUFNO0lBQ0xtQiw0REFBUSxFQUFFO0VBQ1o7QUFDRjtBQUVBa0IsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVuQiw0REFBUSxFQUFFLENBQUM7QUFFN0NZLFFBQVEsQ0FBQ3JCLE9BQU8sQ0FBRUMsS0FBSyxJQUFLO0VBQzFCQSxLQUFLLENBQUMyQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVMLFVBQVUsQ0FBQztBQUM3QyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jb21wb25lbnRzL2NsZWFyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jb21wb25lbnRzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgY29udGVudC5pbm5lckhUTUwgPSAnJ1xufVxuXG5leHBvcnQgeyBjb250ZW50LCBjbGVhckNvbnRlbnQgfVxuIiwiaW1wb3J0IHsgY29udGVudCwgY2xlYXJDb250ZW50IH0gZnJvbSAnLi9jbGVhcidcblxuZnVuY3Rpb24gY29udGFjdFBhZ2UoKSB7XG4gIGNsZWFyQ29udGVudCgpXG4gIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblxuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250YWluZXInLCAnaG9tZS1jb250ZW50JylcblxuICBjb25zdCB0ZXh0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRleHRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtd3JhcHBlcicpXG5cbiAgY29uc3QgY29udEFyciA9IFtcbiAgICAnS2l0dHkgUG9oYSBIdWInLFxuICAgICcxMjMgTWFpbiBTdHJlZXQnLFxuICAgICdNdW1iYWksIE1haGFyYXNodHJhIDQwMDAwMScsXG4gICAgJ0luZGlhJyxcbiAgICAnKzkxIDk4NzY1IDQzMjEwJyxcbiAgICAnYWRtaW5Aa2l0dHlodWIuY28nLFxuICBdXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuXG4gIGNvbnRBcnIuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsaS50ZXh0Q29udGVudCA9IHZhbHVlXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpXG4gIH0pXG4gIHRleHRXcmFwcGVyLmFwcGVuZENoaWxkKHVsKVxuICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRXcmFwcGVyKVxuICBmcmFnLmFwcGVuZENoaWxkKGNhcmRDb250YWluZXIpXG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChmcmFnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0UGFnZVxuIiwiZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJylcbiAgY29uc3QgZm9vdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGZvb3REaXYuaW5uZXJIVE1MID0gJyYjMTY5IHRoM2dyaW1yZWFwZXIgfCBUaGUgT2RpbiBQcm9qZWN0ICgyMDIzKSdcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3REaXYpXG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcilcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyXG4iLCJpbXBvcnQgeyBjb250ZW50LCBjbGVhckNvbnRlbnQgfSBmcm9tICcuL2NsZWFyJ1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tICcuL2Zvb3RlcidcblxuZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG4gIGNsZWFyQ29udGVudCgpXG4gIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblxuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250YWluZXInLCAnaG9tZS1jb250ZW50JylcblxuICBjb25zdCB0ZXh0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRleHRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtd3JhcHBlcicpXG5cbiAgY29uc3QgbmV3cGFyYVplcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgY29uc3QgbmV3cGFyYU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBjb25zdCBuZXdwYXJhVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cbiAgbmV3cGFyYVplcm8udGV4dENvbnRlbnQgPVxuICAgIFwiV2VsY29tZSB0byBLaXR0eSBQb2hhIEh1YiEgQXQgS2l0dHkgUG9oYSBIdWIsIHdlIHRha2UgcHJpZGUgaW4gc2VydmluZyB0aGUgYmVzdCBwb2hhIGluIHRvd24uIE91ciBsZWdlbmRhcnkgcG9oYSBpcyBtYWRlIHdpdGggaGlnaC1xdWFsaXR5IGluZ3JlZGllbnRzLCBhbmQgaXQncyB0aGUgcGVyZmVjdCBtZWFsIHRvIHN0YXJ0IHlvdXIgZGF5IG9yIHNhdGlzZnkgeW91ciBtaWRkYXkgY3JhdmluZ3MuXCJcbiAgbmV3cGFyYU9uZS50ZXh0Q29udGVudCA9XG4gICAgJ091ciBkZWRpY2F0aW9uIHRvIHVzaW5nIG9ubHkgdGhlIGZyZXNoZXN0IGFuZCBtb3N0IGRlbGljaW91cyBpbmdyZWRpZW50cyBoYXMgZWFybmVkIHVzIGEgcmVwdXRhdGlvbiBmb3IgYmVpbmcgdGhlIGdvLXRvIHNwb3QgZm9yIHBvaGEgbG92ZXJzLiBXZSB0YWtlIGdyZWF0IGNhcmUgdG8gZW5zdXJlIHRoYXQgZXZlcnkgZGlzaCB0aGF0IGxlYXZlcyBvdXIga2l0Y2hlbiBtZWV0cyB0aGUgaGlnaGVzdCBzdGFuZGFyZHMgb2YgcXVhbGl0eSBhbmQgZmxhdm9yLidcbiAgbmV3cGFyYVR3by50ZXh0Q29udGVudCA9XG4gICAgXCJXZSBhbHNvIG9mZmVyIGEgcmFuZ2Ugb2YgZmxhdm9yZnVsIHRvcHBpbmdzIGFuZCBzaWRlcyB0byBwZXJzb25hbGl6ZSB5b3VyIHBvaGEgZXhwZXJpZW5jZS4gRnJvbSB0aGUgZGVsaWNpb3VzIEluZG9yaSBQb2hhIHRvIE1haGFyYXNodHJpYW4gS2FuZGEgUG9oYSwgd2UgaGF2ZSBldmVyeXRoaW5nIHlvdSB3b3VsZCBldmVyIG5lZWQuIEF0IEtpdHR5IFBvaGEgSHViLCB3ZSBzdHJpdmUgdG8gY3JlYXRlIGEgd2FybSBhbmQgaW52aXRpbmcgZW52aXJvbm1lbnQgZm9yIG91ciBkaW5lcnMuIFdlIGJlbGlldmUgdGhhdCBncmVhdCBmb29kIGlzIGJlc3QgZW5qb3llZCBpbiBhIGZyaWVuZGx5IGFuZCB3ZWxjb21pbmcgYXRtb3NwaGVyZSwgYW5kIHdlIG1ha2Ugc3VyZSB0byBjcmVhdGUgYW4gZXhwZXJpZW5jZSB0aGF0IGlzIGp1c3QgYXMgZW5qb3lhYmxlIGFzIG91ciBmb29kLiBJZiB5b3UncmUgbG9va2luZyBmb3IgYSBxdWljayBicmVha2Zhc3QsIGEgbWlkZGF5IHNuYWNrLCBLaXR0eSBQb2hhIEh1YiBoYXMgZ290IHlvdSBjb3ZlcmVkLiBDb21lIHZpc2l0IHVzIGFuZCB0YXN0ZSB0aGUgYmVzdCBwb2hhIGluIHRvd24hXCJcblxuICBuZXdwYXJhWmVyby5jbGFzc0xpc3QuYWRkKCdpbmZvJylcbiAgbmV3cGFyYU9uZS5jbGFzc0xpc3QuYWRkKCdpbmZvJylcbiAgbmV3cGFyYVR3by5jbGFzc0xpc3QuYWRkKCdpbmZvJylcblxuICB0ZXh0V3JhcHBlci5hcHBlbmRDaGlsZChuZXdwYXJhWmVybylcbiAgdGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQobmV3cGFyYU9uZSlcbiAgdGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQobmV3cGFyYVR3bylcblxuICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRXcmFwcGVyKVxuXG4gIGZyYWcuYXBwZW5kKGNhcmRDb250YWluZXIpXG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChmcmFnKVxuXG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpKSB7XG4gICAgY3JlYXRlRm9vdGVyKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBob21lUGFnZVxuIiwiaW1wb3J0IHsgY29udGVudCwgY2xlYXJDb250ZW50IH0gZnJvbSAnLi9jbGVhcidcbmltcG9ydCBpbmRvcmlwb2hhIGZyb20gJy4uL2Fzc2V0cy9pbmRvcmlwb2hhLmpwZydcblxuZnVuY3Rpb24gbWVudVBhZ2UoKSB7XG4gIGNsZWFyQ29udGVudCgpXG4gIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblxuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250YWluZXInKVxuXG4gIGNvbnN0IHRleHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGV4dFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGV4dC13cmFwcGVyJylcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0aXRsZS50ZXh0Q29udGVudCA9ICdJbmRvcmkgUG9oYSdcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGRlc2MudGV4dENvbnRlbnQgPVxuICAgICdPbmUgb2YgdGhlIHBvcHVsYXIgc3RyZWV0IGZvb2Qgc25hY2tzIGZyb20gSW5kb3JlIGlzIHBvaGEgd2l0aCBKYWxlYmkuIHRoZSBwb2hhIHdoaWNoIGlzIG1hZGUgaW4gSW5kb3JlIGlzIHZlcnkgZGlmZmVyZW50IHRoYW4gdGhlIE1haGFyYXNodHJpYW4gb25pb24gUG9oYSByZWNpcGUuIEluIEluZG9yaSBwb2hhIG9uaW9ucyBhcmUgbm90IHNhdXTDqWVkIGJ1dCBhZGRlZCBhcyBhIHRvcHBpbmcgb24gdGhlIHBvaGEuIEFsb25nIHdpdGggb25pb25zIHNvbWUgbW9yZSBpbmdyZWRpZW50cyBhcmUgYWRkZWQgYXMgdG9wcGluZ3MuIFRoZSB0YXN0ZSBvZiBJbmRvcmkgcG9oYSBpcyBraGF0dGEgbWVldGhhIG1lYW5pbmcgc3dlZXQgYW5kIHNvdXIuIEZlbm5lbCBzZWVkcyBhcmUgYWxzbyBhZGRlZCB3aGljaCBnaXZlIHRoZSBwb2hhIGEgZmxvcmFsIGFyb21hIGFuZCBzd2VldGlzaCB0b25lcy4nXG4gIGNvbnN0IGltZ1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBpbWdXcmFwLmNsYXNzTGlzdC5hZGQoJ2ltZy13cmFwcGVyJylcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgaW1nLnNyYyA9IGluZG9yaXBvaGFcbiAgaW1nV3JhcC5hcHBlbmRDaGlsZChpbWcpXG4gIHRleHRXcmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlKVxuICB0ZXh0V3JhcHBlci5hcHBlbmRDaGlsZChkZXNjKVxuICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRXcmFwcGVyKVxuICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ1dyYXApXG4gIGZyYWcuYXBwZW5kQ2hpbGQoY2FyZENvbnRhaW5lcilcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGZyYWcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVQYWdlXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2M2E0NmM7XFxufVxcbi5jb250ZW50IHVsIHtcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG59XFxuLmNvbnRlbnQgdWwgbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4uY29udGVudCAuY2FyZC1jb250YWluZXIge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogI2ZkZmRmZjtcXG59XFxuLmNvbnRlbnQgLmNhcmQtY29udGFpbmVyIC5pbWctd3JhcHBlciB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxufVxcbi5jb250ZW50IC5jYXJkLWNvbnRhaW5lciAudGV4dC13cmFwcGVyIGRpdjpudGgtb2YtdHlwZSgxKSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAzdncsIDJyZW0pO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZ2FwOiAyZW07XFxufVxcblxcbmEge1xcbiAgY29sb3I6ICNmZGZkZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IGNsYW1wKDFlbSwgM3Z3LCAxLjVlbSk7XFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDEwZnIgMWZyO1xcbiAgfVxcbiAgLm5hdmlnYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLmNvbnRlbnQgLmNhcmQtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcbiAgLmNvbnRlbnQgLmNhcmQtY29udGFpbmVyIC50ZXh0LXdyYXBwZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbiAgLmNvbnRlbnQgLmNhcmQtY29udGFpbmVyIC5pbWctd3JhcHBlciB7XFxuICAgIHdpZHRoOiA0NSU7XFxuICB9XFxuICAuY29udGVudCAuY2FyZC1jb250YWluZXIgLmltZy13cmFwcGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIH1cXG4gIC5jb250ZW50IC5ob21lLWNvbnRlbnQgLnRleHQtd3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5jb250IHtcXG4gIHBhZGRpbmc6IDAgMmVtO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmRmZGZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxN2I1YTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBmb250LXNpemU6IGNsYW1wKDEuNWVtLCA1dncsIDIuNWVtKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi5pbmZvOm50aC1vZi10eXBlKDEpIHtcXG4gIHRleHQtaW5kZW50OiAyZW07XFxufVxcblxcbi5pbmZvIHtcXG4gIG1hcmdpbjogMWVtIDA7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgY29sb3I6ICNmZGZkZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE3YjVhO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19jb250ZW50LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fbmF2LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX21lZGlhLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx5QkNJYTtBQ0xmO0FGRUU7RUFDRSxlQUFBO0FFQUo7QUZDSTtFQUNFLHFCQUFBO0FFQ047QUZHRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNDVlE7QUNTWjtBRkdJO0VBQ0UsZUFBQTtBRUROO0FGSUk7RUFDRSxvQkFBQTtFQUNBLG1DQUFBO0FFRk47O0FDcEJBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7QUR1QkY7O0FDcEJBO0VBQ0UsY0ZGVTtFRUdWLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FEdUJGOztBRW5DQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxnQ0FBQTtFRnNDRjtFRW5DQTtJQUNFLGFBQUE7RUZxQ0Y7RUVsQ0U7SUFDRSxtQkFBQTtJQUNBLDhCQUFBO0VGb0NKO0VFbkNJO0lBQ0UsVUFBQTtFRnFDTjtFRW5DSTtJQUNFLFVBQUE7RUZxQ047RUVsQ0k7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7RUZvQ047RUUvQkk7SUFDRSxXQUFBO0VGaUNOO0FBQ0Y7QUF6REE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBMkRGOztBQXhEQTtFQUNFLGlDRFZVO0FDcUVaOztBQXhEQTtFQUNFLFdBQUE7QUEyREY7O0FBeERBO0VBQ0UsYUFBQTtBQTJERjs7QUF4REE7RUFDRSxjQUFBO0FBMkRGOztBQXhEQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0R6QlU7RUMwQlYseUJEM0JZO0FDc0ZkOztBQXhEQTtFQUNFLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBMkRGOztBQXhEQTtFQUNFLGdCQUFBO0FBMkRGOztBQXhEQTtFQUNFLGFBQUE7QUEyREY7O0FBeERBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjRGhEVTtFQ2lEVix5QkRsRFk7QUM2R2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSAndmFyaWFibGVzJyBhcyB2O1xcblxcbi5jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHYuJGNvbnRlbnQtZ3JleTtcXG4gIHVsIHtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICBsaSB7XFxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB9XFxuICB9XFxuXFxuICAuY2FyZC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29sb3I6IHYuJHdoaXRlLWNvbDtcXG5cXG4gICAgLmltZy13cmFwcGVyIHtcXG4gICAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgIH1cXG5cXG4gICAgLnRleHQtd3JhcHBlciBkaXY6bnRoLW9mLXR5cGUoMSkge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAzdncsIDJyZW0pO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiLy9mb250XFxuXFxuJG1haW4tZm9udDogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuXFxuLy9jb2xvcnNcXG4kaGVhZGluZy1jb2w6ICM0MTdiNWE7XFxuJHdoaXRlLWNvbDogI2ZkZmRmZjtcXG4kY29udGVudC1ncmV5OiAjNjNhNDZjO1xcbiRjb250ZW50LWZvbnQ6ICNjNmM1Yjk7XFxuXCIsXCJAdXNlICd2YXJpYWJsZXMnIGFzIHY7XFxuQHVzZSAnY29udGVudCc7XFxuQHVzZSAnbmF2JztcXG5AdXNlICdtZWRpYSc7XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogdi4kbWFpbi1mb250O1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmNvbnQge1xcbiAgcGFkZGluZzogMCAyZW07XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHYuJHdoaXRlLWNvbDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHYuJGhlYWRpbmctY29sO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS41ZW0sIDV2dywgMi41ZW0pO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLmluZm86bnRoLW9mLXR5cGUoMSkge1xcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcXG59XFxuXFxuLmluZm8ge1xcbiAgbWFyZ2luOiAxZW0gMDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBjb2xvcjogdi4kd2hpdGUtY29sO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdi4kaGVhZGluZy1jb2w7XFxufVxcblwiLFwiQHVzZSAndmFyaWFibGVzJyBhcyB2O1xcblxcbi5uYXZpZ2F0aW9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBnYXA6IDJlbTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogdi4kd2hpdGUtY29sO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxZW0sIDN2dywgMS41ZW0pO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblwiLFwiQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDEwZnIgMWZyO1xcbiAgfVxcblxcbiAgLm5hdmlnYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLmNvbnRlbnQge1xcbiAgICAuY2FyZC1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIC50ZXh0LXdyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICB9XFxuICAgICAgLmltZy13cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiA0NSU7XFxuICAgICAgfVxcblxcbiAgICAgIC5pbWctd3JhcHBlciB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmhvbWUtY29udGVudCB7XFxuICAgICAgLnRleHQtd3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vY29tcG9uZW50cy9ob21lJ1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gJy4vY29tcG9uZW50cy9tZW51J1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gJy4vY29tcG9uZW50cy9jb250YWN0J1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnXG5cbmNvbnN0IG5hdkFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG5cbmZ1bmN0aW9uIHN3aXRjaFBhZ2UoZSkge1xuICBpZiAoZS50YXJnZXQuaWQgPT09ICdtZW51Jykge1xuICAgIG1lbnVQYWdlKClcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gJ2Fib3V0Jykge1xuICAgIGNvbnRhY3RQYWdlKClcbiAgfSBlbHNlIHtcbiAgICBob21lUGFnZSgpXG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29ubG9hZCcsIGhvbWVQYWdlKCkpXG5cbm5hdkFycmF5LmZvckVhY2goKHZhbHVlKSA9PiB7XG4gIHZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoUGFnZSlcbn0pXG4iXSwibmFtZXMiOlsiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsZWFyQ29udGVudCIsImlubmVySFRNTCIsImNvbnRhY3RQYWdlIiwiZnJhZyIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjYXJkQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRXcmFwcGVyIiwiY29udEFyciIsInVsIiwiZm9yRWFjaCIsInZhbHVlIiwibGkiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlRm9vdGVyIiwiY29udGFpbmVyIiwiZm9vdGVyIiwiZm9vdERpdiIsImhvbWVQYWdlIiwibmV3cGFyYVplcm8iLCJuZXdwYXJhT25lIiwibmV3cGFyYVR3byIsImFwcGVuZCIsImluZG9yaXBvaGEiLCJtZW51UGFnZSIsInRpdGxlIiwiZGVzYyIsImltZ1dyYXAiLCJpbWciLCJzcmMiLCJuYXZBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzd2l0Y2hQYWdlIiwiZSIsInRhcmdldCIsImlkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=