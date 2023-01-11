import {Box} from '../Box';
import {TableBody} from '../TableBody';
import {TableCell} from '../TableCell';
import {TableContainer} from '../TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Checkbox from '@mui/material/Checkbox';
import { EnhancedTableHead } from './EnhancedTableHead';
import { useEffect, useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { PixelIcons } from '../Icons';
import { Data, getComparator, Order, stableSort } from './TableUtilities';



export default function CheckboxTable(props: any) {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Data>('calories');
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [items, setItems] = useState(props.rows)

  useEffect(() => {
    setItems(props.rows)
  }, [props.rows])
  
  const handleDragEnd = (e: any) => {
    if (!e.destination) return;
    let tempData = Array.from(items);
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    setItems(tempData);
  };
  
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = items.map((n: any) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - items.length) : 0;

  return (
    // <DragDropContext
    //   onDragEnd={handleDragEnd}
    // >
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table stickyHeader
            sx={{ width: "100%" }}
            aria-labelledby="tableTitle"
            size={'small'}
          >
            <EnhancedTableHead
              checkBox = {props.checkBoxes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={items.length}
              sorting={props.sorting}
            />
            {/* <Droppable droppableId="droppable-1" type='PERSON'>
            {(provided, snapshot) => ( */}
              <TableBody 
              // ref={provided.innerRef}
              // {...provided.droppableProps}
              >
                {/* {provided.placeholder} */}
                {
                (props.sorting ? stableSort(items, getComparator(order, orderBy)) : items)
                  .slice(props.pagination ? page * rowsPerPage : 0, props.pagination ? page * rowsPerPage + rowsPerPage : items.length)
                  .map((row: any, index: number) => {
                    const isItemSelected = isSelected(String(row.name));
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      // <Draggable key={index} draggableId={String(index)} index={+row.id}>
                      // {(provided, snapshot) => (
                      <TableRow
                        // ref={provided.innerRef}
                        // {...provided.draggableProps}
                        // {...provided.dragHandleProps}
                        hover
                        onClick={(event) => props.checkBoxes ? handleClick(event, String(row.name)) : null}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={props.checkBoxes ? isItemSelected : false}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }, width: "100%", }}
                      >
                        <TableCell padding="checkbox">
                          {props.draggable && <Box component="span" >
                            <PixelIcons.DragIndicatorIcon fontSize='small'/>
                          </Box>}
                          {props.checkBoxes &&
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                'aria-labelledby': labelId,
                              }}
                            />
                          }
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                          // sx={{position: "sticky", backgroundColor: "green", left: 0}}
                        >
                          {row.name}
                        </TableCell>
                        <TableCell >{row.calories}</TableCell>
                        <TableCell 
                        // sx={{position: "sticky", backgroundColor: "green", left: 0}} 
                        >{row.fat}</TableCell>
                        <TableCell >{row.carbs}</TableCell>
                        <TableCell >{row.protein}</TableCell>
                        <TableCell >{row.carbs}</TableCell>
                        <TableCell >{row.protein}</TableCell>
                        <TableCell >{row.carbs}</TableCell>
                        <TableCell >{row.protein}</TableCell>
                      </TableRow>
                      // )}
                      // </Draggable>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 33 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            {/* )} */}
            {/* </Droppable> */}
          </Table>
        </TableContainer>
        {
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
        }
      </Paper>
    </Box>
    // </DragDropContext>
  );
}
