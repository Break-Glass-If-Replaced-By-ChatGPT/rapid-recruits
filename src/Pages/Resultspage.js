import React from "react";
import {Box, Typography} from '@mui/material';
import { DetailedJobView } from "../components/DetailedJobView/detailedJobView";
import { DetailedViewPage } from "./DetailedViewPage";

export default function Resultspage(params) {

    return (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column',}}>
            <Box sx={{ height:'10vh',display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column', textAlign: 'Center'}}>
                <Typography variant="h1">Header</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'Column'}} justifyContent='center' alignContent='middle'
            alignItems='center'>
                {state.selectedJob != [] ? <h1>Full Page search Results</h1> : <DetailedViewPage/>}
            </Box>
        </Box>
    )
};
