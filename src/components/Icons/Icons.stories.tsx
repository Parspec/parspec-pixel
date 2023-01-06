import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '.';
import {Grid} from '../Grid';
import {Box} from '../Box'

export default {
    title: 'Icon',
    component: Icon,
} as ComponentMeta<typeof Icon>;


const Template: ComponentStory<typeof Icon> = (args) => {
    return (
      Array.isArray(args.name) ? (
          <Grid container>
           {
            args.name.map((element)=>{ 
              return <Grid item xs={4} sm={3} md={2} gap={5} >
                <>
                <Icon name={element}/>
                <Box>{element}</Box>
                </>
              </Grid>
              }
            ) 
            }
          </Grid>
        ) : 
        <Icon {...args} />
    );
};

export const AllIcons = Template.bind({});
AllIcons.args = { 
  name: ["Close","UnfoldMore","Search","DragIndicator"],
  fontSize: 'medium'
};

export const CloseIcon = Template.bind({});
CloseIcon.args = { 
  name: 'Close',
  fontSize: 'medium'
};


