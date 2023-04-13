import { jsx as _jsx } from "react/jsx-runtime";
import { default as MUISnackbar } from '@mui/material/Snackbar';
export const Snackbar = (props) => {
    return _jsx(MUISnackbar, Object.assign({}, props));
};
Snackbar.defaultProps = {
    anchorOrigin: {
        horizontal: 'center',
        vertical: 'bottom'
    },
    autoHideDuration: 3000
};
//# sourceMappingURL=Snackbar.js.map