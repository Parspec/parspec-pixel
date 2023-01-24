import { IconButton } from '@mui/material';
import { flexRender } from '@tanstack/react-table';
import { Box } from '../Box';
import { UnfoldMoreIcon } from '../Icons';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CloseIcon from '@mui/icons-material/Close';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Droppable, Draggable } from 'react-beautiful-dnd';

export const LeftTable = (props: any) => {
    return (
        <table className="border-2 border-black">
            <thead>
                {props.table?.getLeftHeaderGroups()?.map((headerGroup: any) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header: any, idx: number) => (
                            <th key={header.id} colSpan={header.colSpan}>
                                {header.isPlaceholder ? null : (
                                    <>
                                        <Box
                                            component={'span'}
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
                                        <tr key={row.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            {row.getLeftVisibleCells().map((cell: any) => {
                                                return <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>;
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
                {props.table.getLeftFooterGroups().map((footerGroup: any) => (
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
