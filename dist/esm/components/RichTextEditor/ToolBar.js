import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { $getRoot, $getSelection, $createTextNode, $isRangeSelection, FORMAT_TEXT_COMMAND, TextNode, SELECTION_CHANGE_COMMAND } from 'lexical';
import { mergeRegister } from '@lexical/utils';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { HeadingNode, $createHeadingNode } from '@lexical/rich-text';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { $setBlocksType } from '@lexical/selection';
import { INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND, ListNode, ListItemNode } from '@lexical/list';
import { LinkNode, AutoLinkNode } from '@lexical/link';
import { $getSelectionStyleValueForProperty, $patchStyleText } from '@lexical/selection';
import { Box } from '../Box';
import { LinkIcon, AttachFileIcon, FormatBoldIcon, FormatItalicIcon, FormatListBulletedIcon, FormatListNumberedIcon, FormatUnderlinedIcon } from '../Icons';
import { IconButton } from '../IconButton';
import { FloatingLinkEditor } from './FloatingLinkEditor';
import { getSelectedNode } from './utils';
import { LOW_PRIORITY } from './constants';
import FontSize from './FontSize';
import DropdownColorPicker from './DropDownColorPicker';
const DEFAULT_TEXT = 'Hello World';
const HEADING_TAGS = ['h1', 'h2', 'h3'];
const TEXT_FORMATS = ['bold', 'italic', 'underline'];
const ListTags = ['ol', 'ul'];
const TextToolbarPlugin = () => {
    const [editor] = useLexicalComposerContext();
    const onClick = (tag) => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, tag);
    };
    return (_jsx(_Fragment, { children: TEXT_FORMATS.map((tag) => {
            return (_jsxs(IconButton, Object.assign({ onClick: () => onClick(tag) }, { children: [tag === 'bold' && _jsx(FormatBoldIcon, { color: "secondary" }), tag === 'italic' && _jsx(FormatItalicIcon, { color: "secondary" }), tag === 'underline' && _jsx(FormatUnderlinedIcon, { color: "secondary" })] }), tag));
        }) }));
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
            return (_jsx(IconButton, Object.assign({ onClick: () => onClick(tag) }, { children: tag.toUpperCase() }), tag));
        }) }));
};
const ListToolbarPlugin = () => {
    const [editor] = useLexicalComposerContext();
    const onClick = (tag) => {
        if (tag === 'ol') {
            editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
        }
        else if (tag === 'ul') {
            editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
        }
    };
    return (_jsx(_Fragment, { children: ListTags.map((tag) => {
            return (_jsxs(IconButton, Object.assign({ onClick: () => onClick(tag) }, { children: [tag === 'ol' && _jsx(FormatListNumberedIcon, { color: "secondary" }), tag === 'ul' && _jsx(FormatListBulletedIcon, { color: "secondary" })] }), tag));
        }) }));
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
export default function ToolBar({ onFileUpload }) {
    const [editor] = useLexicalComposerContext();
    const [isLink, setIsLink] = useState(false);
    const [fontSize, setFontSize] = useState('15px');
    const [fontColor, setFontColor] = useState('#000');
    const [isEditable, setIsEditable] = useState(() => editor.isEditable());
    const updateToolbar = useCallback(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
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
    const destinationNode = document.getElementById('custom-rich-text-editor');
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
    return (_jsxs(Box, Object.assign({ display: "flex", justifyContent: "center", alignItems: "center", padding: 2, gap: 1, flexWrap: "wrap" }, { children: [_jsx(HeadingToolbarPlugin, {}), _jsx(ListToolbarPlugin, {}), _jsx(TextToolbarPlugin, {}), _jsx(FontSize, { selectionFontSize: fontSize.slice(0, -2), editor: editor, disabled: !isEditable }), _jsx(IconButton, Object.assign({ onClick: insertLink }, { children: _jsx(LinkIcon, { color: "secondary" }) })), isLink && destinationNode && createPortal(_jsx(FloatingLinkEditor, {}), destinationNode), _jsx(AttachmentsToobarPlugin, { onFileUpload: onFileUpload }), _jsx(DropdownColorPicker, { color: fontColor, onChange: onFontColorSelect })] })));
}
export const registeredNodes = [HeadingNode, ListNode, ListItemNode, LinkNode, AutoLinkNode, TextNode];
//# sourceMappingURL=ToolBar.js.map