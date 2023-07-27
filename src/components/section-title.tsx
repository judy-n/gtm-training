import { Typography } from "@mui/material";
import React from "react";

export const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Typography
      variant="h5"
      sx={{
        background: "#dcf3ff",
        paddingX: "15px",
        paddingY: "5px",
        borderRadius: "18px",
      }}
    >
      {title}
    </Typography>
  );
};
