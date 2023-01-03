webpackHotUpdate_N_E("pages/users/[username]",{

/***/ "./components/user-card/post-list/index.js":
/*!*************************************************!*\
  !*** ./components/user-card/post-list/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/auth */ "./store/auth.js");
/* harmony import */ var _store_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/fetch */ "./store/fetch.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../button */ "./components/button/index.js");
/* harmony import */ var _button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../button-group */ "./components/button-group/index.js");
/* harmony import */ var _post_list_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-list.module.css */ "./components/user-card/post-list/post-list.module.css");
/* harmony import */ var _post_list_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_post_list_module_css__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
  _jsxFileName = "D:\\stackoverflow-clone\\client\\components\\user-card\\post-list\\index.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var PostList = function PostList(_ref) {
  _s();
  var postType = _ref.postType,
    setPostType = _ref.setPostType,
    children = _ref.children;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_fetch__WEBPACK_IMPORTED_MODULE_3__["FetchContext"]),
    authAxios = _useContext.authAxios;
  return __jsx("div", {
    className: _post_list_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _post_list_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Last Questions"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Space"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(_button_group__WEBPACK_IMPORTED_MODULE_5__["default"], {
    buttons: ['Questions'],
    selected: postType,
    setSelected: setPostType,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }))), children);
};
_s(PostList, "/TFKrCXI0vy6U7R7RO162HN0GLQ=");
_c = PostList;
/* harmony default export */ __webpack_exports__["default"] = (PostList);
var _c;
$RefreshReg$(_c, "PostList");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VyLWNhcmQvcG9zdC1saXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlBvc3RMaXN0IiwicG9zdFR5cGUiLCJzZXRQb3N0VHlwZSIsImNoaWxkcmVuIiwidXNlQ29udGV4dCIsIkZldGNoQ29udGV4dCIsImF1dGhBeGlvcyIsInN0eWxlcyIsImNvbnRhaW5lciIsImhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ0k7QUFDUTtBQUNFO0FBQ2xCO0FBRVc7QUFFRDtBQUUzQyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUSxPQUE0QztFQUFBO0VBQUEsSUFBdENDLFFBQVEsUUFBUkEsUUFBUTtJQUFFQyxXQUFXLFFBQVhBLFdBQVc7SUFBRUMsUUFBUSxRQUFSQSxRQUFRO0VBQ2pELGtCQUFzQkMsd0RBQVUsQ0FBQ0MseURBQVksQ0FBQztJQUF0Q0MsU0FBUyxlQUFUQSxTQUFTO0VBR2pCLE9BQ0U7SUFBSyxTQUFTLEVBQUVDLDREQUFNLENBQUNDLFNBQVU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUMvQjtJQUFLLFNBQVMsRUFBRUQsNERBQU0sQ0FBQ0UsTUFBTztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQzVCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsb0JBQXVCLEVBQ3ZCLE1BQUMsMENBQUs7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNKLE1BQUMscURBQVc7SUFDVixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUU7SUFDdkIsUUFBUSxFQUFFUixRQUFTO0lBQ25CLFdBQVcsRUFBRUMsV0FBWTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQ3pCLENBQ0ksQ0FDSixFQUNMQyxRQUFRLENBQ0w7QUFFVixDQUFDO0FBQUEsR0FuQktILFFBQVE7QUFBQSxLQUFSQSxRQUFRO0FBcUJDQSx1RUFBUTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMvW3VzZXJuYW1lXS5jZjZhMTIzYjZhY2VjNWUyM2JjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVzc2FnZSwgU3BhY2UgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2F1dGgnXHJcbmltcG9ydCB7IEZldGNoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2ZldGNoJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2J1dHRvbidcclxuXHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICcuLi8uLi9idXR0b24tZ3JvdXAnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9zdC1saXN0Lm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBQb3N0TGlzdCA9ICh7IHBvc3RUeXBlLCBzZXRQb3N0VHlwZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHsgYXV0aEF4aW9zIH0gPSB1c2VDb250ZXh0KEZldGNoQ29udGV4dClcclxuXHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgPGgyPkxhc3QgUXVlc3Rpb25zPC9oMj5cclxuICAgICAgICA8U3BhY2U+XHJcbiAgICAgICAgICA8QnV0dG9uR3JvdXBcclxuICAgICAgICAgICAgYnV0dG9ucz17WydRdWVzdGlvbnMnXX1cclxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3Bvc3RUeXBlfVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0UG9zdFR5cGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU3BhY2U+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=