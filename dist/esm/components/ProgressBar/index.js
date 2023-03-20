import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '../Box';
import { BodySmall } from '../Typography';
const ProgressBar = (props) => {
    return (_jsxs(Box, Object.assign({ position: "relative", display: "inline-flex" }, { children: [_jsx(CircularProgress, Object.assign({ variant: "determinate" }, props, { value: props.progress }), void 0), _jsx(Box, Object.assign({ display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }, { children: _jsx(BodySmall, { children: `${props.progress}%` }, void 0) }), void 0)] }), void 0));
};
export default ProgressBar;
//# sourceMappingURL=index.js.map