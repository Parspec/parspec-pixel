import { jsx as _jsx } from "react/jsx-runtime";
import { default as MUITypography } from '@mui/material/Typography';
const Heading = (props) => _jsx(MUITypography, Object.assign({}, props), void 0);
Heading.defaultProps = {
    color: 'secondary'
};
const BodyText = (props) => {
    return _jsx(MUITypography, Object.assign({}, props), void 0);
};
BodyText.defaultProps = {
    color: 'secondary'
};
const H1 = (props) => _jsx(Heading, Object.assign({}, props, { variant: "h1" }), void 0);
const H2 = (props) => _jsx(Heading, Object.assign({}, props, { variant: "h2" }), void 0);
const H3 = (props) => _jsx(Heading, Object.assign({}, props, { variant: "h3" }), void 0);
const H4 = (props) => _jsx(Heading, Object.assign({}, props, { variant: "h4" }), void 0);
const H5 = (props) => _jsx(Heading, Object.assign({}, props, { variant: "h5" }), void 0);
const H6 = (props) => _jsx(Heading, Object.assign({}, props, { variant: "h6" }), void 0);
const BodyBig = (props) => _jsx(BodyText, Object.assign({}, props, { fontSize: '18px', letterSpacing: '0.15px', lineHeight: '28px' }), void 0);
const BodyMedium = (props) => _jsx(BodyText, Object.assign({}, props, { fontSize: '16px', letterSpacing: '0.44px', lineHeight: '24px' }), void 0);
const BodySmall = (props) => _jsx(BodyText, Object.assign({}, props, { fontSize: '14px', letterSpacing: '0.25px', lineHeight: '16px' }), void 0);
const BodyXS = (props) => _jsx(BodyText, Object.assign({}, props, { fontSize: '12px', lineHeight: '15px' }), void 0);
export const Typography = {
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