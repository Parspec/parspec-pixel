/// <reference types="react" />
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';
export interface ButtonProps extends Omit<MUIButtonProps, 'classes'> {
    color?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'success' | 'warning';
    isLoading?: boolean;
    size?: 'xs' | 'small' | 'medium' | 'large';
}
export declare const Button: import("react").ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
