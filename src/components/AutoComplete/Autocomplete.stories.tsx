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
        onChange={(e: React.SyntheticEvent, newValue) => {
            console.log(newValue);
        }}
    />
);

export const autoComplete = Template.bind({});

autoComplete.args = {
    options: top100Films,
    id: 'autocomplete-demo',
    label: 'Movies',
    optionlabelkeyname: 'title'
};

export const multiSelect = Template.bind({});

multiSelect.args = {
    id: 'multiselect-demo',
    label: 'MultiSelect',
    multiple: true,
    options: top100Films,
    optionlabelkeyname: 'title'
};

export const freeSolo = Template.bind({});

freeSolo.args = {
    options: top100Films,
    id: 'autocomplete-demo',
    label: 'Movies',
    optionlabelkeyname: 'title',
    freeSolo: true
};
