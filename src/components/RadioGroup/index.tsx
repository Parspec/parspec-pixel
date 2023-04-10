import { ReactNode, forwardRef } from 'react';
import { default as MUIRadioGroup, RadioGroupProps as MUIRadioGroupProps } from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl } from '@mui/material';

import { Radio } from '../Radio';
import { Box } from '../Box';

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

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(({ options, label, name, size = 'small', ...rest }, ref) => (
    <Box ref={ref}>
        <FormLabel>{label}</FormLabel>
        <MUIRadioGroup {...rest} name={name}>
            {options.map((item, index) => (
                <>
                    <FormControlLabel key={index} value={item.value} control={<Radio size={size} />} label={item.label} />
                    {item.helper && !rest.row && <Box ml={8}>{item.helper}</Box>}
                </>
            ))}
        </MUIRadioGroup>
    </Box>
));

export const CustomRadioGroup = forwardRef<HTMLDivElement, CustomRadioGroupProps>(({ options, label, name, size = 'small', gap, ...rest }, ref) => (
    <FormControl
        color="secondary"
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}
        ref={ref}
    >
        <FormLabel>{label}</FormLabel>
        <MUIRadioGroup row={true} {...rest} name={name}>
            {options.map((item, index) => (
                <Box
                    sx={{
                        ml: gap
                    }}
                >
                    <FormControlLabel key={index} value={item.value} control={<Radio size={size} />} label={item.label} />
                </Box>
            ))}
        </MUIRadioGroup>
    </FormControl>
));

RadioGroup.defaultProps = {
    name: 'radio-group-name-control'
};

CustomRadioGroup.defaultProps = {
    name: 'radio-group-name-control',
    gap: 4
};
