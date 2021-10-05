import { TextStyleProps } from '../../atoms/text';
import { ButtonStyleProps } from './button.props';
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
export declare const buttonVariants: Record<string, ButtonStyleProps>;
export declare const textVariants: Record<ButtonVariants, TextStyleProps>;
export declare type ButtonVariants = 'primary' | 'ghost' | 'outline';
export declare type ButtonSizes = keyof typeof buttonSizes;
