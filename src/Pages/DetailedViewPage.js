import React, { useContext, useState } from 'react';
import { DetailedJobView } from '../components/DetailedJobView/detailedJobView';
import { HalfJobsList } from '../components/JobsList/halfJobsList';
import { Box, Container, Alert, IconButton, Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { StateContext } from '../App';

export const DetailedViewPage = () => {
  const { state, dispatch } = useContext(StateContext);
  const [open, setOpen] = useState(true);

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
          { state.recentlySubmitted ? (
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                      dispatch({type: 'setRecentlySubmitted', payload: false})
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Success! Thanks for Submitting your Application!
              </Alert>
            </Collapse>
          ) : null }
          <DetailedJobView selectedJob={state.selectedJob} />
      </Box>
    </Container>
  );
};
