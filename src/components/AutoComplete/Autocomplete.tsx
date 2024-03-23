import { forwardRef, useState, ReactNode } from 'react';

import { TextField } from '../TextField';
import { default as MUIAutocomplete, createFilterOptions } from '@mui/material/Autocomplete';
import { FilterOptionsState } from '@mui/material/useAutocomplete';
import { SxProps } from '@mui/material';

export type OptionType<T = {}> = {
    [index: string]: string | number;
} & T;

export interface AutocompleteProps {
    id?: string;
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
    value?: string | OptionType | string[] | OptionType[] | null;
    defaultValue?: string | OptionType | (string | OptionType)[] | null;
    onBlur?: (params: OptionType | string) => void;
    helperText?: string | React.ReactNode;
    error?: boolean;
    onTextFieldChange?: (e: React.SyntheticEvent<Element, Event>, value: string) => void;
    limitTags?: number;
    disabled?: boolean;
    clearOnBlur?: boolean;
    filterOptionsCallBack?: (options: OptionType[], params: FilterOptionsState<OptionType>) => OptionType[];
    autoFocus?: boolean;
    blurOnEmptyInput?: (inputValue: OptionType | string) => void;
    renderOption?: (props: any, option: OptionType | string) => ReactNode;
    open?: boolean;
    onOpen?: () => void;
    maxLength?: number;
    sx?: SxProps;
    inputProps?: any;
    loading?: boolean;
    forcePopupIcon?: boolean;
    getOptionLabel?: (option: OptionType | string) => string;
    getOptionDisabled?: (option: OptionType | string) => boolean;
}

export const Autocomplete = forwardRef((props: AutocompleteProps, ref: any) => {
    const {
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
        autoFocus,
        blurOnEmptyInput,
        maxLength = 255,
        sx,
        inputProps,
        loading,
        getOptionLabel,
        getOptionDisabled
    } = props;

    const [state, setState] = useState<OptionType | string | (string | OptionType)[] | null>(value || '');

    const handleOnChange = (event: any, newValue: OptionType | string | (string | OptionType)[] | null) => {
        setState(newValue);
        onChange({ ...event, target: { ...event.target, value: newValue } });
    };

    function getDefaultFilterOption(options: OptionType[], state: FilterOptionsState<OptionType>): OptionType[] {
        return createFilterOptions<OptionType>()(options, state);
    }

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
            if (Array.isArray(state)) {
                setState([...state, inputValue]);
            } else {
                setState(inputValue);
            }
            onBlur(inputValue);
        } else {
            if (blurOnEmptyInput) blurOnEmptyInput(inputValue);
        }
    };

    const handleOnInputChange = (event: React.SyntheticEvent<Element, Event>, value: string) => {
        if (onTextFieldChange) {
            onTextFieldChange(event, value);
        }
    };

    const handleKeyDown = (e: any) => {
        let inputValue = e?.target?.value;
        if (e.key === 'Enter') {
            if (Array.isArray(state)) {
                setState([...state, inputValue]);
            } else {
                setState(inputValue);
            }
        }
    };

    return (
        <>
            <MUIAutocomplete
                fullWidth
                {...props}
                options={options}
                ref={ref}
                sx={sx}
                id={id}
                getOptionDisabled={getOptionDisabled}
                onBlur={handleFocusOut}
                onKeyDown={handleKeyDown}
                onChange={handleOnChange}
                getOptionLabel={(option: OptionType | string): string => {
                    if (getOptionLabel) {
                        return getOptionLabel(option);
                    }
                    if (typeof option === 'object') {
                        return `${option[optionlabelkeyname]}`;
                    }
                    return option;
                }}
                value={state}
                limitTags={limitTags}
                filterOptions={getDefaultFilterOption}
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
                        autoFocus={autoFocus}
                        inputProps={{
                            ...params.inputProps,
                            ...inputProps,
                            maxLength
                        }}
                    />
                )}
                disabled={disabled}
                loading={loading}
            />
        </>
    );
});

Autocomplete.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    freeSolo: false,
    fieldSize: 'small',
    multiple: false,
    helperText: '',
    error: false,
    autoFocus: false
};
