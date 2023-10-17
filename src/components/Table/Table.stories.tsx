import React, { useEffect, useRef, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table, ToolbarType } from './Table';
import { ColumnDirective, Inject, SelectionSettingsModel } from '@syncfusion/ej2-react-treegrid';
import { getValue } from '@syncfusion/ej2-base';
import { dDataP, dDataP2, dDataP4 } from './data';
import { Button } from '../Button';
import { ViewArrayIcon } from '../Icons';
import { Box } from '../Box';
import { BodyMedium } from '../Typography';
import { CheckBoxSelection, DropDownListComponent, MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';

export default {
    title: 'Table',
    component: Table
} as ComponentMeta<typeof Table>;

export const SingleSelect: ComponentStory<typeof Table> = (props) => {
    // const dataList = JSON.parse(localStorage.getItem('datali') || '[]');

    const onDragEnd = (data: Object) => {
        console.log('onDragEnd===>\n', data, dataList);
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
    return (
        <Box height={500}>
            <Table {...getTableProps({ ...props, onRowSelection, onDragEnd, customFiltersFunction })} data={dataList} ref={tableRef}>
                <ColumnDirective field="id" isPrimaryKey={true} visible={false} />
                <ColumnDirective field="taskID" allowEditing={false} headerText="Task ID" minWidth="100" width="130" editType="numericedit" />
                <ColumnDirective field="name" headerText="Task Name" />
                <ColumnDirective field="reporter" headerText="Reporter" />
                <ColumnDirective field="available" filter={{ type: 'Menu', operator: 'contains' }} filterTemplate={templateOptions} headerText="Availability" />
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
    } else if (props?.taskData?.type?.includes('accessories')) {
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
// localStorage.setItem('dataNew', JSON.stringify(dDataP4));
// console.log('called');

// const dataList = JSON.parse(localStorage.getItem('dataNew') || '[]');
console.log('dataList called');
// const dataList2 = JSON.parse(localStorage.getItem('datali') || '[]');
// const dataList3 = JSON.parse(localStorage.getItem('datali') || '[]');
const getDataList = () => JSON.parse(localStorage.getItem('dataNew') || '[]');
const setDataList = (data) => localStorage.setItem('dataNew', JSON.stringify(data));
export const Basic: ComponentStory<typeof Table> = (props) => {
    // const [dataState, setData] = useState(dataList);
    // console.log(dataState, 'dataState');
    const dataList = getDataList();

    const onHideUnhide = (data: Object[]) => {
        console.log('onHideUnhide===>\n', data);
    };
    const onCheckboxChange = (data: Object[]) => {
        console.log('onCheckboxChange===>\n', data);
    };

    const onDragEnd = (args: Object) => {
        /** TODO -
         * 1. if has data.Parent - if(data.parent){}
         *  a. removeData(data.fromIndex)
         *  b. subchildPosition = parent.index - data.data.index (drop index)
         *  c. if parent.hasChildRecord
         *  c. add data at subtasks  parent(subchildPosition)
         *
         * 2. else
         *  a. removeData(data.fromIndex)
         *  b. addData to data.data.index
         */
        const { fromIndex, dropIndex }: any = args;
        if (args?.data?.parent) {
            console.log('called if');
        } else {
            if (fromIndex > dropIndex) {
                dataList.splice(args?.fromIndex, 1);
                dataList.splice(args?.dropIndex, 0, args?.data?.taskData);
            } else {
                dataList.splice(args?.fromIndex, 1);
                dataList.splice(args?.dropIndex - 1, 0, args?.data?.taskData);
            }
            setDataList(dataList);

            // dataList.splice(args?.dropIndex, 0, args?.data?.taskData);
            // console.log('getDataList==> \n', dataList, args);

            // setDataList(dataList);
            // console.log('getDataList==>\n', dataList);
        }
        // dataList.splice(data?.fromIndex, 1);
        // dataList.splice(data?.data.index, 0, data.data.taskData);
        // setDataList(getDataList());
        // localStorage.setItem('dataNew', JSON.stringify(dataList));
        console.log('onDragEnd===>\n', args, 'dataList==>\n', dataList, 'getDataList==>\n', getDataList());
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
    // var da = localStorage.getItem('dataList');
    // console.log(JSON.parse(localStorage.getItem('dataList') || '[]'), 'dav');

    return (
        <Box height={'100vh'}>
            <Table
                {...getTableProps({ ...props, onAdd, onCheckboxChange, onDelete, onDragEnd, onEdit, onSearch, onRowSelection, onHideUnhide, onAddDuplicates, customFiltersFunction })}
                ref={tableRef}
                data={getDataList()}
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
    // data: dDataP4,
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
