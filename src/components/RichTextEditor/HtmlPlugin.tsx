import { useState, useEffect } from 'react';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html';
import { $insertNodes } from 'lexical';

import { OnBlurPlugin } from './onBlurPlugin';

interface Props {
    initialHtml?: string;
    convertToHtml: (html: string) => void;
}

const HtmlPlugin = ({ initialHtml, convertToHtml }: Props) => {
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

    return (
        <OnBlurPlugin
            onBlur={(editorState) => {
                editorState.read(() => {
                    convertToHtml($generateHtmlFromNodes(editor));
                });
            }}
        />
    );
};

export default HtmlPlugin;
