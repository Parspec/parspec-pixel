import { Box } from '../Box';
import { PixelIcons } from '../Icons';
import {
  TableContainer,
  Table as MUITable, 
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  TablePagination
} from '@mui/material';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useCallback, useEffect, useState } from 'react';

type Order = 'asc' | 'desc';
interface EnhancedTableProps {
  numSelected: number;
  // onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  rows: any;
  headings: any
}
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export const DraggableTable: React.FC<EnhancedTableProps> = (props) => {
  const [items, setItems] = useState(props.rows);
  const { onSelectAllClick, order, orderBy, numSelected, rowCount} = props;
  // , onRequestSort 
  // const createSortHandler =
  //   (property: keyof items) => (event: React.MouseEvent<unknown>) => {
  //     onRequestSort(event, property);
  //   };
  // const [order, setOrder] = React.useState<Order>('asc');
  // const [orderBy, setOrderBy] = React.useState<keyof Data>('calories');
  // const [selected, setSelected] = React.useState<readonly string[]>([]);
  // const [page, setPage] = React.useState(0);
  // const [dense, setDense] = React.useState(false);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() =>{
    console.log(items)
  },[items])
  const handleDragEnd = useCallback((e: any) => {
    if (!e.destination) return;
    let tempData = Array.from(items);
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    setItems(tempData);
  }, []);
  
  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
    >
    <Paper>
    <TableContainer component={Paper}>
      <MUITable stickyHeader sx={{ width: "100%",}} size="small" aria-label="simple table" >
        <TableHead sx={{"background-color": "#E3E6F0"}} >
          <TableRow>
            <TableCell>
              <Checkbox
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{
                  'aria-label': 'select all items',
                }}
              />  
            </TableCell>
            {props.headings.map((element: string)=>
              <TableCell>{element}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <Droppable droppableId="droppable-1" type="PERSON">
          {(provided, snapshot) => (
            <TableBody
              sx={{ width: "100%" }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {provided.placeholder}
              {items.map((row: any, idx: number) => (
                <Draggable key={idx} draggableId={String(idx)} index={+row.id}>
                {(provided, snapshot) => (
                  <TableRow
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, width: "100%", }}
                    >
                
                    <TableCell component="th" scope="row">
                        <Box component="span" {...provided.dragHandleProps}>
                          <PixelIcons.DragIndicatorIcon fontSize='small'/>
                        </Box>
                      <Checkbox size='small' sx={{padding: "0px"}}/>
                    </TableCell>
                    
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                    <TableCell>{row.carbs}</TableCell>
                    <TableCell>{row.protein}</TableCell>
                  </TableRow>
                )}
                </Draggable>
              ))}
            </TableBody>
          )}
        </Droppable>
      </MUITable>
    </TableContainer>
    {/* {
    props.pagination ? (
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={items.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
      />) : null
    
    } */}
    </Paper>
    </DragDropContext>
  );
}
