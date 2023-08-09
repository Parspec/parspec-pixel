import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileSelector } from './index';
import { Box } from '../Box';

export default {
    title: 'File Selector',
    component: FileSelector,
    argTypes: { onUpload: { action: 'onUpload' } }
} as ComponentMeta<typeof FileSelector>;

export const fileSelector: ComponentStory<typeof FileSelector> = (args) => (
    <FileSelector {...args} url="https://hotfix-staging.parspec.xyz/api/generate_signed_url/" error="Wrong format" maxFiles={2} onUpload={(data) => console.log('uploaded', data)} />
);

fileSelector.args = {
    placeholder: 'Drag and drop files here, or:',
    error: 'Wrong format',
    maxFiles: 2,
    onUpload: (data) => console.log('uploaded', data),
    borderColor: 'secondary'
};

export const smallSizeFileSelector: ComponentStory<typeof FileSelector> = (args) => (
    <Box width={'217px'} height={'172px'} border={'1px solid red'}>
        <FileSelector {...args} url="https://hotfix-staging.parspec.xyz/api/generate_signed_url/" error="Wrong format" maxFiles={2} onUpload={(data) => console.log('uploaded', data)} />
    </Box>
);

smallSizeFileSelector.args = {
    placeholder: 'Drag and drop files here, or:',
    error: 'Wrong format',
    maxFiles: 2,
    onUpload: (data) => console.log('uploaded', data),
    borderColor: 'secondary'
};
