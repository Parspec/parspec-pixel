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
                initialHtml={`<p class="richTextParagraph" dir="ltr"><span style="white-space: pre-wrap;">This is common miss conception that thissjiocsjiihbdhibuwsi  cjn hi sk hjna cihsbvjshb ishab  jab chaji sj h asjhc hab ujahbscusdbyhcv  uhs bushbj suhb shu vsudh sdj sj sj ushb sd buhsuhb su b bsuhvujhsdhxvsusjvsdjvsdujvsdhjhsdvushbvusdybvubh  auc bsduicbvsbyuhvvuhsdbvsuhbvsdhujbvsdjhvubsdbvujh</span></p>`}
                editorBgColor="#fff"
            />
        </Box>
    );
};
