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

export const Basic: ComponentStory<typeof Switch> = (args) => {
    return <Switch {...args} />;
};

Basic.args = {
    label: 'Switch',
    size: 'small',
    color: 'tertiary'
};
