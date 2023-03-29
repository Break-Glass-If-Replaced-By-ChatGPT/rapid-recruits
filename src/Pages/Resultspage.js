import React, { useContext } from "react";
import { Box } from '@mui/material';
import { SearchNav } from '../components/NavBars/SearchNav';
import { JobsList } from '../components/JobsList/jobsList';
import { StateContext } from "../App";
import { DetailedViewPage } from "./DetailedViewPage";

export default function Resultspage() {
    const {state, dispatch} = useContext(StateContext);

    return (
        <Box>
            <Box sx={{ height:'10vh',display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column', textAlign: 'Center'}}>
                    <SearchNav />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column' }}>
            {state.selectedJob !== null ? <DetailedViewPage></DetailedViewPage> : <JobsList></JobsList>}
            </Box>
        </Box>
    )
};
