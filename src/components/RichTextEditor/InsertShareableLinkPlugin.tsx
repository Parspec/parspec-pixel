import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createTextNode, $insertNodes, $getRoot } from 'lexical';
import { $createLinkNode } from '@lexical/link';

import { Button } from '../Button';

export default function InsertShareableLinkPlugin({ href, title }: { href: string; title: string }): JSX.Element {
    // get accesss to editor instance
    const [editor] = useLexicalComposerContext();

    function handleOnClick() {
        editor.update(() => {
            const textContent = $getRoot().getTextContent();
            const linkNode = $createLinkNode(href, { target: '_blank' });
            const emptyNode = $createTextNode(' ');
            linkNode.append($createTextNode(title));
            if (textContent.includes(title)) {
                if (href !== '#') linkNode.setURL(href);

                return;
            }

            $insertNodes([emptyNode, linkNode]);
        });
    }

    return (
        <Button onClick={handleOnClick} variant="outlined" color="secondary">
            Insert Shareable Link
        </Button>
    );
}
