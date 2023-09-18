import { forwardRef } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText, { FormHelperTextProps as MUIFormHelperTextProps } from '@mui/material/FormHelperText';
import FormControl, { FormControlProps as MUIFormControlProps } from '@mui/material/FormControl';
import { default as MUISelect, SelectProps as MUISelectProps } from '@mui/material/Select';
import styled from '@mui/material/styles/styled';

interface SelectMenuOption {
    [index: string]: string | number;
}

type BorderColorType = 'primary' | 'secondary' | 'tertiary' | 'info' | 'warning' | 'success' | 'error';
export interface SelectProps extends Omit<MUISelectProps, 'color' | 'classes'> {
    label: string;
    options: SelectMenuOption[];
    labelId?: string;
    id?: string;
    size?: 'small' | 'medium';
    optionLabelKeyname?: string;
    optionValueKeyname?: string;
    borderColor?: BorderColorType;
    helperText?: string | React.ReactNode;
    error?: boolean;
    color?: BorderColorType;
}

export { SelectChangeEvent } from '@mui/material';

interface FormControlProps extends MUIFormControlProps {
    borderColor?: BorderColorType;
}

interface FormHelperTextProps extends MUIFormHelperTextProps {
    color?: BorderColorType;
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

const StyleFormHelperText = styled(FormHelperText, {
    shouldForwardProp(propName) {
        return !(propName === 'color');
    }
})<FormHelperTextProps>(({ theme, color }) => {
    if (!color) {
        return {};
    }
    const colorValFromTheme = theme.palette?.[color]?.main;
    return {
        '&.Mui-error': {
            color: colorValFromTheme,
            fontSize: '14px'
        }
    };
});
export const Select = forwardRef<HTMLDivElement, SelectProps>(
    ({ id, labelId, options, size, label, optionLabelKeyname = 'label', optionValueKeyname = 'value', borderColor, helperText, error, color, ...rest }, ref) => (
        <>
            <StyledFormControl fullWidth ref={ref} size={size} borderColor={borderColor}>
                <InputLabel id={labelId}>{label}</InputLabel>
                <MUISelect {...rest} labelId={labelId} label={label} id={id}>
                    {options.map((item, index) => (
                        <MenuItem key={index} value={item[optionValueKeyname]}>
                            {item[optionLabelKeyname]}
                        </MenuItem>
                    ))}
                </MUISelect>
            </StyledFormControl>
            {helperText && (
                <StyleFormHelperText error color={color}>
                    {helperText}
                </StyleFormHelperText>
            )}
        </>
    )
);

Select.defaultProps = {
    label: 'Select',
    labelId: 'demo-simple-select-label',
    id: 'demo-simple-select',
    size: 'small',
    error: false,
    color: 'warning',
    helperText: 'invalid input!!'
};
