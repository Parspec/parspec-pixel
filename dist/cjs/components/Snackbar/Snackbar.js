"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snackbar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Snackbar_1 = __importDefault(require("@mui/material/Snackbar"));
const Snackbar = (props) => {
    return (0, jsx_runtime_1.jsx)(Snackbar_1.default, Object.assign({}, props));
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