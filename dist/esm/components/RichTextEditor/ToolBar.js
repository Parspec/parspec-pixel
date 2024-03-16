import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { $getRoot, $getSelection, $createTextNode, $isRangeSelection, FORMAT_TEXT_COMMAND, TextNode, SELECTION_CHANGE_COMMAND, $createParagraphNode } from 'lexical';
import { mergeRegister } from '@lexical/utils';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { HeadingNode, $createHeadingNode, QuoteNode } from '@lexical/rich-text';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { $setBlocksType } from '@lexical/selection';
import { INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND, ListNode, ListItemNode } from '@lexical/list';
import { LinkNode, AutoLinkNode } from '@lexical/link';
import { $getSelectionStyleValueForProperty, $patchStyleText } from '@lexical/selection';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ExtendedTextNode } from './ExtentedTextNode';
import { Box } from '../Box';
import { LinkIcon, AttachFileIcon, FormatBoldIcon, FormatItalicIcon, FormatListBulletedIcon, FormatListNumberedIcon, FormatUnderlinedIcon } from '../Icons';
import { IconButton } from '../IconButton';
import { FloatingLinkEditor } from './FloatingLinkEditor';
import { getSelectedNode } from './utils';
import { LOW_PRIORITY } from './constants';
import FontSize from './FontSize';
import DropdownColorPicker from './DropDownColorPicker';
import { BodySmall } from '../Typography';
import InsertShareableLinkPlugin from './InsertShareableLinkPlugin';
const DEFAULT_TEXT = 'Hello World';
const HEADING_TAGS = ['h1', 'h2', 'h3'];
const TextStyleToolbarPlugin = ({ isBold, isItalic, isUnderline }) => {
    const [editor] = useLexicalComposerContext();
    const onClick = (tag) => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, tag);
    };
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, Object.assign({ sx: { background: isBold ? 'rgba(223, 232, 250, 0.3)' : null }, onClick: () => onClick('bold') }, { children: _jsx(FormatBoldIcon, { color: "secondary" }) })), _jsx(IconButton, Object.assign({ sx: { background: isItalic ? 'rgba(223, 232, 250, 0.3)' : null }, onClick: () => onClick('italic') }, { children: _jsx(FormatItalicIcon, { color: "secondary" }) })), _jsx(IconButton, Object.assign({ sx: { background: isUnderline ? 'rgba(223, 232, 250, 0.3)' : null }, onClick: () => onClick('underline') }, { children: _jsx(FormatUnderlinedIcon, { color: "secondary" }) }))] }));
};
const HeadingToolbarPlugin = () => {
    const [editor] = useLexicalComposerContext();
    const onClick = (tag) => {
        editor.update(() => {
            const selection = $getSelection();
            const textContent = selection === null || selection === void 0 ? void 0 : selection.getTextContent();
            if ((textContent === null || textContent === void 0 ? void 0 : textContent.length) && $isRangeSelection(selection)) {
                $setBlocksType(selection, () => $createHeadingNode(tag));
            }
            else {
                const root = $getRoot();
                root.append($createHeadingNode(tag).append($createTextNode(DEFAULT_TEXT)));
            }
        });
    };
    return (_jsx(_Fragment, { children: HEADING_TAGS.map((tag) => {
            return (_jsx(IconButton, Object.assign({ onClick: () => onClick(tag) }, { children: _jsx(BodySmall, Object.assign({ fontWeight: 800 }, { children: tag.toUpperCase() })) }), tag));
        }) }));
};
const formatParagraph = (editor) => {
    editor.update(() => {
        const selection = $getSelection();
        $setBlocksType(selection, () => $createParagraphNode());
    });
};
const ListToolbarPlugin = () => {
    const [editor] = useLexicalComposerContext();
    const [bulletListCount, setBulletListCount] = useState(0);
    const [orderedListCount, setOrderedListCount] = useState(0);
    function formatNumberedList() {
        if (orderedListCount === 0) {
            editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
            setOrderedListCount(1);
        }
        else {
            formatParagraph(editor);
            setOrderedListCount(0);
        }
    }
    function formatUnOrderedList() {
        if (bulletListCount === 0) {
            editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
            setBulletListCount(1);
        }
        else {
            formatParagraph(editor);
            setBulletListCount(0);
        }
    }
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, Object.assign({ onClick: formatNumberedList }, { children: _jsx(FormatListNumberedIcon, { color: "secondary" }) })), _jsx(IconButton, Object.assign({ onClick: formatUnOrderedList }, { children: _jsx(FormatListBulletedIcon, { color: "secondary" }) }))] }));
};
const AttachmentsToobarPlugin = ({ onFileUpload }) => {
    const fileInputRef = useRef(null);
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
    return (_jsxs(_Fragment, { children: [_jsx("input", { multiple: true, type: "file", ref: fileInputRef, onChange: handleFileChange, style: { display: 'none' }, accept: "image/*,.pdf" }), _jsx(IconButton, Object.assign({ onClick: handleAttachmentClick }, { children: _jsx(AttachFileIcon, { color: "secondary" }) }))] }));
};
export default function ToolBar({ onFileUpload, isDisableEditorState, showAttachements, showShareableLinkButton, shareableLinkTitle = '', shareableLinkUrl = '#' }) {
    const [editor] = useLexicalComposerContext();
    const [isLink, setIsLink] = useState(false);
    const [fontSize, setFontSize] = useState('15px');
    const [fontColor, setFontColor] = useState('#000');
    const [isEditable, setIsEditable] = useState(() => editor.isEditable());
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const updateToolbar = useCallback(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            // update text format
            setIsBold(selection.hasFormat('bold'));
            setIsItalic(selection.hasFormat('italic'));
            setIsUnderline(selection.hasFormat('underline'));
            // Update links
            const node = getSelectedNode(selection);
            const parent = node.getParent();
            if ($isLinkNode(parent) || $isLinkNode(node)) {
                setIsLink(true);
            }
            else {
                setIsLink(false);
            }
            setFontSize($getSelectionStyleValueForProperty(selection, 'font-size', '15px'));
            setFontColor($getSelectionStyleValueForProperty(selection, 'color', '#000'));
        }
    }, [editor]);
    useEffect(() => {
        return mergeRegister(editor.registerEditableListener((editable) => {
            setIsEditable(editable);
        }), editor.registerUpdateListener(({ editorState }) => {
            editorState.read(() => {
                updateToolbar();
            });
        }), editor.registerCommand(SELECTION_CHANGE_COMMAND, (_payload, newEditor) => {
            updateToolbar();
            return false;
        }, LOW_PRIORITY));
    }, [editor, updateToolbar]);
    const insertLink = useCallback(() => {
        if (!isLink) {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, 'https://');
        }
        else {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
        }
    }, [editor, isLink]);
    const applyStyleText = useCallback((styles, skipHistoryStack) => {
        editor.update(() => {
            const selection = $getSelection();
            if (selection !== null) {
                $patchStyleText(selection, styles);
            }
        }, skipHistoryStack ? { tag: 'historic' } : {});
    }, [editor]);
    const onFontColorSelect = useCallback((value) => {
        applyStyleText({ color: value.hex }, false);
    }, [applyStyleText]);
    return (_jsxs(Box, Object.assign({ sx: isDisableEditorState ? { opacity: '0.4', pointerEvents: 'none' } : null, display: 'flex', justifyContent: "space-between", alignItems: "center", paddingTop: 2, paddingBottom: 2 }, { children: [_jsxs(Box, Object.assign({ width: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 1 }, { children: [_jsx(HeadingToolbarPlugin, {}), _jsx(FontSize, { selectionFontSize: fontSize.slice(0, -2), editor: editor, disabled: !isEditable }), _jsx(DropdownColorPicker, { color: fontColor, onChange: onFontColorSelect }), _jsx(TextStyleToolbarPlugin, { isBold: isBold, isItalic: isItalic, isUnderline: isUnderline }), _jsx(ListToolbarPlugin, {})] })), _jsxs(Box, Object.assign({ width: 1, display: 'flex', alignItems: 'center', justifyContent: "flex-end", gap: 1 }, { children: [_jsx(IconButton, Object.assign({ onClick: insertLink }, { children: _jsx(LinkIcon, { color: "secondary" }) })), isLink && createPortal(_jsx(FloatingLinkEditor, {}), document.body), showAttachements && _jsx(AttachmentsToobarPlugin, { onFileUpload: onFileUpload }), showShareableLinkButton && _jsx(InsertShareableLinkPlugin, { href: shareableLinkUrl, title: shareableLinkTitle })] }))] })));
}
export const registeredNodes = [
    HeadingNode,
    ListNode,
    ListItemNode,
    LinkNode,
    AutoLinkNode,
    ExtendedTextNode,
    { replace: TextNode, with: (node) => new ExtendedTextNode(node.__text) },
    QuoteNode,
    CodeNode,
    TableCellNode,
    CodeHighlightNode,
    TableRowNode,
    TableNode
];
//# sourceMappingURL=ToolBar.js.map