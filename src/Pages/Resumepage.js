import React from "react";
import {Box, Typography} from '@mui/material';
import { ResumeForm } from '../components/ResumeForm';

export default function Resumepage(params) {
    return (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column' }}>
            <Typography variant="h1">Application</Typography>
            <ResumeForm></ResumeForm>
        </Box>
    )
};
