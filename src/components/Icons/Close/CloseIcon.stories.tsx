import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CloseIcon } from './';

export default {
    title: 'Icons/Close',
    component: CloseIcon,
} as ComponentMeta<typeof CloseIcon>;

const Template: ComponentStory<typeof CloseIcon> = (args) => (
        <CloseIcon {...args} />
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
