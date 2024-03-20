import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RichTextEditor as TextEditor } from './index';
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
        <Box maxWidth={1000}>
            <TextEditor
                onFileUpload={(params: FileList | null) => {
                    console.log(params);
                }}
                initialHtml={` <p class="richTextParagraph" dir="ltr"><b><strong class="textBold" style="color: rgb(208, 2, 27); font-family: Arial; font-size: 29px; white-space: pre-wrap;">Create</strong></b><b><strong class="textBold" style="font-family: Arial; font-size: 29px; white-space: pre-wrap;">  </strong></b><u><b><strong class="textBold textUnderline" style="color: rgb(80, 227, 194); font-family: Arial; font-size: 29px; white-space: pre-wrap;">Something</strong></b></u></p>`}
                editorBgColor="#fff"
                isDisable={false}
                contentEditableHeight="150px"
                placeHolderText="Tell us your story..."
                showAttachements
                showShareableLinkButton
                shareableLinkTitle="Awesome !!"
                shareableLinkUrl="https://iamawesome.com"
                onBlur={(html) => console.log(`[onBlur]`, html)}
                onChange={(html) => console.log(`[onChange]`, html)}
                onFocus={() => console.log(`[onFocus]`)}
                showFontFamiliy
            />
        </Box>
    );
};
