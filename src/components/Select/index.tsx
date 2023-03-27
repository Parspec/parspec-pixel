import { forwardRef } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl, { FormControlProps as MUIFormControlProps } from '@mui/material/FormControl';
import { default as MUISelect, SelectProps as MUISelectProps } from '@mui/material/Select';
import styled from '@mui/material/styles/styled';

interface SelectMenuOption {
    [index: string]: string | number;
}

type currentColorType = 'primary' | 'secondary' | 'tertiary' | 'info' | 'warning' | 'success' | 'error';
export interface SelectProps extends Omit<MUISelectProps, 'classes'> {
    label: string;
    options: SelectMenuOption[];
    labelId: string;
    id: string;
    size?: 'small' | 'medium';
    optionLabelKeyname?: string;
    optionValueKeyname?: string;
    currentColor?: currentColorType;
}

interface FormControlProps extends MUIFormControlProps {
    currentColor?: currentColorType;
}

const StyledFormControl = styled(FormControl, {
    shouldForwardProp(propName) {
        return !(propName === 'currentColor');
    }
})<FormControlProps>(({ theme, currentColor }: FormControlProps) => {
    const colorValFromTheme = theme.palette[currentColor].main;
    return {
        '& label.Mui-focused': {
            color: colorValFromTheme
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: colorValFromTheme
            },
            '&:hover fieldset': {
                borderColor: colorValFromTheme
            },
            '&.Mui-focused fieldset': {
                borderColor: colorValFromTheme
            }
        }
    };
});

export const Select = forwardRef<HTMLDivElement, SelectProps>(({ id, labelId, options, size, label, optionLabelKeyname = 'label', optionValueKeyname = 'value', currentColor, ...rest }, ref) => (
    <StyledFormControl fullWidth ref={ref} size={size} currentColor={currentColor}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <MUISelect {...rest} labelId={labelId} label={label} id={id}>
            {options.map((item, index) => (
                <MenuItem key={index} value={item[optionValueKeyname]}>
                    {item[optionLabelKeyname]}
                </MenuItem>
            ))}
        </MUISelect>
    </StyledFormControl>
));

Select.defaultProps = {
    label: 'Select',
    labelId: 'demo-simple-select-label',
    id: 'demo-simple-select',
    size: 'small'
};
