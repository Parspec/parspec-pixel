import { flexRender, Table } from '@tanstack/react-table';
import { Box } from '../Box';
import { UnfoldMoreIcon, ArrowUpwardIcon, ArrowDownwardIcon } from '../Icons';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Table as MUITable, TableBody, TableCell, TableFooter, TableHead, TableRow } from '@mui/material';

interface LeftTableProps {
    table: Table<any>;
}

export const LeftTable: React.FC<LeftTableProps> = ({ table }) => {
    return (
        <MUITable>
            <TableHead>
                {table?.getLeftHeaderGroups()?.map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header, idx: number) => (
                            <TableCell key={header.id} colSpan={header.colSpan}>
                                {header.isPlaceholder ? null : (
                                    <>
                                        <Box component={'span'} style={header.column.getCanSort() ? { cursor: 'pointer' } : {}} onClick={header.column.getToggleSortingHandler()}>
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                            {{
                                                asc: <ArrowUpwardIcon fontSize="small" />,
                                                desc: <ArrowDownwardIcon fontSize="small" />
                                            }[header.column.getIsSorted() as string] ??
                                                (header.column.getCanSort() && <UnfoldMoreIcon fontSize="small" />)}
                                        </Box>
                                    </>
                                )}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <Droppable droppableId="droppable-1">
                {(provided, snapshot) => (
                    <TableBody ref={provided.innerRef} {...provided.droppableProps}>
                        {provided.placeholder}
                        {table.getRowModel().rows.map((row, idx: number) => {
                            return (
                                <Draggable key={idx} draggableId={row.id} index={idx}>
                                    {(provided, snapshot) => (
                                        <TableRow key={row.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            {row.getLeftVisibleCells().map((cell) => {
                                                return <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>;
                                            })}
                                        </TableRow>
                                    )}
                                </Draggable>
                            );
                        })}
                    </TableBody>
                )}
            </Droppable>
        </MUITable>
    );
};
