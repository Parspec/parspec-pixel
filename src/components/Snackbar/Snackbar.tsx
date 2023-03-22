import { default as MUISnackbar, SnackbarProps as MUISnackbarProps } from '@mui/material/Snackbar';

export const Snackbar: React.FC<MUISnackbarProps> = (props) => {
    return <MUISnackbar {...props} />;
};
