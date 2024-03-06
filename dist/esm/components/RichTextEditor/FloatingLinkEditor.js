import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState, useCallback, useEffect } from 'react';
import { $getSelection, $isRangeSelection, SELECTION_CHANGE_COMMAND } from 'lexical';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { mergeRegister } from '@lexical/utils';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import './RichText.css';
import { getSelectedNode, positionEditorElement } from './utils';
import { LOW_PRIORITY } from './constants';
import { Box } from '../Box';
import { TextField } from '../TextField';
import { IconButton } from '@mui/material';
import { EditIcon } from '../Icons';
export function FloatingLinkEditor() {
    const [editor] = useLexicalComposerContext();
    const editorRef = useRef(null);
    const inputRef = useRef(null);
    const mouseDownRef = useRef(false);
    const [linkUrl, setLinkUrl] = useState('');
    const [isEditMode, setEditMode] = useState(false);
    const [lastSelection, setLastSelection] = useState(null);
    const updateLinkEditor = useCallback(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            const node = getSelectedNode(selection);
            const parent = node.getParent();
            if ($isLinkNode(parent)) {
                setLinkUrl(parent.getURL());
            }
            else if ($isLinkNode(node)) {
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
                positionEditorElement(editorElem, rect);
            }
            setLastSelection(selection);
        }
        else if (!activeElement || activeElement.className !== 'link-input') {
            positionEditorElement(editorElem, null);
            setLastSelection(null);
            setEditMode(false);
            setLinkUrl('');
        }
        return true;
    }, [editor]);
    useEffect(() => {
        return mergeRegister(editor.registerUpdateListener(({ editorState }) => {
            editorState.read(() => {
                updateLinkEditor();
            });
        }), editor.registerCommand(SELECTION_CHANGE_COMMAND, () => {
            updateLinkEditor();
            return true;
        }, LOW_PRIORITY));
    }, [editor, updateLinkEditor]);
    useEffect(() => {
        editor.getEditorState().read(() => {
            updateLinkEditor();
        });
    }, [editor, updateLinkEditor]);
    useEffect(() => {
        var _a;
        if (isEditMode && (inputRef === null || inputRef === void 0 ? void 0 : inputRef.current)) {
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [isEditMode]);
    return (_jsx(Box, Object.assign({ ref: editorRef, className: "link-editor" }, { children: isEditMode ? (_jsx(TextField, { label: "", ref: inputRef, className: "link-input", value: linkUrl, onChange: (event) => {
                setLinkUrl(event.target.value);
            }, onKeyDown: (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    if (lastSelection !== null) {
                        if (linkUrl !== '') {
                            editor.dispatchCommand(TOGGLE_LINK_COMMAND, linkUrl);
                        }
                        setEditMode(false);
                    }
                }
                else if (event.key === 'Escape') {
                    event.preventDefault();
                    setEditMode(false);
                }
            } })) : (_jsx(_Fragment, { children: _jsxs(Box, Object.assign({ className: "link-input" }, { children: [_jsx("a", Object.assign({ href: linkUrl, target: "_blank", rel: "noopener noreferrer" }, { children: linkUrl })), _jsx(IconButton, Object.assign({ onMouseDown: (event) => event.preventDefault(), onClick: () => {
                            setEditMode(true);
                        } }, { children: _jsx(EditIcon, {}) }))] })) })) })));
}
//# sourceMappingURL=FloatingLinkEditor.js.map