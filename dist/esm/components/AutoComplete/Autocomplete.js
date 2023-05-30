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
    var { id, label, color, variant, onChange, optionlabelkeyname, freeSolo, fieldSize, onBlur, helperText, error, options, onTextFieldChange } = _a, props = __rest(_a, ["id", "label", "color", "variant", "onChange", "optionlabelkeyname", "freeSolo", "fieldSize", "onBlur", "helperText", "error", "options", "onTextFieldChange"]);
    const [state, setState] = useState();
    const handleOnChange = (event, newValue) => {
        onChange(Object.assign(Object.assign({}, event), { target: Object.assign(Object.assign({}, event.target), { value: newValue }) }));
    };
    const filterOptions = (options, params) => {
        let filteredOptions = filter(options, params);
        if (typeof state === 'object') {
            filteredOptions = options.filter((option) => option[optionlabelkeyname] === state[optionlabelkeyname]);
        }
        return filteredOptions;
    };
    const handleFocusOut = (event) => {
        if (onBlur) {
            let result = options.filter((item) => typeof item[optionlabelkeyname] === 'string' ? item[optionlabelkeyname].toString().toLowerCase() : item[optionlabelkeyname] === event.target.value.toLowerCase());
            if (!result.length) {
                result = event.target.value;
            }
            let _result = typeof result === 'object' ? result[0] : result;
            setState(_result);
            onBlur(_result);
        }
    };
    const handleOnInputChange = (event, value) => {
        setState(value);
        if (onTextFieldChange) {
            onTextFieldChange(event);
        }
    };
    return (_jsx(_Fragment, { children: _jsx(MUIAutocomplete, Object.assign({ fullWidth: true }, props, { options: options, ref: ref, id: id, onBlur: handleFocusOut, onChange: handleOnChange, getOptionLabel: (option) => {
                if (typeof option === 'object') {
                    return `${option[optionlabelkeyname]}`;
                }
                return option;
            }, filterOptions: filterOptions, onInputChange: handleOnInputChange, freeSolo: freeSolo, renderInput: (_a) => {
                var { size } = _a, params = __rest(_a, ["size"]);
                return _jsx(TextField, Object.assign({ size: fieldSize, helperText: helperText, error: error }, params, { variant: variant, color: color, label: label }));
            } })) }));
});
Autocomplete.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    freeSolo: false,
    fieldSize: 'small',
    multiple: false,
    helperText: '',
    error: false
};
//# sourceMappingURL=Autocomplete.js.map