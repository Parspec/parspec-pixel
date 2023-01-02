import React from 'react';
import { default as MUIRadioGroup, RadioGroupProps as MUIRadioGroupProps } from '@mui/material/RadioGroup';

import FormLabel from '@mui/material/FormLabel';

import { Radio } from '../Radio/index';

import FormControlLabel from '@mui/material/FormControlLabel';

interface FormLabelParams {
    value: string;
    displayText: string;
}

export interface RadioGroupProps extends MUIRadioGroupProps {
    title: string;
    options: FormLabelParams[];
    name: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ options, title, ...rest }) => (
    <>
        <FormLabel>{title}</FormLabel>
        <MUIRadioGroup {...rest}>
            {options.map((item, index) => (
                <FormControlLabel key={index} value={item.value} control={<Radio />} label={item.displayText} />
            ))}
        </MUIRadioGroup>
    </>
);
