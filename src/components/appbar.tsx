import {
  Button,
  Toolbar,
  Typography,
  AppBar as MuiAppBar,
} from "@mui/material";
import React from "react";

export const AppBar = () => {
  return (
    <MuiAppBar position={"static"}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GTM Playground
        </Typography>
        <Button color="inherit" href={"/"}>
          Home
        </Button>
        <Button color="inherit" href={"/form"}>
          Form
        </Button>
      </Toolbar>
    </MuiAppBar>
  );
};
