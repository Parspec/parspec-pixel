"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisableEditorPlugin = void 0;
const react_1 = require("react");
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
function DisableEditorPlugin({ isDisable }) {
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    (0, react_1.useEffect)(() => {
        editor.setEditable(!isDisable);
    }, [editor, isDisable]);
    return null;
}
exports.DisableEditorPlugin = DisableEditorPlugin;
//# sourceMappingURL=DisableEditorPlugin.js.map