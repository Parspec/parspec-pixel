/// <reference types="react" />
import { TextFieldProps as MUITextFieldProps } from '@mui/material/TextField';
export interface TextFieldProps extends Omit<MUITextFieldProps, 'margin' | 'classes'> {
    label: string;
    variant?: 'standard' | 'outlined' | 'filled';
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    error?: boolean;
    size?: 'small' | 'medium';
    chips?: Array<string>;
    onChipDelete?: (index: number) => void;
    helperText?: string | React.ReactNode;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    scrollAreaHeight?: number;
}
export declare const TextField: import("react").ForwardRefExoticComponent<Omit<TextFieldProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
