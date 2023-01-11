"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typography = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const Heading = (props) => (0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({}, props));
Heading.defaultProps = {
    color: 'secondary'
};
const BodyText = (props) => {
    return (0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({}, props));
};
BodyText.defaultProps = {
    color: 'secondary'
};
const H1 = (props) => (0, jsx_runtime_1.jsx)(Heading, Object.assign({}, props, { variant: "h1" }));
const H2 = (props) => (0, jsx_runtime_1.jsx)(Heading, Object.assign({}, props, { variant: "h2" }));
const H3 = (props) => (0, jsx_runtime_1.jsx)(Heading, Object.assign({}, props, { variant: "h3" }));
const H4 = (props) => (0, jsx_runtime_1.jsx)(Heading, Object.assign({}, props, { variant: "h4" }));
const H5 = (props) => (0, jsx_runtime_1.jsx)(Heading, Object.assign({}, props, { variant: "h5" }));
const H6 = (props) => (0, jsx_runtime_1.jsx)(Heading, Object.assign({}, props, { variant: "h6" }));
const BodyBig = (props) => (0, jsx_runtime_1.jsx)(BodyText, Object.assign({}, props, { fontSize: '18px', letterSpacing: '0.15px', lineHeight: '28px' }));
const BodyMedium = (props) => (0, jsx_runtime_1.jsx)(BodyText, Object.assign({}, props, { fontSize: '16px', letterSpacing: '0.44px', lineHeight: '24px' }));
const BodySmall = (props) => (0, jsx_runtime_1.jsx)(BodyText, Object.assign({}, props, { fontSize: '14px', letterSpacing: '0.25px', lineHeight: '16px' }));
const BodyXS = (props) => (0, jsx_runtime_1.jsx)(BodyText, Object.assign({}, props, { fontSize: '12px', lineHeight: '15px' }));
exports.Typography = {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    BodyBig,
    BodyMedium,
    BodySmall,
    BodyXS
};
//# sourceMappingURL=index.js.map