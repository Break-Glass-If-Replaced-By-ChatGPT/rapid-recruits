import { React , useContext , useState} from 'react';
import { Button, Typography } from '@mui/joy'
// import { FilterContext } from './App'
import { Drawer, TextField, Box, Switch } from '@mui/material';

export function FilterForm(){

    // const [state, dispatch] = useContext(FilterContext);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div>
            <Button color="primary" disabled={false} onClick={()=>setIsDrawerOpen(true)} size="md" variant="soft"> Filters </Button>
            <Drawer anchor='left' open={isDrawerOpen} onClose={()=> setIsDrawerOpen(false)}> 
                <Box p={2} textAlign='Left' display='flex' flexDirection={'column'}>
                    <Typography variant='h6'>Filters</Typography>
                    <TextField p={2} id="outlined-basic" label="Where" variant="outlined"/>
                    <TextField p={2} id="outlined-basic" label="Distance" variant="outlined"/>
                    <TextField p={2} id="outlined-basic" label="Category" variant="outlined"/>
                    <TextField p={2} id="outlined-basic" label="Min Salary" variant="outlined"/>
                    <TextField p={2} id="outlined-basic" label="Max Salary" variant="outlined"/>
                    <Typography variant="body2">Full Time</Typography>
                    <Switch p={2} id="outlined-basic" variant="outlined"/>
                    <Typography variant="body2">Part Time</Typography>
                    <Switch p={2} id="outlined-basic" variant="outlined"/>
                </Box>
            </Drawer>
        </div>
    );
};