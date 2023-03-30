import React, { useContext, useState } from "react";
import { Box, Collapse, Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { SearchNav } from '../components/NavBars/SearchNav';
import { JobsList } from '../components/JobsList/jobsList';
import { StateContext } from "../App";
import { DetailedViewPage } from "./DetailedViewPage";

export default function Resultspage() {
    const {state, dispatch} = useContext(StateContext);
    const [open, setOpen] = useState(true);

    return (
        <Box>
            <Box sx={{ height:'10vh',display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column', textAlign: 'Center'}}>
                    <SearchNav />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column' }}>
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
            {state.selectedJob !== null ? <DetailedViewPage></DetailedViewPage> : <JobsList></JobsList>}
            </Box>
        </Box>
    )
};
