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
      console.log(err);
      sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire("Something Error!", err.data.data.message, "error");
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
          lineNumber: 55,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: [["d-flex"], _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["image-login"]].join(" "),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['bgWave'],
            src: "/images/vector4.png",
            alt: "Picture of the author"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images/Groupphone.png",
            alt: "Picture of the author",
            width: 512.51338475284683,
            height: 536.4722634749991
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['bottom-section'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['title-bottom-section'],
            children: "App that Covering Banking Needs."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['subtitle-bottom-section'],
            children: "Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("aside", {
      className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["auth-login"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['title-aside'],
        children: "Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['subtitle-aside'],
        children: "Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['title-aside-mobile'],
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['subtitle-aside-mobile'],
        children: "Login to your existing account to access all the features in Zwallet."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
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
            lineNumber: 92,
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
            lineNumber: 93,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faLock"],
            className: data.password === "" ? _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.iconPassword : _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["iconLogin-active"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
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
            lineNumber: 106,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
            icon: isPasswordShow ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEyeSlash"],
            className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.iconPass,
            onClick: tooglePasswordVisibility
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['forgot-pass'],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/auth/forgot-password",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "Forgot Password?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
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
            lineNumber: 124,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['dont-haveacc'],
          children: ["Don\u2019t have an account? Let\u2019s", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/auth/signup",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: " Sign Up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9zaWduaW4uanMiXSwibmFtZXMiOlsiU2lnbmluIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZGF0YSIsInNldERhdGEiLCJpc1Bhc3N3b3JkU2hvdyIsInNldGlzUGFzc3dvcmRTaG93IiwiY2hlY2tQaW4iLCJzZXRDaGVja1BpbiIsInRvb2dsZVBhc3N3b3JkVmlzaWJpbGl0eSIsImhhbmRsZUZvcm1DaGFuZ2UiLCJldmVudCIsImRhdGFOZXciLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVMb2dpbiIsInByZXZlbnREZWZhdWx0IiwidXJsIiwiYXhpb3MiLCJwb3N0IiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiaWQiLCJ0b2tlbiIsInJvbGUiLCJwdXNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIlN3YWwiLCJmaXJlIiwibWVzc2FnZSIsInVzZUVmZmVjdCIsImdldEl0ZW0iLCJzdHlsZSIsImpvaW4iLCJmYUVudmVsb3BlIiwiaWNvbkVtYWlsIiwiZmFMb2NrIiwiaWNvblBhc3N3b3JkIiwiZmFFeWUiLCJmYUV5ZVNsYXNoIiwiaWNvblBhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRDZCLGtCQUVMQyxzREFBUSxDQUFDO0FBQzdCQyxTQUFLLEVBQUUsRUFEc0I7QUFFN0JDLFlBQVEsRUFBRTtBQUZtQixHQUFELENBRkg7QUFBQSxNQUV0QkMsSUFGc0I7QUFBQSxNQUVoQkMsT0FGZ0I7O0FBQUEsbUJBTWVKLHNEQUFRLENBQUMsS0FBRCxDQU52QjtB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QVg7QUFBQSxtQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnR0g7O0dBeEl1QnpDLE07VUFDTEUscUQ7OztLQURLRixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvc2lnbmluLmFhMGIzN2FjZDVhMDI0M2FhMmY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL3NpZ25pbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBmYUVudmVsb3BlLCBmYUxvY2ssIGZhRXllLCBmYUV5ZVNsYXNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbmluKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2lzUGFzc3dvcmRTaG93LCBzZXRpc1Bhc3N3b3JkU2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtjaGVja1Bpbiwgc2V0Q2hlY2tQaW5dID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICBjb25zdCB0b29nbGVQYXNzd29yZFZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0aXNQYXNzd29yZFNob3coIWlzUGFzc3dvcmRTaG93KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlRm9ybUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFOZXcgPSB7IC4uLmRhdGEgfTtcclxuICAgICAgICBkYXRhTmV3W2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXREYXRhKGRhdGFOZXcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5hcGl9L3VzZXJzL2F1dGgvbG9naW5gLCBkYXRhKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpZFwiLCByZXMuZGF0YS5kYXRhLmlkKVxyXG4gICAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwaW5cIiwgcmVzLmRhdGEuZGF0YS5waW4pXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlcy5kYXRhLmRhdGEudG9rZW4pXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5yb2xlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcIlNvbWV0aGluZyBFcnJvciFcIiwgZXJyLmRhdGEuZGF0YS5tZXNzYWdlLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvaG9tZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlWydtYWluLWxvZ2luJ119PlxyXG5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZVsnYXV0aC1sb2dpbnMnXX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e1tbXCJwdC01XCJdLCBbXCJtbC01XCJdLCBzdHlsZVtcInRpdGxlLWxvZ2luXCJdXS5qb2luKFwiIFwiKX0+WndhbGxldDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tbXCJkLWZsZXhcIl0sIHN0eWxlW1wiaW1hZ2UtbG9naW5cIl1dLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZVsnYmdXYXZlJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3ZlY3RvcjQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvR3JvdXBwaG9uZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MTIuNTEzMzg0NzUyODQ2ODN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUzNi40NzIyNjM0NzQ5OTkxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnYm90dG9tLXNlY3Rpb24nXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLWJvdHRvbS1zZWN0aW9uJ119PkFwcCB0aGF0IENvdmVyaW5nIEJhbmtpbmcgTmVlZHMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydzdWJ0aXRsZS1ib3R0b20tc2VjdGlvbiddfT5ad2FsbGV0IGlzIGFuIGFwcGxpY2F0aW9uIHRoYXQgZm9jdXNzaW5nIGluIGJhbmtpbmcgbmVlZHMgZm9yIGFsbCB1c2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbiB0aGUgd29ybGQuIEFsd2F5cyB1cGRhdGVkIGFuZCBhbHdheXMgZm9sbG93aW5nIHdvcmxkIHRyZW5kcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgNTAwMCsgdXNlcnMgcmVnaXN0ZXJlZCBpbiBad2FsbGV0IGV2ZXJ5ZGF5IHdpdGggd29ybGR3aWRlXHJcbiAgICAgICAgICAgICAgICB1c2VycyBjb3ZlcmFnZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXtzdHlsZVtcImF1dGgtbG9naW5cIl19PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGl0bGUtYXNpZGUnXX0+U3RhcnQgQWNjZXNzaW5nIEJhbmtpbmcgTmVlZHNcclxuICAgICAgICAgICAgICAgIFdpdGggQWxsIERldmljZXMgYW5kIEFsbCBQbGF0Zm9ybXNcclxuICAgICAgICAgICAgICAgIFdpdGggMzAuMDAwKyBVc2VyczwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3N1YnRpdGxlLWFzaWRlJ119PlRyYW5zZmVyaW5nIG1vbmV5IGlzIGVhc3NpZXIgdGhhbiBldmVyLCB5b3UgY2FuIGFjY2VzcyBad2FsbGV0IHdoZXJldmVyIHlvdSBhcmUuIERlc2t0b3AsIGxhcHRvcCwgbW9iaWxlIHBob25lPyB3ZSBjb3ZlciBhbGwgb2YgdGhhdCBmb3IgeW91ITwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogbW9iaWxlICovfVxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLWFzaWRlLW1vYmlsZSddfT5Mb2dpbjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydzdWJ0aXRsZS1hc2lkZS1tb2JpbGUnXX0+TG9naW4gdG8geW91ciBleGlzdGluZyBhY2NvdW50IHRvIGFjY2Vzc1xyXG5hbGwgdGhlIGZlYXR1cmVzIGluIFp3YWxsZXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgey8qIGVuZCBtb2JpbGUgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtbW1wibXQtNVwiXSwgc3R5bGVbXCJmb3JtLWFzaWRlXCJdXS5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFbnZlbG9wZX0gY2xhc3NOYW1lPXtkYXRhLmVtYWlsID09PSBcIlwiID8gc3R5bGUuaWNvbkVtYWlsIDogc3R5bGVbXCJpY29uTG9naW4tYWN0aXZlXCJdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJmb3JtLWNvbnRyb2wgbXQtMVwiXSwgc3R5bGVbXCJmb3JtLWNvbnRyb2xcIl1dLmpvaW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZS1tYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMb2NrfSBjbGFzc05hbWU9e2RhdGEucGFzc3dvcmQgPT09IFwiXCIgPyBzdHlsZS5pY29uUGFzc3dvcmQgOiBzdHlsZVtcImljb25Mb2dpbi1hY3RpdmVcIl19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17KGlzUGFzc3dvcmRTaG93KSA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbW1wiZm9ybS1jb250cm9sIG10LTFcIl0sIHN0eWxlW1wiZm9ybS1jb250cm9sXCJdXS5qb2luKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2lzUGFzc3dvcmRTaG93ID8gZmFFeWUgOiBmYUV5ZVNsYXNofSBjbGFzc05hbWU9e3N0eWxlLmljb25QYXNzfSBvbkNsaWNrPXt0b29nbGVQYXNzd29yZFZpc2liaWxpdHl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydmb3Jnb3QtcGFzcyddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL2ZvcmdvdC1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+Rm9yZ290IFBhc3N3b3JkPzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtkYXRhLmVtYWlsID09PSBcIlwiICYmIGRhdGEucGFzc3dvcmQgPT09IFwiXCIgPyBbW1wibXQtNSBidG5cIl0sIHN0eWxlW1wiYnRuLWF1dGhcIl1dLmpvaW4oXCIgXCIpIDogW1tcIm10LTUgYnRuXCJdLCBzdHlsZVtcImJ0bi1hdXRoLWFjdGl2ZVwiXV0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGF0YS5lbWFpbCA9PT0gXCJcIiAmJiBkYXRhLnBhc3N3b3JkID09PSBcIlwiID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9naW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsnZG9udC1oYXZlYWNjJ119PkRvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyBMZXTigJlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9zaWdudXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBTaWduIFVwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgPC9tYWluID5cclxuICAgICk7XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=