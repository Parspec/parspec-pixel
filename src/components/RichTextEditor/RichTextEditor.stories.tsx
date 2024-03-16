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
    const [html, setHtml] = React.useState('');

    return (
        <Box maxWidth={800}>
            <TextEditor
                onFileUpload={(params: FileList | null) => {
                    console.log(params);
                }}
                onChange={(html: string) => setHtml(html)}
                initialHtml={`<ol class=\"richTextList\"><li value=\"1\" class=\"richTextListItem\"><u><i><b><strong class=\"textBold textItalic textUnderline\" style=\"font-size: 37px; line-height: 1.2; white-space: pre-wrap;\">Hello </strong></b></i></u><u><i><b><strong class=\"textBold textItalic textUnderline\" style=\"font-size: 37px; line-height: 1.2; color: rgb(126, 211, 33); white-space: pre-wrap;\">sorld</strong></b></i></u></li><li value=\"2\" class=\"richTextListItem\"><u><i><b><strong class=\"textBold textItalic textUnderline\" style=\"font-size: 37px; line-height: 1.2; white-space: pre-wrap;\">AWesome </strong></b></i></u><u><i><b><strong class=\"textBold textItalic textUnderline\" style=\"font-size: 37px; line-height: 1.2; color: rgb(189, 16, 224); white-space: pre-wrap;\">world</strong></b></i></u></li></ol>`}
                editorBgColor="#fff"
                isDisableEditorState={false}
                contentEditableHeight="100px"
                placeHolderText="Tell us your story..."
                showAttachements
                showShareableLinkButton
                shareableLinkTitle="Awesome !!"
                shareableLinkUrl="https://iamawesome.com"
                onBlur={() => console.log(html)}
            />
        </Box>
    );
};
