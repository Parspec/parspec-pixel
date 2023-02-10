"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeftTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_table_1 = require("@tanstack/react-table");
const Box_1 = require("../Box");
const Icons_1 = require("../Icons");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
const material_1 = require("@mui/material");
const LeftTable = ({ table, sortableColumnIds }) => {
    var _a;
    return ((0, jsx_runtime_1.jsxs)(material_1.Table, Object.assign({ style: { borderRight: '1px solid' } }, { children: [(0, jsx_runtime_1.jsx)(material_1.TableHead, Object.assign({ sx: { backgroundColor: 'secondary.light', width: 'max-content' } }, { children: (_a = table === null || table === void 0 ? void 0 : table.getLeftHeaderGroups()) === null || _a === void 0 ? void 0 : _a.map((headerGroup) => ((0, jsx_runtime_1.jsx)(material_1.TableRow, { children: headerGroup.headers.map((header) => {
                        var _a;
                        return ((0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ padding: header.column.id === 'select' ? 'checkbox' : 'normal', component: 'th', style: { border: '1px solid' }, colSpan: header.colSpan }, { children: header.isPlaceholder ? null : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: header.column.id !== 'drag' && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ component: 'span', style: sortableColumnIds.includes(header.column.id) && header.column.getCanSort()
                                        ? { cursor: 'pointer', display: 'flex', gap: 4, alignItems: 'center' }
                                        : {}, onClick: sortableColumnIds.includes(header.column.id) ? header.column.getToggleSortingHandler() : () => { } }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, react_table_1.flexRender)(header.column.columnDef.header, header.getContext()), sortableColumnIds.includes(header.column.id)
                                                ? (_a = {
                                                    asc: (0, jsx_runtime_1.jsx)(Icons_1.ArrowUpwardIcon, { fontSize: "small" }),
                                                    desc: (0, jsx_runtime_1.jsx)(Icons_1.ArrowDownwardIcon, { fontSize: "small" })
                                                }[header.column.getIsSorted()]) !== null && _a !== void 0 ? _a : (header.column.getCanSort() && (0, jsx_runtime_1.jsx)(Icons_1.UnfoldMoreIcon, { fontSize: "small" }))
                                                : null] }) }))) })) }), header.id));
                    }) }, headerGroup.id))) })), (0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.Droppable, Object.assign({ droppableId: "droppable-2" }, { children: (provided, snapshot) => ((0, jsx_runtime_1.jsxs)(material_1.TableBody, Object.assign({ ref: provided.innerRef }, provided.droppableProps, { children: [provided.placeholder, table.getRowModel().rows.map((row, idx) => {
                            return ((0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.Draggable, Object.assign({ draggableId: row.id, index: idx }, { children: (provided, snapshot) => ((0, jsx_runtime_1.jsx)(material_1.TableRow, Object.assign({ ref: provided.innerRef }, provided.draggableProps, { children: row.getLeftVisibleCells().map((cell) => {
                                        return ((0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ padding: cell.column.id === 'select' || cell.column.id === 'drag' ? 'checkbox' : 'normal' }, (cell.column.id === 'drag' ? Object.assign({}, provided.dragHandleProps) : {}), { style: { border: '1px solid' } }, { children: (0, react_table_1.flexRender)(cell.column.columnDef.cell, cell.getContext()) }), cell.id));
                                    }) }), row.id)) }), idx));
                        })] }))) }))] })));
};
exports.LeftTable = LeftTable;
//# sourceMappingURL=LeftTable.js.map