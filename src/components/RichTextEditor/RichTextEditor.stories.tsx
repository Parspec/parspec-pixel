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
        <Box maxWidth={800}>
            <TextEditor
                onFileUpload={(params: FileList | null) => {
                    console.log(params);
                }}
                initialHtml={`<p class="richTextParagraph" dir="ltr"><b><strong class="textBold" style="font-size: 29px; line-height: 1.2; color: rgb(208, 2, 27); white-space: pre-wrap;">Create</strong></b><b><strong class="textBold" style="font-size: 29px; line-height: 1.2; white-space: pre-wrap;">  </strong></b><u><b><strong class="textBold textUnderline" style="font-size: 29px; line-height: 1.2; color: rgb(80, 227, 194); white-space: pre-wrap;">Something</strong></b></u></p>`}
                editorBgColor="#fff"
                isDisableEditorState={false}
                contentEditableHeight="150px"
                placeHolderText="Tell us your story..."
                showAttachements
                showShareableLinkButton
                shareableLinkTitle="Awesome !!"
                shareableLinkUrl="https://iamawesome.com"
                onBlur={(html) => console.log(`[onBlur]`, html)}
                onChange={(html) => console.log(`[onChange]`, html)}
            />
        </Box>
    );
};
