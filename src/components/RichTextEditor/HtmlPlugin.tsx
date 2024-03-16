import { useState, useEffect } from 'react';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html';
import { $insertNodes, EditorState } from 'lexical';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';

import { OnBlurPlugin } from './onBlurPlugin';

interface Props {
    initialHtml?: string;
    onBlur: (html: string) => void;
    onChange?: (html: string) => void;
}

const HtmlPlugin = ({ initialHtml, onBlur, onChange }: Props) => {
    const [editor] = useLexicalComposerContext();

    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        if (!initialHtml || !isFirstRender) return;

        setIsFirstRender(false);

        editor.update(() => {
            const parser = new DOMParser();
            const dom = parser.parseFromString(initialHtml, 'text/html');
            const nodes = $generateNodesFromDOM(editor, dom);
            $insertNodes(nodes);
        });
    }, []);

    function handleOnBlur(editorState: EditorState) {
        editorState.read(() => {
            onBlur($generateHtmlFromNodes(editor));
        });
    }

    function handleOnChange(editorState: EditorState) {
        editorState.read(() => {
            onChange?.($generateHtmlFromNodes(editor));
        });
    }

    return (
        <>
            <OnBlurPlugin onBlur={handleOnBlur} />
            {onChange && <OnChangePlugin onChange={handleOnChange} />}
        </>
    );
};

export default HtmlPlugin;
