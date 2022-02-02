import { TextField, Button } from "@mui/material";
import React from "react";

const InputField = ({
  handleSubmitEdit,
  editInfo,
  editInput,
  handleEditInput,
}) => {
  return (
    <div>
      <h2>{editInfo}</h2>
      <TextField
        value={editInput}
        onChange={handleEditInput}
        variant="outlined"
        autoFocus={true}
      />
      <Button onClick={handleSubmitEdit} variant="contained">
        Contained
      </Button>
    </div>
  );
};

export default InputField;
