"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autocomplete = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TextField_1 = require("../TextField");
const Autocomplete_1 = __importDefault(require("@mui/material/Autocomplete"));
const Autocomplete = (_a) => {
    var { id, label, color, variant, onChange, optionlabelkeyname, freeSolo } = _a, props = __rest(_a, ["id", "label", "color", "variant", "onChange", "optionlabelkeyname", "freeSolo"]);
    const handleOnChange = (event, newValue) => {
        onChange(Object.assign(Object.assign({}, event), { target: Object.assign(Object.assign({}, event.target), { value: newValue }) }));
    };
    return ((0, jsx_runtime_1.jsx)(Autocomplete_1.default, Object.assign({}, props, { id: id, onChange: handleOnChange, getOptionLabel: (option) => {
            if (typeof option === 'object') {
                return `${option[optionlabelkeyname]}`;
            }
            return option;
        }, freeSolo: freeSolo, renderInput: (params) => (0, jsx_runtime_1.jsx)(TextField_1.TextField, Object.assign({}, params, { variant: variant, color: color, label: label })) })));
};
exports.Autocomplete = Autocomplete;
exports.Autocomplete.defaultProps = {
    color: 'primary',
    variant: 'outlined',
    freeSolo: false
};
//# sourceMappingURL=Autocomplete.js.map