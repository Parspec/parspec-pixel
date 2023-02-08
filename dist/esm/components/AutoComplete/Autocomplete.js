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
import { TextField } from '../TextField';
import { default as MUIAutocomplete } from '@mui/material/Autocomplete';
export const Autocomplete = (_a) => {
    var { id, label, color, variant, onChange, optionlabelkeyname, freeSolo } = _a, props = __rest(_a, ["id", "label", "color", "variant", "onChange", "optionlabelkeyname", "freeSolo"]);
    const handleOnChange = (event, newValue) => {
        onChange(Object.assign(Object.assign({}, event), { target: Object.assign(Object.assign({}, event.target), { value: newValue }) }));
    };
    return (_jsx(MUIAutocomplete, Object.assign({}, props, { id: id, onChange: handleOnChange, getOptionLabel: (option) => {
            if (typeof option === 'object') {
                return `${option[optionlabelkeyname]}`;
            }
            return option;
        }, freeSolo: freeSolo, renderInput: (params) => _jsx(TextField, Object.assign({}, params, { variant: variant, color: color, label: label })) })));
};
Autocomplete.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    freeSolo: false
};
//# sourceMappingURL=Autocomplete.js.map