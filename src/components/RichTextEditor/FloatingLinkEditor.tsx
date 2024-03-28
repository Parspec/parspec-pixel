import { useRef, useState, useCallback, useEffect } from 'react';

import { $getSelection, $isRangeSelection, BaseSelection, SELECTION_CHANGE_COMMAND } from 'lexical';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { mergeRegister } from '@lexical/utils';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

import './RichText.css';
import { getSelectedNode, positionEditorElement } from './utils';
import { LOW_PRIORITY } from './constants';
import { Box } from '../Box';
import { TextField } from '../TextField';
import { IconButton } from '../IconButton';
import { EditIcon } from '../Icons';

export function FloatingLinkEditor() {
    const [editor] = useLexicalComposerContext();
    const editorRef = useRef(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const mouseDownRef = useRef(false);
    const [linkUrl, setLinkUrl] = useState('');
    const [isEditMode, setEditMode] = useState(false);
    const [lastSelection, setLastSelection] = useState<BaseSelection | null>(null);

    const updateLinkEditor = useCallback(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            const node = getSelectedNode(selection);
            const parent = node.getParent();
            if ($isLinkNode(parent)) {
                setLinkUrl(parent.getURL());
            } else if ($isLinkNode(node)) {
                setLinkUrl(node.getURL());
            } else {
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
        if (selection !== null && nativeSelection !== null && !nativeSelection?.isCollapsed && rootElement !== null && rootElement.contains(nativeSelection.anchorNode)) {
            const domRange = nativeSelection?.getRangeAt(0);
            let rect;
            if (nativeSelection?.anchorNode === rootElement) {
                let inner: Element = rootElement;
                while (inner.firstElementChild != null) {
                    inner = inner.firstElementChild;
                }
                rect = inner.getBoundingClientRect();
            } else {
                if (domRange) {
                    rect = domRange.getBoundingClientRect();
                }
            }

            if (!mouseDownRef.current) {
                positionEditorElement(editorElem, rect);
            }
            setLastSelection(selection);
        } else if (!activeElement || activeElement.className !== 'link-input') {
            positionEditorElement(editorElem, null);
            setLastSelection(null);
            setEditMode(false);
            setLinkUrl('');
        }

        return true;
    }, [editor]);

    useEffect(() => {
        return mergeRegister(
            editor.registerUpdateListener(({ editorState }) => {
                editorState.read(() => {
                    updateLinkEditor();
                });
            }),

            editor.registerCommand(
                SELECTION_CHANGE_COMMAND,
                () => {
                    updateLinkEditor();
                    return true;
                },
                LOW_PRIORITY
            )
        );
    }, [editor, updateLinkEditor]);

    useEffect(() => {
        editor.getEditorState().read(() => {
            updateLinkEditor();
        });
    }, [editor, updateLinkEditor]);

    useEffect(() => {
        if (isEditMode && inputRef?.current) {
            inputRef.current?.focus();
        }
    }, [isEditMode]);

    return (
        <Box ref={editorRef} className="link-editor">
            {isEditMode ? (
                <TextField
                    label=""
                    ref={inputRef}
                    className="link-input"
                    value={linkUrl}
                    onChange={(event) => {
                        setLinkUrl(event.target.value);
                    }}
                    onBlur={(event) => {
                        event.preventDefault();
                        if (linkUrl !== '') {
                            editor.dispatchCommand(TOGGLE_LINK_COMMAND, linkUrl);
                        }
                        setEditMode(false);
                    }}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            event.preventDefault();
                            if (lastSelection !== null) {
                                if (linkUrl !== '') {
                                    editor.dispatchCommand(TOGGLE_LINK_COMMAND, linkUrl);
                                }
                                setEditMode(false);
                            }
                        } else if (event.key === 'Escape') {
                            event.preventDefault();
                            setEditMode(false);
                        }
                    }}
                />
            ) : (
                <>
                    <Box className="link-input">
                        <Box overflow="hidden" textOverflow={'ellipsis'} whiteSpace={'nowrap'}>
                            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                                {linkUrl}
                            </a>
                        </Box>
                        <IconButton
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={() => {
                                setEditMode(true);
                            }}
                        >
                            <EditIcon />
                        </IconButton>
                    </Box>
                </>
            )}
        </Box>
    );
}
