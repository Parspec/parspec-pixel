import { default as MUITableRow, TableRowProps } from '@mui/material/TableRow';

export const TableRow: React.FC<TableRowProps> = (props) => {
    return <MUITableRow {...props} />;
};