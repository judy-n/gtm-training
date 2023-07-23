import { Divider, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import GtmLogo from "../../assets/gtm-logo.png";
import { AppBar } from "../appbar";
import ProcomLogo from "../../assets/procom-logo.png";
import CloseIcon from "@mui/icons-material/Close";

export const Homepage: React.FC = () => {
  return (
    <Stack>
      <AppBar />
      <Stack p={1} alignItems={"center"} gap={4}
             direction={"row"}
             justifyContent={"center"}
             sx={{
        zIndex: 0,
        background: '#18324b',
        borderBottom: 'solid 12px #1a76d2',
        height: 300}}>
        <Paper sx={{ width: "fit-content", p: 2, mt: 2 }}>
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
        <Divider orientation="vertical" flexItem color={'#89b3f8'} sx={{width:'2px', height: '30%', alignSelf: 'center', mt: 1}} />
        <Stack sx={{color: 'white'}} direction={"row"} gap={2}>
          <Stack>
            <Typography variant="h3" sx={{ flexGrow: 1 }}>
              GTM Playground
            </Typography>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Demo site to practice Google Tag Manager
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack mt={3}>
        <Stack alignItems={'center'}>
          <Typography variant={"h4"} color={'#18324b'}>Resources</Typography></Stack>
      </Stack>
      </Stack>
  )
}
