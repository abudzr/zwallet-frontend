webpackHotUpdate_N_E("pages/auth/signin",{

/***/ "./pages/auth/signin.js":
/*!******************************!*\
  !*** ./pages/auth/signin.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signin; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/signin.module.css */ "./styles/signin.module.css");
/* harmony import */ var _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "F:\\xampp\\htdocs\\arkademy\\Zwallet\\zwallet\\pages\\auth\\signin.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function Signin() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    email: "",
    password: ""
  }),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isPasswordShow = _useState2[0],
      setisPasswordShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      checkPin = _useState3[0],
      setCheckPin = _useState3[1];

  var tooglePasswordVisibility = function tooglePasswordVisibility() {
    setisPasswordShow(!isPasswordShow);
  };

  var handleFormChange = function handleFormChange(event) {
    var dataNew = _objectSpread({}, data);

    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  var handleLogin = function handleLogin(event) {
    event.preventDefault();
    var url = axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("".concat("http://localhost:8080/api/v1", "/users/auth/login"), data).then(function (res) {
      localStorage.setItem("id", res.data.data.id); // localStorage.setItem("pin", res.data.data.pin)

      localStorage.setItem("token", res.data.data.token);

      if (res.data.data.role == 2) {
        router.push('/home');
      }
    })["catch"](function (err) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire("Something Error!", err.message, "error");
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (localStorage.getItem("token")) {
      router.push("/home");
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['main-login'],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['auth-logins'],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: [["pt-5"], ["ml-5"], _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["title-login"]].join(" "),
          children: "Zwallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: [["d-flex"], _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["image-login"]].join(" "),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['bgWave'],
            src: "/images/vector4.png",
            alt: "Picture of the author"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images/Groupphone.png",
            alt: "Picture of the author",
            width: 512.51338475284683,
            height: 536.4722634749991
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['bottom-section'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['title-bottom-section'],
            children: "App that Covering Banking Needs."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['subtitle-bottom-section'],
            children: "Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("aside", {
      className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["auth-login"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['title-aside'],
        children: "Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['subtitle-aside'],
        children: "Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['title-aside-mobile'],
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['subtitle-aside-mobile'],
        children: "Login to your existing account to access all the features in Zwallet."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: [["mt-5"], _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["form-aside"]].join(" "),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEnvelope"],
            className: data.email === "" ? _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.iconEmail : _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["iconLogin-active"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "email",
            className: [["form-control mt-1"], _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["form-control"]].join(" "),
            name: "email",
            id: "email",
            placeholder: "Enter your e-mail",
            onChange: handleFormChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faLock"],
            className: data.password === "" ? _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.iconPassword : _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["iconLogin-active"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: isPasswordShow ? "text" : "password",
            className: [["form-control mt-1"], _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["form-control"]].join(" "),
            name: "password",
            id: "password",
            placeholder: "Enter your password",
            onChange: handleFormChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
            icon: isPasswordShow ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEyeSlash"],
            className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.iconPass,
            onClick: tooglePasswordVisibility
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['forgot-pass'],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/auth/forgot-password",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "Forgot Password?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            className: data.email === "" && data.password === "" ? [["mt-5 btn"], _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["btn-auth"]].join(" ") : [["mt-5 btn"], _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["btn-auth-active"]].join(" "),
            disabled: data.email === "" && data.password === "" ? true : false,
            onClick: handleLogin,
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['dont-haveacc'],
          children: ["Don\u2019t have an account? Let\u2019s", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/auth/signup",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: " Sign Up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }, this);
}

_s(Signin, "MSm7gdsE2N1SZe5NHhAcsagDIuA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Signin;

var _c;

$RefreshReg$(_c, "Signin");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9zaWduaW4uanMiXSwibmFtZXMiOlsiU2lnbmluIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZGF0YSIsInNldERhdGEiLCJpc1Bhc3N3b3JkU2hvdyIsInNldGlzUGFzc3dvcmRTaG93IiwiY2hlY2tQaW4iLCJzZXRDaGVja1BpbiIsInRvb2dsZVBhc3N3b3JkVmlzaWJpbGl0eSIsImhhbmRsZUZvcm1DaGFuZ2UiLCJldmVudCIsImRhdGFOZXciLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVMb2dpbiIsInByZXZlbnREZWZhdWx0IiwidXJsIiwiYXhpb3MiLCJwb3N0IiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiaWQiLCJ0b2tlbiIsInJvbGUiLCJwdXNoIiwiZXJyIiwiU3dhbCIsImZpcmUiLCJtZXNzYWdlIiwidXNlRWZmZWN0IiwiZ2V0SXRlbSIsInN0eWxlIiwiam9pbiIsImZhRW52ZWxvcGUiLCJpY29uRW1haWwiLCJmYUxvY2siLCJpY29uUGFzc3dvcmQiLCJmYUV5ZSIsImZhRXllU2xhc2giLCJpY29uUGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFENkIsa0JBRUxDLHNEQUFRLENBQUM7QUFDN0JDLFNBQUssRUFBRSxFQURzQjtBQUU3QkMsWUFBUSxFQUFFO0FBRm1CLEdBQUQsQ0FGSDtBQUFBLE1BRXRCQyxJQUZzQjtBQUFBLE1BRWhCQyxPQUZnQjs7QUFBQSxtQkFNZUosc0RBQVEsQ0FBQyxLQUFELENBTnZCO0FBQUEsTUFNdEJLLGNBTnNC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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0dIOztHQXZJdUJ2QyxNO1VBQ0xFLHFEOzs7S0FES0YsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL3NpZ25pbi40YWU4ZWFmYzE4MDBiNWRiM2QzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uL3N0eWxlcy9zaWduaW4ubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgZmFFbnZlbG9wZSwgZmFMb2NrLCBmYUV5ZSwgZmFFeWVTbGFzaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25pbigpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtpc1Bhc3N3b3JkU2hvdywgc2V0aXNQYXNzd29yZFNob3ddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbY2hlY2tQaW4sIHNldENoZWNrUGluXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3QgdG9vZ2xlUGFzc3dvcmRWaXNpYmlsaXR5ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldGlzUGFzc3dvcmRTaG93KCFpc1Bhc3N3b3JkU2hvdylcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhTmV3ID0geyAuLi5kYXRhIH07XHJcbiAgICAgICAgZGF0YU5ld1tldmVudC50YXJnZXQubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0RGF0YShkYXRhTmV3KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9naW4gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuYXBpfS91c2Vycy9hdXRoL2xvZ2luYCwgZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaWRcIiwgcmVzLmRhdGEuZGF0YS5pZClcclxuICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGluXCIsIHJlcy5kYXRhLmRhdGEucGluKVxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCByZXMuZGF0YS5kYXRhLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEucm9sZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9ob21lJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcIlNvbWV0aGluZyBFcnJvciFcIiwgZXJyLm1lc3NhZ2UsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSkge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9ob21lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVbJ21haW4tbG9naW4nXX0+XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlWydhdXRoLWxvZ2lucyddfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17W1tcInB0LTVcIl0sIFtcIm1sLTVcIl0sIHN0eWxlW1widGl0bGUtbG9naW5cIl1dLmpvaW4oXCIgXCIpfT5ad2FsbGV0PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W1tcImQtZmxleFwiXSwgc3R5bGVbXCJpbWFnZS1sb2dpblwiXV0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlWydiZ1dhdmUnXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvdmVjdG9yNC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9Hcm91cHBob25lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUxMi41MTMzODQ3NTI4NDY4M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTM2LjQ3MjI2MzQ3NDk5OTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydib3R0b20tc2VjdGlvbiddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGl0bGUtYm90dG9tLXNlY3Rpb24nXX0+QXBwIHRoYXQgQ292ZXJpbmcgQmFua2luZyBOZWVkcy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3N1YnRpdGxlLWJvdHRvbS1zZWN0aW9uJ119Plp3YWxsZXQgaXMgYW4gYXBwbGljYXRpb24gdGhhdCBmb2N1c3NpbmcgaW4gYmFua2luZyBuZWVkcyBmb3IgYWxsIHVzZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluIHRoZSB3b3JsZC4gQWx3YXlzIHVwZGF0ZWQgYW5kIGFsd2F5cyBmb2xsb3dpbmcgd29ybGQgdHJlbmRzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA1MDAwKyB1c2VycyByZWdpc3RlcmVkIGluIFp3YWxsZXQgZXZlcnlkYXkgd2l0aCB3b3JsZHdpZGVcclxuICAgICAgICAgICAgICAgIHVzZXJzIGNvdmVyYWdlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e3N0eWxlW1wiYXV0aC1sb2dpblwiXX0+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0aXRsZS1hc2lkZSddfT5TdGFydCBBY2Nlc3NpbmcgQmFua2luZyBOZWVkc1xyXG4gICAgICAgICAgICAgICAgV2l0aCBBbGwgRGV2aWNlcyBhbmQgQWxsIFBsYXRmb3Jtc1xyXG4gICAgICAgICAgICAgICAgV2l0aCAzMC4wMDArIFVzZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsnc3VidGl0bGUtYXNpZGUnXX0+VHJhbnNmZXJpbmcgbW9uZXkgaXMgZWFzc2llciB0aGFuIGV2ZXIsIHlvdSBjYW4gYWNjZXNzIFp3YWxsZXQgd2hlcmV2ZXIgeW91IGFyZS4gRGVza3RvcCwgbGFwdG9wLCBtb2JpbGUgcGhvbmU/IHdlIGNvdmVyIGFsbCBvZiB0aGF0IGZvciB5b3UhPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZVsndGl0bGUtYXNpZGUtbW9iaWxlJ119PkxvZ2luPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3N1YnRpdGxlLWFzaWRlLW1vYmlsZSddfT5Mb2dpbiB0byB5b3VyIGV4aXN0aW5nIGFjY291bnQgdG8gYWNjZXNzXHJcbmFsbCB0aGUgZmVhdHVyZXMgaW4gWndhbGxldC48L3A+XHJcbiAgICAgICAgICAgICAgICB7LyogZW5kIG1vYmlsZSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e1tbXCJtdC01XCJdLCBzdHlsZVtcImZvcm0tYXNpZGVcIl1dLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUVudmVsb3BlfSBjbGFzc05hbWU9e2RhdGEuZW1haWwgPT09IFwiXCIgPyBzdHlsZS5pY29uRW1haWwgOiBzdHlsZVtcImljb25Mb2dpbi1hY3RpdmVcIl19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1tcImZvcm0tY29udHJvbCBtdC0xXCJdLCBzdHlsZVtcImZvcm0tY29udHJvbFwiXV0uam9pbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlLW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxvY2t9IGNsYXNzTmFtZT17ZGF0YS5wYXNzd29yZCA9PT0gXCJcIiA/IHN0eWxlLmljb25QYXNzd29yZCA6IHN0eWxlW1wiaWNvbkxvZ2luLWFjdGl2ZVwiXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsoaXNQYXNzd29yZFNob3cpID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJmb3JtLWNvbnRyb2wgbXQtMVwiXSwgc3R5bGVbXCJmb3JtLWNvbnRyb2xcIl1dLmpvaW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17aXNQYXNzd29yZFNob3cgPyBmYUV5ZSA6IGZhRXllU2xhc2h9IGNsYXNzTmFtZT17c3R5bGUuaWNvblBhc3N9IG9uQ2xpY2s9e3Rvb2dsZVBhc3N3b3JkVmlzaWJpbGl0eX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2ZvcmdvdC1wYXNzJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvZm9yZ290LXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5Gb3Jnb3QgUGFzc3dvcmQ/PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2RhdGEuZW1haWwgPT09IFwiXCIgJiYgZGF0YS5wYXNzd29yZCA9PT0gXCJcIiA/IFtbXCJtdC01IGJ0blwiXSwgc3R5bGVbXCJidG4tYXV0aFwiXV0uam9pbihcIiBcIikgOiBbW1wibXQtNSBidG5cIl0sIHN0eWxlW1wiYnRuLWF1dGgtYWN0aXZlXCJdXS5qb2luKFwiIFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkYXRhLmVtYWlsID09PSBcIlwiICYmIGRhdGEucGFzc3dvcmQgPT09IFwiXCIgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydkb250LWhhdmVhY2MnXX0+RG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/IExldOKAmXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL3NpZ251cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+IFNpZ24gVXA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICA8L21haW4gPlxyXG4gICAgKTtcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==