import { Box } from '../Box';
import { KeyboardArrowLeftIcon, FirstPageIcon, KeyboardArrowRightIcon, LastPageIcon } from '../Icons';
import { IconButton } from '../IconButton';
import { BodyMedium } from '../Typography';
import { PaginationState, Table } from '@tanstack/react-table';

interface PaginationProps {
    pagination: PaginationState;
    table: Table<any>;
}

const Pagination: React.FC<PaginationProps> = ({ pagination, table }) => {
    const startIndex = (pagination.pageSize * pagination.pageIndex + 1).toLocaleString();
    const endIndex = (pagination.pageSize * pagination.pageIndex + table.getRowModel().rows.length).toLocaleString();
    const totalRows = Object.keys(table.getRowModel().rowsById).length.toLocaleString();
    return (
        <Box>
            <>
                <BodyMedium display={'inline'} mr={8}>
                    <b>{startIndex}</b>
                    {' to '}
                    <b>{endIndex}</b>
                    {' of '}
                    <b>{totalRows}</b>
                </BodyMedium>
                <IconButton onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
                    <FirstPageIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                    <KeyboardArrowLeftIcon fontSize="small" />
                </IconButton>
                <BodyMedium display={'inline'}>
                    Page <Box component={'strong'}>{table.getState().pagination.pageIndex + 1} </Box> of <Box component={'strong'}>{table.getPageCount()}</Box>
                </BodyMedium>
                <IconButton onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                    <KeyboardArrowRightIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
                    <LastPageIcon fontSize="small" />
                </IconButton>
            </>
        </Box>
    );
};

export default Pagination;
