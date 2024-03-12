import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as TextEditor } from './index';
import { Box } from '../Box';

export default {
    title: 'TextEditor',
    component: TextEditor,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof TextEditor>;

export const Basic: ComponentStory<typeof TextEditor> = (args) => {
    return (
        <Box maxWidth={600}>
            <TextEditor {...args} />
        </Box>
    );
};

Basic.args = {
    onFileUpload: (params: FileList | null) => {
        console.log(params);
    },
    onChange: (html: string) => console.log(html),
    initialHtml: ``,
    editorBgColor: '#fff'
};
