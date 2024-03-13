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
function onError(error: Error) {
    console.error(error);
}

interface IRichTextEditorProps {
    onFileUpload?: (params: FileList | null) => void;
    initialHtml?: string;
    onChange: (html: string) => void;
    editorBgColor?: string;
    contentEditableHeight?: string;
    isDisableEditorState?: boolean;
    placeHolderText?: string;
}

export default function RichTextEditor({
    onFileUpload,
    onChange,
    initialHtml = '',
    editorBgColor = 'white',
    contentEditableHeight = '300px',
    isDisableEditorState = false,
    placeHolderText = 'Enter text...'
}: IRichTextEditorProps) {
    const initialConfig = {
        namespace: 'ParspecEditor',
        theme,
        onError,
        nodes: registeredNodes
    };

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <Box className="editor-container">
                <Box className="editor-inner">
                    <ToolBar onFileUpload={onFileUpload} isDisableEditorState={isDisableEditorState} />
                    <RichTextPlugin
                        contentEditable={
                            <ContentEditable
                                style={{
                                    width: '100%',
                                    height: contentEditableHeight,
                                    border: '1px solid #ccc',
                                    backgroundColor: editorBgColor,
                                    paddingTop: '12px',
                                    paddingLeft: '12px',
                                    overflow: 'auto',
                                    borderRadius: '5px'
                                }}
                            />
                        }
                        placeholder={<Placeholder placeHolderText={placeHolderText} />}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <ListPlugin />
                    <HistoryPlugin />
                    <AutoFocusPlugin />
                    <HtmlPlugin initialHtml={initialHtml} onHtmlChanged={onChange} />
                    <AutoLinkPlugin />
                    <LinkPlugin />
                    <LexicalClickableLinkPlugin />
                    <DisableEditorPlugin isDisableEditorState={isDisableEditorState} />
                    <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
                </Box>
            </Box>
        </LexicalComposer>
    );
}
