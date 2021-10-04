"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _atoms = require("./atoms");

Object.keys(_atoms).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _atoms[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _atoms[key];
    }
  });
});

var _molecules = require("./molecules");

Object.keys(_molecules).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _molecules[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _molecules[key];
    }
  });
});
//# sourceMappingURL=index.js.map