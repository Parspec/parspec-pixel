/// <reference types="react" />
interface OptionType {
    [index: string]: string;
}
type AutocompleteProps = {
    id: string;
    label: string;
    optionlabelkeyname: string;
    options: OptionType[];
    color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';
    variant?: 'outlined' | 'filled' | 'standard';
    onChange: (event: React.SyntheticEvent) => void;
    freesolo?: boolean;
};
type AsyncAutocompleteProps = Omit<AutocompleteProps, 'options' | 'freesolo'> & {
    loadersize?: number;
    asyncfunc: () => Promise<OptionType[]>;
};
declare const Autocomplete: React.FC<AutocompleteProps>;
declare const AsyncAutocomplete: React.FC<AsyncAutocompleteProps>;
export { Autocomplete, AsyncAutocomplete };
