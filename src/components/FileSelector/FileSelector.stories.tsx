import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileSelector } from './index';

export default {
    title: 'File Selector',
    component: FileSelector,
    argTypes: { onUpload: { action: 'onUpload' } }
} as ComponentMeta<typeof FileSelector>;

const Template: ComponentStory<typeof FileSelector> = (args) => (
    <FileSelector url="https://hotfix-staging.parspec.xyz/api/generate_signed_url/" error="Wrong format" maxFiles={2} onUpload={(data) => console.log('uploaded', data)} />
);

export const Primary = Template.bind({});
