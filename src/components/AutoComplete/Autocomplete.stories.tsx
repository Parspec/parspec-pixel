import React from 'react';
import { topFilms as top100Films } from './topfilm';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Autocomplete } from './index';

export default {
    title: 'Autocomplete/Autocomplete',
    component: Autocomplete,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => {
    return (
        <Autocomplete
            {...args}
            onChange={(e: React.SyntheticEvent, newValue) => {
                console.log(`Value i recieved ...`, newValue);
            }}
        />
    );
};

export const autoComplete = Template.bind({});

autoComplete.args = {
    options: top100Films,
    id: 'autocomplete-demo',
    label: 'Movies',
    color: 'secondary',
    variant: 'outlined'
};

export const multiSelect = Template.bind({});

multiSelect.args = {
    id: 'multiselect-demo',
    label: 'MultiSelect',
    color: 'primary',
    variant: 'outlined',
    multiple: true,
    options: top100Films,
    defaultValue: [top100Films[0]]
};
