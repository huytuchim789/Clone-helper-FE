webpackHotUpdate_N_E("pages/users/[username]",{

/***/ "./components/user-card/avatar-card/index.js":
/*!***************************************************!*\
  !*** ./components/user-card/avatar-card/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/formatDistanceToNowStrict */ "./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js");
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/fetcher */ "./util/fetcher.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons */ "./components/icons/index.js");
/* harmony import */ var _avatar_card_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./avatar-card.module.css */ "./components/user-card/avatar-card/avatar-card.module.css");
/* harmony import */ var _avatar_card_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_avatar_card_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/auth */ "./store/auth.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../button */ "./components/button/index.js");

var _this = undefined,
  _jsxFileName = "D:\\stackoverflow-clone\\client\\components\\user-card\\avatar-card\\index.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }








var UserAvatar = function UserAvatar(_ref) {
  _s();
  var username = _ref.username;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
    userInfo = _useState[0],
    setUserInfo = _useState[1];
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_7__["AuthContext"]),
    isAdmin = _useContext.isAdmin;
  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(FetchContext),
    authAxios = _useContext2.authAxios;
  var blockUser = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _question;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              authAxios.put("/blocked/".concat((_question = question) === null || _question === void 0 ? void 0 : _question.id)).then(function (res) {
                console.log(res);
                message.success('Successfully Blocked');
                history.back();
              })["catch"](function () {
                message.error('Failed Blocked');
                history.back();
              });
            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function blockUser() {
      return _ref2.apply(this, arguments);
    };
  }();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fetchUser = /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$publicFetch$ge, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _util_fetcher__WEBPACK_IMPORTED_MODULE_4__["publicFetch"].get("/user/".concat(username));
              case 2:
                _yield$publicFetch$ge = _context2.sent;
                data = _yield$publicFetch$ge.data;
                setUserInfo(data);
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return function fetchUser() {
        return _ref3.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [username]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _avatar_card_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.avatarCard,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, !userInfo ? __jsx("div", {
    className: "loading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  })) : __jsx("div", {
    className: _avatar_card_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.avatar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/users/[username]",
    as: "/users/".concat(username),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "https://secure.gravatar.com/avatar/".concat(userInfo.id, "?s=164&d=identicon"),
    alt: username,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  })))), __jsx("h2", {
    className: _avatar_card_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.username,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, username), !userInfo ? __jsx("div", {
    className: "loading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  })) : __jsx("div", {
    className: _avatar_card_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.created,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "Created:", ' ', __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, Object(date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(userInfo.created), {
    addSuffix: true
  }))), isAdmin && __jsx(_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      backgroundColor: 'red'
    },
    primary: true,
    onClick: blockUser,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "Block"))));
};
_s(UserAvatar, "RR0/Hox9P6gluLYSyvIkQ7qqbz0=");
_c = UserAvatar;
/* harmony default export */ __webpack_exports__["default"] = (UserAvatar);
var _c;
$RefreshReg$(_c, "UserAvatar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VyLWNhcmQvYXZhdGFyLWNhcmQvaW5kZXguanMiXSwibmFtZXMiOlsiVXNlckF2YXRhciIsInVzZXJuYW1lIiwidXNlU3RhdGUiLCJ1c2VySW5mbyIsInNldFVzZXJJbmZvIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiaXNBZG1pbiIsIkZldGNoQ29udGV4dCIsImF1dGhBeGlvcyIsImJsb2NrVXNlciIsInB1dCIsInF1ZXN0aW9uIiwiaWQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiaGlzdG9yeSIsImJhY2siLCJlcnJvciIsInVzZUVmZmVjdCIsImZldGNoVXNlciIsInB1YmxpY0ZldGNoIiwiZ2V0IiwiZGF0YSIsInN0eWxlcyIsImF2YXRhckNhcmQiLCJhdmF0YXIiLCJjcmVhdGVkIiwiZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdCIsIkRhdGUiLCJhZGRTdWZmaXgiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0E7QUFEOEQ7QUFDbEM7QUFDOEM7QUFFdkI7QUFFZDtBQUVRO0FBQ0k7QUFDaEI7QUFFakMsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQVUsT0FBcUI7RUFBQTtFQUFBLElBQWZDLFFBQVEsUUFBUkEsUUFBUTtFQUM1QixnQkFBZ0NDLHNEQUFRLENBQUMsSUFBSSxDQUFDO0lBQXZDQyxRQUFRO0lBQUVDLFdBQVc7RUFDNUIsa0JBQW9CQyx3REFBVSxDQUFDQyx1REFBVyxDQUFDO0lBQW5DQyxPQUFPLGVBQVBBLE9BQU87RUFDZixtQkFBc0JGLHdEQUFVLENBQUNHLFlBQVksQ0FBQztJQUF0Q0MsU0FBUyxnQkFBVEEsU0FBUztFQUVqQixJQUFNQyxTQUFTO0lBQUEsaUpBQUc7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQ2hCRCxTQUFTLENBQ05FLEdBQUcs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LE9BQU8sSUFDTixNQUFDLCtDQUFNO0lBQ0wsS0FBSyxFQUFFO01BQUU0QixlQUFlLEVBQUU7SUFBTSxDQUFFO0lBQ2xDLE9BQU87SUFDUCxPQUFPLEVBQUV6QixTQUFVO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsV0FJdEIsQ0FFSixDQUNHLENBQ0Y7QUFFVixDQUFDO0FBQUEsR0EzRUtWLFVBQVU7QUFBQSxLQUFWQSxVQUFVO0FBNkVEQSx5RUFBVTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlcnMvW3VzZXJuYW1lXS5mNmE1YTNlZmU4ZGQ0ODQ1ZTk2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdCBmcm9tICdkYXRlLWZucy9mb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0J1xyXG5cclxuaW1wb3J0IHsgcHVibGljRmV0Y2ggfSBmcm9tICcuLi8uLi8uLi91dGlsL2ZldGNoZXInXHJcblxyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vLi4vaWNvbnMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYXZhdGFyLWNhcmQubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hdXRoJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2J1dHRvbidcclxuXHJcbmNvbnN0IFVzZXJBdmF0YXIgPSAoeyB1c2VybmFtZSB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXJJbmZvLCBzZXRVc2VySW5mb10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IHsgaXNBZG1pbiB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuICBjb25zdCB7IGF1dGhBeGlvcyB9ID0gdXNlQ29udGV4dChGZXRjaENvbnRleHQpXHJcblxyXG4gIGNvbnN0IGJsb2NrVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGF1dGhBeGlvc1xyXG4gICAgICAucHV0KGAvYmxvY2tlZC8ke3F1ZXN0aW9uPy5pZH1gKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnU3VjY2Vzc2Z1bGx5IEJsb2NrZWQnKVxyXG4gICAgICAgIGhpc3RvcnkuYmFjaygpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcignRmFpbGVkIEJsb2NrZWQnKVxyXG4gICAgICAgIGhpc3RvcnkuYmFjaygpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcHVibGljRmV0Y2guZ2V0KGAvdXNlci8ke3VzZXJuYW1lfWApXHJcbiAgICAgIHNldFVzZXJJbmZvKGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbdXNlcm5hbWVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJDYXJkfT5cclxuICAgICAgICB7IXVzZXJJbmZvID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XHJcbiAgICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJzL1t1c2VybmFtZV1cIiBhcz17YC91c2Vycy8ke3VzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3NlY3VyZS5ncmF2YXRhci5jb20vYXZhdGFyLyR7dXNlckluZm8uaWR9P3M9MTY0JmQ9aWRlbnRpY29uYH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy51c2VybmFtZX0+e3VzZXJuYW1lfTwvaDI+XHJcbiAgICAgICAgeyF1c2VySW5mbyA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxyXG4gICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlZH0+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIENyZWF0ZWQ6eycgJ31cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHtmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KG5ldyBEYXRlKHVzZXJJbmZvLmNyZWF0ZWQpLCB7XHJcbiAgICAgICAgICAgICAgICAgIGFkZFN1ZmZpeDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIHtpc0FkbWluICYmIChcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnIH19XHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtibG9ja1VzZXJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQmxvY2tcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQXZhdGFyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=