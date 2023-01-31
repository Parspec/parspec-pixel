import React from 'react';
import { ChipProps as MUIChipProps } from '@mui/material/Chip';
export interface ChipProps extends Omit<MUIChipProps, 'classes' | 'sx'> {
    label: string;
}
export declare const Chip: React.FC<ChipProps>;
