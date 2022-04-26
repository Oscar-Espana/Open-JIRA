import { List, Paper } from "@mui/material";
import { EntryCard } from "./EntryCard";

export const EntryList = () => {
  return (
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 195px)",
          overflow: "auto",
          backgroundColor: "transparent",
          paddingX: "8px",
        }}
      >
        <List sx={{ opacity: 1 }}>
          <EntryCard />
          <EntryCard />
        </List>
      </Paper>
    </div>
  );
};
