import { useState, useEffect, Fragment } from 'react';
import { CircularProgress } from '../CircularProgress';
import { TextField } from '../TextField';

import { default as MUIAutocomplete } from '@mui/material/Autocomplete';

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

const Autocomplete: React.FC<AutocompleteProps> = (props) => {
    const { id, label, color, variant, onChange, optionlabelkeyname, freesolo } = props;
    const handleOnChange = (event: any, newValue: string | OptionType | null) => {
        event.target = { ...event.target, value: newValue };
        onChange(event);
    };
    return (
        <MUIAutocomplete
            {...props}
            id={id}
            onChange={handleOnChange}
            getOptionLabel={(option: OptionType | string): string => {
                if (typeof option === 'object') {
                    return `${option[optionlabelkeyname]}`;
                }

                return option;
            }}
            freeSolo={freesolo ? true : false}
            renderInput={(params) => <TextField {...params} variant={variant} color={color} label={label} />}
        />
    );
};

Autocomplete.defaultProps = {
    color: 'primary',
    variant: 'outlined'
};

const AsyncAutocomplete: React.FC<AsyncAutocompleteProps> = (props) => {
    const { id, label, color, variant, onChange, loadersize, asyncfunc, optionlabelkeyname } = props;

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

    const handleOnChange = (event: any, newValue: OptionType | null) => {
        event.target = { ...event.target, value: { newValue } };
        onChange(event);
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
            getOptionLabel={(option: OptionType): string => `${option[optionlabelkeyname]}`}
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
                                {loading ? <CircularProgress size={loadersize} /> : null}
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

export { Autocomplete, AsyncAutocomplete };
