import { default as MUICheckbox, CheckboxProps as MUICheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export interface CheckboxProps extends Omit<MUICheckboxProps, 'classes'> {
    label: string;
    size?: 'small' | 'medium';
    color?: 'primary' | 'secondary' | 'tertiary';
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, ...rest }) => (
    <FormControlLabel
        control={
            <MUICheckbox
                sx={{
                    padding: 0,
                    backgroundColor: 'white',
                    borderRadius: 0,
                    '&:hover': { bgcolor: 'white' }
                }}
                {...rest}
            />
        }
        label={label}
    />
);

Checkbox.defaultProps = {
    size: 'small'
};
