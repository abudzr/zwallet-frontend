webpackHotUpdate_N_E("pages/history",{

/***/ "./parts/History/index.js":
/*!********************************!*\
  !*** ./parts/History/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HistoryParts; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_history_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/history.module.css */ "./styles/history.module.css");
/* harmony import */ var _styles_history_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_history_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "F:\\xampp\\htdocs\\arkademy\\Zwallet\\zwallet\\parts\\History\\index.js",
    _s = $RefreshSig$();






function HistoryParts() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(); // const [dataIsLogin, setDataIsLogin] = useState([]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      totalPage = _useState3[0],
      setTotalPage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      currentPage = _useState4[0],
      setCurrentPage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("4"),
      queryLimit = _useState5[0],
      setQueryLimit = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("asc"),
      queryOrder = _useState6[0],
      setQueryOrder = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("createdAt"),
      querySort = _useState7[0],
      setQuerySort = _useState7[1];

  var sort = [{
    label: "Type",
    value: "type"
  }, {
    label: "Added",
    value: "createdAt"
  }, {
    label: "Amount",
    value: "amount"
  }];
  var order = [{
    label: "Ascending",
    value: "ASC"
  }, {
    label: "Descending",
    value: "DESC"
  }];
  var limit = [{
    label: "Limit 1",
    value: "1"
  }, {
    label: "Limit 2",
    value: "2"
  }, {
    label: "Limit 4",
    value: "4"
  }, {
    label: "Limit 5",
    value: "5"
  }];

  var handleClickPage = function handleClickPage(index) {
    setPage(index + 1);
  };

  var handleClickDetail = function handleClickDetail(data) {
    router.push("/history/".concat(data));
  };

  var token;

  if (true) {
    token = localStorage.getItem("token");
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var id = localStorage.getItem('id'); // http://localhost:8080/api/v1/transaction/user/7?page=1&perPage=2&sortBy=createdAt&order=asc

    var url = "".concat("http://localhost:8080/api/v1", "/transaction/user/").concat(id, "?page=").concat(page, "&perPage=").concat(queryLimit, "&order=").concat(queryOrder, "&sortBy=").concat(querySort); // console.log(url);

    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(function (res) {
      var data = res.data.data; // console.log(res.data);

      setUser(data);
      setTotalPage(res.data.totalPage);
      setCurrentPage(res.data.currentPage);
    })["catch"](function (err) {
      console.log(err);
    });
  }, [page, queryLimit, queryOrder, querySort]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_history_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['card-history'],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "Transaction History"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, this), user.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: [['d-flex'], ['mb-3'], ['justify-content-between'], _styles_history_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['card-transaction-history']].join(" "),
        onClick: function onClick() {
          return handleClickDetail(item.id);
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "".concat("http://localhost:8080/").concat(item.image),
          alt: "Picture Transaction",
          width: 70,
          height: 70
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_history_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['text-transaction'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: [item.firstname, " ", item.lastname]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: item.type
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
            className: "".concat(item.type === "Transfer" ? _styles_history_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['amount-transfer'] : _styles_history_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['amount-receiver']),
            children: item.type === "Transfer" ? "-Rp".concat(item.amount) : "+Rp".concat(item.amount)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 25
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row pl-2 pl-lg-0 mt-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-12 d-flex justify-content-center",
        children: parseInt(totalPage) > 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Pagination"], {
          "aria-label": "Page navigation example",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationLink"], {
              first: true,
              onClick: function onClick(e) {
                return setPage(1);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 29
          }, this), Array.from(Array(totalPage).keys()).map(function (data, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationItem"], {
              active: currentPage === index + 1,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationLink"], {
                onClick: function onClick(e) {
                  return handleClickPage(index);
                },
                children: index + 1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 41
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 37
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationLink"], {
              last: true,
              onClick: function onClick(e) {
                return setPage(totalPage);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 25
        }, this) : ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row mt-5 ml-1 mr-1 justify-content-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          onChange: function onChange(event) {
            return setQuerySort(event.target.value);
          },
          className: "w-100 custom-select font-weight-normal",
          children: sort.map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: item.value,
              children: item.label
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          onChange: function onChange(event) {
            setQueryOrder(event.target.value);
          },
          className: "w-100 custom-select",
          children: order.map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: item.value,
              children: item.label
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          onChange: function onChange(event) {
            setQueryLimit(event.target.value);
          },
          className: "w-100 custom-select",
          children: limit.map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: item.value,
              children: item.label
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 9
  }, this);
}

_s(HistoryParts, "5EROFDdsAQGGzk6yC2h7C0TpyEI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = HistoryParts;

var _c;

$RefreshReg$(_c, "HistoryParts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFydHMvSGlzdG9yeS9pbmRleC5qcyJdLCJuYW1lcyI6WyJIaXN0b3J5UGFydHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwicGFnZSIsInNldFBhZ2UiLCJ0b3RhbFBhZ2UiLCJzZXRUb3RhbFBhZ2UiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwicXVlcnlMaW1pdCIsInNldFF1ZXJ5TGltaXQiLCJxdWVyeU9yZGVyIiwic2V0UXVlcnlPcmRlciIsInF1ZXJ5U29ydCIsInNldFF1ZXJ5U29ydCIsInNvcnQiLCJsYWJlbCIsInZhbHVlIiwib3JkZXIiLCJsaW1pdCIsImhhbmRsZUNsaWNrUGFnZSIsImluZGV4IiwiaGFuZGxlQ2xpY2tEZXRhaWwiLCJkYXRhIiwicHVzaCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZUVmZmVjdCIsImlkIiwidXJsIiwicHJvY2VzcyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsIm1hcCIsIml0ZW0iLCJqb2luIiwiaW1hZ2UiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInR5cGUiLCJhbW91bnQiLCJwYXJzZUludCIsImUiLCJBcnJheSIsImZyb20iLCJrZXlzIiwiZXZlbnQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUFBOztBQUNuQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBRG1DLENBRW5DOztBQUZtQyxrQkFHWEMsc0RBQVEsQ0FBQyxFQUFELENBSEc7QUFBQSxNQUc1QkMsSUFINEI7QUFBQSxNQUd0QkMsT0FIc0I7O0FBQUEsbUJBSVhGLHNEQUFRLENBQUMsQ0FBRCxDQUpHO0FBQUEs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SmQ7QUFBQSxvQkFNS0MsS0FBSyxDQUFDc0IsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT3BCLEtBQVAsRUFBaUI7QUFDeEIsZ0NBQ0k7QUFBUSxtQkFBSyxFQUFFb0IsSUFBSSxDQUFDeEIsS0FBcEI7QUFBQSx3QkFDS3dCLElBQUksQ0FBQ3pCO0FBRFYsZUFBZ0NLLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFLSCxXQU5BO0FBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmSixlQStCSTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLCtCQUNJO0FBQ0ksa0JBQVEsRUFBRSxrQkFBQ2dDLEtBQUQsRUFBVztBQUNqQjNDLHlCQUFhLENBQUMyQyxLQUFLLENBQUNDLE1BQU4sQ0FBYXJDLEtBQWQsQ0FBYjtBQUNILFdBSEw7QUFJSSxtQkFBUyxFQUFDLHFCQUpkO0FBQUEsb0JBTUtFLEtBQUssQ0FBQ3FCLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9wQixLQUFQLEVBQWlCO0FBQ3hCLGdDQUNJO0FBQVEsbUJBQUssRUFBRW9CLElBQUksQ0FBQ3hCLEtBQXBCO0FBQUEsd0JBQ0t3QixJQUFJLENBQUN6QjtBQURWLGVBQWdDSyxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBS0gsV0FOQTtBQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTRHSDs7R0FuTXVCeEIsWTtVQUNMRSxxRDs7O0tBREtGLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaGlzdG9yeS41M2ExODhkZGI4OWIwYmFhZjA5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uL3N0eWxlcy9oaXN0b3J5Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IFBhZ2luYXRpb24sIFBhZ2luYXRpb25JdGVtLCBQYWdpbmF0aW9uTGluayB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhpc3RvcnlQYXJ0cygpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgLy8gY29uc3QgW2RhdGFJc0xvZ2luLCBzZXREYXRhSXNMb2dpbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFt0b3RhbFBhZ2UsIHNldFRvdGFsUGFnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgbGV0IFtxdWVyeUxpbWl0LCBzZXRRdWVyeUxpbWl0XSA9IHVzZVN0YXRlKFwiNFwiKTtcclxuICAgIGxldCBbcXVlcnlPcmRlciwgc2V0UXVlcnlPcmRlcl0gPSB1c2VTdGF0ZShcImFzY1wiKTtcclxuICAgIGxldCBbcXVlcnlTb3J0LCBzZXRRdWVyeVNvcnRdID0gdXNlU3RhdGUoXCJjcmVhdGVkQXRcIik7XHJcblxyXG4gICAgY29uc3Qgc29ydCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlR5cGVcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwidHlwZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJBZGRlZFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJjcmVhdGVkQXRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiQW1vdW50XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcImFtb3VudFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3Qgb3JkZXIgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJBc2NlbmRpbmdcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwiQVNDXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NlbmRpbmdcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwiREVTQ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgbGltaXQgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJMaW1pdCAxXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIjFcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiTGltaXQgMlwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCIyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkxpbWl0IDRcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwiNFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJMaW1pdCA1XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIjVcIixcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGlja1BhZ2UgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBzZXRQYWdlKGluZGV4ICsgMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrRGV0YWlsID0gKGRhdGEpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaChgL2hpc3RvcnkvJHtkYXRhfWApXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCB0b2tlbjtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKVxyXG4gICAgICAgIC8vIGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvdHJhbnNhY3Rpb24vdXNlci83P3BhZ2U9MSZwZXJQYWdlPTImc29ydEJ5PWNyZWF0ZWRBdCZvcmRlcj1hc2NcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5hcGl9L3RyYW5zYWN0aW9uL3VzZXIvJHtpZH0/cGFnZT0ke3BhZ2V9JnBlclBhZ2U9JHtxdWVyeUxpbWl0fSZvcmRlcj0ke3F1ZXJ5T3JkZXJ9JnNvcnRCeT0ke3F1ZXJ5U29ydH1gO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgICAgYXhpb3MuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldFVzZXIoZGF0YSlcclxuICAgICAgICAgICAgICAgIHNldFRvdGFsUGFnZShyZXMuZGF0YS50b3RhbFBhZ2UpXHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGFnZShyZXMuZGF0YS5jdXJyZW50UGFnZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbcGFnZSwgcXVlcnlMaW1pdCwgcXVlcnlPcmRlciwgcXVlcnlTb3J0XSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydjYXJkLWhpc3RvcnknXX0+XHJcbiAgICAgICAgICAgIDxoMz5UcmFuc2FjdGlvbiBIaXN0b3J5PC9oMz5cclxuICAgICAgICAgICAge3VzZXIubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W1snZC1mbGV4J10sIFsnbWItMyddLCBbJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJ10sIHN0eWxlWydjYXJkLXRyYW5zYWN0aW9uLWhpc3RvcnknXV0uam9pbihcIiBcIil9IGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrRGV0YWlsKGl0ZW0uaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake3Byb2Nlc3MuZW52LmFwaV9pbWd9JHtpdGVtLmltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIFRyYW5zYWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsndGV4dC10cmFuc2FjdGlvbiddfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2l0ZW0uZmlyc3RuYW1lfSB7aXRlbS5sYXN0bmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0udHlwZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT17YCR7aXRlbS50eXBlID09PSBcIlRyYW5zZmVyXCIgPyBzdHlsZVsnYW1vdW50LXRyYW5zZmVyJ10gOiBzdHlsZVsnYW1vdW50LXJlY2VpdmVyJ119YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50eXBlID09PSBcIlRyYW5zZmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYC1ScCR7aXRlbS5hbW91bnR9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgK1JwJHtpdGVtLmFtb3VudH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgey8qIFBhZ2luYXNpICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwbC0yIHBsLWxnLTAgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cGFyc2VJbnQodG90YWxQYWdlKSA+IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIGFyaWEtbGFiZWw9XCJQYWdlIG5hdmlnYXRpb24gZXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uTGluayBmaXJzdCBvbkNsaWNrPXsoZSkgPT4gc2V0UGFnZSgxKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFnaW5hdGlvbkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QXJyYXkuZnJvbShBcnJheSh0b3RhbFBhZ2UpLmtleXMoKSkubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uSXRlbSBhY3RpdmU9e2N1cnJlbnRQYWdlID09PSBpbmRleCArIDF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb25MaW5rIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGlja1BhZ2UoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdpbmF0aW9uTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdpbmF0aW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb25MaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldFBhZ2UodG90YWxQYWdlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdpbmF0aW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogQWtoaXIgUGFnbmlzYWkgKi99XHJcbiAgICAgICAgICAgIHsvKiBhd2FsIHNvcnRpbmcgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTUgbWwtMSBtci0xIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFF1ZXJ5U29ydChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBjdXN0b20tc2VsZWN0IGZvbnQtd2VpZ2h0LW5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c29ydC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l0ZW0udmFsdWV9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRRdWVyeU9yZGVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIGN1c3RvbS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29yZGVyLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aXRlbS52YWx1ZX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFF1ZXJ5TGltaXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgY3VzdG9tLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGltaXQubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpdGVtLnZhbHVlfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIGFra2hpciBzb3J0aW5nICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==