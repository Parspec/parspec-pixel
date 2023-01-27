import React, { ReactNode } from 'react';
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
}
export declare const RadioGroup: React.FC<RadioGroupProps>;
export {};
