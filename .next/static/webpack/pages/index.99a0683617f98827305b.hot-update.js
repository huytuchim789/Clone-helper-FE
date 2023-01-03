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
  }, __jsx(Select, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXR0b24tZ3JvdXAvaW5kZXguanMiXSwibmFtZXMiOlsiQnV0dG9uR3JvdXAiLCJidXR0b25zIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImJvcmRlckJvdHRvbSIsInVzZVN0YXRlIiwic2hvd0ZpbHRlciIsInNldFNob3dGaWx0ZXIiLCJvcHRpb24iLCJzZXRPcHRpb24iLCJjbiIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1hcCIsImJ1dHRvbiIsImFjdGl2ZSIsIm1hcmdpbkxlZnQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nTGVmdCIsImRpc3BsYXkiLCJ3aWR0aCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1o7QUFFRztBQUVnQjtBQUVTO0FBR3ZELElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFXLE9BS1g7RUFBQTtFQUFBLElBSkpDLE9BQU8sUUFBUEEsT0FBTztJQUNQQyxRQUFRLFFBQVJBLFFBQVE7SUFDUkMsV0FBVyxRQUFYQSxXQUFXO0lBQUEseUJBQ1hDLFlBQVk7SUFBWkEsWUFBWSxrQ0FBRyxLQUFLO0VBRXBCLGdCQUFvQ0Msc0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBNUNDLFVBQVU7SUFBRUMsYUFBYTtFQUNoQyxpQkFBNEJGLHNEQUFRLENBQUMsRUFBRSxDQUFDO0lBQWpDRyxNQUFNO0lBQUVDLFNBQVM7RUFFeEIsT0FDRSxtRUFDQTtJQUFLLFNBQVMsRUFBRUMsaURBQUUsQ0FBQ0MsK0RBQU0sQ0FBQ0MsU0FBUyxFQUFFUixZQUFZLElBQUlPLCtEQUFNLENBQUNQLFlBQVksQ0FBRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ3ZFSCxPQUFPLENBQUNZLEdBQUcsQ0FBQyxVQUFDQyxNQUFNO0lBQUEsT0FDbEIsTUFBQywrQ0FBTTtNQUNMLEdBQUcsRUFBRUEsTUFBTztNQUNaLFNBQVMsRUFBRVosUUFBUSxLQUFLWSxNQUFNLElBQUlILCtEQUFNLENBQUNJLE1BQU87TUFDaEQsT0FBTyxFQUFFO1FBQUEsT0FBTVosV0FBVyxDQUFDVyxNQUFNLENBQUM7TUFBQSxDQUFDO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FFbENBLE1BQU0sQ0FDQTtFQUFBLENBQ1YsQ0FBQyxFQUNGLE1BQUMsK0NBQU07SUFBQyxLQUFLLEVBQUU7TUFBQ0UsVUFBVSxFQUFDLEVBQUU7TUFBR0MsWUFBWSxFQUFFO0lBQUMsQ0FBRTtJQUFDLE9BQU8sRUFBRTtNQUFBLE9BQU1WLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFBQSxDQUFDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsWUFBZ0IsQ0FDakcsRUFDTEQsVUFBVSxJQUNULE1BQUMsd0NBQUc7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNGLE1BQUMsd0NBQUc7SUFBQyxJQUFJLEVBQUUsRUFBRztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQU8sRUFDckIsTUFBQyx3Q0FBRztJQUFDLElBQUksRUFBRSxFQUFHO0lBQUMsS0FBSyxFQUFFO01BQUVZLGVBQWUsRUFBQyxTQUFTO01BQUVDLFdBQVcsRUFBRTtJQUFFLENBQUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNoRTtJQUFLLFNBQVMsRUFBQyxhQUFhO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDekIsTUFBQyw2Q0FBUSxDQUFDLEtBQUs7SUFBQyxLQUFLLEVBQUU7TUFBQ0MsT0FBTyxFQUFDO0lBQU8sQ0FBRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ3hDLE1BQUMsNkNBQVE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxZQUFrQixFQUMzQixNQUFDLDZDQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsWUFBa0IsRUFDM0IsTUFBQyw2Q0FBUTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLG1CQUF5QixFQUNsQyxNQUFDLDZDQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsbUJBQXlCLENBQ25CLENBQ2IsRUFDUDtJQUFLLFNBQVMsRUFBQyxjQUFjO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDMUIsTUFBQyxNQUFNO0lBQ0wsSUFBSSxFQUFDLE1BQU07SUFDWCxLQUFLLEVBQUU7TUFBRUMsS0FBSyxFQUFFO0lBQU8sQ0FBRTtJQUN6QixRQUFRLEVBQUUsa0JBQUNDLEtBQUs7TUFBQSxPQUFLQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUN4QyxlQUFlLEVBQUUsQ0FBQyxHQUFHLENBQUU7SUFDdkIsT0FBTyxFQUFFRyxPQUFRO0lBQ2pCLGVBQWUsRUFBRSxLQUFNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFDdkIsQ0FDQyxFQUNULE1BQUMsK0NBQU07SUFBQyxLQUFLLEVBQUU7TUFBQ1IsWUFBWSxFQUFFO0lBQUMsQ0FBRTtJQUFDLE9BQU8sRUFBRSxJQUFLO0lBQUMsT0FBTyxFQUFFO01BQUEsT0FBTVYsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUFBLENBQUM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxZQUFnQixFQUNyRyxNQUFDLCtDQUFNO0lBQUMsS0FBSyxFQUFFO01BQUNTLFVBQVUsRUFBQyxFQUFFO01BQUdDLFlBQVksRUFBRTtJQUFDLENBQUU7SUFBQyxTQUFTLEVBQUUsSUFBSztJQUFDLE9BQU8sRUFBRTtNQUFBLE9BQU1WLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsWUFBZ0IsQ0FBTSxDQUN6SCxDQUVMO0FBRVAsQ0FBQztBQUFBLEdBbkRLUCxXQUFXO0FBQUEsS0FBWEEsV0FBVztBQXFERkEsMEVBQVc7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk5YTA2ODM2MTdmOTg4MjczMDViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbidcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXR0b24tZ3JvdXAubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCB7IENvbCwgUm93LCBDaGVja2JveCwgU2VsZWN0UHJvcHMgfSBmcm9tICdhbnRkJztcclxuXHJcblxyXG5jb25zdCBCdXR0b25Hcm91cCA9ICh7XHJcbiAgYnV0dG9ucyxcclxuICBzZWxlY3RlZCxcclxuICBzZXRTZWxlY3RlZCxcclxuICBib3JkZXJCb3R0b20gPSBmYWxzZVxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3Nob3dGaWx0ZXIsIHNldFNob3dGaWx0ZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW29wdGlvbiwgc2V0T3B0aW9uXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMuY29udGFpbmVyLCBib3JkZXJCb3R0b20gJiYgc3R5bGVzLmJvcmRlckJvdHRvbSl9PlxyXG4gICAgICB7YnV0dG9ucy5tYXAoKGJ1dHRvbikgPT4gKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGtleT17YnV0dG9ufVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzZWxlY3RlZCA9PT0gYnV0dG9uICYmIHN0eWxlcy5hY3RpdmV9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZChidXR0b24pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtidXR0b259XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICkpfVxyXG4gICAgICA8QnV0dG9uIHN0eWxlPXt7bWFyZ2luTGVmdDoyMCwgIGJvcmRlclJhZGl1czogM319IG9uQ2xpY2s9eygpID0+IHNldFNob3dGaWx0ZXIodHJ1ZSl9PkZpbHRlcjwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICB7c2hvd0ZpbHRlciAmJiBcclxuICAgICAgPFJvdyA+XHJcbiAgICAgICAgPENvbCBzcGFuPXsxMn0+PC9Db2w+XHJcbiAgICAgICAgPENvbCBzcGFuPXsxMn0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOlwiI0FDQkZEMFwiLCBwYWRkaW5nTGVmdDogMzB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xlZnQtb3B0aW9uJz5cclxuICAgICAgICAgICAgICAgPENoZWNrYm94Lkdyb3VwIHN0eWxlPXt7ZGlzcGxheTpcImJsb2NrXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveD5OZXdlc3Q8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94Pk9sZGVzdDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3g+SGlnaGVzdCB2b3RlczwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3g+SGlnaGVzdCB2aWV3czwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgPC9DaGVja2JveC5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0LW9wdGlvbic+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgbW9kZT1cInRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gY29uc29sZS5sb2codmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdG9rZW5TZXBhcmF0b3JzPXtbJywnXX1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICBub3RGb3VuZENvbnRlbnQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgPC9kaXY+ICAgICBcclxuICAgICAgICA8QnV0dG9uIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAzfX0gcHJpbWFyeT17dHJ1ZX0gb25DbGljaz17KCkgPT4gc2V0U2hvd0ZpbHRlcihmYWxzZSl9PlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gc3R5bGU9e3ttYXJnaW5MZWZ0OjIwLCAgYm9yZGVyUmFkaXVzOiAzfX0gc2Vjb25kYXJ5PXt0cnVlfSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RmlsdGVyKGZhbHNlKX0+Q2FuY2VsPC9CdXR0b24+PC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG59XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkdyb3VwXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=