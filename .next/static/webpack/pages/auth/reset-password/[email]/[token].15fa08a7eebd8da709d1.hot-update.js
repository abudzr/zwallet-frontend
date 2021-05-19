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
            className: _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.iconLock
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
            className: _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.iconLock2
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9yZXNldC1wYXNzd29yZC9bZW1haWxdL1t0b2tlbl0vaW5kZXguanMiXSwibmFtZXMiOlsiUmVzZXRQYXNzd29yZCIsInVzZVJvdXRlciIsInF1ZXJ5Iiwicm91dGVyIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImRhdGEiLCJzZXREYXRhIiwiaXNQYXNzd29yZFNob3ciLCJzZXRpc1Bhc3N3b3JkU2hvdyIsImlzUGFzc3dvcmRTaG93MiIsInNldGlzUGFzc3dvcmRTaG93MiIsInRvb2dsZVBhc3N3b3JkVmlzaWJpbGl0eSIsInRvb2dsZVBhc3N3b3JkVmlzaWJpbGl0eTIiLCJoYW5kbGVGb3JtQ2hhbmdlIiwiZXZlbnQiLCJkYXRhTmV3IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlQ3JlYXRlUmVzZXQiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsInByb2Nlc3MiLCJlbWFpbCIsInRva2VuIiwiYXhpb3MiLCJwdXQiLCJ0aGVuIiwicmVzIiwicHVzaCIsIlN3YWwiLCJmaXJlIiwibWVzc2FnZSIsImVyciIsInN0eWxlIiwiam9pbiIsImZhTG9jayIsImljb25Mb2NrIiwiZmFFeWUiLCJmYUV5ZVNsYXNoIiwiaWNvblBhc3MiLCJpY29uTG9jazIiLCJpY29uUGFzczIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBQUEsbUJBQ2xCQyw2REFBUyxFQURTO0FBQUEsTUFDNUJDLEtBRDRCLGNBQzVCQSxLQUQ0QixFQUVwQzs7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHRiw2REFBUyxFQUF4Qjs7QUFIb0Msa0JBSVpHLHNEQUFRLENBQUM7QUFDN0JDLFlBQVEsRUFBRSxFQURtQjtBQUU3QkMsbUJBQWUs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bF0vW3Rva2VuXS4xNWZhMDhhN2VlYmQ4ZGE3MDlkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9yZXNldHBhc3MubW9kdWxlLmNzcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuaW1wb3J0IHsgZmFMb2NrLCBmYUV5ZSwgZmFFeWVTbGFzaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzZXRQYXNzd29yZCgpIHtcclxuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocXVlcnkuZW1haWwpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbaXNQYXNzd29yZFNob3csIHNldGlzUGFzc3dvcmRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzUGFzc3dvcmRTaG93Miwgc2V0aXNQYXNzd29yZFNob3cyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHJcbiAgICBjb25zdCB0b29nbGVQYXNzd29yZFZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0aXNQYXNzd29yZFNob3coIWlzUGFzc3dvcmRTaG93KVxyXG4gICAgfVxyXG4gICAgY29uc3QgdG9vZ2xlUGFzc3dvcmRWaXNpYmlsaXR5MiA9ICgpID0+IHtcclxuICAgICAgICBzZXRpc1Bhc3N3b3JkU2hvdzIoIWlzUGFzc3dvcmRTaG93MilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YU5ldyA9IHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGFOZXdbZXZlbnQudGFyZ2V0Lm5hbWVdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFOZXcpO1xyXG4gICAgICAgIHNldERhdGEoZGF0YU5ldyk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDcmVhdGVSZXNldCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuYXBpfS91c2Vycy9hdXRoL3Jlc2V0LXBhc3N3b3JkL25ldz9lbWFpbD0ke3F1ZXJ5LmVtYWlsfSZ0b2tlbj0ke3F1ZXJ5LnRva2VufWBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICAgIGF4aW9zLnB1dCh1cmwsIHtcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogZGF0YS5jb25maXJtUGFzc3dvcmRcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9hdXRoL3NpZ25pblwiKVxyXG4gICAgICAgICAgICAgICAgU3dhbC5maXJlKFwiU3VjY2Vzc1wiLCByZXMuZGF0YS5tZXNzYWdlLCBcInN1Y2Nlc3NcIik7XHJcblxyXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKFwiIEVSUk9SISEhXCIsIFwiUmVzZXQgUGFzc3dvcmQgRmFpbGVkIVwiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZVsnbWFpbi1yZXNldCddfT5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVbJ2F1dGgtcmVzZXRzJ119PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtbW1wicHQtNVwiXSwgW1wibWwtNVwiXSwgc3R5bGVbXCJ0aXRsZS1yZXNldFwiXV0uam9pbihcIiBcIil9Plp3YWxsZXQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbW1wiZC1mbGV4XCJdLCBzdHlsZVtcImltYWdlLXJlc2V0XCJdXS5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVbJ2JnV2F2ZSddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy92ZWN0b3I0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL0dyb3VwcGhvbmUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTEyLjUxMzM4NDc1Mjg0NjgzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MzYuNDcyMjYzNDc0OTk5MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2JvdHRvbS1zZWN0aW9uJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0aXRsZS1ib3R0b20tc2VjdGlvbiddfT5BcHAgdGhhdCBDb3ZlcmluZyBCYW5raW5nIE5lZWRzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsnc3VidGl0bGUtYm90dG9tLXNlY3Rpb24nXX0+WndhbGxldCBpcyBhbiBhcHBsaWNhdGlvbiB0aGF0IGZvY3Vzc2luZyBpbiBiYW5raW5nIG5lZWRzIGZvciBhbGwgdXNlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW4gdGhlIHdvcmxkLiBBbHdheXMgdXBkYXRlZCBhbmQgYWx3YXlzIGZvbGxvd2luZyB3b3JsZCB0cmVuZHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDUwMDArIHVzZXJzIHJlZ2lzdGVyZWQgaW4gWndhbGxldCBldmVyeWRheSB3aXRoIHdvcmxkd2lkZVxyXG4gICAgICAgICAgICAgICAgdXNlcnMgY292ZXJhZ2UuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT17c3R5bGVbXCJhdXRoLXJlc2V0XCJdfT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLWFzaWRlJ119PkRpZCBZb3UgRm9yZ290IFlvdXIgUGFzc3dvcmQ/PGJyIC8+XHJcbkRvbuKAmXQgV29ycnksIFlvdSBDYW4gUmVzZXQgWW91cjxiciAvPlxyXG5QYXNzd29yZCBJbiBhIE1pbnV0ZXMuPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsnc3VidGl0bGUtYXNpZGUnXX0+Tm93IHlvdSBjYW4gY3JlYXRlIGEgbmV3IHBhc3N3b3JkIGZvciB5b3VyIFp3YWxsZXQ8YnIgLz4gYWNjb3VudC4gVHlwZSB5b3VyIHBhc3N3b3JkIHR3aWNlIHNvIHdlIGNhbiBjb25maXJtIHlvdXI8YnIgLz4gbmV3IHBhc3Nzd29yZC48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlWyd0aXRsZS1hc2lkZS1tb2JpbGUnXX0+UmVzZXQgUGFzc3dvcmQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsnc3VidGl0bGUtYXNpZGUtbW9iaWxlJ119PkNyZWF0ZSBhbmQgY29uZmlybSB5b3VyIG5ldyBwYXNzd29yZCBzb1xyXG55b3UgY2FuIGxvZ2luIHRvIFp3YWxsZXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgey8qIGVuZCBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTG9ja30gY2xhc3NOYW1lPXtzdHlsZS5pY29uTG9ja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsoaXNQYXNzd29yZFNob3cpID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJmb3JtLWNvbnRyb2wgbXQtMVwiXSwgc3R5bGVbXCJmb3JtLWNvbnRyb2xcIl1dLmpvaW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNyZWF0ZSBuZXcgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17aXNQYXNzd29yZFNob3cgPyBmYUV5ZSA6IGZhRXllU2xhc2h9IGNsYXNzTmFtZT17c3R5bGUuaWNvblBhc3N9IG9uQ2xpY2s9e3Rvb2dsZVBhc3N3b3JkVmlzaWJpbGl0eX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTG9ja30gY2xhc3NOYW1lPXtzdHlsZS5pY29uTG9jazJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17KGlzUGFzc3dvcmRTaG93MikgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1tcImZvcm0tY29udHJvbCBtdC0xXCJdLCBzdHlsZVtcImZvcm0tY29udHJvbFwiXV0uam9pbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDcmVhdGUgbmV3IHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2lzUGFzc3dvcmRTaG93MiA/IGZhRXllIDogZmFFeWVTbGFzaH0gY2xhc3NOYW1lPXtzdHlsZS5pY29uUGFzczJ9IG9uQ2xpY2s9e3Rvb2dsZVBhc3N3b3JkVmlzaWJpbGl0eTJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtkYXRhLnBhc3N3b3JkID09PSBcIlwiICYmIGRhdGEuY29uZmlybVBhc3N3b3JkID09PSBcIlwiID8gW1tcIm10LTUgYnRuXCJdLCBzdHlsZVtcImJ0bi1hdXRoXCJdXS5qb2luKFwiIFwiKSA6IFtbXCJtdC01IGJ0blwiXSwgc3R5bGVbXCJidG4tYXV0aC1hY3RpdmVcIl1dLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGF0YS5wYXNzd29yZCA9PT0gXCJcIiAmJiBkYXRhLmNvbmZpcm1QYXNzd29yZCA9PT0gXCJcIiA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ3JlYXRlUmVzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZXNldCBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgPC9tYWluID5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==