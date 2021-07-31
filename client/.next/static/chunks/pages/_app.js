(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "../node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_local_api_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/regenerator */ "../node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_local_api_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_local_api_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_local_api_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_local_api_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ "../node_modules/react-query/es/index.js");
/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query/hydration */ "../node_modules/react-query/es/hydration/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "D:\\local-api\\client\\pages\\_app.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_local_api_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var App = function App(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var clientRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);

  var getClient = function getClient() {
    if (!clientRef.current) clientRef.current = new react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false
        }
      }
    });
    return clientRef.current;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClientProvider, {
    client: getClient(),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_query_hydration__WEBPACK_IMPORTED_MODULE_7__.Hydrate, {
      state: pageProps.dehydratedState,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, _this);
};

_s(App, "67t0qiuNMBMd6ZM7Z7JwZpgZZRM=");

_c = App;

App.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = (0,D_local_api_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_local_api_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref2) {
    var _Component$getInitial;

    var ctx, Component, pageProps;
    return D_local_api_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref2.ctx, Component = _ref2.Component;
            _context.next = 3;
            return (_Component$getInitial = Component.getInitialProps) === null || _Component$getInitial === void 0 ? void 0 : _Component$getInitial.call(Component, ctx);

          case 3:
            pageProps = _context.sent;
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!":
/*!***********************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! ***!
  \***********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./pages/index.scss":
/*!**************************!*\
  !*** ./pages/index.scss ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./index.scss */ "../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./pages/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./index.scss */ "../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./pages/index.scss",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./index.scss */ "../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./pages/index.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!*************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "../node_modules/next/dist/compiled/css-loader/api.js":
/*!************************************************************!*\
  !*** ../node_modules/next/dist/compiled/css-loader/api.js ***!
  \************************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./pages/index.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./pages/index.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "../node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n}\n\n#__next {\n  margin: 10px;\n}\n\nh1 {\n  text-align: center;\n  margin: 20px 0;\n}\n\n.messages {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.messages__input {\n  display: -moz-box;\n  display: flex;\n  width: 80%;\n  max-width: 700px;\n  min-width: 400px;\n  margin: 0 auto 10px;\n}\n.messages__input > * {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.messages__input textarea {\n  padding: 10px;\n  -moz-box-flex: 1;\n       flex-grow: 1;\n}\n.messages__input button {\n  margin-left: 5px;\n  width: 60px;\n}\n.messages__item {\n  position: relative;\n  margin: 10px 0;\n  padding: 15px 15px 5px;\n  border-radius: 5px;\n  border: solid 1px #aaa;\n}\n.messages__item h3 {\n  font-size: 0.85em;\n  margin: 0 0 10px;\n}\n.messages__item sub {\n  font-weight: normal;\n  margin-left: 5px;\n  vertical-align: baseline;\n}\n.messages__item p {\n  margin: 10px 0;\n}\n.messages__item:hover .messages__buttons {\n  display: block;\n}\n.messages__item .messages__input {\n  width: 100%;\n}\n.messages__buttons {\n  display: none;\n  position: absolute;\n  text-align: right;\n  right: 10px;\n  bottom: 10px;\n}", "",{"version":3,"sources":["webpack://index.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;AACF;;AACA;EACE,YAAA;AAEF;;AAAA;EACE,kBAAA;EACA,cAAA;AAGF;;AADA;EACE,gBAAA;EACA,UAAA;EACA,SAAA;AAIF;AAHE;EACE,iBAAA;EAAA,aAAA;EACA,UAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;AAKJ;AAJI;EACE,8BAAA;KAAA,2BAAA;UAAA,sBAAA;AAMN;AAJI;EACE,aAAA;EACA,gBAAA;OAAA,YAAA;AAMN;AAJI;EACE,gBAAA;EACA,WAAA;AAMN;AAHE;EACE,kBAAA;EACA,cAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;AAKJ;AAJI;EACE,iBAAA;EACA,gBAAA;AAMN;AAJI;EACE,mBAAA;EACA,gBAAA;EACA,wBAAA;AAMN;AAJI;EACE,cAAA;AAMN;AAJI;EACE,cAAA;AAMN;AAJI;EACE,WAAA;AAMN;AAHE;EACE,aAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;AAKJ","sourcesContent":["body {\r\n  margin: 0;\r\n}\r\n#__next {\r\n  margin: 10px;\r\n}\r\nh1 {\r\n  text-align: center;\r\n  margin: 20px 0;\r\n}\r\n.messages {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  &__input {\r\n    display: flex;\r\n    width: 80%;\r\n    max-width: 700px;\r\n    min-width: 400px;\r\n    margin: 0 auto 10px;\r\n    > * {\r\n      box-sizing: border-box;\r\n    }\r\n    textarea {\r\n      padding: 10px;\r\n      flex-grow: 1;\r\n    }\r\n    button {\r\n      margin-left: 5px;\r\n      width: 60px;\r\n    }\r\n  }\r\n  &__item {\r\n    position: relative;\r\n    margin: 10px 0;\r\n    padding: 15px 15px 5px;\r\n    border-radius: 5px;\r\n    border: solid 1px #aaa;\r\n    h3 {\r\n      font-size: 0.85em;\r\n      margin: 0 0 10px;\r\n    }\r\n    sub {\r\n      font-weight: normal;\r\n      margin-left: 5px;\r\n      vertical-align: baseline;\r\n    }\r\n    p {\r\n      margin: 10px 0;\r\n    }\r\n    &:hover .messages__buttons {\r\n      display: block;\r\n    }\r\n    .messages__input {\r\n      width: 100%;\r\n    }\r\n  }\r\n  &__buttons {\r\n    display: none;\r\n    position: absolute;\r\n    text-align: right;\r\n    right: 10px;\r\n    bottom: 10px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../node_modules/react-query/es/core/focusManager.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-query/es/core/focusManager.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusManager": function() { return /* binding */ focusManager; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribable */ "../node_modules/react-query/es/core/subscribable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");




var FocusManager = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(FocusManager, _Subscribable);

  function FocusManager() {
    return _Subscribable.apply(this, arguments) || this;
  }

  var _proto = FocusManager.prototype;

  _proto.onSubscribe = function onSubscribe() {
    if (!this.removeEventListener) {
      this.setDefaultEventListener();
    }
  };

  _proto.setEventListener = function setEventListener(setup) {
    var _this = this;

    if (this.removeEventListener) {
      this.removeEventListener();
    }

    this.removeEventListener = setup(function (focused) {
      if (typeof focused === 'boolean') {
        _this.setFocused(focused);
      } else {
        _this.onFocus();
      }
    });
  };

  _proto.setFocused = function setFocused(focused) {
    this.focused = focused;

    if (focused) {
      this.onFocus();
    }
  };

  _proto.onFocus = function onFocus() {
    this.listeners.forEach(function (listener) {
      listener();
    });
  };

  _proto.isFocused = function isFocused() {
    if (typeof this.focused === 'boolean') {
      return this.focused;
    } // document global can be unavailable in react native


    if (typeof document === 'undefined') {
      return true;
    }

    return [undefined, 'visible', 'prerender'].includes(document.visibilityState);
  };

  _proto.setDefaultEventListener = function setDefaultEventListener() {
    var _window;

    if (!_utils__WEBPACK_IMPORTED_MODULE_1__.isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
      this.setEventListener(function (onFocus) {
        var listener = function listener() {
          return onFocus();
        }; // Listen to visibillitychange and focus


        window.addEventListener('visibilitychange', listener, false);
        window.addEventListener('focus', listener, false);
        return function () {
          // Be sure to unsubscribe if a new handler is set
          window.removeEventListener('visibilitychange', listener);
          window.removeEventListener('focus', listener);
        };
      });
    }
  };

  return FocusManager;
}(_subscribable__WEBPACK_IMPORTED_MODULE_2__.Subscribable);

var focusManager = new FocusManager();

/***/ }),

/***/ "../node_modules/react-query/es/core/index.js":
/*!****************************************************!*\
  !*** ../node_modules/react-query/es/core/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelledError": function() { return /* reexport safe */ _retryer__WEBPACK_IMPORTED_MODULE_0__.CancelledError; },
/* harmony export */   "QueryCache": function() { return /* reexport safe */ _queryCache__WEBPACK_IMPORTED_MODULE_1__.QueryCache; },
/* harmony export */   "QueryClient": function() { return /* reexport safe */ _queryClient__WEBPACK_IMPORTED_MODULE_2__.QueryClient; },
/* harmony export */   "QueryObserver": function() { return /* reexport safe */ _queryObserver__WEBPACK_IMPORTED_MODULE_3__.QueryObserver; },
/* harmony export */   "QueriesObserver": function() { return /* reexport safe */ _queriesObserver__WEBPACK_IMPORTED_MODULE_4__.QueriesObserver; },
/* harmony export */   "InfiniteQueryObserver": function() { return /* reexport safe */ _infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_5__.InfiniteQueryObserver; },
/* harmony export */   "MutationCache": function() { return /* reexport safe */ _mutationCache__WEBPACK_IMPORTED_MODULE_6__.MutationCache; },
/* harmony export */   "MutationObserver": function() { return /* reexport safe */ _mutationObserver__WEBPACK_IMPORTED_MODULE_7__.MutationObserver; },
/* harmony export */   "setLogger": function() { return /* reexport safe */ _logger__WEBPACK_IMPORTED_MODULE_8__.setLogger; },
/* harmony export */   "notifyManager": function() { return /* reexport safe */ _notifyManager__WEBPACK_IMPORTED_MODULE_9__.notifyManager; },
/* harmony export */   "focusManager": function() { return /* reexport safe */ _focusManager__WEBPACK_IMPORTED_MODULE_10__.focusManager; },
/* harmony export */   "onlineManager": function() { return /* reexport safe */ _onlineManager__WEBPACK_IMPORTED_MODULE_11__.onlineManager; },
/* harmony export */   "hashQueryKey": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_12__.hashQueryKey; },
/* harmony export */   "isError": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_12__.isError; },
/* harmony export */   "isCancelledError": function() { return /* reexport safe */ _retryer__WEBPACK_IMPORTED_MODULE_0__.isCancelledError; }
/* harmony export */ });
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retryer */ "../node_modules/react-query/es/core/retryer.js");
/* harmony import */ var _queryCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryCache */ "../node_modules/react-query/es/core/queryCache.js");
/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queryClient */ "../node_modules/react-query/es/core/queryClient.js");
/* harmony import */ var _queryObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queryObserver */ "../node_modules/react-query/es/core/queryObserver.js");
/* harmony import */ var _queriesObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queriesObserver */ "../node_modules/react-query/es/core/queriesObserver.js");
/* harmony import */ var _infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./infiniteQueryObserver */ "../node_modules/react-query/es/core/infiniteQueryObserver.js");
/* harmony import */ var _mutationCache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mutationCache */ "../node_modules/react-query/es/core/mutationCache.js");
/* harmony import */ var _mutationObserver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mutationObserver */ "../node_modules/react-query/es/core/mutationObserver.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logger */ "../node_modules/react-query/es/core/logger.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./focusManager */ "../node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _onlineManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./onlineManager */ "../node_modules/react-query/es/core/onlineManager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./types */ "../node_modules/react-query/es/core/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_13__) if(["default","CancelledError","QueryCache","QueryClient","QueryObserver","QueriesObserver","InfiniteQueryObserver","MutationCache","MutationObserver","setLogger","notifyManager","focusManager","onlineManager","hashQueryKey","isError","isCancelledError"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types__WEBPACK_IMPORTED_MODULE_13__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);













 // Types



/***/ }),

/***/ "../node_modules/react-query/es/core/infiniteQueryBehavior.js":
/*!********************************************************************!*\
  !*** ../node_modules/react-query/es/core/infiniteQueryBehavior.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "infiniteQueryBehavior": function() { return /* binding */ infiniteQueryBehavior; },
/* harmony export */   "getNextPageParam": function() { return /* binding */ getNextPageParam; },
/* harmony export */   "getPreviousPageParam": function() { return /* binding */ getPreviousPageParam; },
/* harmony export */   "hasNextPage": function() { return /* binding */ hasNextPage; },
/* harmony export */   "hasPreviousPage": function() { return /* binding */ hasPreviousPage; }
/* harmony export */ });
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retryer */ "../node_modules/react-query/es/core/retryer.js");

function infiniteQueryBehavior() {
  return {
    onFetch: function onFetch(context) {
      context.fetchFn = function () {
        var _context$fetchOptions, _context$fetchOptions2, _context$state$data, _context$state$data2;

        var fetchMore = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.fetchMore;
        var pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
        var isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === 'forward';
        var isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === 'backward';
        var oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
        var oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
        var newPageParams = oldPageParams;
        var cancelled = false; // Get query function

        var queryFn = context.options.queryFn || function () {
          return Promise.reject('Missing queryFn');
        }; // Create function to fetch a page


        var fetchPage = function fetchPage(pages, manual, param, previous) {
          if (cancelled) {
            return Promise.reject('Cancelled');
          }

          if (typeof param === 'undefined' && !manual && pages.length) {
            return Promise.resolve(pages);
          }

          var queryFnContext = {
            queryKey: context.queryKey,
            pageParam: param
          };
          var queryFnResult = queryFn(queryFnContext);
          var promise = Promise.resolve(queryFnResult).then(function (page) {
            newPageParams = previous ? [param].concat(newPageParams) : [].concat(newPageParams, [param]);
            return previous ? [page].concat(pages) : [].concat(pages, [page]);
          });

          if ((0,_retryer__WEBPACK_IMPORTED_MODULE_0__.isCancelable)(queryFnResult)) {
            var promiseAsAny = promise;
            promiseAsAny.cancel = queryFnResult.cancel;
          }

          return promise;
        };

        var promise; // Fetch first page?

        if (!oldPages.length) {
          promise = fetchPage([]);
        } // Fetch next page?
        else if (isFetchingNextPage) {
            var manual = typeof pageParam !== 'undefined';
            var param = manual ? pageParam : getNextPageParam(context.options, oldPages);
            promise = fetchPage(oldPages, manual, param);
          } // Fetch previous page?
          else if (isFetchingPreviousPage) {
              var _manual = typeof pageParam !== 'undefined';

              var _param = _manual ? pageParam : getPreviousPageParam(context.options, oldPages);

              promise = fetchPage(oldPages, _manual, _param, true);
            } // Refetch pages
            else {
                (function () {
                  newPageParams = [];
                  var manual = typeof context.options.getNextPageParam === 'undefined'; // Fetch first page

                  promise = fetchPage([], manual, oldPageParams[0]); // Fetch remaining pages

                  var _loop = function _loop(i) {
                    promise = promise.then(function (pages) {
                      var param = manual ? oldPageParams[i] : getNextPageParam(context.options, pages);
                      return fetchPage(pages, manual, param);
                    });
                  };

                  for (var i = 1; i < oldPages.length; i++) {
                    _loop(i);
                  }
                })();
              }

        var finalPromise = promise.then(function (pages) {
          return {
            pages: pages,
            pageParams: newPageParams
          };
        });
        var finalPromiseAsAny = finalPromise;

        finalPromiseAsAny.cancel = function () {
          cancelled = true;

          if ((0,_retryer__WEBPACK_IMPORTED_MODULE_0__.isCancelable)(promise)) {
            promise.cancel();
          }
        };

        return finalPromise;
      };
    }
  };
}
function getNextPageParam(options, pages) {
  return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
}
function getPreviousPageParam(options, pages) {
  return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
}
/**
 * Checks if there is a next page.
 * Returns `undefined` if it cannot be determined.
 */

function hasNextPage(options, pages) {
  if (options.getNextPageParam && Array.isArray(pages)) {
    var nextPageParam = getNextPageParam(options, pages);
    return typeof nextPageParam !== 'undefined' && nextPageParam !== null && nextPageParam !== false;
  }
}
/**
 * Checks if there is a previous page.
 * Returns `undefined` if it cannot be determined.
 */

function hasPreviousPage(options, pages) {
  if (options.getPreviousPageParam && Array.isArray(pages)) {
    var previousPageParam = getPreviousPageParam(options, pages);
    return typeof previousPageParam !== 'undefined' && previousPageParam !== null && previousPageParam !== false;
  }
}

/***/ }),

/***/ "../node_modules/react-query/es/core/infiniteQueryObserver.js":
/*!********************************************************************!*\
  !*** ../node_modules/react-query/es/core/infiniteQueryObserver.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfiniteQueryObserver": function() { return /* binding */ InfiniteQueryObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _queryObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queryObserver */ "../node_modules/react-query/es/core/queryObserver.js");
/* harmony import */ var _infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infiniteQueryBehavior */ "../node_modules/react-query/es/core/infiniteQueryBehavior.js");




var InfiniteQueryObserver = /*#__PURE__*/function (_QueryObserver) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(InfiniteQueryObserver, _QueryObserver);

  // Type override
  // Type override
  // Type override
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  function InfiniteQueryObserver(client, options) {
    return _QueryObserver.call(this, client, options) || this;
  }

  var _proto = InfiniteQueryObserver.prototype;

  _proto.bindMethods = function bindMethods() {
    _QueryObserver.prototype.bindMethods.call(this);

    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  };

  _proto.setOptions = function setOptions(options) {
    _QueryObserver.prototype.setOptions.call(this, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options, {
      behavior: (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__.infiniteQueryBehavior)()
    }));
  };

  _proto.getOptimisticResult = function getOptimisticResult(options) {
    options.behavior = (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__.infiniteQueryBehavior)();
    return _QueryObserver.prototype.getOptimisticResult.call(this, options);
  };

  _proto.fetchNextPage = function fetchNextPage(options) {
    return this.fetch({
      cancelRefetch: true,
      throwOnError: options == null ? void 0 : options.throwOnError,
      meta: {
        fetchMore: {
          direction: 'forward',
          pageParam: options == null ? void 0 : options.pageParam
        }
      }
    });
  };

  _proto.fetchPreviousPage = function fetchPreviousPage(options) {
    return this.fetch({
      cancelRefetch: true,
      throwOnError: options == null ? void 0 : options.throwOnError,
      meta: {
        fetchMore: {
          direction: 'backward',
          pageParam: options == null ? void 0 : options.pageParam
        }
      }
    });
  };

  _proto.createResult = function createResult(query, options) {
    var _state$data, _state$data2, _state$fetchMeta, _state$fetchMeta$fetc, _state$fetchMeta2, _state$fetchMeta2$fet;

    var state = query.state;

    var result = _QueryObserver.prototype.createResult.call(this, query, options);

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, result, {
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__.hasNextPage)(options, (_state$data = state.data) == null ? void 0 : _state$data.pages),
      hasPreviousPage: (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__.hasPreviousPage)(options, (_state$data2 = state.data) == null ? void 0 : _state$data2.pages),
      isFetchingNextPage: state.isFetching && ((_state$fetchMeta = state.fetchMeta) == null ? void 0 : (_state$fetchMeta$fetc = _state$fetchMeta.fetchMore) == null ? void 0 : _state$fetchMeta$fetc.direction) === 'forward',
      isFetchingPreviousPage: state.isFetching && ((_state$fetchMeta2 = state.fetchMeta) == null ? void 0 : (_state$fetchMeta2$fet = _state$fetchMeta2.fetchMore) == null ? void 0 : _state$fetchMeta2$fet.direction) === 'backward'
    });
  };

  return InfiniteQueryObserver;
}(_queryObserver__WEBPACK_IMPORTED_MODULE_3__.QueryObserver);

/***/ }),

/***/ "../node_modules/react-query/es/core/logger.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-query/es/core/logger.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLogger": function() { return /* binding */ getLogger; },
/* harmony export */   "setLogger": function() { return /* binding */ setLogger; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");
 // TYPES

// FUNCTIONS
var logger = console || {
  error: _utils__WEBPACK_IMPORTED_MODULE_0__.noop,
  warn: _utils__WEBPACK_IMPORTED_MODULE_0__.noop,
  log: _utils__WEBPACK_IMPORTED_MODULE_0__.noop
};
function getLogger() {
  return logger;
}
function setLogger(newLogger) {
  logger = newLogger;
}

/***/ }),

/***/ "../node_modules/react-query/es/core/mutation.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-query/es/core/mutation.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mutation": function() { return /* binding */ Mutation; },
/* harmony export */   "getDefaultState": function() { return /* binding */ getDefaultState; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "../node_modules/react-query/es/core/logger.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retryer */ "../node_modules/react-query/es/core/retryer.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");




 // TYPES

// CLASS
var Mutation = /*#__PURE__*/function () {
  function Mutation(config) {
    this.options = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, config.defaultOptions, config.options);
    this.mutationId = config.mutationId;
    this.mutationCache = config.mutationCache;
    this.observers = [];
    this.state = config.state || getDefaultState();
  }

  var _proto = Mutation.prototype;

  _proto.setState = function setState(state) {
    this.dispatch({
      type: 'setState',
      state: state
    });
  };

  _proto.addObserver = function addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
    }
  };

  _proto.removeObserver = function removeObserver(observer) {
    this.observers = this.observers.filter(function (x) {
      return x !== observer;
    });
  };

  _proto.cancel = function cancel() {
    if (this.retryer) {
      this.retryer.cancel();
      return this.retryer.promise.then(_utils__WEBPACK_IMPORTED_MODULE_1__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_1__.noop);
    }

    return Promise.resolve();
  };

  _proto.continue = function _continue() {
    if (this.retryer) {
      this.retryer.continue();
      return this.retryer.promise;
    }

    return this.execute();
  };

  _proto.execute = function execute() {
    var _this = this;

    var data;
    var restored = this.state.status === 'loading';
    var promise = Promise.resolve();

    if (!restored) {
      this.dispatch({
        type: 'loading',
        variables: this.options.variables
      });
      promise = promise.then(function () {
        return _this.options.onMutate == null ? void 0 : _this.options.onMutate(_this.state.variables);
      }).then(function (context) {
        if (context !== _this.state.context) {
          _this.dispatch({
            type: 'loading',
            context: context,
            variables: _this.state.variables
          });
        }
      });
    }

    return promise.then(function () {
      return _this.executeMutation();
    }).then(function (result) {
      data = result; // Notify cache callback

      _this.mutationCache.config.onSuccess == null ? void 0 : _this.mutationCache.config.onSuccess(data, _this.state.variables, _this.state.context, _this);
    }).then(function () {
      return _this.options.onSuccess == null ? void 0 : _this.options.onSuccess(data, _this.state.variables, _this.state.context);
    }).then(function () {
      return _this.options.onSettled == null ? void 0 : _this.options.onSettled(data, null, _this.state.variables, _this.state.context);
    }).then(function () {
      _this.dispatch({
        type: 'success',
        data: data
      });

      return data;
    }).catch(function (error) {
      // Notify cache callback
      _this.mutationCache.config.onError == null ? void 0 : _this.mutationCache.config.onError(error, _this.state.variables, _this.state.context, _this); // Log error

      (0,_logger__WEBPACK_IMPORTED_MODULE_2__.getLogger)().error(error);
      return Promise.resolve().then(function () {
        return _this.options.onError == null ? void 0 : _this.options.onError(error, _this.state.variables, _this.state.context);
      }).then(function () {
        return _this.options.onSettled == null ? void 0 : _this.options.onSettled(undefined, error, _this.state.variables, _this.state.context);
      }).then(function () {
        _this.dispatch({
          type: 'error',
          error: error
        });

        throw error;
      });
    });
  };

  _proto.executeMutation = function executeMutation() {
    var _this2 = this,
        _this$options$retry;

    this.retryer = new _retryer__WEBPACK_IMPORTED_MODULE_3__.Retryer({
      fn: function fn() {
        if (!_this2.options.mutationFn) {
          return Promise.reject('No mutationFn found');
        }

        return _this2.options.mutationFn(_this2.state.variables);
      },
      onFail: function onFail() {
        _this2.dispatch({
          type: 'failed'
        });
      },
      onPause: function onPause() {
        _this2.dispatch({
          type: 'pause'
        });
      },
      onContinue: function onContinue() {
        _this2.dispatch({
          type: 'continue'
        });
      },
      retry: (_this$options$retry = this.options.retry) != null ? _this$options$retry : 0,
      retryDelay: this.options.retryDelay
    });
    return this.retryer.promise;
  };

  _proto.dispatch = function dispatch(action) {
    var _this3 = this;

    this.state = reducer(this.state, action);
    _notifyManager__WEBPACK_IMPORTED_MODULE_4__.notifyManager.batch(function () {
      _this3.observers.forEach(function (observer) {
        observer.onMutationUpdate(action);
      });

      _this3.mutationCache.notify(_this3);
    });
  };

  return Mutation;
}();
function getDefaultState() {
  return {
    context: undefined,
    data: undefined,
    error: null,
    failureCount: 0,
    isPaused: false,
    status: 'idle',
    variables: undefined
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'failed':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        failureCount: state.failureCount + 1
      });

    case 'pause':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        isPaused: true
      });

    case 'continue':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        isPaused: false
      });

    case 'loading':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        context: action.context,
        data: undefined,
        error: null,
        isPaused: false,
        status: 'loading',
        variables: action.variables
      });

    case 'success':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        data: action.data,
        error: null,
        status: 'success',
        isPaused: false
      });

    case 'error':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        data: undefined,
        error: action.error,
        failureCount: state.failureCount + 1,
        isPaused: false,
        status: 'error'
      });

    case 'setState':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, action.state);

    default:
      return state;
  }
}

/***/ }),

/***/ "../node_modules/react-query/es/core/mutationCache.js":
/*!************************************************************!*\
  !*** ../node_modules/react-query/es/core/mutationCache.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutationCache": function() { return /* binding */ MutationCache; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _mutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutation */ "../node_modules/react-query/es/core/mutation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "../node_modules/react-query/es/core/subscribable.js");




 // TYPES

// CLASS
var MutationCache = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(MutationCache, _Subscribable);

  function MutationCache(config) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.config = config || {};
    _this.mutations = [];
    _this.mutationId = 0;
    return _this;
  }

  var _proto = MutationCache.prototype;

  _proto.build = function build(client, options, state) {
    var mutation = new _mutation__WEBPACK_IMPORTED_MODULE_1__.Mutation({
      mutationCache: this,
      mutationId: ++this.mutationId,
      options: client.defaultMutationOptions(options),
      state: state,
      defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : undefined
    });
    this.add(mutation);
    return mutation;
  };

  _proto.add = function add(mutation) {
    this.mutations.push(mutation);
    this.notify(mutation);
  };

  _proto.remove = function remove(mutation) {
    this.mutations = this.mutations.filter(function (x) {
      return x !== mutation;
    });
    mutation.cancel();
    this.notify(mutation);
  };

  _proto.clear = function clear() {
    var _this2 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      _this2.mutations.forEach(function (mutation) {
        _this2.remove(mutation);
      });
    });
  };

  _proto.getAll = function getAll() {
    return this.mutations;
  };

  _proto.find = function find(filters) {
    if (typeof filters.exact === 'undefined') {
      filters.exact = true;
    }

    return this.mutations.find(function (mutation) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.matchMutation)(filters, mutation);
    });
  };

  _proto.findAll = function findAll(filters) {
    return this.mutations.filter(function (mutation) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.matchMutation)(filters, mutation);
    });
  };

  _proto.notify = function notify(mutation) {
    var _this3 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      _this3.listeners.forEach(function (listener) {
        listener(mutation);
      });
    });
  };

  _proto.onFocus = function onFocus() {
    this.resumePausedMutations();
  };

  _proto.onOnline = function onOnline() {
    this.resumePausedMutations();
  };

  _proto.resumePausedMutations = function resumePausedMutations() {
    var pausedMutations = this.mutations.filter(function (x) {
      return x.state.isPaused;
    });
    return _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      return pausedMutations.reduce(function (promise, mutation) {
        return promise.then(function () {
          return mutation.continue().catch(_utils__WEBPACK_IMPORTED_MODULE_3__.noop);
        });
      }, Promise.resolve());
    });
  };

  return MutationCache;
}(_subscribable__WEBPACK_IMPORTED_MODULE_4__.Subscribable);

/***/ }),

/***/ "../node_modules/react-query/es/core/mutationObserver.js":
/*!***************************************************************!*\
  !*** ../node_modules/react-query/es/core/mutationObserver.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutationObserver": function() { return /* binding */ MutationObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _mutation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutation */ "../node_modules/react-query/es/core/mutation.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "../node_modules/react-query/es/core/subscribable.js");





// CLASS
var MutationObserver = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(MutationObserver, _Subscribable);

  function MutationObserver(client, options) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.client = client;

    _this.setOptions(options);

    _this.bindMethods();

    _this.updateResult();

    return _this;
  }

  var _proto = MutationObserver.prototype;

  _proto.bindMethods = function bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  };

  _proto.setOptions = function setOptions(options) {
    this.options = this.client.defaultMutationOptions(options);
  };

  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      var _this$currentMutation;

      (_this$currentMutation = this.currentMutation) == null ? void 0 : _this$currentMutation.removeObserver(this);
    }
  };

  _proto.onMutationUpdate = function onMutationUpdate(action) {
    this.updateResult(); // Determine which callbacks to trigger

    var notifyOptions = {
      listeners: true
    };

    if (action.type === 'success') {
      notifyOptions.onSuccess = true;
    } else if (action.type === 'error') {
      notifyOptions.onError = true;
    }

    this.notify(notifyOptions);
  };

  _proto.getCurrentResult = function getCurrentResult() {
    return this.currentResult;
  };

  _proto.reset = function reset() {
    this.currentMutation = undefined;
    this.updateResult();
    this.notify({
      listeners: true
    });
  };

  _proto.mutate = function mutate(variables, options) {
    this.mutateOptions = options;

    if (this.currentMutation) {
      this.currentMutation.removeObserver(this);
    }

    this.currentMutation = this.client.getMutationCache().build(this.client, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.options, {
      variables: typeof variables !== 'undefined' ? variables : this.options.variables
    }));
    this.currentMutation.addObserver(this);
    return this.currentMutation.execute();
  };

  _proto.updateResult = function updateResult() {
    var state = this.currentMutation ? this.currentMutation.state : (0,_mutation__WEBPACK_IMPORTED_MODULE_2__.getDefaultState)();
    this.currentResult = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
      isLoading: state.status === 'loading',
      isSuccess: state.status === 'success',
      isError: state.status === 'error',
      isIdle: state.status === 'idle',
      mutate: this.mutate,
      reset: this.reset
    });
  };

  _proto.notify = function notify(options) {
    var _this2 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      // First trigger the mutate callbacks
      if (_this2.mutateOptions) {
        if (options.onSuccess) {
          _this2.mutateOptions.onSuccess == null ? void 0 : _this2.mutateOptions.onSuccess(_this2.currentResult.data, _this2.currentResult.variables, _this2.currentResult.context);
          _this2.mutateOptions.onSettled == null ? void 0 : _this2.mutateOptions.onSettled(_this2.currentResult.data, null, _this2.currentResult.variables, _this2.currentResult.context);
        } else if (options.onError) {
          _this2.mutateOptions.onError == null ? void 0 : _this2.mutateOptions.onError(_this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
          _this2.mutateOptions.onSettled == null ? void 0 : _this2.mutateOptions.onSettled(undefined, _this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
        }
      } // Then trigger the listeners


      if (options.listeners) {
        _this2.listeners.forEach(function (listener) {
          listener(_this2.currentResult);
        });
      }
    });
  };

  return MutationObserver;
}(_subscribable__WEBPACK_IMPORTED_MODULE_4__.Subscribable);

/***/ }),

/***/ "../node_modules/react-query/es/core/notifyManager.js":
/*!************************************************************!*\
  !*** ../node_modules/react-query/es/core/notifyManager.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notifyManager": function() { return /* binding */ notifyManager; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");
 // TYPES

// CLASS
var NotifyManager = /*#__PURE__*/function () {
  function NotifyManager() {
    this.queue = [];
    this.transactions = 0;

    this.notifyFn = function (callback) {
      callback();
    };

    this.batchNotifyFn = function (callback) {
      callback();
    };
  }

  var _proto = NotifyManager.prototype;

  _proto.batch = function batch(callback) {
    this.transactions++;
    var result = callback();
    this.transactions--;

    if (!this.transactions) {
      this.flush();
    }

    return result;
  };

  _proto.schedule = function schedule(callback) {
    var _this = this;

    if (this.transactions) {
      this.queue.push(callback);
    } else {
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.scheduleMicrotask)(function () {
        _this.notifyFn(callback);
      });
    }
  }
  /**
   * All calls to the wrapped function will be batched.
   */
  ;

  _proto.batchCalls = function batchCalls(callback) {
    var _this2 = this;

    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this2.schedule(function () {
        callback.apply(void 0, args);
      });
    };
  };

  _proto.flush = function flush() {
    var _this3 = this;

    var queue = this.queue;
    this.queue = [];

    if (queue.length) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.scheduleMicrotask)(function () {
        _this3.batchNotifyFn(function () {
          queue.forEach(function (callback) {
            _this3.notifyFn(callback);
          });
        });
      });
    }
  }
  /**
   * Use this method to set a custom notify function.
   * This can be used to for example wrap notifications with `React.act` while running tests.
   */
  ;

  _proto.setNotifyFunction = function setNotifyFunction(fn) {
    this.notifyFn = fn;
  }
  /**
   * Use this method to set a custom function to batch notifications together into a single tick.
   * By default React Query will use the batch function provided by ReactDOM or React Native.
   */
  ;

  _proto.setBatchNotifyFunction = function setBatchNotifyFunction(fn) {
    this.batchNotifyFn = fn;
  };

  return NotifyManager;
}(); // SINGLETON


var notifyManager = new NotifyManager();

/***/ }),

/***/ "../node_modules/react-query/es/core/onlineManager.js":
/*!************************************************************!*\
  !*** ../node_modules/react-query/es/core/onlineManager.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onlineManager": function() { return /* binding */ onlineManager; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribable */ "../node_modules/react-query/es/core/subscribable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");




var OnlineManager = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(OnlineManager, _Subscribable);

  function OnlineManager() {
    return _Subscribable.apply(this, arguments) || this;
  }

  var _proto = OnlineManager.prototype;

  _proto.onSubscribe = function onSubscribe() {
    if (!this.removeEventListener) {
      this.setDefaultEventListener();
    }
  };

  _proto.setEventListener = function setEventListener(setup) {
    var _this = this;

    if (this.removeEventListener) {
      this.removeEventListener();
    }

    this.removeEventListener = setup(function (online) {
      if (typeof online === 'boolean') {
        _this.setOnline(online);
      } else {
        _this.onOnline();
      }
    });
  };

  _proto.setOnline = function setOnline(online) {
    this.online = online;

    if (online) {
      this.onOnline();
    }
  };

  _proto.onOnline = function onOnline() {
    this.listeners.forEach(function (listener) {
      listener();
    });
  };

  _proto.isOnline = function isOnline() {
    if (typeof this.online === 'boolean') {
      return this.online;
    }

    if (typeof navigator === 'undefined' || typeof navigator.onLine === 'undefined') {
      return true;
    }

    return navigator.onLine;
  };

  _proto.setDefaultEventListener = function setDefaultEventListener() {
    var _window;

    if (!_utils__WEBPACK_IMPORTED_MODULE_1__.isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
      this.setEventListener(function (onOnline) {
        var listener = function listener() {
          return onOnline();
        }; // Listen to online


        window.addEventListener('online', listener, false);
        window.addEventListener('offline', listener, false);
        return function () {
          // Be sure to unsubscribe if a new handler is set
          window.removeEventListener('online', listener);
          window.removeEventListener('offline', listener);
        };
      });
    }
  };

  return OnlineManager;
}(_subscribable__WEBPACK_IMPORTED_MODULE_2__.Subscribable);

var onlineManager = new OnlineManager();

/***/ }),

/***/ "../node_modules/react-query/es/core/queriesObserver.js":
/*!**************************************************************!*\
  !*** ../node_modules/react-query/es/core/queriesObserver.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueriesObserver": function() { return /* binding */ QueriesObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _queryObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryObserver */ "../node_modules/react-query/es/core/queryObserver.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "../node_modules/react-query/es/core/subscribable.js");





var QueriesObserver = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(QueriesObserver, _Subscribable);

  function QueriesObserver(client, queries) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.client = client;
    _this.queries = [];
    _this.result = [];
    _this.observers = [];
    _this.observersMap = {};

    if (queries) {
      _this.setQueries(queries);
    }

    return _this;
  }

  var _proto = QueriesObserver.prototype;

  _proto.onSubscribe = function onSubscribe() {
    var _this2 = this;

    if (this.listeners.length === 1) {
      this.observers.forEach(function (observer) {
        observer.subscribe(function (result) {
          _this2.onUpdate(observer, result);
        });
      });
    }
  };

  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      this.destroy();
    }
  };

  _proto.destroy = function destroy() {
    this.listeners = [];
    this.observers.forEach(function (observer) {
      observer.destroy();
    });
  };

  _proto.setQueries = function setQueries(queries, notifyOptions) {
    this.queries = queries;
    this.updateObservers(notifyOptions);
  };

  _proto.getCurrentResult = function getCurrentResult() {
    return this.result;
  };

  _proto.getOptimisticResult = function getOptimisticResult(queries) {
    var _this3 = this;

    return queries.map(function (options) {
      var defaultedOptions = _this3.client.defaultQueryObserverOptions(options);

      return _this3.getObserver(defaultedOptions).getOptimisticResult(defaultedOptions);
    });
  };

  _proto.getObserver = function getObserver(options) {
    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    return this.observersMap[defaultedOptions.queryHash] || new _queryObserver__WEBPACK_IMPORTED_MODULE_1__.QueryObserver(this.client, defaultedOptions);
  };

  _proto.updateObservers = function updateObservers(notifyOptions) {
    var _this4 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      var hasIndexChange = false;
      var prevObservers = _this4.observers;
      var prevOberversMap = _this4.observersMap;
      var newResult = [];
      var newObservers = [];
      var newObserversMap = {};

      _this4.queries.forEach(function (options, i) {
        var defaultedOptions = _this4.client.defaultQueryObserverOptions(options);

        var queryHash = defaultedOptions.queryHash;

        var observer = _this4.getObserver(defaultedOptions);

        if (prevOberversMap[queryHash]) {
          observer.setOptions(defaultedOptions, notifyOptions);
        }

        if (observer !== prevObservers[i]) {
          hasIndexChange = true;
        }

        newObservers.push(observer);
        newResult.push(observer.getCurrentResult());
        newObserversMap[queryHash] = observer;
      });

      if (prevObservers.length === newObservers.length && !hasIndexChange) {
        return;
      }

      _this4.observers = newObservers;
      _this4.observersMap = newObserversMap;
      _this4.result = newResult;

      if (!_this4.hasListeners()) {
        return;
      }

      (0,_utils__WEBPACK_IMPORTED_MODULE_3__.difference)(prevObservers, newObservers).forEach(function (observer) {
        observer.destroy();
      });
      (0,_utils__WEBPACK_IMPORTED_MODULE_3__.difference)(newObservers, prevObservers).forEach(function (observer) {
        observer.subscribe(function (result) {
          _this4.onUpdate(observer, result);
        });
      });

      _this4.notify();
    });
  };

  _proto.onUpdate = function onUpdate(observer, result) {
    var index = this.observers.indexOf(observer);

    if (index !== -1) {
      this.result = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.replaceAt)(this.result, index, result);
      this.notify();
    }
  };

  _proto.notify = function notify() {
    var _this5 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      _this5.listeners.forEach(function (listener) {
        listener(_this5.result);
      });
    });
  };

  return QueriesObserver;
}(_subscribable__WEBPACK_IMPORTED_MODULE_4__.Subscribable);

/***/ }),

/***/ "../node_modules/react-query/es/core/query.js":
/*!****************************************************!*\
  !*** ../node_modules/react-query/es/core/query.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Query": function() { return /* binding */ Query; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "../node_modules/react-query/es/core/logger.js");
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./retryer */ "../node_modules/react-query/es/core/retryer.js");




 // TYPES

// CLASS
var Query = /*#__PURE__*/function () {
  function Query(config) {
    this.defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.cache = config.cache;
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.initialState = config.state || this.getDefaultState(this.options);
    this.state = this.initialState;
    this.scheduleGc();
  }

  var _proto = Query.prototype;

  _proto.setOptions = function setOptions(options) {
    var _this$options$cacheTi;

    this.options = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.defaultOptions, options); // Default to 5 minutes if not cache time is set

    this.cacheTime = Math.max(this.cacheTime || 0, (_this$options$cacheTi = this.options.cacheTime) != null ? _this$options$cacheTi : 5 * 60 * 1000);
  };

  _proto.setDefaultOptions = function setDefaultOptions(options) {
    this.defaultOptions = options;
  };

  _proto.scheduleGc = function scheduleGc() {
    var _this = this;

    this.clearGcTimeout();

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isValidTimeout)(this.cacheTime)) {
      this.gcTimeout = setTimeout(function () {
        _this.optionalRemove();
      }, this.cacheTime);
    }
  };

  _proto.clearGcTimeout = function clearGcTimeout() {
    clearTimeout(this.gcTimeout);
    this.gcTimeout = undefined;
  };

  _proto.optionalRemove = function optionalRemove() {
    if (!this.observers.length && !this.state.isFetching) {
      this.cache.remove(this);
    }
  };

  _proto.setData = function setData(updater, options) {
    var _this$options$isDataE, _this$options;

    var prevData = this.state.data; // Get the new data

    var data = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.functionalUpdate)(updater, prevData); // Use prev data if an isDataEqual function is defined and returns `true`

    if ((_this$options$isDataE = (_this$options = this.options).isDataEqual) == null ? void 0 : _this$options$isDataE.call(_this$options, prevData, data)) {
      data = prevData;
    } else if (this.options.structuralSharing !== false) {
      // Structurally share data between prev and new data if needed
      data = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.replaceEqualDeep)(prevData, data);
    } // Set data and mark it as cached


    this.dispatch({
      data: data,
      type: 'success',
      dataUpdatedAt: options == null ? void 0 : options.updatedAt
    });
    return data;
  };

  _proto.setState = function setState(state, setStateOptions) {
    this.dispatch({
      type: 'setState',
      state: state,
      setStateOptions: setStateOptions
    });
  };

  _proto.cancel = function cancel(options) {
    var _this$retryer;

    var promise = this.promise;
    (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.cancel(options);
    return promise ? promise.then(_utils__WEBPACK_IMPORTED_MODULE_1__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_1__.noop) : Promise.resolve();
  };

  _proto.destroy = function destroy() {
    this.clearGcTimeout();
    this.cancel({
      silent: true
    });
  };

  _proto.reset = function reset() {
    this.destroy();
    this.setState(this.initialState);
  };

  _proto.isActive = function isActive() {
    return this.observers.some(function (observer) {
      return observer.options.enabled !== false;
    });
  };

  _proto.isFetching = function isFetching() {
    return this.state.isFetching;
  };

  _proto.isStale = function isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(function (observer) {
      return observer.getCurrentResult().isStale;
    });
  };

  _proto.isStaleByTime = function isStaleByTime(staleTime) {
    if (staleTime === void 0) {
      staleTime = 0;
    }

    return this.state.isInvalidated || !this.state.dataUpdatedAt || !(0,_utils__WEBPACK_IMPORTED_MODULE_1__.timeUntilStale)(this.state.dataUpdatedAt, staleTime);
  };

  _proto.onFocus = function onFocus() {
    var _this$retryer2;

    var observer = this.observers.find(function (x) {
      return x.shouldFetchOnWindowFocus();
    });

    if (observer) {
      observer.refetch();
    } // Continue fetch if currently paused


    (_this$retryer2 = this.retryer) == null ? void 0 : _this$retryer2.continue();
  };

  _proto.onOnline = function onOnline() {
    var _this$retryer3;

    var observer = this.observers.find(function (x) {
      return x.shouldFetchOnReconnect();
    });

    if (observer) {
      observer.refetch();
    } // Continue fetch if currently paused


    (_this$retryer3 = this.retryer) == null ? void 0 : _this$retryer3.continue();
  };

  _proto.addObserver = function addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer); // Stop the query from being garbage collected

      this.clearGcTimeout();
      this.cache.notify({
        type: 'observerAdded',
        query: this,
        observer: observer
      });
    }
  };

  _proto.removeObserver = function removeObserver(observer) {
    if (this.observers.indexOf(observer) !== -1) {
      this.observers = this.observers.filter(function (x) {
        return x !== observer;
      });

      if (!this.observers.length) {
        // If the transport layer does not support cancellation
        // we'll let the query continue so the result can be cached
        if (this.retryer) {
          if (this.retryer.isTransportCancelable) {
            this.retryer.cancel({
              revert: true
            });
          } else {
            this.retryer.cancelRetry();
          }
        }

        if (this.cacheTime) {
          this.scheduleGc();
        } else {
          this.cache.remove(this);
        }
      }

      this.cache.notify({
        type: 'observerRemoved',
        query: this,
        observer: observer
      });
    }
  };

  _proto.getObserversCount = function getObserversCount() {
    return this.observers.length;
  };

  _proto.invalidate = function invalidate() {
    if (!this.state.isInvalidated) {
      this.dispatch({
        type: 'invalidate'
      });
    }
  };

  _proto.fetch = function fetch(options, fetchOptions) {
    var _this2 = this,
        _this$options$behavio,
        _context$fetchOptions;

    if (this.state.isFetching) {
      if (this.state.dataUpdatedAt && (fetchOptions == null ? void 0 : fetchOptions.cancelRefetch)) {
        // Silently cancel current fetch if the user wants to cancel refetches
        this.cancel({
          silent: true
        });
      } else if (this.promise) {
        // Return current promise if we are already fetching
        return this.promise;
      }
    } // Update config if passed, otherwise the config from the last execution is used


    if (options) {
      this.setOptions(options);
    } // Use the options from the first observer with a query function if no function is found.
    // This can happen when the query is hydrated or created with setQueryData.


    if (!this.options.queryFn) {
      var observer = this.observers.find(function (x) {
        return x.options.queryFn;
      });

      if (observer) {
        this.setOptions(observer.options);
      }
    }

    var queryKey = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.ensureQueryKeyArray)(this.queryKey); // Create query function context

    var queryFnContext = {
      queryKey: queryKey,
      pageParam: undefined
    }; // Create fetch function

    var fetchFn = function fetchFn() {
      return _this2.options.queryFn ? _this2.options.queryFn(queryFnContext) : Promise.reject('Missing queryFn');
    }; // Trigger behavior hook


    var context = {
      fetchOptions: fetchOptions,
      options: this.options,
      queryKey: queryKey,
      state: this.state,
      fetchFn: fetchFn
    };

    if ((_this$options$behavio = this.options.behavior) == null ? void 0 : _this$options$behavio.onFetch) {
      var _this$options$behavio2;

      (_this$options$behavio2 = this.options.behavior) == null ? void 0 : _this$options$behavio2.onFetch(context);
    } // Store state in case the current fetch needs to be reverted


    this.revertState = this.state; // Set to fetching state if not already in it

    if (!this.state.isFetching || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) == null ? void 0 : _context$fetchOptions.meta)) {
      var _context$fetchOptions2;

      this.dispatch({
        type: 'fetch',
        meta: (_context$fetchOptions2 = context.fetchOptions) == null ? void 0 : _context$fetchOptions2.meta
      });
    } // Try to fetch the data


    this.retryer = new _retryer__WEBPACK_IMPORTED_MODULE_2__.Retryer({
      fn: context.fetchFn,
      onSuccess: function onSuccess(data) {
        _this2.setData(data); // Notify cache callback


        _this2.cache.config.onSuccess == null ? void 0 : _this2.cache.config.onSuccess(data, _this2); // Remove query after fetching if cache time is 0

        if (_this2.cacheTime === 0) {
          _this2.optionalRemove();
        }
      },
      onError: function onError(error) {
        // Optimistically update state if needed
        if (!((0,_retryer__WEBPACK_IMPORTED_MODULE_2__.isCancelledError)(error) && error.silent)) {
          _this2.dispatch({
            type: 'error',
            error: error
          });
        }

        if (!(0,_retryer__WEBPACK_IMPORTED_MODULE_2__.isCancelledError)(error)) {
          // Notify cache callback
          _this2.cache.config.onError == null ? void 0 : _this2.cache.config.onError(error, _this2); // Log error

          (0,_logger__WEBPACK_IMPORTED_MODULE_3__.getLogger)().error(error);
        } // Remove query after fetching if cache time is 0


        if (_this2.cacheTime === 0) {
          _this2.optionalRemove();
        }
      },
      onFail: function onFail() {
        _this2.dispatch({
          type: 'failed'
        });
      },
      onPause: function onPause() {
        _this2.dispatch({
          type: 'pause'
        });
      },
      onContinue: function onContinue() {
        _this2.dispatch({
          type: 'continue'
        });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay
    });
    this.promise = this.retryer.promise;
    return this.promise;
  };

  _proto.dispatch = function dispatch(action) {
    var _this3 = this;

    this.state = this.reducer(this.state, action);
    _notifyManager__WEBPACK_IMPORTED_MODULE_4__.notifyManager.batch(function () {
      _this3.observers.forEach(function (observer) {
        observer.onQueryUpdate(action);
      });

      _this3.cache.notify({
        query: _this3,
        type: 'queryUpdated',
        action: action
      });
    });
  };

  _proto.getDefaultState = function getDefaultState(options) {
    var data = typeof options.initialData === 'function' ? options.initialData() : options.initialData;
    var hasInitialData = typeof options.initialData !== 'undefined';
    var initialDataUpdatedAt = hasInitialData ? typeof options.initialDataUpdatedAt === 'function' ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    var hasData = typeof data !== 'undefined';
    return {
      data: data,
      dataUpdateCount: 0,
      dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchMeta: null,
      isFetching: false,
      isInvalidated: false,
      isPaused: false,
      status: hasData ? 'success' : 'idle'
    };
  };

  _proto.reducer = function reducer(state, action) {
    var _action$meta, _action$dataUpdatedAt;

    switch (action.type) {
      case 'failed':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          fetchFailureCount: state.fetchFailureCount + 1
        });

      case 'pause':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          isPaused: true
        });

      case 'continue':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          isPaused: false
        });

      case 'fetch':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          fetchFailureCount: 0,
          fetchMeta: (_action$meta = action.meta) != null ? _action$meta : null,
          isFetching: true,
          isPaused: false,
          status: !state.dataUpdatedAt ? 'loading' : state.status
        });

      case 'success':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          data: action.data,
          dataUpdateCount: state.dataUpdateCount + 1,
          dataUpdatedAt: (_action$dataUpdatedAt = action.dataUpdatedAt) != null ? _action$dataUpdatedAt : Date.now(),
          error: null,
          fetchFailureCount: 0,
          isFetching: false,
          isInvalidated: false,
          isPaused: false,
          status: 'success'
        });

      case 'error':
        var error = action.error;

        if ((0,_retryer__WEBPACK_IMPORTED_MODULE_2__.isCancelledError)(error) && error.revert && this.revertState) {
          return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.revertState);
        }

        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          error: error,
          errorUpdateCount: state.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: state.fetchFailureCount + 1,
          isFetching: false,
          isPaused: false,
          status: 'error'
        });

      case 'invalidate':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          isInvalidated: true
        });

      case 'setState':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, action.state);

      default:
        return state;
    }
  };

  return Query;
}();

/***/ }),

/***/ "../node_modules/react-query/es/core/queryCache.js":
/*!*********************************************************!*\
  !*** ../node_modules/react-query/es/core/queryCache.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryCache": function() { return /* binding */ QueryCache; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query */ "../node_modules/react-query/es/core/query.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "../node_modules/react-query/es/core/subscribable.js");





// CLASS
var QueryCache = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(QueryCache, _Subscribable);

  function QueryCache(config) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.config = config || {};
    _this.queries = [];
    _this.queriesMap = {};
    return _this;
  }

  var _proto = QueryCache.prototype;

  _proto.build = function build(client, options, state) {
    var _options$queryHash;

    var queryKey = options.queryKey;
    var queryHash = (_options$queryHash = options.queryHash) != null ? _options$queryHash : (0,_utils__WEBPACK_IMPORTED_MODULE_1__.hashQueryKeyByOptions)(queryKey, options);
    var query = this.get(queryHash);

    if (!query) {
      query = new _query__WEBPACK_IMPORTED_MODULE_2__.Query({
        cache: this,
        queryKey: queryKey,
        queryHash: queryHash,
        options: client.defaultQueryOptions(options),
        state: state,
        defaultOptions: client.getQueryDefaults(queryKey)
      });
      this.add(query);
    }

    return query;
  };

  _proto.add = function add(query) {
    if (!this.queriesMap[query.queryHash]) {
      this.queriesMap[query.queryHash] = query;
      this.queries.push(query);
      this.notify({
        type: 'queryAdded',
        query: query
      });
    }
  };

  _proto.remove = function remove(query) {
    var queryInMap = this.queriesMap[query.queryHash];

    if (queryInMap) {
      query.destroy();
      this.queries = this.queries.filter(function (x) {
        return x !== query;
      });

      if (queryInMap === query) {
        delete this.queriesMap[query.queryHash];
      }

      this.notify({
        type: 'queryRemoved',
        query: query
      });
    }
  };

  _proto.clear = function clear() {
    var _this2 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      _this2.queries.forEach(function (query) {
        _this2.remove(query);
      });
    });
  };

  _proto.get = function get(queryHash) {
    return this.queriesMap[queryHash];
  };

  _proto.getAll = function getAll() {
    return this.queries;
  };

  _proto.find = function find(arg1, arg2) {
    var _parseFilterArgs = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseFilterArgs)(arg1, arg2),
        filters = _parseFilterArgs[0];

    if (typeof filters.exact === 'undefined') {
      filters.exact = true;
    }

    return this.queries.find(function (query) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.matchQuery)(filters, query);
    });
  };

  _proto.findAll = function findAll(arg1, arg2) {
    var _parseFilterArgs2 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseFilterArgs)(arg1, arg2),
        filters = _parseFilterArgs2[0];

    return filters ? this.queries.filter(function (query) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.matchQuery)(filters, query);
    }) : this.queries;
  };

  _proto.notify = function notify(event) {
    var _this3 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      _this3.listeners.forEach(function (listener) {
        listener(event);
      });
    });
  };

  _proto.onFocus = function onFocus() {
    var _this4 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      _this4.queries.forEach(function (query) {
        query.onFocus();
      });
    });
  };

  _proto.onOnline = function onOnline() {
    var _this5 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      _this5.queries.forEach(function (query) {
        query.onOnline();
      });
    });
  };

  return QueryCache;
}(_subscribable__WEBPACK_IMPORTED_MODULE_4__.Subscribable);

/***/ }),

/***/ "../node_modules/react-query/es/core/queryClient.js":
/*!**********************************************************!*\
  !*** ../node_modules/react-query/es/core/queryClient.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryClient": function() { return /* binding */ QueryClient; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _queryCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryCache */ "../node_modules/react-query/es/core/queryCache.js");
/* harmony import */ var _mutationCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutationCache */ "../node_modules/react-query/es/core/mutationCache.js");
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusManager */ "../node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _onlineManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onlineManager */ "../node_modules/react-query/es/core/onlineManager.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infiniteQueryBehavior */ "../node_modules/react-query/es/core/infiniteQueryBehavior.js");







 // TYPES

// CLASS
var QueryClient = /*#__PURE__*/function () {
  function QueryClient(config) {
    if (config === void 0) {
      config = {};
    }

    this.queryCache = config.queryCache || new _queryCache__WEBPACK_IMPORTED_MODULE_1__.QueryCache();
    this.mutationCache = config.mutationCache || new _mutationCache__WEBPACK_IMPORTED_MODULE_2__.MutationCache();
    this.defaultOptions = config.defaultOptions || {};
    this.queryDefaults = [];
    this.mutationDefaults = [];
  }

  var _proto = QueryClient.prototype;

  _proto.mount = function mount() {
    var _this = this;

    this.unsubscribeFocus = _focusManager__WEBPACK_IMPORTED_MODULE_3__.focusManager.subscribe(function () {
      if (_focusManager__WEBPACK_IMPORTED_MODULE_3__.focusManager.isFocused() && _onlineManager__WEBPACK_IMPORTED_MODULE_4__.onlineManager.isOnline()) {
        _this.mutationCache.onFocus();

        _this.queryCache.onFocus();
      }
    });
    this.unsubscribeOnline = _onlineManager__WEBPACK_IMPORTED_MODULE_4__.onlineManager.subscribe(function () {
      if (_focusManager__WEBPACK_IMPORTED_MODULE_3__.focusManager.isFocused() && _onlineManager__WEBPACK_IMPORTED_MODULE_4__.onlineManager.isOnline()) {
        _this.mutationCache.onOnline();

        _this.queryCache.onOnline();
      }
    });
  };

  _proto.unmount = function unmount() {
    var _this$unsubscribeFocu, _this$unsubscribeOnli;

    (_this$unsubscribeFocu = this.unsubscribeFocus) == null ? void 0 : _this$unsubscribeFocu.call(this);
    (_this$unsubscribeOnli = this.unsubscribeOnline) == null ? void 0 : _this$unsubscribeOnli.call(this);
  };

  _proto.isFetching = function isFetching(arg1, arg2) {
    var _parseFilterArgs = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2),
        filters = _parseFilterArgs[0];

    filters.fetching = true;
    return this.queryCache.findAll(filters).length;
  };

  _proto.isMutating = function isMutating(filters) {
    return this.mutationCache.findAll((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, filters, {
      fetching: true
    })).length;
  };

  _proto.getQueryData = function getQueryData(queryKey, filters) {
    var _this$queryCache$find;

    return (_this$queryCache$find = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find.state.data;
  };

  _proto.setQueryData = function setQueryData(queryKey, updater, options) {
    var parsedOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(queryKey);
    var defaultedOptions = this.defaultQueryOptions(parsedOptions);
    return this.queryCache.build(this, defaultedOptions).setData(updater, options);
  };

  _proto.setQueriesData = function setQueriesData(queryKeyOrFilters, updater, options) {
    var _this2 = this;

    return _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      return _this2.getQueryCache().findAll(queryKeyOrFilters).map(function (_ref) {
        var queryKey = _ref.queryKey;
        return [queryKey, _this2.setQueryData(queryKey, updater, options)];
      });
    });
  };

  _proto.getQueryState = function getQueryState(queryKey, filters) {
    var _this$queryCache$find2;

    return (_this$queryCache$find2 = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find2.state;
  };

  _proto.removeQueries = function removeQueries(arg1, arg2) {
    var _parseFilterArgs2 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2),
        filters = _parseFilterArgs2[0];

    var queryCache = this.queryCache;
    _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      queryCache.findAll(filters).forEach(function (query) {
        queryCache.remove(query);
      });
    });
  };

  _proto.resetQueries = function resetQueries(arg1, arg2, arg3) {
    var _this3 = this;

    var _parseFilterArgs3 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3),
        filters = _parseFilterArgs3[0],
        options = _parseFilterArgs3[1];

    var queryCache = this.queryCache;

    var refetchFilters = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, filters, {
      active: true
    });

    return _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      queryCache.findAll(filters).forEach(function (query) {
        query.reset();
      });
      return _this3.refetchQueries(refetchFilters, options);
    });
  };

  _proto.cancelQueries = function cancelQueries(arg1, arg2, arg3) {
    var _this4 = this;

    var _parseFilterArgs4 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3),
        filters = _parseFilterArgs4[0],
        _parseFilterArgs4$ = _parseFilterArgs4[1],
        cancelOptions = _parseFilterArgs4$ === void 0 ? {} : _parseFilterArgs4$;

    if (typeof cancelOptions.revert === 'undefined') {
      cancelOptions.revert = true;
    }

    var promises = _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      return _this4.queryCache.findAll(filters).map(function (query) {
        return query.cancel(cancelOptions);
      });
    });
    return Promise.all(promises).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
  };

  _proto.invalidateQueries = function invalidateQueries(arg1, arg2, arg3) {
    var _ref2,
        _filters$refetchActiv,
        _filters$refetchInact,
        _this5 = this;

    var _parseFilterArgs5 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3),
        filters = _parseFilterArgs5[0],
        options = _parseFilterArgs5[1];

    var refetchFilters = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, filters, {
      // if filters.refetchActive is not provided and filters.active is explicitly false,
      // e.g. invalidateQueries({ active: false }), we don't want to refetch active queries
      active: (_ref2 = (_filters$refetchActiv = filters.refetchActive) != null ? _filters$refetchActiv : filters.active) != null ? _ref2 : true,
      inactive: (_filters$refetchInact = filters.refetchInactive) != null ? _filters$refetchInact : false
    });

    return _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      _this5.queryCache.findAll(filters).forEach(function (query) {
        query.invalidate();
      });

      return _this5.refetchQueries(refetchFilters, options);
    });
  };

  _proto.refetchQueries = function refetchQueries(arg1, arg2, arg3) {
    var _this6 = this;

    var _parseFilterArgs6 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3),
        filters = _parseFilterArgs6[0],
        options = _parseFilterArgs6[1];

    var promises = _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      return _this6.queryCache.findAll(filters).map(function (query) {
        return query.fetch();
      });
    });
    var promise = Promise.all(promises).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);

    if (!(options == null ? void 0 : options.throwOnError)) {
      promise = promise.catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
    }

    return promise;
  };

  _proto.fetchQuery = function fetchQuery(arg1, arg2, arg3) {
    var parsedOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(arg1, arg2, arg3);
    var defaultedOptions = this.defaultQueryOptions(parsedOptions); // https://github.com/tannerlinsley/react-query/issues/652

    if (typeof defaultedOptions.retry === 'undefined') {
      defaultedOptions.retry = false;
    }

    var query = this.queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  };

  _proto.prefetchQuery = function prefetchQuery(arg1, arg2, arg3) {
    return this.fetchQuery(arg1, arg2, arg3).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
  };

  _proto.fetchInfiniteQuery = function fetchInfiniteQuery(arg1, arg2, arg3) {
    var parsedOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(arg1, arg2, arg3);
    parsedOptions.behavior = (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_7__.infiniteQueryBehavior)();
    return this.fetchQuery(parsedOptions);
  };

  _proto.prefetchInfiniteQuery = function prefetchInfiniteQuery(arg1, arg2, arg3) {
    return this.fetchInfiniteQuery(arg1, arg2, arg3).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
  };

  _proto.cancelMutations = function cancelMutations() {
    var _this7 = this;

    var promises = _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      return _this7.mutationCache.getAll().map(function (mutation) {
        return mutation.cancel();
      });
    });
    return Promise.all(promises).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
  };

  _proto.resumePausedMutations = function resumePausedMutations() {
    return this.getMutationCache().resumePausedMutations();
  };

  _proto.executeMutation = function executeMutation(options) {
    return this.mutationCache.build(this, options).execute();
  };

  _proto.getQueryCache = function getQueryCache() {
    return this.queryCache;
  };

  _proto.getMutationCache = function getMutationCache() {
    return this.mutationCache;
  };

  _proto.getDefaultOptions = function getDefaultOptions() {
    return this.defaultOptions;
  };

  _proto.setDefaultOptions = function setDefaultOptions(options) {
    this.defaultOptions = options;
  };

  _proto.setQueryDefaults = function setQueryDefaults(queryKey, options) {
    var result = this.queryDefaults.find(function (x) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(queryKey) === (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(x.queryKey);
    });

    if (result) {
      result.defaultOptions = options;
    } else {
      this.queryDefaults.push({
        queryKey: queryKey,
        defaultOptions: options
      });
    }
  };

  _proto.getQueryDefaults = function getQueryDefaults(queryKey) {
    var _this$queryDefaults$f;

    return queryKey ? (_this$queryDefaults$f = this.queryDefaults.find(function (x) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.partialMatchKey)(queryKey, x.queryKey);
    })) == null ? void 0 : _this$queryDefaults$f.defaultOptions : undefined;
  };

  _proto.setMutationDefaults = function setMutationDefaults(mutationKey, options) {
    var result = this.mutationDefaults.find(function (x) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(mutationKey) === (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(x.mutationKey);
    });

    if (result) {
      result.defaultOptions = options;
    } else {
      this.mutationDefaults.push({
        mutationKey: mutationKey,
        defaultOptions: options
      });
    }
  };

  _proto.getMutationDefaults = function getMutationDefaults(mutationKey) {
    var _this$mutationDefault;

    return mutationKey ? (_this$mutationDefault = this.mutationDefaults.find(function (x) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.partialMatchKey)(mutationKey, x.mutationKey);
    })) == null ? void 0 : _this$mutationDefault.defaultOptions : undefined;
  };

  _proto.defaultQueryOptions = function defaultQueryOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }

    var defaultedOptions = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.defaultOptions.queries, this.getQueryDefaults(options == null ? void 0 : options.queryKey), options, {
      _defaulted: true
    });

    if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
      defaultedOptions.queryHash = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKeyByOptions)(defaultedOptions.queryKey, defaultedOptions);
    }

    return defaultedOptions;
  };

  _proto.defaultQueryObserverOptions = function defaultQueryObserverOptions(options) {
    return this.defaultQueryOptions(options);
  };

  _proto.defaultMutationOptions = function defaultMutationOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.defaultOptions.mutations, this.getMutationDefaults(options == null ? void 0 : options.mutationKey), options, {
      _defaulted: true
    });
  };

  _proto.clear = function clear() {
    this.queryCache.clear();
    this.mutationCache.clear();
  };

  return QueryClient;
}();

/***/ }),

/***/ "../node_modules/react-query/es/core/queryObserver.js":
/*!************************************************************!*\
  !*** ../node_modules/react-query/es/core/queryObserver.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryObserver": function() { return /* binding */ QueryObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusManager */ "../node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subscribable */ "../node_modules/react-query/es/core/subscribable.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger */ "../node_modules/react-query/es/core/logger.js");
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retryer */ "../node_modules/react-query/es/core/retryer.js");








var QueryObserver = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(QueryObserver, _Subscribable);

  function QueryObserver(client, options) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.client = client;
    _this.options = options;
    _this.trackedProps = [];
    _this.previousSelectError = null;

    _this.bindMethods();

    _this.setOptions(options);

    return _this;
  }

  var _proto = QueryObserver.prototype;

  _proto.bindMethods = function bindMethods() {
    this.remove = this.remove.bind(this);
    this.refetch = this.refetch.bind(this);
  };

  _proto.onSubscribe = function onSubscribe() {
    if (this.listeners.length === 1) {
      this.currentQuery.addObserver(this);

      if (shouldFetchOnMount(this.currentQuery, this.options)) {
        this.executeFetch();
      }

      this.updateTimers();
    }
  };

  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      this.destroy();
    }
  };

  _proto.shouldFetchOnReconnect = function shouldFetchOnReconnect() {
    return _shouldFetchOnReconnect(this.currentQuery, this.options);
  };

  _proto.shouldFetchOnWindowFocus = function shouldFetchOnWindowFocus() {
    return _shouldFetchOnWindowFocus(this.currentQuery, this.options);
  };

  _proto.destroy = function destroy() {
    this.listeners = [];
    this.clearTimers();
    this.currentQuery.removeObserver(this);
  };

  _proto.setOptions = function setOptions(options, notifyOptions) {
    var prevOptions = this.options;
    var prevQuery = this.currentQuery;
    this.options = this.client.defaultQueryObserverOptions(options);

    if (typeof this.options.enabled !== 'undefined' && typeof this.options.enabled !== 'boolean') {
      throw new Error('Expected enabled to be a boolean');
    } // Keep previous query key if the user does not supply one


    if (!this.options.queryKey) {
      this.options.queryKey = prevOptions.queryKey;
    }

    this.updateQuery();
    var mounted = this.hasListeners(); // Fetch if there are subscribers

    if (mounted && shouldFetchOptionally(this.currentQuery, prevQuery, this.options, prevOptions)) {
      this.executeFetch();
    } // Update result


    this.updateResult(notifyOptions); // Update stale interval if needed

    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) {
      this.updateStaleTimeout();
    } // Update refetch interval if needed


    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.refetchInterval !== prevOptions.refetchInterval)) {
      this.updateRefetchInterval();
    }
  };

  _proto.getOptimisticResult = function getOptimisticResult(options) {
    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var query = this.client.getQueryCache().build(this.client, defaultedOptions);
    return this.createResult(query, defaultedOptions);
  };

  _proto.getCurrentResult = function getCurrentResult() {
    return this.currentResult;
  };

  _proto.trackResult = function trackResult(result) {
    var _this2 = this;

    var trackedResult = {};
    Object.keys(result).forEach(function (key) {
      Object.defineProperty(trackedResult, key, {
        configurable: false,
        enumerable: true,
        get: function get() {
          var typedKey = key;

          if (!_this2.trackedProps.includes(typedKey)) {
            _this2.trackedProps.push(typedKey);
          }

          return result[typedKey];
        }
      });
    });
    return trackedResult;
  };

  _proto.getNextResult = function getNextResult(options) {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      var unsubscribe = _this3.subscribe(function (result) {
        if (!result.isFetching) {
          unsubscribe();

          if (result.isError && (options == null ? void 0 : options.throwOnError)) {
            reject(result.error);
          } else {
            resolve(result);
          }
        }
      });
    });
  };

  _proto.getCurrentQuery = function getCurrentQuery() {
    return this.currentQuery;
  };

  _proto.remove = function remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  };

  _proto.refetch = function refetch(options) {
    return this.fetch(options);
  };

  _proto.fetchOptimistic = function fetchOptimistic(options) {
    var _this4 = this;

    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var query = this.client.getQueryCache().build(this.client, defaultedOptions);
    return query.fetch().then(function () {
      return _this4.createResult(query, defaultedOptions);
    });
  };

  _proto.fetch = function fetch(fetchOptions) {
    var _this5 = this;

    return this.executeFetch(fetchOptions).then(function () {
      _this5.updateResult();

      return _this5.currentResult;
    });
  };

  _proto.executeFetch = function executeFetch(fetchOptions) {
    // Make sure we reference the latest query as the current one might have been removed
    this.updateQuery(); // Fetch

    var promise = this.currentQuery.fetch(this.options, fetchOptions);

    if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
      promise = promise.catch(_utils__WEBPACK_IMPORTED_MODULE_2__.noop);
    }

    return promise;
  };

  _proto.updateStaleTimeout = function updateStaleTimeout() {
    var _this6 = this;

    this.clearStaleTimeout();

    if (_utils__WEBPACK_IMPORTED_MODULE_2__.isServer || this.currentResult.isStale || !(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isValidTimeout)(this.options.staleTime)) {
      return;
    }

    var time = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.timeUntilStale)(this.currentResult.dataUpdatedAt, this.options.staleTime); // The timeout is sometimes triggered 1 ms before the stale time expiration.
    // To mitigate this issue we always add 1 ms to the timeout.

    var timeout = time + 1;
    this.staleTimeoutId = setTimeout(function () {
      if (!_this6.currentResult.isStale) {
        _this6.updateResult();
      }
    }, timeout);
  };

  _proto.updateRefetchInterval = function updateRefetchInterval() {
    var _this7 = this;

    this.clearRefetchInterval();

    if (_utils__WEBPACK_IMPORTED_MODULE_2__.isServer || this.options.enabled === false || !(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isValidTimeout)(this.options.refetchInterval)) {
      return;
    }

    this.refetchIntervalId = setInterval(function () {
      if (_this7.options.refetchIntervalInBackground || _focusManager__WEBPACK_IMPORTED_MODULE_3__.focusManager.isFocused()) {
        _this7.executeFetch();
      }
    }, this.options.refetchInterval);
  };

  _proto.updateTimers = function updateTimers() {
    this.updateStaleTimeout();
    this.updateRefetchInterval();
  };

  _proto.clearTimers = function clearTimers() {
    this.clearStaleTimeout();
    this.clearRefetchInterval();
  };

  _proto.clearStaleTimeout = function clearStaleTimeout() {
    clearTimeout(this.staleTimeoutId);
    this.staleTimeoutId = undefined;
  };

  _proto.clearRefetchInterval = function clearRefetchInterval() {
    clearInterval(this.refetchIntervalId);
    this.refetchIntervalId = undefined;
  };

  _proto.createResult = function createResult(query, options) {
    var prevQuery = this.currentQuery;
    var prevOptions = this.options;
    var prevResult = this.currentResult;
    var prevResultState = this.currentResultState;
    var prevResultOptions = this.currentResultOptions;
    var queryChange = query !== prevQuery;
    var queryInitialState = queryChange ? query.state : this.currentQueryInitialState;
    var prevQueryResult = queryChange ? this.currentResult : this.previousQueryResult;
    var state = query.state;
    var dataUpdatedAt = state.dataUpdatedAt,
        error = state.error,
        errorUpdatedAt = state.errorUpdatedAt,
        isFetching = state.isFetching,
        status = state.status;
    var isPreviousData = false;
    var isPlaceholderData = false;
    var data; // Optimistically set result in fetching state if needed

    if (options.optimisticResults) {
      var mounted = this.hasListeners();
      var fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      var fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);

      if (fetchOnMount || fetchOptionally) {
        isFetching = true;

        if (!dataUpdatedAt) {
          status = 'loading';
        }
      }
    } // Keep previous data if needed


    if (options.keepPreviousData && !state.dataUpdateCount && (prevQueryResult == null ? void 0 : prevQueryResult.isSuccess) && status !== 'error') {
      data = prevQueryResult.data;
      dataUpdatedAt = prevQueryResult.dataUpdatedAt;
      status = prevQueryResult.status;
      isPreviousData = true;
    } // Select data if needed
    else if (options.select && typeof state.data !== 'undefined') {
        // Memoize select result
        if (prevResult && state.data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === (prevResultOptions == null ? void 0 : prevResultOptions.select) && !this.previousSelectError) {
          data = prevResult.data;
        } else {
          try {
            data = options.select(state.data);

            if (options.structuralSharing !== false) {
              data = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.replaceEqualDeep)(prevResult == null ? void 0 : prevResult.data, data);
            }

            this.previousSelectError = null;
          } catch (selectError) {
            (0,_logger__WEBPACK_IMPORTED_MODULE_4__.getLogger)().error(selectError);
            error = selectError;
            this.previousSelectError = selectError;
            errorUpdatedAt = Date.now();
            status = 'error';
          }
        }
      } // Use query data
      else {
          data = state.data;
        } // Show placeholder data if needed


    if (typeof options.placeholderData !== 'undefined' && typeof data === 'undefined' && status === 'loading') {
      var placeholderData; // Memoize placeholder data

      if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
      } else {
        placeholderData = typeof options.placeholderData === 'function' ? options.placeholderData() : options.placeholderData;

        if (options.select && typeof placeholderData !== 'undefined') {
          try {
            placeholderData = options.select(placeholderData);

            if (options.structuralSharing !== false) {
              placeholderData = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.replaceEqualDeep)(prevResult == null ? void 0 : prevResult.data, placeholderData);
            }

            this.previousSelectError = null;
          } catch (selectError) {
            (0,_logger__WEBPACK_IMPORTED_MODULE_4__.getLogger)().error(selectError);
            error = selectError;
            this.previousSelectError = selectError;
            errorUpdatedAt = Date.now();
            status = 'error';
          }
        }
      }

      if (typeof placeholderData !== 'undefined') {
        status = 'success';
        data = placeholderData;
        isPlaceholderData = true;
      }
    }

    var result = {
      status: status,
      isLoading: status === 'loading',
      isSuccess: status === 'success',
      isError: status === 'error',
      isIdle: status === 'idle',
      data: data,
      dataUpdatedAt: dataUpdatedAt,
      error: error,
      errorUpdatedAt: errorUpdatedAt,
      failureCount: state.fetchFailureCount,
      isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
      isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching: isFetching,
      isLoadingError: status === 'error' && state.dataUpdatedAt === 0,
      isPlaceholderData: isPlaceholderData,
      isPreviousData: isPreviousData,
      isRefetchError: status === 'error' && state.dataUpdatedAt !== 0,
      isStale: isStale(query, options),
      refetch: this.refetch,
      remove: this.remove
    };
    return result;
  };

  _proto.shouldNotifyListeners = function shouldNotifyListeners(result, prevResult) {
    if (!prevResult) {
      return true;
    }

    if (result === prevResult) {
      return false;
    }

    var _this$options = this.options,
        notifyOnChangeProps = _this$options.notifyOnChangeProps,
        notifyOnChangePropsExclusions = _this$options.notifyOnChangePropsExclusions;

    if (!notifyOnChangeProps && !notifyOnChangePropsExclusions) {
      return true;
    }

    if (notifyOnChangeProps === 'tracked' && !this.trackedProps.length) {
      return true;
    }

    var includedProps = notifyOnChangeProps === 'tracked' ? this.trackedProps : notifyOnChangeProps;
    return Object.keys(result).some(function (key) {
      var typedKey = key;
      var changed = result[typedKey] !== prevResult[typedKey];
      var isIncluded = includedProps == null ? void 0 : includedProps.some(function (x) {
        return x === key;
      });
      var isExcluded = notifyOnChangePropsExclusions == null ? void 0 : notifyOnChangePropsExclusions.some(function (x) {
        return x === key;
      });
      return changed && !isExcluded && (!includedProps || isIncluded);
    });
  };

  _proto.updateResult = function updateResult(notifyOptions) {
    var prevResult = this.currentResult;
    this.currentResult = this.createResult(this.currentQuery, this.options);
    this.currentResultState = this.currentQuery.state;
    this.currentResultOptions = this.options; // Only notify if something has changed

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.shallowEqualObjects)(this.currentResult, prevResult)) {
      return;
    } // Determine which callbacks to trigger


    var defaultNotifyOptions = {
      cache: true
    };

    if ((notifyOptions == null ? void 0 : notifyOptions.listeners) !== false && this.shouldNotifyListeners(this.currentResult, prevResult)) {
      defaultNotifyOptions.listeners = true;
    }

    this.notify((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, defaultNotifyOptions, notifyOptions));
  };

  _proto.updateQuery = function updateQuery() {
    var query = this.client.getQueryCache().build(this.client, this.options);

    if (query === this.currentQuery) {
      return;
    }

    var prevQuery = this.currentQuery;
    this.currentQuery = query;
    this.currentQueryInitialState = query.state;
    this.previousQueryResult = this.currentResult;

    if (this.hasListeners()) {
      prevQuery == null ? void 0 : prevQuery.removeObserver(this);
      query.addObserver(this);
    }
  };

  _proto.onQueryUpdate = function onQueryUpdate(action) {
    var notifyOptions = {};

    if (action.type === 'success') {
      notifyOptions.onSuccess = true;
    } else if (action.type === 'error' && !(0,_retryer__WEBPACK_IMPORTED_MODULE_5__.isCancelledError)(action.error)) {
      notifyOptions.onError = true;
    }

    this.updateResult(notifyOptions);

    if (this.hasListeners()) {
      this.updateTimers();
    }
  };

  _proto.notify = function notify(notifyOptions) {
    var _this8 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      // First trigger the configuration callbacks
      if (notifyOptions.onSuccess) {
        _this8.options.onSuccess == null ? void 0 : _this8.options.onSuccess(_this8.currentResult.data);
        _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(_this8.currentResult.data, null);
      } else if (notifyOptions.onError) {
        _this8.options.onError == null ? void 0 : _this8.options.onError(_this8.currentResult.error);
        _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(undefined, _this8.currentResult.error);
      } // Then trigger the listeners


      if (notifyOptions.listeners) {
        _this8.listeners.forEach(function (listener) {
          listener(_this8.currentResult);
        });
      } // Then the cache listeners


      if (notifyOptions.cache) {
        _this8.client.getQueryCache().notify({
          query: _this8.currentQuery,
          type: 'observerResultsUpdated'
        });
      }
    });
  };

  return QueryObserver;
}(_subscribable__WEBPACK_IMPORTED_MODULE_7__.Subscribable);

function shouldLoadOnMount(query, options) {
  return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === 'error' && options.retryOnMount === false);
}

function shouldRefetchOnMount(query, options) {
  return options.enabled !== false && query.state.dataUpdatedAt > 0 && (options.refetchOnMount === 'always' || options.refetchOnMount !== false && isStale(query, options));
}

function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || shouldRefetchOnMount(query, options);
}

function _shouldFetchOnReconnect(query, options) {
  return options.enabled !== false && (options.refetchOnReconnect === 'always' || options.refetchOnReconnect !== false && isStale(query, options));
}

function _shouldFetchOnWindowFocus(query, options) {
  return options.enabled !== false && (options.refetchOnWindowFocus === 'always' || options.refetchOnWindowFocus !== false && isStale(query, options));
}

function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && isStale(query, options);
}

function isStale(query, options) {
  return query.isStaleByTime(options.staleTime);
}

/***/ }),

/***/ "../node_modules/react-query/es/core/retryer.js":
/*!******************************************************!*\
  !*** ../node_modules/react-query/es/core/retryer.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCancelable": function() { return /* binding */ isCancelable; },
/* harmony export */   "CancelledError": function() { return /* binding */ CancelledError; },
/* harmony export */   "isCancelledError": function() { return /* binding */ isCancelledError; },
/* harmony export */   "Retryer": function() { return /* binding */ Retryer; }
/* harmony export */ });
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusManager */ "../node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _onlineManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onlineManager */ "../node_modules/react-query/es/core/onlineManager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../node_modules/react-query/es/core/utils.js");


 // TYPES

function defaultRetryDelay(failureCount) {
  return Math.min(1000 * Math.pow(2, failureCount), 30000);
}

function isCancelable(value) {
  return typeof (value == null ? void 0 : value.cancel) === 'function';
}
var CancelledError = function CancelledError(options) {
  this.revert = options == null ? void 0 : options.revert;
  this.silent = options == null ? void 0 : options.silent;
};
function isCancelledError(value) {
  return value instanceof CancelledError;
} // CLASS

var Retryer = function Retryer(config) {
  var _this = this;

  var cancelRetry = false;
  var cancelFn;
  var continueFn;
  var promiseResolve;
  var promiseReject;

  this.cancel = function (cancelOptions) {
    return cancelFn == null ? void 0 : cancelFn(cancelOptions);
  };

  this.cancelRetry = function () {
    cancelRetry = true;
  };

  this.continue = function () {
    return continueFn == null ? void 0 : continueFn();
  };

  this.failureCount = 0;
  this.isPaused = false;
  this.isResolved = false;
  this.isTransportCancelable = false;
  this.promise = new Promise(function (outerResolve, outerReject) {
    promiseResolve = outerResolve;
    promiseReject = outerReject;
  });

  var resolve = function resolve(value) {
    if (!_this.isResolved) {
      _this.isResolved = true;
      config.onSuccess == null ? void 0 : config.onSuccess(value);
      continueFn == null ? void 0 : continueFn();
      promiseResolve(value);
    }
  };

  var reject = function reject(value) {
    if (!_this.isResolved) {
      _this.isResolved = true;
      config.onError == null ? void 0 : config.onError(value);
      continueFn == null ? void 0 : continueFn();
      promiseReject(value);
    }
  };

  var pause = function pause() {
    return new Promise(function (continueResolve) {
      continueFn = continueResolve;
      _this.isPaused = true;
      config.onPause == null ? void 0 : config.onPause();
    }).then(function () {
      continueFn = undefined;
      _this.isPaused = false;
      config.onContinue == null ? void 0 : config.onContinue();
    });
  }; // Create loop function


  var run = function run() {
    // Do nothing if already resolved
    if (_this.isResolved) {
      return;
    }

    var promiseOrValue; // Execute query

    try {
      promiseOrValue = config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    } // Create callback to cancel this fetch


    cancelFn = function cancelFn(cancelOptions) {
      if (!_this.isResolved) {
        reject(new CancelledError(cancelOptions)); // Cancel transport if supported

        if (isCancelable(promiseOrValue)) {
          try {
            promiseOrValue.cancel();
          } catch (_unused) {}
        }
      }
    }; // Check if the transport layer support cancellation


    _this.isTransportCancelable = isCancelable(promiseOrValue);
    Promise.resolve(promiseOrValue).then(resolve).catch(function (error) {
      var _config$retry, _config$retryDelay;

      // Stop if the fetch is already resolved
      if (_this.isResolved) {
        return;
      } // Do we need to retry the request?


      var retry = (_config$retry = config.retry) != null ? _config$retry : 3;
      var retryDelay = (_config$retryDelay = config.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
      var delay = typeof retryDelay === 'function' ? retryDelay(_this.failureCount, error) : retryDelay;
      var shouldRetry = retry === true || typeof retry === 'number' && _this.failureCount < retry || typeof retry === 'function' && retry(_this.failureCount, error);

      if (cancelRetry || !shouldRetry) {
        // We are done if the query does not need to be retried
        reject(error);
        return;
      }

      _this.failureCount++; // Notify on fail

      config.onFail == null ? void 0 : config.onFail(_this.failureCount, error); // Delay

      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sleep)(delay) // Pause if the document is not visible or when the device is offline
      .then(function () {
        if (!_focusManager__WEBPACK_IMPORTED_MODULE_1__.focusManager.isFocused() || !_onlineManager__WEBPACK_IMPORTED_MODULE_2__.onlineManager.isOnline()) {
          return pause();
        }
      }).then(function () {
        if (cancelRetry) {
          reject(error);
        } else {
          run();
        }
      });
    });
  }; // Start loop


  run();
};

/***/ }),

/***/ "../node_modules/react-query/es/core/subscribable.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-query/es/core/subscribable.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subscribable": function() { return /* binding */ Subscribable; }
/* harmony export */ });
var Subscribable = /*#__PURE__*/function () {
  function Subscribable() {
    this.listeners = [];
  }

  var _proto = Subscribable.prototype;

  _proto.subscribe = function subscribe(listener) {
    var _this = this;

    var callback = listener || function () {
      return undefined;
    };

    this.listeners.push(callback);
    this.onSubscribe();
    return function () {
      _this.listeners = _this.listeners.filter(function (x) {
        return x !== callback;
      });

      _this.onUnsubscribe();
    };
  };

  _proto.hasListeners = function hasListeners() {
    return this.listeners.length > 0;
  };

  _proto.onSubscribe = function onSubscribe() {// Do nothing
  };

  _proto.onUnsubscribe = function onUnsubscribe() {// Do nothing
  };

  return Subscribable;
}();

/***/ }),

/***/ "../node_modules/react-query/es/core/types.js":
/*!****************************************************!*\
  !*** ../node_modules/react-query/es/core/types.js ***!
  \****************************************************/
/***/ (function() {



/***/ }),

/***/ "../node_modules/react-query/es/core/utils.js":
/*!****************************************************!*\
  !*** ../node_modules/react-query/es/core/utils.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isServer": function() { return /* binding */ isServer; },
/* harmony export */   "noop": function() { return /* binding */ noop; },
/* harmony export */   "functionalUpdate": function() { return /* binding */ functionalUpdate; },
/* harmony export */   "isValidTimeout": function() { return /* binding */ isValidTimeout; },
/* harmony export */   "ensureQueryKeyArray": function() { return /* binding */ ensureQueryKeyArray; },
/* harmony export */   "difference": function() { return /* binding */ difference; },
/* harmony export */   "replaceAt": function() { return /* binding */ replaceAt; },
/* harmony export */   "timeUntilStale": function() { return /* binding */ timeUntilStale; },
/* harmony export */   "parseQueryArgs": function() { return /* binding */ parseQueryArgs; },
/* harmony export */   "parseMutationArgs": function() { return /* binding */ parseMutationArgs; },
/* harmony export */   "parseFilterArgs": function() { return /* binding */ parseFilterArgs; },
/* harmony export */   "mapQueryStatusFilter": function() { return /* binding */ mapQueryStatusFilter; },
/* harmony export */   "matchQuery": function() { return /* binding */ matchQuery; },
/* harmony export */   "matchMutation": function() { return /* binding */ matchMutation; },
/* harmony export */   "hashQueryKeyByOptions": function() { return /* binding */ hashQueryKeyByOptions; },
/* harmony export */   "hashQueryKey": function() { return /* binding */ hashQueryKey; },
/* harmony export */   "stableValueHash": function() { return /* binding */ stableValueHash; },
/* harmony export */   "partialMatchKey": function() { return /* binding */ partialMatchKey; },
/* harmony export */   "partialDeepEqual": function() { return /* binding */ partialDeepEqual; },
/* harmony export */   "replaceEqualDeep": function() { return /* binding */ replaceEqualDeep; },
/* harmony export */   "shallowEqualObjects": function() { return /* binding */ shallowEqualObjects; },
/* harmony export */   "isPlainObject": function() { return /* binding */ isPlainObject; },
/* harmony export */   "isQueryKey": function() { return /* binding */ isQueryKey; },
/* harmony export */   "isError": function() { return /* binding */ isError; },
/* harmony export */   "sleep": function() { return /* binding */ sleep; },
/* harmony export */   "scheduleMicrotask": function() { return /* binding */ scheduleMicrotask; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");

// TYPES
// UTILS
var isServer = typeof window === 'undefined';
function noop() {
  return undefined;
}
function functionalUpdate(updater, input) {
  return typeof updater === 'function' ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === 'number' && value >= 0 && value !== Infinity;
}
function ensureQueryKeyArray(value) {
  return Array.isArray(value) ? value : [value];
}
function difference(array1, array2) {
  return array1.filter(function (x) {
    return array2.indexOf(x) === -1;
  });
}
function replaceAt(array, index, value) {
  var copy = array.slice(0);
  copy[index] = value;
  return copy;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function parseQueryArgs(arg1, arg2, arg3) {
  if (!isQueryKey(arg1)) {
    return arg1;
  }

  if (typeof arg2 === 'function') {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg3, {
      queryKey: arg1,
      queryFn: arg2
    });
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg2, {
    queryKey: arg1
  });
}
function parseMutationArgs(arg1, arg2, arg3) {
  if (isQueryKey(arg1)) {
    if (typeof arg2 === 'function') {
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg3, {
        mutationKey: arg1,
        mutationFn: arg2
      });
    }

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg2, {
      mutationKey: arg1
    });
  }

  if (typeof arg1 === 'function') {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg2, {
      mutationFn: arg1
    });
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg1);
}
function parseFilterArgs(arg1, arg2, arg3) {
  return isQueryKey(arg1) ? [(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg2, {
    queryKey: arg1
  }), arg3] : [arg1 || {}, arg2];
}
function mapQueryStatusFilter(active, inactive) {
  if (active === true && inactive === true || active == null && inactive == null) {
    return 'all';
  } else if (active === false && inactive === false) {
    return 'none';
  } else {
    // At this point, active|inactive can only be true|false or false|true
    // so, when only one value is provided, the missing one has to be the negated value
    var isActive = active != null ? active : !inactive;
    return isActive ? 'active' : 'inactive';
  }
}
function matchQuery(filters, query) {
  var active = filters.active,
      exact = filters.exact,
      fetching = filters.fetching,
      inactive = filters.inactive,
      predicate = filters.predicate,
      queryKey = filters.queryKey,
      stale = filters.stale;

  if (isQueryKey(queryKey)) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }

  var queryStatusFilter = mapQueryStatusFilter(active, inactive);

  if (queryStatusFilter === 'none') {
    return false;
  } else if (queryStatusFilter !== 'all') {
    var isActive = query.isActive();

    if (queryStatusFilter === 'active' && !isActive) {
      return false;
    }

    if (queryStatusFilter === 'inactive' && isActive) {
      return false;
    }
  }

  if (typeof stale === 'boolean' && query.isStale() !== stale) {
    return false;
  }

  if (typeof fetching === 'boolean' && query.isFetching() !== fetching) {
    return false;
  }

  if (predicate && !predicate(query)) {
    return false;
  }

  return true;
}
function matchMutation(filters, mutation) {
  var exact = filters.exact,
      fetching = filters.fetching,
      predicate = filters.predicate,
      mutationKey = filters.mutationKey;

  if (isQueryKey(mutationKey)) {
    if (!mutation.options.mutationKey) {
      return false;
    }

    if (exact) {
      if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }

  if (typeof fetching === 'boolean' && mutation.state.status === 'loading' !== fetching) {
    return false;
  }

  if (predicate && !predicate(mutation)) {
    return false;
  }

  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  var hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey;
  return hashFn(queryKey);
}
/**
 * Default query keys hash function.
 */

function hashQueryKey(queryKey) {
  var asArray = ensureQueryKeyArray(queryKey);
  return stableValueHash(asArray);
}
/**
 * Hashes the value into a stable hash.
 */

function stableValueHash(value) {
  return JSON.stringify(value, function (_, val) {
    return isPlainObject(val) ? Object.keys(val).sort().reduce(function (result, key) {
      result[key] = val[key];
      return result;
    }, {}) : val;
  });
}
/**
 * Checks if key `b` partially matches with key `a`.
 */

function partialMatchKey(a, b) {
  return partialDeepEqual(ensureQueryKeyArray(a), ensureQueryKeyArray(b));
}
/**
 * Checks if `b` partially matches with `a`.
 */

function partialDeepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    return !Object.keys(b).some(function (key) {
      return !partialDeepEqual(a[key], b[key]);
    });
  }

  return false;
}
/**
 * This function returns `a` if `b` is deeply equal.
 * If not, it will replace any deeply equal children of `b` with those of `a`.
 * This can be used for structural sharing between JSON values for example.
 */

function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }

  var array = Array.isArray(a) && Array.isArray(b);

  if (array || isPlainObject(a) && isPlainObject(b)) {
    var aSize = array ? a.length : Object.keys(a).length;
    var bItems = array ? b : Object.keys(b);
    var bSize = bItems.length;
    var copy = array ? [] : {};
    var equalItems = 0;

    for (var i = 0; i < bSize; i++) {
      var key = array ? i : bItems[i];
      copy[key] = replaceEqualDeep(a[key], b[key]);

      if (copy[key] === a[key]) {
        equalItems++;
      }
    }

    return aSize === bSize && equalItems === aSize ? a : copy;
  }

  return b;
}
/**
 * Shallow compare objects. Only works with objects that always have the same properties.
 */

function shallowEqualObjects(a, b) {
  if (a && !b || b && !a) {
    return false;
  }

  for (var key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
} // Copied from: https://github.com/jonschlinkert/is-plain-object

function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  } // If has modified constructor


  var ctor = o.constructor;

  if (typeof ctor === 'undefined') {
    return true;
  } // If has modified prototype


  var prot = ctor.prototype;

  if (!hasObjectPrototype(prot)) {
    return false;
  } // If constructor does not have an Object-specific method


  if (!prot.hasOwnProperty('isPrototypeOf')) {
    return false;
  } // Most likely a plain Object


  return true;
}

function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isQueryKey(value) {
  return typeof value === 'string' || Array.isArray(value);
}
function isError(value) {
  return value instanceof Error;
}
function sleep(timeout) {
  return new Promise(function (resolve) {
    setTimeout(resolve, timeout);
  });
}
/**
 * Schedules a microtask.
 * This can be useful to schedule state updates after rendering.
 */

function scheduleMicrotask(callback) {
  Promise.resolve().then(callback).catch(function (error) {
    return setTimeout(function () {
      throw error;
    });
  });
}

/***/ }),

/***/ "../node_modules/react-query/es/hydration/hydration.js":
/*!*************************************************************!*\
  !*** ../node_modules/react-query/es/hydration/hydration.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dehydrate": function() { return /* binding */ dehydrate; },
/* harmony export */   "hydrate": function() { return /* binding */ hydrate; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");


// TYPES
// FUNCTIONS
function dehydrateMutation(mutation) {
  return {
    mutationKey: mutation.options.mutationKey,
    state: mutation.state
  };
} // Most config is not dehydrated but instead meant to configure again when
// consuming the de/rehydrated data, typically with useQuery on the client.
// Sometimes it might make sense to prefetch data on the server and include
// in the html-payload, but not consume it on the initial render.


function dehydrateQuery(query) {
  return {
    state: query.state,
    queryKey: query.queryKey,
    queryHash: query.queryHash
  };
}

function defaultShouldDehydrateMutation(mutation) {
  return mutation.state.isPaused;
}

function defaultShouldDehydrateQuery(query) {
  return query.state.status === 'success';
}

function dehydrate(client, options) {
  var _options, _options2;

  options = options || {};
  var mutations = [];
  var queries = [];

  if (((_options = options) == null ? void 0 : _options.dehydrateMutations) !== false) {
    var shouldDehydrateMutation = options.shouldDehydrateMutation || defaultShouldDehydrateMutation;
    client.getMutationCache().getAll().forEach(function (mutation) {
      if (shouldDehydrateMutation(mutation)) {
        mutations.push(dehydrateMutation(mutation));
      }
    });
  }

  if (((_options2 = options) == null ? void 0 : _options2.dehydrateQueries) !== false) {
    var shouldDehydrateQuery = options.shouldDehydrateQuery || defaultShouldDehydrateQuery;
    client.getQueryCache().getAll().forEach(function (query) {
      if (shouldDehydrateQuery(query)) {
        queries.push(dehydrateQuery(query));
      }
    });
  }

  return {
    mutations: mutations,
    queries: queries
  };
}
function hydrate(client, dehydratedState, options) {
  if (typeof dehydratedState !== 'object' || dehydratedState === null) {
    return;
  }

  var mutationCache = client.getMutationCache();
  var queryCache = client.getQueryCache();
  var mutations = dehydratedState.mutations || [];
  var queries = dehydratedState.queries || [];
  mutations.forEach(function (dehydratedMutation) {
    var _options$defaultOptio;

    mutationCache.build(client, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options == null ? void 0 : (_options$defaultOptio = options.defaultOptions) == null ? void 0 : _options$defaultOptio.mutations, {
      mutationKey: dehydratedMutation.mutationKey
    }), dehydratedMutation.state);
  });
  queries.forEach(function (dehydratedQuery) {
    var _options$defaultOptio2;

    var query = queryCache.get(dehydratedQuery.queryHash); // Do not hydrate if an existing query exists with newer data

    if (query) {
      if (query.state.dataUpdatedAt < dehydratedQuery.state.dataUpdatedAt) {
        query.setState(dehydratedQuery.state);
      }

      return;
    } // Restore query


    queryCache.build(client, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options == null ? void 0 : (_options$defaultOptio2 = options.defaultOptions) == null ? void 0 : _options$defaultOptio2.queries, {
      queryKey: dehydratedQuery.queryKey,
      queryHash: dehydratedQuery.queryHash
    }), dehydratedQuery.state);
  });
}

/***/ }),

/***/ "../node_modules/react-query/es/hydration/index.js":
/*!*********************************************************!*\
  !*** ../node_modules/react-query/es/hydration/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dehydrate": function() { return /* reexport safe */ _hydration__WEBPACK_IMPORTED_MODULE_0__.dehydrate; },
/* harmony export */   "hydrate": function() { return /* reexport safe */ _hydration__WEBPACK_IMPORTED_MODULE_0__.hydrate; },
/* harmony export */   "useHydrate": function() { return /* reexport safe */ _react__WEBPACK_IMPORTED_MODULE_1__.useHydrate; },
/* harmony export */   "Hydrate": function() { return /* reexport safe */ _react__WEBPACK_IMPORTED_MODULE_1__.Hydrate; }
/* harmony export */ });
/* harmony import */ var _hydration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hydration */ "../node_modules/react-query/es/hydration/hydration.js");
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react */ "../node_modules/react-query/es/hydration/react.js");

 // Types

/***/ }),

/***/ "../node_modules/react-query/es/hydration/react.js":
/*!*********************************************************!*\
  !*** ../node_modules/react-query/es/hydration/react.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHydrate": function() { return /* binding */ useHydrate; },
/* harmony export */   "Hydrate": function() { return /* binding */ Hydrate; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "../node_modules/react-query/es/index.js");
/* harmony import */ var _hydration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hydration */ "../node_modules/react-query/es/hydration/hydration.js");



function useHydrate(state, options) {
  var queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
  var optionsRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(options);
  optionsRef.current = options; // Running hydrate again with the same queries is safe,
  // it wont overwrite or initialize existing queries,
  // relying on useMemo here is only a performance optimization.
  // hydrate can and should be run *during* render here for SSR to work properly

  react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    if (state) {
      (0,_hydration__WEBPACK_IMPORTED_MODULE_2__.hydrate)(queryClient, state, optionsRef.current);
    }
  }, [queryClient, state]);
}
var Hydrate = function Hydrate(_ref) {
  var children = _ref.children,
      options = _ref.options,
      state = _ref.state;
  useHydrate(state, options);
  return children;
};

/***/ }),

/***/ "../node_modules/react-query/es/index.js":
/*!***********************************************!*\
  !*** ../node_modules/react-query/es/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "../node_modules/react-query/es/core/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _core__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _core__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react */ "../node_modules/react-query/es/react/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _react__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _react__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "../node_modules/react-query/es/react/QueryClientProvider.js":
/*!*******************************************************************!*\
  !*** ../node_modules/react-query/es/react/QueryClientProvider.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQueryClient": function() { return /* binding */ useQueryClient; },
/* harmony export */   "QueryClientProvider": function() { return /* binding */ QueryClientProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var defaultContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(undefined);
var QueryClientSharingContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(false); // if contextSharing is on, we share the first and at least one
// instance of the context across the window
// to ensure that if React Query is used across
// different bundles or microfrontends they will
// all use the same **instance** of context, regardless
// of module scoping.

function getQueryClientContext(contextSharing) {
  if (contextSharing && typeof window !== 'undefined') {
    if (!window.ReactQueryClientContext) {
      window.ReactQueryClientContext = defaultContext;
    }

    return window.ReactQueryClientContext;
  }

  return defaultContext;
}

var useQueryClient = function useQueryClient() {
  var queryClient = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(getQueryClientContext(react__WEBPACK_IMPORTED_MODULE_0___default().useContext(QueryClientSharingContext)));

  if (!queryClient) {
    throw new Error('No QueryClient set, use QueryClientProvider to set one');
  }

  return queryClient;
};
var QueryClientProvider = function QueryClientProvider(_ref) {
  var client = _ref.client,
      _ref$contextSharing = _ref.contextSharing,
      contextSharing = _ref$contextSharing === void 0 ? false : _ref$contextSharing,
      children = _ref.children;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    client.mount();
    return function () {
      client.unmount();
    };
  }, [client]);
  var Context = getQueryClientContext(contextSharing);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(QueryClientSharingContext.Provider, {
    value: contextSharing
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {
    value: client
  }, children));
};

/***/ }),

/***/ "../node_modules/react-query/es/react/QueryErrorResetBoundary.js":
/*!***********************************************************************!*\
  !*** ../node_modules/react-query/es/react/QueryErrorResetBoundary.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQueryErrorResetBoundary": function() { return /* binding */ useQueryErrorResetBoundary; },
/* harmony export */   "QueryErrorResetBoundary": function() { return /* binding */ QueryErrorResetBoundary; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // CONTEXT

function createValue() {
  var _isReset = false;
  return {
    clearReset: function clearReset() {
      _isReset = false;
    },
    reset: function reset() {
      _isReset = true;
    },
    isReset: function isReset() {
      return _isReset;
    }
  };
}

var QueryErrorResetBoundaryContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(createValue()); // HOOK

var useQueryErrorResetBoundary = function useQueryErrorResetBoundary() {
  return react__WEBPACK_IMPORTED_MODULE_0___default().useContext(QueryErrorResetBoundaryContext);
}; // COMPONENT

var QueryErrorResetBoundary = function QueryErrorResetBoundary(_ref) {
  var children = _ref.children;
  var value = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    return createValue();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(QueryErrorResetBoundaryContext.Provider, {
    value: value
  }, typeof children === 'function' ? children(value) : children);
};

/***/ }),

/***/ "../node_modules/react-query/es/react/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-query/es/react/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryClientProvider": function() { return /* reexport safe */ _QueryClientProvider__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider; },
/* harmony export */   "useQueryClient": function() { return /* reexport safe */ _QueryClientProvider__WEBPACK_IMPORTED_MODULE_2__.useQueryClient; },
/* harmony export */   "QueryErrorResetBoundary": function() { return /* reexport safe */ _QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_3__.QueryErrorResetBoundary; },
/* harmony export */   "useQueryErrorResetBoundary": function() { return /* reexport safe */ _QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_3__.useQueryErrorResetBoundary; },
/* harmony export */   "useIsFetching": function() { return /* reexport safe */ _useIsFetching__WEBPACK_IMPORTED_MODULE_4__.useIsFetching; },
/* harmony export */   "useIsMutating": function() { return /* reexport safe */ _useIsMutating__WEBPACK_IMPORTED_MODULE_5__.useIsMutating; },
/* harmony export */   "useMutation": function() { return /* reexport safe */ _useMutation__WEBPACK_IMPORTED_MODULE_6__.useMutation; },
/* harmony export */   "useQuery": function() { return /* reexport safe */ _useQuery__WEBPACK_IMPORTED_MODULE_7__.useQuery; },
/* harmony export */   "useQueries": function() { return /* reexport safe */ _useQueries__WEBPACK_IMPORTED_MODULE_8__.useQueries; },
/* harmony export */   "useInfiniteQuery": function() { return /* reexport safe */ _useInfiniteQuery__WEBPACK_IMPORTED_MODULE_9__.useInfiniteQuery; }
/* harmony export */ });
/* harmony import */ var _setBatchUpdatesFn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBatchUpdatesFn */ "../node_modules/react-query/es/react/setBatchUpdatesFn.js");
/* harmony import */ var _setLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setLogger */ "../node_modules/react-query/es/react/setLogger.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryClientProvider */ "../node_modules/react-query/es/react/QueryClientProvider.js");
/* harmony import */ var _QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryErrorResetBoundary */ "../node_modules/react-query/es/react/QueryErrorResetBoundary.js");
/* harmony import */ var _useIsFetching__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useIsFetching */ "../node_modules/react-query/es/react/useIsFetching.js");
/* harmony import */ var _useIsMutating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useIsMutating */ "../node_modules/react-query/es/react/useIsMutating.js");
/* harmony import */ var _useMutation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useMutation */ "../node_modules/react-query/es/react/useMutation.js");
/* harmony import */ var _useQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useQuery */ "../node_modules/react-query/es/react/useQuery.js");
/* harmony import */ var _useQueries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useQueries */ "../node_modules/react-query/es/react/useQueries.js");
/* harmony import */ var _useInfiniteQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useInfiniteQuery */ "../node_modules/react-query/es/react/useInfiniteQuery.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./types */ "../node_modules/react-query/es/react/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_10__) if(["default","QueryClientProvider","useQueryClient","QueryErrorResetBoundary","useQueryErrorResetBoundary","useIsFetching","useIsMutating","useMutation","useQuery","useQueries","useInfiniteQuery"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types__WEBPACK_IMPORTED_MODULE_10__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// Side effects









 // Types



/***/ }),

/***/ "../node_modules/react-query/es/react/logger.js":
/*!******************************************************!*\
  !*** ../node_modules/react-query/es/react/logger.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": function() { return /* binding */ logger; }
/* harmony export */ });
var logger = console;

/***/ }),

/***/ "../node_modules/react-query/es/react/reactBatchedUpdates.js":
/*!*******************************************************************!*\
  !*** ../node_modules/react-query/es/react/reactBatchedUpdates.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unstable_batchedUpdates": function() { return /* binding */ unstable_batchedUpdates; }
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

var unstable_batchedUpdates = (react_dom__WEBPACK_IMPORTED_MODULE_0___default().unstable_batchedUpdates);

/***/ }),

/***/ "../node_modules/react-query/es/react/setBatchUpdatesFn.js":
/*!*****************************************************************!*\
  !*** ../node_modules/react-query/es/react/setBatchUpdatesFn.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "../node_modules/react-query/es/core/index.js");
/* harmony import */ var _reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactBatchedUpdates */ "../node_modules/react-query/es/react/reactBatchedUpdates.js");


_core__WEBPACK_IMPORTED_MODULE_0__.notifyManager.setBatchNotifyFunction(_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates);

/***/ }),

/***/ "../node_modules/react-query/es/react/setLogger.js":
/*!*********************************************************!*\
  !*** ../node_modules/react-query/es/react/setLogger.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../node_modules/react-query/es/core/index.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "../node_modules/react-query/es/react/logger.js");



if (_logger__WEBPACK_IMPORTED_MODULE_0__.logger) {
  (0,_core__WEBPACK_IMPORTED_MODULE_1__.setLogger)(_logger__WEBPACK_IMPORTED_MODULE_0__.logger);
}

/***/ }),

/***/ "../node_modules/react-query/es/react/types.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-query/es/react/types.js ***!
  \*****************************************************/
/***/ (function() {



/***/ }),

/***/ "../node_modules/react-query/es/react/useBaseQuery.js":
/*!************************************************************!*\
  !*** ../node_modules/react-query/es/react/useBaseQuery.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBaseQuery": function() { return /* binding */ useBaseQuery; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryErrorResetBoundary */ "../node_modules/react-query/es/react/QueryErrorResetBoundary.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "../node_modules/react-query/es/react/QueryClientProvider.js");




function useBaseQuery(options, Observer) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0),
      forceUpdate = _React$useState[1];

  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
  var errorResetBoundary = (0,_QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_2__.useQueryErrorResetBoundary)();
  var defaultedOptions = queryClient.defaultQueryObserverOptions(options); // Make sure results are optimistically set in fetching state before subscribing or updating options

  defaultedOptions.optimisticResults = true; // Include callbacks in batch renders

  if (defaultedOptions.onError) {
    defaultedOptions.onError = _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(defaultedOptions.onError);
  }

  if (defaultedOptions.onSuccess) {
    defaultedOptions.onSuccess = _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(defaultedOptions.onSuccess);
  }

  if (defaultedOptions.onSettled) {
    defaultedOptions.onSettled = _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(defaultedOptions.onSettled);
  }

  if (defaultedOptions.suspense) {
    // Always set stale time when using suspense to prevent
    // fetching again when directly mounting after suspending
    if (typeof defaultedOptions.staleTime !== 'number') {
      defaultedOptions.staleTime = 1000;
    }
  }

  if (defaultedOptions.suspense || defaultedOptions.useErrorBoundary) {
    // Prevent retrying failed query if the error boundary has not been reset yet
    if (!errorResetBoundary.isReset()) {
      defaultedOptions.retryOnMount = false;
    }
  }

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(function () {
    return new Observer(queryClient, defaultedOptions);
  }),
      observer = _React$useState2[0];

  var result = observer.getOptimisticResult(defaultedOptions);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    mountedRef.current = true;
    errorResetBoundary.clearReset();
    var unsubscribe = observer.subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        forceUpdate(function (x) {
          return x + 1;
        });
      }
    })); // Update result to make sure we did not miss any query updates
    // between creating the observer and subscribing to it.

    observer.updateResult();
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [errorResetBoundary, observer]);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    // Do not notify on updates because of changes in the options because
    // these changes should already be reflected in the optimistic result.
    observer.setOptions(defaultedOptions, {
      listeners: false
    });
  }, [defaultedOptions, observer]); // Handle suspense

  if (defaultedOptions.suspense && result.isLoading) {
    throw observer.fetchOptimistic(defaultedOptions).then(function (_ref) {
      var data = _ref.data;
      defaultedOptions.onSuccess == null ? void 0 : defaultedOptions.onSuccess(data);
      defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(data, null);
    }).catch(function (error) {
      errorResetBoundary.clearReset();
      defaultedOptions.onError == null ? void 0 : defaultedOptions.onError(error);
      defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(undefined, error);
    });
  } // Handle error boundary


  if ((defaultedOptions.suspense || defaultedOptions.useErrorBoundary) && result.isError && !result.isFetching) {
    throw result.error;
  } // Handle result property usage tracking


  if (defaultedOptions.notifyOnChangeProps === 'tracked') {
    result = observer.trackResult(result);
  }

  return result;
}

/***/ }),

/***/ "../node_modules/react-query/es/react/useInfiniteQuery.js":
/*!****************************************************************!*\
  !*** ../node_modules/react-query/es/react/useInfiniteQuery.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInfiniteQuery": function() { return /* binding */ useInfiniteQuery; }
/* harmony export */ });
/* harmony import */ var _core_infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/infiniteQueryObserver */ "../node_modules/react-query/es/core/infiniteQueryObserver.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _useBaseQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useBaseQuery */ "../node_modules/react-query/es/react/useBaseQuery.js");


 // HOOK

function useInfiniteQuery(arg1, arg2, arg3) {
  var options = (0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.parseQueryArgs)(arg1, arg2, arg3);
  return (0,_useBaseQuery__WEBPACK_IMPORTED_MODULE_1__.useBaseQuery)(options, _core_infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_2__.InfiniteQueryObserver);
}

/***/ }),

/***/ "../node_modules/react-query/es/react/useIsFetching.js":
/*!*************************************************************!*\
  !*** ../node_modules/react-query/es/react/useIsFetching.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsFetching": function() { return /* binding */ useIsFetching; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "../node_modules/react-query/es/react/QueryClientProvider.js");




function useIsFetching(arg1, arg2) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);
  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();

  var _parseFilterArgs = (0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.parseFilterArgs)(arg1, arg2),
      filters = _parseFilterArgs[0];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(queryClient.isFetching(filters)),
      isFetching = _React$useState[0],
      setIsFetching = _React$useState[1];

  var filtersRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(filters);
  filtersRef.current = filters;
  var isFetchingRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(isFetching);
  isFetchingRef.current = isFetching;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    mountedRef.current = true;
    var unsubscribe = queryClient.getQueryCache().subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        var newIsFetching = queryClient.isFetching(filtersRef.current);

        if (isFetchingRef.current !== newIsFetching) {
          setIsFetching(newIsFetching);
        }
      }
    }));
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [queryClient]);
  return isFetching;
}

/***/ }),

/***/ "../node_modules/react-query/es/react/useIsMutating.js":
/*!*************************************************************!*\
  !*** ../node_modules/react-query/es/react/useIsMutating.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsMutating": function() { return /* binding */ useIsMutating; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "../node_modules/react-query/es/react/QueryClientProvider.js");



function useIsMutating(filters) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);
  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(queryClient.isMutating(filters)),
      isMutating = _React$useState[0],
      setIsMutating = _React$useState[1];

  var filtersRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(filters);
  filtersRef.current = filters;
  var isMutatingRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(isMutating);
  isMutatingRef.current = isMutating;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    mountedRef.current = true;
    var unsubscribe = queryClient.getMutationCache().subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        var newIsMutating = queryClient.isMutating(filtersRef.current);

        if (isMutatingRef.current !== newIsMutating) {
          setIsMutating(newIsMutating);
        }
      }
    }));
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [queryClient]);
  return isMutating;
}

/***/ }),

/***/ "../node_modules/react-query/es/react/useMutation.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-query/es/react/useMutation.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMutation": function() { return /* binding */ useMutation; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _core_mutationObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/mutationObserver */ "../node_modules/react-query/es/core/mutationObserver.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryClientProvider */ "../node_modules/react-query/es/react/QueryClientProvider.js");






function useMutation(arg1, arg2, arg3) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(false);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0),
      forceUpdate = _React$useState[1];

  var options = (0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.parseMutationArgs)(arg1, arg2, arg3);
  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
  var obsRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();

  if (!obsRef.current) {
    obsRef.current = new _core_mutationObserver__WEBPACK_IMPORTED_MODULE_4__.MutationObserver(queryClient, options);
  } else {
    obsRef.current.setOptions(options);
  }

  var currentResult = obsRef.current.getCurrentResult();
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {
    mountedRef.current = true;
    var unsubscribe = obsRef.current.subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_5__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        forceUpdate(function (x) {
          return x + 1;
        });
      }
    }));
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, []);
  var mutate = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(function (variables, mutateOptions) {
    obsRef.current.mutate(variables, mutateOptions).catch(_core_utils__WEBPACK_IMPORTED_MODULE_2__.noop);
  }, []);

  if (currentResult.error && obsRef.current.options.useErrorBoundary) {
    throw currentResult.error;
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, currentResult, {
    mutate: mutate,
    mutateAsync: currentResult.mutate
  });
}

/***/ }),

/***/ "../node_modules/react-query/es/react/useQueries.js":
/*!**********************************************************!*\
  !*** ../node_modules/react-query/es/react/useQueries.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQueries": function() { return /* binding */ useQueries; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/notifyManager */ "../node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _core_queriesObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/queriesObserver */ "../node_modules/react-query/es/core/queriesObserver.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "../node_modules/react-query/es/react/QueryClientProvider.js");




function useQueries(queries) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0),
      forceUpdate = _React$useState[1];

  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
  var defaultedQueries = queries.map(function (options) {
    var defaultedOptions = queryClient.defaultQueryObserverOptions(options); // Make sure the results are already in fetching state before subscribing or updating options

    defaultedOptions.optimisticResults = true;
    return defaultedOptions;
  });

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(function () {
    return new _core_queriesObserver__WEBPACK_IMPORTED_MODULE_2__.QueriesObserver(queryClient, defaultedQueries);
  }),
      observer = _React$useState2[0];

  var result = observer.getOptimisticResult(defaultedQueries);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    mountedRef.current = true;
    var unsubscribe = observer.subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        forceUpdate(function (x) {
          return x + 1;
        });
      }
    }));
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [observer]);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    // Do not notify on updates because of changes in the options because
    // these changes should already be reflected in the optimistic result.
    observer.setQueries(defaultedQueries, {
      listeners: false
    });
  }, [defaultedQueries, observer]);
  return result;
}

/***/ }),

/***/ "../node_modules/react-query/es/react/useQuery.js":
/*!********************************************************!*\
  !*** ../node_modules/react-query/es/react/useQuery.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQuery": function() { return /* binding */ useQuery; }
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "../node_modules/react-query/es/core/index.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils */ "../node_modules/react-query/es/core/utils.js");
/* harmony import */ var _useBaseQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useBaseQuery */ "../node_modules/react-query/es/react/useBaseQuery.js");


 // HOOK

function useQuery(arg1, arg2, arg3) {
  var parsedOptions = (0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.parseQueryArgs)(arg1, arg2, arg3);
  return (0,_useBaseQuery__WEBPACK_IMPORTED_MODULE_1__.useBaseQuery)(parsedOptions, _core__WEBPACK_IMPORTED_MODULE_2__.QueryObserver);
}

/***/ }),

/***/ "../node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!**********************************************************************!*\
  !*** ../node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "../node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "../node_modules/react/jsx-dev-runtime.js":
/*!************************************************!*\
  !*** ../node_modules/react/jsx-dev-runtime.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "../node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!"), __webpack_exec__("../node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vX05fRS8iLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnNjc3M/NDExMCIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvZm9jdXNNYW5hZ2VyLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9pbmZpbml0ZVF1ZXJ5QmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9pbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9tdXRhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL211dGF0aW9uQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9tdXRhdGlvbk9ic2VydmVyLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvbm90aWZ5TWFuYWdlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL29ubGluZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9xdWVyaWVzT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9xdWVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL3F1ZXJ5Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9xdWVyeUNsaWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL3F1ZXJ5T2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9yZXRyeWVyLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvc3Vic2NyaWJhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvaHlkcmF0aW9uL2h5ZHJhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9oeWRyYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvaHlkcmF0aW9uL3JlYWN0LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L1F1ZXJ5Q2xpZW50UHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvUXVlcnlFcnJvclJlc2V0Qm91bmRhcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvbG9nZ2VyLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3JlYWN0QmF0Y2hlZFVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3Qvc2V0QmF0Y2hVcGRhdGVzRm4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3Qvc2V0TG9nZ2VyLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3VzZUJhc2VRdWVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC91c2VJbmZpbml0ZVF1ZXJ5LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3VzZUlzRmV0Y2hpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvdXNlSXNNdXRhdGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC91c2VNdXRhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC91c2VRdWVyaWVzLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3VzZVF1ZXJ5LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudFJlZiIsInVzZVJlZiIsImdldENsaWVudCIsImN1cnJlbnQiLCJRdWVyeUNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwiZGVoeWRyYXRlZFN0YXRlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7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O0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNULEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalUwRDs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsMkVBQVEsR0FBRztBQUMzQztBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQSwwREFBMEQ7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0wsNkJBQTZCLDJFQUFRLEdBQUc7QUFDeEM7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR2lEO0FBQ0gsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEcEI7QUFDbUI7QUFDUDtBQUMvQjtBQUNQLG9CQUFvQiwyREFBYztBQUNsQyxtQkFBbUIsbURBQVk7QUFDL0IsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLG9EQUFhO0FBQ2Y7QUFDQSxNQUFNLG1EQUFPO0FBQ2I7QUFDQSxHQUFHO0FBQ0g7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBRztBQUMxQixrQ0FBa0MsMERBQW1CO0FBQ3JELDZDQUE2QywwREFBbUIsUUFBUTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1Asb0JBQW9CLHVEQUFnQix1QkFBdUIsdURBQWdCOztBQUUzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHNEQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0JBQXNCLDBEQUFtQjtBQUN6QztBQUNBLEdBQUcsZUFBZSwwREFBbUI7QUFDckM7QUFDQSxHQUFHO0FBQ0gsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0MwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtELDBEQUFtQixnQkFBZ0I7O0FBRTlFO0FBQ1AsU0FBUyx1REFBZ0I7QUFDekIsRUFBRTs7QUFFSztBQUNQO0FBQ0EsY0FBYyxvREFBYTtBQUMzQjtBQUNBLEdBQUc7QUFDSCxzQkFBc0IsMERBQW1CO0FBQ3pDO0FBQ0EsR0FBRztBQUNILEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUM2QjtBQUNSO0FBQ3VEO0FBQ29CO0FBQ2hEO0FBQ0E7QUFDSjtBQUNOO0FBQ0k7QUFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWL0MscUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQzFCLDhCQUE4QiwwRUFBZ0MsQzs7Ozs7Ozs7Ozs7Ozs7QUNEN0I7QUFDd0I7QUFDaEUsdUVBQW9DLENBQUMseUVBQXVCLEU7Ozs7Ozs7Ozs7Ozs7O0FDRnhCO0FBQ0Y7O0FBRWxDLElBQUksMkNBQU07QUFDVixFQUFFLGdEQUFTLENBQUMsMkNBQU07QUFDbEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDBCO0FBQzRCO0FBQ2lCO0FBQ2hCO0FBQ2hEO0FBQ1AsbUJBQW1CLG1EQUFZOztBQUUvQix3QkFBd0IscURBQWM7QUFDdEM7O0FBRUEsb0JBQW9CLG9FQUFjO0FBQ2xDLDJCQUEyQixvRkFBMEI7QUFDckQsMEVBQTBFOztBQUUxRSw0Q0FBNEM7O0FBRTVDO0FBQ0EsK0JBQStCLHlFQUF3QjtBQUN2RDs7QUFFQTtBQUNBLGlDQUFpQyx5RUFBd0I7QUFDekQ7O0FBRUE7QUFDQSxpQ0FBaUMseUVBQXdCO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIscURBQWM7QUFDdkM7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxFQUFFLHNEQUFlO0FBQ2pCO0FBQ0E7QUFDQSx5Q0FBeUMseUVBQXdCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUssR0FBRztBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSxzREFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHLGdDQUFnQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHc0U7QUFDdkI7QUFDRDs7QUFFdkM7QUFDUCxnQkFBZ0IsMkRBQWM7QUFDOUIsU0FBUywyREFBWSxVQUFVLDhFQUFxQjtBQUNwRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1AwQjtBQUM0QjtBQUNOO0FBQ087QUFDaEQ7QUFDUCxtQkFBbUIsbURBQVk7QUFDL0Isb0JBQW9CLG9FQUFjOztBQUVsQyx5QkFBeUIsNERBQWU7QUFDeEM7O0FBRUEsd0JBQXdCLHFEQUFjO0FBQ3RDO0FBQ0E7O0FBRUEsbUJBQW1CLG1EQUFZO0FBQy9CO0FBQ0Esc0JBQXNCLG1EQUFZO0FBQ2xDO0FBQ0EsRUFBRSxzREFBZTtBQUNqQjtBQUNBLDREQUE0RCx5RUFBd0I7QUFDcEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQzBCO0FBQzRCO0FBQ0M7QUFDaEQ7QUFDUCxtQkFBbUIsbURBQVk7QUFDL0Isb0JBQW9CLG9FQUFjOztBQUVsQyx3QkFBd0IscURBQWM7QUFDdEM7QUFDQTs7QUFFQSxtQkFBbUIsbURBQVk7QUFDL0I7QUFDQSxzQkFBc0IsbURBQVk7QUFDbEM7QUFDQSxFQUFFLHNEQUFlO0FBQ2pCO0FBQ0EsK0RBQStELHlFQUF3QjtBQUN2RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDMEQ7QUFDaEM7QUFDNEI7QUFDRTtBQUNJO0FBQ0w7QUFDaEQ7QUFDUCxtQkFBbUIsbURBQVk7O0FBRS9CLHdCQUF3QixxREFBYztBQUN0Qzs7QUFFQSxnQkFBZ0IsOERBQWlCO0FBQ2pDLG9CQUFvQixvRUFBYztBQUNsQyxlQUFlLG1EQUFZOztBQUUzQjtBQUNBLHlCQUF5QixvRUFBZ0I7QUFDekMsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHNEQUFlO0FBQ2pCO0FBQ0EsK0NBQStDLHlFQUF3QjtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsZUFBZSx3REFBaUI7QUFDaEMsMERBQTBELDZDQUFJO0FBQzlELEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBLFNBQVMsMkVBQVEsR0FBRztBQUNwQjtBQUNBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakQwQjtBQUM0QjtBQUNJO0FBQ0g7QUFDaEQ7QUFDUCxtQkFBbUIsbURBQVk7O0FBRS9CLHdCQUF3QixxREFBYztBQUN0Qzs7QUFFQSxvQkFBb0Isb0VBQWM7QUFDbEM7QUFDQSw0RUFBNEU7O0FBRTVFO0FBQ0E7QUFDQSxHQUFHOztBQUVILHlCQUF5QixxREFBYztBQUN2QyxlQUFlLGtFQUFlO0FBQzlCLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEVBQUUsc0RBQWU7QUFDakI7QUFDQSx5Q0FBeUMseUVBQXdCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLHNEQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDd0M7QUFDTztBQUNEOztBQUV2QztBQUNQLHNCQUFzQiwyREFBYztBQUNwQyxTQUFTLDJEQUFZLGdCQUFnQixnREFBYTtBQUNsRCxDOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBLFlBQVksbUJBQU8sQ0FBQyw2Q0FBTztBQUMzQixjQUFjLG1CQUFPLENBQUMsaUZBQWU7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdCQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw4RkFBOEYsZUFBZTtBQUM3RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUCxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCxrQ0FBa0M7QUFDbEM7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBEOztBQUUxRDtBQUNBOztBQUVBO0FBQ0Esd0RBQXdEO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROzs7QUFHUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7O0FBR2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEhBQTBIO0FBQzFIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUVBQW1FOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNB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Q0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLGNBQWM7QUFDZCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2xyQ2E7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsRUFBRSx3SkFBc0U7QUFDeEUiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ3JlYWN0LXF1ZXJ5J1xyXG5pbXBvcnQgeyBIeWRyYXRlIH0gZnJvbSAncmVhY3QtcXVlcnkvaHlkcmF0aW9uJ1xyXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICAgIGNvbnN0IGNsaWVudFJlZiA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgZ2V0Q2xpZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghY2xpZW50UmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIGNsaWVudFJlZi5jdXJyZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcmllczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGNsaWVudFJlZi5jdXJyZW50XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e2dldENsaWVudCgpfT5cclxuICAgICAgICAgICAgPEh5ZHJhdGUgc3RhdGU9e3BhZ2VQcm9wcy5kZWh5ZHJhdGVkU3RhdGV9PlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L0h5ZHJhdGU+XHJcbiAgICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5BcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4LCBDb21wb25lbnQgfSkgPT4ge1xyXG4gICAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcz8uKGN0eClcclxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcCIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2FwcFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbNF0hLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzRdIS4vaW5kZXguc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbNF0hLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO2NvbnN0IGlzT2xkSUU9ZnVuY3Rpb24gaXNPbGRJRSgpe2xldCBtZW1vO3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpe2lmKHR5cGVvZiBtZW1vPT09J3VuZGVmaW5lZCcpey8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4vLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4vLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4vLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xubWVtbz1Cb29sZWFuKHdpbmRvdyYmZG9jdW1lbnQmJmRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9iKTt9cmV0dXJuIG1lbW87fTt9KCk7Y29uc3QgZ2V0VGFyZ2V0PWZ1bmN0aW9uIGdldFRhcmdldCgpe2NvbnN0IG1lbW89e307cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCl7aWYodHlwZW9mIG1lbW9bdGFyZ2V0XT09PSd1bmRlZmluZWQnKXtsZXQgc3R5bGVUYXJnZXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOy8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5pZih3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQmJnN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KXt0cnl7Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbi8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5zdHlsZVRhcmdldD1zdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDt9Y2F0Y2goZSl7Ly8gaXN0YW5idWwgaWdub3JlIG5leHRcbnN0eWxlVGFyZ2V0PW51bGw7fX1tZW1vW3RhcmdldF09c3R5bGVUYXJnZXQ7fXJldHVybiBtZW1vW3RhcmdldF07fTt9KCk7Y29uc3Qgc3R5bGVzSW5Eb209W107ZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcil7bGV0IHJlc3VsdD0tMTtmb3IobGV0IGk9MDtpPHN0eWxlc0luRG9tLmxlbmd0aDtpKyspe2lmKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXI9PT1pZGVudGlmaWVyKXtyZXN1bHQ9aTticmVhazt9fXJldHVybiByZXN1bHQ7fWZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpe2NvbnN0IGlkQ291bnRNYXA9e307Y29uc3QgaWRlbnRpZmllcnM9W107Zm9yKGxldCBpPTA7aTxsaXN0Lmxlbmd0aDtpKyspe2NvbnN0IGl0ZW09bGlzdFtpXTtjb25zdCBpZD1vcHRpb25zLmJhc2U/aXRlbVswXStvcHRpb25zLmJhc2U6aXRlbVswXTtjb25zdCBjb3VudD1pZENvdW50TWFwW2lkXXx8MDtjb25zdCBpZGVudGlmaWVyPWlkKycgJytjb3VudC50b1N0cmluZygpO2lkQ291bnRNYXBbaWRdPWNvdW50KzE7Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7Y29uc3Qgb2JqPXtjc3M6aXRlbVsxXSxtZWRpYTppdGVtWzJdLHNvdXJjZU1hcDppdGVtWzNdfTtpZihpbmRleCE9PS0xKXtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7fWVsc2V7c3R5bGVzSW5Eb20ucHVzaCh7aWRlbnRpZmllcjppZGVudGlmaWVyLHVwZGF0ZXI6YWRkU3R5bGUob2JqLG9wdGlvbnMpLHJlZmVyZW5jZXM6MX0pO31pZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO31yZXR1cm4gaWRlbnRpZmllcnM7fWZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKXtjb25zdCBzdHlsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO2NvbnN0IGF0dHJpYnV0ZXM9b3B0aW9ucy5hdHRyaWJ1dGVzfHx7fTtpZih0eXBlb2YgYXR0cmlidXRlcy5ub25jZT09PSd1bmRlZmluZWQnKXtjb25zdCBub25jZT0vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbnR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyE9PSd1bmRlZmluZWQnP19fd2VicGFja19ub25jZV9fOm51bGw7aWYobm9uY2Upe2F0dHJpYnV0ZXMubm9uY2U9bm9uY2U7fX1PYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7c3R5bGUuc2V0QXR0cmlidXRlKGtleSxhdHRyaWJ1dGVzW2tleV0pO30pO2lmKHR5cGVvZiBvcHRpb25zLmluc2VydD09PSdmdW5jdGlvbicpe29wdGlvbnMuaW5zZXJ0KHN0eWxlKTt9ZWxzZXtjb25zdCB0YXJnZXQ9Z2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0fHwnaGVhZCcpO2lmKCF0YXJnZXQpe3Rocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7fXRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7fXJldHVybiBzdHlsZTt9ZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbmlmKHN0eWxlLnBhcmVudE5vZGU9PT1udWxsKXtyZXR1cm4gZmFsc2U7fXN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO30vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9jb25zdCByZXBsYWNlVGV4dD1mdW5jdGlvbiByZXBsYWNlVGV4dCgpe2NvbnN0IHRleHRTdG9yZT1bXTtyZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCxyZXBsYWNlbWVudCl7dGV4dFN0b3JlW2luZGV4XT1yZXBsYWNlbWVudDtyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTt9O30oKTtmdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLGluZGV4LHJlbW92ZSxvYmope2NvbnN0IGNzcz1yZW1vdmU/Jyc6b2JqLm1lZGlhPydAbWVkaWEgJytvYmoubWVkaWErJyB7JytvYmouY3NzKyd9JzpvYmouY3NzOy8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9cmVwbGFjZVRleHQoaW5kZXgsY3NzKTt9ZWxzZXtjb25zdCBjc3NOb2RlPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7Y29uc3QgY2hpbGROb2Rlcz1zdHlsZS5jaGlsZE5vZGVzO2lmKGNoaWxkTm9kZXNbaW5kZXhdKXtzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7fWlmKGNoaWxkTm9kZXMubGVuZ3RoKXtzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSxjaGlsZE5vZGVzW2luZGV4XSk7fWVsc2V7c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7fX19ZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSxvcHRpb25zLG9iail7bGV0IGNzcz1vYmouY3NzO2NvbnN0IG1lZGlhPW9iai5tZWRpYTtjb25zdCBzb3VyY2VNYXA9b2JqLnNvdXJjZU1hcDtpZihtZWRpYSl7c3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsbWVkaWEpO31lbHNle3N0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTt9aWYoc291cmNlTWFwJiZ0eXBlb2YgYnRvYSE9PSd1bmRlZmluZWQnKXtjc3MrPSdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSsnICovJzt9Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1jc3M7fWVsc2V7d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7fXN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO319bGV0IHNpbmdsZXRvbj1udWxsO2xldCBzaW5nbGV0b25Db3VudGVyPTA7ZnVuY3Rpb24gYWRkU3R5bGUob2JqLG9wdGlvbnMpe2xldCBzdHlsZTtsZXQgdXBkYXRlO2xldCByZW1vdmU7aWYob3B0aW9ucy5zaW5nbGV0b24pe2NvbnN0IHN0eWxlSW5kZXg9c2luZ2xldG9uQ291bnRlcisrO3N0eWxlPXNpbmdsZXRvbnx8KHNpbmdsZXRvbj1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO3VwZGF0ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LGZhbHNlKTtyZW1vdmU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCx0cnVlKTt9ZWxzZXtzdHlsZT1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7dXBkYXRlPWFwcGx5VG9UYWcuYmluZChudWxsLHN0eWxlLG9wdGlvbnMpO3JlbW92ZT1mdW5jdGlvbigpe3JlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7fTt9dXBkYXRlKG9iaik7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iail7aWYobmV3T2JqKXtpZihuZXdPYmouY3NzPT09b2JqLmNzcyYmbmV3T2JqLm1lZGlhPT09b2JqLm1lZGlhJiZuZXdPYmouc291cmNlTWFwPT09b2JqLnNvdXJjZU1hcCl7cmV0dXJuO311cGRhdGUob2JqPW5ld09iaik7fWVsc2V7cmVtb3ZlKCk7fX07fW1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGxpc3Qsb3B0aW9ucyl7b3B0aW9ucz1vcHRpb25zfHx7fTsvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbmlmKCFvcHRpb25zLnNpbmdsZXRvbiYmdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uIT09J2Jvb2xlYW4nKXtvcHRpb25zLnNpbmdsZXRvbj1pc09sZElFKCk7fWxpc3Q9bGlzdHx8W107bGV0IGxhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3Qpe25ld0xpc3Q9bmV3TGlzdHx8W107aWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpIT09J1tvYmplY3QgQXJyYXldJyl7cmV0dXJuO31mb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO31jb25zdCBuZXdMYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKG5ld0xpc3Qsb3B0aW9ucyk7Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7aWYoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXM9PT0wKXtzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO3N0eWxlc0luRG9tLnNwbGljZShpbmRleCwxKTt9fWxhc3RJZGVudGlmaWVycz1uZXdMYXN0SWRlbnRpZmllcnM7fTt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezc2MjpmdW5jdGlvbihuKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIHQ9W107dC50b1N0cmluZz1mdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXt2YXIgcj1jc3NXaXRoTWFwcGluZ1RvU3RyaW5nKHQsbik7aWYodFsyXSl7cmV0dXJuXCJAbWVkaWEgXCIuY29uY2F0KHRbMl0sXCIge1wiKS5jb25jYXQocixcIn1cIil9cmV0dXJuIHJ9KS5qb2luKFwiXCIpfTt0Lmk9ZnVuY3Rpb24obixyLG8pe2lmKHR5cGVvZiBuPT09XCJzdHJpbmdcIil7bj1bW251bGwsbixcIlwiXV19dmFyIGU9e307aWYobyl7Zm9yKHZhciBhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBjPXRoaXNbYV1bMF07aWYoYyE9bnVsbCl7ZVtjXT10cnVlfX19Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciB1PVtdLmNvbmNhdChuW2ldKTtpZihvJiZlW3VbMF1dKXtjb250aW51ZX1pZihyKXtpZighdVsyXSl7dVsyXT1yfWVsc2V7dVsyXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHVbMl0pfX10LnB1c2godSl9fTtyZXR1cm4gdH07ZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhuLHQpe3ZhciByPW5bMV18fFwiXCI7dmFyIG89blszXTtpZighbyl7cmV0dXJuIHJ9aWYodCYmdHlwZW9mIGJ0b2E9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPXRvQ29tbWVudChvKTt2YXIgYT1vLnNvdXJjZXMubWFwKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoby5zb3VyY2VSb290fHxcIlwiKS5jb25jYXQobixcIiAqL1wiKX0pO3JldHVybltyXS5jb25jYXQoYSkuY29uY2F0KFtlXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiB0b0NvbW1lbnQobil7dmFyIHQ9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7dmFyIHI9XCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQodCk7cmV0dXJuXCIvKiMgXCIuY29uY2F0KHIsXCIgKi9cIil9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXtpZih0W3JdKXtyZXR1cm4gdFtyXS5leHBvcnRzfXZhciBvPXRbcl09e2V4cG9ydHM6e319O3ZhciBlPXRydWU7dHJ5e25bcl0obyxvLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7ZT1mYWxzZX1maW5hbGx5e2lmKGUpZGVsZXRlIHRbcl19cmV0dXJuIG8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg3NjIpfSgpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jX19uZXh0IHtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5tZXNzYWdlcyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLm1lc3NhZ2VzX19pbnB1dCB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogODAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxuICBtYXJnaW46IDAgYXV0byAxMHB4O1xcbn1cXG4ubWVzc2FnZXNfX2lucHV0ID4gKiB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5tZXNzYWdlc19faW5wdXQgdGV4dGFyZWEge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIC1tb3otYm94LWZsZXg6IDE7XFxuICAgICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuLm1lc3NhZ2VzX19pbnB1dCBidXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG4ubWVzc2FnZXNfX2l0ZW0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwYWRkaW5nOiAxNXB4IDE1cHggNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2FhYTtcXG59XFxuLm1lc3NhZ2VzX19pdGVtIGgzIHtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgbWFyZ2luOiAwIDAgMTBweDtcXG59XFxuLm1lc3NhZ2VzX19pdGVtIHN1YiB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLm1lc3NhZ2VzX19pdGVtIHAge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcbi5tZXNzYWdlc19faXRlbTpob3ZlciAubWVzc2FnZXNfX2J1dHRvbnMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5tZXNzYWdlc19faXRlbSAubWVzc2FnZXNfX2lucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWVzc2FnZXNfX2J1dHRvbnMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBib3R0b206IDEwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBSUY7QUFIRTtFQUNFLGlCQUFBO0VBQUEsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFLSjtBQUpJO0VBQ0UsOEJBQUE7S0FBQSwyQkFBQTtVQUFBLHNCQUFBO0FBTU47QUFKSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtPQUFBLFlBQUE7QUFNTjtBQUpJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBTU47QUFIRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUtKO0FBSkk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBTU47QUFKSTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQU1OO0FBSkk7RUFDRSxjQUFBO0FBTU47QUFKSTtFQUNFLGNBQUE7QUFNTjtBQUpJO0VBQ0UsV0FBQTtBQU1OO0FBSEU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBS0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbiNfX25leHQge1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5oMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG59XFxyXFxuLm1lc3NhZ2VzIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgJl9faW5wdXQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xcclxcbiAgICA+ICoge1xcclxcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIH1cXHJcXG4gICAgdGV4dGFyZWEge1xcclxcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgZmxleC1ncm93OiAxO1xcclxcbiAgICB9XFxyXFxuICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9faXRlbSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHggMTVweCA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2FhYTtcXHJcXG4gICAgaDMge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcclxcbiAgICAgIG1hcmdpbjogMCAwIDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgc3ViIHtcXHJcXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbiAgICB9XFxyXFxuICAgIHAge1xcclxcbiAgICAgIG1hcmdpbjogMTBweCAwO1xcclxcbiAgICB9XFxyXFxuICAgICY6aG92ZXIgLm1lc3NhZ2VzX19idXR0b25zIHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgICAubWVzc2FnZXNfX2lucHV0IHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fYnV0dG9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICBib3R0b206IDEwcHg7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCB7IFN1YnNjcmliYWJsZSB9IGZyb20gJy4vc3Vic2NyaWJhYmxlJztcbmltcG9ydCB7IGlzU2VydmVyIH0gZnJvbSAnLi91dGlscyc7XG5cbnZhciBGb2N1c01hbmFnZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9TdWJzY3JpYmFibGUpIHtcbiAgX2luaGVyaXRzTG9vc2UoRm9jdXNNYW5hZ2VyLCBfU3Vic2NyaWJhYmxlKTtcblxuICBmdW5jdGlvbiBGb2N1c01hbmFnZXIoKSB7XG4gICAgcmV0dXJuIF9TdWJzY3JpYmFibGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEZvY3VzTWFuYWdlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9uU3Vic2NyaWJlID0gZnVuY3Rpb24gb25TdWJzY3JpYmUoKSB7XG4gICAgaWYgKCF0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuc2V0RGVmYXVsdEV2ZW50TGlzdGVuZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNldEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBzZXRFdmVudExpc3RlbmVyKHNldHVwKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHNldHVwKGZ1bmN0aW9uIChmb2N1c2VkKSB7XG4gICAgICBpZiAodHlwZW9mIGZvY3VzZWQgPT09ICdib29sZWFuJykge1xuICAgICAgICBfdGhpcy5zZXRGb2N1c2VkKGZvY3VzZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMub25Gb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5zZXRGb2N1c2VkID0gZnVuY3Rpb24gc2V0Rm9jdXNlZChmb2N1c2VkKSB7XG4gICAgdGhpcy5mb2N1c2VkID0gZm9jdXNlZDtcblxuICAgIGlmIChmb2N1c2VkKSB7XG4gICAgICB0aGlzLm9uRm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uRm9jdXMgPSBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5pc0ZvY3VzZWQgPSBmdW5jdGlvbiBpc0ZvY3VzZWQoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZvY3VzZWQgPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIHRoaXMuZm9jdXNlZDtcbiAgICB9IC8vIGRvY3VtZW50IGdsb2JhbCBjYW4gYmUgdW5hdmFpbGFibGUgaW4gcmVhY3QgbmF0aXZlXG5cblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3VuZGVmaW5lZCwgJ3Zpc2libGUnLCAncHJlcmVuZGVyJ10uaW5jbHVkZXMoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0RGVmYXVsdEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBzZXREZWZhdWx0RXZlbnRMaXN0ZW5lcigpIHtcbiAgICB2YXIgX3dpbmRvdztcblxuICAgIGlmICghaXNTZXJ2ZXIgJiYgKChfd2luZG93ID0gd2luZG93KSA9PSBudWxsID8gdm9pZCAwIDogX3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKSkge1xuICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVyKGZ1bmN0aW9uIChvbkZvY3VzKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgICAgIHJldHVybiBvbkZvY3VzKCk7XG4gICAgICAgIH07IC8vIExpc3RlbiB0byB2aXNpYmlsbGl0eWNoYW5nZSBhbmQgZm9jdXNcblxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBCZSBzdXJlIHRvIHVuc3Vic2NyaWJlIGlmIGEgbmV3IGhhbmRsZXIgaXMgc2V0XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgbGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBGb2N1c01hbmFnZXI7XG59KFN1YnNjcmliYWJsZSk7XG5cbmV4cG9ydCB2YXIgZm9jdXNNYW5hZ2VyID0gbmV3IEZvY3VzTWFuYWdlcigpOyIsImV4cG9ydCB7IENhbmNlbGxlZEVycm9yIH0gZnJvbSAnLi9yZXRyeWVyJztcbmV4cG9ydCB7IFF1ZXJ5Q2FjaGUgfSBmcm9tICcuL3F1ZXJ5Q2FjaGUnO1xuZXhwb3J0IHsgUXVlcnlDbGllbnQgfSBmcm9tICcuL3F1ZXJ5Q2xpZW50JztcbmV4cG9ydCB7IFF1ZXJ5T2JzZXJ2ZXIgfSBmcm9tICcuL3F1ZXJ5T2JzZXJ2ZXInO1xuZXhwb3J0IHsgUXVlcmllc09ic2VydmVyIH0gZnJvbSAnLi9xdWVyaWVzT2JzZXJ2ZXInO1xuZXhwb3J0IHsgSW5maW5pdGVRdWVyeU9ic2VydmVyIH0gZnJvbSAnLi9pbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXInO1xuZXhwb3J0IHsgTXV0YXRpb25DYWNoZSB9IGZyb20gJy4vbXV0YXRpb25DYWNoZSc7XG5leHBvcnQgeyBNdXRhdGlvbk9ic2VydmVyIH0gZnJvbSAnLi9tdXRhdGlvbk9ic2VydmVyJztcbmV4cG9ydCB7IHNldExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcbmV4cG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuZXhwb3J0IHsgZm9jdXNNYW5hZ2VyIH0gZnJvbSAnLi9mb2N1c01hbmFnZXInO1xuZXhwb3J0IHsgb25saW5lTWFuYWdlciB9IGZyb20gJy4vb25saW5lTWFuYWdlcic7XG5leHBvcnQgeyBoYXNoUXVlcnlLZXksIGlzRXJyb3IgfSBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCB7IGlzQ2FuY2VsbGVkRXJyb3IgfSBmcm9tICcuL3JldHJ5ZXInOyAvLyBUeXBlc1xuXG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJzsiLCJpbXBvcnQgeyBpc0NhbmNlbGFibGUgfSBmcm9tICcuL3JldHJ5ZXInO1xuZXhwb3J0IGZ1bmN0aW9uIGluZmluaXRlUXVlcnlCZWhhdmlvcigpIHtcbiAgcmV0dXJuIHtcbiAgICBvbkZldGNoOiBmdW5jdGlvbiBvbkZldGNoKGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQuZmV0Y2hGbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9jb250ZXh0JGZldGNoT3B0aW9ucywgX2NvbnRleHQkZmV0Y2hPcHRpb25zMiwgX2NvbnRleHQkc3RhdGUkZGF0YSwgX2NvbnRleHQkc3RhdGUkZGF0YTI7XG5cbiAgICAgICAgdmFyIGZldGNoTW9yZSA9IChfY29udGV4dCRmZXRjaE9wdGlvbnMgPSBjb250ZXh0LmZldGNoT3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IChfY29udGV4dCRmZXRjaE9wdGlvbnMyID0gX2NvbnRleHQkZmV0Y2hPcHRpb25zLm1ldGEpID09IG51bGwgPyB2b2lkIDAgOiBfY29udGV4dCRmZXRjaE9wdGlvbnMyLmZldGNoTW9yZTtcbiAgICAgICAgdmFyIHBhZ2VQYXJhbSA9IGZldGNoTW9yZSA9PSBudWxsID8gdm9pZCAwIDogZmV0Y2hNb3JlLnBhZ2VQYXJhbTtcbiAgICAgICAgdmFyIGlzRmV0Y2hpbmdOZXh0UGFnZSA9IChmZXRjaE1vcmUgPT0gbnVsbCA/IHZvaWQgMCA6IGZldGNoTW9yZS5kaXJlY3Rpb24pID09PSAnZm9yd2FyZCc7XG4gICAgICAgIHZhciBpc0ZldGNoaW5nUHJldmlvdXNQYWdlID0gKGZldGNoTW9yZSA9PSBudWxsID8gdm9pZCAwIDogZmV0Y2hNb3JlLmRpcmVjdGlvbikgPT09ICdiYWNrd2FyZCc7XG4gICAgICAgIHZhciBvbGRQYWdlcyA9ICgoX2NvbnRleHQkc3RhdGUkZGF0YSA9IGNvbnRleHQuc3RhdGUuZGF0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jb250ZXh0JHN0YXRlJGRhdGEucGFnZXMpIHx8IFtdO1xuICAgICAgICB2YXIgb2xkUGFnZVBhcmFtcyA9ICgoX2NvbnRleHQkc3RhdGUkZGF0YTIgPSBjb250ZXh0LnN0YXRlLmRhdGEpID09IG51bGwgPyB2b2lkIDAgOiBfY29udGV4dCRzdGF0ZSRkYXRhMi5wYWdlUGFyYW1zKSB8fCBbXTtcbiAgICAgICAgdmFyIG5ld1BhZ2VQYXJhbXMgPSBvbGRQYWdlUGFyYW1zO1xuICAgICAgICB2YXIgY2FuY2VsbGVkID0gZmFsc2U7IC8vIEdldCBxdWVyeSBmdW5jdGlvblxuXG4gICAgICAgIHZhciBxdWVyeUZuID0gY29udGV4dC5vcHRpb25zLnF1ZXJ5Rm4gfHwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnTWlzc2luZyBxdWVyeUZuJyk7XG4gICAgICAgIH07IC8vIENyZWF0ZSBmdW5jdGlvbiB0byBmZXRjaCBhIHBhZ2VcblxuXG4gICAgICAgIHZhciBmZXRjaFBhZ2UgPSBmdW5jdGlvbiBmZXRjaFBhZ2UocGFnZXMsIG1hbnVhbCwgcGFyYW0sIHByZXZpb3VzKSB7XG4gICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdDYW5jZWxsZWQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtID09PSAndW5kZWZpbmVkJyAmJiAhbWFudWFsICYmIHBhZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwYWdlcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHF1ZXJ5Rm5Db250ZXh0ID0ge1xuICAgICAgICAgICAgcXVlcnlLZXk6IGNvbnRleHQucXVlcnlLZXksXG4gICAgICAgICAgICBwYWdlUGFyYW06IHBhcmFtXG4gICAgICAgICAgfTtcbiAgICAgICAgICB2YXIgcXVlcnlGblJlc3VsdCA9IHF1ZXJ5Rm4ocXVlcnlGbkNvbnRleHQpO1xuICAgICAgICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHF1ZXJ5Rm5SZXN1bHQpLnRoZW4oZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgICAgIG5ld1BhZ2VQYXJhbXMgPSBwcmV2aW91cyA/IFtwYXJhbV0uY29uY2F0KG5ld1BhZ2VQYXJhbXMpIDogW10uY29uY2F0KG5ld1BhZ2VQYXJhbXMsIFtwYXJhbV0pO1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzID8gW3BhZ2VdLmNvbmNhdChwYWdlcykgOiBbXS5jb25jYXQocGFnZXMsIFtwYWdlXSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoaXNDYW5jZWxhYmxlKHF1ZXJ5Rm5SZXN1bHQpKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZUFzQW55ID0gcHJvbWlzZTtcbiAgICAgICAgICAgIHByb21pc2VBc0FueS5jYW5jZWwgPSBxdWVyeUZuUmVzdWx0LmNhbmNlbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcHJvbWlzZTsgLy8gRmV0Y2ggZmlyc3QgcGFnZT9cblxuICAgICAgICBpZiAoIW9sZFBhZ2VzLmxlbmd0aCkge1xuICAgICAgICAgIHByb21pc2UgPSBmZXRjaFBhZ2UoW10pO1xuICAgICAgICB9IC8vIEZldGNoIG5leHQgcGFnZT9cbiAgICAgICAgZWxzZSBpZiAoaXNGZXRjaGluZ05leHRQYWdlKSB7XG4gICAgICAgICAgICB2YXIgbWFudWFsID0gdHlwZW9mIHBhZ2VQYXJhbSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgICAgICB2YXIgcGFyYW0gPSBtYW51YWwgPyBwYWdlUGFyYW0gOiBnZXROZXh0UGFnZVBhcmFtKGNvbnRleHQub3B0aW9ucywgb2xkUGFnZXMpO1xuICAgICAgICAgICAgcHJvbWlzZSA9IGZldGNoUGFnZShvbGRQYWdlcywgbWFudWFsLCBwYXJhbSk7XG4gICAgICAgICAgfSAvLyBGZXRjaCBwcmV2aW91cyBwYWdlP1xuICAgICAgICAgIGVsc2UgaWYgKGlzRmV0Y2hpbmdQcmV2aW91c1BhZ2UpIHtcbiAgICAgICAgICAgICAgdmFyIF9tYW51YWwgPSB0eXBlb2YgcGFnZVBhcmFtICE9PSAndW5kZWZpbmVkJztcblxuICAgICAgICAgICAgICB2YXIgX3BhcmFtID0gX21hbnVhbCA/IHBhZ2VQYXJhbSA6IGdldFByZXZpb3VzUGFnZVBhcmFtKGNvbnRleHQub3B0aW9ucywgb2xkUGFnZXMpO1xuXG4gICAgICAgICAgICAgIHByb21pc2UgPSBmZXRjaFBhZ2Uob2xkUGFnZXMsIF9tYW51YWwsIF9wYXJhbSwgdHJ1ZSk7XG4gICAgICAgICAgICB9IC8vIFJlZmV0Y2ggcGFnZXNcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBuZXdQYWdlUGFyYW1zID0gW107XG4gICAgICAgICAgICAgICAgICB2YXIgbWFudWFsID0gdHlwZW9mIGNvbnRleHQub3B0aW9ucy5nZXROZXh0UGFnZVBhcmFtID09PSAndW5kZWZpbmVkJzsgLy8gRmV0Y2ggZmlyc3QgcGFnZVxuXG4gICAgICAgICAgICAgICAgICBwcm9taXNlID0gZmV0Y2hQYWdlKFtdLCBtYW51YWwsIG9sZFBhZ2VQYXJhbXNbMF0pOyAvLyBGZXRjaCByZW1haW5pbmcgcGFnZXNcblxuICAgICAgICAgICAgICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChwYWdlcykge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IG1hbnVhbCA/IG9sZFBhZ2VQYXJhbXNbaV0gOiBnZXROZXh0UGFnZVBhcmFtKGNvbnRleHQub3B0aW9ucywgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFBhZ2UocGFnZXMsIG1hbnVhbCwgcGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgb2xkUGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgX2xvb3AoaSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaW5hbFByb21pc2UgPSBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHBhZ2VzKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhZ2VzOiBwYWdlcyxcbiAgICAgICAgICAgIHBhZ2VQYXJhbXM6IG5ld1BhZ2VQYXJhbXNcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGZpbmFsUHJvbWlzZUFzQW55ID0gZmluYWxQcm9taXNlO1xuXG4gICAgICAgIGZpbmFsUHJvbWlzZUFzQW55LmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKGlzQ2FuY2VsYWJsZShwcm9taXNlKSkge1xuICAgICAgICAgICAgcHJvbWlzZS5jYW5jZWwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGZpbmFsUHJvbWlzZTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRQYWdlUGFyYW0ob3B0aW9ucywgcGFnZXMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuZ2V0TmV4dFBhZ2VQYXJhbSA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5nZXROZXh0UGFnZVBhcmFtKHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdLCBwYWdlcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlvdXNQYWdlUGFyYW0ob3B0aW9ucywgcGFnZXMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuZ2V0UHJldmlvdXNQYWdlUGFyYW0gPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuZ2V0UHJldmlvdXNQYWdlUGFyYW0ocGFnZXNbMF0sIHBhZ2VzKTtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIHRoZXJlIGlzIGEgbmV4dCBwYWdlLlxuICogUmV0dXJucyBgdW5kZWZpbmVkYCBpZiBpdCBjYW5ub3QgYmUgZGV0ZXJtaW5lZC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzTmV4dFBhZ2Uob3B0aW9ucywgcGFnZXMpIHtcbiAgaWYgKG9wdGlvbnMuZ2V0TmV4dFBhZ2VQYXJhbSAmJiBBcnJheS5pc0FycmF5KHBhZ2VzKSkge1xuICAgIHZhciBuZXh0UGFnZVBhcmFtID0gZ2V0TmV4dFBhZ2VQYXJhbShvcHRpb25zLCBwYWdlcyk7XG4gICAgcmV0dXJuIHR5cGVvZiBuZXh0UGFnZVBhcmFtICE9PSAndW5kZWZpbmVkJyAmJiBuZXh0UGFnZVBhcmFtICE9PSBudWxsICYmIG5leHRQYWdlUGFyYW0gIT09IGZhbHNlO1xuICB9XG59XG4vKipcbiAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIHByZXZpb3VzIHBhZ2UuXG4gKiBSZXR1cm5zIGB1bmRlZmluZWRgIGlmIGl0IGNhbm5vdCBiZSBkZXRlcm1pbmVkLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNQcmV2aW91c1BhZ2Uob3B0aW9ucywgcGFnZXMpIHtcbiAgaWYgKG9wdGlvbnMuZ2V0UHJldmlvdXNQYWdlUGFyYW0gJiYgQXJyYXkuaXNBcnJheShwYWdlcykpIHtcbiAgICB2YXIgcHJldmlvdXNQYWdlUGFyYW0gPSBnZXRQcmV2aW91c1BhZ2VQYXJhbShvcHRpb25zLCBwYWdlcyk7XG4gICAgcmV0dXJuIHR5cGVvZiBwcmV2aW91c1BhZ2VQYXJhbSAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJldmlvdXNQYWdlUGFyYW0gIT09IG51bGwgJiYgcHJldmlvdXNQYWdlUGFyYW0gIT09IGZhbHNlO1xuICB9XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCB7IFF1ZXJ5T2JzZXJ2ZXIgfSBmcm9tICcuL3F1ZXJ5T2JzZXJ2ZXInO1xuaW1wb3J0IHsgaGFzTmV4dFBhZ2UsIGhhc1ByZXZpb3VzUGFnZSwgaW5maW5pdGVRdWVyeUJlaGF2aW9yIH0gZnJvbSAnLi9pbmZpbml0ZVF1ZXJ5QmVoYXZpb3InO1xuZXhwb3J0IHZhciBJbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9RdWVyeU9ic2VydmVyKSB7XG4gIF9pbmhlcml0c0xvb3NlKEluZmluaXRlUXVlcnlPYnNlcnZlciwgX1F1ZXJ5T2JzZXJ2ZXIpO1xuXG4gIC8vIFR5cGUgb3ZlcnJpZGVcbiAgLy8gVHlwZSBvdmVycmlkZVxuICAvLyBUeXBlIG92ZXJyaWRlXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlbGVzcy1jb25zdHJ1Y3RvclxuICBmdW5jdGlvbiBJbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXIoY2xpZW50LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIF9RdWVyeU9ic2VydmVyLmNhbGwodGhpcywgY2xpZW50LCBvcHRpb25zKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEluZmluaXRlUXVlcnlPYnNlcnZlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmJpbmRNZXRob2RzID0gZnVuY3Rpb24gYmluZE1ldGhvZHMoKSB7XG4gICAgX1F1ZXJ5T2JzZXJ2ZXIucHJvdG90eXBlLmJpbmRNZXRob2RzLmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLmZldGNoTmV4dFBhZ2UgPSB0aGlzLmZldGNoTmV4dFBhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZldGNoUHJldmlvdXNQYWdlID0gdGhpcy5mZXRjaFByZXZpb3VzUGFnZS5iaW5kKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5zZXRPcHRpb25zID0gZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgX1F1ZXJ5T2JzZXJ2ZXIucHJvdG90eXBlLnNldE9wdGlvbnMuY2FsbCh0aGlzLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgYmVoYXZpb3I6IGluZmluaXRlUXVlcnlCZWhhdmlvcigpXG4gICAgfSkpO1xuICB9O1xuXG4gIF9wcm90by5nZXRPcHRpbWlzdGljUmVzdWx0ID0gZnVuY3Rpb24gZ2V0T3B0aW1pc3RpY1Jlc3VsdChvcHRpb25zKSB7XG4gICAgb3B0aW9ucy5iZWhhdmlvciA9IGluZmluaXRlUXVlcnlCZWhhdmlvcigpO1xuICAgIHJldHVybiBfUXVlcnlPYnNlcnZlci5wcm90b3R5cGUuZ2V0T3B0aW1pc3RpY1Jlc3VsdC5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5mZXRjaE5leHRQYWdlID0gZnVuY3Rpb24gZmV0Y2hOZXh0UGFnZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuZmV0Y2goe1xuICAgICAgY2FuY2VsUmVmZXRjaDogdHJ1ZSxcbiAgICAgIHRocm93T25FcnJvcjogb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy50aHJvd09uRXJyb3IsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIGZldGNoTW9yZToge1xuICAgICAgICAgIGRpcmVjdGlvbjogJ2ZvcndhcmQnLFxuICAgICAgICAgIHBhZ2VQYXJhbTogb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5wYWdlUGFyYW1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5mZXRjaFByZXZpb3VzUGFnZSA9IGZ1bmN0aW9uIGZldGNoUHJldmlvdXNQYWdlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5mZXRjaCh7XG4gICAgICBjYW5jZWxSZWZldGNoOiB0cnVlLFxuICAgICAgdGhyb3dPbkVycm9yOiBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnRocm93T25FcnJvcixcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgZmV0Y2hNb3JlOiB7XG4gICAgICAgICAgZGlyZWN0aW9uOiAnYmFja3dhcmQnLFxuICAgICAgICAgIHBhZ2VQYXJhbTogb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5wYWdlUGFyYW1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jcmVhdGVSZXN1bHQgPSBmdW5jdGlvbiBjcmVhdGVSZXN1bHQocXVlcnksIG9wdGlvbnMpIHtcbiAgICB2YXIgX3N0YXRlJGRhdGEsIF9zdGF0ZSRkYXRhMiwgX3N0YXRlJGZldGNoTWV0YSwgX3N0YXRlJGZldGNoTWV0YSRmZXRjLCBfc3RhdGUkZmV0Y2hNZXRhMiwgX3N0YXRlJGZldGNoTWV0YTIkZmV0O1xuXG4gICAgdmFyIHN0YXRlID0gcXVlcnkuc3RhdGU7XG5cbiAgICB2YXIgcmVzdWx0ID0gX1F1ZXJ5T2JzZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZVJlc3VsdC5jYWxsKHRoaXMsIHF1ZXJ5LCBvcHRpb25zKTtcblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcmVzdWx0LCB7XG4gICAgICBmZXRjaE5leHRQYWdlOiB0aGlzLmZldGNoTmV4dFBhZ2UsXG4gICAgICBmZXRjaFByZXZpb3VzUGFnZTogdGhpcy5mZXRjaFByZXZpb3VzUGFnZSxcbiAgICAgIGhhc05leHRQYWdlOiBoYXNOZXh0UGFnZShvcHRpb25zLCAoX3N0YXRlJGRhdGEgPSBzdGF0ZS5kYXRhKSA9PSBudWxsID8gdm9pZCAwIDogX3N0YXRlJGRhdGEucGFnZXMpLFxuICAgICAgaGFzUHJldmlvdXNQYWdlOiBoYXNQcmV2aW91c1BhZ2Uob3B0aW9ucywgKF9zdGF0ZSRkYXRhMiA9IHN0YXRlLmRhdGEpID09IG51bGwgPyB2b2lkIDAgOiBfc3RhdGUkZGF0YTIucGFnZXMpLFxuICAgICAgaXNGZXRjaGluZ05leHRQYWdlOiBzdGF0ZS5pc0ZldGNoaW5nICYmICgoX3N0YXRlJGZldGNoTWV0YSA9IHN0YXRlLmZldGNoTWV0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IChfc3RhdGUkZmV0Y2hNZXRhJGZldGMgPSBfc3RhdGUkZmV0Y2hNZXRhLmZldGNoTW9yZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9zdGF0ZSRmZXRjaE1ldGEkZmV0Yy5kaXJlY3Rpb24pID09PSAnZm9yd2FyZCcsXG4gICAgICBpc0ZldGNoaW5nUHJldmlvdXNQYWdlOiBzdGF0ZS5pc0ZldGNoaW5nICYmICgoX3N0YXRlJGZldGNoTWV0YTIgPSBzdGF0ZS5mZXRjaE1ldGEpID09IG51bGwgPyB2b2lkIDAgOiAoX3N0YXRlJGZldGNoTWV0YTIkZmV0ID0gX3N0YXRlJGZldGNoTWV0YTIuZmV0Y2hNb3JlKSA9PSBudWxsID8gdm9pZCAwIDogX3N0YXRlJGZldGNoTWV0YTIkZmV0LmRpcmVjdGlvbikgPT09ICdiYWNrd2FyZCdcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gSW5maW5pdGVRdWVyeU9ic2VydmVyO1xufShRdWVyeU9ic2VydmVyKTsiLCJpbXBvcnQgeyBub29wIH0gZnJvbSAnLi91dGlscyc7IC8vIFRZUEVTXG5cbi8vIEZVTkNUSU9OU1xudmFyIGxvZ2dlciA9IGNvbnNvbGUgfHwge1xuICBlcnJvcjogbm9vcCxcbiAgd2Fybjogbm9vcCxcbiAgbG9nOiBub29wXG59O1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ2dlcigpIHtcbiAgcmV0dXJuIGxvZ2dlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2dnZXIobmV3TG9nZ2VyKSB7XG4gIGxvZ2dlciA9IG5ld0xvZ2dlcjtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IGdldExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgUmV0cnllciB9IGZyb20gJy4vcmV0cnllcic7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi91dGlscyc7IC8vIFRZUEVTXG5cbi8vIENMQVNTXG5leHBvcnQgdmFyIE11dGF0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTXV0YXRpb24oY29uZmlnKSB7XG4gICAgdGhpcy5vcHRpb25zID0gX2V4dGVuZHMoe30sIGNvbmZpZy5kZWZhdWx0T3B0aW9ucywgY29uZmlnLm9wdGlvbnMpO1xuICAgIHRoaXMubXV0YXRpb25JZCA9IGNvbmZpZy5tdXRhdGlvbklkO1xuICAgIHRoaXMubXV0YXRpb25DYWNoZSA9IGNvbmZpZy5tdXRhdGlvbkNhY2hlO1xuICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgdGhpcy5zdGF0ZSA9IGNvbmZpZy5zdGF0ZSB8fCBnZXREZWZhdWx0U3RhdGUoKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNdXRhdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnNldFN0YXRlID0gZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdzZXRTdGF0ZScsXG4gICAgICBzdGF0ZTogc3RhdGVcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uYWRkT2JzZXJ2ZXIgPSBmdW5jdGlvbiBhZGRPYnNlcnZlcihvYnNlcnZlcikge1xuICAgIGlmICh0aGlzLm9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlT2JzZXJ2ZXIgPSBmdW5jdGlvbiByZW1vdmVPYnNlcnZlcihvYnNlcnZlcikge1xuICAgIHRoaXMub2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCAhPT0gb2JzZXJ2ZXI7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGhpcy5yZXRyeWVyKSB7XG4gICAgICB0aGlzLnJldHJ5ZXIuY2FuY2VsKCk7XG4gICAgICByZXR1cm4gdGhpcy5yZXRyeWVyLnByb21pc2UudGhlbihub29wKS5jYXRjaChub29wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbnRpbnVlID0gZnVuY3Rpb24gX2NvbnRpbnVlKCkge1xuICAgIGlmICh0aGlzLnJldHJ5ZXIpIHtcbiAgICAgIHRoaXMucmV0cnllci5jb250aW51ZSgpO1xuICAgICAgcmV0dXJuIHRoaXMucmV0cnllci5wcm9taXNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoKTtcbiAgfTtcblxuICBfcHJvdG8uZXhlY3V0ZSA9IGZ1bmN0aW9uIGV4ZWN1dGUoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBkYXRhO1xuICAgIHZhciByZXN0b3JlZCA9IHRoaXMuc3RhdGUuc3RhdHVzID09PSAnbG9hZGluZyc7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcblxuICAgIGlmICghcmVzdG9yZWQpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnbG9hZGluZycsXG4gICAgICAgIHZhcmlhYmxlczogdGhpcy5vcHRpb25zLnZhcmlhYmxlc1xuICAgICAgfSk7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLm9wdGlvbnMub25NdXRhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzLm9wdGlvbnMub25NdXRhdGUoX3RoaXMuc3RhdGUudmFyaWFibGVzKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQgIT09IF90aGlzLnN0YXRlLmNvbnRleHQpIHtcbiAgICAgICAgICBfdGhpcy5kaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiAnbG9hZGluZycsXG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgdmFyaWFibGVzOiBfdGhpcy5zdGF0ZS52YXJpYWJsZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuZXhlY3V0ZU11dGF0aW9uKCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICBkYXRhID0gcmVzdWx0OyAvLyBOb3RpZnkgY2FjaGUgY2FsbGJhY2tcblxuICAgICAgX3RoaXMubXV0YXRpb25DYWNoZS5jb25maWcub25TdWNjZXNzID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcy5tdXRhdGlvbkNhY2hlLmNvbmZpZy5vblN1Y2Nlc3MoZGF0YSwgX3RoaXMuc3RhdGUudmFyaWFibGVzLCBfdGhpcy5zdGF0ZS5jb250ZXh0LCBfdGhpcyk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMub3B0aW9ucy5vblN1Y2Nlc3MgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzLm9wdGlvbnMub25TdWNjZXNzKGRhdGEsIF90aGlzLnN0YXRlLnZhcmlhYmxlcywgX3RoaXMuc3RhdGUuY29udGV4dCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMub3B0aW9ucy5vblNldHRsZWQgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzLm9wdGlvbnMub25TZXR0bGVkKGRhdGEsIG51bGwsIF90aGlzLnN0YXRlLnZhcmlhYmxlcywgX3RoaXMuc3RhdGUuY29udGV4dCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgLy8gTm90aWZ5IGNhY2hlIGNhbGxiYWNrXG4gICAgICBfdGhpcy5tdXRhdGlvbkNhY2hlLmNvbmZpZy5vbkVycm9yID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcy5tdXRhdGlvbkNhY2hlLmNvbmZpZy5vbkVycm9yKGVycm9yLCBfdGhpcy5zdGF0ZS52YXJpYWJsZXMsIF90aGlzLnN0YXRlLmNvbnRleHQsIF90aGlzKTsgLy8gTG9nIGVycm9yXG5cbiAgICAgIGdldExvZ2dlcigpLmVycm9yKGVycm9yKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLm9wdGlvbnMub25FcnJvciA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMub3B0aW9ucy5vbkVycm9yKGVycm9yLCBfdGhpcy5zdGF0ZS52YXJpYWJsZXMsIF90aGlzLnN0YXRlLmNvbnRleHQpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5vcHRpb25zLm9uU2V0dGxlZCA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMub3B0aW9ucy5vblNldHRsZWQodW5kZWZpbmVkLCBlcnJvciwgX3RoaXMuc3RhdGUudmFyaWFibGVzLCBfdGhpcy5zdGF0ZS5jb250ZXh0KTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZXhlY3V0ZU11dGF0aW9uID0gZnVuY3Rpb24gZXhlY3V0ZU11dGF0aW9uKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzLFxuICAgICAgICBfdGhpcyRvcHRpb25zJHJldHJ5O1xuXG4gICAgdGhpcy5yZXRyeWVyID0gbmV3IFJldHJ5ZXIoe1xuICAgICAgZm46IGZ1bmN0aW9uIGZuKCkge1xuICAgICAgICBpZiAoIV90aGlzMi5vcHRpb25zLm11dGF0aW9uRm4pIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ05vIG11dGF0aW9uRm4gZm91bmQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfdGhpczIub3B0aW9ucy5tdXRhdGlvbkZuKF90aGlzMi5zdGF0ZS52YXJpYWJsZXMpO1xuICAgICAgfSxcbiAgICAgIG9uRmFpbDogZnVuY3Rpb24gb25GYWlsKCkge1xuICAgICAgICBfdGhpczIuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdmYWlsZWQnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG9uUGF1c2U6IGZ1bmN0aW9uIG9uUGF1c2UoKSB7XG4gICAgICAgIF90aGlzMi5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ3BhdXNlJ1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvbkNvbnRpbnVlOiBmdW5jdGlvbiBvbkNvbnRpbnVlKCkge1xuICAgICAgICBfdGhpczIuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdjb250aW51ZSdcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgcmV0cnk6IChfdGhpcyRvcHRpb25zJHJldHJ5ID0gdGhpcy5vcHRpb25zLnJldHJ5KSAhPSBudWxsID8gX3RoaXMkb3B0aW9ucyRyZXRyeSA6IDAsXG4gICAgICByZXRyeURlbGF5OiB0aGlzLm9wdGlvbnMucmV0cnlEZWxheVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnJldHJ5ZXIucHJvbWlzZTtcbiAgfTtcblxuICBfcHJvdG8uZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMuc3RhdGUgPSByZWR1Y2VyKHRoaXMuc3RhdGUsIGFjdGlvbik7XG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMub2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLm9uTXV0YXRpb25VcGRhdGUoYWN0aW9uKTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpczMubXV0YXRpb25DYWNoZS5ub3RpZnkoX3RoaXMzKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gTXV0YXRpb247XG59KCk7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFN0YXRlKCkge1xuICByZXR1cm4ge1xuICAgIGNvbnRleHQ6IHVuZGVmaW5lZCxcbiAgICBkYXRhOiB1bmRlZmluZWQsXG4gICAgZXJyb3I6IG51bGwsXG4gICAgZmFpbHVyZUNvdW50OiAwLFxuICAgIGlzUGF1c2VkOiBmYWxzZSxcbiAgICBzdGF0dXM6ICdpZGxlJyxcbiAgICB2YXJpYWJsZXM6IHVuZGVmaW5lZFxuICB9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ2ZhaWxlZCc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGZhaWx1cmVDb3VudDogc3RhdGUuZmFpbHVyZUNvdW50ICsgMVxuICAgICAgfSk7XG5cbiAgICBjYXNlICdwYXVzZSc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGlzUGF1c2VkOiB0cnVlXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ2NvbnRpbnVlJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNQYXVzZWQ6IGZhbHNlXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ2xvYWRpbmcnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb250ZXh0OiBhY3Rpb24uY29udGV4dCxcbiAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgaXNQYXVzZWQ6IGZhbHNlLFxuICAgICAgICBzdGF0dXM6ICdsb2FkaW5nJyxcbiAgICAgICAgdmFyaWFibGVzOiBhY3Rpb24udmFyaWFibGVzXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICBpc1BhdXNlZDogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBkYXRhOiB1bmRlZmluZWQsXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgIGZhaWx1cmVDb3VudDogc3RhdGUuZmFpbHVyZUNvdW50ICsgMSxcbiAgICAgICAgaXNQYXVzZWQ6IGZhbHNlLFxuICAgICAgICBzdGF0dXM6ICdlcnJvcidcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnc2V0U3RhdGUnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwgYWN0aW9uLnN0YXRlKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tICcuL211dGF0aW9uJztcbmltcG9ydCB7IG1hdGNoTXV0YXRpb24sIG5vb3AgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFN1YnNjcmliYWJsZSB9IGZyb20gJy4vc3Vic2NyaWJhYmxlJzsgLy8gVFlQRVNcblxuLy8gQ0xBU1NcbmV4cG9ydCB2YXIgTXV0YXRpb25DYWNoZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1N1YnNjcmliYWJsZSkge1xuICBfaW5oZXJpdHNMb29zZShNdXRhdGlvbkNhY2hlLCBfU3Vic2NyaWJhYmxlKTtcblxuICBmdW5jdGlvbiBNdXRhdGlvbkNhY2hlKGNvbmZpZykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1N1YnNjcmliYWJsZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgX3RoaXMuY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIF90aGlzLm11dGF0aW9ucyA9IFtdO1xuICAgIF90aGlzLm11dGF0aW9uSWQgPSAwO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNdXRhdGlvbkNhY2hlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYnVpbGQgPSBmdW5jdGlvbiBidWlsZChjbGllbnQsIG9wdGlvbnMsIHN0YXRlKSB7XG4gICAgdmFyIG11dGF0aW9uID0gbmV3IE11dGF0aW9uKHtcbiAgICAgIG11dGF0aW9uQ2FjaGU6IHRoaXMsXG4gICAgICBtdXRhdGlvbklkOiArK3RoaXMubXV0YXRpb25JZCxcbiAgICAgIG9wdGlvbnM6IGNsaWVudC5kZWZhdWx0TXV0YXRpb25PcHRpb25zKG9wdGlvbnMpLFxuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IG9wdGlvbnMubXV0YXRpb25LZXkgPyBjbGllbnQuZ2V0TXV0YXRpb25EZWZhdWx0cyhvcHRpb25zLm11dGF0aW9uS2V5KSA6IHVuZGVmaW5lZFxuICAgIH0pO1xuICAgIHRoaXMuYWRkKG11dGF0aW9uKTtcbiAgICByZXR1cm4gbXV0YXRpb247XG4gIH07XG5cbiAgX3Byb3RvLmFkZCA9IGZ1bmN0aW9uIGFkZChtdXRhdGlvbikge1xuICAgIHRoaXMubXV0YXRpb25zLnB1c2gobXV0YXRpb24pO1xuICAgIHRoaXMubm90aWZ5KG11dGF0aW9uKTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKG11dGF0aW9uKSB7XG4gICAgdGhpcy5tdXRhdGlvbnMgPSB0aGlzLm11dGF0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4ICE9PSBtdXRhdGlvbjtcbiAgICB9KTtcbiAgICBtdXRhdGlvbi5jYW5jZWwoKTtcbiAgICB0aGlzLm5vdGlmeShtdXRhdGlvbik7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5tdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgICAgX3RoaXMyLnJlbW92ZShtdXRhdGlvbik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0QWxsID0gZnVuY3Rpb24gZ2V0QWxsKCkge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9ucztcbiAgfTtcblxuICBfcHJvdG8uZmluZCA9IGZ1bmN0aW9uIGZpbmQoZmlsdGVycykge1xuICAgIGlmICh0eXBlb2YgZmlsdGVycy5leGFjdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGZpbHRlcnMuZXhhY3QgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm11dGF0aW9ucy5maW5kKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgICAgcmV0dXJuIG1hdGNoTXV0YXRpb24oZmlsdGVycywgbXV0YXRpb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5maW5kQWxsID0gZnVuY3Rpb24gZmluZEFsbChmaWx0ZXJzKSB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25zLmZpbHRlcihmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgIHJldHVybiBtYXRjaE11dGF0aW9uKGZpbHRlcnMsIG11dGF0aW9uKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5KG11dGF0aW9uKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIobXV0YXRpb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRm9jdXMgPSBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgIHRoaXMucmVzdW1lUGF1c2VkTXV0YXRpb25zKCk7XG4gIH07XG5cbiAgX3Byb3RvLm9uT25saW5lID0gZnVuY3Rpb24gb25PbmxpbmUoKSB7XG4gICAgdGhpcy5yZXN1bWVQYXVzZWRNdXRhdGlvbnMoKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzdW1lUGF1c2VkTXV0YXRpb25zID0gZnVuY3Rpb24gcmVzdW1lUGF1c2VkTXV0YXRpb25zKCkge1xuICAgIHZhciBwYXVzZWRNdXRhdGlvbnMgPSB0aGlzLm11dGF0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4LnN0YXRlLmlzUGF1c2VkO1xuICAgIH0pO1xuICAgIHJldHVybiBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBwYXVzZWRNdXRhdGlvbnMucmVkdWNlKGZ1bmN0aW9uIChwcm9taXNlLCBtdXRhdGlvbikge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gbXV0YXRpb24uY29udGludWUoKS5jYXRjaChub29wKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIE11dGF0aW9uQ2FjaGU7XG59KFN1YnNjcmliYWJsZSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCB7IGdldERlZmF1bHRTdGF0ZSB9IGZyb20gJy4vbXV0YXRpb24nO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4vbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyBTdWJzY3JpYmFibGUgfSBmcm9tICcuL3N1YnNjcmliYWJsZSc7XG4vLyBDTEFTU1xuZXhwb3J0IHZhciBNdXRhdGlvbk9ic2VydmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU3Vic2NyaWJhYmxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKE11dGF0aW9uT2JzZXJ2ZXIsIF9TdWJzY3JpYmFibGUpO1xuXG4gIGZ1bmN0aW9uIE11dGF0aW9uT2JzZXJ2ZXIoY2xpZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfU3Vic2NyaWJhYmxlLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICBfdGhpcy5jbGllbnQgPSBjbGllbnQ7XG5cbiAgICBfdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgX3RoaXMuYmluZE1ldGhvZHMoKTtcblxuICAgIF90aGlzLnVwZGF0ZVJlc3VsdCgpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE11dGF0aW9uT2JzZXJ2ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5iaW5kTWV0aG9kcyA9IGZ1bmN0aW9uIGJpbmRNZXRob2RzKCkge1xuICAgIHRoaXMubXV0YXRlID0gdGhpcy5tdXRhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0ID0gdGhpcy5yZXNldC5iaW5kKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5zZXRPcHRpb25zID0gZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5jbGllbnQuZGVmYXVsdE11dGF0aW9uT3B0aW9ucyhvcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8ub25VbnN1YnNjcmliZSA9IGZ1bmN0aW9uIG9uVW5zdWJzY3JpYmUoKSB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgIHZhciBfdGhpcyRjdXJyZW50TXV0YXRpb247XG5cbiAgICAgIChfdGhpcyRjdXJyZW50TXV0YXRpb24gPSB0aGlzLmN1cnJlbnRNdXRhdGlvbikgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJGN1cnJlbnRNdXRhdGlvbi5yZW1vdmVPYnNlcnZlcih0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uTXV0YXRpb25VcGRhdGUgPSBmdW5jdGlvbiBvbk11dGF0aW9uVXBkYXRlKGFjdGlvbikge1xuICAgIHRoaXMudXBkYXRlUmVzdWx0KCk7IC8vIERldGVybWluZSB3aGljaCBjYWxsYmFja3MgdG8gdHJpZ2dlclxuXG4gICAgdmFyIG5vdGlmeU9wdGlvbnMgPSB7XG4gICAgICBsaXN0ZW5lcnM6IHRydWVcbiAgICB9O1xuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnc3VjY2VzcycpIHtcbiAgICAgIG5vdGlmeU9wdGlvbnMub25TdWNjZXNzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICBub3RpZnlPcHRpb25zLm9uRXJyb3IgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMubm90aWZ5KG5vdGlmeU9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5nZXRDdXJyZW50UmVzdWx0ID0gZnVuY3Rpb24gZ2V0Q3VycmVudFJlc3VsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHRoaXMuY3VycmVudE11dGF0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudXBkYXRlUmVzdWx0KCk7XG4gICAgdGhpcy5ub3RpZnkoe1xuICAgICAgbGlzdGVuZXJzOiB0cnVlXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm11dGF0ZSA9IGZ1bmN0aW9uIG11dGF0ZSh2YXJpYWJsZXMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm11dGF0ZU9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgaWYgKHRoaXMuY3VycmVudE11dGF0aW9uKSB7XG4gICAgICB0aGlzLmN1cnJlbnRNdXRhdGlvbi5yZW1vdmVPYnNlcnZlcih0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRNdXRhdGlvbiA9IHRoaXMuY2xpZW50LmdldE11dGF0aW9uQ2FjaGUoKS5idWlsZCh0aGlzLmNsaWVudCwgX2V4dGVuZHMoe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgdmFyaWFibGVzOiB0eXBlb2YgdmFyaWFibGVzICE9PSAndW5kZWZpbmVkJyA/IHZhcmlhYmxlcyA6IHRoaXMub3B0aW9ucy52YXJpYWJsZXNcbiAgICB9KSk7XG4gICAgdGhpcy5jdXJyZW50TXV0YXRpb24uYWRkT2JzZXJ2ZXIodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE11dGF0aW9uLmV4ZWN1dGUoKTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlUmVzdWx0ID0gZnVuY3Rpb24gdXBkYXRlUmVzdWx0KCkge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuY3VycmVudE11dGF0aW9uID8gdGhpcy5jdXJyZW50TXV0YXRpb24uc3RhdGUgOiBnZXREZWZhdWx0U3RhdGUoKTtcbiAgICB0aGlzLmN1cnJlbnRSZXN1bHQgPSBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgIGlzTG9hZGluZzogc3RhdGUuc3RhdHVzID09PSAnbG9hZGluZycsXG4gICAgICBpc1N1Y2Nlc3M6IHN0YXRlLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnLFxuICAgICAgaXNFcnJvcjogc3RhdGUuc3RhdHVzID09PSAnZXJyb3InLFxuICAgICAgaXNJZGxlOiBzdGF0ZS5zdGF0dXMgPT09ICdpZGxlJyxcbiAgICAgIG11dGF0ZTogdGhpcy5tdXRhdGUsXG4gICAgICByZXNldDogdGhpcy5yZXNldFxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkob3B0aW9ucykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBGaXJzdCB0cmlnZ2VyIHRoZSBtdXRhdGUgY2FsbGJhY2tzXG4gICAgICBpZiAoX3RoaXMyLm11dGF0ZU9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMub25TdWNjZXNzKSB7XG4gICAgICAgICAgX3RoaXMyLm11dGF0ZU9wdGlvbnMub25TdWNjZXNzID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczIubXV0YXRlT3B0aW9ucy5vblN1Y2Nlc3MoX3RoaXMyLmN1cnJlbnRSZXN1bHQuZGF0YSwgX3RoaXMyLmN1cnJlbnRSZXN1bHQudmFyaWFibGVzLCBfdGhpczIuY3VycmVudFJlc3VsdC5jb250ZXh0KTtcbiAgICAgICAgICBfdGhpczIubXV0YXRlT3B0aW9ucy5vblNldHRsZWQgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzMi5tdXRhdGVPcHRpb25zLm9uU2V0dGxlZChfdGhpczIuY3VycmVudFJlc3VsdC5kYXRhLCBudWxsLCBfdGhpczIuY3VycmVudFJlc3VsdC52YXJpYWJsZXMsIF90aGlzMi5jdXJyZW50UmVzdWx0LmNvbnRleHQpO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMub25FcnJvcikge1xuICAgICAgICAgIF90aGlzMi5tdXRhdGVPcHRpb25zLm9uRXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzMi5tdXRhdGVPcHRpb25zLm9uRXJyb3IoX3RoaXMyLmN1cnJlbnRSZXN1bHQuZXJyb3IsIF90aGlzMi5jdXJyZW50UmVzdWx0LnZhcmlhYmxlcywgX3RoaXMyLmN1cnJlbnRSZXN1bHQuY29udGV4dCk7XG4gICAgICAgICAgX3RoaXMyLm11dGF0ZU9wdGlvbnMub25TZXR0bGVkID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczIubXV0YXRlT3B0aW9ucy5vblNldHRsZWQodW5kZWZpbmVkLCBfdGhpczIuY3VycmVudFJlc3VsdC5lcnJvciwgX3RoaXMyLmN1cnJlbnRSZXN1bHQudmFyaWFibGVzLCBfdGhpczIuY3VycmVudFJlc3VsdC5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBUaGVuIHRyaWdnZXIgdGhlIGxpc3RlbmVyc1xuXG5cbiAgICAgIGlmIChvcHRpb25zLmxpc3RlbmVycykge1xuICAgICAgICBfdGhpczIubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGlzdGVuZXIoX3RoaXMyLmN1cnJlbnRSZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gTXV0YXRpb25PYnNlcnZlcjtcbn0oU3Vic2NyaWJhYmxlKTsiLCJpbXBvcnQgeyBzY2hlZHVsZU1pY3JvdGFzayB9IGZyb20gJy4vdXRpbHMnOyAvLyBUWVBFU1xuXG4vLyBDTEFTU1xudmFyIE5vdGlmeU1hbmFnZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOb3RpZnlNYW5hZ2VyKCkge1xuICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IDA7XG5cbiAgICB0aGlzLm5vdGlmeUZuID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH07XG5cbiAgICB0aGlzLmJhdGNoTm90aWZ5Rm4gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBOb3RpZnlNYW5hZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYmF0Y2ggPSBmdW5jdGlvbiBiYXRjaChjYWxsYmFjaykge1xuICAgIHRoaXMudHJhbnNhY3Rpb25zKys7XG4gICAgdmFyIHJlc3VsdCA9IGNhbGxiYWNrKCk7XG4gICAgdGhpcy50cmFuc2FjdGlvbnMtLTtcblxuICAgIGlmICghdGhpcy50cmFuc2FjdGlvbnMpIHtcbiAgICAgIHRoaXMuZmx1c2goKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by5zY2hlZHVsZSA9IGZ1bmN0aW9uIHNjaGVkdWxlKGNhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0aGlzLnRyYW5zYWN0aW9ucykge1xuICAgICAgdGhpcy5xdWV1ZS5wdXNoKGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NoZWR1bGVNaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5ub3RpZnlGbihjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEFsbCBjYWxscyB0byB0aGUgd3JhcHBlZCBmdW5jdGlvbiB3aWxsIGJlIGJhdGNoZWQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmJhdGNoQ2FsbHMgPSBmdW5jdGlvbiBiYXRjaENhbGxzKGNhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIF90aGlzMi5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIHF1ZXVlID0gdGhpcy5xdWV1ZTtcbiAgICB0aGlzLnF1ZXVlID0gW107XG5cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICBzY2hlZHVsZU1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5iYXRjaE5vdGlmeUZuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBxdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgX3RoaXMzLm5vdGlmeUZuKGNhbGxiYWNrKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgYSBjdXN0b20gbm90aWZ5IGZ1bmN0aW9uLlxuICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGZvciBleGFtcGxlIHdyYXAgbm90aWZpY2F0aW9ucyB3aXRoIGBSZWFjdC5hY3RgIHdoaWxlIHJ1bm5pbmcgdGVzdHMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNldE5vdGlmeUZ1bmN0aW9uID0gZnVuY3Rpb24gc2V0Tm90aWZ5RnVuY3Rpb24oZm4pIHtcbiAgICB0aGlzLm5vdGlmeUZuID0gZm47XG4gIH1cbiAgLyoqXG4gICAqIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgYSBjdXN0b20gZnVuY3Rpb24gdG8gYmF0Y2ggbm90aWZpY2F0aW9ucyB0b2dldGhlciBpbnRvIGEgc2luZ2xlIHRpY2suXG4gICAqIEJ5IGRlZmF1bHQgUmVhY3QgUXVlcnkgd2lsbCB1c2UgdGhlIGJhdGNoIGZ1bmN0aW9uIHByb3ZpZGVkIGJ5IFJlYWN0RE9NIG9yIFJlYWN0IE5hdGl2ZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0QmF0Y2hOb3RpZnlGdW5jdGlvbiA9IGZ1bmN0aW9uIHNldEJhdGNoTm90aWZ5RnVuY3Rpb24oZm4pIHtcbiAgICB0aGlzLmJhdGNoTm90aWZ5Rm4gPSBmbjtcbiAgfTtcblxuICByZXR1cm4gTm90aWZ5TWFuYWdlcjtcbn0oKTsgLy8gU0lOR0xFVE9OXG5cblxuZXhwb3J0IHZhciBub3RpZnlNYW5hZ2VyID0gbmV3IE5vdGlmeU1hbmFnZXIoKTsiLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCB7IFN1YnNjcmliYWJsZSB9IGZyb20gJy4vc3Vic2NyaWJhYmxlJztcbmltcG9ydCB7IGlzU2VydmVyIH0gZnJvbSAnLi91dGlscyc7XG5cbnZhciBPbmxpbmVNYW5hZ2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU3Vic2NyaWJhYmxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKE9ubGluZU1hbmFnZXIsIF9TdWJzY3JpYmFibGUpO1xuXG4gIGZ1bmN0aW9uIE9ubGluZU1hbmFnZXIoKSB7XG4gICAgcmV0dXJuIF9TdWJzY3JpYmFibGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE9ubGluZU1hbmFnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5vblN1YnNjcmliZSA9IGZ1bmN0aW9uIG9uU3Vic2NyaWJlKCkge1xuICAgIGlmICghdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLnNldERlZmF1bHRFdmVudExpc3RlbmVyKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZXRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gc2V0RXZlbnRMaXN0ZW5lcihzZXR1cCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBzZXR1cChmdW5jdGlvbiAob25saW5lKSB7XG4gICAgICBpZiAodHlwZW9mIG9ubGluZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIF90aGlzLnNldE9ubGluZShvbmxpbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMub25PbmxpbmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uc2V0T25saW5lID0gZnVuY3Rpb24gc2V0T25saW5lKG9ubGluZSkge1xuICAgIHRoaXMub25saW5lID0gb25saW5lO1xuXG4gICAgaWYgKG9ubGluZSkge1xuICAgICAgdGhpcy5vbk9ubGluZSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25PbmxpbmUgPSBmdW5jdGlvbiBvbk9ubGluZSgpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uaXNPbmxpbmUgPSBmdW5jdGlvbiBpc09ubGluZSgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMub25saW5lID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiB0aGlzLm9ubGluZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIG5hdmlnYXRvci5vbkxpbmUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLm9uTGluZTtcbiAgfTtcblxuICBfcHJvdG8uc2V0RGVmYXVsdEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBzZXREZWZhdWx0RXZlbnRMaXN0ZW5lcigpIHtcbiAgICB2YXIgX3dpbmRvdztcblxuICAgIGlmICghaXNTZXJ2ZXIgJiYgKChfd2luZG93ID0gd2luZG93KSA9PSBudWxsID8gdm9pZCAwIDogX3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKSkge1xuICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVyKGZ1bmN0aW9uIChvbk9ubGluZSkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgICAgICByZXR1cm4gb25PbmxpbmUoKTtcbiAgICAgICAgfTsgLy8gTGlzdGVuIHRvIG9ubGluZVxuXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29ubGluZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBCZSBzdXJlIHRvIHVuc3Vic2NyaWJlIGlmIGEgbmV3IGhhbmRsZXIgaXMgc2V0XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29ubGluZScsIGxpc3RlbmVyKTtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gT25saW5lTWFuYWdlcjtcbn0oU3Vic2NyaWJhYmxlKTtcblxuZXhwb3J0IHZhciBvbmxpbmVNYW5hZ2VyID0gbmV3IE9ubGluZU1hbmFnZXIoKTsiLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2UsIHJlcGxhY2VBdCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4vbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyBRdWVyeU9ic2VydmVyIH0gZnJvbSAnLi9xdWVyeU9ic2VydmVyJztcbmltcG9ydCB7IFN1YnNjcmliYWJsZSB9IGZyb20gJy4vc3Vic2NyaWJhYmxlJztcbmV4cG9ydCB2YXIgUXVlcmllc09ic2VydmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU3Vic2NyaWJhYmxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKFF1ZXJpZXNPYnNlcnZlciwgX1N1YnNjcmliYWJsZSk7XG5cbiAgZnVuY3Rpb24gUXVlcmllc09ic2VydmVyKGNsaWVudCwgcXVlcmllcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1N1YnNjcmliYWJsZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgX3RoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIF90aGlzLnF1ZXJpZXMgPSBbXTtcbiAgICBfdGhpcy5yZXN1bHQgPSBbXTtcbiAgICBfdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICBfdGhpcy5vYnNlcnZlcnNNYXAgPSB7fTtcblxuICAgIGlmIChxdWVyaWVzKSB7XG4gICAgICBfdGhpcy5zZXRRdWVyaWVzKHF1ZXJpZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBRdWVyaWVzT2JzZXJ2ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5vblN1YnNjcmliZSA9IGZ1bmN0aW9uIG9uU3Vic2NyaWJlKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMubGlzdGVuZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgb2JzZXJ2ZXIuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBfdGhpczIub25VcGRhdGUob2JzZXJ2ZXIsIHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vblVuc3Vic2NyaWJlID0gZnVuY3Rpb24gb25VbnN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICBvYnNlcnZlci5kZXN0cm95KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnNldFF1ZXJpZXMgPSBmdW5jdGlvbiBzZXRRdWVyaWVzKHF1ZXJpZXMsIG5vdGlmeU9wdGlvbnMpIHtcbiAgICB0aGlzLnF1ZXJpZXMgPSBxdWVyaWVzO1xuICAgIHRoaXMudXBkYXRlT2JzZXJ2ZXJzKG5vdGlmeU9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5nZXRDdXJyZW50UmVzdWx0ID0gZnVuY3Rpb24gZ2V0Q3VycmVudFJlc3VsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvLmdldE9wdGltaXN0aWNSZXN1bHQgPSBmdW5jdGlvbiBnZXRPcHRpbWlzdGljUmVzdWx0KHF1ZXJpZXMpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHJldHVybiBxdWVyaWVzLm1hcChmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgdmFyIGRlZmF1bHRlZE9wdGlvbnMgPSBfdGhpczMuY2xpZW50LmRlZmF1bHRRdWVyeU9ic2VydmVyT3B0aW9ucyhvcHRpb25zKTtcblxuICAgICAgcmV0dXJuIF90aGlzMy5nZXRPYnNlcnZlcihkZWZhdWx0ZWRPcHRpb25zKS5nZXRPcHRpbWlzdGljUmVzdWx0KGRlZmF1bHRlZE9wdGlvbnMpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5nZXRPYnNlcnZlciA9IGZ1bmN0aW9uIGdldE9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IHRoaXMuY2xpZW50LmRlZmF1bHRRdWVyeU9ic2VydmVyT3B0aW9ucyhvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcy5vYnNlcnZlcnNNYXBbZGVmYXVsdGVkT3B0aW9ucy5xdWVyeUhhc2hdIHx8IG5ldyBRdWVyeU9ic2VydmVyKHRoaXMuY2xpZW50LCBkZWZhdWx0ZWRPcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlT2JzZXJ2ZXJzID0gZnVuY3Rpb24gdXBkYXRlT2JzZXJ2ZXJzKG5vdGlmeU9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGhhc0luZGV4Q2hhbmdlID0gZmFsc2U7XG4gICAgICB2YXIgcHJldk9ic2VydmVycyA9IF90aGlzNC5vYnNlcnZlcnM7XG4gICAgICB2YXIgcHJldk9iZXJ2ZXJzTWFwID0gX3RoaXM0Lm9ic2VydmVyc01hcDtcbiAgICAgIHZhciBuZXdSZXN1bHQgPSBbXTtcbiAgICAgIHZhciBuZXdPYnNlcnZlcnMgPSBbXTtcbiAgICAgIHZhciBuZXdPYnNlcnZlcnNNYXAgPSB7fTtcblxuICAgICAgX3RoaXM0LnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAob3B0aW9ucywgaSkge1xuICAgICAgICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IF90aGlzNC5jbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgICAgIHZhciBxdWVyeUhhc2ggPSBkZWZhdWx0ZWRPcHRpb25zLnF1ZXJ5SGFzaDtcblxuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBfdGhpczQuZ2V0T2JzZXJ2ZXIoZGVmYXVsdGVkT3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKHByZXZPYmVydmVyc01hcFtxdWVyeUhhc2hdKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIuc2V0T3B0aW9ucyhkZWZhdWx0ZWRPcHRpb25zLCBub3RpZnlPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvYnNlcnZlciAhPT0gcHJldk9ic2VydmVyc1tpXSkge1xuICAgICAgICAgIGhhc0luZGV4Q2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld09ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICAgICAgbmV3UmVzdWx0LnB1c2gob2JzZXJ2ZXIuZ2V0Q3VycmVudFJlc3VsdCgpKTtcbiAgICAgICAgbmV3T2JzZXJ2ZXJzTWFwW3F1ZXJ5SGFzaF0gPSBvYnNlcnZlcjtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocHJldk9ic2VydmVycy5sZW5ndGggPT09IG5ld09ic2VydmVycy5sZW5ndGggJiYgIWhhc0luZGV4Q2hhbmdlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXM0Lm9ic2VydmVycyA9IG5ld09ic2VydmVycztcbiAgICAgIF90aGlzNC5vYnNlcnZlcnNNYXAgPSBuZXdPYnNlcnZlcnNNYXA7XG4gICAgICBfdGhpczQucmVzdWx0ID0gbmV3UmVzdWx0O1xuXG4gICAgICBpZiAoIV90aGlzNC5oYXNMaXN0ZW5lcnMoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGRpZmZlcmVuY2UocHJldk9ic2VydmVycywgbmV3T2JzZXJ2ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5kZXN0cm95KCk7XG4gICAgICB9KTtcbiAgICAgIGRpZmZlcmVuY2UobmV3T2JzZXJ2ZXJzLCBwcmV2T2JzZXJ2ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIF90aGlzNC5vblVwZGF0ZShvYnNlcnZlciwgcmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgX3RoaXM0Lm5vdGlmeSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKG9ic2VydmVyLCByZXN1bHQpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLm9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMucmVzdWx0ID0gcmVwbGFjZUF0KHRoaXMucmVzdWx0LCBpbmRleCwgcmVzdWx0KTtcbiAgICAgIHRoaXMubm90aWZ5KCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzNS5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIoX3RoaXM1LnJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gUXVlcmllc09ic2VydmVyO1xufShTdWJzY3JpYmFibGUpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgZnVuY3Rpb25hbFVwZGF0ZSwgaXNWYWxpZFRpbWVvdXQsIG5vb3AsIHJlcGxhY2VFcXVhbERlZXAsIHRpbWVVbnRpbFN0YWxlLCBlbnN1cmVRdWVyeUtleUFycmF5IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IGdldExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7IFJldHJ5ZXIsIGlzQ2FuY2VsbGVkRXJyb3IgfSBmcm9tICcuL3JldHJ5ZXInOyAvLyBUWVBFU1xuXG4vLyBDTEFTU1xuZXhwb3J0IHZhciBRdWVyeSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFF1ZXJ5KGNvbmZpZykge1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSBjb25maWcuZGVmYXVsdE9wdGlvbnM7XG4gICAgdGhpcy5zZXRPcHRpb25zKGNvbmZpZy5vcHRpb25zKTtcbiAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgIHRoaXMuY2FjaGUgPSBjb25maWcuY2FjaGU7XG4gICAgdGhpcy5xdWVyeUtleSA9IGNvbmZpZy5xdWVyeUtleTtcbiAgICB0aGlzLnF1ZXJ5SGFzaCA9IGNvbmZpZy5xdWVyeUhhc2g7XG4gICAgdGhpcy5pbml0aWFsU3RhdGUgPSBjb25maWcuc3RhdGUgfHwgdGhpcy5nZXREZWZhdWx0U3RhdGUodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGU7XG4gICAgdGhpcy5zY2hlZHVsZUdjKCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUXVlcnkucHJvdG90eXBlO1xuXG4gIF9wcm90by5zZXRPcHRpb25zID0gZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzJG9wdGlvbnMkY2FjaGVUaTtcblxuICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTsgLy8gRGVmYXVsdCB0byA1IG1pbnV0ZXMgaWYgbm90IGNhY2hlIHRpbWUgaXMgc2V0XG5cbiAgICB0aGlzLmNhY2hlVGltZSA9IE1hdGgubWF4KHRoaXMuY2FjaGVUaW1lIHx8IDAsIChfdGhpcyRvcHRpb25zJGNhY2hlVGkgPSB0aGlzLm9wdGlvbnMuY2FjaGVUaW1lKSAhPSBudWxsID8gX3RoaXMkb3B0aW9ucyRjYWNoZVRpIDogNSAqIDYwICogMTAwMCk7XG4gIH07XG5cbiAgX3Byb3RvLnNldERlZmF1bHRPcHRpb25zID0gZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSBvcHRpb25zO1xuICB9O1xuXG4gIF9wcm90by5zY2hlZHVsZUdjID0gZnVuY3Rpb24gc2NoZWR1bGVHYygpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5jbGVhckdjVGltZW91dCgpO1xuXG4gICAgaWYgKGlzVmFsaWRUaW1lb3V0KHRoaXMuY2FjaGVUaW1lKSkge1xuICAgICAgdGhpcy5nY1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMub3B0aW9uYWxSZW1vdmUoKTtcbiAgICAgIH0sIHRoaXMuY2FjaGVUaW1lKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyR2NUaW1lb3V0ID0gZnVuY3Rpb24gY2xlYXJHY1RpbWVvdXQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZ2NUaW1lb3V0KTtcbiAgICB0aGlzLmdjVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgfTtcblxuICBfcHJvdG8ub3B0aW9uYWxSZW1vdmUgPSBmdW5jdGlvbiBvcHRpb25hbFJlbW92ZSgpIHtcbiAgICBpZiAoIXRoaXMub2JzZXJ2ZXJzLmxlbmd0aCAmJiAhdGhpcy5zdGF0ZS5pc0ZldGNoaW5nKSB7XG4gICAgICB0aGlzLmNhY2hlLnJlbW92ZSh0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNldERhdGEgPSBmdW5jdGlvbiBzZXREYXRhKHVwZGF0ZXIsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMkb3B0aW9ucyRpc0RhdGFFLCBfdGhpcyRvcHRpb25zO1xuXG4gICAgdmFyIHByZXZEYXRhID0gdGhpcy5zdGF0ZS5kYXRhOyAvLyBHZXQgdGhlIG5ldyBkYXRhXG5cbiAgICB2YXIgZGF0YSA9IGZ1bmN0aW9uYWxVcGRhdGUodXBkYXRlciwgcHJldkRhdGEpOyAvLyBVc2UgcHJldiBkYXRhIGlmIGFuIGlzRGF0YUVxdWFsIGZ1bmN0aW9uIGlzIGRlZmluZWQgYW5kIHJldHVybnMgYHRydWVgXG5cbiAgICBpZiAoKF90aGlzJG9wdGlvbnMkaXNEYXRhRSA9IChfdGhpcyRvcHRpb25zID0gdGhpcy5vcHRpb25zKS5pc0RhdGFFcXVhbCkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJG9wdGlvbnMkaXNEYXRhRS5jYWxsKF90aGlzJG9wdGlvbnMsIHByZXZEYXRhLCBkYXRhKSkge1xuICAgICAgZGF0YSA9IHByZXZEYXRhO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnN0cnVjdHVyYWxTaGFyaW5nICE9PSBmYWxzZSkge1xuICAgICAgLy8gU3RydWN0dXJhbGx5IHNoYXJlIGRhdGEgYmV0d2VlbiBwcmV2IGFuZCBuZXcgZGF0YSBpZiBuZWVkZWRcbiAgICAgIGRhdGEgPSByZXBsYWNlRXF1YWxEZWVwKHByZXZEYXRhLCBkYXRhKTtcbiAgICB9IC8vIFNldCBkYXRhIGFuZCBtYXJrIGl0IGFzIGNhY2hlZFxuXG5cbiAgICB0aGlzLmRpc3BhdGNoKHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICBkYXRhVXBkYXRlZEF0OiBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnVwZGF0ZWRBdFxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIF9wcm90by5zZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlLCBzZXRTdGF0ZU9wdGlvbnMpIHtcbiAgICB0aGlzLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdzZXRTdGF0ZScsXG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBzZXRTdGF0ZU9wdGlvbnM6IHNldFN0YXRlT3B0aW9uc1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwob3B0aW9ucykge1xuICAgIHZhciBfdGhpcyRyZXRyeWVyO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG4gICAgKF90aGlzJHJldHJ5ZXIgPSB0aGlzLnJldHJ5ZXIpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRyZXRyeWVyLmNhbmNlbChvcHRpb25zKTtcbiAgICByZXR1cm4gcHJvbWlzZSA/IHByb21pc2UudGhlbihub29wKS5jYXRjaChub29wKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICB9O1xuXG4gIF9wcm90by5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB0aGlzLmNsZWFyR2NUaW1lb3V0KCk7XG4gICAgdGhpcy5jYW5jZWwoe1xuICAgICAgc2lsZW50OiB0cnVlXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxTdGF0ZSk7XG4gIH07XG5cbiAgX3Byb3RvLmlzQWN0aXZlID0gZnVuY3Rpb24gaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXJzLnNvbWUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICByZXR1cm4gb2JzZXJ2ZXIub3B0aW9ucy5lbmFibGVkICE9PSBmYWxzZTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uaXNGZXRjaGluZyA9IGZ1bmN0aW9uIGlzRmV0Y2hpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNGZXRjaGluZztcbiAgfTtcblxuICBfcHJvdG8uaXNTdGFsZSA9IGZ1bmN0aW9uIGlzU3RhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNJbnZhbGlkYXRlZCB8fCAhdGhpcy5zdGF0ZS5kYXRhVXBkYXRlZEF0IHx8IHRoaXMub2JzZXJ2ZXJzLnNvbWUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICByZXR1cm4gb2JzZXJ2ZXIuZ2V0Q3VycmVudFJlc3VsdCgpLmlzU3RhbGU7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmlzU3RhbGVCeVRpbWUgPSBmdW5jdGlvbiBpc1N0YWxlQnlUaW1lKHN0YWxlVGltZSkge1xuICAgIGlmIChzdGFsZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgc3RhbGVUaW1lID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pc0ludmFsaWRhdGVkIHx8ICF0aGlzLnN0YXRlLmRhdGFVcGRhdGVkQXQgfHwgIXRpbWVVbnRpbFN0YWxlKHRoaXMuc3RhdGUuZGF0YVVwZGF0ZWRBdCwgc3RhbGVUaW1lKTtcbiAgfTtcblxuICBfcHJvdG8ub25Gb2N1cyA9IGZ1bmN0aW9uIG9uRm9jdXMoKSB7XG4gICAgdmFyIF90aGlzJHJldHJ5ZXIyO1xuXG4gICAgdmFyIG9ic2VydmVyID0gdGhpcy5vYnNlcnZlcnMuZmluZChmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHguc2hvdWxkRmV0Y2hPbldpbmRvd0ZvY3VzKCk7XG4gICAgfSk7XG5cbiAgICBpZiAob2JzZXJ2ZXIpIHtcbiAgICAgIG9ic2VydmVyLnJlZmV0Y2goKTtcbiAgICB9IC8vIENvbnRpbnVlIGZldGNoIGlmIGN1cnJlbnRseSBwYXVzZWRcblxuXG4gICAgKF90aGlzJHJldHJ5ZXIyID0gdGhpcy5yZXRyeWVyKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkcmV0cnllcjIuY29udGludWUoKTtcbiAgfTtcblxuICBfcHJvdG8ub25PbmxpbmUgPSBmdW5jdGlvbiBvbk9ubGluZSgpIHtcbiAgICB2YXIgX3RoaXMkcmV0cnllcjM7XG5cbiAgICB2YXIgb2JzZXJ2ZXIgPSB0aGlzLm9ic2VydmVycy5maW5kKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geC5zaG91bGRGZXRjaE9uUmVjb25uZWN0KCk7XG4gICAgfSk7XG5cbiAgICBpZiAob2JzZXJ2ZXIpIHtcbiAgICAgIG9ic2VydmVyLnJlZmV0Y2goKTtcbiAgICB9IC8vIENvbnRpbnVlIGZldGNoIGlmIGN1cnJlbnRseSBwYXVzZWRcblxuXG4gICAgKF90aGlzJHJldHJ5ZXIzID0gdGhpcy5yZXRyeWVyKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkcmV0cnllcjMuY29udGludWUoKTtcbiAgfTtcblxuICBfcHJvdG8uYWRkT2JzZXJ2ZXIgPSBmdW5jdGlvbiBhZGRPYnNlcnZlcihvYnNlcnZlcikge1xuICAgIGlmICh0aGlzLm9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpOyAvLyBTdG9wIHRoZSBxdWVyeSBmcm9tIGJlaW5nIGdhcmJhZ2UgY29sbGVjdGVkXG5cbiAgICAgIHRoaXMuY2xlYXJHY1RpbWVvdXQoKTtcbiAgICAgIHRoaXMuY2FjaGUubm90aWZ5KHtcbiAgICAgICAgdHlwZTogJ29ic2VydmVyQWRkZWQnLFxuICAgICAgICBxdWVyeTogdGhpcyxcbiAgICAgICAgb2JzZXJ2ZXI6IG9ic2VydmVyXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gcmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2ZXIpIHtcbiAgICBpZiAodGhpcy5vYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcikgIT09IC0xKSB7XG4gICAgICB0aGlzLm9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geCAhPT0gb2JzZXJ2ZXI7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCF0aGlzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgLy8gSWYgdGhlIHRyYW5zcG9ydCBsYXllciBkb2VzIG5vdCBzdXBwb3J0IGNhbmNlbGxhdGlvblxuICAgICAgICAvLyB3ZSdsbCBsZXQgdGhlIHF1ZXJ5IGNvbnRpbnVlIHNvIHRoZSByZXN1bHQgY2FuIGJlIGNhY2hlZFxuICAgICAgICBpZiAodGhpcy5yZXRyeWVyKSB7XG4gICAgICAgICAgaWYgKHRoaXMucmV0cnllci5pc1RyYW5zcG9ydENhbmNlbGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMucmV0cnllci5jYW5jZWwoe1xuICAgICAgICAgICAgICByZXZlcnQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJldHJ5ZXIuY2FuY2VsUmV0cnkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jYWNoZVRpbWUpIHtcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlR2MoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNhY2hlLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNhY2hlLm5vdGlmeSh7XG4gICAgICAgIHR5cGU6ICdvYnNlcnZlclJlbW92ZWQnLFxuICAgICAgICBxdWVyeTogdGhpcyxcbiAgICAgICAgb2JzZXJ2ZXI6IG9ic2VydmVyXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldE9ic2VydmVyc0NvdW50ID0gZnVuY3Rpb24gZ2V0T2JzZXJ2ZXJzQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aDtcbiAgfTtcblxuICBfcHJvdG8uaW52YWxpZGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRhdGUoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzSW52YWxpZGF0ZWQpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnaW52YWxpZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZmV0Y2ggPSBmdW5jdGlvbiBmZXRjaChvcHRpb25zLCBmZXRjaE9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcyxcbiAgICAgICAgX3RoaXMkb3B0aW9ucyRiZWhhdmlvLFxuICAgICAgICBfY29udGV4dCRmZXRjaE9wdGlvbnM7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5pc0ZldGNoaW5nKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhVXBkYXRlZEF0ICYmIChmZXRjaE9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IGZldGNoT3B0aW9ucy5jYW5jZWxSZWZldGNoKSkge1xuICAgICAgICAvLyBTaWxlbnRseSBjYW5jZWwgY3VycmVudCBmZXRjaCBpZiB0aGUgdXNlciB3YW50cyB0byBjYW5jZWwgcmVmZXRjaGVzXG4gICAgICAgIHRoaXMuY2FuY2VsKHtcbiAgICAgICAgICBzaWxlbnQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvbWlzZSkge1xuICAgICAgICAvLyBSZXR1cm4gY3VycmVudCBwcm9taXNlIGlmIHdlIGFyZSBhbHJlYWR5IGZldGNoaW5nXG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2U7XG4gICAgICB9XG4gICAgfSAvLyBVcGRhdGUgY29uZmlnIGlmIHBhc3NlZCwgb3RoZXJ3aXNlIHRoZSBjb25maWcgZnJvbSB0aGUgbGFzdCBleGVjdXRpb24gaXMgdXNlZFxuXG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIH0gLy8gVXNlIHRoZSBvcHRpb25zIGZyb20gdGhlIGZpcnN0IG9ic2VydmVyIHdpdGggYSBxdWVyeSBmdW5jdGlvbiBpZiBubyBmdW5jdGlvbiBpcyBmb3VuZC5cbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gd2hlbiB0aGUgcXVlcnkgaXMgaHlkcmF0ZWQgb3IgY3JlYXRlZCB3aXRoIHNldFF1ZXJ5RGF0YS5cblxuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMucXVlcnlGbikge1xuICAgICAgdmFyIG9ic2VydmVyID0gdGhpcy5vYnNlcnZlcnMuZmluZChmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geC5vcHRpb25zLnF1ZXJ5Rm47XG4gICAgICB9KTtcblxuICAgICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhvYnNlcnZlci5vcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcXVlcnlLZXkgPSBlbnN1cmVRdWVyeUtleUFycmF5KHRoaXMucXVlcnlLZXkpOyAvLyBDcmVhdGUgcXVlcnkgZnVuY3Rpb24gY29udGV4dFxuXG4gICAgdmFyIHF1ZXJ5Rm5Db250ZXh0ID0ge1xuICAgICAgcXVlcnlLZXk6IHF1ZXJ5S2V5LFxuICAgICAgcGFnZVBhcmFtOiB1bmRlZmluZWRcbiAgICB9OyAvLyBDcmVhdGUgZmV0Y2ggZnVuY3Rpb25cblxuICAgIHZhciBmZXRjaEZuID0gZnVuY3Rpb24gZmV0Y2hGbigpIHtcbiAgICAgIHJldHVybiBfdGhpczIub3B0aW9ucy5xdWVyeUZuID8gX3RoaXMyLm9wdGlvbnMucXVlcnlGbihxdWVyeUZuQ29udGV4dCkgOiBQcm9taXNlLnJlamVjdCgnTWlzc2luZyBxdWVyeUZuJyk7XG4gICAgfTsgLy8gVHJpZ2dlciBiZWhhdmlvciBob29rXG5cblxuICAgIHZhciBjb250ZXh0ID0ge1xuICAgICAgZmV0Y2hPcHRpb25zOiBmZXRjaE9wdGlvbnMsXG4gICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICBxdWVyeUtleTogcXVlcnlLZXksXG4gICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgIGZldGNoRm46IGZldGNoRm5cbiAgICB9O1xuXG4gICAgaWYgKChfdGhpcyRvcHRpb25zJGJlaGF2aW8gPSB0aGlzLm9wdGlvbnMuYmVoYXZpb3IpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRvcHRpb25zJGJlaGF2aW8ub25GZXRjaCkge1xuICAgICAgdmFyIF90aGlzJG9wdGlvbnMkYmVoYXZpbzI7XG5cbiAgICAgIChfdGhpcyRvcHRpb25zJGJlaGF2aW8yID0gdGhpcy5vcHRpb25zLmJlaGF2aW9yKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkb3B0aW9ucyRiZWhhdmlvMi5vbkZldGNoKGNvbnRleHQpO1xuICAgIH0gLy8gU3RvcmUgc3RhdGUgaW4gY2FzZSB0aGUgY3VycmVudCBmZXRjaCBuZWVkcyB0byBiZSByZXZlcnRlZFxuXG5cbiAgICB0aGlzLnJldmVydFN0YXRlID0gdGhpcy5zdGF0ZTsgLy8gU2V0IHRvIGZldGNoaW5nIHN0YXRlIGlmIG5vdCBhbHJlYWR5IGluIGl0XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNGZXRjaGluZyB8fCB0aGlzLnN0YXRlLmZldGNoTWV0YSAhPT0gKChfY29udGV4dCRmZXRjaE9wdGlvbnMgPSBjb250ZXh0LmZldGNoT3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IF9jb250ZXh0JGZldGNoT3B0aW9ucy5tZXRhKSkge1xuICAgICAgdmFyIF9jb250ZXh0JGZldGNoT3B0aW9uczI7XG5cbiAgICAgIHRoaXMuZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnZmV0Y2gnLFxuICAgICAgICBtZXRhOiAoX2NvbnRleHQkZmV0Y2hPcHRpb25zMiA9IGNvbnRleHQuZmV0Y2hPcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogX2NvbnRleHQkZmV0Y2hPcHRpb25zMi5tZXRhXG4gICAgICB9KTtcbiAgICB9IC8vIFRyeSB0byBmZXRjaCB0aGUgZGF0YVxuXG5cbiAgICB0aGlzLnJldHJ5ZXIgPSBuZXcgUmV0cnllcih7XG4gICAgICBmbjogY29udGV4dC5mZXRjaEZuLFxuICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICBfdGhpczIuc2V0RGF0YShkYXRhKTsgLy8gTm90aWZ5IGNhY2hlIGNhbGxiYWNrXG5cblxuICAgICAgICBfdGhpczIuY2FjaGUuY29uZmlnLm9uU3VjY2VzcyA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMyLmNhY2hlLmNvbmZpZy5vblN1Y2Nlc3MoZGF0YSwgX3RoaXMyKTsgLy8gUmVtb3ZlIHF1ZXJ5IGFmdGVyIGZldGNoaW5nIGlmIGNhY2hlIHRpbWUgaXMgMFxuXG4gICAgICAgIGlmIChfdGhpczIuY2FjaGVUaW1lID09PSAwKSB7XG4gICAgICAgICAgX3RoaXMyLm9wdGlvbmFsUmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkVycm9yOiBmdW5jdGlvbiBvbkVycm9yKGVycm9yKSB7XG4gICAgICAgIC8vIE9wdGltaXN0aWNhbGx5IHVwZGF0ZSBzdGF0ZSBpZiBuZWVkZWRcbiAgICAgICAgaWYgKCEoaXNDYW5jZWxsZWRFcnJvcihlcnJvcikgJiYgZXJyb3Iuc2lsZW50KSkge1xuICAgICAgICAgIF90aGlzMi5kaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzQ2FuY2VsbGVkRXJyb3IoZXJyb3IpKSB7XG4gICAgICAgICAgLy8gTm90aWZ5IGNhY2hlIGNhbGxiYWNrXG4gICAgICAgICAgX3RoaXMyLmNhY2hlLmNvbmZpZy5vbkVycm9yID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczIuY2FjaGUuY29uZmlnLm9uRXJyb3IoZXJyb3IsIF90aGlzMik7IC8vIExvZyBlcnJvclxuXG4gICAgICAgICAgZ2V0TG9nZ2VyKCkuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9IC8vIFJlbW92ZSBxdWVyeSBhZnRlciBmZXRjaGluZyBpZiBjYWNoZSB0aW1lIGlzIDBcblxuXG4gICAgICAgIGlmIChfdGhpczIuY2FjaGVUaW1lID09PSAwKSB7XG4gICAgICAgICAgX3RoaXMyLm9wdGlvbmFsUmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkZhaWw6IGZ1bmN0aW9uIG9uRmFpbCgpIHtcbiAgICAgICAgX3RoaXMyLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnZmFpbGVkJ1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvblBhdXNlOiBmdW5jdGlvbiBvblBhdXNlKCkge1xuICAgICAgICBfdGhpczIuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdwYXVzZSdcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgb25Db250aW51ZTogZnVuY3Rpb24gb25Db250aW51ZSgpIHtcbiAgICAgICAgX3RoaXMyLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnY29udGludWUnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHJldHJ5OiBjb250ZXh0Lm9wdGlvbnMucmV0cnksXG4gICAgICByZXRyeURlbGF5OiBjb250ZXh0Lm9wdGlvbnMucmV0cnlEZWxheVxuICAgIH0pO1xuICAgIHRoaXMucHJvbWlzZSA9IHRoaXMucmV0cnllci5wcm9taXNlO1xuICAgIHJldHVybiB0aGlzLnByb21pc2U7XG4gIH07XG5cbiAgX3Byb3RvLmRpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLnN0YXRlID0gdGhpcy5yZWR1Y2VyKHRoaXMuc3RhdGUsIGFjdGlvbik7XG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMub2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLm9uUXVlcnlVcGRhdGUoYWN0aW9uKTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpczMuY2FjaGUubm90aWZ5KHtcbiAgICAgICAgcXVlcnk6IF90aGlzMyxcbiAgICAgICAgdHlwZTogJ3F1ZXJ5VXBkYXRlZCcsXG4gICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0RGVmYXVsdFN0YXRlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFN0YXRlKG9wdGlvbnMpIHtcbiAgICB2YXIgZGF0YSA9IHR5cGVvZiBvcHRpb25zLmluaXRpYWxEYXRhID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5pbml0aWFsRGF0YSgpIDogb3B0aW9ucy5pbml0aWFsRGF0YTtcbiAgICB2YXIgaGFzSW5pdGlhbERhdGEgPSB0eXBlb2Ygb3B0aW9ucy5pbml0aWFsRGF0YSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgdmFyIGluaXRpYWxEYXRhVXBkYXRlZEF0ID0gaGFzSW5pdGlhbERhdGEgPyB0eXBlb2Ygb3B0aW9ucy5pbml0aWFsRGF0YVVwZGF0ZWRBdCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMuaW5pdGlhbERhdGFVcGRhdGVkQXQoKSA6IG9wdGlvbnMuaW5pdGlhbERhdGFVcGRhdGVkQXQgOiAwO1xuICAgIHZhciBoYXNEYXRhID0gdHlwZW9mIGRhdGEgIT09ICd1bmRlZmluZWQnO1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgZGF0YVVwZGF0ZUNvdW50OiAwLFxuICAgICAgZGF0YVVwZGF0ZWRBdDogaGFzRGF0YSA/IGluaXRpYWxEYXRhVXBkYXRlZEF0ICE9IG51bGwgPyBpbml0aWFsRGF0YVVwZGF0ZWRBdCA6IERhdGUubm93KCkgOiAwLFxuICAgICAgZXJyb3I6IG51bGwsXG4gICAgICBlcnJvclVwZGF0ZUNvdW50OiAwLFxuICAgICAgZXJyb3JVcGRhdGVkQXQ6IDAsXG4gICAgICBmZXRjaEZhaWx1cmVDb3VudDogMCxcbiAgICAgIGZldGNoTWV0YTogbnVsbCxcbiAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgaXNJbnZhbGlkYXRlZDogZmFsc2UsXG4gICAgICBpc1BhdXNlZDogZmFsc2UsXG4gICAgICBzdGF0dXM6IGhhc0RhdGEgPyAnc3VjY2VzcycgOiAnaWRsZSdcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5yZWR1Y2VyID0gZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgdmFyIF9hY3Rpb24kbWV0YSwgX2FjdGlvbiRkYXRhVXBkYXRlZEF0O1xuXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnZmFpbGVkJzpcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGZldGNoRmFpbHVyZUNvdW50OiBzdGF0ZS5mZXRjaEZhaWx1cmVDb3VudCArIDFcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ3BhdXNlJzpcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzUGF1c2VkOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjb250aW51ZSc6XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1BhdXNlZDogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2ZldGNoJzpcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGZldGNoRmFpbHVyZUNvdW50OiAwLFxuICAgICAgICAgIGZldGNoTWV0YTogKF9hY3Rpb24kbWV0YSA9IGFjdGlvbi5tZXRhKSAhPSBudWxsID8gX2FjdGlvbiRtZXRhIDogbnVsbCxcbiAgICAgICAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgICAgICAgIGlzUGF1c2VkOiBmYWxzZSxcbiAgICAgICAgICBzdGF0dXM6ICFzdGF0ZS5kYXRhVXBkYXRlZEF0ID8gJ2xvYWRpbmcnIDogc3RhdGUuc3RhdHVzXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxuICAgICAgICAgIGRhdGFVcGRhdGVDb3VudDogc3RhdGUuZGF0YVVwZGF0ZUNvdW50ICsgMSxcbiAgICAgICAgICBkYXRhVXBkYXRlZEF0OiAoX2FjdGlvbiRkYXRhVXBkYXRlZEF0ID0gYWN0aW9uLmRhdGFVcGRhdGVkQXQpICE9IG51bGwgPyBfYWN0aW9uJGRhdGFVcGRhdGVkQXQgOiBEYXRlLm5vdygpLFxuICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgIGZldGNoRmFpbHVyZUNvdW50OiAwLFxuICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgIGlzSW52YWxpZGF0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGlzUGF1c2VkOiBmYWxzZSxcbiAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICB2YXIgZXJyb3IgPSBhY3Rpb24uZXJyb3I7XG5cbiAgICAgICAgaWYgKGlzQ2FuY2VsbGVkRXJyb3IoZXJyb3IpICYmIGVycm9yLnJldmVydCAmJiB0aGlzLnJldmVydFN0YXRlKSB7XG4gICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0aGlzLnJldmVydFN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgZXJyb3JVcGRhdGVDb3VudDogc3RhdGUuZXJyb3JVcGRhdGVDb3VudCArIDEsXG4gICAgICAgICAgZXJyb3JVcGRhdGVkQXQ6IERhdGUubm93KCksXG4gICAgICAgICAgZmV0Y2hGYWlsdXJlQ291bnQ6IHN0YXRlLmZldGNoRmFpbHVyZUNvdW50ICsgMSxcbiAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICBpc1BhdXNlZDogZmFsc2UsXG4gICAgICAgICAgc3RhdHVzOiAnZXJyb3InXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdpbnZhbGlkYXRlJzpcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzSW52YWxpZGF0ZWQ6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ3NldFN0YXRlJzpcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwgYWN0aW9uLnN0YXRlKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gUXVlcnk7XG59KCk7IiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgeyBoYXNoUXVlcnlLZXlCeU9wdGlvbnMsIG1hdGNoUXVlcnksIHBhcnNlRmlsdGVyQXJncyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgU3Vic2NyaWJhYmxlIH0gZnJvbSAnLi9zdWJzY3JpYmFibGUnO1xuLy8gQ0xBU1NcbmV4cG9ydCB2YXIgUXVlcnlDYWNoZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1N1YnNjcmliYWJsZSkge1xuICBfaW5oZXJpdHNMb29zZShRdWVyeUNhY2hlLCBfU3Vic2NyaWJhYmxlKTtcblxuICBmdW5jdGlvbiBRdWVyeUNhY2hlKGNvbmZpZykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1N1YnNjcmliYWJsZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgX3RoaXMuY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIF90aGlzLnF1ZXJpZXMgPSBbXTtcbiAgICBfdGhpcy5xdWVyaWVzTWFwID0ge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFF1ZXJ5Q2FjaGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5idWlsZCA9IGZ1bmN0aW9uIGJ1aWxkKGNsaWVudCwgb3B0aW9ucywgc3RhdGUpIHtcbiAgICB2YXIgX29wdGlvbnMkcXVlcnlIYXNoO1xuXG4gICAgdmFyIHF1ZXJ5S2V5ID0gb3B0aW9ucy5xdWVyeUtleTtcbiAgICB2YXIgcXVlcnlIYXNoID0gKF9vcHRpb25zJHF1ZXJ5SGFzaCA9IG9wdGlvbnMucXVlcnlIYXNoKSAhPSBudWxsID8gX29wdGlvbnMkcXVlcnlIYXNoIDogaGFzaFF1ZXJ5S2V5QnlPcHRpb25zKHF1ZXJ5S2V5LCBvcHRpb25zKTtcbiAgICB2YXIgcXVlcnkgPSB0aGlzLmdldChxdWVyeUhhc2gpO1xuXG4gICAgaWYgKCFxdWVyeSkge1xuICAgICAgcXVlcnkgPSBuZXcgUXVlcnkoe1xuICAgICAgICBjYWNoZTogdGhpcyxcbiAgICAgICAgcXVlcnlLZXk6IHF1ZXJ5S2V5LFxuICAgICAgICBxdWVyeUhhc2g6IHF1ZXJ5SGFzaCxcbiAgICAgICAgb3B0aW9uczogY2xpZW50LmRlZmF1bHRRdWVyeU9wdGlvbnMob3B0aW9ucyksXG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgZGVmYXVsdE9wdGlvbnM6IGNsaWVudC5nZXRRdWVyeURlZmF1bHRzKHF1ZXJ5S2V5KVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFkZChxdWVyeSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9O1xuXG4gIF9wcm90by5hZGQgPSBmdW5jdGlvbiBhZGQocXVlcnkpIHtcbiAgICBpZiAoIXRoaXMucXVlcmllc01hcFtxdWVyeS5xdWVyeUhhc2hdKSB7XG4gICAgICB0aGlzLnF1ZXJpZXNNYXBbcXVlcnkucXVlcnlIYXNoXSA9IHF1ZXJ5O1xuICAgICAgdGhpcy5xdWVyaWVzLnB1c2gocXVlcnkpO1xuICAgICAgdGhpcy5ub3RpZnkoe1xuICAgICAgICB0eXBlOiAncXVlcnlBZGRlZCcsXG4gICAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUocXVlcnkpIHtcbiAgICB2YXIgcXVlcnlJbk1hcCA9IHRoaXMucXVlcmllc01hcFtxdWVyeS5xdWVyeUhhc2hdO1xuXG4gICAgaWYgKHF1ZXJ5SW5NYXApIHtcbiAgICAgIHF1ZXJ5LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucXVlcmllcyA9IHRoaXMucXVlcmllcy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHggIT09IHF1ZXJ5O1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChxdWVyeUluTWFwID09PSBxdWVyeSkge1xuICAgICAgICBkZWxldGUgdGhpcy5xdWVyaWVzTWFwW3F1ZXJ5LnF1ZXJ5SGFzaF07XG4gICAgICB9XG5cbiAgICAgIHRoaXMubm90aWZ5KHtcbiAgICAgICAgdHlwZTogJ3F1ZXJ5UmVtb3ZlZCcsXG4gICAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICBfdGhpczIucmVtb3ZlKHF1ZXJ5KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5nZXQgPSBmdW5jdGlvbiBnZXQocXVlcnlIYXNoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcmllc01hcFtxdWVyeUhhc2hdO1xuICB9O1xuXG4gIF9wcm90by5nZXRBbGwgPSBmdW5jdGlvbiBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcmllcztcbiAgfTtcblxuICBfcHJvdG8uZmluZCA9IGZ1bmN0aW9uIGZpbmQoYXJnMSwgYXJnMikge1xuICAgIHZhciBfcGFyc2VGaWx0ZXJBcmdzID0gcGFyc2VGaWx0ZXJBcmdzKGFyZzEsIGFyZzIpLFxuICAgICAgICBmaWx0ZXJzID0gX3BhcnNlRmlsdGVyQXJnc1swXTtcblxuICAgIGlmICh0eXBlb2YgZmlsdGVycy5leGFjdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGZpbHRlcnMuZXhhY3QgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnF1ZXJpZXMuZmluZChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgIHJldHVybiBtYXRjaFF1ZXJ5KGZpbHRlcnMsIHF1ZXJ5KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZmluZEFsbCA9IGZ1bmN0aW9uIGZpbmRBbGwoYXJnMSwgYXJnMikge1xuICAgIHZhciBfcGFyc2VGaWx0ZXJBcmdzMiA9IHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyKSxcbiAgICAgICAgZmlsdGVycyA9IF9wYXJzZUZpbHRlckFyZ3MyWzBdO1xuXG4gICAgcmV0dXJuIGZpbHRlcnMgPyB0aGlzLnF1ZXJpZXMuZmlsdGVyKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgcmV0dXJuIG1hdGNoUXVlcnkoZmlsdGVycywgcXVlcnkpO1xuICAgIH0pIDogdGhpcy5xdWVyaWVzO1xuICB9O1xuXG4gIF9wcm90by5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkoZXZlbnQpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcihldmVudCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ub25Gb2N1cyA9IGZ1bmN0aW9uIG9uRm9jdXMoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzNC5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHF1ZXJ5Lm9uRm9jdXMoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5vbk9ubGluZSA9IGZ1bmN0aW9uIG9uT25saW5lKCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczUucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICBxdWVyeS5vbk9ubGluZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFF1ZXJ5Q2FjaGU7XG59KFN1YnNjcmliYWJsZSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBoYXNoUXVlcnlLZXksIG5vb3AsIHBhcnNlRmlsdGVyQXJncywgcGFyc2VRdWVyeUFyZ3MsIHBhcnRpYWxNYXRjaEtleSwgaGFzaFF1ZXJ5S2V5QnlPcHRpb25zIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBRdWVyeUNhY2hlIH0gZnJvbSAnLi9xdWVyeUNhY2hlJztcbmltcG9ydCB7IE11dGF0aW9uQ2FjaGUgfSBmcm9tICcuL211dGF0aW9uQ2FjaGUnO1xuaW1wb3J0IHsgZm9jdXNNYW5hZ2VyIH0gZnJvbSAnLi9mb2N1c01hbmFnZXInO1xuaW1wb3J0IHsgb25saW5lTWFuYWdlciB9IGZyb20gJy4vb25saW5lTWFuYWdlcic7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IGluZmluaXRlUXVlcnlCZWhhdmlvciB9IGZyb20gJy4vaW5maW5pdGVRdWVyeUJlaGF2aW9yJzsgLy8gVFlQRVNcblxuLy8gQ0xBU1NcbmV4cG9ydCB2YXIgUXVlcnlDbGllbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBRdWVyeUNsaWVudChjb25maWcpIHtcbiAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHtcbiAgICAgIGNvbmZpZyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMucXVlcnlDYWNoZSA9IGNvbmZpZy5xdWVyeUNhY2hlIHx8IG5ldyBRdWVyeUNhY2hlKCk7XG4gICAgdGhpcy5tdXRhdGlvbkNhY2hlID0gY29uZmlnLm11dGF0aW9uQ2FjaGUgfHwgbmV3IE11dGF0aW9uQ2FjaGUoKTtcbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0gY29uZmlnLmRlZmF1bHRPcHRpb25zIHx8IHt9O1xuICAgIHRoaXMucXVlcnlEZWZhdWx0cyA9IFtdO1xuICAgIHRoaXMubXV0YXRpb25EZWZhdWx0cyA9IFtdO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFF1ZXJ5Q2xpZW50LnByb3RvdHlwZTtcblxuICBfcHJvdG8ubW91bnQgPSBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy51bnN1YnNjcmliZUZvY3VzID0gZm9jdXNNYW5hZ2VyLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZm9jdXNNYW5hZ2VyLmlzRm9jdXNlZCgpICYmIG9ubGluZU1hbmFnZXIuaXNPbmxpbmUoKSkge1xuICAgICAgICBfdGhpcy5tdXRhdGlvbkNhY2hlLm9uRm9jdXMoKTtcblxuICAgICAgICBfdGhpcy5xdWVyeUNhY2hlLm9uRm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlT25saW5lID0gb25saW5lTWFuYWdlci5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGZvY3VzTWFuYWdlci5pc0ZvY3VzZWQoKSAmJiBvbmxpbmVNYW5hZ2VyLmlzT25saW5lKCkpIHtcbiAgICAgICAgX3RoaXMubXV0YXRpb25DYWNoZS5vbk9ubGluZSgpO1xuXG4gICAgICAgIF90aGlzLnF1ZXJ5Q2FjaGUub25PbmxpbmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8udW5tb3VudCA9IGZ1bmN0aW9uIHVubW91bnQoKSB7XG4gICAgdmFyIF90aGlzJHVuc3Vic2NyaWJlRm9jdSwgX3RoaXMkdW5zdWJzY3JpYmVPbmxpO1xuXG4gICAgKF90aGlzJHVuc3Vic2NyaWJlRm9jdSA9IHRoaXMudW5zdWJzY3JpYmVGb2N1cykgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHVuc3Vic2NyaWJlRm9jdS5jYWxsKHRoaXMpO1xuICAgIChfdGhpcyR1bnN1YnNjcmliZU9ubGkgPSB0aGlzLnVuc3Vic2NyaWJlT25saW5lKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkdW5zdWJzY3JpYmVPbmxpLmNhbGwodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLmlzRmV0Y2hpbmcgPSBmdW5jdGlvbiBpc0ZldGNoaW5nKGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgX3BhcnNlRmlsdGVyQXJncyA9IHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyKSxcbiAgICAgICAgZmlsdGVycyA9IF9wYXJzZUZpbHRlckFyZ3NbMF07XG5cbiAgICBmaWx0ZXJzLmZldGNoaW5nID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5xdWVyeUNhY2hlLmZpbmRBbGwoZmlsdGVycykubGVuZ3RoO1xuICB9O1xuXG4gIF9wcm90by5pc011dGF0aW5nID0gZnVuY3Rpb24gaXNNdXRhdGluZyhmaWx0ZXJzKSB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25DYWNoZS5maW5kQWxsKF9leHRlbmRzKHt9LCBmaWx0ZXJzLCB7XG4gICAgICBmZXRjaGluZzogdHJ1ZVxuICAgIH0pKS5sZW5ndGg7XG4gIH07XG5cbiAgX3Byb3RvLmdldFF1ZXJ5RGF0YSA9IGZ1bmN0aW9uIGdldFF1ZXJ5RGF0YShxdWVyeUtleSwgZmlsdGVycykge1xuICAgIHZhciBfdGhpcyRxdWVyeUNhY2hlJGZpbmQ7XG5cbiAgICByZXR1cm4gKF90aGlzJHF1ZXJ5Q2FjaGUkZmluZCA9IHRoaXMucXVlcnlDYWNoZS5maW5kKHF1ZXJ5S2V5LCBmaWx0ZXJzKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHF1ZXJ5Q2FjaGUkZmluZC5zdGF0ZS5kYXRhO1xuICB9O1xuXG4gIF9wcm90by5zZXRRdWVyeURhdGEgPSBmdW5jdGlvbiBzZXRRdWVyeURhdGEocXVlcnlLZXksIHVwZGF0ZXIsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFyc2VkT3B0aW9ucyA9IHBhcnNlUXVlcnlBcmdzKHF1ZXJ5S2V5KTtcbiAgICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IHRoaXMuZGVmYXVsdFF1ZXJ5T3B0aW9ucyhwYXJzZWRPcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcy5xdWVyeUNhY2hlLmJ1aWxkKHRoaXMsIGRlZmF1bHRlZE9wdGlvbnMpLnNldERhdGEodXBkYXRlciwgb3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLnNldFF1ZXJpZXNEYXRhID0gZnVuY3Rpb24gc2V0UXVlcmllc0RhdGEocXVlcnlLZXlPckZpbHRlcnMsIHVwZGF0ZXIsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHJldHVybiBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpczIuZ2V0UXVlcnlDYWNoZSgpLmZpbmRBbGwocXVlcnlLZXlPckZpbHRlcnMpLm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgcXVlcnlLZXkgPSBfcmVmLnF1ZXJ5S2V5O1xuICAgICAgICByZXR1cm4gW3F1ZXJ5S2V5LCBfdGhpczIuc2V0UXVlcnlEYXRhKHF1ZXJ5S2V5LCB1cGRhdGVyLCBvcHRpb25zKV07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0UXVlcnlTdGF0ZSA9IGZ1bmN0aW9uIGdldFF1ZXJ5U3RhdGUocXVlcnlLZXksIGZpbHRlcnMpIHtcbiAgICB2YXIgX3RoaXMkcXVlcnlDYWNoZSRmaW5kMjtcblxuICAgIHJldHVybiAoX3RoaXMkcXVlcnlDYWNoZSRmaW5kMiA9IHRoaXMucXVlcnlDYWNoZS5maW5kKHF1ZXJ5S2V5LCBmaWx0ZXJzKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHF1ZXJ5Q2FjaGUkZmluZDIuc3RhdGU7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZVF1ZXJpZXMgPSBmdW5jdGlvbiByZW1vdmVRdWVyaWVzKGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgX3BhcnNlRmlsdGVyQXJnczIgPSBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiksXG4gICAgICAgIGZpbHRlcnMgPSBfcGFyc2VGaWx0ZXJBcmdzMlswXTtcblxuICAgIHZhciBxdWVyeUNhY2hlID0gdGhpcy5xdWVyeUNhY2hlO1xuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcXVlcnlDYWNoZS5maW5kQWxsKGZpbHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHF1ZXJ5Q2FjaGUucmVtb3ZlKHF1ZXJ5KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZXNldFF1ZXJpZXMgPSBmdW5jdGlvbiByZXNldFF1ZXJpZXMoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIF9wYXJzZUZpbHRlckFyZ3MzID0gcGFyc2VGaWx0ZXJBcmdzKGFyZzEsIGFyZzIsIGFyZzMpLFxuICAgICAgICBmaWx0ZXJzID0gX3BhcnNlRmlsdGVyQXJnczNbMF0sXG4gICAgICAgIG9wdGlvbnMgPSBfcGFyc2VGaWx0ZXJBcmdzM1sxXTtcblxuICAgIHZhciBxdWVyeUNhY2hlID0gdGhpcy5xdWVyeUNhY2hlO1xuXG4gICAgdmFyIHJlZmV0Y2hGaWx0ZXJzID0gX2V4dGVuZHMoe30sIGZpbHRlcnMsIHtcbiAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcXVlcnlDYWNoZS5maW5kQWxsKGZpbHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHF1ZXJ5LnJlc2V0KCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfdGhpczMucmVmZXRjaFF1ZXJpZXMocmVmZXRjaEZpbHRlcnMsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jYW5jZWxRdWVyaWVzID0gZnVuY3Rpb24gY2FuY2VsUXVlcmllcyhhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgX3BhcnNlRmlsdGVyQXJnczQgPSBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiwgYXJnMyksXG4gICAgICAgIGZpbHRlcnMgPSBfcGFyc2VGaWx0ZXJBcmdzNFswXSxcbiAgICAgICAgX3BhcnNlRmlsdGVyQXJnczQkID0gX3BhcnNlRmlsdGVyQXJnczRbMV0sXG4gICAgICAgIGNhbmNlbE9wdGlvbnMgPSBfcGFyc2VGaWx0ZXJBcmdzNCQgPT09IHZvaWQgMCA/IHt9IDogX3BhcnNlRmlsdGVyQXJnczQkO1xuXG4gICAgaWYgKHR5cGVvZiBjYW5jZWxPcHRpb25zLnJldmVydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNhbmNlbE9wdGlvbnMucmV2ZXJ0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgcHJvbWlzZXMgPSBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpczQucXVlcnlDYWNoZS5maW5kQWxsKGZpbHRlcnMpLm1hcChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5LmNhbmNlbChjYW5jZWxPcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihub29wKS5jYXRjaChub29wKTtcbiAgfTtcblxuICBfcHJvdG8uaW52YWxpZGF0ZVF1ZXJpZXMgPSBmdW5jdGlvbiBpbnZhbGlkYXRlUXVlcmllcyhhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgdmFyIF9yZWYyLFxuICAgICAgICBfZmlsdGVycyRyZWZldGNoQWN0aXYsXG4gICAgICAgIF9maWx0ZXJzJHJlZmV0Y2hJbmFjdCxcbiAgICAgICAgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciBfcGFyc2VGaWx0ZXJBcmdzNSA9IHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyLCBhcmczKSxcbiAgICAgICAgZmlsdGVycyA9IF9wYXJzZUZpbHRlckFyZ3M1WzBdLFxuICAgICAgICBvcHRpb25zID0gX3BhcnNlRmlsdGVyQXJnczVbMV07XG5cbiAgICB2YXIgcmVmZXRjaEZpbHRlcnMgPSBfZXh0ZW5kcyh7fSwgZmlsdGVycywge1xuICAgICAgLy8gaWYgZmlsdGVycy5yZWZldGNoQWN0aXZlIGlzIG5vdCBwcm92aWRlZCBhbmQgZmlsdGVycy5hY3RpdmUgaXMgZXhwbGljaXRseSBmYWxzZSxcbiAgICAgIC8vIGUuZy4gaW52YWxpZGF0ZVF1ZXJpZXMoeyBhY3RpdmU6IGZhbHNlIH0pLCB3ZSBkb24ndCB3YW50IHRvIHJlZmV0Y2ggYWN0aXZlIHF1ZXJpZXNcbiAgICAgIGFjdGl2ZTogKF9yZWYyID0gKF9maWx0ZXJzJHJlZmV0Y2hBY3RpdiA9IGZpbHRlcnMucmVmZXRjaEFjdGl2ZSkgIT0gbnVsbCA/IF9maWx0ZXJzJHJlZmV0Y2hBY3RpdiA6IGZpbHRlcnMuYWN0aXZlKSAhPSBudWxsID8gX3JlZjIgOiB0cnVlLFxuICAgICAgaW5hY3RpdmU6IChfZmlsdGVycyRyZWZldGNoSW5hY3QgPSBmaWx0ZXJzLnJlZmV0Y2hJbmFjdGl2ZSkgIT0gbnVsbCA/IF9maWx0ZXJzJHJlZmV0Y2hJbmFjdCA6IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczUucXVlcnlDYWNoZS5maW5kQWxsKGZpbHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHF1ZXJ5LmludmFsaWRhdGUoKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX3RoaXM1LnJlZmV0Y2hRdWVyaWVzKHJlZmV0Y2hGaWx0ZXJzLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVmZXRjaFF1ZXJpZXMgPSBmdW5jdGlvbiByZWZldGNoUXVlcmllcyhhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICB2YXIgX3BhcnNlRmlsdGVyQXJnczYgPSBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiwgYXJnMyksXG4gICAgICAgIGZpbHRlcnMgPSBfcGFyc2VGaWx0ZXJBcmdzNlswXSxcbiAgICAgICAgb3B0aW9ucyA9IF9wYXJzZUZpbHRlckFyZ3M2WzFdO1xuXG4gICAgdmFyIHByb21pc2VzID0gbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXM2LnF1ZXJ5Q2FjaGUuZmluZEFsbChmaWx0ZXJzKS5tYXAoZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiBxdWVyeS5mZXRjaCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihub29wKTtcblxuICAgIGlmICghKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMudGhyb3dPbkVycm9yKSkge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2UuY2F0Y2gobm9vcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgX3Byb3RvLmZldGNoUXVlcnkgPSBmdW5jdGlvbiBmZXRjaFF1ZXJ5KGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB2YXIgcGFyc2VkT3B0aW9ucyA9IHBhcnNlUXVlcnlBcmdzKGFyZzEsIGFyZzIsIGFyZzMpO1xuICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gdGhpcy5kZWZhdWx0UXVlcnlPcHRpb25zKHBhcnNlZE9wdGlvbnMpOyAvLyBodHRwczovL2dpdGh1Yi5jb20vdGFubmVybGluc2xleS9yZWFjdC1xdWVyeS9pc3N1ZXMvNjUyXG5cbiAgICBpZiAodHlwZW9mIGRlZmF1bHRlZE9wdGlvbnMucmV0cnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBkZWZhdWx0ZWRPcHRpb25zLnJldHJ5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyeUNhY2hlLmJ1aWxkKHRoaXMsIGRlZmF1bHRlZE9wdGlvbnMpO1xuICAgIHJldHVybiBxdWVyeS5pc1N0YWxlQnlUaW1lKGRlZmF1bHRlZE9wdGlvbnMuc3RhbGVUaW1lKSA/IHF1ZXJ5LmZldGNoKGRlZmF1bHRlZE9wdGlvbnMpIDogUHJvbWlzZS5yZXNvbHZlKHF1ZXJ5LnN0YXRlLmRhdGEpO1xuICB9O1xuXG4gIF9wcm90by5wcmVmZXRjaFF1ZXJ5ID0gZnVuY3Rpb24gcHJlZmV0Y2hRdWVyeShhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgcmV0dXJuIHRoaXMuZmV0Y2hRdWVyeShhcmcxLCBhcmcyLCBhcmczKS50aGVuKG5vb3ApLmNhdGNoKG5vb3ApO1xuICB9O1xuXG4gIF9wcm90by5mZXRjaEluZmluaXRlUXVlcnkgPSBmdW5jdGlvbiBmZXRjaEluZmluaXRlUXVlcnkoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIHZhciBwYXJzZWRPcHRpb25zID0gcGFyc2VRdWVyeUFyZ3MoYXJnMSwgYXJnMiwgYXJnMyk7XG4gICAgcGFyc2VkT3B0aW9ucy5iZWhhdmlvciA9IGluZmluaXRlUXVlcnlCZWhhdmlvcigpO1xuICAgIHJldHVybiB0aGlzLmZldGNoUXVlcnkocGFyc2VkT3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLnByZWZldGNoSW5maW5pdGVRdWVyeSA9IGZ1bmN0aW9uIHByZWZldGNoSW5maW5pdGVRdWVyeShhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgcmV0dXJuIHRoaXMuZmV0Y2hJbmZpbml0ZVF1ZXJ5KGFyZzEsIGFyZzIsIGFyZzMpLnRoZW4obm9vcCkuY2F0Y2gobm9vcCk7XG4gIH07XG5cbiAgX3Byb3RvLmNhbmNlbE11dGF0aW9ucyA9IGZ1bmN0aW9uIGNhbmNlbE11dGF0aW9ucygpIHtcbiAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlcyA9IG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzNy5tdXRhdGlvbkNhY2hlLmdldEFsbCgpLm1hcChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIG11dGF0aW9uLmNhbmNlbCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKG5vb3ApLmNhdGNoKG5vb3ApO1xuICB9O1xuXG4gIF9wcm90by5yZXN1bWVQYXVzZWRNdXRhdGlvbnMgPSBmdW5jdGlvbiByZXN1bWVQYXVzZWRNdXRhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TXV0YXRpb25DYWNoZSgpLnJlc3VtZVBhdXNlZE11dGF0aW9ucygpO1xuICB9O1xuXG4gIF9wcm90by5leGVjdXRlTXV0YXRpb24gPSBmdW5jdGlvbiBleGVjdXRlTXV0YXRpb24ob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9uQ2FjaGUuYnVpbGQodGhpcywgb3B0aW9ucykuZXhlY3V0ZSgpO1xuICB9O1xuXG4gIF9wcm90by5nZXRRdWVyeUNhY2hlID0gZnVuY3Rpb24gZ2V0UXVlcnlDYWNoZSgpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeUNhY2hlO1xuICB9O1xuXG4gIF9wcm90by5nZXRNdXRhdGlvbkNhY2hlID0gZnVuY3Rpb24gZ2V0TXV0YXRpb25DYWNoZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvbkNhY2hlO1xuICB9O1xuXG4gIF9wcm90by5nZXREZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRPcHRpb25zO1xuICB9O1xuXG4gIF9wcm90by5zZXREZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0gb3B0aW9ucztcbiAgfTtcblxuICBfcHJvdG8uc2V0UXVlcnlEZWZhdWx0cyA9IGZ1bmN0aW9uIHNldFF1ZXJ5RGVmYXVsdHMocXVlcnlLZXksIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5xdWVyeURlZmF1bHRzLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBoYXNoUXVlcnlLZXkocXVlcnlLZXkpID09PSBoYXNoUXVlcnlLZXkoeC5xdWVyeUtleSk7XG4gICAgfSk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXN1bHQuZGVmYXVsdE9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnF1ZXJ5RGVmYXVsdHMucHVzaCh7XG4gICAgICAgIHF1ZXJ5S2V5OiBxdWVyeUtleSxcbiAgICAgICAgZGVmYXVsdE9wdGlvbnM6IG9wdGlvbnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0UXVlcnlEZWZhdWx0cyA9IGZ1bmN0aW9uIGdldFF1ZXJ5RGVmYXVsdHMocXVlcnlLZXkpIHtcbiAgICB2YXIgX3RoaXMkcXVlcnlEZWZhdWx0cyRmO1xuXG4gICAgcmV0dXJuIHF1ZXJ5S2V5ID8gKF90aGlzJHF1ZXJ5RGVmYXVsdHMkZiA9IHRoaXMucXVlcnlEZWZhdWx0cy5maW5kKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gcGFydGlhbE1hdGNoS2V5KHF1ZXJ5S2V5LCB4LnF1ZXJ5S2V5KTtcbiAgICB9KSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHF1ZXJ5RGVmYXVsdHMkZi5kZWZhdWx0T3B0aW9ucyA6IHVuZGVmaW5lZDtcbiAgfTtcblxuICBfcHJvdG8uc2V0TXV0YXRpb25EZWZhdWx0cyA9IGZ1bmN0aW9uIHNldE11dGF0aW9uRGVmYXVsdHMobXV0YXRpb25LZXksIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5tdXRhdGlvbkRlZmF1bHRzLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBoYXNoUXVlcnlLZXkobXV0YXRpb25LZXkpID09PSBoYXNoUXVlcnlLZXkoeC5tdXRhdGlvbktleSk7XG4gICAgfSk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXN1bHQuZGVmYXVsdE9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm11dGF0aW9uRGVmYXVsdHMucHVzaCh7XG4gICAgICAgIG11dGF0aW9uS2V5OiBtdXRhdGlvbktleSxcbiAgICAgICAgZGVmYXVsdE9wdGlvbnM6IG9wdGlvbnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0TXV0YXRpb25EZWZhdWx0cyA9IGZ1bmN0aW9uIGdldE11dGF0aW9uRGVmYXVsdHMobXV0YXRpb25LZXkpIHtcbiAgICB2YXIgX3RoaXMkbXV0YXRpb25EZWZhdWx0O1xuXG4gICAgcmV0dXJuIG11dGF0aW9uS2V5ID8gKF90aGlzJG11dGF0aW9uRGVmYXVsdCA9IHRoaXMubXV0YXRpb25EZWZhdWx0cy5maW5kKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gcGFydGlhbE1hdGNoS2V5KG11dGF0aW9uS2V5LCB4Lm11dGF0aW9uS2V5KTtcbiAgICB9KSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJG11dGF0aW9uRGVmYXVsdC5kZWZhdWx0T3B0aW9ucyA6IHVuZGVmaW5lZDtcbiAgfTtcblxuICBfcHJvdG8uZGVmYXVsdFF1ZXJ5T3B0aW9ucyA9IGZ1bmN0aW9uIGRlZmF1bHRRdWVyeU9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLl9kZWZhdWx0ZWQpIHtcbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gX2V4dGVuZHMoe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMucXVlcmllcywgdGhpcy5nZXRRdWVyeURlZmF1bHRzKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMucXVlcnlLZXkpLCBvcHRpb25zLCB7XG4gICAgICBfZGVmYXVsdGVkOiB0cnVlXG4gICAgfSk7XG5cbiAgICBpZiAoIWRlZmF1bHRlZE9wdGlvbnMucXVlcnlIYXNoICYmIGRlZmF1bHRlZE9wdGlvbnMucXVlcnlLZXkpIHtcbiAgICAgIGRlZmF1bHRlZE9wdGlvbnMucXVlcnlIYXNoID0gaGFzaFF1ZXJ5S2V5QnlPcHRpb25zKGRlZmF1bHRlZE9wdGlvbnMucXVlcnlLZXksIGRlZmF1bHRlZE9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0ZWRPcHRpb25zO1xuICB9O1xuXG4gIF9wcm90by5kZWZhdWx0UXVlcnlPYnNlcnZlck9wdGlvbnMgPSBmdW5jdGlvbiBkZWZhdWx0UXVlcnlPYnNlcnZlck9wdGlvbnMob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRRdWVyeU9wdGlvbnMob3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLmRlZmF1bHRNdXRhdGlvbk9wdGlvbnMgPSBmdW5jdGlvbiBkZWZhdWx0TXV0YXRpb25PcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5fZGVmYXVsdGVkKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMubXV0YXRpb25zLCB0aGlzLmdldE11dGF0aW9uRGVmYXVsdHMob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5tdXRhdGlvbktleSksIG9wdGlvbnMsIHtcbiAgICAgIF9kZWZhdWx0ZWQ6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICB0aGlzLnF1ZXJ5Q2FjaGUuY2xlYXIoKTtcbiAgICB0aGlzLm11dGF0aW9uQ2FjaGUuY2xlYXIoKTtcbiAgfTtcblxuICByZXR1cm4gUXVlcnlDbGllbnQ7XG59KCk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCB7IGlzU2VydmVyLCBpc1ZhbGlkVGltZW91dCwgbm9vcCwgcmVwbGFjZUVxdWFsRGVlcCwgc2hhbGxvd0VxdWFsT2JqZWN0cywgdGltZVVudGlsU3RhbGUgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgZm9jdXNNYW5hZ2VyIH0gZnJvbSAnLi9mb2N1c01hbmFnZXInO1xuaW1wb3J0IHsgU3Vic2NyaWJhYmxlIH0gZnJvbSAnLi9zdWJzY3JpYmFibGUnO1xuaW1wb3J0IHsgZ2V0TG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IHsgaXNDYW5jZWxsZWRFcnJvciB9IGZyb20gJy4vcmV0cnllcic7XG5leHBvcnQgdmFyIFF1ZXJ5T2JzZXJ2ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9TdWJzY3JpYmFibGUpIHtcbiAgX2luaGVyaXRzTG9vc2UoUXVlcnlPYnNlcnZlciwgX1N1YnNjcmliYWJsZSk7XG5cbiAgZnVuY3Rpb24gUXVlcnlPYnNlcnZlcihjbGllbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9TdWJzY3JpYmFibGUuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIF90aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICBfdGhpcy50cmFja2VkUHJvcHMgPSBbXTtcbiAgICBfdGhpcy5wcmV2aW91c1NlbGVjdEVycm9yID0gbnVsbDtcblxuICAgIF90aGlzLmJpbmRNZXRob2RzKCk7XG5cbiAgICBfdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFF1ZXJ5T2JzZXJ2ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5iaW5kTWV0aG9kcyA9IGZ1bmN0aW9uIGJpbmRNZXRob2RzKCkge1xuICAgIHRoaXMucmVtb3ZlID0gdGhpcy5yZW1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlZmV0Y2ggPSB0aGlzLnJlZmV0Y2guYmluZCh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8ub25TdWJzY3JpYmUgPSBmdW5jdGlvbiBvblN1YnNjcmliZSgpIHtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnRRdWVyeS5hZGRPYnNlcnZlcih0aGlzKTtcblxuICAgICAgaWYgKHNob3VsZEZldGNoT25Nb3VudCh0aGlzLmN1cnJlbnRRdWVyeSwgdGhpcy5vcHRpb25zKSkge1xuICAgICAgICB0aGlzLmV4ZWN1dGVGZXRjaCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZVRpbWVycygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25VbnN1YnNjcmliZSA9IGZ1bmN0aW9uIG9uVW5zdWJzY3JpYmUoKSB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2hvdWxkRmV0Y2hPblJlY29ubmVjdCA9IGZ1bmN0aW9uIHNob3VsZEZldGNoT25SZWNvbm5lY3QoKSB7XG4gICAgcmV0dXJuIF9zaG91bGRGZXRjaE9uUmVjb25uZWN0KHRoaXMuY3VycmVudFF1ZXJ5LCB0aGlzLm9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5zaG91bGRGZXRjaE9uV2luZG93Rm9jdXMgPSBmdW5jdGlvbiBzaG91bGRGZXRjaE9uV2luZG93Rm9jdXMoKSB7XG4gICAgcmV0dXJuIF9zaG91bGRGZXRjaE9uV2luZG93Rm9jdXModGhpcy5jdXJyZW50UXVlcnksIHRoaXMub3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5jbGVhclRpbWVycygpO1xuICAgIHRoaXMuY3VycmVudFF1ZXJ5LnJlbW92ZU9ic2VydmVyKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5zZXRPcHRpb25zID0gZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zLCBub3RpZnlPcHRpb25zKSB7XG4gICAgdmFyIHByZXZPcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIHZhciBwcmV2UXVlcnkgPSB0aGlzLmN1cnJlbnRRdWVyeTtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNsaWVudC5kZWZhdWx0UXVlcnlPYnNlcnZlck9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5lbmFibGVkICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLmVuYWJsZWQgIT09ICdib29sZWFuJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBlbmFibGVkIHRvIGJlIGEgYm9vbGVhbicpO1xuICAgIH0gLy8gS2VlcCBwcmV2aW91cyBxdWVyeSBrZXkgaWYgdGhlIHVzZXIgZG9lcyBub3Qgc3VwcGx5IG9uZVxuXG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5xdWVyeUtleSkge1xuICAgICAgdGhpcy5vcHRpb25zLnF1ZXJ5S2V5ID0gcHJldk9wdGlvbnMucXVlcnlLZXk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgIHZhciBtb3VudGVkID0gdGhpcy5oYXNMaXN0ZW5lcnMoKTsgLy8gRmV0Y2ggaWYgdGhlcmUgYXJlIHN1YnNjcmliZXJzXG5cbiAgICBpZiAobW91bnRlZCAmJiBzaG91bGRGZXRjaE9wdGlvbmFsbHkodGhpcy5jdXJyZW50UXVlcnksIHByZXZRdWVyeSwgdGhpcy5vcHRpb25zLCBwcmV2T3B0aW9ucykpIHtcbiAgICAgIHRoaXMuZXhlY3V0ZUZldGNoKCk7XG4gICAgfSAvLyBVcGRhdGUgcmVzdWx0XG5cblxuICAgIHRoaXMudXBkYXRlUmVzdWx0KG5vdGlmeU9wdGlvbnMpOyAvLyBVcGRhdGUgc3RhbGUgaW50ZXJ2YWwgaWYgbmVlZGVkXG5cbiAgICBpZiAobW91bnRlZCAmJiAodGhpcy5jdXJyZW50UXVlcnkgIT09IHByZXZRdWVyeSB8fCB0aGlzLm9wdGlvbnMuZW5hYmxlZCAhPT0gcHJldk9wdGlvbnMuZW5hYmxlZCB8fCB0aGlzLm9wdGlvbnMuc3RhbGVUaW1lICE9PSBwcmV2T3B0aW9ucy5zdGFsZVRpbWUpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0YWxlVGltZW91dCgpO1xuICAgIH0gLy8gVXBkYXRlIHJlZmV0Y2ggaW50ZXJ2YWwgaWYgbmVlZGVkXG5cblxuICAgIGlmIChtb3VudGVkICYmICh0aGlzLmN1cnJlbnRRdWVyeSAhPT0gcHJldlF1ZXJ5IHx8IHRoaXMub3B0aW9ucy5lbmFibGVkICE9PSBwcmV2T3B0aW9ucy5lbmFibGVkIHx8IHRoaXMub3B0aW9ucy5yZWZldGNoSW50ZXJ2YWwgIT09IHByZXZPcHRpb25zLnJlZmV0Y2hJbnRlcnZhbCkpIHtcbiAgICAgIHRoaXMudXBkYXRlUmVmZXRjaEludGVydmFsKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRPcHRpbWlzdGljUmVzdWx0ID0gZnVuY3Rpb24gZ2V0T3B0aW1pc3RpY1Jlc3VsdChvcHRpb25zKSB7XG4gICAgdmFyIGRlZmF1bHRlZE9wdGlvbnMgPSB0aGlzLmNsaWVudC5kZWZhdWx0UXVlcnlPYnNlcnZlck9wdGlvbnMob3B0aW9ucyk7XG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5jbGllbnQuZ2V0UXVlcnlDYWNoZSgpLmJ1aWxkKHRoaXMuY2xpZW50LCBkZWZhdWx0ZWRPcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSZXN1bHQocXVlcnksIGRlZmF1bHRlZE9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5nZXRDdXJyZW50UmVzdWx0ID0gZnVuY3Rpb24gZ2V0Q3VycmVudFJlc3VsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by50cmFja1Jlc3VsdCA9IGZ1bmN0aW9uIHRyYWNrUmVzdWx0KHJlc3VsdCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHRyYWNrZWRSZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhyZXN1bHQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRyYWNrZWRSZXN1bHQsIGtleSwge1xuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB2YXIgdHlwZWRLZXkgPSBrZXk7XG5cbiAgICAgICAgICBpZiAoIV90aGlzMi50cmFja2VkUHJvcHMuaW5jbHVkZXModHlwZWRLZXkpKSB7XG4gICAgICAgICAgICBfdGhpczIudHJhY2tlZFByb3BzLnB1c2godHlwZWRLZXkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXN1bHRbdHlwZWRLZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJhY2tlZFJlc3VsdDtcbiAgfTtcblxuICBfcHJvdG8uZ2V0TmV4dFJlc3VsdCA9IGZ1bmN0aW9uIGdldE5leHRSZXN1bHQob3B0aW9ucykge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciB1bnN1YnNjcmliZSA9IF90aGlzMy5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAoIXJlc3VsdC5pc0ZldGNoaW5nKSB7XG4gICAgICAgICAgdW5zdWJzY3JpYmUoKTtcblxuICAgICAgICAgIGlmIChyZXN1bHQuaXNFcnJvciAmJiAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy50aHJvd09uRXJyb3IpKSB7XG4gICAgICAgICAgICByZWplY3QocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEN1cnJlbnRRdWVyeSA9IGZ1bmN0aW9uIGdldEN1cnJlbnRRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UXVlcnk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICB0aGlzLmNsaWVudC5nZXRRdWVyeUNhY2hlKCkucmVtb3ZlKHRoaXMuY3VycmVudFF1ZXJ5KTtcbiAgfTtcblxuICBfcHJvdG8ucmVmZXRjaCA9IGZ1bmN0aW9uIHJlZmV0Y2gob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmZldGNoKG9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5mZXRjaE9wdGltaXN0aWMgPSBmdW5jdGlvbiBmZXRjaE9wdGltaXN0aWMob3B0aW9ucykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIGRlZmF1bHRlZE9wdGlvbnMgPSB0aGlzLmNsaWVudC5kZWZhdWx0UXVlcnlPYnNlcnZlck9wdGlvbnMob3B0aW9ucyk7XG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5jbGllbnQuZ2V0UXVlcnlDYWNoZSgpLmJ1aWxkKHRoaXMuY2xpZW50LCBkZWZhdWx0ZWRPcHRpb25zKTtcbiAgICByZXR1cm4gcXVlcnkuZmV0Y2goKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpczQuY3JlYXRlUmVzdWx0KHF1ZXJ5LCBkZWZhdWx0ZWRPcHRpb25zKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZmV0Y2ggPSBmdW5jdGlvbiBmZXRjaChmZXRjaE9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGVGZXRjaChmZXRjaE9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXM1LnVwZGF0ZVJlc3VsdCgpO1xuXG4gICAgICByZXR1cm4gX3RoaXM1LmN1cnJlbnRSZXN1bHQ7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmV4ZWN1dGVGZXRjaCA9IGZ1bmN0aW9uIGV4ZWN1dGVGZXRjaChmZXRjaE9wdGlvbnMpIHtcbiAgICAvLyBNYWtlIHN1cmUgd2UgcmVmZXJlbmNlIHRoZSBsYXRlc3QgcXVlcnkgYXMgdGhlIGN1cnJlbnQgb25lIG1pZ2h0IGhhdmUgYmVlbiByZW1vdmVkXG4gICAgdGhpcy51cGRhdGVRdWVyeSgpOyAvLyBGZXRjaFxuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLmN1cnJlbnRRdWVyeS5mZXRjaCh0aGlzLm9wdGlvbnMsIGZldGNoT3B0aW9ucyk7XG5cbiAgICBpZiAoIShmZXRjaE9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IGZldGNoT3B0aW9ucy50aHJvd09uRXJyb3IpKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS5jYXRjaChub29wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlU3RhbGVUaW1lb3V0ID0gZnVuY3Rpb24gdXBkYXRlU3RhbGVUaW1lb3V0KCkge1xuICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgdGhpcy5jbGVhclN0YWxlVGltZW91dCgpO1xuXG4gICAgaWYgKGlzU2VydmVyIHx8IHRoaXMuY3VycmVudFJlc3VsdC5pc1N0YWxlIHx8ICFpc1ZhbGlkVGltZW91dCh0aGlzLm9wdGlvbnMuc3RhbGVUaW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0aW1lID0gdGltZVVudGlsU3RhbGUodGhpcy5jdXJyZW50UmVzdWx0LmRhdGFVcGRhdGVkQXQsIHRoaXMub3B0aW9ucy5zdGFsZVRpbWUpOyAvLyBUaGUgdGltZW91dCBpcyBzb21ldGltZXMgdHJpZ2dlcmVkIDEgbXMgYmVmb3JlIHRoZSBzdGFsZSB0aW1lIGV4cGlyYXRpb24uXG4gICAgLy8gVG8gbWl0aWdhdGUgdGhpcyBpc3N1ZSB3ZSBhbHdheXMgYWRkIDEgbXMgdG8gdGhlIHRpbWVvdXQuXG5cbiAgICB2YXIgdGltZW91dCA9IHRpbWUgKyAxO1xuICAgIHRoaXMuc3RhbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXM2LmN1cnJlbnRSZXN1bHQuaXNTdGFsZSkge1xuICAgICAgICBfdGhpczYudXBkYXRlUmVzdWx0KCk7XG4gICAgICB9XG4gICAgfSwgdGltZW91dCk7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVJlZmV0Y2hJbnRlcnZhbCA9IGZ1bmN0aW9uIHVwZGF0ZVJlZmV0Y2hJbnRlcnZhbCgpIHtcbiAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgIHRoaXMuY2xlYXJSZWZldGNoSW50ZXJ2YWwoKTtcblxuICAgIGlmIChpc1NlcnZlciB8fCB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9PT0gZmFsc2UgfHwgIWlzVmFsaWRUaW1lb3V0KHRoaXMub3B0aW9ucy5yZWZldGNoSW50ZXJ2YWwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZWZldGNoSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpczcub3B0aW9ucy5yZWZldGNoSW50ZXJ2YWxJbkJhY2tncm91bmQgfHwgZm9jdXNNYW5hZ2VyLmlzRm9jdXNlZCgpKSB7XG4gICAgICAgIF90aGlzNy5leGVjdXRlRmV0Y2goKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzLm9wdGlvbnMucmVmZXRjaEludGVydmFsKTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlVGltZXJzID0gZnVuY3Rpb24gdXBkYXRlVGltZXJzKCkge1xuICAgIHRoaXMudXBkYXRlU3RhbGVUaW1lb3V0KCk7XG4gICAgdGhpcy51cGRhdGVSZWZldGNoSW50ZXJ2YWwoKTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXJUaW1lcnMgPSBmdW5jdGlvbiBjbGVhclRpbWVycygpIHtcbiAgICB0aGlzLmNsZWFyU3RhbGVUaW1lb3V0KCk7XG4gICAgdGhpcy5jbGVhclJlZmV0Y2hJbnRlcnZhbCgpO1xuICB9O1xuXG4gIF9wcm90by5jbGVhclN0YWxlVGltZW91dCA9IGZ1bmN0aW9uIGNsZWFyU3RhbGVUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YWxlVGltZW91dElkKTtcbiAgICB0aGlzLnN0YWxlVGltZW91dElkID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by5jbGVhclJlZmV0Y2hJbnRlcnZhbCA9IGZ1bmN0aW9uIGNsZWFyUmVmZXRjaEludGVydmFsKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yZWZldGNoSW50ZXJ2YWxJZCk7XG4gICAgdGhpcy5yZWZldGNoSW50ZXJ2YWxJZCA9IHVuZGVmaW5lZDtcbiAgfTtcblxuICBfcHJvdG8uY3JlYXRlUmVzdWx0ID0gZnVuY3Rpb24gY3JlYXRlUmVzdWx0KHF1ZXJ5LCBvcHRpb25zKSB7XG4gICAgdmFyIHByZXZRdWVyeSA9IHRoaXMuY3VycmVudFF1ZXJ5O1xuICAgIHZhciBwcmV2T3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICB2YXIgcHJldlJlc3VsdCA9IHRoaXMuY3VycmVudFJlc3VsdDtcbiAgICB2YXIgcHJldlJlc3VsdFN0YXRlID0gdGhpcy5jdXJyZW50UmVzdWx0U3RhdGU7XG4gICAgdmFyIHByZXZSZXN1bHRPcHRpb25zID0gdGhpcy5jdXJyZW50UmVzdWx0T3B0aW9ucztcbiAgICB2YXIgcXVlcnlDaGFuZ2UgPSBxdWVyeSAhPT0gcHJldlF1ZXJ5O1xuICAgIHZhciBxdWVyeUluaXRpYWxTdGF0ZSA9IHF1ZXJ5Q2hhbmdlID8gcXVlcnkuc3RhdGUgOiB0aGlzLmN1cnJlbnRRdWVyeUluaXRpYWxTdGF0ZTtcbiAgICB2YXIgcHJldlF1ZXJ5UmVzdWx0ID0gcXVlcnlDaGFuZ2UgPyB0aGlzLmN1cnJlbnRSZXN1bHQgOiB0aGlzLnByZXZpb3VzUXVlcnlSZXN1bHQ7XG4gICAgdmFyIHN0YXRlID0gcXVlcnkuc3RhdGU7XG4gICAgdmFyIGRhdGFVcGRhdGVkQXQgPSBzdGF0ZS5kYXRhVXBkYXRlZEF0LFxuICAgICAgICBlcnJvciA9IHN0YXRlLmVycm9yLFxuICAgICAgICBlcnJvclVwZGF0ZWRBdCA9IHN0YXRlLmVycm9yVXBkYXRlZEF0LFxuICAgICAgICBpc0ZldGNoaW5nID0gc3RhdGUuaXNGZXRjaGluZyxcbiAgICAgICAgc3RhdHVzID0gc3RhdGUuc3RhdHVzO1xuICAgIHZhciBpc1ByZXZpb3VzRGF0YSA9IGZhbHNlO1xuICAgIHZhciBpc1BsYWNlaG9sZGVyRGF0YSA9IGZhbHNlO1xuICAgIHZhciBkYXRhOyAvLyBPcHRpbWlzdGljYWxseSBzZXQgcmVzdWx0IGluIGZldGNoaW5nIHN0YXRlIGlmIG5lZWRlZFxuXG4gICAgaWYgKG9wdGlvbnMub3B0aW1pc3RpY1Jlc3VsdHMpIHtcbiAgICAgIHZhciBtb3VudGVkID0gdGhpcy5oYXNMaXN0ZW5lcnMoKTtcbiAgICAgIHZhciBmZXRjaE9uTW91bnQgPSAhbW91bnRlZCAmJiBzaG91bGRGZXRjaE9uTW91bnQocXVlcnksIG9wdGlvbnMpO1xuICAgICAgdmFyIGZldGNoT3B0aW9uYWxseSA9IG1vdW50ZWQgJiYgc2hvdWxkRmV0Y2hPcHRpb25hbGx5KHF1ZXJ5LCBwcmV2UXVlcnksIG9wdGlvbnMsIHByZXZPcHRpb25zKTtcblxuICAgICAgaWYgKGZldGNoT25Nb3VudCB8fCBmZXRjaE9wdGlvbmFsbHkpIHtcbiAgICAgICAgaXNGZXRjaGluZyA9IHRydWU7XG5cbiAgICAgICAgaWYgKCFkYXRhVXBkYXRlZEF0KSB7XG4gICAgICAgICAgc3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBLZWVwIHByZXZpb3VzIGRhdGEgaWYgbmVlZGVkXG5cblxuICAgIGlmIChvcHRpb25zLmtlZXBQcmV2aW91c0RhdGEgJiYgIXN0YXRlLmRhdGFVcGRhdGVDb3VudCAmJiAocHJldlF1ZXJ5UmVzdWx0ID09IG51bGwgPyB2b2lkIDAgOiBwcmV2UXVlcnlSZXN1bHQuaXNTdWNjZXNzKSAmJiBzdGF0dXMgIT09ICdlcnJvcicpIHtcbiAgICAgIGRhdGEgPSBwcmV2UXVlcnlSZXN1bHQuZGF0YTtcbiAgICAgIGRhdGFVcGRhdGVkQXQgPSBwcmV2UXVlcnlSZXN1bHQuZGF0YVVwZGF0ZWRBdDtcbiAgICAgIHN0YXR1cyA9IHByZXZRdWVyeVJlc3VsdC5zdGF0dXM7XG4gICAgICBpc1ByZXZpb3VzRGF0YSA9IHRydWU7XG4gICAgfSAvLyBTZWxlY3QgZGF0YSBpZiBuZWVkZWRcbiAgICBlbHNlIGlmIChvcHRpb25zLnNlbGVjdCAmJiB0eXBlb2Ygc3RhdGUuZGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gTWVtb2l6ZSBzZWxlY3QgcmVzdWx0XG4gICAgICAgIGlmIChwcmV2UmVzdWx0ICYmIHN0YXRlLmRhdGEgPT09IChwcmV2UmVzdWx0U3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZSZXN1bHRTdGF0ZS5kYXRhKSAmJiBvcHRpb25zLnNlbGVjdCA9PT0gKHByZXZSZXN1bHRPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBwcmV2UmVzdWx0T3B0aW9ucy5zZWxlY3QpICYmICF0aGlzLnByZXZpb3VzU2VsZWN0RXJyb3IpIHtcbiAgICAgICAgICBkYXRhID0gcHJldlJlc3VsdC5kYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYXRhID0gb3B0aW9ucy5zZWxlY3Qoc3RhdGUuZGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnN0cnVjdHVyYWxTaGFyaW5nICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBkYXRhID0gcmVwbGFjZUVxdWFsRGVlcChwcmV2UmVzdWx0ID09IG51bGwgPyB2b2lkIDAgOiBwcmV2UmVzdWx0LmRhdGEsIGRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzU2VsZWN0RXJyb3IgPSBudWxsO1xuICAgICAgICAgIH0gY2F0Y2ggKHNlbGVjdEVycm9yKSB7XG4gICAgICAgICAgICBnZXRMb2dnZXIoKS5lcnJvcihzZWxlY3RFcnJvcik7XG4gICAgICAgICAgICBlcnJvciA9IHNlbGVjdEVycm9yO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1NlbGVjdEVycm9yID0gc2VsZWN0RXJyb3I7XG4gICAgICAgICAgICBlcnJvclVwZGF0ZWRBdCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBzdGF0dXMgPSAnZXJyb3InO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBVc2UgcXVlcnkgZGF0YVxuICAgICAgZWxzZSB7XG4gICAgICAgICAgZGF0YSA9IHN0YXRlLmRhdGE7XG4gICAgICAgIH0gLy8gU2hvdyBwbGFjZWhvbGRlciBkYXRhIGlmIG5lZWRlZFxuXG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucGxhY2Vob2xkZXJEYXRhICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYgc3RhdHVzID09PSAnbG9hZGluZycpIHtcbiAgICAgIHZhciBwbGFjZWhvbGRlckRhdGE7IC8vIE1lbW9pemUgcGxhY2Vob2xkZXIgZGF0YVxuXG4gICAgICBpZiAoKHByZXZSZXN1bHQgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZSZXN1bHQuaXNQbGFjZWhvbGRlckRhdGEpICYmIG9wdGlvbnMucGxhY2Vob2xkZXJEYXRhID09PSAocHJldlJlc3VsdE9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZSZXN1bHRPcHRpb25zLnBsYWNlaG9sZGVyRGF0YSkpIHtcbiAgICAgICAgcGxhY2Vob2xkZXJEYXRhID0gcHJldlJlc3VsdC5kYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxhY2Vob2xkZXJEYXRhID0gdHlwZW9mIG9wdGlvbnMucGxhY2Vob2xkZXJEYXRhID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5wbGFjZWhvbGRlckRhdGEoKSA6IG9wdGlvbnMucGxhY2Vob2xkZXJEYXRhO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNlbGVjdCAmJiB0eXBlb2YgcGxhY2Vob2xkZXJEYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlckRhdGEgPSBvcHRpb25zLnNlbGVjdChwbGFjZWhvbGRlckRhdGEpO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zdHJ1Y3R1cmFsU2hhcmluZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXJEYXRhID0gcmVwbGFjZUVxdWFsRGVlcChwcmV2UmVzdWx0ID09IG51bGwgPyB2b2lkIDAgOiBwcmV2UmVzdWx0LmRhdGEsIHBsYWNlaG9sZGVyRGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNTZWxlY3RFcnJvciA9IG51bGw7XG4gICAgICAgICAgfSBjYXRjaCAoc2VsZWN0RXJyb3IpIHtcbiAgICAgICAgICAgIGdldExvZ2dlcigpLmVycm9yKHNlbGVjdEVycm9yKTtcbiAgICAgICAgICAgIGVycm9yID0gc2VsZWN0RXJyb3I7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzU2VsZWN0RXJyb3IgPSBzZWxlY3RFcnJvcjtcbiAgICAgICAgICAgIGVycm9yVXBkYXRlZEF0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdlcnJvcic7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgcGxhY2Vob2xkZXJEYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzdGF0dXMgPSAnc3VjY2Vzcyc7XG4gICAgICAgIGRhdGEgPSBwbGFjZWhvbGRlckRhdGE7XG4gICAgICAgIGlzUGxhY2Vob2xkZXJEYXRhID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICBpc0xvYWRpbmc6IHN0YXR1cyA9PT0gJ2xvYWRpbmcnLFxuICAgICAgaXNTdWNjZXNzOiBzdGF0dXMgPT09ICdzdWNjZXNzJyxcbiAgICAgIGlzRXJyb3I6IHN0YXR1cyA9PT0gJ2Vycm9yJyxcbiAgICAgIGlzSWRsZTogc3RhdHVzID09PSAnaWRsZScsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgZGF0YVVwZGF0ZWRBdDogZGF0YVVwZGF0ZWRBdCxcbiAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgIGVycm9yVXBkYXRlZEF0OiBlcnJvclVwZGF0ZWRBdCxcbiAgICAgIGZhaWx1cmVDb3VudDogc3RhdGUuZmV0Y2hGYWlsdXJlQ291bnQsXG4gICAgICBpc0ZldGNoZWQ6IHN0YXRlLmRhdGFVcGRhdGVDb3VudCA+IDAgfHwgc3RhdGUuZXJyb3JVcGRhdGVDb3VudCA+IDAsXG4gICAgICBpc0ZldGNoZWRBZnRlck1vdW50OiBzdGF0ZS5kYXRhVXBkYXRlQ291bnQgPiBxdWVyeUluaXRpYWxTdGF0ZS5kYXRhVXBkYXRlQ291bnQgfHwgc3RhdGUuZXJyb3JVcGRhdGVDb3VudCA+IHF1ZXJ5SW5pdGlhbFN0YXRlLmVycm9yVXBkYXRlQ291bnQsXG4gICAgICBpc0ZldGNoaW5nOiBpc0ZldGNoaW5nLFxuICAgICAgaXNMb2FkaW5nRXJyb3I6IHN0YXR1cyA9PT0gJ2Vycm9yJyAmJiBzdGF0ZS5kYXRhVXBkYXRlZEF0ID09PSAwLFxuICAgICAgaXNQbGFjZWhvbGRlckRhdGE6IGlzUGxhY2Vob2xkZXJEYXRhLFxuICAgICAgaXNQcmV2aW91c0RhdGE6IGlzUHJldmlvdXNEYXRhLFxuICAgICAgaXNSZWZldGNoRXJyb3I6IHN0YXR1cyA9PT0gJ2Vycm9yJyAmJiBzdGF0ZS5kYXRhVXBkYXRlZEF0ICE9PSAwLFxuICAgICAgaXNTdGFsZTogaXNTdGFsZShxdWVyeSwgb3B0aW9ucyksXG4gICAgICByZWZldGNoOiB0aGlzLnJlZmV0Y2gsXG4gICAgICByZW1vdmU6IHRoaXMucmVtb3ZlXG4gICAgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by5zaG91bGROb3RpZnlMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzaG91bGROb3RpZnlMaXN0ZW5lcnMocmVzdWx0LCBwcmV2UmVzdWx0KSB7XG4gICAgaWYgKCFwcmV2UmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ID09PSBwcmV2UmVzdWx0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIG5vdGlmeU9uQ2hhbmdlUHJvcHMgPSBfdGhpcyRvcHRpb25zLm5vdGlmeU9uQ2hhbmdlUHJvcHMsXG4gICAgICAgIG5vdGlmeU9uQ2hhbmdlUHJvcHNFeGNsdXNpb25zID0gX3RoaXMkb3B0aW9ucy5ub3RpZnlPbkNoYW5nZVByb3BzRXhjbHVzaW9ucztcblxuICAgIGlmICghbm90aWZ5T25DaGFuZ2VQcm9wcyAmJiAhbm90aWZ5T25DaGFuZ2VQcm9wc0V4Y2x1c2lvbnMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChub3RpZnlPbkNoYW5nZVByb3BzID09PSAndHJhY2tlZCcgJiYgIXRoaXMudHJhY2tlZFByb3BzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGluY2x1ZGVkUHJvcHMgPSBub3RpZnlPbkNoYW5nZVByb3BzID09PSAndHJhY2tlZCcgPyB0aGlzLnRyYWNrZWRQcm9wcyA6IG5vdGlmeU9uQ2hhbmdlUHJvcHM7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHJlc3VsdCkuc29tZShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgdHlwZWRLZXkgPSBrZXk7XG4gICAgICB2YXIgY2hhbmdlZCA9IHJlc3VsdFt0eXBlZEtleV0gIT09IHByZXZSZXN1bHRbdHlwZWRLZXldO1xuICAgICAgdmFyIGlzSW5jbHVkZWQgPSBpbmNsdWRlZFByb3BzID09IG51bGwgPyB2b2lkIDAgOiBpbmNsdWRlZFByb3BzLnNvbWUoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHggPT09IGtleTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGlzRXhjbHVkZWQgPSBub3RpZnlPbkNoYW5nZVByb3BzRXhjbHVzaW9ucyA9PSBudWxsID8gdm9pZCAwIDogbm90aWZ5T25DaGFuZ2VQcm9wc0V4Y2x1c2lvbnMuc29tZShmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geCA9PT0ga2V5O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2hhbmdlZCAmJiAhaXNFeGNsdWRlZCAmJiAoIWluY2x1ZGVkUHJvcHMgfHwgaXNJbmNsdWRlZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVJlc3VsdCA9IGZ1bmN0aW9uIHVwZGF0ZVJlc3VsdChub3RpZnlPcHRpb25zKSB7XG4gICAgdmFyIHByZXZSZXN1bHQgPSB0aGlzLmN1cnJlbnRSZXN1bHQ7XG4gICAgdGhpcy5jdXJyZW50UmVzdWx0ID0gdGhpcy5jcmVhdGVSZXN1bHQodGhpcy5jdXJyZW50UXVlcnksIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5jdXJyZW50UmVzdWx0U3RhdGUgPSB0aGlzLmN1cnJlbnRRdWVyeS5zdGF0ZTtcbiAgICB0aGlzLmN1cnJlbnRSZXN1bHRPcHRpb25zID0gdGhpcy5vcHRpb25zOyAvLyBPbmx5IG5vdGlmeSBpZiBzb21ldGhpbmcgaGFzIGNoYW5nZWRcblxuICAgIGlmIChzaGFsbG93RXF1YWxPYmplY3RzKHRoaXMuY3VycmVudFJlc3VsdCwgcHJldlJlc3VsdCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIERldGVybWluZSB3aGljaCBjYWxsYmFja3MgdG8gdHJpZ2dlclxuXG5cbiAgICB2YXIgZGVmYXVsdE5vdGlmeU9wdGlvbnMgPSB7XG4gICAgICBjYWNoZTogdHJ1ZVxuICAgIH07XG5cbiAgICBpZiAoKG5vdGlmeU9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG5vdGlmeU9wdGlvbnMubGlzdGVuZXJzKSAhPT0gZmFsc2UgJiYgdGhpcy5zaG91bGROb3RpZnlMaXN0ZW5lcnModGhpcy5jdXJyZW50UmVzdWx0LCBwcmV2UmVzdWx0KSkge1xuICAgICAgZGVmYXVsdE5vdGlmeU9wdGlvbnMubGlzdGVuZXJzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLm5vdGlmeShfZXh0ZW5kcyh7fSwgZGVmYXVsdE5vdGlmeU9wdGlvbnMsIG5vdGlmeU9wdGlvbnMpKTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlUXVlcnkgPSBmdW5jdGlvbiB1cGRhdGVRdWVyeSgpIHtcbiAgICB2YXIgcXVlcnkgPSB0aGlzLmNsaWVudC5nZXRRdWVyeUNhY2hlKCkuYnVpbGQodGhpcy5jbGllbnQsIHRoaXMub3B0aW9ucyk7XG5cbiAgICBpZiAocXVlcnkgPT09IHRoaXMuY3VycmVudFF1ZXJ5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByZXZRdWVyeSA9IHRoaXMuY3VycmVudFF1ZXJ5O1xuICAgIHRoaXMuY3VycmVudFF1ZXJ5ID0gcXVlcnk7XG4gICAgdGhpcy5jdXJyZW50UXVlcnlJbml0aWFsU3RhdGUgPSBxdWVyeS5zdGF0ZTtcbiAgICB0aGlzLnByZXZpb3VzUXVlcnlSZXN1bHQgPSB0aGlzLmN1cnJlbnRSZXN1bHQ7XG5cbiAgICBpZiAodGhpcy5oYXNMaXN0ZW5lcnMoKSkge1xuICAgICAgcHJldlF1ZXJ5ID09IG51bGwgPyB2b2lkIDAgOiBwcmV2UXVlcnkucmVtb3ZlT2JzZXJ2ZXIodGhpcyk7XG4gICAgICBxdWVyeS5hZGRPYnNlcnZlcih0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uUXVlcnlVcGRhdGUgPSBmdW5jdGlvbiBvblF1ZXJ5VXBkYXRlKGFjdGlvbikge1xuICAgIHZhciBub3RpZnlPcHRpb25zID0ge307XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgbm90aWZ5T3B0aW9ucy5vblN1Y2Nlc3MgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09ICdlcnJvcicgJiYgIWlzQ2FuY2VsbGVkRXJyb3IoYWN0aW9uLmVycm9yKSkge1xuICAgICAgbm90aWZ5T3B0aW9ucy5vbkVycm9yID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVJlc3VsdChub3RpZnlPcHRpb25zKTtcblxuICAgIGlmICh0aGlzLmhhc0xpc3RlbmVycygpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRpbWVycygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5KG5vdGlmeU9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgLy8gRmlyc3QgdHJpZ2dlciB0aGUgY29uZmlndXJhdGlvbiBjYWxsYmFja3NcbiAgICAgIGlmIChub3RpZnlPcHRpb25zLm9uU3VjY2Vzcykge1xuICAgICAgICBfdGhpczgub3B0aW9ucy5vblN1Y2Nlc3MgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzOC5vcHRpb25zLm9uU3VjY2VzcyhfdGhpczguY3VycmVudFJlc3VsdC5kYXRhKTtcbiAgICAgICAgX3RoaXM4Lm9wdGlvbnMub25TZXR0bGVkID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczgub3B0aW9ucy5vblNldHRsZWQoX3RoaXM4LmN1cnJlbnRSZXN1bHQuZGF0YSwgbnVsbCk7XG4gICAgICB9IGVsc2UgaWYgKG5vdGlmeU9wdGlvbnMub25FcnJvcikge1xuICAgICAgICBfdGhpczgub3B0aW9ucy5vbkVycm9yID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczgub3B0aW9ucy5vbkVycm9yKF90aGlzOC5jdXJyZW50UmVzdWx0LmVycm9yKTtcbiAgICAgICAgX3RoaXM4Lm9wdGlvbnMub25TZXR0bGVkID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczgub3B0aW9ucy5vblNldHRsZWQodW5kZWZpbmVkLCBfdGhpczguY3VycmVudFJlc3VsdC5lcnJvcik7XG4gICAgICB9IC8vIFRoZW4gdHJpZ2dlciB0aGUgbGlzdGVuZXJzXG5cblxuICAgICAgaWYgKG5vdGlmeU9wdGlvbnMubGlzdGVuZXJzKSB7XG4gICAgICAgIF90aGlzOC5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICBsaXN0ZW5lcihfdGhpczguY3VycmVudFJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBUaGVuIHRoZSBjYWNoZSBsaXN0ZW5lcnNcblxuXG4gICAgICBpZiAobm90aWZ5T3B0aW9ucy5jYWNoZSkge1xuICAgICAgICBfdGhpczguY2xpZW50LmdldFF1ZXJ5Q2FjaGUoKS5ub3RpZnkoe1xuICAgICAgICAgIHF1ZXJ5OiBfdGhpczguY3VycmVudFF1ZXJ5LFxuICAgICAgICAgIHR5cGU6ICdvYnNlcnZlclJlc3VsdHNVcGRhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gUXVlcnlPYnNlcnZlcjtcbn0oU3Vic2NyaWJhYmxlKTtcblxuZnVuY3Rpb24gc2hvdWxkTG9hZE9uTW91bnQocXVlcnksIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuZW5hYmxlZCAhPT0gZmFsc2UgJiYgIXF1ZXJ5LnN0YXRlLmRhdGFVcGRhdGVkQXQgJiYgIShxdWVyeS5zdGF0ZS5zdGF0dXMgPT09ICdlcnJvcicgJiYgb3B0aW9ucy5yZXRyeU9uTW91bnQgPT09IGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkUmVmZXRjaE9uTW91bnQocXVlcnksIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuZW5hYmxlZCAhPT0gZmFsc2UgJiYgcXVlcnkuc3RhdGUuZGF0YVVwZGF0ZWRBdCA+IDAgJiYgKG9wdGlvbnMucmVmZXRjaE9uTW91bnQgPT09ICdhbHdheXMnIHx8IG9wdGlvbnMucmVmZXRjaE9uTW91bnQgIT09IGZhbHNlICYmIGlzU3RhbGUocXVlcnksIG9wdGlvbnMpKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkRmV0Y2hPbk1vdW50KHF1ZXJ5LCBvcHRpb25zKSB7XG4gIHJldHVybiBzaG91bGRMb2FkT25Nb3VudChxdWVyeSwgb3B0aW9ucykgfHwgc2hvdWxkUmVmZXRjaE9uTW91bnQocXVlcnksIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBfc2hvdWxkRmV0Y2hPblJlY29ubmVjdChxdWVyeSwgb3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5lbmFibGVkICE9PSBmYWxzZSAmJiAob3B0aW9ucy5yZWZldGNoT25SZWNvbm5lY3QgPT09ICdhbHdheXMnIHx8IG9wdGlvbnMucmVmZXRjaE9uUmVjb25uZWN0ICE9PSBmYWxzZSAmJiBpc1N0YWxlKHF1ZXJ5LCBvcHRpb25zKSk7XG59XG5cbmZ1bmN0aW9uIF9zaG91bGRGZXRjaE9uV2luZG93Rm9jdXMocXVlcnksIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuZW5hYmxlZCAhPT0gZmFsc2UgJiYgKG9wdGlvbnMucmVmZXRjaE9uV2luZG93Rm9jdXMgPT09ICdhbHdheXMnIHx8IG9wdGlvbnMucmVmZXRjaE9uV2luZG93Rm9jdXMgIT09IGZhbHNlICYmIGlzU3RhbGUocXVlcnksIG9wdGlvbnMpKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkRmV0Y2hPcHRpb25hbGx5KHF1ZXJ5LCBwcmV2UXVlcnksIG9wdGlvbnMsIHByZXZPcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmVuYWJsZWQgIT09IGZhbHNlICYmIChxdWVyeSAhPT0gcHJldlF1ZXJ5IHx8IHByZXZPcHRpb25zLmVuYWJsZWQgPT09IGZhbHNlKSAmJiBpc1N0YWxlKHF1ZXJ5LCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gaXNTdGFsZShxdWVyeSwgb3B0aW9ucykge1xuICByZXR1cm4gcXVlcnkuaXNTdGFsZUJ5VGltZShvcHRpb25zLnN0YWxlVGltZSk7XG59IiwiaW1wb3J0IHsgZm9jdXNNYW5hZ2VyIH0gZnJvbSAnLi9mb2N1c01hbmFnZXInO1xuaW1wb3J0IHsgb25saW5lTWFuYWdlciB9IGZyb20gJy4vb25saW5lTWFuYWdlcic7XG5pbXBvcnQgeyBzbGVlcCB9IGZyb20gJy4vdXRpbHMnOyAvLyBUWVBFU1xuXG5mdW5jdGlvbiBkZWZhdWx0UmV0cnlEZWxheShmYWlsdXJlQ291bnQpIHtcbiAgcmV0dXJuIE1hdGgubWluKDEwMDAgKiBNYXRoLnBvdygyLCBmYWlsdXJlQ291bnQpLCAzMDAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NhbmNlbGFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiAodmFsdWUgPT0gbnVsbCA/IHZvaWQgMCA6IHZhbHVlLmNhbmNlbCkgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnQgdmFyIENhbmNlbGxlZEVycm9yID0gZnVuY3Rpb24gQ2FuY2VsbGVkRXJyb3Iob3B0aW9ucykge1xuICB0aGlzLnJldmVydCA9IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMucmV2ZXJ0O1xuICB0aGlzLnNpbGVudCA9IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuc2lsZW50O1xufTtcbmV4cG9ydCBmdW5jdGlvbiBpc0NhbmNlbGxlZEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIENhbmNlbGxlZEVycm9yO1xufSAvLyBDTEFTU1xuXG5leHBvcnQgdmFyIFJldHJ5ZXIgPSBmdW5jdGlvbiBSZXRyeWVyKGNvbmZpZykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciBjYW5jZWxSZXRyeSA9IGZhbHNlO1xuICB2YXIgY2FuY2VsRm47XG4gIHZhciBjb250aW51ZUZuO1xuICB2YXIgcHJvbWlzZVJlc29sdmU7XG4gIHZhciBwcm9taXNlUmVqZWN0O1xuXG4gIHRoaXMuY2FuY2VsID0gZnVuY3Rpb24gKGNhbmNlbE9wdGlvbnMpIHtcbiAgICByZXR1cm4gY2FuY2VsRm4gPT0gbnVsbCA/IHZvaWQgMCA6IGNhbmNlbEZuKGNhbmNlbE9wdGlvbnMpO1xuICB9O1xuXG4gIHRoaXMuY2FuY2VsUmV0cnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2FuY2VsUmV0cnkgPSB0cnVlO1xuICB9O1xuXG4gIHRoaXMuY29udGludWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNvbnRpbnVlRm4gPT0gbnVsbCA/IHZvaWQgMCA6IGNvbnRpbnVlRm4oKTtcbiAgfTtcblxuICB0aGlzLmZhaWx1cmVDb3VudCA9IDA7XG4gIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgdGhpcy5pc1Jlc29sdmVkID0gZmFsc2U7XG4gIHRoaXMuaXNUcmFuc3BvcnRDYW5jZWxhYmxlID0gZmFsc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChvdXRlclJlc29sdmUsIG91dGVyUmVqZWN0KSB7XG4gICAgcHJvbWlzZVJlc29sdmUgPSBvdXRlclJlc29sdmU7XG4gICAgcHJvbWlzZVJlamVjdCA9IG91dGVyUmVqZWN0O1xuICB9KTtcblxuICB2YXIgcmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUodmFsdWUpIHtcbiAgICBpZiAoIV90aGlzLmlzUmVzb2x2ZWQpIHtcbiAgICAgIF90aGlzLmlzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgY29uZmlnLm9uU3VjY2VzcyA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLm9uU3VjY2Vzcyh2YWx1ZSk7XG4gICAgICBjb250aW51ZUZuID09IG51bGwgPyB2b2lkIDAgOiBjb250aW51ZUZuKCk7XG4gICAgICBwcm9taXNlUmVzb2x2ZSh2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciByZWplY3QgPSBmdW5jdGlvbiByZWplY3QodmFsdWUpIHtcbiAgICBpZiAoIV90aGlzLmlzUmVzb2x2ZWQpIHtcbiAgICAgIF90aGlzLmlzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgY29uZmlnLm9uRXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5vbkVycm9yKHZhbHVlKTtcbiAgICAgIGNvbnRpbnVlRm4gPT0gbnVsbCA/IHZvaWQgMCA6IGNvbnRpbnVlRm4oKTtcbiAgICAgIHByb21pc2VSZWplY3QodmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcGF1c2UgPSBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGNvbnRpbnVlUmVzb2x2ZSkge1xuICAgICAgY29udGludWVGbiA9IGNvbnRpbnVlUmVzb2x2ZTtcbiAgICAgIF90aGlzLmlzUGF1c2VkID0gdHJ1ZTtcbiAgICAgIGNvbmZpZy5vblBhdXNlID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcub25QYXVzZSgpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgY29udGludWVGbiA9IHVuZGVmaW5lZDtcbiAgICAgIF90aGlzLmlzUGF1c2VkID0gZmFsc2U7XG4gICAgICBjb25maWcub25Db250aW51ZSA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLm9uQ29udGludWUoKTtcbiAgICB9KTtcbiAgfTsgLy8gQ3JlYXRlIGxvb3AgZnVuY3Rpb25cblxuXG4gIHZhciBydW4gPSBmdW5jdGlvbiBydW4oKSB7XG4gICAgLy8gRG8gbm90aGluZyBpZiBhbHJlYWR5IHJlc29sdmVkXG4gICAgaWYgKF90aGlzLmlzUmVzb2x2ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvbWlzZU9yVmFsdWU7IC8vIEV4ZWN1dGUgcXVlcnlcblxuICAgIHRyeSB7XG4gICAgICBwcm9taXNlT3JWYWx1ZSA9IGNvbmZpZy5mbigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBwcm9taXNlT3JWYWx1ZSA9IFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9IC8vIENyZWF0ZSBjYWxsYmFjayB0byBjYW5jZWwgdGhpcyBmZXRjaFxuXG5cbiAgICBjYW5jZWxGbiA9IGZ1bmN0aW9uIGNhbmNlbEZuKGNhbmNlbE9wdGlvbnMpIHtcbiAgICAgIGlmICghX3RoaXMuaXNSZXNvbHZlZCkge1xuICAgICAgICByZWplY3QobmV3IENhbmNlbGxlZEVycm9yKGNhbmNlbE9wdGlvbnMpKTsgLy8gQ2FuY2VsIHRyYW5zcG9ydCBpZiBzdXBwb3J0ZWRcblxuICAgICAgICBpZiAoaXNDYW5jZWxhYmxlKHByb21pc2VPclZhbHVlKSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwcm9taXNlT3JWYWx1ZS5jYW5jZWwoKTtcbiAgICAgICAgICB9IGNhdGNoIChfdW51c2VkKSB7fVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTsgLy8gQ2hlY2sgaWYgdGhlIHRyYW5zcG9ydCBsYXllciBzdXBwb3J0IGNhbmNlbGxhdGlvblxuXG5cbiAgICBfdGhpcy5pc1RyYW5zcG9ydENhbmNlbGFibGUgPSBpc0NhbmNlbGFibGUocHJvbWlzZU9yVmFsdWUpO1xuICAgIFByb21pc2UucmVzb2x2ZShwcm9taXNlT3JWYWx1ZSkudGhlbihyZXNvbHZlKS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIHZhciBfY29uZmlnJHJldHJ5LCBfY29uZmlnJHJldHJ5RGVsYXk7XG5cbiAgICAgIC8vIFN0b3AgaWYgdGhlIGZldGNoIGlzIGFscmVhZHkgcmVzb2x2ZWRcbiAgICAgIGlmIChfdGhpcy5pc1Jlc29sdmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gRG8gd2UgbmVlZCB0byByZXRyeSB0aGUgcmVxdWVzdD9cblxuXG4gICAgICB2YXIgcmV0cnkgPSAoX2NvbmZpZyRyZXRyeSA9IGNvbmZpZy5yZXRyeSkgIT0gbnVsbCA/IF9jb25maWckcmV0cnkgOiAzO1xuICAgICAgdmFyIHJldHJ5RGVsYXkgPSAoX2NvbmZpZyRyZXRyeURlbGF5ID0gY29uZmlnLnJldHJ5RGVsYXkpICE9IG51bGwgPyBfY29uZmlnJHJldHJ5RGVsYXkgOiBkZWZhdWx0UmV0cnlEZWxheTtcbiAgICAgIHZhciBkZWxheSA9IHR5cGVvZiByZXRyeURlbGF5ID09PSAnZnVuY3Rpb24nID8gcmV0cnlEZWxheShfdGhpcy5mYWlsdXJlQ291bnQsIGVycm9yKSA6IHJldHJ5RGVsYXk7XG4gICAgICB2YXIgc2hvdWxkUmV0cnkgPSByZXRyeSA9PT0gdHJ1ZSB8fCB0eXBlb2YgcmV0cnkgPT09ICdudW1iZXInICYmIF90aGlzLmZhaWx1cmVDb3VudCA8IHJldHJ5IHx8IHR5cGVvZiByZXRyeSA9PT0gJ2Z1bmN0aW9uJyAmJiByZXRyeShfdGhpcy5mYWlsdXJlQ291bnQsIGVycm9yKTtcblxuICAgICAgaWYgKGNhbmNlbFJldHJ5IHx8ICFzaG91bGRSZXRyeSkge1xuICAgICAgICAvLyBXZSBhcmUgZG9uZSBpZiB0aGUgcXVlcnkgZG9lcyBub3QgbmVlZCB0byBiZSByZXRyaWVkXG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuZmFpbHVyZUNvdW50Kys7IC8vIE5vdGlmeSBvbiBmYWlsXG5cbiAgICAgIGNvbmZpZy5vbkZhaWwgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5vbkZhaWwoX3RoaXMuZmFpbHVyZUNvdW50LCBlcnJvcik7IC8vIERlbGF5XG5cbiAgICAgIHNsZWVwKGRlbGF5KSAvLyBQYXVzZSBpZiB0aGUgZG9jdW1lbnQgaXMgbm90IHZpc2libGUgb3Igd2hlbiB0aGUgZGV2aWNlIGlzIG9mZmxpbmVcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFmb2N1c01hbmFnZXIuaXNGb2N1c2VkKCkgfHwgIW9ubGluZU1hbmFnZXIuaXNPbmxpbmUoKSkge1xuICAgICAgICAgIHJldHVybiBwYXVzZSgpO1xuICAgICAgICB9XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNhbmNlbFJldHJ5KSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBydW4oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07IC8vIFN0YXJ0IGxvb3BcblxuXG4gIHJ1bigpO1xufTsiLCJleHBvcnQgdmFyIFN1YnNjcmliYWJsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN1YnNjcmliYWJsZSgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN1YnNjcmliYWJsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgY2FsbGJhY2sgPSBsaXN0ZW5lciB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG5cbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICB0aGlzLm9uU3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmxpc3RlbmVycyA9IF90aGlzLmxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHggIT09IGNhbGxiYWNrO1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLm9uVW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbiBoYXNMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXJzLmxlbmd0aCA+IDA7XG4gIH07XG5cbiAgX3Byb3RvLm9uU3Vic2NyaWJlID0gZnVuY3Rpb24gb25TdWJzY3JpYmUoKSB7Ly8gRG8gbm90aGluZ1xuICB9O1xuXG4gIF9wcm90by5vblVuc3Vic2NyaWJlID0gZnVuY3Rpb24gb25VbnN1YnNjcmliZSgpIHsvLyBEbyBub3RoaW5nXG4gIH07XG5cbiAgcmV0dXJuIFN1YnNjcmliYWJsZTtcbn0oKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbi8vIFRZUEVTXG4vLyBVVElMU1xuZXhwb3J0IHZhciBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZnVuY3Rpb25hbFVwZGF0ZSh1cGRhdGVyLCBpbnB1dCkge1xuICByZXR1cm4gdHlwZW9mIHVwZGF0ZXIgPT09ICdmdW5jdGlvbicgPyB1cGRhdGVyKGlucHV0KSA6IHVwZGF0ZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFRpbWVvdXQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgPj0gMCAmJiB2YWx1ZSAhPT0gSW5maW5pdHk7XG59XG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlUXVlcnlLZXlBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG59XG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZShhcnJheTEsIGFycmF5Mikge1xuICByZXR1cm4gYXJyYXkxLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBhcnJheTIuaW5kZXhPZih4KSA9PT0gLTE7XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBdChhcnJheSwgaW5kZXgsIHZhbHVlKSB7XG4gIHZhciBjb3B5ID0gYXJyYXkuc2xpY2UoMCk7XG4gIGNvcHlbaW5kZXhdID0gdmFsdWU7XG4gIHJldHVybiBjb3B5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVVbnRpbFN0YWxlKHVwZGF0ZWRBdCwgc3RhbGVUaW1lKSB7XG4gIHJldHVybiBNYXRoLm1heCh1cGRhdGVkQXQgKyAoc3RhbGVUaW1lIHx8IDApIC0gRGF0ZS5ub3coKSwgMCk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VRdWVyeUFyZ3MoYXJnMSwgYXJnMiwgYXJnMykge1xuICBpZiAoIWlzUXVlcnlLZXkoYXJnMSkpIHtcbiAgICByZXR1cm4gYXJnMTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYXJnMiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgYXJnMywge1xuICAgICAgcXVlcnlLZXk6IGFyZzEsXG4gICAgICBxdWVyeUZuOiBhcmcyXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGFyZzIsIHtcbiAgICBxdWVyeUtleTogYXJnMVxuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU11dGF0aW9uQXJncyhhcmcxLCBhcmcyLCBhcmczKSB7XG4gIGlmIChpc1F1ZXJ5S2V5KGFyZzEpKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGFyZzMsIHtcbiAgICAgICAgbXV0YXRpb25LZXk6IGFyZzEsXG4gICAgICAgIG11dGF0aW9uRm46IGFyZzJcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgYXJnMiwge1xuICAgICAgbXV0YXRpb25LZXk6IGFyZzFcbiAgICB9KTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYXJnMSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgYXJnMiwge1xuICAgICAgbXV0YXRpb25GbjogYXJnMVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBhcmcxKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiwgYXJnMykge1xuICByZXR1cm4gaXNRdWVyeUtleShhcmcxKSA/IFtfZXh0ZW5kcyh7fSwgYXJnMiwge1xuICAgIHF1ZXJ5S2V5OiBhcmcxXG4gIH0pLCBhcmczXSA6IFthcmcxIHx8IHt9LCBhcmcyXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXBRdWVyeVN0YXR1c0ZpbHRlcihhY3RpdmUsIGluYWN0aXZlKSB7XG4gIGlmIChhY3RpdmUgPT09IHRydWUgJiYgaW5hY3RpdmUgPT09IHRydWUgfHwgYWN0aXZlID09IG51bGwgJiYgaW5hY3RpdmUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnYWxsJztcbiAgfSBlbHNlIGlmIChhY3RpdmUgPT09IGZhbHNlICYmIGluYWN0aXZlID09PSBmYWxzZSkge1xuICAgIHJldHVybiAnbm9uZSc7XG4gIH0gZWxzZSB7XG4gICAgLy8gQXQgdGhpcyBwb2ludCwgYWN0aXZlfGluYWN0aXZlIGNhbiBvbmx5IGJlIHRydWV8ZmFsc2Ugb3IgZmFsc2V8dHJ1ZVxuICAgIC8vIHNvLCB3aGVuIG9ubHkgb25lIHZhbHVlIGlzIHByb3ZpZGVkLCB0aGUgbWlzc2luZyBvbmUgaGFzIHRvIGJlIHRoZSBuZWdhdGVkIHZhbHVlXG4gICAgdmFyIGlzQWN0aXZlID0gYWN0aXZlICE9IG51bGwgPyBhY3RpdmUgOiAhaW5hY3RpdmU7XG4gICAgcmV0dXJuIGlzQWN0aXZlID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hRdWVyeShmaWx0ZXJzLCBxdWVyeSkge1xuICB2YXIgYWN0aXZlID0gZmlsdGVycy5hY3RpdmUsXG4gICAgICBleGFjdCA9IGZpbHRlcnMuZXhhY3QsXG4gICAgICBmZXRjaGluZyA9IGZpbHRlcnMuZmV0Y2hpbmcsXG4gICAgICBpbmFjdGl2ZSA9IGZpbHRlcnMuaW5hY3RpdmUsXG4gICAgICBwcmVkaWNhdGUgPSBmaWx0ZXJzLnByZWRpY2F0ZSxcbiAgICAgIHF1ZXJ5S2V5ID0gZmlsdGVycy5xdWVyeUtleSxcbiAgICAgIHN0YWxlID0gZmlsdGVycy5zdGFsZTtcblxuICBpZiAoaXNRdWVyeUtleShxdWVyeUtleSkpIHtcbiAgICBpZiAoZXhhY3QpIHtcbiAgICAgIGlmIChxdWVyeS5xdWVyeUhhc2ggIT09IGhhc2hRdWVyeUtleUJ5T3B0aW9ucyhxdWVyeUtleSwgcXVlcnkub3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXBhcnRpYWxNYXRjaEtleShxdWVyeS5xdWVyeUtleSwgcXVlcnlLZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIHF1ZXJ5U3RhdHVzRmlsdGVyID0gbWFwUXVlcnlTdGF0dXNGaWx0ZXIoYWN0aXZlLCBpbmFjdGl2ZSk7XG5cbiAgaWYgKHF1ZXJ5U3RhdHVzRmlsdGVyID09PSAnbm9uZScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAocXVlcnlTdGF0dXNGaWx0ZXIgIT09ICdhbGwnKSB7XG4gICAgdmFyIGlzQWN0aXZlID0gcXVlcnkuaXNBY3RpdmUoKTtcblxuICAgIGlmIChxdWVyeVN0YXR1c0ZpbHRlciA9PT0gJ2FjdGl2ZScgJiYgIWlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHF1ZXJ5U3RhdHVzRmlsdGVyID09PSAnaW5hY3RpdmUnICYmIGlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBzdGFsZSA9PT0gJ2Jvb2xlYW4nICYmIHF1ZXJ5LmlzU3RhbGUoKSAhPT0gc3RhbGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIGZldGNoaW5nID09PSAnYm9vbGVhbicgJiYgcXVlcnkuaXNGZXRjaGluZygpICE9PSBmZXRjaGluZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChwcmVkaWNhdGUgJiYgIXByZWRpY2F0ZShxdWVyeSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaE11dGF0aW9uKGZpbHRlcnMsIG11dGF0aW9uKSB7XG4gIHZhciBleGFjdCA9IGZpbHRlcnMuZXhhY3QsXG4gICAgICBmZXRjaGluZyA9IGZpbHRlcnMuZmV0Y2hpbmcsXG4gICAgICBwcmVkaWNhdGUgPSBmaWx0ZXJzLnByZWRpY2F0ZSxcbiAgICAgIG11dGF0aW9uS2V5ID0gZmlsdGVycy5tdXRhdGlvbktleTtcblxuICBpZiAoaXNRdWVyeUtleShtdXRhdGlvbktleSkpIHtcbiAgICBpZiAoIW11dGF0aW9uLm9wdGlvbnMubXV0YXRpb25LZXkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZXhhY3QpIHtcbiAgICAgIGlmIChoYXNoUXVlcnlLZXkobXV0YXRpb24ub3B0aW9ucy5tdXRhdGlvbktleSkgIT09IGhhc2hRdWVyeUtleShtdXRhdGlvbktleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXBhcnRpYWxNYXRjaEtleShtdXRhdGlvbi5vcHRpb25zLm11dGF0aW9uS2V5LCBtdXRhdGlvbktleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGZldGNoaW5nID09PSAnYm9vbGVhbicgJiYgbXV0YXRpb24uc3RhdGUuc3RhdHVzID09PSAnbG9hZGluZycgIT09IGZldGNoaW5nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHByZWRpY2F0ZSAmJiAhcHJlZGljYXRlKG11dGF0aW9uKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hRdWVyeUtleUJ5T3B0aW9ucyhxdWVyeUtleSwgb3B0aW9ucykge1xuICB2YXIgaGFzaEZuID0gKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMucXVlcnlLZXlIYXNoRm4pIHx8IGhhc2hRdWVyeUtleTtcbiAgcmV0dXJuIGhhc2hGbihxdWVyeUtleSk7XG59XG4vKipcbiAqIERlZmF1bHQgcXVlcnkga2V5cyBoYXNoIGZ1bmN0aW9uLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNoUXVlcnlLZXkocXVlcnlLZXkpIHtcbiAgdmFyIGFzQXJyYXkgPSBlbnN1cmVRdWVyeUtleUFycmF5KHF1ZXJ5S2V5KTtcbiAgcmV0dXJuIHN0YWJsZVZhbHVlSGFzaChhc0FycmF5KTtcbn1cbi8qKlxuICogSGFzaGVzIHRoZSB2YWx1ZSBpbnRvIGEgc3RhYmxlIGhhc2guXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YWJsZVZhbHVlSGFzaCh2YWx1ZSkge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIGZ1bmN0aW9uIChfLCB2YWwpIHtcbiAgICByZXR1cm4gaXNQbGFpbk9iamVjdCh2YWwpID8gT2JqZWN0LmtleXModmFsKS5zb3J0KCkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWxba2V5XTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pIDogdmFsO1xuICB9KTtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIGtleSBgYmAgcGFydGlhbGx5IG1hdGNoZXMgd2l0aCBrZXkgYGFgLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aWFsTWF0Y2hLZXkoYSwgYikge1xuICByZXR1cm4gcGFydGlhbERlZXBFcXVhbChlbnN1cmVRdWVyeUtleUFycmF5KGEpLCBlbnN1cmVRdWVyeUtleUFycmF5KGIpKTtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIGBiYCBwYXJ0aWFsbHkgbWF0Y2hlcyB3aXRoIGBhYC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGFydGlhbERlZXBFcXVhbChhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIGEgIT09IHR5cGVvZiBiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICFPYmplY3Qua2V5cyhiKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiAhcGFydGlhbERlZXBFcXVhbChhW2tleV0sIGJba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBgYWAgaWYgYGJgIGlzIGRlZXBseSBlcXVhbC5cbiAqIElmIG5vdCwgaXQgd2lsbCByZXBsYWNlIGFueSBkZWVwbHkgZXF1YWwgY2hpbGRyZW4gb2YgYGJgIHdpdGggdGhvc2Ugb2YgYGFgLlxuICogVGhpcyBjYW4gYmUgdXNlZCBmb3Igc3RydWN0dXJhbCBzaGFyaW5nIGJldHdlZW4gSlNPTiB2YWx1ZXMgZm9yIGV4YW1wbGUuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VFcXVhbERlZXAoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShhKSAmJiBBcnJheS5pc0FycmF5KGIpO1xuXG4gIGlmIChhcnJheSB8fCBpc1BsYWluT2JqZWN0KGEpICYmIGlzUGxhaW5PYmplY3QoYikpIHtcbiAgICB2YXIgYVNpemUgPSBhcnJheSA/IGEubGVuZ3RoIDogT2JqZWN0LmtleXMoYSkubGVuZ3RoO1xuICAgIHZhciBiSXRlbXMgPSBhcnJheSA/IGIgOiBPYmplY3Qua2V5cyhiKTtcbiAgICB2YXIgYlNpemUgPSBiSXRlbXMubGVuZ3RoO1xuICAgIHZhciBjb3B5ID0gYXJyYXkgPyBbXSA6IHt9O1xuICAgIHZhciBlcXVhbEl0ZW1zID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYlNpemU7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGFycmF5ID8gaSA6IGJJdGVtc1tpXTtcbiAgICAgIGNvcHlba2V5XSA9IHJlcGxhY2VFcXVhbERlZXAoYVtrZXldLCBiW2tleV0pO1xuXG4gICAgICBpZiAoY29weVtrZXldID09PSBhW2tleV0pIHtcbiAgICAgICAgZXF1YWxJdGVtcysrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhU2l6ZSA9PT0gYlNpemUgJiYgZXF1YWxJdGVtcyA9PT0gYVNpemUgPyBhIDogY29weTtcbiAgfVxuXG4gIHJldHVybiBiO1xufVxuLyoqXG4gKiBTaGFsbG93IGNvbXBhcmUgb2JqZWN0cy4gT25seSB3b3JrcyB3aXRoIG9iamVjdHMgdGhhdCBhbHdheXMgaGF2ZSB0aGUgc2FtZSBwcm9wZXJ0aWVzLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzaGFsbG93RXF1YWxPYmplY3RzKGEsIGIpIHtcbiAgaWYgKGEgJiYgIWIgfHwgYiAmJiAhYSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBhKSB7XG4gICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IC8vIENvcGllZCBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1wbGFpbi1vYmplY3RcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qobykge1xuICBpZiAoIWhhc09iamVjdFByb3RvdHlwZShvKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBJZiBoYXMgbW9kaWZpZWQgY29uc3RydWN0b3JcblxuXG4gIHZhciBjdG9yID0gby5jb25zdHJ1Y3RvcjtcblxuICBpZiAodHlwZW9mIGN0b3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gSWYgaGFzIG1vZGlmaWVkIHByb3RvdHlwZVxuXG5cbiAgdmFyIHByb3QgPSBjdG9yLnByb3RvdHlwZTtcblxuICBpZiAoIWhhc09iamVjdFByb3RvdHlwZShwcm90KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBJZiBjb25zdHJ1Y3RvciBkb2VzIG5vdCBoYXZlIGFuIE9iamVjdC1zcGVjaWZpYyBtZXRob2RcblxuXG4gIGlmICghcHJvdC5oYXNPd25Qcm9wZXJ0eSgnaXNQcm90b3R5cGVPZicpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIE1vc3QgbGlrZWx5IGEgcGxhaW4gT2JqZWN0XG5cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaGFzT2JqZWN0UHJvdG90eXBlKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1F1ZXJ5S2V5KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzRXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRXJyb3I7XG59XG5leHBvcnQgZnVuY3Rpb24gc2xlZXAodGltZW91dCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWVvdXQpO1xuICB9KTtcbn1cbi8qKlxuICogU2NoZWR1bGVzIGEgbWljcm90YXNrLlxuICogVGhpcyBjYW4gYmUgdXNlZnVsIHRvIHNjaGVkdWxlIHN0YXRlIHVwZGF0ZXMgYWZ0ZXIgcmVuZGVyaW5nLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZU1pY3JvdGFzayhjYWxsYmFjaykge1xuICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGNhbGxiYWNrKS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9KTtcbiAgfSk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5cbi8vIFRZUEVTXG4vLyBGVU5DVElPTlNcbmZ1bmN0aW9uIGRlaHlkcmF0ZU11dGF0aW9uKG11dGF0aW9uKSB7XG4gIHJldHVybiB7XG4gICAgbXV0YXRpb25LZXk6IG11dGF0aW9uLm9wdGlvbnMubXV0YXRpb25LZXksXG4gICAgc3RhdGU6IG11dGF0aW9uLnN0YXRlXG4gIH07XG59IC8vIE1vc3QgY29uZmlnIGlzIG5vdCBkZWh5ZHJhdGVkIGJ1dCBpbnN0ZWFkIG1lYW50IHRvIGNvbmZpZ3VyZSBhZ2FpbiB3aGVuXG4vLyBjb25zdW1pbmcgdGhlIGRlL3JlaHlkcmF0ZWQgZGF0YSwgdHlwaWNhbGx5IHdpdGggdXNlUXVlcnkgb24gdGhlIGNsaWVudC5cbi8vIFNvbWV0aW1lcyBpdCBtaWdodCBtYWtlIHNlbnNlIHRvIHByZWZldGNoIGRhdGEgb24gdGhlIHNlcnZlciBhbmQgaW5jbHVkZVxuLy8gaW4gdGhlIGh0bWwtcGF5bG9hZCwgYnV0IG5vdCBjb25zdW1lIGl0IG9uIHRoZSBpbml0aWFsIHJlbmRlci5cblxuXG5mdW5jdGlvbiBkZWh5ZHJhdGVRdWVyeShxdWVyeSkge1xuICByZXR1cm4ge1xuICAgIHN0YXRlOiBxdWVyeS5zdGF0ZSxcbiAgICBxdWVyeUtleTogcXVlcnkucXVlcnlLZXksXG4gICAgcXVlcnlIYXNoOiBxdWVyeS5xdWVyeUhhc2hcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFNob3VsZERlaHlkcmF0ZU11dGF0aW9uKG11dGF0aW9uKSB7XG4gIHJldHVybiBtdXRhdGlvbi5zdGF0ZS5pc1BhdXNlZDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFNob3VsZERlaHlkcmF0ZVF1ZXJ5KHF1ZXJ5KSB7XG4gIHJldHVybiBxdWVyeS5zdGF0ZS5zdGF0dXMgPT09ICdzdWNjZXNzJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlaHlkcmF0ZShjbGllbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zLCBfb3B0aW9uczI7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBtdXRhdGlvbnMgPSBbXTtcbiAgdmFyIHF1ZXJpZXMgPSBbXTtcblxuICBpZiAoKChfb3B0aW9ucyA9IG9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBfb3B0aW9ucy5kZWh5ZHJhdGVNdXRhdGlvbnMpICE9PSBmYWxzZSkge1xuICAgIHZhciBzaG91bGREZWh5ZHJhdGVNdXRhdGlvbiA9IG9wdGlvbnMuc2hvdWxkRGVoeWRyYXRlTXV0YXRpb24gfHwgZGVmYXVsdFNob3VsZERlaHlkcmF0ZU11dGF0aW9uO1xuICAgIGNsaWVudC5nZXRNdXRhdGlvbkNhY2hlKCkuZ2V0QWxsKCkuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgIGlmIChzaG91bGREZWh5ZHJhdGVNdXRhdGlvbihtdXRhdGlvbikpIHtcbiAgICAgICAgbXV0YXRpb25zLnB1c2goZGVoeWRyYXRlTXV0YXRpb24obXV0YXRpb24pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICgoKF9vcHRpb25zMiA9IG9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBfb3B0aW9uczIuZGVoeWRyYXRlUXVlcmllcykgIT09IGZhbHNlKSB7XG4gICAgdmFyIHNob3VsZERlaHlkcmF0ZVF1ZXJ5ID0gb3B0aW9ucy5zaG91bGREZWh5ZHJhdGVRdWVyeSB8fCBkZWZhdWx0U2hvdWxkRGVoeWRyYXRlUXVlcnk7XG4gICAgY2xpZW50LmdldFF1ZXJ5Q2FjaGUoKS5nZXRBbGwoKS5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgaWYgKHNob3VsZERlaHlkcmF0ZVF1ZXJ5KHF1ZXJ5KSkge1xuICAgICAgICBxdWVyaWVzLnB1c2goZGVoeWRyYXRlUXVlcnkocXVlcnkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbXV0YXRpb25zOiBtdXRhdGlvbnMsXG4gICAgcXVlcmllczogcXVlcmllc1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGUoY2xpZW50LCBkZWh5ZHJhdGVkU3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkZWh5ZHJhdGVkU3RhdGUgIT09ICdvYmplY3QnIHx8IGRlaHlkcmF0ZWRTdGF0ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBtdXRhdGlvbkNhY2hlID0gY2xpZW50LmdldE11dGF0aW9uQ2FjaGUoKTtcbiAgdmFyIHF1ZXJ5Q2FjaGUgPSBjbGllbnQuZ2V0UXVlcnlDYWNoZSgpO1xuICB2YXIgbXV0YXRpb25zID0gZGVoeWRyYXRlZFN0YXRlLm11dGF0aW9ucyB8fCBbXTtcbiAgdmFyIHF1ZXJpZXMgPSBkZWh5ZHJhdGVkU3RhdGUucXVlcmllcyB8fCBbXTtcbiAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGRlaHlkcmF0ZWRNdXRhdGlvbikge1xuICAgIHZhciBfb3B0aW9ucyRkZWZhdWx0T3B0aW87XG5cbiAgICBtdXRhdGlvbkNhY2hlLmJ1aWxkKGNsaWVudCwgX2V4dGVuZHMoe30sIG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IChfb3B0aW9ucyRkZWZhdWx0T3B0aW8gPSBvcHRpb25zLmRlZmF1bHRPcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogX29wdGlvbnMkZGVmYXVsdE9wdGlvLm11dGF0aW9ucywge1xuICAgICAgbXV0YXRpb25LZXk6IGRlaHlkcmF0ZWRNdXRhdGlvbi5tdXRhdGlvbktleVxuICAgIH0pLCBkZWh5ZHJhdGVkTXV0YXRpb24uc3RhdGUpO1xuICB9KTtcbiAgcXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChkZWh5ZHJhdGVkUXVlcnkpIHtcbiAgICB2YXIgX29wdGlvbnMkZGVmYXVsdE9wdGlvMjtcblxuICAgIHZhciBxdWVyeSA9IHF1ZXJ5Q2FjaGUuZ2V0KGRlaHlkcmF0ZWRRdWVyeS5xdWVyeUhhc2gpOyAvLyBEbyBub3QgaHlkcmF0ZSBpZiBhbiBleGlzdGluZyBxdWVyeSBleGlzdHMgd2l0aCBuZXdlciBkYXRhXG5cbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIGlmIChxdWVyeS5zdGF0ZS5kYXRhVXBkYXRlZEF0IDwgZGVoeWRyYXRlZFF1ZXJ5LnN0YXRlLmRhdGFVcGRhdGVkQXQpIHtcbiAgICAgICAgcXVlcnkuc2V0U3RhdGUoZGVoeWRyYXRlZFF1ZXJ5LnN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gUmVzdG9yZSBxdWVyeVxuXG5cbiAgICBxdWVyeUNhY2hlLmJ1aWxkKGNsaWVudCwgX2V4dGVuZHMoe30sIG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IChfb3B0aW9ucyRkZWZhdWx0T3B0aW8yID0gb3B0aW9ucy5kZWZhdWx0T3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IF9vcHRpb25zJGRlZmF1bHRPcHRpbzIucXVlcmllcywge1xuICAgICAgcXVlcnlLZXk6IGRlaHlkcmF0ZWRRdWVyeS5xdWVyeUtleSxcbiAgICAgIHF1ZXJ5SGFzaDogZGVoeWRyYXRlZFF1ZXJ5LnF1ZXJ5SGFzaFxuICAgIH0pLCBkZWh5ZHJhdGVkUXVlcnkuc3RhdGUpO1xuICB9KTtcbn0iLCJleHBvcnQgeyBkZWh5ZHJhdGUsIGh5ZHJhdGUgfSBmcm9tICcuL2h5ZHJhdGlvbic7XG5leHBvcnQgeyB1c2VIeWRyYXRlLCBIeWRyYXRlIH0gZnJvbSAnLi9yZWFjdCc7IC8vIFR5cGVzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgaHlkcmF0ZSB9IGZyb20gJy4vaHlkcmF0aW9uJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VIeWRyYXRlKHN0YXRlLCBvcHRpb25zKSB7XG4gIHZhciBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG4gIHZhciBvcHRpb25zUmVmID0gUmVhY3QudXNlUmVmKG9wdGlvbnMpO1xuICBvcHRpb25zUmVmLmN1cnJlbnQgPSBvcHRpb25zOyAvLyBSdW5uaW5nIGh5ZHJhdGUgYWdhaW4gd2l0aCB0aGUgc2FtZSBxdWVyaWVzIGlzIHNhZmUsXG4gIC8vIGl0IHdvbnQgb3ZlcndyaXRlIG9yIGluaXRpYWxpemUgZXhpc3RpbmcgcXVlcmllcyxcbiAgLy8gcmVseWluZyBvbiB1c2VNZW1vIGhlcmUgaXMgb25seSBhIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbi5cbiAgLy8gaHlkcmF0ZSBjYW4gYW5kIHNob3VsZCBiZSBydW4gKmR1cmluZyogcmVuZGVyIGhlcmUgZm9yIFNTUiB0byB3b3JrIHByb3Blcmx5XG5cbiAgUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBoeWRyYXRlKHF1ZXJ5Q2xpZW50LCBzdGF0ZSwgb3B0aW9uc1JlZi5jdXJyZW50KTtcbiAgICB9XG4gIH0sIFtxdWVyeUNsaWVudCwgc3RhdGVdKTtcbn1cbmV4cG9ydCB2YXIgSHlkcmF0ZSA9IGZ1bmN0aW9uIEh5ZHJhdGUoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgdXNlSHlkcmF0ZShzdGF0ZSwgb3B0aW9ucyk7XG4gIHJldHVybiBjaGlsZHJlbjtcbn07IiwiZXhwb3J0ICogZnJvbSAnLi9jb3JlJztcbmV4cG9ydCAqIGZyb20gJy4vcmVhY3QnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgZGVmYXVsdENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xudmFyIFF1ZXJ5Q2xpZW50U2hhcmluZ0NvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChmYWxzZSk7IC8vIGlmIGNvbnRleHRTaGFyaW5nIGlzIG9uLCB3ZSBzaGFyZSB0aGUgZmlyc3QgYW5kIGF0IGxlYXN0IG9uZVxuLy8gaW5zdGFuY2Ugb2YgdGhlIGNvbnRleHQgYWNyb3NzIHRoZSB3aW5kb3dcbi8vIHRvIGVuc3VyZSB0aGF0IGlmIFJlYWN0IFF1ZXJ5IGlzIHVzZWQgYWNyb3NzXG4vLyBkaWZmZXJlbnQgYnVuZGxlcyBvciBtaWNyb2Zyb250ZW5kcyB0aGV5IHdpbGxcbi8vIGFsbCB1c2UgdGhlIHNhbWUgKippbnN0YW5jZSoqIG9mIGNvbnRleHQsIHJlZ2FyZGxlc3Ncbi8vIG9mIG1vZHVsZSBzY29waW5nLlxuXG5mdW5jdGlvbiBnZXRRdWVyeUNsaWVudENvbnRleHQoY29udGV4dFNoYXJpbmcpIHtcbiAgaWYgKGNvbnRleHRTaGFyaW5nICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKCF3aW5kb3cuUmVhY3RRdWVyeUNsaWVudENvbnRleHQpIHtcbiAgICAgIHdpbmRvdy5SZWFjdFF1ZXJ5Q2xpZW50Q29udGV4dCA9IGRlZmF1bHRDb250ZXh0O1xuICAgIH1cblxuICAgIHJldHVybiB3aW5kb3cuUmVhY3RRdWVyeUNsaWVudENvbnRleHQ7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdENvbnRleHQ7XG59XG5cbmV4cG9ydCB2YXIgdXNlUXVlcnlDbGllbnQgPSBmdW5jdGlvbiB1c2VRdWVyeUNsaWVudCgpIHtcbiAgdmFyIHF1ZXJ5Q2xpZW50ID0gUmVhY3QudXNlQ29udGV4dChnZXRRdWVyeUNsaWVudENvbnRleHQoUmVhY3QudXNlQ29udGV4dChRdWVyeUNsaWVudFNoYXJpbmdDb250ZXh0KSkpO1xuXG4gIGlmICghcXVlcnlDbGllbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIFF1ZXJ5Q2xpZW50IHNldCwgdXNlIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgdG8gc2V0IG9uZScpO1xuICB9XG5cbiAgcmV0dXJuIHF1ZXJ5Q2xpZW50O1xufTtcbmV4cG9ydCB2YXIgUXVlcnlDbGllbnRQcm92aWRlciA9IGZ1bmN0aW9uIFF1ZXJ5Q2xpZW50UHJvdmlkZXIoX3JlZikge1xuICB2YXIgY2xpZW50ID0gX3JlZi5jbGllbnQsXG4gICAgICBfcmVmJGNvbnRleHRTaGFyaW5nID0gX3JlZi5jb250ZXh0U2hhcmluZyxcbiAgICAgIGNvbnRleHRTaGFyaW5nID0gX3JlZiRjb250ZXh0U2hhcmluZyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGNvbnRleHRTaGFyaW5nLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGNsaWVudC5tb3VudCgpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjbGllbnQudW5tb3VudCgpO1xuICAgIH07XG4gIH0sIFtjbGllbnRdKTtcbiAgdmFyIENvbnRleHQgPSBnZXRRdWVyeUNsaWVudENvbnRleHQoY29udGV4dFNoYXJpbmcpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUXVlcnlDbGllbnRTaGFyaW5nQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBjb250ZXh0U2hhcmluZ1xuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNsaWVudFxuICB9LCBjaGlsZHJlbikpO1xufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnOyAvLyBDT05URVhUXG5cbmZ1bmN0aW9uIGNyZWF0ZVZhbHVlKCkge1xuICB2YXIgX2lzUmVzZXQgPSBmYWxzZTtcbiAgcmV0dXJuIHtcbiAgICBjbGVhclJlc2V0OiBmdW5jdGlvbiBjbGVhclJlc2V0KCkge1xuICAgICAgX2lzUmVzZXQgPSBmYWxzZTtcbiAgICB9LFxuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIF9pc1Jlc2V0ID0gdHJ1ZTtcbiAgICB9LFxuICAgIGlzUmVzZXQ6IGZ1bmN0aW9uIGlzUmVzZXQoKSB7XG4gICAgICByZXR1cm4gX2lzUmVzZXQ7XG4gICAgfVxuICB9O1xufVxuXG52YXIgUXVlcnlFcnJvclJlc2V0Qm91bmRhcnlDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoY3JlYXRlVmFsdWUoKSk7IC8vIEhPT0tcblxuZXhwb3J0IHZhciB1c2VRdWVyeUVycm9yUmVzZXRCb3VuZGFyeSA9IGZ1bmN0aW9uIHVzZVF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5KCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChRdWVyeUVycm9yUmVzZXRCb3VuZGFyeUNvbnRleHQpO1xufTsgLy8gQ09NUE9ORU5UXG5cbmV4cG9ydCB2YXIgUXVlcnlFcnJvclJlc2V0Qm91bmRhcnkgPSBmdW5jdGlvbiBRdWVyeUVycm9yUmVzZXRCb3VuZGFyeShfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciB2YWx1ZSA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjcmVhdGVWYWx1ZSgpO1xuICB9LCBbXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChRdWVyeUVycm9yUmVzZXRCb3VuZGFyeUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSwgdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4odmFsdWUpIDogY2hpbGRyZW4pO1xufTsiLCIvLyBTaWRlIGVmZmVjdHNcbmltcG9ydCAnLi9zZXRCYXRjaFVwZGF0ZXNGbic7XG5pbXBvcnQgJy4vc2V0TG9nZ2VyJztcbmV4cG9ydCB7IFF1ZXJ5Q2xpZW50UHJvdmlkZXIsIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnLi9RdWVyeUNsaWVudFByb3ZpZGVyJztcbmV4cG9ydCB7IFF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5LCB1c2VRdWVyeUVycm9yUmVzZXRCb3VuZGFyeSB9IGZyb20gJy4vUXVlcnlFcnJvclJlc2V0Qm91bmRhcnknO1xuZXhwb3J0IHsgdXNlSXNGZXRjaGluZyB9IGZyb20gJy4vdXNlSXNGZXRjaGluZyc7XG5leHBvcnQgeyB1c2VJc011dGF0aW5nIH0gZnJvbSAnLi91c2VJc011dGF0aW5nJztcbmV4cG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnLi91c2VNdXRhdGlvbic7XG5leHBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJy4vdXNlUXVlcnknO1xuZXhwb3J0IHsgdXNlUXVlcmllcyB9IGZyb20gJy4vdXNlUXVlcmllcyc7XG5leHBvcnQgeyB1c2VJbmZpbml0ZVF1ZXJ5IH0gZnJvbSAnLi91c2VJbmZpbml0ZVF1ZXJ5JzsgLy8gVHlwZXNcblxuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7IiwiZXhwb3J0IHZhciBsb2dnZXIgPSBjb25zb2xlOyIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuZXhwb3J0IHZhciB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyA9IFJlYWN0RE9NLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOyIsImltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzIH0gZnJvbSAnLi9yZWFjdEJhdGNoZWRVcGRhdGVzJztcbm5vdGlmeU1hbmFnZXIuc2V0QmF0Y2hOb3RpZnlGdW5jdGlvbih1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyk7IiwiaW1wb3J0IHsgc2V0TG9nZ2VyIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5cbmlmIChsb2dnZXIpIHtcbiAgc2V0TG9nZ2VyKGxvZ2dlcik7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuLi9jb3JlL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgdXNlUXVlcnlFcnJvclJlc2V0Qm91bmRhcnkgfSBmcm9tICcuL1F1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5JztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnLi9RdWVyeUNsaWVudFByb3ZpZGVyJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VCYXNlUXVlcnkob3B0aW9ucywgT2JzZXJ2ZXIpIHtcbiAgdmFyIG1vdW50ZWRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSgwKSxcbiAgICAgIGZvcmNlVXBkYXRlID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG4gIHZhciBlcnJvclJlc2V0Qm91bmRhcnkgPSB1c2VRdWVyeUVycm9yUmVzZXRCb3VuZGFyeSgpO1xuICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IHF1ZXJ5Q2xpZW50LmRlZmF1bHRRdWVyeU9ic2VydmVyT3B0aW9ucyhvcHRpb25zKTsgLy8gTWFrZSBzdXJlIHJlc3VsdHMgYXJlIG9wdGltaXN0aWNhbGx5IHNldCBpbiBmZXRjaGluZyBzdGF0ZSBiZWZvcmUgc3Vic2NyaWJpbmcgb3IgdXBkYXRpbmcgb3B0aW9uc1xuXG4gIGRlZmF1bHRlZE9wdGlvbnMub3B0aW1pc3RpY1Jlc3VsdHMgPSB0cnVlOyAvLyBJbmNsdWRlIGNhbGxiYWNrcyBpbiBiYXRjaCByZW5kZXJzXG5cbiAgaWYgKGRlZmF1bHRlZE9wdGlvbnMub25FcnJvcikge1xuICAgIGRlZmF1bHRlZE9wdGlvbnMub25FcnJvciA9IG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhkZWZhdWx0ZWRPcHRpb25zLm9uRXJyb3IpO1xuICB9XG5cbiAgaWYgKGRlZmF1bHRlZE9wdGlvbnMub25TdWNjZXNzKSB7XG4gICAgZGVmYXVsdGVkT3B0aW9ucy5vblN1Y2Nlc3MgPSBub3RpZnlNYW5hZ2VyLmJhdGNoQ2FsbHMoZGVmYXVsdGVkT3B0aW9ucy5vblN1Y2Nlc3MpO1xuICB9XG5cbiAgaWYgKGRlZmF1bHRlZE9wdGlvbnMub25TZXR0bGVkKSB7XG4gICAgZGVmYXVsdGVkT3B0aW9ucy5vblNldHRsZWQgPSBub3RpZnlNYW5hZ2VyLmJhdGNoQ2FsbHMoZGVmYXVsdGVkT3B0aW9ucy5vblNldHRsZWQpO1xuICB9XG5cbiAgaWYgKGRlZmF1bHRlZE9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAvLyBBbHdheXMgc2V0IHN0YWxlIHRpbWUgd2hlbiB1c2luZyBzdXNwZW5zZSB0byBwcmV2ZW50XG4gICAgLy8gZmV0Y2hpbmcgYWdhaW4gd2hlbiBkaXJlY3RseSBtb3VudGluZyBhZnRlciBzdXNwZW5kaW5nXG4gICAgaWYgKHR5cGVvZiBkZWZhdWx0ZWRPcHRpb25zLnN0YWxlVGltZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIGRlZmF1bHRlZE9wdGlvbnMuc3RhbGVUaW1lID0gMTAwMDtcbiAgICB9XG4gIH1cblxuICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5zdXNwZW5zZSB8fCBkZWZhdWx0ZWRPcHRpb25zLnVzZUVycm9yQm91bmRhcnkpIHtcbiAgICAvLyBQcmV2ZW50IHJldHJ5aW5nIGZhaWxlZCBxdWVyeSBpZiB0aGUgZXJyb3IgYm91bmRhcnkgaGFzIG5vdCBiZWVuIHJlc2V0IHlldFxuICAgIGlmICghZXJyb3JSZXNldEJvdW5kYXJ5LmlzUmVzZXQoKSkge1xuICAgICAgZGVmYXVsdGVkT3B0aW9ucy5yZXRyeU9uTW91bnQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMiA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmVyKHF1ZXJ5Q2xpZW50LCBkZWZhdWx0ZWRPcHRpb25zKTtcbiAgfSksXG4gICAgICBvYnNlcnZlciA9IF9SZWFjdCR1c2VTdGF0ZTJbMF07XG5cbiAgdmFyIHJlc3VsdCA9IG9ic2VydmVyLmdldE9wdGltaXN0aWNSZXN1bHQoZGVmYXVsdGVkT3B0aW9ucyk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgbW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICBlcnJvclJlc2V0Qm91bmRhcnkuY2xlYXJSZXNldCgpO1xuICAgIHZhciB1bnN1YnNjcmliZSA9IG9ic2VydmVyLnN1YnNjcmliZShub3RpZnlNYW5hZ2VyLmJhdGNoQ2FsbHMoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1vdW50ZWRSZWYuY3VycmVudCkge1xuICAgICAgICBmb3JjZVVwZGF0ZShmdW5jdGlvbiAoeCkge1xuICAgICAgICAgIHJldHVybiB4ICsgMTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkpOyAvLyBVcGRhdGUgcmVzdWx0IHRvIG1ha2Ugc3VyZSB3ZSBkaWQgbm90IG1pc3MgYW55IHF1ZXJ5IHVwZGF0ZXNcbiAgICAvLyBiZXR3ZWVuIGNyZWF0aW5nIHRoZSBvYnNlcnZlciBhbmQgc3Vic2NyaWJpbmcgdG8gaXQuXG5cbiAgICBvYnNlcnZlci51cGRhdGVSZXN1bHQoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgbW91bnRlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtlcnJvclJlc2V0Qm91bmRhcnksIG9ic2VydmVyXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLy8gRG8gbm90IG5vdGlmeSBvbiB1cGRhdGVzIGJlY2F1c2Ugb2YgY2hhbmdlcyBpbiB0aGUgb3B0aW9ucyBiZWNhdXNlXG4gICAgLy8gdGhlc2UgY2hhbmdlcyBzaG91bGQgYWxyZWFkeSBiZSByZWZsZWN0ZWQgaW4gdGhlIG9wdGltaXN0aWMgcmVzdWx0LlxuICAgIG9ic2VydmVyLnNldE9wdGlvbnMoZGVmYXVsdGVkT3B0aW9ucywge1xuICAgICAgbGlzdGVuZXJzOiBmYWxzZVxuICAgIH0pO1xuICB9LCBbZGVmYXVsdGVkT3B0aW9ucywgb2JzZXJ2ZXJdKTsgLy8gSGFuZGxlIHN1c3BlbnNlXG5cbiAgaWYgKGRlZmF1bHRlZE9wdGlvbnMuc3VzcGVuc2UgJiYgcmVzdWx0LmlzTG9hZGluZykge1xuICAgIHRocm93IG9ic2VydmVyLmZldGNoT3B0aW1pc3RpYyhkZWZhdWx0ZWRPcHRpb25zKS50aGVuKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgZGF0YSA9IF9yZWYuZGF0YTtcbiAgICAgIGRlZmF1bHRlZE9wdGlvbnMub25TdWNjZXNzID09IG51bGwgPyB2b2lkIDAgOiBkZWZhdWx0ZWRPcHRpb25zLm9uU3VjY2VzcyhkYXRhKTtcbiAgICAgIGRlZmF1bHRlZE9wdGlvbnMub25TZXR0bGVkID09IG51bGwgPyB2b2lkIDAgOiBkZWZhdWx0ZWRPcHRpb25zLm9uU2V0dGxlZChkYXRhLCBudWxsKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGVycm9yUmVzZXRCb3VuZGFyeS5jbGVhclJlc2V0KCk7XG4gICAgICBkZWZhdWx0ZWRPcHRpb25zLm9uRXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IGRlZmF1bHRlZE9wdGlvbnMub25FcnJvcihlcnJvcik7XG4gICAgICBkZWZhdWx0ZWRPcHRpb25zLm9uU2V0dGxlZCA9PSBudWxsID8gdm9pZCAwIDogZGVmYXVsdGVkT3B0aW9ucy5vblNldHRsZWQodW5kZWZpbmVkLCBlcnJvcik7XG4gICAgfSk7XG4gIH0gLy8gSGFuZGxlIGVycm9yIGJvdW5kYXJ5XG5cblxuICBpZiAoKGRlZmF1bHRlZE9wdGlvbnMuc3VzcGVuc2UgfHwgZGVmYXVsdGVkT3B0aW9ucy51c2VFcnJvckJvdW5kYXJ5KSAmJiByZXN1bHQuaXNFcnJvciAmJiAhcmVzdWx0LmlzRmV0Y2hpbmcpIHtcbiAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gIH0gLy8gSGFuZGxlIHJlc3VsdCBwcm9wZXJ0eSB1c2FnZSB0cmFja2luZ1xuXG5cbiAgaWYgKGRlZmF1bHRlZE9wdGlvbnMubm90aWZ5T25DaGFuZ2VQcm9wcyA9PT0gJ3RyYWNrZWQnKSB7XG4gICAgcmVzdWx0ID0gb2JzZXJ2ZXIudHJhY2tSZXN1bHQocmVzdWx0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IHsgSW5maW5pdGVRdWVyeU9ic2VydmVyIH0gZnJvbSAnLi4vY29yZS9pbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXInO1xuaW1wb3J0IHsgcGFyc2VRdWVyeUFyZ3MgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IHVzZUJhc2VRdWVyeSB9IGZyb20gJy4vdXNlQmFzZVF1ZXJ5JzsgLy8gSE9PS1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW5maW5pdGVRdWVyeShhcmcxLCBhcmcyLCBhcmczKSB7XG4gIHZhciBvcHRpb25zID0gcGFyc2VRdWVyeUFyZ3MoYXJnMSwgYXJnMiwgYXJnMyk7XG4gIHJldHVybiB1c2VCYXNlUXVlcnkob3B0aW9ucywgSW5maW5pdGVRdWVyeU9ic2VydmVyKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4uL2NvcmUvbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyBwYXJzZUZpbHRlckFyZ3MgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnLi9RdWVyeUNsaWVudFByb3ZpZGVyJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VJc0ZldGNoaW5nKGFyZzEsIGFyZzIpIHtcbiAgdmFyIG1vdW50ZWRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICB2YXIgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG4gIHZhciBfcGFyc2VGaWx0ZXJBcmdzID0gcGFyc2VGaWx0ZXJBcmdzKGFyZzEsIGFyZzIpLFxuICAgICAgZmlsdGVycyA9IF9wYXJzZUZpbHRlckFyZ3NbMF07XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKHF1ZXJ5Q2xpZW50LmlzRmV0Y2hpbmcoZmlsdGVycykpLFxuICAgICAgaXNGZXRjaGluZyA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldElzRmV0Y2hpbmcgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIGZpbHRlcnNSZWYgPSBSZWFjdC51c2VSZWYoZmlsdGVycyk7XG4gIGZpbHRlcnNSZWYuY3VycmVudCA9IGZpbHRlcnM7XG4gIHZhciBpc0ZldGNoaW5nUmVmID0gUmVhY3QudXNlUmVmKGlzRmV0Y2hpbmcpO1xuICBpc0ZldGNoaW5nUmVmLmN1cnJlbnQgPSBpc0ZldGNoaW5nO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgdmFyIHVuc3Vic2NyaWJlID0gcXVlcnlDbGllbnQuZ2V0UXVlcnlDYWNoZSgpLnN1YnNjcmliZShub3RpZnlNYW5hZ2VyLmJhdGNoQ2FsbHMoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1vdW50ZWRSZWYuY3VycmVudCkge1xuICAgICAgICB2YXIgbmV3SXNGZXRjaGluZyA9IHF1ZXJ5Q2xpZW50LmlzRmV0Y2hpbmcoZmlsdGVyc1JlZi5jdXJyZW50KTtcblxuICAgICAgICBpZiAoaXNGZXRjaGluZ1JlZi5jdXJyZW50ICE9PSBuZXdJc0ZldGNoaW5nKSB7XG4gICAgICAgICAgc2V0SXNGZXRjaGluZyhuZXdJc0ZldGNoaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgbW91bnRlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtxdWVyeUNsaWVudF0pO1xuICByZXR1cm4gaXNGZXRjaGluZztcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4uL2NvcmUvbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJy4vUXVlcnlDbGllbnRQcm92aWRlcic7XG5leHBvcnQgZnVuY3Rpb24gdXNlSXNNdXRhdGluZyhmaWx0ZXJzKSB7XG4gIHZhciBtb3VudGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgdmFyIHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUocXVlcnlDbGllbnQuaXNNdXRhdGluZyhmaWx0ZXJzKSksXG4gICAgICBpc011dGF0aW5nID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0SXNNdXRhdGluZyA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgZmlsdGVyc1JlZiA9IFJlYWN0LnVzZVJlZihmaWx0ZXJzKTtcbiAgZmlsdGVyc1JlZi5jdXJyZW50ID0gZmlsdGVycztcbiAgdmFyIGlzTXV0YXRpbmdSZWYgPSBSZWFjdC51c2VSZWYoaXNNdXRhdGluZyk7XG4gIGlzTXV0YXRpbmdSZWYuY3VycmVudCA9IGlzTXV0YXRpbmc7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgbW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBxdWVyeUNsaWVudC5nZXRNdXRhdGlvbkNhY2hlKCkuc3Vic2NyaWJlKG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgIHZhciBuZXdJc011dGF0aW5nID0gcXVlcnlDbGllbnQuaXNNdXRhdGluZyhmaWx0ZXJzUmVmLmN1cnJlbnQpO1xuXG4gICAgICAgIGlmIChpc011dGF0aW5nUmVmLmN1cnJlbnQgIT09IG5ld0lzTXV0YXRpbmcpIHtcbiAgICAgICAgICBzZXRJc011dGF0aW5nKG5ld0lzTXV0YXRpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW3F1ZXJ5Q2xpZW50XSk7XG4gIHJldHVybiBpc011dGF0aW5nO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuLi9jb3JlL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgbm9vcCwgcGFyc2VNdXRhdGlvbkFyZ3MgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IE11dGF0aW9uT2JzZXJ2ZXIgfSBmcm9tICcuLi9jb3JlL211dGF0aW9uT2JzZXJ2ZXInO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICcuL1F1ZXJ5Q2xpZW50UHJvdmlkZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU11dGF0aW9uKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgdmFyIG1vdW50ZWRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSgwKSxcbiAgICAgIGZvcmNlVXBkYXRlID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBvcHRpb25zID0gcGFyc2VNdXRhdGlvbkFyZ3MoYXJnMSwgYXJnMiwgYXJnMyk7XG4gIHZhciBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG4gIHZhciBvYnNSZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICBpZiAoIW9ic1JlZi5jdXJyZW50KSB7XG4gICAgb2JzUmVmLmN1cnJlbnQgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihxdWVyeUNsaWVudCwgb3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgb2JzUmVmLmN1cnJlbnQuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVzdWx0ID0gb2JzUmVmLmN1cnJlbnQuZ2V0Q3VycmVudFJlc3VsdCgpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgdmFyIHVuc3Vic2NyaWJlID0gb2JzUmVmLmN1cnJlbnQuc3Vic2NyaWJlKG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGZvcmNlVXBkYXRlKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgcmV0dXJuIHggKyAxO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHZhciBtdXRhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodmFyaWFibGVzLCBtdXRhdGVPcHRpb25zKSB7XG4gICAgb2JzUmVmLmN1cnJlbnQubXV0YXRlKHZhcmlhYmxlcywgbXV0YXRlT3B0aW9ucykuY2F0Y2gobm9vcCk7XG4gIH0sIFtdKTtcblxuICBpZiAoY3VycmVudFJlc3VsdC5lcnJvciAmJiBvYnNSZWYuY3VycmVudC5vcHRpb25zLnVzZUVycm9yQm91bmRhcnkpIHtcbiAgICB0aHJvdyBjdXJyZW50UmVzdWx0LmVycm9yO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBjdXJyZW50UmVzdWx0LCB7XG4gICAgbXV0YXRlOiBtdXRhdGUsXG4gICAgbXV0YXRlQXN5bmM6IGN1cnJlbnRSZXN1bHQubXV0YXRlXG4gIH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi4vY29yZS9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IFF1ZXJpZXNPYnNlcnZlciB9IGZyb20gJy4uL2NvcmUvcXVlcmllc09ic2VydmVyJztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnLi9RdWVyeUNsaWVudFByb3ZpZGVyJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VRdWVyaWVzKHF1ZXJpZXMpIHtcbiAgdmFyIG1vdW50ZWRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSgwKSxcbiAgICAgIGZvcmNlVXBkYXRlID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG4gIHZhciBkZWZhdWx0ZWRRdWVyaWVzID0gcXVlcmllcy5tYXAoZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IHF1ZXJ5Q2xpZW50LmRlZmF1bHRRdWVyeU9ic2VydmVyT3B0aW9ucyhvcHRpb25zKTsgLy8gTWFrZSBzdXJlIHRoZSByZXN1bHRzIGFyZSBhbHJlYWR5IGluIGZldGNoaW5nIHN0YXRlIGJlZm9yZSBzdWJzY3JpYmluZyBvciB1cGRhdGluZyBvcHRpb25zXG5cbiAgICBkZWZhdWx0ZWRPcHRpb25zLm9wdGltaXN0aWNSZXN1bHRzID0gdHJ1ZTtcbiAgICByZXR1cm4gZGVmYXVsdGVkT3B0aW9ucztcbiAgfSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTIgPSBSZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBRdWVyaWVzT2JzZXJ2ZXIocXVlcnlDbGllbnQsIGRlZmF1bHRlZFF1ZXJpZXMpO1xuICB9KSxcbiAgICAgIG9ic2VydmVyID0gX1JlYWN0JHVzZVN0YXRlMlswXTtcblxuICB2YXIgcmVzdWx0ID0gb2JzZXJ2ZXIuZ2V0T3B0aW1pc3RpY1Jlc3VsdChkZWZhdWx0ZWRRdWVyaWVzKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIHZhciB1bnN1YnNjcmliZSA9IG9ic2VydmVyLnN1YnNjcmliZShub3RpZnlNYW5hZ2VyLmJhdGNoQ2FsbHMoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1vdW50ZWRSZWYuY3VycmVudCkge1xuICAgICAgICBmb3JjZVVwZGF0ZShmdW5jdGlvbiAoeCkge1xuICAgICAgICAgIHJldHVybiB4ICsgMTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW29ic2VydmVyXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLy8gRG8gbm90IG5vdGlmeSBvbiB1cGRhdGVzIGJlY2F1c2Ugb2YgY2hhbmdlcyBpbiB0aGUgb3B0aW9ucyBiZWNhdXNlXG4gICAgLy8gdGhlc2UgY2hhbmdlcyBzaG91bGQgYWxyZWFkeSBiZSByZWZsZWN0ZWQgaW4gdGhlIG9wdGltaXN0aWMgcmVzdWx0LlxuICAgIG9ic2VydmVyLnNldFF1ZXJpZXMoZGVmYXVsdGVkUXVlcmllcywge1xuICAgICAgbGlzdGVuZXJzOiBmYWxzZVxuICAgIH0pO1xuICB9LCBbZGVmYXVsdGVkUXVlcmllcywgb2JzZXJ2ZXJdKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCJpbXBvcnQgeyBRdWVyeU9ic2VydmVyIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBwYXJzZVF1ZXJ5QXJncyB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgdXNlQmFzZVF1ZXJ5IH0gZnJvbSAnLi91c2VCYXNlUXVlcnknOyAvLyBIT09LXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VRdWVyeShhcmcxLCBhcmcyLCBhcmczKSB7XG4gIHZhciBwYXJzZWRPcHRpb25zID0gcGFyc2VRdWVyeUFyZ3MoYXJnMSwgYXJnMiwgYXJnMyk7XG4gIHJldHVybiB1c2VCYXNlUXVlcnkocGFyc2VkT3B0aW9ucywgUXVlcnlPYnNlcnZlcik7XG59IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=