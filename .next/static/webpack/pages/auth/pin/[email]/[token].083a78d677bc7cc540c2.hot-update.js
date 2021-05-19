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

  console.log(query.email);
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
          lineNumber: 49,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: [["d-flex"], _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["image-pin"]].join(" "),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['bgWave'],
            src: "/images/vector4.png",
            alt: "Picture of the author"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images/Groupphone.png",
            alt: "Picture of the author",
            width: 512.51338475284683,
            height: 536.4722634749991
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['bottom-section'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-bottom-section'],
            children: "App that Covering Banking Needs."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['subtitle-bottom-section'],
            children: "Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("aside", {
      className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["auth-pin"],
      children: [show === false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-aside'],
          children: ["Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 49
          }, this), "That You Created Yourself."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['subtitle-aside'],
          children: "Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don\u2019t tell anyone about your Zwallet account password and the PIN."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-aside-mobile'],
          children: "Create Security PIN"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['subtitle-aside-mobile'],
          children: "Create a PIN that\u2019s contain 6 digits number for security purpose in Zwallet."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
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
            lineNumber: 85,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            className: data === null ? [["mt-5 btn"], _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["btn-auth"]].join(" ") : [["mt-5 btn"], _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["btn-auth-active"]].join(" "),
            onClick: handleCreatePin,
            children: "Confirm"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
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
      lineNumber: 72,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9waW4vW2VtYWlsXS9bdG9rZW5dL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBpbiIsInVzZVJvdXRlciIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImVtYWlsIiwicm91dGVyIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInNob3ciLCJzZXRTaG93IiwiaGFuZGxlUGluQ2hhbmdlIiwidmFsdWUiLCJoYW5kbGVMb2dpbiIsInB1c2giLCJoYW5kbGVDcmVhdGVQaW4iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXJsIiwicHJvY2VzcyIsImF4aW9zIiwicHV0IiwicGluIiwidGhlbiIsInJlcyIsIlN3YWwiLCJmaXJlIiwiZXJyIiwic3R5bGUiLCJqb2luIiwic3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQUEsbUJBQ1JDLDZEQUFTLEVBREQ7QUFBQSxNQUNsQkMsS0FEa0IsY0FDbEJBLEtBRGtCOztBQUUxQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csS0FBbEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdMLDZEQUFTLEVBQXhCOztBQUgwQixrQkFJRk0sc0RBQVEsQ0FBQyxJQUFELENBSk47QUFBQSxNQUluQkMsSUFKbUI7QUFBQSxNQUliQyxPQUphOztBQUFBLG1CQUtGRixzREFBUSxDQUFDLEtBQUQsQ0FMTjtBQUFBLE1BS25CRyxJQUxtQjtBQUFBLE1BS2JDLE9BTGE7O0FBTzFCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQy9CSixXQUFPLENBQUNJLEtBQUQsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QlIsVUFB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QTtBQUFBO0FBQUEsZ0JBREosZUFNSTtBQUFHLG1CQUFTLEVBQUVGLDZEQUFLLENBQUMsYUFBRCxDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSixlQU9JO0FBQUcsbUJBQVMsRUFBRUEsNkRBQUssQ0FBQyxnQkFBRCxDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSixlQVNJO0FBQUksbUJBQVMsRUFBRUEsNkRBQUssQ0FBQyxvQkFBRCxDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUSixlQVVJO0FBQUcsbUJBQVMsRUFBRUEsNkRBQUssQ0FBQyx1QkFBRCxDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSixlQWNJO0FBQUssbUJBQVMsRUFBQywrQkFBZjtBQUFBLGlDQUVJO0FBQ0ksZ0JBQUksRUFBQyxRQURUO0FBRUkscUJBQVMsRUFBRSxDQUFDLENBQUMsVUFBRCxDQUFELEVBQWVBLDZEQUFLLENBQUMsV0FBRCxDQUFwQixFQUFtQ0MsSUFBbkMsQ0FBd0MsR0FBeEMsQ0FGZjtBQUdJLG1CQUFPLEVBQUVoQixXQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkSjtBQUFBLHNCQXRDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUErRkg7O0dBbkl1QmQsRztVQUNGQyxxRCxFQUVIQSxxRDs7O0tBSEtELEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9waW4vW2VtYWlsXS9bdG9rZW5dLjA4M2E3OGQ2NzdiYzdjYzU0MGMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3Bpbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgSW5wdXRQaW4gZnJvbSBcInJlYWN0LXBpbi1pbnB1dFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGluKCkge1xyXG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zb2xlLmxvZyhxdWVyeS5lbWFpbCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlUGluQ2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YSh2YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ2luID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2F1dGgvc2lnbmluXCIpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDcmVhdGVQaW4gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52LmFwaX0vdXNlcnMvbmV3L2NyZWF0ZS1waW4vP2VtYWlsPSR7cXVlcnkuZW1haWx9YFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgICAgYXhpb3MucHV0KHVybCwge1xyXG4gICAgICAgICAgICBwaW46IGRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93KHRydWUpXHJcbiAgICAgICAgICAgICAgICAvLyByb3V0ZXIucHVzaChcIi9hdXRoL3NpZ25pblwiKVxyXG4gICAgICAgICAgICAgICAgU3dhbC5maXJlKFwiU3VjY2Vzc1wiLCBcIkNyZWF0ZSBQaW4gU3VjY2VzcyFcIiwgXCJzdWNjZXNzXCIpO1xyXG5cclxuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcIiBFUlJPUiEhIVwiLCBcIkNyZWF0ZSBwaW4gRmFpbGVkIVwiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZVsnbWFpbi1waW4nXX0+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVbJ2F1dGgtcGlucyddfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17W1tcInB0LTVcIl0sIFtcIm1sLTVcIl0sIHN0eWxlW1widGl0bGUtcGluXCJdXS5qb2luKFwiIFwiKX0+WndhbGxldDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tbXCJkLWZsZXhcIl0sIHN0eWxlW1wiaW1hZ2UtcGluXCJdXS5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVbJ2JnV2F2ZSddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy92ZWN0b3I0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL0dyb3VwcGhvbmUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTEyLjUxMzM4NDc1Mjg0NjgzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MzYuNDcyMjYzNDc0OTk5MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2JvdHRvbS1zZWN0aW9uJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0aXRsZS1ib3R0b20tc2VjdGlvbiddfT5BcHAgdGhhdCBDb3ZlcmluZyBCYW5raW5nIE5lZWRzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsnc3VidGl0bGUtYm90dG9tLXNlY3Rpb24nXX0+WndhbGxldCBpcyBhbiBhcHBsaWNhdGlvbiB0aGF0IGZvY3Vzc2luZyBpbiBiYW5raW5nIG5lZWRzIGZvciBhbGwgdXNlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW4gdGhlIHdvcmxkLiBBbHdheXMgdXBkYXRlZCBhbmQgYWx3YXlzIGZvbGxvd2luZyB3b3JsZCB0cmVuZHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDUwMDArIHVzZXJzIHJlZ2lzdGVyZWQgaW4gWndhbGxldCBldmVyeWRheSB3aXRoIHdvcmxkd2lkZVxyXG4gICAgICAgICAgICAgICAgdXNlcnMgY292ZXJhZ2UuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT17c3R5bGVbXCJhdXRoLXBpblwiXX0+XHJcblxyXG4gICAgICAgICAgICAgICAge3Nob3cgPT09IGZhbHNlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0aXRsZS1hc2lkZSddfT5TZWN1cmUgWW91ciBBY2NvdW50LCBZb3VyIFdhbGxldCxcclxuICAgICAgICAgICAgICAgIGFuZCBZb3VyIERhdGEgV2l0aCA2IERpZ2l0cyBQSU4gPGJyIC8+VGhhdCBZb3UgQ3JlYXRlZCBZb3Vyc2VsZi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3N1YnRpdGxlLWFzaWRlJ119PkNyZWF0ZSA2IGRpZ2l0cyBwaW4gdG8gc2VjdXJlIGFsbCB5b3VyIG1vbmV5IGFuZCB5b3VyIGRhdGEgaW4gWndhbGxldCBhcHAuIEtlZXAgaXQgc2VjcmV0IGFuZCBkb27igJl0IHRlbGwgYW55b25lIGFib3V0IHlvdXIgWndhbGxldCBhY2NvdW50IHBhc3N3b3JkIGFuZCB0aGUgUElOLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLWFzaWRlLW1vYmlsZSddfT5DcmVhdGUgU2VjdXJpdHkgUElOPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsnc3VidGl0bGUtYXNpZGUtbW9iaWxlJ119PkNyZWF0ZSBhIFBJTiB0aGF04oCZcyBjb250YWluIDYgZGlnaXRzIG51bWJlciBmb3Igc2VjdXJpdHkgcHVycG9zZSBpbiBad2FsbGV0LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIGVuZCBtb2JpbGUgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2lucHV0LXBpbiddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFBpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aD17Nn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNyZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGluQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWVyaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0TW9kZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1NlbGVjdD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdleENyaXRlcmlhPXsvXlsgQS1aYS16MC05X0AuLyMmKy1dKiQvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2RhdGEgPT09IG51bGwgPyBbW1wibXQtNSBidG5cIl0sIHN0eWxlW1wiYnRuLWF1dGhcIl1dLmpvaW4oXCIgXCIpIDogW1tcIm10LTUgYnRuXCJdLCBzdHlsZVtcImJ0bi1hdXRoLWFjdGl2ZVwiXV0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ3JlYXRlUGlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7c2hvdyA9PT0gdHJ1ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5zdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9zdWNjZXNzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIHN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0aXRsZS1hc2lkZSddfT5Zb3VyIFBJTiBXYXMgU3VjY2Vzc2Z1bGx5IENyZWF0ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3N1YnRpdGxlLWFzaWRlJ119PllvdXIgUElOIHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZCBhbmQgeW91IGNhbiBub3cgYWNjZXNzIGFsbCB0aGUgZmVhdHVyZXMgaW4gWndhbGxldC4gTG9naW4gdG8geW91ciBuZXcgYWNjb3VudCBhbmQgc3RhcnQgZXhwbG9yaW5nITwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLWFzaWRlLW1vYmlsZSddfT5QSU4gU3VjY2Vzc2Z1bGx5IENyZWF0ZWQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydzdWJ0aXRsZS1hc2lkZS1tb2JpbGUnXX0+WW91ciBQSU4gd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIGFuZCB5b3UgY2FuIG5vdyBhY2Nlc3MgYWxsIHRoZSBmZWF0dXJlcyBpbiBad2FsbGV0LiBMb2dpbiB0byB5b3VyIG5ldyBhY2NvdW50IGFuZCBzdGFydCBleHBsb3JpbmchPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogZW5kIG1vYmlsZSAqL31cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1tcIm10LTUgYnRuXCJdLCBzdHlsZVtcImJ0bi1hdXRoc1wiXV0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9naW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gTm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIDwvbWFpbiA+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=