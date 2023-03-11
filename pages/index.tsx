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
import Calculator from '../components/calculator';
import Partners from '../components/partners';
import License from '../components/license';
import Description from '../components/description';
import Statistic from '../components/statistic/statistic';

const mainFeaturedPost = {
  title: 'Title of a longer',
  description: 'Multiple lines of text that form the lede,',
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

export default function Home() {
  return (
    <>
      <Header />
      <MainFeaturedPost post={mainFeaturedPost} />
      <ProductCurds />
      <div style={{ marginTop: 100 }}>
        <Calculator />
      </div>
      <div style={{ marginTop: 90 }}>
        <Partners />
      </div>
      <div style={{ marginTop: 90 }}>
        <License />
      </div>
      <div style={{ marginTop: 90 }}>
        <Description />
      </div>
      <div style={{ marginTop: 90 }}>
        <Statistic />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
