export const buttonSizes = {
  small: {
    p: 1,
    borderRadius: '4px',
  },
  medium: {
    p: 2,
    borderRadius: '4px',
  },
  large: {
    p: 3,
    borderRadius: '4px',
  },
};

export const buttonVariants = {
  primary: {
    backgroundColor: 'primary',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: 'primary',
    borderWidth: '1px',
  },
};

export const textVariants = {
  primary: {
    color: 'white',
  },
  ghost: {
    color: 'primary',
  },
  outline: {
    color: 'primary',
  },
};

export type ButtonVariants = keyof typeof buttonVariants;
export type ButtonSizes = keyof typeof buttonSizes;
