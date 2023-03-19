import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { experimentalStyled as styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Link from "next/link";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#23315f",
  "&:hover": {
    backgroundColor: "#FB8500",
  },
  background: '#23315f',
  textDecoration: 'none'
}));

export default function ProductCard({ icon, name, description, url }: any) {
  console.log('urlurlurlurlurl',url)
  return (
    <Card
      sx={{
        width: { xs: 350, md: 411 },
        pt: 7,
        pb: 1,
        pl: 1,
        background:
          "linear-gradient(61.18deg, #3929CC -5.47%, #4733FF 114.69%); ",
        color: "#FFF",
        borderRadius: 3,
      }}
    >
      <CardContent>
        {icon}
        <Typography variant="h5" component="div">
          {name}
        </Typography>

        <Typography variant="body2">
          {description}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <ColorButton variant="contained">
          <Link  style={{color:'white'}} href={url?? ''}>განაცხადის შევსება</Link>
        </ColorButton>
      </CardActions>
    </Card>
  );
}
