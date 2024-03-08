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
import AutoLinkPlugin from './AutoLinkPlugin';
import HtmlPlugin from './HtmlPlugin';

import './RichText.css';
import Placeholder from './PlaceHolder';
import { Box } from '../Box';
import { default as ToolBar, registeredNodes } from './ToolBar';

const theme = {
    link: 'cursor-pointer',
    text: {
        underline: 'text-underline'
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
function onError(error: Error) {
    console.error(error);
}

interface IRichTextEditorProps {
    onFileUpload?: (params: FileList | null) => void;
    initialHtml?: string;
    onChange: (html: string) => void;
    editorBgColor?: string;
    contentEditableHeight?: string;
}

export default function RichTextEditor({ onFileUpload, onChange, initialHtml = '', editorBgColor = 'white', contentEditableHeight = '300px' }: IRichTextEditorProps) {
    const initialConfig = {
        namespace: 'ParspecEditor',
        theme,
        onError,
        nodes: registeredNodes
    };

    return (
        <Box id={'custom-rich-text-editor'}>
            <LexicalComposer initialConfig={initialConfig}>
                <Box className="editor-container">
                    <ToolBar onFileUpload={onFileUpload} />
                    <Box className="editor-inner">
                        <RichTextPlugin
                            contentEditable={
                                <ContentEditable
                                    style={{
                                        width: '100%',
                                        height: contentEditableHeight,
                                        border: '1px solid #ccc',
                                        padding: '8px',
                                        backgroundColor: editorBgColor,
                                        overflow: 'auto',
                                        borderRadius: '5px'
                                    }}
                                />
                            }
                            placeholder={<Placeholder />}
                            ErrorBoundary={LexicalErrorBoundary}
                        />
                        <ListPlugin />
                        <HistoryPlugin />
                        <MyCustomAutoFocusPlugin />
                        <HtmlPlugin initialHtml={initialHtml} onHtmlChanged={onChange} />
                        <AutoLinkPlugin />
                        <LinkPlugin />
                        <LexicalClickableLinkPlugin />
                    </Box>
                </Box>
            </LexicalComposer>
        </Box>
    );
}
