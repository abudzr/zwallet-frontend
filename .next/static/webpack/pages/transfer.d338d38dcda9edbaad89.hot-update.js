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
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["img-nodata"],
            src: "/images/nodata.svg",
            alt: "nodata img"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFydHMvVHJhbnNmZXIvaW5kZXguanMiXSwibmFtZXMiOlsiUGFydFRyYW5zZmVyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsInJlc3VsdCIsInNldFJlc3VsdCIsInNob3dyZXN1bHQiLCJzZXRTaG93cmVzdWx0Iiwic2hvd0NvbmZpcm1hdGlvbiIsInNldFNob3dDb25maXJtYXRpb24iLCJzaG93U3VjY2VzcyIsInNldFNob3dTdWNjZXNzIiwic2hvd0ZhaWxlZCIsInNldFNob3dGYWlsZWQiLCJkYXRhSXNMb2dpbiIsInNldERhdGFJc0xvZ2luIiwiZGF0YUlkUmVjZWl2ZXIiLCJzZXREYXRhSWRSZWNlaXZlciIsImRhdGFSZWNlaXZlciIsInNldERhdGFSZWNlaXZlciIsInVzZXIiLCJzZXRVc2VyIiwic2VsZWN0Iiwic2V0U2VsZWN0IiwiaWRVc2VyIiwiaWRSZWNlaXZlciIsImFtb3VudCIsIm5vdGVzIiwicGluIiwiZGF0YSIsInNldERhdGEiLCJvbmUiLCJ0d28iLCJ0aHJlZSIsImZvdXIiLCJmaXZlIiwic2l4Iiwic2V0UGluIiwiaGFuZGxlRm9ybUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1cmwiLCJwcm9jZXNzIiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXMiLCJlcnIiLCJoYW5kbGVDbGlja1VzZXIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlVHJhbnNmZXIiLCJkYXRhTmV3IiwiaGFuZGxlRm9ybUNoYW5nZVBpbiIsImhhbmRsZUNsaWNrQ29udGludWUiLCJoYW5kbGVDbGlja0hvbWUiLCJwdXNoIiwiaGFuZGxlQ29uZmlybSIsInByZXZlbnREZWZhdWx0IiwicGlubnVtYmVyIiwicG9zdCIsImlkIiwidXNlRWZmZWN0Iiwic3R5bGUiLCJqb2luIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaW1hZ2UiLCJuYW1lU2VhcmNoIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJwaG9uZU51bWJlciIsImNyZWRpdCIsIm1vbWVudCIsInRvRGF0ZSIsImdldFRpbWUiLCJzaGFyZSIsImRvd25sb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQTs7QUFDcEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEb0Isa0JBRUlDLHNEQUFRLENBQUMsRUFBRCxDQUZaO0FBQUEsTUFFYkMsSUFGYTtBQUFBLE1BRVBDLE9BRk87O0FBQUEsbUJBR1FGLHNEQUFRLENBQUMsS0FBRCxDQUhoQjtBQUFBLE1BR2JHLE1BSGE7QUFBQSxNQUdMQyxTQUhLOztBQUFBLG1CQUlnQkosc0RBQVEsQ0FBQyxLQUFELENBSnhCO0FBQUEsTUFJYkssVUFKYTtBQUFBLE1BSURDLGFBSkM7O0FBQUEsbUJBSzRCTixzREFBUSxDQUFDLEtBQUQsQ0FMcEM7QUFBQSxNQUtiTyxnQkFMYTtBQUFBLE1BS0tDLG1CQUxMOztBQUFBLG1CQU1rQlIsc0RBQVEsQ0FBQyxLQUFELENBTjFCO0FBQUEsTUFNYlMsV0FOYTtBQUFBLE1BTUFDLGNBTkE7O0FBQUEsbUJBT2dCVixzREFBUSxDQUFDLEtBQUQsQ0FQeEI7QUFBQSxNQU9iVyxVQVBhO0FBQUEsTUFPREMsYUFQQzs7QUFBQSxtQkFRa0JaLHNEQUFRLENBQUMsRUFBRCxDQVIxQjtBQUFBLE1BUWJhLFdBUmE7QUFBQSxNQVFBQyxjQVJBOztBQUFBLG1CQVN3QmQsc0RBQVEsRUFUaEM7QUFBQSxNQVNiZSxjQVRhO0FBQUEsTUFTR0MsaUJBVEg7O0FBQUEsbUJBVW9CaEIsc0RBQVEsQ0FBQyxFQUFELENBVjVCO0FBQUEsTUFVYmlCLFlBVmE7QUFBQSxN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QUFBQTtBQUFBLFVBREo7QUF3V0g7O0dBOWVRL0QsWTtVQUNVRSxxRDs7O0tBRFZGLFk7QUFnZk1BLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RyYW5zZmVyLmQzMzhkMzhkY2RhOWVkYmFhZDg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL3RyYW5zZmVyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2R1bGUvQnV0dG9uJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcblxyXG5mdW5jdGlvbiBQYXJ0VHJhbnNmZXIoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93cmVzdWx0LCBzZXRTaG93cmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93Q29uZmlybWF0aW9uLCBzZXRTaG93Q29uZmlybWF0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93U3VjY2Vzcywgc2V0U2hvd1N1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dGYWlsZWQsIHNldFNob3dGYWlsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2RhdGFJc0xvZ2luLCBzZXREYXRhSXNMb2dpbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZGF0YUlkUmVjZWl2ZXIsIHNldERhdGFJZFJlY2VpdmVyXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbZGF0YVJlY2VpdmVyLCBzZXREYXRhUmVjZWl2ZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdCwgc2V0U2VsZWN0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGlkVXNlcjogXCJcIixcclxuICAgICAgICBpZFJlY2VpdmVyOiBcIlwiLFxyXG4gICAgICAgIGFtb3VudDogXCJcIixcclxuICAgICAgICBub3RlczogXCJcIixcclxuICAgICAgICBwaW46IFwiXCJcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW3Bpbiwgc2V0UGluXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBvbmU6IFwiXCIsXHJcbiAgICAgICAgdHdvOiBcIlwiLFxyXG4gICAgICAgIHRocmVlOiBcIlwiLFxyXG4gICAgICAgIGZvdXI6IFwiXCIsXHJcbiAgICAgICAgZml2ZTogXCJcIixcclxuICAgICAgICBzaXg6IFwiXCIsXHJcbiAgICB9KTtcclxuICAgIC8vIHNlYXJjaCBieSBuYW1lXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5hcGl9L3VzZXJzP2tleXdvcmQ9JHtldmVudC50YXJnZXQudmFsdWV9YDtcclxuICAgICAgICBheGlvcy5nZXQodXJsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0VXNlcihyZXMuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFJlc3VsdChmYWxzZSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH07XHJcbiAgICAvLyBnZXQgZGF0YSBieSBpZCBcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrVXNlciA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YUlkUmVjZWl2ZXIoZGF0YSlcclxuICAgICAgICBzZXRTaG93cmVzdWx0KHRydWUpXHJcbiAgICAgICAgc2V0UmVzdWx0KGZhbHNlKVxyXG4gICAgICAgIHNldFNlbGVjdCh0cnVlKVxyXG5cclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5hcGl9L3VzZXJzL2ZpbmQtdXNlcj9pZD0ke2RhdGF9YDtcclxuICAgICAgICBheGlvcy5nZXQodXJsKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGEuZGF0YVswXVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhUmVjZWl2ZXIoZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hhbmdlIHN0YXRlIGRhdGFcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVRyYW5zZmVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YU5ldyA9IHsgLi4uZGF0YSB9O1xyXG4gICAgICAgIGRhdGFOZXdbZXZlbnQudGFyZ2V0Lm5hbWVdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFOZXcpO1xyXG4gICAgICAgIHNldERhdGEoZGF0YU5ldyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRm9ybUNoYW5nZVBpbiA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFOZXcgPSB7IC4uLnBpbiB9O1xyXG4gICAgICAgIGRhdGFOZXdbZXZlbnQudGFyZ2V0Lm5hbWVdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFOZXcpO1xyXG4gICAgICAgIHNldFBpbihkYXRhTmV3KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tDb250aW51ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93Q29uZmlybWF0aW9uKHRydWUpXHJcbiAgICAgICAgc2V0U2hvd3Jlc3VsdChmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGlja0hvbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9ob21lJylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDb25maXJtID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBwaW5udW1iZXIgPSBgJHtwaW4ub25lfSR7cGluLnR3b30ke3Bpbi50aHJlZX0ke3Bpbi5mb3VyfSR7cGluLmZpdmV9JHtwaW4uc2l4fWA7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5hcGl9L3RyYW5zYWN0aW9uL3RyYW5zZmVyYCwge1xyXG4gICAgICAgICAgICBpZFVzZXI6IGRhdGFJc0xvZ2luLmlkLFxyXG4gICAgICAgICAgICBpZFJlY2VpdmVyOiBkYXRhSWRSZWNlaXZlcixcclxuICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgbm90ZXM6IGRhdGEubm90ZXMsXHJcbiAgICAgICAgICAgIHBpbjogcGlubnVtYmVyXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNob3dTdWNjZXNzKHRydWUpXHJcbiAgICAgICAgICAgICAgICBzZXRTaG93Q29uZmlybWF0aW9uKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goJy9ob21lJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93RmFpbGVkKHRydWUpXHJcbiAgICAgICAgICAgICAgICBzZXRTaG93Q29uZmlybWF0aW9uKGZhbHNlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcclxuXHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuYXBpfS91c2Vycy9maW5kLW9uZWA7XHJcbiAgICAgICAgYXhpb3MuZ2V0KHVybCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhLmRhdGFbMF1cclxuICAgICAgICAgICAgICAgIHNldERhdGFJc0xvZ2luKGRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnY2FyZC10cmFuc2ZlciddfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBzdGVwIDEgKi99XHJcbiAgICAgICAgICAgICAgICB7c2VsZWN0ID09PSBmYWxzZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGl0bGUtdHJhbnNmZXInXX0+U2VhcmNoIFJlY2VpdmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W1tcImZvcm0tZ3JvdXBcIl0sIHN0eWxlW1wiZm9ybS1yZWNlaXZlclwiXV0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9zZWFyY2gucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJrZXl3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggcmVjZWl2ZXIgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7cmVzdWx0ID09PSBmYWxzZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZVtcImltZy1ub2RhdGFcIl19IHNyYz1cIi9pbWFnZXMvbm9kYXRhLnN2Z1wiIGFsdD1cIm5vZGF0YSBpbWdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7cmVzdWx0ID09PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbW1wiZC1mbGV4XCJdLCBbXCJhbGlnbi1pdGVtcy1jZW50ZXJcIl0sIFtcInB5LTJcIl0sIFtcInBsLTNcIl0sIFtcIm10LTRcIl0sIHN0eWxlW1wiZm9ybS11c2Vyc1wiXV0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2tVc2VyKGl0ZW0uaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5hcGlfaW1nfSR7aXRlbS5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlIGQtZmxleCBmbGV4LWNvbHVtbiBtbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUubmFtZVNlYXJjaH0+e2l0ZW0uZmlyc3RuYW1lfSB7aXRlbS5sYXN0bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17W1tcIm10LTFcIl0sIHN0eWxlW1wibnVtYmVyLVBob25lXCJdXS5qb2luKFwiIFwiKX0+e2l0ZW0ucGhvbmVOdW1iZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7Lyogc3RlcCAyICovfVxyXG4gICAgICAgICAgICAgICAge3Nob3dyZXN1bHQgPT09IHRydWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLXRyYW5zZmVyJ119PlRyYW5zZmVyIE1vbmV5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJkLWZsZXhcIl0sIFtcImFsaWduLWl0ZW1zLWNlbnRlclwiXSwgW1wicHktMlwiXSwgW1wicGwtM1wiXSwgW1wibXQtNFwiXSwgc3R5bGVbXCJmb3JtLXVzZXJzXCJdXS5qb2luKFwiIFwiKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuYXBpX2ltZ30ke2RhdGFSZWNlaXZlci5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBtbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5uYW1lU2VhcmNofT57ZGF0YVJlY2VpdmVyLmZpcnN0bmFtZX17ZGF0YVJlY2VpdmVyLmxhc3RuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1tbXCJtdC0xXCJdLCBzdHlsZVtcIm51bWJlci1QaG9uZVwiXV0uam9pbihcIiBcIil9PntkYXRhUmVjZWl2ZXIucGhvbmVOdW1iZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydzdWItdGl0bGUtdHJhbnNmZXInXX0+VHlwZSB0aGUgYW1vdW50IHlvdSB3YW50IHRvIHRyYW5zZmVyIGFuZCB0aGVuPGJyIC8+XHJcbnByZXNzIGNvbnRpbnVlIHRvIHRoZSBuZXh0IHN0ZXBzLjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17W1tcIm10LTVcIl0sIHN0eWxlW1wiZm9ybS10cmFuc2ZlclwiXV0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJmb3JtLWNvbnRyb2wgbXQtMVwiXSwgc3R5bGVbXCJmb3JtLWNvbnRyb2wtdHJhbnNmZXJcIl1dLmpvaW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVHJhbnNmZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUuY3JlZGl0fT5ScHtkYXRhSXNMb2dpbi5jcmVkaXR9IEF2YWlsYWJsZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3BlbmNpbC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInBlbmNpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVbJ3BlbmNpbC1pbWcnXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1tcImZvcm0tY29udHJvbCBtdC0xXCJdLCBzdHlsZVtcImZvcm0tbm90ZXNcIl1dLmpvaW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm90ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vdGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgc29tZSBub3Rlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUcmFuc2Zlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0aXRsZT1cImNvbnRpbnVlXCIgYnRuPVwiYnRuLWNvbnRpbnVlXCIgb25DbGljaz17aGFuZGxlQ2xpY2tDb250aW51ZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7Lyogc3RlcCAzICovfVxyXG4gICAgICAgICAgICAgICAge3Nob3dDb25maXJtYXRpb24gPT09IHRydWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLXRyYW5zZmVyJ119PlRyYW5zZmVyIFRvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W1tcImQtZmxleFwiXSwgW1wiYWxpZ24taXRlbXMtY2VudGVyXCJdLCBbXCJweS0yXCJdLCBbXCJwbC0zXCJdLCBbXCJtdC00XCJdLCBzdHlsZVtcImZvcm0tdXNlcnNcIl1dLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuYXBpX2ltZ30ke2RhdGFSZWNlaXZlci5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBtbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5uYW1lU2VhcmNofT57ZGF0YVJlY2VpdmVyLmZpcnN0bmFtZX17ZGF0YVJlY2VpdmVyLmxhc3RuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1tbXCJtdC0xXCJdLCBzdHlsZVtcIm51bWJlci1QaG9uZVwiXV0uam9pbihcIiBcIil9PntkYXRhUmVjZWl2ZXIucGhvbmVOdW1iZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1tbXCJtdC00XCJdLCBzdHlsZVsndGl0bGUtdHJhbnNmZXInXV0uam9pbihcIiBcIil9PkRldGFpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydkZXRhaWwtdHJhbnNmZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BbW91bnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5ScC57ZGF0YS5hbW91bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydkZXRhaWwtdHJhbnNmZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CYWxhbmNlIExlZnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5ScC57ZGF0YUlzTG9naW4uY3JlZGl0IC0gZGF0YS5hbW91bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydkZXRhaWwtdHJhbnNmZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EYXRlICYgdGltZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnttb21lbnQoKS50b0RhdGUoKS5nZXRUaW1lKCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydkZXRhaWwtdHJhbnNmZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Ob3Rlczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkYXRhLm5vdGVzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9XCJjb250aW51ZVwiIGJ0bj1cImJ0bi1jb250aW51ZVwiIHRvZ2dsZT1cIm1vZGFsXCIgdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbENlbnRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogZGF0YS1iYWNrZHJvcD1cImZhbHNlXCIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZXhhbXBsZU1vZGFsQ2VudGVyXCIgdGFiSW5kZXg9XCItMVwiIGRhdGEtYmFja2Ryb3A9XCJmYWxzZVwiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbENlbnRlclRpdGxlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExvbmdUaXRsZVwiPkVudGVyIFBJTiB0byBUcmFuc2ZlcjwvaDU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsnc3ViLXRpdGxlLW1vZGFsJ119PkVudGVyIHlvdXIgNiBkaWdpdHMgUElOIGZvciBjb25maXJtYXRpb24gdG8gY29udGludWUgdHJhbnNmZXJyaW5nIG1vbmV5LiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbW1wiZm9ybS1jb250cm9sIG10LTFcIl0sIHN0eWxlW1wiZm9ybS1waW5cIl1dLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUNoYW5nZVBpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1tcImZvcm0tY29udHJvbCBtdC0xXCJdLCBzdHlsZVtcImZvcm0tcGluXCJdXS5qb2luKFwiIFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInR3b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidHdvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2VQaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJmb3JtLWNvbnRyb2wgbXQtMVwiXSwgc3R5bGVbXCJmb3JtLXBpblwiXV0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aHJlZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGhyZWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUNoYW5nZVBpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1tcImZvcm0tY29udHJvbCBtdC0xXCJdLCBzdHlsZVtcImZvcm0tcGluXCJdXS5qb2luKFwiIFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZvdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZvdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUNoYW5nZVBpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1tcImZvcm0tY29udHJvbCBtdC0xXCJdLCBzdHlsZVtcImZvcm0tcGluXCJdXS5qb2luKFwiIFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUNoYW5nZVBpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1tcImZvcm0tY29udHJvbCBtdC0xXCJdLCBzdHlsZVtcImZvcm0tcGluXCJdXS5qb2luKFwiIFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNpeFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2l4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1DaGFuZ2VQaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tbXCJtb2RhbC1mb290ZXJcIl0sIHN0eWxlW1wiYnRuLW1vZGFsXCJdXS5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPVwiY29udGludWVcIiBidG49XCJidG4tY29udGludWVcIiBvbkNsaWNrPXtoYW5kbGVDb25maXJtfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHsvKiB0cmFuc2ZlciBzdWNjZXNzICovfVxyXG4gICAgICAgICAgICAgICAge3Nob3dTdWNjZXNzID09PSB0cnVlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3N1Y2Nlc3MucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVbJ3N1Y2Nlc3MtaW1nJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RleHQtc3VjY2VzcyddfT5UcmFuc2ZlciBTdWNjZXNzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1tbXCJtdC00XCJdLCBzdHlsZVsndGl0bGUtdHJhbnNmZXInXV0uam9pbihcIiBcIil9PkRldGFpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydkZXRhaWwtdHJhbnNmZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BbW91bnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5ScC57ZGF0YS5hbW91bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydkZXRhaWwtdHJhbnNmZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CYWxhbmNlIExlZnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5ScC57ZGF0YUlzTG9naW4uY3JlZGl0IC0gZGF0YS5hbW91bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydkZXRhaWwtdHJhbnNmZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EYXRlICYgdGltZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnttb21lbnQoKS50b0RhdGUoKS5nZXRUaW1lKCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydkZXRhaWwtdHJhbnNmZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Ob3Rlczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkYXRhLm5vdGVzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0aXRsZS10cmFuc2ZlciddfT5UcmFuc2ZlciBUbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tbXCJkLWZsZXhcIl0sIFtcImFsaWduLWl0ZW1zLWNlbnRlclwiXSwgW1wicHktMlwiXSwgW1wicGwtM1wiXSwgW1wibXQtNFwiXSwgc3R5bGVbXCJmb3JtLXVzZXJzXCJdXS5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LmFwaV9pbWd9JHtkYXRhUmVjZWl2ZXIuaW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJVc2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gbWwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUubmFtZVNlYXJjaH0+e2RhdGFSZWNlaXZlci5maXJzdG5hbWV9e2RhdGFSZWNlaXZlci5sYXN0bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtbW1wibXQtMVwiXSwgc3R5bGVbXCJudW1iZXItUGhvbmVcIl1dLmpvaW4oXCIgXCIpfT57ZGF0YVJlY2VpdmVyLnBob25lTnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvc2hhcmUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJzaGFyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuc2hhcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJ0bj1cImJ0bi1zaGFyZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2Rvd25sb2FkLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZG93bmxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmRvd25sb2FkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0aXRsZT1cIkRvd25sb2FkIFBERlwiIGJ0bj1cImJ0bi1kb3dubG9hZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9XCJCYWNrIFRvIEhvbWVcIiBidG49XCJidG4tY29udGludWVcIiBvbkNsaWNrPXtoYW5kbGVDbGlja0hvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHsvKiB0cmFuc2ZlciBmYWlsZWQgKi99XHJcbiAgICAgICAgICAgICAgICB7c2hvd0ZhaWxlZCA9PT0gdHJ1ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9mYWlsZWQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJmYWlsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZVsnc3VjY2Vzcy1pbWcnXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGV4dC1zdWNjZXNzJ119PlRyYW5zZmVyIEZhaWxlZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGV4dC1mYWlsJ119PldlIGNhbuKAmXQgdHJhbnNmZXIgeW91ciBtb25leSBhdCB0aGUgbW9tZW50LCB3ZSByZWNvbW1lbmQgeW91IHRvIGNoZWNrIHlvdXI8YnIgLz4gaW50ZXJuZXQgY29ubmVjdGlvbiBhbmQgdHJ5IGFnYWluLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydkZXRhaWwtdHJhbnNmZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BbW91bnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5ScC57ZGF0YS5hbW91bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydkZXRhaWwtdHJhbnNmZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CYWxhbmNlIExlZnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5ScC57ZGF0YUlzTG9naW4uY3JlZGl0IC0gZGF0YS5hbW91bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydkZXRhaWwtdHJhbnNmZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EYXRlICYgdGltZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnttb21lbnQoKS50b0RhdGUoKS5nZXRUaW1lKCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydkZXRhaWwtdHJhbnNmZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Ob3Rlczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkYXRhLm5vdGVzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0aXRsZS10cmFuc2ZlciddfT5UcmFuc2ZlciBUbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tbXCJkLWZsZXhcIl0sIFtcImFsaWduLWl0ZW1zLWNlbnRlclwiXSwgW1wicHktMlwiXSwgW1wicGwtM1wiXSwgW1wibXQtNFwiXSwgc3R5bGVbXCJmb3JtLXVzZXJzXCJdXS5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LmFwaV9pbWd9JHtkYXRhUmVjZWl2ZXIuaW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJVc2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gbWwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUubmFtZVNlYXJjaH0+e2RhdGFSZWNlaXZlci5maXJzdG5hbWV9e2RhdGFSZWNlaXZlci5sYXN0bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtbW1wibXQtMVwiXSwgc3R5bGVbXCJudW1iZXItUGhvbmVcIl1dLmpvaW4oXCIgXCIpfT57ZGF0YVJlY2VpdmVyLnBob25lTnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9XCJUcnkgQWdhaW5cIiBidG49XCJidG4tY29udGludWVcIiBvbkNsaWNrPXtoYW5kbGVDbGlja0hvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnRUcmFuc2ZlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9