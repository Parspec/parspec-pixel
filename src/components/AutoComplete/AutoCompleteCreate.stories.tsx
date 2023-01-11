import React from 'react';
import { topFilms as top100Films } from './topfilm';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AutocompleteCreate } from './index';

export default {
    title: 'Autocomplete/AutocompleteCreate',
    component: AutocompleteCreate,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof AutocompleteCreate>;

const Template: ComponentStory<typeof AutocompleteCreate> = (args) => {
    return (
        <AutocompleteCreate
            {...args}
            onChange={(e: React.SyntheticEvent, newValue) => {
                console.log(`Value i recieved ...`, newValue);
            }}
        />
    );
};

export const autoCompleteCreate = Template.bind({});

autoCompleteCreate.args = {
    options: top100Films,
    id: 'autocomplete-demo',
    label: 'Movies',
    color: 'secondary',
    variant: 'outlined',
    addontext: '(Something is up)'
};
