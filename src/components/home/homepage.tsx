import { Button, Grid, Paper, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import GtmLogo from "../../assets/gtm-logo.png";
import { AppBar } from "../appbar";
import ProcomLogo from "../../assets/procom-logo.png";
import CloseIcon from "@mui/icons-material/Close";

export const Homepage: React.FC = () => {
  return (
    <Stack>
      <AppBar />
      <Stack p={1} alignItems={"center"}>
        <Paper sx={{ width: "fit-content", p: 2 }}>
          <Stack direction={"row"} justifyContent={"center"}>
            <Stack direction={"row"} alignItems={"center"} columnGap={1}>
              <img style={{ width: 50 }} src={GtmLogo} alt={"GTM Logo"} />
              <CloseIcon color={"primary"} />
              <img
                src={ProcomLogo}
                style={{ width: 200, height: 41.6 }}
                alt={"Procom Logo"}
              />
            </Stack>
          </Stack>
        </Paper>
        <Paper variant={"outlined"}>
          <Stack>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
              GTM Playground
            </Typography>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Demo site to practice using Google Tag Manager
            </Typography>
          </Stack>
        </Paper>
      </Stack>
    </Stack>
  );
};
