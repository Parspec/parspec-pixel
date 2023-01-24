import * as React from 'react';
import { PaginationState, getSortedRowModel, getCoreRowModel, getPaginationRowModel, useReactTable, SortingState, ColumnDef, RowData } from '@tanstack/react-table';
import { TableContainer } from '../TableContainer';
import { LeftTable } from './LeftTable';
import { RightTable } from './RightTable';
import { CenterTable } from './CenterTable';
import Pagination from './Pagination';
import { defaultData, IndeterminateCheckbox, Person } from './utils';
import { Box } from '../Box';
import { DragDropContext } from 'react-beautiful-dnd';
import { useCallback } from 'react';

declare module '@tanstack/react-table' {
    interface TableMeta<TData extends RowData> {
        updateData: (rowIndex: number, columnId: string, value: unknown) => void;
    }
}

// Give our default column cell renderer editing superpowers!
const defaultColumn: Partial<ColumnDef<Person>> = {
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

        return <input value={value as string} onChange={(e) => setValue(e.target.value)} onBlur={onBlur} />;
    }
};

export function Basic() {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [pagination, setPagination] = React.useState<PaginationState>({
        pageSize: 4,
        pageIndex: 0
    });
    const [rowSelection, setRowSelection] = React.useState({});
    const [data, setData] = React.useState(() => [...defaultData]);
    const [columnPinning, setColumnPinning] = React.useState({});
    const columns = React.useMemo<ColumnDef<Person>[]>(
        () => [
            {
                id: 'select',
                header: ({ table }) => (
                    <IndeterminateCheckbox
                        {...{
                            checked: table.getIsAllRowsSelected(),
                            indeterminate: table.getIsSomeRowsSelected(),
                            onChange: table.getToggleAllRowsSelectedHandler()
                        }}
                    />
                ),
                cell: ({ row }: any) => (
                    <IndeterminateCheckbox
                        {...{
                            checked: row.getIsSelected(),
                            indeterminate: row.getIsSomeSelected(),
                            onChange: row.getToggleSelectedHandler()
                        }}
                    />
                )
            },
            {
                accessorKey: 'firstName',
                header: () => <span>First Name</span>
            },
            {
                accessorKey: 'lastName',
                header: () => <span>Last Name</span>
            },
            {
                accessorKey: 'age',
                header: () => 'Age'
            },
            {
                accessorKey: 'visits',
                header: () => <span>Visits</span>
            },
            {
                accessorKey: 'status',
                header: 'Status'
            },
            {
                accessorKey: 'progress',
                header: 'Profile Progress'
            }
        ],
        []
    );

    const table = useReactTable({
        data,
        columns,
        //defaultColumn,
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

    const handleDragEnd = (e: any) => {
        if (!e.destination) return;
        let tempData = Array.from(data);
        let [source_data] = tempData.splice(e.source.index, 1);
        tempData.splice(e.destination.index, 0, source_data);
        setData(tempData);
        console.log(data, '\n', tempData);
    };

    return (
        <Box height={'100vh'} width={'100vw'} overflow={'scroll'}>
            <Box maxHeight={'80vh'}>
                <DragDropContext onDragEnd={handleDragEnd}>
                    <TableContainer>
                        <>
                            <Box display={'flex'}>
                                <LeftTable table={table} />
                                <CenterTable table={table} />
                                {/* <RightTable table={table} /> */}
                            </Box>
                        </>
                    </TableContainer>
                </DragDropContext>
            </Box>

            <Pagination pagination={pagination} table={table} />
        </Box>
    );
}
