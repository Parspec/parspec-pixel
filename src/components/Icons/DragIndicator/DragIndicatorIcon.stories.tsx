import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DragIndicatorIcon } from './';

export default {
    title: 'Icons/DragIndicator',
    component: DragIndicatorIcon,
} as ComponentMeta<typeof DragIndicatorIcon>;

const Template: ComponentStory<typeof DragIndicatorIcon> = (args) => (
        <DragIndicatorIcon {...args} />
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