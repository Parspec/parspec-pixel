import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
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
    variant: 'outlined' | 'filled' | 'standard';
    color: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';
}

export const Autocomplete = <T, Multiple extends boolean | undefined = undefined, DisableClearable extends boolean | undefined = undefined, FreeSolo extends boolean | undefined = undefined>(
    props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>
) => {
    const { id, label, color, variant } = props;

    return <MUIAutocomplete {...props} id={id} renderInput={(params) => <TextField {...params} variant={variant || 'outlined'} color={color || 'primary'} label={label} />} />;
};

export const AsyncAutocomplete = <T, Multiple extends boolean | undefined = undefined, DisableClearable extends boolean | undefined = undefined, FreeSolo extends boolean | undefined = undefined>(
    props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>
) => {
    const { id, label, color, variant, loading } = props;

    return (
        <MUIAutocomplete
            {...props}
            id={id}
            renderInput={(params) => (
                <TextField
                    {...params}
                    color={color}
                    label={label}
                    variant={variant}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        )
                    }}
                />
            )}
        />
    );
};
