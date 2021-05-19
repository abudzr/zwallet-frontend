webpackHotUpdate_N_E("pages/auth/pin/[email]/[token]",{

/***/ "./pages/auth/pin/[email]/[token]/index.js":
/*!*************************************************!*\
  !*** ./pages/auth/pin/[email]/[token]/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pin; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../styles/pin.module.css */ "./styles/pin.module.css");
/* harmony import */ var _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-pin-input */ "./node_modules/react-pin-input/dist/bundle.js");
/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_pin_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "F:\\xampp\\htdocs\\arkademy\\Zwallet\\zwallet\\pages\\auth\\pin\\[email]\\[token]\\index.js",
    _s = $RefreshSig$();








function Pin() {
  _s();

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      query = _useRouter.query;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      show = _useState2[0],
      setShow = _useState2[1];

  var handlePinChange = function handlePinChange(value) {
    setData(value);
  };

  var handleLogin = function handleLogin() {
    router.push("/auth/signin");
  };

  var handleCreatePin = function handleCreatePin(event) {
    event.preventDefault();
    var url = "".concat("http://localhost:8080/api/v1", "/users/new/create-pin/?email=").concat(query.email); // console.log(url);

    axios__WEBPACK_IMPORTED_MODULE_6___default.a.put(url, {
      pin: data
    }).then(function (res) {
      setShow(true); // router.push("/auth/signin")

      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Success", "Create Pin Success!", "success");
    }, function (err) {
      if (err) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire(" ERROR!!!", "Create pin Failed!", "error");
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['main-pin'],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['auth-pins'],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: [["pt-5"], ["ml-5"], _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["title-pin"]].join(" "),
          children: "Zwallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: [["d-flex"], _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["image-pin"]].join(" "),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['bgWave'],
            src: "/images/vector4.png",
            alt: "Picture of the author"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images/Groupphone.png",
            alt: "Picture of the author",
            width: 512.51338475284683,
            height: 536.4722634749991
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['bottom-section'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-bottom-section'],
            children: "App that Covering Banking Needs."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['subtitle-bottom-section'],
            children: "Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("aside", {
      className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["auth-pin"],
      children: [show === false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-aside'],
          children: ["Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 49
          }, this), "That You Created Yourself."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['subtitle-aside'],
          children: "Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don\u2019t tell anyone about your Zwallet account password and the PIN."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-aside-mobile'],
          children: "Create Security PIN"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['subtitle-aside-mobile'],
          children: "Create a PIN that\u2019s contain 6 digits number for security purpose in Zwallet."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['input-pin'],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_pin_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
            length: 6,
            secret: true,
            onChange: handlePinChange,
            initialValue: "",
            type: "numeric",
            inputMode: "number",
            autoSelect: true,
            regexCriteria: /^[ A-Za-z0-9_@./#&+-]*$/,
            focus: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            className: data === null ? [["mt-5 btn"], _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["btn-auth"]].join(" ") : [["mt-5 btn"], _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["btn-auth-active"]].join(" "),
            onClick: handleCreatePin,
            disabled: data && data.length !== 6 ? true : false,
            children: "Confirm"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 25
        }, this)]
      }, void 0, true), show === true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.success,
          src: "/images/success.png",
          alt: "Picture success"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-aside'],
          children: "Your PIN Was Successfully Created"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['subtitle-aside'],
          children: "Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-aside-mobile'],
          children: "PIN Successfully Created"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['subtitle-aside-mobile'],
          children: "Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            className: [["mt-5 btn"], _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["btn-auths"]].join(" "),
            onClick: handleLogin,
            children: "Login Now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 25
        }, this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, this);
}

_s(Pin, "kFVzFe9OeyMjiZwOa1WI5GYxOjo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Pin;

var _c;

$RefreshReg$(_c, "Pin");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9waW4vW2VtYWlsXS9bdG9rZW5dL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBpbiIsInVzZVJvdXRlciIsInF1ZXJ5Iiwicm91dGVyIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInNob3ciLCJzZXRTaG93IiwiaGFuZGxlUGluQ2hhbmdlIiwidmFsdWUiLCJoYW5kbGVMb2dpbiIsInB1c2giLCJoYW5kbGVDcmVhdGVQaW4iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXJsIiwicHJvY2VzcyIsImVtYWlsIiwiYXhpb3MiLCJwdXQiLCJwaW4iLCJ0aGVuIiwicmVzIiwiU3dhbCIsImZpcmUiLCJlcnIiLCJzdHlsZSIsImpvaW4iLCJsZW5ndGgiLCJzdWNjZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFBQSxtQkFDUkMsNkRBQVMsRUFERDtBQUFBLE1BQ2xCQyxLQURrQixjQUNsQkEsS0FEa0I7O0FBRTFCLE1BQU1DLE1BQU0sR0FBR0YsNkRBQVMsRUFBeEI7O0FBRjBCLGtCQUdGRyxzREFBUSxDQUFDLElBQUQsQ0FITjtBQUFBLE1BR25CQyxJQUhtQjtBQUFBLE1BR2JDLE9BSGE7O0FBQUEsbUJBSUZGLHNEQUFRLENBQUMsS0FBRCxDQUpOO0FBQUEsTUFJbkJHLElBSm1CO0FBQUEsTUFJYkMsT0FKYTs7QUFNMUIsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDL0JKLFdBQU8sQ0FBQ0ksS0FBRCxDQUFQO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCUixVQUFNLENBQUNTLElBQVAsQ0FBWSxjQUFaO0FBQ0gsR0FGRDs7QUFNQSxNQUFNQyxlQUFlLEdB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RlI7QUFHSSxhQUFHLEVBQUM7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBTUk7QUFBRyxtQkFBUyxFQUFFSCw2REFBSyxDQUFDLGFBQUQsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkosZUFPSTtBQUFHLG1CQUFTLEVBQUVBLDZEQUFLLENBQUMsZ0JBQUQsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEosZUFTSTtBQUFJLG1CQUFTLEVBQUVBLDZEQUFLLENBQUMsb0JBQUQsQ0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEosZUFVSTtBQUFHLG1CQUFTLEVBQUVBLDZEQUFLLENBQUMsdUJBQUQsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkosZUFjSTtBQUFLLG1CQUFTLEVBQUMsK0JBQWY7QUFBQSxpQ0FFSTtBQUNJLGdCQUFJLEVBQUMsUUFEVDtBQUVJLHFCQUFTLEVBQUUsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxFQUFlQSw2REFBSyxDQUFDLFdBQUQsQ0FBcEIsRUFBbUNDLElBQW5DLENBQXdDLEdBQXhDLENBRmY7QUFHSSxtQkFBTyxFQUFFakIsV0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEo7QUFBQSxzQkF2Q1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0dIOztHQW5JdUJYLEc7VUFDRkMscUQsRUFDSEEscUQ7OztLQUZLRCxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvcGluL1tlbWFpbF0vW3Rva2VuXS42MzlmZGRkZWFkZWQwMzQ4YjEyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9waW4ubW9kdWxlLmNzcydcclxuaW1wb3J0IElucHV0UGluIGZyb20gXCJyZWFjdC1waW4taW5wdXRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBpbigpIHtcclxuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBpbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldERhdGEodmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9ICgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9hdXRoL3NpZ25pblwiKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ3JlYXRlUGluID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5hcGl9L3VzZXJzL25ldy9jcmVhdGUtcGluLz9lbWFpbD0ke3F1ZXJ5LmVtYWlsfWBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICAgIGF4aW9zLnB1dCh1cmwsIHtcclxuICAgICAgICAgICAgcGluOiBkYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2hvdyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goXCIvYXV0aC9zaWduaW5cIilcclxuICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcIlN1Y2Nlc3NcIiwgXCJDcmVhdGUgUGluIFN1Y2Nlc3MhXCIsIFwic3VjY2Vzc1wiKTtcclxuXHJcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXCIgRVJST1IhISFcIiwgXCJDcmVhdGUgcGluIEZhaWxlZCFcIiwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVbJ21haW4tcGluJ119PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlWydhdXRoLXBpbnMnXX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e1tbXCJwdC01XCJdLCBbXCJtbC01XCJdLCBzdHlsZVtcInRpdGxlLXBpblwiXV0uam9pbihcIiBcIil9Plp3YWxsZXQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbW1wiZC1mbGV4XCJdLCBzdHlsZVtcImltYWdlLXBpblwiXV0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlWydiZ1dhdmUnXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvdmVjdG9yNC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9Hcm91cHBob25lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUxMi41MTMzODQ3NTI4NDY4M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTM2LjQ3MjI2MzQ3NDk5OTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydib3R0b20tc2VjdGlvbiddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGl0bGUtYm90dG9tLXNlY3Rpb24nXX0+QXBwIHRoYXQgQ292ZXJpbmcgQmFua2luZyBOZWVkcy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3N1YnRpdGxlLWJvdHRvbS1zZWN0aW9uJ119Plp3YWxsZXQgaXMgYW4gYXBwbGljYXRpb24gdGhhdCBmb2N1c3NpbmcgaW4gYmFua2luZyBuZWVkcyBmb3IgYWxsIHVzZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluIHRoZSB3b3JsZC4gQWx3YXlzIHVwZGF0ZWQgYW5kIGFsd2F5cyBmb2xsb3dpbmcgd29ybGQgdHJlbmRzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA1MDAwKyB1c2VycyByZWdpc3RlcmVkIGluIFp3YWxsZXQgZXZlcnlkYXkgd2l0aCB3b3JsZHdpZGVcclxuICAgICAgICAgICAgICAgIHVzZXJzIGNvdmVyYWdlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e3N0eWxlW1wiYXV0aC1waW5cIl19PlxyXG5cclxuICAgICAgICAgICAgICAgIHtzaG93ID09PSBmYWxzZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGl0bGUtYXNpZGUnXX0+U2VjdXJlIFlvdXIgQWNjb3VudCwgWW91ciBXYWxsZXQsXHJcbiAgICAgICAgICAgICAgICBhbmQgWW91ciBEYXRhIFdpdGggNiBEaWdpdHMgUElOIDxiciAvPlRoYXQgWW91IENyZWF0ZWQgWW91cnNlbGYuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydzdWJ0aXRsZS1hc2lkZSddfT5DcmVhdGUgNiBkaWdpdHMgcGluIHRvIHNlY3VyZSBhbGwgeW91ciBtb25leSBhbmQgeW91ciBkYXRhIGluIFp3YWxsZXQgYXBwLiBLZWVwIGl0IHNlY3JldCBhbmQgZG9u4oCZdCB0ZWxsIGFueW9uZSBhYm91dCB5b3VyIFp3YWxsZXQgYWNjb3VudCBwYXNzd29yZCBhbmQgdGhlIFBJTi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlWyd0aXRsZS1hc2lkZS1tb2JpbGUnXX0+Q3JlYXRlIFNlY3VyaXR5IFBJTjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3N1YnRpdGxlLWFzaWRlLW1vYmlsZSddfT5DcmVhdGUgYSBQSU4gdGhhdOKAmXMgY29udGFpbiA2IGRpZ2l0cyBudW1iZXIgZm9yIHNlY3VyaXR5IHB1cnBvc2UgaW4gWndhbGxldC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBlbmQgbW9iaWxlICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydpbnB1dC1waW4nXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRQaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg9ezZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjcmV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBpbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1lcmljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dE1vZGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9TZWxlY3Q9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXhDcml0ZXJpYT17L15bIEEtWmEtejAtOV9ALi8jJistXSokL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtkYXRhID09PSBudWxsID8gW1tcIm10LTUgYnRuXCJdLCBzdHlsZVtcImJ0bi1hdXRoXCJdXS5qb2luKFwiIFwiKSA6IFtbXCJtdC01IGJ0blwiXSwgc3R5bGVbXCJidG4tYXV0aC1hY3RpdmVcIl1dLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZVBpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGF0YSAmJiBkYXRhLmxlbmd0aCAhPT0gNiA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge3Nob3cgPT09IHRydWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuc3VjY2Vzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvc3VjY2Vzcy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGl0bGUtYXNpZGUnXX0+WW91ciBQSU4gV2FzIFN1Y2Nlc3NmdWxseSBDcmVhdGVkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydzdWJ0aXRsZS1hc2lkZSddfT5Zb3VyIFBJTiB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYW5kIHlvdSBjYW4gbm93IGFjY2VzcyBhbGwgdGhlIGZlYXR1cmVzIGluIFp3YWxsZXQuIExvZ2luIHRvIHlvdXIgbmV3IGFjY291bnQgYW5kIHN0YXJ0IGV4cGxvcmluZyE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlWyd0aXRsZS1hc2lkZS1tb2JpbGUnXX0+UElOIFN1Y2Nlc3NmdWxseSBDcmVhdGVkPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsnc3VidGl0bGUtYXNpZGUtbW9iaWxlJ119PllvdXIgUElOIHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZCBhbmQgeW91IGNhbiBub3cgYWNjZXNzIGFsbCB0aGUgZmVhdHVyZXMgaW4gWndhbGxldC4gTG9naW4gdG8geW91ciBuZXcgYWNjb3VudCBhbmQgc3RhcnQgZXhwbG9yaW5nITwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIGVuZCBtb2JpbGUgKi99XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJtdC01IGJ0blwiXSwgc3R5bGVbXCJidG4tYXV0aHNcIl1dLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luIE5vd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICA8L21haW4gPlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9