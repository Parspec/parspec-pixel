import React from 'react';
import { PaginationState, getSortedRowModel, getCoreRowModel, getPaginationRowModel, useReactTable, SortingState, ColumnDef, RowData } from '@tanstack/react-table';
import { TableContainer } from '../TableContainer';
import { LeftTable } from './LeftTable';
import { CenterTable } from './CenterTable';
import Pagination from './Pagination';

import { Box } from '../Box';
import { DragDropContext, OnDragEndResponder } from 'react-beautiful-dnd';
import { TextField } from '../TextField';

declare module '@tanstack/react-table' {
    interface TableMeta<TData extends RowData> {
        updateData: (rowIndex: number, columnId: string, value: unknown) => void;
    }
}

// Give our default column cell renderer editing superpowers!
const defaultColumn: Partial<ColumnDef<any>> = {
    cell: ({ getValue, row: { index }, column: { id }, table }) => {
        const initialValue = getValue();
        // We need to keep and update the state of the cell normally
        const [value, setValue] = React.useState(initialValue);

        // When the input is blurred, we'll call our table meta's updateData function
        const onBlur = () => {
            table.options.meta?.updateData(index, id, value);
        };

        // If the initialValue is changed external, sync it up with our state
        React.useEffect(() => {
            setValue(initialValue);
        }, [initialValue]);

        return <TextField value={value as string} onChange={(e) => setValue(e.target.value)} onBlur={onBlur} />;
    }
};

export type Person = {
    select: boolean;
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    status: string;
    progress: number;
};

interface BasicProps {
    defaultData: any;
    columns: ColumnDef<any>[];
    pinnedColumnKeys?: string[];
}

export const Basic: React.FC<BasicProps> = (props) => {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [pagination, setPagination] = React.useState<PaginationState>({
        pageSize: 10,
        pageIndex: 0
    });
    const [rowSelection, setRowSelection] = React.useState({});
    const [data, setData] = React.useState(() => [...props.defaultData]);
    const [columnPinning, setColumnPinning] = React.useState({});
    const columns = React.useMemo(() => props.columns, []);

    const table = useReactTable({
        data,
        columns,
        defaultColumn,
        state: {
            sorting,
            pagination,
            rowSelection,
            columnPinning
        },
        meta: {
            updateData: (rowIndex, columnId, value) => {
                setData((old) =>
                    old.map((row, index) => {
                        if (index === rowIndex) {
                            return {
                                ...old[rowIndex]!,
                                [columnId]: value
                            };
                        }
                        return row;
                    })
                );
            }
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

    return (
        <Box height={'100vh'} width={'100vw'} overflow={'scroll'}>
            <DragDropContext onDragEnd={handleDragEnd}>
                <TableContainer>
                    <>
                        <Box display={'flex'}>
                            {props.pinnedColumnKeys && <LeftTable table={table} />}
                            <CenterTable table={table} pinnedColumnKeys={props.pinnedColumnKeys} />
                        </Box>
                        <Box textAlign={'center'} marginTop={8}>
                            <Pagination pagination={pagination} table={table} />
                        </Box>
                    </>
                </TableContainer>
            </DragDropContext>
        </Box>
    );
};
