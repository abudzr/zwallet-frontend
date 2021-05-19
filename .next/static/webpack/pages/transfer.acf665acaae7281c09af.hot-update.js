webpackHotUpdate_N_E("pages/transfer",{

/***/ "./parts/Transfer/index.js":
/*!*********************************!*\
  !*** ./parts/Transfer/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/transfer.module.css */ "./styles/transfer.module.css");
/* harmony import */ var _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_module_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/module/Button */ "./components/module/Button/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "F:\\xampp\\htdocs\\arkademy\\Zwallet\\zwallet\\parts\\Transfer\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function PartTransfer() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      result = _useState2[0],
      setResult = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showresult = _useState3[0],
      setShowresult = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showConfirmation = _useState4[0],
      setShowConfirmation = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showSuccess = _useState5[0],
      setShowSuccess = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showFailed = _useState6[0],
      setShowFailed = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      dataIsLogin = _useState7[0],
      setDataIsLogin = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      dataIdReceiver = _useState8[0],
      setDataIdReceiver = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      dataReceiver = _useState9[0],
      setDataReceiver = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      user = _useState10[0],
      setUser = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      select = _useState11[0],
      setSelect = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    idUser: "",
    idReceiver: "",
    amount: "",
    notes: "",
    pin: ""
  }),
      data = _useState12[0],
      setData = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: ""
  }),
      pin = _useState13[0],
      setPin = _useState13[1]; // search by name


  var handleFormChange = function handleFormChange(event) {
    setName(event.target.value);
    var token = localStorage.getItem('token');
    var url = "".concat("http://localhost:8080/api/v1", "/users?keyword=").concat(event.target.value);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (res) {
      if (event.target.value === "") {
        setResult(false);
      } else {
        setResult(true);
      }

      setUser(res.data.data);
    })["catch"](function (err) {
      setResult(false);
    });
  }; // get data by id 


  var handleClickUser = function handleClickUser(data) {
    setDataIdReceiver(data);
    setShowresult(true);
    setResult(false);
    setSelect(true);
    var url = "".concat("http://localhost:8080/api/v1", "/users/find-user?id=").concat(data);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(function (res) {
      var data = res.data.data[0]; // console.log(data);

      setDataReceiver(data);
    })["catch"](function (err) {
      console.log(err);
    });
  }; // change state data


  var handleChangeTransfer = function handleChangeTransfer(event) {
    var dataNew = _objectSpread({}, data);

    dataNew[event.target.name] = event.target.value; // console.log(dataNew);

    setData(dataNew);
  };

  var handleFormChangePin = function handleFormChangePin(event) {
    var dataNew = _objectSpread({}, pin);

    dataNew[event.target.name] = event.target.value; // console.log(dataNew);

    setPin(dataNew);
  };

  var handleClickContinue = function handleClickContinue() {
    setShowConfirmation(true);
    setShowresult(false);
  };

  var handleClickHome = function handleClickHome() {
    router.push('/home');
  };

  var handleConfirm = function handleConfirm(event) {
    event.preventDefault();
    var pinnumber = "".concat(pin.one).concat(pin.two).concat(pin.three).concat(pin.four).concat(pin.five).concat(pin.six);
    var url = axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat("http://localhost:8080/api/v1", "/transaction/transfer"), {
      idUser: dataIsLogin.id,
      idReceiver: dataIdReceiver,
      amount: data.amount,
      notes: data.notes,
      pin: pinnumber
    }).then(function (res) {
      setShowSuccess(true);
      setShowConfirmation(false); // router.push('/home')
    })["catch"](function (err) {
      setShowFailed(true);
      setShowConfirmation(false);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var token = localStorage.getItem('token');
    var url = "".concat("http://localhost:8080/api/v1", "/users/find-one");
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (res) {
      var data = res.data.data[0];
      setDataIsLogin(data);
    })["catch"](function (err) {
      console.log(err);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['card-transfer'],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [select === false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-transfer'],
          children: "Search Receiver"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: "mt-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: [["form-group"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-receiver"]].join(" "),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/search.png",
              width: 24,
              height: 24,
              alt: "Search",
              className: "search-img"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: "keyword",
              placeholder: "Search receiver here",
              value: name,
              onChange: handleFormChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 25
        }, this)]
      }, void 0, true), result === false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nodata,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images/nodata.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 25
        }, this)
      }, void 0, false), result === true && user.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: [["d-flex"], ["align-items-center"], ["py-2"], ["pl-3"], ["mt-4"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-users"]].join(" "),
          onClick: function onClick() {
            return handleClickUser(item.id);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "image",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "".concat("http://localhost:8080/").concat(item.image),
              width: 70,
              height: 70,
              alt: "User",
              className: "user"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 37
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 33
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "profile d-flex flex-column ml-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nameSearch,
              children: [item.firstname, " ", item.lastname]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: [["mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["number-Phone"]].join(" "),
              children: item.phoneNumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 37
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 33
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 29
        }, _this);
      }), showresult === true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-transfer'],
          children: "Transfer Money"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: [["d-flex"], ["align-items-center"], ["py-2"], ["pl-3"], ["mt-4"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-users"]].join(" "),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "image",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "".concat("http://localhost:8080/").concat(dataReceiver.image),
              width: 70,
              height: 70,
              alt: "User",
              className: "user"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex flex-column ml-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nameSearch,
              children: [dataReceiver.firstname, dataReceiver.lastname]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: [["mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["number-Phone"]].join(" "),
              children: dataReceiver.phoneNumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['sub-title-transfer'],
          children: ["Type the amount you want to transfer and then", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 113
          }, this), "press continue to the next steps."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: [["mt-5"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-transfer"]].join(" "),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "number",
              className: [["form-control mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-control-transfer"]].join(" "),
              name: "amount",
              id: "amount",
              placeholder: "0.00",
              onChange: handleChangeTransfer
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.credit,
          children: ["Rp", dataIsLogin.credit, " Available"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/pencil.png",
              width: 20,
              height: 20,
              alt: "pencil",
              className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['pencil-img']
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: [["form-control mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-notes"]].join(" "),
              name: "notes",
              id: "notes",
              placeholder: "Add some notes",
              onChange: handleChangeTransfer
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-content-end",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "continue",
            btn: "btn-continue",
            onClick: handleClickContinue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 25
        }, this)]
      }, void 0, true), showConfirmation === true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-transfer'],
          children: "Transfer To"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: [["d-flex"], ["align-items-center"], ["py-2"], ["pl-3"], ["mt-4"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-users"]].join(" "),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "image",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "".concat("http://localhost:8080/").concat(dataReceiver.image),
              width: 70,
              height: 70,
              alt: "User",
              className: "user"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex flex-column ml-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nameSearch,
              children: [dataReceiver.firstname, dataReceiver.lastname]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: [["mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["number-Phone"]].join(" "),
              children: dataReceiver.phoneNumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: [["mt-4"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-transfer']].join(" "),
          children: "Detail"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Amount"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Rp.", data.amount]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Balance Left"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Rp.", dataIsLogin.credit - data.amount]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Date & time"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: moment__WEBPACK_IMPORTED_MODULE_7___default()().toDate().getTime()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Notes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: data.notes
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-content-end",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "continue",
            btn: "btn-continue",
            toggle: "modal",
            target: "#exampleModalCenter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "modal fade",
          id: "exampleModalCenter",
          tabIndex: "-1",
          "data-backdrop": "false",
          "aria-labelledby": "exampleModalCenterTitle",
          "aria-hidden": "true",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "modal-dialog modal-dialog-centered",
            role: "document",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "modal-content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "modal-header ",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  className: "modal-title",
                  id: "exampleModalLongTitle",
                  children: "Enter PIN to Transfer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 316,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "button",
                  className: "close",
                  "data-dismiss": "modal",
                  "aria-label": "Close",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    "aria-hidden": "true",
                    children: "\xD7"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 319,
                    columnNumber: 45
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 318,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 315,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "modal-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['sub-title-modal'],
                  children: "Enter your 6 digits PIN for confirmation to continue transferring money. "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 323,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "d-flex justify-content-center",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: [["form-control mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-pin"]].join(" "),
                    name: "one",
                    id: "one",
                    onChange: handleFormChangePin
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 325,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: [["form-control mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-pin"]].join(" "),
                    name: "two",
                    id: "two",
                    onChange: handleFormChangePin
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 332,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: [["form-control mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-pin"]].join(" "),
                    name: "three",
                    id: "three",
                    onChange: handleFormChangePin
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 339,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: [["form-control mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-pin"]].join(" "),
                    name: "four",
                    id: "four",
                    onChange: handleFormChangePin
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 346,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: [["form-control mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-pin"]].join(" "),
                    name: "five",
                    id: "five",
                    onChange: handleFormChangePin
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 353,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: [["form-control mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-pin"]].join(" "),
                    name: "six",
                    id: "six",
                    onChange: handleFormChangePin
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 360,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 324,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 322,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: [["modal-footer"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["btn-modal"]].join(" "),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  title: "continue",
                  btn: "btn-continue",
                  onClick: handleConfirm
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 370,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 369,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 314,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 25
        }, this)]
      }, void 0, true), showSuccess === true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/images/success.png",
          width: 70,
          height: 70,
          alt: "success",
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['success-img']
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['text-success'],
          children: "Transfer Success"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: [["mt-4"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-transfer']].join(" "),
          children: "Detail"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Amount"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 392,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Rp.", data.amount]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 393,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Balance Left"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 396,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Rp.", dataIsLogin.credit - data.amount]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 397,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Date & time"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 400,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: moment__WEBPACK_IMPORTED_MODULE_7___default()().toDate().getTime()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 401,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Notes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 404,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: data.notes
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 405,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-transfer'],
          children: "Transfer To"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: [["d-flex"], ["align-items-center"], ["py-2"], ["pl-3"], ["mt-4"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-users"]].join(" "),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "image",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "".concat("http://localhost:8080/").concat(dataReceiver.image),
              width: 70,
              height: 70,
              alt: "User",
              className: "user"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 411,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 410,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex flex-column ml-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nameSearch,
              children: [dataReceiver.firstname, dataReceiver.lastname]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 420,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: [["mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["number-Phone"]].join(" "),
              children: dataReceiver.phoneNumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 421,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 419,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-content-end",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/share.png",
              width: 24,
              height: 24,
              alt: "share",
              className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.share
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 426,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
              btn: "btn-share"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 433,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 425,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/download.png",
              width: 22,
              height: 22,
              alt: "download",
              className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.download
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 436,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
              title: "Download PDF",
              btn: "btn-download"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 443,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 435,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "Back To Home",
            btn: "btn-continue",
            onClick: handleClickHome
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 445,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 25
        }, this)]
      }, void 0, true), showFailed === true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/images/failed.png",
          width: 70,
          height: 70,
          alt: "failed",
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['success-img']
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 452,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['text-success'],
          children: "Transfer Failed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['text-fail'],
          children: ["We can\u2019t transfer your money at the moment, we recommend you to check your", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 460,
            columnNumber: 133
          }, this), " internet connection and try again."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 460,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Amount"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 462,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Rp.", data.amount]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 463,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 461,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Balance Left"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 466,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Rp.", dataIsLogin.credit - data.amount]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 467,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Date & time"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 470,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: moment__WEBPACK_IMPORTED_MODULE_7___default()().toDate().getTime()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 471,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 469,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Notes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 474,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: data.notes
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 475,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 473,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-transfer'],
          children: "Transfer To"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 478,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: [["d-flex"], ["align-items-center"], ["py-2"], ["pl-3"], ["mt-4"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-users"]].join(" "),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "image",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "".concat("http://localhost:8080/").concat(dataReceiver.image),
              width: 70,
              height: 70,
              alt: "User",
              className: "user"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 481,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 480,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex flex-column ml-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nameSearch,
              children: [dataReceiver.firstname, dataReceiver.lastname]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 490,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: [["mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["number-Phone"]].join(" "),
              children: dataReceiver.phoneNumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 491,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 489,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 479,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-content-end",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "Try Again",
            btn: "btn-continue",
            onClick: handleClickHome
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 496,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 494,
          columnNumber: 25
        }, this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 144,
    columnNumber: 9
  }, this);
}

_s(PartTransfer, "C2mFW9R5nW4RKfSh7dPZIbn8Js8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = PartTransfer;
/* harmony default export */ __webpack_exports__["default"] = (PartTransfer);

var _c;

$RefreshReg$(_c, "PartTransfer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFydHMvVHJhbnNmZXIvaW5kZXguanMiXSwibmFtZXMiOlsiUGFydFRyYW5zZmVyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsInJlc3VsdCIsInNldFJlc3VsdCIsInNob3dyZXN1bHQiLCJzZXRTaG93cmVzdWx0Iiwic2hvd0NvbmZpcm1hdGlvbiIsInNldFNob3dDb25maXJtYXRpb24iLCJzaG93U3VjY2VzcyIsInNldFNob3dTdWNjZXNzIiwic2hvd0ZhaWxlZCIsInNldFNob3dGYWlsZWQiLCJkYXRhSXNMb2dpbiIsInNldERhdGFJc0xvZ2luIiwiZGF0YUlkUmVjZWl2ZXIiLCJzZXREYXRhSWRSZWNlaXZlciIsImRhdGFSZWNlaXZlciIsInNldERhdGFSZWNlaXZlciIsInVzZXIiLCJzZXRVc2VyIiwic2VsZWN0Iiwic2V0U2VsZWN0IiwiaWRVc2VyIiwiaWRSZWNlaXZlciIsImFtb3VudCIsIm5vdGVzIiwicGluIiwiZGF0YSIsInNldERhdGEiLCJvbmUiLCJ0d28iLCJ0aHJlZSIsImZvdXIiLCJmaXZlIiwic2l4Iiwic2V0UGluIiwiaGFuZGxlRm9ybUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1cmwiLCJwcm9jZXNzIiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXMiLCJlcnIiLCJoYW5kbGVDbGlja1VzZXIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlVHJhbnNmZXIiLCJkYXRhTmV3IiwiaGFuZGxlRm9ybUNoYW5nZVBpbiIsImhhbmRsZUNsaWNrQ29udGludWUiLCJoYW5kbGVDbGlja0hvbWUiLCJwdXNoIiwiaGFuZGxlQ29uZmlybSIsInByZXZlbnREZWZhdWx0IiwicGlubnVtYmVyIiwicG9zdCIsImlkIiwidXNlRWZmZWN0Iiwic3R5bGUiLCJqb2luIiwibm9kYXRhIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaW1hZ2UiLCJuYW1lU2VhcmNoIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJwaG9uZU51bWJlciIsImNyZWRpdCIsIm1vbWVudCIsInRvRGF0ZSIsImdldFRpbWUiLCJzaGFyZSIsImRvd25sb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQTs7QUFDcEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEb0Isa0JBRUlDLHNEQUFRLENBQUMsRUFBRCxDQUZaO0FBQUEsTUFFYkMsSUFGYTtBQUFBLE1BRVBDLE9BRk87O0FBQUEsbUJBR1FGLHNEQUFRLENBQUMsS0FBRCxDQUhoQjtBQUFBLE1BR2JHLE1BSGE7QUFBQSxNQUdMQyxTQUhLOztBQUFBLG1CQUlnQkosc0RBQVEsQ0FBQyxLQUFELENBSnhCO0FBQUEsTUFJYkssVUFKYTtBQUFBLE1BSURDLGFBSkM7O0FBQUEsbUJBSzRCTixzREFBUSxDQUFDLEtBQUQsQ0FMcEM7QUFBQSxNQUtiTyxnQkFMYTtBQUFBLE1BS0tDLG1CQUxMOztBQUFBLG1CQU1rQlIsc0RBQVEsQ0FBQyxLQUFELENBTjFCO0FBQUEsTUFNYlMsV0FOYTtBQUFBLE1BTUFDLGNBTkE7O0FBQUEsbUJBT2dCVixzREFBUSxDQUFDLEtBQUQsQ0FQeEI7QUFBQSxNQU9iVyxVQVBhO0FBQUEsTUFPREMsYUFQQzs7QUFBQSxtQkFRa0JaLHNEQUFRLENBQUMsRUFBRCxDQVIxQjtBQUFBLE1BUWJhLFdBUmE7QUFBQSxNQVFBQyxjQVJBOztBQUFBLG1CQVN3QmQsc0RBQVEsRUFUaEM7QUFBQSxNQVNiZSxjQVRhO0FBQUEsTUFTR0MsaUJBVEg7O0FBQUEsbUJBVW9CaEIsc0RBQVEsQ0FBQyxFQUFELENBVjVCO0FBQUEsTUFVYmlCLFlB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Ozs7S0FEVkYsWTtBQWdmTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJhbnNmZXIuYWNmNjY1YWNhYWU3MjgxYzA5YWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvdHJhbnNmZXIubW9kdWxlLmNzcydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vZHVsZS9CdXR0b24nXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuXHJcbmZ1bmN0aW9uIFBhcnRUcmFuc2ZlcigpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dyZXN1bHQsIHNldFNob3dyZXN1bHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dDb25maXJtYXRpb24sIHNldFNob3dDb25maXJtYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dTdWNjZXNzLCBzZXRTaG93U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0ZhaWxlZCwgc2V0U2hvd0ZhaWxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZGF0YUlzTG9naW4sIHNldERhdGFJc0xvZ2luXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtkYXRhSWRSZWNlaXZlciwgc2V0RGF0YUlkUmVjZWl2ZXJdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtkYXRhUmVjZWl2ZXIsIHNldERhdGFSZWNlaXZlcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0LCBzZXRTZWxlY3RdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaWRVc2VyOiBcIlwiLFxyXG4gICAgICAgIGlkUmVjZWl2ZXI6IFwiXCIsXHJcbiAgICAgICAgYW1vdW50OiBcIlwiLFxyXG4gICAgICAgIG5vdGVzOiBcIlwiLFxyXG4gICAgICAgIHBpbjogXCJcIlxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbcGluLCBzZXRQaW5dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG9uZTogXCJcIixcclxuICAgICAgICB0d286IFwiXCIsXHJcbiAgICAgICAgdGhyZWU6IFwiXCIsXHJcbiAgICAgICAgZm91cjogXCJcIixcclxuICAgICAgICBmaXZlOiBcIlwiLFxyXG4gICAgICAgIHNpeDogXCJcIixcclxuICAgIH0pO1xyXG4gICAgLy8gc2VhcmNoIGJ5IG5hbWVcclxuICAgIGNvbnN0IGhhbmRsZUZvcm1DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52LmFwaX0vdXNlcnM/a2V5d29yZD0ke2V2ZW50LnRhcmdldC52YWx1ZX1gO1xyXG4gICAgICAgIGF4aW9zLmdldCh1cmwsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KGZhbHNlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgIC8vIGdldCBkYXRhIGJ5IGlkIFxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tVc2VyID0gKGRhdGEpID0+IHtcclxuICAgICAgICBzZXREYXRhSWRSZWNlaXZlcihkYXRhKVxyXG4gICAgICAgIHNldFNob3dyZXN1bHQodHJ1ZSlcclxuICAgICAgICBzZXRSZXN1bHQoZmFsc2UpXHJcbiAgICAgICAgc2V0U2VsZWN0KHRydWUpXHJcblxyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52LmFwaX0vdXNlcnMvZmluZC11c2VyP2lkPSR7ZGF0YX1gO1xyXG4gICAgICAgIGF4aW9zLmdldCh1cmwpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YS5kYXRhWzBdXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGFSZWNlaXZlcihkYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGFuZ2Ugc3RhdGUgZGF0YVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlVHJhbnNmZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhTmV3ID0geyAuLi5kYXRhIH07XHJcbiAgICAgICAgZGF0YU5ld1tldmVudC50YXJnZXQubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YU5ldyk7XHJcbiAgICAgICAgc2V0RGF0YShkYXRhTmV3KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtQ2hhbmdlUGluID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YU5ldyA9IHsgLi4ucGluIH07XHJcbiAgICAgICAgZGF0YU5ld1tldmVudC50YXJnZXQubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YU5ldyk7XHJcbiAgICAgICAgc2V0UGluKGRhdGFOZXcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGlja0NvbnRpbnVlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dDb25maXJtYXRpb24odHJ1ZSlcclxuICAgICAgICBzZXRTaG93cmVzdWx0KGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrSG9tZSA9ICgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNvbmZpcm0gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHBpbm51bWJlciA9IGAke3Bpbi5vbmV9JHtwaW4udHdvfSR7cGluLnRocmVlfSR7cGluLmZvdXJ9JHtwaW4uZml2ZX0ke3Bpbi5zaXh9YDtcclxuICAgICAgICBjb25zdCB1cmwgPSBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LmFwaX0vdHJhbnNhY3Rpb24vdHJhbnNmZXJgLCB7XHJcbiAgICAgICAgICAgIGlkVXNlcjogZGF0YUlzTG9naW4uaWQsXHJcbiAgICAgICAgICAgIGlkUmVjZWl2ZXI6IGRhdGFJZFJlY2VpdmVyLFxyXG4gICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICBub3RlczogZGF0YS5ub3RlcyxcclxuICAgICAgICAgICAgcGluOiBwaW5udW1iZXJcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2hvd1N1Y2Nlc3ModHJ1ZSlcclxuICAgICAgICAgICAgICAgIHNldFNob3dDb25maXJtYXRpb24oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAvLyByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNob3dGYWlsZWQodHJ1ZSlcclxuICAgICAgICAgICAgICAgIHNldFNob3dDb25maXJtYXRpb24oZmFsc2UpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxyXG5cclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5hcGl9L3VzZXJzL2ZpbmQtb25lYDtcclxuICAgICAgICBheGlvcy5nZXQodXJsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGEuZGF0YVswXVxyXG4gICAgICAgICAgICAgICAgc2V0RGF0YUlzTG9naW4oZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydjYXJkLXRyYW5zZmVyJ119PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgey8qIHN0ZXAgMSAqL31cclxuICAgICAgICAgICAgICAgIHtzZWxlY3QgPT09IGZhbHNlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0aXRsZS10cmFuc2ZlciddfT5TZWFyY2ggUmVjZWl2ZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbW1wiZm9ybS1ncm91cFwiXSwgc3R5bGVbXCJmb3JtLXJlY2VpdmVyXCJdXS5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NlYXJjaC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImtleXdvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCByZWNlaXZlciBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtyZXN1bHQgPT09IGZhbHNlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubm9kYXRhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ub2RhdGEuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge3Jlc3VsdCA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1tcImQtZmxleFwiXSwgW1wiYWxpZ24taXRlbXMtY2VudGVyXCJdLCBbXCJweS0yXCJdLCBbXCJwbC0zXCJdLCBbXCJtdC00XCJdLCBzdHlsZVtcImZvcm0tdXNlcnNcIl1dLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrVXNlcihpdGVtLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuYXBpX2ltZ30ke2l0ZW0uaW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJVc2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZSBkLWZsZXggZmxleC1jb2x1bW4gbWwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLm5hbWVTZWFyY2h9PntpdGVtLmZpcnN0bmFtZX0ge2l0ZW0ubGFzdG5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1tbXCJtdC0xXCJdLCBzdHlsZVtcIm51bWJlci1QaG9uZVwiXV0uam9pbihcIiBcIil9PntpdGVtLnBob25lTnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIHN0ZXAgMiAqL31cclxuICAgICAgICAgICAgICAgIHtzaG93cmVzdWx0ID09PSB0cnVlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0aXRsZS10cmFuc2ZlciddfT5UcmFuc2ZlciBNb25leTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbW1wiZC1mbGV4XCJdLCBbXCJhbGlnbi1pdGVtcy1jZW50ZXJcIl0sIFtcInB5LTJcIl0sIFtcInBsLTNcIl0sIFtcIm10LTRcIl0sIHN0eWxlW1wiZm9ybS11c2Vyc1wiXV0uam9pbihcIiBcIil9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LmFwaV9pbWd9JHtkYXRhUmVjZWl2ZXIuaW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJVc2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gbWwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUubmFtZVNlYXJjaH0+e2RhdGFSZWNlaXZlci5maXJzdG5hbWV9e2RhdGFSZWNlaXZlci5sYXN0bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtbW1wibXQtMVwiXSwgc3R5bGVbXCJudW1iZXItUGhvbmVcIl1dLmpvaW4oXCIgXCIpfT57ZGF0YVJlY2VpdmVyLnBob25lTnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsnc3ViLXRpdGxlLXRyYW5zZmVyJ119PlR5cGUgdGhlIGFtb3VudCB5b3Ugd2FudCB0byB0cmFuc2ZlciBhbmQgdGhlbjxiciAvPlxyXG5wcmVzcyBjb250aW51ZSB0byB0aGUgbmV4dCBzdGVwcy48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e1tbXCJtdC01XCJdLCBzdHlsZVtcImZvcm0tdHJhbnNmZXJcIl1dLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbW1wiZm9ybS1jb250cm9sIG10LTFcIl0sIHN0eWxlW1wiZm9ybS1jb250cm9sLXRyYW5zZmVyXCJdXS5qb2luKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRyYW5zZmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLmNyZWRpdH0+UnB7ZGF0YUlzTG9naW4uY3JlZGl0fSBBdmFpbGFibGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wZW5jaWwucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwZW5jaWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlWydwZW5jaWwtaW1nJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJmb3JtLWNvbnRyb2wgbXQtMVwiXSwgc3R5bGVbXCJmb3JtLW5vdGVzXCJdXS5qb2luKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vdGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub3Rlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHNvbWUgbm90ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVHJhbnNmZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9XCJjb250aW51ZVwiIGJ0bj1cImJ0bi1jb250aW51ZVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrQ29udGludWV9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIHN0ZXAgMyAqL31cclxuICAgICAgICAgICAgICAgIHtzaG93Q29uZmlybWF0aW9uID09PSB0cnVlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0aXRsZS10cmFuc2ZlciddfT5UcmFuc2ZlciBUbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tbXCJkLWZsZXhcIl0sIFtcImFsaWduLWl0ZW1zLWNlbnRlclwiXSwgW1wicHktMlwiXSwgW1wicGwtM1wiXSwgW1wibXQtNFwiXSwgc3R5bGVbXCJmb3JtLXVzZXJzXCJdXS5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LmFwaV9pbWd9JHtkYXRhUmVjZWl2ZXIuaW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJVc2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gbWwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUubmFtZVNlYXJjaH0+e2RhdGFSZWNlaXZlci5maXJzdG5hbWV9e2RhdGFSZWNlaXZlci5sYXN0bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtbW1wibXQtMVwiXSwgc3R5bGVbXCJudW1iZXItUGhvbmVcIl1dLmpvaW4oXCIgXCIpfT57ZGF0YVJlY2VpdmVyLnBob25lTnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtbW1wibXQtNFwiXSwgc3R5bGVbJ3RpdGxlLXRyYW5zZmVyJ11dLmpvaW4oXCIgXCIpfT5EZXRhaWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnZGV0YWlsLXRyYW5zZmVyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QW1vdW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UnAue2RhdGEuYW1vdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnZGV0YWlsLXRyYW5zZmVyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QmFsYW5jZSBMZWZ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UnAue2RhdGFJc0xvZ2luLmNyZWRpdCAtIGRhdGEuYW1vdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnZGV0YWlsLXRyYW5zZmVyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGF0ZSAmIHRpbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bW9tZW50KCkudG9EYXRlKCkuZ2V0VGltZSgpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnZGV0YWlsLXRyYW5zZmVyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Tm90ZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGF0YS5ub3Rlc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPVwiY29udGludWVcIiBidG49XCJidG4tY29udGludWVcIiB0b2dnbGU9XCJtb2RhbFwiIHRhcmdldD1cIiNleGFtcGxlTW9kYWxDZW50ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIGRhdGEtYmFja2Ryb3A9XCJmYWxzZVwiICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImV4YW1wbGVNb2RhbENlbnRlclwiIHRhYkluZGV4PVwiLTFcIiBkYXRhLWJhY2tkcm9wPVwiZmFsc2VcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxDZW50ZXJUaXRsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMb25nVGl0bGVcIj5FbnRlciBQSU4gdG8gVHJhbnNmZXI8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3N1Yi10aXRsZS1tb2RhbCddfT5FbnRlciB5b3VyIDYgZGlnaXRzIFBJTiBmb3IgY29uZmlybWF0aW9uIHRvIGNvbnRpbnVlIHRyYW5zZmVycmluZyBtb25leS4gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1tcImZvcm0tY29udHJvbCBtdC0xXCJdLCBzdHlsZVtcImZvcm0tcGluXCJdXS5qb2luKFwiIFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2VQaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJmb3JtLWNvbnRyb2wgbXQtMVwiXSwgc3R5bGVbXCJmb3JtLXBpblwiXV0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0d29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInR3b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlUGlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbW1wiZm9ybS1jb250cm9sIG10LTFcIl0sIHN0eWxlW1wiZm9ybS1waW5cIl1dLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGhyZWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRocmVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2VQaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJmb3JtLWNvbnRyb2wgbXQtMVwiXSwgc3R5bGVbXCJmb3JtLXBpblwiXV0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmb3VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmb3VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2VQaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJmb3JtLWNvbnRyb2wgbXQtMVwiXSwgc3R5bGVbXCJmb3JtLXBpblwiXV0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2VQaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJmb3JtLWNvbnRyb2wgbXQtMVwiXSwgc3R5bGVbXCJmb3JtLXBpblwiXV0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpeFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlUGlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbW1wibW9kYWwtZm9vdGVyXCJdLCBzdHlsZVtcImJ0bi1tb2RhbFwiXV0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0aXRsZT1cImNvbnRpbnVlXCIgYnRuPVwiYnRuLWNvbnRpbnVlXCIgb25DbGljaz17aGFuZGxlQ29uZmlybX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7LyogdHJhbnNmZXIgc3VjY2VzcyAqL31cclxuICAgICAgICAgICAgICAgIHtzaG93U3VjY2VzcyA9PT0gdHJ1ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9zdWNjZXNzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlWydzdWNjZXNzLWltZyddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0ZXh0LXN1Y2Nlc3MnXX0+VHJhbnNmZXIgU3VjY2VzczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtbW1wibXQtNFwiXSwgc3R5bGVbJ3RpdGxlLXRyYW5zZmVyJ11dLmpvaW4oXCIgXCIpfT5EZXRhaWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnZGV0YWlsLXRyYW5zZmVyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QW1vdW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UnAue2RhdGEuYW1vdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnZGV0YWlsLXRyYW5zZmVyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QmFsYW5jZSBMZWZ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UnAue2RhdGFJc0xvZ2luLmNyZWRpdCAtIGRhdGEuYW1vdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnZGV0YWlsLXRyYW5zZmVyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGF0ZSAmIHRpbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bW9tZW50KCkudG9EYXRlKCkuZ2V0VGltZSgpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnZGV0YWlsLXRyYW5zZmVyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Tm90ZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGF0YS5ub3Rlc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGl0bGUtdHJhbnNmZXInXX0+VHJhbnNmZXIgVG88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbW1wiZC1mbGV4XCJdLCBbXCJhbGlnbi1pdGVtcy1jZW50ZXJcIl0sIFtcInB5LTJcIl0sIFtcInBsLTNcIl0sIFtcIm10LTRcIl0sIHN0eWxlW1wiZm9ybS11c2Vyc1wiXV0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5hcGlfaW1nfSR7ZGF0YVJlY2VpdmVyLmltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiVXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLm5hbWVTZWFyY2h9PntkYXRhUmVjZWl2ZXIuZmlyc3RuYW1lfXtkYXRhUmVjZWl2ZXIubGFzdG5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17W1tcIm10LTFcIl0sIHN0eWxlW1wibnVtYmVyLVBob25lXCJdXS5qb2luKFwiIFwiKX0+e2RhdGFSZWNlaXZlci5waG9uZU51bWJlcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NoYXJlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwic2hhcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnNoYXJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBidG49XCJidG4tc2hhcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9kb3dubG9hZC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImRvd25sb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5kb3dubG9hZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9XCJEb3dubG9hZCBQREZcIiBidG49XCJidG4tZG93bmxvYWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPVwiQmFjayBUbyBIb21lXCIgYnRuPVwiYnRuLWNvbnRpbnVlXCIgb25DbGljaz17aGFuZGxlQ2xpY2tIb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7LyogdHJhbnNmZXIgZmFpbGVkICovfVxyXG4gICAgICAgICAgICAgICAge3Nob3dGYWlsZWQgPT09IHRydWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvZmFpbGVkLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZmFpbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVbJ3N1Y2Nlc3MtaW1nJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RleHQtc3VjY2VzcyddfT5UcmFuc2ZlciBGYWlsZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RleHQtZmFpbCddfT5XZSBjYW7igJl0IHRyYW5zZmVyIHlvdXIgbW9uZXkgYXQgdGhlIG1vbWVudCwgd2UgcmVjb21tZW5kIHlvdSB0byBjaGVjayB5b3VyPGJyIC8+IGludGVybmV0IGNvbm5lY3Rpb24gYW5kIHRyeSBhZ2Fpbi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnZGV0YWlsLXRyYW5zZmVyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QW1vdW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UnAue2RhdGEuYW1vdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnZGV0YWlsLXRyYW5zZmVyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QmFsYW5jZSBMZWZ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UnAue2RhdGFJc0xvZ2luLmNyZWRpdCAtIGRhdGEuYW1vdW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnZGV0YWlsLXRyYW5zZmVyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGF0ZSAmIHRpbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bW9tZW50KCkudG9EYXRlKCkuZ2V0VGltZSgpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnZGV0YWlsLXRyYW5zZmVyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Tm90ZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGF0YS5ub3Rlc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGl0bGUtdHJhbnNmZXInXX0+VHJhbnNmZXIgVG88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbW1wiZC1mbGV4XCJdLCBbXCJhbGlnbi1pdGVtcy1jZW50ZXJcIl0sIFtcInB5LTJcIl0sIFtcInBsLTNcIl0sIFtcIm10LTRcIl0sIHN0eWxlW1wiZm9ybS11c2Vyc1wiXV0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5hcGlfaW1nfSR7ZGF0YVJlY2VpdmVyLmltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiVXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLm5hbWVTZWFyY2h9PntkYXRhUmVjZWl2ZXIuZmlyc3RuYW1lfXtkYXRhUmVjZWl2ZXIubGFzdG5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17W1tcIm10LTFcIl0sIHN0eWxlW1wibnVtYmVyLVBob25lXCJdXS5qb2luKFwiIFwiKX0+e2RhdGFSZWNlaXZlci5waG9uZU51bWJlcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPVwiVHJ5IEFnYWluXCIgYnRuPVwiYnRuLWNvbnRpbnVlXCIgb25DbGljaz17aGFuZGxlQ2xpY2tIb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0VHJhbnNmZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==