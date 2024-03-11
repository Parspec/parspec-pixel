import React from 'react';
import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileSelector, FileSelectorFileType } from './index';
import { Box } from '../Box';

export default {
    title: 'File Selector',
    component: FileSelector,
    argTypes: { onUpload: { action: 'onUpload' } }
} as ComponentMeta<typeof FileSelector>;

export interface IFileType {
    file: FileSelectorFileType;
    s3_file_path?: string;
}

export const fileSelector: ComponentStory<typeof FileSelector> = (args) => {
    const [restrictUpload, setRestrictUpload] = useState(false);
    const onFileUploadedToS3 = (files: IFileType[]) => {
        console.log('onUpload: ', files);
    };

    const onSelect = (files: any) => {
        console.log('onSelect: ', files);
        setRestrictUpload(true);
    };

    return (
        <Box width={'217px'} height={'82px'}>
            <FileSelector
                {...args}
                url="https://hotfix-staging.parspec.xyz/api/generate_signed_url/"
                error="Wrong format"
                maxFiles={2}
                onUpload={onFileUploadedToS3}
                onSelect={onSelect}
                showUploaderAlways={true}
                restrictUpload={false}
            />
        </Box>
    );
};

fileSelector.args = {
    placeholder: 'Drag and drop files here, or:',
    url: 'http://3.147.53.199:8000/api/generate_signed_url/',
    error: 'Wrong format',
    maxFiles: 5,
    borderColor: 'secondary'
};
