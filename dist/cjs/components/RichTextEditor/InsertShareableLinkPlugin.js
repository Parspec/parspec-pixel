"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
const lexical_1 = require("lexical");
const link_1 = require("@lexical/link");
const Button_1 = require("../Button");
function InsertShareableLinkPlugin({ href, title }) {
    // get accesss to editor instance
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    function handleOnClick() {
        editor.update(() => {
            const textContent = (0, lexical_1.$getRoot)().getTextContent();
            const linkNode = (0, link_1.$createLinkNode)(href, { target: '_blank' });
            const emptyNode = (0, lexical_1.$createTextNode)(' ');
            linkNode.append((0, lexical_1.$createTextNode)(title));
            if (textContent.includes(title)) {
                if (href !== '#')
                    linkNode.setURL(href);
                return;
            }
            (0, lexical_1.$insertNodes)([emptyNode, linkNode]);
        });
    }
    return ((0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ onClick: handleOnClick, variant: "outlined", color: "secondary" }, { children: "Insert Shareable Link" })));
}
exports.default = InsertShareableLinkPlugin;
//# sourceMappingURL=InsertShareableLinkPlugin.js.map