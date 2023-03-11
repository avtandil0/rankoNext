import * as React from 'react';
import Image from 'next/image';

import styles from './license.module.css';
import Box from '@mui/material/Box';

function Nbg() {
  return <Image src="/images/nbg.svg" alt="Next.js Logo" width={327} height={97} priority />;
}

export default function License() {
  return (
    <Box  sx={{ height: { xs: 355, md: 209 } }} className={styles.card}>
      <Box
        sx={{ width: { xs: 350, md: 655 }, fontSize: { xs: 19, md: 24 } }}
        className={styles.title}
      >
        რანკო ლიცენზირებულია ეროვნული ბანკის მიერ
      </Box>
      <div>{Nbg()}</div>
    </Box>
  );
}
