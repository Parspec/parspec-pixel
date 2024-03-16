import { useRef, useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { $getRoot, $getSelection, $createTextNode, $isRangeSelection, FORMAT_TEXT_COMMAND, TextFormatType, TextNode, SELECTION_CHANGE_COMMAND, $createParagraphNode, LexicalEditor } from 'lexical';
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
import { ColorResult } from '../ColorPicker';
import { BodySmall } from '../Typography';
import InsertShareableLinkPlugin from './InsertShareableLinkPlugin';
import { IRichTextEditorProps } from './types';

const DEFAULT_TEXT = 'Hello World';

type HeadingType = 'h1' | 'h2' | 'h3';
const HEADING_TAGS: HeadingType[] = ['h1', 'h2', 'h3'];

const TextStyleToolbarPlugin = ({ isBold, isItalic, isUnderline }: { isBold: boolean; isItalic: boolean; isUnderline: boolean }): JSX.Element => {
    const [editor] = useLexicalComposerContext();

    const onClick = (tag: TextFormatType) => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, tag);
    };

    return (
        <>
            <IconButton sx={{ background: isBold ? 'rgba(223, 232, 250, 0.3)' : null }} onClick={() => onClick('bold')}>
                <FormatBoldIcon color="secondary" />
            </IconButton>

            <IconButton sx={{ background: isItalic ? 'rgba(223, 232, 250, 0.3)' : null }} onClick={() => onClick('italic')}>
                <FormatItalicIcon color="secondary" />
            </IconButton>

            <IconButton sx={{ background: isUnderline ? 'rgba(223, 232, 250, 0.3)' : null }} onClick={() => onClick('underline')}>
                <FormatUnderlinedIcon color="secondary" />
            </IconButton>
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
                        <BodySmall fontWeight={800}>{tag.toUpperCase()}</BodySmall>
                    </IconButton>
                );
            })}
        </>
    );
};

const formatParagraph = (editor: LexicalEditor) => {
    editor.update(() => {
        const selection = $getSelection();
        $setBlocksType(selection, () => $createParagraphNode());
    });
};

const ListToolbarPlugin = (): JSX.Element => {
    const [editor] = useLexicalComposerContext();
    const [bulletListCount, setBulletListCount] = useState(0);
    const [orderedListCount, setOrderedListCount] = useState(0);

    function formatNumberedList() {
        if (orderedListCount === 0) {
            editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
            setOrderedListCount(1);
        } else {
            formatParagraph(editor);
            setOrderedListCount(0);
        }
    }

    function formatUnOrderedList() {
        if (bulletListCount === 0) {
            editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
            setBulletListCount(1);
        } else {
            formatParagraph(editor);
            setBulletListCount(0);
        }
    }

    return (
        <>
            <IconButton onClick={formatNumberedList}>
                <FormatListNumberedIcon color="secondary" />
            </IconButton>

            <IconButton onClick={formatUnOrderedList}>
                <FormatListBulletedIcon color="secondary" />
            </IconButton>
        </>
    );
};

interface IAttachmentsToobarPlugin extends Pick<IRichTextEditorProps, 'onFileUpload'> {}
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

export default function ToolBar({
    onFileUpload,
    isDisableEditorState,
    showAttachements,
    showShareableLinkButton,
    shareableLinkTitle = '',
    shareableLinkUrl = '#'
}: Partial<IRichTextEditorProps>): JSX.Element {
    const [editor] = useLexicalComposerContext();
    const [isLink, setIsLink] = useState(false);
    const [fontSize, setFontSize] = useState<string>('15px');
    const [fontColor, setFontColor] = useState<string>('#000');
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
            } else {
                setIsLink(false);
            }

            setFontSize($getSelectionStyleValueForProperty(selection, 'font-size', '15px'));
            setFontColor($getSelectionStyleValueForProperty(selection, 'color', '#000'));
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
            applyStyleText({ color: value.hex }, true);
        },
        [applyStyleText]
    );

    return (
        <Box sx={isDisableEditorState ? { opacity: '0.4', pointerEvents: 'none' } : null} display={'flex'} justifyContent="space-between" alignItems="center" paddingTop={2} paddingBottom={2}>
            <Box width={1} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} gap={1}>
                <HeadingToolbarPlugin />
                <FontSize selectionFontSize={fontSize.slice(0, -2)} editor={editor} disabled={!isEditable} />
                <DropdownColorPicker color={fontColor} onChange={onFontColorSelect} />
                <TextStyleToolbarPlugin isBold={isBold} isItalic={isItalic} isUnderline={isUnderline} />
                <ListToolbarPlugin />
            </Box>

            <Box width={1} display={'flex'} alignItems={'center'} justifyContent="flex-end" gap={1}>
                <IconButton onClick={insertLink}>
                    <LinkIcon color="secondary" />
                </IconButton>
                {isLink && createPortal(<FloatingLinkEditor />, document.body)}
                {showAttachements && <AttachmentsToobarPlugin onFileUpload={onFileUpload} />}
                {showShareableLinkButton && <InsertShareableLinkPlugin href={shareableLinkUrl} title={shareableLinkTitle} />}
            </Box>
        </Box>
    );
}

export const registeredNodes = [
    HeadingNode,
    ListNode,
    ListItemNode,
    LinkNode,
    AutoLinkNode,
    ExtendedTextNode,
    { replace: TextNode, with: (node: TextNode) => new ExtendedTextNode(node.__text) },
    QuoteNode,
    CodeNode,
    TableCellNode,
    CodeHighlightNode,
    TableRowNode,
    TableNode
];
