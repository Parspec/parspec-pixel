"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registeredNodes = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const lexical_1 = require("lexical");
const utils_1 = require("@lexical/utils");
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
const rich_text_1 = require("@lexical/rich-text");
const link_1 = require("@lexical/link");
const selection_1 = require("@lexical/selection");
const list_1 = require("@lexical/list");
const link_2 = require("@lexical/link");
const selection_2 = require("@lexical/selection");
const Box_1 = require("../Box");
const Icons_1 = require("../Icons");
const IconButton_1 = require("../IconButton");
const FloatingLinkEditor_1 = require("./FloatingLinkEditor");
const utils_2 = require("./utils");
const constants_1 = require("./constants");
const FontSize_1 = __importDefault(require("./FontSize"));
const DropDownColorPicker_1 = __importDefault(require("./DropDownColorPicker"));
const DEFAULT_TEXT = 'Hello World';
const HEADING_TAGS = ['h1', 'h2', 'h3'];
const TEXT_FORMATS = ['bold', 'italic', 'underline'];
const ListTags = ['ol', 'ul'];
const TextToolbarPlugin = () => {
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    const onClick = (tag) => {
        editor.dispatchCommand(lexical_1.FORMAT_TEXT_COMMAND, tag);
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: TEXT_FORMATS.map((tag) => {
            return ((0, jsx_runtime_1.jsxs)(IconButton_1.IconButton, Object.assign({ onClick: () => onClick(tag) }, { children: [tag === 'bold' && (0, jsx_runtime_1.jsx)(Icons_1.FormatBoldIcon, { color: "secondary" }), tag === 'italic' && (0, jsx_runtime_1.jsx)(Icons_1.FormatItalicIcon, { color: "secondary" }), tag === 'underline' && (0, jsx_runtime_1.jsx)(Icons_1.FormatUnderlinedIcon, { color: "secondary" })] }), tag));
        }) }));
};
const HeadingToolbarPlugin = () => {
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    const onClick = (tag) => {
        editor.update(() => {
            const selection = (0, lexical_1.$getSelection)();
            const textContent = selection === null || selection === void 0 ? void 0 : selection.getTextContent();
            if ((textContent === null || textContent === void 0 ? void 0 : textContent.length) && (0, lexical_1.$isRangeSelection)(selection)) {
                (0, selection_1.$setBlocksType)(selection, () => (0, rich_text_1.$createHeadingNode)(tag));
            }
            else {
                const root = (0, lexical_1.$getRoot)();
                root.append((0, rich_text_1.$createHeadingNode)(tag).append((0, lexical_1.$createTextNode)(DEFAULT_TEXT)));
            }
        });
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: HEADING_TAGS.map((tag) => {
            return ((0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: () => onClick(tag) }, { children: tag.toUpperCase() }), tag));
        }) }));
};
const ListToolbarPlugin = () => {
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    const onClick = (tag) => {
        if (tag === 'ol') {
            editor.dispatchCommand(list_1.INSERT_ORDERED_LIST_COMMAND, undefined);
        }
        else if (tag === 'ul') {
            editor.dispatchCommand(list_1.INSERT_UNORDERED_LIST_COMMAND, undefined);
        }
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: ListTags.map((tag) => {
            return ((0, jsx_runtime_1.jsxs)(IconButton_1.IconButton, Object.assign({ onClick: () => onClick(tag) }, { children: [tag === 'ol' && (0, jsx_runtime_1.jsx)(Icons_1.FormatListNumberedIcon, { color: "secondary" }), tag === 'ul' && (0, jsx_runtime_1.jsx)(Icons_1.FormatListBulletedIcon, { color: "secondary" })] }), tag));
        }) }));
};
const AttachmentsToobarPlugin = ({ onFileUpload }) => {
    const fileInputRef = (0, react_1.useRef)(null);
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            onFileUpload === null || onFileUpload === void 0 ? void 0 : onFileUpload(e.target.files);
        }
    };
    const handleAttachmentClick = () => {
        if (fileInputRef === null || fileInputRef === void 0 ? void 0 : fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { multiple: true, type: "file", ref: fileInputRef, onChange: handleFileChange, style: { display: 'none' }, accept: "image/*,.pdf" }), (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: handleAttachmentClick }, { children: (0, jsx_runtime_1.jsx)(Icons_1.AttachFileIcon, { color: "secondary" }) }))] }));
};
function ToolBar({ onFileUpload }) {
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    const [isLink, setIsLink] = (0, react_1.useState)(false);
    const [fontSize, setFontSize] = (0, react_1.useState)('15px');
    const [fontColor, setFontColor] = (0, react_1.useState)('#000');
    const [isEditable, setIsEditable] = (0, react_1.useState)(() => editor.isEditable());
    const updateToolbar = (0, react_1.useCallback)(() => {
        const selection = (0, lexical_1.$getSelection)();
        if ((0, lexical_1.$isRangeSelection)(selection)) {
            // Update links
            const node = (0, utils_2.getSelectedNode)(selection);
            const parent = node.getParent();
            if ((0, link_1.$isLinkNode)(parent) || (0, link_1.$isLinkNode)(node)) {
                setIsLink(true);
            }
            else {
                setIsLink(false);
            }
            setFontSize((0, selection_2.$getSelectionStyleValueForProperty)(selection, 'font-size', '15px'));
            setFontColor((0, selection_2.$getSelectionStyleValueForProperty)(selection, 'color', '#000'));
        }
    }, [editor]);
    (0, react_1.useEffect)(() => {
        return (0, utils_1.mergeRegister)(editor.registerEditableListener((editable) => {
            setIsEditable(editable);
        }), editor.registerUpdateListener(({ editorState }) => {
            editorState.read(() => {
                updateToolbar();
            });
        }), editor.registerCommand(lexical_1.SELECTION_CHANGE_COMMAND, (_payload, newEditor) => {
            updateToolbar();
            return false;
        }, constants_1.LOW_PRIORITY));
    }, [editor, updateToolbar]);
    const insertLink = (0, react_1.useCallback)(() => {
        if (!isLink) {
            editor.dispatchCommand(link_1.TOGGLE_LINK_COMMAND, 'https://');
        }
        else {
            editor.dispatchCommand(link_1.TOGGLE_LINK_COMMAND, null);
        }
    }, [editor, isLink]);
    const destinationNode = document.getElementById('custom-rich-text-editor');
    const applyStyleText = (0, react_1.useCallback)((styles, skipHistoryStack) => {
        editor.update(() => {
            const selection = (0, lexical_1.$getSelection)();
            if (selection !== null) {
                (0, selection_2.$patchStyleText)(selection, styles);
            }
        }, skipHistoryStack ? { tag: 'historic' } : {});
    }, [editor]);
    const onFontColorSelect = (0, react_1.useCallback)((value) => {
        applyStyleText({ color: value.hex }, false);
    }, [applyStyleText]);
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: "flex", justifyContent: "center", alignItems: "center", padding: 2, gap: 1, flexWrap: "wrap" }, { children: [(0, jsx_runtime_1.jsx)(HeadingToolbarPlugin, {}), (0, jsx_runtime_1.jsx)(ListToolbarPlugin, {}), (0, jsx_runtime_1.jsx)(TextToolbarPlugin, {}), (0, jsx_runtime_1.jsx)(FontSize_1.default, { selectionFontSize: fontSize.slice(0, -2), editor: editor, disabled: !isEditable }), (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: insertLink }, { children: (0, jsx_runtime_1.jsx)(Icons_1.LinkIcon, { color: "secondary" }) })), isLink && destinationNode && (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(FloatingLinkEditor_1.FloatingLinkEditor, {}), destinationNode), (0, jsx_runtime_1.jsx)(AttachmentsToobarPlugin, { onFileUpload: onFileUpload }), (0, jsx_runtime_1.jsx)(DropDownColorPicker_1.default, { color: fontColor, onChange: onFontColorSelect })] })));
}
exports.default = ToolBar;
exports.registeredNodes = [rich_text_1.HeadingNode, list_1.ListNode, list_1.ListItemNode, link_2.LinkNode, link_2.AutoLinkNode, lexical_1.TextNode];
//# sourceMappingURL=ToolBar.js.map