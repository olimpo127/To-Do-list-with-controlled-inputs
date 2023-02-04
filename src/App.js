import React, { useState } from "react";

function ToDoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: "center", margin: "100px", marginLeft: "200px", marginRight: "200px", borderStyle: "solid" }}>
      <h1>To Do App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={handleChange}
        />
      </form>
      <div>
        {tasks.length > 0 ? (
          tasks.map((t, index) => (
            <div key={index} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid black", padding: "10px" }}>
              <p>{t}</p>
              <button onClick={() => handleDelete(index)}>X</button>
            </div>
          ))
        ) : (
          <p>No tasks, add a task</p>
        )}
      </div>
      <p>{tasks.length} item{tasks.length === 1 ? "" : "s"} left</p>
    </div>
  );
}

export default ToDoApp;
