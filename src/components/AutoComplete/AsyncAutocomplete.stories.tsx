import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { topFilms } from './topfilm';
import { AsyncAutocomplete } from './';

export default {
    title: 'Autocomplete/AsyncAutocomplete',
    component: AsyncAutocomplete,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof AsyncAutocomplete>;

const simulatingAsynchronous = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(topFilms);
        }, 800);
    });
};

const Template: ComponentStory<typeof AsyncAutocomplete> = (args) => (
    <AsyncAutocomplete
        {...args}
        onChange={(event, value) => {
            console.log(value);
        }}
    />
);

export const asyncAutoComplete = Template.bind({});

asyncAutoComplete.args = {
    id: 'asynchronous-demo',
    label: 'Asynchronous',
    optionlabelkeyname: 'title',
    loadersize: 20,
    asyncfunc: simulatingAsynchronous
};
