import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PixelTable } from './PixelTable';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '../Checkbox';
import { DragIndicatorIcon } from '../Icons';
import { Box } from '../Box';
import { Person, defaultData } from './dummyData';

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
            <Box component="span" display={'flex'} alignItems="center">
                <DragIndicatorIcon fontSize="small" style={{ margin: 0, padding: 0 }} />
            </Box>
        )
    },
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                {...{
                    checked: table.getIsAllRowsSelected(),
                    indeterminate: table.getIsSomeRowsSelected(),
                    onChange: table.getToggleAllRowsSelectedHandler(),
                    style: { margin: 0, padding: 0 },
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
                    style: { margin: 0, padding: 0 },
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
export const basic = Template.bind({});
basic.args = {
    defaultData,
    columns
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
                    style: { margin: 0, padding: 0 },
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
                    style: { margin: 0, padding: 0 },
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
const leftPinnedColumnKeys = ['select', 'drag', 'firstName'];
const rightPinnedColumnKeys = ['lastName'];
export const frozenColumns = Template.bind({});
frozenColumns.args = {
    defaultData,
    columns: columnsFrozen,
    leftPinnedColumnKeys,
    rightPinnedColumnKeys
};
