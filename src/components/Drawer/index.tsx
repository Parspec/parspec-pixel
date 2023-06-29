import { default as MUIDrawer, DrawerProps } from '@mui/material/Drawer';

export const Drawer: React.FC<DrawerProps> = ({ children, ...rest }) => {
    return <MUIDrawer {...rest}>{children}</MUIDrawer>;
};
