import { styled, Paper, Typography } from '@mui/material';

export const SectionTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

export const TablePaper = styled(Paper)(({ theme }) => ({
    borderRadius: 6,
    overflow: 'hidden',
    padding: theme.spacing(2),
    width: '100%',
  }));