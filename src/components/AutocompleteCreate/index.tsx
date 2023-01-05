import { Autocomplete, AutocompleteProps, createFilterOptions } from '../AutoComplete/index';
import { TextField } from '../TextField/index';

export const AutocompleteCreate = <T, Multiple extends boolean | undefined = undefined, DisableClearable extends boolean | undefined = undefined, FreeSolo extends boolean | undefined = undefined>(
    props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>
) => {
    const { id, label, color, variant } = props;

    return <Autocomplete {...props} id={id} renderInput={(params) => <TextField {...params} variant={variant || 'outlined'} color={color || 'primary'} label={label} />} />;
};

export { createFilterOptions };
