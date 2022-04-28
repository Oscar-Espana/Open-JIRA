import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  List,
  Paper,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { Entry } from "../../interfaces";

interface Props {
  entry: Entry;
}
export const EntryCard: FC<Props> = ({ entry }) => {
  return (
    <Card sx={{ marginBottom: 1.5 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
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