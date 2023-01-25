import { flexRender, Table } from '@tanstack/react-table';
import { Box } from '../Box';
import { UnfoldMoreIcon, ArrowUpwardIcon, ArrowDownwardIcon } from '../Icons';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from '@emotion/styled';
import { Table as MUITable, TableBody, TableCell, TableFooter, TableHead, TableRow } from '@mui/material';

const TdStyled = styled.td`
    padding: 16px;
    margin: 16px;
`;

interface CenterTableProps {
    table: Table<any>;
    pinnedColumnKeys?: string[];
}
export const CenterTable: React.FC<CenterTableProps> = ({ table, pinnedColumnKeys }) => {
    return (
        <MUITable>
            <TableHead>
                {table.getCenterHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
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
                                        {!header.isPlaceholder && header.column.getCanPin() && pinnedColumnKeys?.includes(header.column.id) ? header.column.pin('left') : null}
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
                                        <TableRow ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            {row.getCenterVisibleCells().map((cell) => {
                                                return (
                                                    <TableCell key={cell.id}>
                                                        <Box>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Box>
                                                    </TableCell>
                                                );
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
