(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/MsgInput.js":
/*!********************************!*\
  !*** ./components/MsgInput.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\local-api\\client\\components\\MsgInput.js";


const MsgInput = ({
  mutate,
  text,
  id = undefined
}) => {
  const textRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const text = textRef.current.value;
    textRef.current.value = '';
    mutate(text, id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    className: "messages__input",
    onSubmit: onSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
      ref: textRef,
      defaultValue: text,
      placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "submit",
      children: "\uC644\uB8CC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MsgInput);

/***/ }),

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");


var _jsxFileName = "D:\\local-api\\client\\components\\MsgItem.js";


const MsgItem = ({
  id,
  userId,
  timestamp,
  text,
  onUpdate,
  isEditing,
  startEdit,
  onDelete
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
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
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 8
  }, undefined), isEditing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
      mutate: onUpdate,
      text: text,
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }, undefined)
  }, void 0, false) : text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "messages__buttons",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: startEdit,
      children: "\uC218\uC815"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: onDelete,
      children: "\uC0AD\uC81C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (MsgItem);

/***/ }),

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");


var _jsxFileName = "D:\\local-api\\client\\components\\MsgList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const UserIds = ['roy', 'jay'];

const getRandomUserId = () => UserIds[Math.round(Math.random())];

const originalMsgs = Array(50).fill(0).map((_, i) => ({
  id: 50 - i,
  userId: getRandomUserId(),
  timestamp: 1234567890123 + (50 - i) * 1000 * 60,
  text: `${50 - i} mock text`
}));

const MsgList = () => {
  const {
    0: msgs,
    1: setMsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(originalMsgs);
  const {
    0: editingId,
    1: setEditingId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const onCreate = text => {
    const newMsg = {
      id: msgs.length + 1,
      userId: getRandomUserId(),
      timestamp: Date.now(),
      text: `${msgs.length + 1} ${text}`
    };
    setMsgs(msgs => [newMsg, ...msgs]);
    console.log(msgs);
  };

  const onUpdate = (text, id) => {
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {
        text
      }));
      return newMsgs;
    });
    doneEdit();
  };

  const onDelete = id => {
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };

  const doneEdit = () => setEditingId(null);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(x => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, x), {}, {
        onUpdate: onUpdate,
        onDelete: () => onDelete(x.id),
        startEdit: () => setEditingId(x.id),
        isEditing: editingId === x.id
      }), x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (MsgList);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MsgList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MsgList */ "./components/MsgList.js");


var _jsxFileName = "D:\\local-api\\client\\pages\\index.js";


const Home = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    children: "SIMPLE SNS"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MsgList__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined)]
}, void 0, true);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSXRlbS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNc2dJbnB1dCIsIm11dGF0ZSIsInRleHQiLCJpZCIsInVuZGVmaW5lZCIsInRleHRSZWYiLCJ1c2VSZWYiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJ2YWx1ZSIsIk1zZ0l0ZW0iLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJvblVwZGF0ZSIsImlzRWRpdGluZyIsInN0YXJ0RWRpdCIsIm9uRGVsZXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiLCJVc2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib3JpZ2luYWxNc2dzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJNc2dMaXN0IiwibXNncyIsInNldE1zZ3MiLCJ1c2VTdGF0ZSIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibGVuZ3RoIiwibm93IiwiY29uc29sZSIsImxvZyIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0IiwieCIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FB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QztBQU1JLGlCQUFTLEVBQUV3QyxTQUFTLEtBQUtjLENBQUMsQ0FBQ3REO0FBTi9CLFVBQ1NzRCxDQUFDLENBQUN0RCxFQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUEsa0JBREE7QUFpQkgsQ0ExREQ7O0FBNERBLCtEQUFlb0MsT0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7O0FBRUEsTUFBTW1CLElBQUksR0FBRyxtQkFDVDtBQUFBLDBCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQSxnQkFESjs7QUFPQSwrREFBZUEsSUFBZixFOzs7Ozs7Ozs7OztBQ1RBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTXNnSW5wdXQgPSAoe211dGF0ZSwgdGV4dCwgaWQgPSB1bmRlZmluZWR9KSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0UmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHRleHRSZWYuY3VycmVudC52YWx1ZVxyXG4gICAgICAgIHRleHRSZWYuY3VycmVudC52YWx1ZSA9ICcnXHJcbiAgICAgICAgbXV0YXRlKHRleHQsaWQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pbnB1dFwiIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPHRleHRhcmVhIHJlZj17dGV4dFJlZn0gZGVmYXVsdFZhbHVlPXt0ZXh0fSBwbGFjZWhvbGRlcj1cIuuCtOyaqeydhCDsnoXroKXtlZjshLjsmpQuXCIgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7smYTro4w8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTXNnSW5wdXQiLCJpbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcclxuXHJcbmNvbnN0IE1zZ0l0ZW0gPSAoe2lkLCB1c2VySWQsdGltZXN0YW1wLHRleHQsIG9uVXBkYXRlLCBpc0VkaXRpbmcsc3RhcnRFZGl0LG9uRGVsZXRlIH0pID0+IChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJtZXNzYWdlc19faXRlbVwiPlxyXG4gICAgICAgPGgzPlxyXG4gICAgICAgICAgIHt1c2VySWR9eycgJ31cclxuICAgICAgICAgICA8c3ViPlxyXG4gICAgICAgICAgICAgICB7bmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZURhdGVTdHJpbmcoJ2tvLUtSJyx7XHJcbiAgICAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgICAgICAgICAgIGhvdXIxMjogdHJ1ZVxyXG4gICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICA8L3N1Yj5cclxuICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgIHtpc0VkaXRpbmcgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gdGV4dD17dGV4dH0gaWQ9e2lkfS8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAodGV4dFxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXNfX2J1dHRvbnNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydEVkaXR9PuyImOyglTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT7sgq3soJw8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbilcclxuZXhwb3J0IGRlZmF1bHQgTXNnSXRlbSIsImltcG9ydCB7IHVzZVN0YXRlIH1mcm9tICdyZWFjdCdcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSBcIi4vTXNnSXRlbVwiO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XHJcblxyXG5jb25zdCBVc2VySWRzID0gWydyb3knLCAnamF5J11cclxuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXVxyXG5cclxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApXHJcbiAgICAuZmlsbCgwKVxyXG4gICAgLm1hcCgoXywgaSkgPT4gKHtcclxuICAgIGlkOiA1MCAtIGksXHJcbiAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxyXG4gICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgKDUwLSBpKSAqIDEwMDAgKiA2MCxcclxuICAgIHRleHQ6IGAkezUwIC0gaX0gbW9jayB0ZXh0YFxyXG5cclxufSkpXHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUob3JpZ2luYWxNc2dzKVxyXG4gICAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3Qgb25DcmVhdGUgPSB0ZXh0ID0+IHtcclxuICAgICAgICBjb25zdCBuZXdNc2cgPSB7XHJcbiAgICAgICAgICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXHJcbiAgICAgICAgICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IChbbmV3TXNnLCAuLi5tc2dzXSkpXHJcbiAgICAgICAgY29uc29sZS5sb2cobXNncylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblVwZGF0ZSA9ICh0ZXh0LGlkKSA9PiB7XHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZClcclxuICAgICAgICAgICAgaWYodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNnc1xyXG4gICAgICAgICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdXHJcbiAgICAgICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCB7XHJcbiAgICAgICAgICAgICAgICAuLi5tc2dzW3RhcmdldEluZGV4XSxcclxuICAgICAgICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBuZXdNc2dzXHJcbiAgICAgICAgfSlcclxuICAgICAgICBkb25lRWRpdCgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25EZWxldGUgPSBpZCA9PiB7XHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGlkKVxyXG4gICAgICAgIGlmKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3NcclxuICAgICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdXHJcbiAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpXHJcbiAgICAgICAgcmV0dXJuIG5ld01zZ3NcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0vPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9IFwibWVzc2FnZXNcIj5cclxuICAgICAgICAgICAge21zZ3MubWFwKHggPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1zZ0l0ZW1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3guaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnh9XHJcbiAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9Pm9uRGVsZXRlKHguaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0IiwiaW1wb3J0IE1zZ0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Nc2dMaXN0J1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IChcclxuICAgIDw+XHJcbiAgICAgICAgPGgxPlNJTVBMRSBTTlM8L2gxPlxyXG4gICAgICAgIDxNc2dMaXN0IC8+XHJcbiAgICA8Lz5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=