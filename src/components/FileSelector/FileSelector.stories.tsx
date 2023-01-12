import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FileSelector from './index';

export default {
    title: 'File Selector',
    component: FileSelector,
    argTypes: { onUpload: { action: 'onUpload' } }
} as ComponentMeta<typeof FileSelector>;

const Template: ComponentStory<typeof FileSelector> = (args) => <FileSelector />;

export const Primary = Template.bind({});
