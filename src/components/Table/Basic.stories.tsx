import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Basic } from './Basic';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@mui/material';

export default {
    title: 'Table',
    component: Basic
} as ComponentMeta<typeof Basic>;

const Template: ComponentStory<typeof Basic> = (args) => {
    return <Basic {...args} />;
};
export type Person = {
    select: boolean;
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    status: string;
    progress: number;
};
const defaultData: Person[] = [
    {
        select: false,
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50
    },
    {
        select: false,
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80
    },
    {
        select: false,
        firstName: 'joe2',
        lastName: 'dirte2',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10
    },
    {
        select: false,
        firstName: 'joe3',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10
    },
    {
        select: false,
        firstName: 'joe4',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10
    },
    {
        select: false,
        firstName: 'joe5',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10
    }
];
const columns: ColumnDef<Person>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                {...{
                    checked: table.getIsAllRowsSelected(),
                    indeterminate: table.getIsSomeRowsSelected(),
                    onChange: table.getToggleAllRowsSelectedHandler(),
                    style: { margin: 0, padding: 0 }
                }}
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                {...{
                    checked: row.getIsSelected(),
                    indeterminate: row.getIsSomeSelected(),
                    onChange: row.getToggleSelectedHandler(),
                    style: { margin: 0, padding: 0 }
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
