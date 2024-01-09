import { forwardRef, useState } from 'react';

import { default as MUIAccordion, AccordionProps as MUIAccordionProps } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Box } from '../Box';
import { IconButton } from '../IconButton';

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

const commonSxStyles = {
    pointerEvents: 'auto'
};

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
                                flexDirection: 'row-reverse',
                                borderBottom: '1px solid',
                                borderColor: 'neutral.main',
                                pointerEvents: 'none'
                            }}
                            expandIcon={
                                <IconButton>
                                    <ExpandMoreIcon sx={commonSxStyles} />
                                </IconButton>
                            }
                        >
                            <Box display={'flex'} justifyContent={'space-between'} width={'100%'} onClick={(e) => e.stopPropagation()}>
                                <Box sx={commonSxStyles}>{item.summary}</Box>
                                {item?.rightSummary && <Box sx={commonSxStyles}>{item.rightSummary}</Box>}
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>{item.details}</AccordionDetails>
                    </MUIAccordion>
                );
            })}
        </>
    );
});
