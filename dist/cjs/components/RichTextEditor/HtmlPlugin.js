"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const LexicalOnChangePlugin_1 = require("@lexical/react/LexicalOnChangePlugin");
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
const html_1 = require("@lexical/html");
const lexical_1 = require("lexical");
const HtmlPlugin = ({ initialHtml, onHtmlChanged }) => {
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    const [isFirstRender, setIsFirstRender] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        if (!initialHtml || !isFirstRender)
            return;
        setIsFirstRender(false);
        editor.update(() => {
            const parser = new DOMParser();
            const dom = parser.parseFromString(initialHtml, 'text/html');
            const nodes = (0, html_1.$generateNodesFromDOM)(editor, dom);
            nodes.forEach((node) => {
                console.log(`test-node`, node);
            });
            (0, lexical_1.$insertNodes)(nodes);
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)(LexicalOnChangePlugin_1.OnChangePlugin, { onChange: (editorState) => {
            editorState.read(() => {
                onHtmlChanged((0, html_1.$generateHtmlFromNodes)(editor));
            });
        } }));
};
exports.default = HtmlPlugin;
//# sourceMappingURL=HtmlPlugin.js.map