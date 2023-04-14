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
import { default as MUICircularProgress } from '@mui/material/CircularProgress';
import { SIZE_OPTIONS, SIZE_OPTIONS_LOADER } from '../../Shared/utils';
export const CircularProgress = (_a) => {
    var { color, size, thickness } = _a, rest = __rest(_a, ["color", "size", "thickness"]);
    return (_jsx(MUICircularProgress, Object.assign({ color: color, size: SIZE_OPTIONS[`${size}`], thickness: SIZE_OPTIONS_LOADER[`${thickness}`] }, rest)));
};
CircularProgress.defaultProps = {
    color: 'inherit',
    size: 'sm',
    thickness: 'xs'
};
//# sourceMappingURL=index.js.map