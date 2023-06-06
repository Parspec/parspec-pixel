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
import { default as MUITypography } from '@mui/material/Typography';
import { TextLimiter } from './TextLimiter';
const Heading = (_a) => {
    var { limit, lines, children } = _a, rest = __rest(_a, ["limit", "lines", "children"]);
    return _jsx(MUITypography, Object.assign({}, rest, { children: limit ? _jsx(TextLimiter, { text: children, tooltip: children, lines: lines }) : children }));
};
Heading.defaultProps = {
    color: 'secondary',
    limit: true,
    lines: 1
};
const BodyText = (_a) => {
    var { limit, lines, children } = _a, rest = __rest(_a, ["limit", "lines", "children"]);
    return _jsx(MUITypography, Object.assign({}, rest, { children: limit ? _jsx(TextLimiter, { text: children, tooltip: children, lines: lines }) : children }));
};
BodyText.defaultProps = {
    color: 'secondary',
    limit: true,
    lines: 1
};
export const H1 = (props) => _jsx(Heading, Object.assign({}, props, { variant: "h1", fontSize: '96px', lineHeight: '120px' }));
export const H2 = (props) => _jsx(Heading, Object.assign({}, props, { variant: "h2", fontSize: '60px' }));
export const H3 = (props) => _jsx(Heading, Object.assign({}, props, { variant: "h3", fontSize: '48px', lineHeight: '80px' }));
export const H4 = (props) => _jsx(Heading, Object.assign({}, props, { variant: "h4", fontSize: '34px' }));
export const H5 = (props) => _jsx(Heading, Object.assign({}, props, { variant: "h5", fontSize: '24px' }));
export const H6 = (props) => _jsx(Heading, Object.assign({}, props, { variant: "h6", fontSize: '20px' }));
export const BodyBig = (props) => _jsx(BodyText, Object.assign({}, props, { fontSize: '18px', letterSpacing: '0.15px', lineHeight: '28px' }));
export const BodyMedium = (props) => _jsx(BodyText, Object.assign({}, props, { fontSize: '16px', letterSpacing: '0.44px', lineHeight: '24px' }));
export const BodySmall = (props) => _jsx(BodyText, Object.assign({}, props, { fontSize: '14px', letterSpacing: '0.25px', lineHeight: '18px' }));
export const BodyXS = (props) => _jsx(BodyText, Object.assign({}, props, { fontSize: '12px', lineHeight: '15px' }));
//# sourceMappingURL=index.js.map