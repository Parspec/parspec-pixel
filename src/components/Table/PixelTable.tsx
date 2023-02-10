import { useEffect, useMemo, useState } from 'react';
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
    pagination?: boolean;
    sortableColumnIds?: string[];
}

export const PixelTable: React.FC<PixelTableProps> = ({ defaultData, columns: propsColumns, leftPinnedColumnKeys, rightPinnedColumnKeys, pagination: paginationRequired, sortableColumnIds }) => {
    useEffect(() => {
        if (!paginationRequired) {
            setPagination({ pageSize: defaultData.length, pageIndex: 0 });
        }
    }, [paginationRequired]);

    const [sorting, setSorting] = useState<SortingState>([]);
    const [pagination, setPagination] = useState<PaginationState>({
        pageSize: 10,
        pageIndex: 0
    });
    const [rowSelection, setRowSelection] = useState({});
    const [data, setData] = useState(() => [...defaultData]);
    const [columnPinning, setColumnPinning] = useState({});
    const columns = useMemo(() => propsColumns, []);

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
        <Box>
            <DragDropContext onDragEnd={handleDragEnd}>
                <>
                    <Box display={'flex'} height={'90%'} overflow={'auto'}>
                        {leftPinnedColumnKeys!.length > 0 && <LeftTable table={table} sortableColumnIds={sortableColumnIds!} />}
                        <Box overflow={'auto'} width="100%">
                            <CenterTable table={table} sortableColumnIds={sortableColumnIds!} />
                        </Box>
                        {rightPinnedColumnKeys!.length > 0 && <RightTable table={table} sortableColumnIds={sortableColumnIds!} />}
                    </Box>
                    {paginationRequired && (
                        <Box textAlign={'center'} marginTop={8} height={'10%'}>
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
    sortableColumnIds: [''],
    leftPinnedColumnKeys: [],
    rightPinnedColumnKeys: []
};
