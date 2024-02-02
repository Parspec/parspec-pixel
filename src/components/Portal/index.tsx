import { Portal as MUIPortal, PortalProps as MUIPortalProps } from '@mui/base';

export const Portal: React.FC<MUIPortalProps> = ({ children, container, disablePortal }) => {
    return (
        <MUIPortal container={container} disablePortal={disablePortal}>
            {children}
        </MUIPortal>
    );
};
