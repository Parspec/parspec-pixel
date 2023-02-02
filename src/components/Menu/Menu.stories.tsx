import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu } from './index';

export default {
    title: 'Menu',
    component: Menu
} as ComponentMeta<typeof Menu>;

const options = [
    { label: 'Option 1', onClick: () => alert('clicked on option 1') },
    { label: 'Option 2', onClick: () => alert('clicked on option 2') },
    { label: 'Option 3', onClick: () => alert('clicked on option 3') }
];

const Template: ComponentStory<typeof Menu> = (args) => <Menu options={options} />;

export const Primary = Template.bind({});
