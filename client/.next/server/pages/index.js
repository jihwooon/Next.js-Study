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
  onDelete,
  myId
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
  }, void 0, false) : text, myId === userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "messages__buttons",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: startEdit,
      children: "\uC218\uC815"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: onDelete,
      children: "\uC0AD\uC81C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 13
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetcher */ "./fetcher.js");


var _jsxFileName = "D:\\local-api\\client\\components\\MsgList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const UserIds = ['roy', 'jay'];

const getRandomUserId = () => UserIds[Math.round(Math.random())];

console.log(JSON.stringify([]));

const MsgList = () => {
  const {
    0: msgs,
    1: setMsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: editingId,
    1: setEditingId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    query: {
      userId = ''
    }
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const onCreate = async text => {
    const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__.default)('post', '/messages', {
      text,
      userId
    });
    if (!newMsg) throw Error('something wrong');
    setMsgs(msgs => [newMsg, ...msgs]);
    console.log(msgs);
  };

  const onUpdate = async (text, id) => {
    const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__.default)('put', `/messages/${id}`, {
      text,
      userId
    });
    if (!newMsg) return;
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1, newMsg);
      return newMsgs;
    });
    doneEdit();
  };

  const onDelete = async id => {
    const receviedid = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__.default)('delete', `/messages/${id}`, {
      params: {
        userId
      }
    });
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === receviedid);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };

  const doneEdit = () => setEditingId(null);

  const getMessages = async () => {
    const msgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__.default)('get', '/messages');
    setMsgs(msgs);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getMessages();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_4__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(x => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, x), {}, {
        onUpdate: onUpdate,
        onDelete: () => onDelete(x.id),
        startEdit: () => setEditingId(x.id),
        isEditing: editingId === x.id
      }), x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (MsgList);

/***/ }),

/***/ "./fetcher.js":
/*!********************!*\
  !*** ./fetcher.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = 'http://localhost:8000';

const fetcher = async (method, url, ...rest) => {
  const res = await (axios__WEBPACK_IMPORTED_MODULE_0___default())[method](url, ...rest);
  return res.data;
};

/* harmony default export */ __webpack_exports__["default"] = (fetcher);
/*
get: axios.get(url[ config])
delete: axios.delete(url[ config],)
post: axios.post(url data[, config])
put: axios.put(url data[, config])
* */

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSXRlbS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vZmV0Y2hlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNc2dJbnB1dCIsIm11dGF0ZSIsInRleHQiLCJpZCIsInVuZGVmaW5lZCIsInRleHRSZWYiLCJ1c2VSZWYiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJ2YWx1ZSIsIk1zZ0l0ZW0iLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJvblVwZGF0ZSIsImlzRWRpdGluZyIsInN0YXJ0RWRpdCIsIm9uRGVsZXRlIiwibXlJZCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwiVXNlcklkcyIsImdldFJhbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiTXNnTGlzdCIsIm1zZ3MiLCJzZXRNc2dzIiwidXNlU3RhdGUiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJxdWVyeSIsInVzZVJvdXRlciIsIm9uQ3JlYXRlIiwibmV3TXNnIiwiZmV0Y2hlciIsIkVycm9yIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJyZWNldmllZGlkIiwicGFyYW1zIiwiZ2V0TWVzc2FnZXMiLCJ1c2VFZmZlY3QiLCJtYXAiLCJ4IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJyZXN0IiwicmVzIiwiZGF0YSIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBQ0MsUUFBRDtBQUFTQyxNQUFUO0FBQWVDLElBQUUsR0FBR0M7QUFBcEIsQ0FBRCxLQUFvQztBQUNqRCxRQUFNQyxPQUFPLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUF0Qjs7QUFFQSxRQUFNQyxRQUFRLEdBQUdDLENBQUMsSUFBSTtBQUNsQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FELEtBQUMsQ0FBQ0UsZUFBRjtBQUNBLFVBQU1SLElBQUksR0FBR0csT0FBTyxDQUFDTSxPQUFSLENBQWdCQyxLQUE3QjtBQUNBUCxXQUFPLENBQUNNLE9BQVIsQ0FBZ0JDLEtBQWhCLEdBQXdCLEVBQXhCO0FBQ0FYLFVBQU0sQ0FBQ0MsSUFBRCxFQUFNQyxFQUFOLENBQU47QUFDSCxHQU5EOztBQVFBLHNCQUNJO0FBQU0sYUFBUyxFQUFDLGlCQUFoQjtBQUFrQyxZQUFRLEVBQUVJLFFBQTVDO0FBQUEsNEJBQ0E7QUFBVSxTQUFHLEVBQUVGLE9BQWY7QUFBd0Isa0JBQVksRUFBRUgsSUFBdEM7QUFBNEMsaUJBQVcsRUFBQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBRUE7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQU1ILENBakJEOztBQWtCQSwrREFBZUYsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7O0FBRUEsTUFBTWEsT0FBTyxHQUFHLENBQUM7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBOztBQUVBLE1BQU1vQixJQUFJLEdBQUcsbUJBQ1Q7QUFBQSwwQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUksOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUEsZ0JBREo7O0FBT0EsK0RBQWVBLElBQWYsRTs7Ozs7Ozs7Ozs7QUNUQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVmfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IE1zZ0lucHV0ID0gKHttdXRhdGUsIHRleHQsIGlkID0gdW5kZWZpbmVkfSkgPT4ge1xyXG4gICAgY29uc3QgdGV4dFJlZiA9IHVzZVJlZihudWxsKVxyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGNvbnN0IHRleHQgPSB0ZXh0UmVmLmN1cnJlbnQudmFsdWVcclxuICAgICAgICB0ZXh0UmVmLmN1cnJlbnQudmFsdWUgPSAnJ1xyXG4gICAgICAgIG11dGF0ZSh0ZXh0LGlkKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtZXNzYWdlc19faW5wdXRcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDx0ZXh0YXJlYSByZWY9e3RleHRSZWZ9IGRlZmF1bHRWYWx1ZT17dGV4dH0gcGxhY2Vob2xkZXI9XCLrgrTsmqnsnYQg7J6F66Cl7ZWY7IS47JqULlwiIC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+7JmE66OMPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0lucHV0IiwiaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCI7XHJcblxyXG5jb25zdCBNc2dJdGVtID0gKHtpZCwgdXNlcklkLHRpbWVzdGFtcCx0ZXh0LCBvblVwZGF0ZSwgaXNFZGl0aW5nLHN0YXJ0RWRpdCxvbkRlbGV0ZSwgbXlJZCB9KSA9PiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwibWVzc2FnZXNfX2l0ZW1cIj5cclxuICAgICAgIDxoMz5cclxuICAgICAgICAgICB7dXNlcklkfXsnICd9XHJcbiAgICAgICAgICAgPHN1Yj5cclxuICAgICAgICAgICAgICAge25ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdrby1LUicse1xyXG4gICAgICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICAgICBob3VyMTI6IHRydWVcclxuICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgPC9zdWI+XHJcbiAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICB7aXNFZGl0aW5nID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IHRleHQ9e3RleHR9IGlkPXtpZH0vPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge215SWQgPT09IHVzZXJJZCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXNfX2J1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRFZGl0fT7siJjsoJU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PuyCreygnDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgPC9saT5cclxuKVxyXG5leHBvcnQgZGVmYXVsdCBNc2dJdGVtIiwiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSBcIi4vTXNnSXRlbVwiO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2ZldGNoZXInO1xyXG5cclxuY29uc3QgVXNlcklkcyA9IFsncm95JywgJ2pheSddXHJcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV1cclxuXHJcblxyXG5jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShbXSkpXHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IHtxdWVyeToge3VzZXJJZCA9ICcnfX0gPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgdGV4dCA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncG9zdCcsICcvbWVzc2FnZXMnLHt0ZXh0LCB1c2VySWQgfSlcclxuICAgICAgIGlmKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb21ldGhpbmcgd3JvbmcnKVxyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiAoW25ld01zZywgLi4ubXNnc10pKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG1zZ3MpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAodGV4dCxpZCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwdXQnLCBgL21lc3NhZ2VzLyR7aWR9YCwge3RleHQsIHVzZXJJZH0pXHJcbiAgICAgICBpZighbmV3TXNnKSByZXR1cm5cclxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGlkKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc11cclxuICAgICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZylcclxuICAgICAgICAgICAgcmV0dXJuIG5ld01zZ3NcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRvbmVFZGl0KClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIGlkID0+IHtcclxuICAgICAgICBjb25zdCByZWNldmllZGlkID0gYXdhaXQgZmV0Y2hlcignZGVsZXRlJywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgcGFyYW1zOiB7dXNlcklkfX0pXHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IHJlY2V2aWVkaWQpXHJcbiAgICAgICAgaWYodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNnc1xyXG4gICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc11cclxuICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSlcclxuICAgICAgICByZXR1cm4gbmV3TXNnc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbClcclxuXHJcbiAgICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBtc2dzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy9tZXNzYWdlcycpXHJcbiAgICAgICAgc2V0TXNncyhtc2dzKVxyXG5cclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICBnZXRNZXNzYWdlcygpXHJcbiAgICB9ICwgW10pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0vPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9IFwibWVzc2FnZXNcIj5cclxuICAgICAgICAgICAge21zZ3MubWFwKHggPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1zZ0l0ZW1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3guaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnh9XHJcbiAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9Pm9uRGVsZXRlKHguaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnXHJcblxyXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKG1ldGhvZCwgdXJsLCAuLi5yZXN0KSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3NbbWV0aG9kXSh1cmwsIC4uLnJlc3QpXHJcbiAgcmV0dXJuIHJlcy5kYXRhXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyXHJcbi8qXHJcbmdldDogYXhpb3MuZ2V0KHVybFsgY29uZmlnXSlcclxuZGVsZXRlOiBheGlvcy5kZWxldGUodXJsWyBjb25maWddLClcclxucG9zdDogYXhpb3MucG9zdCh1cmwgZGF0YVssIGNvbmZpZ10pXHJcbnB1dDogYXhpb3MucHV0KHVybCBkYXRhWywgY29uZmlnXSlcclxuKiAqLyIsImltcG9ydCBNc2dMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTXNnTGlzdCdcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxoMT5TSU1QTEUgU05TPC9oMT5cclxuICAgICAgICA8TXNnTGlzdCAvPlxyXG4gICAgPC8+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=