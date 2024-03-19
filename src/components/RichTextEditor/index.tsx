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
import DisableEditorPlugin from './DisableEditorPlugin';
import { IRichTextEditorProps } from './types';

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

export default function RichTextEditor({
    onFileUpload,
    initialHtml = '',
    editorBgColor = 'white',
    contentEditableHeight = '150px',
    isDisable = false,
    placeHolderText = 'Enter text...',
    showAttachements = false,
    showShareableLinkButton = false,
    shareableLinkUrl = '#',
    shareableLinkTitle = '',
    showFontFamiliy = false,
    onBlur = () => {},
    onChange = () => {},
    onFocus = () => {}
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
                    <ToolBar
                        onFileUpload={onFileUpload}
                        isDisable={isDisable}
                        showAttachements={showAttachements}
                        showShareableLinkButton={showShareableLinkButton}
                        shareableLinkTitle={shareableLinkTitle}
                        shareableLinkUrl={shareableLinkUrl}
                        showFontFamiliy={showFontFamiliy}
                    />
                    <RichTextPlugin
                        contentEditable={
                            <ContentEditable
                                onFocus={onFocus}
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
                    <HtmlPlugin initialHtml={initialHtml} onBlur={onBlur} onChange={onChange} />
                    <AutoLinkPlugin />
                    <LinkPlugin />
                    <LexicalClickableLinkPlugin />
                    <DisableEditorPlugin isDisable={isDisable} />
                    <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
                </Box>
            </Box>
        </LexicalComposer>
    );
}
