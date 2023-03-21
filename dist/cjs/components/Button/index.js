'use strict';
var __rest =
    (this && this.__rest) ||
    function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
            }
        return t;
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require('react/jsx-runtime');
const react_1 = require('react');
const Button_1 = __importDefault(require('@mui/material/Button'));
const CircularProgress_1 = require('../CircularProgress');
exports.Button = (0, react_1.forwardRef)((_a, ref) => {
    var { disabled, isLoading, color } = _a,
        rest = __rest(_a, ['disabled', 'isLoading', 'color']);
    return (0, jsx_runtime_1.jsx)(
        Button_1.default,
        Object.assign({ ref: ref }, rest, {
            color: color,
            sx: disabled || isLoading ? { opacity: 0.5, pointerEvents: 'none' } : {},
            startIcon: isLoading ? (0, jsx_runtime_1.jsx)(CircularProgress_1.CircularProgress, { color: 'inherit', size: 'sm' }) : null
        })
    );
});
exports.Button.defaultProps = {
    color: 'primary',
    variant: 'contained',
    isLoading: false
};
//# sourceMappingURL=index.js.map
