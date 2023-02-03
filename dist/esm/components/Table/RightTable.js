import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { flexRender } from '@tanstack/react-table';
import { Box } from '../Box';
import { UnfoldMoreIcon, ArrowUpwardIcon, ArrowDownwardIcon } from '../Icons';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Table as MUITable, TableBody, TableCell, TableHead, TableRow } from './';
import { BodyMedium } from '../Typography';
export const RightTable = ({ table, sortableColumnIds }) => {
    var _a;
    return (_jsxs(MUITable, Object.assign({ style: { borderLeft: '1px solid grey' } }, { children: [_jsx(TableHead, Object.assign({ style: { width: 'max-content' } }, { children: (_a = table === null || table === void 0 ? void 0 : table.getRightHeaderGroups()) === null || _a === void 0 ? void 0 : _a.map((headerGroup) => (_jsx(TableRow, { children: headerGroup.headers.map((header) => {
                        var _a;
                        return (_jsx(TableCell, Object.assign({ component: 'th', padding: header.column.id === 'select' ? 'checkbox' : 'normal', style: { border: '1px solid' }, colSpan: header.colSpan }, { children: header.isPlaceholder ? null : (_jsx(_Fragment, { children: header.column.id !== 'drag' && (_jsxs(Box, Object.assign({ component: 'span', style: sortableColumnIds.includes(header.column.id) && header.column.getCanSort()
                                        ? { cursor: 'pointer', display: 'flex', gap: 4, alignItems: 'center' }
                                        : {}, onClick: sortableColumnIds.includes(header.column.id) ? header.column.getToggleSortingHandler() : () => { } }, { children: [_jsx(BodyMedium, Object.assign({ fontWeight: 600, width: 'max-content' }, { children: flexRender(header.column.columnDef.header, header.getContext()) })), sortableColumnIds.includes(header.column.id)
                                            ? (_a = {
                                                asc: _jsx(ArrowUpwardIcon, { fontSize: "small" }),
                                                desc: _jsx(ArrowDownwardIcon, { fontSize: "small" })
                                            }[header.column.getIsSorted()]) !== null && _a !== void 0 ? _a : (header.column.getCanSort() && _jsx(UnfoldMoreIcon, { fontSize: "small" }))
                                            : null] }))) })) }), header.id));
                    }) }, headerGroup.id))) })), _jsx(Droppable, Object.assign({ droppableId: "droppable-3" }, { children: (provided, snapshot) => (_jsxs(TableBody, Object.assign({ ref: provided.innerRef }, provided.droppableProps, { children: [provided.placeholder, table.getRowModel().rows.map((row, idx) => {
                            return (_jsx(Draggable, Object.assign({ draggableId: row.id, index: idx }, { children: (provided, snapshot) => (_jsx(TableRow, Object.assign({ ref: provided.innerRef }, provided.draggableProps, { children: row.getRightVisibleCells().map((cell) => {
                                        return (_jsx(_Fragment, { children: _jsx(TableCell, Object.assign({ padding: cell.column.id === 'select' || cell.column.id === 'drag' ? 'checkbox' : 'normal' }, (cell.column.id === 'drag' ? Object.assign({}, provided.dragHandleProps) : {}), { style: { border: '1px solid' } }, { children: _jsx(BodyMedium, Object.assign({ width: 'max-content' }, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) })) }), cell.id) }));
                                    }) }), row.id)) }), idx));
                        })] }))) }))] })));
};
//# sourceMappingURL=RightTable.js.map