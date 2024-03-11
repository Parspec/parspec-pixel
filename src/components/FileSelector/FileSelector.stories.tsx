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
    const [preSelectedFiles, setPreSelectedFiles] = useState<any>([]);

    const onFileUploadedToS3 = (files: IFileType[]) => {
        const newFiles = files.map((item) => ({ name: item.file.name, size: item.file.size, filepath: item.s3_file_path }));
        setPreSelectedFiles(newFiles);
    };

    const onSelect = (files: any) => {
        setRestrictUpload(true);
    };

    return (
        <Box width={'217px'} height={'82px'}>
            <FileSelector
                {...args}
                url="https://minor-staging.parspec.xyz/api/generate_signed_url/"
                error="Wrong format"
                maxFiles={2}
                onUpload={onFileUploadedToS3}
                onSelect={onSelect}
                showUploaderAlways={true}
                restrictUpload={false}
                preSelectedFile={preSelectedFiles}
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
