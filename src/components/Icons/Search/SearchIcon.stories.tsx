import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchIcon } from './';

export default {
    title: 'Icons/Search',
    component: SearchIcon,
} as ComponentMeta<typeof SearchIcon>;

const Template: ComponentStory<typeof SearchIcon> = (args) => (
        <SearchIcon {...args} />
);

export const Small = Template.bind({});
Small.args = { 
  fontSize: 'small'
};

export const Medium = Template.bind({});
Medium.args = { 
  fontSize: 'medium'
};

export const Large = Template.bind({});
Large.args = { 
  fontSize: 'large'
};

export const Default = Template.bind({});