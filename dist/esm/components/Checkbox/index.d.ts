/// <reference types="react" />
import { CheckboxProps as MUICheckboxProps } from '@mui/material/Checkbox';
export interface CheckboxProps extends Omit<MUICheckboxProps, 'classes'> {
    label: string;
    size?: 'small' | 'medium';
    color?: 'primary' | 'secondary' | 'tertiary';
}
export declare const Checkbox: React.FC<CheckboxProps>;
