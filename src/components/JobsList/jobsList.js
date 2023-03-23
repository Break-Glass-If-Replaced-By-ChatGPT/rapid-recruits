import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TablePagination, TableHead, TableRow, TableSortLabel } from '@mui/material';
import {SectionTitle, TablePaper } from '../styles';

export const JobsList = ({ jobs, page, dispatch }) => {

    console.log(page);

    const handleChangePage = (e, newPage) => {
        dispatch({type: 'setPage', payload: page+1});
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
    const filteredJobs = jobs?.results?.sort((a, b) => {
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
            { jobs?.results?.length ? (
                <TablePaper elevation={0} variant="outlined">
                    <TableContainer sx={{ maxHeight: 1000 }}>
                        <SectionTitle variant="h5">{'Search Results'}</SectionTitle>
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow >
                                {headers.map((column) => (
                                    !!(jobs?.results?.length) &&
                                    <TableCell key={column.id}>
                                        <TableSortLabel active={currentColumn === column.id} direction={order} onClick={() => handleSort(column.id, colName(column.id))}>
                                            {column.id}
                                        </TableSortLabel>
                                    </TableCell>
                                ))}
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
                                        <TableCell scope="row" sx={{ verticalAlign: 'top' }}>{row.title}</TableCell>
                                        <TableCell sx={{ verticalAlign: 'top' }}>{row.company.display_name}</TableCell>
                                        <TableCell sx={{ verticalAlign: 'top' }}>{`${row.location.display_name}, ${row.location.area[0]}`}</TableCell>
                                        <TableCell sx={{ verticalAlign: 'top' }}>{row.category.label}</TableCell>
                                        <TableCell sx={{ verticalAlign: 'top' }}>{row.contract_time}</TableCell>
                                        <TableCell sx={{ verticalAlign: 'top' }}>{`$${row.salary_min}-$${row.salary_max}`}</TableCell>
                                    </TableRow>
                                    ))
                                }
                            </TableBody>
                        ) : null }
                        </Table>
                    </TableContainer>
                    
                    {!!(jobs?.results?.length) &&
                        <TablePagination
                        component="div"
                        count={jobs.count}
                        page={page-1}
                        rowsPerPage={10}
                        onPageChange={handleChangePage}
                        />
                    }
                </TablePaper>
            ) : null }
        </div>
    );
};