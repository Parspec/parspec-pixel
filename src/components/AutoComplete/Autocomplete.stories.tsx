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

const Template: ComponentStory<typeof Autocomplete> = (args) => (
    <Autocomplete
        {...args}
        onChange={(e) => {
            console.log(e);
        }}
    />
);

export const Basic = Template.bind({});

Basic.args = {
    options: top100Films,
    id: 'autocomplete-demo',
    label: 'Movies',
    optionlabelkeyname: 'title'
};

export const MultiSelect = Template.bind({});

MultiSelect.args = {
    id: 'multiselect-demo',
    label: 'MultiSelect',
    multiple: true,
    options: top100Films,
    optionlabelkeyname: 'title'
};

export const AutocompleteWithCreateOption = Template.bind({});

AutocompleteWithCreateOption.args = {
    options: top100Films,
    id: 'autocomplete-demo',
    label: 'Movies',
    optionlabelkeyname: 'title',
    freesolo: true
};
