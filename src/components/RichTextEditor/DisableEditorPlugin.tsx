import { useEffect } from 'react';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export function DisableEditorPlugin({ isDisable }: { isDisable: boolean }) {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        editor.setEditable(!isDisable);
    }, [editor, isDisable]);

    return null;
}
