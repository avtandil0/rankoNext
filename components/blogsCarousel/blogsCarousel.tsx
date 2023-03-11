import * as React from 'react';
import Image from 'next/image';

import styles from './blogsCarousel.module.css';
import Box from '@mui/material/Box';
import {
  Paper,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';

function Item(props: any) {
  return (
    <Box style={{ height: 300 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://paas-s3-broker-prod-lon-2edbd31f-65e0-4d35-9755-fde7c3b1b292.s3.amazonaws.com/images/Financial_HdD76AH.original.png"
            alt="green iguana"
          >
          </CardMedia>
          <Chip style={{marginTop: -58,marginLeft: 5, background:'#ccc'}} label="3 min read" variant="outlined" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ფინანსები
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ჩვენ ვართ ცვლილებებზე ორიენტირებული გუნდი.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

function Items(props: any) {
  return (
    <Box style={{ display: 'flex', gap: 20 }}>
      <Item />
      <Item />
      <Item />
      <Item />
    </Box>
  );
}

export default function BlogsCarousel() {
  var items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Items key={i} item={item} />
      ))}
    </Carousel>
  );
}
