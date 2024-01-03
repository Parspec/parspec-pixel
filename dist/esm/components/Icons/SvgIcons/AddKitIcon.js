import { jsx as _jsx } from "react/jsx-runtime";
import { SvgIcon, getFillColor } from '../SvgIcon';
export const AddKitIcon = ({ fontSize, color }) => {
    return (_jsx(SvgIcon, Object.assign({ fontSize: fontSize, xmlns: "http://www.w3.org/2000/svg" }, { children: _jsx("path", { d: "M19 3.5H5C3.89 3.5 3 4.4 3 5.5V19.5C3 20.6 3.89 21.5 5 21.5H19C20.1 21.5 21 20.6 21 19.5V5.5C21 4.4 20.1 3.5 19 3.5ZM19 19.5H5V5.5H19V19.5ZM11 17.5H13V13.5H17V11.5H13V7.5H11V11.5H7V13.5H11V17.5Z", fill: getFillColor(String(color), 'dark') }) })));
};
_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "25", viewBox: "0 0 24 25", fill: "none" });
AddKitIcon.defaultProps = {
    fontSize: 'medium',
    color: 'neutral'
};
//# sourceMappingURL=AddKitIcon.js.map