import React from "react";
import { IconButton, Checkbox, ListItem, Typography } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const Item = ({
  handleOpenModal,
  changeChecked,
  text,
  completed,
  id,
  deleteTask,
}) => {
  return (
    <ListItem>
      <div className="d-flex item">
        <Checkbox
          checked={completed}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
          onChange={() => changeChecked(id)}
        />
        <div>{id}</div>
        <Typography className="item-text">{text}</Typography>
        <div className="item-buttons d-flex">
          <IconButton onClick={() => handleOpenModal(id, text)}>
            <EditIcon style={{ fontSize: 20 }} />
          </IconButton>
          <IconButton onClick={() => deleteTask(id)}>
            <DeleteOutlineIcon style={{ fontSize: 20 }} />
          </IconButton>
        </div>
      </div>
    </ListItem>
  );
};
