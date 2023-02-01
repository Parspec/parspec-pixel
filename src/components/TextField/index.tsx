import { default as MUITextField, TextFieldProps as MUITextFieldProps } from '@mui/material/TextField';

export interface TextFieldProps extends Omit<MUITextFieldProps, 'margin' | 'classes' | 'sx'> {
    variant?: 'standard' | 'outlined' | 'filled';
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    error?: boolean;
}

export const TextField: React.FC<TextFieldProps> = (props) => <MUITextField {...props} />;

TextField.defaultProps = {
    variant: 'outlined',
    color: 'primary'
};
