import { forwardRef, useState } from 'react';

import { default as MUIAccordion, AccordionProps as MUIAccordionProps } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import { Box } from '../Box';

interface AccordionMetaData {
    summary: React.ReactNode;
    details: React.ReactNode;
    labelId: string;
}

export interface AccordionProps extends Omit<MUIAccordionProps, 'classes' | 'children'> {
    options: AccordionMetaData[];
    getPanel?: (label: string) => void;
    isExpandCollapsAllowed?: boolean;
}

export const Accordion: React.FC<AccordionProps> = forwardRef<HTMLDivElement, AccordionProps>(({ options, getPanel, isExpandCollapsAllowed, ...rest }, ref) => {
    const [expanded, setExpanded] = useState<string | false>(options[0]['labelId']);

    const handleAccordionOnChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
        if (getPanel) {
            getPanel(panel);
        }
    };
    const Icon = () => {
        if (isExpandCollapsAllowed)
            return (
                <IconButton>
                    <ExpandMoreIcon
                        sx={{
                            pointerEvents: 'auto'
                        }}
                    />
                </IconButton>
            );
        return <ExpandMoreIcon />;
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
                                ...(isExpandCollapsAllowed && { pointerEvents: 'none' })
                            }}
                            expandIcon={<Icon />}
                        >
                            <Box
                                sx={{
                                    ...(isExpandCollapsAllowed && { pointerEvents: 'auto' })
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {item.summary}
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>{item.details}</AccordionDetails>
                    </MUIAccordion>
                );
            })}
        </>
    );
});
