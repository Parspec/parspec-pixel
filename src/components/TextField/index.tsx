import { default as MUITextField, TextFieldProps as MUITextFieldProps } from '@mui/material/TextField';
import { forwardRef } from 'react';

export interface TextFieldProps extends Omit<MUITextFieldProps, 'margin' | 'classes' | 'sx'> {
    variant?: 'standard' | 'outlined' | 'filled';
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    error?: boolean;
}

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => <MUITextField ref={ref} {...props} />);

TextField.defaultProps = {
    variant: 'outlined',
    color: 'primary'
};
