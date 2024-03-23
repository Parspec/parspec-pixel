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
export const Autocomplete = forwardRef((props, ref) => {
    const { id, label, placeholder, color, variant, onChange, optionlabelkeyname, freeSolo, fieldSize, onBlur = () => { }, helperText, error, options, onTextFieldChange, limitTags, disabled, value, autoFocus, blurOnEmptyInput, maxLength = 255, sx, inputProps, loading, getOptionLabel, getOptionDisabled } = props;
    const [state, setState] = useState(value || '');
    const handleOnChange = (event, newValue) => {
        setState(newValue);
        onChange(Object.assign(Object.assign({}, event), { target: Object.assign(Object.assign({}, event.target), { value: newValue }) }));
    };
    function getDefaultFilterOption(options, state) {
        return createFilterOptions()(options, state);
    }
    const handleFocusOut = (event) => {
        var _a;
        let inputValue = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value;
        if (inputValue) {
            for (let item of options) {
                if (item[optionlabelkeyname] === inputValue) {
                    setState(item);
                    onBlur(item);
                    return;
                }
            }
            if (Array.isArray(state)) {
                setState([...state, inputValue]);
            }
            else {
                setState(inputValue);
            }
            onBlur(inputValue);
        }
        else {
            if (blurOnEmptyInput)
                blurOnEmptyInput(inputValue);
        }
    };
    const handleOnInputChange = (event, value) => {
        if (onTextFieldChange) {
            onTextFieldChange(event, value);
        }
    };
    const handleKeyDown = (e) => {
        var _a;
        let inputValue = (_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.value;
        if (e.key === 'Enter') {
            if (Array.isArray(state)) {
                setState([...state, inputValue]);
            }
            else {
                setState(inputValue);
            }
        }
    };
    return (_jsx(_Fragment, { children: _jsx(MUIAutocomplete, Object.assign({ fullWidth: true }, props, { options: options, ref: ref, sx: sx, id: id, getOptionDisabled: getOptionDisabled, onBlur: handleFocusOut, onKeyDown: handleKeyDown, onChange: handleOnChange, getOptionLabel: (option) => {
                if (getOptionLabel) {
                    return getOptionLabel(option);
                }
                if (typeof option === 'object') {
                    return `${option[optionlabelkeyname]}`;
                }
                return option;
            }, value: state, limitTags: limitTags, filterOptions: getDefaultFilterOption, onInputChange: handleOnInputChange, freeSolo: freeSolo, renderInput: (_a) => {
                var { size } = _a, params = __rest(_a, ["size"]);
                return (_jsx(TextField, Object.assign({ size: fieldSize, helperText: helperText, error: error }, params, { variant: variant, color: color, label: label, placeholder: placeholder, autoFocus: autoFocus, inputProps: Object.assign(Object.assign(Object.assign({}, params.inputProps), inputProps), { maxLength }) })));
            }, disabled: disabled, loading: loading })) }));
});
Autocomplete.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    freeSolo: false,
    fieldSize: 'small',
    multiple: false,
    helperText: '',
    error: false,
    autoFocus: false
};
//# sourceMappingURL=Autocomplete.js.map