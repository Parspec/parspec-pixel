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
exports.Switch = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
const Switch_1 = __importDefault(require("@mui/material/Switch"));
exports.Switch = react_1.forwardRef((_a, ref) => {
    var { label } = _a, rest = __rest(_a, ["label"]);
    return jsx_runtime_1.jsx(FormControlLabel_1.default, { ref: ref, control: jsx_runtime_1.jsx(Switch_1.default, Object.assign({}, rest), void 0), label: label }, void 0);
});
exports.Switch.defaultProps = {
    label: '',
    color: 'tertiary',
    size: 'small'
};
//# sourceMappingURL=index.js.map