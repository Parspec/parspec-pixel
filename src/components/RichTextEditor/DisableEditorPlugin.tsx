import { useEffect } from 'react';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export default function DisableEditorPlugin({ isDisableEditorState }: { isDisableEditorState: boolean }) {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        editor.setEditable(!isDisableEditorState);
    }, [editor, isDisableEditorState]);

    return null;
}
