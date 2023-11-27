"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autocomplete = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const TextField_1 = require("../TextField");
const Autocomplete_1 = __importStar(require("@mui/material/Autocomplete"));
const filter = (0, Autocomplete_1.createFilterOptions)();
exports.Autocomplete = (0, react_1.forwardRef)((_a, ref) => {
    var { id, label, placeholder, color, variant, onChange, optionlabelkeyname, freeSolo, fieldSize, onBlur = () => { }, helperText, error, options, onTextFieldChange, limitTags, disabled, value, filterOptionsCallBack = (options, params) => {
        let filteredOptions = filter(options, params);
        if (typeof state === 'object' && state[optionlabelkeyname]) {
            filteredOptions = options.filter((option) => option[optionlabelkeyname] === state[optionlabelkeyname]);
        }
        return filteredOptions;
    } } = _a, props = __rest(_a, ["id", "label", "placeholder", "color", "variant", "onChange", "optionlabelkeyname", "freeSolo", "fieldSize", "onBlur", "helperText", "error", "options", "onTextFieldChange", "limitTags", "disabled", "value", "filterOptionsCallBack"]);
    const [state, setState] = (0, react_1.useState)(value || '');
    const handleOnChange = (event, newValue) => {
        onChange(Object.assign(Object.assign({}, event), { target: Object.assign(Object.assign({}, event.target), { value: newValue }) }));
    };
    (0, react_1.useEffect)(() => {
        if (value) {
            setState(value);
        }
    }, [value]);
    const filterOptions = (options, params) => {
        return filterOptionsCallBack(options, params);
    };
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
            setState(inputValue);
            onBlur(inputValue);
        }
    };
    const handleOnInputChange = (event, value) => {
        setState(value);
        if (onTextFieldChange) {
            onTextFieldChange(event, value);
        }
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(Autocomplete_1.default, Object.assign({ fullWidth: true }, props, { options: options, ref: ref, id: id, onBlur: handleFocusOut, onChange: handleOnChange, getOptionLabel: (option) => {
                if (typeof option === 'object') {
                    return `${option[optionlabelkeyname]}`;
                }
                return option;
            }, value: value, limitTags: limitTags, filterOptions: filterOptions, onInputChange: handleOnInputChange, freeSolo: freeSolo, renderInput: (_a) => {
                var { size } = _a, params = __rest(_a, ["size"]);
                return ((0, jsx_runtime_1.jsx)(TextField_1.TextField, Object.assign({ size: fieldSize, helperText: helperText, error: error }, params, { variant: variant, color: color, label: label, placeholder: placeholder })));
            }, disabled: disabled })) }));
});
exports.Autocomplete.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    freeSolo: false,
    fieldSize: 'small',
    multiple: false,
    helperText: '',
    error: false
};
//# sourceMappingURL=Autocomplete.js.map