import React from 'react';
import { topFilms } from './topfilm';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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
        onChange={(event) => {
            console.log(event.target);
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
