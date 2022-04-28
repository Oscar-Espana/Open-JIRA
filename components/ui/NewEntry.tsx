import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { ChangeEvent, useContext, useState } from "react";
import { EntriesContext } from "../../context/entries";

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
    setInputValue("");
    setTouched(false);
    setIsAdding(false);
  };

  return (
    <Box sx={{ marginBottom: 2 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginBottom: 1.5 }}
            placeholder="Nueva entrada"
            label="Nueva entrada"
            autoFocus
            multiline
            helperText={
              inputValue.length <= 0 && touched && "Ingresa una nueva entrada"
            }
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={onTextFieldChange}
            onBlur={() => setTouched(true)}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={() => setIsAdding(false)}>Cancelar</Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddCircleOutlinedIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAdding(true)}
        >
          Agregar Tarea
        </Button>
      )}
    </Box>
  );
};
