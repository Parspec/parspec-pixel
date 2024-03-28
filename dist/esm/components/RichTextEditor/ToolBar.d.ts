/// <reference types="react" />
import { TextNode } from 'lexical';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListNode, ListItemNode } from '@lexical/list';
import { LinkNode } from '@lexical/link';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ExtendedTextNode } from './ExtentedTextNode';
import { IRichTextEditorProps } from './types';
export declare function ToolBar({ onFileUpload, isDisable, showAttachements, showShareableLinkButton, shareableLinkTitle, shareableLinkUrl, showFontFamiliy }: Partial<IRichTextEditorProps>): JSX.Element;
export declare const registeredNodes: (typeof LinkNode | typeof QuoteNode | typeof HeadingNode | typeof ListItemNode | typeof ListNode | typeof CodeHighlightNode | typeof CodeNode | typeof TableCellNode | typeof TableNode | typeof TableRowNode | typeof ExtendedTextNode | {
    replace: typeof TextNode;
    with: (node: TextNode) => ExtendedTextNode;
})[];
