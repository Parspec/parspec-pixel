import React from 'react';
import { RadioProps as MUIRadioProps } from '@mui/material/Radio';
export interface RadioProps extends Omit<MUIRadioProps, 'classes' | 'sx'> {
}
export declare const Radio: React.FC<RadioProps>;
