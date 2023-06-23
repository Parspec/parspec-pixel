/// <reference types="react" />
export type OptionType = {
    [index: string]: string | number;
};
export interface AutocompleteProps {
    id: string;
    label: string;
    placeholder?: string;
    optionlabelkeyname: string;
    options: OptionType[];
    color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';
    variant?: 'outlined' | 'filled' | 'standard';
    onChange: (value: string | OptionType | (string | OptionType)[] | null) => void;
    freeSolo?: boolean;
    size?: 'small' | 'medium';
    multiple?: boolean;
    value?: string | OptionType | (string | OptionType)[] | null;
    defaultValue?: string | OptionType | (string | OptionType)[] | null;
    onBlur?: (params?: OptionType | string) => void;
    helperText?: string;
    error?: boolean;
    onTextFieldChange?: (e: React.SyntheticEvent<Element, Event>) => void;
    limitTags?: number;
}
export declare const Autocomplete: React.FC<AutocompleteProps>;
