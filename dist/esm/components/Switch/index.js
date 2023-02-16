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
import FormControlLabel from '@mui/material/FormControlLabel';
import { default as MUISwitch } from '@mui/material/Switch';
export const Switch = (_a) => {
    var { label, color, size } = _a, rest = __rest(_a, ["label", "color", "size"]);
    return _jsx(FormControlLabel, { control: _jsx(MUISwitch, Object.assign({}, rest, { size: size, color: color })), label: label });
};
Switch.defaultProps = {
    label: '',
    color: 'tertiary',
    size: 'small'
};
//# sourceMappingURL=index.js.map