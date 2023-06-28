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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useMemo } from 'react';
import { Autocomplete, Box, Checkbox } from '@mui/material';
import { CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon } from '@mui/icons-material';
import { CheckBox as CheckBoxIcon } from '@mui/icons-material';
import { TextField } from '../TextField';
const icon = _jsx(CheckBoxOutlineBlankIcon, { fontSize: "small" });
const checkedIcon = _jsx(CheckBoxIcon, { fontSize: "small" });
function sortOptions(options, values) {
    let selected = new Set();
    for (let value of values || []) {
        selected.add(value.label);
    }
    console.log(selected);
    return [...options].sort((option1, option2) => {
        const isOption1Selected = selected.has(option1.label);
        const isOption2Selected = selected.has(option2.label);
        if (isOption1Selected && !isOption2Selected) {
            return -1;
        }
        else if (!isOption1Selected && isOption2Selected) {
            return 1;
        }
        const option1Label = option1.label.toLowerCase();
        const option2Label = option2.label.toLowerCase();
        if (option1Label < option2Label) {
            return -1;
        }
        else if (option1Label > option2Label) {
            return 1;
        }
        return 0;
    });
}
export const MultiSelect = forwardRef(function (_a, ref) {
    var { value, size, helperText, error, options, variant, color, label, placeholder, id, filterOptions } = _a, restParams = __rest(_a, ["value", "size", "helperText", "error", "options", "variant", "color", "label", "placeholder", "id", "filterOptions"]);
    const sortedOptions = useMemo(() => sortOptions(options, value), [options, value]);
    function getDefaultFilterOption(options, state) {
        return options.filter((option) => option.label.toLowerCase().includes(state.inputValue.toLowerCase()));
    }
    return (_jsx(Autocomplete, Object.assign({}, restParams, { value: value, options: sortedOptions, multiple: true, size: size, ref: ref, filterOptions: filterOptions ? filterOptions : getDefaultFilterOption, getOptionLabel: (option) => option.label, isOptionEqualToValue: (option, value) => option.label === value.label, renderInput: (_a) => {
            var { size: _fieldSize } = _a, params = __rest(_a, ["size"]);
            const { InputProps: _InputProps } = params, restParams = __rest(params, ["InputProps"]);
            const { startAdornment } = _InputProps, restInputProps = __rest(_InputProps, ["startAdornment"]);
            return (_jsx(TextField, Object.assign({ helperText: helperText, error: error, size: size }, restParams, { InputProps: Object.assign(Object.assign({}, restInputProps), { startAdornment: (_jsx(Box, Object.assign({ style: {
                            maxHeight: size === 'medium' ? '114px' : '84px',
                            overflowY: 'auto'
                        } }, { children: startAdornment }))) }), variant: variant, color: color, label: label, placeholder: placeholder })));
        }, renderOption: (props, option, { selected }) => (_jsxs("li", Object.assign({}, props, { children: [_jsx(Checkbox, { color: color, icon: icon, checkedIcon: checkedIcon, style: { marginRight: 2 }, checked: selected }), option.label] }))) })));
});
MultiSelect.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    freeSolo: false,
    size: 'small',
    error: false
};
//# sourceMappingURL=MultiSelect.js.map