/// <reference types="react" />
import { AutocompleteProps, TextFieldProps } from '@mui/material';
import { ListChildComponentProps } from 'react-window';
export interface CustomRowProps extends ListChildComponentProps {
    option: {
        label: string;
        value: string | number;
    };
}
export interface MultiSelectOptionType {
    [index: string]: string | number;
}
interface MultiSelectProps extends Omit<AutocompleteProps<MultiSelectOptionType, true, boolean | undefined, false>, 'renderInput'> {
    helperText?: string;
    error?: boolean;
    variant?: TextFieldProps['variant'];
    color?: TextFieldProps['color'];
    label: string;
    placeholder?: TextFieldProps['placeholder'];
    optionlabelkeyname?: string;
    customRow?: (props: CustomRowProps) => JSX.Element;
    shouldSortOptions?: boolean;
}
export declare const MultiSelect: import("react").ForwardRefExoticComponent<Omit<MultiSelectProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export {};
