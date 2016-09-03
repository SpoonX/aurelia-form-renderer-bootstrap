'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaFormRendererBootstrap = require('./aurelia-form-renderer-bootstrap');

Object.keys(_aureliaFormRendererBootstrap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaFormRendererBootstrap[key];
    }
  });
});