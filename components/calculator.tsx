import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import styles from './calculator.module.css';
import InputAdornment from '@mui/material/InputAdornment';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

export default function Calculator() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {/* <Grid container justifyContent="center" spacing={4}> */}

        <div style={{ width: 600, marginLeft:48 }}>
          <Typography className={styles.calulatorTitle}>კალკულატორი</Typography>
          <Typography className={styles.leftTitle}>გამოთვალე შენი სესხი</Typography>
          {/* <span className={styles.leftCardHorizontalLine}></span> */}
          <div style={{ marginTop: 42 }}>
            <TextField
              label="სესხის თანხა"
              placeholder="მაგ. 75 000"
              id="outlined-start-adornment"
              sx={{ m: 1, width:{xs: '80%', md: '29ch'} }}
              InputProps={{
                endAdornment: <InputAdornment position="start">₾</InputAdornment>,
              }}
              helperText="ლიმიტი 1 000 000 ლარი"
            />
            <TextField
              label="სესხის ვადა"
              placeholder="მაგ. 5"
              id="outlined-start-adornment"
              sx={{ m: 1, width:{xs: '80%', md: '29ch'} }}
              InputProps={{
                endAdornment: <InputAdornment position="start">თვე</InputAdornment>,
              }}
              helperText="ლიმიტი 24 თვე"
            />
          </div>
          <div style={{ marginTop: 25 }}>
            <TextField
              label="პროცენტი"
              placeholder="მაგ. 12"
              id="outlined-start-adornment"
              sx={{ m: 1, width:{xs: '80%', md: '29ch'} }}
              InputProps={{
                endAdornment: <InputAdornment position="start">%</InputAdornment>,
              }}
            />
          </div>
        </div>
        <Box   sx={{ m: 1, width:{xs: '85%', md: 600} , height:{xs: 500, md:364 }}}>
          <Box className={styles.rightCard} sx={{  height:{xs: 500, md:364 }}}>
            <span className={styles.rightTitle}>ყოველთიური გადასახადი</span>
            <span className={styles.result}>0.00 ₾</span>
            <Box className={styles.horizontalLine} sx={{  width:{xs: 260, md:545 }}}></Box>
            <div  className={styles.rightColumn}>
              <div  className={styles.column}>
                <div className={styles.rightLittleTitle}>სესხის თანხა</div>
                <div className={styles.rightLittleContent}>0.00 ₾</div>
              </div>
              <div>
                <div  className={styles.rightLittleTitle}>სესის ვადა</div>
                <div className={styles.rightLittleContent}>0 წელი</div>
              </div>
            </div>
            <Box className={styles.horizontalLine} sx={{  width:{xs: 260, md:545 }}}></Box>
            <div  className={styles.rightColumn}>
              <div  className={styles.column}>
                <div className={styles.rightLittleTitle}>წლიური პროცენტი</div>
                <div className={styles.rightLittleContent}>0 %</div>
              </div>
              <div>
                <div  className={styles.rightLittleTitle}>ჯამური საპროცენტო ხარჯი</div>
                <div className={styles.rightLittleContent}>0.00 ლარი</div>
              </div>
            </div>
          </Box>
        </Box>
      {/* </Grid> */}
    </div>
  );
}
