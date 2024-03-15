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
                initialHtml={``}
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
