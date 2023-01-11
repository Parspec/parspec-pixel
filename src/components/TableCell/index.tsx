import { default as MUITableCell, TableCellProps } from '@mui/material/TableCell';

export const TableCell: React.FC<TableCellProps> = (props) => {
    return <MUITableCell {...props} />;
};