import React from 'react';
import { TextField } from '../TextField/index';

import { ChipTypeMap } from '@mui/material/Chip';

import { default as MUIAutocomplete, AutocompleteProps as MUIAutocompleteProps } from '@mui/material/Autocomplete';

export interface AutocompleteProps<
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined,
    ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
> extends Omit<MUIAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>, 'classes' | 'sx'> {
    id: string;
    label: string | null;
}

export const Autocomplete = <T, Multiple extends boolean | undefined = undefined, DisableClearable extends boolean | undefined = undefined, FreeSolo extends boolean | undefined = undefined>(
    props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>
) => {
    const { options, id, label } = props;
    return <MUIAutocomplete {...props} options={options} id={id} renderInput={(params) => <TextField {...params} variant={'outlined'} color={'primary'} error={false} label={label} />} />;
};
