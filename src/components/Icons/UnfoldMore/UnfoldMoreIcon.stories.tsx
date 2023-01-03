import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UnfoldMoreIcon } from '.';

export default {
    title: 'Icons/UnfoldMore',
    component: UnfoldMoreIcon,
} as ComponentMeta<typeof UnfoldMoreIcon>;

const Template: ComponentStory<typeof UnfoldMoreIcon> = (args) => (
        <UnfoldMoreIcon {...args} />
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
