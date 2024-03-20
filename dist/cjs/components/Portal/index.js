"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const base_1 = require("@mui/base");
const Portal = ({ children, container, disablePortal }) => {
    return ((0, jsx_runtime_1.jsx)(base_1.Portal, Object.assign({ container: container, disablePortal: disablePortal }, { children: children })));
};
exports.Portal = Portal;
//# sourceMappingURL=index.js.map