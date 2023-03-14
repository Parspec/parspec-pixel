"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearProgress = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const LinearProgress_1 = __importDefault(require("@mui/material/LinearProgress"));
const react_1 = require("react");
const Box_1 = require("../Box");
exports.LinearProgress = (0, react_1.forwardRef)((props, ref) => {
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ sx: { width: '100%' } }, { children: (0, jsx_runtime_1.jsx)(LinearProgress_1.default, Object.assign({ sx: {
                height: 20
            }, ref: ref }, props)) })));
});
exports.LinearProgress.defaultProps = {
    color: 'tertiary',
    variant: 'indeterminate'
};
//# sourceMappingURL=index.js.map