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
    <Box width={'217px'} height={'82px'}>
        <FileSelector {...args} url="https://hotfix-staging.parspec.xyz/api/generate_signed_url/" error="Wrong format" maxFiles={2} onUpload={(data) => console.log('uploaded', data)} />
    </Box>
);

fileSelector.args = {
    placeholder: 'Drag and drop files here, or:',
    error: 'Wrong format',
    maxFiles: 2,
    onUpload: (data) => console.log('uploaded', data),
    borderColor: 'secondary'
};
