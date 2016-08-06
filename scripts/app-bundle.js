define('app',['exports', 'aurelia-http-client'], function (exports, _aureliaHttpClient) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    var _this = this;

    _classCallCheck(this, App);

    this.visibility = [];
    this.level = [];
    this.currentVisibility = 'Public';
    this.currentLevel = 'Activated';

    this.message = 'Hello World!';

    var client = new _aureliaHttpClient.HttpClient();

    client.get('data/visibility.json').then(function (data) {
      return _this.visibility = data.content.visibility;
    });

    client.get('data/level.json').then(function (data) {
      return _this.level = data.content.level;
    });
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('resources/elements/dropdown',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Dropdown = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var Dropdown = exports.Dropdown = (_class = function () {
    function Dropdown() {
      _classCallCheck(this, Dropdown);

      _initDefineProp(this, 'options', _descriptor, this);

      _initDefineProp(this, 'isOpen', _descriptor2, this);

      _initDefineProp(this, 'prompt', _descriptor3, this);

      _initDefineProp(this, 'current', _descriptor4, this);
    }

    Dropdown.prototype.toggleOpen = function toggleOpen() {
      this.isOpen = !this.isOpen;
    };

    Dropdown.prototype.selectItem = function selectItem(selected) {
      this.current = selected.name;
      this.isOpen = false;
    };

    Dropdown.prototype.clearSelected = function clearSelected() {
      this.current = '';
    };

    return Dropdown;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'options', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'isOpen', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'prompt', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'Select item';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'current', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  })), _class);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./resources/elements/dropdown\"></require>\n  <dropdown options.bind=\"visibility\" current.bind=\"currentVisibility\"></dropdown>\n  <dropdown if.bind=\"!isLoadingLevels\" options.bind=\"level\" current.bind=\"currentLevel\"></dropdown>\n  ${isLoadingLevels}\n</template>\n"; });
define('text!resources/elements/dropdown.html', ['module'], function(module) { module.exports = "<template>\n  <div>\n    <a href=\"\" click.trigger=\"toggleOpen()\">\n      <span if.bind=\"current\">${current}</span>\n      <span if.bind=\"!current\">${prompt}</span>\n    </a>\n    <a href=\"\" if.bind=\"current\" click.trigger=\"clearSelected()\" style=\"margin-left: 5px;\">X</a>\n  <div>\n  <div if.bind=\"isOpen\">\n  <div repeat.for=\"item of options\" click.trigger=\"selectItem(item)\">\n    ${item.name}\n  </div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map