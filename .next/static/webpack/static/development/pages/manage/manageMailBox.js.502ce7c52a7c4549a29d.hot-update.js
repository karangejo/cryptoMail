webpackHotUpdate("static/development/pages/manage/manageMailBox.js",{

/***/ "./components/showContacts.js":
/*!************************************!*\
  !*** ./components/showContacts.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");










var ShowContacts =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ShowContacts, _Component);

  function ShowContacts() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ShowContacts);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ShowContacts).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ShowContacts, [{
    key: "renderConnections",
    value: function renderConnections() {
      var _this = this;

      var items = this.props.trustedMailBoxes.map(function (mailbox, index) {
        return {
          header: "User Address: ".concat(_this.props.trustedConnections[index], ":"),
          meta: "Public Key: ".concat(_this.props.myTrustedKeys[index]),
          description: "MailBox: ".concat(mailBox),
          fluid: true,
          color: "yellow",
          raised: true
        };
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Card"].Group, {
        items: items
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Segment"], {
        raised: true,
        color: "orange"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "Trusted Connections"), this.renderConnections());
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var trustedMailBoxes, trustedConnections, myTrustedKeys;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                trustedMailBoxes = this.props.trustedMailBoxes;
                trustedConnections = this.props.trustedConnections;
                myTrustedKeys = this.props.myTrustedKeys;
                return _context.abrupt("return", {
                  trustedMailBoxes: trustedMailBoxes,
                  trustedConnections: trustedConnections,
                  myTrustedKeys: myTrustedKeys
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ShowContacts;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ShowContacts);

/***/ }),

/***/ "./pages/manage/manageMailBox.js":
/*!***************************************!*\
  !*** ./pages/manage/manageMailBox.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _ethereum_mailBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ethereum/mailBox */ "./ethereum/mailBox.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _components_decryptMessages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/decryptMessages */ "./components/decryptMessages.js");
/* harmony import */ var _components_showContacts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/showContacts */ "./components/showContacts.js");


















var ManageMailBox =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ManageMailBox, _Component);

  function ManageMailBox() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ManageMailBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ManageMailBox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      showDecryptedMessages: false,
      privateKey: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSubmit", function (event) {
      _this.setState({
        showDecryptedMessages: true
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ManageMailBox, [{
    key: "renderMessages",
    value: function renderMessages() {
      var items = this.props.messages.map(function (message, index) {
        return {
          header: "Message Number: ".concat(index + 1),
          meta: "".concat(message),
          fluid: true,
          color: "green",
          raised: true
        };
      });
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"].Group, {
        items: items
      });
    }
  }, {
    key: "renderDecryptedMessages",
    value: function renderDecryptedMessages() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_decryptMessages__WEBPACK_IMPORTED_MODULE_15__["default"], {
        messages: this.props.messages,
        privateKey: this.state.privateKey
      });
    }
  }, {
    key: "renderForManager",
    value: function renderForManager() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        raised: true,
        color: "orange"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h5", null, "User Name: ", this.props.userName, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("small", null, this.props.me)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h5", null, "MailBox Address: ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("small", null, this.props.mailBoxAddress)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h5", null, "Number of Messages: ", this.props.numMessages), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h5", null, "My Public Key: ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("small", null, this.props.myPublicKey)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h5", null, "Number of Trusted Connections: ", this.props.trustedConnections.length)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        raised: true,
        color: "purple"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", null, "Encrypted Inbox"), this.renderMessages()), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        raised: true,
        color: "blue"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"], {
        onSubmit: this.onSubmit
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Enter Your PRIVATE key to Decrypt Messages. ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, "Carefull! Do not reveal your PRIVATE key to anyone."), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, "If you do not trust this site to decrypt your messages please copy the encryted messages and decrypt them yourself.")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        label: "Private Key",
        labelPosition: "right",
        value: this.state.privateKey,
        onChange: function onChange(event) {
          return _this2.setState({
            privateKey: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        primary: true
      }, "Decrypt"), this.state.showDecryptedMessages && this.renderDecryptedMessages())), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_showContacts__WEBPACK_IMPORTED_MODULE_16__["default"], {
        trustedConnections: this.props.trustedConnections,
        trustedMailBoxes: this.props.trustedMailBoxes,
        myTrustedKeys: this.props.myTrustedKeys
      }));
    }
  }, {
    key: "renderError",
    value: function renderError() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        raised: true,
        color: "orange"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", null, "Oops! You are not the Owner of this MailBox!"));
    }
  }, {
    key: "renderCondition",
    value: function renderCondition() {
      if (this.props.managerLogIn) {
        return this.renderForManager();
      }

      return this.renderError();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        raised: true,
        color: "blue"
      }, this.renderCondition()));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var myMailBox, mailBoxAddress, userName, myPublicKey, me, numMessages, trustedConnections, trustedMailBoxes, accounts, myTrustedKeys, i, key, messages, message, managerLogIn;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                myMailBox = Object(_ethereum_mailBox__WEBPACK_IMPORTED_MODULE_11__["default"])(props.query.address);
                mailBoxAddress = props.query.address;
                _context.next = 4;
                return myMailBox.methods.userName().call();

              case 4:
                userName = _context.sent;
                _context.next = 7;
                return myMailBox.methods.publicKey().call();

              case 7:
                myPublicKey = _context.sent;
                _context.next = 10;
                return myMailBox.methods.me().call();

              case 10:
                me = _context.sent;
                _context.next = 13;
                return myMailBox.methods.numberOfMessages().call();

              case 13:
                numMessages = _context.sent;
                _context.next = 16;
                return myMailBox.methods.getMyTrustedConnections().call();

              case 16:
                trustedConnections = _context.sent;
                _context.next = 19;
                return myMailBox.methods.getMyTrustedMailBoxes().call();

              case 19:
                trustedMailBoxes = _context.sent;
                _context.next = 22;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_14__["default"].eth.getAccounts();

              case 22:
                accounts = _context.sent;
                myTrustedKeys = [];
                i = 0;

              case 25:
                if (!(i < trustedConnections.length)) {
                  _context.next = 33;
                  break;
                }

                _context.next = 28;
                return myMailBox.methods.myTrustedPublicKeys(i).call();

              case 28:
                key = _context.sent;
                myTrustedKeys[i] = key;

              case 30:
                i++;
                _context.next = 25;
                break;

              case 33:
                messages = [];
                i = 0;

              case 35:
                if (!(i < numMessages)) {
                  _context.next = 43;
                  break;
                }

                _context.next = 38;
                return myMailBox.methods.mailbox(i).call();

              case 38:
                message = _context.sent;
                messages[i] = message;

              case 40:
                i++;
                _context.next = 35;
                break;

              case 43:
                managerLogIn = false;

                if (accounts[0] == me) {
                  managerLogIn = true;
                }

                return _context.abrupt("return", {
                  myMailBox: myMailBox,
                  mailBoxAddress: mailBoxAddress,
                  userName: userName,
                  myPublicKey: myPublicKey,
                  me: me,
                  numMessages: numMessages,
                  messages: messages,
                  trustedConnections: trustedConnections,
                  trustedMailBoxes: trustedMailBoxes,
                  myTrustedKeys: myTrustedKeys,
                  managerLogIn: managerLogIn
                });

              case 46:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ManageMailBox;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ManageMailBox);

/***/ })

})
//# sourceMappingURL=manageMailBox.js.502ce7c52a7c4549a29d.hot-update.js.map