/// <reference types="react" />
import { AccordionProps as MUIAccordionProps } from '@mui/material/Accordion';
export interface AccordionProps extends Omit<MUIAccordionProps, 'classes' | 'children'> {
    summary: React.ReactNode;
    details: React.ReactNode;
    variant: 'outlined' | 'elevation';
}
export declare const Accordion: React.FC<AccordionProps>;
