/// <reference types="react" />
import { RadioProps as MUIRadioProps } from '@mui/material/Radio';
export interface RadioProps extends Omit<MUIRadioProps, 'classes' | 'sx' | 'color' | 'size'> {
    color?: 'primary' | 'secondary' | 'tertiary';
    size: 'small' | 'medium';
}
export declare const Radio: React.FC<RadioProps>;
