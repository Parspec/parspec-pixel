import React from 'react';
import { default as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material/Button';

export interface ButtonProps extends Omit<MUIButtonProps, 'classes'> {
    color?: 'primary' | 'secondary';
}

export const Button: React.FunctionComponent<ButtonProps> = ({ disabled, ...rest }) => {
    return <MUIButton sx={disabled ? { opacity: 0.5 } : {}} {...rest} />;
};

Button.defaultProps = {
    color: 'primary'
};
