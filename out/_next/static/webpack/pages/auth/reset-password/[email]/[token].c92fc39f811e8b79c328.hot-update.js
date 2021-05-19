webpackHotUpdate_N_E("pages/auth/reset-password/[email]/[token]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

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
          className: [["mt-5 btn"], _styles_resetpass_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["btn-auth"]].join(" "),
          disabled: true,
          onClick: handleCreateReset,
          children: "Reset Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9yZXNldC1wYXNzd29yZC9bZW1haWxdL1t0b2tlbl0vaW5kZXguanMiXSwibmFtZXMiOlsiUmVzZXRQYXNzd29yZCIsInVzZVJvdXRlciIsInF1ZXJ5Iiwicm91dGVyIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImRhdGEiLCJzZXREYXRhIiwiaXNQYXNzd29yZFNob3ciLCJzZXRpc1Bhc3N3b3JkU2hvdyIsImlzUGFzc3dvcmRTaG93MiIsInNldGlzUGFzc3dvcmRTaG93MiIsInRvb2dsZVBhc3N3b3JkVmlzaWJpbGl0eSIsInRvb2dsZVBhc3N3b3JkVmlzaWJpbGl0eTIiLCJoYW5kbGVGb3JtQ2hhbmdlIiwiZXZlbnQiLCJkYXRhTmV3IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlQ3JlYXRlUmVzZXQiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsInByb2Nlc3MiLCJlbWFpbCIsInRva2VuIiwiYXhpb3MiLCJwdXQiLCJ0aGVuIiwicmVzIiwicHVzaCIsIlN3YWwiLCJmaXJlIiwibWVzc2FnZSIsImVyciIsInN0eWxlIiwiam9pbiIsImZhTG9jayIsImljb25Mb2NrIiwiZmFFeWUiLCJmYUV5ZVNsYXNoIiwiaWNvblBhc3MiLCJpY29uTG9jazIiLCJpY29uUGFzczIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBQUEsbUJBQ2xCQyw2REFBUyxFQURTO0FBQUEsTUFDNUJDLEtBRDRCLGNBQzVCQSxLQUQ0QixFQUVwQzs7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHRiw2REFBUyxFQUF4Qjs7QUFIb0Msa0JBSVpHLHNEQUFRLENBQUM7QUFDN0JDLFlBQVEsRUFBRSxFQURtQjtBQUU3QkMsbUJB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFZSSxxRUFBQyw4RUFBRDtBQUFpQixnQkFBSSxFQUFFSixlQUFlLEdBQUc2Qix1RUFBSCxHQUFXQyw0RUFBakQ7QUFBNkQscUJBQVMsRUFBRUwsbUVBQUssQ0FBQ1EsU0FBOUU7QUFBeUYsbUJBQU8sRUFBRTlCO0FBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhKLGVBeUNJO0FBQUssaUJBQVMsRUFBQywrQkFBZjtBQUFBLCtCQUVJO0FBQ0ksY0FBSSxFQUFDLFFBRFQ7QUFFSSxtQkFBUyxFQUFFLENBQUMsQ0FBQyxVQUFELENBQUQsRUFBZXNCLG1FQUFLLENBQUMsVUFBRCxDQUFwQixFQUFrQ0MsSUFBbEMsQ0FBdUMsR0FBdkMsQ0FGZjtBQUdJLGtCQUFRLE1BSFo7QUFJSSxpQkFBTyxFQUFFaEIsaUJBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1GSDs7R0FuSXVCckIsYTtVQUNGQyxxRCxFQUVIQSxxRDs7O0tBSEtELGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9yZXNldC1wYXNzd29yZC9bZW1haWxdL1t0b2tlbl0uYzkyZmMzOWY4MTFlOGI3OWMzMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvcmVzZXRwYXNzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbmltcG9ydCB7IGZhTG9jaywgZmFFeWUsIGZhRXllU2xhc2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2V0UGFzc3dvcmQoKSB7XHJcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHF1ZXJ5LmVtYWlsKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIixcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2lzUGFzc3dvcmRTaG93LCBzZXRpc1Bhc3N3b3JkU2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc1Bhc3N3b3JkU2hvdzIsIHNldGlzUGFzc3dvcmRTaG93Ml0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblxyXG4gICAgY29uc3QgdG9vZ2xlUGFzc3dvcmRWaXNpYmlsaXR5ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldGlzUGFzc3dvcmRTaG93KCFpc1Bhc3N3b3JkU2hvdylcclxuICAgIH1cclxuICAgIGNvbnN0IHRvb2dsZVBhc3N3b3JkVmlzaWJpbGl0eTIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0aXNQYXNzd29yZFNob3cyKCFpc1Bhc3N3b3JkU2hvdzIpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRm9ybUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFOZXcgPSB7XHJcbiAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBkYXRhTmV3W2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhTmV3KTtcclxuICAgICAgICBzZXREYXRhKGRhdGFOZXcpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ3JlYXRlUmVzZXQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52LmFwaX0vdXNlcnMvYXV0aC9yZXNldC1wYXNzd29yZC9uZXc/ZW1haWw9JHtxdWVyeS5lbWFpbH0mdG9rZW49JHtxdWVyeS50b2tlbn1gXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXJsKTtcclxuICAgICAgICBheGlvcy5wdXQodXJsLCB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICBjb25maXJtUGFzc3dvcmQ6IGRhdGEuY29uZmlybVBhc3N3b3JkXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYXV0aC9zaWduaW5cIilcclxuICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcIlN1Y2Nlc3NcIiwgcmVzLmRhdGEubWVzc2FnZSwgXCJzdWNjZXNzXCIpO1xyXG5cclxuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcIiBFUlJPUiEhIVwiLCBcIlJlc2V0IFBhc3N3b3JkIEZhaWxlZCFcIiwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVbJ21haW4tcmVzZXQnXX0+XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlWydhdXRoLXJlc2V0cyddfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17W1tcInB0LTVcIl0sIFtcIm1sLTVcIl0sIHN0eWxlW1widGl0bGUtcmVzZXRcIl1dLmpvaW4oXCIgXCIpfT5ad2FsbGV0PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W1tcImQtZmxleFwiXSwgc3R5bGVbXCJpbWFnZS1yZXNldFwiXV0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlWydiZ1dhdmUnXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvdmVjdG9yNC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9Hcm91cHBob25lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUxMi41MTMzODQ3NTI4NDY4M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTM2LjQ3MjI2MzQ3NDk5OTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydib3R0b20tc2VjdGlvbiddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGl0bGUtYm90dG9tLXNlY3Rpb24nXX0+QXBwIHRoYXQgQ292ZXJpbmcgQmFua2luZyBOZWVkcy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3N1YnRpdGxlLWJvdHRvbS1zZWN0aW9uJ119Plp3YWxsZXQgaXMgYW4gYXBwbGljYXRpb24gdGhhdCBmb2N1c3NpbmcgaW4gYmFua2luZyBuZWVkcyBmb3IgYWxsIHVzZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluIHRoZSB3b3JsZC4gQWx3YXlzIHVwZGF0ZWQgYW5kIGFsd2F5cyBmb2xsb3dpbmcgd29ybGQgdHJlbmRzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA1MDAwKyB1c2VycyByZWdpc3RlcmVkIGluIFp3YWxsZXQgZXZlcnlkYXkgd2l0aCB3b3JsZHdpZGVcclxuICAgICAgICAgICAgICAgIHVzZXJzIGNvdmVyYWdlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e3N0eWxlW1wiYXV0aC1yZXNldFwiXX0+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0aXRsZS1hc2lkZSddfT5EaWQgWW91IEZvcmdvdCBZb3VyIFBhc3N3b3JkPzxiciAvPlxyXG5Eb27igJl0IFdvcnJ5LCBZb3UgQ2FuIFJlc2V0IFlvdXI8YnIgLz5cclxuUGFzc3dvcmQgSW4gYSBNaW51dGVzLjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3N1YnRpdGxlLWFzaWRlJ119Pk5vdyB5b3UgY2FuIGNyZWF0ZSBhIG5ldyBwYXNzd29yZCBmb3IgeW91ciBad2FsbGV0PGJyIC8+IGFjY291bnQuIFR5cGUgeW91ciBwYXNzd29yZCB0d2ljZSBzbyB3ZSBjYW4gY29uZmlybSB5b3VyPGJyIC8+IG5ldyBwYXNzc3dvcmQuPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZVsndGl0bGUtYXNpZGUtbW9iaWxlJ119PlJlc2V0IFBhc3N3b3JkPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3N1YnRpdGxlLWFzaWRlLW1vYmlsZSddfT5DcmVhdGUgYW5kIGNvbmZpcm0geW91ciBuZXcgcGFzc3dvcmQgc29cclxueW91IGNhbiBsb2dpbiB0byBad2FsbGV0LjwvcD5cclxuICAgICAgICAgICAgICAgIHsvKiBlbmQgbW9iaWxlICovfVxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxvY2t9IGNsYXNzTmFtZT17c3R5bGUuaWNvbkxvY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17KGlzUGFzc3dvcmRTaG93KSA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbW1wiZm9ybS1jb250cm9sIG10LTFcIl0sIHN0eWxlW1wiZm9ybS1jb250cm9sXCJdXS5qb2luKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDcmVhdGUgbmV3IHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2lzUGFzc3dvcmRTaG93ID8gZmFFeWUgOiBmYUV5ZVNsYXNofSBjbGFzc05hbWU9e3N0eWxlLmljb25QYXNzfSBvbkNsaWNrPXt0b29nbGVQYXNzd29yZFZpc2liaWxpdHl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxvY2t9IGNsYXNzTmFtZT17c3R5bGUuaWNvbkxvY2syfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eyhpc1Bhc3N3b3JkU2hvdzIpID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJmb3JtLWNvbnRyb2wgbXQtMVwiXSwgc3R5bGVbXCJmb3JtLWNvbnRyb2xcIl1dLmpvaW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ3JlYXRlIG5ldyBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtpc1Bhc3N3b3JkU2hvdzIgPyBmYUV5ZSA6IGZhRXllU2xhc2h9IGNsYXNzTmFtZT17c3R5bGUuaWNvblBhc3MyfSBvbkNsaWNrPXt0b29nbGVQYXNzd29yZFZpc2liaWxpdHkyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJtdC01IGJ0blwiXSwgc3R5bGVbXCJidG4tYXV0aFwiXV0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZVJlc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVzZXQgUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIDwvbWFpbiA+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=