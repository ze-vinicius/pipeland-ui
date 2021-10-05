"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = void 0;

const merge = (a, b) => {
  const result = { ...a,
    ...b
  };
  Object.keys(a).forEach(key => {
    if (!a[key] || typeof b[key] !== 'object') return;
    Object.assign(result, {
      [key]: Object.assign(a[key], b[key])
    });
  });
  return result;
};

exports.merge = merge;
//# sourceMappingURL=index.js.map