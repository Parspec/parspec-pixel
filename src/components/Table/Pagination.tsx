import { Box } from '../Box';
import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from '../Icons';
import { BodyMedium } from '../Typography';
import { PaginationState, Table } from '@tanstack/react-table';
import { IconButton } from '../IconButton';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface PaginationProps {
    pagination: PaginationState;
    table: Table<any>;
}

const Pagination: React.FC<PaginationProps> = ({ pagination, table }) => {
    return (
        <Box display={'flex'} justifyContent="space-between">
            <Box display={'flex'} gap={1}>
                <IconButton onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                    <KeyboardArrowLeftIcon fontSize="small" />
                </IconButton>
                <BodyMedium display={'inline'}>
                    <IconButton sx={{ borderRadius: '100%' }}>
                        <BodyMedium>{pagination.pageIndex + 1}</BodyMedium>
                    </IconButton>
                </BodyMedium>
                <IconButton style={{ borderRadius: 10 }} onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                    <KeyboardArrowRightIcon fontSize="small" />
                </IconButton>
            </Box>
            <Box width={'100px'}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Show</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={table.getState().pagination.pageSize}
                        label="Show"
                        size="small"
                        onChange={(e) => table.setPageSize(Number(e.target.value))}
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    );
};

export default Pagination;
