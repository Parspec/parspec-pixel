import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
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
import AutoFocusPlugin from './AutoFocusPlugin';
import DisableEditorPlugin from './DisableEditorPlugin';
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
// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
    console.error(error);
}
export default function RichTextEditor({ onFileUpload, onChange, initialHtml = '', editorBgColor = 'white', contentEditableHeight = '300px', isDisableEditorState = false, placeHolderText = 'Enter text...', showAttachements = false, showShareableLinkButton = false, shareableLinkUrl = '#', shareableLinkTitle = '', onBlur = () => { } }) {
    const initialConfig = {
        namespace: 'ParspecEditor',
        theme,
        onError,
        nodes: registeredNodes
    };
    return (_jsx(LexicalComposer, Object.assign({ initialConfig: initialConfig }, { children: _jsx(Box, Object.assign({ className: "editor-container" }, { children: _jsxs(Box, Object.assign({ className: "editor-inner" }, { children: [_jsx(ToolBar, { onFileUpload: onFileUpload, isDisableEditorState: isDisableEditorState, showAttachements: showAttachements, showShareableLinkButton: showShareableLinkButton, shareableLinkTitle: shareableLinkTitle, shareableLinkUrl: shareableLinkUrl }), _jsx(RichTextPlugin, { contentEditable: _jsx(ContentEditable, { onBlur: onBlur, style: {
                                width: '100%',
                                height: contentEditableHeight,
                                border: '1px solid #ccc',
                                backgroundColor: editorBgColor,
                                paddingTop: '12px',
                                paddingLeft: '12px',
                                overflow: 'auto',
                                borderRadius: '5px'
                            } }), placeholder: _jsx(Placeholder, { placeHolderText: placeHolderText }), ErrorBoundary: LexicalErrorBoundary }), _jsx(ListPlugin, {}), _jsx(HistoryPlugin, {}), _jsx(AutoFocusPlugin, {}), _jsx(HtmlPlugin, { initialHtml: initialHtml, onHtmlChanged: onChange }), _jsx(AutoLinkPlugin, {}), _jsx(LinkPlugin, {}), _jsx(LexicalClickableLinkPlugin, {}), _jsx(DisableEditorPlugin, { isDisableEditorState: isDisableEditorState }), _jsx(MarkdownShortcutPlugin, { transformers: TRANSFORMERS })] })) })) })));
}
//# sourceMappingURL=index.js.map