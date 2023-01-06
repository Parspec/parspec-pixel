import React from 'react';
import { default as MUIGrid, GridProps } from '@mui/material/Grid';

export const Grid: React.FunctionComponent<GridProps> = (props) => {
    return <MUIGrid {...props} />;
};
