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
import { default as MUITooltip } from '@mui/material/Tooltip';
export const Tooltip = (_a) => {
    var { children, title, placement } = _a, rest = __rest(_a, ["children", "title", "placement"]);
    return (_jsx(MUITooltip, Object.assign({ title: title, placement: placement }, rest, { children: children })));
};
//# sourceMappingURL=index.js.map