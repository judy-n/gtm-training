import {
  Divider,
  Paper,
  Stack,
  Typography,
  Grid,
  Button,
  Alert,
  Snackbar,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import GtmLogo from "../../assets/gtm-logo.png";
import { AppBar } from "../appbar";
import ProcomLogoSmall from "../../assets/procom-logo-small.svg";
import GoogleAnalyticsLogo from "../../assets/google-analytics-logo.png";
import ProcomLogo from "../../assets/procom-logo.png";
import { LinkCard } from "../link-card";
import { SectionTitle } from "../section-title";

export const Homepage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(async () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => setCopied(true));
  }, []);

  const handleCloseAlert = useCallback(() => {
    setCopied(false);
  }, []);

  return (
    <Stack sx={{ overflowX: "hidden" }}>
      <Snackbar
        open={copied}
        autoHideDuration={2000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Link copied!
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
        <Paper sx={{ width: "fit-content", p: 2, mt: 2 }}>
          <Stack direction="row" justifyContent="center">
            <Stack direction="row" alignItems="center" columnGap={1}>
              <img style={{ width: 50 }} src={GtmLogo} alt="GTM Logo" />
              <CloseIcon color="primary" />
              <img
                src={ProcomLogo}
                style={{ width: 200, height: 41.6 }}
                alt="Procom Logo"
              />
            </Stack>
          </Stack>
        </Paper>
        <Divider
          orientation="vertical"
          flexItem
          color="#89b3f8"
          sx={{ width: "2px", height: "30%", alignSelf: "center", mt: 1 }}
        />
        <Stack sx={{ color: "white" }} direction="row" gap={2}>
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
      <Stack mt={3} p={3}>
        <Stack alignItems="center">
          <SectionTitle title={"Resources"} />
          <Stack mt={2} gap={2} width="100%">
            <Typography variant="h6">Quick Links</Typography>
            <Grid container gap={2}>
              <LinkCard
                title="Google Tag Manager"
                imgSrc={GtmLogo}
                imgAlt="GTM Logo"
                description="Google Tag Manager delivers simple, reliable, easily integrated tag management solution."
                link="https://tagmanager.google.com/#/home"
                width={32}
              />
              <LinkCard
                title="Google Analytics"
                imgSrc={GoogleAnalyticsLogo}
                imgAlt="Google Analytics Logo"
                description="Google Analytics collects data from your websites and apps to create reports that provide insights into your business."
                link="https://analytics.google.com/analytics/web/#/"
                width={46}
              />
              <LinkCard
                link="https://procom-portal-home.azurewebsites.net/"
                title="Procom Portals"
                description="A directory with links to all instances of our portals."
                imgSrc={ProcomLogoSmall}
                imgAlt="Procom Logo"
                width={25}
              />
            </Grid>
          </Stack>
        </Stack>
        <Stack mt={5} gap={2}>
          <Typography variant="h6">Video Tutorials</Typography>
          <Grid container gap={2}>
            <iframe
              width="400"
              height="225"
              frameBorder="0"
              src="https://www.youtube.com/embed/dJGbCdgUAHk"
              title="Google Tag Manager Tutorial for Beginners (2023)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/KOsVqOEyS80"
              title="Welcome to Google Tag Manager Fundamentals"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write;
              encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/tytTEwEUmgY"
              title="GA4 Conversion Tracking"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </Grid>
        </Stack>
      </Stack>
      <Stack mt={5} gap={2} mb={4} sx={{ overflowX: "hidden" }}>
        <Stack alignItems="center" gap={2}>
          <SectionTitle title={"Form Demo"} />
          <Stack
            my={2}
            gap={2}
            sx={{ overflowX: "hidden" }}
            alignItems="center"
          >
            <Typography variant="body1">
              Click on the button below to go to the <strong>demo form</strong>.
              You can use it to track a form submission on GTM!
            </Typography>
            <Button variant="contained" href="/form">
              Go to form
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          background: "#243249",
          color: "white",
          py: 4,
          width: "100%",
          borderBottom: "solid 12px #1a76d2",
          overflowX: "hidden",
        }}
        alignItems="center"
        gap={2}
      >
        <Typography variant="h4" textAlign={"center"}>
          Share
        </Typography>
        <Typography variant="body1">
          Can&#39;t get enough of this GTM practice? Share it with a friend to
          spread the word!
        </Typography>
        <Button
          variant="contained"
          onClick={handleCopy}
          endIcon={<ContentCopyIcon />}
        >
          Copy Link
        </Button>
      </Stack>
    </Stack>
  );
};
