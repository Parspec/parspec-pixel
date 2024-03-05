import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Editor } from './index';

export default {
    title: 'Editor',
    component: Editor
    // argTypes: {
    //     onChange: { action: 'onChange' }
    // }
} as ComponentMeta<typeof Editor>;

export const RichTextEditor: ComponentStory<typeof Editor> = (args) => {
    return <Editor {...args} />;
};

RichTextEditor.args = {
    contentEditableStyle: {
        width: '100%',
        // height: 300,
        border: '1px solid #ccc',
        padding: 4,
        backgroundColor: '#fff',
        overflow: 'auto'
    },
    onFileUpload: (params: FileList | null) => {
        console.log('Here are the files', params);
    }
};
