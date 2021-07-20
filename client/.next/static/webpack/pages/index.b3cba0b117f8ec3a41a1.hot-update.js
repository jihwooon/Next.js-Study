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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      editingId = _useState2[0],
      setEditingId = _useState2[1];

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
      return newMsgs;
    });
    doneEdit();
  };

  var _onDelete = function onDelete(id) {
    setMsgs(function (msgs) {
      var targetIndex = msgs.findIndex(function (msg) {
        return msg.id === id;
      });
      if (targetIndex < 0) return msgs;

      var newMsgs = (0,D_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs);

      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };

  var doneEdit = function doneEdit() {
    return setEditingId(null);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(function (x) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, x), {}, {
          onUpdate: onUpdate,
          onDelete: function onDelete() {
            return _onDelete(x.id);
          },
          startEdit: function startEdit() {
            return setEditingId(x.id);
          },
          isEditing: editingId === x.id
        }), x.id, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(MsgList, "01fMYNZrB/VzC7UxNBW1xkTAcyg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIl0sIm5hbWVzIjpbIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJvcmlnaW5hbE1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsIk1zZ0xpc3QiLCJ1c2VTdGF0ZSIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwib25DcmVhdGUiLCJuZXdNc2ciLCJsZW5ndGgiLCJEYXRlIiwibm93IiwiY29uc29sZSIsImxvZyIsIm9uVXBkYXRlIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FBaEI7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLFNBQU1ELE9BQU8sQ0FBQ0UsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxFQUFYLENBQUQsQ0FBYjtBQUFBLENBQXhCOztBQUVBLElBQU1DLFlBQVksR0FBR0MsS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUNoQkMsSUFEZ0IsQ0FDWCxDQURXLEVBRWhCQyxHQUZnQixDQUVaLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVc7QUFDaEJDLE1BQUUsRUFBRSxLQUFLRCxDQURPO0FBRWhCRSxVQUFNLEVBQUVYLGVBQWUsRUFGUDtBQUdoQlksYUFBUyxFQUFFLGdCQUFnQixDQUFDLEtBQUlILENBQUwsSUFBVSxJQUFWLEdBQWlCLEVBSDVCO0FBSWhCSSxRQUFJLFlBQUssS0FBS0os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TGY7QUFNSSxtQkFBUyxFQUFFUSxTQUFTLEtBQUtpQixDQUFDLENBQUN6QjtBQU4vQixZQUNTeUIsQ0FBQyxDQUFDekIsRUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURPO0FBQUEsT0FBVjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBLGtCQURBO0FBaUJILENBMUREOztHQUFNSSxPOztLQUFBQSxPO0FBNEROLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIzY2JhMGIxMTdmOGVjM2E0MWExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9ZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIjtcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xyXG5cclxuY29uc3QgVXNlcklkcyA9IFsncm95JywgJ2pheSddXHJcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV1cclxuXHJcbmNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxyXG4gICAgLmZpbGwoMClcclxuICAgIC5tYXAoKF8sIGkpID0+ICh7XHJcbiAgICBpZDogNTAgLSBpLFxyXG4gICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcclxuICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArICg1MC0gaSkgKiAxMDAwICogNjAsXHJcbiAgICB0ZXh0OiBgJHs1MCAtIGl9IG1vY2sgdGV4dGBcclxuXHJcbn0pKVxyXG5cclxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKG9yaWdpbmFsTXNncylcclxuICAgIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIGNvbnN0IG9uQ3JlYXRlID0gdGV4dCA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TXNnID0ge1xyXG4gICAgICAgICAgICBpZDogbXNncy5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIHRleHQ6IGAke21zZ3MubGVuZ3RoICsgMX0gJHt0ZXh0fWAsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiAoW25ld01zZywgLi4ubXNnc10pKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG1zZ3MpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25VcGRhdGUgPSAodGV4dCxpZCkgPT4ge1xyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpXHJcbiAgICAgICAgICAgIGlmKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3NcclxuICAgICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXVxyXG4gICAgICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xyXG4gICAgICAgICAgICAgICAgLi4ubXNnc1t0YXJnZXRJbmRleF0sXHJcbiAgICAgICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3TXNnc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9uZUVkaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uRGVsZXRlID0gaWQgPT4ge1xyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZClcclxuICAgICAgICBpZih0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzXHJcbiAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXVxyXG4gICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKVxyXG4gICAgICAgIHJldHVybiBuZXdNc2dzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKVxyXG5cclxuICAgIHJldHVybihcclxuICAgIDw+XHJcbiAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9Lz5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPSBcIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAgICAgIHttc2dzLm1hcCh4ID0+IChcclxuICAgICAgICAgICAgICAgIDxNc2dJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXt4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi54fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT5vbkRlbGV0ZSh4LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=