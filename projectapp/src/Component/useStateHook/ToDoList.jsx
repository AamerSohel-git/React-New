import React, { useState } from "react";

const ToDoList = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [copytodos, setCopyTodos] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const handleAddtask = () => {
    if (isUpdate) {
      const editedTask = todos.map((item, index) =>
        index === selectedId ? text : item
      );
      setTodos(editedTask);
      setCopyTodos(editedTask);
      setIsUpdate(false);
      setSelectedId(null);
    } else {
      if (text.trim() !== "") {
        setTodos([...todos, text]);
        setCopyTodos([...todos, text]);
      }
    }
    setText("");
  };
  const handleDeleteTask = (id) => {
    const remianingTask = todos.filter((item, index) => index !== id);
    setTodos(remianingTask);
    setCopyTodos(remianingTask);
  };
  const handleSearchTask = (searchText) => {
    const searchTasks = copytodos.filter((item) =>
      item.toUpperCase().includes(searchText.toUpperCase())
    );
    setTodos(searchTasks);
  };
  const handleEditTask = (val, id) => {
    setText(val);
    setSelectedId(id);
    setIsUpdate(true);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input
        placeholder="search"
        type="text"
        onChange={(e) => handleSearchTask(e.target.value)}
      />
      &nbsp;
      <input
        placeholder="Task"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      &nbsp;
      <button onClick={() => handleAddtask()}>
        {isUpdate ? "Edit" : "Add"} task
      </button>
      {todos.map((item, index) => {
        return (
          <li key={index}>
            {item}{" "}
            <button onClick={() => handleEditTask(item, index)}>Edit</button>
            &nbsp;
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        );
      })}
    </div>
  );
};

export default ToDoList;
