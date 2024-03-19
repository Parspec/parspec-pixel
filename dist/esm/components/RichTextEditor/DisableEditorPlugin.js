import { useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
export default function DisableEditorPlugin({ isDisable }) {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        editor.setEditable(!isDisable);
    }, [editor, isDisable]);
    return null;
}
//# sourceMappingURL=DisableEditorPlugin.js.map