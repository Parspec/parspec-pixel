import { forwardRef, useState, useEffect } from 'react';

import { TextField } from '../TextField';
import { default as MUIAutocomplete, createFilterOptions } from '@mui/material/Autocomplete';
import { FilterOptionsState } from '@mui/material/useAutocomplete';

export type OptionType<T = {}> = {
    [index: string]: string | number;
} & T;

export interface AutocompleteProps {
    id: string;
    label: string;
    placeholder?: string;
    optionlabelkeyname: string;
    options: OptionType[];
    color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';
    variant?: 'outlined' | 'filled' | 'standard';
    onChange: (event: React.SyntheticEvent<Element, Event>) => void;
    freeSolo?: boolean;
    fieldSize?: 'small' | 'medium';
    multiple?: boolean;
    value?: string | OptionType | null;
    defaultValue?: string | OptionType | (string | OptionType)[] | null;
    onBlur?: (params: OptionType | string) => void;
    helperText?: string | React.ReactNode;
    error?: boolean;
    onTextFieldChange?: (e: React.SyntheticEvent<Element, Event>, value: string) => void;
    limitTags?: number;
    disabled?: boolean;
    clearOnBlur?: boolean;
    filterOptionsCallBack?: (options: OptionType[], params: FilterOptionsState<OptionType>) => OptionType[];
    maxLength?: number;
}

const filter = createFilterOptions<OptionType>();

export const Autocomplete: React.FC<AutocompleteProps> = forwardRef<HTMLDivElement, AutocompleteProps>(
    (
        {
            id,
            label,
            placeholder,
            color,
            variant,
            onChange,
            optionlabelkeyname,
            freeSolo,
            fieldSize,
            onBlur = () => {},
            helperText,
            error,
            options,
            onTextFieldChange,
            limitTags,
            disabled,
            value,
            maxLength = 255,
            filterOptionsCallBack = (options: OptionType[], params: FilterOptionsState<OptionType>) => {
                let filteredOptions = filter(options, params);
                if (typeof state === 'object' && state[optionlabelkeyname]) {
                    filteredOptions = options.filter((option) => option[optionlabelkeyname] === state[optionlabelkeyname]);
                }
                return filteredOptions;
            },
            ...props
        },
        ref
    ) => {
        const [state, setState] = useState<OptionType | string>(value || '');

        const handleOnChange = (event: any, newValue: string | OptionType | (string | OptionType)[] | null) => {
            onChange({ ...event, target: { ...event.target, value: newValue } });
        };

        useEffect(() => {
            if (value) {
                setState(value);
            }
        }, [value]);

        const filterOptions = (options: OptionType[], params: FilterOptionsState<OptionType>) => {
            return filterOptionsCallBack(options, params);
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
                    renderInput={({ size, ...params }) => (
                        <TextField
                            size={fieldSize}
                            helperText={helperText}
                            error={error}
                            {...params}
                            variant={variant}
                            color={color}
                            label={label}
                            placeholder={placeholder}
                            inputProps={{ ...params.inputProps, maxLength }}
                        />
                    )}
                    disabled={disabled}
                />
            </>
        );
    }
);

Autocomplete.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    freeSolo: false,
    fieldSize: 'small',
    multiple: false,
    helperText: '',
    error: false
};
