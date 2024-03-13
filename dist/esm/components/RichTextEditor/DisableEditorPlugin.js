import { useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
export default function DisableEditorPlugin({ isDisableEditorState }) {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        editor.setEditable(!isDisableEditorState);
    }, [editor, isDisableEditorState]);
    return null;
}
//# sourceMappingURL=DisableEditorPlugin.js.map