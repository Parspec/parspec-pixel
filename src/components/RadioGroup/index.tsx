import React from 'react';
import { default as MUIRadioGroup, RadioGroupProps as MUIRadioGroupProps } from '@mui/material/RadioGroup';

export interface RadioGroupProps extends MUIRadioGroupProps {
    value: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ children, ...rest }) => {
    return <MUIRadioGroup {...rest}>{children && children}</MUIRadioGroup>;
};
