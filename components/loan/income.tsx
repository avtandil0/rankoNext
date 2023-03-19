import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Grid, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import styles from './loan.module.css';



export default function Income({ onChange, statement }: any) {
 
  return (
    <Box>
    <Box className={styles.card} sx={{ width: { xs: 320, md: 628 } }}>
      <Typography sx={{ fontSize: 17 }} gutterBottom>
        შემოსავალი
      </Typography>

      <TextField
        label="საშუალო შემოსავალი თვეში"
        placeholder="მაგ. 1000 ლარი"
        id="outlined-start-adornment"
        sx={{
          backgroundColor: "#fff",
          m: 1,
          width: { xs: 260, md: 570 },
        }}
        name="income"
        value={statement?.income}
        onChange={(e: any) => onChange("income", e.target.value)}
      />
      <TextField
        label="შემოსავლის წყარო"
        placeholder="მაგ. 1000 ლარი"
        id="outlined-start-adornment"
        sx={{
          backgroundColor: "#fff",
          m: 1,
          width: { xs: 260, md: 570 },
        }}
        name="incomeSource"
        value={statement?.incomeSource}
        onChange={(e: any) => onChange("incomeSource", e.target.value)}
      />
      <FormControl
        sx={{ m: 1, minWidth: {xs: 260,md:570}, backgroundColor: "#fff", height: 56 }}
      >
        <InputLabel id="demo-select-small">სად ირიცხება ხელფასი</InputLabel>
        <Select
          label="სად ირიცხება ხელფასი"
          name="IncomeAccrue"
          value={statement?.IncomeAccrue}
          onChange={(e: any) => onChange("IncomeAccrue", e.target.value)}
          sx={{width:{xs: 260,md: 570}}}
        >
          <MenuItem value={10}>ბანკში</MenuItem>
          <MenuItem value={20}>ხელზე</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="თანამსესხებელი"
        placeholder="მაგ. 1000 ლარი"
        id="outlined-start-adornment"
        sx={{
          backgroundColor: "#fff",
          m: 1,
          width: { xs: 260, md: 570 },
        }}
      />
    </Box>
  </Box>
  );
}
