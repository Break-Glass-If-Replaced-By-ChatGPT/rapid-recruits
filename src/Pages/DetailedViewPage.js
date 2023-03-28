import { DetailedJobView } from '../components/DetailedJobView/detailedJobView';
import { HalfJobsList } from '../components/JobsList/halfJobsList';
import { Box, Container } from '@mui/material';

export const DetailedViewPage = ({ state, dispatch }) => {
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{ display: 'flex', flexDirection: 'row', height: '100vh' }}
    >
      <Box sx={{ flex: '1', height: '100%', overflow: 'auto' }}>
        <HalfJobsList state={state} dispatch={dispatch} />
      </Box>
      <Box sx={{ flex: '1', height: '100%', overflow: 'auto' }}>
        <DetailedJobView selectedJob={state.selectedJob} />
      </Box>
    </Container>
  );
};
