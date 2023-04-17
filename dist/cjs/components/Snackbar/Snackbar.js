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
exports.Snackbar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Snackbar_1 = __importDefault(require("@mui/material/Snackbar"));
const Snackbar = (_a) => {
    var { ContentProps } = _a, props = __rest(_a, ["ContentProps"]);
    return ((0, jsx_runtime_1.jsx)(Snackbar_1.default, Object.assign({ ContentProps: {
            sx: {
                display: 'block',
                textAlign: 'center',
                maxWidth: '40vw'
            }
        } }, props)));
};
exports.Snackbar = Snackbar;
exports.Snackbar.defaultProps = {
    anchorOrigin: {
        horizontal: 'center',
        vertical: 'bottom'
    },
    autoHideDuration: 3000
};
//# sourceMappingURL=Snackbar.js.map