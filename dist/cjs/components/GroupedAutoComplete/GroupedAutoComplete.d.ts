/// <reference types="react" />
import { AutocompleteChangeReason, AutocompleteProps } from '@mui/material/Autocomplete';
import { TextFieldProps, FilterOptionsState } from '@mui/material';
export type GroupedOptionType = {
    [index: string]: string | number | number[] | string[] | boolean | {};
};
export type GroupType = {
    [index: string]: number;
};
export interface GroupedAutoCompleteProps extends Omit<AutocompleteProps<GroupedOptionType, true, boolean | undefined, false>, 'renderInput'> {
    staticFilters: GroupedOptionType[];
    selectedOptions: GroupedOptionType[];
    helperText?: string;
    error?: boolean;
    variant?: TextFieldProps['variant'];
    color?: TextFieldProps['color'];
    label: string;
    placeholder?: TextFieldProps['placeholder'];
    size?: 'small' | 'medium';
    optionlabelkeyname: string;
    onChange: (event: React.SyntheticEvent<Element, Event>, value: GroupedOptionType[], reason: AutocompleteChangeReason) => void;
    filterOptionsCallBack?: (options: GroupedOptionType[], params: FilterOptionsState<GroupedOptionType>) => GroupedOptionType[];
    onTextFieldChange?: (e: React.SyntheticEvent<Element, Event>, value: string) => void;
}
export declare const GroupedAutoComplete: import("react").ForwardRefExoticComponent<Omit<GroupedAutoCompleteProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
