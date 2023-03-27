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
function getCustomFontsize(fontSize) {
    switch (fontSize) {
        case 'xl':
            return '40px';
        case 'xxl':
            return '44px';
    }
}
export function SvgIcon(_a) {
    var { children } = _a, restProps = __rest(_a, ["children"]);
    const { fontSize } = restProps;
    const customFontSize = getCustomFontsize(fontSize);
    return (_jsx(MUISvgIcon, Object.assign({}, restProps, { sx: { fontSize: customFontSize } }, { children: children })));
}
//# sourceMappingURL=SvgIcon.js.map