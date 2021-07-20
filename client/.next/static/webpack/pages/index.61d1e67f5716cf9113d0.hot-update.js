self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_local_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_local_api_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "D:\\local-api\\client\\components\\MsgList.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_local_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var UserIds = ['roy', 'jay'];

var getRandomUserId = function getRandomUserId() {
  return UserIds[Math.round(Math.random())];
};

var msgs = Array(50).fill(0).map(function (_, i) {
  return {
    id: i + 1,
    userId: getRandomUserId(),
    timestamp: 1234567890123 + (50 - i) * 1000 * 60,
    text: "".concat(50 - i, " mock text")
  };
});

var MsgList = function MsgList() {
  var _userState = userState(originalMsgs),
      _userState2 = (0,D_local_api_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_userState, 2),
      msgs = _userState2[0],
      setMsgs = _userState2[1];

  var onCreate = function onCreate(text) {
    var newMsg = {
      id: msg.length,
      userId: getRandomUserId(),
      timestamp: Date.now(),
      text: "".concat(msgs.length, " ").concat(text)
    };
    setMsgs(function (msgs) {
      return [newMsg].concat((0,D_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs));
    });
    console.log(msgs);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_6__.default, {
      mutage: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(function (x) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread({}, x), x.id, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_c = MsgList;
/* harmony default export */ __webpack_exports__["default"] = (MsgList);

var _c;

$RefreshReg$(_c, "MsgList");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIl0sIm5hbWVzIjpbIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJtc2dzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJpZCIsInVzZXJJZCIsInRpbWVzdGFtcCIsInRleHQiLCJNc2dMaXN0IiwidXNlclN0YXRlIiwib3JpZ2luYWxNc2dzIiwic2V0TXNncyIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibXNnIiwibGVuZ3RoIiwiRGF0ZSIsIm5vdyIsImNvbnNvbGUiLCJsb2ciLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFoQjs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsU0FBTUQsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEVBQVgsQ0FBRCxDQUFiO0FBQUEsQ0FBeEI7O0FBRUEsSUFBTUMsSUFBSSxHQUFHQyxLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsQ0FBZSxDQUFmLEVBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxTQUFXO0FBQzFDQyxNQUFFLEVBQUVELENBQUMsR0FBRyxDQURrQztBQUUxQ0UsVUFBTSxFQUFFWCxlQUFlLEVBRm1CO0FBRzFDWSxhQUFTLEVBQUUsZ0JBQWdCLENBQUMsS0FBSUgsQ0FBTCxJQUFVLElBQVYsR0FBaUIsRUFIRjtBQUkxQ0ksUUFBSSxZQUFLLEtBQUtKLENBQVY7QUFKc0MsR0FBWDtBQUFBLENBQXRCLENBQWI7O0FBUUEsSUFBTUssT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBLG1CQUNNQyxTQUFTLENBQUNDLFlBQUQsQ0FEZjtBQUFBO0FBQUEsTUFDWFosSUFEVztBQUFBLE1BQ0xhLE9BREs7O0FBRWxCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFMLElBQUksRUFBSTtBQUNyQixRQUFNTSxNQUFNLEdBQUc7QUFDWFQsUUFBRSxFQUFFVSxHQUFHLENBQUNDLE1BREc7QUFFWFYsWUFBTSxFQUFFWCxlQUFlLEVBRlo7QUFHWFksZUFBUyxFQUFFVSxJQUFJLENBQUNDLEdBQUwsRUFIQTtBQUlYVixVQUFJLFlBQUtULElBQUksQ0FBQ2lCLE1BQVYsY0FBb0JSLElBQXBCO0FBSk8sS0FBZjtBQU1BSSxXQUFPLENBQUMsVUFBQWIsSUFBSTtBQUFBLGNBQU1lLE1BQU4sdUhBQWlCZixJQUFqQjtBQUFBLEtBQUwsQ0FBUDtBQUNBb0IsV0FBTyxDQUFDQyxHQUFSLENBQVlyQixJQUFaO0FBQ0gsR0FURDs7QUFXQSxzQkFDQTtBQUFBLDRCQUNJLDhEQUFDLDhDQUFEO0FBQVUsWUFBTSxFQUFFYztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFJLGVBQVMsRUFBRSxVQUFmO0FBQUEsZ0JBQ0tkLElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQUFtQixDQUFDO0FBQUEsNEJBQ1AsOERBQUMsNkNBQUQsb0JBQXVCQSxDQUF2QixHQUFjQSxDQUFDLENBQUNoQixFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURPO0FBQUEsT0FBVjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBLGtCQURBO0FBVUgsQ0F2QkQ7O0tBQU1JLE87QUF5Qk4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjFkMWU2N2Y1NzE2Y2Y5MTEzZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH1mcm9tICdyZWFjdCdcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSBcIi4vTXNnSXRlbVwiO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XHJcblxyXG5jb25zdCBVc2VySWRzID0gWydyb3knLCAnamF5J11cclxuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXVxyXG5cclxuY29uc3QgbXNncyA9IEFycmF5KDUwKS5maWxsKDApLm1hcCgoXywgaSkgPT4gKHtcclxuICAgIGlkOiBpICsgMSxcclxuICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXHJcbiAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyAoNTAtIGkpICogMTAwMCAqIDYwLFxyXG4gICAgdGV4dDogYCR7NTAgLSBpfSBtb2NrIHRleHRgXHJcblxyXG59KSlcclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VyU3RhdGUob3JpZ2luYWxNc2dzKVxyXG4gICAgY29uc3Qgb25DcmVhdGUgPSB0ZXh0ID0+IHtcclxuICAgICAgICBjb25zdCBuZXdNc2cgPSB7XHJcbiAgICAgICAgICAgIGlkOiBtc2cubGVuZ3RoLFxyXG4gICAgICAgICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIHRleHQ6IGAke21zZ3MubGVuZ3RofSAke3RleHR9YFxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4gKFtuZXdNc2csIC4uLm1zZ3NdKSlcclxuICAgICAgICBjb25zb2xlLmxvZyhtc2dzKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgIDw+XHJcbiAgICAgICAgPE1zZ0lucHV0IG11dGFnZT17b25DcmVhdGV9Lz5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPSBcIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAgICAgIHttc2dzLm1hcCh4ID0+IChcclxuICAgICAgICAgICAgICAgIDxNc2dJdGVtIGtleT17eC5pZH17Li4ueH0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==