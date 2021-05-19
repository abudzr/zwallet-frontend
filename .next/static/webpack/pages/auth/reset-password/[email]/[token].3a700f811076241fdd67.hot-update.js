webpackHotUpdate_N_E("pages/auth/reset-password/[email]/[token]",{

/***/ "./pages/auth/reset-password/[email]/[token]/index.js":
/*!************************************************************!*\
  !*** ./pages/auth/reset-password/[email]/[token]/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResetPassword; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../styles/resetpass.module.css */ "./styles/resetpass.module.css");
/* harmony import */ var _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");



var _jsxFileName = "F:\\xampp\\htdocs\\arkademy\\Zwallet\\zwallet\\pages\\auth\\reset-password\\[email]\\[token]\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function ResetPassword() {
  _s();

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(),
      query = _useRouter.query; // console.log(query.email);


  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    password: "",
    confirmPassword: ""
  }),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isPasswordShow = _useState2[0],
      setisPasswordShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isPasswordShow2 = _useState3[0],
      setisPasswordShow2 = _useState3[1];

  var tooglePasswordVisibility = function tooglePasswordVisibility() {
    setisPasswordShow(!isPasswordShow);
  };

  var tooglePasswordVisibility2 = function tooglePasswordVisibility2() {
    setisPasswordShow2(!isPasswordShow2);
  };

  var handleFormChange = function handleFormChange(event) {
    var dataNew = _objectSpread({}, data);

    dataNew[event.target.name] = event.target.value; // console.log(dataNew);

    setData(dataNew);
  };

  var handleCreateReset = function handleCreateReset(event) {
    event.preventDefault();
    var url = "".concat("http://localhost:8080/api/v1", "/users/auth/reset-password/new?email=").concat(query.email, "&token=").concat(query.token); // console.log(url);

    axios__WEBPACK_IMPORTED_MODULE_6___default.a.put(url, {
      password: data.password,
      confirmPassword: data.confirmPassword
    }).then(function (res) {
      router.push("/auth/signin");
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Success", res.data.message, "success");
    }, function (err) {
      if (err) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire(" ERROR!!!", "Reset Password Failed!", "error");
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    className: _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['main-reset'],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['auth-resets'],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: [["pt-5"], ["ml-5"], _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["title-reset"]].join(" "),
          children: "Zwallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: [["d-flex"], _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["image-reset"]].join(" "),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['bgWave'],
            src: "/images/vector4.png",
            alt: "Picture of the author"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images/Groupphone.png",
            alt: "Picture of the author",
            width: 512.51338475284683,
            height: 536.4722634749991
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['bottom-section'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['title-bottom-section'],
            children: "App that Covering Banking Needs."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['subtitle-bottom-section'],
            children: "Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("aside", {
      className: _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["auth-reset"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['title-aside'],
        children: ["Did You Forgot Your Password?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 82
        }, this), "Don\u2019t Worry, You Can Reset Your", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 32
        }, this), "Password In a Minutes."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['subtitle-aside'],
        children: ["Now you can create a new password for your Zwallet", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 106
        }, this), " account. Type your password twice so we can confirm your", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 169
        }, this), " new passsword."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['title-aside-mobile'],
        children: "Reset Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['subtitle-aside-mobile'],
        children: "Create and confirm your new password so you can login to Zwallet."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faLock"],
            className: data.password === '' ? _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.iconLock : _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["iconLock-active"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: isPasswordShow ? "text" : "password",
            className: [["form-control mt-1"], _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["form-control"]].join(" "),
            name: "password",
            id: "password",
            placeholder: "Create new password",
            onChange: handleFormChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
            icon: isPasswordShow ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faEye"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faEyeSlash"],
            className: _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.iconPass,
            onClick: tooglePasswordVisibility
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faLock"],
            className: data.confirmPassword === '' ? _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.iconLock2 : _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["iconLock2-active"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: isPasswordShow2 ? "text" : "password",
            className: [["form-control mt-1"], _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["form-control"]].join(" "),
            name: "confirmPassword",
            id: "confirmPassword",
            placeholder: "Create new password",
            onChange: handleFormChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
            icon: isPasswordShow2 ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faEye"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faEyeSlash"],
            className: _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.iconPass2,
            onClick: tooglePasswordVisibility2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "d-flex justify-content-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: data.password === "" && data.confirmPassword === "" ? [["mt-5 btn"], _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["btn-auth"]].join(" ") : [["mt-5 btn"], _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["btn-auth-active"]].join(" "),
          disabled: data.password === "" && data.confirmPassword === "" ? true : false,
          onClick: handleCreateReset,
          children: "Reset Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 9
  }, this);
}

_s(ResetPassword, "Q9pONKnbaCAFXDJq7rSD9yrPC5s=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = ResetPassword;

var _c;

$RefreshReg$(_c, "ResetPassword");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9yZXNldC1wYXNzd29yZC9bZW1haWxdL1t0b2tlbl0vaW5kZXguanMiXSwibmFtZXMiOlsiUmVzZXRQYXNzd29yZCIsInVzZVJvdXRlciIsInF1ZXJ5Iiwicm91dGVyIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImRhdGEiLCJzZXREYXRhIiwiaXNQYXNzd29yZFNob3ciLCJzZXRpc1Bhc3N3b3JkU2hvdyIsImlzUGFzc3dvcmRTaG93MiIsInNldGlzUGFzc3dvcmRTaG93MiIsInRvb2dsZVBhc3N3b3JkVmlzaWJpbGl0eSIsInRvb2dsZVBhc3N3b3JkVmlzaWJpbGl0eTIiLCJoYW5kbGVGb3JtQ2hhbmdlIiwiZXZlbnQiLCJkYXRhTmV3IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlQ3JlYXRlUmVzZXQiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsInByb2Nlc3MiLCJlbWFpbCIsInRva2VuIiwiYXhpb3MiLCJwdXQiLCJ0aGVuIiwicmVzIiwicHVzaCIsIlN3YWwiLCJmaXJlIiwibWVzc2FnZSIsImVyciIsInN0eWxlIiwiam9pbiIsImZhTG9jayIsImljb25Mb2NrIiwiZmFFeWUiLCJmYUV5ZVNsYXNoIiwiaWNvblBhc3MiLCJpY29uTG9jazIiLCJpY29uUGFzczIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBQUEsbUJBQ2xCQyw2REFBUyxFQURTO0FBQUEsTUFDNUJDLEtBRDRCLGNBQzVCQSxLQUQ0QixFQUVwQzs7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHRiw2REFBUyxFQUF4Qjs7QUFIb0Msa0JBSVpHLHNEQUFRLENBQUM7QUFDN0JDLFlBQVEsRUFBRSxFQURtQjtBQUU3QkMsbUJBQWUs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Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrRkg7O0dBbEl1QnJCLGE7VUFDRkMscUQsRUFFSEEscUQ7OztLQUhLRCxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvcmVzZXQtcGFzc3dvcmQvW2VtYWlsXS9bdG9rZW5dLjNhNzAwZjgxMTA3NjI0MWZkZDY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3Jlc2V0cGFzcy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG5pbXBvcnQgeyBmYUxvY2ssIGZhRXllLCBmYUV5ZVNsYXNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNldFBhc3N3b3JkKCkge1xyXG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhxdWVyeS5lbWFpbCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6IFwiXCIsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtpc1Bhc3N3b3JkU2hvdywgc2V0aXNQYXNzd29yZFNob3ddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNQYXNzd29yZFNob3cyLCBzZXRpc1Bhc3N3b3JkU2hvdzJdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuICAgIGNvbnN0IHRvb2dsZVBhc3N3b3JkVmlzaWJpbGl0eSA9ICgpID0+IHtcclxuICAgICAgICBzZXRpc1Bhc3N3b3JkU2hvdyghaXNQYXNzd29yZFNob3cpXHJcbiAgICB9XHJcbiAgICBjb25zdCB0b29nbGVQYXNzd29yZFZpc2liaWxpdHkyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldGlzUGFzc3dvcmRTaG93MighaXNQYXNzd29yZFNob3cyKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhTmV3ID0ge1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGF0YU5ld1tldmVudC50YXJnZXQubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YU5ldyk7XHJcbiAgICAgICAgc2V0RGF0YShkYXRhTmV3KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZVJlc2V0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5hcGl9L3VzZXJzL2F1dGgvcmVzZXQtcGFzc3dvcmQvbmV3P2VtYWlsPSR7cXVlcnkuZW1haWx9JnRva2VuPSR7cXVlcnkudG9rZW59YFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgICAgYXhpb3MucHV0KHVybCwge1xyXG4gICAgICAgICAgICBwYXNzd29yZDogZGF0YS5wYXNzd29yZCxcclxuICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBkYXRhLmNvbmZpcm1QYXNzd29yZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2F1dGgvc2lnbmluXCIpXHJcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXCJTdWNjZXNzXCIsIHJlcy5kYXRhLm1lc3NhZ2UsIFwic3VjY2Vzc1wiKTtcclxuXHJcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXCIgRVJST1IhISFcIiwgXCJSZXNldCBQYXNzd29yZCBGYWlsZWQhXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlWydtYWluLXJlc2V0J119PlxyXG5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZVsnYXV0aC1yZXNldHMnXX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e1tbXCJwdC01XCJdLCBbXCJtbC01XCJdLCBzdHlsZVtcInRpdGxlLXJlc2V0XCJdXS5qb2luKFwiIFwiKX0+WndhbGxldDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tbXCJkLWZsZXhcIl0sIHN0eWxlW1wiaW1hZ2UtcmVzZXRcIl1dLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZVsnYmdXYXZlJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3ZlY3RvcjQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvR3JvdXBwaG9uZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MTIuNTEzMzg0NzUyODQ2ODN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUzNi40NzIyNjM0NzQ5OTkxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnYm90dG9tLXNlY3Rpb24nXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLWJvdHRvbS1zZWN0aW9uJ119PkFwcCB0aGF0IENvdmVyaW5nIEJhbmtpbmcgTmVlZHMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydzdWJ0aXRsZS1ib3R0b20tc2VjdGlvbiddfT5ad2FsbGV0IGlzIGFuIGFwcGxpY2F0aW9uIHRoYXQgZm9jdXNzaW5nIGluIGJhbmtpbmcgbmVlZHMgZm9yIGFsbCB1c2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbiB0aGUgd29ybGQuIEFsd2F5cyB1cGRhdGVkIGFuZCBhbHdheXMgZm9sbG93aW5nIHdvcmxkIHRyZW5kcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgNTAwMCsgdXNlcnMgcmVnaXN0ZXJlZCBpbiBad2FsbGV0IGV2ZXJ5ZGF5IHdpdGggd29ybGR3aWRlXHJcbiAgICAgICAgICAgICAgICB1c2VycyBjb3ZlcmFnZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXtzdHlsZVtcImF1dGgtcmVzZXRcIl19PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGl0bGUtYXNpZGUnXX0+RGlkIFlvdSBGb3Jnb3QgWW91ciBQYXNzd29yZD88YnIgLz5cclxuRG9u4oCZdCBXb3JyeSwgWW91IENhbiBSZXNldCBZb3VyPGJyIC8+XHJcblBhc3N3b3JkIEluIGEgTWludXRlcy48L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydzdWJ0aXRsZS1hc2lkZSddfT5Ob3cgeW91IGNhbiBjcmVhdGUgYSBuZXcgcGFzc3dvcmQgZm9yIHlvdXIgWndhbGxldDxiciAvPiBhY2NvdW50LiBUeXBlIHlvdXIgcGFzc3dvcmQgdHdpY2Ugc28gd2UgY2FuIGNvbmZpcm0geW91cjxiciAvPiBuZXcgcGFzc3N3b3JkLjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogbW9iaWxlICovfVxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLWFzaWRlLW1vYmlsZSddfT5SZXNldCBQYXNzd29yZDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydzdWJ0aXRsZS1hc2lkZS1tb2JpbGUnXX0+Q3JlYXRlIGFuZCBjb25maXJtIHlvdXIgbmV3IHBhc3N3b3JkIHNvXHJcbnlvdSBjYW4gbG9naW4gdG8gWndhbGxldC48L3A+XHJcbiAgICAgICAgICAgICAgICB7LyogZW5kIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMb2NrfSBjbGFzc05hbWU9e2RhdGEucGFzc3dvcmQgPT09ICcnID8gc3R5bGUuaWNvbkxvY2sgOiBzdHlsZVtcImljb25Mb2NrLWFjdGl2ZVwiXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsoaXNQYXNzd29yZFNob3cpID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJmb3JtLWNvbnRyb2wgbXQtMVwiXSwgc3R5bGVbXCJmb3JtLWNvbnRyb2xcIl1dLmpvaW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNyZWF0ZSBuZXcgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17aXNQYXNzd29yZFNob3cgPyBmYUV5ZSA6IGZhRXllU2xhc2h9IGNsYXNzTmFtZT17c3R5bGUuaWNvblBhc3N9IG9uQ2xpY2s9e3Rvb2dsZVBhc3N3b3JkVmlzaWJpbGl0eX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTG9ja30gY2xhc3NOYW1lPXtkYXRhLmNvbmZpcm1QYXNzd29yZCA9PT0gJycgPyBzdHlsZS5pY29uTG9jazIgOiBzdHlsZVtcImljb25Mb2NrMi1hY3RpdmVcIl19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17KGlzUGFzc3dvcmRTaG93MikgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1tcImZvcm0tY29udHJvbCBtdC0xXCJdLCBzdHlsZVtcImZvcm0tY29udHJvbFwiXV0uam9pbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDcmVhdGUgbmV3IHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2lzUGFzc3dvcmRTaG93MiA/IGZhRXllIDogZmFFeWVTbGFzaH0gY2xhc3NOYW1lPXtzdHlsZS5pY29uUGFzczJ9IG9uQ2xpY2s9e3Rvb2dsZVBhc3N3b3JkVmlzaWJpbGl0eTJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtkYXRhLnBhc3N3b3JkID09PSBcIlwiICYmIGRhdGEuY29uZmlybVBhc3N3b3JkID09PSBcIlwiID8gW1tcIm10LTUgYnRuXCJdLCBzdHlsZVtcImJ0bi1hdXRoXCJdXS5qb2luKFwiIFwiKSA6IFtbXCJtdC01IGJ0blwiXSwgc3R5bGVbXCJidG4tYXV0aC1hY3RpdmVcIl1dLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGF0YS5wYXNzd29yZCA9PT0gXCJcIiAmJiBkYXRhLmNvbmZpcm1QYXNzd29yZCA9PT0gXCJcIiA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ3JlYXRlUmVzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZXNldCBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgPC9tYWluID5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==