"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
function DisableEditorPlugin({ isDisableEditorState }) {
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    (0, react_1.useEffect)(() => {
        editor.setEditable(!isDisableEditorState);
    }, [editor, isDisableEditorState]);
    return null;
}
exports.default = DisableEditorPlugin;
//# sourceMappingURL=DisableEditorPlugin.js.map