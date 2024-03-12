/// <reference types="react" />
import { TextNode } from 'lexical';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListNode, ListItemNode } from '@lexical/list';
import { LinkNode } from '@lexical/link';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
interface IToolbar {
    onFileUpload?: (params: FileList | null) => void;
}
export default function ToolBar({ onFileUpload }: IToolbar): JSX.Element;
export declare const registeredNodes: (typeof TextNode | typeof LinkNode | typeof QuoteNode | typeof HeadingNode | typeof ListItemNode | typeof ListNode | typeof CodeHighlightNode | typeof CodeNode | typeof TableCellNode | typeof TableNode | typeof TableRowNode)[];
export {};
