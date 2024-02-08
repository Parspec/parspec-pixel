import { ReactNode, forwardRef } from 'react';
import { default as MUIRadioGroup, RadioGroupProps as MUIRadioGroupProps } from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormHelperText } from '@mui/material';
import { FormControl } from '../FormControl';

import { Radio } from '../Radio';
import { Box } from '../Box';

interface FormLabelParams {
    value: string;
    label: string | ReactNode;
    helper?: ReactNode;
}

export interface RadioGroupProps extends MUIRadioGroupProps {
    label: string;
    options: FormLabelParams[];
    name: string;
    size?: 'small' | 'medium';
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(({ options, label, name, size = 'small', error, helperText, disabled, ...rest }, ref) => (
    <FormControl error={error} ref={ref}>
        <FormLabel>{label}</FormLabel>
        <MUIRadioGroup {...rest} name={name}>
            {options.map((item, index) => (
                <>
                    <FormControlLabel key={index} value={item.value} control={<Radio size={size} disabled={disabled} />} label={item.label} />
                    {item.helper && !rest.row && (
                        <Box ml={8} mt={2}>
                            {item.helper}
                        </Box>
                    )}
                </>
            ))}
        </MUIRadioGroup>
        {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
));

RadioGroup.defaultProps = {
    name: 'radio-group-name-control',
    error: false,
    helperText: '',
    disabled: false
};
