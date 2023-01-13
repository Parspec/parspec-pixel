import React from 'react';
import { default as MUICheckbox, CheckboxProps as MUICheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export interface CheckboxProps extends Omit<MUICheckboxProps, 'classes' | 'sx'> {
    label: string;
    size?: 'small' | 'medium';
    ariaLabel: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, size, ariaLabel, ...rest }) => {
    const config = { inputProps: { 'aria-label': ariaLabel } };

    return (
        <>
            <FormControlLabel control={<MUICheckbox {...rest} {...config} size={size} />} label={label} />
        </>
    );
};

Checkbox.defaultProps = {
    label: 'Checkbox',
    size: 'medium',
    ariaLabel: 'checkbox-demo'
};
