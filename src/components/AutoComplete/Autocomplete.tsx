import { forwardRef } from 'react';

import { TextField } from '../TextField';
import { default as MUIAutocomplete } from '@mui/material/Autocomplete';
import { BodyXS } from '../Typography';

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
    size?: 'small' | 'medium';
    multiple?: boolean;
    value?: string | OptionType | (string | OptionType)[] | null;
    defaultValue?: string | OptionType | (string | OptionType)[] | null;
    onBlur?: (event: React.SyntheticEvent) => void;
    helperText?: string;
}

export const Autocomplete: React.FC<AutocompleteProps> = forwardRef<HTMLDivElement, AutocompleteProps>(
    ({ id, label, color, variant, onChange, optionlabelkeyname, freeSolo, size, onBlur, helperText, ...props }, ref) => {
        const handleOnChange = (event: any, newValue: string | OptionType | (string | OptionType)[] | null) => {
            onChange({ ...event, target: { ...event.target, value: newValue } });
        };

        const handleFocusOut = (event: any) => {
            if (onBlur) {
                onBlur(event.target.value);
            }
            console.log(event);
        };
        return (
            <>
                <MUIAutocomplete
                    size={size}
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
                    renderInput={(params) => <TextField {...params} variant={variant} color={color} label={label} />}
                />
                {helperText && (
                    <BodyXS color="error" mt={1}>
                        {helperText}
                    </BodyXS>
                )}
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
    helperText: ''
};
