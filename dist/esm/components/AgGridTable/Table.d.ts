/// <reference types="react" />
import { AgGridReact, AgGridReactProps, AgReactUiProps } from 'ag-grid-react';
import './agGridStyles.css';
import { ToolBarT } from './CustomToolbarPanel';
interface IAgGridTableProps extends AgGridReactProps, AgReactUiProps {
    tableHeight?: number | string;
    isTableLoading: boolean;
    showToolbarPanel: boolean;
    isToolbarLoading?: boolean;
    toolBarPanelOptions?: ToolBarT[];
    selectedRowCount?: number;
    disabledToolBarButton?: boolean;
    onAdd?: () => void;
    onDelete?: () => void;
    onHideUnhide?: () => void;
    onAddDuplicates?: () => void;
    onMove?: () => void;
    onCreateKit?: () => void;
    onCloseBanner?: () => void;
    onTextSearch?: (searchString: string) => void;
    title?: string;
    toolbarRightSection?: React.ReactNode;
}
export declare const AgGridTable: import("react").ForwardRefExoticComponent<IAgGridTableProps & import("react").RefAttributes<AgGridReact<any>>>;
export {};
