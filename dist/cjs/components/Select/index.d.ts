/// <reference types="react" />
import { SelectProps as MUISelectProps } from '@mui/material/Select';
interface SelectMenuOption {
    value: string | number;
    label: string;
}
export interface SelectProps extends Omit<MUISelectProps, 'classes' | 'sx'> {
    label: string;
    options: SelectMenuOption[];
    labelId: string;
    id: string;
}
export declare const Select: React.FC<SelectProps>;
export {};
