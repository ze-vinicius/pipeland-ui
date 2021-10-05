const borderBaseStyle = {
  borderRadius: '4px'
};
export const buttonSizes = {
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
export const buttonVariants = {
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
export const textVariants = {
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
//# sourceMappingURL=button.presets.js.map