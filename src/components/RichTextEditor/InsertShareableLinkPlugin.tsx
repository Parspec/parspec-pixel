import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createTextNode, $insertNodes, $createLineBreakNode } from 'lexical';
import { $createLinkNode } from '@lexical/link';

import { Button } from '../Button';

export default function InsertShareableLinkPlugin({ href, title }: { href: string; title: string }): JSX.Element {
    // get accesss to editor instance
    const [editor] = useLexicalComposerContext();

    function handleOnClick() {
        editor.update(() => {
            const linkNode = $createLinkNode(href, { target: '_blank' });
            linkNode.append($createTextNode(title));
            $insertNodes([$createLineBreakNode(), linkNode]);
        });
    }

    return (
        <Button onClick={handleOnClick} variant="outlined" color="secondary">
            Insert Shareable Link
        </Button>
    );
}
