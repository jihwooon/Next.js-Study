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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "D:\\local-api\\client\\components\\MsgList.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_local_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var UserIds = ['roy', 'jay'];

var getRandomUserId = function getRandomUserId() {
  return UserIds[Math.round(Math.random())];
};

var originalMsgs = Array(50).fill(0).map(function (_, i) {
  return {
    id: 50 - i,
    userId: getRandomUserId(),
    timestamp: 1234567890123 + (50 - i) * 1000 * 60,
    text: "".concat(50 - i, " mock text")
  };
});

var MsgList = function MsgList() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(originalMsgs),
      msgs = _useState[0],
      setMsgs = _useState[1];

  var onCreate = function onCreate(text) {
    var newMsg = {
      id: msgs.length + 1,
      userId: getRandomUserId(),
      timestamp: Date.now(),
      text: "".concat(msgs.length + 1, " ").concat(text)
    };
    setMsgs(function (msgs) {
      return [newMsg].concat((0,D_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs));
    });
    console.log(msgs);
  };

  var onUpdate = function onUpdate(text, id) {
    setMsgs(function (msgs) {
      var targetIndex = msgs.findIndex(function (msg) {
        return msg.id === id;
      });
      if (targetIndex < 0) return msgs;

      var newMsgs = (0,D_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs);

      newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {
        text: text
      }));
    });
    return newMsgs;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(function (x) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, x), {}, {
          onUpdate: onUpdate
        }), x.id, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(MsgList, "0rHCd0+xzNh1d+KPpUdLMZZ9PRQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIl0sIm5hbWVzIjpbIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJvcmlnaW5hbE1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsIk1zZ0xpc3QiLCJ1c2VTdGF0ZSIsIm1zZ3MiLCJzZXRNc2dzIiwib25DcmVhdGUiLCJuZXdNc2ciLCJsZW5ndGgiLCJEYXRlIiwibm93IiwiY29uc29sZSIsImxvZyIsIm9uVXBkYXRlIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFoQjs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsU0FBTUQsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEVBQVgsQ0FBRCxDQUFiO0FBQUEsQ0FBeEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHQyxLQUFLLENBQUMsRUFBRCxDQUFMLENBQ2hCQyxJQURnQixDQUNYLENBRFcsRUFFaEJDLEdBRmdCLENBRVosVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsU0FBVztBQUNoQkMsTUFBRSxFQUFFLEtBQUtELENBRE87QUFFaEJFLFVBQU0sRUFBRVgsZUFBZSxFQUZQO0FBR2hCWSxhQUFTLEVBQUUsZ0JBQWdCLENBQUMsS0FBSUgsQ0FBTCxJQUFVLElBQVYsR0FBaUIsRUFINUI7QUFJaEJJLFFBQUksWUFBSyxLQUFLSixDQUFWO0FBSlksR0FBWDtBQUFBLENBRlksQ0FBckI7O0FBVUEsSUFBTUssT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUNNQywrQ0FBUSxDQUFDWCxZQUFELENBRGQ7QUFBQSxNQUNYWSxJQURXO0FBQUEsTUFDTEMsT0FESzs7QUFFbEIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUwsSUFBSSxFQUFJO0FBQ3JCLFFBQU1NLE1BQU0sR0FBRztBQUNYVCxRQUFFLEVBQUVNLElBQUksQ0FBQ0ksTUFBTCxHQUFjLENBRFA7QUFFWFQsWUFBTSxFQUFFWCxlQUFlLEVBRlo7QUFHWFksZUFBUyxFQUFFUyxJQUFJLENBQUNDLEdBQUwsRUFIQTtBQUlYVCxVQUFJLFlBQUtHLElBQUksQ0FBQ0ksTUFBTCxHQUFjLENBQW5CLGNBQXdCUCxJQUF4QjtBQUpPLEtBQWY7QUFNQUksV0FBTyxDQUFDLFVBQUFELElBQUk7QUFBQSxjQUFNRyxNQUFOLHVIQUFpQkgsSUFBakI7QUFBQSxLQUFMLENBQVA7QUFDQU8sV0FBTyxDQUFDQyxHQUFSLENBQVlSLElBQVo7QUFDSCxHQVREOztBQVdBLE1BQU1TLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNaLElBQUQsRUFBTUgsRUFBTixFQUFhO0FBQzFCTyxXQUFPLENBQUMsVUFBQUQsSUFBSSxFQUFJO0FBQ1osVUFBTVUsV0FBVyxHQUFHVixJQUFJLENBQUNXLFNBQUwsQ0FBZSxVQUFBQyxHQUFHO0FBQUEsZUFBSUEsR0FBRyxDQUFDbEIsRUFBSixLQUFXQSxFQUFmO0FBQUEsT0FBbEIsQ0FBcEI7QUFDQSxVQUFHZ0IsV0FBVyxHQUFHLENBQWpCLEVBQW9CLE9BQU9WLElBQVA7O0FBQ3BCLFVBQU1hLE9BQU8sR0FBRyw4R0FBSWIsSUFBUCxDQUFiOztBQUNBYSxhQUFPLENBQUNDLE1BQVIsQ0FBZUosV0FBZixFQUE0QixDQUE1QixrQ0FDT1YsSUFBSSxDQUFDVSxXQUFELENBRFg7QUFFSWIsWUFBSSxFQUFKQTtBQUZKO0FBSUgsS0FSTSxDQUFQO0FBU0EsV0FBT2dCLE9BQVA7QUFDSCxHQVhEOztBQWNBLHNCQUNBO0FBQUEsNEJBQ0ksOERBQUMsOENBQUQ7QUFBVSxZQUFNLEVBQUVYO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUksZUFBUyxFQUFFLFVBQWY7QUFBQSxnQkFDS0YsSUFBSSxDQUFDVCxHQUFMLENBQVMsVUFBQXdCLENBQUM7QUFBQSw0QkFDUCw4REFBQyw2Q0FBRCxrQ0FFUUEsQ0FGUjtBQUdJLGtCQUFRLEVBQUVOO0FBSGQsWUFDU00sQ0FBQyxDQUFDckIsRUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURPO0FBQUEsT0FBVjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBLGtCQURBO0FBY0gsQ0F6Q0Q7O0dBQU1JLE87O0tBQUFBLE87QUEyQ04sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTQ3NmVhN2QzY2Q5Y2E4MWI1NWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH1mcm9tICdyZWFjdCdcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSBcIi4vTXNnSXRlbVwiO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XHJcblxyXG5jb25zdCBVc2VySWRzID0gWydyb3knLCAnamF5J11cclxuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXVxyXG5cclxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApXHJcbiAgICAuZmlsbCgwKVxyXG4gICAgLm1hcCgoXywgaSkgPT4gKHtcclxuICAgIGlkOiA1MCAtIGksXHJcbiAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxyXG4gICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgKDUwLSBpKSAqIDEwMDAgKiA2MCxcclxuICAgIHRleHQ6IGAkezUwIC0gaX0gbW9jayB0ZXh0YFxyXG5cclxufSkpXHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUob3JpZ2luYWxNc2dzKVxyXG4gICAgY29uc3Qgb25DcmVhdGUgPSB0ZXh0ID0+IHtcclxuICAgICAgICBjb25zdCBuZXdNc2cgPSB7XHJcbiAgICAgICAgICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXHJcbiAgICAgICAgICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IChbbmV3TXNnLCAuLi5tc2dzXSkpXHJcbiAgICAgICAgY29uc29sZS5sb2cobXNncylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblVwZGF0ZSA9ICh0ZXh0LGlkKSA9PiB7XHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZClcclxuICAgICAgICAgICAgaWYodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcclxuICAgICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXVxyXG4gICAgICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xyXG4gICAgICAgICAgICAgICAgLi4ubXNnc1t0YXJnZXRJbmRleF0sXHJcbiAgICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gbmV3TXNnc1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfS8+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT0gXCJtZXNzYWdlc1wiPlxyXG4gICAgICAgICAgICB7bXNncy5tYXAoeCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TXNnSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17eC5pZH1cclxuICAgICAgICAgICAgICAgICAgICB7Li4ueH1cclxuICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3QiXSwic291cmNlUm9vdCI6IiJ9