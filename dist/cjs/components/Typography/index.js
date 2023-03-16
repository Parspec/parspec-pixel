"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyXS = exports.BodySmall = exports.BodyMedium = exports.BodyBig = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const Heading = (props) => jsx_runtime_1.jsx(Typography_1.default, Object.assign({}, props), void 0);
Heading.defaultProps = {
    color: 'secondary'
};
const BodyText = (props) => {
    return jsx_runtime_1.jsx(Typography_1.default, Object.assign({}, props), void 0);
};
BodyText.defaultProps = {
    color: 'secondary'
};
const H1 = (props) => jsx_runtime_1.jsx(Heading, Object.assign({}, props, { variant: "h1" }), void 0);
exports.H1 = H1;
const H2 = (props) => jsx_runtime_1.jsx(Heading, Object.assign({}, props, { variant: "h2" }), void 0);
exports.H2 = H2;
const H3 = (props) => jsx_runtime_1.jsx(Heading, Object.assign({}, props, { variant: "h3" }), void 0);
exports.H3 = H3;
const H4 = (props) => jsx_runtime_1.jsx(Heading, Object.assign({}, props, { variant: "h4" }), void 0);
exports.H4 = H4;
const H5 = (props) => jsx_runtime_1.jsx(Heading, Object.assign({}, props, { variant: "h5" }), void 0);
exports.H5 = H5;
const H6 = (props) => jsx_runtime_1.jsx(Heading, Object.assign({}, props, { variant: "h6" }), void 0);
exports.H6 = H6;
const BodyBig = (props) => jsx_runtime_1.jsx(BodyText, Object.assign({}, props, { fontSize: '18px', letterSpacing: '0.15px', lineHeight: '28px' }), void 0);
exports.BodyBig = BodyBig;
const BodyMedium = (props) => jsx_runtime_1.jsx(BodyText, Object.assign({}, props, { fontSize: '16px', letterSpacing: '0.44px', lineHeight: '24px' }), void 0);
exports.BodyMedium = BodyMedium;
const BodySmall = (props) => jsx_runtime_1.jsx(BodyText, Object.assign({}, props, { fontSize: '14px', letterSpacing: '0.25px', lineHeight: '16px' }), void 0);
exports.BodySmall = BodySmall;
const BodyXS = (props) => jsx_runtime_1.jsx(BodyText, Object.assign({}, props, { fontSize: '12px', lineHeight: '15px' }), void 0);
exports.BodyXS = BodyXS;
//# sourceMappingURL=index.js.map