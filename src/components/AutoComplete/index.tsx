import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { TextField } from '../TextField/index';

import { default as MUIAutocomplete, createFilterOptions } from '@mui/material/Autocomplete';

interface OptionType {
    title: string;
    inputValue?: string;
}

type AutocompleteProps<T> = {
    id: string;
    label: string;
    options: T[];
    color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';
    variant?: 'outlined' | 'filled' | 'standard';
    onChange: (event: React.SyntheticEvent, inputText: OptionType | null) => void;
};

type AutoCompleteCreateProps<T> = AutocompleteProps<T> & {
    addontext?: string | null;
};

type AsyncAutocompleteProps<T> = AutocompleteProps<T> & {
    loading: boolean;
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
    loadersize: number;
};

const AutocompleteCreate = <T,>(props: AutoCompleteCreateProps<T>): React.ReactElement => {
    const { id, label, color, variant, addontext, onChange } = props;

    const [inputText, setInputText] = useState<OptionType | null>(null);

    const handleOnChange = (event: React.SyntheticEvent, newValue: any) => {
        if (typeof newValue === 'string') {
            setInputText({
                title: newValue
            });
        } else if (newValue && newValue.inputValue) {
            setInputText({
                title: newValue.inputValue
            });
        } else {
            setInputText(newValue);
        }

        onChange(event, newValue);
    };

    const getOptionLabelHandler = (option: any): string => {
        if (typeof option === 'string') {
            return option;
        }

        if (option.inputValue) {
            return option.inputValue;
        }

        return option.title;
    };

    const filterOptionHandler = (options: any, params: any) => {
        const filter = createFilterOptions();
        let filtered = filter(options, params),
            isExisting: boolean | undefined;

        const { inputValue } = params;

        if (inputValue) {
            isExisting = options.some((option: any) => inputValue === option.title);

            if (inputValue !== '' && !isExisting) {
                filtered.push({
                    inputValue,
                    title: `${inputValue} ${addontext}`
                });
            }
        }

        if (inputText && inputText.title) return filtered.filter((item: any) => item.title.toLowerCase().startsWith(inputText.title.toLocaleLowerCase()));

        return filtered;
    };

    const renderOptionHandler = (args: any, option: any) => <li {...args}>{option.title}</li>;

    return (
        <MUIAutocomplete
            {...props}
            id={id}
            filterOptions={filterOptionHandler}
            getOptionLabel={getOptionLabelHandler}
            renderOption={renderOptionHandler}
            freeSolo
            value={inputText}
            onChange={handleOnChange}
            renderInput={(params) => {
                return <TextField {...params} variant={variant} color={color} label={label} />;
            }}
        />
    );
};

const Autocomplete = <T,>(props: AutocompleteProps<T>): React.ReactElement => {
    const { id, label, color, variant, onChange } = props;
    const handleOnChange = (event: React.SyntheticEvent, newValue: any) => {
        onChange(event, newValue);
    };
    return (
        <MUIAutocomplete
            {...props}
            id={id}
            onChange={handleOnChange}
            getOptionLabel={(option: any) => option.title}
            renderInput={(params) => <TextField {...params} variant={variant} color={color} label={label} />}
        />
    );
};

const AsyncAutocomplete = <T,>(props: AsyncAutocompleteProps<T>): React.ReactElement => {
    const { id, label, color, variant, onChange, loading, options, loadersize } = props;
    const handleOnChange = (event: React.SyntheticEvent, newValue: any) => {
        onChange(event, newValue);
    };

    return (
        <MUIAutocomplete
            {...props}
            id={id}
            options={options}
            open={props.open ? true : false}
            onOpen={props.onOpen}
            onClose={props.onClose}
            onChange={handleOnChange}
            isOptionEqualToValue={(option: any, value: any) => option.title === value.title}
            getOptionLabel={(option: any) => option.title}
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
                                {loading ? <CircularProgress color="inherit" size={loadersize} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        )
                    }}
                />
            )}
        />
    );
};

export { AutocompleteCreate, Autocomplete, AsyncAutocomplete };
