"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _text = require("./text");

Object.keys(_text).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _text[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _text[key];
    }
  });
});

var _text2 = require("./text.props");

Object.keys(_text2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _text2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _text2[key];
    }
  });
});
//# sourceMappingURL=index.js.map