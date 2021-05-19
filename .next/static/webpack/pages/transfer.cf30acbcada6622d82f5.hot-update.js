webpackHotUpdate_N_E("pages/transfer",{

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
false,

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
/* harmony import */ var _helper_rupiah__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helper/rupiah */ "./helper/rupiah.js");




var _jsxFileName = "F:\\xampp\\htdocs\\arkademy\\Zwallet\\zwallet\\parts\\Transfer\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







moment__WEBPACK_IMPORTED_MODULE_7___default.a.locale('id');


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
      search = _useState3[0],
      setSearch = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showresult = _useState4[0],
      setShowresult = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showConfirmation = _useState5[0],
      setShowConfirmation = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showSuccess = _useState6[0],
      setShowSuccess = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showFailed = _useState7[0],
      setShowFailed = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      dataIsLogin = _useState8[0],
      setDataIsLogin = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      dataIdReceiver = _useState9[0],
      setDataIdReceiver = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      dataReceiver = _useState10[0],
      setDataReceiver = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      user = _useState11[0],
      setUser = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      select = _useState12[0],
      setSelect = _useState12[1];

  var date = new Date();

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    idUser: "",
    idReceiver: "",
    amount: "",
    notes: "",
    pin: ""
  }),
      data = _useState13[0],
      setData = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: ""
  }),
      pin = _useState14[0],
      setPin = _useState14[1]; // search by name


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
        setSearch(false);
      } else {
        setSearch(false);
        setResult(true);
      }

      setUser(res.data.data);
    })["catch"](function (err) {
      setSearch(true);
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
          lineNumber: 156,
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
              lineNumber: 159,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: "keyword",
              placeholder: "Search receiver here",
              value: name,
              onChange: handleFormChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 25
        }, this)]
      }, void 0, true), search === true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container text-center mt-5 ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mb-4",
            children: "please enter the data correctly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["img-nodata"],
            src: "/images/nodata.svg",
            alt: "nodata img"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mt-4",
            children: "The recipient you are looking for was not found"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
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
              lineNumber: 196,
              columnNumber: 37
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 33
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "profile d-flex flex-column ml-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nameSearch,
              children: [item.firstname, " ", item.lastname]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: [["mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["number-Phone"]].join(" "),
              children: item.phoneNumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 37
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 33
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 29
        }, _this);
      }), showresult === true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-transfer'],
          children: "Transfer Money"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
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
              lineNumber: 222,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex flex-column ml-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nameSearch,
              children: [dataReceiver.firstname, dataReceiver.lastname]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: [["mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["number-Phone"]].join(" "),
              children: dataReceiver.phoneNumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['sub-title-transfer'],
          children: ["Type the amount you want to transfer and then", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 113
          }, this), "press continue to the next steps."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 235,
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
              placeholder: Object(_helper_rupiah__WEBPACK_IMPORTED_MODULE_8__["default"])('0'),
              onChange: handleChangeTransfer
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.credit,
          children: [Object(_helper_rupiah__WEBPACK_IMPORTED_MODULE_8__["default"])("Rp".concat(dataIsLogin.credit)), " Available"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 252,
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
              lineNumber: 255,
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
              lineNumber: 262,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-content-end",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "continue",
            btn: "btn-continue",
            onClick: handleClickContinue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 25
        }, this)]
      }, void 0, true), showConfirmation === true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-transfer'],
          children: "Transfer To"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
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
              lineNumber: 287,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex flex-column ml-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nameSearch,
              children: [dataReceiver.firstname, dataReceiver.lastname]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: [["mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["number-Phone"]].join(" "),
              children: dataReceiver.phoneNumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: [["mt-4"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-transfer']].join(" "),
          children: "Detail"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Amount"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: Object(_helper_rupiah__WEBPACK_IMPORTED_MODULE_8__["default"])("Rp.".concat(data.amount))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Balance Left"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: Object(_helper_rupiah__WEBPACK_IMPORTED_MODULE_8__["default"])("Rp.".concat(dataIsLogin.credit - data.amount))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Date & time"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: moment__WEBPACK_IMPORTED_MODULE_7___default()(date).format('LLLL')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Notes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: data.notes
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 313,
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
            lineNumber: 318,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 317,
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
                  lineNumber: 325,
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
                    lineNumber: 328,
                    columnNumber: 45
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 327,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 324,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "modal-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['sub-title-modal'],
                  children: "Enter your 6 digits PIN for confirmation to continue transferring money. "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 332,
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
                    lineNumber: 334,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: [["form-control mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-pin"]].join(" "),
                    name: "two",
                    id: "two",
                    onChange: handleFormChangePin
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 341,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: [["form-control mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-pin"]].join(" "),
                    name: "three",
                    id: "three",
                    onChange: handleFormChangePin
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 348,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: [["form-control mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-pin"]].join(" "),
                    name: "four",
                    id: "four",
                    onChange: handleFormChangePin
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 355,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: [["form-control mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-pin"]].join(" "),
                    name: "five",
                    id: "five",
                    onChange: handleFormChangePin
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 362,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: [["form-control mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["form-pin"]].join(" "),
                    name: "six",
                    id: "six",
                    onChange: handleFormChangePin
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 369,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 333,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 331,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: [["modal-footer"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["btn-modal"]].join(" "),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  title: "continue",
                  btn: "btn-continue",
                  onClick: handleConfirm
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 379,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 378,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 323,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 322,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
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
          lineNumber: 391,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['text-success'],
          children: "Transfer Success"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: [["mt-4"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-transfer']].join(" "),
          children: "Detail"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Amount"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 401,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Rp.", data.amount]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 402,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Balance Left"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 405,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Rp.", dataIsLogin.credit - data.amount]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 406,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Date & time"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 409,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: moment__WEBPACK_IMPORTED_MODULE_7___default()().toDate().getTime()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 410,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Notes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 413,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: data.notes
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 414,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-transfer'],
          children: "Transfer To"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 417,
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
              lineNumber: 420,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 419,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex flex-column ml-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nameSearch,
              children: [dataReceiver.firstname, dataReceiver.lastname]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 429,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: [["mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["number-Phone"]].join(" "),
              children: dataReceiver.phoneNumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 430,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 428,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 418,
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
              lineNumber: 435,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
              btn: "btn-share"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 442,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 434,
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
              lineNumber: 445,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
              title: "Download PDF",
              btn: "btn-download"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 452,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 444,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "Back To Home",
            btn: "btn-continue",
            onClick: handleClickHome
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 454,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 433,
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
          lineNumber: 461,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['text-success'],
          children: "Transfer Failed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 468,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['text-fail'],
          children: ["We can\u2019t transfer your money at the moment, we recommend you to check your", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 469,
            columnNumber: 133
          }, this), " internet connection and try again."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 469,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Amount"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 471,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Rp.", data.amount]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 472,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 470,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Balance Left"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 475,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Rp.", dataIsLogin.credit - data.amount]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 476,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Date & time"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 479,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: moment__WEBPACK_IMPORTED_MODULE_7___default()().toDate().getTime()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 480,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 478,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['detail-transfer'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Notes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 483,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: data.notes
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 484,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 482,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['title-transfer'],
          children: "Transfer To"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 487,
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
              lineNumber: 490,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 489,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex flex-column ml-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nameSearch,
              children: [dataReceiver.firstname, dataReceiver.lastname]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 499,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: [["mt-1"], _styles_transfer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["number-Phone"]].join(" "),
              children: dataReceiver.phoneNumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 500,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 498,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 488,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-content-end",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "Try Again",
            btn: "btn-continue",
            onClick: handleClickHome
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 505,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 503,
          columnNumber: 25
        }, this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 151,
    columnNumber: 9
  }, this);
}

_s(PartTransfer, "p1kDupt7Mx2P69c8SEHtMfEJOqw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFydHMvVHJhbnNmZXIvaW5kZXguanMiXSwibmFtZXMiOlsibW9tZW50IiwibG9jYWxlIiwiUGFydFRyYW5zZmVyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsInJlc3VsdCIsInNldFJlc3VsdCIsInNlYXJjaCIsInNldFNlYXJjaCIsInNob3dyZXN1bHQiLCJzZXRTaG93cmVzdWx0Iiwic2hvd0NvbmZpcm1hdGlvbiIsInNldFNob3dDb25maXJtYXRpb24iLCJzaG93U3VjY2VzcyIsInNldFNob3dTdWNjZXNzIiwic2hvd0ZhaWxlZCIsInNldFNob3dGYWlsZWQiLCJkYXRhSXNMb2dpbiIsInNldERhdGFJc0xvZ2luIiwiZGF0YUlkUmVjZWl2ZXIiLCJzZXREYXRhSWRSZWNlaXZlciIsImRhdGFSZWNlaXZlciIsInNldERhdGFSZWNlaXZlciIsInVzZXIiLCJzZXRVc2VyIiwic2VsZWN0Iiwic2V0U2VsZWN0IiwiZGF0ZSIsIkRhdGUiLCJpZFVzZXIiLCJpZFJlY2VpdmVyIiwiYW1vdW50Iiwibm90ZXMiLCJwaW4iLCJkYXRhIiwic2V0RGF0YSIsIm9uZSIsInR3byIsInRocmVlIiwiZm91ciIsImZpdmUiLCJzaXgiLCJzZXRQaW4iLCJoYW5kbGVGb3JtQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVybCIsInByb2Nlc3MiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlcyIsImVyciIsImhhbmRsZUNsaWNrVXNlciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2VUcmFuc2ZlciIsImRhdGFOZXciLCJoYW5kbGVGb3JtQ2hhbmdlUGluIiwiaGFuZGxlQ2xpY2tDb250aW51ZSIsImhhbmRsZUNsaWNrSG9tZSIsInB1c2giLCJoYW5kbGVDb25maXJtIiwicHJldmVudERlZmF1bHQiLCJwaW5udW1iZXIiLCJwb3N0IiwiaWQiLCJ1c2VFZmZlY3QiLCJzdHlsZSIsImpvaW4iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpbWFnZSIsIm5hbWVTZWFyY2giLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInBob25lTnVtYmVyIiwiUnVwaWFoIiwiY3JlZGl0IiwiZm9ybWF0IiwidG9EYXRlIiwiZ2V0VGltZSIsInNoYXJlIiwiZG93bmxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsNkNBQU0sQ0FBQ0MsTUFBUCxDQUFjLElBQWQ7QUFDQTs7QUFFQSxTQUFTQyxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQ3BCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG9CLGtCQUVJQyxzREFBUSxDQUFDLEVBQUQsQ0FGWjtBQUFBLE1BRWJDLElBRmE7QUFBQSxNQUVQQyxPQUZPOztBQUFBLG1CQUdRRixzREFBUSxDQUFDLEtBQUQsQ0FIaEI7QUFBQSxNQUdiRyxNQUhhO0FBQUEsTUFHTEMsU0FISzs7QUFBQSxtQkFJUUosc0RBQVEsQ0FBQyxLQUFELENBSmhCO0FBQUEsTUFJYkssTUFKYTtBQUFBLE1BSUxDLFNBSks7O0FBQUEsbUJBS2dCTixzREFBUSxDQUFDLEtBQUQsQ0FMeEI7QUFBQSxNQUtiTyxVQUxhO0FBQUEsTUFLREMsYUFMQzs7QUFBQSxtQkFNNEJSLHNEQUFRLENBQUMsS0FBRCxDQU5wQztBQUFBLE1BTWJTLGdCQU5hO0FBQUEsTUFNS0MsbUJBTkw7O0FBQUEsbUJBT2tCVixzREFBUSxDQUFDLEtBQUQsQ0FQMUI7QUFBQSxNQU9iVyxXQVBhO0FBQUEsTUFPQUMsY0FQQTs7QUFBQSxtQkFRZ0JaLHNEQUFRLENBQUMsS0FBRCxDQVJ4QjtBQUFBLE1BUWJhLFVBUmE7QUFBQSxNQVFEQyxhQVJDOztBQUFBLG1CQVNrQmQsc0RBQVEsQ0FB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akQsRUFBNEQ1RCxZQUFZLENBQUM2RCxRQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFNLHVCQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxFQUFXUixrRUFBSyxDQUFDLGNBQUQsQ0FBaEIsRUFBa0NDLElBQWxDLENBQXVDLEdBQXZDLENBQWpCO0FBQUEsd0JBQStEdEQsWUFBWSxDQUFDOEQ7QUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVCSixlQTJDSTtBQUFLLG1CQUFTLEVBQUMsNEJBQWY7QUFBQSxpQ0FFSSxxRUFBQyxpRUFBRDtBQUFRLGlCQUFLLEVBQUMsV0FBZDtBQUEwQixlQUFHLEVBQUMsY0FBOUI7QUFBNkMsbUJBQU8sRUFBRWpCO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTNDSjtBQUFBLHNCQXBUUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwV0g7O0dBdGZRbkUsWTtVQUNVRSxxRDs7O0tBRFZGLFk7QUF3Zk1BLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RyYW5zZmVyLmNmMzBhY2JjYWRhNjYyMmQ4MmY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL3RyYW5zZmVyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2R1bGUvQnV0dG9uJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5tb21lbnQubG9jYWxlKCdpZCcpO1xyXG5pbXBvcnQgUnVwaWFoIGZyb20gJy4uLy4uL2hlbHBlci9ydXBpYWgnXHJcblxyXG5mdW5jdGlvbiBQYXJ0VHJhbnNmZXIoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd3Jlc3VsdCwgc2V0U2hvd3Jlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0NvbmZpcm1hdGlvbiwgc2V0U2hvd0NvbmZpcm1hdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd1N1Y2Nlc3MsIHNldFNob3dTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93RmFpbGVkLCBzZXRTaG93RmFpbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtkYXRhSXNMb2dpbiwgc2V0RGF0YUlzTG9naW5dID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2RhdGFJZFJlY2VpdmVyLCBzZXREYXRhSWRSZWNlaXZlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2RhdGFSZWNlaXZlciwgc2V0RGF0YVJlY2VpdmVyXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3QsIHNldFNlbGVjdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaWRVc2VyOiBcIlwiLFxyXG4gICAgICAgIGlkUmVjZWl2ZXI6IFwiXCIsXHJcbiAgICAgICAgYW1vdW50OiBcIlwiLFxyXG4gICAgICAgIG5vdGVzOiBcIlwiLFxyXG4gICAgICAgIHBpbjogXCJcIlxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbcGluLCBzZXRQaW5dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG9uZTogXCJcIixcclxuICAgICAgICB0d286IFwiXCIsXHJcbiAgICAgICAgdGhyZWU6IFwiXCIsXHJcbiAgICAgICAgZm91cjogXCJcIixcclxuICAgICAgICBmaXZlOiBcIlwiLFxyXG4gICAgICAgIHNpeDogXCJcIixcclxuICAgIH0pO1xyXG4gICAgLy8gc2VhcmNoIGJ5IG5hbWVcclxuICAgIGNvbnN0IGhhbmRsZUZvcm1DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52LmFwaX0vdXNlcnM/a2V5d29yZD0ke2V2ZW50LnRhcmdldC52YWx1ZX1gO1xyXG4gICAgICAgIGF4aW9zLmdldCh1cmwsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaChmYWxzZSlcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaChmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2VhcmNoKHRydWUpXHJcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgIC8vIGdldCBkYXRhIGJ5IGlkIFxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tVc2VyID0gKGRhdGEpID0+IHtcclxuICAgICAgICBzZXREYXRhSWRSZWNlaXZlcihkYXRhKVxyXG4gICAgICAgIHNldFNob3dyZXN1bHQodHJ1ZSlcclxuICAgICAgICBzZXRSZXN1bHQoZmFsc2UpXHJcbiAgICAgICAgc2V0U2VsZWN0KHRydWUpXHJcblxyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52LmFwaX0vdXNlcnMvZmluZC11c2VyP2lkPSR7ZGF0YX1gO1xyXG4gICAgICAgIGF4aW9zLmdldCh1cmwpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YS5kYXRhWzBdXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGFSZWNlaXZlcihkYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGFuZ2Ugc3RhdGUgZGF0YVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlVHJhbnNmZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhTmV3ID0geyAuLi5kYXRhIH07XHJcbiAgICAgICAgZGF0YU5ld1tldmVudC50YXJnZXQubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YU5ldyk7XHJcbiAgICAgICAgc2V0RGF0YShkYXRhTmV3KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtQ2hhbmdlUGluID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YU5ldyA9IHsgLi4ucGluIH07XHJcbiAgICAgICAgZGF0YU5ld1tldmVudC50YXJnZXQubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YU5ldyk7XHJcbiAgICAgICAgc2V0UGluKGRhdGFOZXcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGlja0NvbnRpbnVlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dDb25maXJtYXRpb24odHJ1ZSlcclxuICAgICAgICBzZXRTaG93cmVzdWx0KGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrSG9tZSA9ICgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNvbmZpcm0gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHBpbm51bWJlciA9IGAke3Bpbi5vbmV9JHtwaW4udHdvfSR7cGluLnRocmVlfSR7cGluLmZvdXJ9JHtwaW4uZml2ZX0ke3Bpbi5zaXh9YDtcclxuICAgICAgICBjb25zdCB1cmwgPSBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LmFwaX0vdHJhbnNhY3Rpb24vdHJhbnNmZXJgLCB7XHJcbiAgICAgICAgICAgIGlkVXNlcjogZGF0YUlzTG9naW4uaWQsXHJcbiAgICAgICAgICAgIGlkUmVjZWl2ZXI6IGRhdGFJZFJlY2VpdmVyLFxyXG4gICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICBub3RlczogZGF0YS5ub3RlcyxcclxuICAgICAgICAgICAgcGluOiBwaW5udW1iZXJcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2hvd1N1Y2Nlc3ModHJ1ZSlcclxuICAgICAgICAgICAgICAgIHNldFNob3dDb25maXJtYXRpb24oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAvLyByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNob3dGYWlsZWQodHJ1ZSlcclxuICAgICAgICAgICAgICAgIHNldFNob3dDb25maXJtYXRpb24oZmFsc2UpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxyXG5cclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5hcGl9L3VzZXJzL2ZpbmQtb25lYDtcclxuICAgICAgICBheGlvcy5nZXQodXJsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGEuZGF0YVswXVxyXG4gICAgICAgICAgICAgICAgc2V0RGF0YUlzTG9naW4oZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydjYXJkLXRyYW5zZmVyJ119PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgey8qIHN0ZXAgMSAqL31cclxuICAgICAgICAgICAgICAgIHtzZWxlY3QgPT09IGZhbHNlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0aXRsZS10cmFuc2ZlciddfT5TZWFyY2ggUmVjZWl2ZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbW1wiZm9ybS1ncm91cFwiXSwgc3R5bGVbXCJmb3JtLXJlY2VpdmVyXCJdXS5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NlYXJjaC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImtleXdvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCByZWNlaXZlciBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtzZWFyY2ggPT09IHRydWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRleHQtY2VudGVyIG10LTUgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00XCI+cGxlYXNlIGVudGVyIHRoZSBkYXRhIGNvcnJlY3RseTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZVtcImltZy1ub2RhdGFcIl19IHNyYz1cIi9pbWFnZXMvbm9kYXRhLnN2Z1wiIGFsdD1cIm5vZGF0YSBpbWdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNFwiPlRoZSByZWNpcGllbnQgeW91IGFyZSBsb29raW5nIGZvciB3YXMgbm90IGZvdW5kPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7cmVzdWx0ID09PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbW1wiZC1mbGV4XCJdLCBbXCJhbGlnbi1pdGVtcy1jZW50ZXJcIl0sIFtcInB5LTJcIl0sIFtcInBsLTNcIl0sIFtcIm10LTRcIl0sIHN0eWxlW1wiZm9ybS11c2Vyc1wiXV0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2tVc2VyKGl0ZW0uaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5hcGlfaW1nfSR7aXRlbS5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlIGQtZmxleCBmbGV4LWNvbHVtbiBtbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUubmFtZVNlYXJjaH0+e2l0ZW0uZmlyc3RuYW1lfSB7aXRlbS5sYXN0bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17W1tcIm10LTFcIl0sIHN0eWxlW1wibnVtYmVyLVBob25lXCJdXS5qb2luKFwiIFwiKX0+e2l0ZW0ucGhvbmVOdW1iZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7Lyogc3RlcCAyICovfVxyXG4gICAgICAgICAgICAgICAge3Nob3dyZXN1bHQgPT09IHRydWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLXRyYW5zZmVyJ119PlRyYW5zZmVyIE1vbmV5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJkLWZsZXhcIl0sIFtcImFsaWduLWl0ZW1zLWNlbnRlclwiXSwgW1wicHktMlwiXSwgW1wicGwtM1wiXSwgW1wibXQtNFwiXSwgc3R5bGVbXCJmb3JtLXVzZXJzXCJdXS5qb2luKFwiIFwiKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuYXBpX2ltZ30ke2RhdGFSZWNlaXZlci5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBtbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5uYW1lU2VhcmNofT57ZGF0YVJlY2VpdmVyLmZpcnN0bmFtZX17ZGF0YVJlY2VpdmVyLmxhc3RuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1tbXCJtdC0xXCJdLCBzdHlsZVtcIm51bWJlci1QaG9uZVwiXV0uam9pbihcIiBcIil9PntkYXRhUmVjZWl2ZXIucGhvbmVOdW1iZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydzdWItdGl0bGUtdHJhbnNmZXInXX0+VHlwZSB0aGUgYW1vdW50IHlvdSB3YW50IHRvIHRyYW5zZmVyIGFuZCB0aGVuPGJyIC8+XHJcbnByZXNzIGNvbnRpbnVlIHRvIHRoZSBuZXh0IHN0ZXBzLjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17W1tcIm10LTVcIl0sIHN0eWxlW1wiZm9ybS10cmFuc2ZlclwiXV0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJmb3JtLWNvbnRyb2wgbXQtMVwiXSwgc3R5bGVbXCJmb3JtLWNvbnRyb2wtdHJhbnNmZXJcIl1dLmpvaW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17UnVwaWFoKCcwJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUcmFuc2Zlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5jcmVkaXR9PntSdXBpYWgoYFJwJHtkYXRhSXNMb2dpbi5jcmVkaXR9YCl9IEF2YWlsYWJsZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3BlbmNpbC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInBlbmNpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVbJ3BlbmNpbC1pbWcnXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1tcImZvcm0tY29udHJvbCBtdC0xXCJdLCBzdHlsZVtcImZvcm0tbm90ZXNcIl1dLmpvaW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm90ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vdGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgc29tZSBub3Rlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUcmFuc2Zlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0aXRsZT1cImNvbnRpbnVlXCIgYnRuPVwiYnRuLWNvbnRpbnVlXCIgb25DbGljaz17aGFuZGxlQ2xpY2tDb250aW51ZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7Lyogc3RlcCAzICovfVxyXG4gICAgICAgICAgICAgICAge3Nob3dDb25maXJtYXRpb24gPT09IHRydWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLXRyYW5zZmVyJ119PlRyYW5zZmVyIFRvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W1tcImQtZmxleFwiXSwgW1wiYWxpZ24taXRlbXMtY2VudGVyXCJdLCBbXCJweS0yXCJdLCBbXCJwbC0zXCJdLCBbXCJtdC00XCJdLCBzdHlsZVtcImZvcm0tdXNlcnNcIl1dLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuYXBpX2ltZ30ke2RhdGFSZWNlaXZlci5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBtbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5uYW1lU2VhcmNofT57ZGF0YVJlY2VpdmVyLmZpcnN0bmFtZX17ZGF0YVJlY2VpdmVyLmxhc3RuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1tbXCJtdC0xXCJdLCBzdHlsZVtcIm51bWJlci1QaG9uZVwiXV0uam9pbihcIiBcIil9PntkYXRhUmVjZWl2ZXIucGhvbmVOdW1iZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1tbXCJtdC00XCJdLCBzdHlsZVsndGl0bGUtdHJhbnNmZXInXV0uam9pbihcIiBcIil9PkRldGFpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydkZXRhaWwtdHJhbnNmZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BbW91bnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57UnVwaWFoKGBScC4ke2RhdGEuYW1vdW50fWApfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnZGV0YWlsLXRyYW5zZmVyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QmFsYW5jZSBMZWZ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e1J1cGlhaChgUnAuJHtkYXRhSXNMb2dpbi5jcmVkaXQgLSBkYXRhLmFtb3VudH1gKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2RldGFpbC10cmFuc2ZlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRhdGUgJiB0aW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21vbWVudChkYXRlKS5mb3JtYXQoJ0xMTEwnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2RldGFpbC10cmFuc2ZlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk5vdGVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RhdGEubm90ZXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0aXRsZT1cImNvbnRpbnVlXCIgYnRuPVwiYnRuLWNvbnRpbnVlXCIgdG9nZ2xlPVwibW9kYWxcIiB0YXJnZXQ9XCIjZXhhbXBsZU1vZGFsQ2VudGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBkYXRhLWJhY2tkcm9wPVwiZmFsc2VcIiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJleGFtcGxlTW9kYWxDZW50ZXJcIiB0YWJJbmRleD1cIi0xXCIgZGF0YS1iYWNrZHJvcD1cImZhbHNlXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsQ2VudGVyVGl0bGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZFwiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTG9uZ1RpdGxlXCI+RW50ZXIgUElOIHRvIFRyYW5zZmVyPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydzdWItdGl0bGUtbW9kYWwnXX0+RW50ZXIgeW91ciA2IGRpZ2l0cyBQSU4gZm9yIGNvbmZpcm1hdGlvbiB0byBjb250aW51ZSB0cmFuc2ZlcnJpbmcgbW9uZXkuIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJmb3JtLWNvbnRyb2wgbXQtMVwiXSwgc3R5bGVbXCJmb3JtLXBpblwiXV0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlUGlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbW1wiZm9ybS1jb250cm9sIG10LTFcIl0sIHN0eWxlW1wiZm9ybS1waW5cIl1dLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHdvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0d29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUNoYW5nZVBpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1tcImZvcm0tY29udHJvbCBtdC0xXCJdLCBzdHlsZVtcImZvcm0tcGluXCJdXS5qb2luKFwiIFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRocmVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aHJlZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlUGlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbW1wiZm9ybS1jb250cm9sIG10LTFcIl0sIHN0eWxlW1wiZm9ybS1waW5cIl1dLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZm91clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZm91clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlUGlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbW1wiZm9ybS1jb250cm9sIG10LTFcIl0sIHN0eWxlW1wiZm9ybS1waW5cIl1dLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZml2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZml2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlUGlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbW1wiZm9ybS1jb250cm9sIG10LTFcIl0sIHN0eWxlW1wiZm9ybS1waW5cIl1dLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2l4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUNoYW5nZVBpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W1tcIm1vZGFsLWZvb3RlclwiXSwgc3R5bGVbXCJidG4tbW9kYWxcIl1dLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9XCJjb250aW51ZVwiIGJ0bj1cImJ0bi1jb250aW51ZVwiIG9uQ2xpY2s9e2hhbmRsZUNvbmZpcm19IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgey8qIHRyYW5zZmVyIHN1Y2Nlc3MgKi99XHJcbiAgICAgICAgICAgICAgICB7c2hvd1N1Y2Nlc3MgPT09IHRydWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvc3VjY2Vzcy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZVsnc3VjY2Vzcy1pbWcnXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGV4dC1zdWNjZXNzJ119PlRyYW5zZmVyIFN1Y2Nlc3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17W1tcIm10LTRcIl0sIHN0eWxlWyd0aXRsZS10cmFuc2ZlciddXS5qb2luKFwiIFwiKX0+RGV0YWlsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2RldGFpbC10cmFuc2ZlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFtb3VudDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJwLntkYXRhLmFtb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2RldGFpbC10cmFuc2ZlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkJhbGFuY2UgTGVmdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJwLntkYXRhSXNMb2dpbi5jcmVkaXQgLSBkYXRhLmFtb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2RldGFpbC10cmFuc2ZlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRhdGUgJiB0aW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21vbWVudCgpLnRvRGF0ZSgpLmdldFRpbWUoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2RldGFpbC10cmFuc2ZlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk5vdGVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RhdGEubm90ZXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLXRyYW5zZmVyJ119PlRyYW5zZmVyIFRvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W1tcImQtZmxleFwiXSwgW1wiYWxpZ24taXRlbXMtY2VudGVyXCJdLCBbXCJweS0yXCJdLCBbXCJwbC0zXCJdLCBbXCJtdC00XCJdLCBzdHlsZVtcImZvcm0tdXNlcnNcIl1dLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuYXBpX2ltZ30ke2RhdGFSZWNlaXZlci5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBtbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5uYW1lU2VhcmNofT57ZGF0YVJlY2VpdmVyLmZpcnN0bmFtZX17ZGF0YVJlY2VpdmVyLmxhc3RuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1tbXCJtdC0xXCJdLCBzdHlsZVtcIm51bWJlci1QaG9uZVwiXV0uam9pbihcIiBcIil9PntkYXRhUmVjZWl2ZXIucGhvbmVOdW1iZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9zaGFyZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInNoYXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5zaGFyZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnRuPVwiYnRuLXNoYXJlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvZG93bmxvYWQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJkb3dubG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuZG93bmxvYWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPVwiRG93bmxvYWQgUERGXCIgYnRuPVwiYnRuLWRvd25sb2FkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0aXRsZT1cIkJhY2sgVG8gSG9tZVwiIGJ0bj1cImJ0bi1jb250aW51ZVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrSG9tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgey8qIHRyYW5zZmVyIGZhaWxlZCAqL31cclxuICAgICAgICAgICAgICAgIHtzaG93RmFpbGVkID09PSB0cnVlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2ZhaWxlZC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImZhaWxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlWydzdWNjZXNzLWltZyddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0ZXh0LXN1Y2Nlc3MnXX0+VHJhbnNmZXIgRmFpbGVkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWyd0ZXh0LWZhaWwnXX0+V2UgY2Fu4oCZdCB0cmFuc2ZlciB5b3VyIG1vbmV5IGF0IHRoZSBtb21lbnQsIHdlIHJlY29tbWVuZCB5b3UgdG8gY2hlY2sgeW91cjxiciAvPiBpbnRlcm5ldCBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2RldGFpbC10cmFuc2ZlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFtb3VudDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJwLntkYXRhLmFtb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2RldGFpbC10cmFuc2ZlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkJhbGFuY2UgTGVmdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJwLntkYXRhSXNMb2dpbi5jcmVkaXQgLSBkYXRhLmFtb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2RldGFpbC10cmFuc2ZlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRhdGUgJiB0aW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21vbWVudCgpLnRvRGF0ZSgpLmdldFRpbWUoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2RldGFpbC10cmFuc2ZlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk5vdGVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RhdGEubm90ZXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLXRyYW5zZmVyJ119PlRyYW5zZmVyIFRvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W1tcImQtZmxleFwiXSwgW1wiYWxpZ24taXRlbXMtY2VudGVyXCJdLCBbXCJweS0yXCJdLCBbXCJwbC0zXCJdLCBbXCJtdC00XCJdLCBzdHlsZVtcImZvcm0tdXNlcnNcIl1dLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuYXBpX2ltZ30ke2RhdGFSZWNlaXZlci5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBtbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5uYW1lU2VhcmNofT57ZGF0YVJlY2VpdmVyLmZpcnN0bmFtZX17ZGF0YVJlY2VpdmVyLmxhc3RuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1tbXCJtdC0xXCJdLCBzdHlsZVtcIm51bWJlci1QaG9uZVwiXV0uam9pbihcIiBcIil9PntkYXRhUmVjZWl2ZXIucGhvbmVOdW1iZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0aXRsZT1cIlRyeSBBZ2FpblwiIGJ0bj1cImJ0bi1jb250aW51ZVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrSG9tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFydFRyYW5zZmVyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=