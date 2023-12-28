import { FormControl, FormGroup, FormHelperText, FormLabel } from '@mui/material';
import { Checkbox } from '../Checkbox';
import { Box } from '../Box';
import Button from '@mui/material/Button';

interface CheckboxOptions {
    label: string;
    name: string;
    checked: boolean;
}

interface CheckboxGroupProps {
    label: string;
    options: Array<CheckboxOptions>;
    size?: 'small' | 'medium';
    onChange: (name: string, checked: boolean) => void;
    error?: boolean;
    helperText?: string;
    color?: 'primary' | 'secondary' | 'tertiary';
    disabled?: boolean;
    required?: boolean;
    maxHeight?: string | number;
    showSelectAll?: boolean;
    onSelectAll?: () => void;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = function ({ label, size, options, onChange, error, helperText, color, disabled, required, maxHeight, showSelectAll = false, onSelectAll }) {
    function handleCheckboxChange(name: string) {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            onChange(name, event.target.checked);
        };
    }
    return (
        <FormControl error={error} fullWidth>
            <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">
                <FormLabel component="legend" required={required}>
                    {label}
                </FormLabel>
                {showSelectAll && (
                    <Box>
                        <Button size="xs" variant="outlined" color="secondary" sx={{ height: '24px' }} onClick={onSelectAll}>
                            Select All
                        </Button>
                    </Box>
                )}
            </Box>
            <FormGroup sx={{ width: '100%', flexWrap: 'nowrap', maxHeight, overflow: 'auto' }}>
                {options.map((checkboxInfo) => (
                    <Checkbox
                        checked={checkboxInfo.checked}
                        disabled={disabled}
                        onChange={handleCheckboxChange(checkboxInfo.name)}
                        name={checkboxInfo.name}
                        label={checkboxInfo.label}
                        size={size}
                        color={color}
                    />
                ))}
            </FormGroup>
            {helperText && <FormHelperText sx={{ marginLeft: 0 }}>{helperText}</FormHelperText>}
        </FormControl>
    );
};

CheckboxGroup.defaultProps = {
    size: 'small',
    error: false,
    color: 'primary',
    disabled: false
};
