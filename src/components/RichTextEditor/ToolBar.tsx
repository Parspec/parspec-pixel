import { useRef, useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { $getRoot, $getSelection, $createTextNode, $isRangeSelection, FORMAT_TEXT_COMMAND, TextFormatType, TextNode, SELECTION_CHANGE_COMMAND } from 'lexical';
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
import { getSelectedNode, LOW_PRIORITY } from './utils';
import FontSize from './FontSize';
import DropdownColorPicker from './DropDownColorPicker';
import { ColorResult } from '../ColorPicker';

const DEFAULT_TEXT = 'Hello World';

type HeadingType = 'h1' | 'h2' | 'h3';
const HEADING_TAGS: HeadingType[] = ['h1', 'h2', 'h3'];
const TEXT_FORMATS: TextFormatType[] = ['bold', 'italic', 'underline'];
type ListType = 'ol' | 'ul';
const ListTags: ListType[] = ['ol', 'ul'];

const TextToolbarPlugin = (): JSX.Element => {
    const [editor] = useLexicalComposerContext();

    const onClick = (tag: TextFormatType) => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, tag);
    };

    return (
        <>
            {TEXT_FORMATS.map((tag) => {
                return (
                    <IconButton key={tag} onClick={() => onClick(tag)}>
                        {tag === 'bold' && <FormatBoldIcon color="secondary" />}
                        {tag === 'italic' && <FormatItalicIcon color="secondary" />}
                        {tag === 'underline' && <FormatUnderlinedIcon color="secondary" />}
                    </IconButton>
                );
            })}
        </>
    );
};

const HeadingToolbarPlugin = (): JSX.Element => {
    const [editor] = useLexicalComposerContext();

    const onClick = (tag: HeadingType): void => {
        editor.update(() => {
            const selection = $getSelection();
            const textContent = selection?.getTextContent();
            if (textContent?.length && $isRangeSelection(selection)) {
                $setBlocksType(selection, () => $createHeadingNode(tag));
            } else {
                const root = $getRoot();
                root.append($createHeadingNode(tag).append($createTextNode(DEFAULT_TEXT)));
            }
        });
    };

    return (
        <>
            {HEADING_TAGS.map((tag) => {
                return (
                    <IconButton key={tag} onClick={() => onClick(tag)}>
                        {tag.toUpperCase()}
                    </IconButton>
                );
            })}
        </>
    );
};

const ListToolbarPlugin = (): JSX.Element => {
    const [editor] = useLexicalComposerContext();
    const onClick = (tag: ListType) => {
        if (tag === 'ol') {
            editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
        } else if (tag === 'ul') {
            editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
        }
    };

    return (
        <>
            {ListTags.map((tag) => {
                return (
                    <IconButton key={tag} onClick={() => onClick(tag)}>
                        {tag === 'ol' && <FormatListNumberedIcon color="secondary" />}
                        {tag === 'ul' && <FormatListBulletedIcon color="secondary" />}
                    </IconButton>
                );
            })}
        </>
    );
};

interface IAttachmentsToobarPlugin extends Pick<IToolbar, 'onFileUpload'> {}
const AttachmentsToobarPlugin = ({ onFileUpload }: IAttachmentsToobarPlugin): JSX.Element => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            onFileUpload?.(e.target.files);
        }
    };

    const handleAttachmentClick = () => {
        if (fileInputRef?.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <>
            <input multiple type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} accept="image/*,.pdf" />
            <IconButton onClick={handleAttachmentClick}>
                <AttachFileIcon color="secondary" />
            </IconButton>
        </>
    );
};

interface IToolbar {
    onFileUpload?: (params: FileList | null) => void;
}
export default function ToolBar({ onFileUpload }: IToolbar): JSX.Element {
    const [editor] = useLexicalComposerContext();
    const [isLink, setIsLink] = useState(false);
    const [fontSize, setFontSize] = useState<string>('15px');
    const [fontColor, setFontColor] = useState<string>('#000');
    const [fontFamily, setFontFamily] = useState<string>('Arial');
    const [isEditable, setIsEditable] = useState(() => editor.isEditable());
    const [colorDropdown, setColorDropdown] = useState(false);

    const updateToolbar = useCallback(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
            // Update links
            const node = getSelectedNode(selection);
            const parent = node.getParent();
            if ($isLinkNode(parent) || $isLinkNode(node)) {
                setIsLink(true);
            } else {
                setIsLink(false);
            }

            setFontSize($getSelectionStyleValueForProperty(selection, 'font-size', '15px'));
            setFontColor($getSelectionStyleValueForProperty(selection, 'color', '#000'));
            setFontFamily($getSelectionStyleValueForProperty(selection, 'font-family', 'Arial'));
        }
    }, [editor]);

    useEffect(() => {
        return mergeRegister(
            editor.registerEditableListener((editable) => {
                setIsEditable(editable);
            }),
            editor.registerUpdateListener(({ editorState }) => {
                editorState.read(() => {
                    updateToolbar();
                });
            }),
            editor.registerCommand(
                SELECTION_CHANGE_COMMAND,
                (_payload, newEditor) => {
                    updateToolbar();
                    return false;
                },
                LOW_PRIORITY
            )
        );
    }, [editor, updateToolbar]);

    const insertLink = useCallback(() => {
        if (!isLink) {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, 'https://');
        } else {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
        }
    }, [editor, isLink]);

    const destinationNode = document.getElementById('custom-rich-text-editor');

    const applyStyleText = useCallback(
        (styles: Record<string, string>, skipHistoryStack?: boolean) => {
            editor.update(
                () => {
                    const selection = $getSelection();
                    if (selection !== null) {
                        $patchStyleText(selection, styles);
                    }
                },
                skipHistoryStack ? { tag: 'historic' } : {}
            );
        },
        [editor]
    );

    const onFontColorSelect = useCallback(
        (value: ColorResult) => {
            applyStyleText({ color: value.hex }, false);
        },
        [applyStyleText]
    );

    return (
        <Box display="flex" justifyContent="center" alignItems="center" padding={2} gap={1} flexWrap="wrap">
            <HeadingToolbarPlugin />
            <ListToolbarPlugin />
            <TextToolbarPlugin />
            <FontSize selectionFontSize={fontSize.slice(0, -2)} editor={editor} disabled={!isEditable} />
            <IconButton onClick={insertLink}>
                <LinkIcon color="secondary" />
            </IconButton>
            {isLink && destinationNode && createPortal(<FloatingLinkEditor />, destinationNode)}
            <AttachmentsToobarPlugin onFileUpload={onFileUpload} />
            <DropdownColorPicker onClick={() => setColorDropdown((prev) => !prev)} color={fontColor} onChange={onFontColorSelect} />
        </Box>
    );
}

export const registeredNodes = [HeadingNode, ListNode, ListItemNode, LinkNode, AutoLinkNode, TextNode];
