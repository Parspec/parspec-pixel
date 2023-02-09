import { jsx as _jsx } from "react/jsx-runtime";
import { default as MUITextField } from '@mui/material/TextField';
import { forwardRef } from 'react';
export const TextField = forwardRef((props, ref) => _jsx(MUITextField, Object.assign({ ref: ref }, props)));
TextField.defaultProps = {
    variant: 'outlined',
    color: 'primary'
};
//# sourceMappingURL=index.js.map