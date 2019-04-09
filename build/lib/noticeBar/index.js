(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = global || self, global['vine-design-noticeBar'] = factory(global.react));
}(this, function (React) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var NoticeBar = function (_React$PureComponent) {
    inherits(NoticeBar, _React$PureComponent);

    function NoticeBar(props) {
      classCallCheck(this, NoticeBar);

      var _this = possibleConstructorReturn(this, (NoticeBar.__proto__ || Object.getPrototypeOf(NoticeBar)).call(this, props));

      _this.state = {
        name: 'I am a NoticeBar'
      };
      return _this;
    }

    createClass(NoticeBar, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log(111);
      }
    }, {
      key: 'render',
      value: function render() {
        var name = this.state.name;


        return React.createElement(
          'div',
          null,
          name
        );
      }
    }]);
    return NoticeBar;
  }(React.PureComponent);

  return NoticeBar;

}));
