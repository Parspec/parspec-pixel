import { TextField } from '../TextField';
import { default as MUIAutocomplete } from '@mui/material/Autocomplete';

export type OptionType = {
    [index: string]: string;
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
}

export const Autocomplete: React.FC<AutocompleteProps> = ({ id, label, color, variant, onChange, optionlabelkeyname, freeSolo, ...props }) => {
    const handleOnChange = (event: any, newValue: string | OptionType | null) => {
        onChange({ ...event, target: { ...event.target, value: newValue } });
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
            freeSolo={freeSolo}
            renderInput={(params) => <TextField {...params} variant={variant} color={color} label={label} />}
        />
    );
};

Autocomplete.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    freeSolo: false
};
