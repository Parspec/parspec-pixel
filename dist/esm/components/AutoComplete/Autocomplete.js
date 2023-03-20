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
import { TextField } from '../TextField';
import { default as MUIAutocomplete } from '@mui/material/Autocomplete';
export const Autocomplete = forwardRef((_a, ref) => {
    var { id, label, color, variant, onChange, optionlabelkeyname, freeSolo, size } = _a, props = __rest(_a, ["id", "label", "color", "variant", "onChange", "optionlabelkeyname", "freeSolo", "size"]);
    const handleOnChange = (event, newValue) => {
        onChange(Object.assign(Object.assign({}, event), { target: Object.assign(Object.assign({}, event.target), { value: newValue }) }));
    };
    return (_jsx(MUIAutocomplete, Object.assign({ size: size, fullWidth: true }, props, { ref: ref, id: id, onChange: handleOnChange, getOptionLabel: (option) => {
            if (typeof option === 'object') {
                return `${option[optionlabelkeyname]}`;
            }
            return option;
        }, freeSolo: freeSolo, renderInput: (params) => _jsx(TextField, Object.assign({}, params, { variant: variant, color: color, label: label }), void 0) }), void 0));
});
Autocomplete.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    freeSolo: false,
    size: 'small'
};
//# sourceMappingURL=Autocomplete.js.map