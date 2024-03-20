"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlPlugin = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
const html_1 = require("@lexical/html");
const lexical_1 = require("lexical");
const LexicalOnChangePlugin_1 = require("@lexical/react/LexicalOnChangePlugin");
const onBlurPlugin_1 = require("./onBlurPlugin");
const HtmlPlugin = ({ initialHtml, onBlur, onChange }) => {
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
            (0, lexical_1.$insertNodes)(nodes);
        });
    }, []);
    function handleOnBlur(editorState) {
        editorState.read(() => {
            onBlur((0, html_1.$generateHtmlFromNodes)(editor));
        });
    }
    function handleOnChange(editorState) {
        editorState.read(() => {
            onChange === null || onChange === void 0 ? void 0 : onChange((0, html_1.$generateHtmlFromNodes)(editor));
        });
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(onBlurPlugin_1.OnBlurPlugin, { onBlur: handleOnBlur }), (0, jsx_runtime_1.jsx)(LexicalOnChangePlugin_1.OnChangePlugin, { onChange: handleOnChange })] }));
};
exports.HtmlPlugin = HtmlPlugin;
//# sourceMappingURL=HtmlPlugin.js.map