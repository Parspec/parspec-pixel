/// <reference types="react" />
import { SelectProps as MUISelectProps } from '@mui/material/Select';
interface SelectMenuOption {
    [index: string]: string | number;
}
type ColorType = 'primary' | 'secondary' | 'tertiary' | 'info' | 'warning' | 'success' | 'error';
export interface SelectProps extends Omit<MUISelectProps, 'classes' | 'label' | 'labelId' | 'input' | 'sx'> {
    options: SelectMenuOption[];
    id?: string;
    optionLabelKeyname?: string;
    optionValueKeyname?: string;
    type?: ColorType;
}
export { SelectChangeEvent } from '@mui/material';
export declare const StatusSelect: import("react").ForwardRefExoticComponent<Omit<SelectProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
