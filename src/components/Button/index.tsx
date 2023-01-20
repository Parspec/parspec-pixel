import React from 'react';
import { default as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material/Button';

export interface ButtonProps extends Omit<MUIButtonProps, 'classes'> {
    color?: 'primary' | 'secondary';
    isLoading?: boolean;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ disabled, isLoading, ...rest }) => {
    return <MUIButton sx={disabled ? { opacity: 0.5 } : {}} disabled={isLoading || disabled} {...rest} />;
};

Button.defaultProps = {
    color: 'primary',
    variant: 'contained'
};
