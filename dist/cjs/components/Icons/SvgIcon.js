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
exports.SvgIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
function getCustomFontsize(fontSize) {
    switch (fontSize) {
        case 'xl':
            return '40px';
        case 'xxl':
            return '44px';
    }
}
function SvgIcon(_a) {
    var { children } = _a, restProps = __rest(_a, ["children"]);
    const { fontSize } = restProps;
    const customFontSize = getCustomFontsize(fontSize);
    return ((0, jsx_runtime_1.jsx)(material_1.SvgIcon, Object.assign({}, restProps, { sx: { fontSize: customFontSize } }, { children: children })));
}
exports.SvgIcon = SvgIcon;
//# sourceMappingURL=SvgIcon.js.map