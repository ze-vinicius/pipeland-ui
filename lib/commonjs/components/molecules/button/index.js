"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require("./button");

Object.keys(_button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _button[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _button[key];
    }
  });
});

var _button2 = require("./button.props");

Object.keys(_button2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _button2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _button2[key];
    }
  });
});
//# sourceMappingURL=index.js.map