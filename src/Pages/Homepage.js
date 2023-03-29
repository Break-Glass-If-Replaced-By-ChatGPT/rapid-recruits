import React, { useContext } from "react";
import {Box, Typography} from '@mui/material';
import {Sheet} from '@mui/joy';
import { FilterForm } from "../components/FilterForm/FilterForm";
import { SearchBarView } from "../components/SearchBar/SearchBar";
import { StateContext } from "../App";

export default function Homepage() {
    const {state,dispatch} = useContext(StateContext);
    
    return (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column',}}>
            <Box sx={{ height:'10vh',display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column', textAlign: 'Center'}}>
                <Typography variant="h1">Home</Typography>
            </Box>
            <Sheet
            sx={{
                mx: '10px', // margin left & right
                my: 4, // margin top & bottom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
                height:'75vh',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
                borderRadius: 'md',
                boxShadow: 'md',
              }}
              variant="outlined"
              >
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'Column'}} justifyContent='center' alignContent='middle'
              alignItems='center'>
                        <SearchBarView dispatch={dispatch}></SearchBarView>
                        <FilterForm></FilterForm>
                </Box>
            </Sheet>
        </Box>
    )
};
