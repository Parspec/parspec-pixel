import { AutocompleteProps, OptionType } from './';
export interface AsyncAutocompleteProps extends Omit<AutocompleteProps, 'options' | 'freesolo'> {
    loadersize?: number;
    asyncfunc: () => Promise<OptionType[]>;
}
