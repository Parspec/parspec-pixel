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
import { default as MUIBreadcrumb } from '@mui/material/Breadcrumbs';
import MUILink from '@mui/material/Link';
import { Skeleton } from '../skeleton';
import { BodyXS } from '../Typography';
function Link(_a) {
    var { children, component } = _a, restProps = __rest(_a, ["children", "component"]);
    return (_jsx(MUILink, Object.assign({ component: component }, restProps, { children: children })));
}
export const Breadcrumb = (_a) => {
    var { options, component, isLoading = false } = _a, rest = __rest(_a, ["options", "component", "isLoading"]);
    return (_jsx(MUIBreadcrumb, Object.assign({ separator: ">" }, rest, { children: options.map((item, index) => {
            if (isLoading) {
                return _jsx(Skeleton, { variant: "rectangular", width: "116px", height: "16px" }, index);
            }
            if (index === options.length - 1) {
                return (_jsx(BodyXS, Object.assign({ color: 'secondary' }, { children: item.displaytext }), index));
            }
            return (_jsx(Link, Object.assign({ fontWeight: "400", fontFamily: "Inter", fontSize: '12px', color: "secondary", underline: 'hover', to: item.href, component: component }, { children: item.displaytext }), index));
        }) })));
};
//# sourceMappingURL=index.js.map