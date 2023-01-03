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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsImNsYXNzTmFtZSIsInByb3BzIiwidXNlQ29udGV4dCIsIk1vZGFsQ29udGV4dCIsImhhbmRsZUNvbXBvbmVudFZpc2libGUiLCJBdXRoQ29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsImF1dGhTdGF0ZSIsImxvZ291dCIsInVzZVN0YXRlIiwia2V5Iiwic2V0S2V5IiwidXNlQ29tcG9uZW50VmlzaWJsZSIsInJlZiIsInRvZ2dsZVJlZiIsImlzQ29tcG9uZW50VmlzaWJsZSIsInNldElzQ29tcG9uZW50VmlzaWJsZSIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwidXNlRWZmZWN0Iiwid2lkdGgiLCJDT05TVCIsIk1PQklMRV9TSVpFIiwiY24iLCJzdHlsZXMiLCJoZWFkZXIiLCJjb250YWluZXIiLCJtZW51Q29udGFpbmVyIiwibWVudSIsImlzT3BlbiIsImxvZ28iLCJmbGV4IiwibWFyZ2luUmlnaHQiLCJtYXhXaWR0aCIsInVzZXJJbmZvIiwiZGlzcGxheSIsInVzZXJuYW1lIiwiYXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNsQztBQUNEO0FBRXlDO0FBQ1o7QUFDbEI7QUFDUztBQUNFO0FBRWhCO0FBQ3lCO0FBQ1g7QUFDSDtBQUVKO0FBRXhDLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFNLE9BQWdDO0VBQUE7RUFBQSxJQUExQkMsU0FBUyxRQUFUQSxTQUFTO0lBQUtDLEtBQUs7RUFDbkMsa0JBQW1DQyx3REFBVSxDQUFDQyxvREFBWSxDQUFDO0lBQW5EQyxzQkFBc0IsZUFBdEJBLHNCQUFzQjtFQUM5QixtQkFBK0NGLHdEQUFVLENBQUNHLHVEQUFXLENBQUM7SUFBOURDLGVBQWUsZ0JBQWZBLGVBQWU7SUFBRUMsU0FBUyxnQkFBVEEsU0FBUztJQUFF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ODAxNjE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IHVzZUNvbXBvbmVudFZpc2libGUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlQ29tcG9uZW50VmlzaWJsZSdcclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlV2luZG93U2l6ZSdcclxuaW1wb3J0IENPTlNUIGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cydcclxuaW1wb3J0IE1vZGFsQ29udGV4dCBmcm9tICcuLi8uLi8uLi9zdG9yZS9tb2RhbCdcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hdXRoJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9idXR0b24nXHJcbmltcG9ydCBOYXZpZ2F0aW9uRHJvcGRvd24gZnJvbSAnLi4vLi4vbmF2aWdhdGlvbi1kcm9wZG93bidcclxuaW1wb3J0IHsgTWVudSwgQ2xvc2UsIExvZ28gfSBmcm9tICcuLi8uLi9pY29ucydcclxuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gJy4uLy4uL3NlYXJjaC1pbnB1dCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZWFkZXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IHsgaGFuZGxlQ29tcG9uZW50VmlzaWJsZSB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpXHJcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIGF1dGhTdGF0ZSwgbG9nb3V0IH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG4gIGNvbnN0IHsga2V5LCBzZXRLZXkgfSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCB7IHJlZiwgdG9nZ2xlUmVmLCBpc0NvbXBvbmVudFZpc2libGUsIHNldElzQ29tcG9uZW50VmlzaWJsZSB9ID1cclxuICAgIHVzZUNvbXBvbmVudFZpc2libGUoZmFsc2UpXHJcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNpemUud2lkdGggPiBDT05TVC5NT0JJTEVfU0laRSkge1xyXG4gICAgICBzZXRJc0NvbXBvbmVudFZpc2libGUoZmFsc2UpXHJcbiAgICB9XHJcbiAgfSwgW3NpemVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NuKHN0eWxlcy5oZWFkZXIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IHJlZj17dG9nZ2xlUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5tZW51Q29udGFpbmVyfT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVudX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNDb21wb25lbnRWaXNpYmxlKChpc09wZW4pID0+ICFpc09wZW4pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNDb21wb25lbnRWaXNpYmxlID8gPENsb3NlIC8+IDogPE1lbnUgLz59XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIENvZGluZzxzcGFuPkhlbHBlcjwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8U2VhcmNoSW5wdXRcclxuICAgICAgICAgIHN0eWxlPXt7IGZsZXg6IDEsIG1hcmdpblJpZ2h0OiA1MCwgbWF4V2lkdGg6IDcwMCB9fVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIlxyXG4gICAgICAgICAgLy8gaXNMb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICBpc0tleURvd249e3RydWV9XHJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIHtpc0F1dGhlbnRpY2F0ZWQoKSA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckluZm99PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgIFdlbGNvbWV7JyAnfVxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiL3VzZXJzL1t1c2VyXVwiXHJcbiAgICAgICAgICAgICAgICBhcz17YC91c2Vycy8ke2F1dGhTdGF0ZS51c2VySW5mby51c2VybmFtZX1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhPnthdXRoU3RhdGUudXNlckluZm8udXNlcm5hbWV9ITwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBsb2dvdXQoKX0+bG9nIG91dDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aH1cclxuICAgICAgICAgICAgICBzZWNvbmRhcnlcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb21wb25lbnRWaXNpYmxlKHRydWUsICdsb2dpbicpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTG9nIGluXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aH1cclxuICAgICAgICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29tcG9uZW50VmlzaWJsZSh0cnVlLCAnc2lnbnVwJyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTaWduIHVwXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IHJlZj17cmVmfT57aXNDb21wb25lbnRWaXNpYmxlICYmIDxOYXZpZ2F0aW9uRHJvcGRvd24gLz59PC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9