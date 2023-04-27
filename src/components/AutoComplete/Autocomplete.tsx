import { forwardRef, useState } from 'react';

import { TextField } from '../TextField';
import { default as MUIAutocomplete, createFilterOptions } from '@mui/material/Autocomplete';

export type OptionType = {
    [index: string]: string | number;
};

export interface AutocompleteProps {
    id: string;
    label: string;
    optionlabelkeyname: string;
    options: OptionType[];
    color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';
    variant?: 'outlined' | 'filled' | 'standard';
    onChange: (event: React.SyntheticEvent) => void;
    freeSolo?: boolean;
    fieldSize?: 'small' | 'medium';
    multiple?: boolean;
    value?: string | OptionType | (string | OptionType)[] | null;
    defaultValue?: string | OptionType | (string | OptionType)[] | null;
    onBlur?: (event: any) => void;
    helperText?: string;
    error?: boolean;
}

const filter = createFilterOptions<OptionType>();

export const Autocomplete: React.FC<AutocompleteProps> = forwardRef<HTMLDivElement, AutocompleteProps>(
    ({ id, label, color, variant, onChange, optionlabelkeyname, freeSolo, fieldSize, onBlur, helperText, error, options, ...props }, ref) => {
        const [state, setState] = useState<OptionType | string>();
        const handleOnChange = (event: any, newValue: string | OptionType | (string | OptionType)[] | null) => {
            onChange({ ...event, target: { ...event.target, value: newValue } });
        };

        const filterOptions = (options: OptionType[], params: any) => {
            let filteredOptions = filter(options, params);
            if (typeof state === 'object') {
                filteredOptions = options.filter((option) => option[optionlabelkeyname] === state[optionlabelkeyname]);
            }

            return filteredOptions;
        };

        const handleFocusOut = (event: any) => {
            if (onBlur) {
                let result = options.filter((item) => item[optionlabelkeyname] === event.target.value);
                if (!result.length) {
                    result = event.target.value;
                }
                let _result = typeof result === 'object' ? result[0] : result;
                setState(_result);
                onBlur(_result);
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
                    filterOptions={filterOptions}
                    onInputChange={(event: any, value: any) => setState(value)}
                    freeSolo={freeSolo}
                    renderInput={({ size, ...params }) => <TextField size={fieldSize} helperText={helperText} error={error} {...params} variant={variant} color={color} label={label} />}
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
