import * as React from 'react';
import Image from 'next/image';

import styles from './statistic.module.css';
import Box from '@mui/material/Box';

function StatisticBox({ text, number }: any) {
  console.log('numbernumbernumber', number);
  return (
    <Box>
      <Box className={styles.number}>{number}</Box>
      <Box className={styles.text}>{text}</Box>
    </Box>
  );
}
export default function Statistic() {
  return (
    <Box className={styles.card} sx={{ height: { xs: 420, md: 160 }, margin: 5 }}>
      <StatisticBox text={'განაცხადი'} number={256} />
      <StatisticBox text={'დამტკიცებული'} number={145} />
      <StatisticBox text={'გაცემული'} number={4500} />
      <StatisticBox text={'განაცხადი'} number={256} />
    </Box>
  );
}
