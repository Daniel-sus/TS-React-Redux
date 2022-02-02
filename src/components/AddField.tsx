import { TextField, Button, Checkbox } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const AddField = ({
  handleChangeCheckbox,
  inputValue,
  addTask,
  handleChangeInput,
  completed,
}) => {
  return (
    <div className="field">
      <Checkbox
        onChange={handleChangeCheckbox}
        className="checkbox"
        checked={completed}
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <TextField
        value={inputValue}
        onChange={handleChangeInput}
        placeholder="Введите текст задачи..."
        variant="standard"
        fullWidth
      />
      <Button onClick={addTask}>
        <AddIcon />
      </Button>
    </div>
  );
};
