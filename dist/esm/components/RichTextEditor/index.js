import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import LexicalClickableLinkPlugin from '@lexical/react/LexicalClickableLinkPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { TRANSFORMERS } from '@lexical/markdown';
import AutoLinkPlugin from './AutoLinkPlugin';
import HtmlPlugin from './HtmlPlugin';
import './RichText.css';
import Placeholder from './PlaceHolder';
import { Box } from '../Box';
import { default as ToolBar, registeredNodes } from './ToolBar';
const theme = {
    link: 'cursor-pointer',
    text: {
        bold: 'textBold',
        italic: 'textItalic',
        underline: 'textUnderline'
    },
    paragraph: 'richTextParagraph',
    list: {
        listitem: 'richTextListItem',
        ul: 'richTextList',
        ol: 'richTextList'
    }
};
// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
// When the editor changes, you can get notified via the
// OnChangePlugin!
function MyCustomAutoFocusPlugin() {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        // Focus the editor when the effect fires!
        editor.focus();
    }, [editor]);
    return null;
}
// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
    console.error(error);
}
export default function RichTextEditor({ onFileUpload, onChange, initialHtml = '', editorBgColor = 'white', contentEditableHeight = '300px' }) {
    const initialConfig = {
        namespace: 'ParspecEditor',
        theme,
        onError,
        nodes: registeredNodes
    };
    return (_jsx(LexicalComposer, Object.assign({ initialConfig: initialConfig }, { children: _jsx(Box, Object.assign({ className: "editor-container" }, { children: _jsxs(Box, Object.assign({ className: "editor-inner" }, { children: [_jsx(ToolBar, { onFileUpload: onFileUpload }), _jsx(RichTextPlugin, { contentEditable: _jsx(ContentEditable, { style: {
                                width: '100%',
                                height: contentEditableHeight,
                                border: '1px solid #ccc',
                                backgroundColor: editorBgColor,
                                paddingTop: '12px',
                                paddingLeft: '12px',
                                overflow: 'auto',
                                borderRadius: '5px'
                            } }), placeholder: _jsx(Placeholder, {}), ErrorBoundary: LexicalErrorBoundary }), _jsx(ListPlugin, {}), _jsx(HistoryPlugin, {}), _jsx(MyCustomAutoFocusPlugin, {}), _jsx(HtmlPlugin, { initialHtml: initialHtml, onHtmlChanged: onChange }), _jsx(AutoLinkPlugin, {}), _jsx(LinkPlugin, {}), _jsx(LexicalClickableLinkPlugin, {}), _jsx(MarkdownShortcutPlugin, { transformers: TRANSFORMERS })] })) })) })));
}
//# sourceMappingURL=index.js.map