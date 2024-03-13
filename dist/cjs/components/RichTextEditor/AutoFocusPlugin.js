"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
function AutoFocusPlugin() {
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    (0, react_1.useEffect)(() => {
        // Focus the editor when the effect fires!
        editor.focus();
    }, [editor]);
    return null;
}
exports.default = AutoFocusPlugin;
//# sourceMappingURL=AutoFocusPlugin.js.map