webpackHotUpdate_N_E("pages/auth/signin",{

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v10.16.9
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Returns the array of object values (Object.values isn't supported in IE11)
   * @param obj
   */

  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */

  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };

  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };

  var argsToParams = function argsToParams(args) {
    var params = {};

    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      _extends(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }

    return params;
  };

  var swalPrefix = 'swal2-';
  var prefix = function prefix(items) {
    var result = {};

    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  var getIcon = function getIcon() {
    return elementByClass(swalClasses.icon);
  };
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  var getConfirmButton = function getConfirmButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };
  var getDenyButton = function getDenyButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  };
  var getInputLabel = function getInputLabel() {
    return elementByClass(swalClasses['input-label']);
  };
  var getLoader = function getLoader() {
    return elementBySelector(".".concat(swalClasses.loader));
  };
  var getCancelButton = function getCancelButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js

  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible(el);
    });
  };
  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };

  var states = {
    previousBodyPadding: null
  };
  var setInnerHtml = function setInnerHtml(elem, html) {
    // #1926
    elem.textContent = '';

    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
    }
  };
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }

    var classList = className.split(/\s+/);

    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  var removeCustomClasses = function removeCustomClasses(elem, params) {
    toArray(elem.classList).forEach(function (className) {
      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
        elem.classList.remove(className);
      }
    });
  };

  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  function getInput(content, inputType) {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);

      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(content, swalClasses.input);
    }
  }
  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.display = display;
  };
  var hide = function hide(elem) {
    elem.style.display = 'none';
  };
  var setStyle = function setStyle(parent, selector, property, value) {
    var el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  var isVisible = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  var allButtonsAreHidden = function allButtonsAreHidden() {
    return !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
  };
  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119

  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = function (e) {
      resetValidationMessage(e);
      rangeOutput.value = range.value;
    };

    range.onchange = function (e) {
      resetValidationMessage(e);
      range.nextSibling.value = range.value;
    };
  };

  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (_typeof(param) === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';

    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var loader = getLoader();
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      actions.insertBefore(cancelButton, loader);
      actions.insertBefore(denyButton, loader);
      actions.insertBefore(confirmButton, loader);
    } // Loader


    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };

  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);

    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

    var queueStep = document.body.getAttribute('data-swal2-queue-step');

    if (queueStep) {
      container.setAttribute('data-queue-step', queueStep);
      document.body.removeAttribute('data-swal2-queue-step');
    }
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };

  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
        input.removeAttribute(attrName);
      }
    }
  };

  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput(getContent(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }

      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  var setInputLabel = function setInputLabel(input, prependTo, params) {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      var label = document.createElement('label');
      var labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      addClass(label, params.customClass.inputLabel);
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  var getInputContainer = function getInputContainer(inputType) {
    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getContent(), inputClass);
  };

  var renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }

    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = function (input, params) {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    setInputLabel(rangeInput, range, params);
    return range;
  };

  renderInputType.select = function (select, params) {
    select.textContent = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };

  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput(getContent(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = function (textarea, params) {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    var getPadding = function getPadding(el) {
      return parseInt(window.getComputedStyle(el).paddingLeft) + parseInt(window.getComputedStyle(el).paddingRight);
    };

    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + getPadding(getPopup()) + getPadding(getContent());

        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = "".concat(contentWidth, "px");
        } else {
          getPopup().style.width = null;
        }
      };

      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    return textarea;
  };

  var renderContent = function renderContent(instance, params) {
    var htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block'); // Content as plain text
    } else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block'); // No content
    } else {
      hide(htmlContainer);
    }

    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params, 'content');
  };

  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance);
    var icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }

    if (!params.icon && !params.iconHtml) {
      return hide(icon);
    }

    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      return hide(icon);
    }

    show(icon); // Custom or default content

    setContent(icon, params);
    applyStyles(icon, params); // Animate icon

    addClass(icon, params.showClass.icon);
  };

  var applyStyles = function applyStyles(icon, params) {
    for (var iconType in iconTypes) {
      if (params.icon !== iconType) {
        removeClass(icon, iconTypes[iconType]);
      }
    }

    addClass(icon, iconTypes[params.icon]); // Icon color

    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgoundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var setContent = function setContent(icon, params) {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  var setColor = function setColor(icon, params) {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (var _i = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i < _arr.length; _i++) {
      var sel = _arr[_i];
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };

  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    warnAboutDeprecation('Swal.queue()', "async/await");
    var Swal = this;
    currentSteps = steps;

    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      resolve(value);
    };

    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */

  var getQueueStep = function getQueueStep() {
    return getContainer() && getContainer().getAttribute('data-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */

  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }

    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */

  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };

  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText, 'block');

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };

  var renderPopup = function renderPopup(instance, params) {
    var container = getContainer();
    var popup = getPopup(); // Width

    if (params.toast) {
      // #2170
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    } // Padding


    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    }

    hide(getValidationMessage()); // Classes

    addClasses(popup, params);
  };

  var addClasses = function addClasses(popup, params) {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    } else if (typeof params.onRender === 'function') {
      params.onRender(getPopup()); // @deprecated
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  var isVisible$1 = function isVisible$$1() {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Deny' button
   */

  var clickDeny = function clickDeny() {
    return getDenyButton() && getDenyButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */

  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);

      var _super = _createSuper(MixinSwal);

      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _super.apply(this, arguments);
      }

      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params, priorityMixinParams) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, _extends({}, mixinParams, priorityMixinParams));
        }
      }]);

      return MixinSwal;
    }(this);

    return MixinSwal;
  }

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  var showLoading = function showLoading(buttonToReplace) {
    var popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    var actions = getActions();
    var loader = getLoader();

    if (!buttonToReplace && isVisible(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
    show(loader);
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  var RESTORE_FOCUS_TIMEOUT = 100;

  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  var restoreActiveElement = function restoreActiveElement(returnFocus) {
    return new Promise(function (resolve) {
      if (!returnFocus) {
        return resolve();
      }

      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  var increaseTimer = function increaseTimer(n) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  var bodyClickListenerAdded = false;
  var clickHandlers = {};
  function bindClickHandler() {
    var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  var bodyClickListener = function bodyClickListener(event) {
    // 1. using .parentNode instead of event.path because of better support by old browsers https://stackoverflow.com/a/39245638
    // 2. using .parentNode instead of .parentElement because of IE11 + SVG https://stackoverflow.com/a/36270354
    for (var el = event.target; el && el !== document; el = el.parentNode) {
      for (var attr in clickHandlers) {
        var template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template: template
          });
          return;
        }
      }
    }
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    onBeforeOpen: undefined,
    onOpen: undefined,
    willOpen: undefined,
    didOpen: undefined,
    onRender: undefined,
    didRender: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    willClose: undefined,
    didClose: undefined,
    onDestroy: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'onAfterClose', 'onClose', 'onDestroy', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  var deprecatedParams = {
    animation: 'showClass" and "hideClass',
    onBeforeOpen: 'willOpen',
    onOpen: 'didOpen',
    onRender: 'didRender',
    onClose: 'willClose',
    onAfterClose: 'didClose',
    onDestroy: 'didDestroy'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getHeader: getHeader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler
  });

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */

  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  function getInput$1(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.content, innerParams.input);
  }

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
    var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      var bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;

    container.ontouchstart = function (e) {
      preventTouchMove = shouldPreventTouchMove(e);
    };

    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
    var target = event.target;
    var container = getContainer();

    if (isStylys(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    !(isScrollable(getContent()) && // #1944
    getContent().contains(target))) {
      return true;
    }

    return false;
  };

  var isStylys = function isStylys(event) {
    // #1786
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  var isZoom = function isZoom(event) {
    // #1891
    return event.touches && event.touches.length > 1;
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /* istanbul ignore file */

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933


  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');

    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };

  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(function () {
        return triggerDidCloseAndDispose(instance, didClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
      container.parentNode.removeChild(container);
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  function close(resolveValue) {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    resolveValue = prepareResolveValue(resolveValue);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

    swalPromiseResolve(resolveValue);
  }

  var prepareResolveValue = function prepareResolveValue(resolveValue) {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return _extends({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
        onAfterClose = innerParams.onAfterClose,
        willClose = innerParams.willClose,
        didClose = innerParams.didClose;
    runDidClose(popup, willClose, onClose);

    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, didClose || onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, didClose || onAfterClose);
    }
  };

  var runDidClose = function runDidClose(popup, willClose, onClose) {
    if (willClose !== null && typeof willClose === 'function') {
      willClose(popup);
    } else if (onClose !== null && typeof onClose === 'function') {
      onClose(popup); // @deprecated
    }
  };

  var animatePopup = function animatePopup(instance, popup, container, returnFocus, didClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
    setTimeout(function () {
      if (typeof didClose === 'function') {
        didClose();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    var params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    var domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  var Timer = /*#__PURE__*/function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }

        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return Timer;
  }();

  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function


    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  var getTemplateParams = function getTemplateParams(params) {
    var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }

    var templateContent = template.content || template; // IE11

    showWarningsForElements(templateContent);

    var result = _extends(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));

    return result;
  };

  var getSwalParams = function getSwalParams(templateContent) {
    var result = {};
    toArray(templateContent.querySelectorAll('swal-param')).forEach(function (param) {
      showWarningsForAttributes(param, ['name', 'value']);
      var paramName = param.getAttribute('name');
      var value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        value = false;
      }

      if (_typeof(defaultParams[paramName]) === 'object') {
        value = JSON.parse(value);
      }

      result[paramName] = value;
    });
    return result;
  };

  var getSwalButtons = function getSwalButtons(templateContent) {
    var result = {};
    toArray(templateContent.querySelectorAll('swal-button')).forEach(function (button) {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      var type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  var getSwalImage = function getSwalImage(templateContent) {
    var result = {};
    var image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };

  var getSwalIcon = function getSwalIcon(templateContent) {
    var result = {};
    var icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };

  var getSwalInput = function getSwalInput(templateContent) {
    var result = {};
    var input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }

    var inputOptions = templateContent.querySelectorAll('swal-input-option');

    if (inputOptions.length) {
      result.inputOptions = {};
      toArray(inputOptions).forEach(function (option) {
        showWarningsForAttributes(option, ['value']);
        var optionValue = option.getAttribute('value');
        var optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };

  var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
    var result = {};

    for (var i in paramNames) {
      var paramName = paramNames[i];
      var tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }

    return result;
  };

  var showWarningsForElements = function showWarningsForElements(template) {
    var allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    toArray(template.querySelectorAll('*')).forEach(function (el) {
      if (el.parentNode !== template) {
        // can't use template.children because of IE11
        return;
      }

      var tagName = el.tagName.toLowerCase();

      if (allowedElements.indexOf(tagName) === -1) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };

  var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
    toArray(el.attributes).forEach(function (attribute) {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  var SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    } else if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup); // @deprecated
    }

    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(function () {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    runDidOpen(popup, params);
    removeClass(container, swalClasses['no-transition']);
  };

  var runDidOpen = function runDidOpen(popup, params) {
    if (typeof params.didOpen === 'function') {
      setTimeout(function () {
        return params.didOpen(popup);
      });
    } else if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      }); // @deprecated
    }
  };

  var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
    var popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    IEfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  var addClasses$1 = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup);
    setTimeout(function () {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      handleInputValue(instance, params);
    }
  };
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();

    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);

      var renderOption = function renderOption(parent, optionLabel, optionValue) {
        var option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          var optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(function (o) {
            return renderOption(optgroup, o[1], o[0]);
          });
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        var label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  var isSelected = function isSelected(optionValue, inputValue) {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, innerParams, 'confirm');
    } else {
      confirm(instance, innerParams, true);
    }
  };
  var handleDenyButtonClick = function handleDenyButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, innerParams, 'deny');
    } else {
      deny(instance, innerParams, false);
    }
  };
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, innerParams, type
  /* type is either 'confirm' or 'deny' */
  ) {
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, innerParams, inputValue);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, innerParams, inputValue);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };

  var handleInputValidator = function handleInputValidator(instance, innerParams, inputValue) {
    instance.disableInput();
    var validationPromise = Promise.resolve().then(function () {
      return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
    });
    validationPromise.then(function (validationMessage) {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else {
        confirm(instance, innerParams, inputValue);
      }
    });
  };

  var deny = function deny(instance, innerParams, value) {
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      var preDenyPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
      });
      preDenyPromise.then(function (preDenyValue) {
        if (preDenyValue === false) {
          instance.hideLoading();
        } else {
          instance.closePopup({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      });
    } else {
      instance.closePopup({
        isDenied: true,
        value: value
      });
    }
  };

  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      isConfirmed: true,
      value: value
    });
  };

  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  var arrowKeysNextButton = ['ArrowRight', 'ArrowDown', 'Right', 'Down' // IE11
  ];
  var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp', 'Left', 'Up' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];

  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).indexOf(e.key) !== -1) {
      handleArrows(e.key); // ESC
    } else if (escKeys.indexOf(e.key) !== -1) {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleArrows = function handleArrows(key) {
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton();

    if (!([confirmButton, denyButton, cancelButton].indexOf(document.activeElement) !== -1)) {
      return;
    }

    var sibling = arrowKeysNextButton.indexOf(key) !== -1 ? 'nextElementSibling' : 'previousElementSibling';
    var buttonToFocus = document.activeElement[sibling];

    if (buttonToFocus) {
      buttonToFocus.focus();
    }
  };

  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      var innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  var ignoreOutsideClick = false;

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      var innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    showWarningsForParams(_extends({}, mixinParams, userParams));

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
    }

    globalState.currentInstance = this;
    var innerParams = prepareParams(userParams, mixinParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  var prepareParams = function prepareParams(userParams, mixinParams) {
    var templateParams = getTemplateParams(userParams);

    var params = _extends({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131


    params.showClass = _extends({}, defaultParams.showClass, params.showClass);
    params.hideClass = _extends({}, defaultParams.hideClass, params.hideClass); // @deprecated

    if (userParams.animation === false) {
      params.showClass = {
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }

    return params;
  };

  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          isDismissed: true,
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };

      domCache.denyButton.onclick = function () {
        return handleDenyButtonClick(instance, innerParams);
      };

      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };

  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(function () {
          if (globalState$$1.timeout && globalState$$1.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };

  var focusButton = function focusButton(domCache, innerParams) {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
      }
    });

    var updatedParams = _extends({}, innerParams, validUpdatableParams);

    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: _extends({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    runDidDestroy(innerParams);
    disposeSwal(this);
  }

  var runDidDestroy = function runDidDestroy(innerParams) {
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    } else if (typeof innerParams.onDestroy === 'function') {
      innerParams.onDestroy(); // @deprecated
    }
  };

  var disposeSwal = function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  };

  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  var currentInstance;

  var SweetAlert = /*#__PURE__*/function () {
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);

      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      } // Check for the existence of Promise


      if (typeof Promise === 'undefined') {
        error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
      }

      currentInstance = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      var promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    _createClass(SweetAlert, [{
      key: "then",
      value: function then(onFulfilled) {
        var promise = privateProps.promise.get(this);
        return promise.then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        var promise = privateProps.promise.get(this);
        return promise["finally"](onFinally);
      }
    }]);

    return SweetAlert;
  }(); // Assign instance methods from src/instanceMethods/*.js to prototype


  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '10.16.9';

  var Swal = SweetAlert;
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{flex-direction:column;align-items:stretch;width:auto;padding:1.25em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;margin:0 .625em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container{padding:.625em 0 0}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex:1;flex-basis:auto!important;align-self:stretch;width:auto;height:2.2em;height:auto;margin:0 .3125em;margin-top:.3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:.125em .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:5px;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#2778c4;color:#fff;font-size:1em}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#d14529;color:#fff;font-size:1em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#757575;color:#fff;font-size:1em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto}.swal2-validation-message{align-items:center;justify-content:center;margin:0 -2.7em;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");

/***/ }),

/***/ "./pages/auth/signin.js":
/*!******************************!*\
  !*** ./pages/auth/signin.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signin; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/signin.module.css */ "./styles/signin.module.css");
/* harmony import */ var _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "F:\\xampp\\htdocs\\arkademy\\Zwallet\\zwallet\\pages\\auth\\signin.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_xampp_htdocs_arkademy_Zwallet_zwallet_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function Signin() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    email: "",
    password: ""
  }),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isPasswordShow = _useState2[0],
      setisPasswordShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      checkPin = _useState3[0],
      setCheckPin = _useState3[1];

  var tooglePasswordVisibility = function tooglePasswordVisibility() {
    setisPasswordShow(!isPasswordShow);
  };

  var handleFormChange = function handleFormChange(event) {
    var dataNew = _objectSpread({}, data);

    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  var handleLogin = function handleLogin(event) {
    event.preventDefault();
    var url = axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("".concat("http://localhost:8080/api/v1", "/users/auth/login"), data).then(function (res) {
      localStorage.setItem("id", res.data.data.id); // localStorage.setItem("pin", res.data.data.pin)

      localStorage.setItem("token", res.data.data.token);

      if (res.data.data.role == 2) {
        router.push('/home');
      }
    })["catch"](function (err) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire("Something Error!", err, "error");
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (localStorage.getItem("token")) {
      router.push("/home");
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['main-login'],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['auth-logins'],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: [["pt-5"], ["ml-5"], _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["title-login"]].join(" "),
          children: "Zwallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: [["d-flex"], _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["image-login"]].join(" "),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['bgWave'],
            src: "/images/vector4.png",
            alt: "Picture of the author"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images/Groupphone.png",
            alt: "Picture of the author",
            width: 512.51338475284683,
            height: 536.4722634749991
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['bottom-section'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['title-bottom-section'],
            children: "App that Covering Banking Needs."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['subtitle-bottom-section'],
            children: "Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("aside", {
      className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["auth-login"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['title-aside'],
        children: "Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['subtitle-aside'],
        children: "Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['title-aside-mobile'],
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['subtitle-aside-mobile'],
        children: "Login to your existing account to access all the features in Zwallet."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: [["mt-5"], _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["form-aside"]].join(" "),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEnvelope"],
            className: data.email === "" ? _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.iconEmail : _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["iconLogin-active"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "email",
            className: [["form-control mt-1"], _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["form-control"]].join(" "),
            name: "email",
            id: "email",
            placeholder: "Enter your e-mail",
            onChange: handleFormChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faLock"],
            className: data.password === "" ? _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.iconPassword : _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["iconLogin-active"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: isPasswordShow ? "text" : "password",
            className: [["form-control mt-1"], _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["form-control"]].join(" "),
            name: "password",
            id: "password",
            placeholder: "Enter your password",
            onChange: handleFormChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
            icon: isPasswordShow ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEyeSlash"],
            className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.iconPass,
            onClick: tooglePasswordVisibility
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['forgot-pass'],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/auth/forgot-password",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "Forgot Password?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            className: data.email === "" && data.password === "" ? [["mt-5 btn"], _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["btn-auth"]].join(" ") : [["mt-5 btn"], _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["btn-auth-active"]].join(" "),
            disabled: data.email === "" && data.password === "" ? true : false,
            onClick: handleLogin,
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_signin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a['dont-haveacc'],
          children: ["Don\u2019t have an account? Let\u2019s", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/auth/signup",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: " Sign Up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }, this);
}

_s(Signin, "MSm7gdsE2N1SZe5NHhAcsagDIuA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Signin;

var _c;

$RefreshReg$(_c, "Signin");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuYWxsLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRoL3NpZ25pbi5qcyJdLCJuYW1lcyI6WyJTaWduaW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJkYXRhIiwic2V0RGF0YSIsImlzUGFzc3dvcmRTaG93Iiwic2V0aXNQYXNzd29yZFNob3ciLCJjaGVja1BpbiIsInNldENoZWNrUGluIiwidG9vZ2xlUGFzc3dvcmRWaXNpYmlsaXR5IiwiaGFuZGxlRm9ybUNoYW5nZSIsImV2ZW50IiwiZGF0YU5ldyIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUxvZ2luIiwicHJldmVudERlZmF1bHQiLCJ1cmwiLCJheGlvcyIsInBvc3QiLCJwcm9jZXNzIiwidGhlbiIsInJlcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJpZCIsInRva2VuIiwicm9sZSIsInB1c2giLCJlcnIiLCJTd2FsIiwiZmlyZSIsInVzZUVmZmVjdCIsImdldEl0ZW0iLCJzdHlsZSIsImpvaW4iLCJmYUVudmVsb3BlIiwiaWNvbkVtYWlsIiwiZmFMb2NrIiwiaWNvblBhc3N3b3JkIiwiZmFFeWUiLCJmYUV5ZVNsYXNoIiwiaWNvblBhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTREO0FBQzlELEVBQUUsU0FDeUQ7QUFDM0QsQ0FBQyxvQkFBb0I7O0FBRXJCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtGQUFrRjtBQUNsRjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLEtBQUs7QUFDTCxrQ0FBa0M7QUFDbEMsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGFBQWE7QUFDbEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDOztBQUV6QztBQUNBO0FBQ0EsS0FBSzs7O0FBR0wsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0RUFBNEU7O0FBRTVFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNFQUFzRTs7QUFFdEUsd0ZBQXdGO0FBQ3hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0Qzs7QUFFNUMscURBQXFEOztBQUVyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7O0FBRWhFLHVEQUF1RDs7QUFFdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLG1CQUFtQiw2QkFBNkI7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZEQUE2RDs7QUFFN0Q7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxLQUFLO0FBQ0w7QUFDQSxtQ0FBbUM7QUFDbkMsS0FBSztBQUNMO0FBQ0E7O0FBRUEsa0NBQWtDOztBQUVsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJB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Q0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLG1CQUFtQjtBQUN4QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLDZEQUE2RCxLQUFLO0FBQ2xFLEtBQUs7QUFDTDtBQUNBO0FBQ0Esd0RBQXdELE1BQU0sUUFBUSxLQUFLO0FBQzNFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOzs7QUFHQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVEQUF1RDs7QUFFdkQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPLEVBQUU7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDOztBQUU5QztBQUNBLEtBQUssc0JBQXNCOztBQUUzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNB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Q0ksZ0JBQUksRUFBQyxRQURUO0FBR0kscUJBQVMsRUFBRWhDLElBQUksQ0FBQ0YsS0FBTCxLQUFlLEVBQWYsSUFBcUJFLElBQUksQ0FBQ0QsUUFBTCxLQUFrQixFQUF2QyxHQUE0QyxDQUFDLENBQUMsVUFBRCxDQUFELEVBQWVpQyxnRUFBSyxDQUFDLFVBQUQsQ0FBcEIsRUFBa0NDLElBQWxDLENBQXVDLEdBQXZDLENBQTVDLEdBQTBGLENBQUMsQ0FBQyxVQUFELENBQUQsRUFBZUQsZ0VBQUssQ0FBQyxpQkFBRCxDQUFwQixFQUF5Q0MsSUFBekMsQ0FBOEMsR0FBOUMsQ0FIekc7QUFJSSxvQkFBUSxFQUFFakMsSUFBSSxDQUFDRixLQUFMLEtBQWUsRUFBZixJQUFxQkUsSUFBSSxDQUFDRCxRQUFMLEtBQWtCLEVBQXZDLEdBQTRDLElBQTVDLEdBQW1ELEtBSmpFO0FBS0ksbUJBQU8sRUFBRWMsV0FMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakNKLGVBNENJO0FBQUcsbUJBQVMsRUFBRW1CLGdFQUFLLENBQUMsY0FBRCxDQUFuQjtBQUFBLDRFQUNJLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBQyxjQUFYO0FBQUEsbUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0dIOztHQXZJdUJ0QyxNO1VBQ0xFLHFEOzs7S0FES0YsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL3NpZ25pbi4zZTRkNjYxMTk0ZjZjNzM0OWViMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4qIHN3ZWV0YWxlcnQyIHYxMC4xNi45XG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLlN3ZWV0YWxlcnQyID0gZmFjdG9yeSgpKTtcbn0odGhpcywgZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBfdHlwZW9mKG9iaik7XG4gIH1cblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgICB9O1xuICAgIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH1cblxuICBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgICAgby5fX3Byb3RvX18gPSBwO1xuICAgICAgcmV0dXJuIG87XG4gICAgfTtcblxuICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG4gIH1cblxuICBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgICB0cnkge1xuICAgICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgIGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICAgIF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgICB9IGVsc2Uge1xuICAgICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgICBpZiAoQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gICAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICAgIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgICAgcmV0dXJuIGNhbGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICAgIHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkge1xuICAgICAgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLFxuICAgICAgICAgIHJlc3VsdDtcblxuICAgICAgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHtcbiAgICAgICAgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcblxuICAgICAgICByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgICAgX2dldCA9IFJlZmxlY3QuZ2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuXG4gICAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xuICB9XG5cbiAgdmFyIGNvbnNvbGVQcmVmaXggPSAnU3dlZXRBbGVydDI6JztcbiAgLyoqXG4gICAqIEZpbHRlciB0aGUgdW5pcXVlIHZhbHVlcyBpbnRvIGEgbmV3IGFycmF5XG4gICAqIEBwYXJhbSBhcnJcbiAgICovXG5cbiAgdmFyIHVuaXF1ZUFycmF5ID0gZnVuY3Rpb24gdW5pcXVlQXJyYXkoYXJyKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZXN1bHQuaW5kZXhPZihhcnJbaV0pID09PSAtMSkge1xuICAgICAgICByZXN1bHQucHVzaChhcnJbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIC8qKlxuICAgKiBDYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgb2YgYSBzdHJpbmdcbiAgICogQHBhcmFtIHN0clxuICAgKi9cblxuICB2YXIgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cikge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG4gIH07XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhcnJheSBvZiBvYmplY3QgdmFsdWVzIChPYmplY3QudmFsdWVzIGlzbid0IHN1cHBvcnRlZCBpbiBJRTExKVxuICAgKiBAcGFyYW0gb2JqXG4gICAqL1xuXG4gIHZhciBvYmplY3RWYWx1ZXMgPSBmdW5jdGlvbiBvYmplY3RWYWx1ZXMob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XTtcbiAgICB9KTtcbiAgfTtcbiAgLyoqXG4gICAqIENvbnZlcnQgTm9kZUxpc3QgdG8gQXJyYXlcbiAgICogQHBhcmFtIG5vZGVMaXN0XG4gICAqL1xuXG4gIHZhciB0b0FycmF5ID0gZnVuY3Rpb24gdG9BcnJheShub2RlTGlzdCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlTGlzdCk7XG4gIH07XG4gIC8qKlxuICAgKiBTdGFuZGFyZGlzZSBjb25zb2xlIHdhcm5pbmdzXG4gICAqIEBwYXJhbSBtZXNzYWdlXG4gICAqL1xuXG4gIHZhciB3YXJuID0gZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XG4gICAgY29uc29sZS53YXJuKFwiXCIuY29uY2F0KGNvbnNvbGVQcmVmaXgsIFwiIFwiKS5jb25jYXQoX3R5cGVvZihtZXNzYWdlKSA9PT0gJ29iamVjdCcgPyBtZXNzYWdlLmpvaW4oJyAnKSA6IG1lc3NhZ2UpKTtcbiAgfTtcbiAgLyoqXG4gICAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgZXJyb3JzXG4gICAqIEBwYXJhbSBtZXNzYWdlXG4gICAqL1xuXG4gIHZhciBlcnJvciA9IGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiXCIuY29uY2F0KGNvbnNvbGVQcmVmaXgsIFwiIFwiKS5jb25jYXQobWVzc2FnZSkpO1xuICB9O1xuICAvKipcbiAgICogUHJpdmF0ZSBnbG9iYWwgc3RhdGUgZm9yIGB3YXJuT25jZWBcbiAgICogQHR5cGUge0FycmF5fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxuICB2YXIgcHJldmlvdXNXYXJuT25jZU1lc3NhZ2VzID0gW107XG4gIC8qKlxuICAgKiBTaG93IGEgY29uc29sZSB3YXJuaW5nLCBidXQgb25seSBpZiBpdCBoYXNuJ3QgYWxyZWFkeSBiZWVuIHNob3duXG4gICAqIEBwYXJhbSBtZXNzYWdlXG4gICAqL1xuXG4gIHZhciB3YXJuT25jZSA9IGZ1bmN0aW9uIHdhcm5PbmNlKG1lc3NhZ2UpIHtcbiAgICBpZiAoIShwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlKSAhPT0gLTEpKSB7XG4gICAgICBwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgIHdhcm4obWVzc2FnZSk7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogU2hvdyBhIG9uZS10aW1lIGNvbnNvbGUgd2FybmluZyBhYm91dCBkZXByZWNhdGVkIHBhcmFtcy9tZXRob2RzXG4gICAqL1xuXG4gIHZhciB3YXJuQWJvdXREZXByZWNhdGlvbiA9IGZ1bmN0aW9uIHdhcm5BYm91dERlcHJlY2F0aW9uKGRlcHJlY2F0ZWRQYXJhbSwgdXNlSW5zdGVhZCkge1xuICAgIHdhcm5PbmNlKFwiXFxcIlwiLmNvbmNhdChkZXByZWNhdGVkUGFyYW0sIFwiXFxcIiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS4gUGxlYXNlIHVzZSBcXFwiXCIpLmNvbmNhdCh1c2VJbnN0ZWFkLCBcIlxcXCIgaW5zdGVhZC5cIikpO1xuICB9O1xuICAvKipcbiAgICogSWYgYGFyZ2AgaXMgYSBmdW5jdGlvbiwgY2FsbCBpdCAod2l0aCBubyBhcmd1bWVudHMgb3IgY29udGV4dCkgYW5kIHJldHVybiB0aGUgcmVzdWx0LlxuICAgKiBPdGhlcndpc2UsIGp1c3QgcGFzcyB0aGUgdmFsdWUgdGhyb3VnaFxuICAgKiBAcGFyYW0gYXJnXG4gICAqL1xuXG4gIHZhciBjYWxsSWZGdW5jdGlvbiA9IGZ1bmN0aW9uIGNhbGxJZkZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nID8gYXJnKCkgOiBhcmc7XG4gIH07XG4gIHZhciBoYXNUb1Byb21pc2VGbiA9IGZ1bmN0aW9uIGhhc1RvUHJvbWlzZUZuKGFyZykge1xuICAgIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZy50b1Byb21pc2UgPT09ICdmdW5jdGlvbic7XG4gIH07XG4gIHZhciBhc1Byb21pc2UgPSBmdW5jdGlvbiBhc1Byb21pc2UoYXJnKSB7XG4gICAgcmV0dXJuIGhhc1RvUHJvbWlzZUZuKGFyZykgPyBhcmcudG9Qcm9taXNlKCkgOiBQcm9taXNlLnJlc29sdmUoYXJnKTtcbiAgfTtcbiAgdmFyIGlzUHJvbWlzZSA9IGZ1bmN0aW9uIGlzUHJvbWlzZShhcmcpIHtcbiAgICByZXR1cm4gYXJnICYmIFByb21pc2UucmVzb2x2ZShhcmcpID09PSBhcmc7XG4gIH07XG5cbiAgdmFyIERpc21pc3NSZWFzb24gPSBPYmplY3QuZnJlZXplKHtcbiAgICBjYW5jZWw6ICdjYW5jZWwnLFxuICAgIGJhY2tkcm9wOiAnYmFja2Ryb3AnLFxuICAgIGNsb3NlOiAnY2xvc2UnLFxuICAgIGVzYzogJ2VzYycsXG4gICAgdGltZXI6ICd0aW1lcidcbiAgfSk7XG5cbiAgdmFyIGlzSnF1ZXJ5RWxlbWVudCA9IGZ1bmN0aW9uIGlzSnF1ZXJ5RWxlbWVudChlbGVtKSB7XG4gICAgcmV0dXJuIF90eXBlb2YoZWxlbSkgPT09ICdvYmplY3QnICYmIGVsZW0uanF1ZXJ5O1xuICB9O1xuXG4gIHZhciBpc0VsZW1lbnQgPSBmdW5jdGlvbiBpc0VsZW1lbnQoZWxlbSkge1xuICAgIHJldHVybiBlbGVtIGluc3RhbmNlb2YgRWxlbWVudCB8fCBpc0pxdWVyeUVsZW1lbnQoZWxlbSk7XG4gIH07XG5cbiAgdmFyIGFyZ3NUb1BhcmFtcyA9IGZ1bmN0aW9uIGFyZ3NUb1BhcmFtcyhhcmdzKSB7XG4gICAgdmFyIHBhcmFtcyA9IHt9O1xuXG4gICAgaWYgKF90eXBlb2YoYXJnc1swXSkgPT09ICdvYmplY3QnICYmICFpc0VsZW1lbnQoYXJnc1swXSkpIHtcbiAgICAgIF9leHRlbmRzKHBhcmFtcywgYXJnc1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFsndGl0bGUnLCAnaHRtbCcsICdpY29uJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGFyZyA9IGFyZ3NbaW5kZXhdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fCBpc0VsZW1lbnQoYXJnKSkge1xuICAgICAgICAgIHBhcmFtc1tuYW1lXSA9IGFyZztcbiAgICAgICAgfSBlbHNlIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGVycm9yKFwiVW5leHBlY3RlZCB0eXBlIG9mIFwiLmNvbmNhdChuYW1lLCBcIiEgRXhwZWN0ZWQgXFxcInN0cmluZ1xcXCIgb3IgXFxcIkVsZW1lbnRcXFwiLCBnb3QgXCIpLmNvbmNhdChfdHlwZW9mKGFyZykpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfTtcblxuICB2YXIgc3dhbFByZWZpeCA9ICdzd2FsMi0nO1xuICB2YXIgcHJlZml4ID0gZnVuY3Rpb24gcHJlZml4KGl0ZW1zKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSBpbiBpdGVtcykge1xuICAgICAgcmVzdWx0W2l0ZW1zW2ldXSA9IHN3YWxQcmVmaXggKyBpdGVtc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICB2YXIgc3dhbENsYXNzZXMgPSBwcmVmaXgoWydjb250YWluZXInLCAnc2hvd24nLCAnaGVpZ2h0LWF1dG8nLCAnaW9zZml4JywgJ3BvcHVwJywgJ21vZGFsJywgJ25vLWJhY2tkcm9wJywgJ25vLXRyYW5zaXRpb24nLCAndG9hc3QnLCAndG9hc3Qtc2hvd24nLCAnc2hvdycsICdoaWRlJywgJ2Nsb3NlJywgJ3RpdGxlJywgJ2hlYWRlcicsICdjb250ZW50JywgJ2h0bWwtY29udGFpbmVyJywgJ2FjdGlvbnMnLCAnY29uZmlybScsICdkZW55JywgJ2NhbmNlbCcsICdmb290ZXInLCAnaWNvbicsICdpY29uLWNvbnRlbnQnLCAnaW1hZ2UnLCAnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAnbGFiZWwnLCAndGV4dGFyZWEnLCAnaW5wdXRlcnJvcicsICdpbnB1dC1sYWJlbCcsICd2YWxpZGF0aW9uLW1lc3NhZ2UnLCAncHJvZ3Jlc3Mtc3RlcHMnLCAnYWN0aXZlLXByb2dyZXNzLXN0ZXAnLCAncHJvZ3Jlc3Mtc3RlcCcsICdwcm9ncmVzcy1zdGVwLWxpbmUnLCAnbG9hZGVyJywgJ2xvYWRpbmcnLCAnc3R5bGVkJywgJ3RvcCcsICd0b3Atc3RhcnQnLCAndG9wLWVuZCcsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnLCAnY2VudGVyJywgJ2NlbnRlci1zdGFydCcsICdjZW50ZXItZW5kJywgJ2NlbnRlci1sZWZ0JywgJ2NlbnRlci1yaWdodCcsICdib3R0b20nLCAnYm90dG9tLXN0YXJ0JywgJ2JvdHRvbS1lbmQnLCAnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JywgJ2dyb3ctcm93JywgJ2dyb3ctY29sdW1uJywgJ2dyb3ctZnVsbHNjcmVlbicsICdydGwnLCAndGltZXItcHJvZ3Jlc3MtYmFyJywgJ3RpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXInLCAnc2Nyb2xsYmFyLW1lYXN1cmUnLCAnaWNvbi1zdWNjZXNzJywgJ2ljb24td2FybmluZycsICdpY29uLWluZm8nLCAnaWNvbi1xdWVzdGlvbicsICdpY29uLWVycm9yJ10pO1xuICB2YXIgaWNvblR5cGVzID0gcHJlZml4KFsnc3VjY2VzcycsICd3YXJuaW5nJywgJ2luZm8nLCAncXVlc3Rpb24nLCAnZXJyb3InXSk7XG5cbiAgdmFyIGdldENvbnRhaW5lciA9IGZ1bmN0aW9uIGdldENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb250YWluZXIpKTtcbiAgfTtcbiAgdmFyIGVsZW1lbnRCeVNlbGVjdG9yID0gZnVuY3Rpb24gZWxlbWVudEJ5U2VsZWN0b3Ioc2VsZWN0b3JTdHJpbmcpIHtcbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lciA/IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yU3RyaW5nKSA6IG51bGw7XG4gIH07XG5cbiAgdmFyIGVsZW1lbnRCeUNsYXNzID0gZnVuY3Rpb24gZWxlbWVudEJ5Q2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChjbGFzc05hbWUpKTtcbiAgfTtcblxuICB2YXIgZ2V0UG9wdXAgPSBmdW5jdGlvbiBnZXRQb3B1cCgpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMucG9wdXApO1xuICB9O1xuICB2YXIgZ2V0SWNvbiA9IGZ1bmN0aW9uIGdldEljb24oKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmljb24pO1xuICB9O1xuICB2YXIgZ2V0VGl0bGUgPSBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMudGl0bGUpO1xuICB9O1xuICB2YXIgZ2V0Q29udGVudCA9IGZ1bmN0aW9uIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNvbnRlbnQpO1xuICB9O1xuICB2YXIgZ2V0SHRtbENvbnRhaW5lciA9IGZ1bmN0aW9uIGdldEh0bWxDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWydodG1sLWNvbnRhaW5lciddKTtcbiAgfTtcbiAgdmFyIGdldEltYWdlID0gZnVuY3Rpb24gZ2V0SW1hZ2UoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmltYWdlKTtcbiAgfTtcbiAgdmFyIGdldFByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiBnZXRQcm9ncmVzc1N0ZXBzKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcHMnXSk7XG4gIH07XG4gIHZhciBnZXRWYWxpZGF0aW9uTWVzc2FnZSA9IGZ1bmN0aW9uIGdldFZhbGlkYXRpb25NZXNzYWdlKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10pO1xuICB9O1xuICB2YXIgZ2V0Q29uZmlybUJ1dHRvbiA9IGZ1bmN0aW9uIGdldENvbmZpcm1CdXR0b24oKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5hY3Rpb25zLCBcIiAuXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb25maXJtKSk7XG4gIH07XG4gIHZhciBnZXREZW55QnV0dG9uID0gZnVuY3Rpb24gZ2V0RGVueUJ1dHRvbigpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmFjdGlvbnMsIFwiIC5cIikuY29uY2F0KHN3YWxDbGFzc2VzLmRlbnkpKTtcbiAgfTtcbiAgdmFyIGdldElucHV0TGFiZWwgPSBmdW5jdGlvbiBnZXRJbnB1dExhYmVsKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1snaW5wdXQtbGFiZWwnXSk7XG4gIH07XG4gIHZhciBnZXRMb2FkZXIgPSBmdW5jdGlvbiBnZXRMb2FkZXIoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5sb2FkZXIpKTtcbiAgfTtcbiAgdmFyIGdldENhbmNlbEJ1dHRvbiA9IGZ1bmN0aW9uIGdldENhbmNlbEJ1dHRvbigpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmFjdGlvbnMsIFwiIC5cIikuY29uY2F0KHN3YWxDbGFzc2VzLmNhbmNlbCkpO1xuICB9O1xuICB2YXIgZ2V0QWN0aW9ucyA9IGZ1bmN0aW9uIGdldEFjdGlvbnMoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmFjdGlvbnMpO1xuICB9O1xuICB2YXIgZ2V0SGVhZGVyID0gZnVuY3Rpb24gZ2V0SGVhZGVyKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5oZWFkZXIpO1xuICB9O1xuICB2YXIgZ2V0Rm9vdGVyID0gZnVuY3Rpb24gZ2V0Rm9vdGVyKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5mb290ZXIpO1xuICB9O1xuICB2YXIgZ2V0VGltZXJQcm9ncmVzc0JhciA9IGZ1bmN0aW9uIGdldFRpbWVyUHJvZ3Jlc3NCYXIoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWyd0aW1lci1wcm9ncmVzcy1iYXInXSk7XG4gIH07XG4gIHZhciBnZXRDbG9zZUJ1dHRvbiA9IGZ1bmN0aW9uIGdldENsb3NlQnV0dG9uKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jbG9zZSk7XG4gIH07IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qa3VwL2ZvY3VzYWJsZS9ibG9iL21hc3Rlci9pbmRleC5qc1xuXG4gIHZhciBmb2N1c2FibGUgPSBcIlxcbiAgYVtocmVmXSxcXG4gIGFyZWFbaHJlZl0sXFxuICBpbnB1dDpub3QoW2Rpc2FibGVkXSksXFxuICBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLFxcbiAgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLFxcbiAgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSxcXG4gIGlmcmFtZSxcXG4gIG9iamVjdCxcXG4gIGVtYmVkLFxcbiAgW3RhYmluZGV4PVxcXCIwXFxcIl0sXFxuICBbY29udGVudGVkaXRhYmxlXSxcXG4gIGF1ZGlvW2NvbnRyb2xzXSxcXG4gIHZpZGVvW2NvbnRyb2xzXSxcXG4gIHN1bW1hcnlcXG5cIjtcbiAgdmFyIGdldEZvY3VzYWJsZUVsZW1lbnRzID0gZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKSB7XG4gICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzV2l0aFRhYmluZGV4ID0gdG9BcnJheShnZXRQb3B1cCgpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKTpub3QoW3RhYmluZGV4PVwiMFwiXSknKSkgLy8gc29ydCBhY2NvcmRpbmcgdG8gdGFiaW5kZXhcbiAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgYSA9IHBhcnNlSW50KGEuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKTtcbiAgICAgIGIgPSBwYXJzZUludChiLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSk7XG5cbiAgICAgIGlmIChhID4gYikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgICB2YXIgb3RoZXJGb2N1c2FibGVFbGVtZW50cyA9IHRvQXJyYXkoZ2V0UG9wdXAoKS5xdWVyeVNlbGVjdG9yQWxsKGZvY3VzYWJsZSkpLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgIT09ICctMSc7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVuaXF1ZUFycmF5KGZvY3VzYWJsZUVsZW1lbnRzV2l0aFRhYmluZGV4LmNvbmNhdChvdGhlckZvY3VzYWJsZUVsZW1lbnRzKSkuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIGlzVmlzaWJsZShlbCk7XG4gICAgfSk7XG4gIH07XG4gIHZhciBpc01vZGFsID0gZnVuY3Rpb24gaXNNb2RhbCgpIHtcbiAgICByZXR1cm4gIWlzVG9hc3QoKSAmJiAhZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10pO1xuICB9O1xuICB2YXIgaXNUb2FzdCA9IGZ1bmN0aW9uIGlzVG9hc3QoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcbiAgfTtcbiAgdmFyIGlzTG9hZGluZyA9IGZ1bmN0aW9uIGlzTG9hZGluZygpIHtcbiAgICByZXR1cm4gZ2V0UG9wdXAoKS5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICB9O1xuXG4gIHZhciBzdGF0ZXMgPSB7XG4gICAgcHJldmlvdXNCb2R5UGFkZGluZzogbnVsbFxuICB9O1xuICB2YXIgc2V0SW5uZXJIdG1sID0gZnVuY3Rpb24gc2V0SW5uZXJIdG1sKGVsZW0sIGh0bWwpIHtcbiAgICAvLyAjMTkyNlxuICAgIGVsZW0udGV4dENvbnRlbnQgPSAnJztcblxuICAgIGlmIChodG1sKSB7XG4gICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgdmFyIHBhcnNlZCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG4gICAgICB0b0FycmF5KHBhcnNlZC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuY2hpbGROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICB9KTtcbiAgICAgIHRvQXJyYXkocGFyc2VkLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jaGlsZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgdmFyIGhhc0NsYXNzID0gZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NMaXN0ID0gY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc0xpc3RbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICB2YXIgcmVtb3ZlQ3VzdG9tQ2xhc3NlcyA9IGZ1bmN0aW9uIHJlbW92ZUN1c3RvbUNsYXNzZXMoZWxlbSwgcGFyYW1zKSB7XG4gICAgdG9BcnJheShlbGVtLmNsYXNzTGlzdCkuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoIShvYmplY3RWYWx1ZXMoc3dhbENsYXNzZXMpLmluZGV4T2YoY2xhc3NOYW1lKSAhPT0gLTEpICYmICEob2JqZWN0VmFsdWVzKGljb25UeXBlcykuaW5kZXhPZihjbGFzc05hbWUpICE9PSAtMSkgJiYgIShvYmplY3RWYWx1ZXMocGFyYW1zLnNob3dDbGFzcykuaW5kZXhPZihjbGFzc05hbWUpICE9PSAtMSkpIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGFwcGx5Q3VzdG9tQ2xhc3MgPSBmdW5jdGlvbiBhcHBseUN1c3RvbUNsYXNzKGVsZW0sIHBhcmFtcywgY2xhc3NOYW1lKSB7XG4gICAgcmVtb3ZlQ3VzdG9tQ2xhc3NlcyhlbGVtLCBwYXJhbXMpO1xuXG4gICAgaWYgKHBhcmFtcy5jdXN0b21DbGFzcyAmJiBwYXJhbXMuY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXSkge1xuICAgICAgaWYgKHR5cGVvZiBwYXJhbXMuY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXSAhPT0gJ3N0cmluZycgJiYgIXBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdLmZvckVhY2gpIHtcbiAgICAgICAgcmV0dXJuIHdhcm4oXCJJbnZhbGlkIHR5cGUgb2YgY3VzdG9tQ2xhc3MuXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIhIEV4cGVjdGVkIHN0cmluZyBvciBpdGVyYWJsZSBvYmplY3QsIGdvdCBcXFwiXCIpLmNvbmNhdChfdHlwZW9mKHBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdKSwgXCJcXFwiXCIpKTtcbiAgICAgIH1cblxuICAgICAgYWRkQ2xhc3MoZWxlbSwgcGFyYW1zLmN1c3RvbUNsYXNzW2NsYXNzTmFtZV0pO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gZ2V0SW5wdXQoY29udGVudCwgaW5wdXRUeXBlKSB7XG4gICAgaWYgKCFpbnB1dFR5cGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN3aXRjaCAoaW5wdXRUeXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIHJldHVybiBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXNbaW5wdXRUeXBlXSk7XG5cbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiIGlucHV0XCIpKTtcblxuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICByZXR1cm4gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYWRpbywgXCIgaW5wdXQ6Y2hlY2tlZFwiKSkgfHwgY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYWRpbywgXCIgaW5wdXQ6Zmlyc3QtY2hpbGRcIikpO1xuXG4gICAgICBjYXNlICdyYW5nZSc6XG4gICAgICAgIHJldHVybiBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBpbnB1dFwiKSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICAgIH1cbiAgfVxuICB2YXIgZm9jdXNJbnB1dCA9IGZ1bmN0aW9uIGZvY3VzSW5wdXQoaW5wdXQpIHtcbiAgICBpbnB1dC5mb2N1cygpOyAvLyBwbGFjZSBjdXJzb3IgYXQgZW5kIG9mIHRleHQgaW4gdGV4dCBpbnB1dFxuXG4gICAgaWYgKGlucHV0LnR5cGUgIT09ICdmaWxlJykge1xuICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjM0NTkxNVxuICAgICAgdmFyIHZhbCA9IGlucHV0LnZhbHVlO1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGlucHV0LnZhbHVlID0gdmFsO1xuICAgIH1cbiAgfTtcbiAgdmFyIHRvZ2dsZUNsYXNzID0gZnVuY3Rpb24gdG9nZ2xlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIGNvbmRpdGlvbikge1xuICAgIGlmICghdGFyZ2V0IHx8ICFjbGFzc0xpc3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNsYXNzTGlzdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNsYXNzTGlzdCA9IGNsYXNzTGlzdC5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtcbiAgICB9XG5cbiAgICBjbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICBpZiAodGFyZ2V0LmZvckVhY2gpIHtcbiAgICAgICAgdGFyZ2V0LmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICBjb25kaXRpb24gPyBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSA6IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmRpdGlvbiA/IHRhcmdldC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICB2YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbiBhZGRDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCkge1xuICAgIHRvZ2dsZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0LCB0cnVlKTtcbiAgfTtcbiAgdmFyIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QpIHtcbiAgICB0b2dnbGVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgZmFsc2UpO1xuICB9O1xuICB2YXIgZ2V0Q2hpbGRCeUNsYXNzID0gZnVuY3Rpb24gZ2V0Q2hpbGRCeUNsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaGFzQ2xhc3MoZWxlbS5jaGlsZE5vZGVzW2ldLCBjbGFzc05hbWUpKSB7XG4gICAgICAgIHJldHVybiBlbGVtLmNoaWxkTm9kZXNbaV07XG4gICAgICB9XG4gICAgfVxuICB9O1xuICB2YXIgYXBwbHlOdW1lcmljYWxTdHlsZSA9IGZ1bmN0aW9uIGFwcGx5TnVtZXJpY2FsU3R5bGUoZWxlbSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBcIlwiLmNvbmNhdChwYXJzZUludCh2YWx1ZSkpKSB7XG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgfHwgcGFyc2VJbnQodmFsdWUpID09PSAwKSB7XG4gICAgICBlbGVtLnN0eWxlW3Byb3BlcnR5XSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyBcIlwiLmNvbmNhdCh2YWx1ZSwgXCJweFwiKSA6IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3BlcnR5KTtcbiAgICB9XG4gIH07XG4gIHZhciBzaG93ID0gZnVuY3Rpb24gc2hvdyhlbGVtKSB7XG4gICAgdmFyIGRpc3BsYXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdmbGV4JztcbiAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICB9O1xuICB2YXIgaGlkZSA9IGZ1bmN0aW9uIGhpZGUoZWxlbSkge1xuICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcbiAgdmFyIHNldFN0eWxlID0gZnVuY3Rpb24gc2V0U3R5bGUocGFyZW50LCBzZWxlY3RvciwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgdmFyIGVsID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5zdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICB9XG4gIH07XG4gIHZhciB0b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoZWxlbSwgY29uZGl0aW9uLCBkaXNwbGF5KSB7XG4gICAgY29uZGl0aW9uID8gc2hvdyhlbGVtLCBkaXNwbGF5KSA6IGhpZGUoZWxlbSk7XG4gIH07IC8vIGJvcnJvd2VkIGZyb20ganF1ZXJ5ICQoZWxlbSkuaXMoJzp2aXNpYmxlJykgaW1wbGVtZW50YXRpb25cblxuICB2YXIgaXNWaXNpYmxlID0gZnVuY3Rpb24gaXNWaXNpYmxlKGVsZW0pIHtcbiAgICByZXR1cm4gISEoZWxlbSAmJiAoZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSk7XG4gIH07XG4gIHZhciBhbGxCdXR0b25zQXJlSGlkZGVuID0gZnVuY3Rpb24gYWxsQnV0dG9uc0FyZUhpZGRlbigpIHtcbiAgICByZXR1cm4gIWlzVmlzaWJsZShnZXRDb25maXJtQnV0dG9uKCkpICYmICFpc1Zpc2libGUoZ2V0RGVueUJ1dHRvbigpKSAmJiAhaXNWaXNpYmxlKGdldENhbmNlbEJ1dHRvbigpKTtcbiAgfTtcbiAgdmFyIGlzU2Nyb2xsYWJsZSA9IGZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbGVtKSB7XG4gICAgcmV0dXJuICEhKGVsZW0uc2Nyb2xsSGVpZ2h0ID4gZWxlbS5jbGllbnRIZWlnaHQpO1xuICB9OyAvLyBib3Jyb3dlZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NjM1MjExOVxuXG4gIHZhciBoYXNDc3NBbmltYXRpb24gPSBmdW5jdGlvbiBoYXNDc3NBbmltYXRpb24oZWxlbSkge1xuICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICAgIHZhciBhbmltRHVyYXRpb24gPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2FuaW1hdGlvbi1kdXJhdGlvbicpIHx8ICcwJyk7XG4gICAgdmFyIHRyYW5zRHVyYXRpb24gPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zaXRpb24tZHVyYXRpb24nKSB8fCAnMCcpO1xuICAgIHJldHVybiBhbmltRHVyYXRpb24gPiAwIHx8IHRyYW5zRHVyYXRpb24gPiAwO1xuICB9O1xuICB2YXIgY29udGFpbnMgPSBmdW5jdGlvbiBjb250YWlucyhoYXlzdGFjaywgbmVlZGxlKSB7XG4gICAgaWYgKHR5cGVvZiBoYXlzdGFjay5jb250YWlucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGhheXN0YWNrLmNvbnRhaW5zKG5lZWRsZSk7XG4gICAgfVxuICB9O1xuICB2YXIgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIgPSBmdW5jdGlvbiBhbmltYXRlVGltZXJQcm9ncmVzc0Jhcih0aW1lcikge1xuICAgIHZhciByZXNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXIgPSBnZXRUaW1lclByb2dyZXNzQmFyKCk7XG5cbiAgICBpZiAoaXNWaXNpYmxlKHRpbWVyUHJvZ3Jlc3NCYXIpKSB7XG4gICAgICBpZiAocmVzZXQpIHtcbiAgICAgICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgICAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS50cmFuc2l0aW9uID0gXCJ3aWR0aCBcIi5jb25jYXQodGltZXIgLyAxMDAwLCBcInMgbGluZWFyXCIpO1xuICAgICAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gJzAlJztcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH07XG4gIHZhciBzdG9wVGltZXJQcm9ncmVzc0JhciA9IGZ1bmN0aW9uIHN0b3BUaW1lclByb2dyZXNzQmFyKCkge1xuICAgIHZhciB0aW1lclByb2dyZXNzQmFyID0gZ2V0VGltZXJQcm9ncmVzc0JhcigpO1xuICAgIHZhciB0aW1lclByb2dyZXNzQmFyV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aW1lclByb2dyZXNzQmFyKS53aWR0aCk7XG4gICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbicpO1xuICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXJGdWxsV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aW1lclByb2dyZXNzQmFyKS53aWR0aCk7XG4gICAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXJQZXJjZW50ID0gcGFyc2VJbnQodGltZXJQcm9ncmVzc0JhcldpZHRoIC8gdGltZXJQcm9ncmVzc0JhckZ1bGxXaWR0aCAqIDEwMCk7XG4gICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbicpO1xuICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBcIlwiLmNvbmNhdCh0aW1lclByb2dyZXNzQmFyUGVyY2VudCwgXCIlXCIpO1xuICB9O1xuXG4gIC8vIERldGVjdCBOb2RlIGVudlxuICB2YXIgaXNOb2RlRW52ID0gZnVuY3Rpb24gaXNOb2RlRW52KCkge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnO1xuICB9O1xuXG4gIHZhciBzd2VldEhUTUwgPSBcIlxcbiA8ZGl2IGFyaWEtbGFiZWxsZWRieT1cXFwiXCIuY29uY2F0KHN3YWxDbGFzc2VzLnRpdGxlLCBcIlxcXCIgYXJpYS1kZXNjcmliZWRieT1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb250ZW50LCBcIlxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucG9wdXAsIFwiXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaGVhZGVyLCBcIlxcXCI+XFxuICAgICA8dWwgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ3Byb2dyZXNzLXN0ZXBzJ10sIFwiXFxcIj48L3VsPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIlxcXCI+PC9kaXY+XFxuICAgICA8aW1nIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmltYWdlLCBcIlxcXCIgLz5cXG4gICAgIDxoMiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy50aXRsZSwgXCJcXFwiIGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnRpdGxlLCBcIlxcXCI+PC9oMj5cXG4gICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jbG9zZSwgXCJcXFwiPjwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29udGVudCwgXCJcXFwiPlxcbiAgICAgPGRpdiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb250ZW50LCBcIlxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ2h0bWwtY29udGFpbmVyJ10sIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxpbnB1dCBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pbnB1dCwgXCJcXFwiIC8+XFxuICAgICA8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuZmlsZSwgXCJcXFwiIC8+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIlxcXCI+XFxuICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYW5nZVxcXCIgLz5cXG4gICAgICAgPG91dHB1dD48L291dHB1dD5cXG4gICAgIDwvZGl2PlxcbiAgICAgPHNlbGVjdCBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5zZWxlY3QsIFwiXFxcIj48L3NlbGVjdD5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucmFkaW8sIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxsYWJlbCBmb3I9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCJcXFwiPlxcbiAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIC8+XFxuICAgICAgIDxzcGFuIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmxhYmVsLCBcIlxcXCI+PC9zcGFuPlxcbiAgICAgPC9sYWJlbD5cXG4gICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy50ZXh0YXJlYSwgXCJcXFwiPjwvdGV4dGFyZWE+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSwgXCJcXFwiIGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSwgXCJcXFwiPjwvZGl2PlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuYWN0aW9ucywgXCJcXFwiPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5sb2FkZXIsIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb25maXJtLCBcIlxcXCI+PC9idXR0b24+XFxuICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuZGVueSwgXCJcXFwiPjwvYnV0dG9uPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNhbmNlbCwgXCJcXFwiPjwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuZm9vdGVyLCBcIlxcXCI+PC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sndGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciddLCBcIlxcXCI+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWyd0aW1lci1wcm9ncmVzcy1iYXInXSwgXCJcXFwiPjwvZGl2PlxcbiAgIDwvZGl2PlxcbiA8L2Rpdj5cXG5cIikucmVwbGFjZSgvKF58XFxuKVxccyovZywgJycpO1xuXG4gIHZhciByZXNldE9sZENvbnRhaW5lciA9IGZ1bmN0aW9uIHJlc2V0T2xkQ29udGFpbmVyKCkge1xuICAgIHZhciBvbGRDb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcblxuICAgIGlmICghb2xkQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb2xkQ29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob2xkQ29udGFpbmVyKTtcbiAgICByZW1vdmVDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgW3N3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddLCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSwgc3dhbENsYXNzZXNbJ2hhcy1jb2x1bW4nXV0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHZhciBvbGRJbnB1dFZhbDsgLy8gSUUxMSB3b3JrYXJvdW5kLCBzZWUgIzExMDkgZm9yIGRldGFpbHNcblxuICB2YXIgcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSA9IGZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoZSkge1xuICAgIGlmIChTd2FsLmlzVmlzaWJsZSgpICYmIG9sZElucHV0VmFsICE9PSBlLnRhcmdldC52YWx1ZSkge1xuICAgICAgU3dhbC5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG4gICAgfVxuXG4gICAgb2xkSW5wdXRWYWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgfTtcblxuICB2YXIgYWRkSW5wdXRDaGFuZ2VMaXN0ZW5lcnMgPSBmdW5jdGlvbiBhZGRJbnB1dENoYW5nZUxpc3RlbmVycygpIHtcbiAgICB2YXIgY29udGVudCA9IGdldENvbnRlbnQoKTtcbiAgICB2YXIgaW5wdXQgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICAgIHZhciBmaWxlID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLmZpbGUpO1xuICAgIHZhciByYW5nZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFuZ2UsIFwiIGlucHV0XCIpKTtcbiAgICB2YXIgcmFuZ2VPdXRwdXQgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBvdXRwdXRcIikpO1xuICAgIHZhciBzZWxlY3QgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuc2VsZWN0KTtcbiAgICB2YXIgY2hlY2tib3ggPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmNoZWNrYm94LCBcIiBpbnB1dFwiKSk7XG4gICAgdmFyIHRleHRhcmVhID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLnRleHRhcmVhKTtcbiAgICBpbnB1dC5vbmlucHV0ID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgICBmaWxlLm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgICBzZWxlY3Qub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuICAgIGNoZWNrYm94Lm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgICB0ZXh0YXJlYS5vbmlucHV0ID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcblxuICAgIHJhbmdlLm9uaW5wdXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgcmVzZXRWYWxpZGF0aW9uTWVzc2FnZShlKTtcbiAgICAgIHJhbmdlT3V0cHV0LnZhbHVlID0gcmFuZ2UudmFsdWU7XG4gICAgfTtcblxuICAgIHJhbmdlLm9uY2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoZSk7XG4gICAgICByYW5nZS5uZXh0U2libGluZy52YWx1ZSA9IHJhbmdlLnZhbHVlO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gIH07XG5cbiAgdmFyIHNldHVwQWNjZXNzaWJpbGl0eSA9IGZ1bmN0aW9uIHNldHVwQWNjZXNzaWJpbGl0eShwYXJhbXMpIHtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgncm9sZScsIHBhcmFtcy50b2FzdCA/ICdhbGVydCcgOiAnZGlhbG9nJyk7XG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCBwYXJhbXMudG9hc3QgPyAncG9saXRlJyA6ICdhc3NlcnRpdmUnKTtcblxuICAgIGlmICghcGFyYW1zLnRvYXN0KSB7XG4gICAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCAndHJ1ZScpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgc2V0dXBSVEwgPSBmdW5jdGlvbiBzZXR1cFJUTCh0YXJnZXRFbGVtZW50KSB7XG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldEVsZW1lbnQpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgIGFkZENsYXNzKGdldENvbnRhaW5lcigpLCBzd2FsQ2xhc3Nlcy5ydGwpO1xuICAgIH1cbiAgfTtcbiAgLypcbiAgICogQWRkIG1vZGFsICsgYmFja2Ryb3AgdG8gRE9NXG4gICAqL1xuXG5cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiBpbml0KHBhcmFtcykge1xuICAgIC8vIENsZWFuIHVwIHRoZSBvbGQgcG9wdXAgY29udGFpbmVyIGlmIGl0IGV4aXN0c1xuICAgIHZhciBvbGRDb250YWluZXJFeGlzdGVkID0gcmVzZXRPbGRDb250YWluZXIoKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblxuICAgIGlmIChpc05vZGVFbnYoKSkge1xuICAgICAgZXJyb3IoJ1N3ZWV0QWxlcnQyIHJlcXVpcmVzIGRvY3VtZW50IHRvIGluaXRpYWxpemUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmNvbnRhaW5lcjtcblxuICAgIGlmIChvbGRDb250YWluZXJFeGlzdGVkKSB7XG4gICAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzWyduby10cmFuc2l0aW9uJ10pO1xuICAgIH1cblxuICAgIHNldElubmVySHRtbChjb250YWluZXIsIHN3ZWV0SFRNTCk7XG4gICAgdmFyIHRhcmdldEVsZW1lbnQgPSBnZXRUYXJnZXQocGFyYW1zLnRhcmdldCk7XG4gICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHNldHVwQWNjZXNzaWJpbGl0eShwYXJhbXMpO1xuICAgIHNldHVwUlRMKHRhcmdldEVsZW1lbnQpO1xuICAgIGFkZElucHV0Q2hhbmdlTGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgdmFyIHBhcnNlSHRtbFRvQ29udGFpbmVyID0gZnVuY3Rpb24gcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW0sIHRhcmdldCkge1xuICAgIC8vIERPTSBlbGVtZW50XG4gICAgaWYgKHBhcmFtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChwYXJhbSk7IC8vIE9iamVjdFxuICAgIH0gZWxzZSBpZiAoX3R5cGVvZihwYXJhbSkgPT09ICdvYmplY3QnKSB7XG4gICAgICBoYW5kbGVPYmplY3QocGFyYW0sIHRhcmdldCk7IC8vIFBsYWluIHN0cmluZ1xuICAgIH0gZWxzZSBpZiAocGFyYW0pIHtcbiAgICAgIHNldElubmVySHRtbCh0YXJnZXQsIHBhcmFtKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZU9iamVjdCA9IGZ1bmN0aW9uIGhhbmRsZU9iamVjdChwYXJhbSwgdGFyZ2V0KSB7XG4gICAgLy8gSlF1ZXJ5IGVsZW1lbnQocylcbiAgICBpZiAocGFyYW0uanF1ZXJ5KSB7XG4gICAgICBoYW5kbGVKcXVlcnlFbGVtKHRhcmdldCwgcGFyYW0pOyAvLyBGb3Igb3RoZXIgb2JqZWN0cyB1c2UgdGhlaXIgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElubmVySHRtbCh0YXJnZXQsIHBhcmFtLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlSnF1ZXJ5RWxlbSA9IGZ1bmN0aW9uIGhhbmRsZUpxdWVyeUVsZW0odGFyZ2V0LCBlbGVtKSB7XG4gICAgdGFyZ2V0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBpZiAoMCBpbiBlbGVtKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgKGkgaW4gZWxlbSk7IGkrKykge1xuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbVtpXS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgYW5pbWF0aW9uRW5kRXZlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUHJldmVudCBydW4gaW4gTm9kZSBlbnZcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChpc05vZGVFbnYoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgdHJhbnNFbmRFdmVudE5hbWVzID0ge1xuICAgICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAgIE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQnLFxuICAgICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJ1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBpIGluIHRyYW5zRW5kRXZlbnROYW1lcykge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0cmFuc0VuZEV2ZW50TmFtZXMsIGkpICYmIHR5cGVvZiB0ZXN0RWwuc3R5bGVbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB0cmFuc0VuZEV2ZW50TmFtZXNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KCk7XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL2pzL3NyYy9tb2RhbC5qc1xuXG4gIHZhciBtZWFzdXJlU2Nyb2xsYmFyID0gZnVuY3Rpb24gbWVhc3VyZVNjcm9sbGJhcigpIHtcbiAgICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzWydzY3JvbGxiYXItbWVhc3VyZSddO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICB2YXIgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbiAgfTtcblxuICB2YXIgcmVuZGVyQWN0aW9ucyA9IGZ1bmN0aW9uIHJlbmRlckFjdGlvbnMoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBhY3Rpb25zID0gZ2V0QWN0aW9ucygpO1xuICAgIHZhciBsb2FkZXIgPSBnZXRMb2FkZXIoKTtcbiAgICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgICB2YXIgZGVueUJ1dHRvbiA9IGdldERlbnlCdXR0b24oKTtcbiAgICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7IC8vIEFjdGlvbnMgKGJ1dHRvbnMpIHdyYXBwZXJcblxuICAgIGlmICghcGFyYW1zLnNob3dDb25maXJtQnV0dG9uICYmICFwYXJhbXMuc2hvd0RlbnlCdXR0b24gJiYgIXBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uKSB7XG4gICAgICBoaWRlKGFjdGlvbnMpO1xuICAgIH0gLy8gQ3VzdG9tIGNsYXNzXG5cblxuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoYWN0aW9ucywgcGFyYW1zLCAnYWN0aW9ucycpOyAvLyBSZW5kZXIgYnV0dG9uc1xuXG4gICAgcmVuZGVyQnV0dG9uKGNvbmZpcm1CdXR0b24sICdjb25maXJtJywgcGFyYW1zKTtcbiAgICByZW5kZXJCdXR0b24oZGVueUJ1dHRvbiwgJ2RlbnknLCBwYXJhbXMpO1xuICAgIHJlbmRlckJ1dHRvbihjYW5jZWxCdXR0b24sICdjYW5jZWwnLCBwYXJhbXMpO1xuICAgIGhhbmRsZUJ1dHRvbnNTdHlsaW5nKGNvbmZpcm1CdXR0b24sIGRlbnlCdXR0b24sIGNhbmNlbEJ1dHRvbiwgcGFyYW1zKTtcblxuICAgIGlmIChwYXJhbXMucmV2ZXJzZUJ1dHRvbnMpIHtcbiAgICAgIGFjdGlvbnMuaW5zZXJ0QmVmb3JlKGNhbmNlbEJ1dHRvbiwgbG9hZGVyKTtcbiAgICAgIGFjdGlvbnMuaW5zZXJ0QmVmb3JlKGRlbnlCdXR0b24sIGxvYWRlcik7XG4gICAgICBhY3Rpb25zLmluc2VydEJlZm9yZShjb25maXJtQnV0dG9uLCBsb2FkZXIpO1xuICAgIH0gLy8gTG9hZGVyXG5cblxuICAgIHNldElubmVySHRtbChsb2FkZXIsIHBhcmFtcy5sb2FkZXJIdG1sKTtcbiAgICBhcHBseUN1c3RvbUNsYXNzKGxvYWRlciwgcGFyYW1zLCAnbG9hZGVyJyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlQnV0dG9uc1N0eWxpbmcoY29uZmlybUJ1dHRvbiwgZGVueUJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBwYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgICAgcmV0dXJuIHJlbW92ZUNsYXNzKFtjb25maXJtQnV0dG9uLCBkZW55QnV0dG9uLCBjYW5jZWxCdXR0b25dLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpO1xuICAgIH1cblxuICAgIGFkZENsYXNzKFtjb25maXJtQnV0dG9uLCBkZW55QnV0dG9uLCBjYW5jZWxCdXR0b25dLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpOyAvLyBCdXR0b25zIGJhY2tncm91bmQgY29sb3JzXG5cbiAgICBpZiAocGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcikge1xuICAgICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuZGVueUJ1dHRvbkNvbG9yKSB7XG4gICAgICBkZW55QnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5kZW55QnV0dG9uQ29sb3I7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvcikge1xuICAgICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvcjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJCdXR0b24oYnV0dG9uLCBidXR0b25UeXBlLCBwYXJhbXMpIHtcbiAgICB0b2dnbGUoYnV0dG9uLCBwYXJhbXNbXCJzaG93XCIuY29uY2F0KGNhcGl0YWxpemVGaXJzdExldHRlcihidXR0b25UeXBlKSwgXCJCdXR0b25cIildLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgc2V0SW5uZXJIdG1sKGJ1dHRvbiwgcGFyYW1zW1wiXCIuY29uY2F0KGJ1dHRvblR5cGUsIFwiQnV0dG9uVGV4dFwiKV0pOyAvLyBTZXQgY2FwdGlvbiB0ZXh0XG5cbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zW1wiXCIuY29uY2F0KGJ1dHRvblR5cGUsIFwiQnV0dG9uQXJpYUxhYmVsXCIpXSk7IC8vIEFSSUEgbGFiZWxcbiAgICAvLyBBZGQgYnV0dG9ucyBjdXN0b20gY2xhc3Nlc1xuXG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzW2J1dHRvblR5cGVdO1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoYnV0dG9uLCBwYXJhbXMsIFwiXCIuY29uY2F0KGJ1dHRvblR5cGUsIFwiQnV0dG9uXCIpKTtcbiAgICBhZGRDbGFzcyhidXR0b24sIHBhcmFtc1tcIlwiLmNvbmNhdChidXR0b25UeXBlLCBcIkJ1dHRvbkNsYXNzXCIpXSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVCYWNrZHJvcFBhcmFtKGNvbnRhaW5lciwgYmFja2Ryb3ApIHtcbiAgICBpZiAodHlwZW9mIGJhY2tkcm9wID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQgPSBiYWNrZHJvcDtcbiAgICB9IGVsc2UgaWYgKCFiYWNrZHJvcCkge1xuICAgICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQb3NpdGlvblBhcmFtKGNvbnRhaW5lciwgcG9zaXRpb24pIHtcbiAgICBpZiAocG9zaXRpb24gaW4gc3dhbENsYXNzZXMpIHtcbiAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbcG9zaXRpb25dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2FybignVGhlIFwicG9zaXRpb25cIiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkLCBkZWZhdWx0aW5nIHRvIFwiY2VudGVyXCInKTtcbiAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXMuY2VudGVyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVHcm93UGFyYW0oY29udGFpbmVyLCBncm93KSB7XG4gICAgaWYgKGdyb3cgJiYgdHlwZW9mIGdyb3cgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgZ3Jvd0NsYXNzID0gXCJncm93LVwiLmNvbmNhdChncm93KTtcblxuICAgICAgaWYgKGdyb3dDbGFzcyBpbiBzd2FsQ2xhc3Nlcykge1xuICAgICAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzW2dyb3dDbGFzc10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciByZW5kZXJDb250YWluZXIgPSBmdW5jdGlvbiByZW5kZXJDb250YWluZXIoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcblxuICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFuZGxlQmFja2Ryb3BQYXJhbShjb250YWluZXIsIHBhcmFtcy5iYWNrZHJvcCk7XG5cbiAgICBpZiAoIXBhcmFtcy5iYWNrZHJvcCAmJiBwYXJhbXMuYWxsb3dPdXRzaWRlQ2xpY2spIHtcbiAgICAgIHdhcm4oJ1wiYWxsb3dPdXRzaWRlQ2xpY2tcIiBwYXJhbWV0ZXIgcmVxdWlyZXMgYGJhY2tkcm9wYCBwYXJhbWV0ZXIgdG8gYmUgc2V0IHRvIGB0cnVlYCcpO1xuICAgIH1cblxuICAgIGhhbmRsZVBvc2l0aW9uUGFyYW0oY29udGFpbmVyLCBwYXJhbXMucG9zaXRpb24pO1xuICAgIGhhbmRsZUdyb3dQYXJhbShjb250YWluZXIsIHBhcmFtcy5ncm93KTsgLy8gQ3VzdG9tIGNsYXNzXG5cbiAgICBhcHBseUN1c3RvbUNsYXNzKGNvbnRhaW5lciwgcGFyYW1zLCAnY29udGFpbmVyJyk7IC8vIFNldCBxdWV1ZSBzdGVwIGF0dHJpYnV0ZSBmb3IgZ2V0UXVldWVTdGVwKCkgbWV0aG9kXG5cbiAgICB2YXIgcXVldWVTdGVwID0gZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcpO1xuXG4gICAgaWYgKHF1ZXVlU3RlcCkge1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1xdWV1ZS1zdGVwJywgcXVldWVTdGVwKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgbW9kdWxlIGNvbnRhaW50cyBgV2Vha01hcGBzIGZvciBlYWNoIGVmZmVjdGl2ZWx5LVwicHJpdmF0ZSAgcHJvcGVydHlcIiB0aGF0IGEgYFN3YWxgIGhhcy5cbiAgICogRm9yIGV4YW1wbGUsIHRvIHNldCB0aGUgcHJpdmF0ZSBwcm9wZXJ0eSBcImZvb1wiIG9mIGB0aGlzYCB0byBcImJhclwiLCB5b3UgY2FuIGBwcml2YXRlUHJvcHMuZm9vLnNldCh0aGlzLCAnYmFyJylgXG4gICAqIFRoaXMgaXMgdGhlIGFwcHJvYWNoIHRoYXQgQmFiZWwgd2lsbCBwcm9iYWJseSB0YWtlIHRvIGltcGxlbWVudCBwcml2YXRlIG1ldGhvZHMvZmllbGRzXG4gICAqICAgaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJpdmF0ZS1tZXRob2RzXG4gICAqICAgaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL3B1bGwvNzU1NVxuICAgKiBPbmNlIHdlIGhhdmUgdGhlIGNoYW5nZXMgZnJvbSB0aGF0IFBSIGluIEJhYmVsLCBhbmQgb3VyIGNvcmUgY2xhc3MgZml0cyByZWFzb25hYmxlIGluICpvbmUgbW9kdWxlKlxuICAgKiAgIHRoZW4gd2UgY2FuIHVzZSB0aGF0IGxhbmd1YWdlIGZlYXR1cmUuXG4gICAqL1xuICB2YXIgcHJpdmF0ZVByb3BzID0ge1xuICAgIHByb21pc2U6IG5ldyBXZWFrTWFwKCksXG4gICAgaW5uZXJQYXJhbXM6IG5ldyBXZWFrTWFwKCksXG4gICAgZG9tQ2FjaGU6IG5ldyBXZWFrTWFwKClcbiAgfTtcblxuICB2YXIgaW5wdXRUeXBlcyA9IFsnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAndGV4dGFyZWEnXTtcbiAgdmFyIHJlbmRlcklucHV0ID0gZnVuY3Rpb24gcmVuZGVySW5wdXQoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuICAgIHZhciByZXJlbmRlciA9ICFpbm5lclBhcmFtcyB8fCBwYXJhbXMuaW5wdXQgIT09IGlubmVyUGFyYW1zLmlucHV0O1xuICAgIGlucHV0VHlwZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRUeXBlKSB7XG4gICAgICB2YXIgaW5wdXRDbGFzcyA9IHN3YWxDbGFzc2VzW2lucHV0VHlwZV07XG4gICAgICB2YXIgaW5wdXRDb250YWluZXIgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgaW5wdXRDbGFzcyk7IC8vIHNldCBhdHRyaWJ1dGVzXG5cbiAgICAgIHNldEF0dHJpYnV0ZXMoaW5wdXRUeXBlLCBwYXJhbXMuaW5wdXRBdHRyaWJ1dGVzKTsgLy8gc2V0IGNsYXNzXG5cbiAgICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTmFtZSA9IGlucHV0Q2xhc3M7XG5cbiAgICAgIGlmIChyZXJlbmRlcikge1xuICAgICAgICBoaWRlKGlucHV0Q29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXJhbXMuaW5wdXQpIHtcbiAgICAgIGlmIChyZXJlbmRlcikge1xuICAgICAgICBzaG93SW5wdXQocGFyYW1zKTtcbiAgICAgIH0gLy8gc2V0IGN1c3RvbSBjbGFzc1xuXG5cbiAgICAgIHNldEN1c3RvbUNsYXNzKHBhcmFtcyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBzaG93SW5wdXQgPSBmdW5jdGlvbiBzaG93SW5wdXQocGFyYW1zKSB7XG4gICAgaWYgKCFyZW5kZXJJbnB1dFR5cGVbcGFyYW1zLmlucHV0XSkge1xuICAgICAgcmV0dXJuIGVycm9yKFwiVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0ISBFeHBlY3RlZCBcXFwidGV4dFxcXCIsIFxcXCJlbWFpbFxcXCIsIFxcXCJwYXNzd29yZFxcXCIsIFxcXCJudW1iZXJcXFwiLCBcXFwidGVsXFxcIiwgXFxcInNlbGVjdFxcXCIsIFxcXCJyYWRpb1xcXCIsIFxcXCJjaGVja2JveFxcXCIsIFxcXCJ0ZXh0YXJlYVxcXCIsIFxcXCJmaWxlXFxcIiBvciBcXFwidXJsXFxcIiwgZ290IFxcXCJcIi5jb25jYXQocGFyYW1zLmlucHV0LCBcIlxcXCJcIikpO1xuICAgIH1cblxuICAgIHZhciBpbnB1dENvbnRhaW5lciA9IGdldElucHV0Q29udGFpbmVyKHBhcmFtcy5pbnB1dCk7XG4gICAgdmFyIGlucHV0ID0gcmVuZGVySW5wdXRUeXBlW3BhcmFtcy5pbnB1dF0oaW5wdXRDb250YWluZXIsIHBhcmFtcyk7XG4gICAgc2hvdyhpbnB1dCk7IC8vIGlucHV0IGF1dG9mb2N1c1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBmb2N1c0lucHV0KGlucHV0KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcmVtb3ZlQXR0cmlidXRlcyA9IGZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZXMoaW5wdXQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBhdHRyTmFtZSA9IGlucHV0LmF0dHJpYnV0ZXNbaV0ubmFtZTtcblxuICAgICAgaWYgKCEoWyd0eXBlJywgJ3ZhbHVlJywgJ3N0eWxlJ10uaW5kZXhPZihhdHRyTmFtZSkgIT09IC0xKSkge1xuICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoaW5wdXRUeXBlLCBpbnB1dEF0dHJpYnV0ZXMpIHtcbiAgICB2YXIgaW5wdXQgPSBnZXRJbnB1dChnZXRDb250ZW50KCksIGlucHV0VHlwZSk7XG5cbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVtb3ZlQXR0cmlidXRlcyhpbnB1dCk7XG5cbiAgICBmb3IgKHZhciBhdHRyIGluIGlucHV0QXR0cmlidXRlcykge1xuICAgICAgLy8gRG8gbm90IHNldCBhIHBsYWNlaG9sZGVyIGZvciA8aW5wdXQgdHlwZT1cInJhbmdlXCI+XG4gICAgICAvLyBpdCdsbCBjcmFzaCBFZGdlLCAjMTI5OFxuICAgICAgaWYgKGlucHV0VHlwZSA9PT0gJ3JhbmdlJyAmJiBhdHRyID09PSAncGxhY2Vob2xkZXInKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYXR0ciwgaW5wdXRBdHRyaWJ1dGVzW2F0dHJdKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNldEN1c3RvbUNsYXNzID0gZnVuY3Rpb24gc2V0Q3VzdG9tQ2xhc3MocGFyYW1zKSB7XG4gICAgdmFyIGlucHV0Q29udGFpbmVyID0gZ2V0SW5wdXRDb250YWluZXIocGFyYW1zLmlucHV0KTtcblxuICAgIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MpIHtcbiAgICAgIGFkZENsYXNzKGlucHV0Q29udGFpbmVyLCBwYXJhbXMuY3VzdG9tQ2xhc3MuaW5wdXQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgc2V0SW5wdXRQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQsIHBhcmFtcykge1xuICAgIGlmICghaW5wdXQucGxhY2Vob2xkZXIgfHwgcGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpIHtcbiAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgfVxuICB9O1xuXG4gIHZhciBzZXRJbnB1dExhYmVsID0gZnVuY3Rpb24gc2V0SW5wdXRMYWJlbChpbnB1dCwgcHJlcGVuZFRvLCBwYXJhbXMpIHtcbiAgICBpZiAocGFyYW1zLmlucHV0TGFiZWwpIHtcbiAgICAgIGlucHV0LmlkID0gc3dhbENsYXNzZXMuaW5wdXQ7XG4gICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgdmFyIGxhYmVsQ2xhc3MgPSBzd2FsQ2xhc3Nlc1snaW5wdXQtbGFiZWwnXTtcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXQuaWQpO1xuICAgICAgbGFiZWwuY2xhc3NOYW1lID0gbGFiZWxDbGFzcztcbiAgICAgIGFkZENsYXNzKGxhYmVsLCBwYXJhbXMuY3VzdG9tQ2xhc3MuaW5wdXRMYWJlbCk7XG4gICAgICBsYWJlbC5pbm5lclRleHQgPSBwYXJhbXMuaW5wdXRMYWJlbDtcbiAgICAgIHByZXBlbmRUby5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgbGFiZWwpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZ2V0SW5wdXRDb250YWluZXIgPSBmdW5jdGlvbiBnZXRJbnB1dENvbnRhaW5lcihpbnB1dFR5cGUpIHtcbiAgICB2YXIgaW5wdXRDbGFzcyA9IHN3YWxDbGFzc2VzW2lucHV0VHlwZV0gPyBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVdIDogc3dhbENsYXNzZXMuaW5wdXQ7XG4gICAgcmV0dXJuIGdldENoaWxkQnlDbGFzcyhnZXRDb250ZW50KCksIGlucHV0Q2xhc3MpO1xuICB9O1xuXG4gIHZhciByZW5kZXJJbnB1dFR5cGUgPSB7fTtcblxuICByZW5kZXJJbnB1dFR5cGUudGV4dCA9IHJlbmRlcklucHV0VHlwZS5lbWFpbCA9IHJlbmRlcklucHV0VHlwZS5wYXNzd29yZCA9IHJlbmRlcklucHV0VHlwZS5udW1iZXIgPSByZW5kZXJJbnB1dFR5cGUudGVsID0gcmVuZGVySW5wdXRUeXBlLnVybCA9IGZ1bmN0aW9uIChpbnB1dCwgcGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuaW5wdXRWYWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHBhcmFtcy5pbnB1dFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgaW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKCFpc1Byb21pc2UocGFyYW1zLmlucHV0VmFsdWUpKSB7XG4gICAgICB3YXJuKFwiVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0VmFsdWUhIEV4cGVjdGVkIFxcXCJzdHJpbmdcXFwiLCBcXFwibnVtYmVyXFxcIiBvciBcXFwiUHJvbWlzZVxcXCIsIGdvdCBcXFwiXCIuY29uY2F0KF90eXBlb2YocGFyYW1zLmlucHV0VmFsdWUpLCBcIlxcXCJcIikpO1xuICAgIH1cblxuICAgIHNldElucHV0TGFiZWwoaW5wdXQsIGlucHV0LCBwYXJhbXMpO1xuICAgIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQsIHBhcmFtcyk7XG4gICAgaW5wdXQudHlwZSA9IHBhcmFtcy5pbnB1dDtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH07XG5cbiAgcmVuZGVySW5wdXRUeXBlLmZpbGUgPSBmdW5jdGlvbiAoaW5wdXQsIHBhcmFtcykge1xuICAgIHNldElucHV0TGFiZWwoaW5wdXQsIGlucHV0LCBwYXJhbXMpO1xuICAgIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQsIHBhcmFtcyk7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9O1xuXG4gIHJlbmRlcklucHV0VHlwZS5yYW5nZSA9IGZ1bmN0aW9uIChyYW5nZSwgcGFyYW1zKSB7XG4gICAgdmFyIHJhbmdlSW5wdXQgPSByYW5nZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIHZhciByYW5nZU91dHB1dCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJ291dHB1dCcpO1xuICAgIHJhbmdlSW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICByYW5nZUlucHV0LnR5cGUgPSBwYXJhbXMuaW5wdXQ7XG4gICAgcmFuZ2VPdXRwdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICBzZXRJbnB1dExhYmVsKHJhbmdlSW5wdXQsIHJhbmdlLCBwYXJhbXMpO1xuICAgIHJldHVybiByYW5nZTtcbiAgfTtcblxuICByZW5kZXJJbnB1dFR5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKHNlbGVjdCwgcGFyYW1zKSB7XG4gICAgc2VsZWN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBpZiAocGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpIHtcbiAgICAgIHZhciBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgc2V0SW5uZXJIdG1sKHBsYWNlaG9sZGVyLCBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcik7XG4gICAgICBwbGFjZWhvbGRlci52YWx1ZSA9ICcnO1xuICAgICAgcGxhY2Vob2xkZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgcGxhY2Vob2xkZXIuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcbiAgICB9XG5cbiAgICBzZXRJbnB1dExhYmVsKHNlbGVjdCwgc2VsZWN0LCBwYXJhbXMpO1xuICAgIHJldHVybiBzZWxlY3Q7XG4gIH07XG5cbiAgcmVuZGVySW5wdXRUeXBlLnJhZGlvID0gZnVuY3Rpb24gKHJhZGlvKSB7XG4gICAgcmFkaW8udGV4dENvbnRlbnQgPSAnJztcbiAgICByZXR1cm4gcmFkaW87XG4gIH07XG5cbiAgcmVuZGVySW5wdXRUeXBlLmNoZWNrYm94ID0gZnVuY3Rpb24gKGNoZWNrYm94Q29udGFpbmVyLCBwYXJhbXMpIHtcbiAgICB2YXIgY2hlY2tib3ggPSBnZXRJbnB1dChnZXRDb250ZW50KCksICdjaGVja2JveCcpO1xuICAgIGNoZWNrYm94LnZhbHVlID0gMTtcbiAgICBjaGVja2JveC5pZCA9IHN3YWxDbGFzc2VzLmNoZWNrYm94O1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBCb29sZWFuKHBhcmFtcy5pbnB1dFZhbHVlKTtcbiAgICB2YXIgbGFiZWwgPSBjaGVja2JveENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gICAgc2V0SW5uZXJIdG1sKGxhYmVsLCBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcik7XG4gICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyO1xuICB9O1xuXG4gIHJlbmRlcklucHV0VHlwZS50ZXh0YXJlYSA9IGZ1bmN0aW9uICh0ZXh0YXJlYSwgcGFyYW1zKSB7XG4gICAgdGV4dGFyZWEudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICBzZXRJbnB1dFBsYWNlaG9sZGVyKHRleHRhcmVhLCBwYXJhbXMpO1xuICAgIHNldElucHV0TGFiZWwodGV4dGFyZWEsIHRleHRhcmVhLCBwYXJhbXMpO1xuXG4gICAgdmFyIGdldFBhZGRpbmcgPSBmdW5jdGlvbiBnZXRQYWRkaW5nKGVsKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLnBhZGRpbmdMZWZ0KSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5wYWRkaW5nUmlnaHQpO1xuICAgIH07XG5cbiAgICBpZiAoJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xuICAgICAgLy8gIzE2OTlcbiAgICAgIHZhciBpbml0aWFsUG9wdXBXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGdldFBvcHVwKCkpLndpZHRoKTtcblxuICAgICAgdmFyIG91dHB1dHNpemUgPSBmdW5jdGlvbiBvdXRwdXRzaXplKCkge1xuICAgICAgICB2YXIgY29udGVudFdpZHRoID0gdGV4dGFyZWEub2Zmc2V0V2lkdGggKyBnZXRQYWRkaW5nKGdldFBvcHVwKCkpICsgZ2V0UGFkZGluZyhnZXRDb250ZW50KCkpO1xuXG4gICAgICAgIGlmIChjb250ZW50V2lkdGggPiBpbml0aWFsUG9wdXBXaWR0aCkge1xuICAgICAgICAgIGdldFBvcHVwKCkuc3R5bGUud2lkdGggPSBcIlwiLmNvbmNhdChjb250ZW50V2lkdGgsIFwicHhcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2V0UG9wdXAoKS5zdHlsZS53aWR0aCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKG91dHB1dHNpemUpLm9ic2VydmUodGV4dGFyZWEsIHtcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbJ3N0eWxlJ11cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0YXJlYTtcbiAgfTtcblxuICB2YXIgcmVuZGVyQ29udGVudCA9IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBodG1sQ29udGFpbmVyID0gZ2V0SHRtbENvbnRhaW5lcigpO1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoaHRtbENvbnRhaW5lciwgcGFyYW1zLCAnaHRtbENvbnRhaW5lcicpOyAvLyBDb250ZW50IGFzIEhUTUxcblxuICAgIGlmIChwYXJhbXMuaHRtbCkge1xuICAgICAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLmh0bWwsIGh0bWxDb250YWluZXIpO1xuICAgICAgc2hvdyhodG1sQ29udGFpbmVyLCAnYmxvY2snKTsgLy8gQ29udGVudCBhcyBwbGFpbiB0ZXh0XG4gICAgfSBlbHNlIGlmIChwYXJhbXMudGV4dCkge1xuICAgICAgaHRtbENvbnRhaW5lci50ZXh0Q29udGVudCA9IHBhcmFtcy50ZXh0O1xuICAgICAgc2hvdyhodG1sQ29udGFpbmVyLCAnYmxvY2snKTsgLy8gTm8gY29udGVudFxuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlKGh0bWxDb250YWluZXIpO1xuICAgIH1cblxuICAgIHJlbmRlcklucHV0KGluc3RhbmNlLCBwYXJhbXMpOyAvLyBDdXN0b20gY2xhc3NcblxuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoZ2V0Q29udGVudCgpLCBwYXJhbXMsICdjb250ZW50Jyk7XG4gIH07XG5cbiAgdmFyIHJlbmRlckZvb3RlciA9IGZ1bmN0aW9uIHJlbmRlckZvb3RlcihpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgdmFyIGZvb3RlciA9IGdldEZvb3RlcigpO1xuICAgIHRvZ2dsZShmb290ZXIsIHBhcmFtcy5mb290ZXIpO1xuXG4gICAgaWYgKHBhcmFtcy5mb290ZXIpIHtcbiAgICAgIHBhcnNlSHRtbFRvQ29udGFpbmVyKHBhcmFtcy5mb290ZXIsIGZvb3Rlcik7XG4gICAgfSAvLyBDdXN0b20gY2xhc3NcblxuXG4gICAgYXBwbHlDdXN0b21DbGFzcyhmb290ZXIsIHBhcmFtcywgJ2Zvb3RlcicpO1xuICB9O1xuXG4gIHZhciByZW5kZXJDbG9zZUJ1dHRvbiA9IGZ1bmN0aW9uIHJlbmRlckNsb3NlQnV0dG9uKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgY2xvc2VCdXR0b24gPSBnZXRDbG9zZUJ1dHRvbigpO1xuICAgIHNldElubmVySHRtbChjbG9zZUJ1dHRvbiwgcGFyYW1zLmNsb3NlQnV0dG9uSHRtbCk7IC8vIEN1c3RvbSBjbGFzc1xuXG4gICAgYXBwbHlDdXN0b21DbGFzcyhjbG9zZUJ1dHRvbiwgcGFyYW1zLCAnY2xvc2VCdXR0b24nKTtcbiAgICB0b2dnbGUoY2xvc2VCdXR0b24sIHBhcmFtcy5zaG93Q2xvc2VCdXR0b24pO1xuICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtcy5jbG9zZUJ1dHRvbkFyaWFMYWJlbCk7XG4gIH07XG5cbiAgdmFyIHJlbmRlckljb24gPSBmdW5jdGlvbiByZW5kZXJJY29uKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcbiAgICB2YXIgaWNvbiA9IGdldEljb24oKTsgLy8gaWYgdGhlIGdpdmVuIGljb24gYWxyZWFkeSByZW5kZXJlZCwgYXBwbHkgdGhlIHN0eWxpbmcgd2l0aG91dCByZS1yZW5kZXJpbmcgdGhlIGljb25cblxuICAgIGlmIChpbm5lclBhcmFtcyAmJiBwYXJhbXMuaWNvbiA9PT0gaW5uZXJQYXJhbXMuaWNvbikge1xuICAgICAgLy8gQ3VzdG9tIG9yIGRlZmF1bHQgY29udGVudFxuICAgICAgc2V0Q29udGVudChpY29uLCBwYXJhbXMpO1xuICAgICAgYXBwbHlTdHlsZXMoaWNvbiwgcGFyYW1zKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXBhcmFtcy5pY29uICYmICFwYXJhbXMuaWNvbkh0bWwpIHtcbiAgICAgIHJldHVybiBoaWRlKGljb24pO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuaWNvbiAmJiBPYmplY3Qua2V5cyhpY29uVHlwZXMpLmluZGV4T2YocGFyYW1zLmljb24pID09PSAtMSkge1xuICAgICAgZXJyb3IoXCJVbmtub3duIGljb24hIEV4cGVjdGVkIFxcXCJzdWNjZXNzXFxcIiwgXFxcImVycm9yXFxcIiwgXFxcIndhcm5pbmdcXFwiLCBcXFwiaW5mb1xcXCIgb3IgXFxcInF1ZXN0aW9uXFxcIiwgZ290IFxcXCJcIi5jb25jYXQocGFyYW1zLmljb24sIFwiXFxcIlwiKSk7XG4gICAgICByZXR1cm4gaGlkZShpY29uKTtcbiAgICB9XG5cbiAgICBzaG93KGljb24pOyAvLyBDdXN0b20gb3IgZGVmYXVsdCBjb250ZW50XG5cbiAgICBzZXRDb250ZW50KGljb24sIHBhcmFtcyk7XG4gICAgYXBwbHlTdHlsZXMoaWNvbiwgcGFyYW1zKTsgLy8gQW5pbWF0ZSBpY29uXG5cbiAgICBhZGRDbGFzcyhpY29uLCBwYXJhbXMuc2hvd0NsYXNzLmljb24pO1xuICB9O1xuXG4gIHZhciBhcHBseVN0eWxlcyA9IGZ1bmN0aW9uIGFwcGx5U3R5bGVzKGljb24sIHBhcmFtcykge1xuICAgIGZvciAodmFyIGljb25UeXBlIGluIGljb25UeXBlcykge1xuICAgICAgaWYgKHBhcmFtcy5pY29uICE9PSBpY29uVHlwZSkge1xuICAgICAgICByZW1vdmVDbGFzcyhpY29uLCBpY29uVHlwZXNbaWNvblR5cGVdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRDbGFzcyhpY29uLCBpY29uVHlwZXNbcGFyYW1zLmljb25dKTsgLy8gSWNvbiBjb2xvclxuXG4gICAgc2V0Q29sb3IoaWNvbiwgcGFyYW1zKTsgLy8gU3VjY2VzcyBpY29uIGJhY2tncm91bmQgY29sb3JcblxuICAgIGFkanVzdFN1Y2Nlc3NJY29uQmFja2dvdW5kQ29sb3IoKTsgLy8gQ3VzdG9tIGNsYXNzXG5cbiAgICBhcHBseUN1c3RvbUNsYXNzKGljb24sIHBhcmFtcywgJ2ljb24nKTtcbiAgfTsgLy8gQWRqdXN0IHN1Y2Nlc3MgaWNvbiBiYWNrZ3JvdW5kIGNvbG9yIHRvIG1hdGNoIHRoZSBwb3B1cCBiYWNrZ3JvdW5kIGNvbG9yXG5cblxuICB2YXIgYWRqdXN0U3VjY2Vzc0ljb25CYWNrZ291bmRDb2xvciA9IGZ1bmN0aW9uIGFkanVzdFN1Y2Nlc3NJY29uQmFja2dvdW5kQ29sb3IoKSB7XG4gICAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICB2YXIgcG9wdXBCYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwb3B1cCkuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xuICAgIHZhciBzdWNjZXNzSWNvblBhcnRzID0gcG9wdXAucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdLCAuc3dhbDItc3VjY2Vzcy1maXgnKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3VjY2Vzc0ljb25QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgc3VjY2Vzc0ljb25QYXJ0c1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwb3B1cEJhY2tncm91bmRDb2xvcjtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNldENvbnRlbnQgPSBmdW5jdGlvbiBzZXRDb250ZW50KGljb24sIHBhcmFtcykge1xuICAgIGljb24udGV4dENvbnRlbnQgPSAnJztcblxuICAgIGlmIChwYXJhbXMuaWNvbkh0bWwpIHtcbiAgICAgIHNldElubmVySHRtbChpY29uLCBpY29uQ29udGVudChwYXJhbXMuaWNvbkh0bWwpKTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5pY29uID09PSAnc3VjY2VzcycpIHtcbiAgICAgIHNldElubmVySHRtbChpY29uLCBcIlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1sZWZ0XFxcIj48L2Rpdj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1saW5lLXRpcFxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1saW5lLWxvbmdcXFwiPjwvc3Bhbj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLXJpbmdcXFwiPjwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWZpeFxcXCI+PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0XFxcIj48L2Rpdj5cXG4gICAgXCIpO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmljb24gPT09ICdlcnJvcicpIHtcbiAgICAgIHNldElubmVySHRtbChpY29uLCBcIlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJzd2FsMi14LW1hcmtcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInN3YWwyLXgtbWFyay1saW5lLWxlZnRcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzd2FsMi14LW1hcmstbGluZS1yaWdodFxcXCI+PC9zcGFuPlxcbiAgICAgIDwvc3Bhbj5cXG4gICAgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZGVmYXVsdEljb25IdG1sID0ge1xuICAgICAgICBxdWVzdGlvbjogJz8nLFxuICAgICAgICB3YXJuaW5nOiAnIScsXG4gICAgICAgIGluZm86ICdpJ1xuICAgICAgfTtcbiAgICAgIHNldElubmVySHRtbChpY29uLCBpY29uQ29udGVudChkZWZhdWx0SWNvbkh0bWxbcGFyYW1zLmljb25dKSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBzZXRDb2xvciA9IGZ1bmN0aW9uIHNldENvbG9yKGljb24sIHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zLmljb25Db2xvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGljb24uc3R5bGUuY29sb3IgPSBwYXJhbXMuaWNvbkNvbG9yO1xuICAgIGljb24uc3R5bGUuYm9yZGVyQ29sb3IgPSBwYXJhbXMuaWNvbkNvbG9yO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYXJyID0gWycuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCcsICcuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmcnLCAnLnN3YWwyLXgtbWFyay1saW5lLWxlZnQnLCAnLnN3YWwyLXgtbWFyay1saW5lLXJpZ2h0J107IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBzZWwgPSBfYXJyW19pXTtcbiAgICAgIHNldFN0eWxlKGljb24sIHNlbCwgJ2JhY2tncm91bmRDb2xvcicsIHBhcmFtcy5pY29uQ29sb3IpO1xuICAgIH1cblxuICAgIHNldFN0eWxlKGljb24sICcuc3dhbDItc3VjY2Vzcy1yaW5nJywgJ2JvcmRlckNvbG9yJywgcGFyYW1zLmljb25Db2xvcik7XG4gIH07XG5cbiAgdmFyIGljb25Db250ZW50ID0gZnVuY3Rpb24gaWNvbkNvbnRlbnQoY29udGVudCkge1xuICAgIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcIlwiLmNvbmNhdChzd2FsQ2xhc3Nlc1snaWNvbi1jb250ZW50J10sIFwiXFxcIj5cIikuY29uY2F0KGNvbnRlbnQsIFwiPC9kaXY+XCIpO1xuICB9O1xuXG4gIHZhciByZW5kZXJJbWFnZSA9IGZ1bmN0aW9uIHJlbmRlckltYWdlKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgaW1hZ2UgPSBnZXRJbWFnZSgpO1xuXG4gICAgaWYgKCFwYXJhbXMuaW1hZ2VVcmwpIHtcbiAgICAgIHJldHVybiBoaWRlKGltYWdlKTtcbiAgICB9XG5cbiAgICBzaG93KGltYWdlLCAnJyk7IC8vIFNyYywgYWx0XG5cbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBhcmFtcy5pbWFnZVVybCk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBwYXJhbXMuaW1hZ2VBbHQpOyAvLyBXaWR0aCwgaGVpZ2h0XG5cbiAgICBhcHBseU51bWVyaWNhbFN0eWxlKGltYWdlLCAnd2lkdGgnLCBwYXJhbXMuaW1hZ2VXaWR0aCk7XG4gICAgYXBwbHlOdW1lcmljYWxTdHlsZShpbWFnZSwgJ2hlaWdodCcsIHBhcmFtcy5pbWFnZUhlaWdodCk7IC8vIENsYXNzXG5cbiAgICBpbWFnZS5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5pbWFnZTtcbiAgICBhcHBseUN1c3RvbUNsYXNzKGltYWdlLCBwYXJhbXMsICdpbWFnZScpO1xuICB9O1xuXG4gIHZhciBjdXJyZW50U3RlcHMgPSBbXTtcbiAgLypcbiAgICogR2xvYmFsIGZ1bmN0aW9uIGZvciBjaGFpbmluZyBzd2VldEFsZXJ0IHBvcHVwc1xuICAgKi9cblxuICB2YXIgcXVldWUgPSBmdW5jdGlvbiBxdWV1ZShzdGVwcykge1xuICAgIHdhcm5BYm91dERlcHJlY2F0aW9uKCdTd2FsLnF1ZXVlKCknLCBcImFzeW5jL2F3YWl0XCIpO1xuICAgIHZhciBTd2FsID0gdGhpcztcbiAgICBjdXJyZW50U3RlcHMgPSBzdGVwcztcblxuICAgIHZhciByZXNldEFuZFJlc29sdmUgPSBmdW5jdGlvbiByZXNldEFuZFJlc29sdmUocmVzb2x2ZSwgdmFsdWUpIHtcbiAgICAgIGN1cnJlbnRTdGVwcyA9IFtdO1xuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfTtcblxuICAgIHZhciBxdWV1ZVJlc3VsdCA9IFtdO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgKGZ1bmN0aW9uIHN0ZXAoaSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGkgPCBjdXJyZW50U3RlcHMubGVuZ3RoKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcsIGkpO1xuICAgICAgICAgIFN3YWwuZmlyZShjdXJyZW50U3RlcHNbaV0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQudmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIHF1ZXVlUmVzdWx0LnB1c2gocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgc3RlcChpICsgMSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzZXRBbmRSZXNvbHZlKHJlc29sdmUsIHtcbiAgICAgICAgICAgICAgICBkaXNtaXNzOiByZXN1bHQuZGlzbWlzc1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNldEFuZFJlc29sdmUocmVzb2x2ZSwge1xuICAgICAgICAgICAgdmFsdWU6IHF1ZXVlUmVzdWx0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pKDApO1xuICAgIH0pO1xuICB9O1xuICAvKlxuICAgKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGdldHRpbmcgdGhlIGluZGV4IG9mIGN1cnJlbnQgcG9wdXAgaW4gcXVldWVcbiAgICovXG5cbiAgdmFyIGdldFF1ZXVlU3RlcCA9IGZ1bmN0aW9uIGdldFF1ZXVlU3RlcCgpIHtcbiAgICByZXR1cm4gZ2V0Q29udGFpbmVyKCkgJiYgZ2V0Q29udGFpbmVyKCkuZ2V0QXR0cmlidXRlKCdkYXRhLXF1ZXVlLXN0ZXAnKTtcbiAgfTtcbiAgLypcbiAgICogR2xvYmFsIGZ1bmN0aW9uIGZvciBpbnNlcnRpbmcgYSBwb3B1cCB0byB0aGUgcXVldWVcbiAgICovXG5cbiAgdmFyIGluc2VydFF1ZXVlU3RlcCA9IGZ1bmN0aW9uIGluc2VydFF1ZXVlU3RlcChzdGVwLCBpbmRleCkge1xuICAgIGlmIChpbmRleCAmJiBpbmRleCA8IGN1cnJlbnRTdGVwcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBjdXJyZW50U3RlcHMuc3BsaWNlKGluZGV4LCAwLCBzdGVwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudFN0ZXBzLnB1c2goc3RlcCk7XG4gIH07XG4gIC8qXG4gICAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgZGVsZXRpbmcgYSBwb3B1cCBmcm9tIHRoZSBxdWV1ZVxuICAgKi9cblxuICB2YXIgZGVsZXRlUXVldWVTdGVwID0gZnVuY3Rpb24gZGVsZXRlUXVldWVTdGVwKGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50U3RlcHNbaW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY3VycmVudFN0ZXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjcmVhdGVTdGVwRWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZVN0ZXBFbGVtZW50KHN0ZXApIHtcbiAgICB2YXIgc3RlcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhZGRDbGFzcyhzdGVwRWwsIHN3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwJ10pO1xuICAgIHNldElubmVySHRtbChzdGVwRWwsIHN0ZXApO1xuICAgIHJldHVybiBzdGVwRWw7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUxpbmVFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlTGluZUVsZW1lbnQocGFyYW1zKSB7XG4gICAgdmFyIGxpbmVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYWRkQ2xhc3MobGluZUVsLCBzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcC1saW5lJ10pO1xuXG4gICAgaWYgKHBhcmFtcy5wcm9ncmVzc1N0ZXBzRGlzdGFuY2UpIHtcbiAgICAgIGxpbmVFbC5zdHlsZS53aWR0aCA9IHBhcmFtcy5wcm9ncmVzc1N0ZXBzRGlzdGFuY2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVFbDtcbiAgfTtcblxuICB2YXIgcmVuZGVyUHJvZ3Jlc3NTdGVwcyA9IGZ1bmN0aW9uIHJlbmRlclByb2dyZXNzU3RlcHMoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyID0gZ2V0UHJvZ3Jlc3NTdGVwcygpO1xuXG4gICAgaWYgKCFwYXJhbXMucHJvZ3Jlc3NTdGVwcyB8fCBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBoaWRlKHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICAgIH1cblxuICAgIHNob3cocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcik7XG4gICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgIHZhciBjdXJyZW50UHJvZ3Jlc3NTdGVwID0gcGFyc2VJbnQocGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXAgPT09IHVuZGVmaW5lZCA/IGdldFF1ZXVlU3RlcCgpIDogcGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXApO1xuXG4gICAgaWYgKGN1cnJlbnRQcm9ncmVzc1N0ZXAgPj0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoKSB7XG4gICAgICB3YXJuKCdJbnZhbGlkIGN1cnJlbnRQcm9ncmVzc1N0ZXAgcGFyYW1ldGVyLCBpdCBzaG91bGQgYmUgbGVzcyB0aGFuIHByb2dyZXNzU3RlcHMubGVuZ3RoICcgKyAnKGN1cnJlbnRQcm9ncmVzc1N0ZXAgbGlrZSBKUyBhcnJheXMgc3RhcnRzIGZyb20gMCknKTtcbiAgICB9XG5cbiAgICBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5mb3JFYWNoKGZ1bmN0aW9uIChzdGVwLCBpbmRleCkge1xuICAgICAgdmFyIHN0ZXBFbCA9IGNyZWF0ZVN0ZXBFbGVtZW50KHN0ZXApO1xuICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGVwRWwpO1xuXG4gICAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRQcm9ncmVzc1N0ZXApIHtcbiAgICAgICAgYWRkQ2xhc3Moc3RlcEVsLCBzd2FsQ2xhc3Nlc1snYWN0aXZlLXByb2dyZXNzLXN0ZXAnXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCAhPT0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgICB2YXIgbGluZUVsID0gY3JlYXRlTGluZUVsZW1lbnQocGFyYW1zKTtcbiAgICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5lRWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciByZW5kZXJUaXRsZSA9IGZ1bmN0aW9uIHJlbmRlclRpdGxlKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgdGl0bGUgPSBnZXRUaXRsZSgpO1xuICAgIHRvZ2dsZSh0aXRsZSwgcGFyYW1zLnRpdGxlIHx8IHBhcmFtcy50aXRsZVRleHQsICdibG9jaycpO1xuXG4gICAgaWYgKHBhcmFtcy50aXRsZSkge1xuICAgICAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLnRpdGxlLCB0aXRsZSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50aXRsZVRleHQpIHtcbiAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHBhcmFtcy50aXRsZVRleHQ7XG4gICAgfSAvLyBDdXN0b20gY2xhc3NcblxuXG4gICAgYXBwbHlDdXN0b21DbGFzcyh0aXRsZSwgcGFyYW1zLCAndGl0bGUnKTtcbiAgfTtcblxuICB2YXIgcmVuZGVySGVhZGVyID0gZnVuY3Rpb24gcmVuZGVySGVhZGVyKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgaGVhZGVyID0gZ2V0SGVhZGVyKCk7IC8vIEN1c3RvbSBjbGFzc1xuXG4gICAgYXBwbHlDdXN0b21DbGFzcyhoZWFkZXIsIHBhcmFtcywgJ2hlYWRlcicpOyAvLyBQcm9ncmVzcyBzdGVwc1xuXG4gICAgcmVuZGVyUHJvZ3Jlc3NTdGVwcyhpbnN0YW5jZSwgcGFyYW1zKTsgLy8gSWNvblxuXG4gICAgcmVuZGVySWNvbihpbnN0YW5jZSwgcGFyYW1zKTsgLy8gSW1hZ2VcblxuICAgIHJlbmRlckltYWdlKGluc3RhbmNlLCBwYXJhbXMpOyAvLyBUaXRsZVxuXG4gICAgcmVuZGVyVGl0bGUoaW5zdGFuY2UsIHBhcmFtcyk7IC8vIENsb3NlIGJ1dHRvblxuXG4gICAgcmVuZGVyQ2xvc2VCdXR0b24oaW5zdGFuY2UsIHBhcmFtcyk7XG4gIH07XG5cbiAgdmFyIHJlbmRlclBvcHVwID0gZnVuY3Rpb24gcmVuZGVyUG9wdXAoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpOyAvLyBXaWR0aFxuXG4gICAgaWYgKHBhcmFtcy50b2FzdCkge1xuICAgICAgLy8gIzIxNzBcbiAgICAgIGFwcGx5TnVtZXJpY2FsU3R5bGUoY29udGFpbmVyLCAnd2lkdGgnLCBwYXJhbXMud2lkdGgpO1xuICAgICAgcG9wdXAuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcGx5TnVtZXJpY2FsU3R5bGUocG9wdXAsICd3aWR0aCcsIHBhcmFtcy53aWR0aCk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIGFwcGx5TnVtZXJpY2FsU3R5bGUocG9wdXAsICdwYWRkaW5nJywgcGFyYW1zLnBhZGRpbmcpOyAvLyBCYWNrZ3JvdW5kXG5cbiAgICBpZiAocGFyYW1zLmJhY2tncm91bmQpIHtcbiAgICAgIHBvcHVwLnN0eWxlLmJhY2tncm91bmQgPSBwYXJhbXMuYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICBoaWRlKGdldFZhbGlkYXRpb25NZXNzYWdlKCkpOyAvLyBDbGFzc2VzXG5cbiAgICBhZGRDbGFzc2VzKHBvcHVwLCBwYXJhbXMpO1xuICB9O1xuXG4gIHZhciBhZGRDbGFzc2VzID0gZnVuY3Rpb24gYWRkQ2xhc3Nlcyhwb3B1cCwgcGFyYW1zKSB7XG4gICAgLy8gRGVmYXVsdCBDbGFzcyArIHNob3dDbGFzcyB3aGVuIHVwZGF0aW5nIFN3YWwudXBkYXRlKHt9KVxuICAgIHBvcHVwLmNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHN3YWxDbGFzc2VzLnBvcHVwLCBcIiBcIikuY29uY2F0KGlzVmlzaWJsZShwb3B1cCkgPyBwYXJhbXMuc2hvd0NsYXNzLnBvcHVwIDogJycpO1xuXG4gICAgaWYgKHBhcmFtcy50b2FzdCkge1xuICAgICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcbiAgICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy50b2FzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5tb2RhbCk7XG4gICAgfSAvLyBDdXN0b20gY2xhc3NcblxuXG4gICAgYXBwbHlDdXN0b21DbGFzcyhwb3B1cCwgcGFyYW1zLCAncG9wdXAnKTtcblxuICAgIGlmICh0eXBlb2YgcGFyYW1zLmN1c3RvbUNsYXNzID09PSAnc3RyaW5nJykge1xuICAgICAgYWRkQ2xhc3MocG9wdXAsIHBhcmFtcy5jdXN0b21DbGFzcyk7XG4gICAgfSAvLyBJY29uIGNsYXNzICgjMTg0MilcblxuXG4gICAgaWYgKHBhcmFtcy5pY29uKSB7XG4gICAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXNbXCJpY29uLVwiLmNvbmNhdChwYXJhbXMuaWNvbildKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgcmVuZGVyUG9wdXAoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyQ29udGFpbmVyKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckhlYWRlcihpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICByZW5kZXJDb250ZW50KGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckFjdGlvbnMoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyRm9vdGVyKGluc3RhbmNlLCBwYXJhbXMpO1xuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuZGlkUmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwYXJhbXMuZGlkUmVuZGVyKGdldFBvcHVwKCkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtcy5vblJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGFyYW1zLm9uUmVuZGVyKGdldFBvcHVwKCkpOyAvLyBAZGVwcmVjYXRlZFxuICAgIH1cbiAgfTtcblxuICAvKlxuICAgKiBHbG9iYWwgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIFN3ZWV0QWxlcnQyIHBvcHVwIGlzIHNob3duXG4gICAqL1xuXG4gIHZhciBpc1Zpc2libGUkMSA9IGZ1bmN0aW9uIGlzVmlzaWJsZSQkMSgpIHtcbiAgICByZXR1cm4gaXNWaXNpYmxlKGdldFBvcHVwKCkpO1xuICB9O1xuICAvKlxuICAgKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0NvbmZpcm0nIGJ1dHRvblxuICAgKi9cblxuICB2YXIgY2xpY2tDb25maXJtID0gZnVuY3Rpb24gY2xpY2tDb25maXJtKCkge1xuICAgIHJldHVybiBnZXRDb25maXJtQnV0dG9uKCkgJiYgZ2V0Q29uZmlybUJ1dHRvbigpLmNsaWNrKCk7XG4gIH07XG4gIC8qXG4gICAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnRGVueScgYnV0dG9uXG4gICAqL1xuXG4gIHZhciBjbGlja0RlbnkgPSBmdW5jdGlvbiBjbGlja0RlbnkoKSB7XG4gICAgcmV0dXJuIGdldERlbnlCdXR0b24oKSAmJiBnZXREZW55QnV0dG9uKCkuY2xpY2soKTtcbiAgfTtcbiAgLypcbiAgICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdDYW5jZWwnIGJ1dHRvblxuICAgKi9cblxuICB2YXIgY2xpY2tDYW5jZWwgPSBmdW5jdGlvbiBjbGlja0NhbmNlbCgpIHtcbiAgICByZXR1cm4gZ2V0Q2FuY2VsQnV0dG9uKCkgJiYgZ2V0Q2FuY2VsQnV0dG9uKCkuY2xpY2soKTtcbiAgfTtcblxuICBmdW5jdGlvbiBmaXJlKCkge1xuICAgIHZhciBTd2FsID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NvbnN0cnVjdChTd2FsLCBhcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGV4dGVuZGVkIHZlcnNpb24gb2YgYFN3YWxgIGNvbnRhaW5pbmcgYHBhcmFtc2AgYXMgZGVmYXVsdHMuXG4gICAqIFVzZWZ1bCBmb3IgcmV1c2luZyBTd2FsIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiBCZWZvcmU6XG4gICAqIGNvbnN0IHRleHRQcm9tcHRPcHRpb25zID0geyBpbnB1dDogJ3RleHQnLCBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlIH1cbiAgICogY29uc3Qge3ZhbHVlOiBmaXJzdE5hbWV9ID0gYXdhaXQgU3dhbC5maXJlKHsgLi4udGV4dFByb21wdE9wdGlvbnMsIHRpdGxlOiAnV2hhdCBpcyB5b3VyIGZpcnN0IG5hbWU/JyB9KVxuICAgKiBjb25zdCB7dmFsdWU6IGxhc3ROYW1lfSA9IGF3YWl0IFN3YWwuZmlyZSh7IC4uLnRleHRQcm9tcHRPcHRpb25zLCB0aXRsZTogJ1doYXQgaXMgeW91ciBsYXN0IG5hbWU/JyB9KVxuICAgKlxuICAgKiBBZnRlcjpcbiAgICogY29uc3QgVGV4dFByb21wdCA9IFN3YWwubWl4aW4oeyBpbnB1dDogJ3RleHQnLCBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlIH0pXG4gICAqIGNvbnN0IHt2YWx1ZTogZmlyc3ROYW1lfSA9IGF3YWl0IFRleHRQcm9tcHQoJ1doYXQgaXMgeW91ciBmaXJzdCBuYW1lPycpXG4gICAqIGNvbnN0IHt2YWx1ZTogbGFzdE5hbWV9ID0gYXdhaXQgVGV4dFByb21wdCgnV2hhdCBpcyB5b3VyIGxhc3QgbmFtZT8nKVxuICAgKlxuICAgKiBAcGFyYW0gbWl4aW5QYXJhbXNcbiAgICovXG4gIGZ1bmN0aW9uIG1peGluKG1peGluUGFyYW1zKSB7XG4gICAgdmFyIE1peGluU3dhbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX3RoaXMpIHtcbiAgICAgIF9pbmhlcml0cyhNaXhpblN3YWwsIF90aGlzKTtcblxuICAgICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNaXhpblN3YWwpO1xuXG4gICAgICBmdW5jdGlvbiBNaXhpblN3YWwoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNaXhpblN3YWwpO1xuXG4gICAgICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgX2NyZWF0ZUNsYXNzKE1peGluU3dhbCwgW3tcbiAgICAgICAga2V5OiBcIl9tYWluXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFpbihwYXJhbXMsIHByaW9yaXR5TWl4aW5QYXJhbXMpIHtcbiAgICAgICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoTWl4aW5Td2FsLnByb3RvdHlwZSksIFwiX21haW5cIiwgdGhpcykuY2FsbCh0aGlzLCBwYXJhbXMsIF9leHRlbmRzKHt9LCBtaXhpblBhcmFtcywgcHJpb3JpdHlNaXhpblBhcmFtcykpO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBNaXhpblN3YWw7XG4gICAgfSh0aGlzKTtcblxuICAgIHJldHVybiBNaXhpblN3YWw7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgbG9hZGVyIChzcGlubmVyKSwgdGhpcyBpcyB1c2VmdWwgd2l0aCBBSkFYIHJlcXVlc3RzLlxuICAgKiBCeSBkZWZhdWx0IHRoZSBsb2FkZXIgYmUgc2hvd24gaW5zdGVhZCBvZiB0aGUgXCJDb25maXJtXCIgYnV0dG9uLlxuICAgKi9cblxuICB2YXIgc2hvd0xvYWRpbmcgPSBmdW5jdGlvbiBzaG93TG9hZGluZyhidXR0b25Ub1JlcGxhY2UpIHtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuXG4gICAgaWYgKCFwb3B1cCkge1xuICAgICAgU3dhbC5maXJlKCk7XG4gICAgfVxuXG4gICAgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIHZhciBhY3Rpb25zID0gZ2V0QWN0aW9ucygpO1xuICAgIHZhciBsb2FkZXIgPSBnZXRMb2FkZXIoKTtcblxuICAgIGlmICghYnV0dG9uVG9SZXBsYWNlICYmIGlzVmlzaWJsZShnZXRDb25maXJtQnV0dG9uKCkpKSB7XG4gICAgICBidXR0b25Ub1JlcGxhY2UgPSBnZXRDb25maXJtQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgc2hvdyhhY3Rpb25zKTtcblxuICAgIGlmIChidXR0b25Ub1JlcGxhY2UpIHtcbiAgICAgIGhpZGUoYnV0dG9uVG9SZXBsYWNlKTtcbiAgICAgIGxvYWRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uLXRvLXJlcGxhY2UnLCBidXR0b25Ub1JlcGxhY2UuY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBsb2FkZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobG9hZGVyLCBidXR0b25Ub1JlcGxhY2UpO1xuICAgIGFkZENsYXNzKFtwb3B1cCwgYWN0aW9uc10sIHN3YWxDbGFzc2VzLmxvYWRpbmcpO1xuICAgIHNob3cobG9hZGVyKTtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycsIHRydWUpO1xuICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1idXN5JywgdHJ1ZSk7XG4gICAgcG9wdXAuZm9jdXMoKTtcbiAgfTtcblxuICB2YXIgUkVTVE9SRV9GT0NVU19USU1FT1VUID0gMTAwO1xuXG4gIHZhciBnbG9iYWxTdGF0ZSA9IHt9O1xuXG4gIHZhciBmb2N1c1ByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGZ1bmN0aW9uIGZvY3VzUHJldmlvdXNBY3RpdmVFbGVtZW50KCkge1xuICAgIGlmIChnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgJiYgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKSB7XG4gICAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gICAgfVxuICB9OyAvLyBSZXN0b3JlIHByZXZpb3VzIGFjdGl2ZSAoZm9jdXNlZCkgZWxlbWVudFxuXG5cbiAgdmFyIHJlc3RvcmVBY3RpdmVFbGVtZW50ID0gZnVuY3Rpb24gcmVzdG9yZUFjdGl2ZUVsZW1lbnQocmV0dXJuRm9jdXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIGlmICghcmV0dXJuRm9jdXMpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHggPSB3aW5kb3cuc2Nyb2xsWDtcbiAgICAgIHZhciB5ID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBnbG9iYWxTdGF0ZS5yZXN0b3JlRm9jdXNUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvY3VzUHJldmlvdXNBY3RpdmVFbGVtZW50KCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIFJFU1RPUkVfRk9DVVNfVElNRU9VVCk7IC8vIGlzc3Vlcy85MDBcblxuICAgICAgaWYgKHR5cGVvZiB4ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gSUUgZG9lc24ndCBoYXZlIHNjcm9sbFgvc2Nyb2xsWSBzdXBwb3J0XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh4LCB5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXMgc2V0LCByZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gICAqIE90aGVyd2lzZSwgcmV0dXJucyB1bmRlZmluZWQuXG4gICAqL1xuXG4gIHZhciBnZXRUaW1lckxlZnQgPSBmdW5jdGlvbiBnZXRUaW1lckxlZnQoKSB7XG4gICAgcmV0dXJuIGdsb2JhbFN0YXRlLnRpbWVvdXQgJiYgZ2xvYmFsU3RhdGUudGltZW91dC5nZXRUaW1lckxlZnQoKTtcbiAgfTtcbiAgLyoqXG4gICAqIFN0b3AgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAgICovXG5cbiAgdmFyIHN0b3BUaW1lciA9IGZ1bmN0aW9uIHN0b3BUaW1lcigpIHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgICAgc3RvcFRpbWVyUHJvZ3Jlc3NCYXIoKTtcbiAgICAgIHJldHVybiBnbG9iYWxTdGF0ZS50aW1lb3V0LnN0b3AoKTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBSZXN1bWUgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAgICovXG5cbiAgdmFyIHJlc3VtZVRpbWVyID0gZnVuY3Rpb24gcmVzdW1lVGltZXIoKSB7XG4gICAgaWYgKGdsb2JhbFN0YXRlLnRpbWVvdXQpIHtcbiAgICAgIHZhciByZW1haW5pbmcgPSBnbG9iYWxTdGF0ZS50aW1lb3V0LnN0YXJ0KCk7XG4gICAgICBhbmltYXRlVGltZXJQcm9ncmVzc0JhcihyZW1haW5pbmcpO1xuICAgICAgcmV0dXJuIHJlbWFpbmluZztcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBSZXN1bWUgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAgICovXG5cbiAgdmFyIHRvZ2dsZVRpbWVyID0gZnVuY3Rpb24gdG9nZ2xlVGltZXIoKSB7XG4gICAgdmFyIHRpbWVyID0gZ2xvYmFsU3RhdGUudGltZW91dDtcbiAgICByZXR1cm4gdGltZXIgJiYgKHRpbWVyLnJ1bm5pbmcgPyBzdG9wVGltZXIoKSA6IHJlc3VtZVRpbWVyKCkpO1xuICB9O1xuICAvKipcbiAgICogSW5jcmVhc2UgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiBhbiB1cGRhdGVkIHRpbWVyLlxuICAgKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkLlxuICAgKi9cblxuICB2YXIgaW5jcmVhc2VUaW1lciA9IGZ1bmN0aW9uIGluY3JlYXNlVGltZXIobikge1xuICAgIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgICB2YXIgcmVtYWluaW5nID0gZ2xvYmFsU3RhdGUudGltZW91dC5pbmNyZWFzZShuKTtcbiAgICAgIGFuaW1hdGVUaW1lclByb2dyZXNzQmFyKHJlbWFpbmluZywgdHJ1ZSk7XG4gICAgICByZXR1cm4gcmVtYWluaW5nO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIENoZWNrIGlmIHRpbWVyIGlzIHJ1bm5pbmcuIFJldHVybnMgdHJ1ZSBpZiB0aW1lciBpcyBydW5uaW5nXG4gICAqIG9yIGZhbHNlIGlmIHRpbWVyIGlzIHBhdXNlZCBvciBzdG9wcGVkLlxuICAgKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkXG4gICAqL1xuXG4gIHZhciBpc1RpbWVyUnVubmluZyA9IGZ1bmN0aW9uIGlzVGltZXJSdW5uaW5nKCkge1xuICAgIHJldHVybiBnbG9iYWxTdGF0ZS50aW1lb3V0ICYmIGdsb2JhbFN0YXRlLnRpbWVvdXQuaXNSdW5uaW5nKCk7XG4gIH07XG5cbiAgdmFyIGJvZHlDbGlja0xpc3RlbmVyQWRkZWQgPSBmYWxzZTtcbiAgdmFyIGNsaWNrSGFuZGxlcnMgPSB7fTtcbiAgZnVuY3Rpb24gYmluZENsaWNrSGFuZGxlcigpIHtcbiAgICB2YXIgYXR0ciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ2RhdGEtc3dhbC10ZW1wbGF0ZSc7XG4gICAgY2xpY2tIYW5kbGVyc1thdHRyXSA9IHRoaXM7XG5cbiAgICBpZiAoIWJvZHlDbGlja0xpc3RlbmVyQWRkZWQpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBib2R5Q2xpY2tMaXN0ZW5lcik7XG4gICAgICBib2R5Q2xpY2tMaXN0ZW5lckFkZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB2YXIgYm9keUNsaWNrTGlzdGVuZXIgPSBmdW5jdGlvbiBib2R5Q2xpY2tMaXN0ZW5lcihldmVudCkge1xuICAgIC8vIDEuIHVzaW5nIC5wYXJlbnROb2RlIGluc3RlYWQgb2YgZXZlbnQucGF0aCBiZWNhdXNlIG9mIGJldHRlciBzdXBwb3J0IGJ5IG9sZCBicm93c2VycyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzkyNDU2MzhcbiAgICAvLyAyLiB1c2luZyAucGFyZW50Tm9kZSBpbnN0ZWFkIG9mIC5wYXJlbnRFbGVtZW50IGJlY2F1c2Ugb2YgSUUxMSArIFNWRyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzYyNzAzNTRcbiAgICBmb3IgKHZhciBlbCA9IGV2ZW50LnRhcmdldDsgZWwgJiYgZWwgIT09IGRvY3VtZW50OyBlbCA9IGVsLnBhcmVudE5vZGUpIHtcbiAgICAgIGZvciAodmFyIGF0dHIgaW4gY2xpY2tIYW5kbGVycykge1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSBlbC5nZXRBdHRyaWJ1dGUoYXR0cik7XG5cbiAgICAgICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICAgICAgY2xpY2tIYW5kbGVyc1thdHRyXS5maXJlKHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgZGVmYXVsdFBhcmFtcyA9IHtcbiAgICB0aXRsZTogJycsXG4gICAgdGl0bGVUZXh0OiAnJyxcbiAgICB0ZXh0OiAnJyxcbiAgICBodG1sOiAnJyxcbiAgICBmb290ZXI6ICcnLFxuICAgIGljb246IHVuZGVmaW5lZCxcbiAgICBpY29uQ29sb3I6IHVuZGVmaW5lZCxcbiAgICBpY29uSHRtbDogdW5kZWZpbmVkLFxuICAgIHRlbXBsYXRlOiB1bmRlZmluZWQsXG4gICAgdG9hc3Q6IGZhbHNlLFxuICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICBzaG93Q2xhc3M6IHtcbiAgICAgIHBvcHVwOiAnc3dhbDItc2hvdycsXG4gICAgICBiYWNrZHJvcDogJ3N3YWwyLWJhY2tkcm9wLXNob3cnLFxuICAgICAgaWNvbjogJ3N3YWwyLWljb24tc2hvdydcbiAgICB9LFxuICAgIGhpZGVDbGFzczoge1xuICAgICAgcG9wdXA6ICdzd2FsMi1oaWRlJyxcbiAgICAgIGJhY2tkcm9wOiAnc3dhbDItYmFja2Ryb3AtaGlkZScsXG4gICAgICBpY29uOiAnc3dhbDItaWNvbi1oaWRlJ1xuICAgIH0sXG4gICAgY3VzdG9tQ2xhc3M6IHt9LFxuICAgIHRhcmdldDogJ2JvZHknLFxuICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgIGhlaWdodEF1dG86IHRydWUsXG4gICAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgYWxsb3dFc2NhcGVLZXk6IHRydWUsXG4gICAgYWxsb3dFbnRlcktleTogdHJ1ZSxcbiAgICBzdG9wS2V5ZG93blByb3BhZ2F0aW9uOiB0cnVlLFxuICAgIGtleWRvd25MaXN0ZW5lckNhcHR1cmU6IGZhbHNlLFxuICAgIHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuICAgIHNob3dEZW55QnV0dG9uOiBmYWxzZSxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZSxcbiAgICBwcmVDb25maXJtOiB1bmRlZmluZWQsXG4gICAgcHJlRGVueTogdW5kZWZpbmVkLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgIGNvbmZpcm1CdXR0b25BcmlhTGFiZWw6ICcnLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogdW5kZWZpbmVkLFxuICAgIGRlbnlCdXR0b25UZXh0OiAnTm8nLFxuICAgIGRlbnlCdXR0b25BcmlhTGFiZWw6ICcnLFxuICAgIGRlbnlCdXR0b25Db2xvcjogdW5kZWZpbmVkLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICAgIGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDogJycsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6IHVuZGVmaW5lZCxcbiAgICBidXR0b25zU3R5bGluZzogdHJ1ZSxcbiAgICByZXZlcnNlQnV0dG9uczogZmFsc2UsXG4gICAgZm9jdXNDb25maXJtOiB0cnVlLFxuICAgIGZvY3VzRGVueTogZmFsc2UsXG4gICAgZm9jdXNDYW5jZWw6IGZhbHNlLFxuICAgIHJldHVybkZvY3VzOiB0cnVlLFxuICAgIHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG4gICAgY2xvc2VCdXR0b25IdG1sOiAnJnRpbWVzOycsXG4gICAgY2xvc2VCdXR0b25BcmlhTGFiZWw6ICdDbG9zZSB0aGlzIGRpYWxvZycsXG4gICAgbG9hZGVySHRtbDogJycsXG4gICAgc2hvd0xvYWRlck9uQ29uZmlybTogZmFsc2UsXG4gICAgc2hvd0xvYWRlck9uRGVueTogZmFsc2UsXG4gICAgaW1hZ2VVcmw6IHVuZGVmaW5lZCxcbiAgICBpbWFnZVdpZHRoOiB1bmRlZmluZWQsXG4gICAgaW1hZ2VIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICBpbWFnZUFsdDogJycsXG4gICAgdGltZXI6IHVuZGVmaW5lZCxcbiAgICB0aW1lclByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgIHBhZGRpbmc6IHVuZGVmaW5lZCxcbiAgICBiYWNrZ3JvdW5kOiB1bmRlZmluZWQsXG4gICAgaW5wdXQ6IHVuZGVmaW5lZCxcbiAgICBpbnB1dFBsYWNlaG9sZGVyOiAnJyxcbiAgICBpbnB1dExhYmVsOiAnJyxcbiAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICBpbnB1dE9wdGlvbnM6IHt9LFxuICAgIGlucHV0QXV0b1RyaW06IHRydWUsXG4gICAgaW5wdXRBdHRyaWJ1dGVzOiB7fSxcbiAgICBpbnB1dFZhbGlkYXRvcjogdW5kZWZpbmVkLFxuICAgIHJldHVybklucHV0VmFsdWVPbkRlbnk6IGZhbHNlLFxuICAgIHZhbGlkYXRpb25NZXNzYWdlOiB1bmRlZmluZWQsXG4gICAgZ3JvdzogZmFsc2UsXG4gICAgcG9zaXRpb246ICdjZW50ZXInLFxuICAgIHByb2dyZXNzU3RlcHM6IFtdLFxuICAgIGN1cnJlbnRQcm9ncmVzc1N0ZXA6IHVuZGVmaW5lZCxcbiAgICBwcm9ncmVzc1N0ZXBzRGlzdGFuY2U6IHVuZGVmaW5lZCxcbiAgICBvbkJlZm9yZU9wZW46IHVuZGVmaW5lZCxcbiAgICBvbk9wZW46IHVuZGVmaW5lZCxcbiAgICB3aWxsT3BlbjogdW5kZWZpbmVkLFxuICAgIGRpZE9wZW46IHVuZGVmaW5lZCxcbiAgICBvblJlbmRlcjogdW5kZWZpbmVkLFxuICAgIGRpZFJlbmRlcjogdW5kZWZpbmVkLFxuICAgIG9uQ2xvc2U6IHVuZGVmaW5lZCxcbiAgICBvbkFmdGVyQ2xvc2U6IHVuZGVmaW5lZCxcbiAgICB3aWxsQ2xvc2U6IHVuZGVmaW5lZCxcbiAgICBkaWRDbG9zZTogdW5kZWZpbmVkLFxuICAgIG9uRGVzdHJveTogdW5kZWZpbmVkLFxuICAgIGRpZERlc3Ryb3k6IHVuZGVmaW5lZCxcbiAgICBzY3JvbGxiYXJQYWRkaW5nOiB0cnVlXG4gIH07XG4gIHZhciB1cGRhdGFibGVQYXJhbXMgPSBbJ2FsbG93RXNjYXBlS2V5JywgJ2FsbG93T3V0c2lkZUNsaWNrJywgJ2JhY2tncm91bmQnLCAnYnV0dG9uc1N0eWxpbmcnLCAnY2FuY2VsQnV0dG9uQXJpYUxhYmVsJywgJ2NhbmNlbEJ1dHRvbkNvbG9yJywgJ2NhbmNlbEJ1dHRvblRleHQnLCAnY2xvc2VCdXR0b25BcmlhTGFiZWwnLCAnY2xvc2VCdXR0b25IdG1sJywgJ2NvbmZpcm1CdXR0b25BcmlhTGFiZWwnLCAnY29uZmlybUJ1dHRvbkNvbG9yJywgJ2NvbmZpcm1CdXR0b25UZXh0JywgJ2N1cnJlbnRQcm9ncmVzc1N0ZXAnLCAnY3VzdG9tQ2xhc3MnLCAnZGVueUJ1dHRvbkFyaWFMYWJlbCcsICdkZW55QnV0dG9uQ29sb3InLCAnZGVueUJ1dHRvblRleHQnLCAnZGlkQ2xvc2UnLCAnZGlkRGVzdHJveScsICdmb290ZXInLCAnaGlkZUNsYXNzJywgJ2h0bWwnLCAnaWNvbicsICdpY29uQ29sb3InLCAnaWNvbkh0bWwnLCAnaW1hZ2VBbHQnLCAnaW1hZ2VIZWlnaHQnLCAnaW1hZ2VVcmwnLCAnaW1hZ2VXaWR0aCcsICdvbkFmdGVyQ2xvc2UnLCAnb25DbG9zZScsICdvbkRlc3Ryb3knLCAncHJvZ3Jlc3NTdGVwcycsICdyZXR1cm5Gb2N1cycsICdyZXZlcnNlQnV0dG9ucycsICdzaG93Q2FuY2VsQnV0dG9uJywgJ3Nob3dDbG9zZUJ1dHRvbicsICdzaG93Q29uZmlybUJ1dHRvbicsICdzaG93RGVueUJ1dHRvbicsICd0ZXh0JywgJ3RpdGxlJywgJ3RpdGxlVGV4dCcsICd3aWxsQ2xvc2UnXTtcbiAgdmFyIGRlcHJlY2F0ZWRQYXJhbXMgPSB7XG4gICAgYW5pbWF0aW9uOiAnc2hvd0NsYXNzXCIgYW5kIFwiaGlkZUNsYXNzJyxcbiAgICBvbkJlZm9yZU9wZW46ICd3aWxsT3BlbicsXG4gICAgb25PcGVuOiAnZGlkT3BlbicsXG4gICAgb25SZW5kZXI6ICdkaWRSZW5kZXInLFxuICAgIG9uQ2xvc2U6ICd3aWxsQ2xvc2UnLFxuICAgIG9uQWZ0ZXJDbG9zZTogJ2RpZENsb3NlJyxcbiAgICBvbkRlc3Ryb3k6ICdkaWREZXN0cm95J1xuICB9O1xuICB2YXIgdG9hc3RJbmNvbXBhdGlibGVQYXJhbXMgPSBbJ2FsbG93T3V0c2lkZUNsaWNrJywgJ2FsbG93RW50ZXJLZXknLCAnYmFja2Ryb3AnLCAnZm9jdXNDb25maXJtJywgJ2ZvY3VzRGVueScsICdmb2N1c0NhbmNlbCcsICdyZXR1cm5Gb2N1cycsICdoZWlnaHRBdXRvJywgJ2tleWRvd25MaXN0ZW5lckNhcHR1cmUnXTtcbiAgLyoqXG4gICAqIElzIHZhbGlkIHBhcmFtZXRlclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lXG4gICAqL1xuXG4gIHZhciBpc1ZhbGlkUGFyYW1ldGVyID0gZnVuY3Rpb24gaXNWYWxpZFBhcmFtZXRlcihwYXJhbU5hbWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRlZmF1bHRQYXJhbXMsIHBhcmFtTmFtZSk7XG4gIH07XG4gIC8qKlxuICAgKiBJcyB2YWxpZCBwYXJhbWV0ZXIgZm9yIFN3YWwudXBkYXRlKCkgbWV0aG9kXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAgICovXG5cbiAgdmFyIGlzVXBkYXRhYmxlUGFyYW1ldGVyID0gZnVuY3Rpb24gaXNVcGRhdGFibGVQYXJhbWV0ZXIocGFyYW1OYW1lKSB7XG4gICAgcmV0dXJuIHVwZGF0YWJsZVBhcmFtcy5pbmRleE9mKHBhcmFtTmFtZSkgIT09IC0xO1xuICB9O1xuICAvKipcbiAgICogSXMgZGVwcmVjYXRlZCBwYXJhbWV0ZXJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZVxuICAgKi9cblxuICB2YXIgaXNEZXByZWNhdGVkUGFyYW1ldGVyID0gZnVuY3Rpb24gaXNEZXByZWNhdGVkUGFyYW1ldGVyKHBhcmFtTmFtZSkge1xuICAgIHJldHVybiBkZXByZWNhdGVkUGFyYW1zW3BhcmFtTmFtZV07XG4gIH07XG5cbiAgdmFyIGNoZWNrSWZQYXJhbUlzVmFsaWQgPSBmdW5jdGlvbiBjaGVja0lmUGFyYW1Jc1ZhbGlkKHBhcmFtKSB7XG4gICAgaWYgKCFpc1ZhbGlkUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgd2FybihcIlVua25vd24gcGFyYW1ldGVyIFxcXCJcIi5jb25jYXQocGFyYW0sIFwiXFxcIlwiKSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjaGVja0lmVG9hc3RQYXJhbUlzVmFsaWQgPSBmdW5jdGlvbiBjaGVja0lmVG9hc3RQYXJhbUlzVmFsaWQocGFyYW0pIHtcbiAgICBpZiAodG9hc3RJbmNvbXBhdGlibGVQYXJhbXMuaW5kZXhPZihwYXJhbSkgIT09IC0xKSB7XG4gICAgICB3YXJuKFwiVGhlIHBhcmFtZXRlciBcXFwiXCIuY29uY2F0KHBhcmFtLCBcIlxcXCIgaXMgaW5jb21wYXRpYmxlIHdpdGggdG9hc3RzXCIpKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNoZWNrSWZQYXJhbUlzRGVwcmVjYXRlZCA9IGZ1bmN0aW9uIGNoZWNrSWZQYXJhbUlzRGVwcmVjYXRlZChwYXJhbSkge1xuICAgIGlmIChpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIocGFyYW0pKSB7XG4gICAgICB3YXJuQWJvdXREZXByZWNhdGlvbihwYXJhbSwgaXNEZXByZWNhdGVkUGFyYW1ldGVyKHBhcmFtKSk7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogU2hvdyByZWxldmFudCB3YXJuaW5ncyBmb3IgZ2l2ZW4gcGFyYW1zXG4gICAqXG4gICAqIEBwYXJhbSBwYXJhbXNcbiAgICovXG5cblxuICB2YXIgc2hvd1dhcm5pbmdzRm9yUGFyYW1zID0gZnVuY3Rpb24gc2hvd1dhcm5pbmdzRm9yUGFyYW1zKHBhcmFtcykge1xuICAgIGZvciAodmFyIHBhcmFtIGluIHBhcmFtcykge1xuICAgICAgY2hlY2tJZlBhcmFtSXNWYWxpZChwYXJhbSk7XG5cbiAgICAgIGlmIChwYXJhbXMudG9hc3QpIHtcbiAgICAgICAgY2hlY2tJZlRvYXN0UGFyYW1Jc1ZhbGlkKHBhcmFtKTtcbiAgICAgIH1cblxuICAgICAgY2hlY2tJZlBhcmFtSXNEZXByZWNhdGVkKHBhcmFtKTtcbiAgICB9XG4gIH07XG5cblxuXG4gIHZhciBzdGF0aWNNZXRob2RzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIGlzVmFsaWRQYXJhbWV0ZXI6IGlzVmFsaWRQYXJhbWV0ZXIsXG4gICAgaXNVcGRhdGFibGVQYXJhbWV0ZXI6IGlzVXBkYXRhYmxlUGFyYW1ldGVyLFxuICAgIGlzRGVwcmVjYXRlZFBhcmFtZXRlcjogaXNEZXByZWNhdGVkUGFyYW1ldGVyLFxuICAgIGFyZ3NUb1BhcmFtczogYXJnc1RvUGFyYW1zLFxuICAgIGlzVmlzaWJsZTogaXNWaXNpYmxlJDEsXG4gICAgY2xpY2tDb25maXJtOiBjbGlja0NvbmZpcm0sXG4gICAgY2xpY2tEZW55OiBjbGlja0RlbnksXG4gICAgY2xpY2tDYW5jZWw6IGNsaWNrQ2FuY2VsLFxuICAgIGdldENvbnRhaW5lcjogZ2V0Q29udGFpbmVyLFxuICAgIGdldFBvcHVwOiBnZXRQb3B1cCxcbiAgICBnZXRUaXRsZTogZ2V0VGl0bGUsXG4gICAgZ2V0Q29udGVudDogZ2V0Q29udGVudCxcbiAgICBnZXRIdG1sQ29udGFpbmVyOiBnZXRIdG1sQ29udGFpbmVyLFxuICAgIGdldEltYWdlOiBnZXRJbWFnZSxcbiAgICBnZXRJY29uOiBnZXRJY29uLFxuICAgIGdldElucHV0TGFiZWw6IGdldElucHV0TGFiZWwsXG4gICAgZ2V0Q2xvc2VCdXR0b246IGdldENsb3NlQnV0dG9uLFxuICAgIGdldEFjdGlvbnM6IGdldEFjdGlvbnMsXG4gICAgZ2V0Q29uZmlybUJ1dHRvbjogZ2V0Q29uZmlybUJ1dHRvbixcbiAgICBnZXREZW55QnV0dG9uOiBnZXREZW55QnV0dG9uLFxuICAgIGdldENhbmNlbEJ1dHRvbjogZ2V0Q2FuY2VsQnV0dG9uLFxuICAgIGdldExvYWRlcjogZ2V0TG9hZGVyLFxuICAgIGdldEhlYWRlcjogZ2V0SGVhZGVyLFxuICAgIGdldEZvb3RlcjogZ2V0Rm9vdGVyLFxuICAgIGdldFRpbWVyUHJvZ3Jlc3NCYXI6IGdldFRpbWVyUHJvZ3Jlc3NCYXIsXG4gICAgZ2V0Rm9jdXNhYmxlRWxlbWVudHM6IGdldEZvY3VzYWJsZUVsZW1lbnRzLFxuICAgIGdldFZhbGlkYXRpb25NZXNzYWdlOiBnZXRWYWxpZGF0aW9uTWVzc2FnZSxcbiAgICBpc0xvYWRpbmc6IGlzTG9hZGluZyxcbiAgICBmaXJlOiBmaXJlLFxuICAgIG1peGluOiBtaXhpbixcbiAgICBxdWV1ZTogcXVldWUsXG4gICAgZ2V0UXVldWVTdGVwOiBnZXRRdWV1ZVN0ZXAsXG4gICAgaW5zZXJ0UXVldWVTdGVwOiBpbnNlcnRRdWV1ZVN0ZXAsXG4gICAgZGVsZXRlUXVldWVTdGVwOiBkZWxldGVRdWV1ZVN0ZXAsXG4gICAgc2hvd0xvYWRpbmc6IHNob3dMb2FkaW5nLFxuICAgIGVuYWJsZUxvYWRpbmc6IHNob3dMb2FkaW5nLFxuICAgIGdldFRpbWVyTGVmdDogZ2V0VGltZXJMZWZ0LFxuICAgIHN0b3BUaW1lcjogc3RvcFRpbWVyLFxuICAgIHJlc3VtZVRpbWVyOiByZXN1bWVUaW1lcixcbiAgICB0b2dnbGVUaW1lcjogdG9nZ2xlVGltZXIsXG4gICAgaW5jcmVhc2VUaW1lcjogaW5jcmVhc2VUaW1lcixcbiAgICBpc1RpbWVyUnVubmluZzogaXNUaW1lclJ1bm5pbmcsXG4gICAgYmluZENsaWNrSGFuZGxlcjogYmluZENsaWNrSGFuZGxlclxuICB9KTtcblxuICAvKipcbiAgICogSGlkZXMgbG9hZGVyIGFuZCBzaG93cyBiYWNrIHRoZSBidXR0b24gd2hpY2ggd2FzIGhpZGRlbiBieSAuc2hvd0xvYWRpbmcoKVxuICAgKi9cblxuICBmdW5jdGlvbiBoaWRlTG9hZGluZygpIHtcbiAgICAvLyBkbyBub3RoaW5nIGlmIHBvcHVwIGlzIGNsb3NlZFxuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG5cbiAgICBpZiAoIWlubmVyUGFyYW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgICBoaWRlKGRvbUNhY2hlLmxvYWRlcik7XG4gICAgdmFyIGJ1dHRvblRvUmVwbGFjZSA9IGRvbUNhY2hlLnBvcHVwLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZG9tQ2FjaGUubG9hZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1idXR0b24tdG8tcmVwbGFjZScpKTtcblxuICAgIGlmIChidXR0b25Ub1JlcGxhY2UubGVuZ3RoKSB7XG4gICAgICBzaG93KGJ1dHRvblRvUmVwbGFjZVswXSwgJ2lubGluZS1ibG9jaycpO1xuICAgIH0gZWxzZSBpZiAoYWxsQnV0dG9uc0FyZUhpZGRlbigpKSB7XG4gICAgICBoaWRlKGRvbUNhY2hlLmFjdGlvbnMpO1xuICAgIH1cblxuICAgIHJlbW92ZUNsYXNzKFtkb21DYWNoZS5wb3B1cCwgZG9tQ2FjaGUuYWN0aW9uc10sIHN3YWxDbGFzc2VzLmxvYWRpbmcpO1xuICAgIGRvbUNhY2hlLnBvcHVwLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1idXN5Jyk7XG4gICAgZG9tQ2FjaGUucG9wdXAucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgZG9tQ2FjaGUuZGVueUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5wdXQkMShpbnN0YW5jZSkge1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UgfHwgdGhpcyk7XG4gICAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldChpbnN0YW5jZSB8fCB0aGlzKTtcblxuICAgIGlmICghZG9tQ2FjaGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRJbnB1dChkb21DYWNoZS5jb250ZW50LCBpbm5lclBhcmFtcy5pbnB1dCk7XG4gIH1cblxuICB2YXIgZml4U2Nyb2xsYmFyID0gZnVuY3Rpb24gZml4U2Nyb2xsYmFyKCkge1xuICAgIC8vIGZvciBxdWV1ZXMsIGRvIG5vdCBkbyB0aGlzIG1vcmUgdGhhbiBvbmNlXG4gICAgaWYgKHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBpZiB0aGUgYm9keSBoYXMgb3ZlcmZsb3dcblxuXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAvLyBhZGQgcGFkZGluZyBzbyB0aGUgY29udGVudCBkb2Vzbid0IHNoaWZ0IGFmdGVyIHJlbW92YWwgb2Ygc2Nyb2xsYmFyXG4gICAgICBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCIuY29uY2F0KHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICsgbWVhc3VyZVNjcm9sbGJhcigpLCBcInB4XCIpO1xuICAgIH1cbiAgfTtcbiAgdmFyIHVuZG9TY3JvbGxiYXIgPSBmdW5jdGlvbiB1bmRvU2Nyb2xsYmFyKCkge1xuICAgIGlmIChzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyAhPT0gbnVsbCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiLmNvbmNhdChzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZywgXCJweFwiKTtcbiAgICAgIHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGZpbGUgKi9cblxuICB2YXIgaU9TZml4ID0gZnVuY3Rpb24gaU9TZml4KCkge1xuICAgIHZhciBpT1MgPSAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtIHx8IG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ01hY0ludGVsJyAmJiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxO1xuXG4gICAgaWYgKGlPUyAmJiAhaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KSkge1xuICAgICAgdmFyIG9mZnNldCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBcIlwiLmNvbmNhdChvZmZzZXQgKiAtMSwgXCJweFwiKTtcbiAgICAgIGFkZENsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCk7XG4gICAgICBsb2NrQm9keVNjcm9sbCgpO1xuICAgICAgYWRkQm90dG9tUGFkZGluZ0ZvclRhbGxQb3B1cHMoKTsgLy8gIzE5NDhcbiAgICB9XG4gIH07XG5cbiAgdmFyIGFkZEJvdHRvbVBhZGRpbmdGb3JUYWxsUG9wdXBzID0gZnVuY3Rpb24gYWRkQm90dG9tUGFkZGluZ0ZvclRhbGxQb3B1cHMoKSB7XG4gICAgdmFyIHNhZmFyaSA9ICFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oQ3JpT1N8RnhpT1N8RWRnaU9TfFlhQnJvd3NlcnxVQ0Jyb3dzZXIpL2kpO1xuXG4gICAgaWYgKHNhZmFyaSkge1xuICAgICAgdmFyIGJvdHRvbVBhbmVsSGVpZ2h0ID0gNDQ7XG5cbiAgICAgIGlmIChnZXRQb3B1cCgpLnNjcm9sbEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCAtIGJvdHRvbVBhbmVsSGVpZ2h0KSB7XG4gICAgICAgIGdldENvbnRhaW5lcigpLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIlwiLmNvbmNhdChib3R0b21QYW5lbEhlaWdodCwgXCJweFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGxvY2tCb2R5U2Nyb2xsID0gZnVuY3Rpb24gbG9ja0JvZHlTY3JvbGwoKSB7XG4gICAgLy8gIzEyNDZcbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgdmFyIHByZXZlbnRUb3VjaE1vdmU7XG5cbiAgICBjb250YWluZXIub250b3VjaHN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHByZXZlbnRUb3VjaE1vdmUgPSBzaG91bGRQcmV2ZW50VG91Y2hNb3ZlKGUpO1xuICAgIH07XG5cbiAgICBjb250YWluZXIub250b3VjaG1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKHByZXZlbnRUb3VjaE1vdmUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIHNob3VsZFByZXZlbnRUb3VjaE1vdmUgPSBmdW5jdGlvbiBzaG91bGRQcmV2ZW50VG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG5cbiAgICBpZiAoaXNTdHlseXMoZXZlbnQpIHx8IGlzWm9vbShldmVudCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0ID09PSBjb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghaXNTY3JvbGxhYmxlKGNvbnRhaW5lcikgJiYgdGFyZ2V0LnRhZ05hbWUgIT09ICdJTlBVVCcgJiYgLy8gIzE2MDNcbiAgICAhKGlzU2Nyb2xsYWJsZShnZXRDb250ZW50KCkpICYmIC8vICMxOTQ0XG4gICAgZ2V0Q29udGVudCgpLmNvbnRhaW5zKHRhcmdldCkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgdmFyIGlzU3R5bHlzID0gZnVuY3Rpb24gaXNTdHlseXMoZXZlbnQpIHtcbiAgICAvLyAjMTc4NlxuICAgIHJldHVybiBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoICYmIGV2ZW50LnRvdWNoZXNbMF0udG91Y2hUeXBlID09PSAnc3R5bHVzJztcbiAgfTtcblxuICB2YXIgaXNab29tID0gZnVuY3Rpb24gaXNab29tKGV2ZW50KSB7XG4gICAgLy8gIzE4OTFcbiAgICByZXR1cm4gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA+IDE7XG4gIH07XG5cbiAgdmFyIHVuZG9JT1NmaXggPSBmdW5jdGlvbiB1bmRvSU9TZml4KCkge1xuICAgIGlmIChoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpKSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gcGFyc2VJbnQoZG9jdW1lbnQuYm9keS5zdHlsZS50b3AsIDEwKTtcbiAgICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9ICcnO1xuICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBvZmZzZXQgKiAtMTtcbiAgICB9XG4gIH07XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGZpbGUgKi9cblxuICB2YXIgaXNJRTExID0gZnVuY3Rpb24gaXNJRTExKCkge1xuICAgIHJldHVybiAhIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZTtcbiAgfTsgLy8gRml4IElFMTEgY2VudGVyaW5nIHN3ZWV0YWxlcnQyL2lzc3Vlcy85MzNcblxuXG4gIHZhciBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUgPSBmdW5jdGlvbiBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUoKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgY29udGFpbmVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdhbGlnbi1pdGVtcycpO1xuXG4gICAgaWYgKHBvcHVwLm9mZnNldFRvcCA8IDApIHtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gJ2ZsZXgtc3RhcnQnO1xuICAgIH1cbiAgfTtcblxuICB2YXIgSUVmaXggPSBmdW5jdGlvbiBJRWZpeCgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNJRTExKCkpIHtcbiAgICAgIGZpeFZlcnRpY2FsUG9zaXRpb25JRSgpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZpeFZlcnRpY2FsUG9zaXRpb25JRSk7XG4gICAgfVxuICB9O1xuICB2YXIgdW5kb0lFZml4ID0gZnVuY3Rpb24gdW5kb0lFZml4KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBpc0lFMTEoKSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZpeFZlcnRpY2FsUG9zaXRpb25JRSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEFkZGluZyBhcmlhLWhpZGRlbj1cInRydWVcIiB0byBlbGVtZW50cyBvdXRzaWRlIG9mIHRoZSBhY3RpdmUgbW9kYWwgZGlhbG9nIGVuc3VyZXMgdGhhdFxuICAvLyBlbGVtZW50cyBub3Qgd2l0aGluIHRoZSBhY3RpdmUgbW9kYWwgZGlhbG9nIHdpbGwgbm90IGJlIHN1cmZhY2VkIGlmIGEgdXNlciBvcGVucyBhIHNjcmVlblxuICAvLyByZWFkZXLigJlzIGxpc3Qgb2YgZWxlbWVudHMgKGhlYWRpbmdzLCBmb3JtIGNvbnRyb2xzLCBsYW5kbWFya3MsIGV0Yy4pIGluIHRoZSBkb2N1bWVudC5cblxuICB2YXIgc2V0QXJpYUhpZGRlbiA9IGZ1bmN0aW9uIHNldEFyaWFIaWRkZW4oKSB7XG4gICAgdmFyIGJvZHlDaGlsZHJlbiA9IHRvQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gICAgYm9keUNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICBpZiAoZWwgPT09IGdldENvbnRhaW5lcigpIHx8IGNvbnRhaW5zKGVsLCBnZXRDb250YWluZXIoKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicsIGVsLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSk7XG4gICAgICB9XG5cbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIH0pO1xuICB9O1xuICB2YXIgdW5zZXRBcmlhSGlkZGVuID0gZnVuY3Rpb24gdW5zZXRBcmlhSGlkZGVuKCkge1xuICAgIHZhciBib2R5Q2hpbGRyZW4gPSB0b0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICAgIGJvZHlDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpKSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKSk7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIG1vZHVsZSBjb250YWludHMgYFdlYWtNYXBgcyBmb3IgZWFjaCBlZmZlY3RpdmVseS1cInByaXZhdGUgIHByb3BlcnR5XCIgdGhhdCBhIGBTd2FsYCBoYXMuXG4gICAqIEZvciBleGFtcGxlLCB0byBzZXQgdGhlIHByaXZhdGUgcHJvcGVydHkgXCJmb29cIiBvZiBgdGhpc2AgdG8gXCJiYXJcIiwgeW91IGNhbiBgcHJpdmF0ZVByb3BzLmZvby5zZXQodGhpcywgJ2JhcicpYFxuICAgKiBUaGlzIGlzIHRoZSBhcHByb2FjaCB0aGF0IEJhYmVsIHdpbGwgcHJvYmFibHkgdGFrZSB0byBpbXBsZW1lbnQgcHJpdmF0ZSBtZXRob2RzL2ZpZWxkc1xuICAgKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByaXZhdGUtbWV0aG9kc1xuICAgKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9wdWxsLzc1NTVcbiAgICogT25jZSB3ZSBoYXZlIHRoZSBjaGFuZ2VzIGZyb20gdGhhdCBQUiBpbiBCYWJlbCwgYW5kIG91ciBjb3JlIGNsYXNzIGZpdHMgcmVhc29uYWJsZSBpbiAqb25lIG1vZHVsZSpcbiAgICogICB0aGVuIHdlIGNhbiB1c2UgdGhhdCBsYW5ndWFnZSBmZWF0dXJlLlxuICAgKi9cbiAgdmFyIHByaXZhdGVNZXRob2RzID0ge1xuICAgIHN3YWxQcm9taXNlUmVzb2x2ZTogbmV3IFdlYWtNYXAoKVxuICB9O1xuXG4gIC8qXG4gICAqIEluc3RhbmNlIG1ldGhvZCB0byBjbG9zZSBzd2VldEFsZXJ0XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZShpbnN0YW5jZSwgY29udGFpbmVyLCByZXR1cm5Gb2N1cywgZGlkQ2xvc2UpIHtcbiAgICBpZiAoaXNUb2FzdCgpKSB7XG4gICAgICB0cmlnZ2VyRGlkQ2xvc2VBbmREaXNwb3NlKGluc3RhbmNlLCBkaWRDbG9zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3RvcmVBY3RpdmVFbGVtZW50KHJldHVybkZvY3VzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRyaWdnZXJEaWRDbG9zZUFuZERpc3Bvc2UoaW5zdGFuY2UsIGRpZENsb3NlKTtcbiAgICAgIH0pO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgICAgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVxuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5lci5wYXJlbnROb2RlICYmICFkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJykpIHtcbiAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgaWYgKGlzTW9kYWwoKSkge1xuICAgICAgdW5kb1Njcm9sbGJhcigpO1xuICAgICAgdW5kb0lPU2ZpeCgpO1xuICAgICAgdW5kb0lFZml4KCk7XG4gICAgICB1bnNldEFyaWFIaWRkZW4oKTtcbiAgICB9XG5cbiAgICByZW1vdmVCb2R5Q2xhc3NlcygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQm9keUNsYXNzZXMoKSB7XG4gICAgcmVtb3ZlQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIFtzd2FsQ2xhc3Nlcy5zaG93biwgc3dhbENsYXNzZXNbJ2hlaWdodC1hdXRvJ10sIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddLCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2UocmVzb2x2ZVZhbHVlKSB7XG4gICAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcblxuICAgIGlmICghcG9wdXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXNvbHZlVmFsdWUgPSBwcmVwYXJlUmVzb2x2ZVZhbHVlKHJlc29sdmVWYWx1ZSk7XG4gICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcblxuICAgIGlmICghaW5uZXJQYXJhbXMgfHwgaGFzQ2xhc3MocG9wdXAsIGlubmVyUGFyYW1zLmhpZGVDbGFzcy5wb3B1cCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc3dhbFByb21pc2VSZXNvbHZlID0gcHJpdmF0ZU1ldGhvZHMuc3dhbFByb21pc2VSZXNvbHZlLmdldCh0aGlzKTtcbiAgICByZW1vdmVDbGFzcyhwb3B1cCwgaW5uZXJQYXJhbXMuc2hvd0NsYXNzLnBvcHVwKTtcbiAgICBhZGRDbGFzcyhwb3B1cCwgaW5uZXJQYXJhbXMuaGlkZUNsYXNzLnBvcHVwKTtcbiAgICB2YXIgYmFja2Ryb3AgPSBnZXRDb250YWluZXIoKTtcbiAgICByZW1vdmVDbGFzcyhiYWNrZHJvcCwgaW5uZXJQYXJhbXMuc2hvd0NsYXNzLmJhY2tkcm9wKTtcbiAgICBhZGRDbGFzcyhiYWNrZHJvcCwgaW5uZXJQYXJhbXMuaGlkZUNsYXNzLmJhY2tkcm9wKTtcbiAgICBoYW5kbGVQb3B1cEFuaW1hdGlvbih0aGlzLCBwb3B1cCwgaW5uZXJQYXJhbXMpOyAvLyBSZXNvbHZlIFN3YWwgcHJvbWlzZVxuXG4gICAgc3dhbFByb21pc2VSZXNvbHZlKHJlc29sdmVWYWx1ZSk7XG4gIH1cblxuICB2YXIgcHJlcGFyZVJlc29sdmVWYWx1ZSA9IGZ1bmN0aW9uIHByZXBhcmVSZXNvbHZlVmFsdWUocmVzb2x2ZVZhbHVlKSB7XG4gICAgLy8gV2hlbiB1c2VyIGNhbGxzIFN3YWwuY2xvc2UoKVxuICAgIGlmICh0eXBlb2YgcmVzb2x2ZVZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNDb25maXJtZWQ6IGZhbHNlLFxuICAgICAgICBpc0RlbmllZDogZmFsc2UsXG4gICAgICAgIGlzRGlzbWlzc2VkOiB0cnVlXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBpc0NvbmZpcm1lZDogZmFsc2UsXG4gICAgICBpc0RlbmllZDogZmFsc2UsXG4gICAgICBpc0Rpc21pc3NlZDogZmFsc2VcbiAgICB9LCByZXNvbHZlVmFsdWUpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVQb3B1cEFuaW1hdGlvbiA9IGZ1bmN0aW9uIGhhbmRsZVBvcHVwQW5pbWF0aW9uKGluc3RhbmNlLCBwb3B1cCwgaW5uZXJQYXJhbXMpIHtcbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7IC8vIElmIGFuaW1hdGlvbiBpcyBzdXBwb3J0ZWQsIGFuaW1hdGVcblxuICAgIHZhciBhbmltYXRpb25Jc1N1cHBvcnRlZCA9IGFuaW1hdGlvbkVuZEV2ZW50ICYmIGhhc0Nzc0FuaW1hdGlvbihwb3B1cCk7XG4gICAgdmFyIG9uQ2xvc2UgPSBpbm5lclBhcmFtcy5vbkNsb3NlLFxuICAgICAgICBvbkFmdGVyQ2xvc2UgPSBpbm5lclBhcmFtcy5vbkFmdGVyQ2xvc2UsXG4gICAgICAgIHdpbGxDbG9zZSA9IGlubmVyUGFyYW1zLndpbGxDbG9zZSxcbiAgICAgICAgZGlkQ2xvc2UgPSBpbm5lclBhcmFtcy5kaWRDbG9zZTtcbiAgICBydW5EaWRDbG9zZShwb3B1cCwgd2lsbENsb3NlLCBvbkNsb3NlKTtcblxuICAgIGlmIChhbmltYXRpb25Jc1N1cHBvcnRlZCkge1xuICAgICAgYW5pbWF0ZVBvcHVwKGluc3RhbmNlLCBwb3B1cCwgY29udGFpbmVyLCBpbm5lclBhcmFtcy5yZXR1cm5Gb2N1cywgZGlkQ2xvc2UgfHwgb25BZnRlckNsb3NlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3RoZXJ3aXNlLCByZW1vdmUgaW1tZWRpYXRlbHlcbiAgICAgIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZShpbnN0YW5jZSwgY29udGFpbmVyLCBpbm5lclBhcmFtcy5yZXR1cm5Gb2N1cywgZGlkQ2xvc2UgfHwgb25BZnRlckNsb3NlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJ1bkRpZENsb3NlID0gZnVuY3Rpb24gcnVuRGlkQ2xvc2UocG9wdXAsIHdpbGxDbG9zZSwgb25DbG9zZSkge1xuICAgIGlmICh3aWxsQ2xvc2UgIT09IG51bGwgJiYgdHlwZW9mIHdpbGxDbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgd2lsbENsb3NlKHBvcHVwKTtcbiAgICB9IGVsc2UgaWYgKG9uQ2xvc2UgIT09IG51bGwgJiYgdHlwZW9mIG9uQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uQ2xvc2UocG9wdXApOyAvLyBAZGVwcmVjYXRlZFxuICAgIH1cbiAgfTtcblxuICB2YXIgYW5pbWF0ZVBvcHVwID0gZnVuY3Rpb24gYW5pbWF0ZVBvcHVwKGluc3RhbmNlLCBwb3B1cCwgY29udGFpbmVyLCByZXR1cm5Gb2N1cywgZGlkQ2xvc2UpIHtcbiAgICBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2sgPSByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUuYmluZChudWxsLCBpbnN0YW5jZSwgY29udGFpbmVyLCByZXR1cm5Gb2N1cywgZGlkQ2xvc2UpO1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IHBvcHVwKSB7XG4gICAgICAgIGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaygpO1xuICAgICAgICBkZWxldGUgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciB0cmlnZ2VyRGlkQ2xvc2VBbmREaXNwb3NlID0gZnVuY3Rpb24gdHJpZ2dlckRpZENsb3NlQW5kRGlzcG9zZShpbnN0YW5jZSwgZGlkQ2xvc2UpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0eXBlb2YgZGlkQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGlkQ2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2UuX2Rlc3Ryb3koKTtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBzZXRCdXR0b25zRGlzYWJsZWQoaW5zdGFuY2UsIGJ1dHRvbnMsIGRpc2FibGVkKSB7XG4gICAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldChpbnN0YW5jZSk7XG4gICAgYnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgIGRvbUNhY2hlW2J1dHRvbl0uZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldElucHV0RGlzYWJsZWQoaW5wdXQsIGRpc2FibGVkKSB7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICB2YXIgcmFkaW9zQ29udGFpbmVyID0gaW5wdXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgdmFyIHJhZGlvcyA9IHJhZGlvc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhZGlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByYWRpb3NbaV0uZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXQuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVCdXR0b25zKCkge1xuICAgIHNldEJ1dHRvbnNEaXNhYmxlZCh0aGlzLCBbJ2NvbmZpcm1CdXR0b24nLCAnZGVueUJ1dHRvbicsICdjYW5jZWxCdXR0b24nXSwgZmFsc2UpO1xuICB9XG4gIGZ1bmN0aW9uIGRpc2FibGVCdXR0b25zKCkge1xuICAgIHNldEJ1dHRvbnNEaXNhYmxlZCh0aGlzLCBbJ2NvbmZpcm1CdXR0b24nLCAnZGVueUJ1dHRvbicsICdjYW5jZWxCdXR0b24nXSwgdHJ1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gZW5hYmxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHNldElucHV0RGlzYWJsZWQodGhpcy5nZXRJbnB1dCgpLCBmYWxzZSk7XG4gIH1cbiAgZnVuY3Rpb24gZGlzYWJsZUlucHV0KCkge1xuICAgIHJldHVybiBzZXRJbnB1dERpc2FibGVkKHRoaXMuZ2V0SW5wdXQoKSwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93VmFsaWRhdGlvbk1lc3NhZ2UoZXJyb3IpIHtcbiAgICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICAgIHZhciBwYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICAgIHNldElubmVySHRtbChkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSwgZXJyb3IpO1xuICAgIGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXTtcblxuICAgIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MgJiYgcGFyYW1zLmN1c3RvbUNsYXNzLnZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICBhZGRDbGFzcyhkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSwgcGFyYW1zLmN1c3RvbUNsYXNzLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB9XG5cbiAgICBzaG93KGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB2YXIgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XG5cbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgdHJ1ZSk7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkQnknLCBzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10pO1xuICAgICAgZm9jdXNJbnB1dChpbnB1dCk7XG4gICAgICBhZGRDbGFzcyhpbnB1dCwgc3dhbENsYXNzZXMuaW5wdXRlcnJvcik7XG4gICAgfVxuICB9IC8vIEhpZGUgYmxvY2sgd2l0aCB2YWxpZGF0aW9uIG1lc3NhZ2VcblxuICBmdW5jdGlvbiByZXNldFZhbGlkYXRpb25NZXNzYWdlJDEoKSB7XG4gICAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcblxuICAgIGlmIChkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgaGlkZShkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgdmFyIGlucHV0ID0gdGhpcy5nZXRJbnB1dCgpO1xuXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcpO1xuICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZEJ5Jyk7XG4gICAgICByZW1vdmVDbGFzcyhpbnB1dCwgc3dhbENsYXNzZXMuaW5wdXRlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NTdGVwcyQxKCkge1xuICAgIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gICAgcmV0dXJuIGRvbUNhY2hlLnByb2dyZXNzU3RlcHM7XG4gIH1cblxuICB2YXIgVGltZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRpbWVyKGNhbGxiYWNrLCBkZWxheSkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpbWVyKTtcblxuICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgdGhpcy5yZW1haW5pbmcgPSBkZWxheTtcbiAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUaW1lciwgW3tcbiAgICAgIGtleTogXCJzdGFydFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBpZiAoIXRoaXMucnVubmluZykge1xuICAgICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zdGFydGVkID0gbmV3IERhdGUoKTtcbiAgICAgICAgICB0aGlzLmlkID0gc2V0VGltZW91dCh0aGlzLmNhbGxiYWNrLCB0aGlzLnJlbWFpbmluZyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZW1haW5pbmc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInN0b3BcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaWQpO1xuICAgICAgICAgIHRoaXMucmVtYWluaW5nIC09IG5ldyBEYXRlKCkgLSB0aGlzLnN0YXJ0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZW1haW5pbmc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImluY3JlYXNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5jcmVhc2Uobikge1xuICAgICAgICB2YXIgcnVubmluZyA9IHRoaXMucnVubmluZztcblxuICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW1haW5pbmcgKz0gbjtcblxuICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0VGltZXJMZWZ0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGltZXJMZWZ0KCkge1xuICAgICAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVtYWluaW5nO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc1J1bm5pbmdcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1J1bm5pbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bm5pbmc7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRpbWVyO1xuICB9KCk7XG5cbiAgdmFyIGRlZmF1bHRJbnB1dFZhbGlkYXRvcnMgPSB7XG4gICAgZW1haWw6IGZ1bmN0aW9uIGVtYWlsKHN0cmluZywgdmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiAvXlthLXpBLVowLTkuK18tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aMC05LV17MiwyNH0kLy50ZXN0KHN0cmluZykgPyBQcm9taXNlLnJlc29sdmUoKSA6IFByb21pc2UucmVzb2x2ZSh2YWxpZGF0aW9uTWVzc2FnZSB8fCAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJyk7XG4gICAgfSxcbiAgICB1cmw6IGZ1bmN0aW9uIHVybChzdHJpbmcsIHZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICAvLyB0YWtlbiBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODA5NDM1IHdpdGggYSBzbWFsbCBjaGFuZ2UgZnJvbSAjMTMwNiBhbmQgIzIwMTNcbiAgICAgIHJldHVybiAvXmh0dHBzPzpcXC9cXC8od3d3XFwuKT9bLWEtekEtWjAtOUA6JS5fK34jPV17MSwyNTZ9XFwuW2Etel17Miw2M31cXGIoWy1hLXpBLVowLTlAOiVfKy5+Iz8mLz1dKikkLy50ZXN0KHN0cmluZykgPyBQcm9taXNlLnJlc29sdmUoKSA6IFByb21pc2UucmVzb2x2ZSh2YWxpZGF0aW9uTWVzc2FnZSB8fCAnSW52YWxpZCBVUkwnKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gc2V0RGVmYXVsdElucHV0VmFsaWRhdG9ycyhwYXJhbXMpIHtcbiAgICAvLyBVc2UgZGVmYXVsdCBgaW5wdXRWYWxpZGF0b3JgIGZvciBzdXBwb3J0ZWQgaW5wdXQgdHlwZXMgaWYgbm90IHByb3ZpZGVkXG4gICAgaWYgKCFwYXJhbXMuaW5wdXRWYWxpZGF0b3IpIHtcbiAgICAgIE9iamVjdC5rZXlzKGRlZmF1bHRJbnB1dFZhbGlkYXRvcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAocGFyYW1zLmlucHV0ID09PSBrZXkpIHtcbiAgICAgICAgICBwYXJhbXMuaW5wdXRWYWxpZGF0b3IgPSBkZWZhdWx0SW5wdXRWYWxpZGF0b3JzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlQ3VzdG9tVGFyZ2V0RWxlbWVudChwYXJhbXMpIHtcbiAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIGN1c3RvbSB0YXJnZXQgZWxlbWVudCBpcyB2YWxpZFxuICAgIGlmICghcGFyYW1zLnRhcmdldCB8fCB0eXBlb2YgcGFyYW1zLnRhcmdldCA9PT0gJ3N0cmluZycgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRhcmdldCkgfHwgdHlwZW9mIHBhcmFtcy50YXJnZXQgIT09ICdzdHJpbmcnICYmICFwYXJhbXMudGFyZ2V0LmFwcGVuZENoaWxkKSB7XG4gICAgICB3YXJuKCdUYXJnZXQgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImJvZHlcIicpO1xuICAgICAgcGFyYW1zLnRhcmdldCA9ICdib2R5JztcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNldCB0eXBlLCB0ZXh0IGFuZCBhY3Rpb25zIG9uIHBvcHVwXG4gICAqXG4gICAqIEBwYXJhbSBwYXJhbXNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gc2V0UGFyYW1ldGVycyhwYXJhbXMpIHtcbiAgICBzZXREZWZhdWx0SW5wdXRWYWxpZGF0b3JzKHBhcmFtcyk7IC8vIHNob3dMb2FkZXJPbkNvbmZpcm0gJiYgcHJlQ29uZmlybVxuXG4gICAgaWYgKHBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtICYmICFwYXJhbXMucHJlQ29uZmlybSkge1xuICAgICAgd2Fybignc2hvd0xvYWRlck9uQ29uZmlybSBpcyBzZXQgdG8gdHJ1ZSwgYnV0IHByZUNvbmZpcm0gaXMgbm90IGRlZmluZWQuXFxuJyArICdzaG93TG9hZGVyT25Db25maXJtIHNob3VsZCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggcHJlQ29uZmlybSwgc2VlIHVzYWdlIGV4YW1wbGU6XFxuJyArICdodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby8jYWpheC1yZXF1ZXN0Jyk7XG4gICAgfSAvLyBwYXJhbXMuYW5pbWF0aW9uIHdpbGwgYmUgYWN0dWFsbHkgdXNlZCBpbiByZW5kZXJQb3B1cC5qc1xuICAgIC8vIGJ1dCBpbiBjYXNlIHdoZW4gcGFyYW1zLmFuaW1hdGlvbiBpcyBhIGZ1bmN0aW9uLCB3ZSBuZWVkIHRvIGNhbGwgdGhhdCBmdW5jdGlvblxuICAgIC8vIGJlZm9yZSBwb3B1cCAocmUpaW5pdGlhbGl6YXRpb24sIHNvIGl0J2xsIGJlIHBvc3NpYmxlIHRvIGNoZWNrIFN3YWwuaXNWaXNpYmxlKClcbiAgICAvLyBpbnNpZGUgdGhlIHBhcmFtcy5hbmltYXRpb24gZnVuY3Rpb25cblxuXG4gICAgcGFyYW1zLmFuaW1hdGlvbiA9IGNhbGxJZkZ1bmN0aW9uKHBhcmFtcy5hbmltYXRpb24pO1xuICAgIHZhbGlkYXRlQ3VzdG9tVGFyZ2V0RWxlbWVudChwYXJhbXMpOyAvLyBSZXBsYWNlIG5ld2xpbmVzIHdpdGggPGJyPiBpbiB0aXRsZVxuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMudGl0bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJhbXMudGl0bGUgPSBwYXJhbXMudGl0bGUuc3BsaXQoJ1xcbicpLmpvaW4oJzxiciAvPicpO1xuICAgIH1cblxuICAgIGluaXQocGFyYW1zKTtcbiAgfVxuXG4gIHZhciBzd2FsU3RyaW5nUGFyYW1zID0gWydzd2FsLXRpdGxlJywgJ3N3YWwtaHRtbCcsICdzd2FsLWZvb3RlciddO1xuICB2YXIgZ2V0VGVtcGxhdGVQYXJhbXMgPSBmdW5jdGlvbiBnZXRUZW1wbGF0ZVBhcmFtcyhwYXJhbXMpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0eXBlb2YgcGFyYW1zLnRlbXBsYXRlID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRlbXBsYXRlKSA6IHBhcmFtcy50ZW1wbGF0ZTtcblxuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICB2YXIgdGVtcGxhdGVDb250ZW50ID0gdGVtcGxhdGUuY29udGVudCB8fCB0ZW1wbGF0ZTsgLy8gSUUxMVxuXG4gICAgc2hvd1dhcm5pbmdzRm9yRWxlbWVudHModGVtcGxhdGVDb250ZW50KTtcblxuICAgIHZhciByZXN1bHQgPSBfZXh0ZW5kcyhnZXRTd2FsUGFyYW1zKHRlbXBsYXRlQ29udGVudCksIGdldFN3YWxCdXR0b25zKHRlbXBsYXRlQ29udGVudCksIGdldFN3YWxJbWFnZSh0ZW1wbGF0ZUNvbnRlbnQpLCBnZXRTd2FsSWNvbih0ZW1wbGF0ZUNvbnRlbnQpLCBnZXRTd2FsSW5wdXQodGVtcGxhdGVDb250ZW50KSwgZ2V0U3dhbFN0cmluZ1BhcmFtcyh0ZW1wbGF0ZUNvbnRlbnQsIHN3YWxTdHJpbmdQYXJhbXMpKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIGdldFN3YWxQYXJhbXMgPSBmdW5jdGlvbiBnZXRTd2FsUGFyYW1zKHRlbXBsYXRlQ29udGVudCkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB0b0FycmF5KHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzd2FsLXBhcmFtJykpLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKHBhcmFtLCBbJ25hbWUnLCAndmFsdWUnXSk7XG4gICAgICB2YXIgcGFyYW1OYW1lID0gcGFyYW0uZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICB2YXIgdmFsdWUgPSBwYXJhbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG5cbiAgICAgIGlmICh0eXBlb2YgZGVmYXVsdFBhcmFtc1twYXJhbU5hbWVdID09PSAnYm9vbGVhbicgJiYgdmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90eXBlb2YoZGVmYXVsdFBhcmFtc1twYXJhbU5hbWVdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0W3BhcmFtTmFtZV0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBnZXRTd2FsQnV0dG9ucyA9IGZ1bmN0aW9uIGdldFN3YWxCdXR0b25zKHRlbXBsYXRlQ29udGVudCkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB0b0FycmF5KHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzd2FsLWJ1dHRvbicpKS5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMoYnV0dG9uLCBbJ3R5cGUnLCAnY29sb3InLCAnYXJpYS1sYWJlbCddKTtcbiAgICAgIHZhciB0eXBlID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgndHlwZScpO1xuICAgICAgcmVzdWx0W1wiXCIuY29uY2F0KHR5cGUsIFwiQnV0dG9uVGV4dFwiKV0gPSBidXR0b24uaW5uZXJIVE1MO1xuICAgICAgcmVzdWx0W1wic2hvd1wiLmNvbmNhdChjYXBpdGFsaXplRmlyc3RMZXR0ZXIodHlwZSksIFwiQnV0dG9uXCIpXSA9IHRydWU7XG5cbiAgICAgIGlmIChidXR0b24uaGFzQXR0cmlidXRlKCdjb2xvcicpKSB7XG4gICAgICAgIHJlc3VsdFtcIlwiLmNvbmNhdCh0eXBlLCBcIkJ1dHRvbkNvbG9yXCIpXSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChidXR0b24uaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgcmVzdWx0W1wiXCIuY29uY2F0KHR5cGUsIFwiQnV0dG9uQXJpYUxhYmVsXCIpXSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBnZXRTd2FsSW1hZ2UgPSBmdW5jdGlvbiBnZXRTd2FsSW1hZ2UodGVtcGxhdGVDb250ZW50KSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBpbWFnZSA9IHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yKCdzd2FsLWltYWdlJyk7XG5cbiAgICBpZiAoaW1hZ2UpIHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMoaW1hZ2UsIFsnc3JjJywgJ3dpZHRoJywgJ2hlaWdodCcsICdhbHQnXSk7XG5cbiAgICAgIGlmIChpbWFnZS5oYXNBdHRyaWJ1dGUoJ3NyYycpKSB7XG4gICAgICAgIHJlc3VsdC5pbWFnZVVybCA9IGltYWdlLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbWFnZS5oYXNBdHRyaWJ1dGUoJ3dpZHRoJykpIHtcbiAgICAgICAgcmVzdWx0LmltYWdlV2lkdGggPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbWFnZS5oYXNBdHRyaWJ1dGUoJ2hlaWdodCcpKSB7XG4gICAgICAgIHJlc3VsdC5pbWFnZUhlaWdodCA9IGltYWdlLmdldEF0dHJpYnV0ZSgnaGVpZ2h0Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbWFnZS5oYXNBdHRyaWJ1dGUoJ2FsdCcpKSB7XG4gICAgICAgIHJlc3VsdC5pbWFnZUFsdCA9IGltYWdlLmdldEF0dHJpYnV0ZSgnYWx0Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB2YXIgZ2V0U3dhbEljb24gPSBmdW5jdGlvbiBnZXRTd2FsSWNvbih0ZW1wbGF0ZUNvbnRlbnQpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGljb24gPSB0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3Rvcignc3dhbC1pY29uJyk7XG5cbiAgICBpZiAoaWNvbikge1xuICAgICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhpY29uLCBbJ3R5cGUnLCAnY29sb3InXSk7XG5cbiAgICAgIGlmIChpY29uLmhhc0F0dHJpYnV0ZSgndHlwZScpKSB7XG4gICAgICAgIHJlc3VsdC5pY29uID0gaWNvbi5nZXRBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGljb24uaGFzQXR0cmlidXRlKCdjb2xvcicpKSB7XG4gICAgICAgIHJlc3VsdC5pY29uQ29sb3IgPSBpY29uLmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0Lmljb25IdG1sID0gaWNvbi5pbm5lckhUTUw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB2YXIgZ2V0U3dhbElucHV0ID0gZnVuY3Rpb24gZ2V0U3dhbElucHV0KHRlbXBsYXRlQ29udGVudCkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIgaW5wdXQgPSB0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3Rvcignc3dhbC1pbnB1dCcpO1xuXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKGlucHV0LCBbJ3R5cGUnLCAnbGFiZWwnLCAncGxhY2Vob2xkZXInLCAndmFsdWUnXSk7XG4gICAgICByZXN1bHQuaW5wdXQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSB8fCAndGV4dCc7XG5cbiAgICAgIGlmIChpbnB1dC5oYXNBdHRyaWJ1dGUoJ2xhYmVsJykpIHtcbiAgICAgICAgcmVzdWx0LmlucHV0TGFiZWwgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2xhYmVsJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbnB1dC5oYXNBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJykpIHtcbiAgICAgICAgcmVzdWx0LmlucHV0UGxhY2Vob2xkZXIgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbnB1dC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgcmVzdWx0LmlucHV0VmFsdWUgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGlucHV0T3B0aW9ucyA9IHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzd2FsLWlucHV0LW9wdGlvbicpO1xuXG4gICAgaWYgKGlucHV0T3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdC5pbnB1dE9wdGlvbnMgPSB7fTtcbiAgICAgIHRvQXJyYXkoaW5wdXRPcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhvcHRpb24sIFsndmFsdWUnXSk7XG4gICAgICAgIHZhciBvcHRpb25WYWx1ZSA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgIHZhciBvcHRpb25OYW1lID0gb3B0aW9uLmlubmVySFRNTDtcbiAgICAgICAgcmVzdWx0LmlucHV0T3B0aW9uc1tvcHRpb25WYWx1ZV0gPSBvcHRpb25OYW1lO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB2YXIgZ2V0U3dhbFN0cmluZ1BhcmFtcyA9IGZ1bmN0aW9uIGdldFN3YWxTdHJpbmdQYXJhbXModGVtcGxhdGVDb250ZW50LCBwYXJhbU5hbWVzKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSBpbiBwYXJhbU5hbWVzKSB7XG4gICAgICB2YXIgcGFyYW1OYW1lID0gcGFyYW1OYW1lc1tpXTtcbiAgICAgIHZhciB0YWcgPSB0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3RvcihwYXJhbU5hbWUpO1xuXG4gICAgICBpZiAodGFnKSB7XG4gICAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXModGFnLCBbXSk7XG4gICAgICAgIHJlc3VsdFtwYXJhbU5hbWUucmVwbGFjZSgvXnN3YWwtLywgJycpXSA9IHRhZy5pbm5lckhUTUwudHJpbSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIHNob3dXYXJuaW5nc0ZvckVsZW1lbnRzID0gZnVuY3Rpb24gc2hvd1dhcm5pbmdzRm9yRWxlbWVudHModGVtcGxhdGUpIHtcbiAgICB2YXIgYWxsb3dlZEVsZW1lbnRzID0gc3dhbFN0cmluZ1BhcmFtcy5jb25jYXQoWydzd2FsLXBhcmFtJywgJ3N3YWwtYnV0dG9uJywgJ3N3YWwtaW1hZ2UnLCAnc3dhbC1pY29uJywgJ3N3YWwtaW5wdXQnLCAnc3dhbC1pbnB1dC1vcHRpb24nXSk7XG4gICAgdG9BcnJheSh0ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICBpZiAoZWwucGFyZW50Tm9kZSAhPT0gdGVtcGxhdGUpIHtcbiAgICAgICAgLy8gY2FuJ3QgdXNlIHRlbXBsYXRlLmNoaWxkcmVuIGJlY2F1c2Ugb2YgSUUxMVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0YWdOYW1lID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBpZiAoYWxsb3dlZEVsZW1lbnRzLmluZGV4T2YodGFnTmFtZSkgPT09IC0xKSB7XG4gICAgICAgIHdhcm4oXCJVbnJlY29nbml6ZWQgZWxlbWVudCA8XCIuY29uY2F0KHRhZ05hbWUsIFwiPlwiKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMgPSBmdW5jdGlvbiBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKGVsLCBhbGxvd2VkQXR0cmlidXRlcykge1xuICAgIHRvQXJyYXkoZWwuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICBpZiAoYWxsb3dlZEF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUubmFtZSkgPT09IC0xKSB7XG4gICAgICAgIHdhcm4oW1wiVW5yZWNvZ25pemVkIGF0dHJpYnV0ZSBcXFwiXCIuY29uY2F0KGF0dHJpYnV0ZS5uYW1lLCBcIlxcXCIgb24gPFwiKS5jb25jYXQoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpLCBcIj4uXCIpLCBcIlwiLmNvbmNhdChhbGxvd2VkQXR0cmlidXRlcy5sZW5ndGggPyBcIkFsbG93ZWQgYXR0cmlidXRlcyBhcmU6IFwiLmNvbmNhdChhbGxvd2VkQXR0cmlidXRlcy5qb2luKCcsICcpKSA6ICdUbyBzZXQgdGhlIHZhbHVlLCB1c2UgSFRNTCB3aXRoaW4gdGhlIGVsZW1lbnQuJyldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgU0hPV19DTEFTU19USU1FT1VUID0gMTA7XG4gIC8qKlxuICAgKiBPcGVuIHBvcHVwLCBhZGQgbmVjZXNzYXJ5IGNsYXNzZXMgYW5kIHN0eWxlcywgZml4IHNjcm9sbGJhclxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zXG4gICAqL1xuXG4gIHZhciBvcGVuUG9wdXAgPSBmdW5jdGlvbiBvcGVuUG9wdXAocGFyYW1zKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG5cbiAgICBpZiAodHlwZW9mIHBhcmFtcy53aWxsT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGFyYW1zLndpbGxPcGVuKHBvcHVwKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMub25CZWZvcmVPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwYXJhbXMub25CZWZvcmVPcGVuKHBvcHVwKTsgLy8gQGRlcHJlY2F0ZWRcbiAgICB9XG5cbiAgICB2YXIgYm9keVN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpO1xuICAgIHZhciBpbml0aWFsQm9keU92ZXJmbG93ID0gYm9keVN0eWxlcy5vdmVyZmxvd1k7XG4gICAgYWRkQ2xhc3NlcyQxKGNvbnRhaW5lciwgcG9wdXAsIHBhcmFtcyk7IC8vIHNjcm9sbGluZyBpcyAnaGlkZGVuJyB1bnRpbCBhbmltYXRpb24gaXMgZG9uZSwgYWZ0ZXIgdGhhdCAnYXV0bydcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgc2V0U2Nyb2xsaW5nVmlzaWJpbGl0eShjb250YWluZXIsIHBvcHVwKTtcbiAgICB9LCBTSE9XX0NMQVNTX1RJTUVPVVQpO1xuXG4gICAgaWYgKGlzTW9kYWwoKSkge1xuICAgICAgZml4U2Nyb2xsQ29udGFpbmVyKGNvbnRhaW5lciwgcGFyYW1zLnNjcm9sbGJhclBhZGRpbmcsIGluaXRpYWxCb2R5T3ZlcmZsb3cpO1xuICAgICAgc2V0QXJpYUhpZGRlbigpO1xuICAgIH1cblxuICAgIGlmICghaXNUb2FzdCgpICYmICFnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcnVuRGlkT3Blbihwb3B1cCwgcGFyYW1zKTtcbiAgICByZW1vdmVDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzWyduby10cmFuc2l0aW9uJ10pO1xuICB9O1xuXG4gIHZhciBydW5EaWRPcGVuID0gZnVuY3Rpb24gcnVuRGlkT3Blbihwb3B1cCwgcGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuZGlkT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuZGlkT3Blbihwb3B1cCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMub25PcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5vbk9wZW4ocG9wdXApO1xuICAgICAgfSk7IC8vIEBkZXByZWNhdGVkXG4gICAgfVxuICB9O1xuXG4gIHZhciBzd2FsT3BlbkFuaW1hdGlvbkZpbmlzaGVkID0gZnVuY3Rpb24gc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZChldmVudCkge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBwb3B1cCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICBwb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBzd2FsT3BlbkFuaW1hdGlvbkZpbmlzaGVkKTtcbiAgICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICB9O1xuXG4gIHZhciBzZXRTY3JvbGxpbmdWaXNpYmlsaXR5ID0gZnVuY3Rpb24gc2V0U2Nyb2xsaW5nVmlzaWJpbGl0eShjb250YWluZXIsIHBvcHVwKSB7XG4gICAgaWYgKGFuaW1hdGlvbkVuZEV2ZW50ICYmIGhhc0Nzc0FuaW1hdGlvbihwb3B1cCkpIHtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIHN3YWxPcGVuQW5pbWF0aW9uRmluaXNoZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZml4U2Nyb2xsQ29udGFpbmVyID0gZnVuY3Rpb24gZml4U2Nyb2xsQ29udGFpbmVyKGNvbnRhaW5lciwgc2Nyb2xsYmFyUGFkZGluZywgaW5pdGlhbEJvZHlPdmVyZmxvdykge1xuICAgIGlPU2ZpeCgpO1xuICAgIElFZml4KCk7XG5cbiAgICBpZiAoc2Nyb2xsYmFyUGFkZGluZyAmJiBpbml0aWFsQm9keU92ZXJmbG93ICE9PSAnaGlkZGVuJykge1xuICAgICAgZml4U2Nyb2xsYmFyKCk7XG4gICAgfSAvLyBzd2VldGFsZXJ0Mi9pc3N1ZXMvMTI0N1xuXG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBhZGRDbGFzc2VzJDEgPSBmdW5jdGlvbiBhZGRDbGFzc2VzKGNvbnRhaW5lciwgcG9wdXAsIHBhcmFtcykge1xuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgcGFyYW1zLnNob3dDbGFzcy5iYWNrZHJvcCk7IC8vIHRoZSB3b3JrYXJvdW5kIHdpdGggc2V0dGluZy91bnNldHRpbmcgb3BhY2l0eSBpcyBuZWVkZWQgZm9yICMyMDE5IGFuZCAyMDU5XG5cbiAgICBwb3B1cC5zdHlsZS5zZXRQcm9wZXJ0eSgnb3BhY2l0eScsICcwJywgJ2ltcG9ydGFudCcpO1xuICAgIHNob3cocG9wdXApO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQW5pbWF0ZSBwb3B1cCByaWdodCBhZnRlciBzaG93aW5nIGl0XG4gICAgICBhZGRDbGFzcyhwb3B1cCwgcGFyYW1zLnNob3dDbGFzcy5wb3B1cCk7IC8vIGFuZCByZW1vdmUgdGhlIG9wYWNpdHkgd29ya2Fyb3VuZFxuXG4gICAgICBwb3B1cC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3BhY2l0eScpO1xuICAgIH0sIFNIT1dfQ0xBU1NfVElNRU9VVCk7IC8vIDEwbXMgaW4gb3JkZXIgdG8gZml4ICMyMDYyXG5cbiAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXMuc2hvd24pO1xuXG4gICAgaWYgKHBhcmFtcy5oZWlnaHRBdXRvICYmIHBhcmFtcy5iYWNrZHJvcCAmJiAhcGFyYW1zLnRvYXN0KSB7XG4gICAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ2hlaWdodC1hdXRvJ10pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlSW5wdXRPcHRpb25zQW5kVmFsdWUgPSBmdW5jdGlvbiBoYW5kbGVJbnB1dE9wdGlvbnNBbmRWYWx1ZShpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtcy5pbnB1dCA9PT0gJ3NlbGVjdCcgfHwgcGFyYW1zLmlucHV0ID09PSAncmFkaW8nKSB7XG4gICAgICBoYW5kbGVJbnB1dE9wdGlvbnMoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgfSBlbHNlIGlmIChbJ3RleHQnLCAnZW1haWwnLCAnbnVtYmVyJywgJ3RlbCcsICd0ZXh0YXJlYSddLmluZGV4T2YocGFyYW1zLmlucHV0KSAhPT0gLTEgJiYgKGhhc1RvUHJvbWlzZUZuKHBhcmFtcy5pbnB1dFZhbHVlKSB8fCBpc1Byb21pc2UocGFyYW1zLmlucHV0VmFsdWUpKSkge1xuICAgICAgaGFuZGxlSW5wdXRWYWx1ZShpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICB9XG4gIH07XG4gIHZhciBnZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShpbnN0YW5jZSwgaW5uZXJQYXJhbXMpIHtcbiAgICB2YXIgaW5wdXQgPSBpbnN0YW5jZS5nZXRJbnB1dCgpO1xuXG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc3dpdGNoIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICByZXR1cm4gZ2V0Q2hlY2tib3hWYWx1ZShpbnB1dCk7XG5cbiAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgcmV0dXJuIGdldFJhZGlvVmFsdWUoaW5wdXQpO1xuXG4gICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgcmV0dXJuIGdldEZpbGVWYWx1ZShpbnB1dCk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBpbm5lclBhcmFtcy5pbnB1dEF1dG9UcmltID8gaW5wdXQudmFsdWUudHJpbSgpIDogaW5wdXQudmFsdWU7XG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRDaGVja2JveFZhbHVlID0gZnVuY3Rpb24gZ2V0Q2hlY2tib3hWYWx1ZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5jaGVja2VkID8gMSA6IDA7XG4gIH07XG5cbiAgdmFyIGdldFJhZGlvVmFsdWUgPSBmdW5jdGlvbiBnZXRSYWRpb1ZhbHVlKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0LmNoZWNrZWQgPyBpbnB1dC52YWx1ZSA6IG51bGw7XG4gIH07XG5cbiAgdmFyIGdldEZpbGVWYWx1ZSA9IGZ1bmN0aW9uIGdldEZpbGVWYWx1ZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5maWxlcy5sZW5ndGggPyBpbnB1dC5nZXRBdHRyaWJ1dGUoJ211bHRpcGxlJykgIT09IG51bGwgPyBpbnB1dC5maWxlcyA6IGlucHV0LmZpbGVzWzBdIDogbnVsbDtcbiAgfTtcblxuICB2YXIgaGFuZGxlSW5wdXRPcHRpb25zID0gZnVuY3Rpb24gaGFuZGxlSW5wdXRPcHRpb25zKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgY29udGVudCA9IGdldENvbnRlbnQoKTtcblxuICAgIHZhciBwcm9jZXNzSW5wdXRPcHRpb25zID0gZnVuY3Rpb24gcHJvY2Vzc0lucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBwb3B1bGF0ZUlucHV0T3B0aW9uc1twYXJhbXMuaW5wdXRdKGNvbnRlbnQsIGZvcm1hdElucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpLCBwYXJhbXMpO1xuICAgIH07XG5cbiAgICBpZiAoaGFzVG9Qcm9taXNlRm4ocGFyYW1zLmlucHV0T3B0aW9ucykgfHwgaXNQcm9taXNlKHBhcmFtcy5pbnB1dE9wdGlvbnMpKSB7XG4gICAgICBzaG93TG9hZGluZyhnZXRDb25maXJtQnV0dG9uKCkpO1xuICAgICAgYXNQcm9taXNlKHBhcmFtcy5pbnB1dE9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGlucHV0T3B0aW9ucykge1xuICAgICAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpO1xuICAgICAgICBwcm9jZXNzSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKF90eXBlb2YocGFyYW1zLmlucHV0T3B0aW9ucykgPT09ICdvYmplY3QnKSB7XG4gICAgICBwcm9jZXNzSW5wdXRPcHRpb25zKHBhcmFtcy5pbnB1dE9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dE9wdGlvbnMhIEV4cGVjdGVkIG9iamVjdCwgTWFwIG9yIFByb21pc2UsIGdvdCBcIi5jb25jYXQoX3R5cGVvZihwYXJhbXMuaW5wdXRPcHRpb25zKSkpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlSW5wdXRWYWx1ZSA9IGZ1bmN0aW9uIGhhbmRsZUlucHV0VmFsdWUoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBpbnB1dCA9IGluc3RhbmNlLmdldElucHV0KCk7XG4gICAgaGlkZShpbnB1dCk7XG4gICAgYXNQcm9taXNlKHBhcmFtcy5pbnB1dFZhbHVlKS50aGVuKGZ1bmN0aW9uIChpbnB1dFZhbHVlKSB7XG4gICAgICBpbnB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dCA9PT0gJ251bWJlcicgPyBwYXJzZUZsb2F0KGlucHV0VmFsdWUpIHx8IDAgOiBcIlwiLmNvbmNhdChpbnB1dFZhbHVlKTtcbiAgICAgIHNob3coaW5wdXQpO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBlcnJvcihcIkVycm9yIGluIGlucHV0VmFsdWUgcHJvbWlzZTogXCIuY29uY2F0KGVycikpO1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIHNob3coaW5wdXQpO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHBvcHVsYXRlSW5wdXRPcHRpb25zID0ge1xuICAgIHNlbGVjdDogZnVuY3Rpb24gc2VsZWN0KGNvbnRlbnQsIGlucHV0T3B0aW9ucywgcGFyYW1zKSB7XG4gICAgICB2YXIgc2VsZWN0ID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLnNlbGVjdCk7XG5cbiAgICAgIHZhciByZW5kZXJPcHRpb24gPSBmdW5jdGlvbiByZW5kZXJPcHRpb24ocGFyZW50LCBvcHRpb25MYWJlbCwgb3B0aW9uVmFsdWUpIHtcbiAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgc2V0SW5uZXJIdG1sKG9wdGlvbiwgb3B0aW9uTGFiZWwpO1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBpc1NlbGVjdGVkKG9wdGlvblZhbHVlLCBwYXJhbXMuaW5wdXRWYWx1ZSk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfTtcblxuICAgICAgaW5wdXRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGlucHV0T3B0aW9uKSB7XG4gICAgICAgIHZhciBvcHRpb25WYWx1ZSA9IGlucHV0T3B0aW9uWzBdO1xuICAgICAgICB2YXIgb3B0aW9uTGFiZWwgPSBpbnB1dE9wdGlvblsxXTsgLy8gPG9wdGdyb3VwPiBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDQwMS9pbnRlcmFjdC9mb3Jtcy5odG1sI2gtMTcuNlxuICAgICAgICAvLyBcIi4uLmFsbCBPUFRHUk9VUCBlbGVtZW50cyBtdXN0IGJlIHNwZWNpZmllZCBkaXJlY3RseSB3aXRoaW4gYSBTRUxFQ1QgZWxlbWVudCAoaS5lLiwgZ3JvdXBzIG1heSBub3QgYmUgbmVzdGVkKS4uLlwiXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhpcyBpcyBhIDxvcHRncm91cD5cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25MYWJlbCkpIHtcbiAgICAgICAgICAvLyBpZiBpdCBpcyBhbiBhcnJheSwgdGhlbiBpdCBpcyBhbiA8b3B0Z3JvdXA+XG4gICAgICAgICAgdmFyIG9wdGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnKTtcbiAgICAgICAgICBvcHRncm91cC5sYWJlbCA9IG9wdGlvblZhbHVlO1xuICAgICAgICAgIG9wdGdyb3VwLmRpc2FibGVkID0gZmFsc2U7IC8vIG5vdCBjb25maWd1cmFibGUgZm9yIG5vd1xuXG4gICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGdyb3VwKTtcbiAgICAgICAgICBvcHRpb25MYWJlbC5mb3JFYWNoKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyT3B0aW9uKG9wdGdyb3VwLCBvWzFdLCBvWzBdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjYXNlIG9mIDxvcHRpb24+XG4gICAgICAgICAgcmVuZGVyT3B0aW9uKHNlbGVjdCwgb3B0aW9uTGFiZWwsIG9wdGlvblZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZWxlY3QuZm9jdXMoKTtcbiAgICB9LFxuICAgIHJhZGlvOiBmdW5jdGlvbiByYWRpbyhjb250ZW50LCBpbnB1dE9wdGlvbnMsIHBhcmFtcykge1xuICAgICAgdmFyIHJhZGlvID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLnJhZGlvKTtcbiAgICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dE9wdGlvbikge1xuICAgICAgICB2YXIgcmFkaW9WYWx1ZSA9IGlucHV0T3B0aW9uWzBdO1xuICAgICAgICB2YXIgcmFkaW9MYWJlbCA9IGlucHV0T3B0aW9uWzFdO1xuICAgICAgICB2YXIgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHZhciByYWRpb0xhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHJhZGlvSW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgICAgIHJhZGlvSW5wdXQubmFtZSA9IHN3YWxDbGFzc2VzLnJhZGlvO1xuICAgICAgICByYWRpb0lucHV0LnZhbHVlID0gcmFkaW9WYWx1ZTtcblxuICAgICAgICBpZiAoaXNTZWxlY3RlZChyYWRpb1ZhbHVlLCBwYXJhbXMuaW5wdXRWYWx1ZSkpIHtcbiAgICAgICAgICByYWRpb0lucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzZXRJbm5lckh0bWwobGFiZWwsIHJhZGlvTGFiZWwpO1xuICAgICAgICBsYWJlbC5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5sYWJlbDtcbiAgICAgICAgcmFkaW9MYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQocmFkaW9JbnB1dCk7XG4gICAgICAgIHJhZGlvTGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgcmFkaW8uYXBwZW5kQ2hpbGQocmFkaW9MYWJlbEVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgICB2YXIgcmFkaW9zID0gcmFkaW8ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblxuICAgICAgaWYgKHJhZGlvcy5sZW5ndGgpIHtcbiAgICAgICAgcmFkaW9zWzBdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogQ29udmVydHMgYGlucHV0T3B0aW9uc2AgaW50byBhbiBhcnJheSBvZiBgW3ZhbHVlLCBsYWJlbF1gc1xuICAgKiBAcGFyYW0gaW5wdXRPcHRpb25zXG4gICAqL1xuXG4gIHZhciBmb3JtYXRJbnB1dE9wdGlvbnMgPSBmdW5jdGlvbiBmb3JtYXRJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnICYmIGlucHV0T3B0aW9ucyBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgaW5wdXRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlRm9ybWF0dGVkID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKF90eXBlb2YodmFsdWVGb3JtYXR0ZWQpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIGNhc2Ugb2YgPG9wdGdyb3VwPlxuICAgICAgICAgIHZhbHVlRm9ybWF0dGVkID0gZm9ybWF0SW5wdXRPcHRpb25zKHZhbHVlRm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5wdXNoKFtrZXksIHZhbHVlRm9ybWF0dGVkXSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmtleXMoaW5wdXRPcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlRm9ybWF0dGVkID0gaW5wdXRPcHRpb25zW2tleV07XG5cbiAgICAgICAgaWYgKF90eXBlb2YodmFsdWVGb3JtYXR0ZWQpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIGNhc2Ugb2YgPG9wdGdyb3VwPlxuICAgICAgICAgIHZhbHVlRm9ybWF0dGVkID0gZm9ybWF0SW5wdXRPcHRpb25zKHZhbHVlRm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5wdXNoKFtrZXksIHZhbHVlRm9ybWF0dGVkXSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBpc1NlbGVjdGVkID0gZnVuY3Rpb24gaXNTZWxlY3RlZChvcHRpb25WYWx1ZSwgaW5wdXRWYWx1ZSkge1xuICAgIHJldHVybiBpbnB1dFZhbHVlICYmIGlucHV0VmFsdWUudG9TdHJpbmcoKSA9PT0gb3B0aW9uVmFsdWUudG9TdHJpbmcoKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlQ29uZmlybUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ29uZmlybUJ1dHRvbkNsaWNrKGluc3RhbmNlLCBpbm5lclBhcmFtcykge1xuICAgIGluc3RhbmNlLmRpc2FibGVCdXR0b25zKCk7XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXQpIHtcbiAgICAgIGhhbmRsZUNvbmZpcm1PckRlbnlXaXRoSW5wdXQoaW5zdGFuY2UsIGlubmVyUGFyYW1zLCAnY29uZmlybScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maXJtKGluc3RhbmNlLCBpbm5lclBhcmFtcywgdHJ1ZSk7XG4gICAgfVxuICB9O1xuICB2YXIgaGFuZGxlRGVueUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gaGFuZGxlRGVueUJ1dHRvbkNsaWNrKGluc3RhbmNlLCBpbm5lclBhcmFtcykge1xuICAgIGluc3RhbmNlLmRpc2FibGVCdXR0b25zKCk7XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMucmV0dXJuSW5wdXRWYWx1ZU9uRGVueSkge1xuICAgICAgaGFuZGxlQ29uZmlybU9yRGVueVdpdGhJbnB1dChpbnN0YW5jZSwgaW5uZXJQYXJhbXMsICdkZW55Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbnkoaW5zdGFuY2UsIGlubmVyUGFyYW1zLCBmYWxzZSk7XG4gICAgfVxuICB9O1xuICB2YXIgaGFuZGxlQ2FuY2VsQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVDYW5jZWxCdXR0b25DbGljayhpbnN0YW5jZSwgZGlzbWlzc1dpdGgpIHtcbiAgICBpbnN0YW5jZS5kaXNhYmxlQnV0dG9ucygpO1xuICAgIGRpc21pc3NXaXRoKERpc21pc3NSZWFzb24uY2FuY2VsKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlQ29uZmlybU9yRGVueVdpdGhJbnB1dCA9IGZ1bmN0aW9uIGhhbmRsZUNvbmZpcm1PckRlbnlXaXRoSW5wdXQoaW5zdGFuY2UsIGlubmVyUGFyYW1zLCB0eXBlXG4gIC8qIHR5cGUgaXMgZWl0aGVyICdjb25maXJtJyBvciAnZGVueScgKi9cbiAgKSB7XG4gICAgdmFyIGlucHV0VmFsdWUgPSBnZXRJbnB1dFZhbHVlKGluc3RhbmNlLCBpbm5lclBhcmFtcyk7XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXRWYWxpZGF0b3IpIHtcbiAgICAgIGhhbmRsZUlucHV0VmFsaWRhdG9yKGluc3RhbmNlLCBpbm5lclBhcmFtcywgaW5wdXRWYWx1ZSk7XG4gICAgfSBlbHNlIGlmICghaW5zdGFuY2UuZ2V0SW5wdXQoKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIGluc3RhbmNlLmVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIGluc3RhbmNlLnNob3dWYWxpZGF0aW9uTWVzc2FnZShpbm5lclBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGVueScpIHtcbiAgICAgIGRlbnkoaW5zdGFuY2UsIGlubmVyUGFyYW1zLCBpbnB1dFZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlybShpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIGlucHV0VmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlSW5wdXRWYWxpZGF0b3IgPSBmdW5jdGlvbiBoYW5kbGVJbnB1dFZhbGlkYXRvcihpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIGlucHV0VmFsdWUpIHtcbiAgICBpbnN0YW5jZS5kaXNhYmxlSW5wdXQoKTtcbiAgICB2YXIgdmFsaWRhdGlvblByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhc1Byb21pc2UoaW5uZXJQYXJhbXMuaW5wdXRWYWxpZGF0b3IoaW5wdXRWYWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKTtcbiAgICB9KTtcbiAgICB2YWxpZGF0aW9uUHJvbWlzZS50aGVuKGZ1bmN0aW9uICh2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgaW5zdGFuY2UuZW5hYmxlQnV0dG9ucygpO1xuICAgICAgaW5zdGFuY2UuZW5hYmxlSW5wdXQoKTtcblxuICAgICAgaWYgKHZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICAgIGluc3RhbmNlLnNob3dWYWxpZGF0aW9uTWVzc2FnZSh2YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maXJtKGluc3RhbmNlLCBpbm5lclBhcmFtcywgaW5wdXRWYWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGRlbnkgPSBmdW5jdGlvbiBkZW55KGluc3RhbmNlLCBpbm5lclBhcmFtcywgdmFsdWUpIHtcbiAgICBpZiAoaW5uZXJQYXJhbXMuc2hvd0xvYWRlck9uRGVueSkge1xuICAgICAgc2hvd0xvYWRpbmcoZ2V0RGVueUJ1dHRvbigpKTtcbiAgICB9XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMucHJlRGVueSkge1xuICAgICAgdmFyIHByZURlbnlQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhc1Byb21pc2UoaW5uZXJQYXJhbXMucHJlRGVueSh2YWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKTtcbiAgICAgIH0pO1xuICAgICAgcHJlRGVueVByb21pc2UudGhlbihmdW5jdGlvbiAocHJlRGVueVZhbHVlKSB7XG4gICAgICAgIGlmIChwcmVEZW55VmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnN0YW5jZS5jbG9zZVBvcHVwKHtcbiAgICAgICAgICAgIGlzRGVuaWVkOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IHR5cGVvZiBwcmVEZW55VmFsdWUgPT09ICd1bmRlZmluZWQnID8gdmFsdWUgOiBwcmVEZW55VmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlLmNsb3NlUG9wdXAoe1xuICAgICAgICBpc0RlbmllZDogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHN1Y2NlZWRXaXRoID0gZnVuY3Rpb24gc3VjY2VlZFdpdGgoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgaW5zdGFuY2UuY2xvc2VQb3B1cCh7XG4gICAgICBpc0NvbmZpcm1lZDogdHJ1ZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBjb25maXJtID0gZnVuY3Rpb24gY29uZmlybShpbnN0YW5jZSwgaW5uZXJQYXJhbXMsIHZhbHVlKSB7XG4gICAgaWYgKGlubmVyUGFyYW1zLnNob3dMb2FkZXJPbkNvbmZpcm0pIHtcbiAgICAgIHNob3dMb2FkaW5nKCk7IC8vIFRPRE86IG1ha2Ugc2hvd0xvYWRpbmcgYW4gKmluc3RhbmNlKiBtZXRob2RcbiAgICB9XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMucHJlQ29uZmlybSkge1xuICAgICAgaW5zdGFuY2UucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuICAgICAgdmFyIHByZUNvbmZpcm1Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhc1Byb21pc2UoaW5uZXJQYXJhbXMucHJlQ29uZmlybSh2YWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKTtcbiAgICAgIH0pO1xuICAgICAgcHJlQ29uZmlybVByb21pc2UudGhlbihmdW5jdGlvbiAocHJlQ29uZmlybVZhbHVlKSB7XG4gICAgICAgIGlmIChpc1Zpc2libGUoZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSkgfHwgcHJlQ29uZmlybVZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3VjY2VlZFdpdGgoaW5zdGFuY2UsIHR5cGVvZiBwcmVDb25maXJtVmFsdWUgPT09ICd1bmRlZmluZWQnID8gdmFsdWUgOiBwcmVDb25maXJtVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VjY2VlZFdpdGgoaW5zdGFuY2UsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGFkZEtleWRvd25IYW5kbGVyID0gZnVuY3Rpb24gYWRkS2V5ZG93bkhhbmRsZXIoaW5zdGFuY2UsIGdsb2JhbFN0YXRlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpIHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldCAmJiBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkKSB7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciwge1xuICAgICAgICBjYXB0dXJlOiBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgICB9KTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBrZXlkb3duSGFuZGxlcihpbnN0YW5jZSwgZSwgZGlzbWlzc1dpdGgpO1xuICAgICAgfTtcblxuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldCA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPyB3aW5kb3cgOiBnZXRQb3B1cCgpO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmU7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciwge1xuICAgICAgICBjYXB0dXJlOiBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgICB9KTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQgPSB0cnVlO1xuICAgIH1cbiAgfTsgLy8gRm9jdXMgaGFuZGxpbmdcblxuICB2YXIgc2V0Rm9jdXMgPSBmdW5jdGlvbiBzZXRGb2N1cyhpbm5lclBhcmFtcywgaW5kZXgsIGluY3JlbWVudCkge1xuICAgIHZhciBmb2N1c2FibGVFbGVtZW50cyA9IGdldEZvY3VzYWJsZUVsZW1lbnRzKCk7IC8vIHNlYXJjaCBmb3IgdmlzaWJsZSBlbGVtZW50cyBhbmQgc2VsZWN0IHRoZSBuZXh0IHBvc3NpYmxlIG1hdGNoXG5cbiAgICBpZiAoZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICBpbmRleCA9IGluZGV4ICsgaW5jcmVtZW50OyAvLyByb2xsb3ZlciB0byBmaXJzdCBpdGVtXG5cbiAgICAgIGlmIChpbmRleCA9PT0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGluZGV4ID0gMDsgLy8gZ28gdG8gbGFzdCBpdGVtXG4gICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpbmRleCA9IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb2N1c2FibGVFbGVtZW50c1tpbmRleF0uZm9jdXMoKTtcbiAgICB9IC8vIG5vIHZpc2libGUgZm9jdXNhYmxlIGVsZW1lbnRzLCBmb2N1cyB0aGUgcG9wdXBcblxuXG4gICAgZ2V0UG9wdXAoKS5mb2N1cygpO1xuICB9O1xuICB2YXIgYXJyb3dLZXlzTmV4dEJ1dHRvbiA9IFsnQXJyb3dSaWdodCcsICdBcnJvd0Rvd24nLCAnUmlnaHQnLCAnRG93bicgLy8gSUUxMVxuICBdO1xuICB2YXIgYXJyb3dLZXlzUHJldmlvdXNCdXR0b24gPSBbJ0Fycm93TGVmdCcsICdBcnJvd1VwJywgJ0xlZnQnLCAnVXAnIC8vIElFMTFcbiAgXTtcbiAgdmFyIGVzY0tleXMgPSBbJ0VzY2FwZScsICdFc2MnIC8vIElFMTFcbiAgXTtcblxuICB2YXIga2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiBrZXlkb3duSGFuZGxlcihpbnN0YW5jZSwgZSwgZGlzbWlzc1dpdGgpIHtcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcblxuICAgIGlmICghaW5uZXJQYXJhbXMpIHtcbiAgICAgIHJldHVybjsgLy8gVGhpcyBpbnN0YW5jZSBoYXMgYWxyZWFkeSBiZWVuIGRlc3Ryb3llZFxuICAgIH1cblxuICAgIGlmIChpbm5lclBhcmFtcy5zdG9wS2V5ZG93blByb3BhZ2F0aW9uKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0gLy8gRU5URVJcblxuXG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBoYW5kbGVFbnRlcihpbnN0YW5jZSwgZSwgaW5uZXJQYXJhbXMpOyAvLyBUQUJcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnVGFiJykge1xuICAgICAgaGFuZGxlVGFiKGUsIGlubmVyUGFyYW1zKTsgLy8gQVJST1dTIC0gc3dpdGNoIGZvY3VzIGJldHdlZW4gYnV0dG9uc1xuICAgIH0gZWxzZSBpZiAoW10uY29uY2F0KGFycm93S2V5c05leHRCdXR0b24sIGFycm93S2V5c1ByZXZpb3VzQnV0dG9uKS5pbmRleE9mKGUua2V5KSAhPT0gLTEpIHtcbiAgICAgIGhhbmRsZUFycm93cyhlLmtleSk7IC8vIEVTQ1xuICAgIH0gZWxzZSBpZiAoZXNjS2V5cy5pbmRleE9mKGUua2V5KSAhPT0gLTEpIHtcbiAgICAgIGhhbmRsZUVzYyhlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlRW50ZXIgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcihpbnN0YW5jZSwgZSwgaW5uZXJQYXJhbXMpIHtcbiAgICAvLyAjNzIwICM3MjFcbiAgICBpZiAoZS5pc0NvbXBvc2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldCAmJiBpbnN0YW5jZS5nZXRJbnB1dCgpICYmIGUudGFyZ2V0Lm91dGVySFRNTCA9PT0gaW5zdGFuY2UuZ2V0SW5wdXQoKS5vdXRlckhUTUwpIHtcbiAgICAgIGlmIChbJ3RleHRhcmVhJywgJ2ZpbGUnXS5pbmRleE9mKGlubmVyUGFyYW1zLmlucHV0KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuOyAvLyBkbyBub3Qgc3VibWl0XG4gICAgICB9XG5cbiAgICAgIGNsaWNrQ29uZmlybSgpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlVGFiID0gZnVuY3Rpb24gaGFuZGxlVGFiKGUsIGlubmVyUGFyYW1zKSB7XG4gICAgdmFyIHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cygpO1xuICAgIHZhciBidG5JbmRleCA9IC0xO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRhcmdldEVsZW1lbnQgPT09IGZvY3VzYWJsZUVsZW1lbnRzW2ldKSB7XG4gICAgICAgIGJ0bkluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFlLnNoaWZ0S2V5KSB7XG4gICAgICAvLyBDeWNsZSB0byB0aGUgbmV4dCBidXR0b25cbiAgICAgIHNldEZvY3VzKGlubmVyUGFyYW1zLCBidG5JbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEN5Y2xlIHRvIHRoZSBwcmV2IGJ1dHRvblxuICAgICAgc2V0Rm9jdXMoaW5uZXJQYXJhbXMsIGJ0bkluZGV4LCAtMSk7XG4gICAgfVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUFycm93cyA9IGZ1bmN0aW9uIGhhbmRsZUFycm93cyhrZXkpIHtcbiAgICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgICB2YXIgZGVueUJ1dHRvbiA9IGdldERlbnlCdXR0b24oKTtcbiAgICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7XG5cbiAgICBpZiAoIShbY29uZmlybUJ1dHRvbiwgZGVueUJ1dHRvbiwgY2FuY2VsQnV0dG9uXS5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpICE9PSAtMSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2libGluZyA9IGFycm93S2V5c05leHRCdXR0b24uaW5kZXhPZihrZXkpICE9PSAtMSA/ICduZXh0RWxlbWVudFNpYmxpbmcnIDogJ3ByZXZpb3VzRWxlbWVudFNpYmxpbmcnO1xuICAgIHZhciBidXR0b25Ub0ZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFtzaWJsaW5nXTtcblxuICAgIGlmIChidXR0b25Ub0ZvY3VzKSB7XG4gICAgICBidXR0b25Ub0ZvY3VzLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVFc2MgPSBmdW5jdGlvbiBoYW5kbGVFc2MoZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKSB7XG4gICAgaWYgKGNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93RXNjYXBlS2V5KSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5lc2MpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlUG9wdXBDbGljayA9IGZ1bmN0aW9uIGhhbmRsZVBvcHVwQ2xpY2soaW5zdGFuY2UsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCkge1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuXG4gICAgaWYgKGlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgICBoYW5kbGVUb2FzdENsaWNrKGluc3RhbmNlLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZ25vcmUgY2xpY2sgZXZlbnRzIHRoYXQgaGFkIG1vdXNlZG93biBvbiB0aGUgcG9wdXAgYnV0IG1vdXNldXAgb24gdGhlIGNvbnRhaW5lclxuICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIHdoZW4gdGhlIHVzZXIgZHJhZ3MgYSBzbGlkZXJcbiAgICAgIGhhbmRsZU1vZGFsTW91c2Vkb3duKGRvbUNhY2hlKTsgLy8gSWdub3JlIGNsaWNrIGV2ZW50cyB0aGF0IGhhZCBtb3VzZWRvd24gb24gdGhlIGNvbnRhaW5lciBidXQgbW91c2V1cCBvbiB0aGUgcG9wdXBcblxuICAgICAgaGFuZGxlQ29udGFpbmVyTW91c2Vkb3duKGRvbUNhY2hlKTtcbiAgICAgIGhhbmRsZU1vZGFsQ2xpY2soaW5zdGFuY2UsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVUb2FzdENsaWNrID0gZnVuY3Rpb24gaGFuZGxlVG9hc3RDbGljayhpbnN0YW5jZSwgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKSB7XG4gICAgLy8gQ2xvc2luZyB0b2FzdCBieSBpbnRlcm5hbCBjbGlja1xuICAgIGRvbUNhY2hlLnBvcHVwLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcblxuICAgICAgaWYgKGlubmVyUGFyYW1zLnNob3dDb25maXJtQnV0dG9uIHx8IGlubmVyUGFyYW1zLnNob3dEZW55QnV0dG9uIHx8IGlubmVyUGFyYW1zLnNob3dDYW5jZWxCdXR0b24gfHwgaW5uZXJQYXJhbXMuc2hvd0Nsb3NlQnV0dG9uIHx8IGlubmVyUGFyYW1zLnRpbWVyIHx8IGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2U7XG5cbiAgdmFyIGhhbmRsZU1vZGFsTW91c2Vkb3duID0gZnVuY3Rpb24gaGFuZGxlTW9kYWxNb3VzZWRvd24oZG9tQ2FjaGUpIHtcbiAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBkb21DYWNoZS5jb250YWluZXIub25tb3VzZXVwID0gdW5kZWZpbmVkOyAvLyBXZSBvbmx5IGNoZWNrIGlmIHRoZSBtb3VzZXVwIHRhcmdldCBpcyB0aGUgY29udGFpbmVyIGJlY2F1c2UgdXN1YWxseSBpdCBkb2Vzbid0XG4gICAgICAgIC8vIGhhdmUgYW55IG90aGVyIGRpcmVjdCBjaGlsZHJlbiBhc2lkZSBvZiB0aGUgcG9wdXBcblxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLmNvbnRhaW5lcikge1xuICAgICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaGFuZGxlQ29udGFpbmVyTW91c2Vkb3duID0gZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyTW91c2Vkb3duKGRvbUNhY2hlKSB7XG4gICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9tQ2FjaGUucG9wdXAub25tb3VzZXVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZG9tQ2FjaGUucG9wdXAub25tb3VzZXVwID0gdW5kZWZpbmVkOyAvLyBXZSBhbHNvIG5lZWQgdG8gY2hlY2sgaWYgdGhlIG1vdXNldXAgdGFyZ2V0IGlzIGEgY2hpbGQgb2YgdGhlIHBvcHVwXG5cbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb21DYWNoZS5wb3B1cCB8fCBkb21DYWNoZS5wb3B1cC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICBpZ25vcmVPdXRzaWRlQ2xpY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGhhbmRsZU1vZGFsQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVNb2RhbENsaWNrKGluc3RhbmNlLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpIHtcbiAgICBkb21DYWNoZS5jb250YWluZXIub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcblxuICAgICAgaWYgKGlnbm9yZU91dHNpZGVDbGljaykge1xuICAgICAgICBpZ25vcmVPdXRzaWRlQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLmNvbnRhaW5lciAmJiBjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd091dHNpZGVDbGljaykpIHtcbiAgICAgICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5iYWNrZHJvcCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBfbWFpbih1c2VyUGFyYW1zKSB7XG4gICAgdmFyIG1peGluUGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBzaG93V2FybmluZ3NGb3JQYXJhbXMoX2V4dGVuZHMoe30sIG1peGluUGFyYW1zLCB1c2VyUGFyYW1zKSk7XG5cbiAgICBpZiAoZ2xvYmFsU3RhdGUuY3VycmVudEluc3RhbmNlKSB7XG4gICAgICBnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UuX2Rlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UgPSB0aGlzO1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByZXBhcmVQYXJhbXModXNlclBhcmFtcywgbWl4aW5QYXJhbXMpO1xuICAgIHNldFBhcmFtZXRlcnMoaW5uZXJQYXJhbXMpO1xuICAgIE9iamVjdC5mcmVlemUoaW5uZXJQYXJhbXMpOyAvLyBjbGVhciB0aGUgcHJldmlvdXMgdGltZXJcblxuICAgIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgICBnbG9iYWxTdGF0ZS50aW1lb3V0LnN0b3AoKTtcbiAgICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS50aW1lb3V0O1xuICAgIH0gLy8gY2xlYXIgdGhlIHJlc3RvcmUgZm9jdXMgdGltZW91dFxuXG5cbiAgICBjbGVhclRpbWVvdXQoZ2xvYmFsU3RhdGUucmVzdG9yZUZvY3VzVGltZW91dCk7XG4gICAgdmFyIGRvbUNhY2hlID0gcG9wdWxhdGVEb21DYWNoZSh0aGlzKTtcbiAgICByZW5kZXIodGhpcywgaW5uZXJQYXJhbXMpO1xuICAgIHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5zZXQodGhpcywgaW5uZXJQYXJhbXMpO1xuICAgIHJldHVybiBzd2FsUHJvbWlzZSh0aGlzLCBkb21DYWNoZSwgaW5uZXJQYXJhbXMpO1xuICB9XG5cbiAgdmFyIHByZXBhcmVQYXJhbXMgPSBmdW5jdGlvbiBwcmVwYXJlUGFyYW1zKHVzZXJQYXJhbXMsIG1peGluUGFyYW1zKSB7XG4gICAgdmFyIHRlbXBsYXRlUGFyYW1zID0gZ2V0VGVtcGxhdGVQYXJhbXModXNlclBhcmFtcyk7XG5cbiAgICB2YXIgcGFyYW1zID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQYXJhbXMsIG1peGluUGFyYW1zLCB0ZW1wbGF0ZVBhcmFtcywgdXNlclBhcmFtcyk7IC8vIHByZWNlZGVuY2UgaXMgZGVzY3JpYmVkIGluICMyMTMxXG5cblxuICAgIHBhcmFtcy5zaG93Q2xhc3MgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFBhcmFtcy5zaG93Q2xhc3MsIHBhcmFtcy5zaG93Q2xhc3MpO1xuICAgIHBhcmFtcy5oaWRlQ2xhc3MgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFBhcmFtcy5oaWRlQ2xhc3MsIHBhcmFtcy5oaWRlQ2xhc3MpOyAvLyBAZGVwcmVjYXRlZFxuXG4gICAgaWYgKHVzZXJQYXJhbXMuYW5pbWF0aW9uID09PSBmYWxzZSkge1xuICAgICAgcGFyYW1zLnNob3dDbGFzcyA9IHtcbiAgICAgICAgcG9wdXA6ICdzd2FsMi1ub2FuaW1hdGlvbicsXG4gICAgICAgIGJhY2tkcm9wOiAnc3dhbDItbm9hbmltYXRpb24nXG4gICAgICB9O1xuICAgICAgcGFyYW1zLmhpZGVDbGFzcyA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH07XG5cbiAgdmFyIHN3YWxQcm9taXNlID0gZnVuY3Rpb24gc3dhbFByb21pc2UoaW5zdGFuY2UsIGRvbUNhY2hlLCBpbm5lclBhcmFtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgLy8gZnVuY3Rpb25zIHRvIGhhbmRsZSBhbGwgY2xvc2luZ3MvZGlzbWlzc2Fsc1xuICAgICAgdmFyIGRpc21pc3NXaXRoID0gZnVuY3Rpb24gZGlzbWlzc1dpdGgoZGlzbWlzcykge1xuICAgICAgICBpbnN0YW5jZS5jbG9zZVBvcHVwKHtcbiAgICAgICAgICBpc0Rpc21pc3NlZDogdHJ1ZSxcbiAgICAgICAgICBkaXNtaXNzOiBkaXNtaXNzXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcHJpdmF0ZU1ldGhvZHMuc3dhbFByb21pc2VSZXNvbHZlLnNldChpbnN0YW5jZSwgcmVzb2x2ZSk7XG5cbiAgICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUNvbmZpcm1CdXR0b25DbGljayhpbnN0YW5jZSwgaW5uZXJQYXJhbXMpO1xuICAgICAgfTtcblxuICAgICAgZG9tQ2FjaGUuZGVueUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlRGVueUJ1dHRvbkNsaWNrKGluc3RhbmNlLCBpbm5lclBhcmFtcyk7XG4gICAgICB9O1xuXG4gICAgICBkb21DYWNoZS5jYW5jZWxCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUNhbmNlbEJ1dHRvbkNsaWNrKGluc3RhbmNlLCBkaXNtaXNzV2l0aCk7XG4gICAgICB9O1xuXG4gICAgICBkb21DYWNoZS5jbG9zZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gICAgICB9O1xuXG4gICAgICBoYW5kbGVQb3B1cENsaWNrKGluc3RhbmNlLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpO1xuICAgICAgYWRkS2V5ZG93bkhhbmRsZXIoaW5zdGFuY2UsIGdsb2JhbFN0YXRlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpO1xuICAgICAgaGFuZGxlSW5wdXRPcHRpb25zQW5kVmFsdWUoaW5zdGFuY2UsIGlubmVyUGFyYW1zKTtcbiAgICAgIG9wZW5Qb3B1cChpbm5lclBhcmFtcyk7XG4gICAgICBzZXR1cFRpbWVyKGdsb2JhbFN0YXRlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpO1xuICAgICAgaW5pdEZvY3VzKGRvbUNhY2hlLCBpbm5lclBhcmFtcyk7IC8vIFNjcm9sbCBjb250YWluZXIgdG8gdG9wIG9uIG9wZW4gKCMxMjQ3LCAjMTk0NilcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHBvcHVsYXRlRG9tQ2FjaGUgPSBmdW5jdGlvbiBwb3B1bGF0ZURvbUNhY2hlKGluc3RhbmNlKSB7XG4gICAgdmFyIGRvbUNhY2hlID0ge1xuICAgICAgcG9wdXA6IGdldFBvcHVwKCksXG4gICAgICBjb250YWluZXI6IGdldENvbnRhaW5lcigpLFxuICAgICAgY29udGVudDogZ2V0Q29udGVudCgpLFxuICAgICAgYWN0aW9uczogZ2V0QWN0aW9ucygpLFxuICAgICAgY29uZmlybUJ1dHRvbjogZ2V0Q29uZmlybUJ1dHRvbigpLFxuICAgICAgZGVueUJ1dHRvbjogZ2V0RGVueUJ1dHRvbigpLFxuICAgICAgY2FuY2VsQnV0dG9uOiBnZXRDYW5jZWxCdXR0b24oKSxcbiAgICAgIGxvYWRlcjogZ2V0TG9hZGVyKCksXG4gICAgICBjbG9zZUJ1dHRvbjogZ2V0Q2xvc2VCdXR0b24oKSxcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlOiBnZXRWYWxpZGF0aW9uTWVzc2FnZSgpLFxuICAgICAgcHJvZ3Jlc3NTdGVwczogZ2V0UHJvZ3Jlc3NTdGVwcygpXG4gICAgfTtcbiAgICBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuc2V0KGluc3RhbmNlLCBkb21DYWNoZSk7XG4gICAgcmV0dXJuIGRvbUNhY2hlO1xuICB9O1xuXG4gIHZhciBzZXR1cFRpbWVyID0gZnVuY3Rpb24gc2V0dXBUaW1lcihnbG9iYWxTdGF0ZSQkMSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKSB7XG4gICAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXIgPSBnZXRUaW1lclByb2dyZXNzQmFyKCk7XG4gICAgaGlkZSh0aW1lclByb2dyZXNzQmFyKTtcblxuICAgIGlmIChpbm5lclBhcmFtcy50aW1lcikge1xuICAgICAgZ2xvYmFsU3RhdGUkJDEudGltZW91dCA9IG5ldyBUaW1lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc21pc3NXaXRoKCd0aW1lcicpO1xuICAgICAgICBkZWxldGUgZ2xvYmFsU3RhdGUkJDEudGltZW91dDtcbiAgICAgIH0sIGlubmVyUGFyYW1zLnRpbWVyKTtcblxuICAgICAgaWYgKGlubmVyUGFyYW1zLnRpbWVyUHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgc2hvdyh0aW1lclByb2dyZXNzQmFyKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGdsb2JhbFN0YXRlJCQxLnRpbWVvdXQgJiYgZ2xvYmFsU3RhdGUkJDEudGltZW91dC5ydW5uaW5nKSB7XG4gICAgICAgICAgICAvLyB0aW1lciBjYW4gYmUgYWxyZWFkeSBzdG9wcGVkIG9yIHVuc2V0IGF0IHRoaXMgcG9pbnRcbiAgICAgICAgICAgIGFuaW1hdGVUaW1lclByb2dyZXNzQmFyKGlubmVyUGFyYW1zLnRpbWVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgaW5pdEZvY3VzID0gZnVuY3Rpb24gaW5pdEZvY3VzKGRvbUNhY2hlLCBpbm5lclBhcmFtcykge1xuICAgIGlmIChpbm5lclBhcmFtcy50b2FzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dFbnRlcktleSkpIHtcbiAgICAgIHJldHVybiBibHVyQWN0aXZlRWxlbWVudCgpO1xuICAgIH1cblxuICAgIGlmICghZm9jdXNCdXR0b24oZG9tQ2FjaGUsIGlubmVyUGFyYW1zKSkge1xuICAgICAgc2V0Rm9jdXMoaW5uZXJQYXJhbXMsIC0xLCAxKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGZvY3VzQnV0dG9uID0gZnVuY3Rpb24gZm9jdXNCdXR0b24oZG9tQ2FjaGUsIGlubmVyUGFyYW1zKSB7XG4gICAgaWYgKGlubmVyUGFyYW1zLmZvY3VzRGVueSAmJiBpc1Zpc2libGUoZG9tQ2FjaGUuZGVueUJ1dHRvbikpIHtcbiAgICAgIGRvbUNhY2hlLmRlbnlCdXR0b24uZm9jdXMoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpbm5lclBhcmFtcy5mb2N1c0NhbmNlbCAmJiBpc1Zpc2libGUoZG9tQ2FjaGUuY2FuY2VsQnV0dG9uKSkge1xuICAgICAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmZvY3VzKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMuZm9jdXNDb25maXJtICYmIGlzVmlzaWJsZShkb21DYWNoZS5jb25maXJtQnV0dG9uKSkge1xuICAgICAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5mb2N1cygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHZhciBibHVyQWN0aXZlRWxlbWVudCA9IGZ1bmN0aW9uIGJsdXJBY3RpdmVFbGVtZW50KCkge1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIHR5cGVvZiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlcyBwb3B1cCBwYXJhbWV0ZXJzLlxuICAgKi9cblxuICBmdW5jdGlvbiB1cGRhdGUocGFyYW1zKSB7XG4gICAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuXG4gICAgaWYgKCFwb3B1cCB8fCBoYXNDbGFzcyhwb3B1cCwgaW5uZXJQYXJhbXMuaGlkZUNsYXNzLnBvcHVwKSkge1xuICAgICAgcmV0dXJuIHdhcm4oXCJZb3UncmUgdHJ5aW5nIHRvIHVwZGF0ZSB0aGUgY2xvc2VkIG9yIGNsb3NpbmcgcG9wdXAsIHRoYXQgd29uJ3Qgd29yay4gVXNlIHRoZSB1cGRhdGUoKSBtZXRob2QgaW4gcHJlQ29uZmlybSBwYXJhbWV0ZXIgb3Igc2hvdyBhIG5ldyBwb3B1cC5cIik7XG4gICAgfVxuXG4gICAgdmFyIHZhbGlkVXBkYXRhYmxlUGFyYW1zID0ge307IC8vIGFzc2lnbiB2YWxpZCBwYXJhbXMgZnJvbSBgcGFyYW1zYCB0byBgZGVmYXVsdHNgXG5cbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICBpZiAoU3dhbC5pc1VwZGF0YWJsZVBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgICAgdmFsaWRVcGRhdGFibGVQYXJhbXNbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oXCJJbnZhbGlkIHBhcmFtZXRlciB0byB1cGRhdGU6IFxcXCJcIi5jb25jYXQocGFyYW0sIFwiXFxcIi4gVXBkYXRhYmxlIHBhcmFtcyBhcmUgbGlzdGVkIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9ibG9iL21hc3Rlci9zcmMvdXRpbHMvcGFyYW1zLmpzXFxuXFxuSWYgeW91IHRoaW5rIHRoaXMgcGFyYW1ldGVyIHNob3VsZCBiZSB1cGRhdGFibGUsIHJlcXVlc3QgaXQgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy9uZXc/dGVtcGxhdGU9MDJfZmVhdHVyZV9yZXF1ZXN0Lm1kXCIpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1cGRhdGVkUGFyYW1zID0gX2V4dGVuZHMoe30sIGlubmVyUGFyYW1zLCB2YWxpZFVwZGF0YWJsZVBhcmFtcyk7XG5cbiAgICByZW5kZXIodGhpcywgdXBkYXRlZFBhcmFtcyk7XG4gICAgcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLnNldCh0aGlzLCB1cGRhdGVkUGFyYW1zKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgdmFsdWU6IF9leHRlbmRzKHt9LCB0aGlzLnBhcmFtcywgcGFyYW1zKSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfZGVzdHJveSgpIHtcbiAgICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG5cbiAgICBpZiAoIWlubmVyUGFyYW1zKSB7XG4gICAgICByZXR1cm47IC8vIFRoaXMgaW5zdGFuY2UgaGFzIGFscmVhZHkgYmVlbiBkZXN0cm95ZWRcbiAgICB9IC8vIENoZWNrIGlmIHRoZXJlIGlzIGFub3RoZXIgU3dhbCBjbG9zaW5nXG5cblxuICAgIGlmIChkb21DYWNoZS5wb3B1cCAmJiBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2spIHtcbiAgICAgIGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaygpO1xuICAgICAgZGVsZXRlIGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaztcbiAgICB9IC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgc3dhbCBkaXNwb3NhbCBkZWZlciB0aW1lclxuXG5cbiAgICBpZiAoZ2xvYmFsU3RhdGUuZGVmZXJEaXNwb3NhbFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZ2xvYmFsU3RhdGUuZGVmZXJEaXNwb3NhbFRpbWVyKTtcbiAgICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5kZWZlckRpc3Bvc2FsVGltZXI7XG4gICAgfVxuXG4gICAgcnVuRGlkRGVzdHJveShpbm5lclBhcmFtcyk7XG4gICAgZGlzcG9zZVN3YWwodGhpcyk7XG4gIH1cblxuICB2YXIgcnVuRGlkRGVzdHJveSA9IGZ1bmN0aW9uIHJ1bkRpZERlc3Ryb3koaW5uZXJQYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIGlubmVyUGFyYW1zLmRpZERlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlubmVyUGFyYW1zLmRpZERlc3Ryb3koKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbm5lclBhcmFtcy5vbkRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlubmVyUGFyYW1zLm9uRGVzdHJveSgpOyAvLyBAZGVwcmVjYXRlZFxuICAgIH1cbiAgfTtcblxuICB2YXIgZGlzcG9zZVN3YWwgPSBmdW5jdGlvbiBkaXNwb3NlU3dhbChpbnN0YW5jZSkge1xuICAgIC8vIFVuc2V0IHRoaXMucGFyYW1zIHNvIEdDIHdpbGwgZGlzcG9zZSBpdCAoIzE1NjkpXG4gICAgZGVsZXRlIGluc3RhbmNlLnBhcmFtczsgLy8gVW5zZXQgZ2xvYmFsU3RhdGUgcHJvcHMgc28gR0Mgd2lsbCBkaXNwb3NlIGdsb2JhbFN0YXRlICgjMTU2OSlcblxuICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlcjtcbiAgICBkZWxldGUgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldDsgLy8gVW5zZXQgV2Vha01hcHMgc28gR0Mgd2lsbCBiZSBhYmxlIHRvIGRpc3Bvc2UgdGhlbSAoIzE1NjkpXG5cbiAgICB1bnNldFdlYWtNYXBzKHByaXZhdGVQcm9wcyk7XG4gICAgdW5zZXRXZWFrTWFwcyhwcml2YXRlTWV0aG9kcyk7XG4gIH07XG5cbiAgdmFyIHVuc2V0V2Vha01hcHMgPSBmdW5jdGlvbiB1bnNldFdlYWtNYXBzKG9iaikge1xuICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICBvYmpbaV0gPSBuZXcgV2Vha01hcCgpO1xuICAgIH1cbiAgfTtcblxuXG5cbiAgdmFyIGluc3RhbmNlTWV0aG9kcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBoaWRlTG9hZGluZzogaGlkZUxvYWRpbmcsXG4gICAgZGlzYWJsZUxvYWRpbmc6IGhpZGVMb2FkaW5nLFxuICAgIGdldElucHV0OiBnZXRJbnB1dCQxLFxuICAgIGNsb3NlOiBjbG9zZSxcbiAgICBjbG9zZVBvcHVwOiBjbG9zZSxcbiAgICBjbG9zZU1vZGFsOiBjbG9zZSxcbiAgICBjbG9zZVRvYXN0OiBjbG9zZSxcbiAgICBlbmFibGVCdXR0b25zOiBlbmFibGVCdXR0b25zLFxuICAgIGRpc2FibGVCdXR0b25zOiBkaXNhYmxlQnV0dG9ucyxcbiAgICBlbmFibGVJbnB1dDogZW5hYmxlSW5wdXQsXG4gICAgZGlzYWJsZUlucHV0OiBkaXNhYmxlSW5wdXQsXG4gICAgc2hvd1ZhbGlkYXRpb25NZXNzYWdlOiBzaG93VmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTogcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSQxLFxuICAgIGdldFByb2dyZXNzU3RlcHM6IGdldFByb2dyZXNzU3RlcHMkMSxcbiAgICBfbWFpbjogX21haW4sXG4gICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgX2Rlc3Ryb3k6IF9kZXN0cm95XG4gIH0pO1xuXG4gIHZhciBjdXJyZW50SW5zdGFuY2U7XG5cbiAgdmFyIFN3ZWV0QWxlcnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN3ZWV0QWxlcnQoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3dlZXRBbGVydCk7XG5cbiAgICAgIC8vIFByZXZlbnQgcnVuIGluIE5vZGUgZW52XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBDaGVjayBmb3IgdGhlIGV4aXN0ZW5jZSBvZiBQcm9taXNlXG5cblxuICAgICAgaWYgKHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBlcnJvcignVGhpcyBwYWNrYWdlIHJlcXVpcmVzIGEgUHJvbWlzZSBsaWJyYXJ5LCBwbGVhc2UgaW5jbHVkZSBhIHNoaW0gdG8gZW5hYmxlIGl0IGluIHRoaXMgYnJvd3NlciAoU2VlOiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvd2lraS9NaWdyYXRpb24tZnJvbS1Td2VldEFsZXJ0LXRvLVN3ZWV0QWxlcnQyIzEtaWUtc3VwcG9ydCknKTtcbiAgICAgIH1cblxuICAgICAgY3VycmVudEluc3RhbmNlID0gdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBvdXRlclBhcmFtcyA9IE9iamVjdC5mcmVlemUodGhpcy5jb25zdHJ1Y3Rvci5hcmdzVG9QYXJhbXMoYXJncykpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB2YWx1ZTogb3V0ZXJQYXJhbXMsXG4gICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX21haW4odGhpcy5wYXJhbXMpO1xuXG4gICAgICBwcml2YXRlUHJvcHMucHJvbWlzZS5zZXQodGhpcywgcHJvbWlzZSk7XG4gICAgfSAvLyBgY2F0Y2hgIGNhbm5vdCBiZSB0aGUgbmFtZSBvZiBhIG1vZHVsZSBleHBvcnQsIHNvIHdlIGRlZmluZSBvdXIgdGhlbmFibGUgbWV0aG9kcyBoZXJlIGluc3RlYWRcblxuXG4gICAgX2NyZWF0ZUNsYXNzKFN3ZWV0QWxlcnQsIFt7XG4gICAgICBrZXk6IFwidGhlblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSBwcml2YXRlUHJvcHMucHJvbWlzZS5nZXQodGhpcyk7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4ob25GdWxmaWxsZWQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJmaW5hbGx5XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpbmFsbHkob25GaW5hbGx5KSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gcHJpdmF0ZVByb3BzLnByb21pc2UuZ2V0KHRoaXMpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZVtcImZpbmFsbHlcIl0ob25GaW5hbGx5KTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU3dlZXRBbGVydDtcbiAgfSgpOyAvLyBBc3NpZ24gaW5zdGFuY2UgbWV0aG9kcyBmcm9tIHNyYy9pbnN0YW5jZU1ldGhvZHMvKi5qcyB0byBwcm90b3R5cGVcblxuXG4gIF9leHRlbmRzKFN3ZWV0QWxlcnQucHJvdG90eXBlLCBpbnN0YW5jZU1ldGhvZHMpOyAvLyBBc3NpZ24gc3RhdGljIG1ldGhvZHMgZnJvbSBzcmMvc3RhdGljTWV0aG9kcy8qLmpzIHRvIGNvbnN0cnVjdG9yXG5cblxuICBfZXh0ZW5kcyhTd2VldEFsZXJ0LCBzdGF0aWNNZXRob2RzKTsgLy8gUHJveHkgdG8gaW5zdGFuY2UgbWV0aG9kcyB0byBjb25zdHJ1Y3RvciwgZm9yIG5vdywgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cblxuICBPYmplY3Qua2V5cyhpbnN0YW5jZU1ldGhvZHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIFN3ZWV0QWxlcnRba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjdXJyZW50SW5zdGFuY2UpIHtcbiAgICAgICAgdmFyIF9jdXJyZW50SW5zdGFuY2U7XG5cbiAgICAgICAgcmV0dXJuIChfY3VycmVudEluc3RhbmNlID0gY3VycmVudEluc3RhbmNlKVtrZXldLmFwcGx5KF9jdXJyZW50SW5zdGFuY2UsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG4gIFN3ZWV0QWxlcnQuRGlzbWlzc1JlYXNvbiA9IERpc21pc3NSZWFzb247XG4gIFN3ZWV0QWxlcnQudmVyc2lvbiA9ICcxMC4xNi45JztcblxuICB2YXIgU3dhbCA9IFN3ZWV0QWxlcnQ7XG4gIFN3YWxbXCJkZWZhdWx0XCJdID0gU3dhbDtcblxuICByZXR1cm4gU3dhbDtcblxufSkpO1xuaWYgKHR5cGVvZiB0aGlzICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLlN3ZWV0YWxlcnQyKXsgIHRoaXMuc3dhbCA9IHRoaXMuc3dlZXRBbGVydCA9IHRoaXMuU3dhbCA9IHRoaXMuU3dlZXRBbGVydCA9IHRoaXMuU3dlZXRhbGVydDJ9XG5cblwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCYmZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtpZihlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChuKSxuLnN0eWxlU2hlZXQpbi5zdHlsZVNoZWV0LmRpc2FibGVkfHwobi5zdHlsZVNoZWV0LmNzc1RleHQ9dCk7ZWxzZSB0cnl7bi5pbm5lckhUTUw9dH1jYXRjaChlKXtuLmlubmVyVGV4dD10fX0oZG9jdW1lbnQsXCIuc3dhbDItcG9wdXAuc3dhbDItdG9hc3R7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOnN0cmV0Y2g7d2lkdGg6YXV0bztwYWRkaW5nOjEuMjVlbTtvdmVyZmxvdy15OmhpZGRlbjtiYWNrZ3JvdW5kOiNmZmY7Ym94LXNoYWRvdzowIDAgLjYyNWVtICNkOWQ5ZDl9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1oZWFkZXJ7ZmxleC1kaXJlY3Rpb246cm93O3BhZGRpbmc6MH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXRpdGxle2ZsZXgtZ3JvdzoxO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O21hcmdpbjowIC42MjVlbTtmb250LXNpemU6MWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItbG9hZGluZ3tqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaW5wdXR7aGVpZ2h0OjJlbTttYXJnaW46LjMxMjVlbSBhdXRvO2ZvbnQtc2l6ZToxZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2V7Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWZvb3RlcnttYXJnaW46LjVlbSAwIDA7cGFkZGluZzouNWVtIDAgMDtmb250LXNpemU6LjhlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWNsb3Nle3Bvc2l0aW9uOnN0YXRpYzt3aWR0aDouOGVtO2hlaWdodDouOGVtO2xpbmUtaGVpZ2h0Oi44fS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItY29udGVudHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDttYXJnaW46MCAuNjI1ZW07cGFkZGluZzowO2ZvbnQtc2l6ZToxZW07dGV4dC1hbGlnbjppbml0aWFsfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaHRtbC1jb250YWluZXJ7cGFkZGluZzouNjI1ZW0gMCAwfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaHRtbC1jb250YWluZXI6ZW1wdHl7cGFkZGluZzowfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbnt3aWR0aDoyZW07bWluLXdpZHRoOjJlbTtoZWlnaHQ6MmVtO21hcmdpbjowIC41ZW0gMCAwfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbiAuc3dhbDItaWNvbi1jb250ZW50e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjEuOGVtO2ZvbnQtd2VpZ2h0OjcwMH1AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6bm9uZSksKC1tcy1oaWdoLWNvbnRyYXN0OmFjdGl2ZSl7LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uIC5zd2FsMi1pY29uLWNvbnRlbnR7Zm9udC1zaXplOi4yNWVtfX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5ne3dpZHRoOjJlbTtoZWlnaHQ6MmVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXXt0b3A6Ljg3NWVtO3dpZHRoOjEuMzc1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1sZWZ0XXtsZWZ0Oi4zMTI1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1yaWdodF17cmlnaHQ6LjMxMjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWFjdGlvbnN7ZmxleDoxO2ZsZXgtYmFzaXM6YXV0byFpbXBvcnRhbnQ7YWxpZ24tc2VsZjpzdHJldGNoO3dpZHRoOmF1dG87aGVpZ2h0OjIuMmVtO2hlaWdodDphdXRvO21hcmdpbjowIC4zMTI1ZW07bWFyZ2luLXRvcDouMzEyNWVtO3BhZGRpbmc6MH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN0eWxlZHttYXJnaW46LjEyNWVtIC4zMTI1ZW07cGFkZGluZzouMzEyNWVtIC42MjVlbTtmb250LXNpemU6MWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3R5bGVkOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgMXB4ICNmZmYsMCAwIDAgM3B4IHJnYmEoMTAwLDE1MCwyMDAsLjUpfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2Vzc3tib3JkZXItY29sb3I6I2E1ZGM4Nn0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVde3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEuNmVtO2hlaWdodDozZW07dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXJhZGl1czo1MCV9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9bGVmdF17dG9wOi0uOGVtO2xlZnQ6LS41ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybS1vcmlnaW46MmVtIDJlbTtib3JkZXItcmFkaXVzOjRlbSAwIDAgNGVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPXJpZ2h0XXt0b3A6LS4yNWVtO2xlZnQ6LjkzNzVlbTt0cmFuc2Zvcm0tb3JpZ2luOjAgMS41ZW07Ym9yZGVyLXJhZGl1czowIDRlbSA0ZW0gMH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZ3t3aWR0aDoyZW07aGVpZ2h0OjJlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4e3RvcDowO2xlZnQ6LjQzNzVlbTt3aWR0aDouNDM3NWVtO2hlaWdodDoyLjY4NzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2hlaWdodDouMzEyNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPXRpcF17dG9wOjEuMTI1ZW07bGVmdDouMTg3NWVtO3dpZHRoOi43NWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmdde3RvcDouOTM3NWVtO3JpZ2h0Oi4xODc1ZW07d2lkdGg6MS4zNzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzO2FuaW1hdGlvbjpzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1c30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIC43NXM7YW5pbWF0aW9uOnN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1c30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3Quc3dhbDItc2hvd3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi10b2FzdC1zaG93IC41czthbmltYXRpb246c3dhbDItdG9hc3Qtc2hvdyAuNXN9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLWhpZGV7LXdlYmtpdC1hbmltYXRpb246c3dhbDItdG9hc3QtaGlkZSAuMXMgZm9yd2FyZHM7YW5pbWF0aW9uOnN3YWwyLXRvYXN0LWhpZGUgLjFzIGZvcndhcmRzfS5zd2FsMi1jb250YWluZXJ7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTA2MDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzouNjI1ZW07b3ZlcmZsb3cteDpoaWRkZW47dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4xczstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJhY2tkcm9wLXNob3csLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ub2FuaW1hdGlvbntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjQpfS5zd2FsMi1jb250YWluZXIuc3dhbDItYmFja2Ryb3AtaGlkZXtiYWNrZ3JvdW5kOjAgMCFpbXBvcnRhbnR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3B7YWxpZ24taXRlbXM6ZmxleC1zdGFydH0uc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXJpZ2h0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVye2FsaWduLWl0ZW1zOmNlbnRlcn0uc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXN0YXJ0e2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1lbmQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItcmlnaHR7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbXthbGlnbi1pdGVtczpmbGV4LWVuZH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0e2FsaWduLWl0ZW1zOmZsZXgtZW5kO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodHthbGlnbi1pdGVtczpmbGV4LWVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kPjpmaXJzdC1jaGlsZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0PjpmaXJzdC1jaGlsZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodD46Zmlyc3QtY2hpbGQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQ+OmZpcnN0LWNoaWxkLC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tPjpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOmF1dG99LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWZ1bGxzY3JlZW4+LnN3YWwyLW1vZGFse2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnQ7ZmxleDoxO2FsaWduLXNlbGY6c3RyZXRjaDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1yb3c+LnN3YWwyLW1vZGFse2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnQ7ZmxleDoxO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbntmbGV4OjE7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9we2FsaWduLWl0ZW1zOmNlbnRlcn0uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLXN0YXJ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLWxlZnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItc3RhcnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtbGVmdCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1zdGFydHthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLWVuZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1yaWdodCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1lbmQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItcmlnaHQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtZW5kLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLXJpZ2h0e2FsaWduLWl0ZW1zOmZsZXgtZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4+LnN3YWwyLW1vZGFse2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnQ7ZmxleDoxO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1uby10cmFuc2l0aW9ue3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnR9LnN3YWwyLWNvbnRhaW5lcjpub3QoLnN3YWwyLXRvcCk6bm90KC5zd2FsMi10b3Atc3RhcnQpOm5vdCguc3dhbDItdG9wLWVuZCk6bm90KC5zd2FsMi10b3AtbGVmdCk6bm90KC5zd2FsMi10b3AtcmlnaHQpOm5vdCguc3dhbDItY2VudGVyLXN0YXJ0KTpub3QoLnN3YWwyLWNlbnRlci1lbmQpOm5vdCguc3dhbDItY2VudGVyLWxlZnQpOm5vdCguc3dhbDItY2VudGVyLXJpZ2h0KTpub3QoLnN3YWwyLWJvdHRvbSk6bm90KC5zd2FsMi1ib3R0b20tc3RhcnQpOm5vdCguc3dhbDItYm90dG9tLWVuZCk6bm90KC5zd2FsMi1ib3R0b20tbGVmdCk6bm90KC5zd2FsMi1ib3R0b20tcmlnaHQpOm5vdCguc3dhbDItZ3Jvdy1mdWxsc2NyZWVuKT4uc3dhbDItbW9kYWx7bWFyZ2luOmF1dG99QG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0Om5vbmUpLCgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5zd2FsMi1jb250YWluZXIgLnN3YWwyLW1vZGFse21hcmdpbjowIWltcG9ydGFudH19LnN3YWwyLXBvcHVwe2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MzJlbTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOjEuMjVlbTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjVweDtiYWNrZ3JvdW5kOiNmZmY7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MXJlbX0uc3dhbDItcG9wdXA6Zm9jdXN7b3V0bGluZTowfS5zd2FsMi1wb3B1cC5zd2FsMi1sb2FkaW5ne292ZXJmbG93LXk6aGlkZGVufS5zd2FsMi1oZWFkZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzowIDEuOGVtfS5zd2FsMi10aXRsZXtwb3NpdGlvbjpyZWxhdGl2ZTttYXgtd2lkdGg6MTAwJTttYXJnaW46MCAwIC40ZW07cGFkZGluZzowO2NvbG9yOiM1OTU5NTk7Zm9udC1zaXplOjEuODc1ZW07Zm9udC13ZWlnaHQ6NjAwO3RleHQtYWxpZ246Y2VudGVyO3RleHQtdHJhbnNmb3JtOm5vbmU7d29yZC13cmFwOmJyZWFrLXdvcmR9LnN3YWwyLWFjdGlvbnN7ZGlzcGxheTpmbGV4O3otaW5kZXg6MTtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZmxleC13cmFwOndyYXA7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTttYXJnaW46MS4yNWVtIGF1dG8gMDtwYWRkaW5nOjB9LnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkW2Rpc2FibGVkXXtvcGFjaXR5Oi40fS5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZDpob3ZlcntiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLC4xKSxyZ2JhKDAsMCwwLC4xKSl9LnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkOmFjdGl2ZXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLC4yKSxyZ2JhKDAsMCwwLC4yKSl9LnN3YWwyLWxvYWRlcntkaXNwbGF5Om5vbmU7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6Mi4yZW07aGVpZ2h0OjIuMmVtO21hcmdpbjowIDEuODc1ZW07LXdlYmtpdC1hbmltYXRpb246c3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO2FuaW1hdGlvbjpzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7Ym9yZGVyLXdpZHRoOi4yNWVtO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjEwMCU7Ym9yZGVyLWNvbG9yOiMyNzc4YzQgdHJhbnNwYXJlbnQgIzI3NzhjNCB0cmFuc3BhcmVudH0uc3dhbDItc3R5bGVke21hcmdpbjouMzEyNWVtO3BhZGRpbmc6LjYyNWVtIDEuMWVtO2JveC1zaGFkb3c6bm9uZTtmb250LXdlaWdodDo1MDB9LnN3YWwyLXN0eWxlZDpub3QoW2Rpc2FibGVkXSl7Y3Vyc29yOnBvaW50ZXJ9LnN3YWwyLXN0eWxlZC5zd2FsMi1jb25maXJte2JvcmRlcjowO2JvcmRlci1yYWRpdXM6LjI1ZW07YmFja2dyb3VuZDppbml0aWFsO2JhY2tncm91bmQtY29sb3I6IzI3NzhjNDtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxZW19LnN3YWwyLXN0eWxlZC5zd2FsMi1kZW55e2JvcmRlcjowO2JvcmRlci1yYWRpdXM6LjI1ZW07YmFja2dyb3VuZDppbml0aWFsO2JhY2tncm91bmQtY29sb3I6I2QxNDUyOTtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxZW19LnN3YWwyLXN0eWxlZC5zd2FsMi1jYW5jZWx7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czouMjVlbTtiYWNrZ3JvdW5kOmluaXRpYWw7YmFja2dyb3VuZC1jb2xvcjojNzU3NTc1O2NvbG9yOiNmZmY7Zm9udC1zaXplOjFlbX0uc3dhbDItc3R5bGVkOmZvY3Vze291dGxpbmU6MDtib3gtc2hhZG93OjAgMCAwIDNweCByZ2JhKDEwMCwxNTAsMjAwLC41KX0uc3dhbDItc3R5bGVkOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5zd2FsMi1mb290ZXJ7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MS4yNWVtIDAgMDtwYWRkaW5nOjFlbSAwIDA7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZTtjb2xvcjojNTQ1NDU0O2ZvbnQtc2l6ZToxZW19LnN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7aGVpZ2h0Oi4yNWVtO292ZXJmbG93OmhpZGRlbjtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo1cHh9LnN3YWwyLXRpbWVyLXByb2dyZXNzLWJhcnt3aWR0aDoxMDAlO2hlaWdodDouMjVlbTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjIpfS5zd2FsMi1pbWFnZXttYXgtd2lkdGg6MTAwJTttYXJnaW46MS4yNWVtIGF1dG99LnN3YWwyLWNsb3Nle3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6Mjt0b3A6MDtyaWdodDowO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEuMmVtO2hlaWdodDoxLjJlbTtwYWRkaW5nOjA7b3ZlcmZsb3c6aGlkZGVuO3RyYW5zaXRpb246Y29sb3IgLjFzIGVhc2Utb3V0O2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6NXB4O2JhY2tncm91bmQ6MCAwO2NvbG9yOiNjY2M7Zm9udC1mYW1pbHk6c2VyaWY7Zm9udC1zaXplOjIuNWVtO2xpbmUtaGVpZ2h0OjEuMjtjdXJzb3I6cG9pbnRlcn0uc3dhbDItY2xvc2U6aG92ZXJ7dHJhbnNmb3JtOm5vbmU7YmFja2dyb3VuZDowIDA7Y29sb3I6I2YyNzQ3NH0uc3dhbDItY2xvc2U6Zm9jdXN7b3V0bGluZTowO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgM3B4IHJnYmEoMTAwLDE1MCwyMDAsLjUpfS5zd2FsMi1jbG9zZTo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH0uc3dhbDItY29udGVudHt6LWluZGV4OjE7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MDtwYWRkaW5nOjAgMS42ZW07Y29sb3I6IzU0NTQ1NDtmb250LXNpemU6MS4xMjVlbTtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6bm9ybWFsO3RleHQtYWxpZ246Y2VudGVyO3dvcmQtd3JhcDpicmVhay13b3JkfS5zd2FsMi1jaGVja2JveCwuc3dhbDItZmlsZSwuc3dhbDItaW5wdXQsLnN3YWwyLXJhZGlvLC5zd2FsMi1zZWxlY3QsLnN3YWwyLXRleHRhcmVhe21hcmdpbjoxZW0gYXV0b30uc3dhbDItZmlsZSwuc3dhbDItaW5wdXQsLnN3YWwyLXRleHRhcmVhe2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxMDAlO3RyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4zcyxib3gtc2hhZG93IC4zcztib3JkZXI6MXB4IHNvbGlkICNkOWQ5ZDk7Ym9yZGVyLXJhZGl1czouMTg3NWVtO2JhY2tncm91bmQ6aW5oZXJpdDtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNik7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MS4xMjVlbX0uc3dhbDItZmlsZS5zd2FsMi1pbnB1dGVycm9yLC5zd2FsMi1pbnB1dC5zd2FsMi1pbnB1dGVycm9yLC5zd2FsMi10ZXh0YXJlYS5zd2FsMi1pbnB1dGVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0IWltcG9ydGFudDtib3gtc2hhZG93OjAgMCAycHggI2YyNzQ3NCFpbXBvcnRhbnR9LnN3YWwyLWZpbGU6Zm9jdXMsLnN3YWwyLWlucHV0OmZvY3VzLC5zd2FsMi10ZXh0YXJlYTpmb2N1c3tib3JkZXI6MXB4IHNvbGlkICNiNGRiZWQ7b3V0bGluZTowO2JveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEoMTAwLDE1MCwyMDAsLjUpfS5zd2FsMi1maWxlOjotbW96LXBsYWNlaG9sZGVyLC5zd2FsMi1pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwuc3dhbDItdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6I2NjY30uc3dhbDItZmlsZTotbXMtaW5wdXQtcGxhY2Vob2xkZXIsLnN3YWwyLWlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiNjY2N9LnN3YWwyLWZpbGU6OnBsYWNlaG9sZGVyLC5zd2FsMi1pbnB1dDo6cGxhY2Vob2xkZXIsLnN3YWwyLXRleHRhcmVhOjpwbGFjZWhvbGRlcntjb2xvcjojY2NjfS5zd2FsMi1yYW5nZXttYXJnaW46MWVtIGF1dG87YmFja2dyb3VuZDojZmZmfS5zd2FsMi1yYW5nZSBpbnB1dHt3aWR0aDo4MCV9LnN3YWwyLXJhbmdlIG91dHB1dHt3aWR0aDoyMCU7Y29sb3I6aW5oZXJpdDtmb250LXdlaWdodDo2MDA7dGV4dC1hbGlnbjpjZW50ZXJ9LnN3YWwyLXJhbmdlIGlucHV0LC5zd2FsMi1yYW5nZSBvdXRwdXR7aGVpZ2h0OjIuNjI1ZW07cGFkZGluZzowO2ZvbnQtc2l6ZToxLjEyNWVtO2xpbmUtaGVpZ2h0OjIuNjI1ZW19LnN3YWwyLWlucHV0e2hlaWdodDoyLjYyNWVtO3BhZGRpbmc6MCAuNzVlbX0uc3dhbDItaW5wdXRbdHlwZT1udW1iZXJde21heC13aWR0aDoxMGVtfS5zd2FsMi1maWxle2JhY2tncm91bmQ6aW5oZXJpdDtmb250LXNpemU6MS4xMjVlbX0uc3dhbDItdGV4dGFyZWF7aGVpZ2h0OjYuNzVlbTtwYWRkaW5nOi43NWVtfS5zd2FsMi1zZWxlY3R7bWluLXdpZHRoOjUwJTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOi4zNzVlbSAuNjI1ZW07YmFja2dyb3VuZDppbmhlcml0O2NvbG9yOmluaGVyaXQ7Zm9udC1zaXplOjEuMTI1ZW19LnN3YWwyLWNoZWNrYm94LC5zd2FsMi1yYWRpb3thbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6aW5oZXJpdH0uc3dhbDItY2hlY2tib3ggbGFiZWwsLnN3YWwyLXJhZGlvIGxhYmVse21hcmdpbjowIC42ZW07Zm9udC1zaXplOjEuMTI1ZW19LnN3YWwyLWNoZWNrYm94IGlucHV0LC5zd2FsMi1yYWRpbyBpbnB1dHtmbGV4LXNocmluazowO21hcmdpbjowIC40ZW19LnN3YWwyLWlucHV0LWxhYmVse2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjoxZW0gYXV0b30uc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdle2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjowIC0yLjdlbTtwYWRkaW5nOi42MjVlbTtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDojZjBmMGYwO2NvbG9yOiM2NjY7Zm9udC1zaXplOjFlbTtmb250LXdlaWdodDozMDB9LnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZTo6YmVmb3Jle2NvbnRlbnQ6XFxcIiFcXFwiO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEuNWVtO21pbi13aWR0aDoxLjVlbTtoZWlnaHQ6MS41ZW07bWFyZ2luOjAgLjYyNWVtO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQtY29sb3I6I2YyNzQ3NDtjb2xvcjojZmZmO2ZvbnQtd2VpZ2h0OjYwMDtsaW5lLWhlaWdodDoxLjVlbTt0ZXh0LWFsaWduOmNlbnRlcn0uc3dhbDItaWNvbntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6NWVtO2hlaWdodDo1ZW07bWFyZ2luOjEuMjVlbSBhdXRvIDEuODc1ZW07Ym9yZGVyOi4yNWVtIHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NTAlO2JvcmRlci1jb2xvcjojMDAwO2ZvbnQtZmFtaWx5OmluaGVyaXQ7bGluZS1oZWlnaHQ6NWVtO2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uc3dhbDItaWNvbiAuc3dhbDItaWNvbi1jb250ZW50e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjMuNzVlbX0uc3dhbDItaWNvbi5zd2FsMi1lcnJvcntib3JkZXItY29sb3I6I2YyNzQ3NDtjb2xvcjojZjI3NDc0fS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIC5zd2FsMi14LW1hcmt7cG9zaXRpb246cmVsYXRpdmU7ZmxleC1ncm93OjF9LnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV17ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6Mi4zMTI1ZW07d2lkdGg6Mi45Mzc1ZW07aGVpZ2h0Oi4zMTI1ZW07Ym9yZGVyLXJhZGl1czouMTI1ZW07YmFja2dyb3VuZC1jb2xvcjojZjI3NDc0fS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1sZWZ0XXtsZWZ0OjEuMDYyNWVtO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1yaWdodF17cmlnaHQ6MWVtO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0uc3dhbDItaWNvbi5zd2FsMi1lcnJvci5zd2FsMi1pY29uLXNob3d7LXdlYmtpdC1hbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC41czthbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC41c30uc3dhbDItaWNvbi5zd2FsMi1lcnJvci5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXgtbWFya3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFyayAuNXM7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIC41c30uc3dhbDItaWNvbi5zd2FsMi13YXJuaW5ne2JvcmRlci1jb2xvcjojZmFjZWE4O2NvbG9yOiNmOGJiODZ9LnN3YWwyLWljb24uc3dhbDItaW5mb3tib3JkZXItY29sb3I6IzlkZTBmNjtjb2xvcjojM2ZjM2VlfS5zd2FsMi1pY29uLnN3YWwyLXF1ZXN0aW9ue2JvcmRlci1jb2xvcjojYzlkYWUxO2NvbG9yOiM4N2FkYmR9LnN3YWwyLWljb24uc3dhbDItc3VjY2Vzc3tib3JkZXItY29sb3I6I2E1ZGM4Njtjb2xvcjojYTVkYzg2fS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVde3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjMuNzVlbTtoZWlnaHQ6Ny41ZW07dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXJhZGl1czo1MCV9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPWxlZnRde3RvcDotLjQzNzVlbTtsZWZ0Oi0yLjA2MzVlbTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtLW9yaWdpbjozLjc1ZW0gMy43NWVtO2JvcmRlci1yYWRpdXM6Ny41ZW0gMCAwIDcuNWVtfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1yaWdodF17dG9wOi0uNjg3NWVtO2xlZnQ6MS44NzVlbTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtLW9yaWdpbjowIDMuNzVlbTtib3JkZXItcmFkaXVzOjAgNy41ZW0gNy41ZW0gMH0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO3RvcDotLjI1ZW07bGVmdDotLjI1ZW07Ym94LXNpemluZzpjb250ZW50LWJveDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjouMjVlbSBzb2xpZCByZ2JhKDE2NSwyMjAsMTM0LC4zKTtib3JkZXItcmFkaXVzOjUwJX0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjE7dG9wOi41ZW07bGVmdDoxLjYyNWVtO3dpZHRoOi40Mzc1ZW07aGVpZ2h0OjUuNjI1ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO2hlaWdodDouMzEyNWVtO2JvcmRlci1yYWRpdXM6LjEyNWVtO2JhY2tncm91bmQtY29sb3I6I2E1ZGM4Nn0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9dGlwXXt0b3A6Mi44NzVlbTtsZWZ0Oi44MTI1ZW07d2lkdGg6MS41NjI1ZW07dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmdde3RvcDoyLjM3NWVtO3JpZ2h0Oi41ZW07d2lkdGg6Mi45Mzc1ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1c30uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmd7LXdlYmtpdC1hbmltYXRpb246c3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAuNzVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIC43NXN9LnN3YWwyLWljb24uc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodHstd2Via2l0LWFuaW1hdGlvbjpzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIDQuMjVzIGVhc2UtaW47YW5pbWF0aW9uOnN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUgNC4yNXMgZWFzZS1pbn0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHN7ZmxleC13cmFwOndyYXA7YWxpZ24taXRlbXM6Y2VudGVyO21heC13aWR0aDoxMDAlO21hcmdpbjowIDAgMS4yNWVtO3BhZGRpbmc6MDtiYWNrZ3JvdW5kOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NjAwfS5zd2FsMi1wcm9ncmVzcy1zdGVwcyBsaXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXB7ei1pbmRleDoyMDtmbGV4LXNocmluazowO3dpZHRoOjJlbTtoZWlnaHQ6MmVtO2JvcmRlci1yYWRpdXM6MmVtO2JhY2tncm91bmQ6IzI3NzhjNDtjb2xvcjojZmZmO2xpbmUtaGVpZ2h0OjJlbTt0ZXh0LWFsaWduOmNlbnRlcn0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXB7YmFja2dyb3VuZDojMjc3OGM0fS5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcH4uc3dhbDItcHJvZ3Jlc3Mtc3RlcHtiYWNrZ3JvdW5kOiNhZGQ4ZTY7Y29sb3I6I2ZmZn0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXB+LnN3YWwyLXByb2dyZXNzLXN0ZXAtbGluZXtiYWNrZ3JvdW5kOiNhZGQ4ZTZ9LnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmV7ei1pbmRleDoxMDtmbGV4LXNocmluazowO3dpZHRoOjIuNWVtO2hlaWdodDouNGVtO21hcmdpbjowIC0xcHg7YmFja2dyb3VuZDojMjc3OGM0fVtjbGFzc149c3dhbDJdey13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudH0uc3dhbDItc2hvd3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi1zaG93IC4zczthbmltYXRpb246c3dhbDItc2hvdyAuM3N9LnN3YWwyLWhpZGV7LXdlYmtpdC1hbmltYXRpb246c3dhbDItaGlkZSAuMTVzIGZvcndhcmRzO2FuaW1hdGlvbjpzd2FsMi1oaWRlIC4xNXMgZm9yd2FyZHN9LnN3YWwyLW5vYW5pbWF0aW9ue3RyYW5zaXRpb246bm9uZX0uc3dhbDItc2Nyb2xsYmFyLW1lYXN1cmV7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTk5cHg7d2lkdGg6NTBweDtoZWlnaHQ6NTBweDtvdmVyZmxvdzpzY3JvbGx9LnN3YWwyLXJ0bCAuc3dhbDItY2xvc2V7cmlnaHQ6YXV0bztsZWZ0OjB9LnN3YWwyLXJ0bCAuc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFye3JpZ2h0OjA7bGVmdDphdXRvfUBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOnRydWUpey5zd2FsMi1yYW5nZSBpbnB1dHt3aWR0aDoxMDAlIWltcG9ydGFudH0uc3dhbDItcmFuZ2Ugb3V0cHV0e2Rpc3BsYXk6bm9uZX19QG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0Om5vbmUpLCgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5zd2FsMi1yYW5nZSBpbnB1dHt3aWR0aDoxMDAlIWltcG9ydGFudH0uc3dhbDItcmFuZ2Ugb3V0cHV0e2Rpc3BsYXk6bm9uZX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXRvYXN0LXNob3d7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS42MjVlbSkgcm90YXRlWigyZGVnKX0zMyV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyl9NjYle3RyYW5zZm9ybTp0cmFuc2xhdGVZKC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyl9MTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKDApfX1Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LXNob3d7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS42MjVlbSkgcm90YXRlWigyZGVnKX0zMyV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyl9NjYle3RyYW5zZm9ybTp0cmFuc2xhdGVZKC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyl9MTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKDApfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItdG9hc3QtaGlkZXsxMDAle3RyYW5zZm9ybTpyb3RhdGVaKDFkZWcpO29wYWNpdHk6MH19QGtleWZyYW1lcyBzd2FsMi10b2FzdC1oaWRlezEwMCV7dHJhbnNmb3JtOnJvdGF0ZVooMWRlZyk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwezAle3RvcDouNTYyNWVtO2xlZnQ6LjA2MjVlbTt3aWR0aDowfTU0JXt0b3A6LjEyNWVtO2xlZnQ6LjEyNWVtO3dpZHRoOjB9NzAle3RvcDouNjI1ZW07bGVmdDotLjI1ZW07d2lkdGg6MS42MjVlbX04NCV7dG9wOjEuMDYyNWVtO2xlZnQ6Ljc1ZW07d2lkdGg6LjVlbX0xMDAle3RvcDoxLjEyNWVtO2xlZnQ6LjE4NzVlbTt3aWR0aDouNzVlbX19QGtleWZyYW1lcyBzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXB7MCV7dG9wOi41NjI1ZW07bGVmdDouMDYyNWVtO3dpZHRoOjB9NTQle3RvcDouMTI1ZW07bGVmdDouMTI1ZW07d2lkdGg6MH03MCV7dG9wOi42MjVlbTtsZWZ0Oi0uMjVlbTt3aWR0aDoxLjYyNWVtfTg0JXt0b3A6MS4wNjI1ZW07bGVmdDouNzVlbTt3aWR0aDouNWVtfTEwMCV7dG9wOjEuMTI1ZW07bGVmdDouMTg3NWVtO3dpZHRoOi43NWVtfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZ3swJXt0b3A6MS42MjVlbTtyaWdodDoxLjM3NWVtO3dpZHRoOjB9NjUle3RvcDoxLjI1ZW07cmlnaHQ6LjkzNzVlbTt3aWR0aDowfTg0JXt0b3A6LjkzNzVlbTtyaWdodDowO3dpZHRoOjEuMTI1ZW19MTAwJXt0b3A6LjkzNzVlbTtyaWdodDouMTg3NWVtO3dpZHRoOjEuMzc1ZW19fUBrZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZ3swJXt0b3A6MS42MjVlbTtyaWdodDoxLjM3NWVtO3dpZHRoOjB9NjUle3RvcDoxLjI1ZW07cmlnaHQ6LjkzNzVlbTt3aWR0aDowfTg0JXt0b3A6LjkzNzVlbTtyaWdodDowO3dpZHRoOjEuMTI1ZW19MTAwJXt0b3A6LjkzNzVlbTtyaWdodDouMTg3NWVtO3dpZHRoOjEuMzc1ZW19fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1zaG93ezAle3RyYW5zZm9ybTpzY2FsZSguNyl9NDUle3RyYW5zZm9ybTpzY2FsZSgxLjA1KX04MCV7dHJhbnNmb3JtOnNjYWxlKC45NSl9MTAwJXt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgc3dhbDItc2hvd3swJXt0cmFuc2Zvcm06c2NhbGUoLjcpfTQ1JXt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9ODAle3RyYW5zZm9ybTpzY2FsZSguOTUpfTEwMCV7dHJhbnNmb3JtOnNjYWxlKDEpfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItaGlkZXswJXt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7dHJhbnNmb3JtOnNjYWxlKC41KTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgc3dhbDItaGlkZXswJXt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7dHJhbnNmb3JtOnNjYWxlKC41KTtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXB7MCV7dG9wOjEuMTg3NWVtO2xlZnQ6LjA2MjVlbTt3aWR0aDowfTU0JXt0b3A6MS4wNjI1ZW07bGVmdDouMTI1ZW07d2lkdGg6MH03MCV7dG9wOjIuMTg3NWVtO2xlZnQ6LS4zNzVlbTt3aWR0aDozLjEyNWVtfTg0JXt0b3A6M2VtO2xlZnQ6MS4zMTI1ZW07d2lkdGg6MS4wNjI1ZW19MTAwJXt0b3A6Mi44MTI1ZW07bGVmdDouODEyNWVtO3dpZHRoOjEuNTYyNWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcHswJXt0b3A6MS4xODc1ZW07bGVmdDouMDYyNWVtO3dpZHRoOjB9NTQle3RvcDoxLjA2MjVlbTtsZWZ0Oi4xMjVlbTt3aWR0aDowfTcwJXt0b3A6Mi4xODc1ZW07bGVmdDotLjM3NWVtO3dpZHRoOjMuMTI1ZW19ODQle3RvcDozZW07bGVmdDoxLjMxMjVlbTt3aWR0aDoxLjA2MjVlbX0xMDAle3RvcDoyLjgxMjVlbTtsZWZ0Oi44MTI1ZW07d2lkdGg6MS41NjI1ZW19fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nezAle3RvcDozLjM3NWVtO3JpZ2h0OjIuODc1ZW07d2lkdGg6MH02NSV7dG9wOjMuMzc1ZW07cmlnaHQ6Mi44NzVlbTt3aWR0aDowfTg0JXt0b3A6Mi4xODc1ZW07cmlnaHQ6MDt3aWR0aDozLjQzNzVlbX0xMDAle3RvcDoyLjM3NWVtO3JpZ2h0Oi41ZW07d2lkdGg6Mi45Mzc1ZW19fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZ3swJXt0b3A6My4zNzVlbTtyaWdodDoyLjg3NWVtO3dpZHRoOjB9NjUle3RvcDozLjM3NWVtO3JpZ2h0OjIuODc1ZW07d2lkdGg6MH04NCV7dG9wOjIuMTg3NWVtO3JpZ2h0OjA7d2lkdGg6My40Mzc1ZW19MTAwJXt0b3A6Mi4zNzVlbTtyaWdodDouNWVtO3dpZHRoOjIuOTM3NWVtfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZXswJXt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9NSV7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTEyJXt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX19QGtleWZyYW1lcyBzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lezAle3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX01JXt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9MTIle3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9MTAwJXt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmt7MCV7bWFyZ2luLXRvcDoxLjYyNWVtO3RyYW5zZm9ybTpzY2FsZSguNCk7b3BhY2l0eTowfTUwJXttYXJnaW4tdG9wOjEuNjI1ZW07dHJhbnNmb3JtOnNjYWxlKC40KTtvcGFjaXR5OjB9ODAle21hcmdpbi10b3A6LS4zNzVlbTt0cmFuc2Zvcm06c2NhbGUoMS4xNSl9MTAwJXttYXJnaW4tdG9wOjA7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFya3swJXttYXJnaW4tdG9wOjEuNjI1ZW07dHJhbnNmb3JtOnNjYWxlKC40KTtvcGFjaXR5OjB9NTAle21hcmdpbi10b3A6MS42MjVlbTt0cmFuc2Zvcm06c2NhbGUoLjQpO29wYWNpdHk6MH04MCV7bWFyZ2luLXRvcDotLjM3NWVtO3RyYW5zZm9ybTpzY2FsZSgxLjE1KX0xMDAle21hcmdpbi10b3A6MDt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uezAle3RyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7b3BhY2l0eTowfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZVgoMCk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbnswJXt0cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO29wYWNpdHk6MH0xMDAle3RyYW5zZm9ybTpyb3RhdGVYKDApO29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1sb2FkaW5nezAle3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgc3dhbDItcm90YXRlLWxvYWRpbmd7MCV7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKXtvdmVyZmxvdzpoaWRkZW59Ym9keS5zd2FsMi1oZWlnaHQtYXV0b3toZWlnaHQ6YXV0byFpbXBvcnRhbnR9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVye3RvcDphdXRvO3JpZ2h0OmF1dG87Ym90dG9tOmF1dG87bGVmdDphdXRvO21heC13aWR0aDpjYWxjKDEwMCUgLSAuNjI1ZW0gKiAyKTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXI+LnN3YWwyLW1vZGFse2JveC1zaGFkb3c6MCAwIDEwcHggcmdiYSgwLDAsMCwuNCl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcHt0b3A6MDtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWxlZnQsYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1zdGFydHt0b3A6MDtsZWZ0OjB9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQsYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodHt0b3A6MDtyaWdodDowfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXJ7dG9wOjUwJTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0LGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnR7dG9wOjUwJTtsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1lbmQsYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1yaWdodHt0b3A6NTAlO3JpZ2h0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbXtib3R0b206MDtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQsYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1zdGFydHtib3R0b206MDtsZWZ0OjB9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1lbmQsYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodHtyaWdodDowO2JvdHRvbTowfUBtZWRpYSBwcmludHtib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pe292ZXJmbG93LXk6c2Nyb2xsIWltcG9ydGFudH1ib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pPlthcmlhLWhpZGRlbj10cnVlXXtkaXNwbGF5Om5vbmV9Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKSAuc3dhbDItY29udGFpbmVye3Bvc2l0aW9uOnN0YXRpYyFpbXBvcnRhbnR9fWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3B7dG9wOjA7cmlnaHQ6YXV0bztib3R0b206YXV0bztsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXJpZ2h0e3RvcDowO3JpZ2h0OjA7Ym90dG9tOmF1dG87bGVmdDphdXRvfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtbGVmdCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0e3RvcDowO3JpZ2h0OmF1dG87Ym90dG9tOmF1dG87bGVmdDowfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItbGVmdCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXN0YXJ0e3RvcDo1MCU7cmlnaHQ6YXV0bztib3R0b206YXV0bztsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlcnt0b3A6NTAlO3JpZ2h0OmF1dG87Ym90dG9tOmF1dG87bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItZW5kLGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItcmlnaHR7dG9wOjUwJTtyaWdodDowO2JvdHRvbTphdXRvO2xlZnQ6YXV0bzt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1zdGFydHt0b3A6YXV0bztyaWdodDphdXRvO2JvdHRvbTowO2xlZnQ6MH1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9te3RvcDphdXRvO3JpZ2h0OmF1dG87Ym90dG9tOjA7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1lbmQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodHt0b3A6YXV0bztyaWdodDowO2JvdHRvbTowO2xlZnQ6YXV0b31cIik7IiwiaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uL3N0eWxlcy9zaWduaW4ubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgZmFFbnZlbG9wZSwgZmFMb2NrLCBmYUV5ZSwgZmFFeWVTbGFzaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25pbigpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtpc1Bhc3N3b3JkU2hvdywgc2V0aXNQYXNzd29yZFNob3ddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbY2hlY2tQaW4sIHNldENoZWNrUGluXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3QgdG9vZ2xlUGFzc3dvcmRWaXNpYmlsaXR5ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldGlzUGFzc3dvcmRTaG93KCFpc1Bhc3N3b3JkU2hvdylcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUZvcm1DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhTmV3ID0geyAuLi5kYXRhIH07XHJcbiAgICAgICAgZGF0YU5ld1tldmVudC50YXJnZXQubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0RGF0YShkYXRhTmV3KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9naW4gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuYXBpfS91c2Vycy9hdXRoL2xvZ2luYCwgZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaWRcIiwgcmVzLmRhdGEuZGF0YS5pZClcclxuICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGluXCIsIHJlcy5kYXRhLmRhdGEucGluKVxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCByZXMuZGF0YS5kYXRhLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEucm9sZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9ob21lJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIFN3YWwuZmlyZShcIlNvbWV0aGluZyBFcnJvciFcIiwgZXJyLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvaG9tZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlWydtYWluLWxvZ2luJ119PlxyXG5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZVsnYXV0aC1sb2dpbnMnXX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e1tbXCJwdC01XCJdLCBbXCJtbC01XCJdLCBzdHlsZVtcInRpdGxlLWxvZ2luXCJdXS5qb2luKFwiIFwiKX0+WndhbGxldDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tbXCJkLWZsZXhcIl0sIHN0eWxlW1wiaW1hZ2UtbG9naW5cIl1dLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZVsnYmdXYXZlJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3ZlY3RvcjQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvR3JvdXBwaG9uZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MTIuNTEzMzg0NzUyODQ2ODN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUzNi40NzIyNjM0NzQ5OTkxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnYm90dG9tLXNlY3Rpb24nXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLWJvdHRvbS1zZWN0aW9uJ119PkFwcCB0aGF0IENvdmVyaW5nIEJhbmtpbmcgTmVlZHMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydzdWJ0aXRsZS1ib3R0b20tc2VjdGlvbiddfT5ad2FsbGV0IGlzIGFuIGFwcGxpY2F0aW9uIHRoYXQgZm9jdXNzaW5nIGluIGJhbmtpbmcgbmVlZHMgZm9yIGFsbCB1c2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbiB0aGUgd29ybGQuIEFsd2F5cyB1cGRhdGVkIGFuZCBhbHdheXMgZm9sbG93aW5nIHdvcmxkIHRyZW5kcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgNTAwMCsgdXNlcnMgcmVnaXN0ZXJlZCBpbiBad2FsbGV0IGV2ZXJ5ZGF5IHdpdGggd29ybGR3aWRlXHJcbiAgICAgICAgICAgICAgICB1c2VycyBjb3ZlcmFnZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXtzdHlsZVtcImF1dGgtbG9naW5cIl19PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsndGl0bGUtYXNpZGUnXX0+U3RhcnQgQWNjZXNzaW5nIEJhbmtpbmcgTmVlZHNcclxuICAgICAgICAgICAgICAgIFdpdGggQWxsIERldmljZXMgYW5kIEFsbCBQbGF0Zm9ybXNcclxuICAgICAgICAgICAgICAgIFdpdGggMzAuMDAwKyBVc2VyczwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVbJ3N1YnRpdGxlLWFzaWRlJ119PlRyYW5zZmVyaW5nIG1vbmV5IGlzIGVhc3NpZXIgdGhhbiBldmVyLCB5b3UgY2FuIGFjY2VzcyBad2FsbGV0IHdoZXJldmVyIHlvdSBhcmUuIERlc2t0b3AsIGxhcHRvcCwgbW9iaWxlIHBob25lPyB3ZSBjb3ZlciBhbGwgb2YgdGhhdCBmb3IgeW91ITwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogbW9iaWxlICovfVxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVbJ3RpdGxlLWFzaWRlLW1vYmlsZSddfT5Mb2dpbjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlWydzdWJ0aXRsZS1hc2lkZS1tb2JpbGUnXX0+TG9naW4gdG8geW91ciBleGlzdGluZyBhY2NvdW50IHRvIGFjY2Vzc1xyXG5hbGwgdGhlIGZlYXR1cmVzIGluIFp3YWxsZXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgey8qIGVuZCBtb2JpbGUgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtbW1wibXQtNVwiXSwgc3R5bGVbXCJmb3JtLWFzaWRlXCJdXS5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFbnZlbG9wZX0gY2xhc3NOYW1lPXtkYXRhLmVtYWlsID09PSBcIlwiID8gc3R5bGUuaWNvbkVtYWlsIDogc3R5bGVbXCJpY29uTG9naW4tYWN0aXZlXCJdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tbXCJmb3JtLWNvbnRyb2wgbXQtMVwiXSwgc3R5bGVbXCJmb3JtLWNvbnRyb2xcIl1dLmpvaW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZS1tYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMb2NrfSBjbGFzc05hbWU9e2RhdGEucGFzc3dvcmQgPT09IFwiXCIgPyBzdHlsZS5pY29uUGFzc3dvcmQgOiBzdHlsZVtcImljb25Mb2dpbi1hY3RpdmVcIl19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17KGlzUGFzc3dvcmRTaG93KSA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbW1wiZm9ybS1jb250cm9sIG10LTFcIl0sIHN0eWxlW1wiZm9ybS1jb250cm9sXCJdXS5qb2luKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2lzUGFzc3dvcmRTaG93ID8gZmFFeWUgOiBmYUV5ZVNsYXNofSBjbGFzc05hbWU9e3N0eWxlLmljb25QYXNzfSBvbkNsaWNrPXt0b29nbGVQYXNzd29yZFZpc2liaWxpdHl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydmb3Jnb3QtcGFzcyddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL2ZvcmdvdC1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+Rm9yZ290IFBhc3N3b3JkPzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtkYXRhLmVtYWlsID09PSBcIlwiICYmIGRhdGEucGFzc3dvcmQgPT09IFwiXCIgPyBbW1wibXQtNSBidG5cIl0sIHN0eWxlW1wiYnRuLWF1dGhcIl1dLmpvaW4oXCIgXCIpIDogW1tcIm10LTUgYnRuXCJdLCBzdHlsZVtcImJ0bi1hdXRoLWFjdGl2ZVwiXV0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGF0YS5lbWFpbCA9PT0gXCJcIiAmJiBkYXRhLnBhc3N3b3JkID09PSBcIlwiID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9naW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZVsnZG9udC1oYXZlYWNjJ119PkRvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyBMZXTigJlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9zaWdudXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBTaWduIFVwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgPC9tYWluID5cclxuICAgICk7XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=