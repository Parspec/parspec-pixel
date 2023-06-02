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
    onChange: (event: React.SyntheticEvent<Element, Event>) => void;
    freeSolo?: boolean;
    fieldSize?: 'small' | 'medium';
    multiple?: boolean;
    value?: string | OptionType | (string | OptionType)[] | null;
    defaultValue?: string | OptionType | (string | OptionType)[] | null;
    onBlur?: (event: any) => void;
    helperText?: string;
    error?: boolean;
    onTextFieldChange?: (e: React.SyntheticEvent<Element, Event>) => void;
    limitTags?: number;
}
export declare const Autocomplete: React.FC<AutocompleteProps>;
