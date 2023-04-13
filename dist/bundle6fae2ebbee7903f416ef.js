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
___CSS_LOADER_EXPORT___.push([module.id, ".heading {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  color: #fdfdff;\n  background-color: #417b5a;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\n}\n\n.header {\n  font-size: clamp(1.5em, 5vw, 2.5em);\n  font-weight: 700;\n  padding: 1rem 0;\n}\n\n.content {\n  flex: 1;\n  background-color: #fdfdff;\n}\n.content ul {\n  margin-top: 2em;\n}\n.content ul li {\n  list-style-type: none;\n}\n.content .card-container {\n  padding: 2em;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  color: #63a46c;\n}\n.content .card-container .img-wrapper {\n  margin-top: 1em;\n}\n.content .card-container .text-wrapper div:nth-of-type(1) {\n  margin-bottom: 0.5em;\n  font-size: clamp(1.5rem, 3vw, 2rem);\n}\n.content .card-container .menu-title {\n  color: #417b5a;\n}\n\n.navigation {\n  display: flex;\n  gap: 2em;\n  margin-bottom: 1em;\n}\n\n.nav-icon {\n  width: clamp(30px, 2.5rem, 48px);\n  height: clamp(30px, 2.5rem, 48px);\n}\n\na {\n  color: #fdfdff;\n  text-decoration: none;\n  font-size: clamp(1em, 3vw, 1.5em);\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\n\n@media (min-width: 768px) {\n  .heading {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .navigation {\n    display: flex;\n  }\n  .content .card-container {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .content .card-container .text-wrapper {\n    width: 50%;\n  }\n  .content .card-container .img-wrapper {\n    width: 45%;\n  }\n  .content .card-container .img-wrapper {\n    margin-top: 0;\n    align-self: flex-start;\n  }\n  .content .home-content .text-wrapper {\n    width: 100%;\n  }\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n}\n\nimg {\n  width: 100%;\n}\n\n.container {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.cont {\n  padding: 0 2em;\n}\n\n.info:nth-of-type(1) {\n  text-indent: 2em;\n}\n\n.info {\n  margin: 1em 0;\n}\n\n.footer {\n  z-index: 1;\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  padding: 1rem 0;\n  color: #fdfdff;\n  background-color: #417b5a;\n  box-shadow: 8px 0 10px rgba(0, 0, 0, 0.4);\n}", "",{"version":3,"sources":["webpack://./src/styles/_heading.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/main.scss","webpack://./src/styles/_content.scss","webpack://./src/styles/_nav.scss","webpack://./src/styles/_media.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;EACA,cCFU;EDGV,yBCJY;EDKZ,yCAAA;AEDF;;AFIA;EACE,mCAAA;EACA,gBAAA;EACA,eAAA;AEDF;;ACbA;EACE,OAAA;EACA,yBFEU;ACcZ;ACfE;EACE,eAAA;ADiBJ;AChBI;EACE,qBAAA;ADkBN;ACdE;EACE,YAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,cFVW;AC0Bf;ACdI;EACE,eAAA;ADgBN;ACbI;EACE,oBAAA;EACA,mCAAA;ADeN;ACZI;EACE,cFxBQ;ACsCd;;AEzCA;EACE,aAAA;EACA,QAAA;EACA,kBAAA;AF4CF;;AEzCA;EACE,gCAAA;EACA,iCAAA;AF4CF;;AEzCA;EACE,cHRU;EGSV,qBAAA;EACA,iCAAA;EACA,mBAAA;EACA,yBAAA;AF4CF;;AG9DA;EACE;IACE,mBAAA;IACA,8BAAA;EHiEF;EG9DA;IACE,aAAA;EHgEF;EG7DE;IACE,mBAAA;IACA,8BAAA;EH+DJ;EG9DI;IACE,UAAA;EHgEN;EG9DI;IACE,UAAA;EHgEN;EG7DI;IACE,aAAA;IACA,sBAAA;EH+DN;EG1DI;IACE,WAAA;EH4DN;AACF;AAnFA;EACE,sBAAA;EACA,SAAA;EACA,UAAA;AAqFF;;AAlFA;EACE,iCDXU;ACgGZ;;AAlFA;EACE,WAAA;AAqFF;;AAlFA;EACE,aAAA;EACA,aAAA;EACA,sBAAA;AAqFF;;AAlFA;EACE,cAAA;AAqFF;;AAlFA;EACE,gBAAA;AAqFF;;AAlFA;EACE,aAAA;AAqFF;;AAlFA;EACE,UAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,eAAA;EACA,cDtCU;ECuCV,yBDxCY;ECyCZ,yCAAA;AAqFF","sourcesContent":["@use 'variables' as v;\n\n.heading {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  color: v.$white-col;\n  background-color: v.$heading-col;\n  box-shadow: 0 4px 10px rgb(0, 0, 0, 0.3);\n}\n\n.header {\n  font-size: clamp(1.5em, 5vw, 2.5em);\n  font-weight: 700;\n  padding: 1rem 0;\n}\n","//font\n\n$main-font: 'Roboto', sans-serif;\n\n//colors\n$heading-col: #417b5a;\n$white-col: #fdfdff;\n$content-grey: #63a46c;\n$content-font: #c6c5b9;\n","@use 'variables' as v;\n@use 'heading';\n@use 'content';\n@use 'nav';\n@use 'media';\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: v.$main-font;\n}\n\nimg {\n  width: 100%;\n}\n\n.container {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.cont {\n  padding: 0 2em;\n}\n\n.info:nth-of-type(1) {\n  text-indent: 2em;\n}\n\n.info {\n  margin: 1em 0;\n}\n\n.footer {\n  z-index: 1;\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  padding: 1rem 0;\n  color: v.$white-col;\n  background-color: v.$heading-col;\n  box-shadow: 8px 0 10px rgb(0, 0, 0, 0.4);\n}\n","@use 'variables' as v;\n\n.content {\n  flex: 1;\n  background-color: v.$white-col;\n  ul {\n    margin-top: 2em;\n    li {\n      list-style-type: none;\n    }\n  }\n\n  .card-container {\n    padding: 2em;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    color: v.$content-grey;\n\n    .img-wrapper {\n      margin-top: 1em;\n    }\n\n    .text-wrapper div:nth-of-type(1) {\n      margin-bottom: 0.5em;\n      font-size: clamp(1.5rem, 3vw, 2rem);\n    }\n\n    .menu-title {\n      color: v.$heading-col;\n    }\n  }\n}\n","@use 'variables' as v;\n\n.navigation {\n  display: flex;\n  gap: 2em;\n  margin-bottom: 1em;\n}\n\n.nav-icon {\n  width: clamp(30px, 2.5rem, 48px);\n  height: clamp(30px, 2.5rem, 48px);\n}\n\na {\n  color: v.$white-col;\n  text-decoration: none;\n  font-size: clamp(1em, 3vw, 1.5em);\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\n","@media (min-width: 768px) {\n  .heading {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n  .navigation {\n    display: flex;\n  }\n  .content {\n    .card-container {\n      flex-direction: row;\n      justify-content: space-between;\n      .text-wrapper {\n        width: 50%;\n      }\n      .img-wrapper {\n        width: 45%;\n      }\n\n      .img-wrapper {\n        margin-top: 0;\n        align-self: flex-start;\n      }\n    }\n\n    .home-content {\n      .text-wrapper {\n        width: 100%;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQyxLQUFLLElBQUs7RUFDMUJBLEtBQUssQ0FBQzJCLGdCQUFnQixDQUFDLE9BQU8sRUFBRUwsVUFBVSxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbXBvbmVudHMvY2xlYXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NjljNyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICBjb250ZW50LmlubmVySFRNTCA9ICcnXG59XG5cbmV4cG9ydCB7IGNvbnRlbnQsIGNsZWFyQ29udGVudCB9XG4iLCJpbXBvcnQgeyBjb250ZW50LCBjbGVhckNvbnRlbnQgfSBmcm9tICcuL2NsZWFyJ1xuXG5mdW5jdGlvbiBjb250YWN0UGFnZSgpIHtcbiAgY2xlYXJDb250ZW50KClcbiAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuXG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicsICdob21lLWNvbnRlbnQnKVxuXG4gIGNvbnN0IHRleHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGV4dFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGV4dC13cmFwcGVyJylcblxuICBjb25zdCBjb250QXJyID0gW1xuICAgICdLaXR0eSBQb2hhIEh1YicsXG4gICAgJzEyMyBNYWluIFN0cmVldCcsXG4gICAgJ011bWJhaSwgTWFoYXJhc2h0cmEgNDAwMDAxJyxcbiAgICAnSW5kaWEnLFxuICAgICcrOTEgOTg3NjUgNDMyMTAnLFxuICAgICdhZG1pbkBraXR0eWh1Yi5jbycsXG4gIF1cbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG5cbiAgY29udEFyci5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpLnRleHRDb250ZW50ID0gdmFsdWVcbiAgICB1bC5hcHBlbmRDaGlsZChsaSlcbiAgfSlcbiAgdGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQodWwpXG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dFdyYXBwZXIpXG4gIGZyYWcuYXBwZW5kQ2hpbGQoY2FyZENvbnRhaW5lcilcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGZyYWcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQYWdlXG4iLCJmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKVxuICBjb25zdCBmb290RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZm9vdERpdi5pbm5lckhUTUwgPSAnJiMxNjkgdGgzZ3JpbXJlYXBlciB8IFRoZSBPZGluIFByb2plY3QgKDIwMjMpJ1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdERpdilcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXJcbiIsImltcG9ydCB7IGNvbnRlbnQsIGNsZWFyQ29udGVudCB9IGZyb20gJy4vY2xlYXInXG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gJy4vZm9vdGVyJ1xuXG5mdW5jdGlvbiBob21lUGFnZSgpIHtcbiAgY2xlYXJDb250ZW50KClcbiAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuXG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicsICdob21lLWNvbnRlbnQnKVxuXG4gIGNvbnN0IHRleHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGV4dFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGV4dC13cmFwcGVyJylcblxuICBjb25zdCBuZXdwYXJhWmVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBjb25zdCBuZXdwYXJhT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGNvbnN0IG5ld3BhcmFUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcblxuICBuZXdwYXJhWmVyby50ZXh0Q29udGVudCA9XG4gICAgXCJXZWxjb21lIHRvIEtpdHR5IFBvaGEgSHViISBBdCBLaXR0eSBQb2hhIEh1Yiwgd2UgdGFrZSBwcmlkZSBpbiBzZXJ2aW5nIHRoZSBiZXN0IHBvaGEgaW4gdG93bi4gT3VyIGxlZ2VuZGFyeSBwb2hhIGlzIG1hZGUgd2l0aCBoaWdoLXF1YWxpdHkgaW5ncmVkaWVudHMsIGFuZCBpdCdzIHRoZSBwZXJmZWN0IG1lYWwgdG8gc3RhcnQgeW91ciBkYXkgb3Igc2F0aXNmeSB5b3VyIG1pZGRheSBjcmF2aW5ncy5cIlxuICBuZXdwYXJhT25lLnRleHRDb250ZW50ID1cbiAgICAnT3VyIGRlZGljYXRpb24gdG8gdXNpbmcgb25seSB0aGUgZnJlc2hlc3QgYW5kIG1vc3QgZGVsaWNpb3VzIGluZ3JlZGllbnRzIGhhcyBlYXJuZWQgdXMgYSByZXB1dGF0aW9uIGZvciBiZWluZyB0aGUgZ28tdG8gc3BvdCBmb3IgcG9oYSBsb3ZlcnMuIFdlIHRha2UgZ3JlYXQgY2FyZSB0byBlbnN1cmUgdGhhdCBldmVyeSBkaXNoIHRoYXQgbGVhdmVzIG91ciBraXRjaGVuIG1lZXRzIHRoZSBoaWdoZXN0IHN0YW5kYXJkcyBvZiBxdWFsaXR5IGFuZCBmbGF2b3IuJ1xuICBuZXdwYXJhVHdvLnRleHRDb250ZW50ID1cbiAgICBcIldlIGFsc28gb2ZmZXIgYSByYW5nZSBvZiBmbGF2b3JmdWwgdG9wcGluZ3MgYW5kIHNpZGVzIHRvIHBlcnNvbmFsaXplIHlvdXIgcG9oYSBleHBlcmllbmNlLiBGcm9tIHRoZSBkZWxpY2lvdXMgSW5kb3JpIFBvaGEgdG8gTWFoYXJhc2h0cmlhbiBLYW5kYSBQb2hhLCB3ZSBoYXZlIGV2ZXJ5dGhpbmcgeW91IHdvdWxkIGV2ZXIgbmVlZC4gQXQgS2l0dHkgUG9oYSBIdWIsIHdlIHN0cml2ZSB0byBjcmVhdGUgYSB3YXJtIGFuZCBpbnZpdGluZyBlbnZpcm9ubWVudCBmb3Igb3VyIGRpbmVycy4gV2UgYmVsaWV2ZSB0aGF0IGdyZWF0IGZvb2QgaXMgYmVzdCBlbmpveWVkIGluIGEgZnJpZW5kbHkgYW5kIHdlbGNvbWluZyBhdG1vc3BoZXJlLCBhbmQgd2UgbWFrZSBzdXJlIHRvIGNyZWF0ZSBhbiBleHBlcmllbmNlIHRoYXQgaXMganVzdCBhcyBlbmpveWFibGUgYXMgb3VyIGZvb2QuIElmIHlvdSdyZSBsb29raW5nIGZvciBhIHF1aWNrIGJyZWFrZmFzdCwgYSBtaWRkYXkgc25hY2ssIEtpdHR5IFBvaGEgSHViIGhhcyBnb3QgeW91IGNvdmVyZWQuIENvbWUgdmlzaXQgdXMgYW5kIHRhc3RlIHRoZSBiZXN0IHBvaGEgaW4gdG93biFcIlxuXG4gIG5ld3BhcmFaZXJvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKVxuICBuZXdwYXJhT25lLmNsYXNzTGlzdC5hZGQoJ2luZm8nKVxuICBuZXdwYXJhVHdvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKVxuXG4gIHRleHRXcmFwcGVyLmFwcGVuZENoaWxkKG5ld3BhcmFaZXJvKVxuICB0ZXh0V3JhcHBlci5hcHBlbmRDaGlsZChuZXdwYXJhT25lKVxuICB0ZXh0V3JhcHBlci5hcHBlbmRDaGlsZChuZXdwYXJhVHdvKVxuXG4gIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dFdyYXBwZXIpXG5cbiAgZnJhZy5hcHBlbmQoY2FyZENvbnRhaW5lcilcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGZyYWcpXG5cbiAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykpIHtcbiAgICBjcmVhdGVGb290ZXIoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVQYWdlXG4iLCJpbXBvcnQgeyBjb250ZW50LCBjbGVhckNvbnRlbnQgfSBmcm9tICcuL2NsZWFyJ1xuaW1wb3J0IGluZG9yaXBvaGEgZnJvbSAnLi4vYXNzZXRzL2luZG9yaXBvaGEuanBnJ1xuXG5mdW5jdGlvbiBtZW51UGFnZSgpIHtcbiAgY2xlYXJDb250ZW50KClcbiAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuXG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicpXG5cbiAgY29uc3QgdGV4dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0ZXh0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0ZXh0LXdyYXBwZXInKVxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGl0bGUnKVxuICB0aXRsZS50ZXh0Q29udGVudCA9ICdJbmRvcmkgUG9oYSdcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGRlc2MudGV4dENvbnRlbnQgPVxuICAgICdPbmUgb2YgdGhlIHBvcHVsYXIgc3RyZWV0IGZvb2Qgc25hY2tzIGZyb20gSW5kb3JlIGlzIHBvaGEgd2l0aCBKYWxlYmkuIHRoZSBwb2hhIHdoaWNoIGlzIG1hZGUgaW4gSW5kb3JlIGlzIHZlcnkgZGlmZmVyZW50IHRoYW4gdGhlIE1haGFyYXNodHJpYW4gb25pb24gUG9oYSByZWNpcGUuIEluIEluZG9yaSBwb2hhIG9uaW9ucyBhcmUgbm90IHNhdXTDqWVkIGJ1dCBhZGRlZCBhcyBhIHRvcHBpbmcgb24gdGhlIHBvaGEuIEFsb25nIHdpdGggb25pb25zIHNvbWUgbW9yZSBpbmdyZWRpZW50cyBhcmUgYWRkZWQgYXMgdG9wcGluZ3MuIFRoZSB0YXN0ZSBvZiBJbmRvcmkgcG9oYSBpcyBraGF0dGEgbWVldGhhIG1lYW5pbmcgc3dlZXQgYW5kIHNvdXIuIEZlbm5lbCBzZWVkcyBhcmUgYWxzbyBhZGRlZCB3aGljaCBnaXZlIHRoZSBwb2hhIGEgZmxvcmFsIGFyb21hIGFuZCBzd2VldGlzaCB0b25lcy4nXG4gIGNvbnN0IGltZ1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBpbWdXcmFwLmNsYXNzTGlzdC5hZGQoJ2ltZy13cmFwcGVyJylcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgaW1nLnNyYyA9IGluZG9yaXBvaGFcbiAgaW1nV3JhcC5hcHBlbmRDaGlsZChpbWcpXG4gIHRleHRXcmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlKVxuICB0ZXh0V3JhcHBlci5hcHBlbmRDaGlsZChkZXNjKVxuICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRXcmFwcGVyKVxuICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ1dyYXApXG4gIGZyYWcuYXBwZW5kQ2hpbGQoY2FyZENvbnRhaW5lcilcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGZyYWcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVQYWdlXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTtcXG4gIGNvbG9yOiAjZmRmZGZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxN2I1YTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS41ZW0sIDV2dywgMi41ZW0pO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmY7XFxufVxcbi5jb250ZW50IHVsIHtcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG59XFxuLmNvbnRlbnQgdWwgbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4uY29udGVudCAuY2FyZC1jb250YWluZXIge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogIzYzYTQ2YztcXG59XFxuLmNvbnRlbnQgLmNhcmQtY29udGFpbmVyIC5pbWctd3JhcHBlciB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxufVxcbi5jb250ZW50IC5jYXJkLWNvbnRhaW5lciAudGV4dC13cmFwcGVyIGRpdjpudGgtb2YtdHlwZSgxKSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAzdncsIDJyZW0pO1xcbn1cXG4uY29udGVudCAuY2FyZC1jb250YWluZXIgLm1lbnUtdGl0bGUge1xcbiAgY29sb3I6ICM0MTdiNWE7XFxufVxcblxcbi5uYXZpZ2F0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLm5hdi1pY29uIHtcXG4gIHdpZHRoOiBjbGFtcCgzMHB4LCAyLjVyZW0sIDQ4cHgpO1xcbiAgaGVpZ2h0OiBjbGFtcCgzMHB4LCAyLjVyZW0sIDQ4cHgpO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiAjZmRmZGZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxZW0sIDN2dywgMS41ZW0pO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmhlYWRpbmcge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICAubmF2aWdhdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAuY29udGVudCAuY2FyZC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICAuY29udGVudCAuY2FyZC1jb250YWluZXIgLnRleHQtd3JhcHBlciB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuICAuY29udGVudCAuY2FyZC1jb250YWluZXIgLmltZy13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gIH1cXG4gIC5jb250ZW50IC5jYXJkLWNvbnRhaW5lciAuaW1nLXdyYXBwZXIge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgfVxcbiAgLmNvbnRlbnQgLmhvbWUtY29udGVudCAudGV4dC13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udCB7XFxuICBwYWRkaW5nOiAwIDJlbTtcXG59XFxuXFxuLmluZm86bnRoLW9mLXR5cGUoMSkge1xcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcXG59XFxuXFxuLmluZm8ge1xcbiAgbWFyZ2luOiAxZW0gMDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICB6LWluZGV4OiAxO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgY29sb3I6ICNmZGZkZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE3YjVhO1xcbiAgYm94LXNoYWRvdzogOHB4IDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX2hlYWRpbmcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19jb250ZW50LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX25hdi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19tZWRpYS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQ0ZVO0VER1YseUJDSlk7RURLWix5Q0FBQTtBRURGOztBRklBO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUVERjs7QUNiQTtFQUNFLE9BQUE7RUFDQSx5QkZFVTtBQ2NaO0FDZkU7RUFDRSxlQUFBO0FEaUJKO0FDaEJJO0VBQ0UscUJBQUE7QURrQk47QUNkRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNGVlc7QUMwQmY7QUNkSTtFQUNFLGVBQUE7QURnQk47QUNiSTtFQUNFLG9CQUFBO0VBQ0EsbUNBQUE7QURlTjtBQ1pJO0VBQ0UsY0Z4QlE7QUNzQ2Q7O0FFekNBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBRjRDRjs7QUV6Q0E7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FGNENGOztBRXpDQTtFQUNFLGNIUlU7RUdTVixxQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBRjRDRjs7QUc5REE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsOEJBQUE7RUhpRUY7RUc5REE7SUFDRSxhQUFBO0VIZ0VGO0VHN0RFO0lBQ0UsbUJBQUE7SUFDQSw4QkFBQTtFSCtESjtFRzlESTtJQUNFLFVBQUE7RUhnRU47RUc5REk7SUFDRSxVQUFBO0VIZ0VOO0VHN0RJO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0VIK0ROO0VHMURJO0lBQ0UsV0FBQTtFSDRETjtBQUNGO0FBbkZBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQXFGRjs7QUFsRkE7RUFDRSxpQ0RYVTtBQ2dHWjs7QUFsRkE7RUFDRSxXQUFBO0FBcUZGOztBQWxGQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFxRkY7O0FBbEZBO0VBQ0UsY0FBQTtBQXFGRjs7QUFsRkE7RUFDRSxnQkFBQTtBQXFGRjs7QUFsRkE7RUFDRSxhQUFBO0FBcUZGOztBQWxGQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNEdENVO0VDdUNWLHlCRHhDWTtFQ3lDWix5Q0FBQTtBQXFGRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICd2YXJpYWJsZXMnIGFzIHY7XFxuXFxuLmhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbiAgY29sb3I6IHYuJHdoaXRlLWNvbDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHYuJGhlYWRpbmctY29sO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2IoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBmb250LXNpemU6IGNsYW1wKDEuNWVtLCA1dncsIDIuNWVtKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblwiLFwiLy9mb250XFxuXFxuJG1haW4tZm9udDogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuXFxuLy9jb2xvcnNcXG4kaGVhZGluZy1jb2w6ICM0MTdiNWE7XFxuJHdoaXRlLWNvbDogI2ZkZmRmZjtcXG4kY29udGVudC1ncmV5OiAjNjNhNDZjO1xcbiRjb250ZW50LWZvbnQ6ICNjNmM1Yjk7XFxuXCIsXCJAdXNlICd2YXJpYWJsZXMnIGFzIHY7XFxuQHVzZSAnaGVhZGluZyc7XFxuQHVzZSAnY29udGVudCc7XFxuQHVzZSAnbmF2JztcXG5AdXNlICdtZWRpYSc7XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogdi4kbWFpbi1mb250O1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udCB7XFxuICBwYWRkaW5nOiAwIDJlbTtcXG59XFxuXFxuLmluZm86bnRoLW9mLXR5cGUoMSkge1xcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcXG59XFxuXFxuLmluZm8ge1xcbiAgbWFyZ2luOiAxZW0gMDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICB6LWluZGV4OiAxO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgY29sb3I6IHYuJHdoaXRlLWNvbDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHYuJGhlYWRpbmctY29sO1xcbiAgYm94LXNoYWRvdzogOHB4IDAgMTBweCByZ2IoMCwgMCwgMCwgMC40KTtcXG59XFxuXCIsXCJAdXNlICd2YXJpYWJsZXMnIGFzIHY7XFxuXFxuLmNvbnRlbnQge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHYuJHdoaXRlLWNvbDtcXG4gIHVsIHtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICBsaSB7XFxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB9XFxuICB9XFxuXFxuICAuY2FyZC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29sb3I6IHYuJGNvbnRlbnQtZ3JleTtcXG5cXG4gICAgLmltZy13cmFwcGVyIHtcXG4gICAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgIH1cXG5cXG4gICAgLnRleHQtd3JhcHBlciBkaXY6bnRoLW9mLXR5cGUoMSkge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAzdncsIDJyZW0pO1xcbiAgICB9XFxuXFxuICAgIC5tZW51LXRpdGxlIHtcXG4gICAgICBjb2xvcjogdi4kaGVhZGluZy1jb2w7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCJAdXNlICd2YXJpYWJsZXMnIGFzIHY7XFxuXFxuLm5hdmlnYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4ubmF2LWljb24ge1xcbiAgd2lkdGg6IGNsYW1wKDMwcHgsIDIuNXJlbSwgNDhweCk7XFxuICBoZWlnaHQ6IGNsYW1wKDMwcHgsIDIuNXJlbSwgNDhweCk7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHYuJHdoaXRlLWNvbDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMWVtLCAzdncsIDEuNWVtKTtcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cIixcIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmhlYWRpbmcge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAubmF2aWdhdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAuY29udGVudCB7XFxuICAgIC5jYXJkLWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgLnRleHQtd3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgIH1cXG4gICAgICAuaW1nLXdyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDQ1JTtcXG4gICAgICB9XFxuXFxuICAgICAgLmltZy13cmFwcGVyIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuaG9tZS1jb250ZW50IHtcXG4gICAgICAudGV4dC13cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL2hvbWUnXG5pbXBvcnQgbWVudVBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL21lbnUnXG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhY3QnXG5pbXBvcnQgJy4vc3R5bGVzL21haW4uc2NzcydcblxuY29uc3QgbmF2QXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcblxuZnVuY3Rpb24gc3dpdGNoUGFnZShlKSB7XG4gIGlmIChlLnRhcmdldC5pZCA9PT0gJ21lbnUnKSB7XG4gICAgbWVudVBhZ2UoKVxuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSAnYWJvdXQnKSB7XG4gICAgY29udGFjdFBhZ2UoKVxuICB9IGVsc2Uge1xuICAgIGhvbWVQYWdlKClcbiAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25sb2FkJywgaG9tZVBhZ2UoKSlcblxubmF2QXJyYXkuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgdmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hQYWdlKVxufSlcbiJdLCJuYW1lcyI6WyJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xlYXJDb250ZW50IiwiaW5uZXJIVE1MIiwiY29udGFjdFBhZ2UiLCJmcmFnIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNhcmRDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dFdyYXBwZXIiLCJjb250QXJyIiwidWwiLCJmb3JFYWNoIiwidmFsdWUiLCJsaSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVGb290ZXIiLCJjb250YWluZXIiLCJmb290ZXIiLCJmb290RGl2IiwiaG9tZVBhZ2UiLCJuZXdwYXJhWmVybyIsIm5ld3BhcmFPbmUiLCJuZXdwYXJhVHdvIiwiYXBwZW5kIiwiaW5kb3JpcG9oYSIsIm1lbnVQYWdlIiwidGl0bGUiLCJkZXNjIiwiaW1nV3JhcCIsImltZyIsInNyYyIsIm5hdkFycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsInN3aXRjaFBhZ2UiLCJlIiwidGFyZ2V0IiwiaWQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==