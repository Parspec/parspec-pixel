import { RangeSelection } from 'lexical';
export declare function validateURL(url: string): boolean;
export declare function getSelectedNode(selection: RangeSelection): import("lexical").ElementNode | import("lexical").TextNode;
export declare function positionEditorElement(editor: any, rect: any): void;
export declare function dropDownActiveClass(active: boolean): "" | "active dropdown-item-active";
