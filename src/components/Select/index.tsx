import { forwardRef } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { default as MUISelect, SelectProps as MUISelectProps } from '@mui/material/Select';

interface SelectMenuOption {
    value: string | number;
    label: string;
}

export interface SelectProps extends Omit<MUISelectProps, 'classes'> {
    label: string;
    options: SelectMenuOption[];
    labelId: string;
    id: string;
    size?: 'small' | 'medium';
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(({ id, labelId, options, size, label, ...rest }, ref) => (
    <FormControl fullWidth ref={ref} size={size}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <MUISelect {...rest} labelId={labelId} label={label} id={id}>
            {options.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                    {item.label}
                </MenuItem>
            ))}
        </MUISelect>
    </FormControl>
));

Select.defaultProps = {
    label: 'Select',
    options: [
        { value: 10, label: 'Ten' },
        { value: 20, label: 'Twenty' },
        { value: 30, label: 'Thirty' }
    ],
    labelId: 'demo-simple-select-label',
    id: 'demo-simple-select',
    size: 'small'
};
