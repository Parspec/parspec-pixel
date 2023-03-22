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
    getPanel?: (label: string) => void;
}

export const Accordion: React.FC<AccordionProps> = forwardRef<HTMLDivElement, AccordionProps>(({ options, getPanel, ...rest }, ref) => {
    const [expanded, setExpanded] = useState<string | false>(options[0]['labelId']);

    const handleAccordionOnChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
        if (getPanel) {
            getPanel(panel);
        }
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
