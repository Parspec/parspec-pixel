import { default as MUITooltip, TooltipProps as MUITooltipProps } from '@mui/material/Tooltip';

interface TooltipProps extends MUITooltipProps {
    title: string;
}
export const Tooltip: React.FC<TooltipProps> = ({ children, title, placement, ...rest }) => {
    return (
        <MUITooltip title={title} placement={placement} {...rest}>
            {children}
        </MUITooltip>
    );
};
