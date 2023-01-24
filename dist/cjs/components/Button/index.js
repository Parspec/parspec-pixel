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
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = __importDefault(require("@mui/material/Button"));
const Icons_1 = require("../Icons");
const Button = (_a) => {
    var { disabled, isLoading, color } = _a, rest = __rest(_a, ["disabled", "isLoading", "color"]);
    return ((0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({}, rest, { color: color, sx: disabled || isLoading ? { opacity: 0.5, pointerEvents: 'none' } : {}, startIcon: isLoading ? (0, jsx_runtime_1.jsx)(Icons_1.CircularProgressIcon, { color: 'inherit', size: "1rem" }) : null })));
};
exports.Button = Button;
exports.Button.defaultProps = {
    color: 'primary',
    variant: 'contained',
    isLoading: false
};
//# sourceMappingURL=index.js.map