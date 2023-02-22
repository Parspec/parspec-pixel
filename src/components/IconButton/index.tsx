import React from 'react';
import { default as MUIIconButton, IconButtonProps } from '@mui/material/IconButton';

export const IconButton: React.FunctionComponent<IconButtonProps> = (props) => {
    return <MUIIconButton {...props} />;
};
