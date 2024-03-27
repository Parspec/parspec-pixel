/// <reference types="react" />
export type ToolBarT = 'delete' | 'search' | 'clearFilters' | 'hide' | 'unhide' | 'selectedItems' | 'duplicate' | 'add' | 'createKit' | 'move';
interface ICustomToolBarPanel {
    toolBarPanelOptions: ToolBarT[];
    onTextSearch?: (searchString: string) => void;
    onAdd?: () => void;
    onAddDuplicates?: () => void;
    onDelete?: () => void;
    onHideUnhide?: () => void;
    onCreateKit?: () => void;
    onMove?: () => void;
    onCloseBanner?: () => void;
    selectedRowCount: number;
    disabledToolBarButton: boolean;
    title?: string;
    isToolbarLoading?: boolean;
    toolbarRightSection?: React.ReactNode;
}
export declare const CustomToolBarPanel: (props: ICustomToolBarPanel) => import("react/jsx-runtime").JSX.Element;
export default CustomToolBarPanel;
