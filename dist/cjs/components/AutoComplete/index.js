"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncAutocomplete = exports.Autocomplete = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CircularProgress_1 = require("../CircularProgress");
const TextField_1 = require("../TextField");
const Autocomplete_1 = __importDefault(require("@mui/material/Autocomplete"));
const Autocomplete = (props) => {
    const { id, label, color, variant, onChange, optionlabelkeyname } = props;
    const handleOnChange = (event, newValue) => {
        event.target = Object.assign(Object.assign({}, event.target), { value: { newValue } });
        onChange(event);
    };
    return ((0, jsx_runtime_1.jsx)(Autocomplete_1.default, Object.assign({}, props, { id: id, onChange: handleOnChange, getOptionLabel: (option) => {
            if (typeof option === 'object') {
                return `${option[optionlabelkeyname]}`;
            }
            return option;
        }, renderInput: (params) => (0, jsx_runtime_1.jsx)(TextField_1.TextField, Object.assign({}, params, { variant: variant, color: color, label: label })) })));
};
exports.Autocomplete = Autocomplete;
Autocomplete.defaultProps = {
    color: 'primary',
    variant: 'outlined'
};
const AsyncAutocomplete = (props) => {
    const { id, label, color, variant, onChange, loadersize, asyncfunc, optionlabelkeyname } = props;
    const [open, setOpen] = (0, react_1.useState)(false);
    const [options, setOptions] = (0, react_1.useState)([]);
    const loading = open && options.length === 0;
    (0, react_1.useEffect)(() => {
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
    (0, react_1.useEffect)(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);
    const handleOnChange = (event, newValue) => {
        event.target = Object.assign(Object.assign({}, event.target), { value: { newValue } });
        onChange(event);
    };
    return ((0, jsx_runtime_1.jsx)(Autocomplete_1.default, Object.assign({}, props, { id: id, options: options, open: open, onOpen: () => {
            setOpen(true);
        }, onClose: () => {
            setOpen(false);
        }, onChange: handleOnChange, isOptionEqualToValue: (option, value) => option[optionlabelkeyname] === value[optionlabelkeyname], getOptionLabel: (option) => `${option[optionlabelkeyname]}`, renderInput: (params) => ((0, jsx_runtime_1.jsx)(TextField_1.TextField, Object.assign({}, params, { color: color, label: label, variant: variant, InputProps: Object.assign(Object.assign({}, params.InputProps), { endAdornment: ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [loading ? (0, jsx_runtime_1.jsx)(CircularProgress_1.CircularProgress, { size: loadersize }) : null, params.InputProps.endAdornment] })) }) }))) })));
};
exports.AsyncAutocomplete = AsyncAutocomplete;
AsyncAutocomplete.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    loadersize: 20
};
//# sourceMappingURL=index.js.map