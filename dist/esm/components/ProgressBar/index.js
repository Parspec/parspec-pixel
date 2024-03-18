import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '../Box';
import { BodyXS } from '../Typography';
const ProgressBar = (props) => {
    return (_jsxs(Box, Object.assign({ position: "relative", display: "inline-flex" }, { children: [_jsx(CircularProgress, Object.assign({ variant: "determinate" }, props, { value: props.progress })), _jsx(Box, Object.assign({ display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }, { children: _jsx(BodyXS, { children: `${props.progress}%` }) }))] })));
};
export default ProgressBar;
//# sourceMappingURL=index.js.map