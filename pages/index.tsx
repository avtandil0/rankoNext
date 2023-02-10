import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import Header from '../components/header';
import MainFeaturedPost from '../components/mainFeaturedPost';
import ProductCurds from '../components/productCurds';
import BasicSpeedDial from '../components/basicSpeedDial';

const mainFeaturedPost = {
  title: 'Title of a longer',
  description:
    "Multiple lines of text that form the lede,",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};


export default function Home() {
  return (
    <>
     <Header />
     <MainFeaturedPost post={mainFeaturedPost}/>
      <ProductCurds />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}
