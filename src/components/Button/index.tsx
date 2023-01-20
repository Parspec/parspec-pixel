import React from 'react';
import { default as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material/Button';
import { CircularProgressIcon } from '../Icons';

export interface ButtonProps extends Omit<MUIButtonProps, 'classes'> {
    color?: 'primary' | 'secondary';
    isLoading?: boolean;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ disabled, isLoading, ...rest }) => {
    return (
        <MUIButton
            sx={disabled || isLoading ? { opacity: 0.5, pointerEvents: 'none' } : {}}
            startIcon={isLoading ? <CircularProgressIcon color="secondary" size="1rem" /> : null}
            disabled={disabled}
            {...rest}
        />
    );
};

Button.defaultProps = {
    color: 'primary',
    variant: 'contained'
};
