import { ReactNode } from 'react';
import { RadioGroupProps as MUIRadioGroupProps } from '@mui/material/RadioGroup';
interface FormLabelParams {
    value: string;
    label: string;
    helper?: ReactNode;
}
export interface RadioGroupProps extends MUIRadioGroupProps {
    label: string;
    options: FormLabelParams[];
    name: string;
    size?: 'small' | 'medium';
    error?: boolean;
    helperText?: string;
}
export declare const RadioGroup: import("react").ForwardRefExoticComponent<Omit<RadioGroupProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export {};
