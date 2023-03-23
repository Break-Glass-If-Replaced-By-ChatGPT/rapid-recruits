import { React } from 'react';
import { Sheet, Button, Box } from '@mui/joy'


export function DetailedJobView({selectedJob, dispatch}) {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
     maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  console.log("Job:",selectedJob)

  return (
    <Sheet
    maxWidth={false}
    minHeight='300px'    
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
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'row' }} className='backButton'>
          <Button color="primary" disabled={false} onClick={function(){}} size="md" variant="soft"> Back </Button>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column' }}>
          <h1> Title: {selectedJob.title} </h1> 
          <h1> Job Type: {selectedJob.category.label} </h1>
          <h1> Company: {selectedJob.company.display_name} </h1>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', flexDirection: 'column' }}>
          <h2> Location: {selectedJob.location.display_name}</h2>
          {selectedJob.salary_is_predicted === '1' ? <h2>Salary: {formatter.format(selectedJob.salary_min)}</h2> : <h2>Salary: ---</h2> }
          <h2> Description: {selectedJob.description} </h2>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column' }} className='applyButton'>
          <Button color="primary" disabled={false} onClick={function(){}} size="md" variant="soft"> Apply </Button>
        </Box>
      </div>
    </Sheet>
  );
};