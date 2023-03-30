import React, { useState, useContext } from 'react';
import { prettify } from '../../common/utility'
import { Box, Table, TableBody, TableCell, TableContainer, TablePagination, TableHead, TableRow, TableSortLabel, Typography, Stack } from '@mui/material';
import {SectionTitle, TablePaper } from '../styles';
import { StateContext } from "../../App";
import { Sheet } from '@mui/joy';

export const HalfJobsList = () => {

  const { state, dispatch } = useContext(StateContext);

  const handleChangePage = (event, newPage) => {
    dispatch({type: 'setPage', payload: newPage + 1});
  }


  //Headers for jobType,                     
  const headers = [
    { id: 'Job Title', minWidth: 80, align: 'center' },
    { id: 'Company', minWidth: 80, align: 'center' },
    { id: 'Job Location', minWidth: 80, align: 'center'},
    { id: 'Category', minWidth: 80, align: 'center'},
    { id: 'Contract Type', minWidth: 80, align: 'center' },
    { id: 'Salary Range', minWidth: 80, align: 'center'},
  ]

  //CrashTable sorting state
  const [currentColumn, setCurrentColumn] = useState('');
  const [orderColumn, setOrderColumn] = useState('');
  const [order, setOrder] = useState('desc');

  /* Sets state for orderColumn & order */
  const handleSort = (columnId, sortValue) => {
      setCurrentColumn(columnId);
      if (orderColumn === sortValue) {
          setOrder(order === 'asc' ? 'desc' : 'asc');
      } else {
          setOrderColumn(sortValue);
          setOrder('desc');
      }
  };

  /* Orders the data in the columns according to the state value in orderColumn, either asc or desc depending on order */
  const filteredJobs = state.jobs?.sort((a, b) => {
      if (!orderColumn) {
          return 0;
      } else {
          const valueA = orderColumn.split('.').reduce((o, i) => o[i], a);
          const valueB = orderColumn.split('.').reduce((o, i) => o[i], b);
  
          if (order === 'asc') {
              return valueA > valueB ? 1 : -1;
          } else {
              return valueA < valueB ? 1 : -1;
          }
      }
  });
  
  const colName = (property) => {
      // eslint-disable-next-line default-case
      switch (property){
      case 'Job Title':
          return 'title';
      case 'Company':
          return 'company.display_name';
      case 'Job Location':
          return 'location.display_name';
      case 'Category':
          return 'category.label';
      case 'Contract Type':
          return 'contract_time';
      case 'Salary Range':
          return 'salary_min';
      }
    };

  return (
    <TablePaper elevation={3} variant="outlined" sx={{ height: '100%'}}>
        <TableContainer sx={{ flexGrow: 1, overflow: 'auto', height: 'calc(100% - 52px)' }} >
            <Table stickyHeader aria-label="sticky table" >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Stack direction="column" spacing={0}>
                    {headers.slice(0, 3).map((header) => (
                      <TableCell key={header.id} sx={{ height: '24px' }}>
                        <TableSortLabel active={currentColumn === header.id} direction={order} onClick={() => handleSort(header.id, colName(header.id))}>
                          {header.id}
                        </TableSortLabel>
                      </TableCell>
                    ))}
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="column" spacing={0}>
                    {headers.slice(3, 5).map((header) => (
                      <TableCell key={header.id} >
                        <TableSortLabel active={currentColumn === header.id} direction={order} onClick={() => handleSort(header.id, colName(header.id))}>
                          {header.id}
                        </TableSortLabel>
                      </TableCell>
                    ))}
                  </Stack>
                </TableCell>
                <TableCell >
                  <TableSortLabel active={currentColumn === headers[5].id} direction={order} onClick={() => handleSort(headers[5].id, colName(headers[5].id))}>
                    {headers[5].id}
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            { filteredJobs?.length ? (
                <TableBody>
                    {filteredJobs
                        .map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0, verticalAlign: 'top' }, cursor: 'pointer', '&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.04)', }}}
                            onClick={() => dispatch({ type: 'setSelectedJob', payload: row })}
                        >
                          <TableCell>
                            <Stack spacing={1}>
                              <Typography noWrap={false}>{prettify(row.title)}</Typography>
                              <Typography noWrap={false}>{prettify(row.company.display_name)}</Typography>
                              <Typography noWrap={false}>{`${prettify(row.location.display_name)}, ${prettify(row.location.area[0])}`}</Typography>
                            </Stack>
                          </TableCell>
                          <TableCell>
                            <Stack spacing={1}>
                              <Typography noWrap={false}>{prettify(row.category.label)}</Typography>
                              <Typography noWrap={false}>{prettify(row.contract_time)}</Typography>
                            </Stack>
                          </TableCell>
                          <TableCell><Typography noWrap={false}>{`$${row.salary_min} - $${row.salary_max}`}</Typography></TableCell>
                        </TableRow>
                        ))
                    }
                </TableBody>
            ) : null }
            </Table>
        </TableContainer>
      {!!(state.apiObject?.results?.length) &&
        <Box sx={{ position: 'sticky', bottom: 0, backgroundColor: 'inherit' }}>
          <TablePagination
            component="div"
            count={state.apiObject.count}
            page={state.page - 1}
            rowsPerPage={10}
            rowsPerPageOptions={[10]}
            onPageChange={handleChangePage}
          />
        </Box>
      }
    </TablePaper>
  );
};