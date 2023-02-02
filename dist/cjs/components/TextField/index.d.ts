/// <reference types="react" />
import { TextFieldProps as MUITextFieldProps } from '@mui/material/TextField';
export interface TextFieldProps extends Omit<MUITextFieldProps, 'margin' | 'classes' | 'sx'> {
    variant?: 'standard' | 'outlined' | 'filled';
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    error?: boolean;
}
export declare const TextField: React.FC<TextFieldProps>;
