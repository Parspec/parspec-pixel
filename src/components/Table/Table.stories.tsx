import React, { useRef, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table, ToolbarType } from './Table';
import { ColumnDirective, SelectionSettingsModel } from '@syncfusion/ej2-react-treegrid';
import { getValue } from '@syncfusion/ej2-base';
import { dDataP, dDataP2 } from './data';
import { Button } from '../Button';
import { ViewArrayIcon } from '../Icons';
import { Box } from '../Box';
import { BodyMedium } from '../Typography';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

export default {
    title: 'Table',
    component: Table
} as ComponentMeta<typeof Table>;

export const SingleSelect: ComponentStory<typeof Table> = (props) => {
    const onDragEnd = (data: Object) => {
        console.log('onDragEnd===>\n', data);
    };
    const tableRef = useRef<any>();
    const [data, setData] = useState(dDataP2);
    const getTableProps = (args: any) => {
        const selectionSettings: SelectionSettingsModel = {
            type: 'Single'
        };
        return {
            selectionSettings,
            ...args
        };
    };

    const onRowSelection = (selectedData) => {
        console.log(selectedData);
    };
    const customFiltersFunction = (e: any) => {
        // if (e.columnName === 'available') {
        //     e.filterModel.options.dataSource = [{ available: 'Yes' }, { available: 'No' }];
        // }
    };

    return (
        <Box height={500}>
            <Table {...getTableProps({ ...props, onRowSelection, onDragEnd, customFiltersFunction })} data={data} ref={tableRef}>
                <ColumnDirective field="id" isPrimaryKey={true} visible={false} />
                <ColumnDirective field="taskID" allowEditing={false} headerText="Task ID" minWidth="100" width="130" editType="numericedit" />
                <ColumnDirective field="name" headerText="Task Name" />
                <ColumnDirective field="reporter" headerText="Reporter" />
                <ColumnDirective field="available" filter={{ type: 'Menu', operator: 'contains' }} filterTemplate={filterTemplateOptions} headerText="Availability" />
            </Table>
        </Box>
    );
};
SingleSelect.args = {
    childMappingKey: 'subtasks',
    allowRowDragAndDrop: true,
    treeColumnIndex: 3,
    allowPaging: false
};

const coltemplate = (props: any) => {
    if (props?.taskData?.type?.includes('section')) {
        return (
            <Box height={50} display={'flex'} alignItems={'center'}>
                <Button size="small" id={props.id} color="primary">
                    Section
                </Button>
            </Box>
        );
    } else if (props?.taskData?.type?.includes('product')) {
        return (
            <Button size="small" color="secondary" id={props.id}>
                Product
            </Button>
        );
    } else if (props?.taskData?.type?.includes('accessory')) {
        return (
            <Button size="small" color="tertiary" id={props.id}>
                Accessory
            </Button>
        );
    } else {
        return <></>;
    }
};
const filterTemplateOptions = (props: any): any => {
    const dataSource = ['Yes', 'No'];
    return <DropDownListComponent id={props.column.field} popupHeight="250px" dataSource={dataSource} />;
};

const customFn = (args: { [key: string]: string }): boolean => {
    return getValue('value', args).length >= 3;
};
const customFn2 = (args: { [key: string]: string }): boolean => {
    return getValue('value', args).length <= 5;
};
const validateReporter = {
    minLength: [customFn, 'Atleast 3 characters required'],
    maxLength: [customFn2, 'Atmax 5 characters allowed']
};
const customHeaderTemplate = () => {
    return (
        <Box display={'flex'} gap={2}>
            <BodyMedium>Custom Template Column</BodyMedium>
            <ViewArrayIcon />
        </Box>
    );
};

export const Basic: ComponentStory<typeof Table> = (props) => {
    const onHideUnhide = (data: Object[]) => {
        console.log('onHideUnhide===>\n', data);
    };
    const onCheckboxChange = (data: Object[]) => {
        console.log('onCheckboxChange===>\n', data);
    };
    const onDragEnd = (data: Object) => {
        console.log('onDragEnd===>\n', data);
    };
    const onAdd = (data: Object) => {
        console.log('onAdd===>\n', data);
    };
    const onEdit = (data: Object) => {
        console.log('onEdit===>\n', data);
    };
    const onDelete = (data: Object) => {
        console.log('onDelete===>\n', data);
    };
    const onSearch = (data: Object) => {
        console.log('onSearch===>\n', data);
    };
    const onRowSelection = (selectedData) => {
        console.log('onRowSelection===>\n', selectedData);
    };
    const onAddDuplicates = (data: Object[]) => {
        console.log('onAddDuplicates (selected data)===>\n', data);
    };
    const getTableProps = (args: any) => {
        const toolBarItems: ToolbarType = ['delete', 'search', 'clearFilters', 'hide', 'unhide', 'selectedItems', 'duplicate'];
        return {
            toolBarOptions: toolBarItems,
            toolbarRightSection: <Button>Import Products</Button>,
            // rowHeight: 40,
            ...args
        };
    };

    const tableRef = useRef<any>();
    const customFiltersFunction = (e: any) => {
        // if (e.columnName === 'available') {
        //     e.filterModel.options.dataSource = [{ available: 'Yes' }, { available: 'No' }];
        // }
    };

    return (
        <Box height={'100vh'}>
            <Table
                {...getTableProps({ ...props, onAdd, onCheckboxChange, onDelete, onDragEnd, onEdit, onSearch, onRowSelection, onHideUnhide, onAddDuplicates, customFiltersFunction })}
                ref={tableRef}
            >
                <ColumnDirective type="checkbox" width="50" />
                <ColumnDirective field="id" isPrimaryKey={true} visible={false} />
                <ColumnDirective field="taskID" headerText="Task ID" minWidth="100" width="130" editType="numericedit" />
                <ColumnDirective field="name" headerText="Task Name" minWidth="200" />
                <ColumnDirective
                    allowEditing={false}
                    allowSorting={false}
                    field="type"
                    defaultValue={'product'}
                    minWidth="240"
                    template={coltemplate}
                    headerTemplate={customHeaderTemplate}
                    allowFiltering={false}
                />
                <ColumnDirective field="reporter" headerText="Reporter" minWidth="200" validationRules={validateReporter} />
                <ColumnDirective field="available" headerText="Availability" minWidth="200" filterTemplate={filterTemplateOptions} />
            </Table>
        </Box>
    );
};

const Abc: React.FC = () => {
    const [a, setA] = useState(1);
    return (
        <Box display={'flex'} alignItems={'center'}>
            <Button color="primary" onClick={() => setA((p) => p + 1)}>
                Right Section {a}
            </Button>
        </Box>
    );
};
// Arg properties with value as true and their corresponding settings are not required to be passed to table component as they are already present as default props, we have passed them here to get controls in stories
Basic.args = {
    data: dDataP,
    childMappingKey: 'subtasks',
    allowRowDragAndDrop: true,
    // frozenColumns: 4,
    treeColumnIndex: 3,
    allowPaging: false,
    // pageSettings: { pageSize: 10 },
    allowResizing: true,
    allowExports: true,
    excelExportProperties: {
        fileName: 'newExcel.xlsx',
        isCollapsedStatePersist: false
    },
    pdfExportProperties: {
        fileName: 'newPdf.pdf',
        isCollapsedStatePersist: false
    },
    allowFiltering: true,
    loading: false,
    searchSettings: {
        fields: ['taskID', 'name', 'reported', 'available'],
        hierarchyMode: 'Both'
    },
    toolbarRightSection: <Abc />
};
