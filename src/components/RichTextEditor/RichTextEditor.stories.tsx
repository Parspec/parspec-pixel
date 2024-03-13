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

export const Basic: ComponentStory<typeof TextEditor> = () => {
    return (
        <Box maxWidth={600}>
            <TextEditor
                onFileUpload={(params: FileList | null) => {
                    console.log(params);
                }}
                onChange={(html: string) => console.log(html)}
                initialHtml={`<p class="richTextParagraph" dir="ltr"><span style="white-space: pre-wrap;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Adipiscing elit duis tristique sollicitudin nibh. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Amet nisl suscipit</span></p>`}
                editorBgColor="#fff"
                isDisableEditorState={false}
                contentEditableHeight="100px"
            />
        </Box>
    );
};
