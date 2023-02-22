import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio } from './';

export default {
    title: 'Radio',
    component: Radio,
    argTypes: { onChange: { action: 'onChange' } }
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const radio = Template.bind({});

radio.args = {
    size: 'small'
};
