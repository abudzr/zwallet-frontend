webpackHotUpdate_N_E("pages/home",{

/***/ "./components/module/Navbar/index.js":
/*!*******************************************!*\
  !*** ./components/module/Navbar/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ "./components/module/Button/index.js");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/navbar.module.css */ "./styles/navbar.module.css");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Sidebar___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Sidebar/ */ "./components/module/Sidebar/index.js");


var _jsxFileName = "F:\\xampp\\htdocs\\arkademy\\Zwallet\\zwallet\\components\\module\\Navbar\\index.js",
    _s = $RefreshSig$();











function Navbar() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      image = _useState2[0],
      setImage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      sidebar = _useState3[0],
      setSidebar = _useState3[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var handleLogin = function handleLogin() {
    router.push('/auth/signin');
  };

  var handleClickSidebar = function handleClickSidebar() {
    setSidebar(!sidebar);
  };

  var handleSignUp = function handleSignUp() {
    router.push('/auth/signup');
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var token = localStorage.getItem('token');
    var url = "".concat("http://localhost:8080/api/v1", "/users/find-one");
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (res) {
      var data = res.data.data[0];
      setUser(data);
      setImage(res.data.data[0].image); // console.log(res.data.data[0].image);
    })["catch"](function (err) {
      console.log(err);
    });
  }, []);
  var isAuthenticated;

  if (true) {
    isAuthenticated = localStorage.getItem("token");
  }

  if (!isAuthenticated) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "navbar",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['navbar-brand'],
            children: "Zwallet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex btn-landing ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mr-5 pt-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
              title: "Login",
              btn: "btn-login",
              onClick: handleLogin
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "pt-5 mr-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
              title: "Sign Up",
              btn: "btn-signup",
              onClick: handleSignUp
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
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
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: [["navbar"], _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["navbar-login"]].join(" "),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        Link: true,
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['navbar-brands'],
          children: "Zwallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "d-flex ",
        children: [image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["profile-img"],
          src: "".concat("http://localhost:8080/").concat(image),
          alt: "ImgUser"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 25
        }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['name-phone'],
          children: [user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['navbar-name'],
            children: user.firstname == "Your Firstname" && user.lastname == "Your Lastname" ? "Your Name" : "".concat(user.firstname, " ").concat(user.lastname, " ")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 29
          }, this) : "", user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['navbar-phone'],
            children: user.phoneNumber
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 29
          }, this) : ""]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
          className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['icon-bell'],
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBell"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 9
  }, this);
}

_s(Navbar, "iWzSTkKZqncORwseGvmWf5Uoeb0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2R1bGUvTmF2YmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJpbWFnZSIsInNldEltYWdlIiwic2lkZWJhciIsInNldFNpZGViYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVMb2dpbiIsInB1c2giLCJoYW5kbGVDbGlja1NpZGViYXIiLCJoYW5kbGVTaWduVXAiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1cmwiLCJwcm9jZXNzIiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImlzQXV0aGVudGljYXRlZCIsInN0eWxlIiwiam9pbiIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwicGhvbmVOdW1iZXIiLCJmYUJlbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxFQUFELENBRGxCO0FBQUEsTUFDUEMsSUFETztBQUFBLE1BQ0RDLE9BREM7O0FBQUEsbUJBRVlGLHNEQUFRLEVBRnBCO0FBQUEsTUFFUEcsS0FGTztBQUFBLE1BRUFDLFFBRkE7O0FBQUEsbUJBR2dCSixzREFBUSxDQUFDLEtBQUQsQ0FIeEI7QUFBQSxNQUdQSyxPQUhPO0FBQUEsTUFHRUMsVUFIRjs7QUFLZCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJGLFVBQU0sQ0FBQ0csSUFBUCxDQUFZLGNBQVo7QUFDSCxHQUZEOztBQUlBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUM3QkwsY0FBVSxDQUFDLENBQUNELE9BQUYsQ0FBVjtBQUNILEdBRkQ7O0FBR0EsTUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QkwsVUFBTSxDQUFDRyxJQUFQLENBQVksY0FBWjtBQUNILEdBRkQ7O0FBSUFHLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQWQ7QUFDQSxRQUFNQyxHQUFHLGFBQU1DLDhCQUFOLG9CQUFUO0FBQ0FDLGdEQUFLLENBQUNDLEdBQU4sQ0FBVUgsR0FBVixFQUFlO0FBQ1hJLGFBQU8sRUFBRTtBQUNMQyxxQkFBYSxFQUFFLFlBQVlSO0FBRHRCO0FBREUsS0FBZixFQUtLUyxJQUxMLENBS1UsVUFBQ0MsR0FBRCxFQUFTO0FBQ1gsVUFBTUMsSUFBSSxHQUFHRCxHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBVCxDQUFjLENBQWQsQ0FBYjtBQUNBdkIsYUFBTyxDQUFDdUIsSUFBRCxDQUFQO0FBQ0FyQixjQUFRLENBQUNvQixHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBVCxDQUFjLENBQWQsRUFBaUJ0QixLQUFsQixDQUFSLENBSFcsQ0FJWDtBQUNILEtBVkwsV0FXVyxVQUFDdUIsR0FBRCxFQUFTO0FBQ1pDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0gsS0FiTDtBQWNILEdBakJRLEVBaUJOLEVBakJNLENBQVQ7QUFtQkEsTUFBSUcsZUFBSjs7QUFDQSxZQUFtQztBQUMvQkEsbUJBQWUsR0FBR2QsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQWxCO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDYSxlQUFMLEVBQXNCO0FBRWxCLHdCQUVJO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDSTtBQUFHLHFCQUFTLEVBQUVDLGdFQUFLLENBQUMsY0FBRCxDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFJSTtBQUFLLG1CQUFTLEVBQUMscUJBQWY7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsV0FBZjtBQUFBLG1DQUNJLHFFQUFDLCtDQUFEO0FBQ0ksbUJBQUssRUFBQyxPQURWO0FBQ2tCLGlCQUFHLEVBQUMsV0FEdEI7QUFDa0MscUJBQU8sRUFBRXJCO0FBRDNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBTUk7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQSxtQ0FDSSxxRUFBQywrQ0FBRDtBQUNJLG1CQUFLLEVBQUMsU0FEVjtBQUNvQixpQkFBRyxFQUFDLFlBRHhCO0FBQ3FDLHFCQUFPLEVBQUVHO0FBRDlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFzQkg7O0FBQ0Qsc0JBQ0k7QUFBSyxhQUFTLEVBQUUsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxFQUFha0IsZ0VBQUssQ0FBQyxjQUFELENBQWxCLEVBQW9DQyxJQUFwQyxDQUF5QyxHQUF6QyxDQUFoQjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDSSxxRUFBQyxnREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFlBQUksRUFBQyxHQUFoQjtBQUFBLCtCQUNJO0FBQUcsbUJBQVMsRUFBRUQsZ0VBQUssQ0FBQyxlQUFELENBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxtQkFDSzNCLEtBQUssZ0JBQ0Y7QUFDSSxtQkFBUyxFQUFFMkIsZ0VBQUssQ0FBQyxhQUFELENBRHBCO0FBRUksYUFBRyxZQUFLWix3QkFBTCxTQUEyQmYsS0FBM0IsQ0FGUDtBQUdJLGFBQUcsRUFBQztBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREUsR0FPRixFQVJSLGVBVUk7QUFBSyxtQkFBUyxFQUFFMkIsZ0VBQUssQ0FBQyxZQUFELENBQXJCO0FBQUEscUJBQ0s3QixJQUFJLGdCQUNEO0FBQUcscUJBQVMsRUFBRTZCLGdFQUFLLENBQUMsYUFBRCxDQUFuQjtBQUFBLHNCQUVRN0IsSUFBSSxDQUFDK0IsU0FBTCxJQUFrQixnQkFBbEIsSUFBc0MvQixJQUFJLENBQUNnQyxRQUFMLElBQWlCLGVBQXZELEdBQXlFLFdBQXpFLGFBQ1NoQyxJQUFJLENBQUMrQixTQURkLGNBQzJCL0IsSUFBSSxDQUFDZ0MsUUFEaEM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURDLEdBUUQsRUFUUixFQVdLaEMsSUFBSSxnQkFDRDtBQUFHLHFCQUFTLEVBQUU2QixnRUFBSyxDQUFDLGNBQUQsQ0FBbkI7QUFBQSxzQkFBc0M3QixJQUFJLENBQUNpQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURDLEdBR0QsRUFkUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkosZUEyQkkscUVBQUMsOEVBQUQ7QUFBaUIsbUJBQVMsRUFBRUosZ0VBQUssQ0FBQyxXQUFELENBQWpDO0FBQWdELGNBQUksRUFBRUssd0VBQU1BO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXNDSDs7R0F2R1FwQyxNO1VBS1VTLHFEOzs7S0FMVlQsTTtBQXlHTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS44ZGJjYzcwZWU0NTBkM2E2YzdhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbidcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9uYXZiYXIubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgZmFCZWxsIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL1NpZGViYXIvJ1xyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW3NpZGViYXIsIHNldFNpZGViYXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IGhhbmRsZUxvZ2luID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvYXV0aC9zaWduaW4nKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrU2lkZWJhciA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaWRlYmFyKCFzaWRlYmFyKVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlU2lnblVwID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvYXV0aC9zaWdudXAnKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52LmFwaX0vdXNlcnMvZmluZC1vbmVgO1xyXG4gICAgICAgIGF4aW9zLmdldCh1cmwsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YS5kYXRhWzBdXHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyKGRhdGEpXHJcbiAgICAgICAgICAgICAgICBzZXRJbWFnZShyZXMuZGF0YS5kYXRhWzBdLmltYWdlKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLmRhdGEuZGF0YVswXS5pbWFnZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGxldCBpc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlzQXV0aGVudGljYXRlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzQXV0aGVudGljYXRlZCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZVsnbmF2YmFyLWJyYW5kJ119ID5ad2FsbGV0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBidG4tbGFuZGluZyBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci01IHB0LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkxvZ2luXCIgYnRuPVwiYnRuLWxvZ2luXCIgb25DbGljaz17aGFuZGxlTG9naW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IG1yLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNpZ24gVXBcIiBidG49XCJidG4tc2lnbnVwXCIgb25DbGljaz17aGFuZGxlU2lnblVwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e1tbXCJuYXZiYXJcIl0sIHN0eWxlW1wibmF2YmFyLWxvZ2luXCJdXS5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBMaW5rIGhyZWY9XCIvXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVbJ25hdmJhci1icmFuZHMnXX0gPlp3YWxsZXQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbmsgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ltYWdlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlW1wicHJvZmlsZS1pbWdcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LmFwaV9pbWd9JHtpbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSW1nVXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWyduYW1lLXBob25lJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ25hdmJhci1uYW1lJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5maXJzdG5hbWUgPT0gXCJZb3VyIEZpcnN0bmFtZVwiICYmIHVzZXIubGFzdG5hbWUgPT0gXCJZb3VyIExhc3RuYW1lXCIgPyBcIllvdXIgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGAke3VzZXIuZmlyc3RuYW1lfSAke3VzZXIubGFzdG5hbWV9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsnbmF2YmFyLXBob25lJ119Pnt1c2VyLnBob25lTnVtYmVyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGVbJ2ljb24tYmVsbCddfSBpY29uPXtmYUJlbGx9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgIDwvbmF2ID5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciJdLCJzb3VyY2VSb290IjoiIn0=