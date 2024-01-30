import { forwardRef, useImperativeHandle, useRef, useEffect, useState } from 'react';
import { AgGridReact, AgGridReactProps, AgReactUiProps } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import { ClipboardModule } from '@ag-grid-enterprise/clipboard';
import { GridChartsModule } from '@ag-grid-enterprise/charts';

import { Box } from '../Box';

import './agGridStyles.css';
import { CustomToolBarPanel, ToolBarT } from './CustomToolbarPanel';

const modules = [ClipboardModule, GridChartsModule];

interface IAgGridTableProps extends AgGridReactProps, AgReactUiProps {
    tableHeight?: number | string;
    isTableLoading: boolean;
    // ############################## //
    // custom toolbar panel interface //
    // ############################## //
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

export const AgGridTable = forwardRef<AgGridReact<any>, IAgGridTableProps>((props, ref) => {
    const {
        tableHeight,
        isTableLoading,
        showToolbarPanel = false,
        isToolbarLoading = false,
        toolBarPanelOptions = [],
        selectedRowCount = 0,
        disabledToolBarButton = false,
        onAdd,
        onDelete,
        onHideUnhide,
        onAddDuplicates,
        onMove,
        onCreateKit,
        onCloseBanner,
        onTextSearch,
        toolbarRightSection,
        rowData,
        ...restTableProps
    } = props;

    const gridRef = useRef<AgGridReact<any>>(null);
    const [isGridReady, setGridReady] = useState(false);

    // Expose methods through the forwarded ref
    useImperativeHandle(ref, () => gridRef.current!);

    useEffect(() => {
        if (isGridReady) {
            return;
        }
        if (isTableLoading) {
            gridRef?.current?.api?.showLoadingOverlay();
        } else if (rowData && rowData.length === 0) {
            setTimeout(() => {
                gridRef?.current?.api?.showNoRowsOverlay();
            }, 0);
        } else {
            gridRef?.current?.api?.hideOverlay();
        }
    }, [isGridReady, isTableLoading, rowData]);

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
                    toolbarRightSection={toolbarRightSection}
                />
            )}

            <Box sx={{ height: tableHeight }} width="100%" className="ag-theme-alpine">
                <AgGridReact
                    ref={gridRef}
                    rowData={rowData}
                    {...restTableProps}
                    gridOptions={{
                        ...restTableProps.gridOptions,
                        rowClassRules: {
                            'row-hide': (params: any) => params?.data?.is_hidden
                        },
                        getRowStyle: (params) => {
                            if (params.node.rowPinned) {
                                return { backgroundColor: '#f8f8f8', fontWeight: 700 };
                            }
                            return undefined;
                        }
                    }}
                    modules={modules}
                    onGridReady={() => setGridReady(true)}
                />
            </Box>
        </Box>
    );
});

const defaultColDef: ColDef | any = {
    flex: 1,
    sortable: false,
    menuTabs: [],
    resizable: true,
    suppressFillHandle: true,
    suppressMovable: true
};

AgGridTable.defaultProps = {
    defaultColDef: defaultColDef
};
