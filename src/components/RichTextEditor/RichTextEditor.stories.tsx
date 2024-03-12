import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Editor } from './index';

export default {
    title: 'Editor',
    component: Editor,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof Editor>;

export const RichTextEditor: ComponentStory<typeof Editor> = (args) => {
    return <Editor {...args} />;
};

RichTextEditor.args = {
    onFileUpload: (params: FileList | null) => {
        console.log(params);
    },
    onChange: (html: string) => console.log(html),
    initialHtml: `<h1>Code is Poetry...</h1>`,
    editorBgColor: '#fff',
    contentEditableHeight: '300px'
};
