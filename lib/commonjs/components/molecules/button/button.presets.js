"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textVariants = exports.buttonVariants = exports.buttonSizes = void 0;
const borderBaseStyle = {
  borderRadius: '4px'
};
const buttonSizes = {
  small: { ...borderBaseStyle,
    p: 1
  },
  medium: { ...borderBaseStyle,
    p: 2
  },
  large: { ...borderBaseStyle,
    p: 3
  }
};
exports.buttonSizes = buttonSizes;
const buttonVariants = {
  primary: {
    backgroundColor: 'primary'
  },
  ghost: {
    backgroundColor: 'transparent'
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: 'primary',
    borderWidth: '1px'
  }
};
exports.buttonVariants = buttonVariants;
const textVariants = {
  primary: {
    color: 'white'
  },
  ghost: {
    color: 'primary'
  },
  outline: {
    color: 'primary'
  }
};
exports.textVariants = textVariants;
//# sourceMappingURL=button.presets.js.map