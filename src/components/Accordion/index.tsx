import { forwardRef, useState } from 'react';

import { default as MUIAccordion, AccordionProps as MUIAccordionProps } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionMetaData {
    summary: React.ReactNode;
    details: React.ReactNode;
    labelId: string;
}

export interface AccordionProps extends Omit<MUIAccordionProps, 'classes' | 'children'> {
    options: AccordionMetaData[];
    variant?: 'outlined' | 'elevation';
}

export const Accordion: React.FC<AccordionProps> = forwardRef<HTMLDivElement, AccordionProps>(({ options, variant, ...rest }, ref) => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleAccordionOnChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            {options.map((item, index) => {
                return (
                    <MUIAccordion key={index} ref={ref} TransitionProps={{ unmountOnExit: true }} {...rest} expanded={expanded === item.labelId} onChange={handleAccordionOnChange(item.labelId)}>
                        <AccordionSummary
                            sx={{
                                flexDirection: 'row-reverse'
                            }}
                            expandIcon={<ExpandMoreIcon />}
                        >
                            {item.summary}
                        </AccordionSummary>
                        <AccordionDetails>{item.details}</AccordionDetails>
                    </MUIAccordion>
                );
            })}
        </>
    );
});

Accordion.defaultProps = {
    variant: 'outlined'
};
