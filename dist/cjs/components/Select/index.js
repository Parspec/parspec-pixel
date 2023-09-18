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
exports.Select = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const InputLabel_1 = __importDefault(require("@mui/material/InputLabel"));
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
const FormControl_1 = __importDefault(require("@mui/material/FormControl"));
const Select_1 = __importDefault(require("@mui/material/Select"));
const styled_1 = __importDefault(require("@mui/material/styles/styled"));
const StyledFormControl = (0, styled_1.default)(FormControl_1.default, {
    shouldForwardProp(propName) {
        return !(propName === 'borderColor');
    }
})(({ theme, borderColor }) => {
    var _a, _b;
    if (!borderColor) {
        return {};
    }
    const colorValFromTheme = (_b = (_a = theme.palette) === null || _a === void 0 ? void 0 : _a[borderColor]) === null || _b === void 0 ? void 0 : _b.main;
    return {
        '& label.Mui-focused, & label.MuiInputLabel-shrink': {
            color: colorValFromTheme
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: colorValFromTheme
            },
            '&:hover fieldset': {
                borderColor: colorValFromTheme
            },
            '&.Mui-focused fieldset': {
                borderColor: colorValFromTheme
            }
        }
    };
});
const StyleFormHelperText = (0, styled_1.default)(FormHelperText_1.default, {
    shouldForwardProp(propName) {
        return !(propName === 'color');
    }
})(({ theme, color }) => {
    var _a, _b;
    if (!color) {
        return {};
    }
    const colorValFromTheme = (_b = (_a = theme.palette) === null || _a === void 0 ? void 0 : _a[color]) === null || _b === void 0 ? void 0 : _b.main;
    return {
        '&.Mui-error': {
            color: colorValFromTheme,
            fontSize: '14px',
            marginTop: '4px'
        }
    };
});
exports.Select = (0, react_1.forwardRef)((_a, ref) => {
    var { id, labelId, options, size, label, optionLabelKeyname = 'label', optionValueKeyname = 'value', color, helperText, error } = _a, rest = __rest(_a, ["id", "labelId", "options", "size", "label", "optionLabelKeyname", "optionValueKeyname", "color", "helperText", "error"]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(StyledFormControl, Object.assign({ fullWidth: true, ref: ref, size: size, borderColor: color }, { children: [(0, jsx_runtime_1.jsx)(InputLabel_1.default, Object.assign({ id: labelId }, { children: label })), (0, jsx_runtime_1.jsx)(Select_1.default, Object.assign({}, rest, { labelId: labelId, label: label, id: id }, { children: options.map((item, index) => ((0, jsx_runtime_1.jsx)(MenuItem_1.default, Object.assign({ value: item[optionValueKeyname] }, { children: item[optionLabelKeyname] }), index))) }))] })), Boolean(helperText) && ((0, jsx_runtime_1.jsx)(StyleFormHelperText, Object.assign({ error: true, color: color }, { children: helperText })))] }));
});
exports.Select.defaultProps = {
    label: 'Select',
    labelId: 'demo-simple-select-label',
    id: 'demo-simple-select',
    size: 'small',
    color: 'warning',
    helperText: ''
};
//# sourceMappingURL=index.js.map