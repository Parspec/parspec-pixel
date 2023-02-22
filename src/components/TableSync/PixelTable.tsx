import * as React from 'react';
import {
    TreeGridComponent,
    ColumnsDirective,
    ColumnDirective,
    Selection,
    RowDD,
    Inject,
    Freeze,
    Sort,
    Edit,
    Toolbar,
    ToolbarItems,
    Page,
    PdfExport,
    ExcelExport,
    toolbarClick
} from '@syncfusion/ej2-react-treegrid';

import { dDataP } from './data';
import { getValue, registerLicense } from '@syncfusion/ej2-base';
import './styles.css';

import { Box } from '../Box';
import { Button } from '../Button';

let license = window.localStorage.getItem('syncfusionLicense');
registerLicense(license!);

function coltemplate(props: any): any {
    if (props.taskData.name.includes('section')) {
        return (
            <Box color={'primary.main'}>
                Section <Button size="small">Hi</Button>
            </Box>
        );
    } else {
        return (
            <Box color={'secondary.main'} p={2}>
                Not a section
            </Box>
        );
    }
}
export const PixelTable = () => {
    const [dragData2, setDragData2] = React.useState(dDataP);
    const ref = React.useRef<any>();
    const toolBarOpions: ToolbarItems[] = ['ExcelExport', 'PdfExport', 'Delete', 'Update', 'Cancel'];
    const selectionsettings: Object = { persistSelection: true };

    const rowDrop = (args: any) => {
        let treeobj: any = document.getElementsByClassName('e-treegrid')[0];
        treeobj = treeobj.ej2_instances[0];
        let droppedData = treeobj.getRowInfo(args.target.parentElement).rowData;
        let droppedId, draggedId;
        if (droppedData.parentItem != null) {
            droppedId = droppedData.parentItem.taskID;
            draggedId = args.data[0].parentItem.taskID;
        }
        if (droppedId != draggedId) {
            args.cancel = true;
        }
        if (args.dropPosition == 'middleSegment' && droppedId == draggedId) {
            args.cancel = true;
            treeobj.reorderRows([args.fromIndex], args.dropIndex, 'below');
        }
    };
    const toolbarClick = (args: any) => {
        if (args.item.text === 'Excel Export') {
            let excelExportProperties = {
                fileName: 'new.xlsx'
            };
            ref.current.excelExport(excelExportProperties);
        } else if (args.item.text === 'PDF Export') {
            const exportProperties = {
                hierarchyExportMode: 'All'
            };

            ref.current.pdfExport(exportProperties);
        }
    };

    const customFn = (args: { [key: string]: string }): boolean => {
        return getValue('value', args).length >= 3;
    };
    const customFn2 = (args: { [key: string]: string }): boolean => {
        return getValue('value', args).length <= 5;
    };
    const reporter = {
        minLength: [customFn, 'Need atleast 3 letters'],
        maxLength: [customFn2, 'Need atmax 5 letters']
    };

    return (
        <Box className="control-pane">
            <Box className="control-section">
                <TreeGridComponent
                    ref={ref}
                    dataSource={dragData2}
                    treeColumnIndex={2}
                    childMapping="subtasks"
                    height="410"
                    allowPdfExport={true}
                    allowExcelExport={true}
                    allowRowDragAndDrop={true}
                    selectionSettings={{
                        type: 'Multiple',
                        mode: 'Cell',
                        cellSelectionMode: 'Box'
                    }}
                    enableAutoFill={true}
                    rowDrop={rowDrop}
                    frozenColumns={3}
                    allowSorting={true}
                    editSettings={{
                        allowEditing: true,
                        allowAdding: true,
                        allowDeleting: true,
                        mode: 'Batch',
                        newRowPosition: 'Below'
                    }}
                    toolbar={toolBarOpions}
                    toolbarClick={toolbarClick}
                    // pageSettings={{ pageSize: 10 }}
                    allowPaging={true}
                >
                    <ColumnsDirective>
                        <ColumnDirective type="checkbox" allowEditing={false} width="50"></ColumnDirective>
                        <ColumnDirective field="taskID" headerText="Task ID" width="150" isPrimaryKey={true} />
                        <ColumnDirective field="name" headerText="Task Name" width="200" />
                        <ColumnDirective field="reporter2" headerText="Reporter Custom" width="140" template={coltemplate} />
                        <ColumnDirective field="reporter" headerText="Reporter" width="200" validationRules={reporter} />
                    </ColumnsDirective>
                    <Inject services={[Freeze, RowDD, Selection, Sort, Edit, Toolbar, Page, ExcelExport, PdfExport]} />
                </TreeGridComponent>
            </Box>
        </Box>
    );
};
