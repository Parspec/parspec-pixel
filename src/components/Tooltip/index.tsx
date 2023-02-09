import { default as MUITooltip, TooltipProps as MUITooltipProps } from '@mui/material/Tooltip';

export const Tooltip: React.FC<MUITooltipProps> = ({ children, title, placement, ...rest }) => {
    return (
        <MUITooltip title={title} placement={placement} {...rest}>
            {children}
        </MUITooltip>
    );
};
