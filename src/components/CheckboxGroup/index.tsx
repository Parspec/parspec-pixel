import { FormControl, FormGroup, FormHelperText, FormLabel } from '@mui/material';
import { Checkbox } from '../Checkbox';

interface CheckboxOptions {
    label: string;
    name: string;
    checked: boolean;
}

interface CheckboxGroupProps {
    label: string;
    options: Array<CheckboxOptions>;
    size: 'small' | 'medium';
    onChange: (name: string, checked: boolean) => void;
    error: boolean;
    helperText?: string;
    color?: 'primary' | 'secondary' | 'tertiary';
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = function ({ label, size, options, onChange, error, helperText, color }) {
    function handleCheckboxChange(name: string) {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            onChange(name, event.target.checked);
        };
    }
    return (
        <FormControl error={error}>
            <FormLabel component="legend">{label}</FormLabel>
            <FormGroup>
                {options.map((checkboxInfo) => (
                    <Checkbox checked={checkboxInfo.checked} onChange={handleCheckboxChange(checkboxInfo.name)} name={checkboxInfo.name} label={checkboxInfo.label} size={size} color={color} />
                ))}
            </FormGroup>
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
};
