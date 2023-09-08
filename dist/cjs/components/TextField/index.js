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
exports.TextField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const styled_1 = __importDefault(require("@mui/material/styles/styled"));
const InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
const react_1 = require("react");
const Box_1 = require("../Box");
const Chip_1 = require("../Chip");
const Tooltip_1 = require("../Tooltip");
const StyledMUITextField = (0, styled_1.default)(TextField_1.default)({
    '& .MuiFormHelperText-root': {
        marginLeft: '0px'
    }
});
exports.TextField = (0, react_1.forwardRef)((_a, ref) => {
    var { variant, color, error, size, label, chips, onChipDelete, helperText, endIcon, startIcon, scrollAreaHeight } = _a, rest = __rest(_a, ["variant", "color", "error", "size", "label", "chips", "onChipDelete", "helperText", "endIcon", "startIcon", "scrollAreaHeight"]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(StyledMUITextField, Object.assign({ fullWidth: true, label: label, ref: ref, size: size, variant: variant, color: color, error: error, helperText: helperText, InputProps: {
                    startAdornment: startIcon && (0, jsx_runtime_1.jsx)(InputAdornment_1.default, Object.assign({ position: "start" }, { children: startIcon })),
                    endAdornment: endIcon && (0, jsx_runtime_1.jsx)(InputAdornment_1.default, Object.assign({ position: "end" }, { children: endIcon }))
                } }, rest)), chips && scrollAreaHeight && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ mt: 2, display: "flex", flexWrap: "wrap", rowGap: 1, overflow: 'hidden', sx: { overflowY: 'scroll' }, maxHeight: scrollAreaHeight }, { children: chips.map((chip, index) => ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ placement: "bottom", title: chip }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ mr: 1, maxWidth: "40%" }, { children: (0, jsx_runtime_1.jsx)(Chip_1.Chip, { label: chip, onDelete: () => onChipDelete(index) }) }), `${chip}-${index}`) })))) }))), chips && !scrollAreaHeight && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ mt: 2, display: "flex", flexWrap: "wrap", rowGap: 1 }, { children: chips.map((chip, index) => ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ placement: "bottom", title: chip }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ mr: 1, maxWidth: "40%" }, { children: (0, jsx_runtime_1.jsx)(Chip_1.Chip, { label: chip, onDelete: () => onChipDelete(index) }) }), `${chip}-${index}`) })))) })))] }));
});
exports.TextField.defaultProps = {
    variant: 'outlined',
    color: 'primary',
    error: false,
    size: 'small',
    inputProps: { maxLength: 255 }
};
//# sourceMappingURL=index.js.map