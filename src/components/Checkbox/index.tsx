import { default as MUICheckbox, CheckboxProps as MUICheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export interface CheckboxProps extends Omit<MUICheckboxProps, 'classes' | 'sx'> {
    label: string;
    size?: 'small' | 'medium';
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, size, ...rest }) => (
    <>{label ? <FormControlLabel control={<MUICheckbox {...rest} size={size} />} label={label} /> : <MUICheckbox {...rest} size={size} />}</>
);

Checkbox.defaultProps = {
    size: 'medium'
};
