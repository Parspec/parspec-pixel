import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PixelTable } from './PixelTable';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '../Checkbox';
import { DragIndicatorIcon } from '../Icons';
import { Box } from '../Box';
import { Person, defaultData } from './dummyData';
import { BodyMedium } from '../Typography';

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
