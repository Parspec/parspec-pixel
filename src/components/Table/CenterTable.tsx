import { flexRender, Table } from '@tanstack/react-table';
import { Box } from '../Box';
import { UnfoldMoreIcon, ArrowUpwardIcon, ArrowDownwardIcon } from '../Icons';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Table as MUITable, TableBody, TableCell, TableHead, TableRow } from './';
import React from 'react';
import { BodyMedium } from '../Typography';

interface CenterTableProps {
    table: Table<any>;
}
export const CenterTable: React.FC<CenterTableProps> = ({ table }) => {
    return (
        <MUITable>
            <TableHead>
                {table.getCenterHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        <>
                            {headerGroup.headers.map((header) => (
                                <TableCell
                                    component={'th'}
                                    style={header.column.id === 'select' || header.column.id === 'drag' ? { width: '10px', padding: 0 } : {}}
                                    key={header.id}
                                    colSpan={header.colSpan}
                                >
                                    {header.isPlaceholder ? null : (
                                        <>
                                            {header.column.id !== 'drag' && (
                                                <Box
                                                    component={'span'}
                                                    style={header.column.getCanSort() ? { cursor: 'pointer', display: 'flex', gap: 4, alignItems: 'center' } : {}}
                                                    onClick={header.column.getToggleSortingHandler()}
                                                >
                                                    <BodyMedium fontWeight={600} width={'max-content'}>
                                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                                    </BodyMedium>
                                                    {{
                                                        asc: <ArrowUpwardIcon fontSize="small" />,
                                                        desc: <ArrowDownwardIcon fontSize="small" />
                                                    }[header.column.getIsSorted() as string] ??
                                                        (header.column.getCanSort() && <UnfoldMoreIcon fontSize="small" />)}
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
                                                        {...(cell.column.id === 'drag' ? { ...provided.dragHandleProps } : {})}
                                                        style={cell.column.id === 'select' || cell.column.id === 'drag' ? { width: '10px', padding: 0 } : {}}
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
