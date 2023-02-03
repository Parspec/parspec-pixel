import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect } from 'react';
import { getSortedRowModel, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { LeftTable } from './LeftTable';
import { RightTable } from './RightTable';
import { CenterTable } from './CenterTable';
import Pagination from './Pagination';
import { Box } from '../Box';
import { DragDropContext } from 'react-beautiful-dnd';
export const PixelTable = ({ defaultData, columns: propsColumns, leftPinnedColumnKeys, rightPinnedColumnKeys, pagination: paginationRequired, sortableColumnIds }) => {
    useEffect(() => {
        if (!paginationRequired) {
            setPagination({ pageSize: defaultData.length, pageIndex: 0 });
        }
    }, [paginationRequired]);
    const [sorting, setSorting] = React.useState([]);
    const [pagination, setPagination] = React.useState({
        pageSize: 10,
        pageIndex: 0
    });
    const [rowSelection, setRowSelection] = React.useState({});
    const [data, setData] = React.useState(() => [...defaultData]);
    const [columnPinning, setColumnPinning] = React.useState({});
    const columns = React.useMemo(() => propsColumns, []);
    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            pagination,
            rowSelection,
            columnPinning
        },
        onRowSelectionChange: setRowSelection,
        onPaginationChange: setPagination,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnPinningChange: setColumnPinning,
        debugTable: true,
        debugHeaders: true,
        debugColumns: true
    });
    const handleDragEnd = (e) => {
        if (!e.destination)
            return;
        let tempData = Array.from(data);
        let [source_data] = tempData.splice(e.source.index, 1);
        tempData.splice(e.destination.index, 0, source_data);
        setData(tempData);
    };
    useEffect(() => {
        var _a;
        (_a = table === null || table === void 0 ? void 0 : table.getCenterHeaderGroups()) === null || _a === void 0 ? void 0 : _a.forEach((headerGroup) => {
            headerGroup.headers.forEach((header) => (!header.isPlaceholder && header.column.getCanPin() && (leftPinnedColumnKeys === null || leftPinnedColumnKeys === void 0 ? void 0 : leftPinnedColumnKeys.includes(header.column.id)) ? header.column.pin('left') : null));
            headerGroup.headers.forEach((header) => (!header.isPlaceholder && header.column.getCanPin() && (rightPinnedColumnKeys === null || rightPinnedColumnKeys === void 0 ? void 0 : rightPinnedColumnKeys.includes(header.column.id)) ? header.column.pin('right') : null));
        });
    }, [table]);
    return (_jsx(Box, Object.assign({ height: '100%', width: '100%' }, { children: _jsx(DragDropContext, Object.assign({ onDragEnd: handleDragEnd }, { children: _jsxs(_Fragment, { children: [_jsxs(Box, Object.assign({ display: 'flex' }, { children: [leftPinnedColumnKeys.length > 0 && _jsx(LeftTable, { table: table, sortableColumnIds: sortableColumnIds }), _jsx(Box, Object.assign({ overflow: 'auto', width: "100%" }, { children: _jsx(CenterTable, { table: table, sortableColumnIds: sortableColumnIds }) })), rightPinnedColumnKeys.length > 0 && _jsx(RightTable, { table: table, sortableColumnIds: sortableColumnIds })] })), paginationRequired && (_jsx(Box, Object.assign({ textAlign: 'center', marginTop: 8 }, { children: _jsx(Pagination, { pagination: pagination, table: table }) })))] }) })) })));
};
PixelTable.defaultProps = {
    pagination: true,
    sortableColumnIds: [''],
    leftPinnedColumnKeys: [],
    rightPinnedColumnKeys: []
};
//# sourceMappingURL=PixelTable.js.map