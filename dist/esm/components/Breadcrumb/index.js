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
import Link from '@mui/material/Link';
import { BodyXS } from '../Typography';
export const Breadcrumb = (_a) => {
    var { options } = _a, rest = __rest(_a, ["options"]);
    return (_jsx(MUIBreadcrumb, Object.assign({ separator: ">" }, rest, { children: options.map((item, index) => {
            if (index === options.length - 1) {
                return _jsx(BodyXS, Object.assign({ color: 'secondary' }, { children: item.displaytext }));
            }
            return (_jsx(Link, Object.assign({ fontWeight: "400", fontFamily: "Inter", fontSize: '12px', color: "secondary", underline: 'hover', href: item.href }, { children: item.displaytext }), index));
        }) })));
};
//# sourceMappingURL=index.js.map