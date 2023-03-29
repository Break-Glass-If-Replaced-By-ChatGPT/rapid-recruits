import React from "react";
import {Box} from '@mui/material';
import {Sheet} from '@mui/joy';
import { FilterForm } from "../components/FilterForm/FilterForm";
import { BasicNav } from  '../components/NavBars/BasicNav';
export default function Homepage() {


   return (
       <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column',}}>
           <Box sx={{ height:'8vh',display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column', textAlign: 'Center'}}>
               <BasicNav />
           </Box>
           <Sheet
           sx={{
               mx: '10px', // margin left & right
               // my: 4, // margin top & bottom
               py: 3, // padding top & bottom
               px: 2, // padçding left & right
               height:'81vh',
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
                       <h1>Search Input</h1>
                       <FilterForm/>
               </Box>
           </Sheet>
       </Box>
   )
};
