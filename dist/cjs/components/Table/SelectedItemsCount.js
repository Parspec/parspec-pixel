"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectedItemsCount = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = require("../Box");
const IconButton_1 = require("../IconButton");
const Icons_1 = require("../Icons");
const Typography_1 = require("../Typography");
const SelectedItemsCount = (props) => {
    const { count, closeBanner } = props;
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ p: 1, pl: 3, pr: 2, bgcolor: 'primary.main', color: 'secondary.contrastText', display: "flex", alignItems: "center", gap: 2 }, { children: [(0, jsx_runtime_1.jsxs)(Typography_1.BodySmall, Object.assign({ color: "secondary.contrastText", limit: false }, { children: [count, " item(s) selected"] })), (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: closeBanner, sx: { color: 'secondary.contrastText', margin: 0, padding: 0 } }, { children: (0, jsx_runtime_1.jsx)(Icons_1.CloseIcon, { fontSize: "small" }) }))] })));
};
exports.SelectedItemsCount = SelectedItemsCount;
//# sourceMappingURL=SelectedItemsCount.js.map