import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Header from "../components/header";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Grid, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import AboutLoan from "../components/loan/aboutLoan";
import Income from "../components/loan/income";
import OtherLoan from "../components/loan/otherLoan";

const steps = ["Select111", "Select222", "Select333", "Select444", "Select555"];

const selectStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
  width: "580px",
  height: "48px",
  background: "#FFFFFF",

  border: "1px solid #DADAE1",
  borderRadius: "8px",
};

const cardStyle: any = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "24px",
  gap: "18px",

  width: "628px",

  /* Greyscale/10 */

  background: "#F7F7FA",
  borderRadius: "12px",
  marginTop: 10,
};


export default function Consummer() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const [statement, setStatement] = React.useState({});
  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    console.log("aaa", activeStep);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleOnChange = (name: string, value: any) => {
    console.log("handlechange ", name, value);
    setStatement({ ...statement, [name]: value });
  };
  const renderStep = () => {
    console.log("2121212statement", statement);
    switch (activeStep) {
      case 0:
        return <AboutLoan onChange={handleOnChange} statement={statement} />;
      case 1:
        return <Income onChange={handleOnChange} statement={statement} />;
      case 2:
        return <OtherLoan onChange={handleOnChange} statement={statement} />;
      case 3:
        return <h1>ddd</h1>;
      case 4:
        return <h1>eee</h1>;
      case 5:
        return <h1>fff</h1>;
    }
    return (
      <Box>
        <Card variant="outlined">
          {" "}
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              55566 t t r
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    );
  };
  return (
    <>
      <Header />
      <Box sx={{ marginTop: 5 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stepper activeStep={activeStep}>
            {/* {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};

              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                // <Step key={label} {...stepProps}>
                //   <StepLabel {...labelProps}>{label}</StepLabel>
                // </Step>
               
              );
            })} */}
          </Stepper>
        </Box>

        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // justifyContent: "center",
                marginBottom: 5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: { xs: 300, md: 580 },
                  margin: 1,
                }}
              >
                <Box
                  sx={{
                    lineHeight: "150%",
                    color: "#080537",
                    fontSize: { sx: "18px", md: "28px" },
                    fontWeight: 800,
                  }}
                >
                  განაცხადის შესავსები ფორმა
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#F7F7FA",
                    padding: {xs:"4px 12px",md:"8px 24px"},
                    borderRadius: "8px",
                    marginTop: { md: 1 },
                  }}
                >
                  {activeStep + 1} /5
                </Box>
              </Box>

              {renderStep()}
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                უკან
              </Button>
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "დასრულება" : "შემდეგ"}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}
