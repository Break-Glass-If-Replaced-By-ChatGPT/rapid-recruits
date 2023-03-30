import React, { useContext } from 'react';
import { DetailedJobView } from '../components/DetailedJobView/detailedJobView';
import { HalfJobsList } from '../components/JobsList/halfJobsList';
import { Box, Container } from '@mui/material';
import { StateContext } from '../App';

export const DetailedViewPage = () => {
  const { state } = useContext(StateContext);

  return (
    
    <Container
      disableGutters
      maxWidth="xl"
      sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', height: '100vh' }}
    >
      <Box sx={{width: '50%',
                height: '80%',
                mx: '10px',
                px: 2, // padding left & right
                gap: 0,
                borderRadius: 'md',
                boxShadow: 'md'}}>
        <HalfJobsList />
      </Box>
      <Box sx={{ flex: '1', height: '100%', overflow: 'auto' }}>
          <DetailedJobView selectedJob={state.selectedJob} />
      </Box>
    </Container>
  );
};
