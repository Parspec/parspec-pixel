import React, { useEffect } from 'react';
import { PaginationState, getSortedRowModel, getCoreRowModel, getPaginationRowModel, useReactTable, SortingState, ColumnDef } from '@tanstack/react-table';
import { LeftTable } from './LeftTable';
import { RightTable } from './RightTable';
import { CenterTable } from './CenterTable';
import Pagination from './Pagination';
import { Box } from '../Box';
import { DragDropContext, OnDragEndResponder } from 'react-beautiful-dnd';

interface PixelTableProps {
    defaultData: any;
    columns: ColumnDef<any>[];
    leftPinnedColumnKeys?: string[];
    rightPinnedColumnKeys?: string[];
    pagination: boolean;
    pageSize: number;
}

export const PixelTable: React.FC<PixelTableProps> = ({ defaultData, columns: propsColumns, leftPinnedColumnKeys, rightPinnedColumnKeys, pagination: paginationRequired, pageSize }) => {
    useEffect(() => {
        if (!paginationRequired) {
            setPagination({ pageSize: defaultData.length, pageIndex: 0 });
        }
    }, [paginationRequired]);

    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [pagination, setPagination] = React.useState<PaginationState>({
        pageSize,
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

    const handleDragEnd: OnDragEndResponder = (e) => {
        if (!e.destination) return;
        let tempData = Array.from(data);
        let [source_data] = tempData.splice(e.source.index, 1);
        tempData.splice(e.destination.index, 0, source_data);
        setData(tempData);
    };

    useEffect(() => {
        table?.getCenterHeaderGroups()?.forEach((headerGroup) => {
            headerGroup.headers.forEach((header) => (!header.isPlaceholder && header.column.getCanPin() && leftPinnedColumnKeys?.includes(header.column.id) ? header.column.pin('left') : null));
            headerGroup.headers.forEach((header) => (!header.isPlaceholder && header.column.getCanPin() && rightPinnedColumnKeys?.includes(header.column.id) ? header.column.pin('right') : null));
        });
    }, [table]);

    return (
        <Box height={'100vh'} width={'97vw'}>
            <DragDropContext onDragEnd={handleDragEnd}>
                <>
                    <Box display={'flex'}>
                        {leftPinnedColumnKeys && <LeftTable table={table} />}
                        <Box overflow={'auto'} width="100%">
                            <CenterTable table={table} />
                        </Box>
                        {rightPinnedColumnKeys && <RightTable table={table} />}
                    </Box>
                    {paginationRequired && (
                        <Box textAlign={'center'} marginTop={8}>
                            <Pagination pagination={pagination} table={table} />
                        </Box>
                    )}
                </>
            </DragDropContext>
        </Box>
    );
};

PixelTable.defaultProps = {
    pagination: true,
    pageSize: 10
};
