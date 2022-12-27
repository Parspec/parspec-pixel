import React from 'react';
import { default as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material/Button';

export interface ButtonProps extends MUIButtonProps {
    color: 'primary' | 'secondary';
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
    return <MUIButton {...props} />;
};

Button.defaultProps = {
    color: 'primary'
};
