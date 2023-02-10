import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch } from './';
import { BodyBig } from '../Typography/';

export default {
    title: 'Switch',
    component: Switch,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
    return <Switch {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
    label: <BodyBig>Basic switch</BodyBig>,
    inputProps: { 'aria-label': 'basic' }
};
