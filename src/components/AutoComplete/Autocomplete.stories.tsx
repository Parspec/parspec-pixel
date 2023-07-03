import React, { useState } from 'react';
import { topFilms as top100Films } from './topfilm';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Autocomplete, OptionType } from './';
import { GroupedAutoComplete } from './GroupedAutoComplete';

export default {
    title: 'Autocomplete/Autocomplete',
    component: Autocomplete,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof Autocomplete>;

export const Basic: ComponentStory<typeof Autocomplete> = (args) => (
    <Autocomplete
        {...args}
        onChange={(e: any) => {
            console.log(e.target.value);
        }}
    />
);

Basic.args = {
    options: top100Films,
    id: 'autocomplete-demo',
    label: 'Movies',
    optionlabelkeyname: 'title',
    fieldSize: 'small',
    defaultValue: 'I am default'
};

export const MultiSelect: ComponentStory<typeof Autocomplete> = (args) => (
    <Autocomplete
        {...args}
        onChange={(e: any) => {
            console.log(e.target.value);
        }}
    />
);

MultiSelect.args = {
    id: 'multiselect-demo',
    label: 'MultiSelect',
    multiple: true,
    options: top100Films,
    optionlabelkeyname: 'title',
    defaultValue: ['Hello']
};

export const AutocompleteWithCreateOption: ComponentStory<typeof Autocomplete> = (args) => (
    <Autocomplete
        {...args}
        onChange={(e: any) => {
            console.log(e.target.value);
        }}
        onBlur={(value: OptionType | string) => console.log(`[on blur]`, value)}
    />
);

AutocompleteWithCreateOption.args = {
    options: top100Films,
    id: 'autocomplete-demo',
    label: 'Movies',
    optionlabelkeyname: 'title',
    freeSolo: true,
    value: { title: 'The Shawshank Redemption', year: 1994 }
};

export const MultiSelectWithChipLimit: ComponentStory<typeof Autocomplete> = (args) => (
    <Autocomplete
        {...args}
        onChange={(e: any) => {
            console.log(e.target.value);
        }}
    />
);

MultiSelectWithChipLimit.args = {
    id: 'multiselect-demo',
    label: 'MultiSelect',
    multiple: true,
    options: top100Films,
    optionlabelkeyname: 'title',
    defaultValue: ['Hello'],
    limitTags: 1
};

export const MultiSelectWithGroups: ComponentStory<typeof GroupedAutoComplete> = (args) => {
    return (
        <GroupedAutoComplete
            {...args}
            onChange={(e: any) => {
                console.log(e.target.value);
            }}
        />
    );
};

MultiSelectWithGroups.args = {
    id: 'multiselect-demo',
    label: 'MultiSelect',
    multiple: true,
    options: [
        { title: 'The Shawshank Redemption', year: 1994, group: [1] },
        { title: 'The Godfather', year: 1972, group: [1, 2] },
        { title: 'The Godfather: Part II', year: 1974, group: [1, 2] },
        { title: 'The Dark Knight', year: 2008, group: [1, 2] },
        { title: '12 Angry Men', year: 1957, group: [2] },
        { title: "Schindler's List", year: 1993, group: [2, 3] },
        { title: 'Pulp Fiction', year: 1994, group: [2, 3] },
        {
            title: 'The Lord of the Rings: The Return of the King',
            year: 2003,
            group: [1, 2]
        },
        { title: 'The Good, the Bad and the Ugly', year: 1966, group: [1, 2] },
        { title: 'Fight Club', year: 1999, group: [2, 3] },
        {
            title: 'The Lord of the Rings: The Fellowship of the Ring',
            year: 2001,
            group: [3]
        },
        {
            title: 'Star Wars: Episode V - The Empire Strikes Back',
            year: 1980,
            group: [1, 3]
        },
        { title: 'Forrest Gump', year: 1994, group: [1, 3] },
        { title: 'Inception', year: 2010, group: [1, 3] }
    ],
    optionlabelkeyname: 'title',
    limitTags: 1,
    staticFilters: [
        {
            title: 'group1',
            value: 1
        },
        {
            title: 'group2',
            value: 2
        },
        {
            title: 'group3',
            value: 3
        }
    ]
};
