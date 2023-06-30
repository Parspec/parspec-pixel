import { forwardRef } from 'react';

import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import FormControl, { FormControlProps as MUIFormControlProps } from '@mui/material/FormControl';
import { default as MUISelect, SelectProps as MUISelectProps } from '@mui/material/Select';
import styled from '@mui/material/styles/styled';
import { Box, InputLabel } from '@mui/material';

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
    label?: String;
    labelId?: string;
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

    return {
        '& .MuiOutlinedInput-root': {
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px'
        },
        '& .MuiSelect-select': {
            '& .optionLabel': {
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: bgColorValFromTheme,
                color: colorValFromTheme
            }
        },
        '& .MuiSelect-icon': {
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
    color: theme.palette?.[type].dark,
    '& .optionLabel': {
        backgroundColor: theme.palette?.[type].light
    },
    '&.Mui-selected': {
        backgroundColor: theme.palette?.[type].light,
        color: theme.palette?.[type].dark
    },
    '&.Mui-selected:hover, &.MuiMenuItem-root:hover': {
        backgroundColor: theme.palette?.neutral.light
    }
}));

const getFormControlColorType = (value: unknown, options: SelectMenuOption[]) => {
    const selectedOption = options?.find((option: SelectMenuOption) => option.value == value);

    return selectedOption?.type as ColorType;
};

export const StatusSelect = forwardRef<HTMLDivElement, StatusSelectProps>(
    ({ id, options, optionLabelKeyname = 'label', optionValueKeyname = 'value', type = 'primary', optionColorKeyName = 'type', value, label, labelId, size = 'small', ...rest }, ref) => (
        <StyledFormControl fullWidth ref={ref} size={size} colorType={getFormControlColorType(value, options)}>
            <InputLabel id={labelId}>{label}</InputLabel>
            <MUISelect {...rest} id={id} value={value} label={label} labelId={labelId}>
                {options.map((item, index) => (
                    <StyledMenuItem key={index} value={item[optionValueKeyname]} type={item[optionColorKeyName] as ColorType}>
                        <Box pr={2} pl={2} pt={1} pb={1} borderRadius={1} className="optionLabel">
                            {item[optionLabelKeyname]}
                        </Box>
                    </StyledMenuItem>
                ))}
            </MUISelect>
        </StyledFormControl>
    )
);

StatusSelect.defaultProps = {
    id: 'demo-status-select'
};
