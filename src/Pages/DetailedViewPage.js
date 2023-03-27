import { DetailedJobView } from '../components/DetailedJobView'
import { HalfJobsList } from '../components/JobsList'
import { Box } from '@mui/material'

export const DetailedViewPage = ({state, dispatch}) => {
  return(
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <HalfJobsList state={state} dispatch={dispatch}/>
      <DetailedJobView selectedJob={state.selectedJob}/>
    </Box>

  )
};