/// <reference types="react" />
import { AccordionProps as MUIAccordionProps } from '@mui/material/Accordion';
interface AccordionMetaData {
    summary: React.ReactNode;
    details: React.ReactNode;
    labelId: string;
    rightSummary?: React.ReactNode;
}
export interface AccordionProps extends Omit<MUIAccordionProps, 'classes' | 'children'> {
    options: AccordionMetaData[];
    getPanel?: (label: string) => void;
}
export declare const Accordion: React.FC<AccordionProps>;
export {};
