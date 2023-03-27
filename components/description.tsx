import * as React from 'react';
import Box from '@mui/material/Box';

import styles from './description.module.css';

function DescriptionBox({ title, content, number }: any) {
  console.log('numbernumbernumber', number);
  return (
    <Box className={styles.card} sx={{ width: { xs: 325, md: 410 } }}>
      <Box className={styles.title}>{title}</Box>
      <Box className={styles.content} sx={{ width: { xs: 260, md: 346 } }}>{content}</Box>
      <Box className={styles.number}  sx={{ paddingLeft: { xs: 23, md: 41 } }}>{number}</Box>
    </Box>
  );
}

const Title1 = 'არ დაკარგო დრო!';

const Content1 =
  'რანკო არის ციფრული პლატფორმა, რომელიც მომხმარებელს შესაძლებლობას აძლევს მოიძიოს საუკეთესო შეთავაზება სასურველ საბანკო პროდუქტზე .';

const Title2 = 'რატომ რანკო?';
const Content2 =
  'არ კარგავ დროს სასესხო პირობების მოძიებასა და შედარებაზე, გამოიყენე რანკო და მიიღე ბაზარზე საუკეთესო შეთავაზება';

const Title3 = 'როგორ მუშაობს?';
const Content3 =
  'აუქციონის პრინციპით ჩვენ ვავლენთ მინიმალურ საპროცენტო განაკვეთს თქვენთვის სასურველ პროდუქტზე და გაკავშირებთ ფინანსურ ინსტიტუტთან.';
export default function Description({ icon, name, description }: any) {
  return (
    <Box style={{ display: 'flex', flexWrap: 'wrap', gap: 20, padding: 35 }}>
      <DescriptionBox title={Title1} content={Content1} number={'1'} />
      <DescriptionBox title={Title2} content={Content2} number={'2'} />
      <DescriptionBox title={Title3} content={Content3} number={'3'} />
    </Box>
  );
}
