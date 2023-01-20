import React from 'react';
import { default as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material/Button';
import { CircularProgressIcon } from '../Icons';

export interface ButtonProps extends Omit<MUIButtonProps, 'classes'> {
    color?: 'primary' | 'secondary';
    isLoading?: boolean;
}

const spinColor = {
    primary: 'secondary',
    secondary: 'primary'
};

export const Button: React.FunctionComponent<ButtonProps> = ({ disabled, isLoading, ...rest }) => {
    return (
        <MUIButton
            {...rest}
            sx={disabled || isLoading ? { opacity: 0.5, pointerEvents: 'none' } : {}}
            startIcon={isLoading ? <CircularProgressIcon color={rest.variant === 'contained' ? (spinColor[rest.color!] as typeof rest.color) : 'inherit'} size="1rem" /> : null}
        />
    );
};

Button.defaultProps = {
    color: 'primary',
    variant: 'contained'
};
