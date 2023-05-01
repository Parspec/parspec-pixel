import { jsx as _jsx } from "react/jsx-runtime";
import { default as MUISkeleton } from '@mui/material/Skeleton';
export const Skeleton = (props) => {
    return _jsx(MUISkeleton, Object.assign({}, props, { sx: { bgcolor: 'rgba(0,0,0,0.5)' } }));
};
Skeleton.defaultProps = {
    color: 'rgba(0,0,0,0.05)'
};
//# sourceMappingURL=index.js.map