"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = require("../Box");
const Icons_1 = require("../Icons");
const Typography_1 = require("../Typography");
const IconButton_1 = require("../IconButton");
const material_1 = require("@mui/material");
const Pagination = ({ pagination, table }) => {
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: 'flex', justifyContent: "space-between" }, { children: [(0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: 'flex', gap: 2 }, { children: [(0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage() }, { children: (0, jsx_runtime_1.jsx)(Icons_1.KeyboardArrowLeftIcon, { fontSize: "small" }) })), (0, jsx_runtime_1.jsx)(Typography_1.BodyMedium, Object.assign({ display: 'inline' }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ sx: { borderRadius: '100%' } }, { children: (0, jsx_runtime_1.jsx)(Typography_1.BodyMedium, { children: pagination.pageIndex + 1 }) })) })), (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ style: { borderRadius: 10 }, onClick: () => table.nextPage(), disabled: !table.getCanNextPage() }, { children: (0, jsx_runtime_1.jsx)(Icons_1.KeyboardArrowRightIcon, { fontSize: "small" }) }))] })), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: '100px' }, { children: (0, jsx_runtime_1.jsxs)(material_1.FormControl, Object.assign({ fullWidth: true }, { children: [(0, jsx_runtime_1.jsx)(material_1.InputLabel, Object.assign({ id: "demo-simple-select-label" }, { children: "Show" })), (0, jsx_runtime_1.jsxs)(material_1.Select, Object.assign({ labelId: "demo-simple-select-label", id: "demo-simple-select", value: table.getState().pagination.pageSize, label: "Show", size: "small", onChange: (e) => table.setPageSize(Number(e.target.value)) }, { children: [(0, jsx_runtime_1.jsx)(material_1.MenuItem, Object.assign({ value: 10 }, { children: "10" })), (0, jsx_runtime_1.jsx)(material_1.MenuItem, Object.assign({ value: 20 }, { children: "20" })), (0, jsx_runtime_1.jsx)(material_1.MenuItem, Object.assign({ value: 30 }, { children: "30" }))] }))] })) }))] })));
};
exports.default = Pagination;
//# sourceMappingURL=Pagination.js.map