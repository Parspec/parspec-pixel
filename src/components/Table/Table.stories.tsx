import React, { useRef, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table, ToolbarType } from './Table';
import { AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, ColumnDirective, Inject, SelectionSettingsModel } from '@syncfusion/ej2-react-treegrid';
import { getValue } from '@syncfusion/ej2-base';
import { dDataP, dDataP2 } from './data';
import { Button } from '../Button';
import { ViewArrayIcon } from '../Icons';
import { Box } from '../Box';
import { BodyMedium } from '../Typography';
import { CheckBoxSelection, DropDownListComponent, MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { getObject } from '@syncfusion/ej2-grids';
import { DataManager, Query } from '@syncfusion/ej2-data';

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

    const templateOptions = (args) => {
        const dataSource = ['Yes', 'No', 'Hi'];
        const created = (args) => {
            //Multi select instance
            const obj = (document?.getElementById('multi_check_box') as any)?.ej2_instances?.[0];
            obj.value = tableRef?.current?.getMultiSelectVal();
            tableRef?.current?.setMultiSelectVal([]);
        };
        const change = (args) => {
            const obj = (document?.getElementById('multi_check_box') as any)?.ej2_instances?.[0];
            tableRef?.current?.setMultiSelectVal(obj.value);
            if (tableRef?.current?.getMultiSelectVal()?.length == 0) {
                tableRef?.current?.clearFiltering();
            }
        };
        return (
            <MultiSelectComponent id="multi_check_box" dataSource={dataSource} placeholder="Select" created={created} change={change} sortOrder="Ascending" mode="CheckBox">
                <Inject services={[CheckBoxSelection]} />
            </MultiSelectComponent>
        );
    };
    const specificationOptions = [
        { label: 'Basis of Design', value: 'Basis of Design', type: 'primary' },
        { label: 'Pending Alternate', value: 'Pending Alternate', type: 'tertiary' },
        { label: 'Approved Alternate', value: 'Approved Alternate', type: 'success' },
        { label: 'Lost Alternate', value: 'Lost Alternate', type: 'error' }
    ];
    const priority = {
        params: {
            actionComplete: () => {
                console.log('DropDown called ');
                return true;
            },
            change: (args) => {
                console.log(args, 'chnage begin');
            },

            allowFiltering: false,
            dataSource: specificationOptions,
            fields: {
                text: 'label',
                value: 'value',
                itemCreated: (item) => {
                    debugger;
                    const count = specificationOptions.findIndex((data) => data.label === item.curData.label);
                    const colors = {
                        0: 'lightgray',
                        1: 'green',
                        2: 'blue',
                        3: 'yellow'
                    };
                    item.item.style.background = colors[count] || 'transparent';
                }
            },
            searchParams: true,
            query: new Query(),
            write: (args) => {
                console.log(args, 'write');
            }
        }
    };
    return (
        <Box height={500}>
            <Table {...getTableProps({ ...props, onRowSelection, onDragEnd, customFiltersFunction })} data={data} ref={tableRef} title="Random title">
                <ColumnDirective field="id" isPrimaryKey={true} visible={false} />
                <ColumnDirective field="taskID" allowEditing={false} headerText="Task ID" minWidth="100" width="130" editType="numericedit" />
                <ColumnDirective field="name" headerText="Task Name" />
                <ColumnDirective field="specification" headerText="Specification" editType="dropdownedit" textAlign="Center" edit={priority} />
                <ColumnDirective field="reporter" headerText="Reporter" />
                <ColumnDirective field="available" filter={{ type: 'Menu', operator: 'contains' }} filterTemplate={templateOptions} headerText="Availability" />
            </Table>
        </Box>
    );
};
SingleSelect.args = {
    childMappingKey: 'subtasks',
    allowRowDragAndDrop: true,
    // frozenColumns: 4,
    // treeColumnIndex: 3,
    // allowPaging: false,
    // filterSettings: {
    //     type: 'CheckBox'
    // },
    selectionSettings: {
        // checkboxOnly: true,
        // persistSelection: true,
        type: 'Multiple',
        mode: 'Cell',
        cellSelectionMode: 'Box'
    },
    editSettings: {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        mode: 'Batch',
        // showDeleteConfirmDialog: true,
        // showConfirmDialog: true,
        newRowPosition: 'Bottom'
    },
    allowPaging: false,
    // pageSettings: { pageSize: 10 },
    allowResizing: true,
    // allowExports: true,
    // excelExportProperties: {
    //     fileName: 'newExcel.xlsx',
    //     isCollapsedStatePersist: false
    // },
    // pdfExportProperties: {
    //     fileName: 'newPdf.pdf',
    //     isCollapsedStatePersist: false
    // },
    allowFiltering: true,
    loading: false
    // searchSettings: {
    //     fields: ['taskID', 'name', 'reported', 'available'],
    //     hierarchyMode: 'Both'
    // }
};

const coltemplate = (props: any) => {
    if (props?.taskData?.type?.includes('section')) {
        return (
            <Box display={'flex'} alignItems={'center'}>
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
    return <DropDownListComponent id={props.column.field} popupHeight="250px" dataSource={dataSource} enablePersistence={true} />;
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
        const toolBarItems: ToolbarType = ['delete', 'search', 'clearFilters', 'hide', 'unhide', 'selectedItems', 'duplicate', 'move'];
        return {
            toolBarOptions: toolBarItems,
            toolbarRightSection: (
                <Box display={'flex'} gap={5} justifyContent={'flex-end'}>
                    <Button>Import Products</Button>
                    <Box display={'flex'} alignItems={'center'}>
                        <Button
                            color="primary"
                            onClick={() => {
                                tableRef?.current?.scrollTo(14);
                            }}
                        >
                            scroll to 14
                        </Button>
                    </Box>
                </Box>
            ),
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

export const TableWithFooter: ComponentStory<typeof Table> = (props) => {
    const getTableProps = (args: any) => {
        const toolBarItems: ToolbarType = ['delete', 'search', 'clearFilters', 'hide', 'unhide', 'selectedItems', 'duplicate'];
        return {
            toolBarOptions: toolBarItems,
            toolbarRightSection: (
                <Box display={'flex'} gap={5} justifyContent={'flex-end'}>
                    <Button>Import Products</Button>
                    <Box display={'flex'} alignItems={'center'}>
                        <Button
                            color="primary"
                            onClick={() => {
                                tableRef?.current?.scrollTo(14);
                            }}
                        >
                            scroll to 14
                        </Button>
                    </Box>
                </Box>
            ),
            // rowHeight: 40,
            ...args
        };
    };

    const tableRef = useRef<any>();

    const footerSumTemplate = (props: Object) => {
        return <span>Total: {getObject('Sum', props)}</span>;
    };

    return (
        <Box height={'100vh'}>
            <Table
                {...getTableProps({ ...props })}
                data={dDataP2}
                ref={tableRef}
                aggregateChildren={
                    <AggregateDirective>
                        <AggregateColumnsDirective>
                            <AggregateColumnDirective field="taskID" columnName="available" type="Sum" footerTemplate={(props) => <span>Total: {getObject('Sum', props)}</span>} />
                        </AggregateColumnsDirective>
                    </AggregateDirective>
                }
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

// const Abc: React.FC = () => {
//     const [a, setA] = useState(1);
//     return (
//         <Box display={'flex'} alignItems={'center'}>
//             <Button color="primary" onClick={() => setA((p) => p + 1)}>
//                 Right Section {a}
//             </Button>
//         </Box>
//     );
// };

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
    }
    // toolbarRightSection: <Abc />
};
