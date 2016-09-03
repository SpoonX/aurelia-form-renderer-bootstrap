define(['exports', './aurelia-form-renderer-bootstrap'], function (exports, _aureliaFormRendererBootstrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaFormRendererBootstrap).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaFormRendererBootstrap[key];
      }
    });
  });
});