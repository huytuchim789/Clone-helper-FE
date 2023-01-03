webpackHotUpdate_N_E("pages/users/[username]",{

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
  console.log(authState);
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
      lineNumber: 35,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("div", {
    ref: toggleRef,
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.menuContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 38,
      columnNumber: 11
    }
  }, isComponentVisible ? __jsx(_icons__WEBPACK_IMPORTED_MODULE_12__["Close"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 35
    }
  }) : __jsx(_icons__WEBPACK_IMPORTED_MODULE_12__["Menu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 47
    }
  }))), __jsx(_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.logo,
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_12__["Logo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "Coding", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
      lineNumber: 51,
      columnNumber: 9
    }
  }), isAuthenticated() ? __jsx("div", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.userInfo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      display: 'inline'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Welcome", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/users/[user]",
    as: "/users/".concat(authState.userInfo.username),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, authState.userInfo.username, "!"))), __jsx("a", {
    onClick: function onClick() {
      return logout();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
      lineNumber: 77,
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
      lineNumber: 84,
      columnNumber: 13
    }
  }, "Sign up"))), __jsx("div", {
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, isComponentVisible && __jsx(_navigation_dropdown__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsImNsYXNzTmFtZSIsInByb3BzIiwidXNlQ29udGV4dCIsIk1vZGFsQ29udGV4dCIsImhhbmRsZUNvbXBvbmVudFZpc2libGUiLCJBdXRoQ29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsImF1dGhTdGF0ZSIsImxvZ291dCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsImtleSIsInNldEtleSIsInVzZUNvbXBvbmVudFZpc2libGUiLCJyZWYiLCJ0b2dnbGVSZWYiLCJpc0NvbXBvbmVudFZpc2libGUiLCJzZXRJc0NvbXBvbmVudFZpc2libGUiLCJzaXplIiwidXNlV2luZG93U2l6ZSIsInVzZUVmZmVjdCIsIndpZHRoIiwiQ09OU1QiLCJNT0JJTEVfU0laRSIsImNuIiwic3R5bGVzIiwiaGVhZGVyIiwiY29udGFpbmVyIiwibWVudUNvbnRhaW5lciIsIm1lbnUiLCJpc09wZW4iLCJsb2dvIiwiZmxleCIsIm1hcmdpblJpZ2h0IiwibWF4V2lkdGgiLCJ1c2VySW5mbyIsImRpc3BsYXkiLCJ1c2VybmFtZSIsImF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEQ7QUFDbEM7QUFDRDtBQUV5QztBQUNaO0FBQ2xCO0FBQ1M7QUFDRTtBQUVoQjtBQUN5QjtBQUNYO0FBQ0g7QUFFSjtBQUV4QyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBTSxPQUFnQztFQUFBO0VBQUEsSUFBMUJDLFNBQVMsUUFBVEEsU0FBUztJQUFLQyxLQUFLO0VBQ25DLGtCQUFtQ0Msd0RBQVUsQ0FBQ0Msb0RBQVksQ0FBQztJQUFuREMsc0JBQXNCLGVBQXRCQSxzQkFBc0I7RUFDOUIsbUJBQStDRix3REFBVSxDQUFDRyx1REFBVyxDQUFDO0lBQTlEQyxlQUFlLGdCQUFmQSxlQUFlO0lBQUVDLFNBQVMs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Ijoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMvW3VzZXJuYW1lXS41ZTBkYzhmZmQ3OTJiZTA2MmUwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCB1c2VDb21wb25lbnRWaXNpYmxlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUNvbXBvbmVudFZpc2libGUnXHJcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVdpbmRvd1NpemUnXHJcbmltcG9ydCBDT05TVCBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnXHJcbmltcG9ydCBNb2RhbENvbnRleHQgZnJvbSAnLi4vLi4vLi4vc3RvcmUvbW9kYWwnXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYXV0aCdcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vYnV0dG9uJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbkRyb3Bkb3duIGZyb20gJy4uLy4uL25hdmlnYXRpb24tZHJvcGRvd24nXHJcbmltcG9ydCB7IE1lbnUsIENsb3NlLCBMb2dvIH0gZnJvbSAnLi4vLi4vaWNvbnMnXHJcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tICcuLi8uLi9zZWFyY2gtaW5wdXQnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IHtcclxuICBjb25zdCB7IGhhbmRsZUNvbXBvbmVudFZpc2libGUgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KVxyXG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCBhdXRoU3RhdGUsIGxvZ291dCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuICBjb25zb2xlLmxvZyhhdXRoU3RhdGUpXHJcbiAgY29uc3QgeyBrZXksIHNldEtleSB9ID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IHsgcmVmLCB0b2dnbGVSZWYsIGlzQ29tcG9uZW50VmlzaWJsZSwgc2V0SXNDb21wb25lbnRWaXNpYmxlIH0gPVxyXG4gICAgdXNlQ29tcG9uZW50VmlzaWJsZShmYWxzZSlcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2l6ZS53aWR0aCA+IENPTlNULk1PQklMRV9TSVpFKSB7XHJcbiAgICAgIHNldElzQ29tcG9uZW50VmlzaWJsZShmYWxzZSlcclxuICAgIH1cclxuICB9LCBbc2l6ZV0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y24oc3R5bGVzLmhlYWRlciwgY2xhc3NOYW1lKX0gey4uLnByb3BzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgcmVmPXt0b2dnbGVSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVDb250YWluZXJ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZW51fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0NvbXBvbmVudFZpc2libGUoKGlzT3BlbikgPT4gIWlzT3Blbil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpc0NvbXBvbmVudFZpc2libGUgPyA8Q2xvc2UgLz4gOiA8TWVudSAvPn1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgQ29kaW5nPHNwYW4+SGVscGVyPC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgICAgc3R5bGU9e3sgZmxleDogMSwgbWFyZ2luUmlnaHQ6IDUwLCBtYXhXaWR0aDogNzAwIH19XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiXHJcbiAgICAgICAgICAvLyBpc0xvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgIGlzS2V5RG93bj17dHJ1ZX1cclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAge2lzQXV0aGVudGljYXRlZCgpID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VySW5mb30+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZScgfX0+XHJcbiAgICAgICAgICAgICAgV2VsY29tZXsnICd9XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvdXNlcnMvW3VzZXJdXCJcclxuICAgICAgICAgICAgICAgIGFzPXtgL3VzZXJzLyR7YXV0aFN0YXRlLnVzZXJJbmZvLnVzZXJuYW1lfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGE+e2F1dGhTdGF0ZS51c2VySW5mby51c2VybmFtZX0hPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfT5sb2cgb3V0PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdXRofVxyXG4gICAgICAgICAgICAgIHNlY29uZGFyeVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbXBvbmVudFZpc2libGUodHJ1ZSwgJ2xvZ2luJyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMb2cgaW5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdXRofVxyXG4gICAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb21wb25lbnRWaXNpYmxlKHRydWUsICdzaWdudXAnKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNpZ24gdXBcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgcmVmPXtyZWZ9Pntpc0NvbXBvbmVudFZpc2libGUgJiYgPE5hdmlnYXRpb25Ecm9wZG93biAvPn08L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=