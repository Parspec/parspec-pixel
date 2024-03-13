/// <reference types="react" />
import { TextNode } from 'lexical';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListNode, ListItemNode } from '@lexical/list';
import { LinkNode } from '@lexical/link';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { IRichTextEditorProps } from './types';
export default function ToolBar({ onFileUpload, isDisableEditorState, showAttachements, showShareableLinkButton, shareableLinkTitle, shareableLinkUrl }: Partial<IRichTextEditorProps>): JSX.Element;
export declare const registeredNodes: (typeof TextNode | typeof LinkNode | typeof QuoteNode | typeof HeadingNode | typeof ListItemNode | typeof ListNode | typeof CodeHighlightNode | typeof CodeNode | typeof TableCellNode | typeof TableNode | typeof TableRowNode)[];
