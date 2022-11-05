import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette === 'dark' ? '#1A2027' : '#c89ef5',
  ...theme.typography.p,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius:40,
}));

export default function ResponsiveGrid() {
  const [noOfElement , setnoOfElement] = useState(3)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(9)).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item>Artificial Intelligence</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

