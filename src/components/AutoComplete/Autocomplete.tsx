import { forwardRef } from 'react';

import { TextField } from '../TextField';
import { default as MUIAutocomplete } from '@mui/material/Autocomplete';

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
    onBlur?: (event: React.SyntheticEvent) => void;
    helperText?: string;
    isError?: boolean;
}

export const Autocomplete: React.FC<AutocompleteProps> = forwardRef<HTMLDivElement, AutocompleteProps>(
    ({ id, label, color, variant, onChange, optionlabelkeyname, freeSolo, fieldSize, onBlur, helperText, isError, ...props }, ref) => {
        const handleOnChange = (event: any, newValue: string | OptionType | (string | OptionType)[] | null) => {
            onChange({ ...event, target: { ...event.target, value: newValue } });
        };

        const handleFocusOut = (event: any) => {
            if (onBlur) {
                onBlur(event.target.value);
            }
        };
        return (
            <>
                <MUIAutocomplete
                    fullWidth
                    {...props}
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
                    freeSolo={freeSolo}
                    renderInput={({ size, ...params }) => <TextField size={fieldSize} helperText={helperText} error={isError} {...params} variant={variant} color={color} label={label} />}
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
    isError: false
};
