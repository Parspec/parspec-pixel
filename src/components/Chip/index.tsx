import React from 'react';
import { default as MUIChip, ChipProps as MUIChipProps } from '@mui/material/Chip';

export interface ChipProps extends Omit<MUIChipProps, 'classes' | 'sx'> {
    label: string;
}

export const Chip: React.FC<ChipProps> = ({ label, ...rest }) => {
    return <MUIChip label={label} {...rest} />;
};

Chip.defaultProps = {
    variant: 'outlined'
};
