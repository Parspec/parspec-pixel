"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noRowsOverlayComponent = exports.loadingOverlayComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = require("../Box");
const CircularProgress_1 = require("../CircularProgress");
const Typography_1 = require("../Typography");
const loadingOverlayComponent = (props) => {
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "ag-loading-center" }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ sx: { opacity: 1 }, "aria-label": "loading" }, { children: (0, jsx_runtime_1.jsx)(CircularProgress_1.CircularProgress, { size: "lg", color: 'primary' }) })) })));
};
exports.loadingOverlayComponent = loadingOverlayComponent;
const noRowsOverlayComponent = (props) => {
    const { isTableHaveFooter } = props;
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: `ag-overlay-no-rows-wrapper ${isTableHaveFooter ? '' : ' overlay-rows-footer'}` }, { children: (0, jsx_runtime_1.jsx)(Typography_1.BodySmall, { children: "No records to display" }) })));
};
exports.noRowsOverlayComponent = noRowsOverlayComponent;
//# sourceMappingURL=helper.js.map