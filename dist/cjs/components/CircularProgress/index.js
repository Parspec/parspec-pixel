'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.CircularProgress = void 0;
const jsx_runtime_1 = require('react/jsx-runtime');
const CircularProgress_1 = __importDefault(require('@mui/material/CircularProgress'));
const utils_1 = require('../../Shared/utils');
const CircularProgress = (_a) => {
    var { color, size } = _a,
        rest = __rest(_a, ['color', 'size']);
    return (0, jsx_runtime_1.jsx)(CircularProgress_1.default, Object.assign({ color: color, size: utils_1.SIZE_OPTIONS[size || 'md'] }, rest));
};
exports.CircularProgress = CircularProgress;
exports.CircularProgress.defaultProps = {
    color: 'inherit',
    size: 'md'
};
//# sourceMappingURL=index.js.map
