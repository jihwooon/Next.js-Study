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

var originalMsgs = Array(50).fill(0).map(function (_, i) {
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
      id: msg.length + 1,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIl0sIm5hbWVzIjpbIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJvcmlnaW5hbE1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsIk1zZ0xpc3QiLCJ1c2VyU3RhdGUiLCJtc2dzIiwic2V0TXNncyIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibXNnIiwibGVuZ3RoIiwiRGF0ZSIsIm5vdyIsImNvbnNvbGUiLCJsb2ciLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFoQjs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsU0FBTUQsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEVBQVgsQ0FBRCxDQUFiO0FBQUEsQ0FBeEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHQyxLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsQ0FBZSxDQUFmLEVBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxTQUFXO0FBQ2xEQyxNQUFFLEVBQUVELENBQUMsR0FBRyxDQUQwQztBQUVsREUsVUFBTSxFQUFFWCxlQUFlLEVBRjJCO0FBR2xEWSxhQUFTLEVBQUUsZ0JBQWdCLENBQUMsS0FBSUgsQ0FBTCxJQUFVLElBQVYsR0FBaUIsRUFITTtBQUlsREksUUFBSSxZQUFLLEtBQUtKLENBQVY7QUFKOEMsR0FBWDtBQUFBLENBQXRCLENBQXJCOztBQVFBLElBQU1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQSxtQkFDTUMsU0FBUyxDQUFDWCxZQUFELENBRGY7QUFBQTtBQUFBLE1BQ1hZLElBRFc7QUFBQSxNQUNMQyxPQURLOztBQUVsQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBTCxJQUFJLEVBQUk7QUFDckIsUUFBTU0sTUFBTSxHQUFHO0FBQ1hULFFBQUUsRUFBRVUsR0FBRyxDQUFDQyxNQUFKLEdBQWEsQ0FETjtBQUVYVixZQUFNLEVBQUVYLGVBQWUsRUFGWjtBQUdYWSxlQUFTLEVBQUVVLElBQUksQ0FBQ0MsR0FBTCxFQUhBO0FBSVhWLFVBQUksWUFBS0csSUFBSSxDQUFDSyxNQUFWLGNBQW9CUixJQUFwQjtBQUpPLEtBQWY7QUFNQUksV0FBTyxDQUFDLFVBQUFELElBQUk7QUFBQSxjQUFNRyxNQUFOLHVIQUFpQkgsSUFBakI7QUFBQSxLQUFMLENBQVA7QUFDQVEsV0FBTyxDQUFDQyxHQUFSLENBQVlULElBQVo7QUFDSCxHQVREOztBQVdBLHNCQUNBO0FBQUEsNEJBQ0ksOERBQUMsOENBQUQ7QUFBVSxZQUFNLEVBQUVFO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUksZUFBUyxFQUFFLFVBQWY7QUFBQSxnQkFDS0YsSUFBSSxDQUFDVCxHQUFMLENBQVMsVUFBQW1CLENBQUM7QUFBQSw0QkFDUCw4REFBQyw2Q0FBRCxvQkFBdUJBLENBQXZCLEdBQWNBLENBQUMsQ0FBQ2hCLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRE87QUFBQSxPQUFWO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUEsa0JBREE7QUFVSCxDQXZCRDs7S0FBTUksTztBQXlCTiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jN2Y3ZjgzNTE0ZWU3Yzk2OTMzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfWZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTXNnSXRlbSBmcm9tIFwiLi9Nc2dJdGVtXCI7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcclxuXHJcbmNvbnN0IFVzZXJJZHMgPSBbJ3JveScsICdqYXknXVxyXG5jb25zdCBnZXRSYW5kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldXHJcblxyXG5jb25zdCBvcmlnaW5hbE1zZ3MgPSBBcnJheSg1MCkuZmlsbCgwKS5tYXAoKF8sIGkpID0+ICh7XHJcbiAgICBpZDogaSArIDEsXHJcbiAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxyXG4gICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgKDUwLSBpKSAqIDEwMDAgKiA2MCxcclxuICAgIHRleHQ6IGAkezUwIC0gaX0gbW9jayB0ZXh0YFxyXG5cclxufSkpXHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlclN0YXRlKG9yaWdpbmFsTXNncylcclxuICAgIGNvbnN0IG9uQ3JlYXRlID0gdGV4dCA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TXNnID0ge1xyXG4gICAgICAgICAgICBpZDogbXNnLmxlbmd0aCArIDEsXHJcbiAgICAgICAgICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGh9ICR7dGV4dH1gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiAoW25ld01zZywgLi4ubXNnc10pKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG1zZ3MpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgICAgICA8TXNnSW5wdXQgbXV0YWdlPXtvbkNyZWF0ZX0vPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9IFwibWVzc2FnZXNcIj5cclxuICAgICAgICAgICAge21zZ3MubWFwKHggPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1zZ0l0ZW0ga2V5PXt4LmlkfXsuLi54fSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3QiXSwic291cmNlUm9vdCI6IiJ9