import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { experimentalStyled as styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#23315f',
  '&:hover': {
    backgroundColor: '#FB8500',
  },
}));

export default function ProductCard({icon}: any) {
  return (
    <Card sx={{ width: {xs: 350, md: 411}, pt: 7, pb: 1,pl:1,  backgroundColor: '#4733FF',color: '#FFF', borderRadius: 3 }}>
      <CardContent>
      {icon}
        <Typography variant="h5" component="div">
         4521000 0 0 0 0s
        </Typography>

        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <ColorButton variant="contained">Custom CSS</ColorButton>
      </CardActions>
    </Card>
  );
}
