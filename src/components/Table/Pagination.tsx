import { Box } from '../Box';
import { TextField } from '../TextField';
import { styled } from '@mui/system';
import { KeyboardArrowLeft, FirstPage, KeyboardArrowRight, LastPage } from '@mui/icons-material';

import { IconButton } from '@mui/material';
import { BodyMedium, BodySmall, BodyXS } from '../Typography';

const TextStyle = styled(TextField)`
    input {
        padding: 0;
    }
`;
const Pagination = (props: any) => {
    const startIndex = (props.pagination.pageSize * props.pagination.pageIndex + 1).toLocaleString();
    const endIndex = (props.pagination.pageSize * props.pagination.pageIndex + props.table.getRowModel().rows.length).toLocaleString();
    const totalRows = Object.keys(props.table.getRowModel().rowsById).length.toLocaleString();
    return (
        <Box textAlign={'center'}>
            <>
                <BodyMedium display={'inline'} mr={8}>
                    <b>{startIndex}</b>
                    {' to '}
                    <b>{endIndex}</b>
                    {' of '}
                    <b>{totalRows}</b>
                </BodyMedium>
                <IconButton onClick={() => props.table.setPageIndex(0)} disabled={!props.table.getCanPreviousPage()}>
                    <FirstPage fontSize="small" />
                </IconButton>
                <IconButton onClick={() => props.table.previousPage()} disabled={!props.table.getCanPreviousPage()}>
                    <KeyboardArrowLeft fontSize="small" />
                </IconButton>

                <BodyMedium display={'inline'}>
                    Page <Box component={'strong'}>{props.table.getState().pagination.pageIndex + 1} </Box> of <Box component={'strong'}>{props.table.getPageCount()}</Box>
                </BodyMedium>
                <IconButton onClick={() => props.table.nextPage()} disabled={!props.table.getCanNextPage()}>
                    <KeyboardArrowRight fontSize="small" />
                </IconButton>
                <IconButton onClick={() => props.table.setPageIndex(props.table.getPageCount() - 1)} disabled={!props.table.getCanNextPage()}>
                    <LastPage fontSize="small" />
                </IconButton>
            </>
        </Box>
    );
};

export default Pagination;
