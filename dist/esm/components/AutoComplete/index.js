var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, Fragment } from 'react';
import { CircularProgress } from '../CircularProgress';
import { TextField } from '../TextField';
import { default as MUIAutocomplete } from '@mui/material/Autocomplete';
const Autocomplete = (props) => {
    const { id, label, color, variant, onChange, optionlabelkeyname } = props;
    const handleOnChange = (event, newValue) => {
        onChange(event, newValue);
    };
    return (_jsx(MUIAutocomplete, Object.assign({}, props, { id: id, onChange: handleOnChange, getOptionLabel: (option) => {
            if (typeof option === 'object') {
                return `${option[optionlabelkeyname]}`;
            }
            return option;
        }, renderInput: (params) => _jsx(TextField, Object.assign({}, params, { variant: variant, color: color, label: label })) })));
};
Autocomplete.defaultProps = {
    color: 'primary',
    variant: 'outlined'
};
const AsyncAutocomplete = (props) => {
    const { id, label, color, variant, onChange, loadersize, asyncfunc, optionlabelkeyname } = props;
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
        onChange(event, newValue);
    };
    return (_jsx(MUIAutocomplete, Object.assign({}, props, { id: id, options: options, open: open, onOpen: () => {
            setOpen(true);
        }, onClose: () => {
            setOpen(false);
        }, onChange: handleOnChange, isOptionEqualToValue: (option, value) => option[optionlabelkeyname] === value[optionlabelkeyname], getOptionLabel: (option) => `${option[optionlabelkeyname]}`, renderInput: (params) => (_jsx(TextField, Object.assign({}, params, { color: color, label: label, variant: variant, InputProps: Object.assign(Object.assign({}, params.InputProps), { endAdornment: (_jsxs(Fragment, { children: [loading ? _jsx(CircularProgress, { size: loadersize }) : null, params.InputProps.endAdornment] })) }) }))) })));
};
AsyncAutocomplete.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    loadersize: 20
};
export { Autocomplete, AsyncAutocomplete };
//# sourceMappingURL=index.js.map