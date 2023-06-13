import { forwardRef, useState } from 'react';

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
    fieldSize?: 'small' | 'medium';
    size?: 'small' | 'medium';
    multiple?: boolean;
    value?: string | OptionType | (string | OptionType)[] | null;
    defaultValue?: string | OptionType | (string | OptionType)[] | null;
    onBlur?: (params: OptionType | string) => void;
    helperText?: string;
    error?: boolean;
    onTextFieldChange?: (e: React.SyntheticEvent<Element, Event>) => void;
    limitTags?: number;
}

const filter = createFilterOptions<OptionType>();

export const Autocomplete: React.FC<AutocompleteProps> = forwardRef<HTMLDivElement, AutocompleteProps>(
    ({ id, label, placeholder, color, variant, onChange, optionlabelkeyname, freeSolo, fieldSize, onBlur = () => {}, helperText, error, options, onTextFieldChange, limitTags, ...props }, ref) => {
        const [state, setState] = useState<OptionType | string>();
        const handleOnChange = (_event: React.SyntheticEvent<Element, Event>, newValue: string | OptionType | (string | OptionType)[] | null) => {
            onChange(newValue);
        };

        const filterOptions = (options: OptionType[], params: any) => {
            let filteredOptions = filter(options, params);
            if (typeof state === 'object') {
                filteredOptions = options.filter((option) => option[optionlabelkeyname] === state[optionlabelkeyname]);
            }

            return filteredOptions;
        };

        const handleFocusOut = (event: any) => {
            let customValue = event?.target?.value;
            if (customValue) {
                const result: OptionType[] = [];

                for (let item of options) {
                    if (typeof item[optionlabelkeyname] === 'number') {
                        break;
                    } else if (customValue.includes(item[optionlabelkeyname])) {
                        result.push(item);
                    }
                }
                setState(result[0]);
                onBlur(result[0]);
            }
        };

        const handleOnInputChange = (event: React.SyntheticEvent<Element, Event>, value: string) => {
            setState(value);
            if (onTextFieldChange) {
                onTextFieldChange(event);
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
                    limitTags={limitTags}
                    filterOptions={filterOptions}
                    onInputChange={handleOnInputChange}
                    freeSolo={freeSolo}
                    renderInput={({ size, ...params }) => (
                        <TextField size={fieldSize} helperText={helperText} error={error} {...params} variant={variant} color={color} label={label} placeholder={placeholder} />
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
    fieldSize: 'small',
    multiple: false,
    helperText: '',
    error: false
};
