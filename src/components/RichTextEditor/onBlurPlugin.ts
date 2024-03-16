import { useEffect } from 'react';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { BLUR_COMMAND, COMMAND_PRIORITY_EDITOR, EditorState } from 'lexical';

export const OnBlurPlugin = ({ onBlur }: { onBlur: (edittorState: EditorState) => void }) => {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        return editor.registerCommand(
            BLUR_COMMAND,
            (): boolean => {
                onBlur(editor.getEditorState());
                return true;
            },
            COMMAND_PRIORITY_EDITOR
        );
    }, [editor]);

    return null;
};
