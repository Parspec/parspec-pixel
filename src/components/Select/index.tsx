import { forwardRef } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl, { FormControlProps as MUIFormControlProps } from '@mui/material/FormControl';
import { default as MUISelect, SelectProps as MUISelectProps } from '@mui/material/Select';
import styled from '@mui/material/styles/styled';

interface SelectMenuOption {
    [index: string]: string | number | boolean | undefined;
    color?: string;
    disabled?: boolean;
}

type BorderColorType = 'primary' | 'secondary' | 'tertiary' | 'info' | 'warning' | 'success' | 'error';
export interface SelectProps extends Omit<MUISelectProps, 'classes'> {
    label?: string;
    options: SelectMenuOption[];
    labelId?: string;
    id?: string;
    size?: 'small' | 'medium';
    optionLabelKeyname?: string;
    optionValueKeyname?: string;
    borderColor?: BorderColorType;
}

export { SelectChangeEvent } from '@mui/material';

interface FormControlProps extends MUIFormControlProps {
    borderColor?: BorderColorType;
}

const StyledFormControl = styled(FormControl, {
    shouldForwardProp(propName) {
        return !(propName === 'borderColor');
    }
})<FormControlProps>(({ theme, borderColor }) => {
    if (!borderColor) {
        return {};
    }
    const colorValFromTheme = theme.palette?.[borderColor]?.main;
    return {
        '& label.Mui-focused, & label.MuiInputLabel-shrink': {
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

export const Select = forwardRef<HTMLDivElement, SelectProps>(({ id, labelId, options, size, label, optionLabelKeyname = 'label', optionValueKeyname = 'value', borderColor, ...rest }, ref) => (
    <StyledFormControl fullWidth ref={ref} size={size} borderColor={borderColor}>
        {label && <InputLabel id={labelId}>{label}</InputLabel>}
        <MUISelect {...rest} labelId={labelId} label={label} id={id}>
            {options.map((item, index) => (
                <MenuItem key={index} value={item[optionValueKeyname] as string | number} sx={item?.color ? { color: item.color } : undefined} disabled={item.disabled}>
                    {item[optionLabelKeyname]}
                </MenuItem>
            ))}
        </MUISelect>
    </StyledFormControl>
));

Select.defaultProps = {
    labelId: 'demo-simple-select-label',
    id: 'demo-simple-select',
    size: 'small'
};
