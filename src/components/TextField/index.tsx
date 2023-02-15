import { default as MUITextField, TextFieldProps as MUITextFieldProps } from '@mui/material/TextField';
import { forwardRef } from 'react';

export interface TextFieldProps extends Omit<MUITextFieldProps, 'margin' | 'classes'> {
    label: string;
    variant?: 'standard' | 'outlined' | 'filled';
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    error?: boolean;
    size?: 'small' | 'medium';
}

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(({ variant, color, error, size, label, ...rest }, ref) => (
    <MUITextField fullWidth label={label} ref={ref} size={size} variant={variant} color={color} error={error} {...rest} />
));

TextField.defaultProps = {
    variant: 'outlined',
    color: 'primary',
    error: false,
    size: 'small'
};
