import { default as MUITableContainer, TableContainerProps } from '@mui/material/TableContainer';

export const TableContainer: React.FC<TableContainerProps> = (props) => {
    return <MUITableContainer {...props} />;
};