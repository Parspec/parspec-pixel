import { default as MUITableHead, TableHeadProps } from '@mui/material/TableHead';

export const TableHead: React.FC<TableHeadProps> = (props) => {
    return <MUITableHead {...props} />;
};