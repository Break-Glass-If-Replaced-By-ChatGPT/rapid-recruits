import React from "react";
import {Box, Typography} from '@mui/material';

export default function Resumepage(params) {
    return (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column',}}>
            <Box sx={{ height:'10vh',display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column', textAlign: 'Center'}}>
                <Typography variant="h1">Header</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'Column'}} justifyContent='center' alignContent='middle'
            alignItems='center'>
                <ResumeForm/>
            </Box>
        </Box>
    )
};
