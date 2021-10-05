"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.variants = void 0;
const BASE_STYLE = {
  color: 'main',
  fontSize: 2
};
const variants = {
  header: { ...BASE_STYLE,
    fontSize: 4,
    fontWeight: 'bold'
  },
  title: { ...BASE_STYLE,
    fontSize: 3,
    fontWeight: 'bold'
  },
  subtitle: { ...BASE_STYLE,
    color: 'gray'
  },
  body1: { ...BASE_STYLE
  },
  body2: { ...BASE_STYLE,
    fontSize: 1
  },
  caption: { ...BASE_STYLE,
    fontSize: 0,
    color: 'gray'
  },
  button: { ...BASE_STYLE,
    fontWeight: 500,
    textTransform: 'uppercase'
  }
};
exports.variants = variants;
//# sourceMappingURL=text.presets.js.map