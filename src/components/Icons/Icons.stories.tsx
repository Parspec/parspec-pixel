import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Icons} from './index';
import {Grid} from '../Grid';
import {Box} from '../Box'

export default {
    title: 'Icon',
    component: Icons.SearchIcon,
} as ComponentMeta<typeof Icons.SearchIcon>;

const Template: ComponentStory<any> = (args) => {
    
    return (
      Array.isArray(args.icons) ? (
          <Grid container>
          {
            args.icons.map((element)=>{ 
              return <Grid item xs={4} sm={3} md={2} gap={5} >
                <>
                <element.icon fontSize={args.fontSize} />
                <Box>{element.name}</Box>
                </>
              </Grid>
              }
            ) 
            }
          </Grid>
        ) : 
        (<args.icons fontSize={args.fontSize} />)
    );
};

export const AllIcons = Template.bind({});
AllIcons.args = { 
  icons: [
    {icon:Icons.ParspecLogoIcon, name: "ParspecLogoIcon"},
    {icon:Icons.TrendingUpIcon, name: "TrendingUpIcon"},
    {icon:Icons.SearchIcon, name: "SearchIcon"},
    {icon:Icons.UnfoldMoreIcon, name: "UnfoldMoreIcon"},
    {icon:Icons.CloseIcon, name: "CloseIcon"},
    {icon:Icons.DragIndicatorIcon, name: "DragIndicatorIcon"},
   ],
  fontSize: 'medium'
};

export const ParspecLogoIcon = Template.bind({});
ParspecLogoIcon.args = { 
  icons: Icons.ParspecLogoIcon,
  fontSize: 'large'
};


