import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from './Table';
import { ColumnDirective, SelectionSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-treegrid';
import { getValue } from '@syncfusion/ej2-base';
import { dDataP, dDataP2 } from './data';
import { Button } from '../Button';
import { ViewArrayIcon } from '../Icons';
import { Box } from '../Box';
import { BodyMedium } from '../Typography';
import { Menu } from '../Menu';
import { FilterSettingsModel } from '@syncfusion/ej2-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

export default {
    title: 'Table',
    component: Table
} as ComponentMeta<typeof Table>;

export const Basic: ComponentStory<typeof Table> = (props) => {
    const coltemplate = (props: any) => {
        if (props.taskData.name.includes('section')) {
            return (
                <Button size="small" id={props.id}>
                    Section
                </Button>
            );
        } else if (props.taskData.name.includes('product')) {
            return (
                <Button size="small" color="secondary" id={props.id}>
                    Product
                </Button>
            );
        } else if (props.taskData.name.includes('accessory')) {
            return (
                <Button size="small" color="tertiary" id={props.id}>
                    Accessory
                </Button>
            );
        } else {
            return <></>;
        }
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

    const checkboxFilter: FilterSettingsModel = {
        type: 'CheckBox'
    };
    const menuFilter: FilterSettingsModel = {
        type: 'Menu'
    };
    const filterTemplateOptions = (props: any): any => {
        const dataSource: string[] = ['Yes', 'No'];
        return <DropDownListComponent id={props.column.field} popupHeight="250px" dataSource={dataSource} />;
    };

    const onCheckboxChange = (data: Object[]) => {
        console.log('onCheckboxChange===>\n', data);
    };
    const onDragEnd = (data: Object[]) => {
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
    const getTableProps = (args: any) => {
        const toolBarItems = ['ExcelExport', 'PdfExport', 'Add', 'Delete', 'Search', 'Update', 'Cancel'] as ToolbarItems[];
        return {
            toolBarOptions: toolBarItems,
            ...args
        };
    };
    return (
        <>
            <br />
            <br />
            <Table {...getTableProps({ ...props, onAdd, onCheckboxChange, onDelete, onDragEnd, onEdit, onSearch, onRowSelection })}>
                <ColumnDirective type="checkbox" allowEditing={false} width="50"></ColumnDirective>
                <ColumnDirective field="id" isPrimaryKey={true} visible={false} />
                <ColumnDirective field="taskID" allowEditing={false} headerText="Task ID" width="150" filter={checkboxFilter} editType="numericedit" />
                <ColumnDirective field="name" headerText="Task Name" minWidth="200" filter={menuFilter} />
                <ColumnDirective
                    allowEditing={true}
                    allowSorting={false}
                    defaultValue={''}
                    headerText="Custom Component"
                    minWidth="240"
                    template={coltemplate}
                    headerTemplate={customHeaderTemplate}
                    allowFiltering={false}
                />
                <ColumnDirective field="reporter" headerText="Reporter" minWidth="200" validationRules={validateReporter} />
                <ColumnDirective field="available" headerText="Availability" minWidth="200" filter={menuFilter} filterTemplate={filterTemplateOptions} />
            </Table>
        </>
    );
};
// Arg properties with value as true and their corresponding settings are not required to be passed to table component as they are already present as default props, we have passed them here to get controls in stories
Basic.args = {
    height: 400,
    data: dDataP,
    childMappingKey: 'subtasks',
    allowRowDragAndDrop: true,
    frozenColumns: 4,
    treeColumnIndex: 3,
    allowPaging: true,
    pageSettings: { pageSize: 10 },
    allowResizing: true,
    allowEditing: true,
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
    filterSettings: {
        type: 'Excel'
    }
};

export const SingleSelect: ComponentStory<typeof Table> = (props) => {
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

    return (
        <>
            <Table {...getTableProps({ ...props, onRowSelection })} data={data}>
                <ColumnDirective field="id" isPrimaryKey={true} visible={false} />
                <ColumnDirective field="taskID" allowEditing={false} headerText="Task ID" width="150" editType="numericedit" />
                <ColumnDirective field="name" headerText="Task Name" minWidth="200" />
                <ColumnDirective field="reporter" headerText="Reporter" minWidth="200" />
                <ColumnDirective field="available" headerText="Availability" minWidth="200" />
            </Table>
        </>
    );
};
SingleSelect.args = {
    height: 400,
    childMappingKey: 'subtasks',
    allowRowDragAndDrop: true,
    treeColumnIndex: 3
};

const coltemplate = (props: any) => {
    if (props?.taskData?.name?.includes('section')) {
        return (
            <Button size="small" id={props.id}>
                Section
            </Button>
        );
    } else if (props?.taskData?.name?.includes('product')) {
        return (
            <Button size="small" color="secondary" id={props.id}>
                Product
            </Button>
        );
    } else if (props?.taskData?.name?.includes('accessory')) {
        return (
            <Button size="small" color="tertiary" id={props.id}>
                Accessory
            </Button>
        );
    } else {
        return <></>;
    }
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

export const V2Table: ComponentStory<typeof Table> = (props) => {
    const checkboxFilter: FilterSettingsModel = {
        type: 'CheckBox'
    };
    const menuFilter: FilterSettingsModel = {
        type: 'Menu'
    };
    const filterTemplateOptions = (props: any): any => {
        const dataSource: string[] = ['Yes', 'No'];
        return <DropDownListComponent id={props.column.field} popupHeight="250px" dataSource={dataSource} />;
    };

    const onCheckboxChange = (data: Object[]) => {
        console.log('onCheckboxChange===>\n', data);
    };
    const onDragEnd = (data: Object[]) => {
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
    const getTableProps = (args: any) => {
        const toolBarItems = ['ExcelExport', 'PdfExport', 'Add', 'Delete', 'Search', 'Update', 'Cancel'] as ToolbarItems[];
        return {
            toolBarOptions: toolBarItems,
            ...args
        };
    };

    const clearFilterFunction = () => {
        const treeobj = (document.getElementsByClassName('e-treegrid')[0] as any).ej2_instances[0];
        console.log(treeobj);
        treeobj.clearFiltering();
        treeobj.deleteRecord();
    };

    //     const getMenu = useCallback((props: any) => {
    //     const options = [
    //       { label: "Add Below", onClick: () => onAddBelow(props) },
    //       { label: "Duplicate", onClick: () => onDuplicate(props) },
    //       { label: props.hidden ? "Unhide" : "Hide", onClick: () => onHide(props) },
    //       { label: "Delete", onClick: () => onClickDelete(props) },
    //     ];
    //     return (
    //       <Box display={"flex"} justifyContent={"center"}>
    //         <Menu options={options} />
    //       </Box>
    //     );
    //   }, []);

    return (
        <>
            <Button onClick={clearFilterFunction}>Clear Filters</Button>
            <Table {...getTableProps({ ...props, onAdd, onCheckboxChange, onDelete, onDragEnd, onEdit, onSearch, onRowSelection })}>
                <ColumnDirective type="checkbox" width="50" />
                <ColumnDirective field="id" isPrimaryKey={true} visible={false} />
                <ColumnDirective field="taskID" headerText="Task ID" width="150" filter={checkboxFilter} editType="numericedit" />
                <ColumnDirective field="name" headerText="Task Name" minWidth="200" filter={menuFilter} />
                <ColumnDirective
                    allowEditing={false}
                    allowSorting={false}
                    defaultValue={'product'}
                    minWidth="240"
                    template={coltemplate}
                    headerTemplate={customHeaderTemplate}
                    allowFiltering={false}
                />
                <ColumnDirective field="reporter" headerText="Reporter" minWidth="200" validationRules={validateReporter} />
                <ColumnDirective field="available" headerText="Availability" minWidth="200" filter={menuFilter} filterTemplate={filterTemplateOptions} />
                {/* <ColumnDirective
                width="60"
                headerTemplate={() => <ViewArrayIcon />}
                template={getMenu}
                allowEditing={false}
              /> */}
                {/* <ColumnDirective width="60" template={() => <Button onClick={clearFilterFunction}>123</Button>} allowEditing={false} /> */}
            </Table>
        </>
    );
};

V2Table.args = {
    height: 400,
    data: dDataP,
    childMappingKey: 'subtasks',
    allowRowDragAndDrop: true,
    frozenColumns: 4,
    treeColumnIndex: 3,
    allowPaging: true,
    pageSettings: { pageSize: 10 },
    allowResizing: true,
    allowEditing: true,
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
    filterSettings: {
        type: 'Excel'
    },
    loading: false
};
