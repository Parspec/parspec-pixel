import { forwardRef, useState, useEffect } from 'react';

import { TextField } from '../TextField';
import { default as MUIAutocomplete, createFilterOptions } from '@mui/material/Autocomplete';

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
    onChange: (value: string | OptionType | (string | OptionType)[] | null) => void;
    freeSolo?: boolean;
    size?: 'small' | 'medium';
    multiple?: boolean;
    value?: string | OptionType | null;
    defaultValue?: string | OptionType | (string | OptionType)[] | null;
    onBlur?: (params?: OptionType | string) => void;
    helperText?: string;
    error?: boolean;
    onTextFieldChange?: (e: React.SyntheticEvent<Element, Event>, value: string) => void;
    limitTags?: number;
}

const filter = createFilterOptions<OptionType>();

export const Autocomplete: React.FC<AutocompleteProps> = forwardRef<HTMLDivElement, AutocompleteProps>(
    ({ id, label, placeholder, color, variant, onChange, optionlabelkeyname, size, freeSolo, onBlur = () => {}, helperText, error, options, onTextFieldChange, limitTags, value, ...props }, ref) => {
        const [state, setState] = useState<OptionType | string>();
        const handleOnChange = (_event: React.SyntheticEvent<Element, Event>, newValue: string | OptionType | (string | OptionType)[] | null) => {
            onChange(newValue);
        };

        useEffect(() => {
            if (value) {
                setState(value);
            }
        }, [value]);

        const filterOptions = (options: OptionType[], params: any) => {
            let filteredOptions = filter(options, params);
            if (typeof state === 'object') {
                filteredOptions = options.filter((option) => option[optionlabelkeyname] === state[optionlabelkeyname]);
            }

            return filteredOptions;
        };

        const handleFocusOut = (event: any) => {
            let inputValue = event?.target?.value;

            if (inputValue) {
                for (let item of options) {
                    if (item[optionlabelkeyname] === inputValue) {
                        setState(item);
                        onBlur(item);
                        return;
                    }
                }
                setState(inputValue);
                onBlur(inputValue);
            } else {
                onBlur();
            }
        };

        const handleOnInputChange = (event: React.SyntheticEvent<Element, Event>, value: string) => {
            setState(value);
            if (onTextFieldChange) {
                onTextFieldChange(event, value);
            }
        };

        return (
            <>
                <MUIAutocomplete
                    fullWidth
                    {...props}
                    size={size}
                    options={options}
                    ref={ref}
                    id={id}
                    onBlur={handleFocusOut}
                    onChange={handleOnChange}
                    getOptionLabel={(option: OptionType | string): string => {
                        if (typeof option === 'object') {
                            return `${option[optionlabelkeyname]}`;
                        }

                        return option;
                    }}
                    value={value}
                    limitTags={limitTags}
                    filterOptions={filterOptions}
                    onInputChange={handleOnInputChange}
                    freeSolo={freeSolo}
                    renderInput={({ size: _fieldSize, ...params }) => (
                        <TextField helperText={helperText} error={error} size={size} {...params} variant={variant} color={color} label={label} placeholder={placeholder} />
                    )}
                />
            </>
        );
    }
);

Autocomplete.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    freeSolo: false,
    size: 'small',
    multiple: false,
    helperText: '',
    error: false
};
