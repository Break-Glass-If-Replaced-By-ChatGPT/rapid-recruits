import React from "react";
import { Box } from '@mui/material';
import { ResumeForm } from '../components/ResumeForm/ResumeForm';
import { Sheet } from '@mui/joy';
import { SearchNav } from "../components/NavBars/SearchNav";

export default function Resumepage(params) {
    return (
        <div>
        <SearchNav/>
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
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column',alignItems:'center' }}>
                <ResumeForm></ResumeForm>  
            </Box>
        </Sheet>
        </div>
    )
};
