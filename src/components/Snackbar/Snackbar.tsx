import { default as MUISnackbar, SnackbarProps as MUISnackbarProps } from '@mui/material/Snackbar';

export const Snackbar: React.FC<MUISnackbarProps> = ({ ContentProps, ...props }) => {
    return (
        <MUISnackbar
            ContentProps={{
                sx: {
                    display: 'block',
                    textAlign: 'center',
                    maxWidth: '40vw'
                }
            }}
            {...props}
        />
    );
};

Snackbar.defaultProps = {
    anchorOrigin: {
        horizontal: 'center',
        vertical: 'bottom'
    },
    autoHideDuration: 3000
};
