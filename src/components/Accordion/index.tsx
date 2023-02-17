import { forwardRef } from 'react';

import { default as MUIAccordion, AccordionProps as MUIAccordionProps } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface AccordionProps extends Omit<MUIAccordionProps, 'classes' | 'children'> {
    summary: React.ReactNode;
    details: React.ReactNode;
    variant: 'outlined' | 'elevation';
}

export const Accordion: React.FC<AccordionProps> = forwardRef<HTMLDivElement, AccordionProps>(({ summary, details, variant, ...rest }, ref) => (
    <MUIAccordion ref={ref} TransitionProps={{ unmountOnExit: true }} {...rest}>
        <AccordionSummary
            sx={{
                flexDirection: 'row-reverse'
            }}
            expandIcon={<ExpandMoreIcon />}
        >
            {summary}
        </AccordionSummary>
        <AccordionDetails>{details}</AccordionDetails>
    </MUIAccordion>
));

Accordion.defaultProps = {
    variant: 'outlined'
};
