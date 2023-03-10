import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileSelector } from './index';
import { Box } from '@mui/system';

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
    onUpload: (data) => console.log('uploaded', data)
};

export const customFileSelector: ComponentStory<typeof FileSelector> = (args) => (
    <Box width={'178px'} height="218px" border="1px solid grey" margin={2} bgcolor={'#f3f5fa'}>
        <FileSelector {...args} url="https://hotfix-staging.parspec.xyz/api/generate_signed_url/" maxFiles={2} onUpload={(data) => console.log('uploaded', data)} />
    </Box>
);

customFileSelector.args = {
    placeholder: 'Drag and drop files here, or:',
    maxFiles: 2,
    onUpload: (data) => console.log('uploaded', data)
};
