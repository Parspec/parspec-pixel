import React from 'react';
import { default as MUIButton, ButtonProps } from '@mui/material/Button';

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
    return <MUIButton {...props} />;
};
