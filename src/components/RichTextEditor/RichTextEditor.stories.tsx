import React, { useState } from 'react';
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
    const [docs, setDocs] = useState<File[] | null>(null);

    const deleteDoc = (name) => {
        const docArr = Array.from(docs || []);
        const filteredDoc = docArr.filter((obj: any) => obj.name !== name);
        setDocs([...filteredDoc]);
    };

    const adddoc = (fileList: FileList | null) => {
        const docArr = Array.from(fileList || []);
        setDocs(docArr);
    };

    return (
        <Box maxWidth={1000}>
            <TextEditor
                onFileUpload={(params: FileList | null) => {
                    adddoc(params);
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
                showFontFamiliy={false}
            />
            {docs &&
                docs.map((obj: any) => {
                    return (
                        <div>
                            {obj.name} <button onClick={() => deleteDoc(obj.name)}>delete</button>
                        </div>
                    );
                })}
        </Box>
    );
};
