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
    size: 'small',
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
        onBlur={(event: any) => {
            console.log('Yolooo', event.target.value);
        }}
    />
);

AutocompleteWithCreateOption.args = {
    options: top100Films,
    id: 'autocomplete-demo',
    label: 'Movies',
    optionlabelkeyname: 'title',
    freeSolo: true
};
