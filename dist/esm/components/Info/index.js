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
import { Box } from '@mui/material';
export function Info(_a) {
    var { children } = _a, otherProps = __rest(_a, ["children"]);
    return (_jsx(Box, Object.assign({}, otherProps, { padding: "8px", border: "1px solid", borderColor: "primary.dark", color: "primary.dark" }, { children: children })));
}
//# sourceMappingURL=index.js.map