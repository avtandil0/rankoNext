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
import styles from "./loan.module.css";

export default function AboutLoan({ onChange, statement }: any) {
  console.log("statemenenet", statement);
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.name, event.target.value);
    onChange(event.target.name, event.target.value);
  };

  return (
    <Box>
      <Box className={styles.card} sx={{ width: { xs: 320, md: 628 } }}>
        <Typography sx={{ fontSize: 17 }} gutterBottom>
          პროდუქტის ტიპი
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          რა ტიპის სესხის აღება გსურთ
        </Typography>
        <FormControl
          sx={{
            m: 1,
            minWidth: { xs: 180, md: 278 },
            backgroundColor: "#fff",
            height: 51,
          }}
        >
          <InputLabel id="demo-select-small">სესხის ტიპი</InputLabel>
          <Select
            sx={{ width: { xs: 260, md: 580 }, height: 50 }}
            label="სესხის ტიპი"
            name="type"
            value={statement?.type}
            onChange={handleChange}
          >
            <MenuItem value={1}>სამომხმარებლო</MenuItem>
            <MenuItem value={2}>იპოთეკური</MenuItem>
            <MenuItem value={3}>ბიზნეს</MenuItem>
            <MenuItem value={4}>აგრო</MenuItem>
            <MenuItem value={5}>ბარათები</MenuItem>
            <MenuItem value={6}>აუტო</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        className={styles.card}
        sx={{
          height: { xs: 340, md: 260 },
          marginTop: 3,
          width: { xs: 320, md: 628 },
        }}
      >
        <Typography sx={{ fontSize: 17 }} gutterBottom>
          ინფორმაცია სესხზე
        </Typography>
        <Box sx={{ display: { xs: "block", md: "flex" } }}>
          <TextField
            label="მოთხოვნილი თანხა"
            placeholder="მაგ. 75 000"
            id="outlined-start-adornment"
            sx={{
              backgroundColor: "#fff",
              m: 1,
              width: { xs: 260, md: 278 },
            }}
            name="amount"
            value={statement?.amount}
            onChange={(e: any) => onChange("amount", e.target.value)}
          />
          <FormControl
            sx={{
              m: 1,
              minWidth: { xs: 260, md: 278 },
              backgroundColor: "#fff",
              height: 56,
            }}
          >
            <InputLabel id="demo-select-small">ვალუტა</InputLabel>
            <Select
              label="ვალუტა"
              name="currency"
              value={statement?.currency}
              onChange={handleChange}
              sx={{ width: { xs: 260, md: 282 } }}
            >
              <MenuItem value={10}>GEL</MenuItem>
              <MenuItem value={20}>USD</MenuItem>
              <MenuItem value={30}>EUR</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField
          label="ვადა"
          placeholder="მაგ. 15 თვე"
          id="outlined-start-adornment"
          sx={{
            backgroundColor: "#fff",
            m: 1,
            width: { xs: 260, md: 278 },
          }}
          value={statement?.term}
          onChange={(e: any) => onChange("term", e.target.value)}
        />
      </Box>
    </Box>
  );
}
