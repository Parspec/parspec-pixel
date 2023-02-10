/// <reference types="react" />
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';
export interface ButtonProps extends Omit<MUIButtonProps, 'classes'> {
    color?: 'primary' | 'secondary';
    isLoading?: boolean;
}
export declare const Button: React.FunctionComponent<ButtonProps>;
