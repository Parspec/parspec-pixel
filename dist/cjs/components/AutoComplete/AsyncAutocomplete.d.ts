/// <reference types="react" />
import { AutocompleteProps, OptionType } from './';
export interface AsyncAutocompleteProps extends Omit<AutocompleteProps, 'options' | 'freesolo'> {
    loadersize?: number;
    asyncfunc: () => Promise<OptionType[]>;
}
export declare const AsyncAutocomplete: React.FC<AsyncAutocompleteProps>;
