import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio } from './index';

import { ThemeProvider } from '../../theme/ThemeProvider';

export default {
    title: 'Radio',
    component: Radio,
    argTypes: { onChange: { action: 'onChange' } }
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
    return (
        <ThemeProvider>
            <Radio {...args} />
        </ThemeProvider>
    );
};

export const radio = Template.bind({});

radio.args = {
    size: 'medium',
    color: 'primary'
};
