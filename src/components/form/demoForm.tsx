import {
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Stack,
  Typography,
  Radio,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Alert,
  Snackbar,
} from "@mui/material";

import { TextField } from "formik-mui";
import { AppBar } from "../appbar";
import React, { useCallback, useState } from "react";
import { SectionTitle } from "../section-title";
import { Formik, Form, Field } from "formik";

export const DemoForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    experienceLevel: "",
    gender: "",
    jobTitle: "",
    company: "",
    yearsOfExperience: null,
  };

  const handleSubmit = (values: any) => {
    console.log(values);
    setSubmitted(true);
  };

  const handleCloseAlert = useCallback(() => {
    setSubmitted(false);
  }, []);
  return (
    <Stack>
      <Snackbar
        open={submitted}
        autoHideDuration={2000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Submitted successfully!
        </Alert>
      </Snackbar>
      <AppBar />
      <Stack
        p={1}
        alignItems="center"
        gap={4}
        direction="row"
        justifyContent="center"
        sx={{
          zIndex: 0,
          background: "#18324b",
          borderBottom: "solid 12px #1a76d2",
          height: 300,
        }}
      >
        <Stack sx={{ color: "white" }} direction="row" gap={2}>
          <Stack>
            <Typography variant="h3" textAlign={"center"} sx={{ flexGrow: 1 }}>
              Demo Form
            </Typography>
            <Typography variant="h6" sx={{ flexGrow: 1, color: "#89b3f8" }}>
              Fill out this form to track a form submission
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack alignItems={"center"} mt={5} gap={2}>
        <SectionTitle title={"User Information"} />
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ handleChange }) => (
            <Form>
              <Stack gap={3} py={3}>
                <FormLabel>Basic Information</FormLabel>
                <Stack direction={"row"} gap={1}>
                  <Field
                    component={TextField}
                    name="firstName"
                    label="First Name"
                    variant={"filled"}
                  />
                  <Field
                    component={TextField}
                    name="lastName"
                    label="Last Name"
                    variant={"filled"}
                  />
                  <Field
                    component={TextField}
                    name="email"
                    type="email"
                    label="Email"
                    variant={"filled"}
                  />
                </Stack>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="gender"
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
                <FormLabel htmlFor="demo-simple-select-filled">
                  How comfortable are you with GTM?
                </FormLabel>
                <FormControl variant="filled" sx={{ width: 300 }}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Experience Level
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    name="experienceLevel"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Beginner"}>Beginner</MenuItem>
                    <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                    <MenuItem value={"Expert"}>Expert</MenuItem>
                  </Select>
                </FormControl>
                <FormLabel>Job Information</FormLabel>
                <Stack gap={1} direction={"row"}>
                  <Field
                    component={TextField}
                    name="company"
                    label="Company Name"
                    variant={"filled"}
                  />
                  <Field
                    component={TextField}
                    name="jobTitle"
                    label="Job Title"
                    variant={"filled"}
                  />
                  <Field
                    component={TextField}
                    name="yearsOfExperience"
                    type="number"
                    label="Years of Experience"
                    variant={"filled"}
                  />
                </Stack>
                <Button
                  variant="contained"
                  type={"submit"}
                  sx={{ alignSelf: "flex-end" }}
                >
                  Submit
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Stack>
    </Stack>
  );
};
