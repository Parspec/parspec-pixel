import { jsx as _jsx } from "react/jsx-runtime";
import { Portal as MUIPortal } from '@mui/base';
export const Portal = ({ children, container, disablePortal }) => {
    return (_jsx(MUIPortal, Object.assign({ container: container, disablePortal: disablePortal }, { children: children })));
};
//# sourceMappingURL=index.js.map