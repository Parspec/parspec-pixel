import { forwardRef } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { default as MUISelect, SelectProps as MUISelectProps } from '@mui/material/Select';

interface SelectMenuOption {
    [index: string]: string | number;
}

export interface SelectProps extends Omit<MUISelectProps, 'classes'> {
    label: string;
    options: SelectMenuOption[];
    labelId: string;
    id: string;
    size?: 'small' | 'medium';
    optionLabelKeyname: string;
    optionValueKeyname: string;
}

export const Select: React.FC<SelectProps> = forwardRef(({ id, labelId, options, size, label, optionLabelKeyname, optionValueKeyname, ...rest }, ref) => (
    <FormControl fullWidth size={size}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <MUISelect {...rest} ref={ref} labelId={labelId} label={label} id={id}>
            {options.map((item, index) => (
                <MenuItem key={index} value={item[optionValueKeyname]}>
                    {item[optionLabelKeyname]}
                </MenuItem>
            ))}
        </MUISelect>
    </FormControl>
));

Select.defaultProps = {
    label: 'Select',
    labelId: 'demo-simple-select-label',
    id: 'demo-simple-select',
    size: 'small'
};
