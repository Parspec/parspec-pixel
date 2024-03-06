/// <reference types="react" />
import { TextNode } from 'lexical';
import { HeadingNode } from '@lexical/rich-text';
import { ListNode, ListItemNode } from '@lexical/list';
import { LinkNode } from '@lexical/link';
interface IToolbar {
    onFileUpload?: (params: FileList | null) => void;
}
export default function ToolBar({ onFileUpload }: IToolbar): JSX.Element;
export declare const registeredNodes: (typeof TextNode | typeof LinkNode | typeof HeadingNode | typeof ListItemNode | typeof ListNode)[];
export {};
