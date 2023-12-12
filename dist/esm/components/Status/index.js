import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '../Box';
export const Status = ({ color, children }) => {
    return (_jsx(Box, Object.assign({ bgcolor: `${color}.light`, color: `${color}.dark`, p: 1, pl: 2, pr: 2, maxWidth: 'max-content' }, { children: children })));
};
Status.defaultProps = {
    color: 'primary'
};
//# sourceMappingURL=index.js.map