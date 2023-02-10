import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProductCard from './productCard';
import { Grid } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Image from "next/image";


function ConsumerIcon() {
  return (
    <Image
    src="/images/consumer.svg"
    alt="Next.js Logo"
    width={47}
    height={37}
    priority
  />
  );
}

function HomeIcon() {
  return (
    <Image
    src="/images/home.svg"
    alt="Next.js Logo"
    width={47}
    height={37}
    priority
  />
  );
}

function BusinessIcon() {
  return (
    <Image
    src="/images/business.svg"
    alt="Next.js Logo"
    width={47}
    height={37}
    priority
  />
  );
}


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProductCurds() {
  return (
    <div style={{margin: 15}}>

<Typography variant="h4" sx={{display: 'flex', justifyContent: 'center', fontWeight: 800, fontSize: 28, margin: 5}}>
         Products
        </Typography>

    <Grid container justifyContent="center" spacing={4}>
      <Grid  item>
        <ProductCard icon={ConsumerIcon()}/>
      </Grid>
      <Grid  item>
        <ProductCard icon={HomeIcon()}/>
      </Grid>
      <Grid  item>
        <ProductCard icon={BusinessIcon()}/>
      </Grid>
      <Grid  item>
        <ProductCard icon={HomeIcon()}/>
      </Grid>
      <Grid  item>
        <ProductCard icon={ConsumerIcon()}/>
      </Grid>
      <Grid  item>
        <ProductCard icon={HomeIcon()}/>
      </Grid>
        </Grid>
    </div>

  );
}
