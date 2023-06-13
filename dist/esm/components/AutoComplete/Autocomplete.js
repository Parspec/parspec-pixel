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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef, useState } from 'react';
import { TextField } from '../TextField';
import { default as MUIAutocomplete, createFilterOptions } from '@mui/material/Autocomplete';
const filter = createFilterOptions();
export const Autocomplete = forwardRef((_a, ref) => {
    var { id, label, placeholder, color, variant, onChange, optionlabelkeyname, size, freeSolo, onBlur = () => { }, helperText, error, options, onTextFieldChange, limitTags } = _a, props = __rest(_a, ["id", "label", "placeholder", "color", "variant", "onChange", "optionlabelkeyname", "size", "freeSolo", "onBlur", "helperText", "error", "options", "onTextFieldChange", "limitTags"]);
    const [state, setState] = useState();
    const handleOnChange = (_event, newValue) => {
        onChange(newValue);
    };
    const filterOptions = (options, params) => {
        let filteredOptions = filter(options, params);
        if (typeof state === 'object') {
            filteredOptions = options.filter((option) => option[optionlabelkeyname] === state[optionlabelkeyname]);
        }
        return filteredOptions;
    };
    const handleFocusOut = (event) => {
        var _a;
        let customValue = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value;
        if (customValue) {
            const result = [];
            for (let item of options) {
                if (typeof item[optionlabelkeyname] === 'number') {
                    break;
                }
                else if (customValue.includes(item[optionlabelkeyname])) {
                    result.push(item);
                }
            }
            setState(result[0]);
            onBlur(result[0]);
        }
    };
    const handleOnInputChange = (event, value) => {
        setState(value);
        if (onTextFieldChange) {
            onTextFieldChange(event);
        }
    };
    return (_jsx(_Fragment, { children: _jsx(MUIAutocomplete, Object.assign({ fullWidth: true }, props, { size: size, options: options, ref: ref, id: id, onBlur: handleFocusOut, onChange: handleOnChange, getOptionLabel: (option) => {
                if (typeof option === 'object') {
                    return `${option[optionlabelkeyname]}`;
                }
                return option;
            }, limitTags: limitTags, filterOptions: filterOptions, onInputChange: handleOnInputChange, freeSolo: freeSolo, renderInput: (_a) => {
                var { size: _fieldSize } = _a, params = __rest(_a, ["size"]);
                return (_jsx(TextField, Object.assign({ helperText: helperText, error: error, size: size }, params, { variant: variant, color: color, label: label, placeholder: placeholder })));
            } })) }));
});
Autocomplete.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    freeSolo: false,
    size: 'small',
    multiple: false,
    helperText: '',
    error: false
};
//# sourceMappingURL=Autocomplete.js.map