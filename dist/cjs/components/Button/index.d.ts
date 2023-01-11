import React from 'react';
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';
export interface ButtonProps extends Omit<MUIButtonProps, 'classes'> {
    color?: 'primary' | 'secondary';
}
export declare const Button: React.FunctionComponent<ButtonProps>;
