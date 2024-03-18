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

const filesData = [
    {
        id: 5,
        name: '91319-13.0-INS-BV-P (1).pdf',
        s3_url: 'media/cas/1c9792ef3a22d777a10903984d5d03eb611193124dd43bb86c92ae66ae6c4a04.pdf',
        filepath: 'media/cas/1c9792ef3a22d777a10903984d5d03eb611193124dd43bb86c92ae66ae6c4a04.pdf',
        size: 604857,
        page_count: 2
    },
    {
        id: 6,
        name: '2DS_led.pdf',
        s3_url: 'media/cas/290d616e7f01c0d629747261028bc4f07ce21b3d086293b955d8ccd51b0d096f.pdf',
        filepath: 'media/cas/290d616e7f01c0d629747261028bc4f07ce21b3d086293b955d8ccd51b0d096f.pdf',
        size: 2460969,
        page_count: 6
    }
];

export const fileSelector: ComponentStory<typeof FileSelector> = (args) => {
    const onFileUploadedToS3 = (files: IFileType[]) => {
        console.log('onFileUploadedToS3', files);
    };

    const onSelect = (files: any) => {};

    return (
        <Box width={'217px'} height={'82px'}>
            <FileSelector {...args} url="https://minor-staging.parspec.xyz/api/generate_signed_url/" error="Wrong format" onUpload={onFileUploadedToS3} onSelect={onSelect} />
        </Box>
    );
};

fileSelector.args = {
    placeholder: 'Drag and drop files here, or:',
    error: 'Wrong format',
    borderColor: 'secondary'
};

export const multiSelect: ComponentStory<typeof FileSelector> = (args) => {
    const [preSelectedFiles, setPreSelectedFiles] = useState<any>(filesData);

    const onFileUploadedToS3 = (files: IFileType[]) => {
        const newFiles = files.map((item) => ({ name: item.file.name, size: item.file.size, filepath: item.s3_file_path }));
        console.log('newFiles: ', newFiles);
        // setPreSelectedFiles(newFiles);
    };

    return (
        <Box width={'550px'} height={'82px'}>
            <FileSelector
                {...args}
                url="https://minor-staging.parspec.xyz/api/generate_signed_url/"
                error="Wrong format"
                maxFiles={Infinity}
                onUpload={onFileUploadedToS3}
                showUploaderAlways={true}
                maxTotalFileSizeAllowed={{
                    size_in_bytes: Infinity,
                    errorText: 'The total size of uploaded files cannot exceed 2GB, upload a file with a smaller size or delete existing uploads, if any.'
                }}
                preSelectedFile={preSelectedFiles}
            />
        </Box>
    );
};

multiSelect.args = {
    placeholder: 'Drag and drop files here, or:',
    error: 'Wrong format',
    borderColor: 'secondary'
};
