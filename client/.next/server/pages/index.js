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
  myId,
  user
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
  className: "messages__item",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
    children: [user.nickname, ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("sub", {
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
/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ "./hooks/useInfiniteScroll.js");


var _jsxFileName = "D:\\local-api\\client\\components\\MsgList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const MsgList = ({
  smsgs,
  users
}) => {
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const userId = query.userId || query.userid || '';
  const {
    0: msgs,
    1: setMsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(smsgs);
  const {
    0: editingId,
    1: setEditingId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: hasNext,
    1: setHasNext
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__.default)(fetchMoreEl);

  const onCreate = async text => {
    const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__.default)('post', '/messages', {
      text,
      userId
    });
    if (!newMsg) throw Error('something wrong');
    setMsgs(msgs => [newMsg, ...msgs]);
  };

  const onUpdate = async (text, id) => {
    const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__.default)('put', `/messages/${id}`, {
      text,
      userId
    });
    if (!newMsg) throw Error('something worng');
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1, newMsgs);
      return newMsgs;
    });
    doneEdit();
  };

  const onDelete = async id => {
    const receivedId = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__.default)('delete', `/messages/${id}`, {
      params: {
        userId
      }
    });
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === receivedId + '');
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };

  const doneEdit = () => setEditingId(null);

  const getMessages = async () => {
    var _msgs;

    const newMsgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__.default)('get', '/messages', {
      params: {
        cursor: ((_msgs = msgs[msgs.length - 1]) === null || _msgs === void 0 ? void 0 : _msgs.id) || ''
      }
    });

    if (newMsgs.length === 0) {
      setHasNext(false);
      return;
    }

    setMsgs(msgs => [...msgs, ...newMsgs]);
  };
  /* useEffect(() => {
      getMessages()
   } , [])*/


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (intersecting && hasNext) getMessages();
  }, [intersecting]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_4__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 20
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(x => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, x), {}, {
        onUpdate: onUpdate,
        onDelete: () => onDelete(x.id),
        startEdit: () => setEditingId(x.id),
        isEditing: editingId === x.id,
        myId: userId,
        user: users[x.userId]
      }), x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: fetchMoreEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
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

/***/ "./hooks/useInfiniteScroll.js":
/*!************************************!*\
  !*** ./hooks/useInfiniteScroll.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInfiniteScroll = targetEl => {
  const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: intersecting,
    1: setIntersecting
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const getObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(entries => setIntersecting(entries.some(entry => entry.isIntersecting)));
    }

    return observerRef.current;
  }, [observerRef.current]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (targetEl.current) getObserver().observe(targetEl.current);
    return () => {
      getObserver().disconnect();
    };
  }, [targetEl.current]);
  return intersecting;
};

/* harmony default export */ __webpack_exports__["default"] = (useInfiniteScroll);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MsgList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MsgList */ "./components/MsgList.js");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetcher */ "./fetcher.js");


var _jsxFileName = "D:\\local-api\\client\\pages\\index.js";



const Home = ({
  smsgs,
  users
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    children: "SIMPLE SNS"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MsgList__WEBPACK_IMPORTED_MODULE_1__.default, {
    smsgs: smsgs,
    users: users
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined)]
}, void 0, true);

const getServerSideProps = async () => {
  const smsgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_2__.default)('get', '/messages');
  const users = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_2__.default)('get', '/users');
  return {
    props: {
      smsgs,
      users
    }
  };
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSXRlbS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vZmV0Y2hlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNc2dJbnB1dCIsIm11dGF0ZSIsInRleHQiLCJpZCIsInVuZGVmaW5lZCIsInRleHRSZWYiLCJ1c2VSZWYiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJ2YWx1ZSIsIk1zZ0l0ZW0iLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJvblVwZGF0ZSIsImlzRWRpdGluZyIsInN0YXJ0RWRpdCIsIm9uRGVsZXRlIiwibXlJZCIsInVzZXIiLCJuaWNrbmFtZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwiTXNnTGlzdCIsInNtc2dzIiwidXNlcnMiLCJxdWVyeSIsInVzZVJvdXRlciIsInVzZXJpZCIsIm1zZ3MiLCJzZXRNc2dzIiwidXNlU3RhdGUiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJoYXNOZXh0Iiwic2V0SGFzTmV4dCIsImZldGNoTW9yZUVsIiwiaW50ZXJzZWN0aW5nIiwidXNlSW5maW5pdGVTY3JvbGwiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImZldGNoZXIiLCJFcnJvciIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0IiwicmVjZWl2ZWRJZCIsInBhcmFtcyIsImdldE1lc3NhZ2VzIiwiY3Vyc29yIiwibGVuZ3RoIiwidXNlRWZmZWN0IiwibWFwIiwieCIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwicmVzdCIsInJlcyIsImRhdGEiLCJ0YXJnZXRFbCIsIm9ic2VydmVyUmVmIiwic2V0SW50ZXJzZWN0aW5nIiwiZ2V0T2JzZXJ2ZXIiLCJ1c2VDYWxsYmFjayIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsInNvbWUiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJIb21lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBQ0MsUUFBRDtBQUFTQyxNQUFUO0FBQWVDLElBQUUsR0FBR0M7QUFBcEIsQ0FBRCxLQUFvQztBQUNqRCxRQUFNQyxPQUFPLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUF0Qjs7QUFFQSxRQUFNQyxRQUFRLEdBQUdDLENBQUMsSUFBSTtBQUNsQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FELEtBQUMsQ0FBQ0UsZUFBRjtBQUNBLFVBQU1SLElBQUksR0FBR0csT0FBTyxDQUFDTSxPQUFSLENBQWdCQyxLQUE3QjtBQUNBUCxXQUFPLENBQUNNLE9BQVIsQ0FBZ0JDLEtBQWhCLEdBQXdCLEVBQXhCO0FBQ0FYLFVBQU0sQ0FBQ0MsSUFBRCxFQUFNQyxFQUFOLENBQU47QUFDSCxHQU5EOztBQVFBLHNCQUNJO0FBQU0sYUFBUyxFQUFDLGlCQUFoQjtBQUFrQyxZQUFRLEVBQUVJLFFB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QTtBQUFBO0FBQUEsZUFGSjtBQUFBLGdCQURKOztBQU9PLE1BQU1tRCxrQkFBa0IsR0FBRyxZQUFZO0FBQzNDLFFBQU1wRCxLQUFLLEdBQUcsTUFBTWlCLGlEQUFPLENBQUMsS0FBRCxFQUFRLFdBQVIsQ0FBM0I7QUFDQyxRQUFNaEIsS0FBSyxHQUFHLE1BQU1nQixpREFBTyxDQUFDLEtBQUQsRUFBUSxRQUFSLENBQTNCO0FBQ0EsU0FBTztBQUNMb0MsU0FBSyxFQUFFO0FBQUVyRCxXQUFGO0FBQVNDO0FBQVQ7QUFERixHQUFQO0FBSUgsQ0FQTTtBQVNQLCtEQUFla0QsSUFBZixFOzs7Ozs7Ozs7OztBQ25CQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVmfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IE1zZ0lucHV0ID0gKHttdXRhdGUsIHRleHQsIGlkID0gdW5kZWZpbmVkfSkgPT4ge1xyXG4gICAgY29uc3QgdGV4dFJlZiA9IHVzZVJlZihudWxsKVxyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGNvbnN0IHRleHQgPSB0ZXh0UmVmLmN1cnJlbnQudmFsdWVcclxuICAgICAgICB0ZXh0UmVmLmN1cnJlbnQudmFsdWUgPSAnJ1xyXG4gICAgICAgIG11dGF0ZSh0ZXh0LGlkKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtZXNzYWdlc19faW5wdXRcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDx0ZXh0YXJlYSByZWY9e3RleHRSZWZ9IGRlZmF1bHRWYWx1ZT17dGV4dH0gcGxhY2Vob2xkZXI9XCLrgrTsmqnsnYQg7J6F66Cl7ZWY7IS47JqULlwiIC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+7JmE66OMPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0lucHV0IiwiaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCI7XHJcblxyXG5jb25zdCBNc2dJdGVtID0gKHtpZCwgdXNlcklkLHRpbWVzdGFtcCx0ZXh0LCBvblVwZGF0ZSwgaXNFZGl0aW5nLHN0YXJ0RWRpdCxvbkRlbGV0ZSwgbXlJZCwgdXNlciB9KSA9PiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwibWVzc2FnZXNfX2l0ZW1cIj5cclxuICAgICAgIDxoMz5cclxuICAgICAgICAgICB7dXNlci5uaWNrbmFtZX17JyAnfVxyXG4gICAgICAgICAgIDxzdWI+XHJcbiAgICAgICAgICAgICAgIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlRGF0ZVN0cmluZygna28tS1InLHtcclxuICAgICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgaG91cjEyOiB0cnVlXHJcbiAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgIDwvc3ViPlxyXG4gICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAge2lzRWRpdGluZyA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uVXBkYXRlfSB0ZXh0PXt0ZXh0fSBpZD17aWR9Lz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtteUlkID09PSB1c2VySWQgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT7sgq3soJw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgIDwvbGk+XHJcbilcclxuZXhwb3J0IGRlZmF1bHQgTXNnSXRlbSIsImltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSBcIi4vTXNnSXRlbVwiO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2ZldGNoZXInO1xyXG5pbXBvcnQgdXNlSW5maW5pdGVTY3JvbGwgZnJvbSBcIi4uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsXCI7XHJcblxyXG5cclxuY29uc3QgTXNnTGlzdCA9ICh7c21zZ3MsIHVzZXJzfSkgPT4ge1xyXG4gICBjb25zdCB7IHF1ZXJ5fSA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB1c2VySWQgPSBxdWVyeS51c2VySWQgfHwgcXVlcnkudXNlcmlkIHx8ICcnXHJcblxyXG4gICAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoc21zZ3MpXHJcbiAgICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtoYXNOZXh0LCBzZXRIYXNOZXh0XSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBmZXRjaE1vcmVFbCA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgaW50ZXJzZWN0aW5nID0gdXNlSW5maW5pdGVTY3JvbGwoZmV0Y2hNb3JlRWwpXHJcblxyXG4gICAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyB0ZXh0ID0+IHtcclxuICAgICAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwb3N0JywgJy9tZXNzYWdlcycse3RleHQsIHVzZXJJZCB9KVxyXG4gICAgICAgaWYoIW5ld01zZykgdGhyb3cgRXJyb3IoJ3NvbWV0aGluZyB3cm9uZycpXHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IFtuZXdNc2csIC4uLm1zZ3NdKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsaWQpID0+IHtcclxuICAgICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncHV0JywgYC9tZXNzYWdlcy8ke2lkfWAsIHt0ZXh0LCB1c2VySWR9KVxyXG4gICAgICAgaWYoIW5ld01zZykgdGhyb3cgRXJyb3IoJ3NvbWV0aGluZyB3b3JuZycpXHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZClcclxuICAgICAgICAgICAgaWYodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNnc1xyXG4gICAgICAgICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdXHJcbiAgICAgICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCBuZXdNc2dzKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3TXNnc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9uZUVkaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlY2VpdmVkSWQgPSBhd2FpdCBmZXRjaGVyKCdkZWxldGUnLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyBwYXJhbXM6IHt1c2VySWR9fSlcclxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gcmVjZWl2ZWRJZCArICcnKVxyXG4gICAgICAgIGlmKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3NcclxuICAgICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdXHJcbiAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpXHJcbiAgICAgICAgcmV0dXJuIG5ld01zZ3NcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpXHJcblxyXG4gICAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TXNncyA9IGF3YWl0IGZldGNoZXIoJ2dldCcsICcvbWVzc2FnZXMnLCB7IHBhcmFtczogeyBjdXJzb3I6bXNnc1ttc2dzLmxlbmd0aCAtIDFdPy5pZCB8fCAnJ319KVxyXG4gICAgICAgaWYobmV3TXNncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICBzZXRIYXNOZXh0KGZhbHNlKVxyXG4gICAgICAgICAgIHJldHVyblxyXG4gICAgICAgfVxyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PlsuLi5tc2dzLCAuLi5uZXdNc2dzXSlcclxuICAgIH1cclxuXHJcbiAgIC8qIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICBnZXRNZXNzYWdlcygpXHJcbiAgICB9ICwgW10pKi9cclxuXHJcbiAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICBpZihpbnRlcnNlY3RpbmcgJiYgaGFzTmV4dCkgZ2V0TWVzc2FnZXMoKVxyXG4gICB9LFtpbnRlcnNlY3RpbmddKVxyXG5cclxuICAgIHJldHVybihcclxuICAgIDw+XHJcbiAgICAgICAge3VzZXJJZCAmJiA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0vPn1cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPSBcIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAgICAgIHttc2dzLm1hcCh4ID0+IChcclxuICAgICAgICAgICAgICAgIDxNc2dJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXt4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi54fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT5vbkRlbGV0ZSh4LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cclxuICAgICAgICAgICAgICAgICAgICBteUlkPXt1c2VySWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcnNbeC51c2VySWRdfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8ZGl2IHJlZj0ge2ZldGNoTW9yZUVsfS8+XHJcbiAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwJ1xyXG5cclxuY29uc3QgZmV0Y2hlciA9IGFzeW5jIChtZXRob2QsIHVybCwgLi4ucmVzdCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zW21ldGhvZF0odXJsLCAuLi5yZXN0KVxyXG4gIHJldHVybiByZXMuZGF0YVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hlclxyXG4vKlxyXG5nZXQ6IGF4aW9zLmdldCh1cmxbIGNvbmZpZ10pXHJcbmRlbGV0ZTogYXhpb3MuZGVsZXRlKHVybFsgY29uZmlnXSwpXHJcbnBvc3Q6IGF4aW9zLnBvc3QodXJsIGRhdGFbLCBjb25maWddKVxyXG5wdXQ6IGF4aW9zLnB1dCh1cmwgZGF0YVssIGNvbmZpZ10pXHJcbiogKi8iLCJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgdXNlSW5maW5pdGVTY3JvbGwgPSB0YXJnZXRFbCA9PiB7XHJcbiAgIGNvbnN0IG9ic2VydmVyUmVmID0gdXNlUmVmKG51bGwpXHJcbiAgIGNvbnN0IFtpbnRlcnNlY3RpbmcsIHNldEludGVyc2VjdGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgIGNvbnN0IGdldE9ic2VydmVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgaWYoIW9ic2VydmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIG9ic2VydmVyUmVmLmN1cnJlbnQgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PlxyXG4gICAgICAgICAgICAgIHNldEludGVyc2VjdGluZyhlbnRyaWVzLnNvbWUoZW50cnkgPT4gZW50cnkuaXNJbnRlcnNlY3RpbmcpKSxcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICB9XHJcbiAgICAgIHJldHVybiBvYnNlcnZlclJlZi5jdXJyZW50XHJcbiAgICB9LCBbIG9ic2VydmVyUmVmLmN1cnJlbnRdKVxyXG5cclxuICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICBpZih0YXJnZXRFbC5jdXJyZW50KSBnZXRPYnNlcnZlcigpLm9ic2VydmUodGFyZ2V0RWwuY3VycmVudClcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgIGdldE9ic2VydmVyKCkuZGlzY29ubmVjdCgpXHJcbiAgICAgfVxyXG4gICB9LCBbdGFyZ2V0RWwuY3VycmVudF0pXHJcblxyXG4gICAgcmV0dXJuIGludGVyc2VjdGluZ1xyXG4gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlSW5maW5pdGVTY3JvbGxcclxuIiwiaW1wb3J0IE1zZ0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Nc2dMaXN0J1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tIFwiLi4vZmV0Y2hlclwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICh7IHNtc2dzLCB1c2Vyc30pID0+IChcclxuICAgIDw+XHJcbiAgICAgICAgPGgxPlNJTVBMRSBTTlM8L2gxPlxyXG4gICAgICAgIDxNc2dMaXN0IHNtc2dzPXsgc21zZ3MgfSB1c2Vycz17dXNlcnN9IC8+XHJcbiAgICA8Lz5cclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAgY29uc3Qgc21zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJylcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy91c2VycycpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyBzbXNncywgdXNlcnN9LFxyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==