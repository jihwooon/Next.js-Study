self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\local-api\\client\\components\\MsgItem.js",
    _this = undefined;



var MsgItem = function MsgItem(_ref) {
  var userId = _ref.userId,
      timestamp = _ref.timestamp,
      text = _ref.text,
      onUpdate = _ref.onUpdate,
      isEditing = _ref.isEditing,
      startEdit = _ref.startEdit;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: "messages__item",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: [userId, ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("sub", {
        children: new Date(timestamp).toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 12
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 8
    }, _this), isEditing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
        mutate: onUpdate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this)
    }, void 0, false) : text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "messages__buttons",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: startEdit,
        children: "\uC218\uC815"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, _this);
};

_c = MsgItem;
/* harmony default export */ __webpack_exports__["default"] = (MsgItem);

var _c;

$RefreshReg$(_c, "MsgItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dJdGVtLmpzIl0sIm5hbWVzIjpbIk1zZ0l0ZW0iLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0Iiwib25VcGRhdGUiLCJpc0VkaXRpbmciLCJzdGFydEVkaXQiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLE1BQVVDLFNBQVYsUUFBVUEsU0FBVjtBQUFBLE1BQW9CQyxJQUFwQixRQUFvQkEsSUFBcEI7QUFBQSxNQUEwQkMsUUFBMUIsUUFBMEJBLFFBQTFCO0FBQUEsTUFBb0NDLFNBQXBDLFFBQW9DQSxTQUFwQztBQUFBLE1BQThDQyxTQUE5QyxRQUE4Q0EsU0FBOUM7QUFBQSxzQkFDWjtBQUFJLGFBQVMsRUFBQyxnQkFBZDtBQUFBLDRCQUNHO0FBQUEsaUJBQ0tMLE1BREwsRUFDYSxHQURiLGVBRUk7QUFBQSxrQkFDSyxJQUFJTSxJQUFKLENBQVNMLFNBQVQsRUFBb0JNLGtCQUFwQixDQUF1QyxPQUF2QyxFQUErQztBQUM1Q0MsY0FBSSxFQUFFLFNBRHNDO0FBRTVDQyxlQUFLLEVBQUUsU0FGcUM7QUFHNUNDLGFBQUcsRUFBRSxTQUh1QztBQUk1Q0MsY0FBSSxFQUFFLFNBSnNDO0FBSzVDQyxnQkFBTSxFQUFFLFNBTG9DO0FBTTVDQyxnQkFBTSxFQUFFO0FBTm9DLFNBQS9DO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURILEVBZUtULFNBQVMsZ0JBQ047QUFBQSw2QkFDSSw4REFBQyw4Q0FBRDtBQUFVLGNBQU0sRUFBRUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHFCQURNLEdBSUxELElBbkJULGVBc0JJO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsNkJBQ0k7QUFBUSxlQUFPLEVBQUVHLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEWTtBQUFBLENBQWhCOztLQUFNTixPO0FBNEJOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVlZDBhN2RhOGFmNTZmNzcwNThkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcclxuXHJcbmNvbnN0IE1zZ0l0ZW0gPSAoeyB1c2VySWQsdGltZXN0YW1wLHRleHQsIG9uVXBkYXRlLCBpc0VkaXRpbmcsc3RhcnRFZGl0IH0pID0+IChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJtZXNzYWdlc19faXRlbVwiPlxyXG4gICAgICAgPGgzPlxyXG4gICAgICAgICAgIHt1c2VySWR9eycgJ31cclxuICAgICAgICAgICA8c3ViPlxyXG4gICAgICAgICAgICAgICB7bmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZURhdGVTdHJpbmcoJ2tvLUtSJyx7XHJcbiAgICAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgICAgICAgICAgIGhvdXIxMjogdHJ1ZVxyXG4gICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICA8L3N1Yj5cclxuICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgIHtpc0VkaXRpbmcgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6ICh0ZXh0XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc19fYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4pXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW0iXSwic291cmNlUm9vdCI6IiJ9