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
  text = '',
  id = undefined
}) => {
  const textRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const text = textRef.current.value;
    textRef.current.value = '';
    mutate({
      text,
      id
    });
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
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "submit",
      children: "\uC644\uB8CC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
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
  timestamp,
  text,
  onUpdate,
  onDelete,
  isEditing,
  startEdit,
  myId,
  user
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
  className: "messages__item",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
    children: [user.nickname, ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("sub", {
      children: new Date(timestamp).toLocaleString('ko-KR', {
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
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
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
  }, void 0, false) : text, myId === user.id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../queryClient */ "./queryClient.js");
/* harmony import */ var _graphql_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../graphql/message */ "./graphql/message.js");
/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ "./hooks/useInfiniteScroll.js");


var _jsxFileName = "D:\\local-api\\client\\components\\MsgList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const MsgList = ({
  smsgs
}) => {
  const client = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const userId = query.userId || query.userid || '';
  const {
    0: msgs,
    1: setMsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{
    messages: smsgs
  }]);
  const {
    0: editingId,
    1: setEditingId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_8__.default)(fetchMoreEl);
  const {
    mutate: onCreate
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(({
    text
  }) => (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.CREATE_MESSAGE, {
    text,
    userId
  }), {
    onSuccess: ({
      createMessage
    }) => {
      //pages: [{ message: [createMessage, 15]}]
      client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, old => {
        return {
          pageParam: old.pageParam,
          pages: [{
            messages: [createMessage, ...old.pages[0].messages]
          }, ...old.pages.slice(1)]
        };
      });
    }
  });
  const {
    mutate: onUpdate
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(({
    text,
    id
  }) => (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.UPDATE_MESSAGE, {
    text,
    id,
    userId
  }), {
    onSuccess: ({
      updateMessage
    }) => {
      doneEdit();
      client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, old => {
        const {
          pageIndex,
          msgIndex
        } = (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.findTargetMsgIndex)(old.pages, updateMessage.id);
        if (pageIndex < 0 || msgIndex < 0) return old;
        const newMsgs = (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.getNewMessages)(old);
        newMsgs.pages[pageIndex].messages.splice(msgIndex, 1, updateMessage);
        return newMsgs;
      });
    }
  });
  const {
    mutate: onDelete
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(id => (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.DELETE_MESSAGE, {
    id,
    userId
  }), {
    onSuccess: ({
      deleteMessage: deletedId
    }) => {
      client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, old => {
        const {
          pageIndex,
          msgIndex
        } = (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.findTargetMsgIndex)(old.pages, deletedId);
        if (pageIndex < 0 || msgIndex < 0) return old;
        const newMsgs = (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.getNewMessages)(old);
        newMsgs.pages[pageIndex].messages.splice(msgIndex, 1);
        return newMsgs;
      });
    }
  });

  const doneEdit = () => setEditingId(null);

  const {
    data,
    error,
    isError,
    fetchNextPage,
    hasNextPage
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useInfiniteQuery)(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, ({
    pageParam = ''
  }) => (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.GET_MESSAGES, {
    cursor: pageParam
  }), {
    getNextPageParam: ({
      messages
    }) => {
      var _messages;

      return messages === null || messages === void 0 ? void 0 : (_messages = messages[messages.length - 1]) === null || _messages === void 0 ? void 0 : _messages.id;
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!(data !== null && data !== void 0 && data.pages)) return;
    console.log('msg changed');
    setMsgs(data.pages);
  }, [data === null || data === void 0 ? void 0 : data.pages]);

  if (isError) {
    console.error(error);
    return null;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (intersecting && hasNextPage) fetchNextPage();
  }, [intersecting, hasNextPage]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 24
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(({
        messages
      }, pageIndex) => messages.map(x => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, x), {}, {
        onUpdate: onUpdate,
        onDelete: () => onDelete(x.id),
        startEdit: () => setEditingId(x.id),
        isEditing: editingId === x.id,
        myId: userId
      }), pageIndex + x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 25
      }, undefined)))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: fetchMoreEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (MsgList);

/***/ }),

/***/ "./graphql/message.js":
/*!****************************!*\
  !*** ./graphql/message.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_MESSAGES": function() { return /* binding */ GET_MESSAGES; },
/* harmony export */   "GET_MESSAGE": function() { return /* binding */ GET_MESSAGE; },
/* harmony export */   "CREATE_MESSAGE": function() { return /* binding */ CREATE_MESSAGE; },
/* harmony export */   "UPDATE_MESSAGE": function() { return /* binding */ UPDATE_MESSAGE; },
/* harmony export */   "DELETE_MESSAGE": function() { return /* binding */ DELETE_MESSAGE; }
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_MESSAGES = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  query GET_MESSAGES($cursor: ID) {
    messages(cursor: $cursor) {
      id
      text
      timestamp
      user {
        id
        nickname
      }
    }
  }
`;
const GET_MESSAGE = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  query GET_MESSAGE($id: ID!) {
    message(id: $id) {
      id
      text
      user {
        id
        nickname
      }
      timestamp
    }
  }
`;
const CREATE_MESSAGE = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  mutation CREATE_MESSAGE($text: String!, $userId: ID!) {
    createMessage(text: $text, userId: $userId) {
      id
      text
      user {
        id
        nickname
      }
      timestamp
    }
  }
`;
const UPDATE_MESSAGE = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  mutation UPDATE_MESSAGE($id: ID!, $text: String!, $userId: ID!) {
    updateMessage(id: $id, text: $text, userId: $userId) {
      id
      text
      user {
        id
        nickname
      }
      timestamp
    }
  }
`;
const DELETE_MESSAGE = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  mutation DELETE_MESSAGE($id: ID!, $userId: ID!) {
    deleteMessage(id: $id, userId: $userId)
  }
`;

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
/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../queryClient */ "./queryClient.js");
/* harmony import */ var _graphql_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/message */ "./graphql/message.js");


var _jsxFileName = "D:\\local-api\\client\\pages\\index.js";




const Home = ({
  smsgs
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    children: "SIMPLE SNS"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MsgList__WEBPACK_IMPORTED_MODULE_1__.default, {
    smsgs: smsgs
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined)]
}, void 0, true);

const getServerSideProps = async () => {
  const {
    messages: smsgs
  } = await (0,_queryClient__WEBPACK_IMPORTED_MODULE_2__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_3__.GET_MESSAGES);
  return {
    props: {
      smsgs
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./queryClient.js":
/*!************************!*\
  !*** ./queryClient.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetcher": function() { return /* binding */ fetcher; },
/* harmony export */   "QueryKeys": function() { return /* binding */ QueryKeys; },
/* harmony export */   "findTargetMsgIndex": function() { return /* binding */ findTargetMsgIndex; },
/* harmony export */   "getNewMessages": function() { return /* binding */ getNewMessages; }
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);

const URL = 'http://localhost:8000/graphql';
const fetcher = (query, variables = {}) => (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(URL, query, variables);
const QueryKeys = {
  MESSAGES: 'MESSAGES',
  MESSAGE: 'MESSAGE',
  USERS: 'USERS',
  USER: 'USER'
};
const findTargetMsgIndex = (pages, id) => {
  let msgIndex = -1;
  const pageIndex = pages.findIndex(({
    messages
  }) => {
    msgIndex = messages.findIndex(msg => msg.id === id);

    if (msgIndex > -1) {
      return true;
    }

    return false;
  });
  return {
    pageIndex,
    msgIndex
  };
};
const getNewMessages = old => ({
  pageParams: old.pageParams,
  pages: old.pages.map(({
    messages
  }) => ({
    messages: [...messages]
  }))
});

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-request");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

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

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-query");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSXRlbS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vZ3JhcGhxbC9tZXNzYWdlLmpzIiwid2VicGFjazovL2NsaWVudC8uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsLmpzIiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2NsaWVudC8uL3F1ZXJ5Q2xpZW50LmpzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImdyYXBocWwtcmVxdWVzdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0LXF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTXNnSW5wdXQiLCJtdXRhdGUiLCJ0ZXh0IiwiaWQiLCJ1bmRlZmluZWQiLCJ0ZXh0UmVmIiwidXNlUmVmIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwidmFsdWUiLCJNc2dJdGVtIiwidGltZXN0YW1wIiwib25VcGRhdGUiLCJvbkRlbGV0ZSIsImlzRWRpdGluZyIsInN0YXJ0RWRpdCIsIm15SWQiLCJ1c2VyIiwibmlja25hbWUiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwiTXNnTGlzdCIsInNtc2dzIiwiY2xpZW50IiwidXNlUXVlcnlDbGllbnQiLCJxdWVyeSIsInVzZVJvdXRlciIsInVzZXJJZCIsInVzZXJpZCIsIm1zZ3MiLCJzZXRNc2dzIiwidXNlU3RhdGUiLCJtZXNzYWdlcyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsImZldGNoTW9yZUVsIiwiaW50ZXJzZWN0aW5nIiwidXNlSW5maW5pdGVTY3JvbGwiLCJvbkNyZWF0ZSIsInVzZU11dGF0aW9uIiwiZmV0Y2hlciIsIkNSRUFURV9NRVNTQUdFIiwib25TdWNjZXNzIiwiY3JlYXRlTWVzc2FnZSIsInNldFF1ZXJ5RGF0YSIsIlF1ZXJ5S2V5cyIsIm9sZCIsInBhZ2VQYXJhbSIsInBhZ2VzIiwic2xpY2UiLCJVUERBVEVfTUVTU0FHRSIsInVwZGF0ZU1lc3NhZ2UiLCJkb25lRWRpdCIsInBhZ2VJbmRleCIsIm1zZ0luZGV4IiwiZmluZFRhcmdldE1zZ0luZGV4IiwibmV3TXNncyIsImdldE5ld01lc3NhZ2VzIiwic3BsaWNlIiwiREVMRVRFX01FU1NBR0UiLCJkZWxldGVNZXNzYWdlIiwiZGVsZXRlZElkIiwiZGF0YSIsImVycm9yIiwiaXNFcnJvciIsImZldGNoTmV4dFBhZ2UiLCJoYXNOZXh0UGFnZSIsInVzZUluZmluaXRlUXVlcnkiLCJHRVRfTUVTU0FHRVMiLCJjdXJzb3IiLCJnZXROZXh0UGFnZVBhcmFtIiwibGVuZ3RoIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIm1hcCIsIngiLCJncWwiLCJHRVRfTUVTU0FHRSIsInRhcmdldEVsIiwib2JzZXJ2ZXJSZWYiLCJzZXRJbnRlcnNlY3RpbmciLCJnZXRPYnNlcnZlciIsInVzZUNhbGxiYWNrIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwic29tZSIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsIkhvbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwcm9wcyIsIlVSTCIsInZhcmlhYmxlcyIsInJlcXVlc3QiLCJNRVNTQUdFUyIsIk1FU1NBR0UiLCJVU0VSUyIsIlVTRVIiLCJmaW5kSW5kZXgiLCJtc2ciLCJwYWdlUGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDLFFBQUY7QUFBVUMsTUFBSSxHQUFHLEVBQWpCO0FBQXFCQyxJQUFFLEdBQUdDO0FBQTFCLENBQUQsS0FBMkM7QUFDeEQsUUFBTUMsT0FBTyxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBdEI7O0FBRUEsUUFBTUMsUUFBUSxHQUFHQyxDQUFDLElBQUk7QUFDbEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBRCxLQUFDLENBQUNFLGVBQUY7QUFDQSxVQUFNUixJQUFJLEdBQUdHLE9BQU8sQ0FBQ00sT0FBUixDQUFnQkMsS0FBN0I7QUFDQVAsV0FBTyxDQUFDTSxPQUFSLENBQWdCQyxLQUFoQixHQUF3QixFQUF4QjtBQUNBWCxVQUFNLENBQUM7QUFBRUMsVUFBRjtBQUFRQztBQUFSLEtBQUQsQ0FBTjtBQUNILEdBTkQ7O0FBUUEsc0JBQ0k7QUFBTSxhQUFTLEVBQUMsaUJBQWhCO0FBQWtDLFlBQVEsRUFBRUksUUFBNUM7QUFBQSw0QkFDSTtBQUFVLFNBQUcsRUFBRUYsT0FBZjtBQUF3QixrQkFBWSxFQUFFSCxJQUF0QztBQUE0QyxpQkFBVyxFQUFDO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBTUgsQ0FqQkQ7O0FBbUJBLCtEQUFlRixRQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTs7QUFFQSxNQUFNYSxPQUFPLEdBQUcsQ0FBQztBQUFFVixJQUFGO0FBQU1XLFdBQU47QUFBaUJaLE1BQWpCO0FBQXVCYSxVQUF2QjtBQUFpQ0MsVUFBakM7QUFBMkNDLFdBQTNDO0FBQXNEQyxXQUF0RDtBQUFpRUMsTUFBakU7QUFBdUVDO0FBQXZFLENBQUQsa0JBQ1o7QUFBSSxXQUFTLEVBQUMsZ0JBQWQ7QUFBQSwwQkFDSTtBQUFBLGVBQ0tBLElBQUksQ0FBQ0MsUUFEVixFQUNvQixHQURwQixlQUVJO0FBQUEsZ0JBQ0ssSUFBSUMsSUFBSixDQUFTUixTQUFULEVBQW9CUyxjQUFwQixDQUFtQyxPQUFuQyxFQUE0QztBQUN6Q0MsWUFBSSxFQUFFLFNBRG1DO0FBRXpDQyxhQUFLLEVBQUUsU0FGa0M7QUFHekNDLFdBQUcsRUFBRSxTQUhvQztBQUl6Q0MsWUFBSSxFQUFFLFNBSm1DO0FBS3pDQyxjQUFNLEVBQUUsU0FMaUM7QUFNekNDLGNBQU0sRUFBRTtBQU5pQyxPQUE1QztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFlS1osU0FBUyxnQkFDTjtBQUFBLDJCQUNJLDhEQUFDLDhDQUFEO0FBQVUsWUFBTSxFQUFFRixRQUFsQjtBQUE0QixVQUFJLEVBQUViLElBQWxDO0FBQXdDLFFBQUUsRUFBRUM7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURNLEdBS05ELElBcEJSLEVBdUJLaUIsSUFBSSxLQUFLQyxJQUFJLENBQUNqQixFQUFkLGlCQUNHO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsNEJBQ0k7QUFBUSxhQUFPLEVBQUVlLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBUSxhQUFPLEVBQUVGLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjs7QUFpQ0EsK0RBQWVILE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNaUIsT0FBTyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFDM0IsUUFBTUMsTUFBTSxHQUFHQywyREFBYyxFQUE3QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFZQyxzREFBUyxFQUEzQjtBQUNBLFFBQU1DLE1BQU0sR0FBR0YsS0FBSyxDQUFDRSxNQUFOLElBQWdCRixLQUFLLENBQUNHLE1BQXRCLElBQWdDLEVBQS9DO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLENBQUM7QUFBRUMsWUFBUSxFQUFFVjtBQUFaLEdBQUQsQ0FBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDVyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkgsK0NBQVEsQ0FBQyxJQUFELENBQTFDO0FBQ0EsUUFBTUksV0FBVyxHQUFHdEMsNkNBQU0sQ0FBQyxJQUFELENBQTFCO0FBQ0EsUUFBTXVDLFlBQVksR0FBR0MsaUVBQWlCLENBQUNGLFdBQUQsQ0FBdEM7QUFFQSxRQUFNO0FBQUUzQyxVQUFNLEVBQUU4QztBQUFWLE1BQXVCQyx3REFBVyxDQUFDLENBQUM7QUFBRTlDO0FBQUYsR0FBRCxLQUFjK0MscURBQU8sQ0FBQ0MsNERBQUQsRUFBaUI7QUFBRWhELFFBQUY7QUFBUWtDO0FBQVIsR0FBakIsQ0FBdEIsRUFBMEQ7QUFDOUZlLGFBQVMsRUFBRSxDQUFDO0FBQUVDO0FBQUYsS0FBRCxLQUF1QjtBQUM5QjtBQUNBcEIsWUFBTSxDQUFDcUIsWUFBUCxDQUFvQkMsNERBQXBCLEVBQXdDQyxHQUFHLElBQUk7QUFDM0MsZUFBTztBQUNIQyxtQkFBUyxFQUFFRCxHQUFHLENBQUNDLFNBRFo7QUFFSEMsZUFBSyxFQUFFLENBQUM7QUFBRWhCLG9CQUFRLEVBQUUsQ0FBQ1csYUFBRCxFQUFnQixHQUFHRyxHQUFHLENBQUNFLEtBQUosQ0FBVSxDQUFWLEVBQWFoQixRQUFoQztBQUFaLFdBQUQsRUFBMEQsR0FBR2MsR0FBRyxDQUFDRSxLQUFKLENBQVVDLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBN0Q7QUFGSixTQUFQO0FBSUgsT0FMRDtBQU1IO0FBVDZGLEdBQTFELENBQXhDO0FBWUEsUUFBTTtBQUFFekQsVUFBTSxFQUFFYztBQUFWLE1BQXVCaUMsd0RBQVcsQ0FBQyxDQUFDO0FBQUU5QyxRQUFGO0FBQVFDO0FBQVIsR0FBRCxLQUFrQjhDLHFEQUFPLENBQUNVLDREQUFELEVBQWlCO0FBQUV6RCxRQUFGO0FBQVFDLE1BQVI7QUFBWWlDO0FBQVosR0FBakIsQ0FBMUIsRUFBa0U7QUFDdEdlLGFBQVMsRUFBRSxDQUFDO0FBQUVTO0FBQUYsS0FBRCxLQUF1QjtBQUM5QkMsY0FBUTtBQUNSN0IsWUFBTSxDQUFDcUIsWUFBUCxDQUFvQkMsNERBQXBCLEVBQXdDQyxHQUFHLElBQUk7QUFDM0MsY0FBTTtBQUFFTyxtQkFBRjtBQUFhQztBQUFiLFlBQTBCQyxnRUFBa0IsQ0FBQ1QsR0FBRyxDQUFDRSxLQUFMLEVBQVlHLGFBQWEsQ0FBQ3pELEVBQTFCLENBQWxEO0FBQ0EsWUFBSTJELFNBQVMsR0FBRyxDQUFaLElBQWlCQyxRQUFRLEdBQUcsQ0FBaEMsRUFBbUMsT0FBT1IsR0FBUDtBQUNuQyxjQUFNVSxPQUFPLEdBQUdDLDREQUFjLENBQUNYLEdBQUQsQ0FBOUI7QUFDQVUsZUFBTyxDQUFDUixLQUFSLENBQWNLLFNBQWQsRUFBeUJyQixRQUF6QixDQUFrQzBCLE1BQWxDLENBQXlDSixRQUF6QyxFQUFtRCxDQUFuRCxFQUFzREgsYUFBdEQ7QUFDQSxlQUFPSyxPQUFQO0FBQ0gsT0FORDtBQU9IO0FBVnFHLEdBQWxFLENBQXhDO0FBYUEsUUFBTTtBQUFFaEUsVUFBTSxFQUFFZTtBQUFWLE1BQXVCZ0Msd0RBQVcsQ0FBQzdDLEVBQUUsSUFBSThDLHFEQUFPLENBQUNtQiw0REFBRCxFQUFpQjtBQUFFakUsTUFBRjtBQUFNaUM7QUFBTixHQUFqQixDQUFkLEVBQWdEO0FBQ3BGZSxhQUFTLEVBQUUsQ0FBQztBQUFFa0IsbUJBQWEsRUFBRUM7QUFBakIsS0FBRCxLQUFrQztBQUN6Q3RDLFlBQU0sQ0FBQ3FCLFlBQVAsQ0FBb0JDLDREQUFwQixFQUF3Q0MsR0FBRyxJQUFJO0FBQzNDLGNBQU07QUFBRU8sbUJBQUY7QUFBYUM7QUFBYixZQUEwQkMsZ0VBQWtCLENBQUNULEdBQUcsQ0FBQ0UsS0FBTCxFQUFZYSxTQUFaLENBQWxEO0FBQ0EsWUFBSVIsU0FBUyxHQUFHLENBQVosSUFBaUJDLFFBQVEsR0FBRyxDQUFoQyxFQUFtQyxPQUFPUixHQUFQO0FBRW5DLGNBQU1VLE9BQU8sR0FBR0MsNERBQWMsQ0FBQ1gsR0FBRCxDQUE5QjtBQUNBVSxlQUFPLENBQUNSLEtBQVIsQ0FBY0ssU0FBZCxFQUF5QnJCLFFBQXpCLENBQWtDMEIsTUFBbEMsQ0FBeUNKLFFBQXpDLEVBQW1ELENBQW5EO0FBQ0EsZUFBT0UsT0FBUDtBQUNILE9BUEQ7QUFRSDtBQVZtRixHQUFoRCxDQUF4Qzs7QUFhQSxRQUFNSixRQUFRLEdBQUcsTUFBTWxCLFlBQVksQ0FBQyxJQUFELENBQW5DOztBQUVBLFFBQU07QUFBRTRCLFFBQUY7QUFBUUMsU0FBUjtBQUFlQyxXQUFmO0FBQXdCQyxpQkFBeEI7QUFBdUNDO0FBQXZDLE1BQXVEQyw2REFBZ0IsQ0FDekV0Qiw0REFEeUUsRUFFekUsQ0FBQztBQUFFRSxhQUFTLEdBQUc7QUFBZCxHQUFELEtBQXdCUCxxREFBTyxDQUFDNEIsMERBQUQsRUFBZTtBQUFFQyxVQUFNLEVBQUV0QjtBQUFWLEdBQWYsQ0FGMEMsRUFHekU7QUFDSXVCLG9CQUFnQixFQUFFLENBQUM7QUFBRXRDO0FBQUYsS0FBRCxLQUFrQjtBQUFBOztBQUNoQyxhQUFPQSxRQUFQLGFBQU9BLFFBQVAsb0NBQU9BLFFBQVEsQ0FBR0EsUUFBUSxDQUFDdUMsTUFBVCxHQUFrQixDQUFyQixDQUFmLDhDQUFPLFVBQWlDN0UsRUFBeEM7QUFDSDtBQUhMLEdBSHlFLENBQTdFO0FBVUE4RSxrREFBUyxDQUFDLE1BQU07QUFDWixRQUFJLEVBQUNWLElBQUQsYUFBQ0EsSUFBRCxlQUFDQSxJQUFJLENBQUVkLEtBQVAsQ0FBSixFQUFrQjtBQUNsQnlCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQTVDLFdBQU8sQ0FBQ2dDLElBQUksQ0FBQ2QsS0FBTixDQUFQO0FBQ0gsR0FKUSxFQUlOLENBQUNjLElBQUQsYUFBQ0EsSUFBRCx1QkFBQ0EsSUFBSSxDQUFFZCxLQUFQLENBSk0sQ0FBVDs7QUFNQSxNQUFJZ0IsT0FBSixFQUFhO0FBQ1RTLFdBQU8sQ0FBQ1YsS0FBUixDQUFjQSxLQUFkO0FBQ0EsV0FBTyxJQUFQO0FBQ0g7O0FBRURTLGtEQUFTLENBQUMsTUFBTTtBQUNaLFFBQUlwQyxZQUFZLElBQUk4QixXQUFwQixFQUFpQ0QsYUFBYTtBQUNqRCxHQUZRLEVBRU4sQ0FBQzdCLFlBQUQsRUFBZThCLFdBQWYsQ0FGTSxDQUFUO0FBSUEsc0JBQ0k7QUFBQSxlQUNLdkMsTUFBTSxpQkFBSSw4REFBQyw4Q0FBRDtBQUFVLFlBQU0sRUFBRVc7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZixlQUVJO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQSxnQkFDS1QsSUFBSSxDQUFDOEMsR0FBTCxDQUFTLENBQUM7QUFBRTNDO0FBQUYsT0FBRCxFQUFlcUIsU0FBZixLQUNOckIsUUFBUSxDQUFDMkMsR0FBVCxDQUFhQyxDQUFDLGlCQUNWLDhEQUFDLDZDQUFELGtDQUVRQSxDQUZSO0FBR0ksZ0JBQVEsRUFBRXRFLFFBSGQ7QUFJSSxnQkFBUSxFQUFFLE1BQU1DLFFBQVEsQ0FBQ3FFLENBQUMsQ0FBQ2xGLEVBQUgsQ0FKNUI7QUFLSSxpQkFBUyxFQUFFLE1BQU13QyxZQUFZLENBQUMwQyxDQUFDLENBQUNsRixFQUFILENBTGpDO0FBTUksaUJBQVMsRUFBRXVDLFNBQVMsS0FBSzJDLENBQUMsQ0FBQ2xGLEVBTi9CO0FBT0ksWUFBSSxFQUFFaUM7QUFQVixVQUNTMEIsU0FBUyxHQUFHdUIsQ0FBQyxDQUFDbEYsRUFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixDQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQWlCSTtBQUFLLFNBQUcsRUFBRXlDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQko7QUFBQSxrQkFESjtBQXFCSCxDQS9GRDs7QUFpR0EsK0RBQWVkLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdBO0FBRU8sTUFBTStDLFlBQVksR0FBR1Msb0RBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWk87QUFjQSxNQUFNQyxXQUFXLEdBQUdELG9EQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVpPO0FBY0EsTUFBTXBDLGNBQWMsR0FBR29DLG9EQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVpPO0FBY0EsTUFBTTNCLGNBQWMsR0FBRzJCLG9EQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVpPO0FBY0EsTUFBTWxCLGNBQWMsR0FBR2tCLG9EQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLENBSk8sQzs7Ozs7Ozs7Ozs7Ozs7QUMxRFA7O0FBRUEsTUFBTXhDLGlCQUFpQixHQUFHMEMsUUFBUSxJQUFJO0FBQ2xDLFFBQU1DLFdBQVcsR0FBR25GLDZDQUFNLENBQUMsSUFBRCxDQUExQjtBQUNBLFFBQU07QUFBQSxPQUFDdUMsWUFBRDtBQUFBLE9BQWU2QztBQUFmLE1BQWtDbEQsK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBRUEsUUFBTW1ELFdBQVcsR0FBR0Msa0RBQVcsQ0FBQyxNQUFNO0FBQ2xDLFFBQUksQ0FBQ0gsV0FBVyxDQUFDOUUsT0FBakIsRUFBMEI7QUFDdEI4RSxpQkFBVyxDQUFDOUUsT0FBWixHQUFzQixJQUFJa0Ysb0JBQUosQ0FBeUJDLE9BQU8sSUFDbERKLGVBQWUsQ0FBQ0ksT0FBTyxDQUFDQyxJQUFSLENBQWFDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxjQUE1QixDQUFELENBREcsQ0FBdEI7QUFHSDs7QUFDRCxXQUFPUixXQUFXLENBQUM5RSxPQUFuQjtBQUNILEdBUDhCLEVBTzVCLENBQUM4RSxXQUFXLENBQUM5RSxPQUFiLENBUDRCLENBQS9CO0FBU0FzRSxrREFBUyxDQUFDLE1BQU07QUFDWixRQUFJTyxRQUFRLENBQUM3RSxPQUFiLEVBQXNCZ0YsV0FBVyxHQUFHTyxPQUFkLENBQXNCVixRQUFRLENBQUM3RSxPQUEvQjtBQUV0QixXQUFPLE1BQU07QUFDVGdGLGlCQUFXLEdBQUdRLFVBQWQ7QUFDSCxLQUZEO0FBR0gsR0FOUSxFQU1OLENBQUNYLFFBQVEsQ0FBQzdFLE9BQVYsQ0FOTSxDQUFUO0FBUUEsU0FBT2tDLFlBQVA7QUFDSCxDQXRCRDs7QUF3QkEsK0RBQWVDLGlCQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNc0QsSUFBSSxHQUFHLENBQUM7QUFBRXJFO0FBQUYsQ0FBRCxrQkFDVDtBQUFBLDBCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSSw4REFBQyx3REFBRDtBQUFTLFNBQUssRUFBRUE7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUEsZ0JBREo7O0FBT08sTUFBTXNFLGtCQUFrQixHQUFHLFlBQVk7QUFDMUMsUUFBTTtBQUFFNUQsWUFBUSxFQUFFVjtBQUFaLE1BQXNCLE1BQU1rQixxREFBTyxDQUFDNEIsMERBQUQsQ0FBekM7QUFDQSxTQUFPO0FBQ0h5QixTQUFLLEVBQUU7QUFBRXZFO0FBQUY7QUFESixHQUFQO0FBR0gsQ0FMTTtBQU9QLCtEQUFlcUUsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBLE1BQU1HLEdBQUcsR0FBRywrQkFBWjtBQUVPLE1BQU10RCxPQUFPLEdBQUcsQ0FBQ2YsS0FBRCxFQUFRc0UsU0FBUyxHQUFHLEVBQXBCLEtBQTJCQyx3REFBTyxDQUFDRixHQUFELEVBQU1yRSxLQUFOLEVBQWFzRSxTQUFiLENBQWxEO0FBRUEsTUFBTWxELFNBQVMsR0FBRztBQUN4Qm9ELFVBQVEsRUFBRSxVQURjO0FBRXhCQyxTQUFPLEVBQUUsU0FGZTtBQUd4QkMsT0FBSyxFQUFFLE9BSGlCO0FBSXhCQyxNQUFJLEVBQUU7QUFKa0IsQ0FBbEI7QUFPQSxNQUFNN0Msa0JBQWtCLEdBQUcsQ0FBQ1AsS0FBRCxFQUFRdEQsRUFBUixLQUFlO0FBQ2hELE1BQUk0RCxRQUFRLEdBQUcsQ0FBQyxDQUFoQjtBQUNBLFFBQU1ELFNBQVMsR0FBR0wsS0FBSyxDQUFDcUQsU0FBTixDQUFnQixDQUFDO0FBQUVyRTtBQUFGLEdBQUQsS0FBa0I7QUFDbkRzQixZQUFRLEdBQUd0QixRQUFRLENBQUNxRSxTQUFULENBQW1CQyxHQUFHLElBQUlBLEdBQUcsQ0FBQzVHLEVBQUosS0FBV0EsRUFBckMsQ0FBWDs7QUFDQSxRQUFJNEQsUUFBUSxHQUFHLENBQUMsQ0FBaEIsRUFBbUI7QUFDbEIsYUFBTyxJQUFQO0FBQ0E7O0FBQ0QsV0FBTyxLQUFQO0FBQ0EsR0FOaUIsQ0FBbEI7QUFPQSxTQUFPO0FBQUVELGFBQUY7QUFBYUM7QUFBYixHQUFQO0FBQ0EsQ0FWTTtBQVlBLE1BQU1HLGNBQWMsR0FBR1gsR0FBRyxLQUFLO0FBQ3JDeUQsWUFBVSxFQUFFekQsR0FBRyxDQUFDeUQsVUFEcUI7QUFFckN2RCxPQUFLLEVBQUVGLEdBQUcsQ0FBQ0UsS0FBSixDQUFVMkIsR0FBVixDQUFjLENBQUM7QUFBRTNDO0FBQUYsR0FBRCxNQUFtQjtBQUFFQSxZQUFRLEVBQUUsQ0FBQyxHQUFHQSxRQUFKO0FBQVosR0FBbkIsQ0FBZDtBQUY4QixDQUFMLENBQTFCLEM7Ozs7Ozs7Ozs7O0FDeEJQLDZDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBNc2dJbnB1dCA9ICh7IG11dGF0ZSwgdGV4dCA9ICcnLCBpZCA9IHVuZGVmaW5lZCB9KSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0UmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHRleHRSZWYuY3VycmVudC52YWx1ZVxyXG4gICAgICAgIHRleHRSZWYuY3VycmVudC52YWx1ZSA9ICcnXHJcbiAgICAgICAgbXV0YXRlKHsgdGV4dCwgaWQgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pbnB1dFwiIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSByZWY9e3RleHRSZWZ9IGRlZmF1bHRWYWx1ZT17dGV4dH0gcGxhY2Vob2xkZXI9XCLrgrTsmqnsnYQg7J6F66Cl7ZWY7IS47JqULlwiIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPuyZhOujjDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnSW5wdXQiLCJpbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCdcclxuXHJcbmNvbnN0IE1zZ0l0ZW0gPSAoeyBpZCwgdGltZXN0YW1wLCB0ZXh0LCBvblVwZGF0ZSwgb25EZWxldGUsIGlzRWRpdGluZywgc3RhcnRFZGl0LCBteUlkLCB1c2VyIH0pID0+IChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJtZXNzYWdlc19faXRlbVwiPlxyXG4gICAgICAgIDxoMz5cclxuICAgICAgICAgICAge3VzZXIubmlja25hbWV9eycgJ31cclxuICAgICAgICAgICAgPHN1Yj5cclxuICAgICAgICAgICAgICAgIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCdrby1LUicsIHtcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaG91cjEyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvc3ViPlxyXG4gICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgIHtpc0VkaXRpbmcgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gdGV4dD17dGV4dH0gaWQ9e2lkfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge215SWQgPT09IHVzZXIuaWQgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT7sgq3soJw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgIDwvbGk+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW0iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50LCB1c2VNdXRhdGlvbiwgdXNlSW5maW5pdGVRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5J1xyXG5pbXBvcnQgTXNnSXRlbSBmcm9tICcuL01zZ0l0ZW0nXHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0J1xyXG5pbXBvcnQgeyBRdWVyeUtleXMsIGZldGNoZXIsIGZpbmRUYXJnZXRNc2dJbmRleCwgZ2V0TmV3TWVzc2FnZXMgfSBmcm9tICcuLi9xdWVyeUNsaWVudCdcclxuaW1wb3J0IHsgR0VUX01FU1NBR0VTLCBDUkVBVEVfTUVTU0FHRSwgVVBEQVRFX01FU1NBR0UsIERFTEVURV9NRVNTQUdFIH0gZnJvbSAnLi4vZ3JhcGhxbC9tZXNzYWdlJ1xyXG5pbXBvcnQgdXNlSW5maW5pdGVTY3JvbGwgZnJvbSAnLi4vaG9va3MvdXNlSW5maW5pdGVTY3JvbGwnXHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKHsgc21zZ3MgfSkgPT4ge1xyXG4gICAgY29uc3QgY2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKVxyXG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHVzZXJJZCA9IHF1ZXJ5LnVzZXJJZCB8fCBxdWVyeS51c2VyaWQgfHwgJydcclxuICAgIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKFt7IG1lc3NhZ2VzOiBzbXNncyB9XSlcclxuICAgIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgZmV0Y2hNb3JlRWwgPSB1c2VSZWYobnVsbClcclxuICAgIGNvbnN0IGludGVyc2VjdGluZyA9IHVzZUluZmluaXRlU2Nyb2xsKGZldGNoTW9yZUVsKVxyXG5cclxuICAgIGNvbnN0IHsgbXV0YXRlOiBvbkNyZWF0ZSB9ID0gdXNlTXV0YXRpb24oKHsgdGV4dCB9KSA9PiBmZXRjaGVyKENSRUFURV9NRVNTQUdFLCB7IHRleHQsIHVzZXJJZCB9KSwge1xyXG4gICAgICAgIG9uU3VjY2VzczogKHsgY3JlYXRlTWVzc2FnZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIC8vcGFnZXM6IFt7IG1lc3NhZ2U6IFtjcmVhdGVNZXNzYWdlLCAxNV19XVxyXG4gICAgICAgICAgICBjbGllbnQuc2V0UXVlcnlEYXRhKFF1ZXJ5S2V5cy5NRVNTQUdFUywgb2xkID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVBhcmFtOiBvbGQucGFnZVBhcmFtLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzOiBbeyBtZXNzYWdlczogW2NyZWF0ZU1lc3NhZ2UsIC4uLm9sZC5wYWdlc1swXS5tZXNzYWdlc10gfSwgLi4ub2xkLnBhZ2VzLnNsaWNlKDEpXSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7IG11dGF0ZTogb25VcGRhdGUgfSA9IHVzZU11dGF0aW9uKCh7IHRleHQsIGlkIH0pID0+IGZldGNoZXIoVVBEQVRFX01FU1NBR0UsIHsgdGV4dCwgaWQsIHVzZXJJZCB9KSwge1xyXG4gICAgICAgIG9uU3VjY2VzczogKHsgdXBkYXRlTWVzc2FnZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGRvbmVFZGl0KClcclxuICAgICAgICAgICAgY2xpZW50LnNldFF1ZXJ5RGF0YShRdWVyeUtleXMuTUVTU0FHRVMsIG9sZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhZ2VJbmRleCwgbXNnSW5kZXggfSA9IGZpbmRUYXJnZXRNc2dJbmRleChvbGQucGFnZXMsIHVwZGF0ZU1lc3NhZ2UuaWQpXHJcbiAgICAgICAgICAgICAgICBpZiAocGFnZUluZGV4IDwgMCB8fCBtc2dJbmRleCA8IDApIHJldHVybiBvbGRcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld01zZ3MgPSBnZXROZXdNZXNzYWdlcyhvbGQpXHJcbiAgICAgICAgICAgICAgICBuZXdNc2dzLnBhZ2VzW3BhZ2VJbmRleF0ubWVzc2FnZXMuc3BsaWNlKG1zZ0luZGV4LCAxLCB1cGRhdGVNZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld01zZ3NcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7IG11dGF0ZTogb25EZWxldGUgfSA9IHVzZU11dGF0aW9uKGlkID0+IGZldGNoZXIoREVMRVRFX01FU1NBR0UsIHsgaWQsIHVzZXJJZCB9KSwge1xyXG4gICAgICAgIG9uU3VjY2VzczogKHsgZGVsZXRlTWVzc2FnZTogZGVsZXRlZElkIH0pID0+IHtcclxuICAgICAgICAgICAgY2xpZW50LnNldFF1ZXJ5RGF0YShRdWVyeUtleXMuTUVTU0FHRVMsIG9sZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhZ2VJbmRleCwgbXNnSW5kZXggfSA9IGZpbmRUYXJnZXRNc2dJbmRleChvbGQucGFnZXMsIGRlbGV0ZWRJZClcclxuICAgICAgICAgICAgICAgIGlmIChwYWdlSW5kZXggPCAwIHx8IG1zZ0luZGV4IDwgMCkgcmV0dXJuIG9sZFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld01zZ3MgPSBnZXROZXdNZXNzYWdlcyhvbGQpXHJcbiAgICAgICAgICAgICAgICBuZXdNc2dzLnBhZ2VzW3BhZ2VJbmRleF0ubWVzc2FnZXMuc3BsaWNlKG1zZ0luZGV4LCAxKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld01zZ3NcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzRXJyb3IsIGZldGNoTmV4dFBhZ2UsIGhhc05leHRQYWdlIH0gPSB1c2VJbmZpbml0ZVF1ZXJ5KFxyXG4gICAgICAgIFF1ZXJ5S2V5cy5NRVNTQUdFUyxcclxuICAgICAgICAoeyBwYWdlUGFyYW0gPSAnJyB9KSA9PiBmZXRjaGVyKEdFVF9NRVNTQUdFUywgeyBjdXJzb3I6IHBhZ2VQYXJhbSB9KSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldE5leHRQYWdlUGFyYW06ICh7IG1lc3NhZ2VzIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlcz8uW21lc3NhZ2VzLmxlbmd0aCAtIDFdPy5pZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWRhdGE/LnBhZ2VzKSByZXR1cm5cclxuICAgICAgICBjb25zb2xlLmxvZygnbXNnIGNoYW5nZWQnKVxyXG4gICAgICAgIHNldE1zZ3MoZGF0YS5wYWdlcylcclxuICAgIH0sIFtkYXRhPy5wYWdlc10pXHJcblxyXG4gICAgaWYgKGlzRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaW50ZXJzZWN0aW5nICYmIGhhc05leHRQYWdlKSBmZXRjaE5leHRQYWdlKClcclxuICAgIH0sIFtpbnRlcnNlY3RpbmcsIGhhc05leHRQYWdlXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHt1c2VySWQgJiYgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+fVxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cclxuICAgICAgICAgICAgICAgIHttc2dzLm1hcCgoeyBtZXNzYWdlcyB9LCBwYWdlSW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMubWFwKHggPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TXNnSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwYWdlSW5kZXggKyB4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlJZD17dXNlcklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpLFxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGRpdiByZWY9e2ZldGNoTW9yZUVsfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0IiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUVTU0FHRVMgPSBncWxgXHJcbiAgcXVlcnkgR0VUX01FU1NBR0VTKCRjdXJzb3I6IElEKSB7XHJcbiAgICBtZXNzYWdlcyhjdXJzb3I6ICRjdXJzb3IpIHtcclxuICAgICAgaWRcclxuICAgICAgdGV4dFxyXG4gICAgICB0aW1lc3RhbXBcclxuICAgICAgdXNlciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBuaWNrbmFtZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX01FU1NBR0UgPSBncWxgXHJcbiAgcXVlcnkgR0VUX01FU1NBR0UoJGlkOiBJRCEpIHtcclxuICAgIG1lc3NhZ2UoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICB0ZXh0XHJcbiAgICAgIHVzZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmlja25hbWVcclxuICAgICAgfVxyXG4gICAgICB0aW1lc3RhbXBcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfTUVTU0FHRSA9IGdxbGBcclxuICBtdXRhdGlvbiBDUkVBVEVfTUVTU0FHRSgkdGV4dDogU3RyaW5nISwgJHVzZXJJZDogSUQhKSB7XHJcbiAgICBjcmVhdGVNZXNzYWdlKHRleHQ6ICR0ZXh0LCB1c2VySWQ6ICR1c2VySWQpIHtcclxuICAgICAgaWRcclxuICAgICAgdGV4dFxyXG4gICAgICB1c2VyIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5pY2tuYW1lXHJcbiAgICAgIH1cclxuICAgICAgdGltZXN0YW1wXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX01FU1NBR0UgPSBncWxgXHJcbiAgbXV0YXRpb24gVVBEQVRFX01FU1NBR0UoJGlkOiBJRCEsICR0ZXh0OiBTdHJpbmchLCAkdXNlcklkOiBJRCEpIHtcclxuICAgIHVwZGF0ZU1lc3NhZ2UoaWQ6ICRpZCwgdGV4dDogJHRleHQsIHVzZXJJZDogJHVzZXJJZCkge1xyXG4gICAgICBpZFxyXG4gICAgICB0ZXh0XHJcbiAgICAgIHVzZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmlja25hbWVcclxuICAgICAgfVxyXG4gICAgICB0aW1lc3RhbXBcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfTUVTU0FHRSA9IGdxbGBcclxuICBtdXRhdGlvbiBERUxFVEVfTUVTU0FHRSgkaWQ6IElEISwgJHVzZXJJZDogSUQhKSB7XHJcbiAgICBkZWxldGVNZXNzYWdlKGlkOiAkaWQsIHVzZXJJZDogJHVzZXJJZClcclxuICB9XHJcbmAiLCJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCB1c2VJbmZpbml0ZVNjcm9sbCA9IHRhcmdldEVsID0+IHtcclxuICAgIGNvbnN0IG9ic2VydmVyUmVmID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBbaW50ZXJzZWN0aW5nLCBzZXRJbnRlcnNlY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgZ2V0T2JzZXJ2ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFvYnNlcnZlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyUmVmLmN1cnJlbnQgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PlxyXG4gICAgICAgICAgICAgICAgc2V0SW50ZXJzZWN0aW5nKGVudHJpZXMuc29tZShlbnRyeSA9PiBlbnRyeS5pc0ludGVyc2VjdGluZykpLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYnNlcnZlclJlZi5jdXJyZW50XHJcbiAgICB9LCBbb2JzZXJ2ZXJSZWYuY3VycmVudF0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodGFyZ2V0RWwuY3VycmVudCkgZ2V0T2JzZXJ2ZXIoKS5vYnNlcnZlKHRhcmdldEVsLmN1cnJlbnQpXHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGdldE9ic2VydmVyKCkuZGlzY29ubmVjdCgpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RhcmdldEVsLmN1cnJlbnRdKVxyXG5cclxuICAgIHJldHVybiBpbnRlcnNlY3RpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlSW5maW5pdGVTY3JvbGwiLCJpbXBvcnQgTXNnTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL01zZ0xpc3QnXHJcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICcuLi9xdWVyeUNsaWVudCdcclxuaW1wb3J0IHsgR0VUX01FU1NBR0VTIH0gZnJvbSAnLi4vZ3JhcGhxbC9tZXNzYWdlJ1xyXG5cclxuY29uc3QgSG9tZSA9ICh7IHNtc2dzIH0pID0+IChcclxuICAgIDw+XHJcbiAgICAgICAgPGgxPlNJTVBMRSBTTlM8L2gxPlxyXG4gICAgICAgIDxNc2dMaXN0IHNtc2dzPXtzbXNnc30gLz5cclxuICAgIDwvPlxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBtZXNzYWdlczogc21zZ3MgfSA9IGF3YWl0IGZldGNoZXIoR0VUX01FU1NBR0VTKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyBzbXNncyB9LFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIiwiaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcclxuY29uc3QgVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9ncmFwaHFsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoZXIgPSAocXVlcnksIHZhcmlhYmxlcyA9IHt9KSA9PiByZXF1ZXN0KFVSTCwgcXVlcnksIHZhcmlhYmxlcylcclxuXHJcbmV4cG9ydCBjb25zdCBRdWVyeUtleXMgPSB7XHJcbiBNRVNTQUdFUzogJ01FU1NBR0VTJyxcclxuIE1FU1NBR0U6ICdNRVNTQUdFJyxcclxuIFVTRVJTOiAnVVNFUlMnLFxyXG4gVVNFUjogJ1VTRVInLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmluZFRhcmdldE1zZ0luZGV4ID0gKHBhZ2VzLCBpZCkgPT4ge1xyXG4gbGV0IG1zZ0luZGV4ID0gLTFcclxuIGNvbnN0IHBhZ2VJbmRleCA9IHBhZ2VzLmZpbmRJbmRleCgoeyBtZXNzYWdlcyB9KSA9PiB7XHJcbiAgbXNnSW5kZXggPSBtZXNzYWdlcy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpXHJcbiAgaWYgKG1zZ0luZGV4ID4gLTEpIHtcclxuICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbiB9KVxyXG4gcmV0dXJuIHsgcGFnZUluZGV4LCBtc2dJbmRleCB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXROZXdNZXNzYWdlcyA9IG9sZCA9PiAoe1xyXG4gcGFnZVBhcmFtczogb2xkLnBhZ2VQYXJhbXMsXHJcbiBwYWdlczogb2xkLnBhZ2VzLm1hcCgoeyBtZXNzYWdlcyB9KSA9PiAoeyBtZXNzYWdlczogWy4uLm1lc3NhZ2VzXSB9KSksXHJcbn0pIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC1yZXF1ZXN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWVyeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9