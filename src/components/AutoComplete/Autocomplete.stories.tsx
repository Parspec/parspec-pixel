import React from 'react';
import { topFilms as top100Films } from './topfilm';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Autocomplete } from './';

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
        onBlur={(value: any) => console.log(`[on blur]`, value)}
    />
);

AutocompleteWithCreateOption.args = {
    options: top100Films,
    id: 'autocomplete-demo',
    label: 'Movies',
    optionlabelkeyname: 'title',
    freeSolo: true
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
