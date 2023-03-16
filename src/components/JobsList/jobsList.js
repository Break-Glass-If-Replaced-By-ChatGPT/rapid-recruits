import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TablePagination, TableHead, TableRow } from '@mui/material';
import {SectionTitle, TablePaper } from '../styles';

export const JobsList = ({ jobs, page, dispatch }) => {

    const filteredJobs = jobs;
    // console.log(filteredJobs)
    console.log('filteredJobs: ')
    console.log(filteredJobs)
    console.log('filteredJobs results:')
    console.log(filteredJobs.results)

    const handleChangePage = (e, newPage ) => {
        dispatch({type: 'setPage', payload: e});
    }

    //Headers for jobType,                     
    const headers = [
        { id: 'Job Title', minWidth: 80, align: 'center' },
        { id: 'Company', minWidth: 80, align: 'center' },
        { id: 'Job Location', minWidth: 80, align: 'center'},
        { id: 'Category', minWidth: 80, align: 'center'},
        { id: 'Part Time/Full Time', minWidth: 80, align: 'center' },
        { id: 'Salary Range', minWidth: 80, align: 'center'},
    ]

    // filteredJobs.results.map((row, index) => {console.log(row)})

    return (
        <div>
                <TablePaper elevation={0} variant="outlined">
                    <TableContainer sx={{ maxHeight: 1000 }}>
                        <SectionTitle variant="h5">{'Search Results'}</SectionTitle>
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow >
                            {headers.map((column,idx) => (
                                <TableCell key={idx}>
                                {column.id}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        {!!(filteredJobs.results.length) &&
                            <TableBody>
                                {filteredJobs.results
                                    .map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0, verticalAlign: 'top' } }}
                                    >
                                        <TableCell scope="row" sx={{ verticalAlign: 'top' }}>{row.title}</TableCell>
                                        <TableCell sx={{ verticalAlign: 'top' }}>{row.company.display_name}</TableCell>
                                        <TableCell sx={{ verticalAlign: 'top' }}>{row.location.display_name}</TableCell>
                                        <TableCell sx={{ verticalAlign: 'top' }}>{row.category.label}</TableCell>
                                        <TableCell sx={{ verticalAlign: 'top' }}>{row.contract_time}</TableCell>
                                        <TableCell sx={{ verticalAlign: 'top' }}>{`$${row.salary_min}-$${row.salary_max}`}</TableCell>
                                    </TableRow>
                                    ))
                                }
                            </TableBody>
                        }
                        </Table>
                    </TableContainer>
                    {!!(filteredJobs.length) &&
                        <TablePagination
                        component="div"
                        count={filteredJobs.length}
                        page={page}
                        rowsPerPage={10}
                        onPageChange={handleChangePage}
                        />
                    }
                </TablePaper>
        </div>
      );
};