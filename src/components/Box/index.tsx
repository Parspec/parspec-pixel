import React from 'react';
import { default as MUIBox, BoxProps } from '@mui/material/Box';

export const Box: React.FunctionComponent<BoxProps> = (props) => {
    return <MUIBox {...props} />;
};
