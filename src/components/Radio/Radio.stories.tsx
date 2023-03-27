import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio } from './';

export default {
    title: 'Radio',
    component: Radio,
    argTypes: { onChange: { action: 'onChange' } }
} as ComponentMeta<typeof Radio>;

export const Basic: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

Basic.args = {
    size: 'small'
};
