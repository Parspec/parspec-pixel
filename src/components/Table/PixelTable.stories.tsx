import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PixelTable } from './PixelTable';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '../Checkbox';
import { Button } from '../Button';
import { AddIcon, CancelIcon, CheckCircleIcon, DragIndicatorIcon, MoreVertIcon, ViewArrayIcon } from '../Icons';
import { Box } from '../Box';
import { Person, defaultData, defaultDataP, Project } from './dummyData';
import { BodyMedium, BodySmall, BodyXS, BodyXXS } from '../Typography';
import { Link, List, ListItem } from '@mui/material';

export default {
    title: 'Table',
    component: PixelTable
} as ComponentMeta<typeof PixelTable>;

const Template: ComponentStory<typeof PixelTable> = (args) => {
    return <PixelTable {...args} />;
};

const columns: ColumnDef<Person>[] = [
    {
        accessorKey: 'drag',
        header: () => <></>,
        cell: () => (
            <Box ml={3}>
                <DragIndicatorIcon fontSize="small" />
            </Box>
        )
    },
    {
        accessorKey: 'select',
        header: ({ table }) => (
            <Checkbox
                {...{
                    checked: table.getIsAllRowsSelected(),
                    indeterminate: table.getIsSomeRowsSelected(),
                    onChange: table.getToggleAllRowsSelectedHandler(),
                    style: { margin: 0 },
                    label: ''
                }}
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                {...{
                    checked: row.getIsSelected(),
                    indeterminate: row.getIsSomeSelected(),
                    onChange: row.getToggleSelectedHandler(),
                    style: { margin: 0 },
                    label: ''
                }}
            />
        )
    },
    {
        accessorKey: 'firstName',
        header: () => <span>First Name</span>
    },
    {
        accessorKey: 'lastName',
        header: () => <span>Last Name</span>
    },
    {
        accessorKey: 'age',
        header: () => 'Age'
    },
    {
        accessorKey: 'visits',
        header: () => <span>Visits</span>
    },
    {
        accessorKey: 'status',
        header: 'Status'
    },
    {
        accessorKey: 'progress',
        header: 'Profile Progress'
    }
];

const sortableColumnIds = ['firstName', 'age'];
export const basic = Template.bind({});
basic.args = {
    defaultData,
    columns,
    sortableColumnIds
};

const columnsFrozen: ColumnDef<Person>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                {...{
                    checked: table.getIsAllRowsSelected(),
                    indeterminate: table.getIsSomeRowsSelected(),
                    onChange: table.getToggleAllRowsSelectedHandler(),
                    style: { margin: 0 },
                    label: ''
                }}
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                {...{
                    checked: row.getIsSelected(),
                    indeterminate: row.getIsSomeSelected(),
                    onChange: row.getToggleSelectedHandler(),
                    style: { margin: 0 },
                    label: ''
                }}
            />
        )
    },
    {
        accessorKey: 'firstName',
        header: () => <span>First Name</span>
    },
    {
        accessorKey: 'lastName',
        header: () => <span>Last Name</span>
    },
    {
        accessorKey: 'age',
        header: () => 'Age'
    },
    {
        accessorKey: 'visits',
        header: () => <span>Visits</span>
    },
    {
        accessorKey: 'status',
        header: 'Status'
    },
    {
        accessorKey: 'progress',
        header: 'Profile Progress'
    }
];
const leftPinnedColumnKeys = ['select', 'drag', 'firstName', 'status', 'age'];
const rightPinnedColumnKeys = ['lastName'];
export const frozenColumns = Template.bind({});
frozenColumns.args = {
    defaultData,
    columns: columnsFrozen,
    leftPinnedColumnKeys,
    rightPinnedColumnKeys,
    sortableColumnIds
};

const actionColumns: ColumnDef<Project>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                {...{
                    checked: table.getIsAllRowsSelected(),
                    indeterminate: table.getIsSomeRowsSelected(),
                    onChange: table.getToggleAllRowsSelectedHandler(),
                    style: { margin: 0 },
                    label: ''
                }}
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                {...{
                    checked: row.getIsSelected(),
                    indeterminate: row.getIsSomeSelected(),
                    onChange: row.getToggleSelectedHandler(),
                    style: { margin: 0 },
                    label: ''
                }}
            />
        )
    },
    {
        accessorKey: 'wonStatus',
        header: () => <BodyXS>Won</BodyXS>,
        cell: (info) => <Box textAlign={'center'}>{info.getValue() ? <CheckCircleIcon color="success" fontSize="small" /> : <CancelIcon color="error" fontSize="small" />}</Box>
    },
    {
        accessorKey: 'bomId',
        header: () => <BodyXS>BOM ID</BodyXS>,
        cell: (info) => (
            <Link href="#" style={{ textDecoration: 'none' }}>
                <>{info.getValue()}</>
            </Link>
        )
    },
    {
        accessorKey: 'customer',
        header: () => <BodyXS>Customer</BodyXS>
    },
    {
        accessorKey: 'lastModified',
        header: () => <BodyXS>Last Modified</BodyXS>,
        cell: (info) => (
            <Box>
                <BodySmall>{(info.getValue() as keyof Project['lastModified'])['lastModifiedBy']}</BodySmall>
                <BodyXS>{(info.getValue() as keyof Project['lastModified'])['lastModifiedTime']}</BodyXS>
            </Box>
        )
    },
    {
        accessorKey: 'quote',
        header: () => <BodyXS>Quote</BodyXS>,
        cell: (info) => (
            <Box display={'flex'} gap={2} alignContent="center" alignItems={'center'}>
                <Box>
                    <Button size="small">View</Button>
                </Box>
                <Box>
                    <BodySmall>{(info.getValue() as keyof Project['quote'])['quoteActionTakenBy']}</BodySmall>
                    <BodyXS>
                        {(info.getValue() as keyof Project['quote'])['quoteStatus'] ? <BodyXXS sx={{ color: 'success' }}>Approved</BodyXXS> : <BodyXXS sx={{ color: 'success' }}>Rejected</BodyXXS>}
                    </BodyXS>
                </Box>
            </Box>
        )
    },
    {
        accessorKey: 'submittal',
        header: () => <BodyXXS>Submittal</BodyXXS>,
        cell: (info) => (
            <Box display={'flex'} gap={2} alignContent="center" alignItems={'center'}>
                <Box>
                    <Button size="small">View</Button>
                </Box>
                <Box>
                    <BodySmall>{(info.getValue() as keyof Project['submittal'])['submittalActionTakenBy']}</BodySmall>
                    <BodyXS>
                        {(info.getValue() as keyof Project['submittal'])['submittalStatus'] ? (
                            <BodyXXS sx={{ color: 'success' }}>Approved</BodyXXS>
                        ) : (
                            <BodyXXS sx={{ color: 'success' }}>Rejected</BodyXXS>
                        )}
                    </BodyXS>
                </Box>
            </Box>
        )
    },
    {
        accessorKey: 'om',
        header: () => <BodyXS>O&M Package</BodyXS>,
        cell: () => (
            <Box display={'flex'} alignContent="center" alignItems={'center'} gap={1}>
                <AddIcon fontSize="small" />
                <BodySmall>Create New</BodySmall>
            </Box>
        )
    },
    {
        accessorKey: 'action',
        header: () => (
            <Box textAlign={'center'}>
                <ViewArrayIcon fontSize="small" />
            </Box>
        ),
        cell: () => (
            <Box textAlign={'center'}>
                <MoreVertIcon fontSize="small" />
            </Box>
        )
    }
];

export const ActionColumns = Template.bind({});
ActionColumns.args = {
    defaultData: defaultDataP,
    columns: actionColumns
};
