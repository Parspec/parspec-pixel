import { jsx as _jsx } from "react/jsx-runtime";
import { SvgIcon, getFillColor } from '../SvgIcon';
export const ClockIcon = ({ fontSize, color }) => {
    return (_jsx(SvgIcon, Object.assign({ fontSize: fontSize, xmlns: "http://www.w3.org/2000/svg" }, { children: _jsx("path", { d: "M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM10.5 5H9V11L14.25 14.15L15 12.92L10.5 10.25V5Z", fill: getFillColor(String(color)) }) })));
};
ClockIcon.defaultProps = {
    fontSize: 'medium',
    color: 'primary'
};
//# sourceMappingURL=ClockIcon.js.map