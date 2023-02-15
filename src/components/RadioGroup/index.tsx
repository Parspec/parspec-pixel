import { ReactNode, forwardRef } from 'react';
import { default as MUIRadioGroup, RadioGroupProps as MUIRadioGroupProps } from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';

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
    size?: 'small' | 'medium' | 'large';
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(({ options, label, name, size, ...rest }, ref) => {
    const radioControlProps = {
        size: size
    };
    if (size && size === 'large') {
        delete radioControlProps['size'];
        radioControlProps['sx'] = {
            '& .MuiSvgIcon-root': {
                fontSize: 28
            }
        };
    }

    return (
        <Box ref={ref}>
            <FormLabel>{label}</FormLabel>
            <MUIRadioGroup {...rest} name={name}>
                {options.map((item, index) => (
                    <>
                        <FormControlLabel key={index} value={item.value} control={<Radio {...radioControlProps} />} label={item.label} />
                        {item.helper && !rest.row && <Box ml={8}>{item.helper}</Box>}
                    </>
                ))}
            </MUIRadioGroup>
        </Box>
    );
});

RadioGroup.defaultProps = {
    label: 'Radio Group',
    name: 'radio-group-name-control',
    size: 'small'
};
