import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export const NewEntry = () => {
  return (
    <Box sx={{ marginBottom: 2 }}>
      <Button
        startIcon={<AddCircleOutlinedIcon />}
        fullWidth
        variant="outlined"
      >
        Agregar Tarea
      </Button>
      <TextField
        fullWidth
        sx={{ marginTop: 2, marginBottom: 1.5 }}
        placeholder="Nueva entrada"
        label="Nueva entrada"
        autoFocus
        multiline
        helperText="Ingresa una nueva entrada"
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button>Cancelar</Button>
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<SaveOutlinedIcon />}
        >
          Guardar
        </Button>
      </Box>
    </Box>
  );
};
