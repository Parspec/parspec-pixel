import { useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { BLUR_COMMAND, COMMAND_PRIORITY_EDITOR } from 'lexical';
export const OnBlurPlugin = ({ onBlur }) => {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        editor.registerCommand(BLUR_COMMAND, () => {
            onBlur(editor.getEditorState());
            return true;
        }, COMMAND_PRIORITY_EDITOR);
    }, []);
    return null;
};
//# sourceMappingURL=onBlurPlugin.js.map