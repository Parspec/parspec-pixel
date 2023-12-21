import { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ProcessCellForExportParams, GetRowIdParams, ColDef, ColGroupDef, CellValueChangedEvent, RowDragEvent, SelectionChangedEvent, TabToNextCellParams, CellPosition } from 'ag-grid-community';
import { ClipboardModule } from '@ag-grid-enterprise/clipboard';
import { GridChartsModule } from '@ag-grid-enterprise/charts';

import { Box } from '../Box';

import './styles.css';
import { CustomToolBarPanel, ToolBarT } from './CustomToolbarPanel';

const modules = [ClipboardModule, GridChartsModule];

interface IAgGridTableProps {
    tableHeight: number | string;
    tableData: Object[];
    rowHeight: number;
    isTableLoading: boolean;
    columnDefs: (ColDef | ColGroupDef)[] | null;
    defaultColDef: ColDef;
    getRowId: (params: GetRowIdParams<any, any>) => any;
    suppressRowClickSelection?: boolean;
    enableRangeSelection?: boolean;
    enableFillHandle?: boolean;
    undoRedoCellEditing?: boolean;
    enterNavigatesVerticallyAfterEdit?: boolean;
    enterNavigatesVertically?: boolean;
    rowDragManaged?: boolean;
    rowSelection?: 'single' | 'multiple';
    suppressContextMenu?: boolean;
    rowClassRules?: {};
    getRowStyle?: () => {} | undefined;
    context?: any;
    pinnedBottomRowData?: any[];
    onCellValueChanged?: (event: CellValueChangedEvent) => void;
    onRowDragEnd?: (event: RowDragEvent) => void;
    onSelectionChanged?: (event: SelectionChangedEvent) => void;
    tabToNextCell?: (params: TabToNextCellParams) => CellPosition | null;
    processCellFromClipboard?: (args: ProcessCellForExportParams<any, any>) => any;
    loadingOverlayComponent?: (props: any) => JSX.Element | null;
    noRowsOverlayComponent?: (props: any) => JSX.Element;
    isTableHaveFooter?: boolean;
    onGridReady?: () => void;
    processCellForClipboard?: (props: ProcessCellForExportParams) => any;
    quickFilterText?: string;
    //custom toolbar panel interface
    showToolbarPanel: boolean;
    isToolbarLoading?: boolean;
    toolBarPanelOptions?: ToolBarT[];
    selectedRowCount: number;
    disabledToolBarButton: boolean;
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

interface IAgGridTableMethods {
    // Make the API property more flexible
    api?: any;
}

const toolBarPanelDefaultOptions: ToolBarT[] = ['delete', 'search', 'clearFilters', 'hide', 'unhide', 'selectedItems', 'duplicate', 'add', 'createKit', 'move'];

export const AgGridTable = forwardRef<IAgGridTableMethods, IAgGridTableProps>((props, ref) => {
    const {
        tableHeight,
        tableData,
        isTableLoading,
        getRowId,
        rowHeight,
        suppressRowClickSelection,
        enableRangeSelection,
        enableFillHandle,
        undoRedoCellEditing,
        enterNavigatesVerticallyAfterEdit,
        enterNavigatesVertically,
        rowDragManaged,
        rowSelection,
        suppressContextMenu,
        rowClassRules,
        getRowStyle,
        context,
        pinnedBottomRowData,
        columnDefs,
        defaultColDef,
        onCellValueChanged,
        onRowDragEnd,
        onSelectionChanged,
        tabToNextCell,
        processCellFromClipboard,
        loadingOverlayComponent,
        noRowsOverlayComponent,
        isTableHaveFooter = false,
        onGridReady,
        processCellForClipboard,
        quickFilterText,
        showToolbarPanel = false,
        isToolbarLoading = false,
        toolBarPanelOptions = toolBarPanelDefaultOptions,
        selectedRowCount = 0,
        disabledToolBarButton = false,
        onAdd,
        onDelete,
        onHideUnhide,
        onAddDuplicates,
        onMove,
        onCreateKit,
        onCloseBanner,
        onTextSearch
    } = props;

    const gridRef = useRef<any>(null);

    // Expose methods through the forwarded ref
    useImperativeHandle(ref, () => ({
        api: {
            showLoadingOverlay: () => {
                gridRef?.current?.api?.showLoadingOverlay();
            },
            showNoRowsOverlay: () => {
                gridRef?.current?.api?.showNoRowsOverlay();
            },
            hideOverlay: () => {
                gridRef?.current?.api?.hideOverlay();
            }
        }
    }));

    useEffect(() => {
        if (isTableLoading) {
            gridRef?.current?.api?.showLoadingOverlay();
        } else if (tableData && tableData.length === 0) {
            setTimeout(() => {
                gridRef?.current?.api?.showNoRowsOverlay();
            }, 0);
        } else {
            gridRef?.current?.api?.hideOverlay();
        }
    }, [isTableLoading, tableData]);

    return (
        <Box zIndex={1} width={'100%'} position={'relative'}>
            {showToolbarPanel && (
                <CustomToolBarPanel
                    toolBarPanelOptions={toolBarPanelOptions}
                    selectedRowCount={selectedRowCount}
                    disabledToolBarButton={disabledToolBarButton}
                    onAdd={onAdd}
                    onDelete={onDelete}
                    onHideUnhide={onHideUnhide}
                    onAddDuplicates={onAddDuplicates}
                    onMove={onMove}
                    onCreateKit={onCreateKit}
                    onCloseBanner={onCloseBanner}
                    onTextSearch={onTextSearch}
                    isToolbarLoading={isToolbarLoading}
                />
            )}

            <Box sx={{ height: tableHeight }} width="100%" className="ag-theme-alpine">
                <AgGridReact
                    ref={gridRef}
                    rowData={tableData}
                    getRowId={getRowId}
                    gridOptions={{
                        rowHeight,
                        suppressRowClickSelection,
                        enableRangeSelection,
                        enableFillHandle,
                        undoRedoCellEditing,
                        enterNavigatesVerticallyAfterEdit,
                        enterNavigatesVertically,
                        rowDragManaged,
                        rowSelection,
                        suppressContextMenu,
                        rowClassRules,
                        getRowStyle
                    }}
                    context={context}
                    pinnedBottomRowData={pinnedBottomRowData}
                    columnDefs={columnDefs}
                    modules={modules}
                    defaultColDef={defaultColDef}
                    onCellValueChanged={onCellValueChanged}
                    onRowDragEnd={onRowDragEnd}
                    onSelectionChanged={onSelectionChanged}
                    tabToNextCell={tabToNextCell}
                    processCellFromClipboard={processCellFromClipboard}
                    loadingOverlayComponent={isTableLoading ? loadingOverlayComponent : null}
                    noRowsOverlayComponent={noRowsOverlayComponent}
                    noRowsOverlayComponentParams={{
                        isTableHaveFooter: isTableHaveFooter
                    }}
                    onGridReady={onGridReady}
                    processCellForClipboard={processCellForClipboard}
                    quickFilterText={quickFilterText}
                />
            </Box>
        </Box>
    );
});
