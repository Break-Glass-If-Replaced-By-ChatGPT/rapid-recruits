import React from "react";
import {Box, Typography} from '@mui/material';
import { SearchNav } from '../components/NavBars/SearchNav'

export default function Resultspage(params) {
    return (
        <Box>
            <Box sx={{ height:'10vh',display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column', textAlign: 'Center'}}>
                    <SearchNav />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column' }}>
                <Typography variant="h1">Results</Typography>
            </Box>
        </Box>
    )
};
