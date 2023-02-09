import { default as MUITooltip, TooltipProps as MUITooltipProps } from '@mui/material/Tooltip';
import { Box } from '../Box';

export const Tooltip: React.FC<MUITooltipProps> = ({ children, title, placement, ...rest }) => {
    return (
        <MUITooltip title={title} placement={placement} {...rest}>
            <Box width={'max-content'}>{children}</Box>
        </MUITooltip>
    );
};
