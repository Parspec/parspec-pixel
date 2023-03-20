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
import { SIZE_OPTIONS } from '../../Shared/utils';
export const CircularProgress = (_a) => {
    var { color, size } = _a, rest = __rest(_a, ["color", "size"]);
    return _jsx(MUICircularProgress, Object.assign({ color: color, size: SIZE_OPTIONS[size || 'md'] }, rest));
};
CircularProgress.defaultProps = {
    color: 'inherit',
    size: 'md'
};
//# sourceMappingURL=index.js.map