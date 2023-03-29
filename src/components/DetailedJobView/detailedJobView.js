import { React, useContext} from 'react';
import { useNavigate } from 'react-router-dom'
import { Sheet, Button, Box, Typography } from '@mui/joy';
import { StateContext } from '../../App';

//  Going to add selectedJob as a context in parent page later. Only leaving in for now to have a working component.
export function DetailedJobView() {
  const {state, dispatch} = useContext(StateContext);

  const selectedJob = state.selectedJob;

  const navigate = useNavigate();
 
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
     maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  
  // console.log("Job:",selectedJob)

  return (
    <div>
      { selectedJob?.location?.display_name ? (
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
          <div className="singleJobView">
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column' }}>
              <Typography variant= "h1"> Title: {selectedJob.title} </Typography>
              <Typography variant="h1"> Job Type: {selectedJob.category.label} </Typography>
              <Typography variant="h2"> Company: {selectedJob.company.display_name} </Typography>
              <Typography variant="h2"> Location: {selectedJob.location.display_name}</Typography>
              {selectedJob.salary_is_predicted === '1' ? <Typography variant="h2">Salary: {formatter.format(selectedJob.salary_min)}</Typography> : <Typography variant="h2">Salary: ---</Typography> }
              <Typography variant="body1"> Description: {selectedJob.description} </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', flexDirection: 'column' }} className='applyButton'>
              <Button color="primary" disabled={false} onClick={() => navigate('/apply')} size="md" variant="soft"> Apply </Button>
              <Button color="primary" disabled={false} onClick={() => dispatch({type: 'setSelectedJob', payload: null})} size="md" variant="soft"> Back </Button>
            </Box>
          </div>
        </Sheet> 
      ) : null }
    </div>
  );
};