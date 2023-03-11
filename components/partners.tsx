import * as React from 'react';
import Image from 'next/image';

import styles from './partners.module.css';

function PartnersFrame(name: string) {
  return <Image src={`/images/${name}.svg`} alt="Next.js Logo" width={257} height={37} priority />;
}

export default function Partners() {
  return (
    <div>
      <div className={styles.title}>პარტნიორები</div>
      <div style={{ display: 'flex', justifyContent: 'center',flexWrap: 'wrap', gap: 40, marginTop: 39 }}>
        <div>{PartnersFrame('bog')}</div>
        <div>{PartnersFrame('tbc')}</div>
        <div>{PartnersFrame('bog')}</div>
        <div>{PartnersFrame('tbc')}</div>
      </div>
    </div>
  );
}
