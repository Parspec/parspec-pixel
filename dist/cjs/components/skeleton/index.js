"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeleton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Skeleton_1 = __importDefault(require("@mui/material/Skeleton"));
const Skeleton = (props) => {
    return (0, jsx_runtime_1.jsx)(Skeleton_1.default, Object.assign({}, props, { sx: { bgcolor: props.color === 'light' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' } }));
};
exports.Skeleton = Skeleton;
exports.Skeleton.defaultProps = {
    color: 'dark'
};
//# sourceMappingURL=index.js.map