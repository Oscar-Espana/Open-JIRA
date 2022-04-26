import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  List,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

export const EntryCard = () => {
  return (
    <Card sx={{ marginBottom: 1.5 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            Esto es la descripcion
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">hace 30 min</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
