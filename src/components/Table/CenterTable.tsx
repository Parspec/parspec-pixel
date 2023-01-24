import { Table, TableFooter } from '@mui/material';
import { flexRender } from '@tanstack/react-table';
import { Box } from '../Box';
import { UnfoldMoreIcon } from '../Icons';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CloseIcon from '@mui/icons-material/Close';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { IconButton } from '@mui/material';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from '@emotion/styled';

const TdStyled = styled.td`
    padding: 16px;
    margin: 16px;
`;

export const CenterTable = (props: any) => {
    return (
        <table>
            <thead>
                {props.table.getCenterHeaderGroups().map((headerGroup: any) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header: any) => (
                            <th key={header.id} colSpan={header.colSpan}>
                                {header.isPlaceholder ? null : (
                                    <>
                                        <Box
                                            component={'span'}
                                            textAlign="center"
                                            {...{
                                                className: header.column.getCanSort() ? 'cursor-pointer select-none' : '',
                                                onClick: header.column.getToggleSortingHandler()
                                            }}
                                        >
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                            {{
                                                asc: ' 🔼',
                                                desc: ' 🔽'
                                            }[header.column.getIsSorted() as string] ?? <UnfoldMoreIcon fontSize="small" />}
                                        </Box>
                                        {!header.isPlaceholder && header.column.getCanPin() && (
                                            <div className="flex gap-1 justify-center">
                                                {header.column.getIsPinned() !== 'left' ? (
                                                    <IconButton
                                                        className="border rounded px-2"
                                                        onClick={() => {
                                                            header.column.pin('left');
                                                        }}
                                                    >
                                                        <ArrowCircleLeftIcon fontSize="small" />
                                                    </IconButton>
                                                ) : null}
                                                {header.column.getIsPinned() ? (
                                                    <IconButton
                                                        className="border rounded px-2"
                                                        onClick={() => {
                                                            header.column.pin(false);
                                                        }}
                                                    >
                                                        <CloseIcon fontSize="small" />
                                                    </IconButton>
                                                ) : null}
                                                {header.column.getIsPinned() !== 'right' ? (
                                                    <IconButton
                                                        className="border rounded px-2"
                                                        onClick={() => {
                                                            header.column.pin('right');
                                                        }}
                                                    >
                                                        <ArrowCircleRightIcon fontSize="small" />
                                                    </IconButton>
                                                ) : null}
                                            </div>
                                        )}
                                    </>
                                )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <Droppable droppableId="droppable-1">
                {(provided, snapshot) => (
                    <tbody ref={provided.innerRef} {...provided.droppableProps}>
                        {provided.placeholder}
                        {props.table.getRowModel().rows.map((row: any, idx: number) => {
                            return (
                                <Draggable key={idx} draggableId={row.id} index={idx}>
                                    {(provided, snapshot) => (
                                        <tr ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            {row.getCenterVisibleCells().map((cell: any) => {
                                                return (
                                                    <TdStyled key={cell.id}>
                                                        <Box textAlign={'center'}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Box>
                                                    </TdStyled>
                                                );
                                            })}
                                        </tr>
                                    )}
                                </Draggable>
                            );
                        })}
                    </tbody>
                )}
            </Droppable>
            <tfoot>
                {props.table.getCenterFooterGroups().map((footerGroup: any) => (
                    <tr key={footerGroup.id}>
                        {footerGroup.headers.map((header: any) => (
                            <td key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.footer, header.getContext())}</td>
                        ))}
                    </tr>
                ))}
            </tfoot>
        </table>
    );
};
