/// <reference types="react" />
import { AccordionProps as MUIAccordionProps } from '@mui/material/Accordion';
interface AccordionMetaData {
    summary: React.ReactNode;
    details: React.ReactNode;
    labelId: string;
}
export interface AccordionProps extends Omit<MUIAccordionProps, 'classes' | 'children'> {
    options: AccordionMetaData[];
}
export declare const Accordion: React.FC<AccordionProps>;
export {};
