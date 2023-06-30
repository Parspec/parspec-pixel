/// <reference types="react" />
import { AutocompleteProps, TextFieldProps } from '@mui/material';
export interface MultiSelectOptionType {
    label: string;
    [index: string]: string | number;
}
interface MultiSelectProps extends Omit<AutocompleteProps<MultiSelectOptionType, true, boolean | undefined, false>, 'renderInput'> {
    helperText?: string;
    error?: boolean;
    variant?: TextFieldProps['variant'];
    color?: TextFieldProps['color'];
    label: string;
    placeholder?: TextFieldProps['placeholder'];
}
export declare const MultiSelect: import("react").ForwardRefExoticComponent<Omit<MultiSelectProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export {};
