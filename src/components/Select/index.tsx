import { forwardRef } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl, { FormControlProps as MUIFormControlProps } from '@mui/material/FormControl';
import { default as MUISelect, SelectProps as MUISelectProps } from '@mui/material/Select';
import styled from '@mui/material/styles/styled';

interface SelectMenuOption {
    [index: string]: string | number;
}

type ColorType = 'primary' | 'secondary' | 'tertiary' | 'info' | 'warning' | 'success' | 'error';
type SelectType = 'standard' | 'filled';

export interface SelectProps extends Omit<MUISelectProps, 'classes'> {
    label: string;
    options: SelectMenuOption[];
    labelId?: string;
    id?: string;
    size?: 'small' | 'medium';
    optionLabelKeyname?: string;
    optionValueKeyname?: string;
    borderColor?: ColorType;
    variant?: SelectType;
    filledColorType?: ColorType;
}

export { SelectChangeEvent } from '@mui/material';

interface FormControlProps extends MUIFormControlProps {
    borderColor?: ColorType;
    selectVariant: SelectType;
    selectVariantColorType: ColorType;
}

const StyledFormControl = styled(FormControl, {
    shouldForwardProp(propName) {
        return !(propName === 'borderColor');
    }
})<FormControlProps>(({ theme, borderColor, selectVariant, selectVariantColorType }) => {
    const selectCss: Record<string, any> = {};
    if (borderColor || selectVariant === 'filled') {
        const colorValFromTheme = theme.palette?.[selectVariant === 'filled' ? selectVariantColorType : borderColor!]?.main;
        selectCss['& label.Mui-focused, & label.MuiInputLabel-shrink'] = {
            color: colorValFromTheme
        };
        selectCss['& .MuiOutlinedInput-root'] = {
            '& fieldset': {
                borderColor: colorValFromTheme
            },
            '&:hover fieldset': {
                borderColor: colorValFromTheme
            },
            '&.Mui-focused fieldset': {
                borderColor: colorValFromTheme
            }
        };
    }
    if (selectVariant === 'filled') {
        const colorType = selectVariantColorType;
        const bgColorValFromTheme = theme.palette?.[colorType]?.light;
        const colorValFromTheme = theme.palette?.[colorType]?.main;
        const selectRootCss = { backgroundColor: bgColorValFromTheme, color: colorValFromTheme };
        selectCss['& .MuiSelect-select'] = selectRootCss;
        selectCss['& .MuiSelect-select:hover'] = selectRootCss;
    }
    return {
        ...selectCss
    };
});

export const Select = forwardRef<HTMLDivElement, SelectProps>(
    ({ id, labelId, options, size, label, optionLabelKeyname = 'label', optionValueKeyname = 'value', borderColor, variant = 'standard', filledColorType = 'primary', ...rest }, ref) => (
        <StyledFormControl fullWidth ref={ref} size={size} borderColor={borderColor} selectVariant={variant} selectVariantColorType={filledColorType}>
            <InputLabel id={labelId}>{label}</InputLabel>
            <MUISelect {...rest} labelId={labelId} label={label} id={id}>
                {options.map((item, index) => (
                    <MenuItem key={index} value={item[optionValueKeyname]}>
                        {item[optionLabelKeyname]}
                    </MenuItem>
                ))}
            </MUISelect>
        </StyledFormControl>
    )
);

Select.defaultProps = {
    label: 'Select',
    labelId: 'demo-simple-select-label',
    id: 'demo-simple-select',
    size: 'small'
};
