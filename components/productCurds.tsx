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
import Image from 'next/image';


// wallet.svg
function WalletIcon() {
  return <Image src="/images/wallet.svg" alt="Next.js Logo" width={47} height={37} priority />;
}
//agriculture.svg
function AgricultureIcon() {
  return <Image src="/images/agriculture.svg" alt="Next.js Logo" width={47} height={37} priority />;
}

function CarIcon() {
  return <Image src="/images/car.svg" alt="Next.js Logo" width={47} height={37} priority />;
}

function CardIcon() {
  return <Image src="/images/cards.svg" alt="Next.js Logo" width={47} height={37} priority />;
}

function ConsumerIcon() {
  return <Image src="/images/consumer.svg" alt="Next.js Logo" width={47} height={37} priority />;
}

function HomeIcon() {
  return <Image src="/images/home.svg" alt="Next.js Logo" width={47} height={37} priority />;
}

function BusinessIcon() {
  return <Image src="/images/business.svg" alt="Next.js Logo" width={47} height={37} priority />;
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
    <div style={{ margin: 15 }}>
      <Typography
        variant="h4"
        sx={{ display: 'flex', justifyContent: 'center', fontWeight: 800, fontSize: 28, margin: 5 }}
      >
        პროდუქტები
      </Typography>

      <Grid container justifyContent="center" spacing={4}>
        <Grid item>
          <ProductCard
            name={'სამომხმარებლო სესხი'}
            description={'მოგზაურობა, ნივთის შეძენა, გართობა'}
            icon={WalletIcon()}
            url={'/consumer'}
          />
        </Grid>
        <Grid item>
          <ProductCard
            name={'იპოთეკური სესხი'}
            description={'რემონტი, მშენებლობა, სახლის შეძენა'}
            icon={HomeIcon()}
            url={'/mortgage'}
          />
        </Grid>
        <Grid item>
          <ProductCard
            name={'ბიზნეს სესხი'}
            description={'ძირითადი საშუალებები, საბრუნავი საშუალებები'}
            icon={BusinessIcon()}
            url={'/bussiness'}
          />
        </Grid>
        <Grid item>
          <ProductCard
            name={'აგრო სესხი'}
            description={'სოფლის მეურნეობისთვის'}
            icon={AgricultureIcon()}
            url={'/auto'}
          />
        </Grid>
        <Grid item>
          <ProductCard
            name={'საკრედიტო ბარათები'}
            description={'საკრედიტო ბარათები'}
            icon={CardIcon()}
            url={'/creditCard'}
          />
        </Grid>
        <Grid item>
          <ProductCard name={'ავტო სესხი'} description={'აგრო სესხი'} icon={CarIcon()} />
        </Grid>
      </Grid>
    </div>
  );
}
