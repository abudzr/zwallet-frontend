webpackHotUpdate_N_E("pages/auth/signup",{

/***/ "./configs/redux/actions/user.js":
/*!***************************************!*\
  !*** ./configs/redux/actions/user.js ***!
  \***************************************/
/*! exports provided: signUp, verify, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verify", function() { return verify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helper/axios */ "./helper/axios.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);




var signUpRequest = function signUpRequest() {
  return {
    type: "SIGN_UP_REQUEST"
  };
};

var signUpSuccess = function signUpSuccess(data) {
  return {
    type: "SIGN_UP_SUCCESS",
    payload: data
  };
};

var signUpFailure = function signUpFailure(error) {
  return {
    type: "SIGN_UP_FAILURE",
    payload: error
  };
};

var signUp = function signUp(data) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      var Url = "http://localhost:8080/api/v1";
      dispatch(signUpRequest());
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(Url, "/users/"), data).then(function (res) {
        dispatch(signUpSuccess(res.data.data));
        resolve(res.data.message);
      })["catch"](function (err) {
        dispatch(signUpFailure(err.response.data.message));
        reject(new Error(err.response.data.message));
      });
    });
  };
};
var verify = function verify() {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      var Url = "http://localhost:8080/api/v1";
      _helper_axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("".concat(Url, "/users/verify")).then(function (res) {
        resolve(res.data.message);
      })["catch"](function (err) {
        reject(new Error(err.response.data.message));
      });
    });
  };
};
var login = function login(data) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      var Url = "http://localhost:8080/api/v1";
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(Url, "/users/auth/login"), data).then(function (res) {
        dispatch({
          type: "LOGIN",
          payload: res.data.data,
          role: res.data.data.role,
          status: true
        });
        localStorage.setItem("id", res.data.data.id);
        localStorage.setItem("token", res.data.data.token);
        resolve(res.data.message);
      })["catch"](function (err) {
        if (err.response) {
          reject(err.response.data.message);
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Internal Server Error!.", "", "error");
        }
      });
    });
  };
};

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

/***/ }),

/***/ "./helper/axios.js":
/*!*************************!*\
  !*** ./helper/axios.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");



var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var axiosApiInstance = axios.create(); // const Swal = require("sweetalert2");
//ambil token dari localstorage

var token;

if (true) {
  token = localStorage.getItem("token");
}

axiosApiInstance.interceptors.request.use( /*#__PURE__*/function () {
  var _ref = Object(F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(config) {
    return F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config.headers = {
              Authorization: "Bearer ".concat(token)
            };
            return _context.abrupt("return", config);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(), function (error) {
  Promise.reject(error);
});
axiosApiInstance.interceptors.response.use(function (response) {
  return response;
}, /*#__PURE__*/function () {
  var _ref2 = Object(F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(error) {
    return F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(error.response.status === 400)) {
              _context2.next = 3;
              break;
            }

            if (!(error.response.data.message === "Invalid Token")) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", Promise.reject(error));

          case 3:
            return _context2.abrupt("return", Promise.reject(error));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (axiosApiInstance);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _configs_redux_actions_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../configs/redux/actions/user */ "./configs/redux/actions/user.js");



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
    // axios.post(`${process.env.api}/users/`, data)
    //     .then(res => {
    //         // console.log(res);
    //         Swal.fire("Success", res.data.message, "success");
    //         router.push('/auth/signin')
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         Swal.fire("Error", "Sign Up Failed", "error");
    //     })
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
          lineNumber: 59,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: [["d-flex"], _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["image-signup"]].join(" "),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['bgWave'],
            src: "/images/vector4.png",
            alt: "Picture primary phone"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images/Groupphone.png",
            alt: "Picture primary phone",
            width: 512.51338475284683,
            height: 536.4722634749991
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['bottom-section'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['title-bottom-section'],
            children: "App that Covering Banking Needs."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['subtitle-bottom-section'],
            children: "Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("aside", {
      className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["auth-signup"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['title-aside'],
        children: "Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['subtitle-aside'],
        children: "Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['title-aside-mobile'],
        children: "Sign Up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['subtitle-aside-mobile'],
        children: "Create your account to access Zwallet."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: [["mt-5"], _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["form-aside"]].join(" "),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
            className: data.username === "" ? _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.iconUsername : _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["iconSignup-active"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
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
            lineNumber: 98,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEnvelope"],
            className: data.email === "" ? _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.iconEmail : _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["iconSignup-active"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
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
            lineNumber: 111,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faLock"],
            className: data.password === "" ? _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.iconPassword : _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["iconSignup-active"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
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
            lineNumber: 125,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
            icon: isPasswordShow ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEye"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEyeSlash"],
            className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.iconPass,
            onClick: tooglePasswordVisibility
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            className: data.email === "" && data.username === "" && data.password === "" ? [["mt-5 btn"], _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["btn-auth"]].join(" ") : [["mt-5 btn"], _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["btn-auth-active"]].join(" "),
            onClick: handleSignUp,
            disabled: data.email === "" && data.username === "" && data.password === "" ? true : false,
            children: "Sign Up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_6___default.a['dont-haveacc'],
          children: ["Already have an account? Let\u2019s", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/auth/signin",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: " Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlncy9yZWR1eC9hY3Rpb25zL3VzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2hlbHBlci9heGlvcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9zaWdudXAuanMiXSwibmFtZXMiOlsic2lnblVwUmVxdWVzdCIsInR5cGUiLCJzaWduVXBTdWNjZXNzIiwiZGF0YSIsInBheWxvYWQiLCJzaWduVXBGYWlsdXJlIiwiZXJyb3IiLCJzaWduVXAiLCJkaXNwYXRjaCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiVXJsIiwicHJvY2VzcyIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJtZXNzYWdlIiwiZXJyIiwicmVzcG9uc2UiLCJFcnJvciIsInZlcmlmeSIsImF4aW9zQXBpSW5zdGFuY2UiLCJnZXQiLCJsb2dpbiIsInJvbGUiLCJzdGF0dXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiaWQiLCJ0b2tlbiIsIlN3YWwiLCJmaXJlIiwicmVxdWlyZSIsImNyZWF0ZSIsImdldEl0ZW0iLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJTaWdudXAiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInJvdXRlciIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJzZXREYXRhIiwiaXNQYXNzd29yZFNob3ciLCJzZXRpc1Bhc3N3b3JkU2hvdyIsInRvb2dsZVBhc3N3b3JkVmlzaWJpbGl0eSIsImhhbmRsZUZvcm1DaGFuZ2UiLCJldmVudCIsImRhdGFOZXciLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTaWduVXAiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlIiwiam9pbiIsImZhVXNlciIsImljb25Vc2VybmFtZSIsImZhRW52ZWxvcGUiLCJpY29uRW1haWwiLCJmYUxvY2siLCJpY29uUGFzc3dvcmQiLCJmYUV5ZSIsImZhRXllU2xhc2giLCJpY29uUGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEIsU0FBTztBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUFQO0FBQ0gsQ0FGRDs7QUFJQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQsRUFBVTtBQUM1QixTQUFPO0FBQUVGLFFBQUksRUFBRSxpQkFBUjtBQUEyQkcsV0FBTyxFQUFFRDtBQUFwQyxHQUFQO0FBQ0gsQ0FGRDs7QUFJQSxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUM3QixTQUFPO0FBQUVMLFFBQUksRUFBRSxpQkFBUjtBQUEyQkcsV0FBTyxFQUFFRTtBQUFwQyxHQUFQO0FBQ0gsQ0FGRDs7QUFLTyxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDSixJQUFEO0FBQUEsU0FBVSxVQUFDSyxRQUFELEVBQWM7QUFDMUMsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLFVBQU1DLEdBQUcsR0FBR0MsOEJBQVo7QUFDQUwsY0FBUSxDQUFDUixhQUFhLEVBQWQsQ0FBUjtBQUNBYyxrREFBSyxDQUNBQyxJQURMLFdBQ2FILEdBRGIsY0FDMkJULElBRDNCLEVBRUthLElB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SUFBbEMsQ0FBdUMsR0FBdkMsQ0FBcEUsR0FBa0gsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxFQUFlRCxnRUFBSyxDQUFDLGlCQUFELENBQXBCLEVBQXlDQyxJQUF6QyxDQUE4QyxHQUE5QyxDQUZqSTtBQUdJLG1CQUFPLEVBQUVILFlBSGI7QUFJSSxvQkFBUSxFQUFFNUQsSUFBSSxDQUFDOEMsS0FBTCxLQUFlLEVBQWYsSUFBcUI5QyxJQUFJLENBQUM2QyxRQUFMLEtBQWtCLEVBQXZDLElBQTZDN0MsSUFBSSxDQUFDK0MsUUFBTCxLQUFrQixFQUEvRCxHQUFvRSxJQUFwRSxHQUEyRSxLQUp6RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBMUNKLGVBb0RJO0FBQUcsbUJBQVMsRUFBRWUsZ0VBQUssQ0FBQyxjQUFELENBQW5CO0FBQUEseUVBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFDLGNBQVg7QUFBQSxtQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF1R0g7O0dBaEp1QnRCLE07VUFDRkMscUQsRUFDSEEscUQ7OztLQUZLRCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvc2lnbnVwLjdkMWE5NzAxNzE5ODE3ZmZmY2NlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBheGlvc0FwaUluc3RhbmNlIGZyb20gXCIuLi8uLi8uLi9oZWxwZXIvYXhpb3NcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcblxyXG5jb25zdCBzaWduVXBSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogXCJTSUdOX1VQX1JFUVVFU1RcIiB9O1xyXG59O1xyXG5cclxuY29uc3Qgc2lnblVwU3VjY2VzcyA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBcIlNJR05fVVBfU1VDQ0VTU1wiLCBwYXlsb2FkOiBkYXRhIH07XHJcbn07XHJcblxyXG5jb25zdCBzaWduVXBGYWlsdXJlID0gKGVycm9yKSA9PiB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBcIlNJR05fVVBfRkFJTFVSRVwiLCBwYXlsb2FkOiBlcnJvciB9O1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzaWduVXAgPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IFVybCA9IHByb2Nlc3MuZW52LmFwaTtcclxuICAgICAgICBkaXNwYXRjaChzaWduVXBSZXF1ZXN0KCkpO1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5wb3N0KGAke1VybH0vdXNlcnMvYCwgZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2lnblVwU3VjY2VzcyhyZXMuZGF0YS5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2lnblVwRmFpbHVyZShlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB2ZXJpZnkgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgVXJsID0gcHJvY2Vzcy5lbnYuYXBpO1xyXG4gICAgICAgIGF4aW9zQXBpSW5zdGFuY2VcclxuICAgICAgICAgICAgLmdldChgJHtVcmx9L3VzZXJzL3ZlcmlmeWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW4gPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IFVybCA9IHByb2Nlc3MuZW52LmFwaTtcclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAucG9zdChgJHtVcmx9L3VzZXJzL2F1dGgvbG9naW5gLCBkYXRhKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMT0dJTlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogcmVzLmRhdGEuZGF0YS5yb2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpZFwiLCByZXMuZGF0YS5kYXRhLmlkKVxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCByZXMuZGF0YS5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IhLlwiLCBcIlwiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59OyIsImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xyXG5jb25zdCBheGlvc0FwaUluc3RhbmNlID0gYXhpb3MuY3JlYXRlKCk7XHJcbi8vIGNvbnN0IFN3YWwgPSByZXF1aXJlKFwic3dlZXRhbGVydDJcIik7XHJcblxyXG4vL2FtYmlsIHRva2VuIGRhcmkgbG9jYWxzdG9yYWdlXHJcbmxldCB0b2tlbjtcclxuaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG59XHJcblxyXG5heGlvc0FwaUluc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcclxuICAgIGFzeW5jIChjb25maWcpID0+IHtcclxuICAgICAgICBjb25maWcuaGVhZGVycyA9IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfSxcclxuICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuKTtcclxuXHJcbmF4aW9zQXBpSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICAgIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA9PT0gXCJJbnZhbGlkIFRva2VuXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF4aW9zQXBpSW5zdGFuY2U7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL3NpZ251cC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBmYVVzZXIsIGZhRW52ZWxvcGUsIGZhTG9jaywgZmFFeWUsIGZhRXllU2xhc2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2lnblVwIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ3MvcmVkdXgvYWN0aW9ucy91c2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWdudXAoKSB7XHJcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIGZpcnN0bmFtZTogXCJZb3VyIEZpcnN0bmFtZVwiLFxyXG4gICAgICAgIGxhc3RuYW1lOiBcIllvdXIgTGFzdG5hbWVcIixcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2lzUGFzc3dvcmRTaG93LCBzZXRpc1Bhc3N3b3JkU2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCB0b29nbGVQYXNzd29yZFZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0aXNQYXNzd29yZFNob3coIWlzUGFzc3dvcmRTaG93KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhTmV3ID0ge1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGF0YU5ld1tldmVudC50YXJnZXQubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YU5ldyk7XHJcbiAgICAgICAgc2V0RGF0YShkYXRhTmV3KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2lnblVwID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgLy8gYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5hcGl9L3VzZXJzL2AsIGRhdGEpXHJcbiAgICAgICAgLy8gICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIC8vICAgICAgICAgU3dhbC5maXJlKFwiU3VjY2Vzc1wiLCByZXMuZGF0YS5tZXNzYWdlLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgLy8gICAgICAgICByb3V0ZXIucHVzaCgnL2F1dGgvc2lnbmluJylcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIC8vICAgICAgICAgU3dhbC5maXJlKFwiRXJyb3JcIiwgXCJTaWduIFVwIEZhaWxlZFwiLCBcImVycm9yXCIpO1xyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZVsnbWFpbi1zaWdudXAnXX0+XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlWydhdXRoLXNpZ251cHMnXX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e1tbXCJwdC01XCJdLCBbXCJtbC01XCJdLCBzdHlsZVtcInRpdGxlLXNpZ251cFwiXV0uam9pbihcIiBcIil9Plp3YWxsZXQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbW1wiZC1mbGV4XCJdLCBzdHlsZVtcImltYWdlLXNpZ251cFwiXV0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlWydiZ1dhdmUnXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvdmVjdG9yNC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBwcmltYXJ5IHBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9Hcm91cHBob25lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIHByaW1hcnkgcGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUxMi41MTMzODQ3NTI4NDY4M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTM2LjQ3MjI2MzQ3NDk5OTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnYm90dG9tLXNlY3Rpb24nXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLWJvdHRvbS1zZWN0aW9uJ119PkFwcCB0aGF0IENvdmVyaW5nIEJhbmtpbmcgTmVlZHMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydzdWJ0aXRsZS1ib3R0b20tc2VjdGlvbiddfT5ad2FsbGV0IGlzIGFuIGFwcGxpY2F0aW9uIHRoYXQgZm9jdXNzaW5nIGluIGJhbmtpbmcgbmVlZHMgZm9yIGFsbCB1c2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbiB0aGUgd29ybGQuIEFsd2F5cyB1cGRhdGVkIGFuZCBhbHdheXMgZm9sbG93aW5nIHdvcmxkIHRyZW5kcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgNTAwMCsgdXNlcnMgcmVnaXN0ZXJlZCBpbiBad2FsbGV0IGV2ZXJ5ZGF5IHdpdGggd29ybGR3aWRlXHJcbiAgICAgICAgICAgICAgICB1c2VycyBjb3ZlcmFnZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXtzdHlsZVtcImF1dGgtc2lnbnVwXCJdfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0aXRsZS1hc2lkZSddfT5TdGFydCBBY2Nlc3NpbmcgQmFua2luZyBOZWVkc1xyXG4gICAgICAgICAgICAgICAgV2l0aCBBbGwgRGV2aWNlcyBhbmQgQWxsIFBsYXRmb3Jtc1xyXG4gICAgICAgICAgICAgICAgV2l0aCAzMC4wMDArIFVzZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsnc3VidGl0bGUtYXNpZGUnXX0+VHJhbnNmZXJpbmcgbW9uZXkgaXMgZWFzc2llciB0aGFuIGV2ZXIsIHlvdSBjYW4gYWNjZXNzIFp3YWxsZXQgd2hlcmV2ZXIgeW91IGFyZS4gRGVza3RvcCwgbGFwdG9wLCBtb2JpbGUgcGhvbmU/IHdlIGNvdmVyIGFsbCBvZiB0aGF0IGZvciB5b3UhPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBtb2JpbGUgKi99XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZVsndGl0bGUtYXNpZGUtbW9iaWxlJ119PlNpZ24gVXA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsnc3VidGl0bGUtYXNpZGUtbW9iaWxlJ119PkNyZWF0ZSB5b3VyIGFjY291bnQgdG8gYWNjZXNzIFp3YWxsZXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgey8qIGVuZCBtb2JpbGUgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtbW1wibXQtNVwiXSwgc3R5bGVbXCJmb3JtLWFzaWRlXCJdXS5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gY2xhc3NOYW1lPXtkYXRhLnVzZXJuYW1lID09PSBcIlwiID8gc3R5bGUuaWNvblVzZXJuYW1lIDogc3R5bGVbXCJpY29uU2lnbnVwLWFjdGl2ZVwiXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJmb3JtLWNvbnRyb2wgbXQtMVwiXSwgc3R5bGVbXCJmb3JtLWNvbnRyb2xcIl1dLmpvaW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgdXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUVudmVsb3BlfSBjbGFzc05hbWU9e2RhdGEuZW1haWwgPT09IFwiXCIgPyBzdHlsZS5pY29uRW1haWwgOiBzdHlsZVtcImljb25TaWdudXAtYWN0aXZlXCJdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJmb3JtLWNvbnRyb2wgbXQtMVwiXSwgc3R5bGVbXCJmb3JtLWNvbnRyb2xcIl1dLmpvaW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZS1tYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMb2NrfSBjbGFzc05hbWU9e2RhdGEucGFzc3dvcmQgPT09IFwiXCIgPyBzdHlsZS5pY29uUGFzc3dvcmQgOiBzdHlsZVtcImljb25TaWdudXAtYWN0aXZlXCJdfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsoaXNQYXNzd29yZFNob3cpID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJmb3JtLWNvbnRyb2wgbXQtMVwiXSwgc3R5bGVbXCJmb3JtLWNvbnRyb2xcIl1dLmpvaW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17aXNQYXNzd29yZFNob3cgPyBmYUV5ZSA6IGZhRXllU2xhc2h9IGNsYXNzTmFtZT17c3R5bGUuaWNvblBhc3N9IG9uQ2xpY2s9e3Rvb2dsZVBhc3N3b3JkVmlzaWJpbGl0eX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtkYXRhLmVtYWlsID09PSBcIlwiICYmIGRhdGEudXNlcm5hbWUgPT09IFwiXCIgJiYgZGF0YS5wYXNzd29yZCA9PT0gXCJcIiA/IFtbXCJtdC01IGJ0blwiXSwgc3R5bGVbXCJidG4tYXV0aFwiXV0uam9pbihcIiBcIikgOiBbW1wibXQtNSBidG5cIl0sIHN0eWxlW1wiYnRuLWF1dGgtYWN0aXZlXCJdXS5qb2luKFwiIFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNpZ25VcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkYXRhLmVtYWlsID09PSBcIlwiICYmIGRhdGEudXNlcm5hbWUgPT09IFwiXCIgJiYgZGF0YS5wYXNzd29yZCA9PT0gXCJcIiA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ2RvbnQtaGF2ZWFjYyddfT5BbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gTGV04oCZc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvc2lnbmluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4gTG9naW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2FzaWRlID5cclxuICAgICAgICA8L21haW4gPlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9