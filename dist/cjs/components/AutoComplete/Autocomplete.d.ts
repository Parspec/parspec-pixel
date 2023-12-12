/// <reference types="react" />
import { FilterOptionsState } from '@mui/material/useAutocomplete';
export type OptionType<T = {}> = {
    [index: string]: string | number;
} & T;
export interface AutocompleteProps {
    id: string;
    label: string;
    placeholder?: string;
    optionlabelkeyname: string;
    options: OptionType[];
    color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';
    variant?: 'outlined' | 'filled' | 'standard';
    onChange: (event: React.SyntheticEvent<Element, Event>) => void;
    freeSolo?: boolean;
    fieldSize?: 'small' | 'medium';
    multiple?: boolean;
    value?: string | OptionType | null;
    defaultValue?: string | OptionType | (string | OptionType)[] | null;
    onBlur?: (params: OptionType | string) => void;
    helperText?: string | React.ReactNode;
    error?: boolean;
    onTextFieldChange?: (e: React.SyntheticEvent<Element, Event>, value: string) => void;
    limitTags?: number;
    disabled?: boolean;
    clearOnBlur?: boolean;
    filterOptionsCallBack?: (options: OptionType[], params: FilterOptionsState<OptionType>) => OptionType[];
    maxLength?: number;
}
export declare const Autocomplete: React.FC<AutocompleteProps>;
