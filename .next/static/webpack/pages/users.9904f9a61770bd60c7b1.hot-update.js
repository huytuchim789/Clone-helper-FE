webpackHotUpdate_N_E("pages/users",{

/***/ "./pages/users/index.js":
/*!******************************!*\
  !*** ./pages/users/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/fetcher */ "./util/fetcher.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_page_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/page-title */ "./components/page-title/index.js");
/* harmony import */ var _components_search_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/search-input */ "./components/search-input/index.js");
/* harmony import */ var _components_user_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/user-list */ "./components/user-list/index.js");
/* harmony import */ var _components_user_list_user_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/user-list/user-item */ "./components/user-list/user-item/index.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/icons */ "./components/icons/index.js");

var _jsxFileName = "D:\\stackoverflow-clone\\client\\pages\\users\\index.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }









function UsersPage() {
  _s();
  var _users$filter,
    _this = this;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
    searchTerm = _useState[0],
    setSearchTerm = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
    users = _useState2[0],
    setUsers = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
    loading = _useState3[0],
    setLoading = _useState3[1];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (searchTerm === null) {
      var fetchUser = /*#__PURE__*/function () {
        var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var _yield$publicFetch$ge, data;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _util_fetcher__WEBPACK_IMPORTED_MODULE_3__["publicFetch"].get('/users');
                case 2:
                  _yield$publicFetch$ge = _context.sent;
                  data = _yield$publicFetch$ge.data;
                  setUsers(data);
                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return function fetchUser() {
          return _ref.apply(this, arguments);
        };
      }();
      fetchUser();
    } else {
      var delayDebounceFn = setTimeout( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$publicFetch$ge2, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                setLoading(true);
                _context2.next = 3;
                return _util_fetcher__WEBPACK_IMPORTED_MODULE_3__["publicFetch"].get(searchTerm ? "/users/".concat(searchTerm) : "/users");
              case 3:
                _yield$publicFetch$ge2 = _context2.sent;
                data = _yield$publicFetch$ge2.data;
                setUsers(data);
                setLoading(false);
              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })), 500);
      return function () {
        return clearTimeout(delayDebounceFn);
      };
    }
  }, [searchTerm]);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    extra: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Users - CodingHepler")), __jsx(_components_page_title__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Users",
    borderBottom: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx(_components_search_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    placeholder: "Search by user",
    isLoading: loading,
    autoFocus: true,
    autoComplete: "off",
    type: "text",
    onChange: function onChange(e) {
      return setSearchTerm(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), !users && __jsx("div", {
    className: "loading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_9__["Spinner"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  })), users && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_user_list__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, (_users$filter = users.filter()) === null || _users$filter === void 0 ? void 0 : _users$filter.map(function (_ref3) {
    var username = _ref3.username,
      profilePhoto = _ref3.profilePhoto,
      created = _ref3.created,
      id = _ref3.id;
    return __jsx(_components_user_list_user_item__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: id,
      username: username,
      profilePhoto: profilePhoto,
      created: created,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    });
  })), users.length == 0 && __jsx("p", {
    className: "not-found",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "No users matched your search.")));
}
_s(UsersPage, "WoIhDAg1jr2kAtloayE0sUcqMbA=");
_c = UsersPage;
/* harmony default export */ __webpack_exports__["default"] = (UsersPage);
var _c;
$RefreshReg$(_c, "UsersPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiVXNlcnNQYWdlIiwidXNlU3RhdGUiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInVzZXJzIiwic2V0VXNlcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUVmZmVjdCIsImZldGNoVXNlciIsInB1YmxpY0ZldGNoIiwiZ2V0IiwiZGF0YSIsImRlbGF5RGVib3VuY2VGbiIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXIiLCJtYXAiLCJ1c2VybmFtZSIsInByb2ZpbGVQaG90byIsImNyZWF0ZWQiLCJpZCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBO0FBRGtEO0FBQ3RCO0FBRW9CO0FBRUo7QUFDTztBQUNJO0FBQ047QUFDVTtBQUNYO0FBRWhELFNBQVNBLFNBQVMsR0FBRztFQUFBO0VBQUE7SUFBQTtFQUNuQixnQkFBb0NDLHNEQUFRLENBQUMsSUFBSSxDQUFDO0lBQTNDQyxVQUFVO0lBQUVDLGFBQWE7RUFDaEMsaUJBQTBCRixzREFBUSxDQUFDLElBQUksQ0FBQztJQUFqQ0csS0FBSztJQUFFQyxRQUFRO0VBQ3RCLGlCQUE4Qkosc0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBdENLLE9BQU87SUFBRUMsVUFBVTtFQUUxQkMsdURBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSU4sVUFBVSxLQUFLLElBQUksRUFBRTtNQUN2QixJQUFNTyxTQUFTO1FBQUEsZ0pBQUc7VUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtrQkFBQTtrQkFBQSxPQUNPQyx5REFBVyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO2dCQUFBO2tCQUFBO2tCQUF4Q0MsSUFBSSx5QkFBSkEsSUFBSTtrQkFDWlAsUUFBUSxDQUFDTyxJQUFJLENBQUM7Z0JBQUE7Z0JBQUE7a0JBQUE7Y0FBQTtZQUFBO1VBQUE7UUFBQSxDQUNmO1FBQUEsZ0JBSEtILFNBQVM7VUFBQTtRQUFBO01BQUEsR0FHZDtNQUVEQSxTQUFTLEVBQUU7SUFDYixDQUFDLE1BQU07TUFDTCxJQUFNSSxlQUFlLEdBQUdDLFVBQVUsb0pBQUM7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUNqQ1AsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFBQTtnQkFBQSxPQUNPRyx5REFBVyxDQUFDQyxHQUFHLENBQ3BDVCxVQUFVLG9CQUFhQSxVQUFVLFlBQWEsQ0FDL0M7Y0FBQTtnQkFBQTtnQkFGT1UsSUFBSSwwQkFBSkEsSUFBSTtnQkFHWlAsUUFBUSxDQUFDTyxJQUFJLENBQUM7Z0JBQ2RMLFVBQVUsQ0FBQyxLQUFLLENBQUM7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUEsQ0FDbEIsSUFBRSxHQUFHLENBQUM7TUFFUCxPQUFPO1FBQUEsT0FBTVEsWUFBWSxDQUFDRixlQUFlLENBQUM7TUFBQTtJQUM1QztFQUNGLENBQUMsRUFBRSxDQUFDWCxVQUFVLENBQUMsQ0FBQztFQUVoQixPQUNFLE1BQUMsMERBQU07SUFBQyxLQUFLLEVBQUUsS0FBTTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ25CLE1BQUMsZ0RBQUk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNIO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsMEJBQW1DLENBQzlCLEVBRVAsTUFBQyw4REFBUztJQUFDLEtBQUssRUFBQyxPQUFPO0lBQUMsWUFBWSxFQUFFLEtBQU07SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBRWhELE1BQUMsZ0VBQVc7SUFDVixXQUFXLEVBQUMsZ0JBQWdCO0lBQzVCLFNBQVMsRUFBRUksT0FBUTtJQUNuQixTQUFTO0lBQ1QsWUFBWSxFQUFDLEtBQUs7SUFDbEIsSUFBSSxFQUFDLE1BQU07SUFDWCxRQUFRLEVBQUUsa0JBQUNVLENBQUM7TUFBQSxPQUFLYixhQUFhLENBQUNhLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFDL0MsRUFFRCxDQUFDZCxLQUFLLElBQ0w7SUFBSyxTQUFTLEVBQUMsU0FBUztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ3RCLE1BQUMseURBQU87SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLENBRWQsRUFFQUEsS0FBSyxJQUNKLG1FQUNFLE1BQUMsNkRBQVE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxvQkFDTkEsS0FBSyxDQUFDZSxNQUFNLEVBQUUsa0RBQWQsY0FBZ0JDLEdBQUcsQ0FBQztJQUFBLElBQUdDLFFBQVEsU0FBUkEsUUFBUTtNQUFFQyxZQUFZLFNBQVpBLFlBQVk7TUFBRUMsT0FBTyxTQUFQQSxPQUFPO01BQUVDLEVBQUUsU0FBRkEsRUFBRTtJQUFBLE9BQ3pELE1BQUMsdUVBQVE7TUFDUCxHQUFHLEVBQUVBLEVBQUc7TUFDUixRQUFRLEVBQUVILFFBQVM7TUFDbkIsWUFBWSxFQUFFQyxZQUFhO01BQzNCLE9BQU8sRUFBRUMsT0FBUTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQ2pCO0VBQUEsQ0FDSCxDQUFDLENBQ08sRUFFVm5CLEtBQUssQ0FBQ3FCLE1BQU0sSUFBSSxDQUFDLElBQ2hCO0lBQUcsU0FBUyxFQUFDLFdBQVc7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxtQ0FDekIsQ0FFSixDQUNNO0FBRWI7QUFBQyxHQXRFUXpCLFNBQVM7QUFBQSxLQUFUQSxTQUFTO0FBd0VIQSx3RUFBUztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMuOTkwNGY5YTYxNzcwYmQ2MGM3YjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmltcG9ydCB7IHB1YmxpY0ZldGNoIH0gZnJvbSAnLi4vLi4vdXRpbC9mZXRjaGVyJ1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhZ2UtdGl0bGUnXHJcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NlYXJjaC1pbnB1dCdcclxuaW1wb3J0IFVzZXJMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdXNlci1saXN0J1xyXG5pbXBvcnQgVXNlckl0ZW0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy91c2VyLWxpc3QvdXNlci1pdGVtJ1xyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pY29ucydcclxuXHJcbmZ1bmN0aW9uIFVzZXJzUGFnZSgpIHtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzZWFyY2hUZXJtID09PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHB1YmxpY0ZldGNoLmdldCgnL3VzZXJzJylcclxuICAgICAgICBzZXRVc2VycyhkYXRhKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmZXRjaFVzZXIoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZGVsYXlEZWJvdW5jZUZuID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcHVibGljRmV0Y2guZ2V0KFxyXG4gICAgICAgICAgc2VhcmNoVGVybSA/IGAvdXNlcnMvJHtzZWFyY2hUZXJtfWAgOiBgL3VzZXJzYFxyXG4gICAgICAgIClcclxuICAgICAgICBzZXRVc2VycyhkYXRhKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH0sIDUwMClcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoZGVsYXlEZWJvdW5jZUZuKVxyXG4gICAgfVxyXG4gIH0sIFtzZWFyY2hUZXJtXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgZXh0cmE9e2ZhbHNlfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlVzZXJzIC0gQ29kaW5nSGVwbGVyPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPFBhZ2VUaXRsZSB0aXRsZT1cIlVzZXJzXCIgYm9yZGVyQm90dG9tPXtmYWxzZX0gLz5cclxuXHJcbiAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IHVzZXJcIlxyXG4gICAgICAgIGlzTG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgeyF1c2VycyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XHJcbiAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge3VzZXJzICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFVzZXJMaXN0PlxyXG4gICAgICAgICAgICB7dXNlcnMuZmlsdGVyKCk/Lm1hcCgoeyB1c2VybmFtZSwgcHJvZmlsZVBob3RvLCBjcmVhdGVkLCBpZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFVzZXJJdGVtXHJcbiAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZVBob3RvPXtwcm9maWxlUGhvdG99XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkPXtjcmVhdGVkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Vc2VyTGlzdD5cclxuXHJcbiAgICAgICAgICB7dXNlcnMubGVuZ3RoID09IDAgJiYgKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJub3QtZm91bmRcIj5ObyB1c2VycyBtYXRjaGVkIHlvdXIgc2VhcmNoLjwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzUGFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9