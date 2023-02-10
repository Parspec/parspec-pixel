"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = require("../Box");
const Icons_1 = require("../Icons");
const Typography_1 = require("../Typography");
const IconButton_1 = require("../IconButton");
const Select_1 = require("../Select");
const react_1 = require("react");
const options = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
];
const Pagination = ({ pagination, table }) => {
    const [selectedValue, setSelectedValue] = (0, react_1.useState)(String(table.getState().pagination.pageSize));
    const handleOnChange = (val) => {
        setSelectedValue(val);
        table.setPageSize(Number(val));
    };
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: 'flex', justifyContent: "space-between" }, { children: [(0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: 'flex', gap: 1, alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage() }, { children: (0, jsx_runtime_1.jsx)(Icons_1.KeyboardArrowLeftIcon, { fontSize: "small" }) })), (0, jsx_runtime_1.jsx)(Typography_1.BodyMedium, Object.assign({ display: 'inline' }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ sx: { borderRadius: '50%', backgroundColor: 'tertiary.main', pl: 2, pr: 2, display: 'flex', justifyContent: 'center', alignContent: 'center' } }, { children: (0, jsx_runtime_1.jsx)(Typography_1.BodyMedium, Object.assign({ color: "secondary.contrastText" }, { children: pagination.pageIndex + 1 })) })) })), (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ style: { borderRadius: 10 }, onClick: () => table.nextPage(), disabled: !table.getCanNextPage() }, { children: (0, jsx_runtime_1.jsx)(Icons_1.KeyboardArrowRightIcon, { fontSize: "small" }) }))] })), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ width: '100px', pr: 3 }, { children: (0, jsx_runtime_1.jsx)(Select_1.Select, { size: "small", options: options, label: "Show", labelId: "demo-simple-select-label", id: "demo-simple-select", onChange: (e) => handleOnChange(e.target.value), value: selectedValue }) }))] })));
};
exports.default = Pagination;
//# sourceMappingURL=Pagination.js.map