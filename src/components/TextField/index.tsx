import React from 'react';
import { default as MUITextField, TextFieldProps as MUITextFieldProps } from '@mui/material/TextField';

import { ThemeProvider } from '../../theme/ThemeProvider';

export interface TextFieldProps extends Omit<MUITextFieldProps, 'margin' | 'classes' | 'sx'> {
    variant: 'standard' | 'outlined' | 'filled';
    color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    error: boolean;
}

export const TextField: React.FC<TextFieldProps> = (props) => {
    return (
        <ThemeProvider>
            <MUITextField {...props} />
        </ThemeProvider>
    );
};

TextField.defaultProps = {
    variant: 'outlined',
    color: 'primary',
    label: 'text-field',
    placeholder: 'Enter something'
};
