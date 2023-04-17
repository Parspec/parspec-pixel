var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { default as MUISnackbar } from '@mui/material/Snackbar';
export const Snackbar = (_a) => {
    var { ContentProps } = _a, props = __rest(_a, ["ContentProps"]);
    return (_jsx(MUISnackbar, Object.assign({ ContentProps: {
            sx: {
                display: 'block',
                textAlign: 'center',
                maxWidth: '40vw'
            }
        } }, props)));
};
Snackbar.defaultProps = {
    anchorOrigin: {
        horizontal: 'center',
        vertical: 'bottom'
    },
    autoHideDuration: 3000
};
//# sourceMappingURL=Snackbar.js.map