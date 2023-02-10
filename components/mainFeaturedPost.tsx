import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

interface MainFeaturedPostProps {
  post: {
    description: string;
    image: string;
    imageText: string;
    linkText: string;
    title: string;
  };
}


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#FB8500',
  '&:hover': {
    backgroundColor: '#4733FF',
  },
}));

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
        display:'flex',
        justifyContent: 'flex-start'
      }}
    >
      {/* Increase the priority of the hero background image */}
     {<img style={{ display: 'none' }}  src={post.image} alt={post.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />

      <Grid>
        <Grid  >
          <Box
            sx={{
              pt: { xs: 8, md: 38 },
              pb: { xs: 8, md: 38 },
              pl: { xs: 2, md: 7 },
            }}
          >
            <Typography  sx={{
              fontSize: { xs: 18, md: 58 },
            }} component="h1" variant="h3" color="inherit" >
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <ColorButton variant="contained">Custom CSS</ColorButton>

          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

