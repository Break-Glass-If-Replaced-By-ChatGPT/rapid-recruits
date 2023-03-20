import { React } from 'react';
import { Sheet} from '@mui/joy'


export function DetailedJobView(selectedJob, dispatch) {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  // console.log(selectedJob)

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
        <h1> Title: { selectedJob[0].title} </h1> 
        <h3> Job Type: { selectedJob[0].category.label} </h3>
        <h2> Company: {selectedJob[0].company.display_name} </h2>
        <h3> Location: { selectedJob[0].location.display_name} </h3>
        { selectedJob[0].salary_is_predicted === '1' ? <h2>Salary: {formatter.format( selectedJob[0].salary_min)}</h2> : <h2>Salary: ---</h2> }
        <h3> Description: { selectedJob[0].description} </h3>
      </div>
    </Sheet>
  );
};