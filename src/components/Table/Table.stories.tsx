import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DraggableTable } from './DraggableTable';
import CheckboxTable from './CheckboxTable';

export default {
    title: 'CheckboxTable',
    component: CheckboxTable,
} as ComponentMeta<typeof CheckboxTable>;

const Template: ComponentStory<typeof CheckboxTable> = (args) => {
    
    if(args.variant === "draggable"){
      return <DraggableTable {...args}/>
    }
    return (<CheckboxTable {...args}/>);
}


function createData(
  id: string,  
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('0','Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('1','Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('2','Eclair', 262, 16.0, 24, 6.0),
  createData('3','Cupcake', 305, 3.7, 67, 4.3),
  createData('4','Gingerbread', 356, 16.0, 49, 3.9),
  createData('5','Honeycomb', 408, 3.2, 87, 6.5),
  createData('6','Jelly Bean', 375, 0.0, 94, 0.0),
  createData('7','KitKat', 518, 26.0, 65, 7.0),
  createData('8','Lollipop', 392, 0.2, 98, 0.0),
  createData('9','Marshmallow', 318, 0, 81, 2.0),
  createData('10','Nougat', 360, 19.0, 9, 37.0),
  createData('11','Oreo', 437, 18.0, 63, 4.0),
];

export const Draggable = Template.bind({});
Draggable.args = {
  rows: rows,
  headings: ['Dessert (100g serving)','Calories','Fat','Carbs','Protein'],
  variant: "draggable",
  pagination: false,
}

export const CheckboxPaginationSorting = Template.bind({});
CheckboxPaginationSorting.args = {
  rows: rows,
  headings: ['Dessert (100g serving)','Calories','Fat','Carbs','Protein'],
  variant: "checkBox",
  pagination: false,
  checkBoxes: false,
  sorting: true,
  draggable: true,
}
