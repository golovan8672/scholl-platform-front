function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var parallaxTiltEffect = /*#__PURE__*/function () {
  function parallaxTiltEffect(_ref) {
    var element = _ref.element,
        tiltEffect = _ref.tiltEffect;

    _classCallCheck(this, parallaxTiltEffect);

    this.element = element;
    this.container = this.element.querySelector(".cardContainer");
    this.size = [300, 360];

    var _this$size = _slicedToArray(this.size, 2);

    this.w = _this$size[0];
    this.h = _this$size[1];
    this.tiltEffect = tiltEffect;
    this.mouseOnComponent = false;
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.defaultStates = this.defaultStates.bind(this);
    this.setProperty = this.setProperty.bind(this);
    this.init = this.init.bind(this);
    this.init();
  }

  _createClass(parallaxTiltEffect, [{
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      var offsetX = event.offsetX,
          offsetY = event.offsetY;
      var X;
      var Y;

      if (this.tiltEffect === "reverse") {
        X = (offsetX - this.w / 2) / 3 / 3;
        Y = -(offsetY - this.h / 2) / 3 / 3;
      } else if (this.tiltEffect === "normal") {
        X = -(offsetX - this.w / 2) / 3 / 3;
        Y = (offsetY - this.h / 2) / 3 / 3;
      }

      this.setProperty('--rY', X.toFixed(2));
      this.setProperty('--rX', Y.toFixed(2));
      this.setProperty('--bY', 80 - (X / 4).toFixed(2) + '%');
      this.setProperty('--bX', 50 - (Y / 4).toFixed(2) + '%');
    }
  }, {
    key: "handleMouseEnter",
    value: function handleMouseEnter() {
      this.mouseOnComponent = true;
      this.container.classList.add("containerActive");
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave() {
      this.mouseOnComponent = false;
      this.defaultStates();
    }
  }, {
    key: "defaultStates",
    value: function defaultStates() {
      this.container.classList.remove("containerActive");
      this.setProperty('--rY', 0);
      this.setProperty('--rX', 0);
      this.setProperty('--bY', '80%');
      this.setProperty('--bX', '50%');
    }
  }, {
    key: "setProperty",
    value: function setProperty(p, v) {
      return this.container.style.setProperty(p, v);
    }
  }, {
    key: "init",
    value: function init() {
      this.element.addEventListener('mousemove', this.handleMouseMove);
      this.element.addEventListener('mouseenter', this.handleMouseEnter);
      this.element.addEventListener('mouseleave', this.handleMouseLeave);
    }
  }]);

  return parallaxTiltEffect;
}();

var $ = function $(e) {
  return document.querySelector(e);
};

export var wrap1 = new parallaxTiltEffect({
  element: $('.cardWrap'),
  tiltEffect: 'reverse'
});