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



export default function OtherLoan({ onChange, statement }: any) {
 
  return (
   <Box>
      <Box className={styles.card} sx={{ height:{xs: 550,md:450},width: { xs: 320, md: 628 } }}>
        <Typography sx={{ fontSize: 17 }} gutterBottom>
          სხვა სესხები
        </Typography>

        <FormControl
          sx={{ m: 1,  minWidth: { xs: 180, md: 278 },backgroundColor: "#fff", height: 56 }}
        >
          <InputLabel id="demo-select-small">
            გაქვთ თუ არა სხვა არსებული სესხები?
          </InputLabel>
          <Select
            label="გაქვთ თუ არა სხვა არსებული სესხები?"
            name="IncomeAccrue"
            value={statement?.otherLoan}
            onChange={(e: any) => onChange("otherLoan", e.target.value)}
            sx={{ width: { xs: 260, md: 580 }, height: 56 }}
          >
            <MenuItem value={10}>დიახ</MenuItem>
            <MenuItem value={20}>არა</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ display: {md:"flex"} }}>
          <TextField
            label="სხვა არსებული სესხების ჯამი"
            placeholder="მაგ. 1000 ლარი"
            id="outlined-start-adornment"
            sx={{
              backgroundColor: "#fff",
              m: 1,
              width: { xs: 260, md: 280 },
            }}
            name="incomeSource"
            value={statement?.incomeSource}
            onChange={(e: any) => onChange("incomeSource", e.target.value)}
          />
          <TextField
            label="ყოველთვიური შენატანი სესხებზე"
            placeholder="მაგ. 1000 ლარი"
            id="outlined-start-adornment"
            sx={{
              backgroundColor: "#fff",
              m: 1,
              width: { xs: 260, md: 280 },
            }}
            name="incomeSource"
            value={statement?.incomeSource}
            onChange={(e: any) => onChange("incomeSource", e.target.value)}
          />
        </Box>
        <FormControl
           sx={{ m: 1,  minWidth: { xs: 180, md: 278 },backgroundColor: "#fff", height: 56 }}
        >
          <InputLabel id="demo-select-small">
          აპირებთ თუ არა მიმდინარე სესხების გადაფარვას?
          </InputLabel>
          <Select
            label="აპირებთ თუ არა მიმდინარე სესხების გადაფარვას?"
            name="IncomeAccrue"
            value={statement?.otherLoan}
            onChange={(e: any) => onChange("otherLoan", e.target.value)}
            sx={{ width: { xs: 260, md: 580 }, height: 56 }}
          >
            <MenuItem value={10}>დიახ</MenuItem>
            <MenuItem value={20}>არა</MenuItem>
          </Select>
        </FormControl>
       
        <FormControl
           sx={{ m: 1,  minWidth: { xs: 180, md: 278 },backgroundColor: "#fff", height: 56 }}
        >
          <InputLabel id="demo-select-small">გქონიათ თუ არა ვადაგადაცილება?</InputLabel>
          <Select
            label="გქონიათ თუ არა ვადაგადაცილება?"
            name="IncomeAccrue"
            value={statement?.IncomeAccrue}
            onChange={(e: any) => onChange("IncomeAccrue", e.target.value)}
            sx={{ width: { xs: 260, md: 580 }, height: 56 }}
          >
            <MenuItem value={10}>დიახ</MenuItem>
            <MenuItem value={20}>არა</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
