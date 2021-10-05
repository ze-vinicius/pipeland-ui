"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.variants = void 0;
const baseStyle = {
  color: 'main',
  fontSize: 2
};
const variants = {
  header: { ...baseStyle,
    fontSize: 4,
    fontWeight: 'bold'
  },
  title: { ...baseStyle,
    fontSize: 3,
    fontWeight: 'bold'
  },
  subtitle: { ...baseStyle,
    color: 5
  },
  body1: { ...baseStyle
  },
  body2: { ...baseStyle,
    fontSize: 1
  },
  caption: { ...baseStyle,
    fontSize: 0,
    color: 'gray'
  },
  button: { ...baseStyle,
    fontWeight: 500,
    textTransform: 'uppercase'
  }
};
exports.variants = variants;
//# sourceMappingURL=text.presets.js.map