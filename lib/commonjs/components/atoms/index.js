"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _box = require("./box");

Object.keys(_box).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _box[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _box[key];
    }
  });
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
//# sourceMappingURL=index.js.map