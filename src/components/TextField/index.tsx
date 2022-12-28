import React from 'react';
import { default as MUITextField, TextFieldProps } from '@mui/material/TextField';



export const TextField: React.FunctionComponent<TextFieldProps> = (props) => {
    return <MUITextField {...props} />;
};
