import React from 'react';

import InputLabel from '@mui/material/InputLabel';

import MenuItem from '@mui/material/MenuItem';

import { default as MUISelect, SelectProps as MUISelectProps, SelectChangeEvent } from '@mui/material/Select';

interface SelectMenuOption {
    value: string | number;
    displayText: string;
}

export interface SelectProps extends Omit<MUISelectProps, 'classes' | 'sx'> {
    title: string;
    options: SelectMenuOption[];
    labelId: string;
}

export const Select: React.FC<SelectProps> = ({ labelId, options, title, ...rest }) => (
    <>
        <InputLabel id={labelId}>{title}</InputLabel>
        <MUISelect {...rest} labelId={labelId}>
            {options.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                    {item.displayText}
                </MenuItem>
            ))}
        </MUISelect>
    </>
);

export { SelectChangeEvent };
