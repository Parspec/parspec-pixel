import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '.';

export default {
    title: 'Icon',
    component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
        <Icon {...args} />
);

export const CloseIcon = Template.bind({});
CloseIcon.args = { 
  name: 'Close',
  fontSize: 'medium'
};

