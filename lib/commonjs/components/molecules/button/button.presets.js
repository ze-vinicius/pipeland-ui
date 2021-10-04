"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textVariants = exports.buttonVariants = exports.buttonSizes = void 0;
const buttonSizes = {
  small: {
    p: 1,
    borderRadius: '4px'
  },
  medium: {
    p: 2,
    borderRadius: '4px'
  },
  large: {
    p: 3,
    borderRadius: '4px'
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