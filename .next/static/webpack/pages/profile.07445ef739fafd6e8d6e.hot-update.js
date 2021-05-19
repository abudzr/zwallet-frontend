webpackHotUpdate_N_E("pages/profile",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./pages/profile/index.js":
/*!********************************!*\
  !*** ./pages/profile/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_module_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/module/Sidebar */ "./components/module/Sidebar/index.js");
/* harmony import */ var _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/profile.module.css */ "./styles/profile.module.css");
/* harmony import */ var _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_profile_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _components_module_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/module/Button */ "./components/module/Button/index.js");
/* harmony import */ var _components_base_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/base/Layout */ "./components/base/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_module_Navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/module/Navbar */ "./components/module/Navbar/index.js");
/* harmony import */ var _components_module_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/module/Footer */ "./components/module/Footer/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _helper_authNext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../helper/authNext */ "./helper/authNext.js");



var _jsxFileName = "F:\\xampp\\htdocs\\arkademy\\Zwallet\\zwallet\\pages\\profile\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















function Profile() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    firstname: "",
    lastname: ""
  }),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    image: {}
  }),
      dataImage = _useState3[0],
      setDataImage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])("".concat("http://localhost:8080/").concat(user.image)),
      imgUrl = _useState4[0],
      setImgUrl = _useState4[1];

  var handlelogout = function handlelogout() {
    localStorage.clear('token');
    router.push('/');
  };

  var handleClickPersonal = function handleClickPersonal() {
    router.push('/profile/personal-info');
  };

  var handleChangePass = function handleChangePass() {
    router.push('/profile/change-password');
  };

  var handleChangePin = function handleChangePin() {
    router.push('/profile/change-pin');
  };

  var hiddenFileInput = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null);

  var handleClick = function handleClick(e) {
    hiddenFileInput.current.click();
  };

  var handleChangeImage = function handleChangeImage(event) {
    setDataImage({
      image: event.target.files[0]
    });
    console.log(event.target.files[0]); // setStatus(true);

    setImgUrl(URL.createObjectURL(event.target.files[0]));
  };

  var handleFormChange = function handleFormChange(event) {
    var userNew = _objectSpread({}, data);

    userNew[event.target.name] = event.target.value; // console.log(userNew);

    setData(userNew);
  };

  var handleSave = function handleSave(event) {
    event.preventDefault();
    var formData = new FormData();
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("image", dataImage.image);
    var url = "".concat("http://localhost:8080/api/v1", "/users/").concat(user.id); // console.log(url);

    axios__WEBPACK_IMPORTED_MODULE_9___default.a.patch(url, formData).then(function (res) {
      // this.getPostAPI()
      sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire("Update Profile Success!", "", "success");
    }, function (err) {
      if (err) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire(" ERROR!!!", "Update Failed", "error");
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    var token = localStorage.getItem('token');
    var url = "".concat("http://localhost:8080/api/v1", "/users/find-one");
    axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function (res) {
      var data = res.data.data[0];
      setUser(data);
      setData(data);
      setImgUrl("".concat("http://localhost:8080/").concat(res.data.data[0].image)); // console.log(res.data.data[0].image);
    })["catch"](function (err) {
      console.log(err);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_base_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Profile | Z-wallet",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Navbar__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-lg-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-lg-8",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['card-profile'],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['image-user'],
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: imgUrl,
                alt: "Picture feature",
                width: 80,
                height: 80
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.editProfile,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/images/pencil.png",
                alt: "edit profile",
                width: 20,
                height: 20
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
                title: "Edit",
                btn: "btn-edit",
                toggle: "modal",
                target: "#exampleModalCenter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: [user.firstname, " ", user.lastname]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: user.phoneNumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "d-flex",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
                title: "Personal Information",
                btn: "btn-profile",
                onClick: handleClickPersonal
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowRight"],
                className: _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconProfile
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "d-flex",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
                title: "Change Password",
                btn: "btn-profile",
                onClick: handleChangePass
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowRight"],
                className: _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconProfile
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "d-flex",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
                title: "Change PIN",
                btn: "btn-profile",
                onClick: handleChangePin
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowRight"],
                className: _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconProfile
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "d-flex",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
                title: "Logout",
                btn: "btn-profile",
                onClick: handlelogout
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
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
              children: "Edit Your Profile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 29
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
                lineNumber: 165,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "modal-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row justify-content-center mb-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['image-user-modal'],
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: imgUrl,
                  alt: "Picture feature",
                  width: 90,
                  height: 90
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  title: "Choose photo",
                  btn: "btn-choose-picture",
                  onClick: handleClick
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "file",
                  name: "image",
                  ref: hiddenFileInput,
                  onChange: function onChange(event) {
                    return handleChangeImage(event);
                  },
                  style: {
                    display: "none"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "justify-content-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "firstname",
                children: "First Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                className: [["form-control mt-1"], _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["form-edit-profile"]].join(" "),
                name: "firstname",
                id: "firstname",
                value: data.firstname,
                onChange: handleFormChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "justify-content-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "lastname",
                children: "Last Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                className: [["form-control mt-1"], _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["form-edit-profile"]].join(" "),
                name: "lastname",
                id: "lastname",
                value: data.lastname,
                onChange: handleFormChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: [["modal-footer"], _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["btn-modal"]].join(" "),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Save Changes",
              btn: "btn-continue",
              onClick: handleSave
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 9
  }, this);
}

_s(Profile, "LTyOFMejeFAZRoSgTx05U3Uao6o=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"]];
});

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_helper_authNext__WEBPACK_IMPORTED_MODULE_14__["default"])(Profile));

var _c, _c2;

$RefreshReg$(_c, "Profile");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZGF0YSIsInNldERhdGEiLCJpbWFnZSIsImRhdGFJbWFnZSIsInNldERhdGFJbWFnZSIsInByb2Nlc3MiLCJpbWdVcmwiLCJzZXRJbWdVcmwiLCJoYW5kbGVsb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsInB1c2giLCJoYW5kbGVDbGlja1BlcnNvbmFsIiwiaGFuZGxlQ2hhbmdlUGFzcyIsImhhbmRsZUNoYW5nZVBpbiIsImhpZGRlbkZpbGVJbnB1dCIsInVzZVJlZiIsImhhbmRsZUNsaWNrIiwiZSIsImN1cnJlbnQiLCJjbGljayIsImhhbmRsZUNoYW5nZUltYWdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJoYW5kbGVGb3JtQ2hhbmdlIiwidXNlck5ldyIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVNhdmUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ1cmwiLCJpZCIsImF4aW9zIiwicGF0Y2giLCJ0aGVuIiwicmVzIiwiU3dhbCIsImZpcmUiLCJlcnIiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImdldEl0ZW0iLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInN0eWxlIiwiZWRpdFByb2ZpbGUiLCJwaG9uZU51bWJlciIsImZhQXJyb3dSaWdodCIsImljb25Qcm9maWxlIiwiZGlzcGxheSIsImpvaW4iLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQUEsWUF0SEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUEySEg7O0dBbE5RekMsTztVQUNVRSxzRDs7O0tBRFZGLE87QUFvTk0scUVBQUFvRSxpRUFBUSxDQUFDcEUsT0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjA3NDQ1ZWY3MzlmYWZkNmU4ZDZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lkZWJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vZHVsZS9TaWRlYmFyJ1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL3Byb2ZpbGUubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgZmFBcnJvd1JpZ2h0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2R1bGUvQnV0dG9uJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmFzZS9MYXlvdXQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2R1bGUvTmF2YmFyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9kdWxlL0Zvb3RlcidcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi8uLi9oZWxwZXIvYXV0aE5leHQnXHJcblxyXG5mdW5jdGlvbiBQcm9maWxlKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGZpcnN0bmFtZTogXCJcIixcclxuICAgICAgICBsYXN0bmFtZTogXCJcIlxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbZGF0YUltYWdlLCBzZXREYXRhSW1hZ2VdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGltYWdlOiB7fSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2ltZ1VybCwgc2V0SW1nVXJsXSA9IHVzZVN0YXRlKGAke3Byb2Nlc3MuZW52LmFwaV9pbWd9JHt1c2VyLmltYWdlfWApO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZWxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoJ3Rva2VuJyk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tQZXJzb25hbCA9ICgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2ZpbGUvcGVyc29uYWwtaW5mbycpXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VQYXNzID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvcHJvZmlsZS9jaGFuZ2UtcGFzc3dvcmQnKVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlUGluID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvcHJvZmlsZS9jaGFuZ2UtcGluJylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoaWRkZW5GaWxlSW5wdXQgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgaGlkZGVuRmlsZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VJbWFnZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldERhdGFJbWFnZSh7XHJcbiAgICAgICAgICAgIGltYWdlOiBldmVudC50YXJnZXQuZmlsZXNbMF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgICAgICAvLyBzZXRTdGF0dXModHJ1ZSk7XHJcbiAgICAgICAgc2V0SW1nVXJsKFVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB1c2VyTmV3ID0geyAuLi5kYXRhIH07XHJcbiAgICAgICAgdXNlck5ld1tldmVudC50YXJnZXQubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codXNlck5ldyk7XHJcbiAgICAgICAgc2V0RGF0YSh1c2VyTmV3KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2F2ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaXJzdG5hbWVcIiwgZGF0YS5maXJzdG5hbWUpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImxhc3RuYW1lXCIsIGRhdGEubGFzdG5hbWUpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGRhdGFJbWFnZS5pbWFnZSk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuYXBpfS91c2Vycy8ke3VzZXIuaWR9YFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgICAgYXhpb3MucGF0Y2godXJsLCBmb3JtRGF0YSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5nZXRQb3N0QVBJKClcclxuXHJcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoXCJVcGRhdGUgUHJvZmlsZSBTdWNjZXNzIVwiLCBcIlwiLCBcInN1Y2Nlc3NcIik7XHJcblxyXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKFwiIEVSUk9SISEhXCIsIFwiVXBkYXRlIEZhaWxlZFwiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52LmFwaX0vdXNlcnMvZmluZC1vbmVgO1xyXG4gICAgICAgIGF4aW9zLmdldCh1cmwsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YS5kYXRhWzBdXHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyKGRhdGEpXHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKGRhdGEpXHJcbiAgICAgICAgICAgICAgICBzZXRJbWdVcmwoYCR7cHJvY2Vzcy5lbnYuYXBpX2ltZ30ke3Jlcy5kYXRhLmRhdGFbMF0uaW1hZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YS5kYXRhWzBdLmltYWdlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPExheW91dCB0aXRsZT1cIlByb2ZpbGUgfCBaLXdhbGxldFwiID5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2NhcmQtcHJvZmlsZSddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnaW1hZ2UtdXNlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1nVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIGZlYXR1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17ODB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17ODB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5lZGl0UHJvZmlsZX0gID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcGVuY2lsLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImVkaXQgcHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9XCJFZGl0XCIgYnRuPVwiYnRuLWVkaXRcIiB0b2dnbGU9XCJtb2RhbFwiIHRhcmdldD1cIiNleGFtcGxlTW9kYWxDZW50ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cD5FZGl0PC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pnt1c2VyLmZpcnN0bmFtZX0ge3VzZXIubGFzdG5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt1c2VyLnBob25lTnVtYmVyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0aXRsZT1cIlBlcnNvbmFsIEluZm9ybWF0aW9uXCIgYnRuPVwiYnRuLXByb2ZpbGVcIiBvbkNsaWNrPXtoYW5kbGVDbGlja1BlcnNvbmFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXJyb3dSaWdodH0gY2xhc3NOYW1lPXtzdHlsZS5pY29uUHJvZmlsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPVwiQ2hhbmdlIFBhc3N3b3JkXCIgYnRuPVwiYnRuLXByb2ZpbGVcIiBvbkNsaWNrPXtoYW5kbGVDaGFuZ2VQYXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXJyb3dSaWdodH0gY2xhc3NOYW1lPXtzdHlsZS5pY29uUHJvZmlsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPVwiQ2hhbmdlIFBJTlwiIGJ0bj1cImJ0bi1wcm9maWxlXCIgb25DbGljaz17aGFuZGxlQ2hhbmdlUGlufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXJyb3dSaWdodH0gY2xhc3NOYW1lPXtzdHlsZS5pY29uUHJvZmlsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPVwiTG9nb3V0XCIgYnRuPVwiYnRuLXByb2ZpbGVcIiBvbkNsaWNrPXtoYW5kbGVsb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogbW9kYWwgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiZXhhbXBsZU1vZGFsQ2VudGVyXCIgdGFiSW5kZXg9XCItMVwiIGRhdGEtYmFja2Ryb3A9XCJmYWxzZVwiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbENlbnRlclRpdGxlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExvbmdUaXRsZVwiPkVkaXQgWW91ciBQcm9maWxlPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2ltYWdlLXVzZXItbW9kYWwnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1nVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBmZWF0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2hvb3NlIHBob3RvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bj1cImJ0bi1jaG9vc2UtcGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtoaWRkZW5GaWxlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2VJbWFnZShldmVudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0bmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1tcImZvcm0tY29udHJvbCBtdC0xXCJdLCBzdHlsZVtcImZvcm0tZWRpdC1wcm9maWxlXCJdXS5qb2luKFwiIFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0bmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmlyc3RuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuZmlyc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3RuYW1lXCI+TGFzdCBOYW1lPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbW1wiZm9ybS1jb250cm9sIG10LTFcIl0sIHN0eWxlW1wiZm9ybS1lZGl0LXByb2ZpbGVcIl1dLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxhc3RuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbW1wibW9kYWwtZm9vdGVyXCJdLCBzdHlsZVtcImJ0bi1tb2RhbFwiXV0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0aXRsZT1cIlNhdmUgQ2hhbmdlc1wiIGJ0bj1cImJ0bi1jb250aW51ZVwiIG9uQ2xpY2s9e2hhbmRsZVNhdmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChQcm9maWxlKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9