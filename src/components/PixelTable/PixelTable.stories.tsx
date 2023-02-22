import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PixelTable } from './PixelTable';
import { ColumnDirective } from '@syncfusion/ej2-react-treegrid';
import { getValue } from '@syncfusion/ej2-base';
import { dDataP } from './data';
import { Button } from '../Button';
import { ViewArrayIcon } from '../Icons';
import { Box } from '../Box';
import { BodyMedium } from '../Typography';
export default {
    title: 'PixelTable',
    component: PixelTable
} as ComponentMeta<typeof PixelTable>;

export const Table: ComponentStory<typeof PixelTable> = (props) => {
    const coltemplate = (props: any) => {
        if (props.taskData.name.includes('section')) {
            return <Button size="small">Section</Button>;
        } else if (props.taskData.name.includes('product')) {
            return (
                <Button size="small" color="secondary">
                    Product
                </Button>
            );
        } else {
            return (
                <Button size="small" color="secondary">
                    Accessory
                </Button>
            );
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
    return (
        <PixelTable {...props}>
            <ColumnDirective type="checkbox" allowEditing={false} width="50"></ColumnDirective>
            <ColumnDirective field="taskID" allowEditing={false} headerText="Task ID" width="150" isPrimaryKey={true} />
            <ColumnDirective field="name" headerText="Task Name" minWidth="200" />
            <ColumnDirective field="custom" allowEditing={false} allowSorting={false} headerText="Custom Component" minWidth="240" template={coltemplate} headerTemplate={customHeaderTemplate} />
            <ColumnDirective field="reporter" headerText="Reporter" minWidth="200" validationRules={validateReporter} />
        </PixelTable>
    );
};

Table.args = {
    height: 600,
    data: dDataP,
    childMappingKey: 'subtasks',
    allowRowDragAndDrop: true,
    frozenColumns: 3,
    treeColumnIndex: 2,
    allowPaging: true,
    pageSettings: { pageSize: 10 },
    allowResizing: true,
    allowEditing: true,
    allowExports: true,
    toolBarOptions: ['ExcelExport', 'PdfExport', 'Update', 'Cancel'],
    excelExportProperties: {
        fileName: 'newExcel.xlsx',
        isCollapsedStatePersist: false
    },
    pdfExportProperties: {
        fileName: 'newPdf.pdf',
        isCollapsedStatePersist: false
    }
};
