import React from "react";
import { Box } from '@mui/material';
import { SearchNav } from '../components/NavBars/SearchNav';
import { JobsList } from '../components/JobsList/jobsList';

export default function Resultspage({ state, dispatch }) {
    return (
        <Box>
            <Box sx={{ height:'10vh',display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column', textAlign: 'Center'}}>
                    <SearchNav />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column' }}>
                <JobsList state={state} dispatch={dispatch} />
            </Box>
        </Box>
    )
};
