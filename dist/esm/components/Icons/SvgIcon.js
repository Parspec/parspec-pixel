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
import { SvgIcon as MUISvgIcon } from '@mui/material';
import { theme } from '../../theme';
import { ICON_SIZE_OPTIONS } from '../../Shared/utils';
export function getFillColor(color) {
    if (!color)
        return theme.palette.primary.main;
    const [c0, c1] = color.split('.');
    const finalColor = theme.palette[c0];
    return c1 ? finalColor[c1] : finalColor.main;
}
export function SvgIcon(_a) {
    var { children, fontSize, color } = _a, restProps = __rest(_a, ["children", "fontSize", "color"]);
    return (_jsx(MUISvgIcon, Object.assign({}, restProps, { sx: { fontSize: ICON_SIZE_OPTIONS[fontSize] } }, { children: children })));
}
SvgIcon.defaultProps = {
    fontSize: 'medium',
    color: 'primary'
};
//# sourceMappingURL=SvgIcon.js.map