import {
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export const LinkCard: React.FC<{
  link: string;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  width: number;
}> = ({ link, title, description, imgSrc, imgAlt, width }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={link} target="_blank">
        <CardContent>
          <Stack gap={2} alignItems="flex-start">
            <Stack direction="row" alignItems="flex-start" gap={2}>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <img src={imgSrc} alt={imgAlt} width={width} />
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
