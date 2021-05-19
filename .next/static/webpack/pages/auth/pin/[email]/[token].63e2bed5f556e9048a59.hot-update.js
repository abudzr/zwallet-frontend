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
            className: [["mt-5 btn"], _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["btn-auth"]].join(" "),
            onClick: handleCreatePin,
            children: "Confirm"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
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
          lineNumber: 112,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-aside'],
          children: "Your PIN Was Successfully Created"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['subtitle-aside'],
          children: "Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-aside-mobile'],
          children: "PIN Successfully Created"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_pin_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['subtitle-aside-mobile'],
          children: "Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
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
            lineNumber: 127,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9waW4vW2VtYWlsXS9bdG9rZW5dL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBpbiIsInVzZVJvdXRlciIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImVtYWlsIiwicm91dGVyIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInNob3ciLCJzZXRTaG93IiwiaGFuZGxlUGluQ2hhbmdlIiwidmFsdWUiLCJoYW5kbGVMb2dpbiIsInB1c2giLCJoYW5kbGVDcmVhdGVQaW4iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXJsIiwicHJvY2VzcyIsImF4aW9zIiwicHV0IiwicGluIiwidGhlbiIsInJlcyIsIlN3YWwiLCJmaXJlIiwiZXJyIiwic3R5bGUiLCJqb2luIiwic3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQUEsbUJBQ1JDLDZEQUFTLEVBREQ7QUFBQSxNQUNsQkMsS0FEa0IsY0FDbEJBLEtBRGtCOztBQUUxQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csS0FBbEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdMLDZEQUFTLEVBQXhCOztBQUgwQixrQkFJRk0sc0RBQVEsQ0FBQyxJQUFELENBSk47QUFBQSxNQUluQkMsSUFKbUI7QUFBQSxNQUliQyxPQUphOztBQUFBLG1CQUtGRixzREFBUSxDQUFDLEtBQUQsQ0FMTjtBQUFBLE1BS25CRyxJQUxtQjtBQUFBLE1BS2JDLE9BTGE7O0FBTzFCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQy9CSixXQUFPLENBQUNJLEtBQUQsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QlIsVUFBTSxDQUFDUyxJQUFQLENBQVksY0FBWjtBQUNILEdBRkQ7O0FBTUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDL0JBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBLFFBQU1DLEdBQUcsYUFBTUMsOEJBQU4sMENBQXFEbEIsS0FBSyxDQUFDRyxLQUEzRCxDQUFULENBRitCLENBRy9COztBQUNBZ0IsZ0RBQUssQ0FBQ0MsR0FBTixDQUFVSCxHQUFWLEVBQWU7QUFDWEksU0FBRyxFQUFFZjtBQURNLEtBQWYsRUFHS2dCLElBSEwsQ0FHVSxVQUFDQyxHQUFELEVBQVM7QUFDWGQsYUFBTyxDQUFDLElBQUQsQ0FBUCxDQURXLENBRVg7O0FBQ0FlLHdEQUFJLENBQUNDLElBQUwsQ0FBVSxTQUFWLEVBQXFCLHFCQUFyQixFQUE0QyxTQUE1QztBQUVILEtBUkwsRUFRTyxVQUFDQyxHQUFELEVBQVM7QUFDUixVQUFJQSxHQUFKLEVBQVM7QUFDTEYsMERBQUksQ0FBQ0MsSUFBTCxDQUFVLFdBQVYsRUFBdUIsb0JBQXZCLEVBQTZDLE9BQTdDO0FBQ0g7QUFDSixLQVpMO0FBYUgsR0FqQkQ7O0FBbUJBLHNCQUNJO0FBQU0sYUFBUyxFQUFFRSw2REFBSyxDQUFDLFVBQUQsQ0FBdEI7QUFBQSw0QkFDSTtBQUFTLGVBQVMsRUFBRUEsNkRBQUssQ0FBQyxXQUFELENBQXpCO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDSTtBQUFJLG1CQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxFQUFXLENBQUMsTUFBRCxDQUFYLEVBQXFCQSw2REFBSyxDQUFDLFdBQUQsQ0FBMUIsRUFBeUNDLElBQXpDLENBQThDLEdBQTlDLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFLLG1CQUFTLEVBQUUsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxFQUFhRCw2REFBSyxDQUFDLFdBQUQsQ0FBbEIsRUFBaUNDLElBQWpDLENBQXNDLEdBQXRDLENBQWhCO0FBQUEsa0NBQ0k7QUFDSSxxQkFBUyxFQUFFRCw2REFBSyxDQUFDLFFBQUQsQ0FEcEI7QUFFSSxlQUFHLEVBQUMscUJBRlI7QUFHSSxlQUFHLEVBQUM7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBTUk7QUFDSSxlQUFHLEVBQUMsd0JBRFI7QUFFSSxlQUFHLEVBQUMsdUJBRlI7QUFHSSxpQkFBSyxFQUFFLGtCQUhYO0FBSUksa0JBQU0sRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBZUk7QUFBSyxtQkFBUyxFQUFFQSw2REFBSyxDQUFDLGdCQUFELENBQXJCO0FBQUEsa0NBQ0k7QUFBRyxxQkFBUyxFQUFFQSw2REFBSyxDQUFDLHNCQUFELENBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBRyxxQkFBUyxFQUFFQSw2REFBSyxDQUFDLHlCQUFELENBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUEwQkk7QUFBTyxlQUFTLEVBQUVBLDZEQUFLLENBQUMsVUFBRCxDQUF2QjtBQUFBLGlCQUVLbkIsSUFBSSxLQUFLLEtBQVQsaUJBQ0c7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUVtQiw2REFBSyxDQUFDLGFBQUQsQ0FBbkI7QUFBQSx3R0FDd0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBR0k7QUFBRyxtQkFBUyxFQUFFQSw2REFBSyxDQUFDLGdCQUFELENBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBS0k7QUFBSSxtQkFBUyxFQUFFQSw2REFBSyxDQUFDLG9CQUFELENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKLGVBTUk7QUFBRyxtQkFBUyxFQUFFQSw2REFBSyxDQUFDLHVCQUFELENBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLGVBU0k7QUFBSyxtQkFBUyxFQUFFQSw2REFBSyxDQUFDLFdBQUQsQ0FBckI7QUFBQSxpQ0FDSSxxRUFBQyxzREFBRDtBQUNJLGtCQUFNLEVBQUUsQ0FEWjtBQUVJLGtCQUFNLE1BRlY7QUFHSSxvQkFBUSxFQUFFakIsZUFIZDtBQUlJLHdCQUFZLEVBQUMsRUFKakI7QUFLSSxnQkFBSSxFQUFDLFNBTFQ7QUFNSSxxQkFBUyxFQUFDLFFBTmQ7QUFPSSxzQkFBVSxFQUFFLElBUGhCO0FBUUkseUJBQWEsRUFBRSx5QkFSbkI7QUFTSSxpQkFBSyxFQUFFO0FBVFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEosZUFzQkk7QUFBSyxtQkFBUyxFQUFDLCtCQUFmO0FBQUEsaUNBRUk7QUFDSSxnQkFBSSxFQUFDLFFBRFQ7QUFFSSxxQkFBUyxFQUFFLENBQUMsQ0FBQyxVQUFELENBQUQsRUFBZWlCLDZEQUFLLENBQUMsVUFBRCxDQUFwQixFQUFrQ0MsSUFBbEMsQ0FBdUMsR0FBdkMsQ0FGZjtBQUdJLG1CQUFPLEVBQUVkLGVBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRCSjtBQUFBLHNCQUhSLEVBc0NLTixJQUFJLEtBQUssSUFBVCxpQkFDRztBQUFBLGdDQUNJO0FBQ0ksbUJBQVMsRUFBRW1CLDZEQUFLLENBQUNFLE9BRHJCO0FBRUksYUFBRyxFQUFDLHFCQUZSO0FBR0ksYUFBRyxFQUFDO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQU1JO0FBQUcsbUJBQVMsRUFBRUYsNkRBQUssQ0FBQyxhQUFELENBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLGVBT0k7QUFBRyxtQkFBUyxFQUFFQSw2REFBSyxDQUFDLGdCQUFELENBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKLGVBU0k7QUFBSSxtQkFBUyxFQUFFQSw2REFBSyxDQUFDLG9CQUFELENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRKLGVBVUk7QUFBRyxtQkFBUyxFQUFFQSw2REFBSyxDQUFDLHVCQUFELENBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKLGVBY0k7QUFBSyxtQkFBUyxFQUFDLCtCQUFmO0FBQUEsaUNBRUk7QUFDSSxnQkFBSSxFQUFDLFFBRFQ7QUFFSSxxQkFBUyxFQUFFLENBQUMsQ0FBQyxVQUFELENBQUQsRUFBZUEsNkRBQUssQ0FBQyxXQUFELENBQXBCLEVBQW1DQyxJQUFuQyxDQUF3QyxHQUF4QyxDQUZmO0FBR0ksbUJBQU8sRUFBRWhCLFdBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRKO0FBQUEsc0JBdkNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdHSDs7R0FwSXVCZCxHO1VBQ0ZDLHFELEVBRUhBLHFEOzs7S0FIS0QsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL3Bpbi9bZW1haWxdL1t0b2tlbl0uNjNlMmJlZDVmNTU2ZTkwNDhhNTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvcGluLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBJbnB1dFBpbiBmcm9tIFwicmVhY3QtcGluLWlucHV0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaW4oKSB7XHJcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnNvbGUubG9nKHF1ZXJ5LmVtYWlsKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQaW5DaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBzZXREYXRhKHZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9naW4gPSAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvYXV0aC9zaWduaW5cIilcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZVBpbiA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuYXBpfS91c2Vycy9uZXcvY3JlYXRlLXBpbi8/ZW1haWw9JHtxdWVyeS5lbWFpbH1gXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXJsKTtcclxuICAgICAgICBheGlvcy5wdXQodXJsLCB7XHJcbiAgICAgICAgICAgIHBpbjogZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNob3codHJ1ZSlcclxuICAgICAgICAgICAgICAgIC8vIHJvdXRlci5wdXNoKFwiL2F1dGgvc2lnbmluXCIpXHJcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXCJTdWNjZXNzXCIsIFwiQ3JlYXRlIFBpbiBTdWNjZXNzIVwiLCBcInN1Y2Nlc3NcIik7XHJcblxyXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKFwiIEVSUk9SISEhXCIsIFwiQ3JlYXRlIHBpbiBGYWlsZWQhXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlWydtYWluLXBpbiddfT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZVsnYXV0aC1waW5zJ119PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtbW1wicHQtNVwiXSwgW1wibWwtNVwiXSwgc3R5bGVbXCJ0aXRsZS1waW5cIl1dLmpvaW4oXCIgXCIpfT5ad2FsbGV0PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W1tcImQtZmxleFwiXSwgc3R5bGVbXCJpbWFnZS1waW5cIl1dLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZVsnYmdXYXZlJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3ZlY3RvcjQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvR3JvdXBwaG9uZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MTIuNTEzMzg0NzUyODQ2ODN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUzNi40NzIyNjM0NzQ5OTkxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnYm90dG9tLXNlY3Rpb24nXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLWJvdHRvbS1zZWN0aW9uJ119PkFwcCB0aGF0IENvdmVyaW5nIEJhbmtpbmcgTmVlZHMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydzdWJ0aXRsZS1ib3R0b20tc2VjdGlvbiddfT5ad2FsbGV0IGlzIGFuIGFwcGxpY2F0aW9uIHRoYXQgZm9jdXNzaW5nIGluIGJhbmtpbmcgbmVlZHMgZm9yIGFsbCB1c2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbiB0aGUgd29ybGQuIEFsd2F5cyB1cGRhdGVkIGFuZCBhbHdheXMgZm9sbG93aW5nIHdvcmxkIHRyZW5kcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgNTAwMCsgdXNlcnMgcmVnaXN0ZXJlZCBpbiBad2FsbGV0IGV2ZXJ5ZGF5IHdpdGggd29ybGR3aWRlXHJcbiAgICAgICAgICAgICAgICB1c2VycyBjb3ZlcmFnZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXtzdHlsZVtcImF1dGgtcGluXCJdfT5cclxuXHJcbiAgICAgICAgICAgICAgICB7c2hvdyA9PT0gZmFsc2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLWFzaWRlJ119PlNlY3VyZSBZb3VyIEFjY291bnQsIFlvdXIgV2FsbGV0LFxyXG4gICAgICAgICAgICAgICAgYW5kIFlvdXIgRGF0YSBXaXRoIDYgRGlnaXRzIFBJTiA8YnIgLz5UaGF0IFlvdSBDcmVhdGVkIFlvdXJzZWxmLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsnc3VidGl0bGUtYXNpZGUnXX0+Q3JlYXRlIDYgZGlnaXRzIHBpbiB0byBzZWN1cmUgYWxsIHlvdXIgbW9uZXkgYW5kIHlvdXIgZGF0YSBpbiBad2FsbGV0IGFwcC4gS2VlcCBpdCBzZWNyZXQgYW5kIGRvbuKAmXQgdGVsbCBhbnlvbmUgYWJvdXQgeW91ciBad2FsbGV0IGFjY291bnQgcGFzc3dvcmQgYW5kIHRoZSBQSU4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogbW9iaWxlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZVsndGl0bGUtYXNpZGUtbW9iaWxlJ119PkNyZWF0ZSBTZWN1cml0eSBQSU48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydzdWJ0aXRsZS1hc2lkZS1tb2JpbGUnXX0+Q3JlYXRlIGEgUElOIHRoYXTigJlzIGNvbnRhaW4gNiBkaWdpdHMgbnVtYmVyIGZvciBzZWN1cml0eSBwdXJwb3NlIGluIFp3YWxsZXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogZW5kIG1vYmlsZSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnaW5wdXQtcGluJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0UGluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoPXs2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3JldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQaW5DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtZXJpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRNb2RlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvU2VsZWN0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4Q3JpdGVyaWE9ey9eWyBBLVphLXowLTlfQC4vIyYrLV0qJC99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJtdC01IGJ0blwiXSwgc3R5bGVbXCJidG4tYXV0aFwiXV0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ3JlYXRlUGlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7c2hvdyA9PT0gdHJ1ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5zdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9zdWNjZXNzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIHN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0aXRsZS1hc2lkZSddfT5Zb3VyIFBJTiBXYXMgU3VjY2Vzc2Z1bGx5IENyZWF0ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3N1YnRpdGxlLWFzaWRlJ119PllvdXIgUElOIHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZCBhbmQgeW91IGNhbiBub3cgYWNjZXNzIGFsbCB0aGUgZmVhdHVyZXMgaW4gWndhbGxldC4gTG9naW4gdG8geW91ciBuZXcgYWNjb3VudCBhbmQgc3RhcnQgZXhwbG9yaW5nITwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIG1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLWFzaWRlLW1vYmlsZSddfT5QSU4gU3VjY2Vzc2Z1bGx5IENyZWF0ZWQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydzdWJ0aXRsZS1hc2lkZS1tb2JpbGUnXX0+WW91ciBQSU4gd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIGFuZCB5b3UgY2FuIG5vdyBhY2Nlc3MgYWxsIHRoZSBmZWF0dXJlcyBpbiBad2FsbGV0LiBMb2dpbiB0byB5b3VyIG5ldyBhY2NvdW50IGFuZCBzdGFydCBleHBsb3JpbmchPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogZW5kIG1vYmlsZSAqL31cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1tcIm10LTUgYnRuXCJdLCBzdHlsZVtcImJ0bi1hdXRoc1wiXV0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9naW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gTm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIDwvbWFpbiA+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=