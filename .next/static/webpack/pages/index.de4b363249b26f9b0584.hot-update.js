webpackHotUpdate_N_E("pages/index",{

/***/ "./components/button-group/index.js":
/*!******************************************!*\
  !*** ./components/button-group/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./components/button/index.js");
/* harmony import */ var _button_group_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-group.module.css */ "./components/button-group/button-group.module.css");
/* harmony import */ var _button_group_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_group_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _this = undefined,
  _jsxFileName = "C:\\Users\\TUYEN\\Documents\\ITSS\\Clone-helper-FE\\components\\button-group\\index.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ButtonGroup = function ButtonGroup(_ref) {
  _s();
  var buttons = _ref.buttons,
    selected = _ref.selected,
    setSelected = _ref.setSelected,
    _ref$borderBottom = _ref.borderBottom,
    borderBottom = _ref$borderBottom === void 0 ? false : _ref$borderBottom;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    showFilter = _useState[0],
    setShowFilter = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
    option = _useState2[0],
    setOption = _useState2[1];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_button_group_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container, borderBottom && _button_group_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.borderBottom),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, buttons.map(function (button) {
    return __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: button,
      className: selected === button && _button_group_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.active,
      onClick: function onClick() {
        return setSelected(button);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, button);
  }), __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      marginLeft: 20,
      borderRadius: 3
    },
    onClick: function onClick() {
      return setShowFilter(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "Filter")), showFilter && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 12,
    style: {
      backgroundColor: "#ACBFD0",
      paddingLeft: 30
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "left-option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"].Group, {
    style: {
      display: "block"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 16
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "Newest"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "Oldest"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "Highest votes"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "Highest views"))), __jsx("div", {
    className: "right-option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 12
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    mode: "tags",
    style: {
      width: '100%'
    },
    onChange: function onChange(value) {
      return console.log(value);
    },
    tokenSeparators: [','],
    options: options,
    notFoundContent: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  })), __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      borderRadius: 3
    },
    primary: true,
    onClick: function onClick() {
      return setShowFilter(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Search"), __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      marginLeft: 20,
      borderRadius: 3
    },
    secondary: true,
    onClick: function onClick() {
      return setShowFilter(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Cancel"))));
};
_s(ButtonGroup, "UVaLRd+lv4wJ2VVcKIWwpGGEBRQ=");
_c = ButtonGroup;
/* harmony default export */ __webpack_exports__["default"] = (ButtonGroup);
var _c;
$RefreshReg$(_c, "ButtonGroup");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXR0b24tZ3JvdXAvaW5kZXguanMiXSwibmFtZXMiOlsiQnV0dG9uR3JvdXAiLCJidXR0b25zIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImJvcmRlckJvdHRvbSIsInVzZVN0YXRlIiwic2hvd0ZpbHRlciIsInNldFNob3dGaWx0ZXIiLCJvcHRpb24iLCJzZXRPcHRpb24iLCJjbiIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1hcCIsImJ1dHRvbiIsImFjdGl2ZSIsIm1hcmdpbkxlZnQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nTGVmdCIsImRpc3BsYXkiLCJ3aWR0aCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1o7QUFFRztBQUVnQjtBQUVJO0FBR2xELElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFXLE9BS1g7RUFBQTtFQUFBLElBSkpDLE9BQU8sUUFBUEEsT0FBTztJQUNQQyxRQUFRLFFBQVJBLFFBQVE7SUFDUkMsV0FBVyxRQUFYQSxXQUFXO0lBQUEseUJBQ1hDLFlBQVk7SUFBWkEsWUFBWSxrQ0FBRyxLQUFLO0VBRXBCLGdCQUFvQ0Msc0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBNUNDLFVBQVU7SUFBRUMsYUFBYTtFQUNoQyxpQkFBNEJGLHNEQUFRLENBQUMsRUFBRSxDQUFDO0lBQWpDRyxNQUFNO0lBQUVDLFNBQVM7RUFFeEIsT0FDRSxtRUFDQTtJQUFLLFNBQVMsRUFBRUMsaURBQUUsQ0FBQ0MsK0RBQU0sQ0FBQ0MsU0FBUyxFQUFFUixZQUFZLElBQUlPLCtEQUFNLENBQUNQLFlBQVksQ0FBRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ3ZFSCxPQUFPLENBQUNZLEdBQUcsQ0FBQyxVQUFDQyxNQUFNO0lBQUEsT0FDbEIsTUFBQywrQ0FB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QUFBQSxHQW5ES1AsV0FBVztBQUFBLEtBQVhBLFdBQVc7QUFxREZBLDBFQUFXO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZTRiMzYzMjQ5YjI2ZjliMDU4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnV0dG9uLWdyb3VwLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgeyBDb2wsIFJvdywgQ2hlY2tib3gsIFNlbGVjdCB9IGZyb20gJ2FudGQnO1xyXG5cclxuXHJcbmNvbnN0IEJ1dHRvbkdyb3VwID0gKHtcclxuICBidXR0b25zLFxyXG4gIHNlbGVjdGVkLFxyXG4gIHNldFNlbGVjdGVkLFxyXG4gIGJvcmRlckJvdHRvbSA9IGZhbHNlXHJcbn0pID0+IHtcclxuICBjb25zdCBbc2hvd0ZpbHRlciwgc2V0U2hvd0ZpbHRlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbb3B0aW9uLCBzZXRPcHRpb25dID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy5jb250YWluZXIsIGJvcmRlckJvdHRvbSAmJiBzdHlsZXMuYm9yZGVyQm90dG9tKX0+XHJcbiAgICAgIHtidXR0b25zLm1hcCgoYnV0dG9uKSA9PiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAga2V5PXtidXR0b259XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdGVkID09PSBidXR0b24gJiYgc3R5bGVzLmFjdGl2ZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKGJ1dHRvbil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2J1dHRvbn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKSl9XHJcbiAgICAgIDxCdXR0b24gc3R5bGU9e3ttYXJnaW5MZWZ0OjIwLCAgYm9yZGVyUmFkaXVzOiAzfX0gb25DbGljaz17KCkgPT4gc2V0U2hvd0ZpbHRlcih0cnVlKX0+RmlsdGVyPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIHtzaG93RmlsdGVyICYmIFxyXG4gICAgICA8Um93ID5cclxuICAgICAgICA8Q29sIHNwYW49ezEyfT48L0NvbD5cclxuICAgICAgICA8Q29sIHNwYW49ezEyfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6XCIjQUNCRkQwXCIsIHBhZGRpbmdMZWZ0OiAzMH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGVmdC1vcHRpb24nPlxyXG4gICAgICAgICAgICAgICA8Q2hlY2tib3guR3JvdXAgc3R5bGU9e3tkaXNwbGF5OlwiYmxvY2tcIn19PlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94Pk5ld2VzdDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3g+T2xkZXN0PC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveD5IaWdoZXN0IHZvdGVzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveD5IaWdoZXN0IHZpZXdzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICA8L0NoZWNrYm94Lkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQtb3B0aW9uJz5cclxuICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICBtb2RlPVwidGFnc1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBjb25zb2xlLmxvZyh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICB0b2tlblNlcGFyYXRvcnM9e1snLCddfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICAgICAgICAgIG5vdEZvdW5kQ29udGVudD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICA8L2Rpdj4gICAgIFxyXG4gICAgICAgIDxCdXR0b24gc3R5bGU9e3tib3JkZXJSYWRpdXM6IDN9fSBwcmltYXJ5PXt0cnVlfSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RmlsdGVyKGZhbHNlKX0+U2VhcmNoPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBzdHlsZT17e21hcmdpbkxlZnQ6MjAsICBib3JkZXJSYWRpdXM6IDN9fSBzZWNvbmRhcnk9e3RydWV9IG9uQ2xpY2s9eygpID0+IHNldFNob3dGaWx0ZXIoZmFsc2UpfT5DYW5jZWw8L0J1dHRvbj48L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbn1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uR3JvdXBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==