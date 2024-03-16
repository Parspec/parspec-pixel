"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnBlurPlugin = void 0;
const react_1 = require("react");
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
const lexical_1 = require("lexical");
const OnBlurPlugin = ({ onBlur }) => {
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    (0, react_1.useEffect)(() => {
        return editor.registerCommand(lexical_1.BLUR_COMMAND, () => {
            onBlur(editor.getEditorState());
            return true;
        }, lexical_1.COMMAND_PRIORITY_EDITOR);
    }, [editor]);
    return null;
};
exports.OnBlurPlugin = OnBlurPlugin;
//# sourceMappingURL=onBlurPlugin.js.map