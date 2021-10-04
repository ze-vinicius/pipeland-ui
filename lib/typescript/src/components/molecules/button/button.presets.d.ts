export declare const buttonSizes: {
    small: {
        p: number;
        borderRadius: string;
    };
    medium: {
        p: number;
        borderRadius: string;
    };
    large: {
        p: number;
        borderRadius: string;
    };
};
export declare const buttonVariants: {
    primary: {
        backgroundColor: string;
    };
    ghost: {
        backgroundColor: string;
    };
    outline: {
        backgroundColor: string;
        borderColor: string;
        borderWidth: string;
    };
};
export declare const textVariants: {
    primary: {
        color: string;
    };
    ghost: {
        color: string;
    };
    outline: {
        color: string;
    };
};
export declare type ButtonVariants = keyof typeof buttonVariants;
export declare type ButtonSizes = keyof typeof buttonSizes;
