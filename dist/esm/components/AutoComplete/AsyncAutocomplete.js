var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import { useState, useEffect, Fragment } from 'react';
import { default as MUIAutocomplete } from '@mui/material/Autocomplete';
import { CircularProgress } from '../CircularProgress';
import { TextField } from '../TextField';
export const AsyncAutocomplete = (_a) => {
    var { id, label, color, variant, onChange, loadersize, asyncfunc, optionlabelkeyname } = _a, props = __rest(_a, ["id", "label", "color", "variant", "onChange", "loadersize", "asyncfunc", "optionlabelkeyname"]);
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;
    useEffect(() => {
        let active = true;
        if (!loading) {
            return undefined;
        }
        (() => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield asyncfunc();
            if (active) {
                setOptions([...result]);
            }
        }))();
        return () => {
            active = false;
        };
    }, [loading]);
    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);
    const handleOnChange = (event, newValue) => {
        onChange(Object.assign(Object.assign({}, event), { target: Object.assign(Object.assign({}, event.target), { value: newValue }) }));
    };
    return (_jsx(MUIAutocomplete, Object.assign({}, props, { id: id, options: options, open: open, onOpen: () => {
            setOpen(true);
        }, onClose: () => {
            setOpen(false);
        }, onChange: handleOnChange, isOptionEqualToValue: (option, value) => option[optionlabelkeyname] === value[optionlabelkeyname], getOptionLabel: (option) => `${option[optionlabelkeyname]}`, renderInput: (params) => (_jsx(TextField, Object.assign({}, params, { color: color, label: label, variant: variant, InputProps: Object.assign(Object.assign({}, params.InputProps), { endAdornment: (_jsxs(Fragment, { children: [loading ? _jsx(CircularProgress, {}, void 0) : null, params.InputProps.endAdornment] }, void 0)) }) }), void 0)) }), void 0));
};
AsyncAutocomplete.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    loadersize: 20
};
//# sourceMappingURL=AsyncAutocomplete.js.map