webpackHotUpdate_N_E("pages/home",{

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
          className: "col-lg-4 col-12",
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
          className: "col-lg-8 col-12",
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
                className: "col-lg-4 col-12",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcyJdLCJuYW1lcyI6WyJkYXRhIiwibmFtZSIsImluY29tZSIsIm91dGNvbWUiLCJIb21lIiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsImhpc3RvcnkiLCJzZXRIaXN0b3J5Iiwic2V0SW5jb21lIiwiZXhwZW5zZSIsInNldEV4cGVuc2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVIaXN0b3J5IiwicHVzaCIsInVzZUVmZmVjdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVybCIsInByb2Nlc3MiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlcyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInN0eWxlIiwiY3JlZGl0IiwicGhvbmVOdW1iZXIiLCJmYUFycm93VXAiLCJpY29uSGVhZGVyIiwiZmFQbHVzIiwiZmFBcnJvd0Rvd24iLCJpY29uSW5jb21lIiwidW5kZWZpbmVkIiwiaWNvbkV4cGVuc2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpbWFnZSIsImZpcnN0bmFtZSIsInR5cGUiLCJhbW91bnQiLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDVDtBQUNJQyxNQUFJLEVBQUUsS0FEVjtBQUVJQyxRQUFNLEVBQUUsT0FGWjtBQUdJQyxTQUFPLEVBQUU7QUFIYixDQURTLEVBTVQ7QUFDSUYsTUFBSSxFQUFFLEtBRFY7QUFFSUMsUUFBTSxFQUFFLEVBRlo7QUFHSUMsU0FBTyxFQUFFO0FBSGIsQ0FOUyxFQVdUO0FBQ0lGLE1BQUksRUFBRSxLQURWO0FBRUlDLFFBQU0sRUFBRSxFQUZaO0FBR0lDLFNB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aUJBQUQsQ0FBaEMsR0FBc0RBLDhEQUFLLENBQUMsaUJBQUQsQ0FBaEUsQ0FBYjtBQUFBLGtDQUVRVyxJQUFJLENBQUNJLElBQUwsS0FBYyxVQUFkLGdCQUNZSixJQUFJLENBQUNLLE1BRGpCLGlCQUVZTCxJQUFJLENBQUNLLE1BRmpCO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBWEo7QUFBQSxxQkFBMERKLEtBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREo7QUF3QkgsaUJBekJBLENBTEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBa0dJLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsR0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF1R0g7O0dBNU1RekMsSTtVQUtVVSxxRDs7O0tBTFZWLEk7QUE4TU0scUVBQUE4QyxpRUFBUSxDQUFDOUMsSUFBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lLmViYjdhZDliMzExMjk4YTRiZjFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvYmFzZS9MYXlvdXQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kdWxlL1NpZGViYXInXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBmYVBsdXMsIGZhQXJyb3dVcCwgZmFBcnJvd0Rvd24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge1xyXG4gICAgQmFyQ2hhcnQsXHJcbiAgICBCYXIsXHJcbiAgICBYQXhpcyxcclxuICAgIFJlc3BvbnNpdmVDb250YWluZXIsXHJcbn0gZnJvbSAncmVjaGFydHMnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kdWxlL05hdmJhcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL21vZHVsZS9Gb290ZXInXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi9oZWxwZXIvYXV0aE5leHQnXHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiU2F0XCIsXHJcbiAgICAgICAgaW5jb21lOiBcIjEwMDAwXCIsXHJcbiAgICAgICAgb3V0Y29tZTogXCJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTdW5cIixcclxuICAgICAgICBpbmNvbWU6IFwiXCIsXHJcbiAgICAgICAgb3V0Y29tZTogXCIyMDAwMFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIk1vblwiLFxyXG4gICAgICAgIGluY29tZTogXCJcIixcclxuICAgICAgICBvdXRjb21lOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlR1ZVwiLFxyXG4gICAgICAgIGluY29tZTogXCJcIixcclxuICAgICAgICBvdXRjb21lOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIldlZFwiLFxyXG4gICAgICAgIGluY29tZTogXCJcIixcclxuICAgICAgICBvdXRjb21lOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlRodVwiLFxyXG4gICAgICAgIGluY29tZTogXCJcIixcclxuICAgICAgICBvdXRjb21lOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkZyaVwiLFxyXG4gICAgICAgIGluY29tZTogXCJcIixcclxuICAgICAgICBvdXRjb21lOiBcIlwiLFxyXG4gICAgfSxcclxuXTtcclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtoaXN0b3J5LCBzZXRIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtpbmNvbWUsIHNldEluY29tZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZXhwZW5zZSwgc2V0RXhwZW5zZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUhpc3RvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9oaXN0b3J5JylcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5hcGl9L3VzZXJzL2ZpbmQtb25lYDtcclxuICAgICAgICBheGlvcy5nZXQodXJsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGEuZGF0YVswXVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyKGRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgdG9rZW47XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpZCA9IHVzZXIuaWRcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5hcGl9L3RyYW5zYWN0aW9uL2luY29tZS8ke2lkfWA7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXJsKTtcclxuICAgICAgICBheGlvcy5nZXQodXJsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGEuZGF0YVswXVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRJbmNvbWUoZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbdXNlcl0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRva2VuO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWQgPSB1c2VyLmlkXHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuYXBpfS90cmFuc2FjdGlvbi9leHBlbnNlLyR7aWR9YDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICAgIGF4aW9zLmdldCh1cmwsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YS5kYXRhWzBdXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldEV4cGVuc2UoZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbdXNlcl0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRva2VuO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWQgPSB1c2VyLmlkXHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuYXBpfS90cmFuc2FjdGlvbi91c2VyLyR7aWR9YDtcclxuICAgICAgICBheGlvcy5nZXQodXJsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRIaXN0b3J5KGRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW3VzZXJdKTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dCB0aXRsZT1cIkhvbWUgfCBaLXdhbGxldFwiID5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2hlYWRlci1ob21lJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5CYWxhbmNlPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlJwLnt1c2VyLmNyZWRpdH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dXNlci5waG9uZU51bWJlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydjYXJkLWhlYWRlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd1VwfSBjbGFzc05hbWU9e3N0eWxlLmljb25IZWFkZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RyYW5zZmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgPlRyYW5zZmVyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydjYXJkLWhlYWRlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQbHVzfSBjbGFzc05hbWU9e3N0eWxlLmljb25IZWFkZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RvcHVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgID5Ub3AgVXA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ21haW4taG9tZSddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlW1wibWFpbi1jaGFydFwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnaW5jb21lLWNoYXJ0J119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBcnJvd0Rvd259IGNsYXNzTmFtZT17c3R5bGUuaWNvbkluY29tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JbmNvbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntpbmNvbWUuaW5jb21lID09IHVuZGVmaW5lZCA/IFwiUnAuMFwiIDogYFJwLiR7aW5jb21lLmluY29tZX1gfTwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2V4cGVuc2UtY2hhcnQnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93VXB9IGNsYXNzTmFtZT17c3R5bGUuaWNvbkV4cGVuc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXhwZW5zZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2V4cGVuc2UuZXhwZW5zZSA9PSB1bmRlZmluZWQgPyBcIlJwLjBcIiA6IGBScC4ke2V4cGVuc2UuZXhwZW5zZX1gfTwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD1cIjk1JVwiIGhlaWdodD1cIjUwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhckNoYXJ0IHdpZHRoPXsxMjB9IGhlaWdodD17NDB9IGRhdGE9e2RhdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PVwibmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhciBkYXRhS2V5PVwiaW5jb21lXCIgZmlsbD1cIiM2Mzc5RjRcIiByYWRpdXM9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXIgZGF0YUtleT1cIm91dGNvbWVcIiBmaWxsPVwiIzlEQTZCNVwiIHJhZGl1cz17MjB9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYXJDaGFydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBIaXN0b3J5ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVtcIm1haW4taGlzdG9yeVwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+VHJhbnNhY3Rpb24gSGlzdG9yeTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgb25DbGljaz17aGFuZGxlSGlzdG9yeX0+U2VlIGFsbDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGlzdG9yeS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IG1iLTMganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5hcGlfaW1nfSR7aXRlbS5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBmZWF0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1Nn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsndGV4dC1oaXN0b3J5LWhvbWUnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2l0ZW0uZmlyc3RuYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS50eXBlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPXtgJHtpdGVtLnR5cGUgPT09IFwiVHJhbnNmZXJcIiA/IHN0eWxlWydhbW91bnQtdHJhbnNmZXInXSA6IHN0eWxlWydhbW91bnQtcmVjZWl2ZXInXX1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnR5cGUgPT09IFwiVHJhbnNmZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgLVJwJHtpdGVtLmFtb3VudH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGArUnAke2l0ZW0uYW1vdW50fWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L0xheW91dD5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKEhvbWUpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=