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
console.log(JSON.stringify(originalMsgs));

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
      lineNumber: 63,
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
        lineNumber: 66,
        columnNumber: 17
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSXRlbS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNc2dJbnB1dCIsIm11dGF0ZSIsInRleHQiLCJpZCIsInVuZGVmaW5lZCIsInRleHRSZWYiLCJ1c2VSZWYiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJ2YWx1ZSIsIk1zZ0l0ZW0iLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJvblVwZGF0ZSIsImlzRWRpdGluZyIsInN0YXJ0RWRpdCIsIm9uRGVsZXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiLCJVc2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib3JpZ2luYWxNc2dzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsIk1zZ0xpc3QiLCJtc2dzIiwic2V0TXNncyIsInVzZVN0YXRlIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwib25DcmVhdGUiLCJuZXdNc2ciLCJsZW5ndGgiLCJub3ciLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsIngiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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LENBQUMsQ0FBQ3hELEVBQUgsQ0FKM0I7QUFLSSxpQkFBUyxFQUFFLE1BQU02QyxZQUFZLENBQUNXLENBQUMsQ0FBQ3hELEVBQUgsQ0FMakM7QUFNSSxpQkFBUyxFQUFFNEMsU0FBUyxLQUFLWSxDQUFDLENBQUN4RDtBQU4vQixVQUNTd0QsQ0FBQyxDQUFDeEQsRUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBLGtCQURBO0FBaUJILENBMUREOztBQTREQSwrREFBZXdDLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBOztBQUVBLE1BQU1pQixJQUFJLEdBQUcsbUJBQ1Q7QUFBQSwwQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUksOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUEsZ0JBREo7O0FBT0EsK0RBQWVBLElBQWYsRTs7Ozs7Ozs7Ozs7QUNUQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVmfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IE1zZ0lucHV0ID0gKHttdXRhdGUsIHRleHQsIGlkID0gdW5kZWZpbmVkfSkgPT4ge1xyXG4gICAgY29uc3QgdGV4dFJlZiA9IHVzZVJlZihudWxsKVxyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGNvbnN0IHRleHQgPSB0ZXh0UmVmLmN1cnJlbnQudmFsdWVcclxuICAgICAgICB0ZXh0UmVmLmN1cnJlbnQudmFsdWUgPSAnJ1xyXG4gICAgICAgIG11dGF0ZSh0ZXh0LGlkKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtZXNzYWdlc19faW5wdXRcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDx0ZXh0YXJlYSByZWY9e3RleHRSZWZ9IGRlZmF1bHRWYWx1ZT17dGV4dH0gcGxhY2Vob2xkZXI9XCLrgrTsmqnsnYQg7J6F66Cl7ZWY7IS47JqULlwiIC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+7JmE66OMPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0lucHV0IiwiaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCI7XHJcblxyXG5jb25zdCBNc2dJdGVtID0gKHtpZCwgdXNlcklkLHRpbWVzdGFtcCx0ZXh0LCBvblVwZGF0ZSwgaXNFZGl0aW5nLHN0YXJ0RWRpdCxvbkRlbGV0ZSB9KSA9PiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwibWVzc2FnZXNfX2l0ZW1cIj5cclxuICAgICAgIDxoMz5cclxuICAgICAgICAgICB7dXNlcklkfXsnICd9XHJcbiAgICAgICAgICAgPHN1Yj5cclxuICAgICAgICAgICAgICAge25ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdrby1LUicse1xyXG4gICAgICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICAgICBob3VyMTI6IHRydWVcclxuICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgPC9zdWI+XHJcbiAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICB7aXNFZGl0aW5nID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IHRleHQ9e3RleHR9IGlkPXtpZH0vPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKHRleHRcclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19idXR0b25zXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRFZGl0fT7siJjsoJU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkRlbGV0ZX0+7IKt7KCcPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4pXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW0iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9ZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIjtcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xyXG5cclxuY29uc3QgVXNlcklkcyA9IFsncm95JywgJ2pheSddXHJcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV1cclxuXHJcbmNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxyXG4gICAgLmZpbGwoMClcclxuICAgIC5tYXAoKF8sIGkpID0+ICh7XHJcbiAgICBpZDogNTAgLSBpLFxyXG4gICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcclxuICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArICg1MC0gaSkgKiAxMDAwICogNjAsXHJcbiAgICB0ZXh0OiBgJHs1MCAtIGl9IG1vY2sgdGV4dGBcclxuXHJcbn0pKVxyXG5cclxuY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkob3JpZ2luYWxNc2dzKSlcclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpXHJcbiAgICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICBjb25zdCBvbkNyZWF0ZSA9IHRleHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld01zZyA9IHtcclxuICAgICAgICAgICAgaWQ6IG1zZ3MubGVuZ3RoICsgMSxcclxuICAgICAgICAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcclxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICB0ZXh0OiBgJHttc2dzLmxlbmd0aCArIDF9ICR7dGV4dH1gLFxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4gKFtuZXdNc2csIC4uLm1zZ3NdKSlcclxuICAgICAgICBjb25zb2xlLmxvZyhtc2dzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uVXBkYXRlID0gKHRleHQsaWQpID0+IHtcclxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGlkKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc11cclxuICAgICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIHtcclxuICAgICAgICAgICAgICAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIG5ld01zZ3NcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRvbmVFZGl0KClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkRlbGV0ZSA9IGlkID0+IHtcclxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpXHJcbiAgICAgICAgaWYodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNnc1xyXG4gICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc11cclxuICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSlcclxuICAgICAgICByZXR1cm4gbmV3TXNnc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbClcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfS8+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT0gXCJtZXNzYWdlc1wiPlxyXG4gICAgICAgICAgICB7bXNncy5tYXAoeCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TXNnSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17eC5pZH1cclxuICAgICAgICAgICAgICAgICAgICB7Li4ueH1cclxuICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+b25EZWxldGUoeC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3QiLCJpbXBvcnQgTXNnTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL01zZ0xpc3QnXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4gKFxyXG4gICAgPD5cclxuICAgICAgICA8aDE+U0lNUExFIFNOUzwvaDE+XHJcbiAgICAgICAgPE1zZ0xpc3QgLz5cclxuICAgIDwvPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==