import { Box } from '../Box';
import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from '../Icons';
import { BodyMedium } from '../Typography';
import { PaginationState, Table } from '@tanstack/react-table';
import { IconButton } from '../IconButton';
import { Select } from '../Select';
import React, { useState } from 'react';

interface PaginationProps {
    pagination: PaginationState;
    table: Table<any>;
}
const options = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
];
const Pagination: React.FC<PaginationProps> = ({ pagination, table }) => {
    const [selectedValue, setSelectedValue] = useState(String(table.getState().pagination.pageSize));
    const handleOnChange = (val: string) => {
        setSelectedValue(val);
        table.setPageSize(Number(val));
    };

    return (
        <Box display={'flex'} justifyContent="space-between">
            <Box display={'flex'} gap={1} alignItems="center">
                <IconButton onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                    <KeyboardArrowLeftIcon fontSize="small" />
                </IconButton>
                <BodyMedium display={'inline'}>
                    <Box sx={{ borderRadius: '50%', backgroundColor: 'tertiary.main', pl: 2, pr: 2, display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <BodyMedium color="secondary.contrastText">{pagination.pageIndex + 1}</BodyMedium>
                    </Box>
                </BodyMedium>
                <IconButton style={{ borderRadius: 10 }} onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                    <KeyboardArrowRightIcon fontSize="small" />
                </IconButton>
            </Box>
            <Box width={'100px'} pr={3}>
                <Select
                    size="small"
                    options={options}
                    label="Show"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={(e) => handleOnChange(e.target.value as string)}
                    value={selectedValue}
                />
            </Box>
        </Box>
    );
};

export default Pagination;
