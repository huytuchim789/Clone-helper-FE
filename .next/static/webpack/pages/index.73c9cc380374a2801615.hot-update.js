webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/header/index.js":
/*!*******************************************!*\
  !*** ./components/layout/header/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useComponentVisible */ "./hooks/useComponentVisible.js");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useWindowSize */ "./hooks/useWindowSize.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants */ "./constants/index.js");
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/modal */ "./store/modal.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/auth */ "./store/auth.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../button */ "./components/button/index.js");
/* harmony import */ var _navigation_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../navigation-dropdown */ "./components/navigation-dropdown/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../icons */ "./components/icons/index.js");
/* harmony import */ var _search_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../search-input */ "./components/search-input/index.js");
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header.module.css */ "./components/layout/header/header.module.css");
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_14__);


var _excluded = ["className"];
var _this = undefined,
  _jsxFileName = "D:\\stackoverflow-clone\\client\\components\\layout\\header\\index.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;













var Header = function Header(_ref) {
  _s();
  var className = _ref.className,
    props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_modal__WEBPACK_IMPORTED_MODULE_8__["default"]),
    handleComponentVisible = _useContext.handleComponentVisible;
  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_9__["AuthContext"]),
    isAuthenticated = _useContext2.isAuthenticated,
    authState = _useContext2.authState,
    logout = _useContext2.logout;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
    key = _useState.key,
    setKey = _useState.setKey;
  var _useComponentVisible = Object(_hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_5__["default"])(false),
    ref = _useComponentVisible.ref,
    toggleRef = _useComponentVisible.toggleRef,
    isComponentVisible = _useComponentVisible.isComponentVisible,
    setIsComponentVisible = _useComponentVisible.setIsComponentVisible;
  var size = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (size.width > _constants__WEBPACK_IMPORTED_MODULE_7__["default"].MOBILE_SIZE) {
      setIsComponentVisible(false);
    }
  }, [size]);
  return __jsx("header", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_header_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.header, className)
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("div", {
    ref: toggleRef,
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.menuContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.menu,
    onClick: function onClick() {
      return setIsComponentVisible(function (isOpen) {
        return !isOpen;
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, isComponentVisible ? __jsx(_icons__WEBPACK_IMPORTED_MODULE_12__["Close"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 35
    }
  }) : __jsx(_icons__WEBPACK_IMPORTED_MODULE_12__["Menu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 47
    }
  }))), __jsx(_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.logo,
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_12__["Logo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Coding", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, "Helper"))), __jsx(_search_input__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      flex: 1,
      marginRight: 50,
      maxWidth: 700
    },
    placeholder: "Search..."
    // isLoading={loading}
    ,
    autoFocus: true,
    fullWidth: true,
    isKeyDown: true,
    autoComplete: "off",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), isAuthenticated() ? __jsx("div", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.userInfo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      display: 'inline'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "Welcome", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/users/[user]",
    as: "/users/".concat(authState.userInfo.username),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, authState.userInfo.username, "!"))), __jsx("a", {
    onClick: function onClick() {
      return logout();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "log out")) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.auth,
    secondary: true,
    onClick: function onClick() {
      return handleComponentVisible(true, 'login');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Log in"), __jsx(_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.auth,
    primary: true,
    onClick: function onClick() {
      return handleComponentVisible(true, 'signup');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "Sign up"))), __jsx("div", {
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, isComponentVisible && __jsx(_navigation_dropdown__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 45
    }
  })));
};
_s(Header, "je/dDPv1xrCFG8BCwgF8lmn2I+k=", false, function () {
  return [_hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__["default"]];
});
_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);
var _c;
$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsImNsYXNzTmFtZSIsInByb3BzIiwidXNlQ29udGV4dCIsIk1vZGFsQ29udGV4dCIsImhhbmRsZUNvbXBvbmVudFZpc2libGUiLCJBdXRoQ29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsImF1dGhTdGF0ZSIsImxvZ291dCIsInVzZVN0YXRlIiwia2V5Iiwic2V0S2V5IiwidXNlQ29tcG9uZW50VmlzaWJsZSIsInJlZiIsInRvZ2dsZVJlZiIsImlzQ29tcG9uZW50VmlzaWJsZSIsInNldElzQ29tcG9uZW50VmlzaWJsZSIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwidXNlRWZmZWN0Iiwid2lkdGgiLCJDT05TVCIsIk1PQklMRV9TSVpFIiwiY24iLCJzdHlsZXMiLCJoZWFkZXIiLCJjb250YWluZXIiLCJtZW51Q29udGFpbmVyIiwibWVudSIsImlzT3BlbiIsImxvZ28iLCJmbGV4IiwibWFyZ2luUmlnaHQiLCJtYXhXaWR0aCIsInVzZXJJbmZvIiwiZGlzcGxheSIsInVzZXJuYW1lIiwiYXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNsQztBQUNEO0FBRXlDO0FBQ1o7QUFDbEI7QUFDUztBQUNFO0FBRWhCO0FBQ3lCO0FBQ1g7QUFDSDtBQUVKO0FBRXhDLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFNLE9BQWdDO0VBQUE7RUFBQSxJQUExQkMsU0FBUyxRQUFUQSxTQUFTO0lBQUtDLEtBQUs7RUFDbkMsa0JBQW1DQyx3REFBVSxDQUFDQyxvREFBWSxDQUFDO0lBQW5EQyxzQkFBc0IsZUFBdEJBLHNCQUFzQjtFQUM5QixtQkFBK0NGLHdEQUFVLENBQUNHLHVEQUFXLENBQUM7SUFBOURDLGVBQWUsZ0JBQWZBLGVBQWU7SUFBRUMsU0FBUyxnQkFBVEEsU0FBUztJQUFF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dXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCB1c2VDb21wb25lbnRWaXNpYmxlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUNvbXBvbmVudFZpc2libGUnXHJcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVdpbmRvd1NpemUnXHJcbmltcG9ydCBDT05TVCBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnXHJcbmltcG9ydCBNb2RhbENvbnRleHQgZnJvbSAnLi4vLi4vLi4vc3RvcmUvbW9kYWwnXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYXV0aCdcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vYnV0dG9uJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbkRyb3Bkb3duIGZyb20gJy4uLy4uL25hdmlnYXRpb24tZHJvcGRvd24nXHJcbmltcG9ydCB7IE1lbnUsIENsb3NlLCBMb2dvIH0gZnJvbSAnLi4vLi4vaWNvbnMnXHJcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tICcuLi8uLi9zZWFyY2gtaW5wdXQnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IHtcclxuICBjb25zdCB7IGhhbmRsZUNvbXBvbmVudFZpc2libGUgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KVxyXG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCBhdXRoU3RhdGUsIGxvZ291dCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuICBjb25zdCB7IGtleSwgc2V0S2V5IH0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3QgeyByZWYsIHRvZ2dsZVJlZiwgaXNDb21wb25lbnRWaXNpYmxlLCBzZXRJc0NvbXBvbmVudFZpc2libGUgfSA9XHJcbiAgICB1c2VDb21wb25lbnRWaXNpYmxlKGZhbHNlKVxyXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzaXplLndpZHRoID4gQ09OU1QuTU9CSUxFX1NJWkUpIHtcclxuICAgICAgc2V0SXNDb21wb25lbnRWaXNpYmxlKGZhbHNlKVxyXG4gICAgfVxyXG4gIH0sIFtzaXplXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbihzdHlsZXMuaGVhZGVyLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiByZWY9e3RvZ2dsZVJlZn0gY2xhc3NOYW1lPXtzdHlsZXMubWVudUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQ29tcG9uZW50VmlzaWJsZSgoaXNPcGVuKSA9PiAhaXNPcGVuKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2lzQ29tcG9uZW50VmlzaWJsZSA/IDxDbG9zZSAvPiA6IDxNZW51IC8+fVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBDb2Rpbmc8c3Bhbj5IZWxwZXI8L3NwYW4+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICBzdHlsZT17eyBmbGV4OiAxLCBtYXJnaW5SaWdodDogNTAsIG1heFdpZHRoOiA3MDAgfX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcclxuICAgICAgICAgIC8vIGlzTG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgaXNLZXlEb3duPXt0cnVlfVxyXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICB7aXNBdXRoZW50aWNhdGVkKCkgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJJbmZvfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lJyB9fT5cclxuICAgICAgICAgICAgICBXZWxjb21leycgJ31cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj1cIi91c2Vycy9bdXNlcl1cIlxyXG4gICAgICAgICAgICAgICAgYXM9e2AvdXNlcnMvJHthdXRoU3RhdGUudXNlckluZm8udXNlcm5hbWV9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YT57YXV0aFN0YXRlLnVzZXJJbmZvLnVzZXJuYW1lfSE8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gbG9nb3V0KCl9PmxvZyBvdXQ8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF1dGh9XHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29tcG9uZW50VmlzaWJsZSh0cnVlLCAnbG9naW4nKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExvZyBpblxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF1dGh9XHJcbiAgICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbXBvbmVudFZpc2libGUodHJ1ZSwgJ3NpZ251cCcpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2lnbiB1cFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiByZWY9e3JlZn0+e2lzQ29tcG9uZW50VmlzaWJsZSAmJiA8TmF2aWdhdGlvbkRyb3Bkb3duIC8+fTwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==