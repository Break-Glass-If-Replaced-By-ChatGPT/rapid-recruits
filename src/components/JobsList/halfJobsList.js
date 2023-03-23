import React, { useState } from 'react';
import { prettify } from '../../common/utility'
import { Table, TableBody, TableCell, TableContainer, TablePagination, TableHead, TableRow, TableSortLabel, Typography, Stack } from '@mui/material';
import {SectionTitle, TablePaper } from '../styles';

export const HalfJobsList = ({ state, dispatch }) => {

    console.log(state.page);

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
        <div>
            { state.jobs?.length ? (
                <TablePaper elevation={0} variant="outlined">
                    <TableContainer sx={{ maxHeight: 1000 }}>
                        <SectionTitle variant="h5">{'Search Results'}</SectionTitle>
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              <Stack direction="column" spacing={0}>
                                {headers.slice(0, 3).map((header) => (
                                  <TableCell key={header.id}>
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
                                  <TableCell key={header.id}>
                                    <TableSortLabel active={currentColumn === header.id} direction={order} onClick={() => handleSort(header.id, colName(header.id))}>
                                      {header.id}
                                    </TableSortLabel>
                                  </TableCell>
                                ))}
                              </Stack>
                            </TableCell>
                            <TableCell>
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
                                        sx={{ '&:last-child td, &:last-child th': { border: 0, verticalAlign: 'top' } }}
                                    >
                                      <TableCell scope ="row" sex={{ verticalAlign: 'top' }}>
                                        <Stack spacing={1}>
                                          <Typography>{prettify(row.title)}</Typography>
                                          <Typography>{prettify(row.company.display_name)}</Typography>
                                          <Typography>{`${prettify(row.location.display_name)}, ${prettify(row.location.area[0])}`}</Typography>
                                        </Stack>
                                      </TableCell>
                                      <TableCell scope ="row" sex={{ verticalAlign: 'top' }}>
                                        <Stack spacing={1}>
                                          <Typography>{prettify(row.category.label)}</Typography>
                                          <Typography>{prettify(row.contract_time)}</Typography>
                                        </Stack>
                                      </TableCell>
                                      <TableCell sx={{ verticalAlign: 'top' }}>{`$${row.salary_min}-$${row.salary_max}`}</TableCell>
                                    </TableRow>
                                    ))
                                }
                            </TableBody>
                        ) : null }
                        </Table>
                    </TableContainer>
                    
                    {!!(state.jobs?.length) &&
                        <TablePagination
                        component="div"
                        count={state.apiObject.count}
                        page={state.page-1}
                        rowsPerPage={10}
                        onPageChange={handleChangePage}
                        />
                    }
                </TablePaper>
            ) : null }
        </div>
    );
};