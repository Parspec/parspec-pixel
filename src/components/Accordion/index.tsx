import { forwardRef } from 'react';
import { default as MUIAccordion, AccordionProps as MUIAccordionProps } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface AccordionProps extends Omit<MUIAccordionProps, 'classes'> {
    summary: React.ReactNode;
    details: React.ReactNode;
    variant: 'outlined' | 'elevation';
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(({ summary, details, variant, ...rest }) => (
    <MUIAccordion TransitionProps={{ unmountOnExit: true }} {...rest}>
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
