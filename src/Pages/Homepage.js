import React, { useContext } from "react";
import { Box } from '@mui/material';
import { Sheet } from '@mui/joy';
import { FilterForm } from "../components/FilterForm/FilterForm";
import { SearchBarView } from "../components/SearchBar/SearchBar";
import { StateContext } from "../App";
import { BasicNav } from '../components/NavBars/BasicNav'

export default function Homepage() {
    const {state,dispatch} = useContext(StateContext);
    
    return (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column',}}>
            <Box sx={{ height:'8vh',display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column', textAlign: 'Center'}}>
                <BasicNav />
            </Box>
            <Sheet
            sx={{
                mx: '8px', // margin left & right
                py: 3, // padding top & bottom
                px: 2, // padçding left & right
                height:'80vh',
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
