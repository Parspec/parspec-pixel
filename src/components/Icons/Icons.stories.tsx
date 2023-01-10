import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as PixelIcons from '.';
import {Grid} from '../Grid';
import {Box} from '../Box'

export default {
    title: 'Icon',
    component: PixelIcons.SearchIcon,
} as ComponentMeta<typeof PixelIcons.SearchIcon>;

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
    {icon:PixelIcons.ParspecLogoIcon, name: "ParspecLogoIcon"},
    {icon:PixelIcons.TrendingUpIcon, name: "TrendingUpIcon"},
    {icon:PixelIcons.SearchIcon, name: "SearchIcon"},
    {icon:PixelIcons.UnfoldMoreIcon, name: "UnfoldMoreIcon"},
    {icon:PixelIcons.CloseIcon, name: "CloseIcon"},
    {icon:PixelIcons.DragIndicatorIcon, name: "DragIndicatorIcon"},
   ],
  fontSize: 'medium'
};

export const ParspecLogoIcon = Template.bind({});
ParspecLogoIcon.args = { 
  icons: PixelIcons.ParspecLogoIcon,
  fontSize: 'large'
};


