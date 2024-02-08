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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SvgIcon = exports.getFillColor = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const theme_1 = require("../../theme");
const utils_1 = require("../../Shared/utils");
function getFillColor(color, contrast) {
    if (!color)
        return theme_1.theme.palette.primary.main;
    const [c0, c1] = color.split('.');
    const finalColor = theme_1.theme.palette[c0];
    return c1 ? finalColor[c1] : contrast ? finalColor[contrast] : finalColor.main;
}
exports.getFillColor = getFillColor;
function SvgIcon(_a) {
    var { children, fontSize, color } = _a, restProps = __rest(_a, ["children", "fontSize", "color"]);
    return ((0, jsx_runtime_1.jsx)(material_1.SvgIcon, Object.assign({}, restProps, { sx: { fontSize: utils_1.ICON_SIZE_OPTIONS[fontSize] } }, { children: children })));
}
exports.SvgIcon = SvgIcon;
SvgIcon.defaultProps = {
    fontSize: 'medium',
    color: 'primary'
};
//# sourceMappingURL=SvgIcon.js.map