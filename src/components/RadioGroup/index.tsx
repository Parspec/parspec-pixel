import React, { ReactNode } from 'react';
import { default as MUIRadioGroup, RadioGroupProps as MUIRadioGroupProps } from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Radio } from '../Radio';

interface FormLabelParams {
    value: string;
    label: string;
    helper: ReactNode;
}

export interface RadioGroupProps extends MUIRadioGroupProps {
    label: string;
    options: FormLabelParams[];
    name: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ options, label, name, ...rest }) => (
    <>
        <FormLabel>{label}</FormLabel>
        <MUIRadioGroup {...rest} name={name}>
            {options.map((item, index) => (
                <>
                    <FormControlLabel key={index} value={item.value} control={<Radio />} label={item.label} />
                    {item.helper && !rest.row && item.helper}
                </>
            ))}
        </MUIRadioGroup>
    </>
);

RadioGroup.defaultProps = {
    label: 'Radio Group',
    name: 'radio-group-name-control'
};
