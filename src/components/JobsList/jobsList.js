import React, { useState, useRef, useLayoutEffect } from 'react';
import { prettify, useWindowSize } from '../../common/utility'
import { Table, TableBody, TableCell, TableContainer, TablePagination, TableHead, TableRow, TableSortLabel } from '@mui/material';
import {SectionTitle, TablePaper } from '../styles';

export const JobsList = ({ state, dispatch }) => {

    const headerRef = useRef(null);
    const rowRef = useRef(null);
    const columnHeaderRef = useRef(null);
    const paginationRef = useRef(null);

    /*Lines 11-43 dynamically track the height of the table headers & column items in order to determine
    how many items can fit within the current screen-size. Enabling dynamic number of elements per-page*/
    // State for the height of the table elements
    const [headerHeight, setHeaderHeight] = useState(0);
    const [rowHeight, setRowHeight] = useState(0);
    const [columnHeaderHeight, setColumnHeaderHeight] = useState(0);
    const [paginationHeight, setPaginationHeight] = useState(0);


    // Get the height of the table elements using useLayoutEffect
    useLayoutEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
        if (rowRef.current) {
            setRowHeight(rowRef.current.offsetHeight);
        }
        if (columnHeaderRef.current) {
            setColumnHeaderHeight(columnHeaderRef.current.offsetHeight)
        }
        if (paginationRef.current) {
            setPaginationHeight(paginationRef.current.offsetHeight)
        }
    }, [state.jobs]);

    // Calculate the number of items per page based on the window height and table element heights, but doesn't allow a value higher than 10, as the APIs built in pagination is limited to 10 items.
    const windowSize = useWindowSize();
    const maxRowsPerPage = Math.max(1, Math.floor((windowSize.height - headerHeight - columnHeaderHeight - paginationHeight) / rowHeight))
    const rowsPerPage = headerHeight > 0 && rowHeight > 0 && columnHeaderHeight > 0 && paginationHeight > 0 && maxRowsPerPage < 10
        ? maxRowsPerPage
        : 10; // Set a default value for rowsPerPage when the heights are not available, this dodges an error where it thinks rowsPerPage is infinity on initial render
  

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
            const valueA = orderColumn.reduce((o, i) => o[i], a);
            const valueB = orderColumn.reduce((o, i) => o[i], b);

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
                    <TableContainer >
                        <div ref={headerRef}>
                            <SectionTitle variant="h5">{'Search Results'}</SectionTitle>
                        </div>
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead ref={columnHeaderRef}>
                            <TableRow >
                                {headers.map((column) => (
                                    !!(state.jobs?.length) &&
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
                                {filteredJobs.slice((state.page - 1) * rowsPerPage, state.page * rowsPerPage)
                                    .map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0, verticalAlign: 'top' } }}
                                        ref={index === 0 ? rowRef : null}
                                    >
                                        <TableCell scope="row" sx={{ verticalAlign: 'top' }}>{prettify(row.title)}</TableCell>
                                        <TableCell sx={{ verticalAlign: 'top' }}>{prettify(row.company.display_name)}</TableCell>
                                        <TableCell sx={{ verticalAlign: 'top' }}>{`${prettify(row.location.display_name)}, ${prettify(row.location.area[0])}`}</TableCell>
                                        <TableCell sx={{ verticalAlign: 'top' }}>{prettify(row.category.label)}</TableCell>
                                        <TableCell sx={{ verticalAlign: 'top' }}>{prettify(row.contract_time)}</TableCell>
                                        <TableCell sx={{ verticalAlign: 'top' }}>{`$${row.salary_min}-$${row.salary_max}`}</TableCell>
                                    </TableRow>
                                    ))
                                }
                            </TableBody>
                        ) : null }
                        </Table>
                    </TableContainer>
                    
                    {!!(state.apiObject?.results?.length) &&
                        <TablePagination
                        ref={paginationRef}
                        component="div"
                        count={state.apiObject.count}
                        page={state.page-1}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[rowsPerPage]}
                        onPageChange={handleChangePage}
                        />
                    }
                </TablePaper>
            ) : null }
        </div>
    );
};