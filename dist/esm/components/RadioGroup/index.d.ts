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
}
export interface CustomRadioGroupProps extends RadioGroupProps {
    gap: number;
}
export declare const RadioGroup: import("react").ForwardRefExoticComponent<Omit<RadioGroupProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export declare const CustomRadioGroup: import("react").ForwardRefExoticComponent<Omit<CustomRadioGroupProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export {};
