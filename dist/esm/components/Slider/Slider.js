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
import { forwardRef } from 'react';
import { default as MUISlider } from '@mui/material/Slider';
export const Slider = forwardRef((_a, ref) => {
    var { size, step, min, max, color, marks, disabled, disableSwap } = _a, rest = __rest(_a, ["size", "step", "min", "max", "color", "marks", "disabled", "disableSwap"]);
    return _jsx(MUISlider, Object.assign({ ref: ref, size: size, marks: marks, step: step, min: min, max: max, color: color, disabled: disabled, disableSwap: disableSwap }, rest));
});
Slider.defaultProps = {
    size: 'small',
    color: 'primary',
    disabled: false,
    min: 0,
    max: 100,
    disableSwap: true
};
//# sourceMappingURL=Slider.js.map