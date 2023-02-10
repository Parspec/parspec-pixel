import { default as MUIAccordion, AccordionProps as MUIAccordionProps } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface AccordionProps extends Omit<MUIAccordionProps, 'classes'> {
    summary: React.ReactNode;
    details: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ summary, details, ...rest }) => {
    return (
        <div>
            <MUIAccordion {...rest}>
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
        </div>
    );
};
