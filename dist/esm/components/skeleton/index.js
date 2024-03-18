import { jsx as _jsx } from "react/jsx-runtime";
import { default as MUISkeleton } from '@mui/material/Skeleton';
export const Skeleton = (props) => {
    return _jsx(MUISkeleton, Object.assign({}, props, { sx: { bgcolor: props.color === 'light' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' } }));
};
Skeleton.defaultProps = {
    color: 'dark'
};
//# sourceMappingURL=index.js.map