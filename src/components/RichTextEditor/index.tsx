import { useEffect, useState } from 'react';

import { EditorState, LexicalEditor } from 'lexical';
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
function MyOnChangePlugin({ onChange }: { onChange: (editorState: EditorState, editor?: LexicalEditor, tags?: Set<string>) => void }) {
    // Access the editor through the LexicalComposerContext
    const [editor] = useLexicalComposerContext();
    // Wrap our listener in useEffect to handle the teardown and avoid stale references.
    useEffect(() => {
        // most listeners return a teardown function that can be called to clean them up.
        return editor.registerUpdateListener(({ editorState }) => {
            // call onChange here to pass the latest state up to the parent.
            onChange(editorState);
        });
    }, [editor, onChange]);
    return null;
}

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
    contentEditableStyle: Record<string, string | number>;
    onFileUpload?: (params: FileList | null) => void;
}

export default function RichTextEditor({ contentEditableStyle, onFileUpload }: IRichTextEditorProps) {
    const initialConfig = {
        namespace: 'MyEditor',
        theme,
        onError,
        nodes: registeredNodes
    };

    const [editorState, setEditorState] = useState<EditorState>();

    function onChange(editorState: EditorState) {
        setEditorState(editorState);
    }

    console.log(`[editorState]`, editorState);

    return (
        <Box id={'custom-rich-text-editor'}>
            <LexicalComposer initialConfig={initialConfig}>
                <Box className="editor-container">
                    <ToolBar onFileUpload={onFileUpload} />
                    <Box className="editor-inner">
                        <RichTextPlugin contentEditable={<ContentEditable style={{ ...contentEditableStyle }} />} placeholder={<Placeholder />} ErrorBoundary={LexicalErrorBoundary} />
                        <ListPlugin />
                        <HistoryPlugin />
                        <MyCustomAutoFocusPlugin />
                        <MyOnChangePlugin onChange={onChange} />
                        <AutoLinkPlugin />
                        <LinkPlugin />
                        <LexicalClickableLinkPlugin />
                    </Box>
                </Box>
            </LexicalComposer>
        </Box>
    );
}
