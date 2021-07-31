(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query/hydration */ "react-query/hydration");
/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query_hydration__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\local-api\\client\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const App = ({
  Component,
  pageProps
}) => {
  const clientRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  const getClient = () => {
    if (!clientRef.current) clientRef.current = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false
        }
      }
    });
    return clientRef.current;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {
    client: getClient(),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query_hydration__WEBPACK_IMPORTED_MODULE_3__.Hydrate, {
      state: pageProps.dehydratedState,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined);
};

App.getInitialProps = async ({
  ctx,
  Component
}) => {
  var _Component$getInitial;

  const pageProps = await ((_Component$getInitial = Component.getInitialProps) === null || _Component$getInitial === void 0 ? void 0 : _Component$getInitial.call(Component, ctx));
  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./pages/index.scss":
/*!**************************!*\
  !*** ./pages/index.scss ***!
  \**************************/
/***/ (function() {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-query");;

/***/ }),

/***/ "react-query/hydration":
/*!****************************************!*\
  !*** external "react-query/hydration" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-query/hydration");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QtcXVlcnlcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC1xdWVyeS9oeWRyYXRpb25cIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnRSZWYiLCJ1c2VSZWYiLCJnZXRDbGllbnQiLCJjdXJyZW50IiwiUXVlcnlDbGllbnQiLCJkZWZhdWx0T3B0aW9ucyIsInF1ZXJpZXMiLCJyZWZldGNoT25XaW5kb3dGb2N1cyIsImRlaHlkcmF0ZWRTdGF0ZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBOEI7QUFDdEMsUUFBTUMsU0FBUyxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBeEI7O0FBQ0EsUUFBTUMsU0FBUyxHQUFHLE1BQU07QUFDcEIsUUFBSSxDQUFDRixTQUFTLENBQUNHLE9BQWYsRUFDSUgsU0FBUyxDQUFDRyxPQUFWLEdBQW9CLElBQUlDLG9EQUFKLENBQWdCO0FBQ2hDQyxvQkFBYyxFQUFFO0FBQ1pDLGVBQU8sRUFBRTtBQUNMQyw4QkFBb0IsRUFBRTtBQURqQjtBQURHO0FBRGdCLEtBQWhCLENBQXBCO0FBT0osV0FBT1AsU0FBUyxDQUFDRyxPQUFqQjtBQUNILEdBVkQ7O0FBWUEsc0JBQ0ksOERBQUMsNERBQUQ7QUFBcUIsVUFBTSxFQUFFRCxTQUFTLEVBQXRDO0FBQUEsMkJBQ0ksOERBQUMsMERBQUQ7QUFBUyxXQUFLLEVBQUVILFNBQVMsQ0FBQ1MsZUFBMUI7QUFBQSw2QkFDSSw4REFBQyxTQUFELG9CQUFlVCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBT0gsQ0FyQkQ7O0FBdUJBRixHQUFHLENBQUNZLGVBQUosR0FBc0IsT0FBTztBQUFFQyxLQUFGO0FBQU9aO0FBQVAsQ0FBUCxLQUE4QjtBQUFBOztBQUNoRCxRQUFNQyxTQUFTLEdBQUcsZ0NBQU1ELFNBQVMsQ0FBQ1csZUFBaEIsMERBQU0sMkJBQUFYLFNBQVMsRUFBbUJZLEdBQW5CLENBQWYsQ0FBbEI7QUFDQSxTQUFPO0FBQUVYO0FBQUYsR0FBUDtBQUNILENBSEQ7O0FBS0EsK0RBQWVGLEdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1xdWVyeSdcclxuaW1wb3J0IHsgSHlkcmF0ZSB9IGZyb20gJ3JlYWN0LXF1ZXJ5L2h5ZHJhdGlvbidcclxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgICBjb25zdCBjbGllbnRSZWYgPSB1c2VSZWYobnVsbClcclxuICAgIGNvbnN0IGdldENsaWVudCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIWNsaWVudFJlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICBjbGllbnRSZWYuY3VycmVudCA9IG5ldyBRdWVyeUNsaWVudCh7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBjbGllbnRSZWYuY3VycmVudFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtnZXRDbGllbnQoKX0+XHJcbiAgICAgICAgICAgIDxIeWRyYXRlIHN0YXRlPXtwYWdlUHJvcHMuZGVoeWRyYXRlZFN0YXRlfT5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9IeWRyYXRlPlxyXG4gICAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCwgQ29tcG9uZW50IH0pID0+IHtcclxuICAgIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM/LihjdHgpXHJcbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcXVlcnlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXF1ZXJ5L2h5ZHJhdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9