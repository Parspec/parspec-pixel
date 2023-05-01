"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = require("../Box");
const Status = ({ color, children }) => {
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ bgcolor: `${color}.light`, color: `${color}.main`, p: 1, pl: 2, pr: 2, width: 'max-content' }, { children: children })));
};
exports.Status = Status;
exports.Status.defaultProps = {
    color: 'primary'
};
//# sourceMappingURL=index.js.map