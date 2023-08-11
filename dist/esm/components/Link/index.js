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
import { Link as MUILink } from '@mui/material';
import { styled } from '@mui/material/styles';
const StyledLink = styled(MUILink)(({ theme }) => ({
    '&:hover': {
        color: theme.palette.primary.main
    }
}));
export function Link(_a) {
    var { children, component } = _a, restProps = __rest(_a, ["children", "component"]);
    return (_jsx(StyledLink, Object.assign({ component: component }, restProps, { children: children })));
}
//# sourceMappingURL=index.js.map