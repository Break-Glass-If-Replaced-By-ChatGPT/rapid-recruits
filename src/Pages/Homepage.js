import React from "react";
import {Box, Typography} from '@mui/material';
import { FilterForm } from "../components/FilterForm/FilterForm";

export default function Homepage() {
    return (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column' }}>
            <Typography variant="h1">Home</Typography>
            <FilterForm></FilterForm>
        </Box>
    )
};
