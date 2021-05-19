webpackHotUpdate_N_E("pages/auth/signup",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./pages/auth/signup.js":
/*!******************************!*\
  !*** ./pages/auth/signup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/signup.module.css */ "./styles/signup.module.css");
/* harmony import */ var _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "F:\\xampp\\htdocs\\arkademy\\Zwallet\\zwallet\\pages\\auth\\signup.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function Signup() {
  _s();

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),
      query = _useRouter.query;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    username: "",
    email: "",
    password: "",
    firstname: "Your Firstname",
    lastname: "Your Lastname"
  }),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isPasswordShow = _useState2[0],
      setisPasswordShow = _useState2[1];

  var tooglePasswordVisibility = function tooglePasswordVisibility() {
    setisPasswordShow(!isPasswordShow);
  };

  var handleFormChange = function handleFormChange(event) {
    var dataNew = _objectSpread({}, data);

    dataNew[event.target.name] = event.target.value; // console.log(dataNew);

    setData(dataNew);
  };

  var handleSignUp = function handleSignUp(event) {
    event.preventDefault(); // console.log(data);

    axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("".concat("http://localhost:8080/api/v1", "/users/"), data).then(function (res) {
      // console.log(res);
      sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire("Success", res.data.message, "success");
      router.push('/auth/signin');
    })["catch"](function (err) {
      console.log(err);
      sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire("Error", "Sign Up Failed", "error");
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['main-signup'],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['auth-signups'],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: [["pt-5"], ["ml-5"], _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["title-signup"]].join(" "),
          children: "Zwallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: [["d-flex"], _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["image-signup"]].join(" "),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['bgWave'],
            src: "/images/vector4.png",
            alt: "Picture primary phone"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images/Groupphone.png",
            alt: "Picture primary phone",
            width: 512.51338475284683,
            height: 536.4722634749991
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['bottom-section'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['title-bottom-section'],
            children: "App that Covering Banking Needs."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['subtitle-bottom-section'],
            children: "Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("aside", {
      className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["auth-signup"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['title-aside'],
        children: "Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['subtitle-aside'],
        children: "Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['title-aside-mobile'],
        children: "Sign Up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['subtitle-aside-mobile'],
        children: "Create your account to access Zwallet."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: [["mt-5"], _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["form-aside"]].join(" "),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
            className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.iconSignup
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: [["form-control mt-1"], _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["form-control"]].join(" "),
            name: "username",
            id: "username",
            placeholder: "Enter your username",
            onChange: handleFormChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEnvelope"],
            className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.iconSignup
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "email",
            className: [["form-control mt-1"], _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["form-control"]].join(" "),
            name: "email",
            id: "email",
            placeholder: "Enter your e-mail",
            onChange: handleFormChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faLock"],
            className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.iconSignup
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: isPasswordShow ? "text" : "password",
            className: [["form-control mt-1"], _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["form-control"]].join(" "),
            name: "password",
            id: "password",
            placeholder: "Enter your password",
            onChange: handleFormChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
            icon: isPasswordShow ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEye"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEyeSlash"],
            className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.iconPass,
            onClick: tooglePasswordVisibility
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: [["mt-5 btn"], ["mr-auto"], _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["btn-auth"]].join(" "),
          onClick: handleSignUp,
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['dont-haveacc'],
          children: ["Already have an account? Let\u2019s", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/auth/signin",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: " Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, this);
}

_s(Signup, "DdcCosLyAtV5n9CTL8qSSTDWFxk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Signup;

var _c;

$RefreshReg$(_c, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9zaWdudXAuanMiXSwibmFtZXMiOlsiU2lnbnVwIiwidXNlUm91dGVyIiwicXVlcnkiLCJyb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZGF0YSIsInNldERhdGEiLCJpc1Bhc3N3b3JkU2hvdyIsInNldGlzUGFzc3dvcmRTaG93IiwidG9vZ2xlUGFzc3dvcmRWaXNpYmlsaXR5IiwiaGFuZGxlRm9ybUNoYW5nZSIsImV2ZW50IiwiZGF0YU5ldyIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVNpZ25VcCIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJwb3N0IiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJTd2FsIiwiZmlyZSIsIm1lc3NhZ2UiLCJwdXNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiam9pbiIsImZhVXNlciIsImljb25TaWdudXAiLCJmYUVudmVsb3BlIiwiZmFMb2NrIiwiZmFFeWUiLCJmYUV5ZVNsYXNoIiwiaWNvblBhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLG1CQUNYQyw2REFBUyxFQURFO0FBQUEsTUFDckJDLEtBRHFCLGNBQ3JCQSxLQURxQjs7QUFFN0IsTUFBTUMsTUFBTSxHQUFHRiw2REFBUyxFQUF4Qjs7QUFGNkIsa0JBR0xHLHNEQUFRLENBQUM7QUFDN0JDLFlBQVEsRUFBRSxFQURtQjtBQUU3QkMsU0FBSyxFQUFFLEVBRnNCO0FBRzdCQyxZQUFRLEVBQUUsRUFIbUI7QUFJN0JDLGFBQVMsRUFBRSxnQkFKa0I7QUFLN0JDLFlBQVEsRUFBRTtBQUxtQixHQUFELENB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QUFFN0I7QUFBaEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0JKLGVBMkNJO0FBQ0ksY0FBSSxFQUFDLFFBRFQ7QUFFSSxtQkFBUyxFQUFFLENBQUMsQ0FBQyxVQUFELENBQUQsRUFBZSxDQUFDLFNBQUQsQ0FBZixFQUE0QnFCLGdFQUFLLENBQUMsVUFBRCxDQUFqQyxFQUErQ0MsSUFBL0MsQ0FBb0QsR0FBcEQsQ0FGZjtBQUdJLGlCQUFPLEVBQUVmLFlBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0NKLGVBa0RJO0FBQUcsbUJBQVMsRUFBRWMsZ0VBQUssQ0FBQyxjQUFELENBQW5CO0FBQUEseUVBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFDLGNBQVg7QUFBQSxtQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxR0g7O0dBN0l1Qm5DLE07VUFDRkMscUQsRUFDSEEscUQ7OztLQUZLRCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvc2lnbnVwLjc2ZWNjYzk0ODQzYjFiN2Y2ZTQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uL3N0eWxlcy9zaWdudXAubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgZmFVc2VyLCBmYUVudmVsb3BlLCBmYUxvY2ssIGZhRXllLCBmYUV5ZVNsYXNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWdudXAoKSB7XHJcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIGZpcnN0bmFtZTogXCJZb3VyIEZpcnN0bmFtZVwiLFxyXG4gICAgICAgIGxhc3RuYW1lOiBcIllvdXIgTGFzdG5hbWVcIixcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2lzUGFzc3dvcmRTaG93LCBzZXRpc1Bhc3N3b3JkU2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCB0b29nbGVQYXNzd29yZFZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0aXNQYXNzd29yZFNob3coIWlzUGFzc3dvcmRTaG93KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhTmV3ID0ge1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGF0YU5ld1tldmVudC50YXJnZXQubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YU5ldyk7XHJcbiAgICAgICAgc2V0RGF0YShkYXRhTmV3KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2lnblVwID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LmFwaX0vdXNlcnMvYCwgZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXCJTdWNjZXNzXCIsIHJlcy5kYXRhLm1lc3NhZ2UsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvYXV0aC9zaWduaW4nKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXCJFcnJvclwiLCBcIlNpZ24gVXAgRmFpbGVkXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlWydtYWluLXNpZ251cCddfT5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVbJ2F1dGgtc2lnbnVwcyddfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17W1tcInB0LTVcIl0sIFtcIm1sLTVcIl0sIHN0eWxlW1widGl0bGUtc2lnbnVwXCJdXS5qb2luKFwiIFwiKX0+WndhbGxldDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tbXCJkLWZsZXhcIl0sIHN0eWxlW1wiaW1hZ2Utc2lnbnVwXCJdXS5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVbJ2JnV2F2ZSddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy92ZWN0b3I0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIHByaW1hcnkgcGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL0dyb3VwcGhvbmUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgcHJpbWFyeSBwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTEyLjUxMzM4NDc1Mjg0NjgzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MzYuNDcyMjYzNDc0OTk5MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydib3R0b20tc2VjdGlvbiddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGl0bGUtYm90dG9tLXNlY3Rpb24nXX0+QXBwIHRoYXQgQ292ZXJpbmcgQmFua2luZyBOZWVkcy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3N1YnRpdGxlLWJvdHRvbS1zZWN0aW9uJ119Plp3YWxsZXQgaXMgYW4gYXBwbGljYXRpb24gdGhhdCBmb2N1c3NpbmcgaW4gYmFua2luZyBuZWVkcyBmb3IgYWxsIHVzZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluIHRoZSB3b3JsZC4gQWx3YXlzIHVwZGF0ZWQgYW5kIGFsd2F5cyBmb2xsb3dpbmcgd29ybGQgdHJlbmRzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA1MDAwKyB1c2VycyByZWdpc3RlcmVkIGluIFp3YWxsZXQgZXZlcnlkYXkgd2l0aCB3b3JsZHdpZGVcclxuICAgICAgICAgICAgICAgIHVzZXJzIGNvdmVyYWdlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e3N0eWxlW1wiYXV0aC1zaWdudXBcIl19PlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLWFzaWRlJ119PlN0YXJ0IEFjY2Vzc2luZyBCYW5raW5nIE5lZWRzXHJcbiAgICAgICAgICAgICAgICBXaXRoIEFsbCBEZXZpY2VzIGFuZCBBbGwgUGxhdGZvcm1zXHJcbiAgICAgICAgICAgICAgICBXaXRoIDMwLjAwMCsgVXNlcnM8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydzdWJ0aXRsZS1hc2lkZSddfT5UcmFuc2ZlcmluZyBtb25leSBpcyBlYXNzaWVyIHRoYW4gZXZlciwgeW91IGNhbiBhY2Nlc3MgWndhbGxldCB3aGVyZXZlciB5b3UgYXJlLiBEZXNrdG9wLCBsYXB0b3AsIG1vYmlsZSBwaG9uZT8gd2UgY292ZXIgYWxsIG9mIHRoYXQgZm9yIHlvdSE8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlWyd0aXRsZS1hc2lkZS1tb2JpbGUnXX0+U2lnbiBVcDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydzdWJ0aXRsZS1hc2lkZS1tb2JpbGUnXX0+Q3JlYXRlIHlvdXIgYWNjb3VudCB0byBhY2Nlc3MgWndhbGxldC48L3A+XHJcbiAgICAgICAgICAgICAgICB7LyogZW5kIG1vYmlsZSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e1tbXCJtdC01XCJdLCBzdHlsZVtcImZvcm0tYXNpZGVcIl1dLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSBjbGFzc05hbWU9e3N0eWxlLmljb25TaWdudXB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbW1wiZm9ybS1jb250cm9sIG10LTFcIl0sIHN0eWxlW1wiZm9ybS1jb250cm9sXCJdXS5qb2luKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFbnZlbG9wZX0gY2xhc3NOYW1lPXtzdHlsZS5pY29uU2lnbnVwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJmb3JtLWNvbnRyb2wgbXQtMVwiXSwgc3R5bGVbXCJmb3JtLWNvbnRyb2xcIl1dLmpvaW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZS1tYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMb2NrfSBjbGFzc05hbWU9e3N0eWxlLmljb25TaWdudXB9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eyhpc1Bhc3N3b3JkU2hvdykgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1tcImZvcm0tY29udHJvbCBtdC0xXCJdLCBzdHlsZVtcImZvcm0tY29udHJvbFwiXV0uam9pbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtpc1Bhc3N3b3JkU2hvdyA/IGZhRXllIDogZmFFeWVTbGFzaH0gY2xhc3NOYW1lPXtzdHlsZS5pY29uUGFzc30gb25DbGljaz17dG9vZ2xlUGFzc3dvcmRWaXNpYmlsaXR5fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJtdC01IGJ0blwiXSwgW1wibXItYXV0b1wiXSwgc3R5bGVbXCJidG4tYXV0aFwiXV0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNpZ25VcH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydkb250LWhhdmVhY2MnXX0+QWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IExldOKAmXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL3NpZ25pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+IExvZ2luPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9hc2lkZSA+XHJcbiAgICAgICAgPC9tYWluID5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==