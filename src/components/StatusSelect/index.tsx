import { forwardRef } from 'react';

import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import FormControl, { FormControlProps as MUIFormControlProps } from '@mui/material/FormControl';
import { default as MUISelect, SelectProps as MUISelectProps } from '@mui/material/Select';
import styled from '@mui/material/styles/styled';
import { alpha } from '@mui/material';

interface SelectMenuOption {
    [index: string]: string | number;
}

type ColorType = 'primary' | 'secondary' | 'tertiary' | 'info' | 'warning' | 'success' | 'error';

export interface StatusSelectProps extends Omit<MUISelectProps, 'classes' | 'label' | 'labelId' | 'input' | 'sx'> {
    options: SelectMenuOption[];
    id?: string;
    optionLabelKeyname?: string;
    optionValueKeyname?: string;
    type?: ColorType;
}

interface FormControlProps extends MUIFormControlProps {
    colorType: ColorType;
}

const StyledFormControl = styled(FormControl, {
    shouldForwardProp(propName) {
        return !(propName === 'borderColor');
    }
})<FormControlProps>(({ theme, colorType }) => {
    const bgColorValFromTheme = theme.palette?.[colorType]?.light;
    const colorValFromTheme = theme.palette?.[colorType]?.main;
    const selectRootCss = { backgroundColor: bgColorValFromTheme, color: colorValFromTheme };
    return {
        '& .MuiOutlinedInput-root': {
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '16px',
            '& fieldset': {
                borderColor: bgColorValFromTheme
            },
            '&:hover fieldset': {
                borderColor: bgColorValFromTheme
            },
            '&.Mui-focused fieldset': {
                borderColor: bgColorValFromTheme
            }
        },
        '& .MuiSelect-select': { ...selectRootCss, padding: '4px 8px', paddingRight: '24px !important' },
        '& .MuiSelect-select:hover': selectRootCss,
        '& .MuiSelect-icon': {
            color: colorValFromTheme,
            width: '16px',
            height: '16px',
            top: 'calc(50% - 0.35em)'
        }
    };
});

interface StyledMenuItemProps extends MenuItemProps {
    type: ColorType;
}

const StyledMenuItem = styled(MenuItem)<StyledMenuItemProps>(({ theme, type }) => ({
    fontSize: '12px',
    lineHeight: '16px',
    '&.Mui-selected': {
        backgroundColor: alpha(theme.palette?.[type].main, 0.08)
    },
    '&.Mui-selected:hover, &.Mui-focusVisible.Mui-selected': {
        backgroundColor: alpha(theme.palette?.[type].main, 0.12)
    }
}));

export const StatusSelect = forwardRef<HTMLDivElement, StatusSelectProps>(({ id, options, optionLabelKeyname = 'label', optionValueKeyname = 'value', type = 'primary', ...rest }, ref) => (
    <StyledFormControl fullWidth ref={ref} colorType={type}>
        <MUISelect {...rest} size="small" id={id}>
            {options.map((item, index) => (
                <StyledMenuItem key={index} value={item[optionValueKeyname]} type={type}>
                    {item[optionLabelKeyname]}
                </StyledMenuItem>
            ))}
        </MUISelect>
    </StyledFormControl>
));

StatusSelect.defaultProps = {
    id: 'demo-status-select'
};
