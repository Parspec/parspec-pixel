import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from './';
import { ThemeProvider } from '../../theme/ThemeProvider';

export default {
    title: 'TextField',
    component: TextField,
    argTypes: { onChange: { action: 'onChange' } }
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
    <ThemeProvider>
        <TextField {...args} />
    </ThemeProvider>
);

export const PrimaryTextField = Template.bind({});
PrimaryTextField.args = {
    label:'Name'
};
