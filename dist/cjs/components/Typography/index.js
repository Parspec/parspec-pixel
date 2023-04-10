"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyXS = exports.BodySmall = exports.BodyMedium = exports.BodyBig = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const TextLimiter_1 = require("./TextLimiter");
const Heading = (_a) => {
    var { limit, lines, children } = _a, rest = __rest(_a, ["limit", "lines", "children"]);
    return (0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({}, rest, { children: limit ? (0, jsx_runtime_1.jsx)(TextLimiter_1.TextLimiter, { text: children, tooltip: children, lines: lines }) : children }));
};
Heading.defaultProps = {
    color: 'secondary',
    limit: true,
    lines: 1
};
const BodyText = (_a) => {
    var { limit, lines, children } = _a, rest = __rest(_a, ["limit", "lines", "children"]);
    return (0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({}, rest, { children: limit ? (0, jsx_runtime_1.jsx)(TextLimiter_1.TextLimiter, { text: children, tooltip: children, lines: lines }) : children }));
};
BodyText.defaultProps = {
    color: 'secondary',
    limit: true,
    lines: 1
};
const H1 = (props) => (0, jsx_runtime_1.jsx)(Heading, Object.assign({}, props, { variant: "h1" }));
exports.H1 = H1;
const H2 = (props) => (0, jsx_runtime_1.jsx)(Heading, Object.assign({}, props, { variant: "h2" }));
exports.H2 = H2;
const H3 = (props) => (0, jsx_runtime_1.jsx)(Heading, Object.assign({}, props, { variant: "h3" }));
exports.H3 = H3;
const H4 = (props) => (0, jsx_runtime_1.jsx)(Heading, Object.assign({}, props, { variant: "h4" }));
exports.H4 = H4;
const H5 = (props) => (0, jsx_runtime_1.jsx)(Heading, Object.assign({}, props, { variant: "h5" }));
exports.H5 = H5;
const H6 = (props) => (0, jsx_runtime_1.jsx)(Heading, Object.assign({}, props, { variant: "h6" }));
exports.H6 = H6;
const BodyBig = (props) => (0, jsx_runtime_1.jsx)(BodyText, Object.assign({}, props, { fontSize: '18px', letterSpacing: '0.15px', lineHeight: '28px' }));
exports.BodyBig = BodyBig;
const BodyMedium = (props) => (0, jsx_runtime_1.jsx)(BodyText, Object.assign({}, props, { fontSize: '16px', letterSpacing: '0.44px', lineHeight: '24px' }));
exports.BodyMedium = BodyMedium;
const BodySmall = (props) => (0, jsx_runtime_1.jsx)(BodyText, Object.assign({}, props, { fontSize: '14px', letterSpacing: '0.25px', lineHeight: '16px' }));
exports.BodySmall = BodySmall;
const BodyXS = (props) => (0, jsx_runtime_1.jsx)(BodyText, Object.assign({}, props, { fontSize: '12px', lineHeight: '15px' }));
exports.BodyXS = BodyXS;
//# sourceMappingURL=index.js.map