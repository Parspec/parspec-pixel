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
    size: 'small' | 'medium';
}

export const Autocomplete: React.FC<AutocompleteProps> = forwardRef<HTMLDivElement, AutocompleteProps>(({ id, label, color, variant, onChange, optionlabelkeyname, freeSolo, size, ...props }, ref) => {
    const handleOnChange = (event: any, newValue: string | OptionType | null) => {
        onChange({ ...event, target: { ...event.target, value: newValue } });
    };
    return (
        <MUIAutocomplete
            size={size}
            fullWidth
            {...props}
            ref={ref}
            id={id}
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
    );
});

Autocomplete.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    freeSolo: false,
    size: 'small'
};
