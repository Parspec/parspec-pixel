/// <reference types="react" />
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';
export interface ButtonProps extends Omit<MUIButtonProps, 'classes'> {
    color?: 'primary' | 'secondary' | 'tertiary' | 'error';
    isLoading?: boolean;
}
export declare const Button: import("react").ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
