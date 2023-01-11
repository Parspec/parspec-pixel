import { Checkbox, TableSortLabel } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Box } from "../Box";
import { TableCell } from "../TableCell";
import { TableHead } from "../TableHead";
import { TableRow } from "../TableRow";

type Order = 'asc' | 'desc';

interface Data {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}
interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    disablePadding: true,
    label: 'Dessert (100g serving)',
  },
  {
    id: 'calories',
    disablePadding: false,
    label: 'Calories',
  },
  {
    id: 'fat',
    disablePadding: false,
    label: 'Fat (g)',
  },
  {
    id: 'carbs',
    disablePadding: false,
    label: 'Carbs (g)',
  },
  {
    id: 'protein',
    disablePadding: false,
    label: 'Protein (g)',
  },
  {
    id: 'carbs',
    disablePadding: false,
    label: 'Carbs (g)',
  },
  {
    id: 'protein',
    disablePadding: false,
    label: 'Protein (g)',
  },
  {
    id: 'carbs',
    disablePadding: false,
    label: 'Carbs (g)',
  },
  {
    id: 'protein',
    disablePadding: false,
    label: 'Protein (g)',
  },
];


interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  checkBox: boolean;
  sorting: boolean;
}

export function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead sx={{backgroundColor:"green"}}>
      <TableRow>
        <TableCell padding="checkbox">
          { props.checkBox &&
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all items',
              }}
            />
          }
        </TableCell>
        {headCells.map((headCell,idx) => (
          <TableCell
            key={headCell.id}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            // sx={idx===0 || idx===2 ? {position: "sticky", backgroundColor: "green", left: 0} : {}}
          >
            {
              props.sorting ? 
              ( 
                <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              ) : 
              (headCell.label)
            }
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
