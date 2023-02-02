/// <reference types="react" />
import { CheckboxProps as MUICheckboxProps } from '@mui/material/Checkbox';
export interface CheckboxProps extends Omit<MUICheckboxProps, 'classes' | 'sx'> {
    label: string;
    size?: 'small' | 'medium';
}
export declare const Checkbox: React.FC<CheckboxProps>;
