import { React , useContext , useState} from 'react';
import { Button, Typography } from '@mui/joy'
// import { FilterContext } from './App'
import { Drawer, TextField, Box, Switch } from '@mui/material';
import { StateContext } from '../../App';

export function FilterForm(){
    const {state, dispatch} = useContext(StateContext);

    // const [state, dispatch] = useContext(FilterContext);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const switchHandler = (stateName) => {

    };

    const switchChecker = ( stateName) => {

    };

    return (
        <div>
            <Button color="primary" disabled={false} onClick={()=>setIsDrawerOpen(true)} size="md" variant="soft"> Filters </Button>
            <Drawer anchor='left' open={isDrawerOpen} onClose={()=> setIsDrawerOpen(false)}> 
                <Box p={2} textAlign='Left' display='flex' flexDirection={'column'}>
                    <Typography variant='h6'>Filters</Typography>
                    <TextField sx={{ marginTop: 1, marginBottom: 1 }} p={2} id="Where_input" label="Where" variant="outlined" onChange={(e)=>{dispatch({type: 'setWhere', payload: e.target.value})}}/>
                    <TextField sx={{ marginTop: 1, marginBottom: 1 }} p={2} id="Distance_input" label="Distance" variant="outlined" onChange={(e)=>{dispatch({type: 'setDistance', payload: e.target.value})}}/>
                    <TextField sx={{ marginTop: 1, marginBottom: 1 }} p={2} id="Category_input" label="Category" variant="outlined" onChange={(e)=>{dispatch({type: 'setCategory', payload: e.target.value})}}/>
                    <TextField sx={{ marginTop: 1, marginBottom: 1 }} p={2} id="SalaryMin_input" label="Min Salary" variant="outlined" onChange={(e)=>{dispatch({type: 'setSalaryMin', payload: e.target.value})}}/>
                    <TextField sx={{ marginTop: 1, marginBottom: 1 }} p={2} id="SalaryMax_input" label="Max Salary" variant="outlined" onChange={(e)=>{dispatch({type: 'setSalaryMax', payload: e.target.value})}}/>
                    <Typography variant="body2">Full Time</Typography>
                    <Switch p={2} id="outlined-basic" variant="outlined"/>
                    <Typography variant="body2">Part Time</Typography>
                    <Switch p={2} id="outlined-basic" variant="outlined"/>
                </Box>
            </Drawer>
        </div>
    );
};