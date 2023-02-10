"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RightTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_table_1 = require("@tanstack/react-table");
const Box_1 = require("../Box");
const Icons_1 = require("../Icons");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
const _1 = require("./");
const RightTable = ({ table, sortableColumnIds }) => {
    var _a;
    return ((0, jsx_runtime_1.jsxs)(_1.Table, Object.assign({ style: { borderLeft: '1px solid' } }, { children: [(0, jsx_runtime_1.jsx)(_1.TableHead, Object.assign({ sx: { width: 'max-content', backgroundColor: 'secondary.light' } }, { children: (_a = table === null || table === void 0 ? void 0 : table.getRightHeaderGroups()) === null || _a === void 0 ? void 0 : _a.map((headerGroup) => ((0, jsx_runtime_1.jsx)(_1.TableRow, { children: headerGroup.headers.map((header) => {
                        var _a;
                        return ((0, jsx_runtime_1.jsx)(_1.TableCell, Object.assign({ component: 'th', padding: header.column.id === 'select' ? 'checkbox' : 'normal', style: { border: '1px solid' }, colSpan: header.colSpan }, { children: header.isPlaceholder ? null : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: header.column.id !== 'drag' && ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ component: 'span', style: sortableColumnIds.includes(header.column.id) && header.column.getCanSort()
                                        ? { cursor: 'pointer', display: 'flex', gap: 4, alignItems: 'center' }
                                        : {}, onClick: sortableColumnIds.includes(header.column.id) ? header.column.getToggleSortingHandler() : () => { } }, { children: [(0, react_table_1.flexRender)(header.column.columnDef.header, header.getContext()), sortableColumnIds.includes(header.column.id)
                                            ? (_a = {
                                                asc: (0, jsx_runtime_1.jsx)(Icons_1.ArrowUpwardIcon, { fontSize: "small" }),
                                                desc: (0, jsx_runtime_1.jsx)(Icons_1.ArrowDownwardIcon, { fontSize: "small" })
                                            }[header.column.getIsSorted()]) !== null && _a !== void 0 ? _a : (header.column.getCanSort() && (0, jsx_runtime_1.jsx)(Icons_1.UnfoldMoreIcon, { fontSize: "small" }))
                                            : null] }))) })) }), header.id));
                    }) }, headerGroup.id))) })), (0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.Droppable, Object.assign({ droppableId: "droppable-3" }, { children: (provided, snapshot) => ((0, jsx_runtime_1.jsxs)(_1.TableBody, Object.assign({ ref: provided.innerRef }, provided.droppableProps, { children: [provided.placeholder, table.getRowModel().rows.map((row, idx) => {
                            return ((0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.Draggable, Object.assign({ draggableId: row.id, index: idx }, { children: (provided, snapshot) => ((0, jsx_runtime_1.jsx)(_1.TableRow, Object.assign({ ref: provided.innerRef }, provided.draggableProps, { children: row.getRightVisibleCells().map((cell) => {
                                        return ((0, jsx_runtime_1.jsx)(_1.TableCell, Object.assign({ padding: cell.column.id === 'select' || cell.column.id === 'drag' ? 'checkbox' : 'normal' }, (cell.column.id === 'drag' ? Object.assign({}, provided.dragHandleProps) : {}), { style: { border: '1px solid' } }, { children: (0, react_table_1.flexRender)(cell.column.columnDef.cell, cell.getContext()) }), cell.id));
                                    }) }), row.id)) }), idx));
                        })] }))) }))] })));
};
exports.RightTable = RightTable;
//# sourceMappingURL=RightTable.js.map