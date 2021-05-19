webpackHotUpdate_N_E("pages/home",{

/***/ "./helper/authNext.js":
/*!****************************!*\
  !*** ./helper/authNext.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "F:\\xampp\\htdocs\\arkademy\\Zwallet\\zwallet\\helper\\authNext.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var withAuth = function withAuth(Component) {
  var _s = $RefreshSig$();

  var Auth = function Auth(props) {
    _s();

    var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
        isLogin = _useState[0],
        setIsLogin = _useState[1]; // Check Token In localStorage


    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
      if (!window.localStorage.getItem("token")) {
        setIsLogin("notLogin");
      } else {
        setIsLogin("login");
      }
    });

    if (isLogin) {
      if (isLogin === "login") {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 24
        }, _this);
      } else {
        router.push("/auth/signin");
      }
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 16
    }, _this); // If user is logged in, return original component
  };

  _s(Auth, "H7htHfVysVnG3qBkF0QfVGbQ2LA=", false, function () {
    return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
  });

  return Auth;
};

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

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

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_base_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/base/Layout */ "./components/base/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_module_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/module/Sidebar */ "./components/module/Sidebar/index.js");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/home.module.css */ "./styles/home.module.css");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _components_module_Navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/module/Navbar */ "./components/module/Navbar/index.js");
/* harmony import */ var _components_module_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/module/Footer */ "./components/module/Footer/index.js");
/* harmony import */ var _helper_authNext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helper/authNext */ "./helper/authNext.js");


var _jsxFileName = "F:\\xampp\\htdocs\\arkademy\\Zwallet\\zwallet\\pages\\home.js",
    _s = $RefreshSig$();














var data = [{
  name: "Sat",
  income: "10000",
  outcome: ""
}, {
  name: "Sun",
  income: "",
  outcome: "20000"
}, {
  name: "Mon",
  income: "",
  outcome: ""
}, {
  name: "Tue",
  income: "",
  outcome: ""
}, {
  name: "Wed",
  income: "",
  outcome: ""
}, {
  name: "Thu",
  income: "",
  outcome: ""
}, {
  name: "Fri",
  income: "",
  outcome: ""
}];

function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      history = _useState2[0],
      setHistory = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      income = _useState3[0],
      setIncome = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      expense = _useState4[0],
      setExpense = _useState4[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  var handleHistory = function handleHistory() {
    router.push('/history');
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var token = localStorage.getItem('token');
    var url = "".concat("http://localhost:8080/api/v1", "/users/find-one");
    axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (res) {
      var data = res.data.data[0]; // console.log(data);

      setUser(data);
    })["catch"](function (err) {
      console.log(err);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var token;

    if (true) {
      token = localStorage.getItem("token");
    }

    var id = user.id;
    var url = "".concat("http://localhost:8080/api/v1", "/transaction/income/").concat(id); // console.log(url);

    axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (res) {
      var data = res.data.data[0]; // console.log(data);

      setIncome(data);
    })["catch"](function (err) {
      console.log(err);
    });
  }, [user]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var token;

    if (true) {
      token = localStorage.getItem("token");
    }

    var id = user.id;
    var url = "".concat("http://localhost:8080/api/v1", "/transaction/expense/").concat(id); // console.log(url);

    axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (res) {
      var data = res.data.data[0]; // console.log(data);

      setExpense(data);
    })["catch"](function (err) {
      console.log(err);
    });
  }, [user]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var token;

    if (true) {
      token = localStorage.getItem("token");
    }

    var id = user.id;
    var url = "".concat("http://localhost:8080/api/v1", "/transaction/user/").concat(id);
    axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (res) {
      var data = res.data.data; // console.log(data);

      setHistory(data);
    })["catch"](function (err) {
      console.log(err);
    });
  }, [user]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_base_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Home | Z-wallet",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Navbar__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-lg-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-lg-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['header-home'],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-8",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                  children: "Balance"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: ["Rp.", user.credit]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: user.phoneNumber
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-4",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['card-header'],
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowUp"],
                    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.iconHeader
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
                    href: "/transfer",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: "Transfer"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['card-header'],
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlus"],
                    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.iconHeader
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
                    href: "/topup",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: "Top Up"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 185,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['main-home'],
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "d-flex",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["main-chart"],
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "d-flex mb-5",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['income-chart'],
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowDown"],
                      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.iconIncome
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 196,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "Income"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 197,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                      children: income.income == undefined ? "Rp.0" : "Rp.".concat(income.income)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 198,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 195,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['expense-chart'],
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowUp"],
                      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.iconExpense
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 202,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "Expense"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 203,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                      children: expense.expense == undefined ? "Rp.0" : "Rp.".concat(expense.expense)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 204,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(recharts__WEBPACK_IMPORTED_MODULE_10__["ResponsiveContainer"], {
                  width: "95%",
                  height: "50%",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(recharts__WEBPACK_IMPORTED_MODULE_10__["BarChart"], {
                    width: 120,
                    height: 40,
                    data: data,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(recharts__WEBPACK_IMPORTED_MODULE_10__["XAxis"], {
                      dataKey: "name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 210,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(recharts__WEBPACK_IMPORTED_MODULE_10__["Bar"], {
                      dataKey: "income",
                      fill: "#6379F4",
                      radius: 20
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 211,
                      columnNumber: 45
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(recharts__WEBPACK_IMPORTED_MODULE_10__["Bar"], {
                      dataKey: "outcome",
                      fill: "#9DA6B5",
                      radius: 20
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 212,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["main-history"],
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "d-flex",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    children: "Transaction History"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                    onClick: handleHistory,
                    children: "See all"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 37
                }, this), history.map(function (item, index) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "d-flex mb-3 justify-content-between",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "".concat("http://localhost:8080/").concat(item.image),
                      alt: "Picture feature",
                      width: 56,
                      height: 56
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['text-history-home'],
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                        children: item.firstname
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 233,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: item.type
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 234,
                        columnNumber: 53
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 232,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                        className: "".concat(item.type === "Transfer" ? _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['amount-transfer'] : _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['amount-receiver']),
                        children: item.type === "Transfer" ? "-Rp".concat(item.amount) : "+Rp".concat(item.amount)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 237,
                        columnNumber: 53
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 236,
                      columnNumber: 49
                    }, _this)]
                  }, index, true, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 45
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 159,
    columnNumber: 9
  }, this);
}

_s(Home, "QAuoajI7nOgTKnPoRrQp2UgAI/k=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_helper_authNext__WEBPACK_IMPORTED_MODULE_13__["default"])(Home));

var _c, _c2;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "%default%");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVyL2F1dGhOZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9ob21lLmpzIl0sIm5hbWVzIjpbIndpdGhBdXRoIiwiQ29tcG9uZW50IiwiQXV0aCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsInVzZUVmZmVjdCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwiZGF0YSIsIm5hbWUiLCJpbmNvbWUiLCJvdXRjb21lIiwiSG9tZSIsInVzZXIiLCJzZXRVc2VyIiwiaGlzdG9yeSIsInNldEhpc3RvcnkiLCJzZXRJbmNvbWUiLCJleHBlbnNlIiwic2V0RXhwZW5zZSIsImhhbmRsZUhpc3RvcnkiLCJ0b2tlbiIsInVybCIsInByb2Nlc3MiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlcyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInN0eWxlIiwiY3JlZGl0IiwicGhvbmVOdW1iZXIiLCJmYUFycm93VXAiLCJpY29uSGVhZGVyIiwiZmFQbHVzIiwiZmFBcnJvd0Rvd24iLCJpY29uSW5jb21lIiwidW5kZWZpbmVkIiwiaWNvbkV4cGVuc2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpbWFnZSIsImZpcnN0bmFtZSIsInR5cGUiLCJhbW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFNBQUQsRUFBZTtBQUFBOztBQUM1QixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDcEIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEb0Isb0JBRVVDLHNEQUFRLENBQUMsSUFBRCxDQUZsQjtBQUFBLFFB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Q0FBUyxZQUFLSixJQUFJLENBQUNJLElBQUwsS0FBYyxVQUFkLEdBQTJCZiw4REFBSyxDQUFDLGlCQUFELENBQWhDLEdBQXNEQSw4REFBSyxDQUFDLGlCQUFELENBQWhFLENBQWI7QUFBQSxrQ0FFUVcsSUFBSSxDQUFDSSxJQUFMLEtBQWMsVUFBZCxnQkFDWUosSUFBSSxDQUFDSyxNQURqQixpQkFFWUwsSUFBSSxDQUFDSyxNQUZqQjtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVhKO0FBQUEscUJBQTBESixLQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKO0FBd0JILGlCQXpCQSxDQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQWtHSSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdUdIOztHQTVNUWxDLEk7VUFLVWIscUQ7OztLQUxWYSxJO0FBOE1NLHFFQUFBbEIsaUVBQVEsQ0FBQ2tCLElBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS5kZGU4YWE5ZjNmYThiOTZhYzUwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IHdpdGhBdXRoID0gKENvbXBvbmVudCkgPT4ge1xyXG4gICAgY29uc3QgQXV0aCA9IChwcm9wcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgICAgIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBUb2tlbiBJbiBsb2NhbFN0b3JhZ2VcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0xvZ2luKFwibm90TG9naW5cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0xvZ2luKFwibG9naW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGlzTG9naW4pIHtcclxuICAgICAgICAgICAgaWYgKGlzTG9naW4gPT09IFwibG9naW5cIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2F1dGgvc2lnbmluXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz47XHJcblxyXG4gICAgICAgIC8vIElmIHVzZXIgaXMgbG9nZ2VkIGluLCByZXR1cm4gb3JpZ2luYWwgY29tcG9uZW50XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBBdXRoO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGg7IiwiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2Jhc2UvTGF5b3V0J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL21vZHVsZS9TaWRlYmFyJ1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL2hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgZmFQbHVzLCBmYUFycm93VXAsIGZhQXJyb3dEb3duIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtcclxuICAgIEJhckNoYXJ0LFxyXG4gICAgQmFyLFxyXG4gICAgWEF4aXMsXHJcbiAgICBSZXNwb25zaXZlQ29udGFpbmVyLFxyXG59IGZyb20gJ3JlY2hhcnRzJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL21vZHVsZS9OYXZiYXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9tb2R1bGUvRm9vdGVyJ1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vaGVscGVyL2F1dGhOZXh0J1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlNhdFwiLFxyXG4gICAgICAgIGluY29tZTogXCIxMDAwMFwiLFxyXG4gICAgICAgIG91dGNvbWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3VuXCIsXHJcbiAgICAgICAgaW5jb21lOiBcIlwiLFxyXG4gICAgICAgIG91dGNvbWU6IFwiMjAwMDBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJNb25cIixcclxuICAgICAgICBpbmNvbWU6IFwiXCIsXHJcbiAgICAgICAgb3V0Y29tZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJUdWVcIixcclxuICAgICAgICBpbmNvbWU6IFwiXCIsXHJcbiAgICAgICAgb3V0Y29tZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJXZWRcIixcclxuICAgICAgICBpbmNvbWU6IFwiXCIsXHJcbiAgICAgICAgb3V0Y29tZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJUaHVcIixcclxuICAgICAgICBpbmNvbWU6IFwiXCIsXHJcbiAgICAgICAgb3V0Y29tZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJGcmlcIixcclxuICAgICAgICBpbmNvbWU6IFwiXCIsXHJcbiAgICAgICAgb3V0Y29tZTogXCJcIixcclxuICAgIH0sXHJcbl07XHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaGlzdG9yeSwgc2V0SGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaW5jb21lLCBzZXRJbmNvbWVdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2V4cGVuc2UsIHNldEV4cGVuc2VdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBoYW5kbGVIaXN0b3J5ID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvaGlzdG9yeScpXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuYXBpfS91c2Vycy9maW5kLW9uZWA7XHJcbiAgICAgICAgYXhpb3MuZ2V0KHVybCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhLmRhdGFbMF1cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcihkYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRva2VuO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWQgPSB1c2VyLmlkXHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuYXBpfS90cmFuc2FjdGlvbi9pbmNvbWUvJHtpZH1gO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgICAgYXhpb3MuZ2V0KHVybCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhLmRhdGFbMF1cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0SW5jb21lKGRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW3VzZXJdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCB0b2tlbjtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlkID0gdXNlci5pZFxyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52LmFwaX0vdHJhbnNhY3Rpb24vZXhwZW5zZS8ke2lkfWA7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXJsKTtcclxuICAgICAgICBheGlvcy5nZXQodXJsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGEuZGF0YVswXVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRFeHBlbnNlKGRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW3VzZXJdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCB0b2tlbjtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlkID0gdXNlci5pZFxyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52LmFwaX0vdHJhbnNhY3Rpb24vdXNlci8ke2lkfWA7XHJcbiAgICAgICAgYXhpb3MuZ2V0KHVybCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0SGlzdG9yeShkYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFt1c2VyXSk7XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgdGl0bGU9XCJIb21lIHwgWi13YWxsZXRcIiA+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnaGVhZGVyLWhvbWUnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkJhbGFuY2U8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+UnAue3VzZXIuY3JlZGl0fTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt1c2VyLnBob25lTnVtYmVyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnY2FyZC1oZWFkZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXJyb3dVcH0gY2xhc3NOYW1lPXtzdHlsZS5pY29uSGVhZGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90cmFuc2ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhID5UcmFuc2ZlcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnY2FyZC1oZWFkZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c30gY2xhc3NOYW1lPXtzdHlsZS5pY29uSGVhZGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90b3B1cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICA+VG9wIFVwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydtYWluLWhvbWUnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVtcIm1haW4tY2hhcnRcIl19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2luY29tZS1jaGFydCddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXJyb3dEb3dufSBjbGFzc05hbWU9e3N0eWxlLmljb25JbmNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW5jb21lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57aW5jb21lLmluY29tZSA9PSB1bmRlZmluZWQgPyBcIlJwLjBcIiA6IGBScC4ke2luY29tZS5pbmNvbWV9YH08L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydleHBlbnNlLWNoYXJ0J119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd1VwfSBjbGFzc05hbWU9e3N0eWxlLmljb25FeHBlbnNlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkV4cGVuc2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntleHBlbnNlLmV4cGVuc2UgPT0gdW5kZWZpbmVkID8gXCJScC4wXCIgOiBgUnAuJHtleHBlbnNlLmV4cGVuc2V9YH08L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCI5NSVcIiBoZWlnaHQ9XCI1MCVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJDaGFydCB3aWR0aD17MTIwfSBoZWlnaHQ9ezQwfSBkYXRhPXtkYXRhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8WEF4aXMgZGF0YUtleT1cIm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXIgZGF0YUtleT1cImluY29tZVwiIGZpbGw9XCIjNjM3OUY0XCIgcmFkaXVzPXsyMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFyIGRhdGFLZXk9XCJvdXRjb21lXCIgZmlsbD1cIiM5REE2QjVcIiByYWRpdXM9ezIwfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFyQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogSGlzdG9yeSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbXCJtYWluLWhpc3RvcnlcIl19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlRyYW5zYWN0aW9uIEhpc3Rvcnk8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IG9uQ2xpY2s9e2hhbmRsZUhpc3Rvcnl9PlNlZSBhbGw8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hpc3RvcnkubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBtYi0zIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuYXBpX2ltZ30ke2l0ZW0uaW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgZmVhdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezU2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ3RleHQtaGlzdG9yeS1ob21lJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntpdGVtLmZpcnN0bmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0udHlwZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT17YCR7aXRlbS50eXBlID09PSBcIlRyYW5zZmVyXCIgPyBzdHlsZVsnYW1vdW50LXRyYW5zZmVyJ10gOiBzdHlsZVsnYW1vdW50LXJlY2VpdmVyJ119YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50eXBlID09PSBcIlRyYW5zZmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYC1ScCR7aXRlbS5hbW91bnR9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgK1JwJHtpdGVtLmFtb3VudH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChIb21lKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9