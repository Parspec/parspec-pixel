import { forwardRef } from 'react';

import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import FormControl, { FormControlProps as MUIFormControlProps } from '@mui/material/FormControl';
import { default as MUISelect, SelectProps as MUISelectProps } from '@mui/material/Select';
import styled from '@mui/material/styles/styled';

interface SelectMenuOption {
    [index: string]: string | number | ColorType;
}

type ColorType = 'primary' | 'secondary' | 'tertiary' | 'info' | 'warning' | 'success' | 'error';

export interface StatusSelectProps extends Omit<MUISelectProps, 'classes' | 'label' | 'labelId' | 'input' | 'sx'> {
    options: SelectMenuOption[];
    id?: string;
    optionLabelKeyname?: string;
    optionValueKeyname?: string;
    optionColorKeyName?: string;
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
    backgroundColor: theme.palette?.[type].light,
    color: theme.palette?.[type].dark,
    '&.Mui-selected': {
        backgroundColor: theme.palette?.[type].light,
        color: theme.palette?.[type].main
    },
    '&.Mui-selected:hover, &.MuiMenuItem-root:hover': {
        backgroundColor: theme.palette?.neutral.light,
        color: theme.palette?.neutral.dark
    }
}));

const getFormControlColorType = (value: unknown, options: SelectMenuOption[]) => {
    const selectedOption = options.find((option: SelectMenuOption) => option.value == value);

    return selectedOption?.type as ColorType;
};

export const StatusSelect = forwardRef<HTMLDivElement, StatusSelectProps>(
    ({ id, options, optionLabelKeyname = 'label', optionValueKeyname = 'value', type = 'primary', optionColorKeyName = 'type', value, ...rest }, ref) => (
        <StyledFormControl fullWidth ref={ref} colorType={getFormControlColorType(value, options)}>
            <MUISelect {...rest} size="small" id={id} value={value}>
                {options.map((item, index) => (
                    <StyledMenuItem key={index} value={item[optionValueKeyname]} type={item[optionColorKeyName] as ColorType}>
                        {item[optionLabelKeyname]}
                    </StyledMenuItem>
                ))}
            </MUISelect>
        </StyledFormControl>
    )
);

StatusSelect.defaultProps = {
    id: 'demo-status-select'
};
