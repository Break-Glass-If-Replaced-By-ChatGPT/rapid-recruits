import React from "react";
import {Box, Typography} from '@mui/material';
import { ResumeForm } from '../components/ResumeForm/ResumeForm';
import { Sheet } from '@mui/joy';

export default function Resumepage(params) {
    return (
        <Sheet
        sx={{
            mx: '10px', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            borderRadius: 'md',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column' }}>
                <Typography variant="h3" align="center" >Application</Typography>
                <ResumeForm></ResumeForm>
            </Box>
        </Sheet>
    )
};
