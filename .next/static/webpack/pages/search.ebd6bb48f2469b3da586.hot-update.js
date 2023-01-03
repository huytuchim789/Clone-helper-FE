webpackHotUpdate_N_E("pages/search",{

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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_button_group_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container, borderBottom && _button_group_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.borderBottom),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
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
        lineNumber: 22,
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
      lineNumber: 30,
      columnNumber: 7
    }
  }, "Filter")), showFilter && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    style: {
      backgroundColor: "#ACBFD0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 12
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 12
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
  }, "Highest votes")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "right-option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 12
    }
  }, "col-12"))), __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      lineNumber: 53,
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
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Cancel"))));
};
_s(ButtonGroup, "AD88guxgmfgTAPivEEg1XSKt2ls=");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXR0b24tZ3JvdXAvaW5kZXguanMiXSwibmFtZXMiOlsiQnV0dG9uR3JvdXAiLCJidXR0b25zIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImJvcmRlckJvdHRvbSIsInVzZVN0YXRlIiwic2hvd0ZpbHRlciIsInNldFNob3dGaWx0ZXIiLCJjbiIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1hcCIsImJ1dHRvbiIsImFjdGl2ZSIsIm1hcmdpbkxlZnQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nTGVmdCIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1o7QUFFRztBQUVnQjtBQUVKO0FBRTFDLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFXLE9BS1g7RUFBQTtFQUFBLElBSkpDLE9BQU8sUUFBUEEsT0FBTztJQUNQQyxRQUFRLFFBQVJBLFFBQVE7SUFDUkMsV0FBVyxRQUFYQSxXQUFXO0lBQUEseUJBQ1hDLFlBQVk7SUFBWkEsWUFBWSxrQ0FBRyxLQUFLO0VBRXBCLGdCQUFvQ0Msc0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBNUNDLFVBQVU7SUFBRUMsYUFBYTtFQUVoQyxPQUNFLG1FQUNBO0lBQUssU0FBUyxFQUFFQyxpREFBRSxDQUFDQywrREFBTSxDQUFDQyxTQUFTLEVBQUVOLFlBQVksSUFBSUssK0RBQU0sQ0FBQ0wsWUFBWSxDQUFFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDdkVILE9BQU8sQ0FBQ1UsR0FBRyxDQUFDLFVBQUNDLE1BQU07SUFBQSxPQUNsQixNQUFDLCtDQUFNO01BQ0wsR0FBRyxFQUFFQSxNQUFPO01BQ1osU0FBUyxFQUFFVixRQUFRLEtBQUtVLE1BQU0sSUFBSUgsK0RBQU0sQ0FBQ0ksTUFBTztNQUNoRCxPQUFPLEVBQUU7UUFBQSxPQUFNVixXQUFXLENBQUNTLE1BQU0sQ0FBQztNQUFBLENBQUM7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUVsQ0EsTUFBTSxDQUNBO0VBQUEsQ0FDVixDQUFDLEVBQ0YsTUFBQywrQ0FBTTtJQUFDLEtBQUssRUFBRTtNQUFDRSxVQUFVLEVBQUMsRUFBRTtNQUFHQyxZQUFZLEVBQUU7SUFBQyxDQUFFO0lBQUMsT0FBTyxFQUFFO01BQUEsT0FBTVIsYUFBYSxDQUFDLElBQUksQ0FBQztJQUFBLENBQUM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxZQUFnQixDQUNqRyxFQUNMRCxVQUFVLElBQ1QsTUFBQyx3Q0FBRztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0YsTUFBQyx3Q0FBRztJQUFDLElBQUksRUFBRSxFQUFHO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBTyxFQUNyQixNQUFDLHdDQUFHO0lBQUMsSUFBSSxFQUFFLEVBQUc7SUFBQyxLQUFLLEVBQUU7TUFBRVUsZUFBZSxFQUFDLFNBQVM7TUFBRUMsV0FBVyxFQUFFO0lBQUUsQ0FBRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ2pFLE1BQUMsd0NBQUc7SUFBQyxLQUFLLEVBQUU7TUFBRUQsZUFBZSxFQUFDO0lBQVMsQ0FBRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ3pDLE1BQUMsd0NBQUc7SUFBQyxJQUFJLEVBQUUsRUFBRztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ2I7SUFBSyxTQUFTLEVBQUMsYUFBYTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ3pCLE1BQUMsNkNBQVEsQ0FBQyxLQUFLO0lBQUMsS0FBSyxFQUFFO01BQUNFLE9BQU8sRUFBQztJQUFPLENBQUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUN4QyxNQUFDLDZDQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsWUFBa0IsRUFDM0IsTUFBQyw2Q0FBUTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLFlBQWtCLEVBQzNCLE1BQUMsNkNBQVE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxtQkFBeUIsRUFDbEMsTUFBQyw2Q0FBUTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLG1CQUF5QixDQUNuQixDQUNiLENBQ0QsRUFDTixNQUFDLHdDQUFHO0lBQUMsSUFBSSxFQUFFLEVBQUc7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNkO0lBQUssU0FBUyxFQUFDLGNBQWM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxZQUV2QixDQUNBLENBQ0EsRUFDVCxNQUFDLCtDQUFNO0lBQUMsS0FBSyxFQUFFO01BQUNILFlBQVksRUFBRTtJQUFDLENBQUU7SUFBQyxPQUFPLEVBQUUsSUFBSztJQUFDLE9BQU8sRUFBRTtNQUFBLE9BQU1SLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsWUFBZ0IsRUFDckcsTUFBQywrQ0FBTTtJQUFDLEtBQUssRUFBRTtNQUFDTyxVQUFVLEVBQUMsRUFBRTtNQUFHQyxZQUFZLEVBQUU7SUFBQyxDQUFFO0lBQUMsU0FBUyxFQUFFLElBQUs7SUFBQyxPQUFPLEVBQUU7TUFBQSxPQUFNUixhQUFhLENBQUMsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLFlBQWdCLENBQU0sQ0FDekgsQ0FFTDtBQUVQLENBQUM7QUFBQSxHQWpES1AsV0FBVztBQUFBLEtBQVhBLFdBQVc7QUFtREZBLDBFQUFXO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2guZWJkNmJiNDhmMjQ2OWIzZGE1ODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi1ncm91cC5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IHsgQ29sLCBSb3csIENoZWNrYm94IH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBCdXR0b25Hcm91cCA9ICh7XHJcbiAgYnV0dG9ucyxcclxuICBzZWxlY3RlZCxcclxuICBzZXRTZWxlY3RlZCxcclxuICBib3JkZXJCb3R0b20gPSBmYWxzZVxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3Nob3dGaWx0ZXIsIHNldFNob3dGaWx0ZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy5jb250YWluZXIsIGJvcmRlckJvdHRvbSAmJiBzdHlsZXMuYm9yZGVyQm90dG9tKX0+XHJcbiAgICAgIHtidXR0b25zLm1hcCgoYnV0dG9uKSA9PiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAga2V5PXtidXR0b259XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdGVkID09PSBidXR0b24gJiYgc3R5bGVzLmFjdGl2ZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKGJ1dHRvbil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2J1dHRvbn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKSl9XHJcbiAgICAgIDxCdXR0b24gc3R5bGU9e3ttYXJnaW5MZWZ0OjIwLCAgYm9yZGVyUmFkaXVzOiAzfX0gb25DbGljaz17KCkgPT4gc2V0U2hvd0ZpbHRlcih0cnVlKX0+RmlsdGVyPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIHtzaG93RmlsdGVyICYmIFxyXG4gICAgICA8Um93ID5cclxuICAgICAgICA8Q29sIHNwYW49ezEyfT48L0NvbD5cclxuICAgICAgICA8Q29sIHNwYW49ezEyfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6XCIjQUNCRkQwXCIsIHBhZGRpbmdMZWZ0OiAzMH19PlxyXG4gICAgICAgICAgIDxSb3cgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOlwiI0FDQkZEMFwifX0+XHJcbiAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZWZ0LW9wdGlvbic+XHJcbiAgICAgICAgICAgICAgIDxDaGVja2JveC5Hcm91cCBzdHlsZT17e2Rpc3BsYXk6XCJibG9ja1wifX0+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3g+TmV3ZXN0PC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveD5PbGRlc3Q8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94PkhpZ2hlc3Qgdm90ZXM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94PkhpZ2hlc3Qgdm90ZXM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgIDwvQ2hlY2tib3guR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodC1vcHRpb24nPlxyXG4gICAgICAgICAgICBjb2wtMTJcclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICA8L1Jvdz4gICAgICBcclxuICAgICAgICA8QnV0dG9uIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAzfX0gcHJpbWFyeT17dHJ1ZX0gb25DbGljaz17KCkgPT4gc2V0U2hvd0ZpbHRlcihmYWxzZSl9PlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gc3R5bGU9e3ttYXJnaW5MZWZ0OjIwLCAgYm9yZGVyUmFkaXVzOiAzfX0gc2Vjb25kYXJ5PXt0cnVlfSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RmlsdGVyKGZhbHNlKX0+Q2FuY2VsPC9CdXR0b24+PC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG59XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkdyb3VwXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=