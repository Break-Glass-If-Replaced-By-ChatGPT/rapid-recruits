import { React , useContext , useState} from 'react';
import { Button, Typography } from '@mui/joy'
import { Drawer, TextField, Box} from '@mui/material';
import { StateContext } from '../../App';


export function FilterForm(){
   const {dispatch} = useContext(StateContext);

   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   const resetValues={
       where:'',
       distance:'',
       category:'',
       minSalary: -1,
       maxSalary: -1,
   };

   let updated = {
    where:'',
    distance:'',
    category:'',
    minSalary: -1,
    maxSalary: -1,
    };


   const handleChange = (state, e) => {
       updated.state = e.target.value;
       // console.log(state, updated.state, e.target.value)
   };


   const handleSubmit = () => {
       dispatch({type: 'setWhere', payload: updated.where});
       dispatch({type: 'setDistance', payload: updated.distance});
       dispatch({type: 'setCategory', payload: updated.category});
       dispatch({type: 'setSalaryMin', payload: updated.minSalary});
       dispatch({type: 'setSalaryMax', payload: updated.maxSalary});
       console.log("Filters Applied");
       updated=resetValues;
   };




   return (
       <div>
           <Button color="primary" disabled={false} onClick={()=>setIsDrawerOpen(true)} size="md" variant="soft"> Filters </Button>
           <Drawer anchor='left' open={isDrawerOpen} onClose={()=> setIsDrawerOpen(false)}>
               <form onSubmit={()=>handleSubmit()}>
                   <Box p={2} textAlign='Left' display='flex' flexDirection={'column'}>
                       <Typography variant='h6'>Filters</Typography>
                       <TextField sx={{ marginTop: 1, marginBottom: 1 }} p={2} id="Where_input" label="Where" variant="outlined" onChange={(e)=>handleChange('where', e)}/>
                       <TextField sx={{ marginTop: 1, marginBottom: 1 }} p={2} id="Distance_input" label="Distance" variant="outlined" onChange={(e)=>handleChange('distance', e)}/>
                       <TextField sx={{ marginTop: 1, marginBottom: 1 }} p={2} id="Category_input" label="Category" variant="outlined" onChange={(e)=>handleChange('category', e)}/>
                       <TextField sx={{ marginTop: 1, marginBottom: 1 }} p={2} id="SalaryMin_input" label="Min Salary" variant="outlined" onChange={(e)=>handleChange('minSalary', e)}/>
                       <TextField sx={{ marginTop: 1, marginBottom: 1 }} p={2} id="SalaryMax_input" label="Max Salary" variant="outlined" onChange={(e)=>handleChange('maxSalary', e)}/>
                       <Button color="primary" disabled={false} type='Submit' size="md" variant="soft"> Apply </Button>
                   </Box>
               </form>
           </Drawer>
       </div>
   );
};
