import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html';
import { $insertNodes } from 'lexical';
const HtmlPlugin = ({ initialHtml, onHtmlChanged }) => {
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
            nodes.forEach((node) => {
                console.log(`test-node`, node);
            });
            $insertNodes(nodes);
        });
    }, []);
    return (_jsx(OnChangePlugin, { onChange: (editorState) => {
            editorState.read(() => {
                onHtmlChanged($generateHtmlFromNodes(editor));
            });
        } }));
};
export default HtmlPlugin;
//# sourceMappingURL=HtmlPlugin.js.map