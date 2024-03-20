import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html';
import { $insertNodes } from 'lexical';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { OnBlurPlugin } from './onBlurPlugin';
const HtmlPlugin = ({ initialHtml, onBlur, onChange }) => {
    const [editor] = useLexicalComposerContext();
    const [isFirstRender, setIsFirstRender] = useState(true);
    useEffect(() => {
        if (!initialHtml || !isFirstRender)
            return;
        setIsFirstRender(false);
        editor.update(() => {
            const parser = new DOMParser();
            const dom = parser.parseFromString(initialHtml, 'text/html');
            const nodes = $generateNodesFromDOM(editor, dom);
            $insertNodes(nodes);
        });
    }, []);
    function handleOnBlur(editorState) {
        editorState.read(() => {
            onBlur($generateHtmlFromNodes(editor));
        });
    }
    function handleOnChange(editorState) {
        editorState.read(() => {
            onChange === null || onChange === void 0 ? void 0 : onChange($generateHtmlFromNodes(editor));
        });
    }
    return (_jsxs(_Fragment, { children: [_jsx(OnBlurPlugin, { onBlur: handleOnBlur }), _jsx(OnChangePlugin, { onChange: handleOnChange })] }));
};
export default HtmlPlugin;
//# sourceMappingURL=HtmlPlugin.js.map