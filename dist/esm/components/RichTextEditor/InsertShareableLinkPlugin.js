import { jsx as _jsx } from "react/jsx-runtime";
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createTextNode, $insertNodes, $getRoot } from 'lexical';
import { $createLinkNode } from '@lexical/link';
import { Button } from '../Button';
export default function InsertShareableLinkPlugin({ href, title }) {
    // get accesss to editor instance
    const [editor] = useLexicalComposerContext();
    function handleOnClick() {
        editor.update(() => {
            const textContent = $getRoot().getTextContent();
            const linkNode = $createLinkNode(href, { target: '_blank' });
            const emptyNode = $createTextNode(' ');
            linkNode.append($createTextNode(title));
            if (textContent.includes(title)) {
                if (href !== '#')
                    linkNode.setURL(href);
                return;
            }
            $insertNodes([emptyNode, linkNode]);
        });
    }
    return (_jsx(Button, Object.assign({ onClick: handleOnClick, variant: "outlined", color: "secondary" }, { children: "Insert Shareable Link" })));
}
//# sourceMappingURL=InsertShareableLinkPlugin.js.map