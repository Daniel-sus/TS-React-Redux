import React, { ReactChild } from "react";
import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";
import InputField from "./components/InputField";

function reducer(state, action) {
  if (action.type === "ADD_TASK") {
    return [
      ...state,
      {
        id: state.length + 1,
        text: action.inputValue,
        completed: action.completed,
      },
    ];
  }
  if (action.type === "SET_COMPLETED") {
    return state.map((task) =>
      task.id === action.id ? { ...task, completed: !task.completed } : task
    );
  }
  if (action.type === "DELETE_TASK") {
    return state.filter((task) => task.id !== action.id);
  }
  if (action.type === "MARK_ALL") {
    return state.map((task) => (task ? { ...task, completed: true } : null));
  }
  if (action.type === "DELETE_ALL") {
    return [];
  }
  if (action.type === "SUBMIT_EDIT") {
    return state.map((task) =>
      task.id === action.currentId ? { ...task, text: action.editInput } : task
    );
  }
  return state;
}

type ReducerArray = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [completed, setCompleted] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [editInfo, setEditInfo] = React.useState("");
  const [editInput, setEditInput] = React.useState();
  const [currentId, setCurrentId] = React.useState();

  const actualIdRef = React.useRef("");

  const [state, dispatch] = React.useReducer(reducer, [
    {
      id: 1,
      text: "Первая задача",
      completed: true,
    },
    {
      id: 2,
      text: "Вторая задача",
      completed: false,
    },
    {
      id: 3,
      text: "Третья задача",
      completed: true,
    },
    {
      id: 4,
      text: "Четвертая задача",
      completed: true,
    },
  ]);

  const addTask = () => {
    dispatch({
      type: "ADD_TASK",
      inputValue,
      completed,
    });
    setInputValue("");
    setCompleted(false);
  };

  const changeChecked = (id) => {
    dispatch({
      type: "SET_COMPLETED",
      id: id,
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      id: id,
    });
  };

  const markAll = () => {
    dispatch({
      type: "MARK_ALL",
    });
  };

  const deleteAll = () => {
    dispatch({
      type: "DELETE_ALL",
    });
  };

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleChangeCheckbox = (event) => {
    setCompleted(event.target.checked);
  };

  const handleOpenModal = (id, text) => {
    console.log(id, text, 555);
    if (id === currentId) {
      setIsModalOpen(!isModalOpen);
    } else {
      setCurrentId(id);
      setEditInput(text);
      setIsModalOpen(true);
      console.log(id, text, 333);
    }

    setEditInfo(`${id} ${text}`);

    if (currentId === actualIdRef.current) {
      console.log(actualIdRef);
      setIsModalOpen(!isModalOpen);
    }
    if (isModalOpen) {
    } else {
      setIsModalOpen(!isModalOpen);
    }

    setEditInput(currentText);
  };

  const handleEditInput = (event) => {
    setEditInput(event.target.value);
  };

  const handleSubmitEdit = () => {
    dispatch({
      type: "SUBMIT_EDIT",
      editInput,
      currentId,
    });
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        {isModalOpen && (
          <InputField
            editInput={editInput}
            handleEditInput={handleEditInput}
            editInfo={editInfo}
            handleSubmitEdit={handleSubmitEdit}
          />
        )}
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField
          handleChangeCheckbox={handleChangeCheckbox}
          handleChangeInput={handleChangeInput}
          inputValue={inputValue}
          addTask={addTask}
          completed={completed}
        />
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {state.map((note) => (
            <Item
              changeChecked={changeChecked}
              key={note.id}
              id={note.id}
              text={note.text}
              completed={note.completed}
              deleteTask={deleteTask}
              handleChangeCheckbox={handleChangeCheckbox}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button onClick={markAll}>Отметить всё</Button>
          <Button onClick={deleteAll}>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
