import { default as MUISnackbar, SnackbarProps as MUISnackbarProps } from '@mui/material/Snackbar';

export const Snackbar: React.FC<MUISnackbarProps> = (props) => {
    return <MUISnackbar {...props} />;
};

Snackbar.defaultProps = {
    anchorOrigin: {
        horizontal: 'center',
        vertical: 'bottom'
    },
    autoHideDuration: 3000
};
