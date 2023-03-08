"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularProgress = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
const CircularProgress = (props) => (0, jsx_runtime_1.jsx)(CircularProgress_1.default, Object.assign({}, props));
exports.CircularProgress = CircularProgress;
exports.CircularProgress.defaultProps = {
    color: 'primary',
    size: 20,
    thickness: 3.6
};
//# sourceMappingURL=index.js.map