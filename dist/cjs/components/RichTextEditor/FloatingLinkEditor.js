"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatingLinkEditor = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const lexical_1 = require("lexical");
const link_1 = require("@lexical/link");
const utils_1 = require("@lexical/utils");
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
require("./RichText.css");
const utils_2 = require("./utils");
const constants_1 = require("./constants");
const Box_1 = require("../Box");
const TextField_1 = require("../TextField");
const IconButton_1 = require("../IconButton");
const Icons_1 = require("../Icons");
function FloatingLinkEditor() {
    console.log('come here...');
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    const editorRef = (0, react_1.useRef)(null);
    const inputRef = (0, react_1.useRef)(null);
    const mouseDownRef = (0, react_1.useRef)(false);
    const [linkUrl, setLinkUrl] = (0, react_1.useState)('');
    const [isEditMode, setEditMode] = (0, react_1.useState)(false);
    const [lastSelection, setLastSelection] = (0, react_1.useState)(null);
    const updateLinkEditor = (0, react_1.useCallback)(() => {
        const selection = (0, lexical_1.$getSelection)();
        if ((0, lexical_1.$isRangeSelection)(selection)) {
            const node = (0, utils_2.getSelectedNode)(selection);
            const parent = node.getParent();
            console.log(`test`, node, parent);
            if ((0, link_1.$isLinkNode)(parent)) {
                setLinkUrl(parent.getURL());
            }
            else if ((0, link_1.$isLinkNode)(node)) {
                setLinkUrl(node.getURL());
            }
            else {
                setLinkUrl('');
            }
        }
        const editorElem = editorRef.current;
        const nativeSelection = window.getSelection();
        const activeElement = document.activeElement;
        if (editorElem === null) {
            return;
        }
        const rootElement = editor.getRootElement();
        if (selection !== null && nativeSelection !== null && !(nativeSelection === null || nativeSelection === void 0 ? void 0 : nativeSelection.isCollapsed) && rootElement !== null && rootElement.contains(nativeSelection.anchorNode)) {
            const domRange = nativeSelection === null || nativeSelection === void 0 ? void 0 : nativeSelection.getRangeAt(0);
            let rect;
            if ((nativeSelection === null || nativeSelection === void 0 ? void 0 : nativeSelection.anchorNode) === rootElement) {
                let inner = rootElement;
                while (inner.firstElementChild != null) {
                    inner = inner.firstElementChild;
                }
                rect = inner.getBoundingClientRect();
            }
            else {
                if (domRange) {
                    rect = domRange.getBoundingClientRect();
                }
            }
            if (!mouseDownRef.current) {
                (0, utils_2.positionEditorElement)(editorElem, rect);
            }
            setLastSelection(selection);
        }
        else if (!activeElement || activeElement.className !== 'link-input') {
            (0, utils_2.positionEditorElement)(editorElem, null);
            setLastSelection(null);
            setEditMode(false);
            setLinkUrl('');
        }
        return true;
    }, [editor]);
    (0, react_1.useEffect)(() => {
        return (0, utils_1.mergeRegister)(editor.registerUpdateListener(({ editorState }) => {
            editorState.read(() => {
                updateLinkEditor();
            });
        }), editor.registerCommand(lexical_1.SELECTION_CHANGE_COMMAND, () => {
            updateLinkEditor();
            return true;
        }, constants_1.LOW_PRIORITY));
    }, [editor, updateLinkEditor]);
    (0, react_1.useEffect)(() => {
        editor.getEditorState().read(() => {
            updateLinkEditor();
        });
    }, [editor, updateLinkEditor]);
    (0, react_1.useEffect)(() => {
        var _a;
        if (isEditMode && (inputRef === null || inputRef === void 0 ? void 0 : inputRef.current)) {
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [isEditMode]);
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ ref: editorRef, className: "link-editor" }, { children: isEditMode ? ((0, jsx_runtime_1.jsx)(TextField_1.TextField, { label: "", ref: inputRef, className: "link-input", value: linkUrl, onChange: (event) => {
                setLinkUrl(event.target.value);
            }, onKeyDown: (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    if (lastSelection !== null) {
                        if (linkUrl !== '') {
                            editor.dispatchCommand(link_1.TOGGLE_LINK_COMMAND, linkUrl);
                        }
                        setEditMode(false);
                    }
                }
                else if (event.key === 'Escape') {
                    event.preventDefault();
                    setEditMode(false);
                }
            } })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ className: "link-input" }, { children: [(0, jsx_runtime_1.jsx)("a", Object.assign({ href: linkUrl, target: "_blank", rel: "noopener noreferrer" }, { children: linkUrl })), (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onMouseDown: (event) => event.preventDefault(), onClick: () => {
                            setEditMode(true);
                        } }, { children: (0, jsx_runtime_1.jsx)(Icons_1.EditIcon, {}) }))] })) })) })));
}
exports.FloatingLinkEditor = FloatingLinkEditor;
//# sourceMappingURL=FloatingLinkEditor.js.map