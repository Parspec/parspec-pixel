import { default as MUIFormControl, FormControlProps } from '@mui/material/FormControl';

export const FormControl: React.FC<FormControlProps> = ({ children, ...props }) => <MUIFormControl {...props}>{children}</MUIFormControl>;

export * from '@mui/material/FormGroup';
