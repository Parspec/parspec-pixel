import { flexRender, Table } from '@tanstack/react-table';
import { Box } from '../Box';
import { UnfoldMoreIcon, ArrowUpwardIcon, ArrowDownwardIcon } from '../Icons';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Table as MUITable, TableBody, TableCell, TableHead, TableRow } from './';
import React from 'react';
import { BodyMedium } from '../Typography';

interface CenterTableProps {
    table: Table<any>;
    sortableColumnIds: string[];
}
export const CenterTable: React.FC<CenterTableProps> = ({ table, sortableColumnIds }) => {
    return (
        <MUITable>
            <TableHead>
                {table.getCenterHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        <>
                            {headerGroup.headers.map((header) => (
                                <TableCell component={'th'} padding={header.column.id === 'select' ? 'checkbox' : 'normal'} style={{ border: '1px solid' }} key={header.id} colSpan={header.colSpan}>
                                    {header.isPlaceholder ? null : (
                                        <>
                                            {header.column.id !== 'drag' && (
                                                <Box
                                                    component={'span'}
                                                    style={
                                                        sortableColumnIds.includes(header.column.id) && header.column.getCanSort()
                                                            ? { cursor: 'pointer', display: 'flex', gap: 4, alignItems: 'center' }
                                                            : {}
                                                    }
                                                    onClick={sortableColumnIds.includes(header.column.id) ? header.column.getToggleSortingHandler() : () => {}}
                                                >
                                                    {flexRender(header.column.columnDef.header, header.getContext())}

                                                    {sortableColumnIds.includes(header.column.id)
                                                        ? {
                                                              asc: <ArrowUpwardIcon fontSize="small" />,
                                                              desc: <ArrowDownwardIcon fontSize="small" />
                                                          }[header.column.getIsSorted() as string] ??
                                                          (header.column.getCanSort() && <UnfoldMoreIcon fontSize="small" />)
                                                        : null}
                                                </Box>
                                            )}
                                        </>
                                    )}
                                </TableCell>
                            ))}
                        </>
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
                                        <TableRow ref={provided.innerRef} {...provided.draggableProps}>
                                            {row.getCenterVisibleCells().map((cell) => {
                                                return (
                                                    <TableCell
                                                        key={cell.id}
                                                        padding={cell.column.id === 'select' || cell.column.id === 'drag' ? 'checkbox' : 'normal'}
                                                        {...(cell.column.id === 'drag' ? { ...provided.dragHandleProps } : {})}
                                                        style={{ border: '1px solid' }}
                                                    >
                                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
