import { useState, useEffect, Fragment } from 'react';
import { default as MUIAutocomplete } from '@mui/material/Autocomplete';

import { CircularProgress } from '../CircularProgress';
import { TextField } from '../TextField';
import { AutocompleteProps, OptionType } from './';

export interface AsyncAutocompleteProps extends Omit<AutocompleteProps, 'options' | 'freesolo'> {
    loadersize?: number;
    asyncfunc: () => Promise<OptionType[]>;
}

export const AsyncAutocomplete: React.FC<AsyncAutocompleteProps> = ({ id, label, color, variant, onChange, loadersize, asyncfunc, optionlabelkeyname, ...props }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<OptionType[]>([]);

    const loading = open && options.length === 0;

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const result = await asyncfunc();

            if (active) {
                setOptions([...result]);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    const handleOnChange = (event: any, newValue: any) => {
        onChange({ ...event, target: { ...event.target, value: newValue } });
    };

    return (
        <MUIAutocomplete
            {...props}
            id={id}
            options={options}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            onChange={handleOnChange}
            isOptionEqualToValue={(option: OptionType, value: OptionType) => option[optionlabelkeyname] === value[optionlabelkeyname]}
            getOptionLabel={(option: any): string => `${option[optionlabelkeyname]}`}
            renderInput={(params) => (
                <TextField
                    {...params}
                    color={color}
                    label={label}
                    variant={variant}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <Fragment>
                                {loading ? <CircularProgress /> : null}
                                {params.InputProps.endAdornment}
                            </Fragment>
                        )
                    }}
                />
            )}
        />
    );
};

AsyncAutocomplete.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    loadersize: 20
};
